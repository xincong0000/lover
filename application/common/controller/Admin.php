<?php

namespace app\common\controller;

use think\Controller;
use think\facade\Env;
use think\facade\Request;
use think\Request as ReqT;

//use app\common\controller\Clearcache;

class Admin extends Controller
{
    protected $TOP_MENU = 1;

    public function initialize()
    {
        //判断用户是否登录
        if (!session('admin_id')) {
            $this->redirect('login/index');
        }
        //菜单 ---- 开始
        $model = model('common/Menu');
        $this->assign('top_menu', $model->getTopMenu());
        $this->assign('side_menu', $model->getSideMenu($this->TOP_MENU));
        $this->assign('link_path', $this->link());
        $this->assign('admin_name', session('admin_name'));
        //菜单 ---- 结束
    }

    //清除缓存
    public function clearCache()
    {
        $clearCache = new Clearcache();
        $clearCache->index();
        return json(['code' => 1, 'msg' => '缓存已清理']);
    }

    //空操作直接跳转到index模块
    public function _empty()
    {
        $this->redirect('index');
    }

    // 获取当前路径
    public function link()
    {
        $request = new Request();
        $module = $request->instance()->module();
        $controller = $request->instance()->controller();
        $action = $request->instance()->action();
        return '/' . $module . '/' . $controller . '/' . $action;
    }


    /**
     * 上传图片
     * @param Request $request
     * @return Json
     */
    public function uploadImg(ReqT $request)
    {
        $domainName = $request->domain();
        $result = model('Upload')->img($_FILES['file'], $domainName);
        return json($result);
    }
}
