<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

namespace think\facade;

use think\Facade;

/**
 * @see \think\Env
 * @mixin \think\Env
 * @method void load(string $file) static 读取环境变量定义文件
 * @method mixed get(string $name = null, mixed $default = null) static 获取环境变量值
 * @method void set(mixed $env, string $value = null) static 设置环境变量值
 */
class Env extends Facade
{
    /**
     * 获取当前Facade对应类名（或者已经绑定的容器对象标识）
     * @access protected
     * @return string
     */
    protected static function getFacadeClass()
    {
        return 'env';
    }
    /**
     * 系统路径         Env参数名称
     * 应用根目录	    root_path
     * 应用目录	        app_path
     * 框架目录	        think_path
     * 配置目录	        config_path
     * 扩展目录	        extend_path
     * composer目录	    vendor_path
     * 运行缓存目录	    runtime_path
     * 路由目录	        route_path
     * 当前模块目录	    module_path
    */
}
