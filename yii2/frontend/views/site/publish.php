<?php
use yii\helpers\Html;
use yii\helpers\Url;
?>

<div class="publish-navbar">
    <div class="container">
        <div class="guide-banner-inner">
            <div class="guide-banner-title">
                <h1>实现你的梦想，从这里开始</h1>
                <p>在发起项目之前，请阅读下列须知和指南以帮助你更顺利的发布项目</p>
            </div>
        </div>
    </div>
    <!--end[guide banner content]-->
</div>

<!--start[release step]-->
<div class="release-step-part">
	<div class="container">

        <ul id="myTab" class="nav nav-pills nav-justified">
            <li class="inreturn-btn active"><a href="#type-inreturn" data-toggle="tab"><i class="fa fa-gift"></i> 发起回报型项目</a></li>
            <li class="equity-btn"><a href="#type-equity" data-toggle="tab"><i class="fa fa-file-text"></i> 发起股权型项目</a></li>
        </ul>

        <!-- Tab panes -->
        <div id="myTabContent" class="tab-content">
            <div class="tab-pane fade in active" id="type-inreturn">
                <div class="release-step-inner">
                    <h1>从草稿到发布，只需简单几步</h1>

                    <!--start[step1]-->
                    <div class="release-step-row">
                        <div class="release-step-left">
                            <h1>填写信息</h1>
                            <p>项目编辑内容自动保存，免除丢失草稿担忧，便于下次继续填写。</p>
                            <p>窗口右侧可进行实时预览，确保你所看到的效果和网站呈现保持一致。</p>
                        </div>
                        <div class="release-step-right">
                            
                            <?= Html::img('@web/images/step1-img-1.png', ['alt' => 'My logo']) ?>

                        </div>
                        <div class="clear"></div>
                        <span class="step-round">1</span>
                        <span class="step-vbar"></span>
                    </div>
                    <!--end[step1]-->

                    <!--start[step2]-->
                    <div class="release-step-row">
                        <div class="release-step-left">
                            <h1>项目内容建议格式</h1>
                            <p>项目内容是整个项目的核心，传达项目最基本的信息。因此高质量项目内容与编辑格式直接影响用户的好感度。</p>
                            <p>建议书写格式为：标题+文字+图片，样例如右：</p>
                        </div>
                        <div class="release-step-right">
                           <?= Html::img('@web/images/step1-img-2.png', ['alt' => 'My logo']) ?>
                        </div>
                        <div class="clear"></div>
                        <span class="step-round">2</span>
                        <span class="step-vbar"></span>
                    </div>
                    <!--end[step2]-->

                    <form name="auditing-form" method="post" action="/publish">
                        <!--start[step3]-->
                        <div class="release-step-row">
                            <div class="release-step-left">
                                <h1>身份信息验证</h1>
                                <p>首次点击发布项目会要求进行个人身份信息认证，以确保项目的真实性和可信度。</p>
                                <p>请准备好身份证扫描件、手持身份证拍摄的清晰图片，以及一张银行卡（用于项目成功后的资金提现）。 </p>
                            </div>
                            <div class="release-step-right">
                              <?= Html::img('@web/images/step1-img-3.png', ['alt' => 'My logo']) ?>
                            </div>
                            <div class="clear"></div>
                            <span class="step-round">3</span>
                            <span class="step-vbar"></span>
                        </div>
                        <!--end[step3]-->

                        <!--start[step3]-->
                        <div class="release-step-row">
                            <div class="release-step-left">
                                <h1>审核项目</h1>
                                <p>项目提交后，工作人员会进行严格的审核。审核信息包括：项目信息、身份验证与银行账户验证。</p>
                                <p>如审核不通过，请根据系统提示，修改相关信息后再次提交。</p>
                            </div>
                            <div class="release-step-right">
                                <?= Html::img('@web/images/step1-img-4.png', ['alt' => 'My logo']) ?>
                            </div>
                            <div class="clear"></div>
                            <span class="step-round">4</span>
                            <span class="step-vbar"></span>
                        </div>
                        <!--end[step3]-->

                        <!--start[step5]-->
                            <div class="release-step-row">
                                <div class="release-step-left">
                                    <h1>项目上线</h1>
                                </div>
                                <div class="release-step-right">
                                    <div class="congrates-lbl">
                                    <p>当你符合所有规范要求并且通过审核后，恭喜你，你的项目就开始上线筹资了。</p>
                                    <p>项目发布流程都清楚了么？赶紧在诺筹发起你的第一个项目吧！</p>
                                    <p class="tips">Tips：无论你是谁，只要你在诺筹发布项目，我们都不会收取任何费用。但要注意的是，如果你的项目成功，需要从你的总筹资中拿取1.5%作为第三方支付平台的手续费。</p>
                                    </div>
                                    <p class="project-code-lbl">* 您需要同意<a href="/page/rule" target="_blank">《项目规范》</a>和<a href="/page/terms" target="_blank">《使用条款》</a>才能进行下一步</p>
                                    <label for="do-not-agree">
                                        <input type="checkbox" name="do-not-agree" id="do-not-agree" class="icheck"> 我同意并遵守项目发布守则
                                    </label>
                                    <p><button class="read-write-btn" disabled type="submit" id="publish-btn"><i class="fa fa-arrow-right"></i> 开始发布项目</button></p>
                                </div>
                                <div class="clear"></div>
                                <span class="step-round checked"><i class="fa fa-check"></i></span>
                            </div>
                        <!--end[step5]-->
                    </form>

                </div>
            </div>
            <div class="tab-pane fade" id="type-equity">
                <div class="release-step-inner">
                    <h1>从草稿到发布，只需简单几步</h1>

                    <!--start[step1]-->
                    <div class="release-step-row">
                        <div class="release-step-left">
                            <h1>填写信息</h1>
                            <p>项目编辑内容自动保存，免除丢失草稿担忧，便于下次继续填写。</p>
                            <p>窗口右侧可进行实时预览，确保你所看到的效果和网站呈现保持一致。</p>
                        </div>
                        <div class="release-step-right">
                             <?= Html::img('@web/images/step2-img-1.png', ['alt' => 'My logo']) ?>
                        </div>
                        <div class="clear"></div>
                        <span class="step-round">1</span>
                        <span class="step-vbar"></span>
                    </div>
                    <!--end[step1]-->

                    <!--start[step2]-->
                    <div class="release-step-row">
                        <div class="release-step-left">
                            <h1>项目内容建议格式</h1>
                            <p>项目内容是整个项目的核心，传达项目最基本的信息。因此高质量项目内容与编辑格式直接影响用户的好感度。</p>
                            <p>建议书写格式为：标题+文字+图片，样例如右：</p>
                        </div>
                        <div class="release-step-right">
                            <?= Html::img('@web/images/step2-img-2.png', ['alt' => 'My logo']) ?>
                        </div>
                        <div class="clear"></div>
                        <span class="step-round">2</span>
                        <span class="step-vbar"></span>
                    </div>
                    <!--end[step2]-->

                    <form name="auditing-form" method="post" action="/publish/equity">
                        <!--start[step3]-->
                        <div class="release-step-row">
                            <div class="release-step-left">
                                <h1>添加商业计划文件</h1>
                                <p>商业计划书是一份全方位描述你企业发展的文件。一份完备的商业计划书，是企业能否成功融资的关键因素，因此商业计划书的质量对你的项目融资至关重要。</p>
                            </div>
                            <div class="release-step-right">
                               <?= Html::img('@web/images/step2-img-3.png', ['alt' => 'My logo']) ?>
                            </div>
                            <div class="clear"></div>
                            <span class="step-round">3</span>
                            <span class="step-vbar"></span>
                        </div>
                        <!--end[step3]-->

                        <!--start[step4]-->
                        <div class="release-step-row">
                            <div class="release-step-left">
                                <h1>企业信息认证</h1>
                                <p>首次点击提交项目会要求进行企业信息认证，以确保项目的真实性和可信度。</p>
                                <p>请准备好企业相关资料：如营业执照扫描件、税务登记扫描件、企业法人信息等。</p>
                            </div>
                            <div class="release-step-right">
                                <?= Html::img('@web/images/step2-img-4.png', ['alt' => 'My logo']) ?>
                            </div>
                            <div class="clear"></div>
                            <span class="step-round">4</span>
                            <span class="step-vbar"></span>
                        </div>
                        <!--end[step4]-->

                        <!--start[step5]-->
                        <div class="release-step-row">
                            <div class="release-step-left">
                                <h1>项目审核</h1>
                                <p>项目提交后，工作人员会进行严格的审核。审核的信息包括：项目信息、商业计划书与企业信息认证等。</p>
                                <p>如审核不通过，请根据系统提示，修改相关信息后再次提交。</p>
                            </div>
                            <div class="release-step-right">
                                <?= Html::img('@web/images/step2-img-5.png', ['alt' => 'My logo']) ?>
                            </div>
                            <div class="clear"></div>
                            <span class="step-round">5</span>
                            <span class="step-vbar"></span>
                        </div>
                        <!--end[step5]-->

                        <!--start[step5]-->
                            <div class="release-step-row">
                                <div class="release-step-left">
                                    <h1>项目上线</h1>
                                </div>
                                <div class="release-step-right">
                                    <div class="congrates-lbl">
                                        <p>当你符合所有规范要求并且通过审核后，恭喜你，你的项目就开始上线筹资了。</p>
                                        <p>项目发布流程都清楚了么？赶紧在诺筹发起你的第一个项目吧！</p>
                                        <p class="tips">Tips：无论你是谁，只要你在诺筹发布项目，我们都不会收取任何费用。但要注意的是，如果你的项目成功，需要从你的总筹资中拿取1.5%作为第三方支付平台的手续费。</p>
                                    </div>
                                    <p class="project-code-lbl">* 您需要同意<a href="/page/rule" target="_blank">《项目规范》</a>和<a href="/page/other" target="_blank">《股权相关声明》</a>才能进行下一步</p>
                                    <label for="do-not-agree">
                                        <input type="checkbox" name="do-not-agree" id="do-not-agree" class="icheck"> 我同意并遵守项目发布守则
                                    </label>
                                    <p><button class="read-write-btn" disabled type="submit" id="publish-btn"><i class="fa fa-arrow-right"></i> 开始发布项目</button></p>
                                </div>
                                <div class="clear"></div>
                                <span class="step-round checked"><i class="fa fa-check"></i></span>
                            </div>
                        <!--end[step5]-->
                    </form>

                </div>
            </div>
        </div>

    </div>
</div>
<!--end[release step]-->

<?= Html::jsFile('@web/js/jquery-1.11.0.min.js') ?>
<script type="text/javascript">
 
    

$(document).ready(function(e) {
//for cross browser fullscreen background

    if($('.publish-navbar').length){
        $('.publish-navbar').backstretch("<?php echo Url::to('@web/images/guide-banner.png', true);?>");
    }

    // icheck checkbox / radio
    $('input.icheck').iCheck({
        checkboxClass: 'icheckbox_minimal-grey',
        radioClass: 'iradio_minimal-grey'
     });

    $('.release-step-right input').on('ifChanged', function(){
        var item = $(this).parents('.release-step-right').parent();
        if ($(this).is(":checked")) {
            item.addClass('active-btn')
            $(".read-write-btn").removeAttr("disabled")
        }
        else {
            item.removeClass('active-btn')
            $(".read-write-btn").attr("disabled","disabled");
        }
    });
});

</script>
