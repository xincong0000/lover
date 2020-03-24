<?php

namespace app\home\controller;

use app\common\controller\Home;

class Index extends Home
{
    //home 模块首页
    public function index()
    {
        return $this->fetch();
    }
}
