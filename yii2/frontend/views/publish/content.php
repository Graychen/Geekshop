<?php
use yii\helpers\Html;
/* @var $this yii\web\View */
?>
<!--start[publish leftmenu]-->


<!--start[publish right part]-->
<div class="publish-right-part">

        <!--start[publish basic left]-->
        <div class="publish-basic-left publish-content">
            <div class="publish-basic-left-scroll">
                <div class="publish-basic-left-inner">
                    <!--start[left part]-->
                    <div class="publish-design-bg-content-highlight">
                                         <form method="POST">
                        <!-- form name="publish_basic_form_1" id="publish-basic-form-1" method="post" -->
                        <div class="upload-section upload-section-step with-show">
                            <a class="step-1-image"><i class="fa fa-picture-o"></i>上传封面图片</a>
                            <a class="step-1-video"><i class="fa fa-video-camera"></i>添加封面视频</a>
                            <div class="clear"></div>
                            <span></span>
                        </div>

                        <div class="upload-section upload-section-step-image">
                            <div class="design-fileupload-block-space">
                                <label class="design-fileupload-block" for="design-fileupload">
                                    <p>拖拽图片放在此处上传</p>
                                    <span>或者</span>
                                    <span>点击此处上传</span>
                                    <input id="design-fileupload" type="file" name="files[]" class="design-file-upload" required title="请上传项目图片">
                                </label>
                            </div>
                            <div class="clear"></div>
                            <a class="step-1-close"><i class="fa fa-times-circle"></i></a>
                        </div>

                        <div class="upload-section upload-section-step-video">
                            <div class="design-video-block-space">
                                <span class="design-video-block-label">复制视频网址</span>
                                <span class="design-video-block-input-space">
                                    <input type="text" value="" name="design-video-block-input" class="design-video-block-input" placeholder="仅适用于优酷、土豆、酷六视频链接" />
                                    <span class="video-btn-wrapper"><a class="btn btn-blue btn-add-video">确定</a></span>
                                </span>
                            </div>
                            <div class="clear"></div>
                            <a class="step-1-close"><i class="fa fa-times-circle"></i></a>
                        </div>

  <div class="upload-section upload-section-step-image-result">
                            <div class="upload-section-step-image-result-data">
                            <img src="" data-url="/publish/UploadFrontCoverDelete/id/95" alt="封面图片" />
                                <div class="clear"></div>
                                <a class="step-1-close with-remove-image"><i class="fa fa-times-circle"></i></a>
                            </div>
                            <div class="clear"></div>
                        </div>

                        <div class="upload-section upload-section-step-video-result">
                            <div class="upload-section-step-video-result-data">
                                <div class="video-preview"></div>
                                <div class="clear"></div>
                                <a class="step-1-close with-remove-video"><i class="fa fa-times-circle"></i></a>
                            </div>
                            <div class="clear"></div>
                        </div>

                            <div class="basic-livepreview-progress-bar">
                                <div class="basic-livepreview-progress" style="width:0%;"></div>
                            </div>
                  </form>
                        <div class="css-editor-place">
                                                    <form action="" method="POST" name="ProjectPublishContentForm" id="" class="content-form">                        <!--Start [ editor place ]-->
                            <div class="css-editor" id="publish-content-1">
                            <input name="title" class="css-editor-input" placeholder="&#x70B9;&#x51FB;&#x8FD9;&#x91CC;&#x586B;&#x5199;&#x6807;&#x9898;" data-preview=".content-module-box&#x20;&gt;&#x20;h3" data-highlight=".content-module-box&#x20;&gt;&#x20;h3" autocomplete="off" type="text" value="">                                <div class="css-editor-area">
                                  <textarea name="content" class="fund-description-area&#x20;summernote" maxlength="250" data-default-text="Description" title="&#x8BF7;&#x586B;&#x5199;&#x5185;&#x5BB9;" data-preview=".content-module-box&#x20;&gt;&#x20;.editor_preview" data-highlight=".content-module-box&#x20;&gt;&#x20;.editor_preview" id="fund-description-area-1"></textarea>                                </div>
                                <div class="clear"></div>
                                <a class="editor-remove-button" onClick="umeditor_remove_handler(this);"><i class="fa fa-times-circle"></i></a>
                            </div>

                        <!--End [ editor place ]-->
                        </form>                                                </div>

                        <a class="editor-add-button"><i class="fa fa-plus-circle"></i>添加新的内容</a>
<!-- form -->
                    </div>
                    <!--end[left part]-->
                </div>
            </div>
        </div>
        <!--end[publish basic left]-->

        <!--start[publish basic right]-->
        <div class="publish-basic-right publish-content-right">
            <div class="publish-content-right-scroll">
                <div class="publish-content-right-inner">
                    <div class="content-module">
                        <div class="poster">
                            <p class="alt">请上传封面图片或添加封面视频...</p>
                                                    </div>
                        <div class="template" style="display: none;">
                            <div class="left-part-inner content-module-box">
                                <h3>标题...</h3>
                                <div class="editor_preview">正文内容...</div>
                            </div>
                        </div>
                        <div class="content-module-inner">
                                                        <div class="content-module-outer" id="publish-content-preview-1">
                                <div class="left-part-inner content-module-box">
                                    <h3>标题...</h3>
                                    <div class="editor_preview">正文内容...</div>
                                </div>
                            </div>
                                                    </div>
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
        <!--end[publish basic right]-->

</div>
<!--end[publish right part]-->

<?= Html::jsFile('@web/js/jquery-1.11.0.min.js') ?>
<script type="text/javascript">
    //<!--
    var content_upload_url = "/publish/contentUploadFile/id/95";
var content_uploadfrontcover_url = "/publish/uploadFrontCover/id/95";
var video_upload_url = "/publish/uploadVideoUrl/id/95";
var video_url = "";

    //-->
</script>