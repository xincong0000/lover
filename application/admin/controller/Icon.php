<?php

namespace app\admin\controller;

use app\common\controller\Admin;
use think\Request;

class Icon extends Admin
{
    //列表页面
    public function index(Request $request)
    {
        $where = $request->get();;// 暂定查询时使用的条件
        $list = model('Icon')->getList($where);
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
        return model('Icon')->additions($data);
    }

    //修改界面
    public function update(Request $request)
    {
        $id = $request->param('id', 0, 'intval');
        if ($id == 0) {
            $this->error('图标数据不存在');
        }
        $detail = model('Icon')->where(['id' => $id])->find();
        $this->assign('detail', $detail);
        return $this->fetch();
    }

    // 修改保存
    public function edit(Request $request)
    {
        $data = $request->post();
        return model('Icon')->edit($data);
    }

    // 删除
    public function del(Request $request)
    {
        $id = $request->post('id', 0, 'intval');
        return model('Icon')->del($id);
    }
}
