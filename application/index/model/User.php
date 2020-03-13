<?php

namespace app\index\model;

use think\Model;

class User extends Model
{
    public function login($account, $password)
    {
        if (empty($account) || empty($password)) {
            return ['code' => 2, 'msg' => '账号或者密码不得为空'];
        }
        if (intval($password) == 0) {
            return ['code' => 2, 'msg' => '密码格式不正确'];
        }
        $userInfo = $this->where(['account' => md5($account), 'name' => $account])->find();
        if (empty($userInfo)) {
            return ['code' => 2, 'msg' => '账号不存在'];
        }
        if ($userInfo['password'] != $password && $userInfo['password2'] != $password) {
            return ['code' => 2, 'msg' => '密码错误'];
        }
        session('uid', $userInfo['id']);
        return ['code' => 1, 'msg' => '登陆成功'];
    }

    /**
     * user表字段
     * id 用户id
     * account 账号(用户姓名md5加密后得到的字符串)
     * name 姓名
     * password 密码
     * password2 备用密码
     * last_time 上传登陆时间
     * update_time 修改时间
     * create_time 创建时间
     */
}
