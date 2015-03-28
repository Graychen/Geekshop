<?php 
use yii\helpers\Url;

?>
 http://localhost<?=Url::to(['signup'])?>
<div class="tab-row">
    <div class="container">
        <div class="row middle-row">
            <!--start[register part]-->
            <div class="col-md-12">
                <form action="http://localhost<?=Url::to(['signup'])?>" method="POST" name="RegisterForm" id="RegisterForm">                <div class="login-module">
                    <div class="row">
                        <div class="login-control col-md-8">
                            <!--start[user login]-->
                            <h2>欢迎加入诺筹</h2>

                            <div class="form-group">
                                <label class="col-sm-3 control-label">
                                    用户名                                </label>
                                <div class="col-sm-7">
                                    <input name="name" class="input-default" placeholder="&#x8BF7;&#x8F93;&#x5165;&#x7528;&#x6237;&#x6635;&#x79F0;" id="name" type="text" value="">                                                                    </div>
                                <div class="clear"></div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-3 control-label">
                                    电子邮箱                                </label>
                                <div class="col-sm-7">
                                    <input type="email" name="email" placeholder="&#x8BF7;&#x6B63;&#x786E;&#x8F93;&#x5165;&#x7535;&#x5B50;&#x90AE;&#x7BB1;&#xFF0C;&#x53EF;&#x7528;&#x4E8E;&#x5BC6;&#x7801;&#x627E;&#x56DE;" id="email" class="input-default" value="">                                                                    </div>
                                <div class="clear"></div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-3 control-label">
                                    登录密码                                </label>
                                <div class="col-sm-7">
                                    <input name="password" type="password" placeholder="&#x81F3;&#x5C11;&#x8F93;&#x5165;8&#x4E2A;&#x5B57;&#x7B26;" id="password" class="input-default" value="">                                                                    </div>
                                <div class="clear"></div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-3 control-label">
                                    确认密码                                </label>
                                <div class="col-sm-7">
                                    <input  type="password" placeholder="&#x81F3;&#x5C11;&#x8F93;&#x5165;8&#x4E2A;&#x5B57;&#x7B26;" id="repassword" class="input-default" value="">                                                                    </div>
                                <div class="clear"></div>
                            </div>

                            
                            <div class="form-group">
                                <label class="col-sm-3 control-label">
                                </label>
                                <div class="col-sm-7">
                                    <input  type="submit" class="btn&#x20;btn-default&#x20;btn-lg&#x20;btn-s" value="&#x6CE8;&#x518C;">                                </div>
                                <div class="clear"></div>
                            </div>

                            <!--end[user login]-->
                        </div>
                        <div class="login-sidebar col-md-4">
                            <h5>已经注册过帐号？ 立即登录：</h5>
                            <p><a href="/login" class="btn login-btn">登录帐号</a></p>
                            <div class="orline"><span>或选择</span></div>
                            <h5>使用其他账号直接登录：</h5>
                            <p><a href="/auth/weibo" class="btn auth-btn"><i class="fa fa-weibo"></i> 微博登录</a>&nbsp; <a href="/auth/qqconnect" class="btn auth-btn"><i class="fa fa-qq"></i> QQ登录</a></p>
                        </div>
                    </div>
                </div>
            </div>
            </form>            <!--start[end register]-->
            <div class="clear"></div>
        </div>
    </div>
</div>

 

    //<!--
    //<script>
$(function() {
        $("#RegisterForm").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true
            },
            password: {
                required: true
            },
            repassword: {
                required: true
            }
        },
        errorElement: "li",
        wrapper: "ul",
        errorPlacement: function (error, element) {
            error.appendTo(element.parent());
        },
        onfocusout: function (element) {
            $(element).valid();
        },
        submitHandler: function(form){
            form.submit();
        }
    });
});

    //-->
</script>
