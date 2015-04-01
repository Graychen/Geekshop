/*custom script*/
jQuery(document).ready(function($) {
	//for handle IE browser
	handleBrowser();

	//for expand/collapse right sidebar menu
	if($('.left-menu-item').length){
		$('.left-menu-item').off('click').on('click', function(){
			$(this).parent().children('.left-menu-dropdown').stop(true, true).slideToggle('fast');
		});
	}

	//for autocomplete
	$('.no-close').click(function(){return false;});
	var availableTags = [
		"ActionScript",
		"AppleScript",
		"Asp",
		"BASIC",
		"C",
		"C++",
		"Clojure",
		"COBOL",
		"ColdFusion",
		"Erlang",
		"Fortran",
		"Groovy",
		"Haskell",
		"Java",
		"JavaScript",
		"Lisp",
		"Perl",
		"PHP",
		"Python",
		"Ruby",
		"Scala",
		"Scheme"
    ];

	if($('.nav-search-input').length){
		$('.nav-search-input').autocomplete({
			source: availableTags,
			select: function( event, ui ) {
				//you can get selected value as below.
				if (window.console) console.log(ui.item.value);
			}
		});
	}

	//for character limit in textarea
	if($(".comment-textarea").length){
		var elem = $(".remaining-character");
		$(".comment-textarea").limiter(200, elem);
	}

	//for custom select
	if($('.custom-select').length){
		$('.custom-select').customSelect();
	}
	//for add "last" class to the last child via script for cross browser support
	if($('.comment-detail-wrapper .comment-detail-row').length || $('.comment-detail-row .comment-row').length){
		$('.comment-detail-wrapper .comment-detail-row:last').addClass('last');
		$('.comment-detail-row').each(function(index, element) {
           $(element).find('.comment-row:last').addClass('last');
        });
	}

	//for list item hover
	$('.result-box-container .item-box').off('mouseenter').on('mouseenter', function(){
		$(this).children('.item-hover-block').addClass('show');
	}).off('mouseleave').on('mouseleave', function(){
		$(this).children('.item-hover-block').removeClass('show');
	});

	//for custom checkbox
	customCheckbox();

    // header search
    $("#searchForm").submit(function(e) {
        e.preventDefault();
        var ele = $(this);
        var keyword = ele.find('input').val();
        if (keyword && keyword != '搜索') {
            window.location = ele.attr("action") + '/search/' + keyword;
        }
        else {
            return false;
        }
    });
});

function handleBrowser(){//for handle ie browser

	var appVersion = navigator.appVersion, root = $('html');

	if(appVersion.indexOf("MSIE 6.") !== -1){root.addClass('ie ltie11 ltie10 ltie9 ltie8 ltie7 ie6'); } 
	if(appVersion.indexOf("MSIE 7.") !== -1){root.addClass('ie ltie11 ltie10 ltie9 ltie8 ie7'); } 
	if(appVersion.indexOf("MSIE 8.") !== -1){root.addClass('ie ltie11 ltie10 ltie9 ie8');} else
	if(appVersion.indexOf("MSIE 9.") !== -1){root.addClass('ie ltie11 ltie10 ie9');} else
	if(appVersion.indexOf("MSIE 10.")!== -1){root.addClass('ie ltie11 ie10');} else
	if(appVersion.indexOf("MSIE 11.")!== -1){root.addClass('ie ie11');}

}

function customCheckbox(){//for custom checkbox
	var checkboxLbl = $('.custom-checkbox-lbl'),
		checkboxEle = checkboxLbl.find('input:checkbox'),
		checkboxChecked = checkboxLbl.find('input:checkbox:checked');
	checkboxChecked.each(function(index, element) {
        $(element).parents('.custom-checkbox-lbl').addClass('checked');
    });
	checkboxEle.change(function(){
		var ele = $(this);
		if(ele.is(':checked')){
			$(ele).parents('.custom-checkbox-lbl').addClass('checked');
		}else{
			$(ele).parents('.custom-checkbox-lbl').removeClass('checked');
		}
	});
}

(function($) {//for Character Limit Counter
    $.fn.extend( {
        limiter: function(limit, elem) {
            $(this).on("keyup focus blur", function() {
                setCount(this, elem);
            });
            function setCount(src, elem) {
                var chars = src.value.length;
                if (chars > limit) {
                    src.value = src.value.substr(0, limit);
                    chars = limit;
                }
                elem.html( limit - chars );
            }
            setCount($(this)[0], elem);
        }
    });
})(jQuery);
/*
$(document).ready(function(){

  //location selected
  $("#areaId").change(function() {
      //get what they selected
      var selected = $("option:selected", this).val();
      //no matter what, clear the other DD
      $("#cityId").select2("val", "请选择区");
      $("#cityId").children().remove().end().append("<option value=\"\">请选择城市</option>");
      //now load in new options if I picked a state
      if (selected == "") return;
      $.getJSON("/location", {"id": selected}, function (res, code) {
          var newoptions = "";
          results = res.results;
          for (var i = 0; i < results.length; i++) {
              //In our result, ID is what we will use for the value, and NAME for the label
              newoptions += "<option value=\"" + results[i].id + "\">" + results[i].text + "</option>";
          }
          $("#cityId").children().end().append(newoptions);
      });
      $("#locationId").select2("val", "请选择区");
      $("#locationId").children().remove().end().append("<option value=\"\">请选择区</option>");
  });
  $("#cityId").live("change", function() {
        var selected = $("option:selected", this).val();
        $("#locationId").select2("val", "请选择区");
        $("#locationId").children().remove().end().append("<option value=\"\">请选择区</option>");
        //now load in new options if I picked a state
        if(selected == "") return;
        $.getJSON("/location",{"id":selected}, function(res,code) {
          var newoptions = "";
          results = res.results;
          for(var i=0; i<results.length; i++) {
            //In our result, ID is what we will use for the value, and NAME for the label
            newoptions += "<option value=\"" + results[i].id + "\">" + results[i].text + "</option>";
          }
          $("#locationId").children().end().append(newoptions);
        });
  });
});*/

/**
 * URL转换
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
 * 根据url生成视频预览
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

if (typeof video_url != "undefined") {
    var video = createPreviewVideo(video_url);
    $('.video_image').html(video[1]);
}

var t = 0;
$(function(){
    if (t == 0) {
        messageLoading();
    }
    function messageLoading(){
        $.ajax({
            type: "POST",
            url: "/ping",
            dataType: "json",
            success: function(data) {
                if (data.result == 0) {
                    var inboxUnread = data.data.inboxUnread,
                        notityUnread = data.data.notityUnread;
                    if (parseInt(inboxUnread) > 0) {
                        if ($('.inbox_loading span').length > 0) {
                            $('.inbox_loading span').html(inboxUnread);
                        }
                        else {
                            $('.inbox_loading').append('<span class="badge">' + inboxUnread + '</span>');
                        }
                    }
                    else {
                        $('.inbox_loading span').remove();
                    }
                    if (parseInt(notityUnread) > 0) {
                        if ($('.notify_loading span').length > 0) {
                            $('.notify_loading span').html(notityUnread);
                        }
                        else {
                            $('.notify_loading').append('<span class="badge">' + notityUnread + '</span>');
                        }
                    }
                    else {
                        $('.notify_loading span').remove();
                    }
                }
            }
        });
    }
    t = setInterval(messageLoading, 30000);
});