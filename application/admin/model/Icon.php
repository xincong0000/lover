<?php

namespace app\admin\model;

use think\exception\DbException;
use think\Model;
use think\Paginator;

class Icon extends Model
{
    /**
     * 获取数据列表
     * @param array $where
     * @return Paginator
     * @throws DbException
     */
    public function getList($where)
    {
        $condition = [];
        if (!empty($where)) {
            if (!empty($where['type'])) {
                $condition[] = ['type', '=', intval($where['type'])];
            }
            if (!empty($where['name'])) {
                $condition[] = ['name', 'like', '%' . $where['name'] . '%'];
            }
        }
        $pageConfig = [
            'type' => 'Adminpage', //分页类名
            'var_page' => 'page',
        ];
        return $this->where($condition)->order('id desc')->paginate(15, false, $pageConfig);
    }

    /**
     * 添加图标数据
     * @param array $data [图标内容数组]
     * @return array [执行添加结果]
     */
    public function additions($data)
    {
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
        $type = $this->where(['id' => $id])->value('type');
        if ($type == 1) {
            return ['code' => 2, 'msg' => '系统内置图标不可删除']; //暂定，后续修正
        }
        $result = $this->where(['id' => $id])->delete();
        if (!$result) {
            return ['code' => 2, 'msg' => '删除失败'];
        }
        return ['code' => 1, 'msg' => '删除成功', 'link' => url('index')];
    }
}
