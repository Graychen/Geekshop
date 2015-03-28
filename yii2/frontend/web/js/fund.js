var no_of_rewads='';
$(document).ready(function(e) {
    $(document).bind('drop dragover', function (e) {
        e.preventDefault();
    });

    setInterval(autosubmit, 30000);
    $('.publish-menu-item').live("click", function(event) {
        event.preventDefault();
        autosubmit($(this).attr('href'));
    });
    $('.save-btn').click(function() {
        autosubmit();
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

	no_of_rewads = $('.publish-fund-left-scroll .publish-reward-box').size();	
	manageRewardIndex();	
	//for publish basic left scrollbar
	if($(".publish-fund-left-scroll").length){
		$(".publish-fund-left-scroll").mCustomScrollbar({
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
	if($(".publish-fund-right-scroll").length){
		$(".publish-fund-right-scroll").mCustomScrollbar({
			scrollInertia:0,
			autoDraggerLength:true,
			set_height:"100%",
			advanced:{
				updateOnContentResize:true
			}
		});
	}
	
	update_reward_remove_button();				
	
	//for bind jquery file uploader
	$('.publish-fund-left-scroll .publish-reward-box').each(function(index, element) {
		var rewardNo = $(element).attr('id').replace('publish-reward-',''),
			reward_upload_no = $(element).find('.reward-img-box').size();
			
		for(var i=1;i<=reward_upload_no;i++)
		{	
      var uploadFileHander = $('.upload-' + i, $('#publish-reward-'+rewardNo) );
			var dropZonebox = uploadFileHander.parent('.reward-image-lbl');
			uploadFileHander.fileupload({
				url: fund_upload_url + "/sid/" + $("[name=id]", uploadFileHander.parents('form')).val() + "?index=" + i,
				dataType: 'json',	
				dropZone: dropZonebox,
				maxNumberOfFiles: 1,
				getNumberOfFiles:1,					
				done: function (e, data) {
					var reward_image_container = $(this).parents('.reward-img-box'),
                        current_reward_id = $(this).parents('.publish-reward-box').attr('id').replace('publish-reward-',''),
                        reward_image_index = reward_image_container.index(),
						reward_image_filebox = reward_image_container.find('.reward-image-lbl'),
						reward_image_loader = reward_image_container.find('.reward-image-loader');

                    $.each(data.result.files, function (index, file) {
                        $('#publish-reward-'+current_reward_id+' .reward-file-upload-hidden').val('true').focus().blur();
                        var newImage = '<img src="'+file.thumb+'">',
							imageWithClose = '<div class="reward-uploaded-image"><img src="'+file.thumb+'" data-url="'+file.deleteUrl+'"></div><a class="reward-image-remove"></a>';
						setTimeout(function(){
							reward_image_filebox.hide();
							reward_image_loader.hide();
							reward_image_container.find('.uploaded-image-outer').html(imageWithClose);
							$('#publish-reward-preview-'+current_reward_id).find('.fund-backset-images span:eq('+reward_image_index+')').html(newImage);
						},300);							
					});
				},
				progressall: function (e, data) {
					var reward_image_container = $(this).parents('.reward-img-box'),						
						reward_image_loader = reward_image_container.find('.reward-image-loader');
						reward_image_loader.show();
				}
			}).on('fileuploadfail', function (e, data) {
				$.each(data.files, function (index, file) {
					alert('File upload failed.');
				});
			}).prop('disabled', !$.support.fileInput).parent().addClass($.support.fileInput ? undefined : 'disabled');								
		}					
	});			
	
	//for funding time date picker
	$('.publish-fund-left-scroll .publish-reward-box').each(function(index, element) {
		var rewardNo = $(element).attr('id').replace('publish-reward-','');	
		//for bind jquery ui datepicker	
        $('#reward_'+rewardNo+'_delivery_time_from').datepicker({
			dateFormat: 'yy-mm-dd',
			onSelect: function (selected) {
				$('#reward_'+rewardNo+'_delivery_time_to').datepicker('option','minDate', selected);
				$('#reward_'+rewardNo+'_delivery_time_from').blur();
				//for get date difference
				var d1 = $('#reward_'+rewardNo+'_delivery_time_to').datepicker('getDate');
				var d2 = $('#reward_'+rewardNo+'_delivery_time_from').datepicker('getDate');
				var diff = 0;
				if (d1 && d2) {
					diff = Math.floor((d1.getTime() - d2.getTime()) / 86400000);
					$('#publish-reward-preview-'+rewardNo).find('.after-success-days > b').text(diff);
				}	
			}
		});
		
		$('#reward_'+rewardNo+'_delivery_time_to').datepicker({
			dateFormat: 'yy-mm-dd',
			onSelect: function (selected) {
				$('#reward_'+rewardNo+'_delivery_time_from').datepicker('option','maxDate', selected);
				$('#reward_'+rewardNo+'_delivery_time_to').blur();
				//for get date difference
				var d1 = $('#reward_'+rewardNo+'_delivery_time_to').datepicker('getDate');
				var d2 = $('#reward_'+rewardNo+'_delivery_time_from').datepicker('getDate');
				var diff = 0;
				if (d1 && d2) {
					diff = Math.floor((d1.getTime() - d2.getTime()) / 86400000);
					$('#publish-reward-preview-'+rewardNo).find('.after-success-days > b').text(diff);
				}
			}		
		});
		
		//for bind form validation
		var fundErrorContainer = $(element).find('.publish-fund-errors'),
			fundErrorLabelContainer = fundErrorContainer.find('ul');

		/*$(element).find('form').validate({
            errorPlacement: function(error, element) {
                $(element).parent().addClass('with-error');
            },
            success: function(label, element) {
                console.log('form validate orginal success.');
            },
            submitHandler: function(form) {
				//autosubmit();
			}
		});*/
		
    });										
	
	//for live preview
	$(document).on('keyup keydown change', '.est-delivery-radio-group input:radio, .reward-limit-select, .shipping-fee-select, textarea, input', function(e){
		var eTarget = $(e.target);	
		//for hide/show reward limit input fields
		if(eTarget.is('.reward-limit-select')){
			var currentRewardNo = eTarget.parents('.publish-reward-box').attr('id').replace('publish-reward-','');
			if(eTarget.val() == 'Yes'){
				eTarget.parents('.basic-form-ele').find('.publish-fund-input-small input').attr({disabled:false}).show();
				$('#publish-reward-preview-'+currentRewardNo).find('.fund-backset-module-box > h5 > .left-reward').show();
				eTarget.parents('.basic-form-ele').find('label.error').show();
			}else{
				eTarget.parents('.basic-form-ele').find('.publish-fund-input-small input').attr({disabled:true}).hide();
				$('#publish-reward-preview-'+currentRewardNo).find('.fund-backset-module-box > h5 > .left-reward').hide();
				eTarget.parents('.basic-form-ele').find('label.error').hide();
			}	
		}
		//for hide/show shipping fee input fields
		if(eTarget.is('.shipping-fee-select')){
			var currentRewardNo = eTarget.parents('.publish-reward-box').attr('id').replace('publish-reward-','');
			if(eTarget.val() == 'No'){
				eTarget.parents('.basic-form-ele').find('.publish-fund-input-small input').attr({disabled:false}).show();
				$('#publish-reward-preview-'+currentRewardNo).find('.shippin-fee-amnt').show();
				eTarget.parents('.basic-form-ele').find('label.error').show();
                $('.fund-backset-module #publish-reward-preview-'+currentRewardNo).find(".shipping-fee .free").hide();
                $('.fund-backset-module #publish-reward-preview-'+currentRewardNo).find(".shipping-fee .no-free").show();
			}else{
				eTarget.parents('.basic-form-ele').find('.publish-fund-input-small input').attr({disabled:true}).hide();
				$('#publish-reward-preview-'+currentRewardNo).find('.shippin-fee-amnt').hide();
				eTarget.parents('.basic-form-ele').find('label.error').hide();
                $('.fund-backset-module #publish-reward-preview-'+currentRewardNo).find(".shipping-fee .no-free").hide();
                $('.fund-backset-module #publish-reward-preview-'+currentRewardNo).find(".shipping-fee .free").show();
			}
		}
		//for manage funding time radio		
		else if(eTarget.is('.est-delivery-radio-group input:radio')){
			if(eTarget.is(':checked')){
				eTarget.parents('.est-delivery-radio-group').find('.funding-time-inputs').hide();
				eTarget.parents('.est-delivery-radio-group').find('.funding-time-inputs input').attr('disabled', true);
				eTarget.parents('.funding-time-box').find('.funding-time-inputs').show();
				eTarget.parents('.funding-time-box').find('.funding-time-inputs input').attr('disabled', false);
			}	
		}
        else if (eTarget.is('.reward-file-upload')) {
            // no need to trigger preview.
        }
		else{
			var eValue = eTarget.val(),
				targetEle = eTarget.attr('data-preview'),
				defaultTxt = eTarget.attr('data-default-text');
		    var currentRewardNo = eTarget.parents('.publish-reward-box').attr('id').replace('publish-reward-','');
			if(targetEle && eValue){
				$('.fund-backset-module #publish-reward-preview-'+currentRewardNo).find(targetEle).text(eValue);
			}else{
				if(defaultTxt && targetEle && !eValue){
					$('.fund-backset-module #publish-reward-preview-'+currentRewardNo).find(targetEle).text(defaultTxt);
				}
			}
		}		
	});	
	
	//for add highlight class to relative field in preview box on focus
	$(document).on('focus', 'input, select, textarea', function(){		
		var ele = $(this),
			targetEle = $(this).attr('data-highlight'),
			currentRewardNo = ele.parents('.publish-reward-box').attr('id').replace('publish-reward-','');				
		if(targetEle){
			$('.fund-backset-module #publish-reward-preview-'+currentRewardNo).find(targetEle).addClass('highlight');
		}			
	});
	
	//for remove highlight class from relative field in preview box on focus out
	$(document).on('blur', 'input, select, textarea', function(){
		var ele = $(this),
			targetEle = $(this).attr('data-highlight'),
			currentRewardNo = ele.parents('.publish-reward-box').attr('id').replace('publish-reward-','');			
		if(targetEle){
			$('.fund-backset-module #publish-reward-preview-'+currentRewardNo).find(targetEle).removeClass('highlight');
		}			
	});
	
	//for add new reward
	$('.add-new-reward-btn').off('click').on('click', function(){
        //娣诲姞鏂扮殑涓€涓洖鎶ユ椂锛屽彲浠ヤ繚瀛樺埌鏁版嵁搴�
        autosubmit();
		load_new_reward();			
	});
		
	$(document).live('click', '.reward-remove-btn, .reward-image-remove', function(e){
		var eTarget = $(e.target);
		
		//for remove reward
		if(eTarget.is('.reward-remove-btn')){
			if($('.publish-reward-box').length < 1){
				return;
			}
            var parentReward = eTarget.parent('.publish-reward-box'),
				removeId = parentReward.attr('id').replace('publish-reward-',''),
                reward_uploaded_image = parentReward.find('.reward-uploaded-image');

            var url = eTarget.attr("data-url");
            $.ajax({
                type: "POST",
                url: url,
                data : {sid:removeId},
                dataType: "json",
                success: function(data) {
                    if (data.result == 0) {
                        parentReward.remove();
                        $('.fund-backset-module-inner #publish-reward-preview-'+removeId).remove();
                        update_reward_remove_button();
                        eTarget.remove();
                        manageRewardIndex();
                    }
                }
            });

            //鍒犻櫎涓€涓洖鎶ユ椂锛屽彲浠ヤ繚瀛樺埌鏁版嵁搴�
            autosubmit();
		}
		//for remove uploaded reward image
		if(eTarget.is('.reward-image-remove')){
            var reward_image_container = eTarget.parents('.reward-img-box'),
				reward_image_filebox = reward_image_container.find('.reward-image-lbl'),
                    reward_uploaded_image = reward_image_container.find('.reward-uploaded-image'),
                    reward_image_container_id = reward_image_container.index(),
                    parentReward = eTarget.parents('.publish-reward-box'),
                    removeId = parentReward.attr('id').replace('publish-reward-',''),
                    eleParents = eTarget.parents('.basic-form-ele');

            var url = reward_uploaded_image.find('img').attr("data-url");
            $.ajax({
                type: "POST",
                url: url,
                dataType: "json",
                success: function(data) {
                    if (data.result == 0) {
                        $('#publish-reward-preview-'+removeId+' .fund-backset-images span:eq('+reward_image_container_id+') img').remove();
                        reward_uploaded_image.remove();
                        eTarget.remove();
                        reward_image_filebox.show();
                    }
                }
            });

            if(eleParents.find('.reward-uploaded-image').length < 1){
                eleParents.find('.reward-file-upload-hidden').val('').focus().blur();
            }
		}
	});
								
});

function load_new_reward() {
    //send unique id for new reward
    no_of_rewads++;

    $.ajax({
        type: 'POST',
        url: fund_newform,
        data: {reward_no: no_of_rewads},
        success: function (data) {
            $('.new-reward-data-container').html(data);
            var newRewadform = $('.new-reward-data-container').find('.publish-reward-box');
            var newModule = $('.new-reward-data-container').find('.fund-backset-module-outer');
            $('.fund-rewards-container').append(newRewadform);
            $('.fund-backset-module-inner').append(newModule);

            //for bind custom radio
            customRadio();
            var part = $('<div/>').html(data);
            no_of_rewads = part.find('.publish-reward-box').attr('id').replace('publish-reward-','');
            //for bind Force Numeric
            $('#publish-reward-'+no_of_rewads).find('input[data-digits="true"]').ForceNumericOnly();
            //for bind custom select
            $('#publish-reward-'+no_of_rewads).find('.basic-suctom-select').customSelect();

            //for bind form validation on new reward
            var fundErrorContainer = $('#publish-reward-'+no_of_rewads).find('.publish-fund-errors'),
                fundErrorLabelContainer = fundErrorContainer.find('ul');

            //for bind file uploader
            var new_reward_file_fields = $('#publish-reward-'+no_of_rewads).find('.reward-img-box').size();
            for(var i=1;i<=new_reward_file_fields;i++)
            {
                var uploadFileHander = $('.upload-' + i, $('#publish-reward-'+no_of_rewads) );
                var dropZonebox = uploadFileHander.parent('.reward-image-lbl');
                uploadFileHander.fileupload({
                    url: fund_upload_url + "/sid/" + $("[name=id]", uploadFileHander.parents('form')).val() + "?index=" + i,
                    dataType: 'json',
                    dropZone: dropZonebox,
                    maxNumberOfFiles: 1,
                    done: function (e, data) {
                        var reward_image_container = $(this).parents('.reward-img-box'),
                            current_reward_id = $(this).parents('.publish-reward-box').attr('id').replace('publish-reward-','');
                        reward_image_index = reward_image_container.index(),
                            reward_image_filebox = reward_image_container.find('.reward-image-lbl'),
                            reward_image_loader = reward_image_container.find('.reward-image-loader');

                        $.each(data.result.files, function (index, file) {
                            var newImage = '<img src="'+file.thumb+'">',
                                imageWithClose = '<div class="reward-uploaded-image"><img src="'+file.thumb+'" data-url="'+file.deleteUrl+'"></div><a class="reward-image-remove"></a>';
                            setTimeout(function(){
                                reward_image_filebox.hide();
                                reward_image_loader.hide();
                                reward_image_container.append(imageWithClose);
                                $('#publish-reward-preview-'+current_reward_id).find('.fund-backset-images span:eq('+reward_image_index+')').html(newImage);
                            },300);
                        });
                    },
                    progressall: function (e, data) {
                        var reward_image_container = $(this).parents('.reward-img-box'),
                            reward_image_loader = reward_image_container.find('.reward-image-loader');
                        reward_image_loader.show();
                    }
                }).on('fileuploadfail', function (e, data) {
                    $.each(data.files, function (index, file) {
                        alert('鏂囦欢涓婁紶澶辫触銆�');
                    });
                }).prop('disabled', !$.support.fileInput).parent().addClass($.support.fileInput ? undefined : 'disabled');
            }
            $(".publish-fund-right-scroll").mCustomScrollbar("update");
            $(".publish-fund-left-scroll").mCustomScrollbar("update");

            update_reward_remove_button();

            manageRewardIndex();
        }
    });
}

function update_reward_remove_button(){
	$('.reward-remove-btn').toggleClass('with-show', $('.publish-reward-box').length > 1);
}

function manageRewardIndex(){
	$('.publish-fund-left-scroll .publish-reward-box').each(function(index, element) {
        var _id = index+1;
		$(this).find('.reward-title').text('鍥炴姤 '+ _id);
        //$(this).attr('id', 'publish-reward-' + _id);
	})
}

function hasValid(element){
	return (element.attr('aria-invalid') == 'true' || !element.attr('aria-invalid'));
}

function autosubmit(redirect_url) {
  var datas = [];$("form").each(function() {datas.push($(this).serializeArray());});
  var data = []; $.each(datas, function() { var d = {}; $.each(this, function() {  d[this.name]=this.value; }); data.push( d ); });
    $('.operation-msg').html("姝ｅ湪淇濆瓨...").show();
    $.post("", {data:data}, function(result){
        if (result.result == 0) {
            $('.operation-msg').html("宸叉垚鍔熶繚瀛�");
            $('.operation-msg').fadeOut(1000);
            if (redirect_url) {
                window.location = redirect_url;
            }
        }
    }, 'json');
}