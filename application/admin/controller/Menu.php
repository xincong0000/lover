<?php

namespace app\admin\controller;

use app\common\controller\Admin;
use think\Request;

/**
 * Class Menu
 * @package app\admin\controller
 * 菜单管理 
 */
class Menu extends Admin
{
    public function index(Request $request)
    {
        $model = model('Menu');
        $where = [];
        $list = $model->getList($where);
        $this->assign('list', $list);
        return $this->fetch();
    }

    public function create()
    {
        return $this->fetch();
    }
    //新增保存
    public function additions(Request $request)
    {
        $data = $request->post();
        return model('Menu')->additions($data);
    }

    //修改界面
    public function update(Request $request)
    {
        $id = $request->param('id', 0, 'intval');
        if ($id == 0) {
            $this->error('菜单数据不存在');
        }
        $detail = model('Menu')->where(['id' => $id])->find();
        $this->assign('detail', $detail);
        return $this->fetch();
    }

    // 修改保存
    public function edit(Request $request)
    {
        $data = $request->post();
        return model('Menu')->edit($data);
    }

    // 删除
    public function del(Request $request)
    {
        $id = $request->post('id', 0, 'intval');
        return model('Menu')->del($id);
    }
}
