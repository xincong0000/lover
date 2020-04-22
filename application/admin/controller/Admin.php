<?php

namespace app\admin\controller;

use app\common\controller\Admin as Cadmin;
use think\Request;

class Admin extends Cadmin
{
    /**
     * 管理员列表
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        $where = $request->get();
        $model = model('Admin');
        $list = $model->getList($where);
        $typeList = $model->getTypeList();
        foreach ($list as $key => $value) {
            $list[$key]['type'] = $typeList[$value['type']];
        }
        $this->assign('list', $list);
        return $this->fetch();
    }

    /**
     * 添加管理员界面
     */
    public function create()
    {
        return $this->fetch();
    }

    /**
     * 新增管理员保存界面
     * @param Request $request
     * @return view
     */
    public function additions(Request $request)
    {
        $data = $request->post();
        return model('Admin')->additions($data);
    }

    //修改界面
    public function update(Request $request)
    {
        $id = $request->param('id', 0, 'intval');
        if ($id == 0) {
            $this->error('管理员数据不存在');
        }
        $detail = model('Admin')->where(['id' => $id])->find();
        $this->assign('detail', $detail);
        return $this->fetch();
    }

    // 修改保存
    public function edit(Request $request)
    {
        $data = $request->post();
        return model('Admin')->edit($data);
    }

    // 删除
    public function del(Request $request)
    {
        $id = $request->post('id', 0, 'intval');
        return model('Admin')->del($id);
    }
}
