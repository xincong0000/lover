<?php

namespace app\zhouzhou\controller;

use think\Controller;

class Index extends Controller
{
    /**
     * 粥粥
     * just for you
     */
    public function index()
    {
        $topList = model('LoverHome')->where(['type' => 1])->field(['content', 'id'])->order(['sort', 'id'])->select();
        $footerList = model('LoverHome')->where(['type' => 2])->field(['content', 'id'])->order(['sort', 'id'])->select();
        $this->assign('topList', $topList);
        $this->assign('footerList', $footerList);
        return $this->fetch();
    }
}
