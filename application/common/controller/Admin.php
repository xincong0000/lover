<?php

namespace app\common\controller;

use think\Controller;

class Admin extends Controller
{
    public function initialize()
    {
        //判断用户是否登录
        if(!session('user_id')){
            $this->redirect('login/index');
        }
    }

    //空操作直接跳转到index模块
    public function _empty()
    {
        $this->redirect('index');
    }
}
