<?php

namespace app\index\controller;

use app\common\controller\Index as Cindex;
class Index extends Cindex
{
    /**
     * default login (I don't need users,just for you)
     */
    public function index()
    {
//        $this->fetch();
        $a = 6;
        if($a>3){
            echo 1;
        }elseif ($a>5){
            echo 2;
        }else{
            echo 3;
        }
    }
}
