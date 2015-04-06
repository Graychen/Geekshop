<?php
use yii\helpers\Html;
/* @var $this yii\web\View */

use yii\bootstrap\ActiveForm;
$this->title = '基本信息';

?>




<!--start[publish right part]-->
<div class="publish-right-part">

    <!--start[publish basic left]-->
    <div class="publish-basic-left">
        <div class="publish-basic-left-scroll">
            <div class="publish-basic-left-inner">
           <!-- <form action="" method="POST" name="ProjectPublishBasicForm" id="publish-basic-form-1">-->
             <?php $form = ActiveForm::begin(['id' => 'publish-basic-form-1']); ?>
                   <!-- <input type="hidden" name="sid" value="95">   -->                 
                    <div class="publish-basic-errors">
                        <ul></ul>
                    </div>
                    <!--<div class="publish-basic-formrow">
                        <p class="basic-form-lbl no-padding">项目图片</p>
                        <div class="basic-form-ele basic-fileupload-container" id="basic-fileupload-container">
                        <label class="basic-fileupload-block" for="basic-fileupload" >
                                <p>拖拽图片放在此处上传</p>
                                <span>或者</span>
                                <span>点击此处上传</span>
                                <input id="basic-fileupload" type="file" name="files[]" class="basic-file-upload" title="请上传项目图片">
                                <input type="text" name="basic-file-upload-hidden" class="basic-file-upload-hidden" value="" title="请上传项目图片">
                            </label>
                            <div class="basic-uploaded-img-space">
                                                        </div>
                            <div class="basic-livepreview-progress-bar">
                                <div class="basic-livepreview-progress" style="width:0%;"></div>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                    -->
                    <div class="publish-basic-formrow">
                        <p class="basic-form-lbl">项目标题</p>
                        <div class="basic-form-ele">
                        <input name="BasicInformationForm[title]" class="basic-form-input&#x20;basic_project_title" placeholder="&#x8BF7;&#x8F93;&#x5165;&#x4F60;&#x7684;&#x9879;&#x76EE;&#x6807;&#x9898;&#x28;25&#x4E2A;&#x5B57;&#x5185;&#x29;" data-highlight=".basic-hover-container&#x20;&gt;&#x20;h5,&#x20;.basic-livepreview-title&#x20;&gt;&#x20;h5" data-preview=".basic-hover-container&#x20;&gt;&#x20;h5,&#x20;.basic-livepreview-title&#x20;&gt;&#x20;h5" data-default-text="&#x6807;&#x9898;" maxlength="25" type="text" value="">                        </div>
                        <div class="clear"></div>
                    </div>

                    <div class="publish-basic-formrow">
                        <p class="basic-form-lbl">分类</p>
                        <div class="basic-form-ele">
                        <select name="BasicInformationForm[type]" class="basic-suctom-select" data-highlight=".basic-livepreview-title&#x20;.preview-category" title="&#x8BF7;&#x9009;&#x62E9;&#x9879;&#x76EE;&#x5206;&#x7C7B;" data-default-text="&#x5206;&#x7C7B;" data-preview=".basic-livepreview-title&#x20;.preview-category"><option value="">请选择项目分类</option>
<option value="3">创意设计</option>
<option value="6">游戏动漫</option>
<option value="9">演出活动</option>
<option value="10">影音出版</option>
<option value="3258">电子科技</option>
<option value="3260">实体经营</option>
<option value="3261">其它项目</option>
<option value="3310">旅游度假</option></select>                        </div>
                        <div class="clear"></div>
                    </div>

                    <div class="publish-basic-formrow">
                        <p class="basic-form-lbl">标签</p>
                        <div class="basic-form-ele">
                        <input name="BasicInformationForm[tags]" class="basic-form-input" placeholder="&#x8BF7;&#x8F93;&#x5165;&#x76F8;&#x5173;&#x6807;&#x7B7E;" id="basic-tags" type="text" value="">                            <p class="tag-lbl">标签是用于描述你项目的词语，标签之间用空格隔开</p>
                        </div>
                        <div class="clear"></div>
                    </div>

                    <div class="publish-basic-formrow">
                        <p class="basic-form-lbl">所在地</p>
                        <div class="basic-form-ele">
                        <div class="basic-location-left">
                        <select name="BasicInformationForm[address]" class="basic-suctom-select" id="basic-province" data-default-text="&#x6240;&#x5728;&#x5730;" data-preview=".basic-livepreview-title&#x20;.preview-location" title="&#x8BF7;&#x9009;&#x62E9;&#x7701;&#x4EFD;" data-highlight=".basic-livepreview-title&#x20;.preview-location"><option value="">请选择省份</option>
