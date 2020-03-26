<?php

namespace app\common\controller;

use think\Controller;
use think\facade\Env;

/**
 * 清理缓存(TP)
 * Class Clearcache
 * @package app\common\controller
 */
class Clearcache extends Controller
{
    public function index()
    {
        $c = Env::get('ROOT_PATH');
        $this->delDir($c . 'runtime',true);
        return 'success';
    }

    /**
     * 删除文件夹
     * @param string|array $path [文件夹路径(数组)]
     * @param bool $delRoot [删除类型，true：连同文件夹一起删除, false：仅删除文件]
     * @return bool
     */
    public function delDir($path, $delRoot = FALSE)
    {
        //判断传入的路径是否是一个数组(考虑多个文件夹)，如果是，循环递归调用当前函数
        if (is_array($path)) {
            foreach ($path as $val) {
                $this->delDir($val, $delRoot);
            }
        }
        //判断传入路径是否是一个文件夹，如果是打开文件夹; 否者如果当前文件存在，删除当前文件，不存在则返回false
        if (is_dir($path)) {
            $handle = opendir($path);
            // 能够读取数据时读取当前文件夹内容
            while (($item = readdir($handle)) !== false) {
                // .和..分别代表当前目录和上级目录，并非真实文件，遇到时直接跳出当前循环
                if ($item == "." || $item == ".."){
                    continue;
                }
                // 如果是文件夹，递归调用当前函数，否者删除文件
                if(is_dir("$path/$item")){
                    $this->delDir("$path/$item", $delRoot);
                }else{
                    unlink("$path/$item");
                }
            }
            //关闭文件夹(释放资源);
            closedir($handle);
            // 如果$delRoot不等于false, 则删除文件夹
            if ($delRoot !== false) {
                return rmdir($path);
            }
        } else {
            // 如果当前文件存在，删除当前文件，不存在则返回false
            if (file_exists($path)) {
                return unlink($path);
            } else {
                return false;
            }
        }
    }
}
