<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace backend\assets;

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
        'media/css/bootstrap.min.css',
        'media/css/bootstrap-responsive.min.css',
        'media/css/font-awesome.min.css',
        'media/css/style-metro.css',
        'media/css/style.css',
        'media/css/style-responsive.css',
        'media/css/default.css',
        'media/css/uniform.default.css',
        'media/image/favicon.ico',
        'media/css/jquery.gritter.css',
        'media/css/daterangepicker.css',
        'media/css/fullcalendar.css',
        'media/css/jqvmap.css',
        'media/css/jquery.easy-pie-chart.css',
    ];
    public $js = [
        'media/js/jquery-1.10.1.min.js',
        'media/js/jquery-migrate-1.2.1.min.js',
        'media/js/jquery-ui-1.10.1.custom.min.js',
        'media/js/bootstrap.min.js',
        'media/js/excanvas.min.js',
        'media/js/respond.min.js',
        'media/js/jquery.slimscroll.min.js',
        'media/js/jquery.vmap.js',
        'media/js/jquery.blockui.min.js',
        'media/js/jquery.cookie.min.js',
        'media/js/jquery.vmap.russia.js',
        'media/js/jquery.vmap.world.js',
        'media/js/jquery.vmap.europe.js',
        'media/js/jquery.vmap.germany.js',
        'media/js/jquery.vmap.usa.js',
        'media/js/jquery.vmap.sampledata.js',
        'media/js/jquery.flot.js',
        'media/js/jquery.flot.resize.js',
        'media/js/jquery.pulsate.min.js',
        'media/js/date.js',
        'media/js/daterangepicker.js',
        'media/js/jquery.gritter.js',
        'media/js/fullcalendar.min.js',
        'media/js/jquery.easy-pie-chart.js',
        'media/js/jquery.sparkline.min.js',
        'media/js/app.js',
        'media/js/index.js',
    ];
    public $depends = [
    
    ];
}
