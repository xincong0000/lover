<?php

namespace app\admin\model;

use think\Model;

class LoverDiary extends Model
{

    public function additions($data)
    {
        $result = $this->insert($data);
        if (!$result) {
            return ['code' => 2, 'msg' => '新增失败'];
        }
        return ['code' => 1, 'msg' => '新增成功', 'link' => url('index')];
    }

    // 修改
    public function edit($data)
    {
        $result = $this->where(['id' => $data['id']])->update($data);
        if (!$result) {
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
