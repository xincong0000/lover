<?php

namespace app\admin\controller;

use app\common\controller\Admin as Cadmin;

class Admin extends Cadmin
{
    public function index()
    {
        $model = model('Admin');
        $list = $model->select();
        $typeList = $model->getTypeList();
        foreach ($list as $key => $value) {
            $list[$key]['type'] = $typeList[$value['type']];
        }
        $this->assign('list', $list);
        return $this->fetch();
    }

    public function create()
    {
        return $this->fetch();
    }

}
