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
    public function initialize()
    {
        //判断用户是否登录--已经登录跳转到后台首页(禁止未退出后重新登录)
        if(session('admin_id')){
            $this->redirect('index/index');
        }
    }

    //管理员登录界面
    public function index()
    {
        return $this->fetch();
    }

    //用户登录
    public function login(Request $request)
    {
        $account = $request->post('account', '', 'htmlspecialchars');
        $password = $request->post('password', '', 'htmlspecialchars');
        $result = model('Admin')->login($account, $password);
        //用户登录成功则添加跳转地址
        if ($result['code'] == 1) {
            $result['link'] = url('index/index');
        }
        return json($result);
    }

    //用户退出登录
    public function logout()
    {
        session_destroy();

        //删除session的几种方式

        //unset($_SESSION['XXX']); 使用 unset() 函数时，只能销毁 Session 中单一变量，不可以一次注销整个数组，这样会禁止整个会话的功能，
        //如 unset($_SESSION) 函数会将全局变量 $_SESSION 销毁，而且没有办法将其恢复，用户也不能再注册 $_SESSION 变量。

        //使用 $_SESSION = array() 清空 $_SESSION 数组的同时，也将这个用户在服务器端对应的 Session 文件内容清空
        //$_SESSION = array() 清空 $_SESSION 数组的同时，也将这个用户在服务器端对应的 Session 文件内容清空，并不删除文件

        //session_unset() 函数并不注销 session 变量,但把所有的 session 变量的值清空。
        //释放当前在内存中已经创建的所有$_SESSION变量，但是不删除session文件以及不释放对应的session id；
        //session_destroy()：删除当前用户对应的session文件以及释放session id，内存中$_SESSION变量内容依然保留；
        //session_start() 函数用来创建 Session 文件，而 session_destroy() 函数用来关闭 Session 的运作并删除 Session 文件，
        //成功则返回 TURE，失败则返回 FALSE。但该函数并不会释放和当前 Session 相关的变量，
        //也不会删除保存在客户端 Cookie 中的 Session ID 。session_destroy() 函数，会将这个用户在服务器端对应的 Session 文件删除。

        //php中默认的 Session 是基于 Cookie 的，Session ID 被服务器存储在用户浏览器的 Cookie 中，
        //所以在注销 Session 时也需要清除 Cookie 中保存的 Session ID，而这就必须借助 setcookie() 函数来完成。

        //在用户浏览器的 Cookie 中，保存 Session ID 的 Cookie 标识名称就是 Session 的名称，
        //这个名称是在 php.ini 中，通过 session.name 属性指定的值。在php脚本中，可以通过 session_name() 函数获取 Session 的名称。
        // 删除保存在客户端 Cookie 中的 Session ID。
    }
}
