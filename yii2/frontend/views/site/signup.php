<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\SignupForm */

$this->title = 'Signup';
$this->params['breadcrumbs'][] = $this->title;
?>

    <h1><?= Html::encode($this->title) ?></h1>
    <div class="tab-row">
        <div class="container"> 
            <div class="row middle-row">
                <div class="col-md-12">
                    <div class="login-module">
                        <?php $form = ActiveForm::begin(['id' => 'form-signup']); ?>
                                <div class="row">
                                    <div class="login-control col-md-8">
                                        <h2>欢迎加入</h2>
                                         <div class="form-group">
                                            <label class="col-sm-3 control-label" for="signupform-username">
                                                用户名                                </label>
                                            <div class="col-sm-7">
                                                <input name="SignupForm[username]" class="input-default" placeholder="&#x8BF7;&#x8F93;&#x5165;&#x7528;&#x6237;&#x6635;&#x79F0;" id="signupform-username" type="text" value="">                                                                    </div>
                                            <div class="clear"></div>
                                        </div>
                                         <div class="form-group">
                                             <label class="col-sm-3 control-label" for="signupform-email">
                                                电子邮箱                                </label>
                                            <div class="col-sm-7">
                                                 <input type="email" name="SignupForm[email]" placeholder="&#x8BF7;&#x6B63;&#x786E;&#x8F93;&#x5165;&#x7535;&#x5B50;&#x90AE;&#x7BB1;&#xFF0C;&#x53EF;&#x7528;&#x4E8E;&#x5BC6;&#x7801;&#x627E;&#x56DE;" id="signupform-email" class="input-default" value="">                                                                    </div>
                                            <div class="clear"></div>
                                         </div>
                                        <div class="form-group">
                                             <label class="col-sm-3 control-label" for="signupform-password">
                                               登录密码                                </label>
                                            <div class="col-sm-7">
                                                 <input name="SignupForm[password]" type="password" placeholder="&#x81F3;&#x5C11;&#x8F93;&#x5165;8&#x4E2A;&#x5B57;&#x7B26;" id="signupform-password" class="input-default" value="">                                                                    </div>
                                            <div class="clear"></div>    
 
                                        </div>
                                       <!-- <div class="form-group">
                                             <?= $form->field($model, 'password')->passwordInput() ?>
                                        </div>
                                        
                                          --> 
                                          <div class="form-group">
                                                <label class="col-sm-3 control-label"> </label>
                                                <?= Html::submitButton('注册', ['class' => 'btn btn-default btn-lg btn-s', 'name' => 'signup-button']) ?>
                                                 <div class="clear"></div>
                                        </div>
                                    </div>
                                    <div class="login-sidebar col-md-4">
                                        <h5>已经注册过帐号？ 立即登录：</h5>
                                        <p><a href="/login" class="btn login-btn">登录帐号</a></p>
                                        <div class="orline"><span>或选择</span></div>
                                        <h5>使用其他账号直接登录：</h5>
                                        <p><a href="/auth/weibo" class="btn auth-btn"><i class="fa fa-weibo"></i> 微博登录</a>&nbsp; <a href="/auth/qqconnect" class="btn auth-btn"><i class="fa fa-qq"></i> QQ登录</a></p>
                                    </div>
                                </div>
                        <?php ActiveForm::end(); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>