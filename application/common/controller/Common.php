<?php

namespace app\common\controller;

use think\Controller;
use think\facade\Env;

class Common extends Controller
{
    public function initialize()
    {
    }

    //获取模块下所有的控制器和方法
    public function structure()
    {
        $modules = array('admin', 'index');  //模块名称
        $data = [];
        foreach ($modules as $module) {
            $all_controller = $this->getController($module);
            foreach ($all_controller as $key => $controller) {
                $all_action = $this->getAction($module, $controller);
                $controller = str_replace('Controller', '', $controller);
                $data[$module][$key]['module'] = $module;
                $data[$module][$key]['controller'] = $controller;
                $data[$module][$key]['action'] = $all_action;
            }
        }
        return $data;
    }


    //获取所有控制器名称
    private function getController($module)
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
            $basisFunction = [
                '_initialize', 'initialize', '__construct',
                'getActionName', 'isAjax', 'display', 'show',
                'fetch', 'buildHtml', 'assign', '__set', 'get',
                '__get', '__isset', '__call', 'error', 'success',
                'ajaxReturn', 'redirect', '__destruct', '_empty'
            ];
            foreach ($functions as $func) {
                $func = trim($func);
                if (!in_array($func, $basisFunction)) {
                    $customer_functions[] = $func;
                }
            }
            return $customer_functions;
        } else {
            return false;
        }
        return null;
    }
}