<option value="20">北京</option>
<option value="38">天津</option>
<option value="56">河北</option>
<option value="240">山西</option>
<option value="372">内蒙古</option>
<option value="486">辽宁</option>
<option value="601">吉林</option>
<option value="671">黑龙江</option>
<option value="813">上海</option>
<option value="832">江苏</option>
<option value="948">浙江</option>
<option value="1050">安徽</option>
<option value="1172">福建</option>
<option value="1267">江西</option>
<option value="1379">山东</option>
<option value="1537">河南</option>
<option value="1715">湖北</option>
<option value="1833">湖南</option>
<option value="1970">广东</option>
<option value="2113">广西</option>
<option value="2237">海南</option>
<option value="2265">重庆</option>
<option value="2305">四川</option>
<option value="2508">贵州</option>
<option value="2606">云南</option>
<option value="2752">西藏</option>
<option value="2833">陕西</option>
<option value="2951">甘肃</option>
<option value="3052">青海</option>
<option value="3104">宁夏</option>
<option value="3132">新疆</option>
<option value="3307">香港</option>
<option value="3308">澳门</option>
<option value="3309">台湾</option></select>                            </div>
                            <div class="basic-location-right">
                           <!-- <select name="cityId" class="basic-suctom-select" id="basic-city" data-preview=".basic-livepreview-title&#x20;.preview-location" data-highlight=".basic-livepreview-title&#x20;.preview-location" title="&#x8BF7;&#x9009;&#x62E9;&#x57CE;&#x5E02;"><option value="">请选择城市</option></select>       -->                     </div>
                            <div class="clear"></div>
                        </div>
                        <div class="clear"></div>
                    </div>

                     <div class="publish-basic-formrow">
                        <p class="basic-form-lbl no-padding">项目简介</p>
                        <div class="basic-form-ele">
                            <label class="basic-short-blurb-lbl">
                            <textarea name="BasicInformationForm[intro]" maxlength="140" class="basic-short-blurb-area" data-default-text="Description" placeholder="&#x8BF7;&#x7B80;&#x5355;&#x4ECB;&#x7ECD;&#x4F60;&#x7684;&#x9879;&#x76EE;" data-preview=".basic-hover-container&#x20;&gt;&#x20;p" data-highlight=".basic-hover-container&#x20;&gt;&#x20;p" title="&#x8BF7;&#x7B80;&#x5355;&#x4ECB;&#x7ECD;&#x4F60;&#x7684;&#x9879;&#x76EE;"></textarea>                                <p class="short-blurb-counter"><span class="current">140</span> / 140</p>
                            </label>
                        </div>
                     </div>

                     <div class="publish-basic-formrow">
                        <p class="basic-form-lbl">筹资时间</p>
                        <div class="basic-form-ele">
                            <div class="funding-time-box">
                                <div class="funding-time-inputs" style="display: block">
                                    <label class="funding-time-inputs-lbl">
                                    <input name="BasicInformationForm[time]" class="funding_time_days" placeholder="&#x8BF7;&#x8F93;&#x5165;&#x65F6;&#x95F4;" data-digits="true" title="&#x8BF7;&#x8F93;&#x5165;&#x65F6;&#x95F4;" maxlength="3" data-highlight=".basic-livepreview-column&#x20;&gt;&#x20;h5.days-left" data-preview=".basic-livepreview-column&#x20;&gt;&#x20;h5.days-left&#x20;&gt;&#x20;span" data-default-text="0" type="text" value="">                                        <i class="fa fa-clock-o"></i>
                                    </label>
                                    <p>天</p>
                                    <div class="clear"></div>
                                </div>
                            </div>
                        </div>
                     </div>

                     <div class="publish-basic-formrow">
                        <p class="basic-form-lbl">目标金额</p>
                        <div class="basic-form-ele">
                            <label class="funding-time-inputs-lbl goal">
                            <input name="BasicInformationForm[money]" class="funding-time-inputs-lbl-goal" placeholder="&#x8BF7;&#x8F93;&#x5165;&#x76EE;&#x6807;&#x91D1;&#x989D;" data-digits="true" title="&#x8BF7;&#x8F93;&#x5165;&#x76EE;&#x6807;&#x91D1;&#x989D;" maxlength="10" type="text" value="">                                <i class="fa fa-yen"></i>
                            </label>
                        </div>
                     </div>
                    <?= Html::submitButton('提交', ['class' => 'btn btn-default btn-lg btn-s']) ?>
                                                
                     <?php ActiveForm::end(); ?>       
              <!--  </form>   -->
                      </div>
        </div>
    </div>
    <!--end[publish basic left]-->

    <!--start[publish basic right]-->
    <div class="publish-basic-right">
        <div class="publish-basic-right-scroll">
            <div class="publish-basic-right-inner">
                <!--start[basic live preview box]-->
                <div class="basic-livepreview-box inreturn" id="basic-livepreview-box-1">
                    <div class="basic-livepreview-inner">
                        <a class="basic-livepreview-img">
                            <span>
                                                        <img src="file:///E:/wamp2.5/wamp/www/muban/images/image-place-holder-basic.png" width="259" height="180" alt="">
                                                        </span>
                            <div class="icon"><i class="fa fa-gift"></i></div>
                        </a>
                        <div class="basic-livepreview-content">
                            <div class="basic-livepreview-title">
                            <h5>标题</h5>
                            <p><i class="fa fa-map-marker"></i> <span class="preview-location">所在地</span> | <span class="preview-category">分类</span> · <span class="preview-tag">标签</span></p>
                            </div>
                            <div class="basic-livepreview-price">
                                <div class="basic-livepreview-column">
                                    <h5 class="percent"><span>0</span>%</h5>
                                    <p>已达到</p>
                                </div>
                                <div class="basic-livepreview-column border-left">
                                    <h5 class="funded"><span>0</span>元</h5>
                                    <p>筹得</p>
                                </div>
                                <div class="basic-livepreview-column border-left">
                                    <h5 class="days-left"><span>0</span> 天</h5>
                                    <p>剩余</p>
                                </div>
                                <div class="clear"></div>
                            </div>
                            <div class="item-progress-bar">
                                <div class="item-progress" style="width:0%;"></div>
                            </div>
                        </div>
                    </div>
                    <!--start[hover block]-->
                    <a href="#" class="basic-hover-block">
                        <div class="basic-hover-inner">
                            <div class="basic-hover-container">
                            <h5>标题</h5>
                                <div class="basic-hover-title">
                                <img src="http://gongying.gostarting.com/images/noavatar.jpg" width="47" height="47" alt="">
                                <span>陈小样</span>
                                </div>
                                <p>描述</p>
                            </div>
                            <span class="basic-arrow-up"></span>
                        </div>
                        <span class="basic-support-lbl">支持项目</span>
                    </a>
                    <!--end[hover block]-->
                </div>
                <!--end[basic live preview box]-->
            </div>
        </div>
        <div class="auto-save-btn-row">
            <!--<a class="preview-btn" id="preview">预览</a>-->
            <a class="save-btn">保存</a>
            <p class="operation-msg"></p>
            <div class="clear"></div>
        </div>
    </div>
    <!--end[publish basic right]-->

</div>
<!--end[publish right part]-->
<?= Html::jsFile('@web/js/jquery-1.11.0.min.js') ?>
<script type="text/javascript">
    //<!--
    var basic_upload_url = "/publish/uploadBasic/id/95";
var basic_upload_delete = "/publish/deletepic/id/95";
    //-->
</script>
<?= Html::jsFile('@web/js/basic.js') ?>
