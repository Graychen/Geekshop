var editorIs = false;
var num_of_block = 0;
editorPlace = "",
editorAddButton = "";
var orgTop = [];

jQuery(document).ready(function($) {
    setInterval(autosubmit, 30000);
    $('.publish-menu-item').live("click", function(event) {
        event.preventDefault();
        autosubmit($(this).attr('href'));
    });
    $('.preview_section a').each(function(index, elem) {
        $(elem).attr("href", "javascript:void(0);");
    });
    $('.save-btn').click(function() {
        autosubmit();
    });
    $('.preview-btn').click(function() {
        //$('.publish-right-part').hide("slide", { direction: "left" }, 350);
        //$('.publish-leftmenu').hide("slide", { direction: "left" }, 350);
        $('.publish-right-part,.publish-leftmenu').hide("fast");
        $('.preview_section').show("slide", { direction: "right" }, 350);
    });
    $('.back-btn').click(function() {
        //$('.preview_section').hide("slide", { direction: "right" }, 350);
        $('.preview_section').hide("fast");
        $('.publish-leftmenu').show("slide", { direction: "left" }, 350);
        $('.publish-right-part').show("slide", { direction: "left" }, 350);
    });

    num_of_block = $('.publish-basic-left-inner .css-editor').size();

    //for publish basic right scrollbar
    if($(".publish-content-right-scroll").length){
        $(".publish-content-right-scroll").mCustomScrollbar({
            scrollInertia:400,
            autoDraggerLength:true,
            set_height:"100%",
            advanced:{
                updateOnContentResize:true
            }
        });
    }

    //for publish basic left scrollbar
    if($(".publish-basic-left-scroll").length){
        $(".publish-basic-left-scroll").mCustomScrollbar({
            scrollInertia:0,
            autoDraggerLength:true,
            set_height:"100%",
            advanced:{
                autoScrollOnFocus:false,
                updateOnContentResize:true
            },
            callbacks:{
                whileScrolling:function(){
                    $(".publish-content-right-scroll").mCustomScrollbar("scrollTo",10-mcs.top);
                    var topOffset = 0;
                    var scrollTopOffset = 0-mcs.top;
                    $('.edui-container .edui-toolbar').each(function(i, elem) {
                        if (scrollTopOffset == 0) {
                            $('.edui-container .edui-toolbar').each(function(i, elem) {
                                orgTop[i] = $(elem).offset().top;
                            });
                        }
                        toolbarBox = $(elem)[0];
                        toolbarTop = $(elem).offset().top;
                        if (toolbarTop < 0) {
                            if(toolbarBox.style.position != 'fixed'){
                                toolbarBox.style.position = 'fixed';
                                toolbarBox.style.top = topOffset +"px";
                                toolbarBox.style.width = $(elem).parent().width() + 'px';
                            }
                        }
                        // 濡傛灉婊氬姩鐨勫昂瀵镐綆浜庡師濮嬩綅缃紝宸ュ叿鏍忓洖褰掑師浣�
                        if (scrollTopOffset < orgTop[i]) {
                            toolbarBox.style = '';
                        }
                        // 濡傛灉婊氬姩鐨勫昂瀵搁珮浜庡師濮嬩綅缃紜鍐呭缂栬緫鍖哄煙灏哄鐨勯珮搴︼紝宸ュ叿鏍忛殣钘�
                        if (scrollTopOffset > orgTop[i]+$(elem).next(".edui-editor-body").height()+5) {
                            toolbarBox.style = '';
                        }
                        console.log("top"+i+" ="+orgTop[i]+" ? "+scrollTopOffset);
                    });
                }
            }
        });
    }

    $('.btn-add-video').live("click", function() {
        if (!$('.design-video-block-input').val()) {
            $('.design-video-block-input').addClass("with-error");
        }
        else {
            var videoUrl = $('.design-video-block-input').val();
            $('.design-video-block-input').removeClass("with-error");
            var video = createPreviewVideo(videoUrl);
            $.ajax({
                type: "GET",
                url: video_upload_url,
                data: {url:videoUrl},
                dataType: "json",
                success: function(data) {
                    if (data.result == 0) {
                        $('.upload-section-step-video-result-data .video-preview').html(video[0]);
                        $('.upload-section').removeClass('with-show');
                        $('.upload-section-step-video-result').addClass('with-show');
                        // add to right preview.
                        $('.poster > p').hide();
                        $('.poster').append(video[1]);
                    }
                }
            });
        }
    });

    editor_init();

    //for live preview
    $(document).on('keyup keydown change', 'textarea, .css-editor-input', function(e){
        var eTarget = $(e.target);
        var eValue = eTarget.val(),
                targetEle = eTarget.attr('data-preview'),
                defaultTxt = eTarget.attr('data-default-text'),
                currentNo = eTarget.parents('.css-editor').attr('id').replace('publish-content-','');
        if(targetEle && eValue){
            $('.content-module #publish-content-preview-'+currentNo).find(targetEle).text(eValue);
        }else{
            if(defaultTxt && targetEle && !eValue){
                $('.fund-backset-module #publish-reward-preview-'+currentRewardNo).find(targetEle).text(defaultTxt);
            }
        }
    });

    //for add highlight class to relative field in preview box on focus
    $(document).on('focus', 'input', function(){
        var ele = $(this),targetEle = $(this).attr('data-highlight');
        if (ele.parents('.css-editor').length > 0 ) {
            currentNo = ele.parents('.css-editor').attr('id').replace('publish-content-', '');
            if (targetEle) {
                $('.content-module #publish-content-preview-' + currentNo).find(targetEle).addClass('highlight');
            }
        }
    });

    //for remove highlight class from relative field in preview box on focus out
    $(document).on('blur', 'input', function(){
        var ele = $(this),targetEle = $(this).attr('data-highlight');
        if (ele.parents('.css-editor').length > 0 ) {
            currentNo = ele.parents('.css-editor').attr('id').replace('publish-content-', '');
            if (targetEle) {
                $('.content-module #publish-content-preview-' + currentNo).find(targetEle).removeClass('highlight');
            }
        }
    });

    var uploadSection = $('.upload-section');

    $('.step-1-image').off('click').on('click', function(){
        uploadSection.removeClass('with-show');
        $('.upload-section-step-image').addClass('with-show');
    });

    $('.step-1-video').off('click').on('click', function(){
        uploadSection.removeClass('with-show');
        $('.upload-section-step-video').addClass('with-show');
    });

    $('.step-1-close').off('click').on('click', function(){
        uploadSection.removeClass('with-show');
        $('.upload-section-step').addClass('with-show');

        if($(this).hasClass('with-remove-image')){
            var url = $('.upload-section-step-image-result-data img').attr("data-url");
            $.ajax({
                type: "POST",
                url: url,
                dataType: "json",
                success: function(data) {
                    if (data.result == 0) {
                        $('.upload-section-step-image-result-data img').attr('src', '');
                        $('.design-fileupload-block-input').val('');
                        $('.poster img').remove();
                        $('.basic-file-upload-hidden').val('').focus().blur();
                    }
                }
            });
        }

        if($(this).hasClass('with-remove-video')){
            $.ajax({
                type: "POST",
                url: video_upload_url,
                dataType: "json",
                success: function(data) {
                    if (data.result == 0) {
                        $('.upload-section-step-video-result-data iframe').attr('src', '');
                        $('.design-video-block-input').val('');
                        $('.poster embed').remove();
                    }
                }
            });
        }

        $('.poster > p').show();
    });

    //for publish basic file upload
    if($('.design-file-upload').length){
        var basic_upload_url = content_uploadfrontcover_url;
        $('.design-file-upload').fileupload({
            url: basic_upload_url,
            dataType: 'json',
            maxNumberOfFiles: 1,
            done: function (e, data) {
                $.each(data.result.files, function (index, file) {
                    var newImage = '<img src="'+file.frontCover+'" width="620" />';
                    setTimeout(function(){
                        $('.basic-livepreview-progress-bar').hide();
                        $('.basic-livepreview-progress-bar .basic-livepreview-progress').css({width:'0%'});
                        $('.upload-section-step-image-result-data img').attr('src', file.frontCover);
                        $('.upload-section-step-image-result-data img').attr('data-url', file.deleteUrl);
                        uploadSection.removeClass('with-show');
                        $('.upload-section-step-image-result').addClass('with-show');
                        // add to right preview.
                        $('.poster > p').hide();
                        $('.poster').append(newImage);
                    },300);
                    $('.basic-file-upload-hidden').val('true').focus().blur();
                });
            },
            progressall: function (e, data) {
                var progress = parseInt(data.loaded / data.total * 100, 10);
                $('.basic-livepreview-progress-bar').show();
                $('.basic-livepreview-progress-bar .basic-livepreview-progress').css({width:progress + '%'});
            }
        }).on('fileuploadfail', function (e, data) {
            $.each(data.files, function (index, file) {
                alert('File upload failed.');
            });
        }).prop('disabled', !$.support.fileInput).parent().addClass($.support.fileInput ? undefined : 'disabled');

    }

    /*$('.note-editable').live("focus", function(){
        var currentNo = $(this).parents('.css-editor').attr('id').replace('publish-content-','');
        $('.content-module #publish-content-preview-'+currentNo).find(".content-module-box > p").addClass('highlight');
    });

    $('.note-editable').live("blur", function(){
        var editor = $(this).closest('.note-editor').siblings('textarea.summernote');
        editor.html(editor.code());
        var currentNo = $(this).parents('.css-editor').attr('id').replace('publish-content-','');
        $('.content-module #publish-content-preview-'+currentNo).find(".content-module-box > p").removeClass('highlight');
    });

    $('.note-editable').live('keyup keydown change', function(e){
        var editor = $(this).closest('.note-editor').siblings('textarea.summernote');
        currentNo = $(this).parents('.css-editor').attr('id').replace('publish-content-','');
        $('.content-module #publish-content-preview-'+currentNo).find(".content-module-box > p").html(editor.code());
    });*/

});


