<?php

namespace app\common\controller;

use think\Controller;

class Admin extends Controller
{
    public function initialize()
    {
        //判断用户是否登录
        if(!session('admin_id')){
            $this->redirect('login/index');
        }
    }

    //空操作直接跳转到index模块
    public function _empty()
    {
        $this->redirect('index');
    }

    //获取admin目录下的所有控制器名称


}
