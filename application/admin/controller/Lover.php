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
    protected $TOP_MENU = 2;

    public function index()
    {
        return $this->fetch();
    }

    //首页 ---start
    public function home()
    {
        $list = model('LoverHome')->order(['type', 'sort', 'id'])->select();
        foreach ($list as $key => $value) {
            $list[$key]['type_name'] = $value['type'] == 1 ? '头部' : '尾部';
        }
        $this->assign('list', $list);
        return $this->fetch();
    }

    //新增页面
    public function home_create()
    {
        return $this->fetch();
    }

    //新增保存界面
    public function home_additions(Request $request)
    {
        $data = $request->post();
        return model('LoverHome')->additions($data);
    }

    //修改界面
    public function home_update(Request $request)
    {
        $id = $request->param('id', 0, 'intval');
        if ($id == 0) {
            $this->error('数据不存在');
        }
        $detail = model('LoverHome')->where(['id' => $id])->find();
        $this->assign('detail', $detail);
        return $this->fetch();
    }

    // 修改保存
    public function home_edit(Request $request)
    {
        $data = $request->post();
        return model('LoverHome')->edit($data);
    }

    // 删除
    public function home_del(Request $request)
    {
        $id = $request->post('id', 0, 'intval');
        return model('LoverHome')->del($id);
    }
    //首页 ---end

    //日记 ---start
    public function diary()
    {
        echo 'content';
    }
    //日记 ---end
}