function editor_init(){

    editorPlace = $('.css-editor-place');
    editorAddButton = $('.editor-add-button');

    editorAddButton.off('click').on('click', function(){
        editorAddButton.addClass('with-hide');
        umeditor_add();
    });

    umeditor_bind('fund-description-area', -1);
    $('.fund-description-area').each(function(i, e) {
        id = $(e).attr('id');
        umeditor_bind(id, i);
    });

    editorIs = true;
}

function sendFile(file, editor, welEditable) {
    data = new FormData();
    data.append("files", file);
    $.ajax({
        data: data,
        type: "POST",
        dataType: 'json',
        url: content_upload_url + "?index=" + $("[name=index]", $(welEditable).parents("form")).val(),
        cache: false,
        contentType: false,
        processData: false,
        success: function(data) {
          $.each( data.files, function( index, file ) {
            editor.insertImage(welEditable, file.url);
          } );
        }
    });
}

function umeditor_bind(field_id, i) {
    var ue = UM.getEditor(field_id, {
        imageUrl:content_upload_url + "?index=" + i,
        imageFieldName:"files",
        //lang:/^zh/.test(navigator.language || navigator.browserLanguage || navigator.userLanguage) ? 'zh-cn' : 'en',
        //langPath:UMEDITOR_CONFIG.UMEDITOR_HOME_URL + "lang/",
        lang:"zh-cn",
        toolbar:[
            'image insertvideo insertorderedlist insertunorderedlist justifyleft justifycenter forecolor'
        ],
        autoHeightEnabled:true,
        initialFrameWidth:"100%",
        //zIndex:900-i,
        autoFloatEnabled:false,
        //imageScaleEnabled:false,
        dropFileEnabled:false,
        autoSyncData:true,
        filterRules: function () {
            return{
                span:function(node){
                    if(/Wingdings|Symbol/.test(node.getStyle('font-family'))){
                        return true;
                    }else{
                        node.parentNode.removeChild(node,true)
                    }
                },
                p: function(node){
                    var listTag;
                    if(node.getAttr('class') == 'MsoListParagraph'){
                        listTag = 'MsoListParagraph'
                    }
                    node.setAttr();
                    if(listTag){
                        node.setAttr('class','MsoListParagraph')
                    }
                    if(!node.firstChild()){
                        node.innerHTML(UE.browser.ie ? '&nbsp;' : '<br>')
                    }
                },
                div: function (node) {
                    var tmpNode, p = UE.uNode.createElement('p');
                    while (tmpNode = node.firstChild()) {
                        if (tmpNode.type == 'text' || !UE.dom.dtd.$block[tmpNode.tagName]) {
                            p.appendChild(tmpNode);
                        } else {
                            if (p.firstChild()) {
                                node.parentNode.insertBefore(p, node);
                                p = UE.uNode.createElement('p');
                            } else {
                                node.parentNode.insertBefore(tmpNode, node);
                            }
                        }
                    }
                    if (p.firstChild()) {
                        node.parentNode.insertBefore(p, node);
                    }
                    node.parentNode.removeChild(node);
                },
                //$:{}琛ㄧず涓嶄繚鐣欎换浣曞睘鎬�
                br: {$: {}},
                a: {$: {}},
                b: {$: {}},
                strong: {$: {}},
                i: {$: {}},
                em: {$: {}},
                img: {$: {}},
                ol:{$: {}},
                ul: {$: {}},

                dl:function(node){
                    node.tagName = 'ul';
                    node.setAttr()
                },
                dt:function(node){
                    node.tagName = 'li';
                    node.setAttr()
                },
                dd:function(node){
                    node.tagName = 'li';
                    node.setAttr()
                },
                li: function (node) {

                    var className = node.getAttr('class');
                    if (!className || !/list\-/.test(className)) {
                        node.setAttr()
                    }
                    var tmpNodes = node.getNodesByTagName('ol ul');
                    UE.utils.each(tmpNodes,function(n){
                        node.parentNode.insertAfter(n,node);

                    })

                },
                table: function (node) {
                    UE.utils.each(node.getNodesByTagName('table'), function (t) {
                        UE.utils.each(t.getNodesByTagName('tr'), function (tr) {
                            var p = UE.uNode.createElement('p'), child, html = [];
                            while (child = tr.firstChild()) {
                                html.push(child.innerHTML());
                                tr.removeChild(child);
                            }
                            p.innerHTML(html.join('&nbsp;&nbsp;'));
                            t.parentNode.insertBefore(p, t);
                        })
                        t.parentNode.removeChild(t)
                    });
                    var val = node.getAttr('width');
                    node.setAttr();
                    if (val) {
                        node.setAttr('width', val);
                    }
                },
                tbody: {$: {}},
                caption: {$: {}},
                th: {$: {}},
                td: {$: {valign: 1, align: 1,rowspan:1,colspan:1,width:1,height:1}},
                tr: {$: {}},
                h3: {$: {}},
                h2: {$: {}},
                //榛戝悕鍗曪紝浠ヤ笅鏍囩鍙婂叾瀛愯妭鐐归兘浼氳杩囨护鎺�
                '-': 'script style meta iframe embed object'
            }
        }()
    });

    umeditor_handler();

    $(".fund-description-area").live("focus", function() {
        var editor = $(this).parents(".css-editor");
        var currentNo = editor.attr('id').replace('publish-content-','');
        $('.content-module #publish-content-preview-'+currentNo).find(".content-module-box > .editor_preview").addClass('highlight');
        //live_preview_content(currentNo, ue.getAllHtml());
    });
    $(".fund-description-area").live("keyup keydown", function() {
        var editor = $(this).parents(".css-editor");
        var currentNo = editor.attr('id').replace('publish-content-','');
        live_preview_content(currentNo, $(this).html());
    });
    $(".fund-description-area").live("blur", function() {
        var editor = $(this).parents(".css-editor");
        var currentNo = editor.attr('id').replace('publish-content-','');
        $('.content-module #publish-content-preview-'+currentNo).find(".content-module-box > .editor_preview").removeClass('highlight');
        live_preview_content(currentNo, $(this).html());
    });
}

