<?php

namespace app\admin\controller;

use think\Controller;
use think\Request;

/**
 * Class Login 管理员登录--后台系统必须登录
 * @package app\admin\controller
 */
class Login extends Controller
{
    //管理员登录界面
    public function index()
    {
        return $this->fetch();
    }

    //用户登录
    public function login(Request $request)
    {
        $data = $request->post();
        dump($data);
    }

    //用户退出登录
    public function logout()
    {
    }
}
