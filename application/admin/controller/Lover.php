<?php

namespace app\admin\controller;

use app\common\controller\Admin;
use think\Request;

/**
 * Class Lover
 * @package app\admin\controller
 * 粥粥
 */
class Lover extends Admin
{
    protected $TOP_MENU = 2;

    public function index()
    {
        return $this->fetch();
    }

    //首页 ---start
    public function home()
    {
        echo 'home';
    }
    //首页 ---end

    //日记 ---start
    public function content()
    {
        echo 'content';
    }
    //日记 ---end
}
