<?php

namespace app\admin\controller;

use app\common\controller\Admin;

class Menu extends Admin
{
    public function index()
    {
        $model = model('Menu');
        $list = $model->select();
        $this->assign('list', []);
        return $this->fetch();
    }

    public function create()
    {
        return $this->fetch();
    }

}
