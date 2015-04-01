
<?php
use yii\helpers\Html;
?>
<?php $this->beginPage() ?>
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>后台管理</title>
    <!--<link href="css/admin_login.css" rel="stylesheet" type="text/css" />-->
    <?= Html::cssFile('@web/media/css/admin_login.css') ?>
</head>
<body>
<?php $this->beginBody() ?>
<div class="admin_login_wrap">
    <h1>后台管理</h1>
    <div class="adming_login_border">
        <?= $content ?>
    </div>
   
</div>
 <?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>