<?php
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use frontend\assets\AppAsset;
use frontend\widgets\Alert;

/* @var $this \yii\web\View */
/* @var $content string */

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="baidu-site-verification" content="IFtTVwJQrt" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="format-detection" content="no">
    <meta name="apple-touch-fullscreen" content="yes">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
    <?php $this->beginBody() ?>
     <!--[if lte IE 6]>
    <div class="alert alert-danger ie6">您所使用的浏览器版本太低，无法正常浏览器本站。请升级或更换其他浏览器。</div>
    <![endif]-->
    <noscript><div class="alert alert-danger noscript">您的浏览器不支持或已经禁止JavaScript，请启用它。</div></noscript>
    <div class="wrap">
        <?php
            NavBar::begin([
                'brandLabel' => '潮品会',
                'brandUrl' => Yii::$app->homeUrl,
                'options' => [
                    'class' => 'navbar navbar-default ',
                ],
               // home-navbar
            ]);
            $menuItems = [
                ['label' => 'Home', 'url' => ['/site/index']],
                ['label' => 'About', 'url' => ['/site/about']],
                ['label' => 'Contact', 'url' => ['/site/contact']],
            ];
            if (Yii::$app->user->isGuest) {
                $menuItems[] = ['label' => '注册', 'url' => ['/site/signup']];
                $menuItems[] = ['label' => '登陆', 'url' => ['/site/login']];
            } else {
                $menuItems[] = [
                    'label' => '退出 (' . Yii::$app->user->identity->username . ')',
                    'url' => ['/site/logout'],
                    'linkOptions' => ['data-method' => 'post']
                ];
            }
            echo Nav::widget([
                'options' => ['class' => 'navbar-nav navbar-right'],
                'items' => $menuItems,
            ]);
            NavBar::end();
        ?>

       
        <?= Breadcrumbs::widget([
            'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
        ]) ?>
        <?= Alert::widget() ?>
        <?= $content ?>
      
    </div>

    <footer class="footer">
        <div class="container">
        <p class="pull-left">&copy; My Company <?= date('Y') ?></p>
        <p class="pull-right"><?= Yii::powered() ?></p>
        </div>
    </footer>

    <?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
