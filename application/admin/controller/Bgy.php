<?php

namespace app\admin\controller;

use app\common\controller\Admin;
use think\Request;

/**
 * Class Lover
 * @package app\admin\controller
 */
class Bgy extends Admin
{
    //设置一级菜单id
    protected $TOP_MENU = 2;

    //首页 ---start
    public function index()
    {
        $list = model('Bgy')->select();
        $this->assign('list', $list);
        return $this->fetch();
    }

    //新增页面
    public function create()
    {
        return $this->fetch();
    }

    //新增保存界面
    public function additions(Request $request)
    {
        $data = $request->post();
        return model('Bgy')->additions($data);
    }

    //修改界面
    public function update(Request $request)
    {
        $id = $request->param('id', 0, 'intval');
        if ($id == 0) {
            $this->error('数据不存在');
        }
        $detail = model('Bgy')->where(['id' => $id])->find();
        $this->assign('detail', $detail);
        return $this->fetch();
    }

    // 修改保存
    public function edit(Request $request)
    {
        $data = $request->post();
        return model('Bgy')->edit($data);
    }

    // 删除
    public function del(Request $request)
    {
        $id = $request->post('id', 0, 'intval');
        return model('Bgy')->del($id);
    }

}