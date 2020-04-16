<?php

namespace app\zhouzhou\controller;

use think\Controller;

/**
 * 粥粥 just for you
 * [博客展示]
 */
class Diary extends Controller
{
    public function initialize()
    {
        //后续使用session区分
    }

    public function index()
    {
        $list = model('Admin/LoverDiary')->alias('d')
            ->leftJoin('image i','d.image_id = i.id')
            ->field(['d.id','d.content','d.date','i.url_link as link'])
            ->order('d.date','d.id')->select();
        $this->assign('list', $list);
        return $this->fetch();
    }
}
