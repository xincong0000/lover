<?php

namespace app\common\controller;

use think\Controller;

/**
 * Class Home
 * @package app\common\controller
 * Home模块的控制器基类
 */
class Home extends Controller
{
    public function initialize()
    {
    }


    public function _empty()
    {
        $this->redirect('index');
    }
}
