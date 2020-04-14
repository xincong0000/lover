<?php

namespace app\test\controller;

use think\Controller;

class Index extends Controller
{
    //home 模块首页
    public function index()
    {
        $a = [1,2,3];
//        $b =var_export($a,true);
        $b = json_encode($a);
        dump($b);
    }
}
