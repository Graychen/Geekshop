var areas = [];
   $(document).ready(function(e) {
       setInterval(autosubmit, 30000);
       $('.publish-menu-item').live("click", function(event) {
           event.preventDefault();
           //TODO: call form validate, then autosubmit.
           //if ($("#publish-basic-form-1").valid()) {
           autosubmit($(this).attr('href'));
           //}
       });
       $('.save-btn').live('click', function(){
           autosubmit();
       });
       $("#basic-province").on("change", function(e) {
           var selected = $("option:selected", this).val();
           $("select[name='cityId']").children().remove().end().append("<option value=\"\">璇烽€夋嫨鍩庡競</option>");
           $("select[name='cityId']").val("").change();
           if (selected == "") {
               return;
           }
           if (areas.length < 1) {
               $.ajax({
                   dataType: "json",
                   url: '/areas.json',
                   cache: true,
                   data: {"id": $("option:selected", this).val()},
                   success: function (res, code) {
                       areas = res;
                       var newoptions = "";
                       results = areas[selected];
                       var length = 0;
                       for (i in results) {
                           length++;
                       }
                       if (length <= 1) {
                           for (i in results) {
                               results = results[i].area;
                           }
                       }
                       for (i in results) {
                           newoptions += "<option value=\"" + i + "\">" + results[i].name + "</option>";
                       }
                       $("select[name='cityId']").children().end().append(newoptions);
                   }
               });
           }
           else {
               var newoptions = "";
               results = areas[selected];
               var length = 0;
               for (i in results) {
                   length++;
               }
               if (length <= 1) {
                   for (i in results) {
                       results = results[i].area;
                   }
               }
               for (i in results) {
                   newoptions += "<option value=\"" + i + "\">" + results[i].name + "</option>";
               }
               $("select[name='cityId']").children().end().append(newoptions);
           }
       });

       $('.preview_section a').each(function(index, elem) {
          $(elem).attr("href", "javascript:void(0);");
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
   
       //for character limit in textarea
       if($(".basic-short-blurb-area").length){
           var elem = $(".short-blurb-counter .current");
           $(".basic-short-blurb-area").limiter(140, elem);
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
               }
           });
       }
       
       //for publish basic right scrollbar
       if($(".publish-basic-right-scroll").length){
           $(".publish-basic-right-scroll").mCustomScrollbar({
               scrollInertia:400,
               autoDraggerLength:true,
               set_height:"100%",
              advanced:{
                   updateOnContentResize:true
               }
           });
       }
       
       //for show basic live preview hover
       if($('.basic-livepreview-box').length){
           $('.basic-livepreview-box').off('moussenter').on('mouseenter', function(){
               $(this).children('.basic-hover-block').addClass('show');            
           }).off('mouseleave').on('mouseleave', function(){
               $(this).children('.basic-hover-block').removeClass('show');
           });
       }           

	//for publish basic file upload	
	if($('.basic-file-upload').length){
		$('.basic-file-upload').fileupload({
			url: basic_upload_url,
			dataType: 'json',
			maxNumberOfFiles: 1,			
			done: function (e, data) {
                $.each(data.result.files, function (index, file) {
                    $('.basic-file-upload-hidden').val('true').focus().blur();
                    var newImage = '<img src="'+file.thumb+'">',
						imageWithClose = '<div class="basic-uploaded-img"><img src="'+file.thumb+'" data-url="'+file.deleteUrl+'" /><a class="basic-uploaded-close"></a></div>';
					setTimeout(function(){
						$('.basic-fileupload-block').hide();
						$('.basic-fileupload-container .basic-livepreview-progress-bar').hide();
						$('.basic-fileupload-container .basic-livepreview-progress-bar .basic-livepreview-progress').css({width:'0%'});
						$('.basic-livepreview-img span').html(newImage);          
						$('.basic-uploaded-img-space').html(imageWithClose);
					},300);		
				});
			},
			progressall: function (e, data) {
				var progress = parseInt(data.loaded / data.total * 100, 10);
				$('.basic-fileupload-container .basic-livepreview-progress-bar').show();
				$('.basic-fileupload-container .basic-livepreview-progress-bar .basic-livepreview-progress').css({width:progress + '%'});
			}
		}).on('fileuploadfail', function (e, data) {
			$.each(data.files, function (index, file) {
				alert('涓婁紶鏂囦欢澶辫触銆�');
			});
		}).prop('disabled', !$.support.fileInput).parent().addClass($.support.fileInput ? undefined : 'disabled'); 
		
		//for remove uploaded image
		$('.basic-uploaded-img-space').off('click').on('click','.basic-uploaded-close', function(){
			var uploadeBox = $(this).parent('.basic-uploaded-img');
            var url = uploadeBox.find('img').attr("data-url");
            $.ajax({
                type: "POST",
                url: url,
                dataType: "json",
                success: function(data) {
                    if (data.result == 0) {
                        uploadeBox.remove();
                        $('.basic-fileupload-block').show();
                        $('.basic-livepreview-img span img').attr('src', '/images/image-place-holder-basic.png');
                        $('.basic-file-upload-hidden').val('').focus().blur();
                    }
                }
            });
		});
	}

       //for basic publish tags
       if($('#basic-tags').length){
          var sampleTags = ['c++', 'java', 'php', 'coldfusion', 'javascript', 'asp', 'ruby', 'python', 'c', 'scala', 'groovy', 'haskell', 'perl', 'erlang', 'apl', 'cobol', 'go', 'lua'];
           $('#basic-tags').tagit({
               availableTags: sampleTags,
               placeholderText:'璇疯緭鍏ョ浉鍏虫爣绛�',
               singleField: true,
               singleFieldNode: $('#basic-tags'),
              highlightElement:'.basic-livepreview-title .preview-tag',
               afterTagAdded: function(evt, ui) {
                   $('.basic-livepreview-title .preview-tag').text($('#basic-tags').val());    
                   $('#basic-tags').blur();            
               },
               afterTagRemoved: function(evt, ui) {
                   $('.basic-livepreview-title .preview-tag').text($('#basic-tags').val());
                   if($('#basic-tags').val()==''){
                       $('.basic-livepreview-title .preview-tag').text('Tag');
                   }
                   $('#basic-tags').blur();
               }
           });
       }
      
       //for funding time date picker
       if($('#funding-time-from').length){
           $('#funding-time-from').datepicker({
               dateFormat: "yy-mm-dd",
               onSelect: function (selected) {
                   $("#funding-time-to").datepicker("option","minDate", selected);
                   $("#funding-time-from").blur();             
                   //for get date difference
                   var d1 = $('#funding-time-to').datepicker('getDate');
                   var d2 = $('#funding-time-from').datepicker('getDate');
                   var diff = 0;
                   if (d1 && d2) {
                       diff = Math.floor((d1.getTime() - d2.getTime()) / 86400000);
                       $('.basic-livepreview-column > h5.days-left > span').text(diff);
                   }               
               }
           });
       }
       
       if($('#funding-time-to').length){
           $('#funding-time-to').datepicker({
               dateFormat: "yy-mm-dd",
               onSelect: function (selected) {
                   $("#funding-time-from").datepicker("option","maxDate", selected);
                   $("#funding-time-to").blur();               
                   //for get date difference
                   var d1 = $('#funding-time-to').datepicker('getDate');
                   var d2 = $('#funding-time-from').datepicker('getDate');
                   var diff = 0;
                  if (d1 && d2) {
                       diff = Math.floor((d1.getTime() - d2.getTime()) / 86400000);
                       $('.basic-livepreview-column > h5.days-left > span').text(diff);
                  }
               }       
           });
       }       
       
       //for manage funding time radio
       if($('.custom-radio-lbl input:radio[name="funding_time_radio"]').length){
          $('.custom-radio-lbl input:radio[name="funding_time_radio"]').change(function(){
               if($(this).is(':checked')){
                   $('.funding-time-inputs').hide();
                   $('.funding-time-inputs input').attr('disabled', true);
                   $(this).parents('.funding-time-box').find('.funding-time-inputs').show();
                   $(this).parents('.funding-time-box').find('.funding-time-inputs input').attr('disabled', false);
               }
           });
       }   
       
       //for change text in preview box
       $(document).on('keydown keyup change', 'input, select, textarea', function(){
           var eValue = $(this).val(),
               targetEle = $(this).attr('data-preview'),
               defaultTxt = $(this).attr('data-default-text');
           if(targetEle && eValue){
               if ($(this).is("select")) {
                   if ($(this).is("#basic-city")) {
                       $(targetEle).text($("#basic-province").find("option:selected").text()+" "+$(this).find("option:selected").text());
                   }
                   else {
                       $(targetEle).text($(this).find("option:selected").text());
                   }
               }
               else {
                   $(targetEle).text(eValue);
               }
           }else{
              if(defaultTxt && targetEle){
                   $(targetEle).text(defaultTxt);
              }
           }
       });
       
       //for add highlight class to relative field in preview box on focus
       $(document).on('focus', 'input, select, textarea', function(){
           var targetEle = $(this).attr('data-highlight');         
           if(targetEle){
               $(targetEle).addClass('highlight');
           }           
       });
       
       //for remove highlight class from relative field in preview box on focus out
       $(document).on('blur', 'input, select, textarea', function(){
           var targetEle = $(this).attr('data-highlight');                 
           if(targetEle){
              $(targetEle).removeClass('highlight');
           }           
       });

       $.validator.addMethod('wordCount', function(value, element, params) {
             var typedWords = jQuery.trim(value).split(' ').length;
             return value == '' || (typedWords >= params[0] && typedWords <= params[1]);
       }); 
   });
   
   function hasValid(element){
       //alert(element.attr('class'));
       return ( element.hasClass('valid') || element.attr('aria-invalid') == 'true' || !element.attr('aria-invalid') );
   }

   function autosubmit(redirect_url) {
       $('.operation-msg').html("已经保存...").show();
       $.post("", $("form").serialize(), function(result){
           if (result.result == 0) {
               $('.operation-msg').html("宸叉垚鍔熶繚瀛�").show();
               $('.operation-msg').fadeOut(1000);
               if (redirect_url) {
                   window.location = redirect_url;
               }
           }
           else if(result.result == -1 && result.requestMethod == 'redirect') {
               $(window).off('beforeunload');
               window.location = result.data;
           }
       }, 'json');
   }