function umeditor_add() {
    num_of_block++;
    var markup = '<form class="content-form" name="contentform[]" method="POST" action=""><div class="css-editor" id="publish-content-'+num_of_block+'"><input name="title" type="text" value="" class="css-editor-input" placeholder="鐐瑰嚮杩欓噷濉啓鏍囬" data-preview=".content-module-box > h3" data-highlight=".content-module-box > h3" autocomplete="off" /><div class="css-editor-area"><textarea name="content" class="fund-description-area summernote" maxlength="250" data-default-text="Description" data-preview=".content-module-box > .editor_preview" data-highlight=".content-module-box > .editor_preview" id="fund-description-area-'+num_of_block+'"></textarea></div><div class="clear"></div><a class="editor-remove-button"  onClick="umeditor_remove_handler(this);"><i class="fa fa-times-circle"></i></a></div></form>';

    editorPlace.append(markup);
    umeditor_bind('fund-description-area-'+num_of_block);
    editorAddButton.removeClass('with-hide');

    var newModule = $('.template');
    html = '<div class="content-module-outer" id="publish-content-preview-'+num_of_block+'">'+newModule.html()+'</div>';
    $('.content-module-inner').append(html);

    //娣诲姞鏂扮殑涓€涓尯鍧楁椂锛屽彲浠ヤ繚瀛樺埌鏁版嵁搴�
    autosubmit();
}

