<?php

namespace app\admin\model;

use think\Model;

class Admin extends Model
{
    //管理员角色类型1
    protected static $TYPE = [
        1 => '系统管理员',
        2 => '管理员',
        3 => '监察人员',
        4 => '公关人员',
        5 => '商务人员',
    ];

    //获取管理员角色类型列表
    public function getTypeList()
    {
        return self::$TYPE;
    }

    //获取管理员角色类型名称
    public function getTypeName($id = '')
    {
        return isset(self::$TYPE[$id]) ? self::$TYPE[$id] : '';
    }

    public function login($account, $password)
    {
        if (empty($account) || empty($password)) {
            return ['code' => 2, 'msg' => 'Account or password cannot be empty'];
        }
        $result = $this->where(['account' => $account])->find();
        if (!$result) {
            return ['code' => 2, 'msg' => 'user Does Not Exist'];
        }
        if ($password != $result['password']) {
            return ['code' => 2, 'msg' => 'Password Error'];
        }
        session('admin_id', $result['id']);
        session('admin_name', $result['name']);
        if (!session('admin_id')) {
            return ['code' => 2, 'msg' => 'Server failure'];
        }
        return ['code' => 1, 'msg' => 'Login successfully'];
    }
}
