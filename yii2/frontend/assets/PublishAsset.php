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
class PublishAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/style-base.css',
        'css/style-publish.css',
        'css/gostarting.css',
        'css/info.css',
        'css/autosave/style.css'
    ];
    public $js = [
        /*'js/jquery-1.11.0.min.js',*/
        'js/bootstrap.min.js',
        'js/jquery-ui-1.10.4.custom.min.js',
        'js/jquery.iframe-transport.js',
        'js/jquery.fileupload.js',
        'js/jquery.mCustomScrollbar.min.js',
        'js/jquery.mousewheel.min.js',
        'js/tag-it.min.js',
        'js/jquery.validate.js',
        'js/publish_script.js',
        'js/umeditor.js',
        'js/content.js',
        'js/info.js',
        'js/publish.js',
        'js/fund.js',
        'js/autosave/jbin1.js',
        'js/autosave/jquery-1.6.4.min.js',
        'js/autosave/sisyphus.min.js',
    ];
    public $depends = [
      
    ];
}
