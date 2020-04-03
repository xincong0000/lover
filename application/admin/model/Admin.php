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
            return ['code' => 2, 'msg' => '账号或者密码不得为空'];
        }
        $result = $this->where(['account' => $account])->find();
        if (!$result) {
            return ['code' => 2, 'msg' => '用户不存在'];
        }
        if ($password != $result['password']) {
            return ['code' => 2, 'msg' => '密码错误'];
        }
        session('admin_id', $result['id']);
        session('admin_name', $result['name']);
        if (!session('admin_id') || !session('admin_name')) {
            return ['code' => 2, 'msg' => '服务器运行出错'];
        }
        return ['code' => 1, 'msg' => '登录成功'];
    }
}
