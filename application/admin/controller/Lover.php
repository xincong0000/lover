<?php

namespace app\admin\controller;

use app\common\controller\Admin;
use think\Request;

/**
 * Class Lover
 * @package app\admin\controller
 * 粥粥
 */
class Lover extends Admin
{
    public function index()
    {
        dump(time());
    }

}
