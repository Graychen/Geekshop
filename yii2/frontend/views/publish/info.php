<?php
use yii\helpers\Html;
/* @var $this yii\web\View */
?>



<!--start[publish right part]-->
<div class="publish-right-part">
    <div class="publish-basic-all" id="publish-reward-1">
        <div class="publish-publish-inner">
		<div class="publish-title">
			<h2>距离项目发布只差最后一步...</h2>
			<p>你需要补充一些重要信息以确保项目的真实性和可信度</p>
		</div>

    <form action="" method="POST" name="IdentityForm" id="IdentityForm">		<div class="publish-personal">
			<div class="title">
				<h3>身份信息</h3>
				<p>我们需要验证您的真实身份信息，请如实填写</p>
			</div>

			<div class="form-group">
				<div class="col-sm-12">
					<label class="col-sm-3 control-label">真实姓名</label>
					<div class="col-sm-8">
            <input name="realname" class="basic-form-input&#x20;required" placeholder="&#x8BF7;&#x8F93;&#x5165;&#x4F60;&#x7684;&#x771F;&#x5B9E;&#x59D3;&#x540D;" id="realname" type="text" value="">					</div>
				</div>
				<div class="clear"></div>
			</div>

			<div class="form-group">
				<div class="col-sm-12">
					<label class="col-sm-3 control-label">身份证号</label>
					<div class="col-sm-8">
            <input name="idNumber" class="basic-form-input&#x20;required" placeholder="&#x8BF7;&#x8F93;&#x5165;&#x8EAB;&#x4EFD;&#x8BC1;&#x53F7;&#x7801;" id="idNumber" type="text" value="">					</div>
				</div>
				<div class="clear"></div>
			</div>

			<div class="form-group">
				<div class="col-sm-12">
					<label class="col-sm-3 control-label">身份证图片</label>
					<div class="col-sm-9">

						<div class="reward-img-box">
            <label class="reward-image-lbl" >
                                <input id="fileupload_1" type="file" data-type="front" name="files[]" class="reward-file-upload" title="请上传回报图片">
                                <p><span><i class="fa fa-arrow-circle-up"></i></span>点击上传 正面</p>
                            </label>
                            <div class="reward-image-loader"></div>
                            <div class="uploaded-image-outer">
                                                            </div>
                        </div>

                        <div class="reward-img-box">
                            <label class="reward-image-lbl" >
                                <input id="fileupload_2" type="file" data-type="side" name="files[]" class="reward-file-upload">
                                <p><span><i class="fa fa-arrow-circle-up"></i></span>点击上传 背面</p>
                            </label>
                            <div class="reward-image-loader"></div>
                            <div class="uploaded-image-outer">
                                                        </div>
                        </div>

                        					</div>
				</div>
				<div class="clear"></div>
			</div>

			<div class="form-group">
				<div class="col-sm-12">
					<label class="col-sm-3 control-label">手持身份证</label>
					<div class="col-sm-9">
						<div class="reward-img-box photo-id">
                            <label class="reward-image-lbl" >
                                <input id="fileupload_3" data-type="face" type="file" name="files[]" class="reward-file-upload">
                                <p class="photo"><span><i class="fa fa-arrow-circle-up"></i></span>上传 手持身份证</p>
                            </label>
                            <div class="reward-image-loader"></div>
                            <div class="uploaded-image-outer">

                                                        </div>
                        </div>

                        <div class="last">
							<?= Html::img('@web/images/handheld_sample.jpg', ['alt' => '身份证图片']) ?>
                        </div>
                        <div class="clear"></div>
                                                <div class="tip">
							<p>身份证上的所有信息清晰可见，必须能看清证件号。</p>
							<p>照片需免冠，建议未化妆，手持证件人的五官清晰可见。</p>
							<p>照片内容真实有效，不得做任何修改。</p>
							<p>支持.jpg .jpeg .png .gif格式照片，大小不超过2M。</p>
                        </div>
					</div>
				</div>
				<div class="clear"></div>
			</div>

			<div class="form-group">
				<div class="col-sm-12">
					<label class="col-sm-3 control-label">手机号码</label>
					<div class="col-sm-8">
                    <input name="phone" class="basic-form-input&#x20;required&#x20;number" placeholder="&#x8BF7;&#x8F93;&#x5165;&#x4F60;&#x7684;&#x624B;&#x673A;&#x53F7;&#x7801;" id="phone" type="text" value="">					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>

		<div class="publish-personal">
			<div class="title">
				<h4>银行账户信息</h4>
				<p>该账户用于项目成功后收取资金，请如实填写</p>
			</div>

			<div class="form-group">
				<div class="col-sm-12">
					<label class="col-sm-3 control-label">选择银行</label>
					<div class="col-sm-8">
                    <select name="bank" class="location-select&#x20;bank"><option value="">请选择银行</option>
<option value="ccb">中国建设银行</option>
<option value="icbc">中国工商银行</option>
<option value="abchina">中国农业银行</option>
<option value="bankcomm">中国交通银行</option>
<option value="boc">中国银行</option>
<option value="psbc">中国邮政储蓄银行</option>
<option value="cebbank">中国光大银行</option>
<option value="cmbchina">招商银行</option>
<option value="ecitic">中信银行</option>
<option value="cmbc">中国民生银行</option></select>					</div>
				</div>
				<div class="clear"></div>
			</div>

			<div class="form-group">
				<div class="col-sm-12">
					<label class="col-sm-3 control-label">所在开户行</label>
					<div class="col-sm-8">
                    <input name="createLocation" class="basic-form-input&#x20;required" placeholder="&#x4F8B;&#x5982;&#xFF1A;&#x4E0A;&#x6D77;&#x5E02;&#x6D66;&#x4E1C;&#x65B0;&#x533A;&#x5F20;&#x6C5F;&#x652F;&#x884C;" id="createLocation" type="text" value="">					</div>
				</div>
				<div class="clear"></div>
			</div>

			<div class="form-group">
				<div class="col-sm-12">
					<label class="col-sm-3 control-label">银行账户</label>
					<div class="col-sm-8">
                        <input name="cardNo" class="basic-form-input&#x20;required&#x20;number" placeholder="&#x94F6;&#x884C;&#x5361;&#x53F7;" id="cardNo" type="text" value="">					</div>
				</div>
				<div class="clear"></div>
			</div>

			<div class="form-group">
				<div class="col-sm-12">
					<label class="col-sm-3 control-label">开户人</label>
					<div class="col-sm-8">
                        <input name="holder" class="basic-form-input&#x20;required" placeholder="&#x5FC5;&#x987B;&#x4E0E;&#x4F60;&#x8EAB;&#x4EFD;&#x8BC1;&#x4E0A;&#x7684;&#x540D;&#x5B57;&#x4E00;&#x81F4;" id="holder" type="text" value="">					</div>
				</div>
				<div class="clear"></div>
			</div>

		</div>

		<div class="publish-bottom">
			<button type="submit" class="btn btn-blue btn-lg">下一步</button>
		</div>
    </form>        </div>
    </div>
    <div class="clear"></div>
</div>
<!--end[publish right part]-->

<!-- Scripts -->
<?= Html::jsFile('@web/js/jquery-1.11.0.min.js') ?>
<script type="text/javascript">
    //<!--
    /* select2 */
$(".location-select").select2({
    allowClear:true
});
var publish_upload_url = "/publish/uploadPublishFile/id/95";

    //-->
</script>
