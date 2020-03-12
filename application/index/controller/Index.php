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
        $this->fetch();
    }
}
