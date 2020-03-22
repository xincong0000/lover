<?php

namespace app\common\controller;

use think\Controller;

/**
 * Class Index
 * @package app\common\controller
 * Index模块的控制器基类
 */
class Index extends Controller
{
    public function initialize()
    {
        // $uid = session('uid');
        // //验证用户是否登录
        // if (!isset($uid)) {
        //     $this->redirect('Index/login/index');
        // }
    }
}
