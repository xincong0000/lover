<?php

namespace app\index\controller;

use app\common\controller\Index as Cindex;

class Index extends Cindex
{
    public function index()
    {
//        $topList = model('LoverHome')->where(['type' => 1])->field(['content', 'id'])->order(['sort', 'id'])->select();
//        $footerList = model('LoverHome')->where(['type' => 2])->field(['content', 'id'])->order(['sort', 'id'])->select();
//        $this->assign('topList', $topList);
//        $this->assign('footerList', $footerList);
        return $this->fetch();
    }
}
