<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \common\models\LoginForm */

$this->title = 'Login';

?>
<!-- end [navbar] -->    
<div class="tab-row">
    <div class="container">
        <div class="row middle-row">
            <!--start[login part]-->
            <div class="col-md-12">
                    
                 <?php $form = ActiveForm::begin(['id' => 'login-form']); ?>            
                <div class="login-module">
                    <div class="row">
                        <div class="login-control col-md-8">
                            <!--start[user login]-->
                            <h2>登录诺筹</h2>
                            <div class="form-group">
                                <label class="col-sm-3 control-label" for="loginform-username">
                                    用户名                                </label>
                                <div class="col-sm-7">
                                    <input type="text" name="LoginForm[username]" placeholder="用户名;" class="input-default" id="loginform-username" value="">                                                                    </div>
                                <div class="clear"></div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-3 control-label" for="loginform-password">
                                    密码                                </label>
                                <div class="col-sm-7">
                                    <input type="password" name="LoginForm[password]" placeholder="&#x5BC6;&#x7801;" class="input-default" id="loginform-password" value="">                                                                    </div>
                                <div class="clear"></div>
                            </div>
                            <div class="form-group field-loginform-rememberme">
                                <div class="col-sm-12">
                                 <label class="col-sm-3 control-label"></label>
                                <div class="checkbox ">
                                <label>
                                    <input type="hidden" value="0" name="LoginForm[rememberMe]">
                                    <input id="loginform-rememberme" type="checkbox" checked="" value="1" name="LoginForm[rememberMe]">
                                     记住我
                                </label>
                                <p class="help-block help-block-error"></p>
                                </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">
                                </label>
                                <div class="col-sm-7">
                                    <input type="submit" name="submit" class="btn&#x20;btn-default&#x20;btn-lg&#x20;btn-s" value="&#x767B;&#x5F55;">                                    <p style="line-height: 3;"><a href="/forgotpwd">忘记密码?</a></p>
                                </div>
                                <div class="clear"></div>
                            </div>
                            <!--end[user login]-->
                        </div>
                        <div class="login-sidebar col-md-4">
                            <h5>还没有帐号？ 立即注册帐号：</h5>
                            <p><a href="/register" class="btn login-btn">注册帐号</a></p>
                            <div class="orline"><span>或选择</span></div>
                            <h5>使用其他账号直接登录：</h5>
                            <p><a href="/auth/weibo" class="btn auth-btn"><i class="fa fa-weibo"></i> 微博登录</a>&nbsp; <a href="/auth/qqconnect" class="btn auth-btn"><i class="fa fa-qq"></i> QQ登录</a></p>
                        </div>
                    </div>
                </div>
               <?php ActiveForm::end(); ?>         

                 </div>
            <!--start[end login]-->
            <div class="clear"></div>
        </div>
    </div>
</div>
    <!--start[footer]-->
