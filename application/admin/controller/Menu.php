<?php

namespace app\admin\controller;

use app\common\controller\Admin;
use think\Request;

class Menu extends Admin
{
    public function index(Request $request)
    {
        $menu_id = $request->get('menu_id', 1, 'intval');
        $model = model('Menu');
        // 获取二级菜单列表
        $list = $model->where(['level' => 2, 'pid' => $menu_id])->select();
        $this->assign('menu_id', $menu_id);
        $this->assign('list', $list);
        return $this->fetch();
    }

    public function create()
    {
        return $this->fetch();
    }
}
