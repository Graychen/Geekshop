$(function() {
    $(document).bind('drop dragover', function (e) {
        e.preventDefault();
    });

    if (typeof publish_upload_url != "undefined") {
        // 姹夊瓧
        jQuery.validator.addMethod("chcharacter", function(value, element) {
            var tel = /^[\u4e00-\u9fa5]+$/;
            return this.optional(element) || (tel.test(value));
        }, "璇疯緭鍏ヤ腑鏂囨眽瀛�");

        // 韬唤璇佸彿鐮侀獙璇�
        jQuery.validator.addMethod("idcardno", function(value, element) {
            return this.optional(element) || isIdCardNo(value);
        }, "璇锋纭緭鍏ヨ韩浠借瘉鍙风爜");

        // 鎵嬫満鍙风爜楠岃瘉
        jQuery.validator.addMethod("mobile", function(value, element) {
            var length = value.length;
            return this.optional(element) || (length == 11 && /^(((1[0-9]{2})|(15[0-9]{1}))+\d{8})$/.test(value));
        }, "鎵嬫満鍙风爜鏍煎紡閿欒");

        jQuery.validator.addMethod("selectBank", function(value, element) {
            alert($(element).val());
            return this.optional(element) || $(element).val();
        }, "璇烽€夋嫨鎮ㄧ殑鏀舵閾惰");

        //鎻愪氦璁よ瘉璧勬枡楠岃瘉
        $("#IdentityForm").validate({
            rules: {
                realname: {
                    required: true,
                    chcharacter: true,
                    minlength : 2
                },
                idNumber: {
                    required: true,
                    idcardno: true
                },
                phone: {
                    mobile: true
                },
                holder: {
                    required: true,
                    chcharacter: true,
                    minlength : 2
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

        //for publish basic file upload
        var fund_upload_url = publish_upload_url;
        $('.publish-basic-all').each(function (index, element) {
            var rewardNo = 1,
                reward_upload_no = $(element).find('.reward-img-box').size();
            var reward_image_container = $(element).find('.reward-img-box');

            for (var i = 1; i <= reward_upload_no; i++) {
                var dropZonebox = $('#fileupload_' + i).parent('.reward-image-lbl');
                var uploadHander = $('#fileupload_' + i);
                uploadHander.fileupload({
                    url: fund_upload_url + "?type=" + uploadHander.data("type"),
                    dataType: 'json',
                    dropZone: dropZonebox,
                    maxNumberOfFiles: 1,
                    getNumberOfFiles: 1,
                    done: function (e, data) {
                        var reward_image_container = $(this).parents('.reward-img-box'),
                            current_reward_id = 1,
                            reward_image_index = i,
                            reward_image_filebox = reward_image_container.find('.reward-image-lbl'),
                            reward_image_loader = reward_image_container.find('.reward-image-loader');

                        $.each(data.result.files, function (index, file) {
                            $('#publish-reward-' + current_reward_id + ' .reward-file-upload-hidden').val('true').focus().blur();
                            var newImage = '<img src="' + file.url + '">',
                                imageWithClose = '<div class="reward-uploaded-image"><img src="' + file.url + '" data-url="'+file.deleteUrl+'" /></div><a class="reward-image-remove"></a>';
                            setTimeout(function () {
                                reward_image_filebox.hide();
                                reward_image_loader.hide();
                                reward_image_container.find('.uploaded-image-outer').html(imageWithClose);
                                $('#publish-reward-preview-' + current_reward_id).find('.fund-backset-images span:eq(' + reward_image_index + ')').html(newImage);
                            }, 300);
                        });
                    },
                    progressall: function (e, data) {
                        var reward_image_container = $(this).parents('.reward-img-box'),
                            reward_image_loader = reward_image_container.find('.reward-image-loader');
                        reward_image_loader.show();
                        reward_image_container.siblings('ul').hide();
                    }
                }).on('fileuploadfail', function (e, data) {
                    $.each(data.files, function (index, file) {
                        alert('File upload failed.');
                    });
                }).prop('disabled', !$.support.fileInput).parent().addClass($.support.fileInput ? undefined : 'disabled');
            }
        });

        $('.reward-image-remove').live("click", function () {
            var eTarget = $(this);
            var reward_image_container = eTarget.parents('.reward-img-box'),
                reward_image_filebox = reward_image_container.find('.reward-image-lbl'),
                reward_uploaded_image = reward_image_container.find('.reward-uploaded-image');
            var url = reward_uploaded_image.find('img').attr("data-url");
            $.ajax({
                type: "POST",
                url: url,
                dataType: "json",
                success: function(data) {
                    if (data.result == 0) {
                        eTarget.remove();
                        reward_uploaded_image.remove();
                        reward_image_filebox.show();
                    }
                }
            });
        });
    }
});
/**
 * 韬唤璇佸彿鐮侀獙璇�
 */
function isIdCardNo(num) {
    var factorArr = new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1);
    var parityBit=new Array("1","0","X","9","8","7","6","5","4","3","2");
    var varArray = new Array();
    var intValue;
    var lngProduct = 0;
    var intCheckDigit;
    var intStrLen = num.length;
    var idNumber = num;
    if ((intStrLen != 15) && (intStrLen != 18)) {
        return false;
    }
    for(i=0;i<intStrLen;i++) {
        varArray[i] = idNumber.charAt(i);
        if ((varArray[i] < '0' || varArray[i] > '9') && (i != 17)) {
            return false;
        } else if (i < 17) {
            varArray[i] = varArray[i] * factorArr[i];
        }
    }

    if (intStrLen == 18) {
        var date8 = idNumber.substring(6,14);
        if (isDate8(date8) == false) {
            return false;
        }
        for(i=0;i<17;i++) {
            lngProduct = lngProduct + varArray[i];
        }
        intCheckDigit = parityBit[lngProduct % 11];
        if (varArray[17] != intCheckDigit) {
            return false;
        }
    }
    else{ //length is 15
        var date6 = idNumber.substring(6,12);
        if (isDate6(date6) == false) {

            return false;
        }
    }
    return true;
}

function isDate8(sDate) {
    if(!/^[0-9]{8}$/.test(sDate)) {
        return false;
    }
    var year, month, day;
    year = sDate.substring(0, 4);
    month = sDate.substring(4, 6);
    day = sDate.substring(6, 8);
    var iaMonthDays = [31,28,31,30,31,30,31,31,30,31,30,31]
    if (year < 1700 || year > 2500) return false
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) iaMonthDays[1]=29;
    if (month < 1 || month > 12) return false
    if (day < 1 || day > iaMonthDays[month - 1]) return false
    return true
}

function isDate6(sDate) {
    if(!/^[0-9]{6}$/.test(sDate)) {
        return false;
    }
    var year, month, day;
    year = sDate.substring(0, 4);
    month = sDate.substring(4, 6);
    if (year < 1700 || year > 2500) return false
    if (month < 1 || month > 12) return false
    return true
}