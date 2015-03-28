/*!
 * UEditor Mini鐗堟湰
 * version: 1.0.0
 * build: Tue Sep 17 2013 15:57:30 GMT+0800 (CST)
 */

(function(){

UMEDITOR_CONFIG = window.UMEDITOR_CONFIG || {};

window.UM = {
    plugins : {},

    commands : {},

    I18N : {},

    version : "1.0.0"
};

var dom = UM.dom = {};
/**
 * @file
 * @name UM.browser
 * @short Browser
 * @desc UEditor涓噰鐢ㄧ殑娴忚鍣ㄥ垽鏂ā鍧�
 */
var browser = UM.browser = function(){
    var agent = navigator.userAgent.toLowerCase(),
        opera = window.opera,
        browser = {
        /**
         * 妫€娴嬫祻瑙堝櫒鏄惁涓篒E
         * @name ie
         * @grammar UM.browser.ie  => true|false
         */
        ie		: !!window.ActiveXObject,

        /**
         * 妫€娴嬫祻瑙堝櫒鏄惁涓篛pera
         * @name opera
         * @grammar UM.browser.opera  => true|false
         */
        opera	: ( !!opera && opera.version ),

        /**
         * 妫€娴嬫祻瑙堝櫒鏄惁涓簑ebkit鍐呮牳
         * @name webkit
         * @grammar UM.browser.webkit  => true|false
         */
        webkit	: ( agent.indexOf( ' applewebkit/' ) > -1 ),

        /**
         * 妫€娴嬫祻瑙堝櫒鏄惁涓簃ac绯荤粺涓嬬殑娴忚鍣�
         * @name mac
         * @grammar UM.browser.mac  => true|false
         */
        mac	: ( agent.indexOf( 'macintosh' ) > -1 ),

        /**
         * 妫€娴嬫祻瑙堝櫒鏄惁澶勪簬鎬紓妯″紡
         * @name quirks
         * @grammar UM.browser.quirks  => true|false
         */
        quirks : ( document.compatMode == 'BackCompat' )
    };
    /**
     * 妫€娴嬫祻瑙堝櫒鏄惁澶勪负gecko鍐呮牳
     * @name gecko
     * @grammar UM.browser.gecko  => true|false
     */
    browser.gecko =( navigator.product == 'Gecko' && !browser.webkit && !browser.opera );

    var version = 0;

    // Internet Explorer 6.0+
    if ( browser.ie ){
        version = parseFloat( agent.match( /msie (\d+)/ )[1] );
        /**
         * 妫€娴嬫祻瑙堝櫒鏄惁涓� IE9 妯″紡
         * @name ie9Compat
         * @grammar UM.browser.ie9Compat  => true|false
         */
        browser.ie9Compat = document.documentMode == 9;
        /**
         * 妫€娴嬫祻瑙堝櫒鏄惁涓� IE8 娴忚鍣�
         * @name ie8
         * @grammar     UM.browser.ie8  => true|false
         */
        browser.ie8 = !!document.documentMode;

        /**
         * 妫€娴嬫祻瑙堝櫒鏄惁涓� IE8 妯″紡
         * @name ie8Compat
         * @grammar     UM.browser.ie8Compat  => true|false
         */
        browser.ie8Compat = document.documentMode == 8;

        /**
         * 妫€娴嬫祻瑙堝櫒鏄惁杩愯鍦� 鍏煎IE7妯″紡
         * @name ie7Compat
         * @grammar     UM.browser.ie7Compat  => true|false
         */
        browser.ie7Compat = ( ( version == 7 && !document.documentMode )
                || document.documentMode == 7 );

        /**
         * 妫€娴嬫祻瑙堝櫒鏄惁IE6妯″紡鎴栨€紓妯″紡
         * @name ie6Compat
         * @grammar     UM.browser.ie6Compat  => true|false
         */
        browser.ie6Compat = ( version < 7 || browser.quirks );

        browser.ie9above = version > 8;

        browser.ie9below = version < 9
    }

    // Gecko.
    if ( browser.gecko ){
        var geckoRelease = agent.match( /rv:([\d\.]+)/ );
        if ( geckoRelease )
        {
            geckoRelease = geckoRelease[1].split( '.' );
            version = geckoRelease[0] * 10000 + ( geckoRelease[1] || 0 ) * 100 + ( geckoRelease[2] || 0 ) * 1;
        }
    }
    /**
     * 妫€娴嬫祻瑙堝櫒鏄惁涓篶hrome
     * @name chrome
     * @grammar     UM.browser.chrome  => true|false
     */
    if (/chrome\/(\d+\.\d)/i.test(agent)) {
        browser.chrome = + RegExp['\x241'];
    }
    /**
     * 妫€娴嬫祻瑙堝櫒鏄惁涓簊afari
     * @name safari
     * @grammar     UM.browser.safari  => true|false
     */
    if(/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)){
    	browser.safari = + (RegExp['\x241'] || RegExp['\x242']);
    }


    // Opera 9.50+
    if ( browser.opera )
        version = parseFloat( opera.version() );

    // WebKit 522+ (Safari 3+)
    if ( browser.webkit )
        version = parseFloat( agent.match( / applewebkit\/(\d+)/ )[1] );

    /**
     * 娴忚鍣ㄧ増鏈垽鏂�
     * IE绯诲垪杩斿洖鍊间负5,6,7,8,9,10绛�
     * gecko绯诲垪浼氳繑鍥�10900锛�158900绛�.
     * webkit绯诲垪浼氳繑鍥炲叾build鍙� (濡� 522绛�).
     * @name version
     * @grammar     UM.browser.version  => number
     * @example
     * if ( UM.browser.ie && UM.browser.version == 6 ){
     *     alert( "Ouch!灞呯劧鏄竾鎭剁殑IE6!" );
     * }
     */
    browser.version = version;

    /**
     * 鏄惁鏄吋瀹规ā寮忕殑娴忚鍣�
     * @name isCompatible
     * @grammar  UM.browser.isCompatible  => true|false
     * @example
     * if ( UM.browser.isCompatible ){
     *     alert( "浣犵殑娴忚鍣ㄧ浉褰撲笉閿欏摝锛�" );
     * }
     */
    browser.isCompatible =
        !browser.mobile && (
        ( browser.ie && version >= 6 ) ||
        ( browser.gecko && version >= 10801 ) ||
        ( browser.opera && version >= 9.5 ) ||
        ( browser.air && version >= 1 ) ||
        ( browser.webkit && version >= 522 ) ||
        false );
    return browser;
}();
//蹇嵎鏂瑰紡
var ie = browser.ie,
    webkit = browser.webkit,
    gecko = browser.gecko,
    opera = browser.opera;
/**
 * @file
 * @name UM.Utils
 * @short Utils
 * @desc UEditor灏佽浣跨敤鐨勯潤鎬佸伐鍏峰嚱鏁�
 * @import editor.js
 */
var utils = UM.utils = {
    /**
     * 閬嶅巻鏁扮粍锛屽璞★紝nodeList
     * @name each
     * @grammar UM.utils.each(obj,iterator,[context])
     * @since 1.2.4+
     * @desc
     * * obj 瑕侀亶鍘嗙殑瀵硅薄
     * * iterator 閬嶅巻鐨勬柟娉�,鏂规硶鐨勭涓€涓槸閬嶅巻鐨勫€硷紝绗簩涓槸绱㈠紩锛岀涓変釜鏄痮bj
     * * context  iterator鐨勪笂涓嬫枃
     * @example
     * UM.utils.each([1,2],function(v,i){
     *     console.log(v)//鍊�
     *     console.log(i)//绱㈠紩
     * })
     * UM.utils.each(document.getElementsByTagName('*'),function(n){
     *     console.log(n.tagName)
     * })
     */
    each : function(obj, iterator, context) {
        if (obj == null) return;
        if (obj.length === +obj.length) {
            for (var i = 0, l = obj.length; i < l; i++) {
                if(iterator.call(context, obj[i], i, obj) === false)
                    return false;
            }
        } else {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if(iterator.call(context, obj[key], key, obj) === false)
                        return false;
                }
            }
        }
    },

    makeInstance:function (obj) {
        var noop = new Function();
        noop.prototype = obj;
        obj = new noop;
        noop.prototype = null;
        return obj;
    },
    /**
     * 灏唖ource瀵硅薄涓殑灞炴€ф墿灞曞埌target瀵硅薄涓�
     * @name extend
     * @grammar UM.utils.extend(target,source)  => Object  //瑕嗙洊鎵╁睍
     * @grammar UM.utils.extend(target,source,true)  ==> Object  //淇濈暀鎵╁睍
     */
    extend:function (t, s, b) {
        if (s) {
            for (var k in s) {
                if (!b || !t.hasOwnProperty(k)) {
                    t[k] = s[k];
                }
            }
        }
        return t;
    },
    extend2:function (t) {
        var a = arguments;
        for (var i = 1; i < a.length; i++) {
            var x = a[i];
            for (var k in x) {
                if (!t.hasOwnProperty(k)) {
                    t[k] = x[k];
                }
            }
        }
        return t;
    },
    /**
     * 妯℃嫙缁ф壙鏈哄埗锛宻ubClass缁ф壙superClass
     * @name inherits
     * @grammar UM.utils.inherits(subClass,superClass) => subClass
     * @example
     * function SuperClass(){
     *     this.name = "灏忔潕";
     * }
     * SuperClass.prototype = {
     *     hello:function(str){
     *         console.log(this.name + str);
     *     }
     * }
     * function SubClass(){
     *     this.name = "灏忓紶";
     * }
     * UM.utils.inherits(SubClass,SuperClass);
     * var sub = new SubClass();
     * sub.hello("鏃╀笂濂�!"); ==> "灏忓紶鏃╀笂濂斤紒"
     */
    inherits:function (subClass, superClass) {
        var oldP = subClass.prototype,
            newP = utils.makeInstance(superClass.prototype);
        utils.extend(newP, oldP, true);
        subClass.prototype = newP;
        return (newP.constructor = subClass);
    },

    /**
     * 鐢ㄦ寚瀹氱殑context浣滀负fn涓婁笅鏂囷紝涔熷氨鏄痶his
     * @name bind
     * @grammar UM.utils.bind(fn,context)  =>  fn
     */
    bind:function (fn, context) {
        return function () {
            return fn.apply(context, arguments);
        };
    },

    /**
     * 鍒涘缓寤惰繜delay鎵ц鐨勫嚱鏁癴n
     * @name defer
     * @grammar UM.utils.defer(fn,delay)  =>fn   //寤惰繜delay姣鎵цfn锛岃繑鍥瀎n
     * @grammar UM.utils.defer(fn,delay,exclusion)  =>fn   //寤惰繜delay姣鎵цfn锛岃嫢exclusion涓虹湡锛屽垯浜掓枼鎵цfn
     * @example
     * function test(){
     *     console.log("寤惰繜杈撳嚭锛�");
     * }
     * //闈炰簰鏂ュ欢杩熸墽琛�
     * var testDefer = UM.utils.defer(test,1000);
     * testDefer();   =>  "寤惰繜杈撳嚭锛�";
     * testDefer();   =>  "寤惰繜杈撳嚭锛�";
     * //浜掓枼寤惰繜鎵ц
     * var testDefer1 = UM.utils.defer(test,1000,true);
     * testDefer1();   =>  //鏈涓嶆墽琛�
     * testDefer1();   =>  "寤惰繜杈撳嚭锛�";
     */
    defer:function (fn, delay, exclusion) {
        var timerID;
        return function () {
            if (exclusion) {
                clearTimeout(timerID);
            }
            timerID = setTimeout(fn, delay);
        };
    },

    /**
     * 鏌ユ壘鍏冪礌item鍦ㄦ暟缁刟rray涓殑绱㈠紩, 鑻ユ壘涓嶅埌杩斿洖-1
     * @name indexOf
     * @grammar UM.utils.indexOf(array,item)  => index|-1  //榛樿浠庢暟缁勫紑澶撮儴寮€濮嬫悳绱�
     * @grammar UM.utils.indexOf(array,item,start)  => index|-1  //start鎸囧畾寮€濮嬫煡鎵剧殑浣嶇疆
     */
    indexOf:function (array, item, start) {
        var index = -1;
        start = this.isNumber(start) ? start : 0;
        this.each(array, function (v, i) {
            if (i >= start && v === item) {
                index = i;
                return false;
            }
        });
        return index;
    },

    /**
     * 绉婚櫎鏁扮粍array涓殑鍏冪礌item
     * @name removeItem
     * @grammar UM.utils.removeItem(array,item)
     */
    removeItem:function (array, item) {
        for (var i = 0, l = array.length; i < l; i++) {
            if (array[i] === item) {
                array.splice(i, 1);
                i--;
            }
        }
    },

    /**
     * 鍒犻櫎瀛楃涓瞫tr鐨勯灏剧┖鏍�
     * @name trim
     * @grammar UM.utils.trim(str) => String
     */
    trim:function (str) {
        return str.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g, '');
    },

    /**
     * 灏嗗瓧绗︿覆list(浠�','鍒嗛殧)鎴栬€呮暟缁刲ist杞垚鍝堝笇瀵硅薄
     * @name listToMap
     * @grammar UM.utils.listToMap(list)  => Object  //Object褰㈠{test:1,br:1,textarea:1}
     */
    listToMap:function (list) {
        if (!list)return {};
        list = utils.isArray(list) ? list : list.split(',');
        for (var i = 0, ci, obj = {}; ci = list[i++];) {
            obj[ci.toUpperCase()] = obj[ci] = 1;
        }
        return obj;
    },

    /**
     * 灏唖tr涓殑html绗﹀彿杞箟,榛樿灏嗚浆涔�''&<">''鍥涗釜瀛楃锛屽彲鑷畾涔塺eg鏉ョ‘瀹氶渶瑕佽浆涔夌殑瀛楃
     * @name unhtml
     * @grammar UM.utils.unhtml(str);  => String
     * @grammar UM.utils.unhtml(str,reg)  => String
     * @example
     * var html = '<body>You say:"浣犲ソ锛丅aidu & UEditor!"</body>';
     * UM.utils.unhtml(html);   ==>  &lt;body&gt;You say:&quot;浣犲ソ锛丅aidu &amp; UEditor!&quot;&lt;/body&gt;
     * UM.utils.unhtml(html,/[<>]/g)  ==>  &lt;body&gt;You say:"浣犲ソ锛丅aidu & UEditor!"&lt;/body&gt;
     */
    unhtml:function (str, reg) {
        return str ? str.replace(reg || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp);)?/g, function (a, b) {
            if (b) {
                return a;
            } else {
                return {
                    '<':'&lt;',
                    '&':'&amp;',
                    '"':'&quot;',
                    '>':'&gt;',
                    "'":'&#39;'
                }[a]
            }

        }) : '';
    },
    /**
     * 灏唖tr涓殑杞箟瀛楃杩樺師鎴恏tml瀛楃
     * @name html
     * @grammar UM.utils.html(str)  => String   //璇︾粏鍙傝<code><a href = '#unhtml'>unhtml</a></code>
     */
    html:function (str) {
        return str ? str.replace(/&((g|l|quo)t|amp|#39);/g, function (m) {
            return {
                '&lt;':'<',
                '&amp;':'&',
                '&quot;':'"',
                '&gt;':'>',
                '&#39;':"'"
            }[m]
        }) : '';
    },
    /**
     * 灏哻ss鏍峰紡杞崲涓洪┘宄扮殑褰㈠紡銆傚font-size => fontSize
     * @name cssStyleToDomStyle
     * @grammar UM.utils.cssStyleToDomStyle(cssName)  => String
     */
    cssStyleToDomStyle:function () {
        var test = document.createElement('div').style,
            cache = {
                'float':test.cssFloat != undefined ? 'cssFloat' : test.styleFloat != undefined ? 'styleFloat' : 'float'
            };

        return function (cssName) {
            return cache[cssName] || (cache[cssName] = cssName.toLowerCase().replace(/-./g, function (match) {
                return match.charAt(1).toUpperCase();
            }));
        };
    }(),
    /**
     * 鍔ㄦ€佸姞杞芥枃浠跺埌doc涓紝骞朵緷鎹畂bj鏉ヨ缃睘鎬э紝鍔犺浇鎴愬姛鍚庢墽琛屽洖璋冨嚱鏁癴n
     * @name loadFile
     * @grammar UM.utils.loadFile(doc,obj)
     * @grammar UM.utils.loadFile(doc,obj,fn)
     * @example
     * //鎸囧畾鍔犺浇鍒板綋鍓峝ocument涓竴涓猻cript鏂囦欢锛屽姞杞芥垚鍔熷悗鎵цfunction
     * utils.loadFile( document, {
     *     src:"test.js",
     *     tag:"script",
     *     type:"text/javascript",
     *     defer:"defer"
     * }, function () {
     *     console.log('鍔犺浇鎴愬姛锛�')
     * });
     */
    loadFile:function () {
        var tmpList = [];

        function getItem(doc, obj) {
            try {
                for (var i = 0, ci; ci = tmpList[i++];) {
                    if (ci.doc === doc && ci.url == (obj.src || obj.href)) {
                        return ci;
                    }
                }
            } catch (e) {
                return null;
            }

        }

        return function (doc, obj, fn) {
            var item = getItem(doc, obj);
            if (item) {
                if (item.ready) {
                    fn && fn();
                } else {
                    item.funs.push(fn)
                }
                return;
            }
            tmpList.push({
                doc:doc,
                url:obj.src || obj.href,
                funs:[fn]
            });
            if (!doc.body) {
                var html = [];
                for (var p in obj) {
                    if (p == 'tag')continue;
                    html.push(p + '="' + obj[p] + '"')
                }
                doc.write('<' + obj.tag + ' ' + html.join(' ') + ' ></' + obj.tag + '>');
                return;
            }
            if (obj.id && doc.getElementById(obj.id)) {
                return;
            }
            var element = doc.createElement(obj.tag);
            delete obj.tag;
            for (var p in obj) {
                element.setAttribute(p, obj[p]);
            }
            element.onload = element.onreadystatechange = function () {
                if (!this.readyState || /loaded|complete/.test(this.readyState)) {
                    item = getItem(doc, obj);
                    if (item.funs.length > 0) {
                        item.ready = 1;
                        for (var fi; fi = item.funs.pop();) {
                            fi();
                        }
                    }
                    element.onload = element.onreadystatechange = null;
                }
            };
            element.onerror = function () {
                throw Error('The load ' + (obj.href || obj.src) + ' fails,check the url settings of file umeditor.config.js ')
            };
            doc.getElementsByTagName("head")[0].appendChild(element);
        }
    }(),
    /**
     * 鍒ゆ柇obj瀵硅薄鏄惁涓虹┖
     * @name isEmptyObject
     * @grammar UM.utils.isEmptyObject(obj)  => true|false
     * @example
     * UM.utils.isEmptyObject({}) ==>true
     * UM.utils.isEmptyObject([]) ==>true
     * UM.utils.isEmptyObject("") ==>true
     */
    isEmptyObject:function (obj) {
        if (obj == null) return true;
        if (this.isArray(obj) || this.isString(obj)) return obj.length === 0;
        for (var key in obj) if (obj.hasOwnProperty(key)) return false;
        return true;
    },

    /**
     * 缁熶竴灏嗛鑹插€间娇鐢�16杩涘埗褰㈠紡琛ㄧず
     * @name fixColor
     * @grammar UM.utils.fixColor(name,value) => value
     * @example
     * rgb(255,255,255)  => "#ffffff"
     */
    fixColor:function (name, value) {
        if (/color/i.test(name) && /rgba?/.test(value)) {
            var array = value.split(",");
            if (array.length > 3)
                return "";
            value = "#";
            for (var i = 0, color; color = array[i++];) {
                color = parseInt(color.replace(/[^\d]/gi, ''), 10).toString(16);
                value += color.length == 1 ? "0" + color : color;
            }
            value = value.toUpperCase();
        }
        return  value;
    },

    /**
     * 娣卞害鍏嬮殕瀵硅薄锛屼粠source鍒皌arget
     * @name clone
     * @grammar UM.utils.clone(source) => anthorObj 鏂扮殑瀵硅薄鏄畬鏁寸殑source鐨勫壇鏈�
     * @grammar UM.utils.clone(source,target) => target鍖呭惈浜唖ource鐨勬墍鏈夊唴瀹癸紝閲嶅悕浼氳鐩�
     */
    clone:function (source, target) {
        var tmp;
        target = target || {};
        for (var i in source) {
            if (source.hasOwnProperty(i)) {
                tmp = source[i];
                if (typeof tmp == 'object') {
                    target[i] = utils.isArray(tmp) ? [] : {};
                    utils.clone(source[i], target[i])
                } else {
                    target[i] = tmp;
                }
            }
        }
        return target;
    },
    /**
     * 杞崲cm/pt鍒皃x
     * @name transUnitToPx
     * @grammar UM.utils.transUnitToPx('20pt') => '27px'
     * @grammar UM.utils.transUnitToPx('0pt') => '0'
     */
    transUnitToPx:function (val) {
        if (!/(pt|cm)/.test(val)) {
            return val
        }
        var unit;
        val.replace(/([\d.]+)(\w+)/, function (str, v, u) {
            val = v;
            unit = u;
        });
        switch (unit) {
            case 'cm':
                val = parseFloat(val) * 25;
                break;
            case 'pt':
                val = Math.round(parseFloat(val) * 96 / 72);
        }
        return val + (val ? 'px' : '');
    },
    /**
     * DomReady鏂规硶锛屽洖璋冨嚱鏁板皢鍦╠om鏍憆eady瀹屾垚鍚庢墽琛�
     * @name domReady
     * @grammar UM.utils.domReady(fn)  => fn  //杩斿洖涓€涓欢杩熸墽琛岀殑鏂规硶
     */
    domReady:function () {

        var fnArr = [];

        function doReady(doc) {
            //纭繚onready鍙墽琛屼竴娆�
            doc.isReady = true;
            for (var ci; ci = fnArr.pop(); ci()) {
            }
        }

        return function (onready, win) {
            win = win || window;
            var doc = win.document;
            onready && fnArr.push(onready);
            if (doc.readyState === "complete") {
                doReady(doc);
            } else {
                doc.isReady && doReady(doc);
                if (browser.ie) {
                    (function () {
                        if (doc.isReady) return;
                        try {
                            doc.documentElement.doScroll("left");
                        } catch (error) {
                            setTimeout(arguments.callee, 0);
                            return;
                        }
                        doReady(doc);
                    })();
                    win.attachEvent('onload', function () {
                        doReady(doc)
                    });
                } else {
                    doc.addEventListener("DOMContentLoaded", function () {
                        doc.removeEventListener("DOMContentLoaded", arguments.callee, false);
                        doReady(doc);
                    }, false);
                    win.addEventListener('load', function () {
                        doReady(doc)
                    }, false);
                }
            }

        }
    }(),
    /**
     * 鍔ㄦ€佹坊鍔燾ss鏍峰紡
     * @name cssRule
     * @grammar UM.utils.cssRule('娣诲姞鐨勬牱寮忕殑鑺傜偣鍚嶇О',['鏍峰紡'锛�'鏀惧埌鍝釜document涓�'])
     * @grammar UM.utils.cssRule('body','body{background:#ccc}') => null  //缁檅ody娣诲姞鑳屾櫙棰滆壊
     * @grammar UM.utils.cssRule('body') =>鏍峰紡鐨勫瓧绗︿覆  //鍙栧緱key鍊间负body鐨勬牱寮忕殑鍐呭,濡傛灉娌℃湁鎵惧埌key鍊煎厛鍏崇殑鏍峰紡灏嗚繑鍥炵┖锛屼緥濡傚垰鎵嶉偅涓儗鏅鑹诧紝灏嗚繑鍥� body{background:#ccc}
     * @grammar UM.utils.cssRule('body','') =>null //娓呯┖缁欏畾鐨刱ey鍊肩殑鑳屾櫙棰滆壊
     */
    cssRule:browser.ie ? function (key, style, doc) {
        var indexList, index;
        doc = doc || document;
        if (doc.indexList) {
            indexList = doc.indexList;
        } else {
            indexList = doc.indexList = {};
        }
        var sheetStyle;
        if (!indexList[key]) {
            if (style === undefined) {
                return ''
            }
            sheetStyle = doc.createStyleSheet('', index = doc.styleSheets.length);
            indexList[key] = index;
        } else {
            sheetStyle = doc.styleSheets[indexList[key]];
        }
        if (style === undefined) {
            return sheetStyle.cssText
        }
        sheetStyle.cssText = style || ''
    } : function (key, style, doc) {
        doc = doc || document;
        var head = doc.getElementsByTagName('head')[0], node;
        if (!(node = doc.getElementById(key))) {
            if (style === undefined) {
                return ''
            }
            node = doc.createElement('style');
            node.id = key;
            head.appendChild(node)
        }
        if (style === undefined) {
            return node.innerHTML
        }
        if (style !== '') {
            node.innerHTML = style;
        } else {
            head.removeChild(node)
        }
    }

};
/**
 * 鍒ゆ柇str鏄惁涓哄瓧绗︿覆
 * @name isString
 * @grammar UM.utils.isString(str) => true|false
 */
/**
 * 鍒ゆ柇array鏄惁涓烘暟缁�
 * @name isArray
 * @grammar UM.utils.isArray(obj) => true|false
 */
/**
 * 鍒ゆ柇obj瀵硅薄鏄惁涓烘柟娉�
 * @name isFunction
 * @grammar UM.utils.isFunction(obj)  => true|false
 */
/**
 * 鍒ゆ柇obj瀵硅薄鏄惁涓烘暟瀛�
 * @name isNumber
 * @grammar UM.utils.isNumber(obj)  => true|false
 */
utils.each(['String', 'Function', 'Array', 'Number', 'RegExp', 'Object'], function (v) {
    UM.utils['is' + v] = function (obj) {
        return Object.prototype.toString.apply(obj) == '[object ' + v + ']';
    }
});
/**
 * @file
 * @name UM.EventBase
 * @short EventBase
 * @import editor.js,core/utils.js
 * @desc UE閲囩敤鐨勪簨浠跺熀绫伙紝缁ф壙姝ょ被鐨勫搴旂被灏嗚幏鍙朼ddListener,removeListener,fireEvent鏂规硶銆�
 * 鍦║E涓紝Editor浠ュ強鎵€鏈塽i瀹炰緥閮界户鎵夸簡璇ョ被锛屾晠鍙互鍦ㄥ搴旂殑ui瀵硅薄浠ュ強editor瀵硅薄涓婁娇鐢ㄤ笂杩版柟娉曘€�
 */
var EventBase = UM.EventBase = function () {};

EventBase.prototype = {
    /**
     * 娉ㄥ唽浜嬩欢鐩戝惉鍣�
     * @name addListener
     * @grammar editor.addListener(types,fn)  //types涓轰簨浠跺悕绉帮紝澶氫釜鍙敤绌烘牸鍒嗛殧
     * @example
     * editor.addListener('selectionchange',function(){
     *      console.log("閫夊尯宸茬粡鍙樺寲锛�");
     * })
     * editor.addListener('beforegetcontent aftergetcontent',function(type){
     *         if(type == 'beforegetcontent'){
     *             //do something
     *         }else{
     *             //do something
     *         }
     *         console.log(this.getContent) // this鏄敞鍐岀殑浜嬩欢鐨勭紪杈戝櫒瀹炰緥
     * })
     */
    addListener:function (types, listener) {
        types = utils.trim(types).split(' ');
        for (var i = 0, ti; ti = types[i++];) {
            getListener(this, ti, true).push(listener);
        }
    },
    /**
     * 绉婚櫎浜嬩欢鐩戝惉鍣�
     * @name removeListener
     * @grammar editor.removeListener(types,fn)  //types涓轰簨浠跺悕绉帮紝澶氫釜鍙敤绌烘牸鍒嗛殧
     * @example
     * //changeCallback涓烘柟娉曚綋
     * editor.removeListener("selectionchange",changeCallback);
     */
    removeListener:function (types, listener) {
        types = utils.trim(types).split(' ');
        for (var i = 0, ti; ti = types[i++];) {
            utils.removeItem(getListener(this, ti) || [], listener);
        }
    },
    /**
     * 瑙﹀彂浜嬩欢
     * @name fireEvent
     * @grammar editor.fireEvent(types)  //types涓轰簨浠跺悕绉帮紝澶氫釜鍙敤绌烘牸鍒嗛殧
     * @example
     * editor.fireEvent("selectionchange");
     */
    fireEvent:function () {
        var types = arguments[0];
        types = utils.trim(types).split(' ');
        for (var i = 0, ti; ti = types[i++];) {
            var listeners = getListener(this, ti),
                r, t, k;
            if (listeners) {
                k = listeners.length;
                while (k--) {
                    if(!listeners[k])continue;
                    t = listeners[k].apply(this, arguments);
                    if(t === true){
                        return t;
                    }
                    if (t !== undefined) {
                        r = t;
                    }
                }
            }
            if (t = this['on' + ti.toLowerCase()]) {
                r = t.apply(this, arguments);
            }
        }
        return r;
    }
};
/**
 * 鑾峰緱瀵硅薄鎵€鎷ユ湁鐩戝惉绫诲瀷鐨勬墍鏈夌洃鍚櫒
 * @public
 * @function
 * @param {Object} obj  鏌ヨ鐩戝惉鍣ㄧ殑瀵硅薄
 * @param {String} type 浜嬩欢绫诲瀷
 * @param {Boolean} force  涓簍rue涓斿綋鍓嶆墍鏈塼ype绫诲瀷鐨勪睛鍚櫒涓嶅瓨鍦ㄦ椂锛屽垱寤轰竴涓┖鐩戝惉鍣ㄦ暟缁�
 * @returns {Array} 鐩戝惉鍣ㄦ暟缁�
 */
function getListener(obj, type, force) {
    var allListeners;
    type = type.toLowerCase();
    return ( ( allListeners = ( obj.__allListeners || force && ( obj.__allListeners = {} ) ) )
        && ( allListeners[type] || force && ( allListeners[type] = [] ) ) );
}


///import editor.js
///import core/dom/dom.js
///import core/utils.js
/**
 * dtd html璇箟鍖栫殑浣撶幇绫�
 * @constructor
 * @namespace dtd
 */
var dtd = dom.dtd = (function() {
    function _( s ) {
        for (var k in s) {
            s[k.toUpperCase()] = s[k];
        }
        return s;
    }
    var X = utils.extend2;
    var A = _({isindex:1,fieldset:1}),
        B = _({input:1,button:1,select:1,textarea:1,label:1}),
        C = X( _({a:1}), B ),
        D = X( {iframe:1}, C ),
        E = _({hr:1,ul:1,menu:1,div:1,blockquote:1,noscript:1,table:1,center:1,address:1,dir:1,pre:1,h5:1,dl:1,h4:1,noframes:1,h6:1,ol:1,h1:1,h3:1,h2:1}),
        F = _({ins:1,del:1,script:1,style:1}),
        G = X( _({b:1,acronym:1,bdo:1,'var':1,'#':1,abbr:1,code:1,br:1,i:1,cite:1,kbd:1,u:1,strike:1,s:1,tt:1,strong:1,q:1,samp:1,em:1,dfn:1,span:1}), F ),
        H = X( _({sub:1,img:1,embed:1,object:1,sup:1,basefont:1,map:1,applet:1,font:1,big:1,small:1}), G ),
        I = X( _({p:1}), H ),
        J = X( _({iframe:1}), H, B ),
        K = _({img:1,embed:1,noscript:1,br:1,kbd:1,center:1,button:1,basefont:1,h5:1,h4:1,samp:1,h6:1,ol:1,h1:1,h3:1,h2:1,form:1,font:1,'#':1,select:1,menu:1,ins:1,abbr:1,label:1,code:1,table:1,script:1,cite:1,input:1,iframe:1,strong:1,textarea:1,noframes:1,big:1,small:1,span:1,hr:1,sub:1,bdo:1,'var':1,div:1,object:1,sup:1,strike:1,dir:1,map:1,dl:1,applet:1,del:1,isindex:1,fieldset:1,ul:1,b:1,acronym:1,a:1,blockquote:1,i:1,u:1,s:1,tt:1,address:1,q:1,pre:1,p:1,em:1,dfn:1}),

        L = X( _({a:0}), J ),//a涓嶈兘琚垏寮€锛屾墍浠ユ妸浠�
        M = _({tr:1}),
        N = _({'#':1}),
        O = X( _({param:1}), K ),
        P = X( _({form:1}), A, D, E, I ),
        Q = _({li:1,ol:1,ul:1}),
        R = _({style:1,script:1}),
        S = _({base:1,link:1,meta:1,title:1}),
        T = X( S, R ),
        U = _({head:1,body:1}),
        V = _({html:1});

    var block = _({address:1,blockquote:1,center:1,dir:1,div:1,dl:1,fieldset:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,hr:1,isindex:1,menu:1,noframes:1,ol:1,p:1,pre:1,table:1,ul:1}),

        empty =  _({area:1,base:1,basefont:1,br:1,col:1,command:1,dialog:1,embed:1,hr:1,img:1,input:1,isindex:1,keygen:1,link:1,meta:1,param:1,source:1,track:1,wbr:1});

    return  _({

        // $ 琛ㄧず鑷畾鐨勫睘鎬�

        // body澶栫殑鍏冪礌鍒楄〃.
        $nonBodyContent: X( V, U, S ),

        //鍧楃粨鏋勫厓绱犲垪琛�
        $block : block,

        //鍐呰仈鍏冪礌鍒楄〃
        $inline : L,

        $inlineWithA : X(_({a:1}),L),

        $body : X( _({script:1,style:1}), block ),

        $cdata : _({script:1,style:1}),

        //鑷棴鍜屽厓绱�
        $empty : empty,

        //涓嶆槸鑷棴鍚堬紝浣嗕笉鑳借range閫変腑閲岃竟
        $nonChild : _({iframe:1,textarea:1}),
        //鍒楄〃鍏冪礌鍒楄〃
        $listItem : _({dd:1,dt:1,li:1}),

        //鍒楄〃鏍瑰厓绱犲垪琛�
        $list: _({ul:1,ol:1,dl:1}),

        //涓嶈兘璁や负鏄┖鐨勫厓绱�
        $isNotEmpty : _({table:1,ul:1,ol:1,dl:1,iframe:1,area:1,base:1,col:1,hr:1,img:1,embed:1,input:1,link:1,meta:1,param:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1}),

        //濡傛灉娌℃湁瀛愯妭鐐瑰氨鍙互鍒犻櫎鐨勫厓绱犲垪琛紝鍍弒pan,a
        $removeEmpty : _({a:1,abbr:1,acronym:1,address:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,s:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,'var':1}),

        $removeEmptyBlock : _({'p':1,'div':1}),

        //鍦╰able鍏冪礌閲岀殑鍏冪礌鍒楄〃
        $tableContent : _({caption:1,col:1,colgroup:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1,table:1}),
        //涓嶈浆鎹㈢殑鏍囩
        $notTransContent : _({pre:1,script:1,style:1,textarea:1}),
        html: U,
        head: T,
        style: N,
        script: N,
        body: P,
        base: {},
        link: {},
        meta: {},
        title: N,
        col : {},
        tr : _({td:1,th:1}),
        img : {},
        embed: {},
        colgroup : _({thead:1,col:1,tbody:1,tr:1,tfoot:1}),
        noscript : P,
        td : P,
        br : {},
        th : P,
        center : P,
        kbd : L,
        button : X( I, E ),
        basefont : {},
        h5 : L,
        h4 : L,
        samp : L,
        h6 : L,
        ol : Q,
        h1 : L,
        h3 : L,
        option : N,
        h2 : L,
        form : X( A, D, E, I ),
        select : _({optgroup:1,option:1}),
        font : L,
        ins : L,
        menu : Q,
        abbr : L,
        label : L,
        table : _({thead:1,col:1,tbody:1,tr:1,colgroup:1,caption:1,tfoot:1}),
        code : L,
        tfoot : M,
        cite : L,
        li : P,
        input : {},
        iframe : P,
        strong : L,
        textarea : N,
        noframes : P,
        big : L,
        small : L,
        //trace:
        span :_({'#':1,br:1,b:1,strong:1,u:1,i:1,em:1,sub:1,sup:1,strike:1,span:1}),
        hr : L,
        dt : L,
        sub : L,
        optgroup : _({option:1}),
        param : {},
        bdo : L,
        'var' : L,
        div : P,
        object : O,
        sup : L,
        dd : P,
        strike : L,
        area : {},
        dir : Q,
        map : X( _({area:1,form:1,p:1}), A, F, E ),
        applet : O,
        dl : _({dt:1,dd:1}),
        del : L,
        isindex : {},
        fieldset : X( _({legend:1}), K ),
        thead : M,
        ul : Q,
        acronym : L,
        b : L,
        a : X( _({a:1}), J ),
        blockquote :X(_({td:1,tr:1,tbody:1,li:1}),P),
        caption : L,
        i : L,
        u : L,
        tbody : M,
        s : L,
        address : X( D, I ),
        tt : L,
        legend : L,
        q : L,
        pre : X( G, C ),
        p : X(_({'a':1}),L),
        em :L,
        dfn : L
    });
})();

/**
 * @file
 * @name UM.dom.domUtils
 * @short DomUtils
 * @import editor.js, core/utils.js,core/browser.js,core/dom/dtd.js
 * @desc UEditor灏佽鐨勫簳灞俤om鎿嶄綔搴�
 */

var attrFix = ie && browser.version < 9 ? {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder"
    } : {
        tabindex: "tabIndex",
        readonly: "readOnly"
    },
    styleBlock = utils.listToMap([
        '-webkit-box', '-moz-box', 'block' ,
        'list-item' , 'table' , 'table-row-group' ,
        'table-header-group', 'table-footer-group' ,
        'table-row' , 'table-column-group' , 'table-column' ,
        'table-cell' , 'table-caption'
    ]);
var domUtils = dom.domUtils = {
    //鑺傜偣甯搁噺
    NODE_ELEMENT: 1,
    NODE_DOCUMENT: 9,
    NODE_TEXT: 3,
    NODE_COMMENT: 8,
    NODE_DOCUMENT_FRAGMENT: 11,

    //浣嶇疆鍏崇郴
    POSITION_IDENTICAL: 0,
    POSITION_DISCONNECTED: 1,
    POSITION_FOLLOWING: 2,
    POSITION_PRECEDING: 4,
    POSITION_IS_CONTAINED: 8,
    POSITION_CONTAINS: 16,
    //ie6浣跨敤鍏朵粬鐨勪細鏈変竴娈电┖鐧藉嚭鐜�
    fillChar: ie && browser.version == '6' ? '\ufeff' : '\u200B',
    //-------------------------Node閮ㄥ垎--------------------------------
    keys: {
        /*Backspace*/ 8: 1, /*Delete*/ 46: 1,
        /*Shift*/ 16: 1, /*Ctrl*/ 17: 1, /*Alt*/ 18: 1,
        37: 1, 38: 1, 39: 1, 40: 1,
        13: 1 /*enter*/
    },
    breakParent:function (node, parent) {
        var tmpNode,
            parentClone = node,
            clone = node,
            leftNodes,
            rightNodes;
        do {
            parentClone = parentClone.parentNode;
            if (leftNodes) {
                tmpNode = parentClone.cloneNode(false);
                tmpNode.appendChild(leftNodes);
                leftNodes = tmpNode;
                tmpNode = parentClone.cloneNode(false);
                tmpNode.appendChild(rightNodes);
                rightNodes = tmpNode;
            } else {
                leftNodes = parentClone.cloneNode(false);
                rightNodes = leftNodes.cloneNode(false);
            }
            while (tmpNode = clone.previousSibling) {
                leftNodes.insertBefore(tmpNode, leftNodes.firstChild);
            }
            while (tmpNode = clone.nextSibling) {
                rightNodes.appendChild(tmpNode);
            }
            clone = parentClone;
        } while (parent !== parentClone);
        tmpNode = parent.parentNode;
        tmpNode.insertBefore(leftNodes, parent);
        tmpNode.insertBefore(rightNodes, parent);
        tmpNode.insertBefore(node, rightNodes);
        domUtils.remove(parent);
        return node;
    },
    trimWhiteTextNode:function (node) {
        function remove(dir) {
            var child;
            while ((child = node[dir]) && child.nodeType == 3 && domUtils.isWhitespace(child)) {
                node.removeChild(child);
            }
        }
        remove('firstChild');
        remove('lastChild');
    },
    /**
     * 鑾峰彇鑺傜偣A鐩稿浜庤妭鐐笲鐨勪綅缃叧绯�
     * @name getPosition
     * @grammar UM.dom.domUtils.getPosition(nodeA,nodeB)  =>  Number
     * @example
     *  switch (returnValue) {
     *      case 0: //鐩哥瓑锛屽悓涓€鑺傜偣
     *      case 1: //鏃犲叧锛岃妭鐐逛笉鐩歌繛
     *      case 2: //璺熼殢锛屽嵆鑺傜偣A澶撮儴浣嶄簬鑺傜偣B澶撮儴鐨勫悗闈�
     *      case 4: //鍓嶇疆锛屽嵆鑺傜偣A澶撮儴浣嶄簬鑺傜偣B澶撮儴鐨勫墠闈�
     *      case 8: //琚寘鍚紝鍗宠妭鐐笰琚妭鐐笲鍖呭惈
     *      case 10://缁勫悎绫诲瀷锛屽嵆鑺傜偣A婊¤冻璺熼殢鑺傜偣B涓旇鑺傜偣B鍖呭惈銆傚疄闄呬笂锛屽鏋滆鍖呭惈锛屽繀瀹氳窡闅忥紝鎵€浠eturnValue浜嬪疄涓婁笉浼氬瓨鍦�8鐨勬儏鍐点€�
     *      case 16://鍖呭惈锛屽嵆鑺傜偣A鍖呭惈鑺傜偣B
     *      case 20://缁勫悎绫诲瀷锛屽嵆鑺傜偣A婊¤冻鍓嶇疆鑺傜偣A涓斿寘鍚妭鐐笲銆傚悓鏍凤紝濡傛灉鍖呭惈锛屽繀瀹氬墠缃紝鎵€浠eturnValue浜嬪疄涓婁篃涓嶄細瀛樺湪16鐨勬儏鍐�
     *  }
     */
    getPosition: function (nodeA, nodeB) {
        // 濡傛灉涓や釜鑺傜偣鏄悓涓€涓妭鐐�
        if (nodeA === nodeB) {
            // domUtils.POSITION_IDENTICAL
            return 0;
        }
        var node,
            parentsA = [nodeA],
            parentsB = [nodeB];
        node = nodeA;
        while (node = node.parentNode) {
            // 濡傛灉nodeB鏄痭odeA鐨勭鍏堣妭鐐�
            if (node === nodeB) {
                // domUtils.POSITION_IS_CONTAINED + domUtils.POSITION_FOLLOWING
                return 10;
            }
            parentsA.push(node);
        }
        node = nodeB;
        while (node = node.parentNode) {
            // 濡傛灉nodeA鏄痭odeB鐨勭鍏堣妭鐐�
            if (node === nodeA) {
                // domUtils.POSITION_CONTAINS + domUtils.POSITION_PRECEDING
                return 20;
            }
            parentsB.push(node);
        }
        parentsA.reverse();
        parentsB.reverse();
        if (parentsA[0] !== parentsB[0]) {
            // domUtils.POSITION_DISCONNECTED
            return 1;
        }
        var i = -1;
        while (i++, parentsA[i] === parentsB[i]) {
        }
        nodeA = parentsA[i];
        nodeB = parentsB[i];
        while (nodeA = nodeA.nextSibling) {
            if (nodeA === nodeB) {
                // domUtils.POSITION_PRECEDING
                return 4
            }
        }
        // domUtils.POSITION_FOLLOWING
        return  2;
    },

    /**
     * 杩斿洖鑺傜偣node鍦ㄧ埗鑺傜偣涓殑绱㈠紩浣嶇疆
     * @name getNodeIndex
     * @grammar UM.dom.domUtils.getNodeIndex(node)  => Number  //绱㈠紩鍊间粠0寮€濮�
     */
    getNodeIndex: function (node, ignoreTextNode) {
        var preNode = node,
            i = 0;
        while (preNode = preNode.previousSibling) {
            if (ignoreTextNode && preNode.nodeType == 3) {
                if (preNode.nodeType != preNode.nextSibling.nodeType) {
                    i++;
                }
                continue;
            }
            i++;
        }
        return i;
    },

    /**
     * 妫€娴嬭妭鐐筺ode鏄惁鍦ㄨ妭鐐筪oc鐨勬爲涓婏紝瀹炶川涓婃槸妫€娴嬫槸鍚﹁doc鍖呭惈
     * @name inDoc
     * @grammar UM.dom.domUtils.inDoc(node,doc)   =>  true|false
     */
    inDoc: function (node, doc) {
        return domUtils.getPosition(node, doc) == 10;
    },
    /**
     * 鏌ユ壘node鑺傜偣鐨勭鍏堣妭鐐�
     * @name findParent
     * @grammar UM.dom.domUtils.findParent(node)  => Element  // 鐩存帴杩斿洖node鑺傜偣鐨勭埗鑺傜偣
     * @grammar UM.dom.domUtils.findParent(node,filterFn)  => Element  //filterFn涓鸿繃婊ゅ嚱鏁帮紝node浣滀负鍙傛暟锛岃繑鍥瀟rue鏃舵墠浼氬皢node浣滀负绗﹀悎瑕佹眰鐨勮妭鐐硅繑鍥�
     * @grammar UM.dom.domUtils.findParent(node,filterFn,includeSelf)  => Element  //includeSelf鎸囧畾鏄惁鍖呭惈鑷韩
     */
    findParent: function (node, filterFn, includeSelf) {
        if (node && !domUtils.isBody(node)) {
            node = includeSelf ? node : node.parentNode;
            while (node) {
                if (!filterFn || filterFn(node) || domUtils.isBody(node)) {
                    return filterFn && !filterFn(node) && domUtils.isBody(node) ? null : node;
                }
                node = node.parentNode;
            }
        }
        return null;
    },
    /**
     * 閫氳繃tagName鏌ユ壘node鑺傜偣鐨勭鍏堣妭鐐�
     * @name findParentByTagName
     * @grammar UM.dom.domUtils.findParentByTagName(node,tagNames)   =>  Element  //tagNames鏀寔鏁扮粍锛屽尯鍒嗗ぇ灏忓啓
     * @grammar UM.dom.domUtils.findParentByTagName(node,tagNames,includeSelf)   =>  Element  //includeSelf鎸囧畾鏄惁鍖呭惈鑷韩
     * @grammar UM.dom.domUtils.findParentByTagName(node,tagNames,includeSelf,excludeFn)   =>  Element  //excludeFn鎸囧畾渚嬪杩囨护鏉′欢锛岃繑鍥瀟rue鏃跺拷鐣ヨ鑺傜偣
     */
    findParentByTagName: function (node, tagNames, includeSelf, excludeFn) {
        tagNames = utils.listToMap(utils.isArray(tagNames) ? tagNames : [tagNames]);
        return domUtils.findParent(node, function (node) {
            return tagNames[node.tagName] && !(excludeFn && excludeFn(node));
        }, includeSelf);
    },
    /**
     * 鏌ユ壘鑺傜偣node鐨勭鍏堣妭鐐归泦鍚�
     * @name findParents
     * @grammar UM.dom.domUtils.findParents(node)  => Array  //杩斿洖涓€涓鍏堣妭鐐规暟缁勯泦鍚堬紝涓嶅寘鍚嚜韬�
     * @grammar UM.dom.domUtils.findParents(node,includeSelf)  => Array  //杩斿洖涓€涓鍏堣妭鐐规暟缁勯泦鍚堬紝includeSelf鎸囧畾鏄惁鍖呭惈鑷韩
     * @grammar UM.dom.domUtils.findParents(node,includeSelf,filterFn)  => Array  //杩斿洖涓€涓鍏堣妭鐐规暟缁勯泦鍚堬紝filterFn鎸囧畾杩囨护鏉′欢锛岃繑鍥瀟rue鐨刵ode灏嗚閫夊彇
     * @grammar UM.dom.domUtils.findParents(node,includeSelf,filterFn,closerFirst)  => Array  //杩斿洖涓€涓鍏堣妭鐐规暟缁勯泦鍚堬紝closerFirst涓簍rue鐨勮瘽锛宯ode鐨勭洿鎺ョ埗浜茶妭鐐规槸鏁扮粍鐨勭0涓�
     */
    findParents: function (node, includeSelf, filterFn, closerFirst) {
        var parents = includeSelf && ( filterFn && filterFn(node) || !filterFn ) ? [node] : [];
        while (node = domUtils.findParent(node, filterFn)) {
            parents.push(node);
        }
        return closerFirst ? parents : parents.reverse();
    },

    /**
     * 鍦ㄨ妭鐐筺ode鍚庨潰鎻掑叆鏂拌妭鐐筺ewNode
     * @name insertAfter
     * @grammar UM.dom.domUtils.insertAfter(node,newNode)  => newNode
     */
    insertAfter: function (node, newNode) {
        return node.parentNode.insertBefore(newNode, node.nextSibling);
    },

    /**
     * 鍒犻櫎鑺傜偣node锛屽苟鏍规嵁keepChildren鎸囧畾鏄惁淇濈暀瀛愯妭鐐�
     * @name remove
     * @grammar UM.dom.domUtils.remove(node)  =>  node
     * @grammar UM.dom.domUtils.remove(node,keepChildren)  =>  node
     */
    remove: function (node, keepChildren) {

        var parent = node.parentNode,
            child;
        if (parent) {
            if (keepChildren && node.hasChildNodes()) {
                while (child = node.firstChild) {
                    parent.insertBefore(child, node);
                }
            }
            parent.removeChild(node);
        }
        return node;
    },


    /**
     * 妫€娴嬭妭鐐筺ode鏄惁灞炰簬bookmark鑺傜偣
     * @name isBookmarkNode
     * @grammar UM.dom.domUtils.isBookmarkNode(node)  => true|false
     */
    isBookmarkNode: function (node) {
        return node.nodeType == 1 && node.id && /^_baidu_bookmark_/i.test(node.id);
    },
    /**
     * 鑾峰彇鑺傜偣node鎵€鍦ㄧ殑window瀵硅薄
     * @name  getWindow
     * @grammar UM.dom.domUtils.getWindow(node)  => window瀵硅薄
     */
    getWindow: function (node) {
        var doc = node.ownerDocument || node;
        return doc.defaultView || doc.parentWindow;
    },


    /**
     * 灏嗕竴涓枃鏈妭鐐筺ode鎷嗗垎鎴愪袱涓枃鏈妭鐐癸紝offset鎸囧畾鎷嗗垎浣嶇疆
     * @name split
     * @grammar UM.dom.domUtils.split(node,offset)  =>  TextNode  //杩斿洖浠庡垏鍒嗕綅缃紑濮嬬殑鍚庝竴涓枃鏈妭鐐�
     */
    split: function (node, offset) {
        var doc = node.ownerDocument;
        if (browser.ie && offset == node.nodeValue.length) {
            var next = doc.createTextNode('');
            return domUtils.insertAfter(node, next);
        }
        var retval = node.splitText(offset);
        //ie8涓媠plitText涓嶄細璺熸柊childNodes,鎴戜滑鎵嬪姩瑙﹀彂浠栫殑鏇存柊
        if (browser.ie8) {
            var tmpNode = doc.createTextNode('');
            domUtils.insertAfter(retval, tmpNode);
            domUtils.remove(tmpNode);
        }
        return retval;
    },

    /**
     * 妫€娴嬭妭鐐筺ode鏄惁涓虹┖鑺傜偣锛堝寘鎷┖鏍笺€佹崲琛屻€佸崰浣嶇绛夊瓧绗︼級
     * @name  isWhitespace
     * @grammar  UM.dom.domUtils.isWhitespace(node)  => true|false
     */
    isWhitespace: function (node) {
        return !new RegExp('[^ \t\n\r' + domUtils.fillChar + ']').test(node.nodeValue);
    },
    /**
     * 鑾峰彇鍏冪礌element鐩稿浜巚iewport鐨勪綅缃潗鏍�
     * @name getXY
     * @grammar UM.dom.domUtils.getXY(element)  => Object //杩斿洖鍧愭爣瀵硅薄{x:left,y:top}
     */
    getXY: function (element) {
        var x = 0, y = 0;
        while (element.offsetParent) {
            y += element.offsetTop;
            x += element.offsetLeft;
            element = element.offsetParent;
        }
        return { 'x': x, 'y': y};
    },
    /**
     * 涓哄厓绱爀lement缁戝畾鍘熺敓DOM浜嬩欢锛宼ype涓轰簨浠剁被鍨嬶紝handler涓哄鐞嗗嚱鏁�
     * @name on
     * @grammar UM.dom.domUtils.on(element,type,handler)   //type鏀寔鏁扮粍浼犲叆
     * @example
     * UM.dom.domUtils.on(document.body,"click",function(e){
     *     //e涓轰簨浠跺璞★紝this涓鸿鐐瑰嚮鍏冪礌瀵规垙閭ｄ釜
     * })
     * @example
     * UM.dom.domUtils.on(document.body,["click","mousedown"],function(evt){
     *     //evt涓轰簨浠跺璞★紝this涓鸿鐐瑰嚮鍏冪礌瀵硅薄
     * })
     */
    on: function (element, type, handler) {
        var types = utils.isArray(type) ? type : [type],
            k = types.length;
        if (k) while (k--) {
            type = types[k];
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else {
                if (!handler._d) {
                    handler._d = {
                        els: []
                    };
                }
                var key = type + handler.toString(), index = utils.indexOf(handler._d.els, element);
                if (!handler._d[key] || index == -1) {
                    if (index == -1) {
                        handler._d.els.push(element);
                    }
                    if (!handler._d[key]) {
                        handler._d[key] = function (evt) {
                            return handler.call(evt.srcElement, evt || window.event);
                        };
                    }


                    element.attachEvent('on' + type, handler._d[key]);
                }
            }
        }
        element = null;
    },
    /**
     * 瑙ｉ櫎鍘熺敓DOM浜嬩欢缁戝畾
     * @name un
     * @grammar  UM.dom.donUtils.un(element,type,handler)  //鍙傝<code><a href="#on">on</a></code>
     */
    un: function (element, type, handler) {
        var types = utils.isArray(type) ? type : [type],
            k = types.length;
        if (k) while (k--) {
            type = types[k];
            if (element.removeEventListener) {
                element.removeEventListener(type, handler, false);
            } else {
                var key = type + handler.toString();
                try {
                    element.detachEvent('on' + type, handler._d ? handler._d[key] : handler);
                } catch (e) {
                }
                if (handler._d && handler._d[key]) {
                    var index = utils.indexOf(handler._d.els, element);
                    if (index != -1) {
                        handler._d.els.splice(index, 1);
                    }
                    handler._d.els.length == 0 && delete handler._d[key];
                }
            }
        }
    },
    /**
     * 妫€鏌ヨ妭鐐筺ode鏄惁鏄┖inline鑺傜偣
     * @name  isEmptyInlineElement
     * @grammar   UM.dom.domUtils.isEmptyInlineElement(node)  => 1|0
     * @example
     * <b><i></i></b> => 1
     * <b><i></i><u></u></b> => 1
     * <b></b> => 1
     * <b>xx<i></i></b> => 0
     */
    isEmptyInlineElement: function (node) {
        if (node.nodeType != 1 || !dtd.$removeEmpty[ node.tagName ]) {
            return 0;
        }
        node = node.firstChild;
        while (node) {
            //濡傛灉鏄垱寤虹殑bookmark灏辫烦杩�
            if (domUtils.isBookmarkNode(node)) {
                return 0;
            }
            if (node.nodeType == 1 && !domUtils.isEmptyInlineElement(node) ||
                node.nodeType == 3 && !domUtils.isWhitespace(node)
                ) {
                return 0;
            }
            node = node.nextSibling;
        }
        return 1;

    },


    /**
     * 妫€鏌ヨ妭鐐筺ode鏄惁涓哄潡鍏冪礌
     * @name isBlockElm
     * @grammar UM.dom.domUtils.isBlockElm(node)  => true|false
     */
    isBlockElm: function (node) {
        return node.nodeType == 1 && (dtd.$block[node.tagName] || styleBlock[domUtils.getComputedStyle(node, 'display')]) && !dtd.$nonChild[node.tagName];
    },


    /**
     * 鍘熺敓鏂规硶getElementsByTagName鐨勫皝瑁�
     * @name getElementsByTagName
     * @grammar UM.dom.domUtils.getElementsByTagName(node,tagName)  => Array  //鑺傜偣闆嗗悎鏁扮粍
     */
    getElementsByTagName: function (node, name, filter) {
        if (filter && utils.isString(filter)) {
            var className = filter;
            filter = function (node) {
                var result = false;
                $.each(utils.trim(className).replace(/[ ]{2,}/g, ' ').split(' '), function (i, v) {
                    if ($(node).hasClass(v)) {
                        result = true;
                        return false;
                    }
                })
                return result;
            }
        }
        name = utils.trim(name).replace(/[ ]{2,}/g, ' ').split(' ');
        var arr = [];
        for (var n = 0, ni; ni = name[n++];) {
            var list = node.getElementsByTagName(ni);
            for (var i = 0, ci; ci = list[i++];) {
                if (!filter || filter(ci))
                    arr.push(ci);
            }
        }
        return arr;
    },


    /**
     * 璁剧疆鑺傜偣node鍙婂叾瀛愯妭鐐逛笉浼氳閫変腑
     * @name unSelectable
     * @grammar UM.dom.domUtils.unSelectable(node)
     */
    unSelectable: ie || browser.opera ? function (node) {
        //for ie9
        node.onselectstart = function () {
            return false;
        };
        node.onclick = node.onkeyup = node.onkeydown = function () {
            return false;
        };
        node.unselectable = 'on';
        node.setAttribute("unselectable", "on");
        for (var i = 0, ci; ci = node.all[i++];) {
            switch (ci.tagName.toLowerCase()) {
                case 'iframe' :
                case 'textarea' :
                case 'input' :
                case 'select' :
                    break;
                default :
                    ci.unselectable = 'on';
                    node.setAttribute("unselectable", "on");
            }
        }
    } : function (node) {
        node.style.MozUserSelect =
            node.style.webkitUserSelect =
                node.style.KhtmlUserSelect = 'none';
    },
    /**
     * 鍒犻櫎鑺傜偣node涓婄殑灞炴€ttrNames锛宎ttrNames涓哄睘鎬у悕绉版暟缁�
     * @name  removeAttributes
     * @grammar UM.dom.domUtils.removeAttributes(node,attrNames)
     * @example
     * //Before remove
     * <span style="font-size:14px;" id="test" name="followMe">xxxxx</span>
     * //Remove
     * UM.dom.domUtils.removeAttributes(node,["id","name"]);
     * //After remove
     * <span style="font-size:14px;">xxxxx</span>
     */
    removeAttributes: function (node, attrNames) {
        attrNames = utils.isArray(attrNames) ? attrNames : utils.trim(attrNames).replace(/[ ]{2,}/g, ' ').split(' ');
        for (var i = 0, ci; ci = attrNames[i++];) {
            ci = attrFix[ci] || ci;
            switch (ci) {
                case 'className':
                    node[ci] = '';
                    break;
                case 'style':
                    node.style.cssText = '';
                    !browser.ie && node.removeAttributeNode(node.getAttributeNode('style'))
            }
            node.removeAttribute(ci);
        }
    },
    /**
     * 鍦╠oc涓嬪垱寤轰竴涓爣绛惧悕涓簍ag锛屽睘鎬т负attrs鐨勫厓绱�
     * @name createElement
     * @grammar UM.dom.domUtils.createElement(doc,tag,attrs)  =>  Node  //杩斿洖鍒涘缓鐨勮妭鐐�
     */
    createElement: function (doc, tag, attrs) {
        return domUtils.setAttributes(doc.createElement(tag), attrs)
    },
    /**
     * 涓鸿妭鐐筺ode娣诲姞灞炴€ttrs锛宎ttrs涓哄睘鎬ч敭鍊煎
     * @name setAttributes
     * @grammar UM.dom.domUtils.setAttributes(node,attrs)  => node
     */
    setAttributes: function (node, attrs) {
        for (var attr in attrs) {
            if (attrs.hasOwnProperty(attr)) {
                var value = attrs[attr];
                switch (attr) {
                    case 'class':
                        //ie涓嬭杩欐牱璧嬪€硷紝setAttribute涓嶈捣浣滅敤
                        node.className = value;
                        break;
                    case 'style' :
                        node.style.cssText = node.style.cssText + ";" + value;
                        break;
                    case 'innerHTML':
                        node[attr] = value;
                        break;
                    case 'value':
                        node.value = value;
                        break;
                    default:
                        node.setAttribute(attrFix[attr] || attr, value);
                }
            }
        }
        return node;
    },

    /**
     * 鑾峰彇鍏冪礌element鐨勮绠楁牱寮�
     * @name getComputedStyle
     * @grammar UM.dom.domUtils.getComputedStyle(element,styleName)  => String //杩斿洖瀵瑰簲鏍峰紡鍚嶇О鐨勬牱寮忓€�
     * @example
     * getComputedStyle(document.body,"font-size")  =>  "15px"
     * getComputedStyle(form,"color")  =>  "#ffccdd"
     */
    getComputedStyle: function (element, styleName) {
        return utils.transUnitToPx(utils.fixColor(styleName, $(element).css(styleName)));
    },

    /**
     * 闃绘浜嬩欢榛樿琛屼负
     * @param {Event} evt    闇€瑕佺粍缁囩殑浜嬩欢瀵硅薄
     */
    preventDefault: function (evt) {
        evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
    },

    /**
     * 鑾峰彇鍏冪礌element鐨勬煇涓牱寮忓€�
     * @name getStyle
     * @grammar UM.dom.domUtils.getStyle(element,name)  => String
     */
    getStyle: function (element, name) {
        var value = element.style[ utils.cssStyleToDomStyle(name) ];
        return utils.fixColor(name, value);
    },
    /**
     * 涓哄厓绱爀lement璁剧疆鏍峰紡灞炴€у€�
     * @name setStyle
     * @grammar UM.dom.domUtils.setStyle(element,name,value)
     */
    setStyle: function (element, name, value) {
        element.style[utils.cssStyleToDomStyle(name)] = value;
        if (!utils.trim(element.style.cssText)) {
            this.removeAttributes(element, 'style')
        }
    },

    /**
     * 鍒犻櫎_moz_dirty灞炴€�
     * @function
     */
    removeDirtyAttr: function (node) {
        for (var i = 0, ci, nodes = node.getElementsByTagName('*'); ci = nodes[i++];) {
            ci.removeAttribute('_moz_dirty');
        }
        node.removeAttribute('_moz_dirty');
    },
    /**
     * 杩斿洖瀛愯妭鐐圭殑鏁伴噺
     * @function
     * @param {Node}    node    鐖惰妭鐐�
     * @param  {Function}    fn    杩囨护瀛愯妭鐐圭殑瑙勫垯锛岃嫢涓虹┖锛屽垯寰楀埌鎵€鏈夊瓙鑺傜偣鐨勬暟閲�
     * @return {Number}    绗﹀悎鏉′欢瀛愯妭鐐圭殑鏁伴噺
     */
    getChildCount: function (node, fn) {
        var count = 0, first = node.firstChild;
        fn = fn || function () {
            return 1;
        };
        while (first) {
            if (fn(first)) {
                count++;
            }
            first = first.nextSibling;
        }
        return count;
    },

    /**
     * 鍒ゆ柇鏄惁涓虹┖鑺傜偣
     * @function
     * @param {Node}    node    鑺傜偣
     * @return {Boolean}    鏄惁涓虹┖鑺傜偣
     */
    isEmptyNode: function (node) {
        return !node.firstChild || domUtils.getChildCount(node, function (node) {
            return  !domUtils.isBr(node) && !domUtils.isBookmarkNode(node) && !domUtils.isWhitespace(node)
        }) == 0
    },

    /**
     * 鍒ゆ柇鑺傜偣鏄惁涓篵r
     * @function
     * @param {Node}    node   鑺傜偣
     */
    isBr: function (node) {
        return node.nodeType == 1 && node.tagName == 'BR';
    },
    isFillChar: function (node, isInStart) {
        return node.nodeType == 3 && !node.nodeValue.replace(new RegExp((isInStart ? '^' : '' ) + domUtils.fillChar), '').length
    },

    isEmptyBlock: function (node, reg) {
        if (node.nodeType != 1)
            return 0;
        reg = reg || new RegExp('[ \t\r\n' + domUtils.fillChar + ']', 'g');
        if (node[browser.ie ? 'innerText' : 'textContent'].replace(reg, '').length > 0) {
            return 0;
        }
        for (var n in dtd.$isNotEmpty) {
            if (node.getElementsByTagName(n).length) {
                return 0;
            }
        }
        return 1;
    },

    //鍒ゆ柇鏄惁鏄紪杈戝櫒鑷畾涔夌殑鍙傛暟
    isCustomeNode: function (node) {
        return node.nodeType == 1 && node.getAttribute('_ue_custom_node_');
    },
    fillNode: function (doc, node) {
        var tmpNode = browser.ie ? doc.createTextNode(domUtils.fillChar) : doc.createElement('br');
        node.innerHTML = '';
        node.appendChild(tmpNode);
    },
    isBoundaryNode: function (node, dir) {
        var tmp;
        while (!domUtils.isBody(node)) {
            tmp = node;
            node = node.parentNode;
            if (tmp !== node[dir]) {
                return false;
            }
        }
        return true;
    },
    isFillChar: function (node, isInStart) {
        return node.nodeType == 3 && !node.nodeValue.replace(new RegExp((isInStart ? '^' : '' ) + domUtils.fillChar), '').length
    }
};
var fillCharReg = new RegExp(domUtils.fillChar, 'g');
///import editor.js
///import core/utils.js
///import core/browser.js
///import core/dom/dom.js
///import core/dom/dtd.js
///import core/dom/domUtils.js
/**
 * @file
 * @name UM.dom.Range
 * @anthor zhanyi
 * @short Range
 * @import editor.js,core/utils.js,core/browser.js,core/dom/domUtils.js,core/dom/dtd.js
 * @desc Range鑼冨洿瀹炵幇绫伙紝鏈被鏄疷Editor搴曞眰鏍稿績绫伙紝缁熶竴w3cRange鍜宨eRange涔嬮棿鐨勫樊寮傦紝鍖呮嫭鎺ュ彛鍜屽睘鎬�
 */
(function () {
    var guid = 0,
        fillChar = domUtils.fillChar,
        fillData;

    /**
     * 鏇存柊range鐨刢ollapse鐘舵€�
     * @param  {Range}   range    range瀵硅薄
     */
    function updateCollapse(range) {
        range.collapsed =
            range.startContainer && range.endContainer &&
                range.startContainer === range.endContainer &&
                range.startOffset == range.endOffset;
    }

    function selectOneNode(rng){
        return !rng.collapsed && rng.startContainer.nodeType == 1 && rng.startContainer === rng.endContainer && rng.endOffset - rng.startOffset == 1
    }
    function setEndPoint(toStart, node, offset, range) {
        //濡傛灉node鏄嚜闂悎鏍囩瑕佸鐞�
        if (node.nodeType == 1 && (dtd.$empty[node.tagName] || dtd.$nonChild[node.tagName])) {
            offset = domUtils.getNodeIndex(node) + (toStart ? 0 : 1);
            node = node.parentNode;
        }
        if (toStart) {
            range.startContainer = node;
            range.startOffset = offset;
            if (!range.endContainer) {
                range.collapse(true);
            }
        } else {
            range.endContainer = node;
            range.endOffset = offset;
            if (!range.startContainer) {
                range.collapse(false);
            }
        }
        updateCollapse(range);
        return range;
    }


    /**
     * @name Range
     * @grammar new UM.dom.Range(document)  => Range 瀹炰緥
     * @desc 鍒涘缓涓€涓窡document缁戝畾鐨勭┖鐨凴ange瀹炰緥
     * - ***startContainer*** 寮€濮嬭竟鐣岀殑瀹瑰櫒鑺傜偣,鍙互鏄痚lementNode鎴栬€呮槸textNode
     * - ***startOffset*** 瀹瑰櫒鑺傜偣涓殑鍋忕Щ閲忥紝濡傛灉鏄痚lementNode灏辨槸childNodes涓殑绗嚑涓紝濡傛灉鏄痶extNode灏辨槸nodeValue鐨勭鍑犱釜瀛楃
     * - ***endContainer*** 缁撴潫杈圭晫鐨勫鍣ㄨ妭鐐�,鍙互鏄痚lementNode鎴栬€呮槸textNode
     * - ***endOffset*** 瀹瑰櫒鑺傜偣涓殑鍋忕Щ閲忥紝濡傛灉鏄痚lementNode灏辨槸childNodes涓殑绗嚑涓紝濡傛灉鏄痶extNode灏辨槸nodeValue鐨勭鍑犱釜瀛楃
     * - ***document*** 璺焤ange鍏宠仈鐨刣ocument瀵硅薄
     * - ***collapsed*** 鏄惁鏄棴鍚堢姸鎬�
     */
    var Range = dom.Range = function (document,body) {
        var me = this;
        me.startContainer =
            me.startOffset =
                me.endContainer =
                    me.endOffset = null;
        me.document = document;
        me.collapsed = true;
        me.body = body;
    };

    /**
     * 鍒犻櫎fillData
     * @param doc
     * @param excludeNode
     */
    function removeFillData(doc, excludeNode) {
        try {
            if (fillData && domUtils.inDoc(fillData, doc)) {
                if (!fillData.nodeValue.replace(fillCharReg, '').length) {
                    var tmpNode = fillData.parentNode;
                    domUtils.remove(fillData);
                    while (tmpNode && domUtils.isEmptyInlineElement(tmpNode) &&
                        //safari鐨刢ontains鏈塨ug
                        (browser.safari ? !(domUtils.getPosition(tmpNode,excludeNode) & domUtils.POSITION_CONTAINS) : !tmpNode.contains(excludeNode))
                        ) {
                        fillData = tmpNode.parentNode;
                        domUtils.remove(tmpNode);
                        tmpNode = fillData;
                    }
                } else {
                    fillData.nodeValue = fillData.nodeValue.replace(fillCharReg, '');
                }
            }
        } catch (e) {
        }
    }

    /**
     *
     * @param node
     * @param dir
     */
    function mergeSibling(node, dir) {
        var tmpNode;
        node = node[dir];
        while (node && domUtils.isFillChar(node)) {
            tmpNode = node[dir];
            domUtils.remove(node);
            node = tmpNode;
        }
    }

    function execContentsAction(range, action) {
        //璋冩暣杈圭晫
        //range.includeBookmark();
        var start = range.startContainer,
            end = range.endContainer,
            startOffset = range.startOffset,
            endOffset = range.endOffset,
            doc = range.document,
            frag = doc.createDocumentFragment(),
            tmpStart, tmpEnd;
        if (start.nodeType == 1) {
            start = start.childNodes[startOffset] || (tmpStart = start.appendChild(doc.createTextNode('')));
        }
        if (end.nodeType == 1) {
            end = end.childNodes[endOffset] || (tmpEnd = end.appendChild(doc.createTextNode('')));
        }
        if (start === end && start.nodeType == 3) {
            frag.appendChild(doc.createTextNode(start.substringData(startOffset, endOffset - startOffset)));
            //is not clone
            if (action) {
                start.deleteData(startOffset, endOffset - startOffset);
                range.collapse(true);
            }
            return frag;
        }
        var current, currentLevel, clone = frag,
            startParents = domUtils.findParents(start, true), endParents = domUtils.findParents(end, true);
        for (var i = 0; startParents[i] == endParents[i];) {
            i++;
        }
        for (var j = i, si; si = startParents[j]; j++) {
            current = si.nextSibling;
            if (si == start) {
                if (!tmpStart) {
                    if (range.startContainer.nodeType == 3) {
                        clone.appendChild(doc.createTextNode(start.nodeValue.slice(startOffset)));
                        //is not clone
                        if (action) {
                            start.deleteData(startOffset, start.nodeValue.length - startOffset);
                        }
                    } else {
                        clone.appendChild(!action ? start.cloneNode(true) : start);
                    }
                }
            } else {
                currentLevel = si.cloneNode(false);
                clone.appendChild(currentLevel);
            }
            while (current) {
                if (current === end || current === endParents[j]) {
                    break;
                }
                si = current.nextSibling;
                clone.appendChild(!action ? current.cloneNode(true) : current);
                current = si;
            }
            clone = currentLevel;
        }
        clone = frag;
        if (!startParents[i]) {
            clone.appendChild(startParents[i - 1].cloneNode(false));
            clone = clone.firstChild;
        }
        for (var j = i, ei; ei = endParents[j]; j++) {
            current = ei.previousSibling;
            if (ei == end) {
                if (!tmpEnd && range.endContainer.nodeType == 3) {
                    clone.appendChild(doc.createTextNode(end.substringData(0, endOffset)));
                    //is not clone
                    if (action) {
                        end.deleteData(0, endOffset);
                    }
                }
            } else {
                currentLevel = ei.cloneNode(false);
                clone.appendChild(currentLevel);
            }
            //濡傛灉涓ょ鍚岀骇锛屽彸杈圭涓€娆″凡缁忚寮€濮嬪仛浜�
            if (j != i || !startParents[i]) {
                while (current) {
                    if (current === start) {
                        break;
                    }
                    ei = current.previousSibling;
                    clone.insertBefore(!action ? current.cloneNode(true) : current, clone.firstChild);
                    current = ei;
                }
            }
            clone = currentLevel;
        }
        if (action) {
            range.setStartBefore(!endParents[i] ? endParents[i - 1] : !startParents[i] ? startParents[i - 1] : endParents[i]).collapse(true);
        }
        tmpStart && domUtils.remove(tmpStart);
        tmpEnd && domUtils.remove(tmpEnd);
        return frag;
    }
    Range.prototype = {
        /**
         * @name deleteContents
         * @grammar range.deleteContents()  => Range
         * @desc 鍒犻櫎褰撳墠閫夊尯鑼冨洿涓殑鎵€鏈夊唴瀹瑰苟杩斿洖range瀹炰緥锛岃繖鏃剁殑range宸茬粡鍙樻垚浜嗛棴鍚堢姸鎬�
         * @example
         * DOM Element :
         * <b>x<i>x[x<i>xx]x</b>
         * //鎵ц鏂规硶鍚�
         * <b>x<i>x<i>|x</b>
         * 娉ㄦ剰range鏀瑰彉浜�
         * range.startContainer => b
         * range.startOffset  => 2
         * range.endContainer => b
         * range.endOffset => 2
         * range.collapsed => true
         */
        deleteContents:function () {
            var txt;
            if (!this.collapsed) {
                execContentsAction(this, 1);
            }
            if (browser.webkit) {
                txt = this.startContainer;
                if (txt.nodeType == 3 && !txt.nodeValue.length) {
                    this.setStartBefore(txt).collapse(true);
                    domUtils.remove(txt);
                }
            }
            return this;
        },
        inFillChar : function(){
            var start = this.startContainer;
            if(this.collapsed && start.nodeType == 3
                && start.nodeValue.replace(new RegExp('^' + domUtils.fillChar),'').length + 1 == start.nodeValue.length
                ){
                return true;
            }
            return false;
        },
        /**
         * @name  setStart
         * @grammar range.setStart(node,offset)  => Range
         * @desc    璁剧疆range鐨勫紑濮嬩綅缃綅浜巒ode鑺傜偣鍐咃紝鍋忕Щ閲忎负offset
         * 濡傛灉node鏄痚lementNode閭ffset鎸囩殑鏄痗hildNodes涓殑绗嚑涓紝濡傛灉鏄痶extNode閭ffset鎸囩殑鏄痭odeValue鐨勭鍑犱釜瀛楃
         */
        setStart:function (node, offset) {
            return setEndPoint(true, node, offset, this);
        },
        /**
         * 璁剧疆range鐨勭粨鏉熶綅缃綅浜巒ode鑺傜偣锛屽亸绉婚噺涓簅ffset
         * 濡傛灉node鏄痚lementNode閭ffset鎸囩殑鏄痗hildNodes涓殑绗嚑涓紝濡傛灉鏄痶extNode閭ffset鎸囩殑鏄痭odeValue鐨勭鍑犱釜瀛楃
         * @name  setEnd
         * @grammar range.setEnd(node,offset)  => Range
         */
        setEnd:function (node, offset) {
            return setEndPoint(false, node, offset, this);
        },
        /**
         * 灏哛ange寮€濮嬩綅缃缃埌node鑺傜偣涔嬪悗
         * @name  setStartAfter
         * @grammar range.setStartAfter(node)  => Range
         * @example
         * <b>xx<i>x|x</i>x</b>
         * 鎵цsetStartAfter(i)鍚�
         * range.startContainer =>b
         * range.startOffset =>2
         */
        setStartAfter:function (node) {
            return this.setStart(node.parentNode, domUtils.getNodeIndex(node) + 1);
        },
        /**
         * 灏哛ange寮€濮嬩綅缃缃埌node鑺傜偣涔嬪墠
         * @name  setStartBefore
         * @grammar range.setStartBefore(node)  => Range
         * @example
         * <b>xx<i>x|x</i>x</b>
         * 鎵цsetStartBefore(i)鍚�
         * range.startContainer =>b
         * range.startOffset =>1
         */
        setStartBefore:function (node) {
            return this.setStart(node.parentNode, domUtils.getNodeIndex(node));
        },
        /**
         * 灏哛ange缁撴潫浣嶇疆璁剧疆鍒皀ode鑺傜偣涔嬪悗
         * @name  setEndAfter
         * @grammar range.setEndAfter(node)  => Range
         * @example
         * <b>xx<i>x|x</i>x</b>
         * setEndAfter(i)鍚�
         * range.endContainer =>b
         * range.endtOffset =>2
         */
        setEndAfter:function (node) {
            return this.setEnd(node.parentNode, domUtils.getNodeIndex(node) + 1);
        },
        /**
         * 灏哛ange缁撴潫浣嶇疆璁剧疆鍒皀ode鑺傜偣涔嬪墠
         * @name  setEndBefore
         * @grammar range.setEndBefore(node)  => Range
         * @example
         * <b>xx<i>x|x</i>x</b>
         * 鎵цsetEndBefore(i)鍚�
         * range.endContainer =>b
         * range.endtOffset =>1
         */
        setEndBefore:function (node) {
            return this.setEnd(node.parentNode, domUtils.getNodeIndex(node));
        },
        /**
         * 灏哛ange寮€濮嬩綅缃缃埌node鑺傜偣鍐呯殑寮€濮嬩綅缃�
         * @name  setStartAtFirst
         * @grammar range.setStartAtFirst(node)  => Range
         */
        setStartAtFirst:function (node) {
            return this.setStart(node, 0);
        },
        /**
         * 灏哛ange寮€濮嬩綅缃缃埌node鑺傜偣鍐呯殑缁撴潫浣嶇疆
         * @name  setStartAtLast
         * @grammar range.setStartAtLast(node)  => Range
         */
        setStartAtLast:function (node) {
            return this.setStart(node, node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length);
        },
        /**
         * 灏哛ange缁撴潫浣嶇疆璁剧疆鍒皀ode鑺傜偣鍐呯殑寮€濮嬩綅缃�
         * @name  setEndAtFirst
         * @grammar range.setEndAtFirst(node)  => Range
         */
        setEndAtFirst:function (node) {
            return this.setEnd(node, 0);
        },
        /**
         * 灏哛ange缁撴潫浣嶇疆璁剧疆鍒皀ode鑺傜偣鍐呯殑缁撴潫浣嶇疆
         * @name  setEndAtLast
         * @grammar range.setEndAtLast(node)  => Range
         */
        setEndAtLast:function (node) {
            return this.setEnd(node, node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length);
        },

        /**
         * 閫変腑瀹屾暣鐨勬寚瀹氳妭鐐�,骞惰繑鍥炲寘鍚鑺傜偣鐨剅ange
         * @name  selectNode
         * @grammar range.selectNode(node)  => Range
         */
        selectNode:function (node) {
            return this.setStartBefore(node).setEndAfter(node);
        },
        /**
         * 閫変腑node鍐呴儴鐨勬墍鏈夎妭鐐癸紝骞惰繑鍥炲搴旂殑range
         * @name selectNodeContents
         * @grammar range.selectNodeContents(node)  => Range
         * @example
         * <b>xx[x<i>xxx</i>]xxx</b>
         * 鎵ц鍚�
         * <b>[xxx<i>xxx</i>xxx]</b>
         * range.startContainer =>b
         * range.startOffset =>0
         * range.endContainer =>b
         * range.endOffset =>3
         */
        selectNodeContents:function (node) {
            return this.setStart(node, 0).setEndAtLast(node);
        },

        /**
         * 鍏嬮殕涓€涓柊鐨剅ange瀵硅薄
         * @name  cloneRange
         * @grammar range.cloneRange() => Range
         */
        cloneRange:function () {
            var me = this;
            return new Range(me.document).setStart(me.startContainer, me.startOffset).setEnd(me.endContainer, me.endOffset);

        },

        /**
         * 璁╅€夊尯闂悎鍒板熬閮紝鑻oStart涓虹湡锛屽垯闂悎鍒板ご閮�
         * @name  collapse
         * @grammar range.collapse() => Range
         * @grammar range.collapse(true) => Range   //闂悎閫夊尯鍒板ご閮�
         */
        collapse:function (toStart) {
            var me = this;
            if (toStart) {
                me.endContainer = me.startContainer;
                me.endOffset = me.startOffset;
            } else {
                me.startContainer = me.endContainer;
                me.startOffset = me.endOffset;
            }
            me.collapsed = true;
            return me;
        },

        /**
         * 璋冩暣range鐨勮竟鐣岋紝浣垮叾"鏀剁缉"鍒版渶灏忕殑浣嶇疆
         * @name  shrinkBoundary
         * @grammar range.shrinkBoundary()  => Range  //range寮€濮嬩綅缃拰缁撴潫浣嶇疆閮借皟鏁达紝鍙傝<code><a href="#adjustmentboundary">adjustmentBoundary</a></code>
         * @grammar range.shrinkBoundary(true)  => Range  //浠呰皟鏁村紑濮嬩綅缃紝蹇界暐缁撴潫浣嶇疆
         * @example
         * <b>xx[</b>xxxxx] ==> <b>xx</b>[xxxxx]
         * <b>x[xx</b><i>]xxx</i> ==> <b>x[xx]</b><i>xxx</i>
         * [<b><i>xxxx</i>xxxxxxx</b>] ==> <b><i>[xxxx</i>xxxxxxx]</b>
         */
        shrinkBoundary:function (ignoreEnd) {
            var me = this, child,
                collapsed = me.collapsed;
            function check(node){
                return node.nodeType == 1 && !domUtils.isBookmarkNode(node) && !dtd.$empty[node.tagName] && !dtd.$nonChild[node.tagName]
            }
            while (me.startContainer.nodeType == 1 //鏄痚lement
                && (child = me.startContainer.childNodes[me.startOffset]) //瀛愯妭鐐逛篃鏄痚lement
                && check(child)) {
                me.setStart(child, 0);
            }
            if (collapsed) {
                return me.collapse(true);
            }
            if (!ignoreEnd) {
                while (me.endContainer.nodeType == 1//鏄痚lement
                    && me.endOffset > 0 //濡傛灉鏄┖鍏冪礌灏遍€€鍑� endOffset=0閭ｄ箞endOffst-1涓鸿礋鍊硷紝childNodes[endOffset]鎶ラ敊
                    && (child = me.endContainer.childNodes[me.endOffset - 1]) //瀛愯妭鐐逛篃鏄痚lement
                    && check(child)) {
                    me.setEnd(child, child.childNodes.length);
                }
            }
            return me;
        },

        /**
         * 璋冩暣杈圭晫瀹瑰櫒锛屽鏋滄槸textNode,灏辫皟鏁村埌elementNode涓�
         * @name trimBoundary
         * @grammar range.trimBoundary([ignoreEnd])  => Range //true蹇界暐缁撴潫杈圭晫
         * @example
         * DOM Element :
         * <b>|xxx</b>
         * startContainer = xxx; startOffset = 0
         * //鎵ц鍚庢湰鏂规硶鍚�
         * startContainer = <b>;  startOffset = 0
         * @example
         * Dom Element :
         * <b>xx|x</b>
         * startContainer = xxx;  startOffset = 2
         * //鎵ц鏈柟娉曞悗锛寈xx琚疄瀹炲湪鍦ㄥ湴鍒囧垎鎴愪袱涓猅extNode
         * startContainer = <b>; startOffset = 1
         */
        trimBoundary:function (ignoreEnd) {
            this.txtToElmBoundary();
            var start = this.startContainer,
                offset = this.startOffset,
                collapsed = this.collapsed,
                end = this.endContainer;
            if (start.nodeType == 3) {
                if (offset == 0) {
                    this.setStartBefore(start);
                } else {
                    if (offset >= start.nodeValue.length) {
                        this.setStartAfter(start);
                    } else {
                        var textNode = domUtils.split(start, offset);
                        //璺熸柊缁撴潫杈圭晫
                        if (start === end) {
                            this.setEnd(textNode, this.endOffset - offset);
                        } else if (start.parentNode === end) {
                            this.endOffset += 1;
                        }
                        this.setStartBefore(textNode);
                    }
                }
                if (collapsed) {
                    return this.collapse(true);
                }
            }
            if (!ignoreEnd) {
                offset = this.endOffset;
                end = this.endContainer;
                if (end.nodeType == 3) {
                    if (offset == 0) {
                        this.setEndBefore(end);
                    } else {
                        offset < end.nodeValue.length && domUtils.split(end, offset);
                        this.setEndAfter(end);
                    }
                }
            }
            return this;
        },
        /**
         * 濡傛灉閫夊尯鍦ㄦ枃鏈殑杈圭晫涓婏紝灏辨墿灞曢€夊尯鍒版枃鏈殑鐖惰妭鐐逛笂
         * @name  txtToElmBoundary
         * @example
         * Dom Element :
         * <b> |xxx</b>
         * startContainer = xxx;  startOffset = 0
         * //鏈柟娉曟墽琛屽悗
         * startContainer = <b>; startOffset = 0
         * @example
         * Dom Element :
         * <b> xxx| </b>
         * startContainer = xxx; startOffset = 3
         * //鏈柟娉曟墽琛屽悗
         * startContainer = <b>; startOffset = 1
         */
        txtToElmBoundary:function (ignoreCollapsed) {
            function adjust(r, c) {
                var container = r[c + 'Container'],
                    offset = r[c + 'Offset'];
                if (container.nodeType == 3) {
                    if (!offset) {
                        r['set' + c.replace(/(\w)/, function (a) {
                            return a.toUpperCase();
                        }) + 'Before'](container);
                    } else if (offset >= container.nodeValue.length) {
                        r['set' + c.replace(/(\w)/, function (a) {
                            return a.toUpperCase();
                        }) + 'After' ](container);
                    }
                }
            }

            if (ignoreCollapsed || !this.collapsed) {
                adjust(this, 'start');
                adjust(this, 'end');
            }
            return this;
        },

        /**
         * 鍦ㄥ綋鍓嶉€夊尯鐨勫紑濮嬩綅缃墠鎻掑叆涓€涓妭鐐规垨鑰協ragment锛宺ange鐨勫紑濮嬩綅缃細鍦ㄦ彃鍏ヨ妭鐐圭殑鍓嶈竟
         * @name  insertNode
         * @grammar range.insertNode(node)  => Range //node鍙互鏄痶extNode,elementNode,fragment
         * @example
         * Range :
         * xxx[x<p>xxxx</p>xxxx]x<p>sdfsdf</p>
         * 寰呮彃鍏ode :
         * <p>ssss</p>
         * 鎵ц鏈柟娉曞悗鐨凴ange :
         * xxx[<p>ssss</p>x<p>xxxx</p>xxxx]x<p>sdfsdf</p>
         */
        insertNode:function (node) {
            var first = node, length = 1;
            if (node.nodeType == 11) {
                first = node.firstChild;
                length = node.childNodes.length;
            }
            this.trimBoundary(true);
            var start = this.startContainer,
                offset = this.startOffset;
            var nextNode = start.childNodes[ offset ];
            if (nextNode) {
                start.insertBefore(node, nextNode);
            } else {
                start.appendChild(node);
            }
            if (first.parentNode === this.endContainer) {
                this.endOffset = this.endOffset + length;
            }
            return this.setStartBefore(first);
        },
        /**
         * 璁剧疆鍏夋爣闂悎浣嶇疆,toEnd璁剧疆涓簍rue鏃跺厜鏍囧皢闂悎鍒伴€夊尯鐨勭粨灏�
         * @name  setCursor
         * @grammar range.setCursor([toEnd])  =>  Range   //toEnd涓簍rue鏃讹紝鍏夋爣闂悎鍒伴€夊尯鐨勬湯灏�
         */
        setCursor:function (toEnd, noFillData) {
            return this.collapse(!toEnd).select(noFillData);
        },
        /**
         * 鍒涘缓褰撳墠range鐨勪竴涓功绛撅紝璁板綍涓嬪綋鍓峳ange鐨勪綅缃紝鏂逛究褰揹om鏍戞敼鍙樻椂锛岃繕鑳芥壘鍥炲師鏉ョ殑閫夊尯浣嶇疆
         * @name createBookmark
         * @grammar range.createBookmark([serialize])  => Object  //{start:寮€濮嬫爣璁�,end:缁撴潫鏍囪,id:serialize} serialize涓虹湡鏃讹紝寮€濮嬬粨鏉熸爣璁版槸鎻掑叆鑺傜偣鐨刬d锛屽惁鍒欐槸鎻掑叆鑺傜偣鐨勫紩鐢�
         */
        createBookmark:function (serialize, same) {
            var endNode,
                startNode = this.document.createElement('span');
            startNode.style.cssText = 'display:none;line-height:0px;';
            startNode.appendChild(this.document.createTextNode('\u200D'));
            startNode.id = '_baidu_bookmark_start_' + (same ? '' : guid++);

            if (!this.collapsed) {
                endNode = startNode.cloneNode(true);
                endNode.id = '_baidu_bookmark_end_' + (same ? '' : guid++);
            }
            this.insertNode(startNode);
            if (endNode) {
                this.collapse().insertNode(endNode).setEndBefore(endNode);
            }
            this.setStartAfter(startNode);
            return {
                start:serialize ? startNode.id : startNode,
                end:endNode ? serialize ? endNode.id : endNode : null,
                id:serialize
            }
        },
        /**
         *  绉诲姩杈圭晫鍒颁功绛句綅缃紝骞跺垹闄ゆ彃鍏ョ殑涔︾鑺傜偣
         *  @name  moveToBookmark
         *  @grammar range.moveToBookmark(bookmark)  => Range //璁╁綋鍓嶇殑range閫夊埌缁欏畾bookmark鐨勪綅缃�,bookmark瀵硅薄鏄敱range.createBookmark鍒涘缓鐨�
         */
        moveToBookmark:function (bookmark) {
            var start = bookmark.id ? this.document.getElementById(bookmark.start) : bookmark.start,
                end = bookmark.end && bookmark.id ? this.document.getElementById(bookmark.end) : bookmark.end;
            this.setStartBefore(start);
            domUtils.remove(start);
            if (end) {
                this.setEndBefore(end);
                domUtils.remove(end);
            } else {
                this.collapse(true);
            }
            return this;
        },

        /**
         * 璋冩暣Range鐨勮竟鐣岋紝浣垮叾"缂╁皬"鍒版渶鍚堥€傜殑浣嶇疆
         * @name adjustmentBoundary
         * @grammar range.adjustmentBoundary() => Range   //鍙傝<code><a href="#shrinkboundary">shrinkBoundary</a></code>
         * @example
         * <b>xx[</b>xxxxx] ==> <b>xx</b>[xxxxx]
         * <b>x[xx</b><i>]xxx</i> ==> <b>x[xx</b>]<i>xxx</i>
         */
        adjustmentBoundary:function () {
            if (!this.collapsed) {
                while (!domUtils.isBody(this.startContainer) &&
                    this.startOffset == this.startContainer[this.startContainer.nodeType == 3 ? 'nodeValue' : 'childNodes'].length &&
                    this.startContainer[this.startContainer.nodeType == 3 ? 'nodeValue' : 'childNodes'].length
                    ) {

                    this.setStartAfter(this.startContainer);
                }
                while (!domUtils.isBody(this.endContainer) && !this.endOffset &&
                    this.endContainer[this.endContainer.nodeType == 3 ? 'nodeValue' : 'childNodes'].length
                    ) {
                    this.setEndBefore(this.endContainer);
                }
            }
            return this;
        },

        /**
         * 寰楀埌涓€涓嚜闂悎鐨勮妭鐐�,甯哥敤浜庤幏鍙栬嚜闂拰鐨勮妭鐐癸紝渚嬪鍥剧墖鑺傜偣
         * @name  getClosedNode
         * @grammar range.getClosedNode()  => node|null
         * @example
         * <b>xxxx[<img />]xxx</b>
         */
        getClosedNode:function () {
            var node;
            if (!this.collapsed) {
                var range = this.cloneRange().adjustmentBoundary().shrinkBoundary();
                if (selectOneNode(range)) {
                    var child = range.startContainer.childNodes[range.startOffset];
                    if (child && child.nodeType == 1 && (dtd.$empty[child.tagName] || dtd.$nonChild[child.tagName])) {
                        node = child;
                    }
                }
            }
            return node;
        },
        /**
         * 鏍规嵁褰撳墠range閫変腑鍐呭鑺傜偣锛堝湪椤甸潰涓婅〃鐜颁负鍙嶇櫧鏄剧ず锛�
         * @name select
         * @grammar range.select();  => Range
         */
        select:browser.ie ? function (noFillData, textRange) {
            var nativeRange;
            if (!this.collapsed)
                this.shrinkBoundary();
            var node = this.getClosedNode();
            if (node && !textRange) {
                try {
                    nativeRange = this.document.body.createControlRange();
                    nativeRange.addElement(node);
                    nativeRange.select();
                } catch (e) {}
                return this;
            }
            var bookmark = this.createBookmark(),
                start = bookmark.start,
                end;
            nativeRange = this.document.body.createTextRange();
            nativeRange.moveToElementText(start);
            nativeRange.moveStart('character', 1);
            if (!this.collapsed) {
                var nativeRangeEnd = this.document.body.createTextRange();
                end = bookmark.end;
                nativeRangeEnd.moveToElementText(end);
                nativeRange.setEndPoint('EndToEnd', nativeRangeEnd);
            } else {
                if (!noFillData && this.startContainer.nodeType != 3) {
                    //浣跨敤<span>|x<span>鍥哄畾浣忓厜鏍�
                    var tmpText = this.document.createTextNode(fillChar),
                        tmp = this.document.createElement('span');
                    tmp.appendChild(this.document.createTextNode(fillChar));
                    start.parentNode.insertBefore(tmp, start);
                    start.parentNode.insertBefore(tmpText, start);
                    //褰撶偣b,i,u鏃讹紝涓嶈兘娓呴櫎i涓婅竟鐨刡
                    removeFillData(this.document, tmpText);
                    fillData = tmpText;
                    mergeSibling(tmp, 'previousSibling');
                    mergeSibling(start, 'nextSibling');
                    nativeRange.moveStart('character', -1);
                    nativeRange.collapse(true);
                }
            }
            this.moveToBookmark(bookmark);
            tmp && domUtils.remove(tmp);
            //IE鍦ㄩ殣钘忕姸鎬佷笅涓嶆敮鎸乺ange鎿嶄綔锛宑atch涓€涓�
            try {
                nativeRange.select();
            } catch (e) {
            }
            return this;
        } : function (notInsertFillData) {
            function checkOffset(rng){

                function check(node,offset,dir){
                    if(node.nodeType == 3 && node.nodeValue.length < offset){
                        rng[dir + 'Offset'] = node.nodeValue.length
                    }
                }
                check(rng.startContainer,rng.startOffset,'start');
                check(rng.endContainer,rng.endOffset,'end');
            }
            var win = domUtils.getWindow(this.document),
                sel = win.getSelection(),
                txtNode;
            //FF涓嬪叧闂嚜鍔ㄩ暱楂樻椂婊氬姩鏉″湪鍏抽棴dialog鏃朵細璺�
            //ff涓嬪鏋滀笉body.focus灏嗕笉鑳藉畾浣嶉棴鍚堝厜鏍囧埌缂栬緫鍣ㄥ唴
            browser.gecko ? this.body.focus() : win.focus();
            if (sel) {
                sel.removeAllRanges();
                // trace:870 chrome/safari鍚庤竟鏄痓r瀵逛簬闂悎寰梤ange涓嶈兘瀹氫綅 鎵€浠ュ幓鎺変簡鍒ゆ柇
                // this.startContainer.nodeType != 3 &&! ((child = this.startContainer.childNodes[this.startOffset]) && child.nodeType == 1 && child.tagName == 'BR'
                if (this.collapsed && !notInsertFillData) {
//                    //opear濡傛灉娌℃湁鑺傜偣鎺ョ潃锛屽師鐢熺殑涓嶈兘澶熷畾浣�,涓嶈兘鍦╞ody鐨勭涓€绾ф彃鍏ョ┖鐧借妭鐐�
//                    if (notInsertFillData && browser.opera && !domUtils.isBody(this.startContainer) && this.startContainer.nodeType == 1) {
//                        var tmp = this.document.createTextNode('');
//                        this.insertNode(tmp).setStart(tmp, 0).collapse(true);
//                    }
//
                    //澶勭悊鍏夋爣钀藉湪鏂囨湰鑺傜偣鐨勬儏鍐�
                    //澶勭悊浠ヤ笅鐨勬儏鍐�
                    //<b>|xxxx</b>
                    //<b>xxxx</b>|xxxx
                    //xxxx<b>|</b>
                    var start = this.startContainer,child = start;
                    if(start.nodeType == 1){
                        child = start.childNodes[this.startOffset];

                    }
                    if( !(start.nodeType == 3 && this.startOffset)  &&
                        (child ?
                            (!child.previousSibling || child.previousSibling.nodeType != 3)
                            :
                            (!start.lastChild || start.lastChild.nodeType != 3)
                            )
                        ){
                        txtNode = this.document.createTextNode(fillChar);
                        //璺熺潃鍓嶈竟璧�
                        this.insertNode(txtNode);
                        removeFillData(this.document, txtNode);
                        mergeSibling(txtNode, 'previousSibling');
                        mergeSibling(txtNode, 'nextSibling');
                        fillData = txtNode;
                        this.setStart(txtNode, browser.webkit ? 1 : 0).collapse(true);
                    }
                }
                var nativeRange = this.document.createRange();
                if(this.collapsed && browser.opera && this.startContainer.nodeType == 1){
                    var child = this.startContainer.childNodes[this.startOffset];
                    if(!child){
                        //寰€鍓嶉潬鎷�
                        child = this.startContainer.lastChild;
                        if( child && domUtils.isBr(child)){
                            this.setStartBefore(child).collapse(true);
                        }
                    }else{
                        //鍚戝悗闈犳嫝
                        while(child && domUtils.isBlockElm(child)){
                            if(child.nodeType == 1 && child.childNodes[0]){
                                child = child.childNodes[0]
                            }else{
                                break;
                            }
                        }
                        child && this.setStartBefore(child).collapse(true)
                    }

                }
                //鏄痗reateAddress鏈€鍚庝竴浣嶇畻鐨勪笉鍑嗭紝鐜板湪杩欓噷杩涜寰皟
                checkOffset(this);
                nativeRange.setStart(this.startContainer, this.startOffset);
                nativeRange.setEnd(this.endContainer, this.endOffset);
                sel.addRange(nativeRange);
            }
            return this;
        },
      

        createAddress : function(ignoreEnd,ignoreTxt){
            var addr = {},me = this;

            function getAddress(isStart){
                var node = isStart ? me.startContainer : me.endContainer;
                var parents = domUtils.findParents(node,true,function(node){return !domUtils.isBody(node)}),
                    addrs = [];
                for(var i = 0,ci;ci = parents[i++];){
                    addrs.push(domUtils.getNodeIndex(ci,ignoreTxt));
                }
                var firstIndex = 0;

                if(ignoreTxt){
                    if(node.nodeType == 3){
                        var tmpNode = node.previousSibling;
                        while(tmpNode && tmpNode.nodeType == 3){
                            firstIndex += tmpNode.nodeValue.replace(fillCharReg,'').length;
                            tmpNode = tmpNode.previousSibling;
                        }
                        firstIndex +=  (isStart ? me.startOffset : me.endOffset)// - (fillCharReg.test(node.nodeValue) ? 1 : 0 )
                    }else{
                        node =  node.childNodes[ isStart ? me.startOffset : me.endOffset];
                        if(node){
                            firstIndex = domUtils.getNodeIndex(node,ignoreTxt);
                        }else{
                            node = isStart ? me.startContainer : me.endContainer;
                            var first = node.firstChild;
                            while(first){
                                if(domUtils.isFillChar(first)){
                                    first = first.nextSibling;
                                    continue;
                                }
                                firstIndex++;
                                if(first.nodeType == 3){
                                    while( first && first.nodeType == 3){
                                        first = first.nextSibling;
                                    }
                                }else{
                                    first = first.nextSibling;
                                }
                            }
                        }
                    }

                }else{
                    firstIndex = isStart ? domUtils.isFillChar(node) ? 0 : me.startOffset  : me.endOffset
                }
                if(firstIndex < 0){
                    firstIndex = 0;
                }
                addrs.push(firstIndex);
                return addrs;
            }
            addr.startAddress = getAddress(true);
            if(!ignoreEnd){
                addr.endAddress = me.collapsed ? [].concat(addr.startAddress) : getAddress();
            }
            return addr;
        },
        moveToAddress : function(addr,ignoreEnd){
            var me = this;
            function getNode(address,isStart){
                var tmpNode = me.body,
                    parentNode,offset;
                for(var i= 0,ci,l=address.length;i<l;i++){
                    ci = address[i];
                    parentNode = tmpNode;
                    tmpNode = tmpNode.childNodes[ci];
                    if(!tmpNode){
                        offset = ci;
                        break;
                    }
                }
                if(isStart){
                    if(tmpNode){
                        me.setStartBefore(tmpNode)
                    }else{
                        me.setStart(parentNode,offset)
                    }
                }else{
                    if(tmpNode){
                        me.setEndBefore(tmpNode)
                    }else{
                        me.setEnd(parentNode,offset)
                    }
                }
            }
            getNode(addr.startAddress,true);
            !ignoreEnd && addr.endAddress &&  getNode(addr.endAddress);
            return me;
        },
        equals : function(rng){
            for(var p in this){
                if(this.hasOwnProperty(p)){
                    if(this[p] !== rng[p])
                        return false
                }
            }
            return true;

        },
        scrollIntoView : function(){
            var $span = $('<span style="padding:0;margin:0;display:block;border:0">&nbsp;</span>');
            this.cloneRange().insertNode($span.get(0));
            var winScrollTop = $(window).scrollTop(),
                winHeight = $(window).height(),
                spanTop = $span.offset().top;
            if(spanTop < winScrollTop-winHeight || spanTop > winScrollTop + winHeight ){
                if(spanTop > winScrollTop + winHeight){
                    window.scrollTo(0,spanTop - winHeight + $span.height())
                }else{
                    window.scrollTo(0,winScrollTop - spanTop)
                }

            }
            $span.remove();
        }
    };
})();
///import editor.js
///import core/browser.js
///import core/dom/dom.js
///import core/dom/dtd.js
///import core/dom/domUtils.js
///import core/dom/Range.js
/**
 * @class UM.dom.Selection    Selection绫�
 */
(function () {

    function getBoundaryInformation( range, start ) {
        var getIndex = domUtils.getNodeIndex;
        range = range.duplicate();
        range.collapse( start );
        var parent = range.parentElement();
        //濡傛灉鑺傜偣閲屾病鏈夊瓙鑺傜偣锛岀洿鎺ラ€€鍑�
        if ( !parent.hasChildNodes() ) {
            return  {container:parent, offset:0};
        }
        var siblings = parent.children,
            child,
            testRange = range.duplicate(),
            startIndex = 0, endIndex = siblings.length - 1, index = -1,
            distance;
        while ( startIndex <= endIndex ) {
            index = Math.floor( (startIndex + endIndex) / 2 );
            child = siblings[index];
            testRange.moveToElementText( child );
            var position = testRange.compareEndPoints( 'StartToStart', range );
            if ( position > 0 ) {
                endIndex = index - 1;
            } else if ( position < 0 ) {
                startIndex = index + 1;
            } else {
                //trace:1043
                return  {container:parent, offset:getIndex( child )};
            }
        }
        if ( index == -1 ) {
            testRange.moveToElementText( parent );
            testRange.setEndPoint( 'StartToStart', range );
            distance = testRange.text.replace( /(\r\n|\r)/g, '\n' ).length;
            siblings = parent.childNodes;
            if ( !distance ) {
                child = siblings[siblings.length - 1];
                return  {container:child, offset:child.nodeValue.length};
            }

            var i = siblings.length;
            while ( distance > 0 ){
                distance -= siblings[ --i ].nodeValue.length;
            }
            return {container:siblings[i], offset:-distance};
        }
        testRange.collapse( position > 0 );
        testRange.setEndPoint( position > 0 ? 'StartToStart' : 'EndToStart', range );
        distance = testRange.text.replace( /(\r\n|\r)/g, '\n' ).length;
        if ( !distance ) {
            return  dtd.$empty[child.tagName] || dtd.$nonChild[child.tagName] ?
            {container:parent, offset:getIndex( child ) + (position > 0 ? 0 : 1)} :
            {container:child, offset:position > 0 ? 0 : child.childNodes.length}
        }
        while ( distance > 0 ) {
            try {
                var pre = child;
                child = child[position > 0 ? 'previousSibling' : 'nextSibling'];
                distance -= child.nodeValue.length;
            } catch ( e ) {
                return {container:parent, offset:getIndex( pre )};
            }
        }
        return  {container:child, offset:position > 0 ? -distance : child.nodeValue.length + distance}
    }

    /**
     * 灏唅eRange杞崲涓篟ange瀵硅薄
     * @param {Range}   ieRange    ieRange瀵硅薄
     * @param {Range}   range      Range瀵硅薄
     * @return  {Range}  range       杩斿洖杞崲鍚庣殑Range瀵硅薄
     */
    function transformIERangeToRange( ieRange, range ) {
        if ( ieRange.item ) {
            range.selectNode( ieRange.item( 0 ) );
        } else {
            var bi = getBoundaryInformation( ieRange, true );
            range.setStart( bi.container, bi.offset );
            if ( ieRange.compareEndPoints( 'StartToEnd', ieRange ) != 0 ) {
                bi = getBoundaryInformation( ieRange, false );
                range.setEnd( bi.container, bi.offset );
            }
        }
        return range;
    }

    /**
     * 鑾峰緱ieRange
     * @param {Selection} sel    Selection瀵硅薄
     * @return {ieRange}    寰楀埌ieRange
     */
    function _getIERange( sel,txtRange ) {
        var ieRange;
        //ie涓嬫湁鍙兘鎶ラ敊
        try {
            ieRange = sel.getNative(txtRange).createRange();
        } catch ( e ) {
            return null;
        }
        var el = ieRange.item ? ieRange.item( 0 ) : ieRange.parentElement();
        if ( ( el.ownerDocument || el ) === sel.document ) {
            return ieRange;
        }
        return null;
    }

    var Selection = dom.Selection = function ( doc,body ) {
        var me = this;
        me.document = doc;
        me.body = body;
        if ( browser.ie9below ) {
            domUtils.on( body, 'beforedeactivate', function () {
                me._bakIERange = me.getIERange();
            } );
            domUtils.on( body, 'activate', function () {
                try {
                    var ieNativRng =  _getIERange( me );
                    if ( (!ieNativRng || !me.rangeInBody(ieNativRng)) && me._bakIERange ) {
                        me._bakIERange.select();
                    }
                } catch ( ex ) {
                }
                me._bakIERange = null;
            } );
        }
    };

    Selection.prototype = {
        hasNativeRange : function(){
            var rng;
            if(!browser.ie || browser.ie9above){
                var nativeSel = this.getNative();
                if(!nativeSel.rangeCount){
                    return false;
                }
                rng = nativeSel.getRangeAt(0);
            }else{
                rng = _getIERange(this);
            }
            return this.rangeInBody(rng);
        },
        /**
         * 鑾峰彇鍘熺敓seleciton瀵硅薄
         * @public
         * @function
         * @name    UM.dom.Selection.getNative
         * @return {Selection}    鑾峰緱selection瀵硅薄
         */
        getNative:function (txtRange) {
            var doc = this.document;
            try {
                return !doc ? null : browser.ie9below || txtRange? doc.selection : domUtils.getWindow( doc ).getSelection();
            } catch ( e ) {
                return null;
            }
        },
        /**
         * 鑾峰緱ieRange
         * @public
         * @function
         * @name    UM.dom.Selection.getIERange
         * @return {ieRange}    杩斿洖ie鍘熺敓鐨凴ange
         */
        getIERange:function (txtRange) {
            var ieRange = _getIERange( this,txtRange );
            if ( !ieRange  || !this.rangeInBody(ieRange,txtRange)) {
                if ( this._bakIERange ) {
                    return this._bakIERange;
                }
            }
            return ieRange;
        },
        rangeInBody : function(rng,txtRange){
            var node = browser.ie9below || txtRange ? rng.item ? rng.item() : rng.parentElement() : rng.startContainer;

            return node === this.body || domUtils.inDoc(node,this.body);
        },
        /**
         * 缂撳瓨褰撳墠閫夊尯鐨剅ange鍜岄€夊尯鐨勫紑濮嬭妭鐐�
         * @public
         * @function
         * @name    UM.dom.Selection.cache
         */
        cache:function () {
            this.clear();
            this._cachedRange = this.getRange();
            this._cachedStartElement = this.getStart();
            this._cachedStartElementPath = this.getStartElementPath();
        },

        getStartElementPath:function () {
            if ( this._cachedStartElementPath ) {
                return this._cachedStartElementPath;
            }
            var start = this.getStart();
            if ( start ) {
                return domUtils.findParents( start, true, null, true )
            }
            return [];
        },
        /**
         * 娓呯┖缂撳瓨
         * @public
         * @function
         * @name    UM.dom.Selection.clear
         */
        clear:function () {
            this._cachedStartElementPath = this._cachedRange = this._cachedStartElement = null;
        },
        /**
         * 缂栬緫鍣ㄦ槸鍚﹀緱鍒颁簡閫夊尯
         */
        isFocus:function () {
            return this.hasNativeRange()

        },
        /**
         * 鑾峰彇閫夊尯瀵瑰簲鐨凴ange
         * @public
         * @function
         * @name    UM.dom.Selection.getRange
         * @returns {UM.dom.Range}    寰楀埌Range瀵硅薄
         */
        getRange:function () {
            var me = this;
            function optimze( range ) {
                var child = me.body.firstChild,
                    collapsed = range.collapsed;
                while ( child && child.firstChild ) {
                    range.setStart( child, 0 );
                    child = child.firstChild;
                }
                if ( !range.startContainer ) {
                    range.setStart( me.body, 0 )
                }
                if ( collapsed ) {
                    range.collapse( true );
                }
            }

            if ( me._cachedRange != null ) {
                return this._cachedRange;
            }
            var range = new dom.Range( me.document,me.body );
            if ( browser.ie9below ) {
                var nativeRange = me.getIERange();
                if ( nativeRange  && this.rangeInBody(nativeRange)) {

                    try{
                        transformIERangeToRange( nativeRange, range );
                    }catch(e){
                        optimze( range );
                    }

                } else {
                    optimze( range );
                }
            } else {
                var sel = me.getNative();
                if ( sel && sel.rangeCount && me.rangeInBody(sel.getRangeAt( 0 ))) {
                    var firstRange = sel.getRangeAt( 0 );
                    var lastRange = sel.getRangeAt( sel.rangeCount - 1 );
                    range.setStart( firstRange.startContainer, firstRange.startOffset ).setEnd( lastRange.endContainer, lastRange.endOffset );
                    if ( range.collapsed && domUtils.isBody( range.startContainer ) && !range.startOffset ) {
                        optimze( range );
                    }
                } else {
                    //trace:1734 鏈夊彲鑳藉凡缁忎笉鍦╠om鏍戜笂浜嗭紝鏍囪瘑鐨勮妭鐐�
                    if ( this._bakRange && (this._bakRange.startContainer === this.body || domUtils.inDoc( this._bakRange.startContainer, this.body )) ){
                        return this._bakRange;
                    }
                    optimze( range );
                }
            }

            return this._bakRange = range;
        },

        /**
         * 鑾峰彇寮€濮嬪厓绱狅紝鐢ㄤ簬鐘舵€佸弽灏�
         * @public
         * @function
         * @name    UM.dom.Selection.getStart
         * @return {Element}     鑾峰緱寮€濮嬪厓绱�
         */
        getStart:function () {
            if ( this._cachedStartElement ) {
                return this._cachedStartElement;
            }
            var range = browser.ie9below ? this.getIERange() : this.getRange(),
                tmpRange,
                start, tmp, parent;
            if ( browser.ie9below ) {
                if ( !range ) {
                    //todo 缁欑涓€涓€煎彲鑳戒細鏈夐棶棰�
                    return this.document.body.firstChild;
                }
                //control鍏冪礌
                if ( range.item ){
                    return range.item( 0 );
                }
                tmpRange = range.duplicate();
                //淇ie涓�<b>x</b>[xx] 闂悎鍚� <b>x|</b>xx
                tmpRange.text.length > 0 && tmpRange.moveStart( 'character', 1 );
                tmpRange.collapse( 1 );
                start = tmpRange.parentElement();
                parent = tmp = range.parentElement();
                while ( tmp = tmp.parentNode ) {
                    if ( tmp == start ) {
                        start = parent;
                        break;
                    }
                }
            } else {
                start = range.startContainer;
                if ( start.nodeType == 1 && start.hasChildNodes() ){
                    start = start.childNodes[Math.min( start.childNodes.length - 1, range.startOffset )];
                }
                if ( start.nodeType == 3 ){
                    return start.parentNode;
                }
            }
            return start;
        },
        /**
         * 寰楀埌閫夊尯涓殑鏂囨湰
         * @public
         * @function
         * @name    UM.dom.Selection.getText
         * @return  {String}    閫夊尯涓寘鍚殑鏂囨湰
         */
        getText:function () {
            var nativeSel, nativeRange;
            if ( this.isFocus() && (nativeSel = this.getNative()) ) {
                nativeRange = browser.ie9below ? nativeSel.createRange() : nativeSel.getRangeAt( 0 );
                return browser.ie9below ? nativeRange.text : nativeRange.toString();
            }
            return '';
        }
    };
})();
/**
 * @file
 * @name UM.Editor
 * @short Editor
 * @import editor.js,core/utils.js,core/EventBase.js,core/browser.js,core/dom/dtd.js,core/dom/domUtils.js,core/dom/Range.js,core/dom/Selection.js,plugins/serialize.js
 * @desc 缂栬緫鍣ㄤ富绫伙紝鍖呭惈缂栬緫鍣ㄦ彁渚涚殑澶ч儴鍒嗗叕鐢ㄦ帴鍙�
 */
(function () {
    var uid = 0, _selectionChangeTimer;

    /**
     * @private
     * @ignore
     * @param form  缂栬緫鍣ㄦ墍鍦ㄧ殑form鍏冪礌
     * @param editor  缂栬緫鍣ㄥ疄渚嬪璞�
     */
    function setValue(form, editor) {
        var textarea;
        if (editor.textarea) {
            if (utils.isString(editor.textarea)) {
                for (var i = 0, ti, tis = domUtils.getElementsByTagName(form, 'textarea'); ti = tis[i++];) {
                    if (ti.id == 'umeditor_textarea_' + editor.options.textarea) {
                        textarea = ti;
                        break;
                    }
                }
            } else {
                textarea = editor.textarea;
            }
        }
        if (!textarea) {
            form.appendChild(textarea = domUtils.createElement(document, 'textarea', {
                'name': editor.options.textarea,
                'id': 'umeditor_textarea_' + editor.options.textarea,
                'style': "display:none"
            }));
            //涓嶈浜х敓澶氫釜textarea
            editor.textarea = textarea;
        }
        textarea.value = editor.hasContents() ?
            (editor.options.allHtmlEnabled ? editor.getAllHtml() : editor.getContent(null, null, true)) :
            ''
    }
    function loadPlugins(me){
        //鍒濆鍖栨彃浠�
        for (var pi in UM.plugins) {
            UM.plugins[pi].call(me);
        }
        me.langIsReady = true;

        me.fireEvent("langReady");
    }
    function checkCurLang(I18N){
        for(var lang in I18N){
            return lang
        }
    }
    /**
     * UEditor缂栬緫鍣ㄧ被
     * @name Editor
     * @desc 鍒涘缓涓€涓窡缂栬緫鍣ㄥ疄渚�
     * - ***container*** 缂栬緫鍣ㄥ鍣ㄥ璞�
     * - ***iframe*** 缂栬緫鍖哄煙鎵€鍦ㄧ殑iframe瀵硅薄
     * - ***window*** 缂栬緫鍖哄煙鎵€鍦ㄧ殑window
     * - ***document*** 缂栬緫鍖哄煙鎵€鍦ㄧ殑document瀵硅薄
     * - ***body*** 缂栬緫鍖哄煙鎵€鍦ㄧ殑body瀵硅薄
     * - ***selection*** 缂栬緫鍖哄煙鐨勯€夊尯瀵硅薄
     */
    var Editor = UM.Editor = function (options) {
        var me = this;
        me.uid = uid++;
        EventBase.call(me);
        me.commands = {};
        me.options = utils.extend(utils.clone(options || {}), UMEDITOR_CONFIG, true);
        me.shortcutkeys = {};
        me.inputRules = [];
        me.outputRules = [];
        //璁剧疆榛樿鐨勫父鐢ㄥ睘鎬�
        me.setOpt({
            isShow: true,
            initialContent: '',
            initialStyle:'',
            autoClearinitialContent: false,
            textarea: 'editorValue',
            focus: false,
            focusInEnd: true,
            autoClearEmptyNode: true,
            fullscreen: false,
            readonly: false,
            zIndex: 999,
            enterTag: 'p',
            lang: 'zh-cn',
            langPath: me.options.UMEDITOR_HOME_URL + 'lang/',
            theme: 'default',
            themePath: me.options.UMEDITOR_HOME_URL + 'themes/',
            allHtmlEnabled: false,
            autoSyncData : true,
            autoHeightEnabled : true
        });

        if(!utils.isEmptyObject(UM.I18N)){
            //淇敼榛樿鐨勮瑷€绫诲瀷
            me.options.lang = checkCurLang(UM.I18N);
            loadPlugins(me)
        }else{
            utils.loadFile(document, {
                src: me.options.langPath + me.options.lang + "/" + me.options.lang + ".js",
                tag: "script",
                type: "text/javascript",
                defer: "defer"
            }, function () {
                loadPlugins(me)
            });
        }

    };
    Editor.prototype = {
        /**
         * 褰撶紪杈戝櫒ready鍚庢墽琛屼紶鍏ョ殑fn,濡傛灉缂栬緫鍣ㄥ凡缁忓畬鎴恟eady锛屽氨椹笂鎵цfn锛宖n鐨勪腑鐨則his鏄紪杈戝櫒瀹炰緥銆�
         * 澶ч儴鍒嗙殑瀹炰緥鎺ュ彛閮介渶瑕佹斁鍦ㄨ鏂规硶鍐呴儴鎵ц锛屽惁鍒欏湪IE涓嬪彲鑳戒細鎶ラ敊銆�
         * @name ready
         * @grammar editor.ready(fn) fn鏄綋缂栬緫鍣ㄦ覆鏌撳ソ鍚庢墽琛岀殑function
         * @example
         * var editor = new UM.ui.Editor();
         * editor.render("myEditor");
         * editor.ready(function(){
         *     editor.setContent("娆㈣繋浣跨敤UEditor锛�");
         * })
         */
        ready: function (fn) {
            var me = this;
            if (fn) {
                me.isReady ? fn.apply(me) : me.addListener('ready', fn);
            }
        },
        /**
         * 涓虹紪杈戝櫒璁剧疆榛樿鍙傛暟鍊笺€傝嫢鐢ㄦ埛閰嶇疆涓虹┖锛屽垯浠ラ粯璁ら厤缃负鍑�
         * @grammar editor.setOpt(key,value);      //浼犲叆涓€涓敭銆佸€煎
         * @grammar editor.setOpt({ key:value});   //浼犲叆涓€涓猨son瀵硅薄
         */
        setOpt: function (key, val) {
            var obj = {};
            if (utils.isString(key)) {
                obj[key] = val
            } else {
                obj = key;
            }
            utils.extend(this.options, obj, true);
        },
        getOpt:function(key){
            return this.options[key] || ''
        },
        /**
         * 閿€姣佺紪杈戝櫒瀹炰緥瀵硅薄
         * @name destroy
         * @grammar editor.destroy();
         */
        destroy: function () {

            var me = this;
            me.fireEvent('destroy');
            var container = me.container.parentNode;
            if(container === document.body){
                container = me.container;
            }
            var textarea = me.textarea;
            if (!textarea) {
                textarea = document.createElement('textarea');
                container.parentNode.insertBefore(textarea, container);
            } else {
                textarea.style.display = ''
            }

            textarea.style.width = me.body.offsetWidth + 'px';
            textarea.style.height = me.body.offsetHeight + 'px';
            textarea.value = me.getContent();
            textarea.id = me.key;
            if(container.contains(textarea)){
                $(textarea).insertBefore(container);
            }
            container.innerHTML = '';

            domUtils.remove(container);
            UM.clearCache(me.id);
            //trace:2004
            for (var p in me) {
                if (me.hasOwnProperty(p)) {
                    delete this[p];
                }
            }

        },
        initialCont : function(holder){

            if(holder){
                holder.getAttribute('name') && ( this.options.textarea = holder.getAttribute('name'));
                if (holder && /script|textarea/ig.test(holder.tagName)) {
                    var newDiv = document.createElement('div');
                    holder.parentNode.insertBefore(newDiv, holder);
                    this.options.initialContent = UM.htmlparser(holder.value || holder.innerHTML|| this.options.initialContent).toHtml();
                    holder.className && (newDiv.className = holder.className);
                    holder.style.cssText && (newDiv.style.cssText = holder.style.cssText);

                    if (/textarea/i.test(holder.tagName)) {
                        this.textarea = holder;
                        this.textarea.style.display = 'none';

                    } else {
                        holder.parentNode.removeChild(holder);
                        holder.id && (newDiv.id = holder.id);
                    }
                    holder = newDiv;
                    holder.innerHTML = '';
                }
                return holder;
            }else{
                return null;
            }

        },
        /**
         * 娓叉煋缂栬緫鍣ㄧ殑DOM鍒版寚瀹氬鍣紝蹇呴』涓斿彧鑳借皟鐢ㄤ竴娆�
         * @name render
         * @grammar editor.render(containerId);    //鍙互鎸囧畾涓€涓鍣↖D
         * @grammar editor.render(containerDom);   //涔熷彲浠ョ洿鎺ユ寚瀹氬鍣ㄥ璞�
         */
        render: function (container) {
            var me = this,
                options = me.options,
                getStyleValue=function(attr){
                    return parseInt($(container).css(attr));
                };

            if (utils.isString(container)) {
                container = document.getElementById(container);
            }
            if (container) {
                this.id = container.getAttribute('id');
                UM.setEditor(this);
                utils.cssRule('umeditor_body_css',me.options.initialStyle,document);

                container = this.initialCont(container);

                container.className += ' edui-body-container';

                if(options.initialFrameWidth){
                    options.minFrameWidth = options.initialFrameWidth
                }else{
                    //閮芥病缁欏€硷紝鍏堝啓姝讳簡
                    options.minFrameWidth = options.initialFrameWidth = $(container).width() || UM.defaultWidth;
                }
                if(options.initialFrameHeight){
                    options.minFrameHeight = options.initialFrameHeight
                }else{

                    options.initialFrameHeight = options.minFrameHeight = $(container).height() || UM.defaultHeight;
                }

                container.style.width = /%$/.test(options.initialFrameWidth) ?  '100%' : options.initialFrameWidth -
                    getStyleValue("padding-left")-
                    getStyleValue("padding-right")  +'px';

                var height = /%$/.test(options.initialFrameHeight) ?  '100%' : (options.initialFrameHeight - getStyleValue("padding-top")- getStyleValue("padding-bottom") );
                if(this.options.autoHeightEnabled){
                    container.style.minHeight = height +'px';
                    container.style.height = '';
                    if(browser.ie && browser.version <= 6){
                        container.style.height = height ;
                        container.style.setExpression('height', 'this.scrollHeight <= ' + height + ' ? "' + height + 'px" : "auto"');
                    }
                }else{
                    $(container).height(height)
                }
                container.style.zIndex = options.zIndex;
                this._setup(container);

            }
        },
        /**
         * 缂栬緫鍣ㄥ垵濮嬪寲
         * @private
         * @ignore
         * @param {Element} doc 缂栬緫鍣↖frame涓殑鏂囨。瀵硅薄
         */
        _setup: function (cont) {
            var me = this,
                options = me.options;

            cont.contentEditable = true;
            document.body.spellcheck = false;

            me.document = document;
            me.window = document.defaultView || document.parentWindow;
            me.body = cont;
            me.$body = $(cont);
            //鎵╁睍isBody鏂规硶
            domUtils.isBody = function (node) {
                return  node === cont;
            };
            me.selection = new dom.Selection(document,me.body);
            //gecko鍒濆鍖栧氨鑳藉緱鍒皉ange,鏃犳硶鍒ゆ柇isFocus浜�
            var geckoSel;
            if (browser.gecko && (geckoSel = this.selection.getNative())) {
                geckoSel.removeAllRanges();
            }
            this._initEvents();
            //涓篺orm鎻愪氦鎻愪緵涓€涓殣钘忕殑textarea
            for (var form = cont.parentNode; form && !domUtils.isBody(form); form = form.parentNode) {
                if (form.tagName == 'FORM') {
                    me.form = form;
                    if(me.options.autoSyncData){
                        domUtils.on(cont,'blur',function(){
                            setValue(form,me);
                        });
                    }else{
                        domUtils.on(form, 'submit', function () {
                            setValue(this, me);
                        });
                    }
                    break;
                }
            }
            if (options.initialContent) {
                if (options.autoClearinitialContent) {
                    var oldExecCommand = me.execCommand;
                    me.execCommand = function () {
                        me.fireEvent('firstBeforeExecCommand');
                        return oldExecCommand.apply(me, arguments);
                    };
                    this._setDefaultContent(options.initialContent);
                } else
                    this.setContent(options.initialContent, false, true);
            }

            //缂栬緫鍣ㄤ笉鑳戒负绌哄唴瀹�

            if (domUtils.isEmptyNode(me.body)) {
                me.body.innerHTML = '<p>' + (browser.ie ? '' : '<br/>') + '</p>';
            }
            //濡傛灉瑕佹眰focus, 灏辨妸鍏夋爣瀹氫綅鍒板唴瀹瑰紑濮�
            if (options.focus) {
                setTimeout(function () {
                    me.focus(me.options.focusInEnd);
                    //濡傛灉鑷姩娓呴櫎寮€鐫€锛屽氨涓嶉渶瑕佸仛selectionchange;
                    !me.options.autoClearinitialContent && me._selectionChange();
                }, 0);
            }
            if (!me.container) {
                me.container = cont.parentNode;
            }

            me._bindshortcutKeys();
            me.isReady = 1;
            me.fireEvent('ready');
            options.onready && options.onready.call(me);
            if(!browser.ie || browser.ie9above){

                domUtils.on(me.body, ['blur', 'focus'], function (e) {
                    var nSel = me.selection.getNative();
                    //chrome涓嬩細鍑虹幇alt+tab鍒囨崲鏃讹紝瀵艰嚧閫夊尯浣嶇疆涓嶅
                    if (e.type == 'blur') {
                        if(nSel.rangeCount > 0 ){
                            me._bakRange = nSel.getRangeAt(0);
                        }
                    } else {
                        try {
                            me._bakRange && nSel.addRange(me._bakRange)
                        } catch (e) {
                        }
                        me._bakRange = null;
                    }
                });
            }

            !options.isShow && me.setHide();
            options.readonly && me.setDisabled();
        },
        /**
         * 鍚屾缂栬緫鍣ㄧ殑鏁版嵁锛屼负鎻愪氦鏁版嵁鍋氬噯澶囷紝涓昏鐢ㄤ簬浣犳槸鎵嬪姩鎻愪氦鐨勬儏鍐�
         * @name sync
         * @grammar editor.sync(); //浠庣紪杈戝櫒鐨勫鍣ㄥ悜涓婃煡鎵撅紝濡傛灉鎵惧埌灏卞悓姝ユ暟鎹�
         * @grammar editor.sync(formID); //formID鍒跺畾涓€涓鍚屾鏁版嵁鐨刦orm鐨刬d,缂栬緫鍣ㄧ殑鏁版嵁浼氬悓姝ュ埌浣犳寚瀹歠orm涓�
         * @desc
         * 鍚庡彴鍙栧緱鏁版嵁寰楅敭鍊间娇鐢ㄤ綘瀹瑰櫒涓婂緱''name''灞炴€э紝濡傛灉娌℃湁灏变娇鐢ㄥ弬鏁颁紶鍏ョ殑''textarea''
         * @example
         * editor.sync();
         * form.sumbit(); //form鍙橀噺宸茬粡鎸囧悜浜唂orm鍏冪礌
         *
         */
        sync: function (formId) {
            var me = this,
                form = formId ? document.getElementById(formId) :
                    domUtils.findParent(me.body.parentNode, function (node) {
                        return node.tagName == 'FORM'
                    }, true);
            form && setValue(form, me);
        },
        /**
         * 璁剧疆缂栬緫鍣ㄩ珮搴�
         * @name setHeight
         * @grammar editor.setHeight(number);  //绾暟鍊硷紝涓嶅甫鍗曚綅
         */
        setHeight: function (height,notSetHeight) {
            !notSetHeight && (this.options.initialFrameHeight = height);
            if(this.options.autoHeightEnabled){
                $(this.body).css({
                    'min-height':height + 'px'
                });
                if(browser.ie && browser.version <= 6 && this.container){
                    this.container.style.height = height ;
                    this.container.style.setExpression('height', 'this.scrollHeight <= ' + height + ' ? "' + height + 'px" : "auto"');
                }
            }else{
                $(this.body).height(height)
            }

        },
        setWidth:function(width){
            this.$container && this.$container.width(width);
            $(this.body).width(width - $(this.body).css('padding-left').replace('px','') * 1 - $(this.body).css('padding-right').replace('px','') * 1)
        },
        addshortcutkey: function (cmd, keys) {
            var obj = {};
            if (keys) {
                obj[cmd] = keys
            } else {
                obj = cmd;
            }
            utils.extend(this.shortcutkeys, obj)
        },
        _bindshortcutKeys: function () {
            var me = this, shortcutkeys = this.shortcutkeys;
            me.addListener('keydown', function (type, e) {
                var keyCode = e.keyCode || e.which;
                for (var i in shortcutkeys) {
                    var tmp = shortcutkeys[i].split(',');
                    for (var t = 0, ti; ti = tmp[t++];) {
                        ti = ti.split(':');
                        var key = ti[0], param = ti[1];
                        if (/^(ctrl)(\+shift)?\+(\d+)$/.test(key.toLowerCase()) || /^(\d+)$/.test(key)) {
                            if (( (RegExp.$1 == 'ctrl' ? (e.ctrlKey || e.metaKey) : 0)
                                && (RegExp.$2 != "" ? e[RegExp.$2.slice(1) + "Key"] : 1)
                                && keyCode == RegExp.$3
                                ) ||
                                keyCode == RegExp.$1
                                ) {
                                if (me.queryCommandState(i,param) != -1)
                                    me.execCommand(i, param);
                                domUtils.preventDefault(e);
                            }
                        }
                    }

                }
            });
        },
        /**
         * 鑾峰彇缂栬緫鍣ㄥ唴瀹�
         * @name getContent
         * @grammar editor.getContent()  => String //鑻ョ紪杈戝櫒涓彧鍖呭惈瀛楃"&lt;p&gt;&lt;br /&gt;&lt;/p/&gt;"浼氳繑鍥炵┖銆�
         * @grammar editor.getContent(fn)  => String
         * @example
         * getContent榛樿鏄細鐜拌皟鐢╤asContents鏉ュ垽鏂紪杈戝櫒鏄惁涓虹┖锛屽鏋滄槸锛屽氨鐩存帴杩斿洖绌哄瓧绗︿覆
         * 浣犱篃鍙互浼犲叆涓€涓猣n鏉ユ帴鏇縣asContents鐨勫伐浣滐紝瀹氬埗鍒ゆ柇鐨勮鍒�
         * editor.getContent(function(){
         *     return false //缂栬緫鍣ㄦ病鏈夊唴瀹� 锛実etContent鐩存帴杩斿洖绌�
         * })
         */
        getContent: function (cmd, fn,notSetCursor,ignoreBlank,formatter) {
            var me = this;
            if (cmd && utils.isFunction(cmd)) {
                fn = cmd;
                cmd = '';
            }
            if (fn ? !fn() : !this.hasContents()) {
                return '';
            }
            me.fireEvent('beforegetcontent');
            var root = UM.htmlparser(me.body.innerHTML,ignoreBlank);
            me.filterOutputRule(root);
            me.fireEvent('aftergetcontent',root);
            return  root.toHtml(formatter);
        },
        /**
         * 鍙栧緱瀹屾暣鐨刪tml浠ｇ爜锛屽彲浠ョ洿鎺ユ樉绀烘垚瀹屾暣鐨刪tml鏂囨。
         * @name getAllHtml
         * @grammar editor.getAllHtml()  => String
         */
        getAllHtml: function () {
            var me = this,
                headHtml = [],
                html = '';
            me.fireEvent('getAllHtml', headHtml);
            if (browser.ie && browser.version > 8) {
                var headHtmlForIE9 = '';
                utils.each(me.document.styleSheets, function (si) {
                    headHtmlForIE9 += ( si.href ? '<link rel="stylesheet" type="text/css" href="' + si.href + '" />' : '<style>' + si.cssText + '</style>');
                });
                utils.each(me.document.getElementsByTagName('script'), function (si) {
                    headHtmlForIE9 += si.outerHTML;
                });
            }
            return '<html><head>' + (me.options.charset ? '<meta http-equiv="Content-Type" content="text/html; charset=' + me.options.charset + '"/>' : '')
                + (headHtmlForIE9 || me.document.getElementsByTagName('head')[0].innerHTML) + headHtml.join('\n') + '</head>'
                + '<body ' + (ie && browser.version < 9 ? 'class="view"' : '') + '>' + me.getContent(null, null, true) + '</body></html>';
        },
        /**
         * 寰楀埌缂栬緫鍣ㄧ殑绾枃鏈唴瀹癸紝浣嗕細淇濈暀娈佃惤鏍煎紡
         * @name getPlainTxt
         * @grammar editor.getPlainTxt()  => String
         */
        getPlainTxt: function () {
            var reg = new RegExp(domUtils.fillChar, 'g'),
                html = this.body.innerHTML.replace(/[\n\r]/g, '');//ie瑕佸厛鍘讳簡\n鍦ㄥ鐞�
            html = html.replace(/<(p|div)[^>]*>(<br\/?>|&nbsp;)<\/\1>/gi, '\n')
                .replace(/<br\/?>/gi, '\n')
                .replace(/<[^>/]+>/g, '')
                .replace(/(\n)?<\/([^>]+)>/g, function (a, b, c) {
                    return dtd.$block[c] ? '\n' : b ? b : '';
                });
            //鍙栧嚭鏉ョ殑绌烘牸浼氭湁c2a0浼氬彉鎴愪贡鐮侊紝澶勭悊杩欑鎯呭喌\u00a0
            return html.replace(reg, '').replace(/\u00a0/g, ' ').replace(/&nbsp;/g, ' ');
        },

        /**
         * 鑾峰彇缂栬緫鍣ㄤ腑鐨勭函鏂囨湰鍐呭,娌℃湁娈佃惤鏍煎紡
         * @name getContentTxt
         * @grammar editor.getContentTxt()  => String
         */
        getContentTxt: function () {
            var reg = new RegExp(domUtils.fillChar, 'g');
            //鍙栧嚭鏉ョ殑绌烘牸浼氭湁c2a0浼氬彉鎴愪贡鐮侊紝澶勭悊杩欑鎯呭喌\u00a0
            return this.body[browser.ie ? 'innerText' : 'textContent'].replace(reg, '').replace(/\u00a0/g, ' ');
        },

        /**
         * 灏唄tml璁剧疆鍒扮紪杈戝櫒涓�, 濡傛灉鏄敤浜庡垵濮嬪寲鏃剁粰缂栬緫鍣ㄨ祴鍒濆€硷紝鍒欏繀椤绘斁鍦╮eady鏂规硶鍐呴儴鎵ц
         * @name setContent
         * @grammar editor.setContent(html)
         * @example
         * var editor = new UM.ui.Editor()
         * editor.ready(function(){
         *     //闇€瑕乺eady鍚庢墽琛岋紝鍚﹀垯鍙兘鎶ラ敊
         *     editor.setContent("娆㈣繋浣跨敤UEditor锛�");
         * })
         */
        setContent: function (html, isAppendTo, notFireSelectionchange) {
            var me = this;

            me.fireEvent('beforesetcontent', html);
            var root = UM.htmlparser(html);
            me.filterInputRule(root);
            html = root.toHtml();


            me.body.innerHTML = (isAppendTo ? me.body.innerHTML : '') + html;


            function isCdataDiv(node){
                return  node.tagName == 'DIV' && node.getAttribute('cdata_tag');
            }
            //缁欐枃鏈垨鑰卛nline鑺傜偣濂梡鏍囩
            if (me.options.enterTag == 'p') {

                var child = this.body.firstChild, tmpNode;
                if (!child || child.nodeType == 1 &&
                    (dtd.$cdata[child.tagName] || isCdataDiv(child) ||
                        domUtils.isCustomeNode(child)
                        )
                    && child === this.body.lastChild) {
                    this.body.innerHTML = '<p>' + (browser.ie ? '&nbsp;' : '<br/>') + '</p>' + this.body.innerHTML;

                } else {
                    var p = me.document.createElement('p');
                    while (child) {
                        while (child && (child.nodeType == 3 || child.nodeType == 1 && dtd.p[child.tagName] && !dtd.$cdata[child.tagName])) {
                            tmpNode = child.nextSibling;
                            p.appendChild(child);
                            child = tmpNode;
                        }
                        if (p.firstChild) {
                            if (!child) {
                                me.body.appendChild(p);
                                break;
                            } else {
                                child.parentNode.insertBefore(p, child);
                                p = me.document.createElement('p');
                            }
                        }
                        child = child.nextSibling;
                    }
                }
            }
            me.fireEvent('aftersetcontent');
            me.fireEvent('contentchange');

            !notFireSelectionchange && me._selectionChange();
            //娓呴櫎淇濆瓨鐨勯€夊尯
            me._bakRange = me._bakIERange = me._bakNativeRange = null;
            //trace:1742 setContent鍚巊ecko鑳藉緱鍒扮劍鐐归棶棰�
            var geckoSel;
            if (browser.gecko && (geckoSel = this.selection.getNative())) {
                geckoSel.removeAllRanges();
            }
            if(me.options.autoSyncData){
                me.form && setValue(me.form,me);
            }
        },

        /**
         * 璁╃紪杈戝櫒鑾峰緱鐒︾偣锛宼oEnd纭畾focus浣嶇疆
         * @name focus
         * @grammar editor.focus([toEnd])   //榛樿focus鍒扮紪杈戝櫒澶撮儴锛宼oEnd涓簍rue鏃秄ocus鍒板唴瀹瑰熬閮�
         */
        focus: function (toEnd) {
            try {
                var me = this,
                    rng = me.selection.getRange();
                if (toEnd) {
                    rng.setStartAtLast(me.body.lastChild).setCursor(false, true);
                } else {
                    rng.select(true);
                }
                this.fireEvent('focus');
            } catch (e) {
            }
        },
        /**
         * 浣跨紪杈戝尯鍩熷け鍘荤劍鐐�
         */
        blur:function(){
            var sel = this.selection.getNative();
            sel.empty ? sel.empty() : sel.removeAllRanges();
            this.fireEvent('blur')
        },
        /**
         * 鍒ゆ柇缂栬緫鍣ㄥ綋鍓嶆槸鍚﹁幏寰椾簡鐒︾偣
         */
        isFocus : function(){
            return this.selection.isFocus()
        },

        /**
         * 鍒濆鍖朥E浜嬩欢鍙婇儴鍒嗕簨浠朵唬鐞�
         * @private
         * @ignore
         */
        _initEvents: function () {
            var me = this,
                cont = me.body;
            me._proxyDomEvent = utils.bind(me._proxyDomEvent, me);
            domUtils.on(cont, ['click', 'contextmenu', 'mousedown', 'keydown', 'keyup', 'keypress', 'mouseup', 'mouseover', 'mouseout', 'selectstart'], me._proxyDomEvent);
            domUtils.on(cont, ['focus', 'blur'], me._proxyDomEvent);
            domUtils.on(cont, ['mouseup', 'keydown'], function (evt) {
                //鐗规畩閿笉瑙﹀彂selectionchange
                if (evt.type == 'keydown' && (evt.ctrlKey || evt.metaKey || evt.shiftKey || evt.altKey)) {
                    return;
                }
                if (evt.button == 2)return;
                me._selectionChange(250, evt);
            });
        },
        /**
         * 瑙﹀彂浜嬩欢浠ｇ悊
         * @private
         * @ignore
         */
        _proxyDomEvent: function (evt) {
            return this.fireEvent(evt.type.replace(/^on/, ''), evt);
        },
        /**
         * 鍙樺寲閫夊尯
         * @private
         * @ignore
         */
        _selectionChange: function (delay, evt) {
            var me = this;
            //鏈夊厜鏍囨墠鍋歴electionchange 涓轰簡瑙ｅ喅鏈猣ocus鏃剁偣鍑籹ource涓嶈兘瑙﹀彂鏇存敼宸ュ叿鏍忕姸鎬佺殑闂锛坰ource鍛戒护notNeedUndo=1锛�
//            if ( !me.selection.isFocus() ){
//                return;
//            }


            var hackForMouseUp = false;
            var mouseX, mouseY;
            if (browser.ie && browser.version < 9 && evt && evt.type == 'mouseup') {
                var range = this.selection.getRange();
                if (!range.collapsed) {
                    hackForMouseUp = true;
                    mouseX = evt.clientX;
                    mouseY = evt.clientY;
                }
            }
            clearTimeout(_selectionChangeTimer);
            _selectionChangeTimer = setTimeout(function () {
                if (!me.selection.getNative()) {
                    return;
                }
                //淇涓€涓狪E涓嬬殑bug: 榧犳爣鐐瑰嚮涓€娈靛凡閫夋嫨鐨勬枃鏈腑闂存椂锛屽彲鑳藉湪mouseup鍚庣殑涓€娈垫椂闂村唴鍙栧埌鐨剅ange鏄湪selection鐨則ype涓篘one涓嬬殑閿欒鍊�.
                //IE涓嬪鏋滅敤鎴锋槸鎷栨嫿涓€娈靛凡閫夋嫨鏂囨湰锛屽垯涓嶄細瑙﹀彂mouseup浜嬩欢锛屾墍浠ヨ繖閲岀殑鐗规畩澶勭悊涓嶄細瀵瑰叾鏈夊奖鍝�
                var ieRange;
                if (hackForMouseUp && me.selection.getNative().type == 'None') {
                    ieRange = me.document.body.createTextRange();
                    try {
                        ieRange.moveToPoint(mouseX, mouseY);
                    } catch (ex) {
                        ieRange = null;
                    }
                }
                var bakGetIERange;
                if (ieRange) {
                    bakGetIERange = me.selection.getIERange;
                    me.selection.getIERange = function () {
                        return ieRange;
                    };
                }
                me.selection.cache();
                if (bakGetIERange) {
                    me.selection.getIERange = bakGetIERange;
                }
                if (me.selection._cachedRange && me.selection._cachedStartElement) {
                    me.fireEvent('beforeselectionchange');
                    // 绗簩涓弬鏁癱auseByUi涓簍rue浠ｈ〃鐢辩敤鎴蜂氦浜掗€犳垚鐨剆electionchange.
                    me.fireEvent('selectionchange', !!evt);
                    me.fireEvent('afterselectionchange');
                    me.selection.clear();
                }
            }, delay || 50);
        },
        _callCmdFn: function (fnName, args) {
            args = Array.prototype.slice.call(args,0);
            var cmdName = args.shift().toLowerCase(),
                cmd, cmdFn;
            cmd = this.commands[cmdName] || UM.commands[cmdName];
            cmdFn = cmd && cmd[fnName];
            //娌℃湁querycommandstate鎴栬€呮病鏈塩ommand鐨勯兘榛樿杩斿洖0
            if ((!cmd || !cmdFn) && fnName == 'queryCommandState') {
                return 0;
            } else if (cmdFn) {
                return cmdFn.apply(this, [cmdName].concat(args));
            }
        },

        /**
         * 鎵ц缂栬緫鍛戒护cmdName锛屽畬鎴愬瘜鏂囨湰缂栬緫鏁堟灉
         * @name execCommand
         * @grammar editor.execCommand(cmdName)   => {*}
         */
        execCommand: function (cmdName) {
            if(!this.isFocus()){
                var bakRange = this.selection._bakRange;
                if(bakRange){
                    bakRange.select()
                }else{
                    this.focus(true)
                }

            }
            cmdName = cmdName.toLowerCase();
            var me = this,
                result,
                cmd = me.commands[cmdName] || UM.commands[cmdName];
            if (!cmd || !cmd.execCommand) {
                return null;
            }
            if (!cmd.notNeedUndo && !me.__hasEnterExecCommand) {
                me.__hasEnterExecCommand = true;
                if (me.queryCommandState.apply(me,arguments) != -1) {
                    me.fireEvent('beforeexeccommand', cmdName);
                    result = this._callCmdFn('execCommand', arguments);
                    !me._ignoreContentChange && me.fireEvent('contentchange');
                    me.fireEvent('afterexeccommand', cmdName);
                }
                me.__hasEnterExecCommand = false;
            } else {
                result = this._callCmdFn('execCommand', arguments);
                !me._ignoreContentChange && me.fireEvent('contentchange')
            }
            !me._ignoreContentChange && me._selectionChange();

            // preview editor content
            var editor_id = $(this).attr('id').replace('fund-description-area-','');
            if (parseInt(editor_id) > 0) {
                live_preview_content(editor_id, me.getContent());
            }

            return result;
        },
        /**
         * 鏍规嵁浼犲叆鐨刢ommand鍛戒护锛屾煡閫夌紪杈戝櫒褰撳墠鐨勯€夊尯锛岃繑鍥炲懡浠ょ殑鐘舵€�
         * @name  queryCommandState
         * @grammar editor.queryCommandState(cmdName)  => (-1|0|1)
         * @desc
         * * ''-1'' 褰撳墠鍛戒护涓嶅彲鐢�
         * * ''0'' 褰撳墠鍛戒护鍙敤
         * * ''1'' 褰撳墠鍛戒护宸茬粡鎵ц杩囦簡
         */
        queryCommandState: function (cmdName) {
            try{
                return this._callCmdFn('queryCommandState', arguments);
            }catch(e){
                return 0
            }

        },

        /**
         * 鏍规嵁浼犲叆鐨刢ommand鍛戒护锛屾煡閫夌紪杈戝櫒褰撳墠鐨勯€夊尯锛屾牴鎹懡浠よ繑鍥炵浉鍏崇殑鍊�
         * @name  queryCommandValue
         * @grammar editor.queryCommandValue(cmdName)  =>  {*}
         */
        queryCommandValue: function (cmdName) {
            try{
                return this._callCmdFn('queryCommandValue', arguments);
            }catch(e){
                return null
            }
        },
        /**
         * 妫€鏌ョ紪杈戝尯鍩熶腑鏄惁鏈夊唴瀹癸紝鑻ュ寘鍚玹ags涓殑鑺傜偣绫诲瀷锛岀洿鎺ヨ繑鍥瀟rue
         * @name  hasContents
         * @desc
         * 榛樿鏈夋枃鏈唴瀹癸紝鎴栬€呮湁浠ヤ笅鑺傜偣閮戒笉璁や负鏄┖
         * <code>{table:1,ul:1,ol:1,dl:1,iframe:1,area:1,base:1,col:1,hr:1,img:1,embed:1,input:1,link:1,meta:1,param:1}</code>
         * @grammar editor.hasContents()  => (true|false)
         * @grammar editor.hasContents(tags)  =>  (true|false)  //鑻ユ枃妗ｄ腑鍖呭惈tags鏁扮粍閲屽搴旂殑tag锛岀洿鎺ヨ繑鍥瀟rue
         * @example
         * editor.hasContents(['span']) //濡傛灉缂栬緫鍣ㄩ噷鏈夎繖浜涳紝涓嶈涓烘槸绌�
         */
        hasContents: function (tags) {
            if (tags) {
                for (var i = 0, ci; ci = tags[i++];) {
                    if (this.body.getElementsByTagName(ci).length > 0) {
                        return true;
                    }
                }
            }
            if (!domUtils.isEmptyBlock(this.body)) {
                return true
            }
            //闅忔椂娣诲姞,瀹氫箟鐨勭壒娈婃爣绛惧鏋滃瓨鍦紝涓嶈兘璁や负鏄┖
            tags = ['div'];
            for (i = 0; ci = tags[i++];) {
                var nodes = domUtils.getElementsByTagName(this.body, ci);
                for (var n = 0, cn; cn = nodes[n++];) {
                    if (domUtils.isCustomeNode(cn)) {
                        return true;
                    }
                }
            }
            return false;
        },
        /**
         * 閲嶇疆缂栬緫鍣紝鍙敤鏉ュ仛澶氫釜tab浣跨敤鍚屼竴涓紪杈戝櫒瀹炰緥
         * @name  reset
         * @desc
         * * 娓呯┖缂栬緫鍣ㄥ唴瀹�
         * * 娓呯┖鍥為€€鍒楄〃
         * @grammar editor.reset()
         */
        reset: function () {
            this.fireEvent('reset');
        },
        setEnabled: function () {
            var me = this, range;
            if (me.body.contentEditable == 'false') {
                me.body.contentEditable = true;
                range = me.selection.getRange();
                //鏈夊彲鑳藉唴瀹逛涪澶变簡
                try {
                    range.moveToBookmark(me.lastBk);
                    delete me.lastBk
                } catch (e) {
                    range.setStartAtFirst(me.body).collapse(true)
                }
                range.select(true);
                if (me.bkqueryCommandState) {
                    me.queryCommandState = me.bkqueryCommandState;
                    delete me.bkqueryCommandState;
                }
                me.fireEvent('selectionchange');
            }
        },
        /**
         * 璁剧疆褰撳墠缂栬緫鍖哄煙鍙互缂栬緫
         * @name enable
         * @grammar editor.enable()
         */
        enable: function () {
            return this.setEnabled();
        },
        setDisabled: function (except) {
            var me = this;
            except = except ? utils.isArray(except) ? except : [except] : [];
            if (me.body.contentEditable == 'true') {
                if (!me.lastBk) {
                    me.lastBk = me.selection.getRange().createBookmark(true);
                }
                me.body.contentEditable = false;
                me.bkqueryCommandState = me.queryCommandState;
                me.queryCommandState = function (type) {
                    if (utils.indexOf(except, type) != -1) {
                        return me.bkqueryCommandState.apply(me, arguments);
                    }
                    return -1;
                };
                me.fireEvent('selectionchange');
            }
        },
        /** 璁剧疆褰撳墠缂栬緫鍖哄煙涓嶅彲缂栬緫,except涓殑鍛戒护闄ゅ
         * @name disable
         * @grammar editor.disable()
         * @grammar editor.disable(except)  //渚嬪鐨勫懡浠わ紝涔熷嵆鍗充娇璁剧疆浜哾isable锛屾澶勯厤缃殑鍛戒护浠嶇劧鍙互鎵ц
         * @example
         * //绂佺敤宸ュ叿鏍忎腑闄ゅ姞绮楀拰鎻掑叆鍥剧墖涔嬪鐨勬墍鏈夊姛鑳�
         * editor.disable(['bold','insertimage']);//鍙互鏄崟涓€鐨凷tring,涔熷彲浠ユ槸Array
         */
        disable: function (except) {
            return this.setDisabled(except);
        },
        /**
         * 璁剧疆榛樿鍐呭
         * @ignore
         * @private
         * @param  {String} cont 瑕佸瓨鍏ョ殑鍐呭
         */
        _setDefaultContent: function () {
            function clear() {
                var me = this;
                if (me.document.getElementById('initContent')) {
                    me.body.innerHTML = '<p>' + (ie ? '' : '<br/>') + '</p>';
                    me.removeListener('firstBeforeExecCommand focus', clear);
                    setTimeout(function () {
                        me.focus();
                        me._selectionChange();
                    }, 0)
                }
            }

            return function (cont) {
                var me = this;
                me.body.innerHTML = '<p id="initContent">' + cont + '</p>';

                me.addListener('firstBeforeExecCommand focus', clear);
            }
        }(),
        /**
         * show鏂规硶鐨勫吋瀹圭増鏈�
         * @private
         * @ignore
         */
        setShow: function () {
            var me = this, range = me.selection.getRange();
            if (me.container.style.display == 'none') {
                //鏈夊彲鑳藉唴瀹逛涪澶变簡
                try {
                    range.moveToBookmark(me.lastBk);
                    delete me.lastBk
                } catch (e) {
                    range.setStartAtFirst(me.body).collapse(true)
                }
                //ie涓媐ocus瀹炴晥锛屾墍浠ュ仛浜嗕釜寤惰繜
                setTimeout(function () {
                    range.select(true);
                }, 100);
                me.container.style.display = '';
            }

        },
        /**
         * 鏄剧ず缂栬緫鍣�
         * @name show
         * @grammar editor.show()
         */
        show: function () {
            return this.setShow();
        },
        /**
         * hide鏂规硶鐨勫吋瀹圭増鏈�
         * @private
         * @ignore
         */
        setHide: function () {
            var me = this;
            if (!me.lastBk) {
                me.lastBk = me.selection.getRange().createBookmark(true);
            }
            me.container.style.display = 'none'
        },
        /**
         * 闅愯棌缂栬緫鍣�
         * @name hide
         * @grammar editor.hide()
         */
        hide: function () {
            return this.setHide();
        },
        /**
         * 鏍规嵁鍒跺畾鐨勮矾寰勶紝鑾峰彇瀵瑰簲鐨勮瑷€璧勬簮
         * @name  getLang
         * @grammar editor.getLang(path)  =>  锛圝SON|String) 璺緞鏍规嵁鐨勬槸lang鐩綍涓嬬殑璇█鏂囦欢鐨勮矾寰勭粨鏋�
         * @example
         * editor.getLang('contextMenu.delete') //濡傛灉褰撳墠鏄腑鏂囷紝閭ｈ繑鍥炴槸鐨勬槸鍒犻櫎
         */
        getLang: function (path) {
            var lang = UM.I18N[this.options.lang];
            if (!lang) {
                throw Error("not import language file");
            }
            path = (path || "").split(".");
            for (var i = 0, ci; ci = path[i++];) {
                lang = lang[ci];
                if (!lang)break;
            }
            return lang;
        },
        /**
         * 璁＄畻缂栬緫鍣ㄥ綋鍓嶅唴瀹圭殑闀垮害
         * @name  getContentLength
         * @grammar editor.getContentLength(ingoneHtml,tagNames)  =>
         * @example
         * editor.getLang(true)
         */
        getContentLength: function (ingoneHtml, tagNames) {
            var count = this.getContent(false,false,true).length;
            if (ingoneHtml) {
                tagNames = (tagNames || []).concat([ 'hr', 'img', 'iframe']);
                count = this.getContentTxt().replace(/[\t\r\n]+/g, '').length;
                for (var i = 0, ci; ci = tagNames[i++];) {
                    count += this.body.getElementsByTagName(ci).length;
                }
            }
            return count;
        },
        addInputRule: function (rule,ignoreUndo) {
            rule.ignoreUndo = ignoreUndo;
            this.inputRules.push(rule);
        },
        filterInputRule: function (root,isUndoLoad) {
            for (var i = 0, ci; ci = this.inputRules[i++];) {
                if(isUndoLoad && ci.ignoreUndo){
                    continue;
                }
                ci.call(this, root)
            }
        },
        addOutputRule: function (rule,ignoreUndo) {
            rule.ignoreUndo = ignoreUndo;
            this.outputRules.push(rule)
        },
        filterOutputRule: function (root,isUndoLoad) {
            for (var i = 0, ci; ci = this.outputRules[i++];) {
                if(isUndoLoad && ci.ignoreUndo){
                    continue;
                }
                ci.call(this, root)
            }
        }
    };
    utils.inherits(Editor, EventBase);
})();

/**
 * @file
 * @name UM.filterWord
 * @short filterWord
 * @desc 鐢ㄦ潵杩囨护word绮樿创杩囨潵鐨勫瓧绗︿覆
 * @import editor.js,core/utils.js
 * @anthor zhanyi
 */
var filterWord = UM.filterWord = function () {

    //鏄惁鏄痺ord杩囨潵鐨勫唴瀹�
    function isWordDocument( str ) {
        return /(class="?Mso|style="[^"]*\bmso\-|w:WordDocument|<v:)/ig.test( str );
    }
    //鍘绘帀灏忔暟
    function transUnit( v ) {
        v = v.replace( /[\d.]+\w+/g, function ( m ) {
            return utils.transUnitToPx(m);
        } );
        return v;
    }

    function filterPasteWord( str ) {
        return str.replace( /[\t\r\n]+/g, "" )
                .replace( /<!--[\s\S]*?-->/ig, "" )
                //杞崲鍥剧墖
                .replace(/<v:shape [^>]*>[\s\S]*?.<\/v:shape>/gi,function(str){
                    //opera鑳借嚜宸辫В鏋愬嚭image鎵€杩欓噷鐩存帴杩斿洖绌�
                    if(browser.opera){
                        return '';
                    }
                    try{
                        var width = str.match(/width:([ \d.]*p[tx])/i)[1],
                            height = str.match(/height:([ \d.]*p[tx])/i)[1],
                            src =  str.match(/src=\s*"([^"]*)"/i)[1];
                        return '<img width="'+ transUnit(width) +'" height="'+transUnit(height) +'" src="' + src + '" />';
                    } catch(e){
                        return '';
                    }
                })
                //閽堝wps娣诲姞鐨勫浣欐爣绛惧鐞�
                .replace(/<\/?div[^>]*>/g,'')
                //鍘绘帀澶氫綑鐨勫睘鎬�
                .replace( /v:\w+=(["']?)[^'"]+\1/g, '' )
                .replace( /<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|xml|meta|link|style|\w+:\w+)(?=[\s\/>]))[^>]*>/gi, "" )
                .replace( /<p [^>]*class="?MsoHeading"?[^>]*>(.*?)<\/p>/gi, "<p><strong>$1</strong></p>" )
                //鍘绘帀澶氫綑鐨勫睘鎬�
                .replace( /\s+(class|lang|align)\s*=\s*(['"]?)([\w-]+)\2/ig, function(str,name,marks,val){
                    //淇濈暀list鐨勬爣绀�
                    return name == 'class' && val == 'MsoListParagraph' ? str : ''
                })
                //娓呴櫎澶氫綑鐨刦ont/span涓嶈兘鍖归厤&nbsp;鏈夊彲鑳芥槸绌烘牸
                .replace( /<(font|span)[^>]*>\s*<\/\1>/gi, '' )
                //澶勭悊style鐨勯棶棰�
                .replace( /(<[a-z][^>]*)\sstyle=(["'])([^\2]*?)\2/gi, function( str, tag, tmp, style ) {
                    var n = [],
                        s = style.replace( /^\s+|\s+$/, '' )
                            .replace(/&#39;/g,'\'')
                            .replace( /&quot;/gi, "'" )
                            .split( /;\s*/g );

                    for ( var i = 0,v; v = s[i];i++ ) {

                        var name, value,
                            parts = v.split( ":" );

                        if ( parts.length == 2 ) {
                            name = parts[0].toLowerCase();
                            value = parts[1].toLowerCase();
                            if(/^(background)\w*/.test(name) && value.replace(/(initial|\s)/g,'').length == 0
                                ||
                                /^(margin)\w*/.test(name) && /^0\w+$/.test(value)
                            ){
                                continue;
                            }

                            switch ( name ) {
                                case "mso-padding-alt":
                                case "mso-padding-top-alt":
                                case "mso-padding-right-alt":
                                case "mso-padding-bottom-alt":
                                case "mso-padding-left-alt":
                                case "mso-margin-alt":
                                case "mso-margin-top-alt":
                                case "mso-margin-right-alt":
                                case "mso-margin-bottom-alt":
                                case "mso-margin-left-alt":
                                //ie涓嬩細鍑虹幇鎸ゅ埌涓€璧风殑鎯呭喌
                               //case "mso-table-layout-alt":
                                case "mso-height":
                                case "mso-width":
                                case "mso-vertical-align-alt":
                                    //trace:1819 ff涓嬩細瑙ｆ瀽鍑簆adding鍦╰able涓�
                                    if(!/<table/.test(tag))
                                        n[i] = name.replace( /^mso-|-alt$/g, "" ) + ":" + transUnit( value );
                                    continue;
                                case "horiz-align":
                                    n[i] = "text-align:" + value;
                                    continue;

                                case "vert-align":
                                    n[i] = "vertical-align:" + value;
                                    continue;

                                case "font-color":
                                case "mso-foreground":
                                    n[i] = "color:" + value;
                                    continue;

                                case "mso-background":
                                case "mso-highlight":
                                    n[i] = "background:" + value;
                                    continue;

                                case "mso-default-height":
                                    n[i] = "min-height:" + transUnit( value );
                                    continue;

                                case "mso-default-width":
                                    n[i] = "min-width:" + transUnit( value );
                                    continue;

                                case "mso-padding-between-alt":
                                    n[i] = "border-collapse:separate;border-spacing:" + transUnit( value );
                                    continue;

                                case "text-line-through":
                                    if ( (value == "single") || (value == "double") ) {
                                        n[i] = "text-decoration:line-through";
                                    }
                                    continue;
                                case "mso-zero-height":
                                    if ( value == "yes" ) {
                                        n[i] = "display:none";
                                    }
                                    continue;
                                case 'background':
                                    break;
                                case 'margin':
                                    if ( !/[1-9]/.test( value ) ) {
                                        continue;
                                    }

                            }

                            if ( /^(mso|column|font-emph|lang|layout|line-break|list-image|nav|panose|punct|row|ruby|sep|size|src|tab-|table-border|text-(?:decor|trans)|top-bar|version|vnd|word-break)/.test( name )
                                ||
                                /text\-indent|padding|margin/.test(name) && /\-[\d.]+/.test(value)
                            ) {
                                continue;
                            }

                            n[i] = name + ":" + parts[1];
                        }
                    }
                    return tag + (n.length ? ' style="' + n.join( ';').replace(/;{2,}/g,';') + '"' : '');
                })
            .replace(/[\d.]+(cm|pt)/g,function(str){
                return utils.transUnitToPx(str)
            })

    }

    return function ( html ) {
        return (isWordDocument( html ) ? filterPasteWord( html ) : html);
    };
}();
///import editor.js
///import core/utils.js
///import core/dom/dom.js
///import core/dom/dtd.js
///import core/htmlparser.js
//妯℃嫙鐨勮妭鐐圭被
//by zhanyi
(function () {
    var uNode = UM.uNode = function (obj) {
        this.type = obj.type;
        this.data = obj.data;
        this.tagName = obj.tagName;
        this.parentNode = obj.parentNode;
        this.attrs = obj.attrs || {};
        this.children = obj.children;
    };
    var indentChar = '    ',
        breakChar = '\n';

    function insertLine(arr, current, begin) {
        arr.push(breakChar);
        return current + (begin ? 1 : -1);
    }

    function insertIndent(arr, current) {
        //鎻掑叆缂╄繘
        for (var i = 0; i < current; i++) {
            arr.push(indentChar);
        }
    }

    //鍒涘缓uNode鐨勯潤鎬佹柟娉�
    //鏀寔鏍囩鍜宧tml
    uNode.createElement = function (html) {
        if (/[<>]/.test(html)) {
            return UM.htmlparser(html).children[0]
        } else {
            return new uNode({
                type:'element',
                children:[],
                tagName:html
            })
        }
    };
    uNode.createText = function (data,noTrans) {
        return new UM.uNode({
            type:'text',
            'data':noTrans ? data : utils.unhtml(data || '')
        })
    };
    function nodeToHtml(node, arr, formatter, current) {
        switch (node.type) {
            case 'root':
                for (var i = 0, ci; ci = node.children[i++];) {
                    //鎻掑叆鏂拌
                    if (formatter && ci.type == 'element' && !dtd.$inlineWithA[ci.tagName] && i > 1) {
                        insertLine(arr, current, true);
                        insertIndent(arr, current)
                    }
                    nodeToHtml(ci, arr, formatter, current)
                }
                break;
            case 'text':
                isText(node, arr);
                break;
            case 'element':
                isElement(node, arr, formatter, current);
                break;
            case 'comment':
                isComment(node, arr, formatter);
        }
        return arr;
    }

    function isText(node, arr) {
        arr.push(node.parentNode.tagName == 'pre' ? node.data : node.data.replace(/[ ]{2}/g,' &nbsp;'))
    }

    function isElement(node, arr, formatter, current) {
        var attrhtml = '';
        if (node.attrs) {
            attrhtml = [];
            var attrs = node.attrs;
            for (var a in attrs) {
                attrhtml.push(a + (attrs[a] !== undefined ? '="' + attrs[a] + '"' : ''))
            }
            attrhtml = attrhtml.join(' ');
        }
        arr.push('<' + node.tagName +
            (attrhtml ? ' ' + attrhtml  : '') +
            (dtd.$empty[node.tagName] ? '\/' : '' ) + '>'
        );
        //鎻掑叆鏂拌
        if (formatter  &&  !dtd.$inlineWithA[node.tagName] && node.tagName != 'pre') {
            if(node.children && node.children.length){
                current = insertLine(arr, current, true);
                insertIndent(arr, current)
            }

        }
        if (node.children && node.children.length) {
            for (var i = 0, ci; ci = node.children[i++];) {
                if (formatter && ci.type == 'element' &&  !dtd.$inlineWithA[ci.tagName] && i > 1) {
                    insertLine(arr, current);
                    insertIndent(arr, current)
                }
                nodeToHtml(ci, arr, formatter, current)
            }
        }
        if (!dtd.$empty[node.tagName]) {
            if (formatter && !dtd.$inlineWithA[node.tagName]  && node.tagName != 'pre') {

                if(node.children && node.children.length){
                    current = insertLine(arr, current);
                    insertIndent(arr, current)
                }
            }
            arr.push('<\/' + node.tagName + '>');
        }

    }

    function isComment(node, arr) {
        arr.push('<!--' + node.data + '-->');
    }

    function getNodeById(root, id) {
        var node;
        if (root.type == 'element' && root.getAttr('id') == id) {
            return root;
        }
        if (root.children && root.children.length) {
            for (var i = 0, ci; ci = root.children[i++];) {
                if (node = getNodeById(ci, id)) {
                    return node;
                }
            }
        }
    }

    function getNodesByTagName(node, tagName, arr) {
        if (node.type == 'element' && node.tagName == tagName) {
            arr.push(node);
        }
        if (node.children && node.children.length) {
            for (var i = 0, ci; ci = node.children[i++];) {
                getNodesByTagName(ci, tagName, arr)
            }
        }
    }
    function nodeTraversal(root,fn){
        if(root.children && root.children.length){
            for(var i= 0,ci;ci=root.children[i];){
                nodeTraversal(ci,fn);
                //ci琚浛鎹㈢殑鎯呭喌锛岃繖閲屽氨涓嶅啀璧� fn浜�
                if(ci.parentNode ){
                    if(ci.children && ci.children.length){
                        fn(ci)
                    }
                    if(ci.parentNode) i++
                }
            }
        }else{
            fn(root)
        }

    }
    uNode.prototype = {
        toHtml:function (formatter) {
            var arr = [];
            nodeToHtml(this, arr, formatter, 0);
            return arr.join('')
        },
        innerHTML:function (htmlstr) {
            if (this.type != 'element' || dtd.$empty[this.tagName]) {
                return this;
            }
            if (utils.isString(htmlstr)) {
                if(this.children){
                    for (var i = 0, ci; ci = this.children[i++];) {
                        ci.parentNode = null;
                    }
                }
                this.children = [];
                var tmpRoot = UM.htmlparser(htmlstr);
                for (var i = 0, ci; ci = tmpRoot.children[i++];) {
                    this.children.push(ci);
                    ci.parentNode = this;
                }
                return this;
            } else {
                var tmpRoot = new UM.uNode({
                    type:'root',
                    children:this.children
                });
                return tmpRoot.toHtml();
            }
        },
        innerText:function (textStr,noTrans) {
            if (this.type != 'element' || dtd.$empty[this.tagName]) {
                return this;
            }
            if (textStr) {
                if(this.children){
                    for (var i = 0, ci; ci = this.children[i++];) {
                        ci.parentNode = null;
                    }
                }
                this.children = [];
                this.appendChild(uNode.createText(textStr,noTrans));
                return this;
            } else {
                return this.toHtml().replace(/<[^>]+>/g, '');
            }
        },
        getData:function () {
            if (this.type == 'element')
                return '';
            return this.data
        },
        firstChild:function () {
//            if (this.type != 'element' || dtd.$empty[this.tagName]) {
//                return this;
//            }
            return this.children ? this.children[0] : null;
        },
        lastChild:function () {
//            if (this.type != 'element' || dtd.$empty[this.tagName] ) {
//                return this;
//            }
            return this.children ? this.children[this.children.length - 1] : null;
        },
        previousSibling : function(){
            var parent = this.parentNode;
            for (var i = 0, ci; ci = parent.children[i]; i++) {
                if (ci === this) {
                    return i == 0 ? null : parent.children[i-1];
                }
            }

        },
        nextSibling : function(){
            var parent = this.parentNode;
            for (var i = 0, ci; ci = parent.children[i++];) {
                if (ci === this) {
                    return parent.children[i];
                }
            }
        },
        replaceChild:function (target, source) {
            if (this.children) {
                if(target.parentNode){
                    target.parentNode.removeChild(target);
                }
                for (var i = 0, ci; ci = this.children[i]; i++) {
                    if (ci === source) {
                        this.children.splice(i, 1, target);
                        source.parentNode = null;
                        target.parentNode = this;
                        return target;
                    }
                }
            }
        },
        appendChild:function (node) {
            if (this.type == 'root' || (this.type == 'element' && !dtd.$empty[this.tagName])) {
                if (!this.children) {
                    this.children = []
                }
                if(node.parentNode){
                    node.parentNode.removeChild(node);
                }
                for (var i = 0, ci; ci = this.children[i]; i++) {
                    if (ci === node) {
                        this.children.splice(i, 1);
                        break;
                    }
                }
                this.children.push(node);
                node.parentNode = this;
                return node;
            }


        },
        insertBefore:function (target, source) {
            if (this.children) {
                if(target.parentNode){
                    target.parentNode.removeChild(target);
                }
                for (var i = 0, ci; ci = this.children[i]; i++) {
                    if (ci === source) {
                        this.children.splice(i, 0, target);
                        target.parentNode = this;
                        return target;
                    }
                }

            }
        },
        insertAfter:function (target, source) {
            if (this.children) {
                if(target.parentNode){
                    target.parentNode.removeChild(target);
                }
                for (var i = 0, ci; ci = this.children[i]; i++) {
                    if (ci === source) {
                        this.children.splice(i + 1, 0, target);
                        target.parentNode = this;
                        return target;
                    }

                }
            }
        },
        removeChild:function (node,keepChildren) {
            if (this.children) {
                for (var i = 0, ci; ci = this.children[i]; i++) {
                    if (ci === node) {
                        this.children.splice(i, 1);
                        ci.parentNode = null;
                        if(keepChildren && ci.children && ci.children.length){
                            for(var j= 0,cj;cj=ci.children[j];j++){
                                this.children.splice(i+j,0,cj);
                                cj.parentNode = this;

                            }
                        }
                        return ci;
                    }
                }
            }
        },
        getAttr:function (attrName) {
            return this.attrs && this.attrs[attrName.toLowerCase()]
        },
        setAttr:function (attrName, attrVal) {
            if (!attrName) {
                delete this.attrs;
                return;
            }
            if(!this.attrs){
                this.attrs = {};
            }
            if (utils.isObject(attrName)) {
                for (var a in attrName) {
                    if (!attrName[a]) {
                        delete this.attrs[a]
                    } else {
                        this.attrs[a.toLowerCase()] = attrName[a];
                    }
                }
            } else {
                if (!attrVal) {
                    delete this.attrs[attrName]
                } else {
                    this.attrs[attrName.toLowerCase()] = attrVal;
                }

            }
        },
        getIndex:function(){
            var parent = this.parentNode;
            for(var i= 0,ci;ci=parent.children[i];i++){
                if(ci === this){
                    return i;
                }
            }
            return -1;
        },
        getNodeById:function (id) {
            var node;
            if (this.children && this.children.length) {
                for (var i = 0, ci; ci = this.children[i++];) {
                    if (node = getNodeById(ci, id)) {
                        return node;
                    }
                }
            }
        },
        getNodesByTagName:function (tagNames) {
            tagNames = utils.trim(tagNames).replace(/[ ]{2,}/g, ' ').split(' ');
            var arr = [], me = this;
            utils.each(tagNames, function (tagName) {
                if (me.children && me.children.length) {
                    for (var i = 0, ci; ci = me.children[i++];) {
                        getNodesByTagName(ci, tagName, arr)
                    }
                }
            });
            return arr;
        },
        getStyle:function (name) {
            var cssStyle = this.getAttr('style');
            if (!cssStyle) {
                return ''
            }
            var reg = new RegExp('(^|;)\\s*' + name + ':([^;]+)','i');
            var match = cssStyle.match(reg);
            if (match && match[0]) {
                return match[2]
            }
            return '';
        },
        setStyle:function (name, val) {
            function exec(name, val) {
                var reg = new RegExp('(^|;)\\s*' + name + ':([^;]+;?)', 'gi');
                cssStyle = cssStyle.replace(reg, '$1');
                if (val) {
                    cssStyle = name + ':' + utils.unhtml(val) + ';' + cssStyle
                }

            }

            var cssStyle = this.getAttr('style');
            if (!cssStyle) {
                cssStyle = '';
            }
            if (utils.isObject(name)) {
                for (var a in name) {
                    exec(a, name[a])
                }
            } else {
                exec(name, val)
            }
            this.setAttr('style', utils.trim(cssStyle))
        },
        traversal:function(fn){
            if(this.children && this.children.length){
                nodeTraversal(this,fn);
            }
            return this;
        }
    }
})();

//html瀛楃涓茶浆鎹㈡垚uNode鑺傜偣
//by zhanyi
var htmlparser = UM.htmlparser = function (htmlstr,ignoreBlank) {
    var re_tag = /<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)-->)|(?:([^\s\/>]+)\s*((?:(?:"[^"]*")|(?:'[^']*')|[^"'<>])*)\/?>))/g,
        re_attr = /([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g;

    //ie涓嬪彇寰楃殑html鍙兘浼氭湁\n瀛樺湪锛岃鍘绘帀锛屽湪澶勭悊replace(/[\t\r\n]*/g,'');浠ｇ爜楂橀噺鐨刓n涓嶈兘鍘婚櫎
    var allowEmptyTags = {
        b:1,code:1,i:1,u:1,strike:1,s:1,tt:1,strong:1,q:1,samp:1,em:1,span:1,
        sub:1,img:1,sup:1,font:1,big:1,small:1,iframe:1,a:1,br:1,pre:1
    };
    htmlstr = htmlstr.replace(new RegExp(domUtils.fillChar, 'g'), '');
    if(!ignoreBlank){
        htmlstr = htmlstr.replace(new RegExp('[\\r\\t\\n'+(ignoreBlank?'':' ')+']*<\/?(\\w+)\\s*(?:[^>]*)>[\\r\\t\\n'+(ignoreBlank?'':' ')+']*','g'), function(a,b){
            //br鏆傛椂鍗曠嫭澶勭悊
            if(b && allowEmptyTags[b.toLowerCase()]){
                return a.replace(/(^[\n\r]+)|([\n\r]+$)/g,'');
            }
            return a.replace(new RegExp('^[\\r\\n'+(ignoreBlank?'':' ')+']+'),'').replace(new RegExp('[\\r\\n'+(ignoreBlank?'':' ')+']+$'),'');
        });
    }



    var uNode = UM.uNode,
        needParentNode = {
            'td':'tr',
            'tr':['tbody','thead','tfoot'],
            'tbody':'table',
            'th':'tr',
            'thead':'table',
            'tfoot':'table',
            'caption':'table',
            'li':['ul', 'ol'],
            'dt':'dl',
            'dd':'dl',
            'option':'select'
        },
        needChild = {
            'ol':'li',
            'ul':'li'
        };

    function text(parent, data) {

        if(needChild[parent.tagName]){
            var tmpNode = uNode.createElement(needChild[parent.tagName]);
            parent.appendChild(tmpNode);
            tmpNode.appendChild(uNode.createText(data));
            parent = tmpNode;
        }else{

            parent.appendChild(uNode.createText(data));
        }
    }

    function element(parent, tagName, htmlattr) {
        var needParentTag;
        if (needParentTag = needParentNode[tagName]) {
            var tmpParent = parent,hasParent;
            while(tmpParent.type != 'root'){
                if(utils.isArray(needParentTag) ? utils.indexOf(needParentTag, tmpParent.tagName) != -1 : needParentTag == tmpParent.tagName){
                    parent = tmpParent;
                    hasParent = true;
                    break;
                }
                tmpParent = tmpParent.parentNode;
            }
            if(!hasParent){
                parent = element(parent, utils.isArray(needParentTag) ? needParentTag[0] : needParentTag)
            }
        }
        //鎸塪td澶勭悊宓屽
//        if(parent.type != 'root' && !dtd[parent.tagName][tagName])
//            parent = parent.parentNode;
        var elm = new uNode({
            parentNode:parent,
            type:'element',
            tagName:tagName.toLowerCase(),
            //鏄嚜闂悎鐨勫鐞嗕竴涓�
            children:dtd.$empty[tagName] ? null : []
        });
        //濡傛灉灞炴€у瓨鍦紝澶勭悊灞炴€�
        if (htmlattr) {
            var attrs = {}, match;
            while (match = re_attr.exec(htmlattr)) {
                attrs[match[1].toLowerCase()] = utils.unhtml(match[2] || match[3] || match[4])
            }
            elm.attrs = attrs;
        }

        parent.children.push(elm);
        //濡傛灉鏄嚜闂悎鑺傜偣杩斿洖鐖朵翰鑺傜偣
        return  dtd.$empty[tagName] ? parent : elm
    }

    function comment(parent, data) {
        parent.children.push(new uNode({
            type:'comment',
            data:data,
            parentNode:parent
        }));
    }

    var match, currentIndex = 0, nextIndex = 0;
    //璁剧疆鏍硅妭鐐�
    var root = new uNode({
        type:'root',
        children:[]
    });
    var currentParent = root;

    while (match = re_tag.exec(htmlstr)) {
        currentIndex = match.index;
        try{
            if (currentIndex > nextIndex) {
                //text node
                text(currentParent, htmlstr.slice(nextIndex, currentIndex));
            }
            if (match[3]) {

                if(dtd.$cdata[currentParent.tagName]){
                    text(currentParent, match[0]);
                }else{
                    //start tag
                    currentParent = element(currentParent, match[3].toLowerCase(), match[4]);
                }


            } else if (match[1]) {
                if(currentParent.type != 'root'){
                    if(dtd.$cdata[currentParent.tagName] && !dtd.$cdata[match[1]]){
                        text(currentParent, match[0]);
                    }else{
                        var tmpParent = currentParent;
                        while(currentParent.type == 'element' && currentParent.tagName != match[1].toLowerCase()){
                            currentParent = currentParent.parentNode;
                            if(currentParent.type == 'root'){
                                currentParent = tmpParent;
                                throw 'break'
                            }
                        }
                        //end tag
                        currentParent = currentParent.parentNode;
                    }

                }

            } else if (match[2]) {
                //comment
                comment(currentParent, match[2])
            }
        }catch(e){}

        nextIndex = re_tag.lastIndex;

    }
    //濡傛灉缁撴潫鏄枃鏈紝灏辨湁鍙兘涓㈡帀锛屾墍浠ヨ繖閲屾墜鍔ㄥ垽鏂竴涓�
    //渚嬪 <li>sdfsdfsdf<li>sdfsdfsdfsdf
    if (nextIndex < htmlstr.length) {
        text(currentParent, htmlstr.slice(nextIndex));
    }
    return root;
};
/**
 * @file
 * @name UM.filterNode
 * @short filterNode
 * @desc 鏍规嵁缁欏畾鐨勮鍒欒繃婊よ妭鐐�
 * @import editor.js,core/utils.js
 * @anthor zhanyi
 */
var filterNode = UM.filterNode = function () {
    function filterNode(node,rules){
        switch (node.type) {
            case 'text':
                break;
            case 'element':
                var val;
                if(val = rules[node.tagName]){
                    if(val === '-'){
                        node.parentNode.removeChild(node)
                    }else if(utils.isFunction(val)){
                        var parentNode = node.parentNode,
                            index = node.getIndex();
                        val(node);
                        if(node.parentNode){
                            if(node.children){
                                for(var i = 0,ci;ci=node.children[i];){
                                    filterNode(ci,rules);
                                    if(ci.parentNode){
                                        i++;
                                    }
                                }
                            }
                        }else{
                            for(var i = index,ci;ci=parentNode.children[i];){
                                filterNode(ci,rules);
                                if(ci.parentNode){
                                    i++;
                                }
                            }
                        }


                    }else{
                        var attrs = val['$'];
                        if(attrs && node.attrs){
                            var tmpAttrs = {},tmpVal;
                            for(var a in attrs){
                                tmpVal = node.getAttr(a);
                                //todo 鍙厛瀵箂tyle鍗曠嫭澶勭悊
                                if(a == 'style' && utils.isArray(attrs[a])){
                                    var tmpCssStyle = [];
                                    utils.each(attrs[a],function(v){
                                        var tmp;
                                        if(tmp = node.getStyle(v)){
                                            tmpCssStyle.push(v + ':' + tmp);
                                        }
                                    });
                                    tmpVal = tmpCssStyle.join(';')
                                }
                                if(tmpVal){
                                    tmpAttrs[a] = tmpVal;
                                }

                            }
                            node.attrs = tmpAttrs;
                        }
                        if(node.children){
                            for(var i = 0,ci;ci=node.children[i];){
                                filterNode(ci,rules);
                                if(ci.parentNode){
                                    i++;
                                }
                            }
                        }
                    }
                }else{
                    //濡傛灉涓嶅湪鍚嶅崟閲屾墸鍑哄瓙鑺傜偣骞跺垹闄よ鑺傜偣,cdata闄ゅ
                    if(dtd.$cdata[node.tagName]){
                        node.parentNode.removeChild(node)
                    }else{
                        var parentNode = node.parentNode,
                            index = node.getIndex();
                        node.parentNode.removeChild(node,true);
                        for(var i = index,ci;ci=parentNode.children[i];){
                            filterNode(ci,rules);
                            if(ci.parentNode){
                                i++;
                            }
                        }
                    }
                }
                break;
            case 'comment':
                node.parentNode.removeChild(node)
        }

    }
    return function(root,rules){
        if(utils.isEmptyObject(rules)){
            return root;
        }
        var val;
        if(val = rules['-']){
            utils.each(val.split(' '),function(k){
                rules[k] = '-'
            })
        }
        for(var i= 0,ci;ci=root.children[i];){
            filterNode(ci,rules);
            if(ci.parentNode){
                i++;
            }
        }
        return root;
    }
}();
///import core
/**
 * @description 鎻掑叆鍐呭
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     inserthtml鎻掑叆鍐呭鐨勫懡浠�
 * @param   {String}   html                瑕佹彃鍏ョ殑鍐呭
 * @author zhanyi
 */
UM.commands['inserthtml'] = {
    execCommand: function (command,html,notNeedFilter){
        var me = this,
            range,
            div;
        if(!html){
            return;
        }
        if(me.fireEvent('beforeinserthtml',html) === true){
            return;
        }
        range = me.selection.getRange();
        div = range.document.createElement( 'div' );
        div.style.display = 'inline';

        if (!notNeedFilter) {
            var root = UM.htmlparser(html);
            //濡傛灉缁欎簡杩囨护瑙勫垯灏卞厛杩涜杩囨护
            if(me.options.filterRules){
                UM.filterNode(root,me.options.filterRules);
            }
            //鎵ц榛樿鐨勫鐞�
            me.filterInputRule(root);
            html = root.toHtml()
        }
        div.innerHTML = utils.trim( html );

        if ( !range.collapsed ) {
            var tmpNode = range.startContainer;
            if(domUtils.isFillChar(tmpNode)){
                range.setStartBefore(tmpNode)
            }
            tmpNode = range.endContainer;
            if(domUtils.isFillChar(tmpNode)){
                range.setEndAfter(tmpNode)
            }
            range.txtToElmBoundary();
            //缁撴潫杈圭晫鍙兘鏀惧埌浜哹r鐨勫墠杈癸紝瑕佹妸br鍖呭惈杩涙潵
            // x[xxx]<br/>
            if(range.endContainer && range.endContainer.nodeType == 1){
                tmpNode = range.endContainer.childNodes[range.endOffset];
                if(tmpNode && domUtils.isBr(tmpNode)){
                    range.setEndAfter(tmpNode);
                }
            }
            if(range.startOffset == 0){
                tmpNode = range.startContainer;
                if(domUtils.isBoundaryNode(tmpNode,'firstChild') ){
                    tmpNode = range.endContainer;
                    if(range.endOffset == (tmpNode.nodeType == 3 ? tmpNode.nodeValue.length : tmpNode.childNodes.length) && domUtils.isBoundaryNode(tmpNode,'lastChild')){
                        me.body.innerHTML = '<p>'+(browser.ie ? '' : '<br/>')+'</p>';
                        range.setStart(me.body.firstChild,0).collapse(true)

                    }
                }
            }
            !range.collapsed && range.deleteContents();
            if(range.startContainer.nodeType == 1){
                var child = range.startContainer.childNodes[range.startOffset],pre;
                if(child && domUtils.isBlockElm(child) && (pre = child.previousSibling) && domUtils.isBlockElm(pre)){
                    range.setEnd(pre,pre.childNodes.length).collapse();
                    while(child.firstChild){
                        pre.appendChild(child.firstChild);
                    }
                    domUtils.remove(child);
                }
            }

        }


        var child,parent,pre,tmp,hadBreak = 0, nextNode;
        //濡傛灉褰撳墠浣嶇疆閫変腑浜唂illchar瑕佸共鎺夛紝瑕佷笉浼氫骇鐢熺┖琛�
        if(range.inFillChar()){
            child = range.startContainer;
            if(domUtils.isFillChar(child)){
                range.setStartBefore(child).collapse(true);
                domUtils.remove(child);
            }else if(domUtils.isFillChar(child,true)){
                child.nodeValue = child.nodeValue.replace(fillCharReg,'');
                range.startOffset--;
                range.collapsed && range.collapse(true)
            }
        }
        while ( child = div.firstChild ) {
            if(hadBreak){
                var p = me.document.createElement('p');
                while(child && (child.nodeType == 3 || !dtd.$block[child.tagName])){
                    nextNode = child.nextSibling;
                    p.appendChild(child);
                    child = nextNode;
                }
                if(p.firstChild){

                    child = p
                }
            }
            range.insertNode( child );
            nextNode = child.nextSibling;
            if ( !hadBreak && child.nodeType == domUtils.NODE_ELEMENT && domUtils.isBlockElm( child ) ){

                parent = domUtils.findParent( child,function ( node ){ return domUtils.isBlockElm( node ); } );
                if ( parent && parent.tagName.toLowerCase() != 'body' && !(dtd[parent.tagName][child.nodeName] && child.parentNode === parent)){
                    if(!dtd[parent.tagName][child.nodeName]){
                        pre = parent;
                    }else{
                        tmp = child.parentNode;
                        while (tmp !== parent){
                            pre = tmp;
                            tmp = tmp.parentNode;

                        }
                    }


                    domUtils.breakParent( child, pre || tmp );
                    //鍘绘帀break鍚庡墠涓€涓浣欑殑鑺傜偣  <p>|<[p> ==> <p></p><div></div><p>|</p>
                    var pre = child.previousSibling;
                    domUtils.trimWhiteTextNode(pre);
                    if(!pre.childNodes.length){
                        domUtils.remove(pre);
                    }
                    //trace:2012,鍦ㄩ潪ie鐨勬儏鍐碉紝鍒囧紑鍚庡墿涓嬬殑鑺傜偣鏈夊彲鑳戒笉鑳界偣鍏ュ厜鏍囨坊鍔燽r鍗犱綅

                    if(!browser.ie &&
                        (next = child.nextSibling) &&
                        domUtils.isBlockElm(next) &&
                        next.lastChild &&
                        !domUtils.isBr(next.lastChild)){
                        next.appendChild(me.document.createElement('br'));
                    }
                    hadBreak = 1;
                }
            }
            var next = child.nextSibling;
            if(!div.firstChild && next && domUtils.isBlockElm(next)){

                range.setStart(next,0).collapse(true);
                break;
            }
            range.setEndAfter( child ).collapse();

        }

        child = range.startContainer;

        if(nextNode && domUtils.isBr(nextNode)){
            domUtils.remove(nextNode)
        }
        //鐢╟hrome鍙兘鏈夌┖鐧藉睍浣嶇
        if(domUtils.isBlockElm(child) && domUtils.isEmptyNode(child)){
            if(nextNode = child.nextSibling){
                domUtils.remove(child);
                if(nextNode.nodeType == 1 && dtd.$block[nextNode.tagName]){

                    range.setStart(nextNode,0).collapse(true).shrinkBoundary()
                }
            }else{

                try{
                    child.innerHTML = browser.ie ? domUtils.fillChar : '<br/>';
                }catch(e){
                    range.setStartBefore(child);
                    domUtils.remove(child)
                }

            }

        }
        //鍔犱笂true鍥犱负鍦ㄥ垹闄よ〃鎯呯瓑鏃朵細鍒犱袱娆★紝绗竴娆℃槸鍒犵殑fillData
        try{
            if(browser.ie9below && range.startContainer.nodeType == 1 && !range.startContainer.childNodes[range.startOffset]){
                var start = range.startContainer,pre = start.childNodes[range.startOffset-1];
                if(pre && pre.nodeType == 1 && dtd.$empty[pre.tagName]){
                    var txt = this.document.createTextNode(domUtils.fillChar);
                    range.insertNode(txt).setStart(txt,0).collapse(true);
                }
            }
            range.select(true);
        }catch(e){}


        setTimeout(function(){
            range = me.selection.getRange();
            range.scrollIntoView();
            me.fireEvent('afterinserthtml');
        },200);
    }
};

///import core
///import plugins\inserthtml.js
///commands 鎻掑叆鍥剧墖锛屾搷浣滃浘鐗囩殑瀵归綈鏂瑰紡
///commandsName  InsertImage,ImageNone,ImageLeft,ImageRight,ImageCenter
///commandsTitle  鍥剧墖,榛樿,灞呭乏,灞呭彸,灞呬腑
///commandsDialog  dialogs\image
/**
 * Created by .
 * User: zhanyi
 * for image
 */
UM.commands['insertimage'] = {
    execCommand:function (cmd, opt) {
        opt = utils.isArray(opt) ? opt : [opt];
        if (!opt.length) {
            return;
        }
        var me = this;
        var html = [], str = '', ci;
        ci = opt[0];
        if (opt.length == 1) {
            str = '<img src="' + ci.src + '" ' + (ci._src ? ' _src="' + ci._src + '" ' : '') +
                (ci.width ? 'width="' + ci.width + '" ' : '') +
                (ci._width ? ' _width="' + ci._width + '" ' : '') +
                (ci._height ? ' _height="' + ci._height + '" ' : '') +
                (ci['floatStyle'] == 'left' || ci['floatStyle'] == 'right' ? ' style="float:' + ci['floatStyle'] + ';"' : '') +
                (ci.title && ci.title != "" ? ' title="' + ci.title + '"' : '') +
                (ci.border && ci.border != "0" ? ' border="' + ci.border + '"' : '') +
                (ci.alt && ci.alt != "" ? ' alt="' + ci.alt + '"' : '') +
                (ci.hspace && ci.hspace != "0" ? ' hspace = "' + ci.hspace + '"' : '') +
                (ci.vspace && ci.vspace != "0" ? ' vspace = "' + ci.vspace + '"' : '') + '/>';
            if (ci['floatStyle'] == 'center') {
                str = '<p style="text-align: center">' + str + '</p>';
            }
            html.push(str);

        } else {
            for (var i = 0; ci = opt[i++];) {
                str = '<p ' + (ci['floatStyle'] == 'center' ? 'style="text-align: center" ' : '') + '><img src="' + ci.src + '" ' +
                    (ci.width ? 'width="' + ci.width + '" ' : '') + (ci._src ? ' _src="' + ci._src + '" ' : '') +
                    (ci.height ? ' height="' + ci.height + '" ' : '') +
                    ' style="' + (ci['floatStyle'] && ci['floatStyle'] != 'center' ? 'float:' + ci['floatStyle'] + ';' : '') +
                    (ci.border || '') + '" ' +
                    (ci.title ? ' title="' + ci.title + '"' : '') + ' /></p>';
                html.push(str);
            }
        }

        me.execCommand('insertHtml', html.join(''), true);
    }
};
///import core
///commands 娈佃惤鏍煎紡,灞呭乏,灞呭彸,灞呬腑,涓ょ瀵归綈
///commandsName  JustifyLeft,JustifyCenter,JustifyRight,JustifyJustify
///commandsTitle  灞呭乏瀵归綈,灞呬腑瀵归綈,灞呭彸瀵归綈,涓ょ瀵归綈
/**
 * @description 灞呭乏鍙充腑
 * @name UM.execCommand
 * @param   {String}   cmdName     justify鎵ц瀵归綈鏂瑰紡鐨勫懡浠�
 * @param   {String}   align               瀵归綈鏂瑰紡锛歭eft灞呭乏锛宺ight灞呭彸锛宑enter灞呬腑锛宩ustify涓ょ瀵归綈
 * @author zhanyi
 */
UM.plugins['justify']=function(){
    $.each('justifyleft justifyright justifycenter justifyfull'.split(' '),function(i,cmdName){
        UM.commands[cmdName] = {
            execCommand:function (cmdName) {
                return this.document.execCommand(cmdName);
            },
            queryCommandValue: function (cmdName) {
                var val = this.document.queryCommandValue(cmdName);
                return   val === true || val === 'true' ? cmdName.replace(/justify/,'') : '';
            },
            queryCommandState: function (cmdName) {
                return this.document.queryCommandState(cmdName) ? 1 : 0
            }
        };
    })
};

///import core
///import plugins\removeformat.js
///commands 瀛椾綋棰滆壊,鑳屾櫙鑹�,瀛楀彿,瀛椾綋,涓嬪垝绾�,鍒犻櫎绾�
///commandsName  ForeColor,BackColor,FontSize,FontFamily,Underline,StrikeThrough
///commandsTitle  瀛椾綋棰滆壊,鑳屾櫙鑹�,瀛楀彿,瀛椾綋,涓嬪垝绾�,鍒犻櫎绾�
/**
 * @description 瀛椾綋
 * @name UM.execCommand
 * @param {String}     cmdName    鎵ц鐨勫姛鑳藉悕绉�
 * @param {String}    value             浼犲叆鐨勫€�
 */
UM.plugins['font'] = function () {
    var me = this,
        fonts = {
            'forecolor': 'forecolor',
            'backcolor': 'backcolor',
            'fontsize': 'fontsize',
            'fontfamily': 'fontname'
        },
        cmdNameToStyle = {
            'forecolor': 'color',
            'backcolor': 'background-color',
            'fontsize': 'font-size',
            'fontfamily': 'font-family'
        },
        cmdNameToAttr = {
            'forecolor': 'color',
            'fontsize': 'size',
            'fontfamily': 'face'
        };
    me.setOpt({
        'fontfamily': [
            { name: 'songti', val: '瀹嬩綋,SimSun'},
            { name: 'yahei', val: '寰蒋闆呴粦,Microsoft YaHei'},
            { name: 'kaiti', val: '妤蜂綋,妤蜂綋_GB2312, SimKai'},
            { name: 'heiti', val: '榛戜綋, SimHei'},
            { name: 'lishu', val: '闅朵功, SimLi'},
            { name: 'andaleMono', val: 'andale mono'},
            { name: 'arial', val: 'arial, helvetica,sans-serif'},
            { name: 'arialBlack', val: 'arial black,avant garde'},
            { name: 'comicSansMs', val: 'comic sans ms'},
            { name: 'impact', val: 'impact,chicago'},
            { name: 'timesNewRoman', val: 'times new roman'},
            { name: 'sans-serif',val:'sans-serif'}
        ],
        'fontsize': [10, 12,  16, 18,24, 32,48]
    });

    me.addOutputRule(function (root) {
        utils.each(root.getNodesByTagName('font'), function (node) {
            if (node.tagName == 'font') {
                var cssStyle = [];
                for (var p in node.attrs) {
                    switch (p) {
                        case 'size':
                            var val =  node.attrs[p];
                            $.each({
                                '10':'1',
                                '12':'2',
                                '16':'3',
                                '18':'4',
                                '24':'5',
                                '32':'6',
                                '48':'7'
                            },function(k,v){
                                if(v == val){
                                    val = k;
                                    return false;
                                }
                            });
                            cssStyle.push('font-size:' + val + 'px');
                            break;
                        case 'color':
                            cssStyle.push('color:' + node.attrs[p]);
                            break;
                        case 'face':
                            cssStyle.push('font-family:' + node.attrs[p]);
                            break;
                        case 'style':
                            cssStyle.push(node.attrs[p]);
                    }
                }
                node.attrs = {
                    'style': cssStyle.join(';')
                };
            }
            node.tagName = 'span';
            if(node.parentNode.tagName == 'span' && node.parentNode.children.length == 1){
                $.each(node.attrs,function(k,v){

                    node.parentNode.attrs[k] = k == 'style' ? node.parentNode.attrs[k] + v : v;
                })
                node.parentNode.removeChild(node,true);
            }
        });
    });
    for(var p in fonts){
        (function (cmd) {
            UM.commands[cmd] = {
                execCommand: function (cmdName,value) {
                    if(value == 'transparent'){
                        return;
                    }
                    var rng = this.selection.getRange();
                    if(rng.collapsed){
                        var span = $('<span></span>').css(cmdNameToStyle[cmdName],value)[0];
                        rng.insertNode(span).setStart(span,0).setCursor();
                    }else{
                        if(cmdName == 'fontsize'){
                            value  = {
                                '10':'1',
                                '12':'2',
                                '16':'3',
                                '18':'4',
                                '24':'5',
                                '32':'6',
                                '48':'7'
                            }[(value+"").replace(/px/,'')]
                        }
                        this.document.execCommand(fonts[cmdName],false, value);
                        if(browser.gecko){
                            $.each(this.$body.find('a'),function(i,a){
                                var parent = a.parentNode;
                                if(parent.lastChild === parent.firstChild && /FONT|SPAN/.test(parent.tagName)){
                                    var cloneNode = parent.cloneNode(false);
                                    cloneNode.innerHTML = a.innerHTML;
                                    $(a).html('').append(cloneNode).insertBefore(parent);

                                    $(parent).remove();
                                }
                            });
                        }
                        if(!browser.ie){
                            var nativeRange = this.selection.getNative().getRangeAt(0);
                            var common = nativeRange.commonAncestorContainer;
                            var rng = this.selection.getRange(),
                                bk = rng.createBookmark(true);

                            $(common).find('a').each(function(i,n){
                                var parent = n.parentNode;
                                if(parent.nodeName == 'FONT'){
                                    var font = parent.cloneNode(false);
                                    font.innerHTML = n.innerHTML;
                                    $(n).html('').append(font);
                                }
                            });
                            rng.moveToBookmark(bk).select()
                        }
                        return true
                    }

                },
                queryCommandValue: function (cmdName) {
                    var start = me.selection.getStart();
                    var val = $(start).css(cmdNameToStyle[cmdName]);
                    if(val === undefined){
                        val = $(start).attr(cmdNameToAttr[cmdName])
                    }
                    return val ? utils.fixColor(cmdName,val).replace(/px/,'') : '';
                },
                queryCommandState: function (cmdName) {
                    return this.queryCommandValue(cmdName)
                }
            };
        })(p);
    }
};
///import core
///commands 瓒呴摼鎺�,鍙栨秷閾炬帴
///commandsName  Link,Unlink
///commandsTitle  瓒呴摼鎺�,鍙栨秷閾炬帴
///commandsDialog  dialogs\link
/**
 * 瓒呴摼鎺�
 * @function
 * @name UM.execCommand
 * @param   {String}   cmdName     link鎻掑叆瓒呴摼鎺�
 * @param   {Object}  options         url鍦板潃锛宼itle鏍囬锛宼arget鏄惁鎵撳紑鏂伴〉
 * @author zhanyi
 */
/**
 * 鍙栨秷閾炬帴
 * @function
 * @name UM.execCommand
 * @param   {String}   cmdName     unlink鍙栨秷閾炬帴
 * @author zhanyi
 */

UM.plugins['link'] = function(){
    this.setOpt('autourldetectinie',false);
    //鍦╥e涓嬬鐢╝utolink
    if(browser.ie && this.options.autourldetectinie === false){
        this.addListener('keyup',function(cmd,evt){
            var me = this,keyCode = evt.keyCode;
            if(keyCode == 13 || keyCode == 32){
                var rng = me.selection.getRange();
                var start = rng.startContainer;
                if(keyCode == 13){
                    if(start.nodeName == 'P'){
                        var pre = start.previousSibling;
                        if(pre && pre.nodeType == 1){
                            var pre = pre.lastChild;
                            if(pre && pre.nodeName == 'A' && !pre.getAttribute('_href')){
                                domUtils.remove(pre,true);
                            }
                        }
                    }
                }else if(keyCode == 32){
                   if(start.nodeType == 3 && /^\s$/.test(start.nodeValue)){
                       start = start.previousSibling;
                       if(start && start.nodeName == 'A' && !start.getAttribute('_href')){
                           domUtils.remove(start,true);
                       }
                   }
                }

            }


        });
    }

    this.addOutputRule(function(root){
        $.each(root.getNodesByTagName('a'),function(i,a){
            var _href = utils.html(a.getAttr('_href'));
            if(!/^(ftp|https?|\/|file)/.test(_href)){
                _href = 'http://' + _href;
            }
            a.setAttr('href', _href);
            a.setAttr('_href')
            if(a.getAttr('title')==''){
                a.setAttr('title')
            }
        })
    });
    this.addInputRule(function(root){
        $.each(root.getNodesByTagName('a'),function(i,a){
            a.setAttr('_href', utils.html(a.getAttr('href')));
        })
    });
    UM.commands['link'] = {
        execCommand : function( cmdName, opt ) {

            var me = this;
            var rng = me.selection.getRange();
            if(rng.collapsed){
                var start = rng.startContainer;
                if(start = domUtils.findParentByTagName(start,'a',true)){
                    $(start).attr(opt);
                    rng.selectNode(start).select()
                }else{
                    rng.insertNode($('<a>' +opt.href+'</a>').attr(opt)[0]).select()

                }

            }else{
                me.document.execCommand('createlink',false,'_umeditor_link');
                utils.each(domUtils.getElementsByTagName(me.body,'a',function(n){

                    return n.getAttribute('href') == '_umeditor_link'
                }),function(l){
                    if($(l).text() == '_umeditor_link'){
                        $(l).text(opt.href);
                    }
                    domUtils.setAttributes(l,opt);
                    rng.selectNode(l).select()
                })
            }

        },
        queryCommandState:function(){
            return this.queryCommandValue('link') ? 1 : 0;
        },
        queryCommandValue:function(){
            var path = this.selection.getStartElementPath();
            var result;
            $.each(path,function(i,n){
                if(n.nodeName == "A"){
                    result = n;
                    return false;
                }
            })
            return result;
        }
    };
    UM.commands['unlink'] = {
        execCommand : function() {
            this.document.execCommand('unlink');
        }
    };
};
///import core
///commands 鎵撳嵃
///commandsName  Print
///commandsTitle  鎵撳嵃
/**
 * @description 鎵撳嵃
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     print鎵撳嵃缂栬緫鍣ㄥ唴瀹�
 * @author zhanyi
 */
UM.commands['print'] = {
    execCommand : function(){
        var me = this,
            id = 'editor_print_' + +new Date();

        $('<iframe src="" id="' + id + '" name="' + id + '" frameborder="0"></iframe>').attr('id', id)
            .css({
                width:'0px',
                height:'0px',
                'overflow':'hidden',
                'float':'left',
                'position':'absolute',
                top:'-10000px',
                left:'-10000px'
            })
            .appendTo(me.$container.find('.edui-dialog-container'));

        var w = window.open('', id, ''),
            d = w.document;
        d.open();
        d.write('<html><head></head><body><div>'+this.getContent(null,null,true)+'</div><script>' +
            "setTimeout(function(){" +
            "window.print();" +
            "setTimeout(function(){" +
            "window.parent.$('#" + id + "').remove();" +
            "},100);" +
            "},200);" +
            '</script></body></html>');
        d.close();
    },
    notNeedUndo : 1
};
///import core
///commands 鏍煎紡
///commandsName  Paragraph
///commandsTitle  娈佃惤鏍煎紡
/**
 * 娈佃惤鏍峰紡
 * @function
 * @name UM.execCommand
 * @param   {String}   cmdName     paragraph鎻掑叆娈佃惤鎵ц鍛戒护
 * @param   {String}   style               鏍囩鍊间负锛�'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
 * @param   {String}   attrs               鏍囩鐨勫睘鎬�
 * @author zhanyi
 */
UM.plugins['paragraph'] = function() {
    var me = this;
    me.setOpt('paragraph',{'p':'', 'h1':'', 'h2':'', 'h3':'', 'h4':'', 'h5':'', 'h6':''});
    me.commands['paragraph'] = {
        execCommand : function( cmdName, style ) {
            return this.document.execCommand('formatBlock',false,'<' + style + '>');
        },
        queryCommandValue : function() {
            try{
                var  val = this.document.queryCommandValue('formatBlock')
            }catch(e){
            }
            return val ;
        }
    };
};

///import core
///import plugins\inserthtml.js
///commands 鍒嗗壊绾�
///commandsName  Horizontal
///commandsTitle  鍒嗛殧绾�
/**
 * 鍒嗗壊绾�
 * @function
 * @name UM.execCommand
 * @param {String}     cmdName    horizontal鎻掑叆鍒嗗壊绾�
 */
UM.plugins['horizontal'] = function(){
    var me = this;
    me.commands['horizontal'] = {
        execCommand : function(  ) {
            this.document.execCommand('insertHorizontalRule');
            var rng = me.selection.getRange().txtToElmBoundary(true),
                start = rng.startContainer;
            if(domUtils.isBody(rng.startContainer)){
                var next = rng.startContainer.childNodes[rng.startOffset];
                if(!next){
                    next = $('<p></p>').appendTo(rng.startContainer).html(browser.ie ? '&nbsp;' : '<br/>')[0]
                }
                rng.setStart(next,0).setCursor()
            }else{

                while(dtd.$inline[start.tagName] && start.lastChild === start.firstChild){

                    var parent = start.parentNode;
                    parent.appendChild(start.firstChild);
                    parent.removeChild(start);
                    start = parent;
                }
                while(dtd.$inline[start.tagName]){
                    start = start.parentNode;
                }
                if(start.childNodes.length == 1 && start.lastChild.nodeName == 'HR'){
                    var hr = start.lastChild;
                    $(hr).insertBefore(start);
                    rng.setStart(start,0).setCursor();
                }else{
                    hr = $('hr',start)[0];
                    domUtils.breakParent(hr,start);
                    var pre = hr.previousSibling;
                    if(pre && domUtils.isEmptyBlock(pre)){
                        $(pre).remove()
                    }
                    rng.setStart(hr.nextSibling,0).setCursor();
                }

            }
        }
    };

};


///import core
///commands 娓呯┖鏂囨。
///commandsName  ClearDoc
///commandsTitle  娓呯┖鏂囨。
/**
 *
 * 娓呯┖鏂囨。
 * @function
 * @name UM.execCommand
 * @param   {String}   cmdName     cleardoc娓呯┖鏂囨。
 */

UM.commands['cleardoc'] = {
    execCommand : function() {
        var me = this,
            range = me.selection.getRange();
        me.body.innerHTML = "<p>"+(ie ? "" : "<br/>")+"</p>";
        range.setStart(me.body.firstChild,0).setCursor(false,true);
        setTimeout(function(){
            me.fireEvent("clearDoc");
        },0);

    }
};


///import core
///commands 鎾ら攢鍜岄噸鍋�
///commandsName  Undo,Redo
///commandsTitle  鎾ら攢,閲嶅仛
/**
 * @description 鍥為€€
 * @author zhanyi
 */

UM.plugins['undo'] = function () {
    var saveSceneTimer;
    var me = this,
        maxUndoCount = me.options.maxUndoCount || 20,
        maxInputCount = me.options.maxInputCount || 20,
        fillchar = new RegExp(domUtils.fillChar + '|<\/hr>', 'gi');// ie浼氫骇鐢熷浣欑殑</hr>
    var noNeedFillCharTags = {
        ol:1,ul:1,table:1,tbody:1,tr:1,body:1
    };
    var orgState = me.options.autoClearEmptyNode;
    function compareAddr(indexA, indexB) {
        if (indexA.length != indexB.length)
            return 0;
        for (var i = 0, l = indexA.length; i < l; i++) {
            if (indexA[i] != indexB[i])
                return 0
        }
        return 1;
    }

    function compareRangeAddress(rngAddrA, rngAddrB) {
        if (rngAddrA.collapsed != rngAddrB.collapsed) {
            return 0;
        }
        if (!compareAddr(rngAddrA.startAddress, rngAddrB.startAddress) || !compareAddr(rngAddrA.endAddress, rngAddrB.endAddress)) {
            return 0;
        }
        return 1;
    }

    function UndoManager() {
        this.list = [];
        this.index = 0;
        this.hasUndo = false;
        this.hasRedo = false;
        this.undo = function () {
            if (this.hasUndo) {
                if (!this.list[this.index - 1] && this.list.length == 1) {
                    this.reset();
                    return;
                }
                while (this.list[this.index].content == this.list[this.index - 1].content) {
                    this.index--;
                    if (this.index == 0) {
                        return this.restore(0);
                    }
                }
                this.restore(--this.index);
            }
        };
        this.redo = function () {
            if (this.hasRedo) {
                while (this.list[this.index].content == this.list[this.index + 1].content) {
                    this.index++;
                    if (this.index == this.list.length - 1) {
                        return this.restore(this.index);
                    }
                }
                this.restore(++this.index);
            }
        };

        this.restore = function () {
            var me = this.editor;
            var scene = this.list[this.index];
            var root = UM.htmlparser(scene.content.replace(fillchar, ''));
            me.options.autoClearEmptyNode = false;
            me.filterInputRule(root,true);
            me.options.autoClearEmptyNode = orgState;
            //trace:873
            //鍘绘帀灞曚綅绗�
            me.body.innerHTML = root.toHtml();
            me.fireEvent('afterscencerestore');
            //澶勭悊undo鍚庣┖鏍间笉灞曚綅鐨勯棶棰�
            if (browser.ie) {
                utils.each(domUtils.getElementsByTagName(me.document,'td th caption p'),function(node){
                    if(domUtils.isEmptyNode(node)){
                        domUtils.fillNode(me.document, node);
                    }
                })
            }

            try{
                var rng = new dom.Range(me.document,me.body).moveToAddress(scene.address);
                if(browser.ie && rng.collapsed && rng.startContainer.nodeType == 1){
                    var tmpNode = rng.startContainer.childNodes[rng.startOffset];
                    if( !tmpNode || tmpNode.nodeType == 1 && dtd.$empty[tmpNode]){
                        rng.insertNode(me.document.createTextNode(' ')).collapse(true);
                    }
                }
                rng.select(noNeedFillCharTags[rng.startContainer.nodeName.toLowerCase()]);
            }catch(e){}

            this.update();
            this.clearKey();
            //涓嶈兘鎶婅嚜宸眗eset浜�
            me.fireEvent('reset', true);
        };

        this.getScene = function () {
            var me = this.editor;
            var rng = me.selection.getRange(),
                rngAddress = rng.createAddress(false,true);
            me.fireEvent('beforegetscene');
            var root = UM.htmlparser(me.body.innerHTML,true);
            me.options.autoClearEmptyNode = false;
            me.filterOutputRule(root,true);
            me.options.autoClearEmptyNode = orgState;
            var cont = root.toHtml();
            browser.ie && (cont = cont.replace(/>&nbsp;</g, '><').replace(/\s*</g, '<').replace(/>\s*/g, '>'));
            me.fireEvent('aftergetscene');
            return {
                address:rngAddress,
                content:cont
            }
        };
        this.save = function (notCompareRange,notSetCursor) {
            clearTimeout(saveSceneTimer);
            var currentScene = this.getScene(notSetCursor),
                lastScene = this.list[this.index];
            //鍐呭鐩稿悓浣嶇疆鐩稿悓涓嶅瓨
            if (lastScene && lastScene.content == currentScene.content &&
                ( notCompareRange ? 1 : compareRangeAddress(lastScene.address, currentScene.address) )
                ) {
                return;
            }
            this.list = this.list.slice(0, this.index + 1);
            this.list.push(currentScene);
            //濡傛灉澶т簬鏈€澶ф暟閲忎簡锛屽氨鎶婃渶鍓嶇殑鍓旈櫎
            if (this.list.length > maxUndoCount) {
                this.list.shift();
            }
            this.index = this.list.length - 1;
            this.clearKey();
            //璺熸柊undo/redo鐘舵€�
            this.update();

        };
        this.update = function () {
            this.hasRedo = !!this.list[this.index + 1];
            this.hasUndo = !!this.list[this.index - 1];
        };
        this.reset = function () {
            this.list = [];
            this.index = 0;
            this.hasUndo = false;
            this.hasRedo = false;
            this.clearKey();
        };
        this.clearKey = function () {
            keycont = 0;
            lastKeyCode = null;
        };
    }

    me.undoManger = new UndoManager();
    me.undoManger.editor = me;
    function saveScene() {
        this.undoManger.save();
    }

    me.addListener('saveScene', function () {
        var args = Array.prototype.splice.call(arguments,1);
        this.undoManger.save.apply(this.undoManger,args);
    });

    me.addListener('beforeexeccommand', saveScene);
    me.addListener('afterexeccommand', saveScene);

    me.addListener('reset', function (type, exclude) {
        if (!exclude) {
            this.undoManger.reset();
        }
    });
    me.commands['redo'] = me.commands['undo'] = {
        execCommand:function (cmdName) {
            this.undoManger[cmdName]();
        },
        queryCommandState:function (cmdName) {
            return this.undoManger['has' + (cmdName.toLowerCase() == 'undo' ? 'Undo' : 'Redo')] ? 0 : -1;
        },
        notNeedUndo:1
    };

    var keys = {
            //  /*Backspace*/ 8:1, /*Delete*/ 46:1,
            /*Shift*/ 16:1, /*Ctrl*/ 17:1, /*Alt*/ 18:1,
            37:1, 38:1, 39:1, 40:1

        },
        keycont = 0,
        lastKeyCode;
    //杈撳叆娉曠姸鎬佷笅涓嶈绠楀瓧绗︽暟
    var inputType = false;
    me.addListener('ready', function () {
        domUtils.on(this.body, 'compositionstart', function () {
            inputType = true;
        });
        domUtils.on(this.body, 'compositionend', function () {
            inputType = false;
        })
    });
    //蹇嵎閿�
    me.addshortcutkey({
        "Undo":"ctrl+90", //undo
        "Redo":"ctrl+89,shift+ctrl+z" //redo

    });
    var isCollapsed = true;
    me.addListener('keydown', function (type, evt) {

        var me = this;
        var keyCode = evt.keyCode || evt.which;
        if (!keys[keyCode] && !evt.ctrlKey && !evt.metaKey && !evt.shiftKey && !evt.altKey) {
            if (inputType)
                return;

            if(!me.selection.getRange().collapsed){
                me.undoManger.save(false,true);
                isCollapsed = false;
                return;
            }
            if (me.undoManger.list.length == 0) {
                me.undoManger.save(true);
            }
            clearTimeout(saveSceneTimer);
            function save(cont){

                if (cont.selection.getRange().collapsed)
                    cont.fireEvent('contentchange');
                cont.undoManger.save(false,true);
                cont.fireEvent('selectionchange');
            }
            saveSceneTimer = setTimeout(function(){
                if(inputType){
                    var interalTimer = setInterval(function(){
                        if(!inputType){
                            save(me);
                            clearInterval(interalTimer)
                        }
                    },300)
                    return;
                }
                save(me);
            },200);

            lastKeyCode = keyCode;
            keycont++;
            if (keycont >= maxInputCount ) {
                save(me)
            }
        }
    });
    me.addListener('keyup', function (type, evt) {
        var keyCode = evt.keyCode || evt.which;
        if (!keys[keyCode] && !evt.ctrlKey && !evt.metaKey && !evt.shiftKey && !evt.altKey) {
            if (inputType)
                return;
            if(!isCollapsed){
                this.undoManger.save(false,true);
                isCollapsed = true;
            }
        }
    });

};

///import core
///import plugins/inserthtml.js
///import plugins/undo.js
///import plugins/serialize.js
///commands 绮樿创
///commandsName  PastePlain
///commandsTitle  绾枃鏈矘璐存ā寮�
/*
 ** @description 绮樿创
 * @author zhanyi
 */
UM.plugins['paste'] = function () {
    function getClipboardData(callback) {
        var doc = this.document;
        if (doc.getElementById('baidu_pastebin')) {
            //return;
        }
        var range = this.selection.getRange(),
            bk = range.createBookmark(),
        //鍒涘缓鍓创鐨勫鍣╠iv
            pastebin = doc.createElement('div');
        pastebin.id = 'baidu_pastebin';
        // Safari 瑕佹眰div蹇呴』鏈夊唴瀹癸紝鎵嶈兘绮樿创鍐呭杩涙潵
        browser.webkit && pastebin.appendChild(doc.createTextNode(domUtils.fillChar + domUtils.fillChar));
        this.body.appendChild(pastebin);
        //trace:717 闅愯棌鐨剆pan涓嶈兘寰楀埌top
        //bk.start.innerHTML = '&nbsp;';
        bk.start.style.display = '';

        pastebin.style.cssText = "position:absolute;width:1px;height:1px;overflow:hidden;left:-1000px;white-space:nowrap;top:" +
        //瑕佸湪鐜板湪鍏夋爣骞宠鐨勪綅缃姞鍏ワ紝鍚﹀垯浼氬嚭鐜拌烦鍔ㄧ殑闂
        $(bk.start).position().top  + 'px';

        range.selectNodeContents(pastebin).select(true);

        setTimeout(function () {
            if (browser.webkit) {
                for (var i = 0, pastebins = doc.querySelectorAll('#baidu_pastebin'), pi; pi = pastebins[i++];) {
                    if (domUtils.isEmptyNode(pi)) {
                        domUtils.remove(pi);
                    } else {
                        pastebin = pi;
                        break;
                    }
                }
            }
            try {
                pastebin.parentNode.removeChild(pastebin);
            } catch (e) {
            }
            range.moveToBookmark(bk).select(true);
            callback(pastebin);
        }, 0);
    }

    var me = this;


    function filter(div) {
        var html;
        if (div.firstChild) {
            //鍘绘帀cut涓坊鍔犵殑杈圭晫鍊�
            var nodes = domUtils.getElementsByTagName(div, 'span');
            for (var i = 0, ni; ni = nodes[i++];) {
                if (ni.id == '_baidu_cut_start' || ni.id == '_baidu_cut_end') {
                    domUtils.remove(ni);
                }
            }

            if (browser.webkit) {

                var brs = div.querySelectorAll('div br');
                for (var i = 0, bi; bi = brs[i++];) {
                    var pN = bi.parentNode;
                    if (pN.tagName == 'DIV' && pN.childNodes.length == 1) {
                        pN.innerHTML = '<p><br/></p>';
                        domUtils.remove(pN);
                    }
                }
                var divs = div.querySelectorAll('#baidu_pastebin');
                for (var i = 0, di; di = divs[i++];) {
                    var tmpP = me.document.createElement('p');
                    di.parentNode.insertBefore(tmpP, di);
                    while (di.firstChild) {
                        tmpP.appendChild(di.firstChild);
                    }
                    domUtils.remove(di);
                }

                var metas = div.querySelectorAll('meta');
                for (var i = 0, ci; ci = metas[i++];) {
                    domUtils.remove(ci);
                }

                var brs = div.querySelectorAll('br');
                for (i = 0; ci = brs[i++];) {
                    if (/^apple-/i.test(ci.className)) {
                        domUtils.remove(ci);
                    }
                }
            }
            if (browser.gecko) {
                var dirtyNodes = div.querySelectorAll('[_moz_dirty]');
                for (i = 0; ci = dirtyNodes[i++];) {
                    ci.removeAttribute('_moz_dirty');
                }
            }
            if (!browser.ie) {
                var spans = div.querySelectorAll('span.Apple-style-span');
                for (var i = 0, ci; ci = spans[i++];) {
                    domUtils.remove(ci, true);
                }
            }

            //ie涓嬩娇鐢╥nnerHTML浼氫骇鐢熷浣欑殑\r\n瀛楃锛屼篃浼氫骇鐢�&nbsp;杩欓噷杩囨护鎺�
            html = div.innerHTML;//.replace(/>(?:(\s|&nbsp;)*?)</g,'><');

            //杩囨护word绮樿创杩囨潵鐨勫啑浣欏睘鎬�
            html = UM.filterWord(html);
            //鍙栨秷浜嗗拷鐣ョ┖鐧界殑绗簩涓弬鏁帮紝绮樿创杩囨潵鐨勬湁浜涙槸鏈夌┖鐧界殑锛屼細琚涓婄浉鍏崇殑鏍囩
            var root = UM.htmlparser(html);
            //濡傛灉缁欎簡杩囨护瑙勫垯灏卞厛杩涜杩囨护
            if (me.options.filterRules) {
                UM.filterNode(root, me.options.filterRules);
            }
            //鎵ц榛樿鐨勫鐞�
            me.filterInputRule(root);
            //閽堝chrome鐨勫鐞�
            if (browser.webkit) {
                var br = root.lastChild();
                if (br && br.type == 'element' && br.tagName == 'br') {
                    root.removeChild(br)
                }
                utils.each(me.body.querySelectorAll('div'), function (node) {
                    if (domUtils.isEmptyBlock(node)) {
                        domUtils.remove(node)
                    }
                })
            }
            html = {'html': root.toHtml()};
            me.fireEvent('beforepaste', html, root);
            //鎶簡榛樿鐨勭矘璐达紝閭ｅ悗杈圭殑鍐呭灏变笉鎵ц浜嗭紝姣斿琛ㄦ牸绮樿创
            if(!html.html){
                return;
            }

            me.execCommand('insertHtml', html.html, true);
            me.fireEvent("afterpaste", html);
        }
    }


    me.addListener('ready', function () {
        domUtils.on(me.body, 'cut', function () {
            var range = me.selection.getRange();
            if (!range.collapsed && me.undoManger) {
                me.undoManger.save();
            }
        });

        //ie涓媌eforepaste鍦ㄧ偣鍑诲彸閿椂涔熶細瑙﹀彂锛屾墍浠ョ敤鐩戞帶閿洏鎵嶅鐞�
        domUtils.on(me.body, browser.ie || browser.opera ? 'keydown' : 'paste', function (e) {
            if ((browser.ie || browser.opera) && ((!e.ctrlKey && !e.metaKey) || e.keyCode != '86')) {
                return;
            }
            getClipboardData.call(me, function (div) {
                filter(div);
            });
        });

    });
};


///import core
///commands 鏈夊簭鍒楄〃,鏃犲簭鍒楄〃
///commandsName  InsertOrderedList,InsertUnorderedList
///commandsTitle  鏈夊簭鍒楄〃,鏃犲簭鍒楄〃
/**
 * 鏈夊簭鍒楄〃
 * @function
 * @name UM.execCommand
 * @param   {String}   cmdName     insertorderlist鎻掑叆鏈夊簭鍒楄〃
 * @param   {String}   style               鍊间负锛歞ecimal,lower-alpha,lower-roman,upper-alpha,upper-roman
 * @author zhanyi
 */
/**
 * 鏃犲簭閾炬帴
 * @function
 * @name UM.execCommand
 * @param   {String}   cmdName     insertunorderlist鎻掑叆鏃犲簭鍒楄〃
 * * @param   {String}   style            鍊间负锛歝ircle,disc,square
 * @author zhanyi
 */

UM.plugins['list'] = function () {
    var me = this;

    me.setOpt( {
        'insertorderedlist':{
            'decimal':'',
            'lower-alpha':'',
            'lower-roman':'',
            'upper-alpha':'',
            'upper-roman':''
        },
        'insertunorderedlist':{
            'circle':'',
            'disc':'',
            'square':''
        }
    } );

    this.addInputRule(function(root){
        utils.each(root.getNodesByTagName('li'), function (node) {
            if(node.children.length == 0){
                node.parentNode.removeChild(node)
            }
        })
    });
    me.commands['insertorderedlist'] =
    me.commands['insertunorderedlist'] = {
            execCommand:function (cmdName) {
                this.document.execCommand(cmdName);
                var rng = this.selection.getRange(),
                    bk = rng.createBookmark(true);

                this.$body.find('ol,ul').each(function(i,n){
                    var parent = n.parentNode;
                    if(parent.tagName == 'P' && parent.lastChild === parent.firstChild){
                        $(n).children().each(function(j,li){
                            var p = parent.cloneNode(false);
                            $(p).append(li.innerHTML);
                            $(li).html('').append(p)
                        })
                        $(n).insertBefore(parent);
                        $(parent).remove();
                    }
                });
                rng.moveToBookmark(bk).select();
                return true;
            },
            queryCommandState:function (cmdName) {
                return this.document.queryCommandState(cmdName)
            }
        };
};


///import core
///import plugins/serialize.js
///import plugins/undo.js
///commands 鏌ョ湅婧愮爜
///commandsName  Source
///commandsTitle  鏌ョ湅婧愮爜
(function (){
    var sourceEditors = {
        textarea: function (editor, holder){
            var textarea = holder.ownerDocument.createElement('textarea');
            textarea.style.cssText = 'resize:none;border:0;padding:0;margin:0;overflow-y:auto;outline:0';
            // todo: IE涓嬪彧鏈塷nresize灞炴€у彲鐢�... 寰堢籂缁�
            if (browser.ie && browser.version < 8) {

                textarea.style.width = holder.offsetWidth + 'px';
                textarea.style.height = holder.offsetHeight + 'px';
                holder.onresize = function (){
                    textarea.style.width = holder.offsetWidth + 'px';
                    textarea.style.height = holder.offsetHeight + 'px';
                };
            }
            holder.appendChild(textarea);
            return {
                container : textarea,
                setContent: function (content){
                    textarea.value = content;
                },
                getContent: function (){
                    return textarea.value;
                },
                select: function (){
                    var range;
                    if (browser.ie) {
                        range = textarea.createTextRange();
                        range.collapse(true);
                        range.select();
                    } else {
                        //todo: chrome涓嬫棤娉曡缃劍鐐�
                        textarea.setSelectionRange(0, 0);
                        textarea.focus();
                    }
                },
                dispose: function (){
                    holder.removeChild(textarea);
                    // todo
                    holder.onresize = null;
                    textarea = null;
                    holder = null;
                }
            };
        }
    };

    UM.plugins['source'] = function (){
        var me = this;
        var opt = this.options;
        var sourceMode = false;
        var sourceEditor;

        opt.sourceEditor = 'textarea';

        me.setOpt({
            sourceEditorFirst:false
        });
        function createSourceEditor(holder){
            return sourceEditors.textarea(me, holder);
        }

        var bakCssText;
        //瑙ｅ喅鍦ㄦ簮鐮佹ā寮忎笅getContent涓嶈兘寰楀埌鏈€鏂扮殑鍐呭闂
        var oldGetContent = me.getContent,
            bakAddress;

        me.commands['source'] = {
            execCommand: function (){

                sourceMode = !sourceMode;
                if (sourceMode) {
                    bakAddress = me.selection.getRange().createAddress(false,true);
                    me.undoManger && me.undoManger.save(true);
                    if(browser.gecko){
                        me.body.contentEditable = false;
                    }

//                    bakCssText = me.body.style.cssText;
                    me.body.style.cssText += ';position:absolute;left:-32768px;top:-32768px;';


                    me.fireEvent('beforegetcontent');
                    var root = UM.htmlparser(me.body.innerHTML);
                    me.filterOutputRule(root);
                    root.traversal(function (node) {
                        if (node.type == 'element') {
                            switch (node.tagName) {
                                case 'td':
                                case 'th':
                                case 'caption':
                                    if(node.children && node.children.length == 1){
                                        if(node.firstChild().tagName == 'br' ){
                                            node.removeChild(node.firstChild())
                                        }
                                    };
                                    break;
                                case 'pre':
                                    node.innerText(node.innerText().replace(/&nbsp;/g,' '))

                            }
                        }
                    });

                    me.fireEvent('aftergetcontent');

                    var content = root.toHtml(true);

                    sourceEditor = createSourceEditor(me.body.parentNode);

                    sourceEditor.setContent(content);

                    var getStyleValue=function(attr){
                        return parseInt($(me.body).css(attr));
                    };
                    $(sourceEditor.container).width($(me.body).width()+getStyleValue("padding-left")+getStyleValue("padding-right"))
                        .height($(me.body).height());
                    setTimeout(function (){
                        sourceEditor.select();
                    });
                    //閲嶇疆getContent锛屾簮鐮佹ā寮忎笅鍙栧€间篃鑳芥槸鏈€鏂扮殑鏁版嵁
                    me.getContent = function (){
                        return sourceEditor.getContent() || '<p>' + (browser.ie ? '' : '<br/>')+'</p>';
                    };
                } else {
                    me.$body.css({
                        'position':'',
                        'left':'',
                        'top':''
                    });
//                    me.body.style.cssText = bakCssText;
                    var cont = sourceEditor.getContent() || '<p>' + (browser.ie ? '' : '<br/>')+'</p>';
                    //澶勭悊鎺塨lock鑺傜偣鍓嶅悗鐨勭┖鏍�,鏈夊彲鑳戒細璇懡涓紝鏆傛椂涓嶈€冭檻
                    cont = cont.replace(new RegExp('[\\r\\t\\n ]*<\/?(\\w+)\\s*(?:[^>]*)>','g'), function(a,b){
                        if(b && !dtd.$inlineWithA[b.toLowerCase()]){
                            return a.replace(/(^[\n\r\t ]*)|([\n\r\t ]*$)/g,'');
                        }
                        return a.replace(/(^[\n\r\t]*)|([\n\r\t]*$)/g,'')
                    });
                    me.setContent(cont);
                    sourceEditor.dispose();
                    sourceEditor = null;
                    //杩樺師getContent鏂规硶
                    me.getContent = oldGetContent;
                    var first = me.body.firstChild;
                    //trace:1106 閮藉垹闄ょ┖浜嗭紝涓嬭竟浼氭姤閿欙紝鎵€浠ヨˉ鍏呬竴涓猵鍗犱綅
                    if(!first){
                        me.body.innerHTML = '<p>'+(browser.ie?'':'<br/>')+'</p>';
                    }
                    //瑕佸湪ifm涓烘樉绀烘椂ff鎵嶈兘鍙栧埌selection,鍚﹀垯鎶ラ敊
                    //杩欓噷涓嶈兘姣旇緝浣嶇疆浜�
                    me.undoManger && me.undoManger.save(true);
                    if(browser.gecko){
                        me.body.contentEditable = true;
                    }
                    try{
                        me.selection.getRange().moveToAddress(bakAddress).select();
                    }catch(e){}

                }
                this.fireEvent('sourcemodechanged', sourceMode);
            },
            queryCommandState: function (){
                return sourceMode|0;
            },
            notNeedUndo : 1
        };
        var oldQueryCommandState = me.queryCommandState;


        me.queryCommandState = function (cmdName){
            cmdName = cmdName.toLowerCase();
            if (sourceMode) {
                //婧愮爜妯″紡涓嬪彲浠ュ紑鍚殑鍛戒护
                return cmdName in {
                    'source' : 1,
                    'fullscreen' : 1
                } ? oldQueryCommandState.apply(this, arguments)  : -1
            }
            return oldQueryCommandState.apply(this, arguments);
        };

    };

})();
///import core
///import plugins/undo.js
///commands 璁剧疆鍥炶溅鏍囩p鎴朾r
///commandsName  EnterKey
///commandsTitle  璁剧疆鍥炶溅鏍囩p鎴朾r
/**
 * @description 澶勭悊鍥炶溅
 * @author zhanyi
 */
UM.plugins['enterkey'] = function() {
    var hTag,
        me = this,
        tag = me.options.enterTag;
    me.addListener('keyup', function(type, evt) {

        var keyCode = evt.keyCode || evt.which;
        if (keyCode == 13) {
            var range = me.selection.getRange(),
                start = range.startContainer,
                doSave;

            //淇鍦╤1-h6閲岃竟鍥炶溅鍚庝笉鑳藉祵濂梡鐨勯棶棰�
            if (!browser.ie) {

                if (/h\d/i.test(hTag)) {
                    if (browser.gecko) {
                        var h = domUtils.findParentByTagName(start, [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6','blockquote','caption','table'], true);
                        if (!h) {
                            me.document.execCommand('formatBlock', false, '<p>');
                            doSave = 1;
                        }
                    } else {
                        //chrome remove div
                        if (start.nodeType == 1) {
                            var tmp = me.document.createTextNode(''),div;
                            range.insertNode(tmp);
                            div = domUtils.findParentByTagName(tmp, 'div', true);
                            if (div) {
                                var p = me.document.createElement('p');
                                while (div.firstChild) {
                                    p.appendChild(div.firstChild);
                                }
                                div.parentNode.insertBefore(p, div);
                                domUtils.remove(div);
                                range.setStartBefore(tmp).setCursor();
                                doSave = 1;
                            }
                            domUtils.remove(tmp);

                        }
                    }

                    if (me.undoManger && doSave) {
                        me.undoManger.save();
                    }
                }
                //娌℃湁绔欎綅绗︼紝浼氬嚭鐜板琛岀殑闂
                browser.opera &&  range.select();
            }else{
                me.fireEvent('saveScene',true,true)
            }
        }
    });

    me.addListener('keydown', function(type, evt) {
        var keyCode = evt.keyCode || evt.which;
        if (keyCode == 13) {//鍥炶溅
            if(me.fireEvent('beforeenterkeydown')){
                domUtils.preventDefault(evt);
                return;
            }
            me.fireEvent('saveScene',true,true);
            hTag = '';


            var range = me.selection.getRange();

            if (!range.collapsed) {
                //璺╰d涓嶈兘鍒�
                var start = range.startContainer,
                    end = range.endContainer,
                    startTd = domUtils.findParentByTagName(start, 'td', true),
                    endTd = domUtils.findParentByTagName(end, 'td', true);
                if (startTd && endTd && startTd !== endTd || !startTd && endTd || startTd && !endTd) {
                    evt.preventDefault ? evt.preventDefault() : ( evt.returnValue = false);
                    return;
                }
            }
            if (tag == 'p') {


                if (!browser.ie) {

                    start = domUtils.findParentByTagName(range.startContainer, ['ol','ul','p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6','blockquote','caption'], true);

                    //opera涓嬫墽琛宖ormatblock浼氬湪table鐨勫満鏅笅鏈夐棶棰橈紝鍥炶溅鍦╫pera鍘熺敓鏀寔寰堝ソ锛屾墍浠ユ殏鏃跺湪opera鍘绘帀璋冪敤杩欎釜鍘熺敓鐨刢ommand
                    //trace:2431
                    if (!start && !browser.opera) {

                        me.document.execCommand('formatBlock', false, '<p>');

                        if (browser.gecko) {
                            range = me.selection.getRange();
                            start = domUtils.findParentByTagName(range.startContainer, 'p', true);
                            start && domUtils.removeDirtyAttr(start);
                        }


                    } else {
                        hTag = start.tagName;
                        start.tagName.toLowerCase() == 'p' && browser.gecko && domUtils.removeDirtyAttr(start);
                    }

                }

            }

        }
    });
};

///import core
///commands 棰勮
///commandsName  Preview
///commandsTitle  棰勮
/**
 * 棰勮
 * @function
 * @name UM.execCommand
 * @param   {String}   cmdName     preview棰勮缂栬緫鍣ㄥ唴瀹�
 */
UM.commands['preview'] = {
    execCommand : function(){
        var w = window.open('', '_blank', ''),
            d = w.document;
        d.open();
        d.write('<html><head></head><body><div>'+this.getContent(null,null,true)+'</div></body></html>');
        d.close();
    },
    notNeedUndo : 1
};

///import core
///commands 鍔犵矖,鏂滀綋,涓婃爣,涓嬫爣
///commandsName  Bold,Italic,Subscript,Superscript
///commandsTitle  鍔犵矖,鍔犳枩,涓嬫爣,涓婃爣
/**
 * b u i绛夊熀纭€鍔熻兘瀹炵幇
 * @function
 * @name UM.execCommands
 * @param    {String}    cmdName    bold鍔犵矖銆俰talic鏂滀綋銆俿ubscript涓婃爣銆俿uperscript涓嬫爣銆�
*/
UM.plugins['basestyle'] = function(){
    var basestyles = ['bold','underline','superscript','subscript','italic','strikethrough'],
        me = this;
    //娣诲姞蹇嵎閿�
    me.addshortcutkey({
        "Bold" : "ctrl+66",//^B
        "Italic" : "ctrl+73", //^I
        "Underline" : "ctrl+shift+85",//^U
        "strikeThrough" : 'ctrl+shift+83' //^s
    });
    //杩囨护鏈€鍚庣殑浜у嚭鏁版嵁
    me.addOutputRule(function(root){
        $.each(root.getNodesByTagName('b i u strike s'),function(i,node){
            switch (node.tagName){
                case 'b':
                    node.tagName = 'strong';
                    break;
                case 'i':
                    node.tagName = 'em';
                    break;
                case 'u':
                    node.tagName = 'span';
                    node.setStyle('text-decoration','underline');
                    break;
                case 's':
                case 'strike':
                    node.tagName = 'span';
                    node.setStyle('text-decoration','line-through')
            }
        });
    });
    $.each(basestyles,function(i,cmd){
        me.commands[cmd] = {
            execCommand : function( cmdName ) {
                var rng = this.selection.getRange();
                if(rng.collapsed && this.queryCommandState(cmdName) != 1){
                    var node = this.document.createElement({
                        'bold':'strong',
                        'underline':'u',
                        'superscript':'sup',
                        'subscript':'sub',
                        'italic':'em',
                        'strikethrough':'strike'
                    }[cmdName]);
                    rng.insertNode(node).setStart(node,0).setCursor(false);
                    return true;
                }else{
                    return this.document.execCommand(cmdName)
                }

            },
            queryCommandState : function(cmdName) {
                if(browser.gecko){
                    return this.document.queryCommandState(cmdName)
                }
                var path = this.selection.getStartElementPath(),result = false;
                $.each(path,function(i,n){
                    switch (cmdName){
                        case 'bold':
                            if(n.nodeName == 'STRONG' || n.nodeName == 'B'){
                                result = 1;
                                return false;
                            }
                            break;
                        case 'underline':
                            if(n.nodeName == 'U' || n.nodeName == 'SPAN' && $(n).css('text-decoration') == 'underline'){
                                result = 1;
                                return false;
                            }
                            break;
                        case 'superscript':
                            if(n.nodeName == 'SUP'){
                                result = 1;
                                return false;
                            }
                            break;
                        case 'subscript':
                            if(n.nodeName == 'SUB'){
                                result = 1;
                                return false;
                            }
                            break;
                        case 'italic':
                            if(n.nodeName == 'EM' || n.nodeName == 'I'){
                                result = 1;
                                return false;
                            }
                            break;
                        case 'strikethrough':
                            if(n.nodeName == 'S' || n.nodeName == 'STRIKE' || n.nodeName == 'SPAN' && $(n).css('text-decoration') == 'line-through'){
                                result = 1;
                                return false;
                            }
                            break;
                    }
                })
                return result
            }
        };
    })
};


///import core
///import plugins/inserthtml.js
///commands 瑙嗛
///commandsName InsertVideo
///commandsTitle  鎻掑叆瑙嗛
///commandsDialog  dialogs\video
UM.plugins['video'] = function (){
    var me =this,
        div;

    /**
     * 鍒涘缓鎻掑叆瑙嗛瀛楃绐�
     * @param url 瑙嗛鍦板潃
     * @param width 瑙嗛瀹藉害
     * @param height 瑙嗛楂樺害
     * @param align 瑙嗛瀵归綈
     * @param toEmbed 鏄惁浠lash浠ｆ浛鏄剧ず
     * @param addParagraph  鏄惁闇€瑕佹坊鍔燩 鏍囩
     */
    function creatInsertStr(url,width,height,id,align,toEmbed){
        return  !toEmbed ?

                '<img ' + (id ? 'id="' + id+'"' : '') + ' width="'+ width +'" height="' + height + '" _url="'+url+'" class="edui-faked-video"'  +
                ' src="' + me.options.UMEDITOR_HOME_URL+'themes/default/images/spacer.gif" style="background:url('+me.options.UMEDITOR_HOME_URL+'themes/default/images/videologo.gif) no-repeat center center; border:1px solid gray;'+(align ? 'float:' + align + ';': '')+'" />'

                :
                '<embed type="application/x-shockwave-flash" class="edui-faked-video" pluginspage="http://www.macromedia.com/go/getflashplayer"' +
                ' src="' + url + '" width="' + width  + '" height="' + height  + '"'  + (align ? ' style="float:' + align + '"': '') +
                ' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" >';
    }

    function switchImgAndEmbed(root,img2embed){
        utils.each(root.getNodesByTagName(img2embed ? 'img' : 'embed'),function(node){
            if(0 && node.getAttr('class') == 'edui-faked-video'){

                var html = creatInsertStr( img2embed ? node.getAttr('_url') : node.getAttr('src'),node.getAttr('width'),node.getAttr('height'),null,node.getStyle('float') || '',img2embed);
                node.parentNode.replaceChild(UM.uNode.createElement(html),node)
            }
        })
    }

    me.addOutputRule(function(root){
        switchImgAndEmbed(root,true)
    });
    me.addInputRule(function(root){
        switchImgAndEmbed(root)
    });

    me.commands["insertvideo"] = {
        execCommand: function (cmd, videoObjs){
            videoObjs = utils.isArray(videoObjs)?videoObjs:[videoObjs];
            var html = [],id = 'tmpVedio';
            for(var i=0,vi,len = videoObjs.length;i<len;i++){
                 vi = videoObjs[i];
                 html.push(creatInsertStr( vi.url, vi.width || '100%',  vi.height || 310, id + i,vi.align,true));
            }
            me.execCommand("inserthtml",html.join(""),true);
        },
        queryCommandState : function(){
            var img = me.selection.getRange().getClosedNode(),
                flag = img && (img.className == "edui-faked-video");
            return flag ? 1 : 0;
        }
    };
};
///import core
///commands 鍏ㄩ€�
///commandsName  SelectAll
///commandsTitle  鍏ㄩ€�
/**
 * 閫変腑鎵€鏈�
 * @function
 * @name UM.execCommand
 * @param   {String}   cmdName    selectall閫変腑缂栬緫鍣ㄩ噷鐨勬墍鏈夊唴瀹�
 * @author zhanyi
*/
UM.plugins['selectall'] = function(){
    var me = this;
    me.commands['selectall'] = {
        execCommand : function(){
            //鍘绘帀浜嗗師鐢熺殑selectAll,鍥犱负浼氬嚭鐜版姤閿欏拰褰撳唴瀹逛负绌烘椂锛屼笉鑳藉嚭鐜伴棴鍚堢姸鎬佺殑鍏夋爣
            var me = this,body = me.body,
                range = me.selection.getRange();
            range.selectNodeContents(body);
            if(domUtils.isEmptyBlock(body)){
                //opera涓嶈兘鑷姩鍚堝苟鍒板厓绱犵殑閲岃竟锛岃鎵嬪姩澶勭悊涓€涓�
                if(browser.opera && body.firstChild && body.firstChild.nodeType == 1){
                    range.setStartAtFirst(body.firstChild);
                }
                range.collapse(true);
            }
            range.select(true);
        },
        notNeedUndo : 1
    };


    //蹇嵎閿�
    me.addshortcutkey({
         "selectAll" : "ctrl+65"
    });
};

UM.plugins['removeformat'] = function(){
    var me = this;
    me.commands['removeformat'] = {
        execCommand : function(  ) {
            this.document.execCommand('removeformat');
        }
    };

};


/*
 *   澶勭悊鐗规畩閿殑鍏煎鎬ч棶棰�
 */
UM.plugins['keystrokes'] = function() {
    var me = this;
    var collapsed = true;
    me.addListener('keydown', function(type, evt) {
        var keyCode = evt.keyCode || evt.which,
            rng = me.selection.getRange();

        //澶勭悊鍏ㄩ€夌殑鎯呭喌
        if(!rng.collapsed && !(evt.ctrlKey || evt.shiftKey || evt.altKey || evt.metaKey) && (keyCode >= 65 && keyCode <=90
            || keyCode >= 48 && keyCode <= 57 ||
            keyCode >= 96 && keyCode <= 111 || {
            13:1,
            8:1,
            46:1
        }[keyCode])
            ){

            var tmpNode = rng.startContainer;
            if(domUtils.isFillChar(tmpNode)){
                rng.setStartBefore(tmpNode)
            }
            tmpNode = rng.endContainer;
            if(domUtils.isFillChar(tmpNode)){
                rng.setEndAfter(tmpNode)
            }
            rng.txtToElmBoundary();
            //缁撴潫杈圭晫鍙兘鏀惧埌浜哹r鐨勫墠杈癸紝瑕佹妸br鍖呭惈杩涙潵
            // x[xxx]<br/>
            if(rng.endContainer && rng.endContainer.nodeType == 1){
                tmpNode = rng.endContainer.childNodes[rng.endOffset];
                if(tmpNode && domUtils.isBr(tmpNode)){
                    rng.setEndAfter(tmpNode);
                }
            }
            if(rng.startOffset == 0){
                tmpNode = rng.startContainer;
                if(domUtils.isBoundaryNode(tmpNode,'firstChild') ){
                    tmpNode = rng.endContainer;
                    if(rng.endOffset == (tmpNode.nodeType == 3 ? tmpNode.nodeValue.length : tmpNode.childNodes.length) && domUtils.isBoundaryNode(tmpNode,'lastChild')){
                        me.fireEvent('saveScene');
                        me.body.innerHTML = '<p>'+(browser.ie ? '' : '<br/>')+'</p>';
                        rng.setStart(me.body.firstChild,0).setCursor(false,true);
                        me._selectionChange();
                        return;
                    }
                }
            }
        }

        //澶勭悊backspace
        if (keyCode == 8) {
            rng = me.selection.getRange();
            collapsed = rng.collapsed;
            if(me.fireEvent('delkeydown',evt)){
                return;
            }
            var start,end;
            //閬垮厤鎸変袱娆″垹闄ゆ墠鑳界敓鏁堢殑闂
            if(rng.collapsed && rng.inFillChar()){
                start = rng.startContainer;

                if(domUtils.isFillChar(start)){
                    rng.setStartBefore(start).shrinkBoundary(true).collapse(true);
                    domUtils.remove(start)
                }else{
                    start.nodeValue = start.nodeValue.replace(new RegExp('^' + domUtils.fillChar ),'');
                    rng.startOffset--;
                    rng.collapse(true).select(true)
                }
            }
            //瑙ｅ喅閫変腑control鍏冪礌涓嶈兘鍒犻櫎鐨勯棶棰�
            if (start = rng.getClosedNode()) {
                me.fireEvent('saveScene');
                rng.setStartBefore(start);
                domUtils.remove(start);
                rng.setCursor();
                me.fireEvent('saveScene');
                domUtils.preventDefault(evt);
                return;
            }
            //闃绘鍦╰able涓婄殑鍒犻櫎
            if (!browser.ie) {
                start = domUtils.findParentByTagName(rng.startContainer, 'table', true);
                end = domUtils.findParentByTagName(rng.endContainer, 'table', true);
                if (start && !end || !start && end || start !== end) {
                    evt.preventDefault();
                    return;
                }
            }
            start = rng.startContainer;
            if(rng.collapsed && start.nodeType == 1){
                var currentNode = start.childNodes[rng.startOffset-1];
                if(currentNode && currentNode.nodeType == 1 && currentNode.tagName == 'BR'){
                    me.fireEvent('saveScene');
                    rng.setStartBefore(currentNode).collapse(true);
                    domUtils.remove(currentNode);
                    rng.select();
                    me.fireEvent('saveScene');
                }
            }

            //trace:3613
            if(browser.chrome){
                if(rng.collapsed){

                    while(rng.startOffset == 0 && !domUtils.isEmptyBlock(rng.startContainer)){
                        rng.setStartBefore(rng.startContainer)
                    }
                    var pre = rng.startContainer.childNodes[rng.startOffset-1];
                    if(pre && pre.nodeName == 'BR'){
                        rng.setStartBefore(pre);
                        me.fireEvent('saveScene');
                        $(pre).remove();
                        rng.setCursor();
                        me.fireEvent('saveScene');
                    }

                }
            }
        }
        //trace:1634
        //ff鐨刣el閿湪瀹瑰櫒绌虹殑鏃跺€欙紝涔熶細鍒犻櫎
        if(browser.gecko && keyCode == 46){
            var range = me.selection.getRange();
            if(range.collapsed){
                start = range.startContainer;
                if(domUtils.isEmptyBlock(start)){
                    var parent = start.parentNode;
                    while(domUtils.getChildCount(parent) == 1 && !domUtils.isBody(parent)){
                        start = parent;
                        parent = parent.parentNode;
                    }
                    if(start === parent.lastChild)
                        evt.preventDefault();
                    return;
                }
            }
        }
    });
    me.addListener('keyup', function(type, evt) {
        var keyCode = evt.keyCode || evt.which,
            rng,me = this;
        if(keyCode == 8){
            if(me.fireEvent('delkeyup')){
                return;
            }
            rng = me.selection.getRange();
            if(rng.collapsed){
                var tmpNode,
                    autoClearTagName = ['h1','h2','h3','h4','h5','h6'];
                if(tmpNode = domUtils.findParentByTagName(rng.startContainer,autoClearTagName,true)){
                    if(domUtils.isEmptyBlock(tmpNode)){
                        var pre = tmpNode.previousSibling;
                        if(pre && pre.nodeName != 'TABLE'){
                            domUtils.remove(tmpNode);
                            rng.setStartAtLast(pre).setCursor(false,true);
                            return;
                        }else{
                            var next = tmpNode.nextSibling;
                            if(next && next.nodeName != 'TABLE'){
                                domUtils.remove(tmpNode);
                                rng.setStartAtFirst(next).setCursor(false,true);
                                return;
                            }
                        }
                    }
                }
                //澶勭悊褰撳垹闄ゅ埌body鏃讹紝瑕侀噸鏂扮粰p鏍囩灞曚綅
                if(domUtils.isBody(rng.startContainer)){
                    var tmpNode = domUtils.createElement(me.document,'p',{
                        'innerHTML' : browser.ie ? domUtils.fillChar : '<br/>'
                    });
                    rng.insertNode(tmpNode).setStart(tmpNode,0).setCursor(false,true);
                }
            }


            //chrome涓嬪鏋滃垹闄や簡inline鏍囩锛屾祻瑙堝櫒浼氭湁璁板繂锛屽湪杈撳叆鏂囧瓧杩樻槸浼氬涓婂垰鎵嶅垹闄ょ殑鏍囩锛屾墍浠ヨ繖閲屽啀閫変竴娆″氨涓嶄細浜�
            if( !collapsed && (rng.startContainer.nodeType == 3 || rng.startContainer.nodeType == 1 && domUtils.isEmptyBlock(rng.startContainer))){
                if(browser.ie){
                    var span = rng.document.createElement('span');
                    rng.insertNode(span).setStartBefore(span).collapse(true);
                    rng.select();
                    domUtils.remove(span)
                }else{
                    rng.select()
                }

            }
        }

    })
};
/*
 * 鎷栨斁鏂囦欢鍒扮紪杈戝櫒锛屼笂浼犲苟鎻掑叆
 */
UM.plugins['dropfile'] = function() {
    var me = this;

    //me.setOpt('dropFileEnabled', true);

    if(0 && me.getOpt('dropFileEnabled') && window.FormData && window.FileReader) {
        me.addListener('ready', function(){
            me.$body.on('drop',function (e) {
                try{
                    //鑾峰彇鏂囦欢鍒楄〃
                    var fileList = e.originalEvent.dataTransfer.files;
                    var hasImg = false;
                    if(fileList) {
                        $.each(fileList, function (i, f) {
                            if (/^image/.test(f.type)) {
                                var xhr = new XMLHttpRequest();
                                xhr.open("post", me.getOpt('imageUrl'), true);
                                xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

                                //妯℃嫙鏁版嵁
                                var fd = new FormData();
                                fd.append(me.getOpt('imageFieldName') || 'upfile', f);
                                fd.append('type', 'ajax');

                                xhr.send(fd);
                                xhr.addEventListener('load', function (e) {
                                    var picLink = me.getOpt('imagePath') + e.target.response;
                                    if(picLink) {
                                        me.execCommand('insertimage', {
                                            src: picLink,
                                            _src: picLink
                                        });
                                    }
                                });
                                hasImg = true;
                            }
                        });
                        if(hasImg) e.preventDefault();
                    }
                }catch(e){}

            }).on('dragover', function (e) {
                    if(e.originalEvent.dataTransfer.types[0] == 'Files') {
                        e.preventDefault();
                    }
                });
        });
    }
};
(function ($) {
    //瀵筳query鐨勬墿灞�
    $.parseTmpl = function parse(str, data) {
        var tmpl = 'var __p=[],print=function(){__p.push.apply(__p,arguments);};' + 'with(obj||{}){__p.push(\'' + str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/<%=([\s\S]+?)%>/g,function (match, code) {
            return "'," + code.replace(/\\'/g, "'") + ",'";
        }).replace(/<%([\s\S]+?)%>/g,function (match, code) {
                return "');" + code.replace(/\\'/g, "'").replace(/[\r\n\t]/g, ' ') + "__p.push('";
            }).replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/\t/g, '\\t') + "');}return __p.join('');";
        var func = new Function('obj', tmpl);
        return data ? func(data) : func;
    };
    $.extend2 = function (t, s) {
        var a = arguments,
            notCover = $.type(a[a.length - 1]) == 'boolean' ? a[a.length - 1] : false,
            len = $.type(a[a.length - 1]) == 'boolean' ? a.length - 1 : a.length;
        for (var i = 1; i < len; i++) {
            var x = a[i];
            for (var k in x) {
                if (!notCover || !t.hasOwnProperty(k)) {
                    t[k] = x[k];
                }
            }
        }
        return t;
    };

    $.IE6 = !!window.ActiveXObject && parseFloat(navigator.userAgent.match(/msie (\d+)/i)[1]) == 6;

    //鎵€鏈塽i鐨勫熀绫�
    var _eventHandler = [];
    var _widget = function () {
    };
    var _prefix = 'edui';
    _widget.prototype = {
        on: function (ev, cb) {
            this.root().on(ev, $.proxy(cb, this));
            return this;
        },
        off: function (ev, cb) {
            this.root().off(ev, $.proxy(cb, this));
            return this;
        },
        trigger: function (ev, data) {
            return  this.root().trigger(ev, data) === false ? false : this;
        },
        root: function ($el) {
            return this._$el || (this._$el = $el);
        },
        destroy: function () {

        },
        data: function (key, val) {
            if (val !== undefined) {
                this.root().data(_prefix + key, val);
                return this;
            } else {
                return this.root().data(_prefix + key)
            }
        },
        register: function (eventName, $el, fn) {
            _eventHandler.push({
                'evtname': eventName,
                '$els': $.isArray($el) ? $el : [$el],
                handler: $.proxy(fn, $el)
            })
        }
    };

    //浠巎q瀹炰緥涓婃嬁鍒扮粦瀹氱殑widget瀹炰緥
    $.fn.edui = function (obj) {
        return obj ? this.data('eduiwidget', obj) : this.data('eduiwidget');
    };

    function _createClass(ClassObj, properties, supperClass) {
        ClassObj.prototype = $.extend2(
            $.extend({}, properties),
            (UM.ui[supperClass] || _widget).prototype,
            true
        );
        ClassObj.prototype.supper = (UM.ui[supperClass] || _widget).prototype;
        //鐖禼lass鐨刣efaultOpt 鍚堝苟
        if( UM.ui[supperClass] && UM.ui[supperClass].prototype.defaultOpt ) {

            var parentDefaultOptions = UM.ui[supperClass].prototype.defaultOpt,
                subDefaultOptions = ClassObj.prototype.defaultOpt;

            ClassObj.prototype.defaultOpt = $.extend( {}, parentDefaultOptions, subDefaultOptions || {} );

        }
        return ClassObj
    }

    var _guid = 1;

    function mergeToJQ(ClassObj, className) {
        $[_prefix + className] = ClassObj;
        $.fn[_prefix + className] = function (opt) {
            var result, args = Array.prototype.slice.call(arguments, 1);

            this.each(function (i, el) {
                var $this = $(el);
                var obj = $this.edui();
                if (!obj) {
                    ClassObj(!opt || !$.isPlainObject(opt) ? {} : opt, $this);
                    $this.edui(obj)
                }
                if ($.type(opt) == 'string') {
                    if (opt == 'this') {
                        result = obj;
                    } else {
                        result = obj[opt].apply(obj, args);
                        if (result !== obj && result !== undefined) {
                            return false;
                        }
                        result = null;
                    }

                }
            });

            return result !== null ? result : this;
        }
    }

    UM.ui = {
        define: function (className, properties, supperClass) {
            var ClassObj = UM.ui[className] = _createClass(function (options, $el) {
                    var _obj = function () {
                    };
                    $.extend(_obj.prototype, ClassObj.prototype, {
                            guid: className + _guid++,
                            widgetName: className
                        }
                    );
                    var obj = new _obj;
                    if ($.type(options) == 'string') {
                        obj.init && obj.init({});
                        obj.root().edui(obj);
                        obj.root().find('a').click(function (evt) {
                            evt.preventDefault()
                        });
                        return obj.root()[_prefix + className].apply(obj.root(), arguments)
                    } else {
                        $el && obj.root($el);
                        obj.init && obj.init(!options || $.isPlainObject(options) ? $.extend2(options || {}, obj.defaultOpt || {}, true) : options);
                        try{
                            obj.root().find('a').click(function (evt) {
                                evt.preventDefault()
                            });
                        }catch(e){
                        }

                        return obj.root().edui(obj);
                    }

                },properties, supperClass);

            mergeToJQ(ClassObj, className);
        }
    };

    $(function () {
        $(document).on('click mouseup mousedown dblclick mouseover', function (evt) {
            $.each(_eventHandler, function (i, obj) {
                if (obj.evtname == evt.type) {
                    $.each(obj.$els, function (i, $el) {
                        if ($el[0] !== evt.target && !$.contains($el[0], evt.target)) {
                            obj.handler(evt);
                        }
                    })
                }
            })
        })
    })
})(jQuery);
//button 绫�
UM.ui.define('button', {
    tpl: '<<%if(!texttype){%>div class="edui-btn edui-btn-<%=icon%> <%if(name){%>edui-btn-name-<%=name%><%}%>" unselectable="on" onmousedown="return false" <%}else{%>a class="edui-text-btn"<%}%><% if(title) {%> data-original-title="<%=title%>" <%};%>> ' +
        '<% if(icon) {%><div unselectable="on" class="edui-icon-<%=icon%> edui-icon"></div><% }; %><%if(text) {%><span unselectable="on" onmousedown="return false" class="edui-button-label"><%=text%></span><%}%>' +
        '<%if(caret && text){%><span class="edui-button-spacing"></span><%}%>' +
        '<% if(caret) {%><span unselectable="on" onmousedown="return false" class="edui-caret"></span><% };%></<%if(!texttype){%>div<%}else{%>a<%}%>>',
    defaultOpt: {
        text: '',
        title: '',
        icon: '',
        width: '',
        caret: false,
        texttype: false,
        click: function () {
        }
    },
    init: function (options) {
        var me = this;

        me.root($($.parseTmpl(me.tpl, options)))
            .click(function (evt) {
                me.wrapclick(options.click, evt)
            });

        me.root().hover(function () {
            if(!me.root().hasClass("disabled")){
                me.root().toggleClass('hover')
            }
        })

        return me;
    },
    wrapclick: function (fn, evt) {
        if (!this.disabled()) {
            this.root().trigger('wrapclick');
            $.proxy(fn, this, evt)()
        }
        return this;
    },
    label: function (text) {
        if (text === undefined) {
            return this.root().find('.edui-button-label').text();
        } else {
            this.root().find('.edui-button-label').text(text);
            return this;
        }
    },
    disabled: function (state) {
        if (state === undefined) {
            return this.root().hasClass('disabled')
        }
        this.root().toggleClass('disabled', state);
        if(this.root().hasClass('disabled')){
            this.root().removeClass('hover')
        }
        return this;
    },
    active: function (state) {
        if (state === undefined) {
            return this.root().hasClass('active')
        }
        this.root().toggleClass('active', state)

        return this;
    },
    mergeWith: function ($obj) {
        var me = this;
        me.data('$mergeObj', $obj);
        $obj.edui().data('$mergeObj', me.root());
        if (!$.contains(document.body, $obj[0])) {
            $obj.appendTo(me.root());
        }
        me.on('click',function () {
            me.wrapclick(function () {
                $obj.edui().show();
            })
        }).register('click', me.root(), function (evt) {
                $obj.hide()
            });
    }
});
//toolbar 绫�
(function () {
    UM.ui.define('toolbar', {
        tpl: '<div class="edui-toolbar"  ><div class="edui-btn-toolbar" unselectable="on" onmousedown="return false"  ></div></div>'
          ,
        init: function () {
            var $root = this.root($(this.tpl));
            this.data('$btnToolbar', $root.find('.edui-btn-toolbar'))
        },
        appendToBtnmenu : function(data){
            var $cont = this.data('$btnToolbar');
            data = $.isArray(data) ? data : [data];
            $.each(data,function(i,$item){
                $cont.append($item)
            })
        }
    });
})();

//menu 绫�
UM.ui.define('menu',{
    show : function($obj,dir,fnname,topOffset,leftOffset){

        fnname = fnname || 'position';
        if(this.trigger('beforeshow') === false){
            return;
        }else{
            this.root().css($.extend({display:'block'},$obj ? {
                top : $obj[fnname]().top + ( dir == 'right' ? 0 : $obj.outerHeight()) - (topOffset || 0),
                left : $obj[fnname]().left + (dir == 'right' ?  $obj.outerWidth() : 0) -  (leftOffset || 0)
            }:{}))
            this.trigger('aftershow');
        }
    },
    hide : function(all){
        var $parentmenu;
        if(this.trigger('beforehide') === false){
            return;
        } else {

            if($parentmenu = this.root().data('parentmenu')){
                if($parentmenu.data('parentmenu')|| all)
                    $parentmenu.edui().hide();
            }
            this.root().css('display','none');
            this.trigger('afterhide');
        }
    },
    attachTo : function($obj){
        var me = this;
        if(!$obj.data('$mergeObj')){
            $obj.data('$mergeObj',me.root());
            $obj.on('wrapclick',function(evt){
                me.show()
            });
            me.register('click',$obj,function(evt){
               me.hide()
            });
            me.data('$mergeObj',$obj)
        }
    }
});
//dropmenu 绫�
UM.ui.define('dropmenu', {
    tmpl: '<ul class="edui-dropdown-menu" aria-labelledby="dropdownMenu" >' +
        '<%for(var i=0,ci;ci=data[i++];){%>' +
        '<%if(ci.divider){%><li class="edui-divider"></li><%}else{%>' +
        '<li <%if(ci.active||ci.disabled){%>class="<%= ci.active|| \'\' %> <%=ci.disabled||\'\' %>" <%}%> data-value="<%= ci.value%>">' +
        '<a href="#" tabindex="-1"><em class="edui-dropmenu-checkbox"><i class="edui-icon-ok"></i></em><%= ci.label%></a>' +
        '</li><%}%>' +
        '<%}%>' +
        '</ul>',
    defaultOpt: {
        data: [],
        click: function () {
        }
    },
    init: function (options) {
        var me = this;
        var eventName = {
            click: 1,
            mouseover: 1,
            mouseout: 1
        };
        this.root($($.parseTmpl(this.tmpl, options))).on('click', 'li[class!="disabled divider dropdown-submenu"]',function (evt) {
            $.proxy(options.click, me, evt, $(this).data('value'), $(this))()
        }).find('li').each(function (i, el) {
                var $this = $(this);
                if (!$this.hasClass("disabled divider dropdown-submenu")) {
                    var data = options.data[i];
                    $.each(eventName, function (k) {
                        data[k] && $this[k](function (evt) {
                            $.proxy(data[k], el)(evt, data, me.root)
                        })
                    })
                }
            })

    },
    disabled: function (cb) {
        $('li[class!=divider]', this.root()).each(function () {
            var $el = $(this);
            if (cb === true) {
                $el.addClass('disabled')
            } else if ($.isFunction(cb)) {
                $el.toggleClass('disabled', cb(li))
            } else {
                $el.removeClass('disabled')
            }

        });
    },
    val: function (val) {
        var currentVal;
        $('li[class!="divider disabled dropdown-submenu"]', this.root()).each(function () {
            var $el = $(this);
            if (val === undefined) {
                if ($el.find('em.edui-dropmenu-checked').length) {
                    currentVal = $el.data('value');
                    return false
                }
            } else {
                $el.find('em').toggleClass('edui-dropmenu-checked', $el.data('value') == val)
            }
        });
        if (val === undefined) {
            return currentVal
        }
    },
    addSubmenu: function (label, menu, index) {
        index = index || 0;

        var $list = $('li[class!=divider]', this.root());
        var $node = $('<li class="dropdown-submenu"><a tabindex="-1" href="#">' + label + '</a></li>').append(menu);

        if (index >= 0 && index < $list.length) {
            $node.insertBefore($list[index]);
        } else if (index < 0) {
            $node.insertBefore($list[0]);
        } else if (index >= $list.length) {
            $node.appendTo($list);
        }
    }
}, 'menu');
//splitbutton 绫�
///import button
UM.ui.define('splitbutton',{
    tpl :'<div class="edui-splitbutton <%if (name){%>edui-splitbutton-<%= name %><%}%>"  unselectable="on" <%if(title){%>data-original-title="<%=title%>"<%}%>><div class="edui-btn"  unselectable="on" ><%if(icon){%><div  unselectable="on" class="edui-icon-<%=icon%> edui-icon"></div><%}%><%if(text){%><%=text%><%}%></div>'+
            '<div  unselectable="on" class="edui-btn edui-dropdown-toggle" >'+
                '<div  unselectable="on" class="edui-caret"><\/div>'+
            '</div>'+
        '</div>',
    defaultOpt:{
        text:'',
        title:'',
        click:function(){}
    },
    init : function(options){
        var me = this;
        me.root( $($.parseTmpl(me.tpl,options)));
        me.root().find('.edui-btn:first').click(function(evt){
            if(!me.disabled()){
                $.proxy(options.click,me)();
            }
        });
        me.root().find('.edui-dropdown-toggle').click(function(){
            if(!me.disabled()){
                me.trigger('arrowclick')
            }
        });
        me.root().hover(function () {
            if(!me.root().hasClass("disabled")){
                me.root().toggleClass('hover')
            }
        });

        return me;
    },
    wrapclick:function(fn,evt){
        if(!this.disabled()){
            $.proxy(fn,this,evt)()
        }
        return this;
    },
    disabled : function(state){
        if(state === undefined){
            return this.root().hasClass('disabled')
        }
        this.root().toggleClass('disabled',state).find('.edui-btn').toggleClass('disabled',state);
        return this;
    },
    active:function(state){
        if(state === undefined){
            return this.root().hasClass('active')
        }
        this.root().toggleClass('active',state).find('.edui-btn:first').toggleClass('active',state);
        return this;
    },
    mergeWith:function($obj){
        var me = this;
        me.data('$mergeObj',$obj);
        $obj.edui().data('$mergeObj',me.root());
        if(!$.contains(document.body,$obj[0])){
            $obj.appendTo(me.root());
        }
        me.root().delegate('.edui-dropdown-toggle','click',function(){
            me.wrapclick(function(){
                $obj.edui().show();
            })
        });
        me.register('click',me.root().find('.edui-dropdown-toggle'),function(evt){
            $obj.hide()
        });
    }
});
/**
 * Created with JetBrains PhpStorm.
 * User: hn
 * Date: 13-7-10
 * Time: 涓嬪崍3:07
 * To change this template use File | Settings | File Templates.
 */
UM.ui.define('colorsplitbutton',{

    tpl : '<div class="edui-splitbutton <%if (name){%>edui-splitbutton-<%= name %><%}%>"  unselectable="on" <%if(title){%>data-original-title="<%=title%>"<%}%>><div class="edui-btn"  unselectable="on" ><%if(icon){%><div  unselectable="on" class="edui-icon-<%=icon%> edui-icon"></div><%}%><div class="edui-splitbutton-color-label" <%if (color) {%>style="background: <%=color%>"<%}%>></div><%if(text){%><%=text%><%}%></div>'+
            '<div  unselectable="on" class="edui-btn edui-dropdown-toggle" >'+
            '<div  unselectable="on" class="edui-caret"><\/div>'+
            '</div>'+
            '</div>',
    defaultOpt: {
        color: ''
    },
    init: function( options ){

        var me = this;

        me.supper.init.call( me, options );

    },
    colorLabel: function(){
        return this.root().find('.edui-splitbutton-color-label');
    }

}, 'splitbutton');
//popup 绫�
UM.ui.define('popup', {
    tpl: '<div class="edui-dropdown-menu edui-popup"'+
        '<%if(!<%=stopprop%>){%>onmousedown="return false"<%}%>'+
        '><div class="edui-popup-body" unselectable="on" onmousedown="return false"><%=subtpl%></div>' +
        '<div class="edui-popup-caret"></div>' +
        '</div>',
    defaultOpt: {
        stopprop:false,
        subtpl: '',
        width: '',
        height: ''
    },
    init: function (options) {
        this.root($($.parseTmpl(this.tpl, options)));
        return this;
    },
    mergeTpl: function (data) {
        return $.parseTmpl(this.tpl, {subtpl: data});
    },
    show: function ($obj, posObj) {
        if (!posObj) posObj = {};

        var fnname = posObj.fnname || 'position';
        if (this.trigger('beforeshow') === false) {
            return;
        } else {
            this.root().css($.extend({display: 'block'}, $obj ? {
                top: $obj[fnname]().top + ( posObj.dir == 'right' ? 0 : $obj.outerHeight()) - (posObj.offsetTop || 0),
                left: $obj[fnname]().left + (posObj.dir == 'right' ? $obj.outerWidth() : 0) - (posObj.offsetLeft || 0),
                position: 'absolute'
            } : {}));

            this.root().find('.edui-popup-caret').css({
                top: posObj.caretTop || 0,
                left: posObj.caretLeft || 0,
                position: 'absolute'
            }).addClass(posObj.caretDir || "up")

        }
        this.trigger("aftershow");
    },
    hide: function () {
        this.root().css('display', 'none');
        this.trigger('afterhide')
    },
    attachTo: function ($obj, posObj) {
        var me = this
        if (!$obj.data('$mergeObj')) {
            $obj.data('$mergeObj', me.root());
            $obj.on('wrapclick', function (evt) {
                me.show($obj, posObj)
            });
            me.register('click', $obj, function (evt) {
                me.hide()
            });
            me.data('$mergeObj', $obj)
        }
    },
    getBodyContainer: function () {
        return this.root().find(".edui-popup-body");
    }
});
//scale 绫�
UM.ui.define('scale', {
    tpl: '<div class="edui-scale" unselectable="on">' +
        '<span class="edui-scale-hand0"></span>' +
        '<span class="edui-scale-hand1"></span>' +
        '<span class="edui-scale-hand2"></span>' +
        '<span class="edui-scale-hand3"></span>' +
        '<span class="edui-scale-hand4"></span>' +
        '<span class="edui-scale-hand5"></span>' +
        '<span class="edui-scale-hand6"></span>' +
        '<span class="edui-scale-hand7"></span>' +
        '</div>',
    defaultOpt: {
        $doc: $(document),
        $wrap: $(document)
    },
    init: function (options) {
        if(options.$doc) this.defaultOpt.$doc = options.$doc;
        if(options.$wrap) this.defaultOpt.$wrap = options.$wrap;
        this.root($($.parseTmpl(this.tpl, options)));
        this.initStyle();
        this.startPos = this.prePos = {x: 0, y: 0};
        this.dragId = -1;
        return this;
    },
    initStyle: function () {
        utils.cssRule('scale', '.edui-scale{display:none;position:absolute;border:1px solid #38B2CE;cursor:hand;}' +
            '.edui-scale span{position:absolute;left:0;top:0;width:7px;height:7px;overflow:hidden;font-size:0px;display:block;background-color:#3C9DD0;}'
            + '.edui-scale .edui-scale-hand0{cursor:nw-resize;top:0;margin-top:-4px;left:0;margin-left:-4px;}'
            + '.edui-scale .edui-scale-hand1{cursor:n-resize;top:0;margin-top:-4px;left:50%;margin-left:-4px;}'
            + '.edui-scale .edui-scale-hand2{cursor:ne-resize;top:0;margin-top:-4px;left:100%;margin-left:-3px;}'
            + '.edui-scale .edui-scale-hand3{cursor:w-resize;top:50%;margin-top:-4px;left:0;margin-left:-4px;}'
            + '.edui-scale .edui-scale-hand4{cursor:e-resize;top:50%;margin-top:-4px;left:100%;margin-left:-3px;}'
            + '.edui-scale .edui-scale-hand5{cursor:sw-resize;top:100%;margin-top:-3px;left:0;margin-left:-4px;}'
            + '.edui-scale .edui-scale-hand6{cursor:s-resize;top:100%;margin-top:-3px;left:50%;margin-left:-4px;}'
            + '.edui-scale .edui-scale-hand7{cursor:se-resize;top:100%;margin-top:-3px;left:100%;margin-left:-3px;}');
    },
    _eventHandler: function (e) {
        var me = this,
            $doc = me.defaultOpt.$doc;
        switch (e.type) {
            case 'mousedown':
                var hand = e.target || e.srcElement, hand;
                if (hand.className.indexOf('edui-scale-hand') != -1) {
                    me.dragId = hand.className.slice(-1);
                    me.startPos.x = me.prePos.x = e.clientX;
                    me.startPos.y = me.prePos.y = e.clientY;
                    $doc.bind('mousemove', $.proxy(me._eventHandler, me));
                }
                break;
            case 'mousemove':
                if (me.dragId != -1) {
                    me.updateContainerStyle(me.dragId, {x: e.clientX - me.prePos.x, y: e.clientY - me.prePos.y});
                    me.prePos.x = e.clientX;
                    me.prePos.y = e.clientY;
                    me.updateTargetElement();
                }
                break;
            case 'mouseup':
                if (me.dragId != -1) {
                    me.dragId = -1;
                    me.updateTargetElement();
                    var $target = me.data('$scaleTarget');
                    if ($target.parent()) me.attachTo(me.data('$scaleTarget'));
                }
                $doc.unbind('mousemove', $.proxy(me._eventHandler, me));
                break;
            default:
                break;
        }
    },
    updateTargetElement: function () {
        var me = this,
            $root = me.root(),
            $target = me.data('$scaleTarget');
        $target.css({width: $root.width(), height: $root.height()});
        me.attachTo($target);
    },
    updateContainerStyle: function (dir, offset) {
        var me = this,
            $dom = me.root(),
            tmp,
            rect = [
                //[left, top, width, height]
                [0, 0, -1, -1],
                [0, 0, 0, -1],
                [0, 0, 1, -1],
                [0, 0, -1, 0],
                [0, 0, 1, 0],
                [0, 0, -1, 1],
                [0, 0, 0, 1],
                [0, 0, 1, 1]
            ];

        if (rect[dir][0] != 0) {
            tmp = parseInt($dom.offset().left) + offset.x;
            $dom.css('left', me._validScaledProp('left', tmp));
        }
        if (rect[dir][1] != 0) {
            tmp = parseInt($dom.offset().top) + offset.y;
            $dom.css('top', me._validScaledProp('top', tmp));
        }
        if (rect[dir][2] != 0) {
            tmp = $dom.width() + rect[dir][2] * offset.x;
            $dom.css('width', me._validScaledProp('width', tmp));
        }
        if (rect[dir][3] != 0) {
            tmp = $dom.height() + rect[dir][3] * offset.y;
            $dom.css('height', me._validScaledProp('height', tmp));
        }
    },
    _validScaledProp: function (prop, value) {
        var $ele = this.root(),
            $wrap = this.defaultOpt.$doc,
            calc = function(val, a, b){
                return (val + a) > b ? b - a : value;
            };

        value = isNaN(value) ? 0 : value;
        switch (prop) {
            case 'left':
                return value < 0 ? 0 : calc(value, $ele.width(), $wrap.width());
            case 'top':
                return value < 0 ? 0 : calc(value, $ele.height(),$wrap.height());
            case 'width':
                return value <= 0 ? 1 : calc(value, $ele.offset().left, $wrap.width());
            case 'height':
                return value <= 0 ? 1 : calc(value, $ele.offset().top, $wrap.height());
        }
    },
    show: function ($obj) {
        var me = this;
        if ($obj) me.attachTo($obj);
        me.root().bind('mousedown', $.proxy(me._eventHandler, me));
        me.defaultOpt.$doc.bind('mouseup', $.proxy(me._eventHandler, me));
        me.root().show();
        me.trigger("aftershow");
    },
    hide: function () {
        var me = this;
        me.root().unbind('mousedown', $.proxy(me._eventHandler, me));
        me.defaultOpt.$doc.unbind('mouseup', $.proxy(me._eventHandler, me));
        me.root().hide();
        me.trigger('afterhide')
    },
    attachTo: function ($obj) {
        var me = this,
            imgPos = $obj.offset(),
            $root = me.root(),
            $wrap = me.defaultOpt.$wrap,
            posObj = $wrap.offset();

        me.data('$scaleTarget', $obj);
        me.root().css({
            position: 'absolute',
            width: $obj.width(),
            height: $obj.height(),
            left: imgPos.left - posObj.left - parseInt($wrap.css('border-left-width')) - parseInt($root.css('border-left-width')),
            top: imgPos.top - posObj.top - parseInt($wrap.css('border-top-width')) - parseInt($root.css('border-top-width'))
        });
    },
    getScaleTarget: function () {
        return this.data('$scaleTarget')[0];
    }
});
//colorpicker 绫�
UM.ui.define('colorpicker', {
    tpl: function (opt) {
        var COLORS = (
            'ffffff,000000,eeece1,1f497d,4f81bd,c0504d,9bbb59,8064a2,4bacc6,f79646,' +
                'f2f2f2,7f7f7f,ddd9c3,c6d9f0,dbe5f1,f2dcdb,ebf1dd,e5e0ec,dbeef3,fdeada,' +
                'd8d8d8,595959,c4bd97,8db3e2,b8cce4,e5b9b7,d7e3bc,ccc1d9,b7dde8,fbd5b5,' +
                'bfbfbf,3f3f3f,938953,548dd4,95b3d7,d99694,c3d69b,b2a2c7,92cddc,fac08f,' +
                'a5a5a5,262626,494429,17365d,366092,953734,76923c,5f497a,31859b,e36c09,' +
                '7f7f7f,0c0c0c,1d1b10,0f243e,244061,632423,4f6128,3f3151,205867,974806,' +
                'c00000,ff0000,ffc000,ffff00,92d050,00b050,00b0f0,0070c0,002060,7030a0,').split(',');

        var html = '<div unselectable="on" onmousedown="return false" class="edui-colorpicker<%if (name){%> edui-colorpicker-<%=name%><%}%>" >' +
            '<table unselectable="on" onmousedown="return false">' +
            '<tr><td colspan="10">'+opt.lang_themeColor+'</td> </tr>' +
            '<tr class="edui-colorpicker-firstrow" >';

        for (var i = 0; i < COLORS.length; i++) {
            if (i && i % 10 === 0) {
                html += '</tr>' + (i == 60 ? '<tr><td colspan="10">'+opt.lang_standardColor+'</td></tr>' : '') + '<tr' + (i == 60 ? ' class="edui-colorpicker-firstrow"' : '') + '>';
            }
            html += i < 70 ? '<td><a unselectable="on" onmousedown="return false" title="' + COLORS[i] + '" class="edui-colorpicker-colorcell"' +
                ' data-color="#' + COLORS[i] + '"' +
                ' style="background-color:#' + COLORS[i] + ';border:solid #ccc;' +
                (i < 10 || i >= 60 ? 'border-width:1px;' :
                    i >= 10 && i < 20 ? 'border-width:1px 1px 0 1px;' :
                        'border-width:0 1px 0 1px;') +
                '"' +
                '></a></td>' : '';
        }
        html += '</tr></table></div>';
        return html;
    },
    init: function (options) {
        var me = this;
        me.root($($.parseTmpl(me.supper.mergeTpl(me.tpl(options)),options)));

        me.root().on("click",function (e) {
            me.trigger('pickcolor',  $(e.target).data('color'));
        });
    }
}, 'popup');
/**
 * Created with JetBrains PhpStorm.
 * User: hn
 * Date: 13-5-29
 * Time: 涓嬪崍8:01
 * To change this template use File | Settings | File Templates.
 */

(function(){

    var widgetName = 'combobox',
        itemClassName = 'edui-combobox-item',
        HOVER_CLASS = 'edui-combobox-item-hover',
        ICON_CLASS = 'edui-combobox-checked-icon',
        labelClassName = 'edui-combobox-item-label';

    UM.ui.define( widgetName, ( function(){

        return {
            tpl: "<ul class=\"dropdown-menu edui-combobox-menu<%if (comboboxName!=='') {%> edui-combobox-<%=comboboxName%><%}%>\" unselectable=\"on\" onmousedown=\"return false\" role=\"menu\" aria-labelledby=\"dropdownMenu\">" +
                "<%if(autoRecord) {%>" +
                "<%for( var i=0, len = recordStack.length; i<len; i++ ) {%>" +
                "<%var index = recordStack[i];%>" +
                "<li class=\"<%=itemClassName%><%if( selected == index ) {%> edui-combobox-checked<%}%>\" data-item-index=\"<%=index%>\" unselectable=\"on\" onmousedown=\"return false\">" +
                "<span class=\"edui-combobox-icon\" unselectable=\"on\" onmousedown=\"return false\"></span>" +
                "<label class=\"<%=labelClassName%>\" style=\"<%=itemStyles[ index ]%>\" unselectable=\"on\" onmousedown=\"return false\"><%=items[index]%></label>" +
                "</li>" +
                "<%}%>" +
                "<%if( i ) {%>" +
                "<li class=\"edui-combobox-item-separator\"></li>" +
                "<%}%>" +
                "<%}%>" +
                "<%for( var i=0, label; label = items[i]; i++ ) {%>" +
                "<li class=\"<%=itemClassName%><%if( selected == i ) {%> edui-combobox-checked<%}%> edui-combobox-item-<%=i%>\" data-item-index=\"<%=i%>\" unselectable=\"on\" onmousedown=\"return false\">" +
                "<span class=\"edui-combobox-icon\" unselectable=\"on\" onmousedown=\"return false\"></span>" +
                "<label class=\"<%=labelClassName%>\" style=\"<%=itemStyles[ i ]%>\" unselectable=\"on\" onmousedown=\"return false\"><%=label%></label>" +
                "</li>" +
                "<%}%>" +
                "</ul>",
            defaultOpt: {
                //璁板綍鏍堝垵濮嬪垪琛�
                recordStack: [],
                //鍙敤椤瑰垪琛�
                items: [],
		        //item瀵瑰簲鐨勫€煎垪琛�
                value: [],
                comboboxName: '',
                selected: '',
                //鑷姩璁板綍
                autoRecord: true,
                //鏈€澶氳褰曟潯鏁�
                recordCount: 5
            },
            init: function( options ){

                var me = this;

                $.extend( me._optionAdaptation( options ), me._createItemMapping( options.recordStack, options.items ), {
                    itemClassName: itemClassName,
                    iconClass: ICON_CLASS,
                    labelClassName: labelClassName
                } );

                this._transStack( options );

                me.root( $( $.parseTmpl( me.tpl, options ) ) );

                this.data( 'options', options ).initEvent();

            },
            initEvent: function(){

                var me = this;

                me.initSelectItem();

                this.initItemActive();

            },
            /**
             * 鍒濆鍖栭€夋嫨椤�
             */
            initSelectItem: function(){

                var me = this,
                    labelClass = "."+labelClassName;

                me.root().delegate('.' + itemClassName, 'click', function(){

                    var $li = $(this),
                        index = $li.attr('data-item-index');

                    me.trigger('comboboxselect', {
                        index: index,
                        label: $li.find(labelClass).text(),
                        value: me.data('options').value[ index ]
                    }).select( index );

                    me.hide();

                    return false;

                });

            },
            initItemActive: function(){
                var fn = {
                    mouseenter: 'addClass',
                    mouseleave: 'removeClass'
                };
                if ($.IE6) {
                    this.root().delegate( '.'+itemClassName,  'mouseenter mouseleave', function( evt ){
                        $(this)[ fn[ evt.type ] ]( HOVER_CLASS );
                    }).one('afterhide', function(){
                    });
                }
            },
            /**
             * 閫夋嫨缁欏畾绱㈠紩鐨勯」
             * @param index 椤圭储寮�
             * @returns {*} 濡傛灉瀛樺湪瀵瑰簲绱㈠紩鐨勯」锛屽垯杩斿洖璇ラ」锛涘惁鍒欒繑鍥瀗ull
             */
            select: function( index ){

                var itemCount = this.data('options').itemCount,
                    items = this.data('options').autowidthitem;

                if ( items && !items.length ) {
                    items = this.data('options').items;
                }

                if( itemCount == 0 ) {
                    return null;
                }

                if( index < 0 ) {

                    index = itemCount + index % itemCount;

                } else if ( index >= itemCount ) {

                    index = itemCount-1;

                }

                this.trigger( 'changebefore', items[ index ] );

                this._update( index );

                this.trigger( 'changeafter', items[ index ] );

                return null;

            },
            selectItemByLabel: function( label ){

                var itemMapping = this.data('options').itemMapping,
                    me = this,
                    index = null;

                !$.isArray( label ) && ( label = [ label ] );

                $.each( label, function( i, item ){

                    index = itemMapping[ item ];

                    if( index !== undefined ) {

                        me.select( index );
                        return false;

                    }

                } );

            },
            /**
             * 杞崲璁板綍鏍�
             */
            _transStack: function( options ) {

                var temp = [],
                    itemIndex = -1,
                    selected = -1;

                $.each( options.recordStack, function( index, item ){

                    itemIndex = options.itemMapping[ item ];

                    if( $.isNumeric( itemIndex ) ) {

                        temp.push( itemIndex );

                        //selected鐨勫悎娉曟€ф娴�
                        if( item == options.selected ) {
                            selected = itemIndex;
                        }

                    }

                } );

                options.recordStack = temp;
                options.selected = selected;
                temp = null;

            },
            _optionAdaptation: function( options ) {

                if( !( 'itemStyles' in options ) ) {

                    options.itemStyles = [];

                    for( var i = 0, len = options.items.length; i < len; i++ ) {
                        options.itemStyles.push('');
                    }

                }

                options.autowidthitem = options.autowidthitem || options.items;
                options.itemCount = options.items.length;

                return options;

            },
            _createItemMapping: function( stackItem, items ){

                var temp = {},
                    result = {
                        recordStack: [],
                        mapping: {}
                    };

                $.each( items, function( index, item ){
                    temp[ item ] = index;
                } );

                result.itemMapping = temp;

                $.each( stackItem, function( index, item ){

                    if( temp[ item ] !== undefined ) {
                        result.recordStack.push( temp[ item ] );
                        result.mapping[ item ] = temp[ item ];
                    }

                } );

                return result;

            },
            _update: function ( index ) {

                var options = this.data("options"),
                    newStack = [],
                    newChilds = null;

                $.each( options.recordStack, function( i, item ){

                    if( item != index ) {
                        newStack.push( item );
                    }

                } );

                //鍘嬪叆鏈€鏂扮殑璁板綍
                newStack.unshift( index );

                if( newStack.length > options.recordCount ) {
                    newStack.length = options.recordCount;
                }

                options.recordStack = newStack;
                options.selected = index;

                newChilds = $( $.parseTmpl( this.tpl, options ) );

                //閲嶆柊娓叉煋
                this.root().html( newChilds.html() );

                newChilds = null;
                newStack = null;

            }
        };

    } )(), 'menu' );

})();

/**
 * Combox 鎶借薄鍩虹被
 * User: hn
 * Date: 13-5-29
 * Time: 涓嬪崍8:01
 * To change this template use File | Settings | File Templates.
 */

(function(){

    var widgetName = 'buttoncombobox';

    UM.ui.define( widgetName, ( function(){

        return {
            defaultOpt: {
                //鎸夐挳鍒濆鏂囧瓧
                label: '',
                title: ''
            },
            init: function( options ) {

                var me = this;

                var btnWidget = $.eduibutton({
                    caret: true,
                    name: options.comboboxName,
                    title: options.title,
                    text: options.label,
                    click: function(){
                        me.show( this.root() );
                    }
                });

                me.supper.init.call( me, options );

                //鐩戝惉change锛� 鏀瑰彉button鏄剧ず鍐呭
                me.on('changebefore', function( e, label ){
                    btnWidget.eduibutton('label', label );
                });

                me.data( 'button', btnWidget );

                me.attachTo(btnWidget)

            },
            button: function(){
                return this.data( 'button' );
            }
        }

    } )(), 'combobox' );

})();

/*modal 绫�*/
UM.ui.define('modal', {
    tpl: '<div class="edui-modal" tabindex="-1" >' +
        '<div class="edui-modal-header">' +
        '<div class="edui-close" data-hide="modal"></div>' +
        '<h3 class="edui-title"><%=title%></h3>' +
        '</div>' +
        '<div class="edui-modal-body"  style="<%if(width){%>width:<%=width%>px;<%}%>' +
        '<%if(height){%>height:<%=height%>px;<%}%>">' +
        ' </div>' +
        '<% if(cancellabel || oklabel) {%>' +
        '<div class="edui-modal-footer">' +
        '<div class="edui-modal-tip"></div>' +
        '<%if(oklabel){%><div class="edui-btn edui-btn-primary" data-ok="modal"><%=oklabel%></div><%}%>' +
        '<%if(cancellabel){%><div class="edui-btn" data-hide="modal"><%=cancellabel%></div><%}%>' +
        '</div>' +
        '<%}%></div>',
    defaultOpt: {
        title: "",
        cancellabel: "",
        oklabel: "",
        width: '',
        height: '',
        backdrop: true,
        keyboard: true
    },
    init: function (options) {
        var me = this;

        me.root($($.parseTmpl(me.tpl, options || {})));

        me.data("options", options);
        if (options.okFn) {
            me.on('ok', $.proxy(options.okFn, me))
        }
        if (options.cancelFn) {
            me.on('beforehide', $.proxy(options.cancelFn, me))
        }

        me.root().delegate('[data-hide="modal"]', 'click', $.proxy(me.hide, me))
            .delegate('[data-ok="modal"]', 'click', $.proxy(me.ok, me));

        $('[data-hide="modal"],[data-ok="modal"]',me.root()).hover(function(){
            $(this).toggleClass('hover')
        });
    },
    toggle: function () {
        var me = this;
        return me[!me.data("isShown") ? 'show' : 'hide']();
    },
    show: function () {

        var me = this;

        me.trigger("beforeshow");

        if (me.data("isShown")) return;

        me.data("isShown", true);

        me.escape();

        me.backdrop(function () {
            me.autoCenter();
            me.root()
                .show()
                .focus()
                .trigger('aftershow');
        })
    },
    showTip: function ( text ) {
        $( '.edui-modal-tip', this.root() ).html( text ).fadeIn();
    },
    hideTip: function ( text ) {
        $( '.edui-modal-tip', this.root() ).fadeOut( function (){
            $(this).html('');
        } );
    },
    autoCenter: function () {
        //ie6涓嬩笉鐢ㄥ鐞嗕簡
        !$.IE6 && this.root().css("margin-left", -(this.root().width() / 2));
    },
    hide: function () {
        var me = this;

        me.trigger("beforehide");

        if (!me.data("isShown")) return;

        me.data("isShown", false);

        me.escape();

        me.hideModal();
    },
    escape: function () {
        var me = this;
        if (me.data("isShown") && me.data("options").keyboard) {
            me.root().on('keyup', function (e) {
                e.which == 27 && me.hide();
            })
        }
        else if (!me.data("isShown")) {
            me.root().off('keyup');
        }
    },
    hideModal: function () {
        var me = this;
        me.root().hide();
        me.backdrop(function () {
            me.removeBackdrop();
            me.trigger('afterhide');
        })
    },
    removeBackdrop: function () {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null;
    },
    backdrop: function (callback) {
        var me = this;
        if (me.data("isShown") && me.data("options").backdrop) {
            me.$backdrop = $('<div class="edui-modal-backdrop" />').click(
                me.data("options").backdrop == 'static' ?
                    $.proxy(me.root()[0].focus, me.root()[0])
                    : $.proxy(me.hide, me)
            )
        }
        me.trigger('afterbackdrop');
        callback && callback();

    },
    attachTo: function ($obj) {
        var me = this
        if (!$obj.data('$mergeObj')) {

            $obj.data('$mergeObj', me.root());
            $obj.on('click', function () {
                me.toggle($obj)
            });
            me.data('$mergeObj', $obj)
        }
    },
    ok: function () {
        var me = this;
        me.trigger('beforeok');
        if (me.trigger("ok", me) === false) {
            return;
        }
        me.hide();
    },
    getBodyContainer: function () {
        return this.root().find('.edui-modal-body')
    }
});


/*tooltip 绫�*/
UM.ui.define('tooltip', {
    tpl: '<div class="edui-tooltip" unselectable="on" onmousedown="return false"><div class="edui-tooltip-arrow" unselectable="on" onmousedown="return false"></div><div class="edui-tooltip-inner" unselectable="on" onmousedown="return false"></div></div>',
    init: function (options) {
        var me = this;
        me.root($($.parseTmpl(me.tpl, options || {})));
    },
    content: function (e) {
        var me = this,
            title = $(e.currentTarget).attr("data-original-title");

        me.root().find('.edui-tooltip-inner')['text'](title);
    },
    position: function (e) {
        var me = this,
            $obj = $(e.currentTarget);

        me.root().css($.extend({display: 'block'}, $obj ? {
            top: $obj.outerHeight(),
            left: (($obj.outerWidth() - me.root().outerWidth()) / 2)
        } : {}))
    },
    show: function (e) {
        if ($(e.currentTarget).hasClass('disabled')) return;

        var me = this;
        me.content(e);
        me.root().appendTo($(e.currentTarget));
        me.position(e);
        me.root().css('display', 'block').addClass("in bottom")
    },
    hide: function () {
        var me = this;
        me.root().removeClass("in bottom").css('display', 'none')
    },
    attachTo: function ($obj) {
        var me = this;

        function tmp($obj) {
            var me = this;

            if (!$.contains(document.body, me.root()[0])) {
                me.root().appendTo($obj);
            }

            me.data('tooltip', me.root());

            $obj.each(function () {
                if ($(this).attr("data-original-title")) {
                    $(this).on('mouseenter', $.proxy(me.show, me))
                        .on('mouseleave click', $.proxy(me.hide, me))

                }
            });

        }

        if ($.type($obj) === "undefined") {
            $("[data-original-title]").each(function (i, el) {
                tmp.call(me, $(el));
            })

        } else {
            if (!$obj.data('tooltip')) {
                tmp.call(me, $obj);
            }
        }
    }
});

/*tab 绫�*/
UM.ui.define('tab', {
    init: function (options) {
        var me = this,
            slr = options.selector;

        if ($.type(slr)) {
            me.root($(slr, options.context));
            me.data("context", options.context);

            $(slr, me.data("context")).on('click', function (e) {
                me.show(e);
            });
        }
    },
    show: function (e) {

        var me = this,
            $cur = $(e.target),
            $ul = $cur.closest('ul'),
            selector,
            previous,
            $target,
            e;

        selector = $cur.attr('href');
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '');

        var $tmp = $cur.parent('li');

        if (!$tmp.length || $tmp.hasClass('active')) return;

        previous = $ul.find('.active:last a')[0];

        e = $.Event('beforeshow', {
            target: $cur[0],
            relatedTarget: previous
        });

        me.trigger(e);

        if (e.isDefaultPrevented()) return;

        $target = $(selector, me.data("context"));

        me.activate($cur.parent('li'), $ul);
        me.activate($target, $target.parent(), function () {
            me.trigger({
                type: 'aftershow', relatedTarget: previous
            })
        });
    },
    activate: function (element, container, callback) {
        if (element === undefined) {
            return $(".edui-tab-item.active",this.root()).index();
        }

        var $active = container.find('> .active');

        $active.removeClass('active');

        element.addClass('active');

        callback && callback();
    }
});


//button 绫�
UM.ui.define('separator', {
    tpl: '<div class="edui-separator" unselectable="on" onmousedown="return false" ></div>',
    init: function (options) {
        var me = this;
        me.root($($.parseTmpl(me.tpl, options)));
        return me;
    }
});
/**
 * @file adapter.js
 * @desc adapt ui to editor
 * @import core/Editor.js, core/utils.js
 */

(function () {
    var _editorUI = {},
        _editors = {},
        _readyFn = [],
        _activeWidget = null,
        _widgetData = {},
        _widgetCallBack = {},
        _cacheUI = {};

    utils.extend(UM, {
        defaultWidth : 500,
        defaultHeight : 500,
        registerUI: function (name, fn) {
            utils.each(name.split(/\s+/), function (uiname) {
                _editorUI[uiname] = fn;
            })
        },

        setEditor : function(editor){
            !_editors[editor.id] && (_editors[editor.id] = editor);
        },
        registerWidget : function(name,pro,cb){
            _widgetData[name] = $.extend2(pro,{
                $root : '',
                _preventDefault:false,
                root:function($el){
                    return this.$root || (this.$root = $el);
                },
                preventDefault:function(){
                    this._preventDefault = true;
                },
                clear:false
            });
            if(cb){
                _widgetCallBack[name] = cb;
            }
        },
        getWidgetData : function(name){
            return _widgetData[name]
        },
        setWidgetBody : function(name,$widget,editor){
            if(!editor._widgetData){
                editor._widgetData = {};
                editor.getWidgetData = function(name){
                    return this._widgetData[name];
                };
                editor.getWidgetCallback = function(widgetName){
                    return _widgetCallBack[widgetName];
                }
            }
            var pro = _widgetData[name];
            if(!pro){
                return null;
            }
            pro = editor._widgetData[name];
            if(!pro){
                pro = _widgetData[name];
                pro = editor._widgetData[name] = $.type(pro) == 'function' ? pro : utils.clone(pro);
            }

            pro.root($widget.edui().getBodyContainer());

            pro.initContent(editor,$widget);
            if(!pro._preventDefault){
                pro.initEvent(editor,$widget);
            }

            pro.width &&  $widget.width(pro.width);

            //涓哄洖璋冭繘琛屽弬鏁扮粦瀹�
            var cb = _widgetCallBack[name];
            if(cb && !cb.init){
                _widgetCallBack[name] = function(){
                   var args = Array.prototype.slice.call(arguments,0);
                   cb.apply(editor,[editor,$widget].concat(args));
                }
                _widgetCallBack[name].init = true;
            }

        },
        setActiveWidget : function($widget){
            _activeWidget = $widget;
        },
        getEditor: function (id, options) {
            return _editors[id] || (_editors[id] = this.createEditor(id, options))
        },
        clearCache : function(id){
            if ( _editors[id]) {
                delete  _editors[id]
            }
        },
        delEditor: function (id) {
            var editor;
            if (editor = _editors[id]) {
                editor.destroy();
            }
        },
        ready: function( fn ){
            _readyFn.push( fn );
        },
        createEditor: function (id, opt) {
            var editor = new UM.Editor(opt);
            var T = this;

            editor.langIsReady ? $.proxy(renderUI,T)() : editor.addListener("langReady", $.proxy(renderUI,T));
            function renderUI(){


                var $container = this.createUI('#' + id, editor);
                editor.key=id;
                editor.ready(function(){
                    $.each( _readyFn, function( index, fn ){
                        $.proxy( fn, editor )();
                    } );
                });
                var options = editor.options;
                if(options.initialFrameWidth){
                    options.minFrameWidth = options.initialFrameWidth
                }else{
                    options.minFrameWidth = options.initialFrameWidth = editor.$body.width() || UM.defaultWidth;
                }

                $container.css({
                    width: options.initialFrameWidth,
                    //zIndex:editor.getOpt('zIndex')
                });

                //ie6涓嬬紦瀛樺浘鐗�
                UM.browser.ie && UM.browser.version === 6 && document.execCommand("BackgroundImageCache", false, true);

                editor.render(id);


                //娣诲姞tooltip;
                $.eduitooltip && $.eduitooltip('attachTo').css('z-index',editor.getOpt('zIndex')+1);

                $container.find('a').click(function(evt){
                    evt.preventDefault()
                });

                editor.fireEvent("afteruiready");
            }

            return editor;

        },
        createUI: function (id, editor) {
            var $editorCont = $(id),
                $container = $('<div class="edui-container"><div class="edui-editor-body"></div></div>').insertBefore($editorCont);
            editor.$container = $container;
            editor.container = $container[0];

            editor.$body = $editorCont;

            //淇鍦╥e9+浠ヤ笂鐨勭増鏈腑锛岃嚜鍔ㄩ暱楂樻敹璧锋椂鐨勶紝娈嬪奖闂
            if(browser.ie && browser.ie9above){
                var $span = $('<span style="padding:0;margin:0;height:0;width:0"></span>');
                $span.insertAfter($container);
            }
            //鍒濆鍖栨敞鍐岀殑ui缁勪欢
            $.each(_editorUI,function(n,v){
                var widget = v.call(editor,n);
                if(widget){
                    _cacheUI[n] = widget;
                }
            });

            $container.find('.edui-editor-body').append($editorCont).before(this.createToolbar(editor.options, editor));

            $container.find('.edui-toolbar').append($('<div class="edui-dialog-container"></div>'));


            return $container;
        },
        createToolbar: function (options, editor) {
            var $toolbar = $.eduitoolbar(), toolbar = $toolbar.edui();
            //鍒涘缓涓嬫潵鑿滃崟鍒楄〃

            if (options.toolbar && options.toolbar.length) {
                var btns = [];
                $.each(options.toolbar,function(i,uiNames){
                    $.each(uiNames.split(/\s+/),function(index,name){
                        if(name == '|'){
                                $.eduiseparator && btns.push($.eduiseparator());
                        }else{
                            var ui = _cacheUI[name];
                            if(name=="fullscreen"){
                                ui&&btns.unshift(ui);
                            }else{
                                ui && btns.push(ui);
                            }
                        }

                    });
                    btns.length && toolbar.appendToBtnmenu(btns);
                });
            } else {
                $toolbar.find('.edui-btn-toolbar').remove()
            }
            return $toolbar;
        }

    })


})();



UM.registerUI('bold italic redo undo underline strikethrough superscript subscript insertorderedlist insertunorderedlist ' +
    'cleardoc selectall link unlink print preview justifyleft justifycenter justifyright justifyfull removeformat horizontal',
    function(name) {
        var me = this;
        var $btn = $.eduibutton({
            icon : name,
            click : function(){
                me.execCommand(name)
            },
            title: this.getLang('labelMap')[name] || ''
        });

        this.addListener('selectionchange',function(){
            var state = this.queryCommandState(name);
            $btn.edui().disabled(state == -1).active(state == 1)
        });
        return $btn;
    }
);


/**
 * 鍏ㄥ睆缁勪欢
 */

(function(){

    //鐘舵€佺紦瀛�
    var STATUS_CACHE = {},
    //鐘舵€佸€煎垪琛�
        STATUS_LIST = [ 'width', 'height', 'position', 'top', 'left', 'margin', 'padding', 'overflowX', 'overflowY' ],
        CONTENT_AREA_STATUS = {},
    //椤甸潰鐘舵€�
        DOCUMENT_STATUS = {},
        DOCUMENT_ELEMENT_STATUS = {},

        FULLSCREENS = {};


    UM.registerUI('fullscreen', function( name ){

        var me = this,
            $button = $.eduibutton({
                'icon': 'fullscreen',
                'title': (me.options.labelMap && me.options.labelMap[name]) || me.getLang("labelMap." + name),
                'click': function(){
                    //鍒囨崲
                    me.execCommand( name );
                }
            });

        me.addListener( "selectionchange", function () {

            var state = this.queryCommandState( name );
            $button.edui().disabled( state == -1 ).active( state == 1 );

        } );

        //鍒囨崲鑷冲叏灞�
        me.addListener('ready', function(){

            me.options.fullscreen && Fullscreen.getInstance( me ).toggle();

        });

        return $button;

    });

    UM.commands[ 'fullscreen' ] = {

        execCommand: function (cmdName) {

            Fullscreen.getInstance( this ).toggle();

        },
        queryCommandState: function (cmdName) {

            return this._edui_fullscreen_status;
        },
        notNeedUndo: 1

    };

    function Fullscreen( editor ) {

        var me = this;

        if( !editor ) {
            throw new Error('invalid params, notfound editor');
        }

        me.editor = editor;

        //璁板綍鍒濆鍖栫殑鍏ㄥ睆缁勪欢
        FULLSCREENS[ editor.uid ] = this;

        editor.addListener('destroy', function(){
            delete FULLSCREENS[ editor.uid ];
            me.editor = null;
        });

    }

    Fullscreen.prototype = {

        /**
         * 鍏ㄥ睆鐘舵€佸垏鎹�
         */
        toggle: function(){

            var editor = this.editor,
            //褰撳墠缂栬緫鍣ㄧ殑缂╂斁鐘舵€�
                _edui_fullscreen_status = this.isFullState();
            editor.fireEvent('beforefullscreenchange', !_edui_fullscreen_status );

            //鏇存柊鐘舵€�
            this.update( !_edui_fullscreen_status );

            !_edui_fullscreen_status ? this.enlarge() : this.revert();

            editor.fireEvent('afterfullscreenchange', !_edui_fullscreen_status );
            if(editor.body.contentEditable === 'true'){
                editor.fireEvent( 'fullscreenchanged', !_edui_fullscreen_status );
            }

            editor.fireEvent( 'selectionchange' );

        },
        /**
         * 鎵ц鏀惧ぇ
         */
        enlarge: function(){

            this.saveSataus();

            this.setDocumentStatus();

            this.resize();

        },
        /**
         * 鍏ㄥ睆杩樺師
         */
        revert: function(){

            //杩樺師CSS琛ㄨ揪寮�
            var options = this.editor.options,
                height = /%$/.test(options.initialFrameHeight) ?  '100%' : (options.initialFrameHeight - this.getStyleValue("padding-top")- this.getStyleValue("padding-bottom") - this.getStyleValue('border-width'));

            $.IE6 && this.getEditorHolder().style.setExpression('height', 'this.scrollHeight <= ' + height + ' ? "' + height + 'px" : "auto"');

            //杩樺師瀹瑰櫒鐘舵€�
            this.revertContainerStatus();

            this.revertContentAreaStatus();

            this.revertDocumentStatus();

        },
        /**
         * 鏇存柊鐘舵€�
         * @param isFull 褰撳墠鐘舵€佹槸鍚︽槸鍏ㄥ睆鐘舵€�
         */
        update: function( isFull ) {
            this.editor._edui_fullscreen_status = isFull;
        },
        /**
         * 璋冩暣褰撳墠缂栬緫鍣ㄧ殑澶у皬, 濡傛灉褰撳墠缂栬緫鍣ㄤ笉澶勪簬鍏ㄥ睆鐘舵€侊紝 鍒欎笉鍋氳皟鏁�
         */
        resize: function(){

            var $win = null,
                height = 0,
                width = 0,
                borderWidth = 0,
                paddingWidth = 0,
                editor = this.editor,
                me = this,
                bound = null,
                editorBody = null;

            if( !this.isFullState() ) {
                return;
            }

            $win = $( window );
            width = $win.width();
            height = $win.height();
            editorBody = this.getEditorHolder();
            //鏂囨湰缂栬緫鍖篵order瀹藉害
            borderWidth = parseInt( domUtils.getComputedStyle( editorBody, 'border-width' ), 10 ) || 0;
            //瀹瑰櫒border瀹藉害
            borderWidth += parseInt( domUtils.getComputedStyle( editor.container, 'border-width' ), 10 ) || 0;
            //瀹瑰櫒padding
            paddingWidth += parseInt( domUtils.getComputedStyle( editorBody, 'padding-left' ), 10 ) + parseInt( domUtils.getComputedStyle( editorBody, 'padding-right' ), 10 ) || 0;

            //骞叉帀css琛ㄨ揪寮�
            $.IE6 && editorBody.style.setExpression( 'height', null );

            bound = this.getBound();

            $( editor.container ).css( {
                width: width + 'px',
                height: height + 'px',
                position: !$.IE6 ? 'fixed' : 'absolute',
                top: bound.top,
                left: bound.left,
                margin: 0,
                padding: 0,
                overflowX: 'hidden',
                overflowY: 'hidden'
            } );

            $( editorBody ).css({
                width: width - 2*borderWidth - paddingWidth + 'px',
                height: height - 2*borderWidth - ( editor.options.withoutToolbar ? 0 : $( '.edui-toolbar', editor.container ).outerHeight() ) - $( '.edui-bottombar', editor.container).outerHeight() + 'px',
                overflowX: 'hidden',
                overflowY: 'auto'
            });

        },
        /**
         * 淇濆瓨鐘舵€�
         */
        saveSataus: function(){

            var styles = this.editor.container.style,
                tmp = null,
                cache = {};

            for( var i= 0, len = STATUS_LIST.length; i<len; i++ ) {

                tmp = STATUS_LIST[ i ];
                cache[ tmp ] = styles[ tmp ];

            }

            STATUS_CACHE[ this.editor.uid ] = cache;

            this.saveContentAreaStatus();
            this.saveDocumentStatus();

        },
        saveContentAreaStatus: function(){

            var $holder = $(this.getEditorHolder());

            CONTENT_AREA_STATUS[ this.editor.uid ] = {
                width: $holder.css("width"),
                overflowX: $holder.css("overflowX"),
                overflowY: $holder.css("overflowY"),
                height: $holder.css("height")
            };

        },
        /**
         * 淇濆瓨涓庢寚瀹歟ditor鐩稿叧鐨勯〉闈㈢殑鐘舵€�
         */
        saveDocumentStatus: function(){

            var $doc = $( this.getEditorDocumentBody() );

            DOCUMENT_STATUS[ this.editor.uid ] = {
                overflowX: $doc.css( 'overflowX' ),
                overflowY: $doc.css( 'overflowY' )
            };
            DOCUMENT_ELEMENT_STATUS[ this.editor.uid ] = {
                overflowX: $( this.getEditorDocumentElement() ).css( 'overflowX'),
                overflowY: $( this.getEditorDocumentElement() ).css( 'overflowY' )
            };

        },
        /**
         * 鎭㈠瀹瑰櫒鐘舵€�
         */
        revertContainerStatus: function(){
            $( this.editor.container ).css( this.getEditorStatus() );
        },
        /**
         * 鎭㈠缂栬緫鍖虹姸鎬�
         */
        revertContentAreaStatus: function(){
            var holder = this.getEditorHolder(),
                state = this.getContentAreaStatus();

            if ( this.supportMin() ) {
                delete state.height;
                holder.style.height = null;
            }

            $( holder ).css( state );
        },
        /**
         * 鎭㈠椤甸潰鐘舵€�
         */
        revertDocumentStatus: function() {

            var status = this.getDocumentStatus();
            $( this.getEditorDocumentBody() ).css( 'overflowX', status.body.overflowX );
            $( this.getEditorDocumentElement() ).css( 'overflowY', status.html.overflowY );

        },
        setDocumentStatus: function(){
            $(this.getEditorDocumentBody()).css( {
                overflowX: 'hidden',
                overflowY: 'hidden'
            } );
            $(this.getEditorDocumentElement()).css( {
                overflowX: 'hidden',
                overflowY: 'hidden'
            } );
        },
        /**
         * 妫€娴嬪綋鍓嶇紪杈戝櫒鏄惁澶勪簬鍏ㄥ睆鐘舵€佸叏灞忕姸鎬�
         * @returns {boolean} 鏄惁澶勪簬鍏ㄥ睆鐘舵€�
         */
        isFullState: function(){
            return !!this.editor._edui_fullscreen_status;
        },
        /**
         * 鑾峰彇缂栬緫鍣ㄧ姸鎬�
         */
        getEditorStatus: function(){
            return STATUS_CACHE[ this.editor.uid ];
        },
        getContentAreaStatus: function(){
            return CONTENT_AREA_STATUS[ this.editor.uid ];
        },
        getEditorDocumentElement: function(){
            return this.editor.container.ownerDocument.documentElement;
        },
        getEditorDocumentBody: function(){
            return this.editor.container.ownerDocument.body;
        },
        /**
         * 鑾峰彇缂栬緫鍖哄寘瑁瑰璞�
         */
        getEditorHolder: function(){
            return this.editor.body;
        },
        /**
         * 鑾峰彇缂栬緫鍣ㄧ姸鎬�
         * @returns {*}
         */
        getDocumentStatus: function(){
            return {
                'body': DOCUMENT_STATUS[ this.editor.uid ],
                'html': DOCUMENT_ELEMENT_STATUS[ this.editor.uid ]
            };
        },
        supportMin: function () {

            var node = null;

            if ( !this._support ) {

                node = document.createElement("div");

                this._support = "minWidth" in node.style;

                node = null;

            }

            return this._support;

        },
        getBound: function () {

            var tags = {
                    html: true,
                    body: true
                },
                result = {
                    top: 0,
                    left: 0
                },
                offsetParent = null;

            if ( !$.IE6 ) {
                return result;
            }

            offsetParent = this.editor.container.offsetParent;

            if( offsetParent && !tags[ offsetParent.nodeName.toLowerCase() ] ) {
                tags = offsetParent.getBoundingClientRect();
                result.top = -tags.top;
                result.left = -tags.left;
            }

            return result;

        },
        getStyleValue: function (attr) {
            return parseInt(domUtils.getComputedStyle( this.getEditorHolder() ,attr));
        }
    };


    $.extend( Fullscreen, {
        /**
         * 鐩戝惉resize
         */
        listen: function(){

            var timer = null;

            if( Fullscreen._hasFullscreenListener ) {
                return;
            }

            Fullscreen._hasFullscreenListener = true;

            $( window ).on( 'resize', function(){

                if( timer !== null ) {
                    window.clearTimeout( timer );
                    timer = null;
                }

                timer = window.setTimeout(function(){

                    for( var key in FULLSCREENS ) {
                        FULLSCREENS[ key ].resize();
                    }

                    timer = null;

                }, 50);

            } );

        },

        getInstance: function ( editor ) {

            if ( !FULLSCREENS[editor.uid  ] ) {
                new Fullscreen( editor );
            }

            return FULLSCREENS[editor.uid  ];

        }

    });

    //寮€濮嬬洃鍚�
    Fullscreen.listen();

})();
UM.registerUI('image insertvideo',function(name){

    var me = this, currentRange, $dialog,
        dialogUrl = {
            insertvideo: 'video'
        },
        curDialogUrl = dialogUrl[ name ] || name,
        opt = {
            title: (me.options.labelMap && me.options.labelMap[name]) || me.getLang("labelMap." + name),
            url: me.options.UMEDITOR_HOME_URL + 'dialogs/' + curDialogUrl + '/' + curDialogUrl + '.js'
        };

    var $btn = $.eduibutton({
        icon: name,
        title: this.getLang('labelMap')[name] || ''
    });
    //鍔犺浇妯＄増鏁版嵁
    utils.loadFile(document,{
        src: opt.url,
        tag: "script",
        type: "text/javascript",
        defer: "defer"
    },function(){
        //璋冩暣鏁版嵁
        var data = UM.getWidgetData(name);
        if(data.buttons){
            var ok = data.buttons.ok;
            if(ok){
                opt.oklabel = ok.label || me.getLang('ok');
                if(ok.exec){
                    opt.okFn = function(){
                        return $.proxy(ok.exec,null,me,$dialog)()
                    }
                }
            }
            var cancel = data.buttons.cancel;
            if(cancel){
                opt.cancellabel = cancel.label || me.getLang('cancel');
                if(cancel.exec){
                    opt.cancelFn = function(){
                        return $.proxy(cancel.exec,null,me,$dialog)()
                    }
                }
            }
        }
        data.width && (opt.width = data.width);
        data.height && (opt.height = data.height);

        $dialog = $.eduimodal(opt);

        $dialog.attr('id', 'edui-dialog-' + name)
            .find('.edui-modal-body').addClass('edui-dialog-' + name + '-body');

        $dialog.edui().on('beforehide',function () {
            var rng = me.selection.getRange();
            if (rng.equals(currentRange)) {
                rng.select()
            }
        }).on('beforeshow', function () {
                var $root = this.root(),
                    win = null,
                    offset = null;
                currentRange = me.selection.getRange();
                if (!$root.parent()[0]) {
                    me.$container.find('.edui-dialog-container').append($root);
                }

                //IE6涓� 鐗规畩澶勭悊, 閫氳繃璁＄畻杩涜瀹氫綅
                if( $.IE6 ) {

                    win = {
                        width: $( window ).width(),
                        height: $( window ).height()
                    };
                    offset = $root.parents(".edui-toolbar")[0].getBoundingClientRect();
                    $root.css({
                        position: 'absolute',
                        margin: 0,
                        left: ( win.width - $root.width() ) / 2 - offset.left,
                        top: 100 - offset.top
                    });

                }
                UM.setWidgetBody(name,$dialog,me);
        }).on('afterbackdrop',function(){
            this.$backdrop.css('zIndex',me.getOpt('zIndex')+1).appendTo(me.$container.find('.edui-dialog-container'))
            $dialog.css('zIndex',me.getOpt('zIndex')+2)
        }).on('beforeok',function(){
            try{
                currentRange.select()
            }catch(e){}
        }).attachTo($btn)
    });




    me.addListener('selectionchange', function () {
        var state = this.queryCommandState(name);
        $btn.edui().disabled(state == -1).active(state == 1)
    });
    return $btn;
});
UM.registerUI( 'emotion', function( name ){
    var me = this,
        url  = me.options.UMEDITOR_HOME_URL + 'dialogs/' +name+ '/'+name+'.js';

    var $btn = $.eduibutton({
        icon: name,
        title: this.getLang('labelMap')[name] || ''
    });

    //鍔犺浇妯＄増鏁版嵁
    utils.loadFile(document,{
        src: url,
        tag: "script",
        type: "text/javascript",
        defer: "defer"
    },function(){
        var opt = {
            url : url
        };
        //璋冩暣鏁版嵁
        var data = UM.getWidgetData(name);

        data.width && (opt.width = data.width);
        data.height && (opt.height = data.height);

        $.eduipopup(opt).css('zIndex',me.options.zIndex + 1)
            .edui()
            .on('beforeshow',function(){
                var $root = this.root();
                if(!$root.parent().length){
                    me.$container.find('.edui-dialog-container').append($root);
                }
                UM.setWidgetBody(name,$root,me);
            }).attachTo($btn,{
                offsetTop:-5,
                offsetLeft:10,
                caretLeft:11,
                caretTop:-8
            });
        me.addListener('selectionchange', function () {
            var state = this.queryCommandState('emotion');
            $btn.edui().disabled(state == -1).active(state == 1);
        });
    });
    return $btn;

} );
UM.registerUI('imagescale',function () {
    var me = this,
        $imagescale;

    //me.setOpt('imageScaleEnabled', true);

    if (browser.webkit && me.getOpt('imageScaleEnabled')) {

        me.addListener('click', function () {
            var range = me.selection.getRange(),
                img = range.getClosedNode();

            if (img && img.tagName == 'IMG') {

                if (!$imagescale) {
                    $imagescale = $.eduiscale({'$wrap':me.$container}).css('zIndex', me.options.zIndex);
                    me.$container.append($imagescale);

                    var _keyDownHandler = function () {
                        $imagescale.edui().hide();
                    }, _mouseDownHandler = function (e) {
                        var ele = e.target || e.srcElement;
                        if (ele && ele.className.indexOf('edui-scale') == -1) {
                            _keyDownHandler(e);
                        }
                    }, timer;

                    $imagescale.edui()
                        .on('aftershow', function () {
                            $(document).bind('keydown', _keyDownHandler);
                            $(document).bind('mousedown', _mouseDownHandler);
                            me.selection.getNative().removeAllRanges();
                        })
                        .on('afterhide', function () {
                            $(document).unbind('keydown', _keyDownHandler);
                            $(document).unbind('mousedown', _mouseDownHandler);
                            var target = $imagescale.edui().getScaleTarget();
                            if (target.parentNode) {
                                me.selection.getRange().selectNode(target).select();
                            }
                        })
                        .on('mousedown', function (e) {
                            me.selection.getNative().removeAllRanges();
                            var ele = e.target || e.srcElement;
                            if (ele && ele.className.indexOf('edui-scale-hand') == -1) {
                                timer = setTimeout(function() {
                                    $imagescale.edui().hide();
                                }, 200);
                            }
                        })
                        .on('mouseup', function (e) {
                            var ele = e.target || e.srcElement;
                            if (ele && ele.className.indexOf('edui-scale-hand') == -1) {
                                clearTimeout(timer);
                            }
                        });
                }
                $imagescale.edui().show($(img));

            } else {
                if ($imagescale && $imagescale.css('display') != 'none') $imagescale.edui().hide();

            }
        });

        me.addListener('click', function (type, e) {
            if (e.target.tagName == 'IMG') {
                var range = new dom.Range(me.document, me.body);
                range.selectNode(e.target).select();
            }
        });

    }
});
UM.registerUI('autofloat',function(){
    var me = this,
        lang = me.getLang();
    me.setOpt({
        topOffset:0
    });
    var optsAutoFloatEnabled = me.options.autoFloatEnabled !== false,
        topOffset = me.options.topOffset;


    //濡傛灉涓嶅浐瀹歵oolbar鐨勪綅缃紝鍒欑洿鎺ラ€€鍑�
    if(!optsAutoFloatEnabled){
        return;
    }
    me.ready(function(){
        var LteIE6 = browser.ie && browser.version <= 6,
            quirks = browser.quirks;

        function checkHasUI(){
            if(!UM.ui){
                alert(lang.autofloatMsg);
                return 0;
            }
            return 1;
        }
        function fixIE6FixedPos(){
            var docStyle = document.body.style;
            docStyle.backgroundImage = 'url("about:blank")';
            docStyle.backgroundAttachment = 'fixed';
        }
        var	bakCssText,
            placeHolder = document.createElement('div'),
            toolbarBox,orgTop,
            getPosition=function(element){
                var bcr;
                //trace  IE6涓嬪湪鎺у埗缂栬緫鍣ㄦ樉闅愭椂鍙兘浼氭姤閿欙紝catch涓€涓�
                try{
                    bcr = element.getBoundingClientRect();
                }catch(e){
                    bcr={left:0,top:0,height:0,width:0}
                }
                var rect = {
                    left: Math.round(bcr.left),
                    top: Math.round(bcr.top),
                    height: Math.round(bcr.bottom - bcr.top),
                    width: Math.round(bcr.right - bcr.left)
                };
                var doc;
                while ((doc = element.ownerDocument) !== document &&
                    (element = domUtils.getWindow(doc).frameElement)) {
                    bcr = element.getBoundingClientRect();
                    rect.left += bcr.left;
                    rect.top += bcr.top;
                }
                rect.bottom = rect.top + rect.height;
                rect.right = rect.left + rect.width;
                return rect;
            };
        var isFullScreening = false;
        function setFloating(){
            if(isFullScreening){
                return;
            }
            var toobarBoxPos = domUtils.getXY(toolbarBox),
                origalFloat = domUtils.getComputedStyle(toolbarBox,'position'),
                origalLeft = domUtils.getComputedStyle(toolbarBox,'left');
            toolbarBox.style.width = toolbarBox.offsetWidth + 'px';
            toolbarBox.style.zIndex = me.options.zIndex * 1 + 1;
            toolbarBox.parentNode.insertBefore(placeHolder, toolbarBox);
            if (LteIE6 || (quirks && browser.ie)) {
                if(toolbarBox.style.position != 'absolute'){
                    toolbarBox.style.position = 'absolute';
                }
                toolbarBox.style.top = (document.body.scrollTop||document.documentElement.scrollTop) - orgTop + topOffset  + 'px';
            } else {
                if(toolbarBox.style.position != 'fixed'){
                    toolbarBox.style.position = 'fixed';
                    toolbarBox.style.top = topOffset +"px";
                    ((origalFloat == 'absolute' || origalFloat == 'relative') && parseFloat(origalLeft)) && (toolbarBox.style.left = toobarBoxPos.x + 'px');
                }
            }
        }
        function unsetFloating(){

            if(placeHolder.parentNode){
                placeHolder.parentNode.removeChild(placeHolder);
            }
            toolbarBox.style.cssText = bakCssText;
        }

        function updateFloating(){
            var rect3 = getPosition(me.container);
            var offset=me.options.toolbarTopOffset||0;
            if (rect3.top < 0 && rect3.bottom - toolbarBox.offsetHeight > offset) {
                setFloating();
            }else{
                unsetFloating();
            }
        }
        var defer_updateFloating = utils.defer(function(){
            updateFloating();
        },browser.ie ? 200 : 100,true);

        me.addListener('destroy',function(){
            domUtils.un(window, ['scroll','resize'], updateFloating);
            me.removeListener('keydown', defer_updateFloating);
        });

        if(checkHasUI(me)){
            toolbarBox = $('.edui-toolbar',me.container)[0];
            me.addListener("afteruiready",function(){
                setTimeout(function(){
                    orgTop = $(toolbarBox).offset().top;
                },100);
            });
            bakCssText = toolbarBox.style.cssText;
            placeHolder.style.height = toolbarBox.offsetHeight + 'px';
            if(LteIE6){
                fixIE6FixedPos();
            }
            domUtils.on(window, ['scroll','resize'], updateFloating);
            me.addListener('keydown', defer_updateFloating);

            me.addListener('beforefullscreenchange', function (t, enabled){
                if (enabled) {
                    unsetFloating();
                    isFullScreening = enabled;
                }
            });
            me.addListener('fullscreenchanged', function (t, enabled){
                if (!enabled) {
                    updateFloating();
                }
                isFullScreening = enabled;
            });
            me.addListener('sourcemodechanged', function (t, enabled){
                setTimeout(function (){
                    updateFloating();
                },0);
            });
            me.addListener("clearDoc",function(){
                setTimeout(function(){
                    updateFloating();
                },0);

            })
        }
    })


})
UM.registerUI('source',function(name){
    var me = this;
    me.addListener('fullscreenchanged',function(){
        me.$container.find('textarea').width(me.$body.width() - 10).height(me.$body.height())

    });
    var $btn = $.eduibutton({
        icon : name,
        click : function(){
            me.execCommand(name)
        },
        title: this.getLang('labelMap')[name] || ''
    });

    this.addListener('selectionchange',function(){
        var state = this.queryCommandState(name);
        $btn.edui().disabled(state == -1).active(state == 1)
    });
    return $btn;
});

UM.registerUI('paragraph fontfamily fontsize', function( name ) {

    var me = this,
        label = (me.options.labelMap && me.options.labelMap[name]) || me.getLang("labelMap." + name),
        options = {
            label: label,
            title: label,
            comboboxName: name,
            items: me.options[ name ] || [],
            itemStyles: [],
            value: [],
            autowidthitem: []
        },
        $combox = null,
        comboboxWidget = null;

    switch ( name ) {

        case 'paragraph':
            options = transForParagraph( options );
            break;

        case 'fontfamily':
            options = transForFontfamily( options );
            break;

        case 'fontsize':
            options = transForFontsize( options );
            break;

    }

    //瀹炰緥鍖�
    $combox =  $.eduibuttoncombobox(options).css('zIndex',me.getOpt('zIndex') + 1);
    comboboxWidget =  $combox.edui();

    comboboxWidget.on('comboboxselect', function( evt, res ){
                        me.execCommand( name, res.value );
                    }).on("beforeshow", function(){
                        if( $combox.parent().length === 0 ) {
                            $combox.appendTo(  me.$container.find('.edui-dialog-container') );
                        }
                    });


    //鐘舵€佸弽灏�
    this.addListener('selectionchange',function( evt ){

        var state  = this.queryCommandState( name ),
            value = this.queryCommandValue( name );

        //璁剧疆鎸夐挳鐘舵€�
        comboboxWidget.button().edui().disabled( state == -1 ).active( state == 1 );
        if(value){
            //璁剧疆label
            value = value.replace(/['"]/g, '').toLowerCase().split(/['|"]?\s*,\s*[\1]?/);

            comboboxWidget.selectItemByLabel( value );
        }


    });

    return comboboxWidget.button().addClass('edui-combobox');

    /**
     * 瀹藉害鑷€傚簲宸ュ叿鍑芥暟
     * @param word 鍗曡瘝鍐呭
     * @param hasSuffix 鏄惁鍚湁鍚庣紑
     */
    function wordCountAdaptive ( word, hasSuffix ) {

        var $tmpNode = $('<span>' ).html( word ).css( {
                display: 'inline',
                position: 'absolute',
                top: -10000000,
                left: -100000
            } ).appendTo( document.body),
            width = $tmpNode.width();

        $tmpNode.remove();
        $tmpNode = null;

        if( width < 50 ) {

            return word;

        } else {

            word = word.slice( 0, hasSuffix ? -4 : -1 );

            if( !word.length ) {
                return '...';
            }

            return wordCountAdaptive( word + '...', true );

        }

    }


    //娈佃惤鍙傛暟杞崲
    function transForParagraph ( options ) {

        var tempItems = [];

        for( var key in options.items ) {

            options.value.push( key );
            tempItems.push( key );
            options.autowidthitem.push( wordCountAdaptive( key ) );

        }

        options.items = tempItems;
        options.autoRecord = false;

        return options;

    }

    //瀛椾綋鍙傛暟杞崲
    function transForFontfamily ( options ) {

        var temp = null,
            tempItems = [];

        for( var i = 0, len = options.items.length; i < len; i++ ) {

            temp = options.items[ i ].val;
            tempItems.push( temp.split(/\s*,\s*/)[0] );
            options.itemStyles.push('font-family: ' + temp);
            options.value.push( temp );
            options.autowidthitem.push( wordCountAdaptive( tempItems[ i ] ) );

        }

        options.items = tempItems;

        return options;

    }

    //瀛椾綋澶у皬鍙傛暟杞崲
    function transForFontsize ( options ) {

        var temp = null,
            tempItems = [];

        options.itemStyles = [];
        options.value = [];

        for( var i = 0, len = options.items.length; i < len; i++ ) {

            temp = options.items[ i ];
            tempItems.push( temp );
            options.itemStyles.push('font-size: ' + temp +'px');

        }

        options.value = options.items;
        options.items = tempItems;
        options.autoRecord = false;

        return options;

    }

});


UM.registerUI('forecolor backcolor', function( name ) {
    function getCurrentColor() {
        return domUtils.getComputedStyle( $colorLabel[0], 'background-color' );
    }

    var me = this,
        $colorPickerWidget = null,
        $colorLabel = null,
        $btn = null;

    //querycommand
    this.addListener('selectionchange', function(){

        var state = this.queryCommandState( name );
        $btn.edui().disabled( state == -1 ).active( state == 1 );

    });

    $btn = $.eduicolorsplitbutton({
        icon: name,
        caret: true,
        name: name,
        title: me.getLang("labelMap")[name],
        click: function() {
            me.execCommand( name, getCurrentColor() );
        }
    });

    $colorLabel = $btn.edui().colorLabel();

    $colorPickerWidget = $.eduicolorpicker({
        name: name,
        lang_clearColor: me.getLang('clearColor') || '',
        lang_themeColor: me.getLang('themeColor') || '',
        lang_standardColor: me.getLang('standardColor') || ''
    })
        .on('pickcolor', function( evt, color ){
            window.setTimeout( function(){
                $colorLabel.css("backgroundColor", color);
                me.execCommand( name, color );
            }, 0 );
        })
        .on('show',function(){
            UM.setActiveWidget( colorPickerWidget.root() );
        }).css('zIndex',me.getOpt('zIndex') + 1);

    $btn.edui().on('arrowclick',function(){
        if(!$colorPickerWidget.parent().length){
            me.$container.find('.edui-dialog-container').append($colorPickerWidget);
        }
        $colorPickerWidget.edui().show($btn,{
            caretDir:"down",
            offsetTop:-5,
            offsetLeft:8,
            caretLeft:11,
            caretTop:-8
        });
    }).register('click', $btn, function () {
            $colorPickerWidget.edui().hide()
        });

    return $btn;

});

})()