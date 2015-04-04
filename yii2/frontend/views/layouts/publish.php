<?php
use yii\helpers\Html;
use yii\helpers\Url;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;


use frontend\widgets\Alert;

/* @var $this \yii\web\View */
/* @var $content string */
use frontend\assets\PublishAsset;
PublishAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta name="viewport" content="width=1400">
	<meta name="format-detection" content="telephone=no">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="format-detection" content="no">
	<meta name="apple-touch-fullscreen" content="yes">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
        <!--start[publish leftmenu]-->
        <div class="publish-leftmenu">
            <div class="publish-leftmenu-inner">
          <a href="/project/action/my" class="publish-menu-avtar" title="返回项目管理"><img src="http://gongying.gostarting.com/images/noavatar.jpg" width="50" height="50" class="img-circle" alt="陈小样" /><span>陈小样</span></a>

         <!-- <a href="/publish/basic/id/95" class="publish-menu-item active " title="基本信息"><span class="fa fa-file-text-o"></span>基本信息<i class="fa fa-caret-left"></i><i class="fa fa-check-circle"></i><i class="fa fa-exclamation-circle"></i><i class="fa fa-lock"></i><i class="fa fa-unlock"></i></a>-->
          <a id="index"  class="publish-menu-item active" title="基本信息">
            <span class="fa fa-file-text-o"></span>基本信息
            <i class="fa fa-caret-left"></i>
            <i class="fa fa-check-circle"></i>
            <i class="fa fa-exclamation-circle"></i>
            <i class="fa fa-lock"></i>
            <i class="fa fa-unlock"></i>
          </a>
          <a id="fund" class="publish-menu-item incomplete"  title="回报设置">
            <span class="fa fa-gift"></span>回报设置
            <i class="fa fa-caret-left"></i>
            <i class="fa fa-check-circle"></i>
            <i class="fa fa-exclamation-circle"></i>
            <i class="fa fa-lock"></i>
            <i class="fa fa-unlock"></i></a>
          <a  id="content" class="publish-menu-item incomplete" title="项目内容">
            <span class="fa fa-pencil-square-o"></span>项目内容
            <i class="fa fa-caret-left"></i>
            <i class="fa fa-check-circle"></i>
            <i class="fa fa-exclamation-circle"></i>
            <i class="fa fa-lock"></i>
            <i class="fa fa-unlock"></i>
          </a>
          <a id="info" class="publish-menu-item incomplete" title="提交项目">
            <span class="fa fa-check-square-o"></span>提交项目
            <i class="fa fa-caret-left"></i>
            <i class="fa fa-check-circle"></i>
            <i class="fa fa-exclamation-circle"></i>
            <i class="fa fa-lock"></i>
            <i class="fa fa-unlock"></i>
          </a>
                </div>
            <!--<a href="/" class="publish-logo" title="返回首页"></a>-->
        </div>
    <!--end[publish leftmenu]-->
    <?php $this->beginBody() ?>
     <!--[if lte IE 6]>
    <div class="alert alert-danger ie6">您所使用的浏览器版本太低，无法正常浏览器本站。请升级或更换其他浏览器。</div>
    <![endif]-->
    <noscript><div class="alert alert-danger noscript">您的浏览器不支持或已经禁止JavaScript，请启用它。</div></noscript>

        <?= $content ?>
      

    <?php $this->endBody() ?>
</body>
</html>
<?= Html::jsFile('@web/js/jquery-1.11.0.min.js') ?>
<script type="text/javascript">
  $(function(){  
    $("#index").click(function(){
    location.href = "<?php echo Url::toRoute('publish/index');?>";//location.href实现客户端页面的跳转  

    }) 
    $("#fund").click(function(){
    location.href = "<?php echo Url::toRoute('publish/fund');?>";//location.href实现客户端页面的跳转  
   //alert($("#index").attr("class"));
     //$("#index").removeClass("");
     //.addClass("publish-menu-item incomplete");
        
    }) 
    $("#content").click(function(){
    location.href = "<?php echo Url::toRoute('publish/content');?>";//location.href实现客户端页面的跳转  
    })
    $("#info").click(function(){
    location.href = "<?php echo Url::toRoute('publish/info');?>";//location.href实现客户端页面的跳转  
    })
 });  
</script>
<?php $this->endPage() ?>
