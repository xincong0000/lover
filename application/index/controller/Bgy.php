<?php

namespace app\index\controller;

use app\common\controller\Index as Cindex;

class Bgy extends Cindex
{
    public function index()
    {
        return $this->fetch();
    }
}
