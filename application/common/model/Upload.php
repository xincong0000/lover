<?php

namespace app\common\model;


use think\exception\DbException;
use think\Model;
use think\db;

class Upload extends Model
{
    //图片类型
    private $imgType = ['jpeg', 'png', 'jpg', 'gif'];

    /**
     * @param $data array [图片信息]
     * @param $domainName array [域名]
     * @return array [处理结果]
     * @throws DbException
     * @throws db\exception\DataNotFoundException
     * @throws db\exception\ModelNotFoundException
     */
    public function img($data, $domainName)
    {
        //获取图片类型
        $imageType = (explode('.', $data['name']))[1];
        if (!in_array($imageType, $this->imgType)) {
            return ['code' => 2, 'msg' => '图片类型错误'];
        }
        //获取文件hash值（秒传与防止文件重复）
        $hash = hash_file('sha1', $data['tmp_name']);
        $result1 = Db::name('image')->where(['hash' => $hash])->find();
        if ($result1) {
            return ['code' => 1, 'msg' => '文件已经存在','id' => $result1['id'],'link' => $result1['url_link']];
        }
        //图片路径
        $newName = time() . $data['name'];
        $path = './upload/image/' . $newName;
        $urlLink = $domainName . '/upload/image/' . $newName;
        $result2 = move_uploaded_file($data['tmp_name'], $path);
        if (!$result2) {
            return ['code' => 2, 'msg' => '上传失败'];
        }
        $imgInfo = [
            'name' => $data['name'],
            'hash' => $hash,
            'path' => $path,
            'url_link' => $urlLink,
        ];
        $log = Db::name('image')->insert($imgInfo);
        $id = Db::name('image')->getLastInsID();
        if (!$log) {
            //日志写入失败，删除文件，防止文件重复
            unlink($path);
            return ['code' => 2, 'msg' => '数据库写入失败'];
        }
        return ['code' => 1, 'msg' => '上传成功', 'id' => $id,'link' => $urlLink];
    }

}
