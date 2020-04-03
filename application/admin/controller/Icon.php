<?php

namespace app\admin\controller;

use app\common\controller\Admin;

class Icon extends Admin
{
    public function index()
    {
        $pageConfig = [
            'type' => 'Adminpage', //分页类名
            'var_page' => 'page',
            // 'query' => ['keyword' => $keyword], // url额外参数
        ];
        $model = model('Icon');
        $list = $model->paginate(10, false, $pageConfig);
        foreach ($list as $key => $value) {
            $list[$key]['type_name'] = $value['type'] == 1 ? '内置图标' : '普通图标';
        }
        $this->assign('list', $list);
        return $this->fetch();
    }
}
