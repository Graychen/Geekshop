<?php
use yii\helpers\Html;
/* @var $this yii\web\View */
?>


<!--start[publish right part]-->
<div class="publish-right-part">

	<!--start[publish fund left]-->
    <div class="publish-basic-left white-bg publish-fund">
        <div class="publish-fund-left-scroll">
            <div class="publish-basic-left-inner">
                <div class="fund-rewards-container">
                <!--start[reward 1]-->
                    <div class="publish-reward-box" id="publish-reward-160">
                    <a data-url="/publish/deleteFund/id/95/sid/160" class="reward-remove-btn"></a>
                        <form action="" method="POST" name="fundform&#x5B;&#x5D;" id="fundform&#x5B;&#x5D;"><input type="hidden" name="id" value="160">                            <h1 class="reward-title">回报 1</h1>
                            <div class="publish-fund-errors">
                                <ul></ul>
                            </div>
                            <div class="publish-basic-formrow">
                                <p class="basic-form-lbl">金额</p>
                                <div class="basic-form-ele">
                                    <label class="funding-time-inputs-lbl fund-ammout">
                                    <input name="supportNumber" class="funding-time-inputs-lbl-fund-ammout" placeholder="&#x8BF7;&#x8F93;&#x5165;&#x91D1;&#x989D;" maxlength="7" data-digits="true" title="&#x8BF7;&#x8F93;&#x5165;&#x91D1;&#x989D;" data-highlight=".fund-backset-module-box&#x20;&gt;&#x20;h4" data-preview=".fund-backset-module-box&#x20;&gt;&#x20;h4&#x20;&gt;&#x20;span" data-default-text="0" type="text" value="">                                        <i class="fa fa-yen"></i>
                                    </label>
                                    <div class="clear"></div>
                                </div>
                             </div>

                            <div class="publish-basic-formrow">
                                <p class="basic-form-lbl">限额</p>
                                <div class="basic-form-ele">
                                    <div class="publish-fund-input-small">
                                    <select name="isPlaces" class="basic-suctom-select&#x20;reward-limit-select" title="&#x8BF7;&#x9009;&#x62E9;&#x662F;&#x5426;&#x9650;&#x989D;"><option value="Yes">是</option>
<option value="No" selected="selected">否</option></select>                                    </div>
                                    <div class="publish-fund-input-small">
                                    <input name="places" class="basic-form-input&#x20;reward_limit_yes" maxlength="3" data-digits="true" placeholder="&#x8F93;&#x5165;&#x6570;&#x91CF;" title="&#x8BF7;&#x8F93;&#x5165;&#x9650;&#x989D;&#x4E2A;&#x6570;" data-default-text="0" data-preview=".fund-backset-module-box&#x20;&gt;&#x20;h5&#x20;&gt;&#x20;.left-reward&#x20;&gt;&#x20;span" data-highlight=".fund-backset-module-box&#x20;&gt;&#x20;h5&#x20;&gt;&#x20;.left-reward" style="display&#x3A;none" type="text" value="">                                    </div>
                                    <div class="clear"></div>
                                </div>
                                <div class="clear"></div>
                            </div>

                            <div class="publish-basic-formrow">
                                <p class="basic-form-lbl no-padding">描述</p>
                                <div class="basic-form-ele">
                                    <label class="basic-short-blurb-lbl">
                                    <textarea name="supportContent" class="fund-description-area" maxlength="250" data-default-text="&#x56DE;&#x62A5;&#x63CF;&#x8FF0;" placeholder="&#x8BF7;&#x8F93;&#x5165;&#x56DE;&#x62A5;&#x63CF;&#x8FF0;" title="&#x8BF7;&#x8F93;&#x5165;&#x56DE;&#x62A5;&#x63CF;&#x8FF0;" data-preview=".fund-backset-module-box&#x20;&gt;&#x20;p" data-highlight=".fund-backset-module-box&#x20;&gt;&#x20;p"></textarea>                                    </label>
                                </div>
                            </div>

                            <div class="publish-basic-formrow">
                                <p class="basic-form-lbl no-padding">回报图片</p>
                                <div class="basic-form-ele">
                                                                    <div class="reward-img-box">
                                    <label class="reward-image-lbl" >
                                    <input type="file" name="files[]" class="reward-file-upload upload-1" title="请上传回报图片">
                                            <p>上传</p>
                                        </label>
                                        <div class="reward-image-loader" ></div>
                                        <div class="uploaded-image-outer">
                                        </div>
                                    </div>
                                                                          <div class="reward-img-box">
                                    <label class="reward-image-lbl" >
                                    <input type="file" name="files[]" class="reward-file-upload upload-2" title="请上传回报图片">
                                            <p>上传</p>
                                        </label>
                                        <div class="reward-image-loader" ></div>
                                        <div class="uploaded-image-outer">
                                        </div>
                                    </div>
                                                                          <div class="reward-img-box">
                                    <label class="reward-image-lbl" >
                                    <input type="file" name="files[]" class="reward-file-upload upload-3" title="请上传回报图片">
                                            <p>上传</p>
                                        </label>
                                        <div class="reward-image-loader" ></div>
                                        <div class="uploaded-image-outer">
                                        </div>
                                    </div>
                                      
                                    <input type="text" value="" name="reward-file-upload-hidden" class="reward-file-upload-hidden" title="请上传回报图片" />
                                    <div class="clear"></div>
                                </div>
                            </div>

                            <div class="publish-basic-formrow">
                                <p class="basic-form-lbl">是否包邮</p>
                                <div class="basic-form-ele">
                                    <div class="publish-fund-input-small">
                                    <select name="isFare" class="basic-suctom-select&#x20;shipping-fee-select" title="&#x8BF7;&#x9009;&#x62E9;&#x662F;&#x5426;&#x5305;&#x90AE;"><option value="Yes" selected="selected">是</option>
