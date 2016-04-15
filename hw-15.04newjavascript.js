var numText = ['null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn'];
var numbers = [];
var ulText = $('#numName');
var ulNum = $('#numNumeric');
var dimx = $('body').width();
var dimy = $('body').height();
var numbersCookie = Cookies.getJSON('numbers')
(function Numbers() {
    this.numCorrect = 0;
    this.number = [];
    ;
            }

(function Numbers(cookie) {(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		var _OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = _OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				return (document.cookie = [
					key, '=', value,
					attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
					attributes.path    && '; path=' + attributes.path,
					attributes.domain  && '; domain=' + attributes.domain,
					attributes.secure ? '; secure' : ''
				].join(''));
			}

			
			if (!key) {
				result = {};
			}

			
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var name = parts[0].replace(rdecode, decodeURIComponent);
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api(key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


            }

(function Number(word,digit,errorNum,placed) {
    this.word = word;
    this.digit=digit;
    this.errorNum=errorNum;
    this.placed=placed;
    if (numbersCookie === null) {
    for (var i = 0; i < numText.length; i++) {
                    var number = {
                        word: numText[i],
                        digit: i,
                        score: 0,
                        placed : false
                    };
                    numbers.push(number);
                }
            } else {
                numbers = numbersCookie;
            }
            var hidden = 0;
            for (var i = 0; i < numbers.length; i++) {
                ulText.append('<li id="t' + numbers[i].digit + '">' + numbers[i].word + '</li>');
                ulNum.append('<li id="n' + numbers[i].digit + '">' + numbers[i].digit + '</li>');
                if(numbers[i].placed){
                    $("#n" + i).hide();
                    hidden++;
                }
            }  
            for (var i = 0; i < numText.length; i++) {
                $("#n" + i).data("index", {index: i});
                $("#t" + i).data("index", {index: i});
                $("#n" + i).draggable();
                $("#t" + i).droppable({drop: function (event, ui) {
                    var ni = ui.draggable.attr("id");
                    var ti = this.id;
                    var niElem = $('#' + ni);
                    var tiElem = $('#' + ti);
                    if (niElem.data("index").index === tiElem.data("index").index) {
                        //correct
                        niElem.draggable("disable");
                        niElem.css("display", "none");
                        numbers[niElem.data("index").index].placed = true;
                        hidden++;
                        if (hidden === numText.length) {
                            $('ul').randomize();
                            $('#numName').sortable({
                                start: function (event, ui) {
                                },
                                update: function (event, ui) {
                                    var ordered = 0;
                                    for (var j = 0; j < numText.length; j++) {
                                        if ($('#t' + j).index() === j)
                                            ordered++;
                                    }
                                    if (ordered === numText.length)
                                        alert("done");
                                }
                            });
                        }
                    } else {
                        //wrong
                        var left = Math.floor((Math.random() * (dimx - 20)) + 10);
                        var top = Math.floor((Math.random() * (dimy - 20)) + 10);
                        niElem.css("left", left + "px");
                        niElem.css("top", top + "px");
                        numbers[niElem.data("index").index].score++;
                        var score = numbers[niElem.data("index").index].score;
                        if (score > 1)
                            alert("Come on. Try harder. You were mistaken " + score + " times");
                    }
                    Cookies.set('numbers', numbers, {expires: 128});
                }});
            }
            
            $.fn.randomize = function (selector) {
                var $elems = selector ? $(this).find(selector) : $(this).children(),
                        $parents = $elems.parent();
                $parents.each(function () {
                    $(this).children(selector).sort(function () {
                        return Math.round(Math.random()) - 0.5;
                    }).detach().appendTo(this);
                });
                return this;
            };
            $('ul').randomize();

})));
