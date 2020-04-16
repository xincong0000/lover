<?php

namespace app\admin\controller;

use app\common\controller\Admin;
use think\Request;

/**
 * Class Lover
 * @package app\admin\controller
 * 粥粥
 */
class Lover extends Admin
{
    protected $TOP_MENU = 2;

    public function index()
    {
        return $this->fetch();
    }

    //首页 ---start
    public function home()
    {
        $list = model('LoverHome')->order(['type', 'sort', 'id'])->select();
        foreach ($list as $key => $value) {
            $list[$key]['type_name'] = $value['type'] == 1 ? '头部' : '尾部';
        }
        $this->assign('list', $list);
        return $this->fetch();
    }

    //新增页面
    public function home_create()
    {
        return $this->fetch();
    }

    //新增保存界面
    public function home_additions(Request $request)
    {
        $data = $request->post();
        return model('LoverHome')->additions($data);
    }

    //修改界面
    public function home_update(Request $request)
    {
        $id = $request->param('id', 0, 'intval');
        if ($id == 0) {
            $this->error('数据不存在');
        }
        $detail = model('LoverHome')->where(['id' => $id])->find();
        $this->assign('detail', $detail);
        return $this->fetch();
    }

    // 修改保存
    public function home_edit(Request $request)
    {
        $data = $request->post();
        return model('LoverHome')->edit($data);
    }

    // 删除
    public function home_del(Request $request)
    {
        $id = $request->post('id', 0, 'intval');
        return model('LoverHome')->del($id);
    }
    //首页 ---end

    //日记 ---start
    public function diary()
    {
        $pageConfig = [
            'type' => 'Adminpage', //分页类名
            'var_page' => 'page',
            // 'query' => ['keyword' => $keyword], // url额外参数
        ];
        $list = model('LoverDiary')->alias('d')
            ->leftJoin('image i','d.image_id = i.id')
            ->field(['d.id','d.content','d.date','i.url_link as link'])
            ->order([ 'd.date','d.id'])->paginate(10, false, $pageConfig);
        $this->assign('list', $list);
        return $this->fetch();
    }

    //新增页面
    public function diary_create()
    {
        return $this->fetch();
    }

    //新增保存界面
    public function diary_additions(Request $request)
    {
        $data = $request->post();
        return model('LoverDiary')->additions($data);
    }

    //修改界面
    public function diary_update(Request $request)
    {
        $id = $request->param('id', 0, 'intval');
        if ($id == 0) {
            $this->error('图标数据不存在');
        }
//        $detail = model('Icon')->where(['id' => $id])->find();

        $detail = model('LoverDiary')->alias('d')->where(['d.id' => $id])
            ->leftJoin('image i','d.image_id = i.id')
            ->field(['d.id','d.content','d.date','i.url_link as link','d.image_id'])
            ->find();
        $this->assign('detail', $detail);
        return $this->fetch();
    }

    // 修改保存
    public function diary_edit(Request $request)
    {
        $data = $request->post();
        return model('LoverDiary')->edit($data);
    }

    // 删除
    public function diary_del(Request $request)
    {
        $id = $request->post('id', 0, 'intval');
        return model('LoverDiary')->del($id);
    }
    //日记 ---end
}
