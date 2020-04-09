<?php

namespace app\common\controller;

use think\Controller;
use think\facade\Env;
use think\facade\Request;
use think\Request as ReqT;

//use app\common\controller\Clearcache;

class Admin extends Controller
{
    protected $TOP_MENU = 1;

    public function initialize()
    {
        //判断用户是否登录
        if (!session('admin_id')) {
            $this->redirect('login/index');
        }
        //菜单 ---- 开始
        $model = model('common/Menu');
        $this->assign('top_menu', $model->getTopMenu());
        $this->assign('side_menu', $model->getSideMenu($this->TOP_MENU));
        $this->assign('link_path', $this->link());
        $this->assign('admin_name', session('admin_name'));
        //菜单 ---- 结束
    }

    //清除缓存
    public function clearCache()
    {
        $clearCache = new Clearcache();
        $clearCache->index();
        return json(['code' => 1, 'msg' => '缓存已清理']);
    }

    //空操作直接跳转到index模块
    public function _empty()
    {
        $this->redirect('index');
    }

    //获取模块下所有的控制器和方法
    public function structure($module = 'admin')
    {
        $all_controller = $this->getController($module);
        $data = [];
        foreach ($all_controller as $key => $controller) {
            $all_action = $this->getAction($module, $controller);
            $controller = str_replace('Controller', '', $controller);
            $data[$module][$key]['module'] = $module;
            $data[$module][$key]['controller'] = $controller;
            $data[$module][$key]['action'] = $all_action;
        }
        return $data;
    }

    //获取所有控制器名称
    private function getController($module = 'admin')
    {
        if (empty($module)) {
            return null;
        }
        $module_path = Env::get('APP_PATH') . '/' . $module . '/controller/';  //控制器路径
        if (!is_dir($module_path)) {
            return null;
        }
        $module_path .= '/*.php';
        $ary_files = glob($module_path);
        $files = [];
        foreach ($ary_files as $file) {
            if (is_dir($file)) {
                continue;
            } else {
                $files[] = basename($file, '.php');
            }
        }
        return $files;
    }

    //获取所有方法名称
    protected function getAction($module, $controller)
    {
        if (empty($controller) || empty($module)) {
            return null;
        }
        $customer_functions = [];
        $file = Env::get('APP_PATH') . $module . '/controller/' . $controller . '.php';
        if (file_exists($file)) {
            $content = file_get_contents($file);
            preg_match_all("/.*?public.*?function(.*?)\(.*?\)/i", $content, $matches);
            $functions = $matches[1];
            //排除部分方法 getActionName--不必要
            $inherents_functions = array('_initialize', 'initialize', '__construct', 'getActionName', 'isAjax', 'display', 'show', 'fetch', 'buildHtml', 'assign', '__set', 'get', '__get', '__isset', '__call', 'error', 'success', 'ajaxReturn', 'redirect', '__destruct', '_empty');
            foreach ($functions as $func) {
                $func = trim($func);
                if (!in_array($func, $inherents_functions)) {
                    $customer_functions[] = $func;
                }
            }
            return $customer_functions;
        } else {
            return false;
        }
        return null;
    }

    // 获取当前路径
    public function link()
    {
        $request = new Request();
        $module = $request->instance()->module();
        $controller = $request->instance()->controller();
        $action = $request->instance()->action();
        return '/' . $module . '/' . $controller . '/' . $action;
    }


    /**
     * 上传图片[未测试]
     * @param Request $request
     * @return Json
     */
    public function uploadImg(ReqT $request)
    {
        $domainName = $request->domain();
        $result = model('Upload')->img($_FILES['file'], $domainName);
        return json($result);
    }
}
