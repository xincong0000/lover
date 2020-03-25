<?php

namespace app\common\model;

use think\Model;

class Menu extends Model
{
    private static $STATUS = [
        1 => '正常',
        2 => '禁用',
        3 => '标记',//对于一级菜单的删除需要提前进行标记，类似于预约删除
        4 => '删除',
    ];

    //获取菜单列表()
    public function getSideMenu($menuID = 1)
    {
        //获取侧边菜单列表(根据头部选择的一级菜单进行查询，默认为1)
        $sideList = $this->where(['level' => 2, 'status' => 1, 'pid' => $menuID])->order('id asc')->select();
        // 查询三级菜单
        foreach ($sideList as $key => $val) {
            $sideList[$key]['list'] = $this->where(['level' => 3, 'status' => 1, 'pid' => $val['id']])->order('id asc')->select();
        }
        return $sideList;
    }

    public function getTopMenu()
    {
        //获取头部菜单列表
        return $this->where(['level' => 1, 'status' => 1])->order('id asc')->select();
    }
}