<option value="No">否</option></select>                                    </div>
                                    <div class="publish-fund-input-small">
                                        <input name="fare" placeholder="&#x8F93;&#x5165;&#x8FD0;&#x8D39;" class="basic-form-input&#x20;&#x20;reward_shipping_fee_amount" maxlength="5" data-digits="true" title="&#x8BF7;&#x8F93;&#x5165;&#x8FD0;&#x8D39;" data-default-text="0" data-preview=".shippin-fee-amnt&#x20;&gt;&#x20;b" data-highlight=".shippin-fee-amnt" style="display&#x3A;none" type="text" value="">                                    </div>
                                    <div class="clear"></div>
                                </div>
                                <div class="clear"></div>
                            </div>

                            <div class="publish-basic-formrow">
                                <p class="basic-form-lbl">预计发货</p>
                                <div class="basic-form-ele est-delivery-radio-group">
                                    <div class="funding-time-box">
                                        <div class="funding-time-inputs" style="display: block;">
                                            <p style="margin-left: 0;">成功后</p>
                                            <label class="funding-time-inputs-lbl relative">
                                                <input name="backDate" class="delivery_time_days" placeholder="&#x591A;&#x5C11;" data-digits="true" maxlength="3" title="&#x8BF7;&#x8F93;&#x5165;&#x5929;&#x6570;" data-default-text="0" data-preview=".after-success-days&#x20;&gt;&#x20;b" data-highlight=".after-success-days" type="text" value="">                                                <i class="fa fa-clock-o"></i>
                                            </label>
                                            <p>天</p>
                                            <div class="clear"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>                    </div>
                    <!--start[reward 1]-->

                </div>
                <div class="clear">&nbsp;</div>
                <a class="add-new-reward-btn"><i class="fa fa-plus-circle"></i> 添加新的回报</a>
            </div>
        </div>
    </div>
    <!--end[publish fund left]-->

    <!--start[publish fund right]-->
    <div class="publish-basic-right">
        <div class="publish-fund-right-scroll">
            <div class="publish-basic-right-inner">
                <div class="fund-backset-module">
                    <div class="fund-backset-module-inner">
                        <div class="fund-backset-module-outer" id="publish-reward-preview-160">
    <a class="fund-backset-module-box">
        <h4>支持 ¥<span>0.00</span></h4>
        <h5>
            <p class="backers">0 人支持 </p>
            <p class="left-reward" style="display: none;"> | 限额 <span class="left-count1">0</span> 位, 剩余 <span class="left-count2">0</span> 位</p>
            <div class="clear"></div>
        </h5>
        <p>回报描述</p>
        <div class="fund-backset-images">
                                                <span><!--uploaded image will be add here--></span>
                                                                <span><!--uploaded image will be add here--></span>
                                                                <span><!--uploaded image will be add here--></span>
                                        <div class="clear"></div>
        </div>
        <span class="shipping-fee">
                                        <span class="free">包邮</span><span class="no-free" style="display: none;">运费: <i class="shippin-fee-amnt">¥ <b>0</b></i></span>
                    </span>
        <span>预计发货时间: <i class="after-success-days">成功后 <b>0</b> 天</i></span>
    </a>
</div>                    </div>
                </div>
            </div>
        </div>
        <div class="auto-save-btn-row">
            <!--<a class="preview-btn" id="preview">预览</a>-->
            <a class="save-btn">保存</a>
            <p class="operation-msg"></p>
            <div class="clear"></div>
        </div>
    </div>
    <!--end[publish fund right]-->

</div>
<!--end[publish right part]-->

<!--using below "DIV" to set and get new loaded reward html -->
<div class="new-reward-data-container"></div>