function editor_bind(){

    if(editorPlace.find('.summernote').length){
        editorPlace.find('.summernote').not('.editor-binded').each(function(index, element) {
            $(element).summernote({
                toolbar: [
                    ['insert', ['picture']],
                    ['insert', ['video']],
                    ['para', ['ol']],
                    ['para', ['ul']]
                ],
                onfocus: function(e) {
                    if($(e.currentTarget).find('.css-editor-default-content').length){
                        $(e.currentTarget).parent('.note-editor').prev('.summernote').code('');
                    }
                    //console.log('Editable area is focused');
                    var currentNo = $(e.currentTarget).parents('.css-editor').attr('id').replace('publish-content-','');
                    $('.content-module #publish-content-preview-'+currentNo).find(".content-module-box > p").addClass('highlight');
                    //live_preview_content(currentNo, $(element).code());
                },
                onkeyup: function(e) {
                    //console.log('Key is released:', e.keyCode);
                    currentNo = $(e.currentTarget).parents('.css-editor').attr('id').replace('publish-content-','');
                    live_preview_content(currentNo, $(element).code());
                },
                onkeydown: function(e) {
                    //console.log('Key is pressed:', e.keyCode);
                },
                onblur: function(e) {
                    if($(e.currentTarget).html() == ''){
                        $(e.currentTarget).prepend('<p class="css-editor-default-content">鐐瑰嚮杩欓噷濉啓鍐呭銆�</p>');
                    }
                    //console.log('Editable area loses focus');
                    var currentNo = $(e.currentTarget).parents('.css-editor').attr('id').replace('publish-content-','');
                    $('.content-module #publish-content-preview-'+currentNo).find(".content-module-box > p").removeClass('highlight');
                    live_preview_content(currentNo, $(element).code());
                },
                onImageUpload: function(files, editor, welEditable) {
                    sendFile(files[0], editor, welEditable);
                },
                lang: 'zh-CN'
            });
            $(element).addClass('editor-binded');
            editor_handler();
        });
    }

}

