/*custom script*/
jQuery(document).ready(function($) {
    //for handle IE browser
    handleBrowser();

    //for custom radio
    if($('.custom-radio-lbl').length){
        customRadio();
    }

    //for custom select
    if($('.basic-suctom-select').length){
        $('.basic-suctom-select').customSelect();
    }

    if($('input[data-digits="true"]').length){
        $('input[data-digits="true"]').ForceNumericOnly();
    }

});

function handleBrowser(){//for handle ie browser

    var appVersion = navigator.appVersion, root = $('html');

    if(appVersion.indexOf("MSIE 6.") !== -1){root.addClass('ie ltie11 ltie10 ltie9 ltie8 ltie7 ie6'); } else
    if(appVersion.indexOf("MSIE 7.") !== -1){root.addClass('ie ltie11 ltie10 ltie9 ltie8 ie7'); } else
    if(appVersion.indexOf("MSIE 8.") !== -1){root.addClass('ie ltie11 ltie10 ltie9 ie8');} else
    if(appVersion.indexOf("MSIE 9.") !== -1){root.addClass('ie ltie11 ltie10 ie9');} else
    if(appVersion.indexOf("MSIE 10.")!== -1){root.addClass('ie ltie11 ie10');} else
    if(appVersion.indexOf("MSIE 11.")!== -1){root.addClass('ie ie11');}

}

function customRadio(){
    var radioLbl = $('.custom-radio-lbl'),
        radioEle = radioLbl.find('input:radio'),
        radioChecked = radioLbl.find('input:radio:checked');
    radioChecked.each(function(index, element) {
        $(element).parents('.custom-radio-lbl').addClass('checked');
    });

    radioEle.off('change').on('change',function(){
        var ele = $(this),
            sameName = $('body').find('input:radio[name='+ele.attr('name')+']');
        sameName.each(function(index, element) {
            $(element).parents('.custom-radio-lbl').removeClass('checked');
        });
        ele.parents('.custom-radio-lbl').addClass('checked');
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

jQuery.fn.ForceNumericOnly = function(){
    return this.each(function()
    {
        $(this).off('keyup keydown').on('keyup keydown', function(e)
        {
            var key = e.charCode || e.keyCode || 0;
            // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
            // home, end, period, and numpad decimal
            return (
            key == 8 ||
            key == 9 ||
            key == 13 ||
            key == 46 ||
            key == 110 ||
            key == 190 ||
            (key >= 35 && key <= 40) ||
            (key >= 48 && key <= 57) ||
            (key >= 96 && key <= 105));
        });
    });
};

/* mCustomScrollbar */
(function($){
    $(window).load(function(){
        $(".publish-basic-all").mCustomScrollbar({
			scrollInertia:0,
            autoDraggerLength:true,         
            set_height:"100%",
            advanced:{
                autoScrollOnFocus:false,
                updateOnContentResize:true
            }
        });
    });
})(jQuery);

$(window).load(function(){
    $("form").submit(function(){
        $(window).off('beforeunload');
    });
    $("a").click(function() {
        $(window).off('beforeunload');
    });
    function offBeforeUnload(event) {
        $(window).off('beforeunload');
    }
    function windowBeforeUnload() {
        var warning="绂诲紑椤甸潰涔嬪墠璇蜂繚瀛樻偍鐨勯」鐩紒";
        return warning;
    }
    $(window).on('beforeunload', windowBeforeUnload);
});