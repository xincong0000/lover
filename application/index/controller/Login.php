<?php

namespace app\index\controller;

//use app\common\controller\Index as Cindex;
class Login extends Cindex
{
    /**
     * default login (I don't need users,just for you)
     */
    public function index()
    {
        return $this->fetch();
    }

    public function checkLogin()
    {

    }
}
