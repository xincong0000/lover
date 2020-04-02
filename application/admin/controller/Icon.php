<?php

namespace app\admin\controller;

use app\common\controller\Admin;

class Icon extends Admin
{
    public function index()
    {
        $this->assign('list', []);
        return $this->fetch();
    }
}
