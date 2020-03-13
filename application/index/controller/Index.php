<?php

namespace app\index\controller;

use app\common\controller\Index as Cindex;
class Index extends Cindex
{
    /**
     * just for you
     */
    public function index()
    {
        return $this->fetch();
    }
}
