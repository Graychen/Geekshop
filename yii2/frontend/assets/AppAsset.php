<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace frontend\assets;

use yii\web\AssetBundle;

/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/style-base.css',
        'css/style-index.css',
        'css/_all.css',
        'css/style-proj.css',
        'css/jquery.fancybox-1.3.4.css',
        'css/style-user.css',
        'css/select2.css'
    ];
    public $js = [
        'js/jquery-1.11.0.min.js',
        'js/bootstrap.min.js',
        'js/jquery-ui-1.10.4.custom.min.js',
        'js/jquery.bxslider.min.js',
        'js/jquery.backgroundvideo.min.js',
        'js/script.js',
        'js/icheck.min.js',
        'js/select2.min.js',
        'js/jquery.validate.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}
