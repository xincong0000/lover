<?php

namespace app\admin\model;

use think\facade\Env;
use think\Model;

class Menu extends Model
{
    //列表
    public function getList($where)
    {
        $condition = [];
        if (!empty($where)) {
            if (!empty($where['type'])) {
                $condition[] = ['type', '=', intval($where['type'])];
            }
            if (!empty($where['name'])) {
                $condition[] = ['name', 'like', '%' . $where['name'] . '%'];
            }
        }
        $pageConfig = [
            'type' => 'Adminpage', //分页类名
            'var_page' => 'page',
        ];
        return $this->where($condition)->order('id')->paginate(10, false, $pageConfig);
    }

    public function additions($data)
    {
        $result = $this->insert($data);
        if ($result === false) {
            return ['code' => 2, 'msg' => '新增失败'];
        }
        return ['code' => 1, 'msg' => '新增成功', 'link' => url('index')];
    }

    // 修改
    public function edit($data)
    {
        $result = $this->where(['id' => $data['id']])->update($data);
        if ($result === false) {
            return ['code' => 2, 'msg' => '修改失败'];
        }
        return ['code' => 1, 'msg' => '修改成功', 'link' => url('index')];
    }

    // 删除
    public function del($id)
    {
        $result = $this->where(['id' => $id])->delete();
        if (!$result) {
            return ['code' => 2, 'msg' => '删除失败'];
        }
        return ['code' => 1, 'msg' => '删除成功', 'link' => url('index')];
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
    public function getController($module = 'admin')
    {
        // if (empty($module)) {
        //     return null;
        // }
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
    public function getAction($module, $controller)
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
            $systemFunctions = array('_initialize', 'initialize', '__construct', 'getActionName', 'isAjax', 'display', 'show', 'fetch', 'buildHtml', 'assign', '__set', 'get', '__get', '__isset', '__call', 'error', 'success', 'ajaxReturn', 'redirect', '__destruct', '_empty');
            foreach ($functions as $func) {
                $func = trim($func);
                if (!in_array($func, $systemFunctions)) {
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
