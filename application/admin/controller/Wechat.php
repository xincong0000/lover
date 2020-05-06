<?php
namespace app\admin\controller;

use app\common\controller\Admin;

/**
 * 微信公众号
 */

class Wechat extends Admin
{
    // 暂时将调用参数写死
    const APPID = 'wx6de2329718c58d57'; 
    const APPSECRET = 'f30459e34819c562181999ee88facb95';
    const TOKEN = 'weixin';
    public function index(){
        echo self::APPID.'<hr>';
        echo self::APPSECRET.'<hr>';
        echo self::TOKEN;
    }

    /**
     * 开发者通过检验signature对请求进行校验。
     * 若确认此次GET请求来自微信服务器，请原样返回echostr参数内容，则接入生效，成为开发者成功，否则接入失败。
     */
    public function access()
    {
        $echoStr = $_GET["echostr"];
        if ($this->checkSignature()) { //检查签名是否一致
            return $echoStr; //验证成功后，输出
            exit;
        }
    }
    private function checkSignature()
    {
        $signature = $_GET["signature"];
        $timestamp = $_GET["timestamp"];
        $nonce = $_GET["nonce"];

        $token = self::TOKEN;
        $tmpArr = array($token, $timestamp, $nonce);
        sort($tmpArr, SORT_STRING);
        $tmpStr = implode($tmpArr);
        $tmpStr = sha1($tmpStr);

        if ($tmpStr == $signature) {
            return true;
        } else {
            return false;
        }
    }
}
