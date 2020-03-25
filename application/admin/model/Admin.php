<?php

namespace app\admin\model;

use think\Model;

class Admin extends Model
{
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
        if (!session('admin_id')) {
            return ['code' => 2, 'msg' => 'Server failure'];
        }
        return ['code' => 1, 'msg' => 'Login successfully'];
    }
}