function live_preview_content(id, html) {
    html = html.replace(/ style=".*?width:\s?(\d+).*?"/ig, "");
    html = html.replace(/ width="\s?(\d+).*?"/ig, "");
    $('.content-module #publish-content-preview-'+id).find(".content-module-box > .editor_preview").html(html);
}

function editor_add(){
    num_of_block++;
    var markup = '<form class="content-form" name="contentform[]" method="POST" action=""><div class="css-editor" id="publish-content-'+num_of_block+'"><input name="title" type="text" value="" class="css-editor-input" placeholder="鐐瑰嚮杩欓噷濉啓鏍囬" data-preview=".content-module-box > h3" data-highlight=".content-module-box > h3" autocomplete="off" /><div class="css-editor-area"><textarea name="content" class="summernote"><p class="css-editor-default-content" data-preview=".content-module-box > p" data-highlight=".content-module-box > p">鐐瑰嚮杩欓噷濉啓鍐呭銆�</p></textarea></div><div class="clear"></div><a class="editor-remove-button"  onClick="editor_remove_handler(this);"><i class="fa fa-times-circle"></i></a></div></form>';

    editorPlace.append(markup);
    editor_bind();
    editorAddButton.removeClass('with-hide');

    var newModule = $('.template');
    html = '<div class="content-module-outer" id="publish-content-preview-'+num_of_block+'">'+newModule.html()+'</div>';
    $('.content-module-inner').append(html);

    //娣诲姞鏂扮殑涓€涓尯鍧楁椂锛屽彲浠ヤ繚瀛樺埌鏁版嵁搴�
    autosubmit();
}

function editor_remove(element){

    if(element.length && element.hasClass('editor-binded') && editorPlace.find('.summernote').length > 1){
        var currentNo = element.parents('.css-editor').attr('id').replace('publish-content-','');
        $('.content-module #publish-content-preview-'+currentNo).remove();
        element.destroy();
        element.parents('.css-editor').remove();
        editor_handler();
        //鍒犻櫎涓€涓尯鍧楁椂锛屽彲浠ヤ繚瀛樺埌鏁版嵁搴�
        autosubmit();
    }
}

