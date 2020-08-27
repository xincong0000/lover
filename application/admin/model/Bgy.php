<?php

namespace app\admin\model;

use think\Model;

class Bgy extends Model
{
    public function additions($data)
    {
        $res = $this->where(['mobile' => $data['mobile']])->find();
        if ($res) {
            return ['code' => 2, 'msg' => '电话号码重复'];
        }
        $result = $this->insert($data);
        if ($result === false) {
            return ['code' => 2, 'msg' => '新增失败'];
        }
        return ['code' => 1, 'msg' => '新增成功', 'link' => url('index')];
    }

    // 修改
    public function edit($data)
    {
        $result = $this->where(['id' => $data['id']])->update($data);
        if ($result === false) {
            return ['code' => 2, 'msg' => '修改失败'];
        }
        return ['code' => 1, 'msg' => '修改成功', 'link' => url('index')];
    }

    // 删除
    public function del($id)
    {
        $result = $this->where(['id' => $id])->delete();
        if (!$result) {
            return ['code' => 2, 'msg' => '删除失败'];
        }
        return ['code' => 1, 'msg' => '删除成功', 'link' => url('index')];
    }
}
