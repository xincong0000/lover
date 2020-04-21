<?php

namespace app\test\controller;

use think\Controller;

class Index extends Controller
{
    //home 模块首页
    public function index()
    {
        $a = session('arr',['a'=>1,'b'=>52,'c'=>'125sd']);
        dump(session('arr'));
        session('arr.a','success');
        dump(session('arr'));
        session('arr',null);

    }
}