function editor_handler(){
    editorPlace.find('.editor-remove-button').toggleClass('with-show', editorPlace.find('.summernote').length > 1);
}

function umeditor_handler(){
    editorPlace.find('.editor-remove-button').toggleClass('with-show', editorPlace.find('.summernote').length > 1);
}

function umeditor_remove_handler(ele){
    element = $(ele);
    var currentNo = element.parents('.css-editor').attr('id').replace('publish-content-','');
    $('.content-module #publish-content-preview-'+currentNo).remove();
    element.parents('.css-editor').remove();
    umeditor_handler();
    //鍒犻櫎涓€涓尯鍧楁椂锛屽彲浠ヤ繚瀛樺埌鏁版嵁搴�
    autosubmit();
}

function editor_remove_handler(element){
    if(editorIs){
        editor_remove($(element).parent('.css-editor').find('.summernote'));
    }
}

/**
 * URL杞崲
 */
function convert_url(s){
    return s.replace(/http:\/\/www\.tudou\.com\/programs\/view\/([\w\-]+)\/?/i,"http://www.tudou.com/v/$1")
            .replace(/http:\/\/www\.youtube\.com\/watch\?v=([\w\-]+)/i,"http://www.youtube.com/v/$1")
            .replace(/http:\/\/v\.youku\.com\/v_show\/id_([\w\-=]+)\.html(.*)/i,"http://player.youku.com/player.php/sid/$1/v.swf")
            .replace(/http:\/\/www\.56\.com\/u\d+\/v_([\w\-]+)\.html(.*)/i, "http://player.56.com/v_$1.swf")
            .replace(/http:\/\/www.56.com\/w\d+\/play_album\-aid\-\d+_vid\-([^.]+)\.html(.*)/i, "http://player.56.com/v_$1.swf")
            .replace(/http:\/\/v\.ku6\.com\/.+\/(.*)\.html(.*)/i, "http://player.ku6.com/refer/$1/v.swf");
}

/**
 * 鏍规嵁url鐢熸垚瑙嗛棰勮
 */
function createPreviewVideo(url){
    var res = [];
    if ( !url )return;
    url = convert_url(url);
    var matches = url.match(/youtu.be\/(\w+)$/) || url.match(/youtube\.com\/watch\?v=(\w+)/) || url.match(/youtube.com\/v\/(\w+)/),
            youku = url.match(/youku\.com\/v_show\/id_(\w+)/),
            youkuPlay = /player\.youku\.com/ig.test(url);

    if(!youkuPlay){
        if (matches){
            url = "https://www.youtube.com/v/" + matches[1] + "?version=3&feature=player_embedded";
        }else if(youku){
            url = "http://player.youku.com/player.php/sid/"+youku[1]+"/v.swf"
        }
    }else{
        url = url.replace(/\?f=.*/,"");
    }
    res[0] = '<embed type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"' +
    ' src="' + url + '"' +
    ' width="' + 430  + '"' +
    ' height="' + 280  + '"' +
    ' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" ></embed>';
    res[1] = '<embed type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"' +
    ' src="' + url + '"' +
    ' width="' + 620  + '"' +
    ' height="' + 310  + '"' +
    ' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" ></embed>';
    return res;
}

function autosubmit(redirect_url) {
  var datas = [];
  $("form.content-form").each(function() {
    var sdata = $(this).serializeArray();
    var self = this;
    $.each( sdata, function() {
      if( this.name != "content" ) return;
      //this.value = $('.summernote', self).summernote().code();
    });
    datas.push( sdata );
  });
  var data = []; $.each(datas, function() { var d = {}; $.each(this, function() {  d[this.name]=this.value; }); data.push( d ); });
    $('.operation-msg').html("姝ｅ湪淇濆瓨...").show();
    $.post("", {data: data}, function(result){
        if (result.result == 0) {
            $('.operation-msg').html("宸叉垚鍔熶繚瀛�");
            $('.operation-msg').fadeOut(1000);
            if (redirect_url) {
                window.location = redirect_url;
            }
        }
    }, 'json');
}

if (video_url) {
    var video = createPreviewVideo(video_url);
    $('.upload-section-step-video-result-data .video-preview').html(video[0]);
    $('.poster > p').hide();
    $('.poster').append(video[1]);
}