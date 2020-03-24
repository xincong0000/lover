<?php

namespace app\mobile\controller;

use app\common\controller\Index as Cindex;
class Index extends Cindex
{
    public function index()
    {
        return $this->fetch();
    }
}
