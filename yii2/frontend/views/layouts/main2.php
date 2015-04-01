<?php
use yii\helpers\Html;
//use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
//use yii\widgets\Breadcrumbs;
use frontend\assets\AppAsset;
//use frontend\widgets\Alert;

/* @var $this \yii\web\View */
/* @var $content string */

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta property="qc:admins" content="24442646636773412416763757" />
    <meta name="baidu-site-verification" content="IFtTVwJQrt" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="format-detection" content="no">
	<meta name="apple-touch-fullscreen" content="yes">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
	<?php $this->beginBody() ?>
	<!--[if lte IE 6]>
    <div class="alert alert-danger ie6">您所使用的浏览器版本太低，无法正常浏览器本站。请升级或更换其他浏览器。</div>
    <![endif]-->
    <noscript><div class="alert alert-danger noscript">您的浏览器不支持或已经禁止JavaScript，请启用它。</div></noscript>

	       <!-- start [navbar] -->
				<div class="navbar navbar-default home-navbar" role="navigation">
				    <div class="navbar-header">
				        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
				        </button>
				                    <!--<a class="navbar-brand" href="/">
				                            <img src="http://gongying.gostarting.com/images/noavatar.jpg" alt="LOGO" />
				                     </a>-->
				    </div>
				  	<div class="navbar-collapse collapse">
				        <ul class="nav navbar-nav">
				            <li>
				                <a href="/project">寻找项目</a>
				            </li>
				            <li><a href="/page/faq">新手帮助</a></li>
				            <li>
				                <form class="navbar-form navbar-left" role="search" action="/project" method="get" id="searchForm">
				                    <input type="text" class="form-control" value="搜索项目" name="search" onFocus="if(this.value=='搜索项目'){this.value=''}" onBlur="if(this.value==''){this.value='搜索项目'}">
				                    <button type="submit" class="search-btn" title="点击搜索"><i class="fa fa-search"></i></button>
				                </form>
				            </li>
				        </ul>
				        <ul class="nav navbar-nav navbar-right">
				        <?php if (Yii::$app->user->isGuest) { ;?>
				         	<li ><a href="/register">注册</a></li>
				        	<li ><a href="/login">登录</a></li>
				        <?php }else{ ;?>
				      
               			    <li><a class="inbox_loading" href="/message">消息 </a></li>
                     	    <li><a class="notify_loading" href="/message/tab/notity">通知 </a></li>
					        <li class="dropdown user-dropdown">
					            <a href="#" class="dropdown-toggle" data-toggle="dropdown" title="陈小样">
					                <span class="user-avtar"><img src="http://gongying.gostarting.com/images/noavatar.jpg" width="32" height="32" class="img-circle" alt="陈小样"></span> 陈小样 <b class="caret"></b>
					            </a>

					            <ul class="dropdown-menu">
					                <li><a href="/user/172">我的主页</a></li>
					                <li><a href="/project/action/my">项目管理</a></li>
					                <li ><a href="/profile">个人设置</a></li>
					                <li><a href="/payment">账户设置</a></li>
					                                <li><a href="/logout">退出</a></li>
					            </ul>
					        </li>
				        <?php } ;?>
				                <li ><a href="/publish" class="initiated-pro-btn">发起项目</a></li>
				        </ul>
				    </div>
				   
				</div>
<!-- end [navbar] -->    <!--Srart [ picture banner ]-->
        <?= $content ?>
  
       <!--start[footer]-->
			<div class="footer">
			    <div class="container">
			        <div class="row">
			            <div class="col-md-6 n-group">
			                <h3>关于诺筹</h3>
			                <p>我们是一家在 2013 年 7 月，诞生于成都天府软件园创业场的创业公司。我们专注于研发众筹系统解决方案、探索众筹模式细分延展到各个领域在中国的发展、以及众筹平台品牌化的建立。<br />
			<br />
			我们于2012年底就清晰的意识到众筹模式在中国潜力，并展开深入的研发工作，毫无疑问，我们是众筹领域解决方案的先行者。<br />
			<br />
			</p>
			                <p class="copyright">蜀ICP备14008895号-2</p>
			            </div>
			            <div class="col-md-2 m-group">
			                <h3>帮助中心</h3>
			                <ul>
			                    <li><a href="/page/faq">新手帮助</a></li>
			                    <li><a href="/page/terms">使用条款</a></li>
			                    <li><a href="/page/privacy">隐私政策</a></li>
			                    <li><a href="/page/rule">项目规范</a></li>
			                </ul>
			            </div>
			            <div class="col-md-2 m-group">
			                <h3>关于我们</h3>
			                <ul>
			                    <li><a href="/page/job">加入我们</a></li>
			                    <li><a href="/page/contact">联系我们</a></li>
			                                                                            </ul>
			            </div>
			            <div class="col-md-2 m-group">
			                <h3>服务</h3>
			                <ul>
			                    <li><a href="#">定制产品</a></li>
			                    <li><a href="#">价格体系</a></li>
			                    <li><a href="#">申请内测</a></li>
			                </ul>
			            </div>
			            <div class="clear"></div>
			        </div>
			    </div>
			</div>
	<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>