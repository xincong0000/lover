(function () {
    var h = {}, mt = {}, c = {
        id: "d214947968792b839fd669a4decaaffc",
        dm: ["layui.com", "layuicdn.com"],
        js: "tongji.baidu.com/hm-web/js/",
        etrk: [{id: "%23layui-spm-event-layuicdn", eventType: "onclick"}, {
            id: "%23fly-spm-event-banner-1",
            eventType: "onclick"
        }, {id: "%23fly-spm-event-banner-2", eventType: "onclick"}, {
            id: "%23fly-spm-event-diamonds-1",
            eventType: "onclick"
        }, {id: "%23layui-spm-event-parter", eventType: "onclick"}, {
            id: "%23layui-spm-event-zb-xiankefu",
            eventType: "onclick"
        }, {id: "%23layui-spm-event-xiankefu", eventType: "onclick"}, {
            id: "%23fly-spm-event-banner-xiankefu",
            eventType: "onclick"
        }, {id: "%23layui-spm-event-parter-tips", eventType: "onclick"}, {
            id: "%23layer-spm-event-parter",
            eventType: "onclick"
        }, {id: "%23layer-spm-event-parter-tips", eventType: "onclick"}],
        cetrk: [],
        cptrk: [],
        icon: '',
        ctrk: false,
        align: -1,
        nv: 0,
        vdur: 1800000,
        age: 31536000000,
        rec: 0,
        rp: [],
        trust: 0,
        vcard: 0,
        qiao: 0,
        lxb: 0,
        kbtrk: 0,
        pt: 0,
        spa: 0,
        aet: '',
        hca: 'F8DDE85DCE8858EA',
        conv: 0,
        med: 0,
        cvcc: '',
        cvcf: [],
        apps: ''
    };
    var q = void 0, u = !0, v = null, w = !1;
    mt.cookie = {};
    mt.cookie.set = function (a, b, d) {
        var e;
        d.S && (e = new Date, e.setTime(e.getTime() + d.S));
        document.cookie = a + "=" + b + (d.domain ? "; domain=" + d.domain : "") + (d.path ? "; path=" + d.path : "") + (e ? "; expires=" + e.toGMTString() : "") + (d.Hc ? "; secure" : "")
    };
    mt.cookie.get = function (a) {
        return (a = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie)) ? a[2] : v
    };
    mt.cookie.gc = function (a, b) {
        try {
            var d = "Hm_ck_" + +new Date;
            mt.cookie.set(d, "is-cookie-enabled", {domain: a, path: b, S: q});
            var e = "is-cookie-enabled" === mt.cookie.get(d) ? "1" : "0";
            mt.cookie.set(d, "", {domain: a, path: b, S: -1});
            return e
        } catch (g) {
            return "0"
        }
    };
    mt.lang = {};
    mt.lang.e = function (a, b) {
        return "[object " + b + "]" === {}.toString.call(a)
    };
    mt.lang.Fa = function (a) {
        return mt.lang.e(a, "Number") && isFinite(a)
    };
    mt.lang.L = function (a) {
        return mt.lang.e(a, "String")
    };
    mt.lang.isArray = function (a) {
        return mt.lang.e(a, "Array")
    };
    mt.lang.g = function (a) {
        return a.replace ? a.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : a
    };
    mt.lang.trim = function (a) {
        return a.replace(/^\s+|\s+$/g, "")
    };
    mt.lang.K = function (a, b) {
        var d = w;
        if (a == v || !mt.lang.e(a, "Array") || b === q) return d;
        if (Array.prototype.indexOf) d = -1 !== a.indexOf(b); else for (var e = 0; e < a.length; e++) if (a[e] === b) {
            d = u;
            break
        }
        return d
    };
    mt.url = {};
    mt.url.o = function (a, b) {
        var d = a.match(RegExp("(^|&|\\?|#)(" + b + ")=([^&#]*)(&|$|#)", ""));
        return d ? d[3] : v
    };
    mt.url.Fc = function (a) {
        return (a = a.match(/^(https?:)\/\//)) ? a[1] : v
    };
    mt.url.Jb = function (a) {
        return (a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, "") : v
    };
    mt.url.W = function (a) {
        return (a = mt.url.Jb(a)) ? a.replace(/:\d+$/, "") : a
    };
    mt.url.Aa = function (a) {
        return (a = a.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? a[2].replace(/[\?#].*/, "").replace(/^$/, "/") : v
    };
    (function () {
        var a = mt.lang, b = mt.url;
        mt.f = {};
        mt.f.fa = function (d) {
            return document.getElementById(d)
        };
        mt.f.ya = function (d) {
            if (!d) return v;
            try {
                d = String(d);
                if (0 === d.indexOf("!HMCQ!")) return d;
                if (0 === d.indexOf("!HMCC!")) return document.querySelector(d.substring(6, d.length));
                for (var e = d.split(">"), a = document.body, b = e.length - 1; 0 <= b; b--) if (-1 < e[b].indexOf("#")) {
                    var f = e[b].split("#")[1];
                    (a = document.getElementById(f)) || (a = document.getElementById(decodeURIComponent(f)));
                    e = e.splice(b + 1, e.length - (b + 1));
                    break
                }
                for (d =
                         0; a && d < e.length;) {
                    var m = String(e[d]).toLowerCase();
                    if (!("html" === m || "body" === m)) {
                        var b = 0, n = e[d].match(/\[(\d+)\]/i), f = [];
                        if (n) b = n[1] - 1, m = m.split("[")[0]; else if (1 !== a.childNodes.length) {
                            for (var r = 0, t = 0, s = a.childNodes.length; t < s; t++) {
                                var x = a.childNodes[t];
                                1 === x.nodeType && x.nodeName.toLowerCase() === m && r++;
                                if (1 < r) return v
                            }
                            if (1 !== r) return v
                        }
                        for (r = 0; r < a.childNodes.length; r++) 1 === a.childNodes[r].nodeType && a.childNodes[r].nodeName.toLowerCase() === m && f.push(a.childNodes[r]);
                        if (!f[b]) return v;
                        a = f[b]
                    }
                    d++
                }
                return a
            } catch (k) {
                return v
            }
        };
        mt.f.Aa = function (a, e) {
            var b = [], l = [];
            if (!a) return l;
            for (; a.parentNode != v;) {
                for (var f = 0, m = 0, n = a.parentNode.childNodes.length, r = 0; r < n; r++) {
                    var t = a.parentNode.childNodes[r];
                    if (t.nodeName === a.nodeName && (f++, t === a && (m = f), 0 < m && 1 < f)) break
                }
                if ((n = "" !== a.id) && e) {
                    b.unshift("#" + encodeURIComponent(a.id));
                    break
                } else n && (n = "#" + encodeURIComponent(a.id), n = 0 < b.length ? n + ">" + b.join(">") : n, l.push(n)), b.unshift(encodeURIComponent(String(a.nodeName).toLowerCase()) + (1 < f ? "[" + m + "]" : ""));
                a = a.parentNode
            }
            l.push(b.join(">"));
            return l
        };
        mt.f.ha = function (a) {
            return (a = mt.f.Aa(a, u)) && a.length ? String(a[0]) : ""
        };
        mt.f.Ob = function (a) {
            return mt.f.Aa(a, w)
        };
        mt.f.Db = function (a) {
            var e;
            for (e = "A"; (a = a.parentNode) && 1 == a.nodeType;) if (a.tagName == e) return a;
            return v
        };
        mt.f.Gb = function (a) {
            return 9 === a.nodeType ? a : a.ownerDocument || a.document
        };
        mt.f.Mb = function (a) {
            var e = {top: 0, left: 0};
            if (!a) return e;
            var b = mt.f.Gb(a).documentElement;
            "undefined" !== typeof a.getBoundingClientRect && (e = a.getBoundingClientRect());
            return {
                top: e.top + (window.pageYOffset || b.scrollTop) -
                    (b.clientTop || 0), left: e.left + (window.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }
        };
        mt.f.getAttribute = function (a, e) {
            var b = a.getAttribute && a.getAttribute(e) || v;
            if (!b && a.attributes && a.attributes.length) for (var l = a.attributes, f = l.length, m = 0; m < f; m++) l[m].nodeName === e && (b = l[m].nodeValue);
            return b
        };
        mt.f.V = function (a) {
            var e = "document";
            a.tagName !== q && (e = a.tagName);
            return e.toLowerCase()
        };
        mt.f.Rb = function (b) {
            var e = "";
            b.textContent ? e = a.trim(b.textContent) : b.innerText && (e = a.trim(b.innerText));
            e && (e = e.replace(/\s+/g,
                " ").substring(0, 255));
            return e
        };
        mt.f.U = function (d, e) {
            var g;
            a.L(d) && 0 === String(d).indexOf("!HMCQ!") ? (g = String(d), g = b.o(document.location.href, g.substring(6, g.length))) : a.L(d) || (g = mt.f.V(d), "input" === g && e && ("button" === d.type || "submit" === d.type) ? g = a.trim(d.value) || "" : "input" === g && !e && "password" !== d.type ? g = a.trim(d.value) || "" : "img" === g ? (g = mt.f.getAttribute, g = g(d, "alt") || g(d, "title") || g(d, "src")) : g = "body" === g || "html" === g ? ["(hm-default-content-for-", g, ")"].join("") : mt.f.Rb(d));
            return String(g || "").substring(0,
                255)
        };
        (function () {
            (mt.f.Ka = function () {
                function a() {
                    if (!a.ka) {
                        a.ka = u;
                        for (var e = 0, b = l.length; e < b; e++) l[e]()
                    }
                }

                function e() {
                    try {
                        document.documentElement.doScroll("left")
                    } catch (b) {
                        setTimeout(e, 1);
                        return
                    }
                    a()
                }

                var b = w, l = [], f;
                document.addEventListener ? f = function () {
                    document.removeEventListener("DOMContentLoaded", f, w);
                    a()
                } : document.attachEvent && (f = function () {
                    "complete" === document.readyState && (document.detachEvent("onreadystatechange", f), a())
                });
                (function () {
                    if (!b) if (b = u, "complete" === document.readyState) a.ka = u;
                    else if (document.addEventListener) document.addEventListener("DOMContentLoaded", f, w), window.addEventListener("load", a, w); else if (document.attachEvent) {
                        document.attachEvent("onreadystatechange", f);
                        window.attachEvent("onload", a);
                        var m = w;
                        try {
                            m = window.frameElement == v
                        } catch (l) {
                        }
                        document.documentElement.doScroll && m && e()
                    }
                })();
                return function (e) {
                    a.ka ? e() : l.push(e)
                }
            }()).ka = w
        })();
        return mt.f
    })();
    mt.event = {};
    mt.event.d = function (a, b, d) {
        a.attachEvent ? a.attachEvent("on" + b, function (e) {
            d.call(a, e)
        }) : a.addEventListener && a.addEventListener(b, d, w)
    };
    mt.event.preventDefault = function (a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = w
    };
    (function () {
        var a = mt.event;
        mt.h = {};
        mt.h.Ea = /msie (\d+\.\d+)/i.test(navigator.userAgent);
        mt.h.Kb = function () {
            if (document.documentMode) return document.documentMode;
            var a = /msie (\d+\.\d+)/i.exec(navigator.userAgent);
            return a ? +a[1] || 0 : 0
        };
        mt.h.ec = function () {
            try {
                return !!navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && "undefined" !== typeof document.body.style.webkitFilter && !window.chrome
            } catch (a) {
                return w
            }
        };
        mt.h.cookieEnabled = navigator.cookieEnabled;
        mt.h.javaEnabled = navigator.javaEnabled();
        mt.h.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
        mt.h.oc = (window.screen.width || 0) + "x" + (window.screen.height || 0);
        mt.h.colorDepth = window.screen.colorDepth || 0;
        mt.h.X = function () {
            var a;
            a = a || document;
            return parseInt(window.pageYOffset || a.documentElement.scrollTop || a.body && a.body.scrollTop || 0, 10)
        };
        mt.h.J = function () {
            var a = document;
            return parseInt(window.innerHeight || a.documentElement.clientHeight || a.body && a.body.clientHeight || 0, 10)
        };
        mt.h.orientation =
            0;
        (function () {
            function b() {
                var a = 0;
                window.orientation !== q && (a = window.orientation);
                screen && (screen.orientation && screen.orientation.angle !== q) && (a = screen.orientation.angle);
                mt.h.orientation = a
            }

            b();
            a.d(window, "orientationchange", b)
        })();
        return mt.h
    })();
    mt.s = {};
    mt.s.parse = function (a) {
        return (new Function("return (" + a + ")"))()
    };
    mt.s.stringify = function () {
        function a(a) {
            /["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function (a) {
                var e = d[a];
                if (e) return e;
                e = a.charCodeAt();
                return "\\u00" + Math.floor(e / 16).toString(16) + (e % 16).toString(16)
            }));
            return '"' + a + '"'
        }

        function b(a) {
            return 10 > a ? "0" + a : a
        }

        var d = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
        return function (e) {
            switch (typeof e) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(e) ? String(e) : "null";
                case "string":
                    return a(e);
                case "boolean":
                    return String(e);
                default:
                    if (e === v) return "null";
                    if (e instanceof Array) {
                        var g = ["["], d = e.length, f, m, n;
                        for (m = 0; m < d; m++) switch (n = e[m], typeof n) {
                            case "undefined":
                            case "function":
                            case "unknown":
                                break;
                            default:
                                f && g.push(","), g.push(mt.s.stringify(n)), f = 1
                        }
                        g.push("]");
                        return g.join("")
                    }
                    if (e instanceof Date) return '"' + e.getFullYear() + "-" + b(e.getMonth() + 1) + "-" + b(e.getDate()) + "T" + b(e.getHours()) + ":" + b(e.getMinutes()) + ":" + b(e.getSeconds()) + '"';
                    f = ["{"];
                    m = mt.s.stringify;
                    for (d in e) if (Object.prototype.hasOwnProperty.call(e, d)) switch (n =
                        e[d], typeof n) {
                        case "undefined":
                        case "unknown":
                        case "function":
                            break;
                        default:
                            g && f.push(","), g = 1, f.push(m(d) + ":" + m(n))
                    }
                    f.push("}");
                    return f.join("")
            }
        }
    }();
    mt.localStorage = {};
    mt.localStorage.ra = function () {
        if (!mt.localStorage.m) try {
            mt.localStorage.m = document.createElement("input"), mt.localStorage.m.type = "hidden", mt.localStorage.m.style.display = "none", mt.localStorage.m.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.m)
        } catch (a) {
            return w
        }
        return u
    };
    mt.localStorage.set = function (a, b, d) {
        var e = new Date;
        e.setTime(e.getTime() + d || 31536E6);
        try {
            window.localStorage ? (b = e.getTime() + "|" + b, window.localStorage.setItem(a, b)) : mt.localStorage.ra() && (mt.localStorage.m.expires = e.toUTCString(), mt.localStorage.m.load(document.location.hostname), mt.localStorage.m.setAttribute(a, b), mt.localStorage.m.save(document.location.hostname))
        } catch (g) {
        }
    };
    mt.localStorage.get = function (a) {
        if (window.localStorage) {
            if (a = window.localStorage.getItem(a)) {
                var b = a.indexOf("|"), d = a.substring(0, b) - 0;
                if (d && d > (new Date).getTime()) return a.substring(b + 1)
            }
        } else if (mt.localStorage.ra()) try {
            return mt.localStorage.m.load(document.location.hostname), mt.localStorage.m.getAttribute(a)
        } catch (e) {
        }
        return v
    };
    mt.localStorage.remove = function (a) {
        if (window.localStorage) window.localStorage.removeItem(a); else if (mt.localStorage.ra()) try {
            mt.localStorage.m.load(document.location.hostname), mt.localStorage.m.removeAttribute(a), mt.localStorage.m.save(document.location.hostname)
        } catch (b) {
        }
    };
    mt.sessionStorage = {};
    mt.sessionStorage.set = function (a, b) {
        try {
            window.sessionStorage && window.sessionStorage.setItem(a, b)
        } catch (d) {
        }
    };
    mt.sessionStorage.get = function (a) {
        try {
            return window.sessionStorage ? window.sessionStorage.getItem(a) : v
        } catch (b) {
            return v
        }
    };
    mt.sessionStorage.remove = function (a) {
        try {
            window.sessionStorage && window.sessionStorage.removeItem(a)
        } catch (b) {
        }
    };
    mt.eb = {};
    mt.eb.log = function (a, b) {
        var d = new Image, e = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[e] = d;
        d.onload = function () {
            d.onload = v;
            d = window[e] = v;
            b && b(a)
        };
        d.src = a
    };
    mt.La = {};
    mt.La.Sb = function () {
        var a = "";
        if (navigator.plugins && navigator.mimeTypes.length) {
            var b = navigator.plugins["Shockwave Flash"];
            b && b.description && (a = b.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
        } else if (window.ActiveXObject) try {
            if (b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) (a = b.GetVariable("$version")) && (a = a.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
        } catch (d) {
        }
        return a
    };
    mt.La.Ec = function (a, b, d, e, g) {
        return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + a + '" width="' + d + '" height="' + e + '"><param name="movie" value="' + b + '" /><param name="flashvars" value="' + (g || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + a + '" width="' + d + '" height="' + e + '" src="' + b + '" flashvars="' + (g || "") + '" allowscriptaccess="always" /></object>'
    };
    (function () {
        function a() {
            for (var a = w, d = document.getElementsByTagName("script"), e = d.length, e = 100 < e ? 100 : e, g = 0; g < e; g++) {
                var l = d[g].src;
                if (l && 0 === l.indexOf("https://hm.baidu.com/h")) {
                    a = u;
                    break
                }
            }
            return a
        }

        return h.Bb = a
    })();
    var A = h.Bb;
    h.l = {
        $b: "http://tongji.baidu.com/hm-web/welcome/ico",
        Ja: "hm.baidu.com/hm.gif",
        nb: /^(tongji|hmcdn).baidu.com$/,
        gb: "tongji.baidu.com",
        Xb: "hmmd",
        Yb: "hmpl",
        Ac: "utm_medium",
        Wb: "hmkw",
        Cc: "utm_term",
        Ub: "hmci",
        zc: "utm_content",
        Zb: "hmsr",
        Bc: "utm_source",
        Vb: "hmcu",
        yc: "utm_campaign",
        M: 0,
        H: Math.round(+new Date / 1E3),
        protocol: "https:" === document.location.protocol ? "https:" : "http:",
        ma: A() || "https:" === document.location.protocol ? "https:" : "http:",
        Gc: 0,
        ub: 6E5,
        hc: 6E5,
        pc: 5E3,
        vb: 5,
        P: 1024,
        tb: 1,
        N: 2147483647,
        fb: "hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn p ct u tt".split(" "),
        Y: u,
        Qa: ["a", "input", "button"],
        Na: {
            id: "data-hm-id",
            da: "data-hm-class",
            ba: "data-hm-xpath",
            content: "data-hm-content",
            pa: "data-hm-tag",
            link: "data-hm-link"
        },
        Pa: "data-hm-enabled",
        Oa: "data-hm-disabled",
        lc: "https://hmcdn.baidu.com/static/tongji/plugins/",
        Za: ["UrlChangeTracker"]
    };
    (function () {
        var a = {
            D: {}, d: function (a, d) {
                this.D[a] = this.D[a] || [];
                this.D[a].push(d)
            }, I: function (a, d) {
                this.D[a] = this.D[a] || [];
                for (var e = this.D[a].length, g = 0; g < e; g++) this.D[a][g](d)
            }
        };
        return h.r = a
    })();
    (function () {
        function a(a, e) {
            var g = document.createElement("script");
            g.charset = "utf-8";
            b.e(e, "Function") && (g.readyState ? g.onreadystatechange = function () {
                if ("loaded" === g.readyState || "complete" === g.readyState) g.onreadystatechange = v, e()
            } : g.onload = function () {
                e()
            });
            g.src = a;
            var l = document.getElementsByTagName("script")[0];
            l.parentNode.insertBefore(g, l)
        }

        var b = mt.lang;
        return h.load = a
    })();
    (function () {
        function a() {
            var a = "";
            if (h.c.b.nv) {
                a = encodeURIComponent(document.referrer);
                try {
                    window.sessionStorage ? d.set("Hm_from_" + c.id, a) : b.set("Hm_from_" + c.id, a, 864E5)
                } catch (g) {
                }
            } else try {
                a = (window.sessionStorage ? d.get("Hm_from_" + c.id) : b.get("Hm_from_" + c.id)) || ""
            } catch (l) {
            }
            return a
        }

        var b = mt.localStorage, d = mt.sessionStorage;
        return h.Cb = a
    })();
    (function () {
        var a = h.l, b = {
            init: function () {
                if ("" !== c.icon) {
                    var b = c.icon.split("|"), e = a.$b + "?s=" + c.id,
                        g = "https://hmcdn.baidu.com/static" + b[0] + ".gif";
                    document.write("swf" === b[1] || "gif" === b[1] ? '<a href="' + e + '" target="_blank"><img border="0" src="' + g + '" width="' + b[2] + '" height="' + b[3] + '"></a>' : '<a href="' + e + '" target="_blank">' + b[0] + "</a>")
                }
            }
        };
        h.r.d("pv-b", b.init);
        return b
    })();
    (function () {
        var a = mt.cookie, b = mt.localStorage, d = mt.sessionStorage, e = {
            getData: function (e) {
                try {
                    return a.get(e) || d.get(e) || b.get(e)
                } catch (l) {
                }
            }, setData: function (g, l, f) {
                try {
                    a.set(g, l, {domain: e.T(), path: e.ga(), S: f}), f ? b.set(g, l, f) : d.set(g, l)
                } catch (m) {
                }
            }, nc: function (g) {
                try {
                    a.set(g, "", {domain: e.T(), path: e.ga(), S: -1}), d.remove(g), b.remove(g)
                } catch (l) {
                }
            }, Z: function (a, e) {
                a = "." + a.replace(/:\d+/, "");
                e = "." + e.replace(/:\d+/, "");
                var b = a.indexOf(e);
                return -1 < b && b + e.length === a.length
            }, la: function (a, e) {
                a = a.replace(/^https?:\/\//,
                    "");
                return 0 === a.indexOf(e)
            }, T: function () {
                for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++) if (e.Z(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[/?#].*/, "");
                return a
            }, ga: function () {
                for (var a = 0, b = c.dm.length; a < b; a++) {
                    var d = c.dm[a];
                    if (-1 < d.indexOf("/") && e.la(document.location.href, d)) return d.replace(/^[^/]+(\/.*)/, "$1") + "/"
                }
                return "/"
            }
        };
        return h.wa = e
    })();
    (function () {
        var a = mt.lang, b = mt.s, d = h.wa,
            e = {pageview: {}, session: {}, autoEventTracking: {}, customEvent: {}, user: {}},
            g = {user: 1, session: 2, pageview: 3, autoEventTracking: 3, customEvent: 3, others: 3},
            l = ["session", "user"], f = "Hm_up_" + c.id, m = {
                init: function () {
                    m.dc()
                }, dc: function () {
                    try {
                        var g = b.parse(decodeURIComponent(d.getData(f)));
                        a.e(g, "Object") && (e.user = g)
                    } catch (r) {
                    }
                }, A: function (a) {
                    var b = {};
                    e[a] !== q && (b = e[a]);
                    a = this.Ba();
                    for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
                    return a
                }, Ba: function () {
                    for (var a = {}, b, d = l.length -
                        1; 0 <= d; d--) {
                        b = e[l[d]];
                        for (var g in b) b.hasOwnProperty(g) && (a[g] = b[g])
                    }
                    return a
                }, setProperty: function (d, g, f) {
                    var s = e[d];
                    if (a.e(s, "Object") && a.e(g, "Object")) {
                        for (var l in g) if (g.hasOwnProperty(l)) {
                            var k = a.g(String(l));
                            if (f || !/^_/.test(k) && !/_$/.test(k) || /^(_iden|ei_|ec_|ex_|en_|et_|el_)$/.test(k)) {
                                var p = g[l];
                                if (p == v) delete s[k]; else {
                                    if (a.e(p, "Object") || a.e(p, "Array")) p = b.stringify(p);
                                    p = a.g(String(p));
                                    m.fc(d, k, p) && (s[k] = {value: p, scope: m.Ta(d)})
                                }
                            }
                        }
                        "user" === d && m.Ha()
                    }
                }, z: function (b) {
                    b !== q && ("userId" ===
                    b && a.e(e.user, "Object") ? (delete e.user.uid_, m.Ha()) : "user" === b && a.e(e.user, "Object") ? (b = e.user.uid_, e.user = b === q ? {} : {uid_: b}, m.Ha()) : e[b] !== q && (e[b] = {}))
                }, Ha: function () {
                    try {
                        d.setData(f, encodeURIComponent(b.stringify(e.user)), c.age)
                    } catch (a) {
                    }
                }, fc: function (a, b, d) {
                    var g = u, f = e[a];
                    if (256 < encodeURIComponent(String(b)).length || 256 < encodeURIComponent(String(d)).length) g = w; else {
                        var k = f[b];
                        f[b] = {value: d, scope: m.Ta(a)};
                        a = m.O(m.A(a));
                        2048 < encodeURIComponent(a).length && (k !== q ? f[b] = k : delete f[b], g = w)
                    }
                    return g
                },
                O: function (a) {
                    var e = [], b, d;
                    for (d in a) a.hasOwnProperty(d) && (b = [d, a[d].value], (1 === a[d].scope || 2 === a[d].scope) && b.push(a[d].scope), e.push(b.join("*")));
                    return e.join("!")
                }, Ta: function (a) {
                    a = g[a];
                    return a !== q ? a : g.others
                }
            };
        return h.R = m
    })();
    (function () {
        var a = mt.f, b = mt.lang, d = mt.s, e = h.r, g = h.R, l = g.O;
        if (b.isArray(c.cptrk) && 0 < c.cptrk.length) {
            var f = {
                Ya: {}, qa: {}, init: function () {
                    for (var a, e = 0; e < c.cptrk.length; e++) try {
                        if (a = d.parse(decodeURIComponent(String(c.cptrk[e]))), a.a !== q && b.e(a.a, "Object")) {
                            var g = a.a, l;
                            for (l in g) g.hasOwnProperty(l) && (f.qa[l] = String(g[l]))
                        }
                    } catch (s) {
                    }
                }, Xa: function () {
                    var e, b, d;
                    for (d in f.qa) if (f.qa.hasOwnProperty(d) && f.Ya[d] === q && (e = f.qa[d], e = a.ya(e))) b = b === q ? {} : b, b[d] = a.U(e, w), f.Ya[d] = u;
                    return b
                }, Ca: function () {
                    var a =
                        f.Xa();
                    a && f.sc(a)
                }, bc: function () {
                    "MutationObserver" in window ? (new MutationObserver(f.Ca)).observe(document.body, {
                        childList: u,
                        subtree: u
                    }) : window.setInterval(f.Ca, 15E3)
                }, sc: function (a) {
                    if (b.e(a, "Object")) {
                        g.setProperty("pageview", a);
                        a = h.c.b.p;
                        var e = h.c.b.ep;
                        h.c.b.et = 9;
                        h.c.b.ep = "";
                        h.c.b.p = l(g.A("pageview"));
                        h.c.i();
                        h.c.b.p = a;
                        h.c.b.ep = e;
                        g.z("pageview")
                    }
                }
            };
            f.init();
            e.d("pv-b", function () {
                var a = f.Xa();
                a && g.setProperty("pageview", a)
            });
            f.bc();
            a.Ka(f.Ca)
        }
    })();
    (function () {
        var a = mt.lang, b = mt.f, d = {
            Q: function (a, g) {
                return function (l) {
                    var f = l.target || l.srcElement;
                    if (f) {
                        var m = f.getAttribute(a.ca);
                        l = l.clientX + ":" + l.clientY;
                        if (m && m === l) f.removeAttribute(a.ca); else if (g && 0 < g.length && (f = b.Ob(f)) && f.length) if (m = f.length, l = f[f.length - 1], 1E4 > m * l.split(">").length) for (l = 0; l < m; l++) d.cb(a, f[l]); else d.cb(a, l)
                    }
                }
            }, cb: function (e, b) {
                for (var d = {}, f = String(b).split(">").length, m = 0; m < f; m++) d[b] = "", b = b.substring(0, b.lastIndexOf(">"));
                e && (a.e(e, "Object") && e.va) && e.va(d)
            }, $a: function (a,
                             b) {
                return function (d) {
                    (d.target || d.srcElement).setAttribute(a.ca, d.clientX + ":" + d.clientY);
                    a && a.w && (b ? a.w(b) : a.w("#" + encodeURIComponent(this.id), d.type))
                }
            }
        };
        return h.ea = d
    })();
    (function () {
        var a = mt.f, b = mt.event, d = h.ea, e = {
            ca: "HM_fix", ua: function () {
                b.d(document, "click", d.Q(e, c.etrk));
                for (var g = c.etrk.length, l = 0; l < g; l++) {
                    var f = c.etrk[l], m = decodeURIComponent(String(f.id));
                    -1 === m.indexOf(">") && (0 === m.indexOf("#") && (m = m.substring(1)), (m = a.fa(decodeURIComponent(m))) && b.d(m, f.eventType, d.$a(e)))
                }
            }, va: function (a) {
                if (c.etrk && c.etrk.length) for (var b = c.etrk.length, d = 0; d < b; d++) {
                    var m = decodeURIComponent(String(c.etrk[d].id));
                    a.hasOwnProperty(m) && e.w(m)
                }
            }, w: function (a, b) {
                h.c.b.et = 1;
                h.c.b.ep =
                    "{id:" + a + ",eventType:" + (b || "click") + "}";
                h.c.i()
            }
        };
        h.r.d("pv-b", e.ua);
        return e
    })();
    (function () {
        var a = mt.f, b = mt.s, d = mt.event, e = mt.lang, g = h.l, l = h.ea, f = h.R, m = f.O, n = {
            ca: "HM_ce", ua: function () {
                if (c.cetrk && c.cetrk.length) {
                    d.d(document, "click", l.Q(n, c.cetrk));
                    for (var e = 0, g = c.cetrk.length; e < g; e++) {
                        var f;
                        try {
                            f = b.parse(decodeURIComponent(String(c.cetrk[e])))
                        } catch (m) {
                            f = {}
                        }
                        var k = f.p || "";
                        -1 === k.indexOf(">") && (0 === k.indexOf("#") && (k = k.substring(1)), (k = a.fa(k)) && d.d(k, "click", l.$a(n, f)))
                    }
                }
            }, va: function (a) {
                if (c.cetrk && c.cetrk.length) for (var e = 0, d = c.cetrk.length; e < d; e++) {
                    var g;
                    try {
                        g = b.parse(decodeURIComponent(String(c.cetrk[e])))
                    } catch (k) {
                        g =
                            {}
                    }
                    var p = n.Hb(g.p, a);
                    p && n.w(g, p)
                }
            }, Hb: function (a, b) {
                a = String(a);
                if (0 < a.indexOf("*")) {
                    var e = RegExp("^" + a.replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\*/, "\\d+") + "$"), d;
                    for (d in b) if (b.hasOwnProperty(d) && e.test(d)) return d;
                    return v
                }
                return b.hasOwnProperty(a) ? a : v
            }, w: function (b, d) {
                h.c.b.et = 7;
                var g = b && b.k || "", g = e.g(g), l = {};
                if (b && b.a && e.e(b.a, "Object")) {
                    var k = b.a, p;
                    for (p in k) if (k.hasOwnProperty(p)) {
                        var y = n.Pb(k[p] || "", d), y = y ? a.U(y, w) : "";
                        l[p] = y
                    }
                }
                l = n.Eb(l, d || b && b.p);
                l._iden = g;
                f.setProperty("customEvent",
                    l);
                h.c.b.ep = "";
                h.c.b.p = m(f.A("customEvent"));
                h.c.i();
                h.c.b.p = "";
                f.z("customEvent")
            }, Eb: function (b, e) {
                var d = a.ya(e), f = g.Na;
                d && (c.aet && c.aet.length ? (b.ei_ = a.getAttribute(d, f.id) || a.getAttribute(d, "id") || "", b.ec_ = a.getAttribute(d, f.da) || a.getAttribute(d, "class") || "", b.ex_ = a.getAttribute(d, f.ba) || a.ha(d), b.en_ = a.getAttribute(d, f.content) || a.U(d, u), b.et_ = a.getAttribute(d, f.pa) || a.V(d), b.el_ = a.getAttribute(d, f.link) || a.getAttribute(d, "href") || "") : (b.ex_ = a.getAttribute(d, f.ba) || a.ha(d), b.en_ = a.getAttribute(d,
                    f.content) || a.U(d, u)));
                return b
            }, Pb: function (b, e) {
                b = String(b);
                e = String(e);
                if (0 < b.indexOf("*")) {
                    var d = /.*\[(\d+)\]$/.exec(e);
                    b = b.replace("*", d ? d[1] : "1")
                }
                return a.ya(b)
            }
        };
        h.r.d("pv-b", n.ua);
        return n
    })();
    (function () {
        var a = mt.f, b = mt.lang, d = mt.event, e = mt.h, g = h.l, l = h.r, f = [], m = {
            hb: function () {
                c.ctrk && (d.d(document, "mouseup", m.rb()), d.d(window, "unload", function () {
                    m.na()
                }), setInterval(function () {
                    m.na()
                }, g.ub))
            }, rb: function () {
                return function (a) {
                    a = m.Fb(a);
                    if ("" !== a) {
                        var b = (g.ma + "//" + g.Ja + "?" + h.c.bb().replace(/ep=[^&]*/, "ep=" + encodeURIComponent(a))).length;
                        b + (g.N + "").length > g.P || (b + encodeURIComponent(f.join("!") + (f.length ? "!" : "")).length + (g.N + "").length > g.P && m.na(), f.push(a), (f.length >= g.vb || /\*a\*/.test(a)) &&
                        m.na())
                    }
                }
            }, Fb: function (d) {
                var f = d.target || d.srcElement;
                if (0 === g.tb) {
                    var l = (f.tagName || "").toLowerCase();
                    if ("embed" == l || "object" == l) return ""
                }
                var n;
                e.Ea ? (n = Math.max(document.documentElement.scrollTop, document.body.scrollTop), l = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), l = d.clientX + l, n = d.clientY + n) : (l = d.pageX, n = d.pageY);
                d = m.Lb(d, f, l, n);
                var k = window.innerWidth || document.documentElement.clientWidth || document.body.offsetWidth;
                switch (c.align) {
                    case 1:
                        l -= k / 2;
                        break;
                    case 2:
                        l -= k
                }
                k =
                    [];
                k.push(l);
                k.push(n);
                k.push(d.ic);
                k.push(d.jc);
                k.push(d.mc);
                k.push(b.g(d.kc));
                k.push(d.Dc);
                k.push(d.Tb);
                (f = "a" === (f.tagName || "").toLowerCase() ? f : a.Db(f)) ? (k.push("a"), k.push(b.g(encodeURIComponent(f.href)))) : k.push("b");
                return k.join("*")
            }, Lb: function (d, g, f, l) {
                d = a.ha(g);
                var k = 0, p = 0, y = 0, z = 0;
                if (g && (k = g.offsetWidth || g.clientWidth, p = g.offsetHeight || g.clientHeight, z = a.Mb(g), y = z.left, z = z.top, b.e(g.getBBox, "Function") && (p = g.getBBox(), k = p.width, p = p.height), "html" === (g.tagName || "").toLowerCase())) k = Math.max(k,
                    g.clientWidth), p = Math.max(p, g.clientHeight);
                return {
                    ic: Math.round(100 * ((f - y) / k)),
                    jc: Math.round(100 * ((l - z) / p)),
                    mc: e.orientation,
                    kc: d,
                    Dc: k,
                    Tb: p
                }
            }, na: function () {
                0 !== f.length && (h.c.b.et = 2, h.c.b.ep = f.join("!"), h.c.i(), f = [])
            }
        }, n = {
            lb: function () {
                c.ctrk && setInterval(n.qc, g.pc)
            }, qc: function () {
                var a = e.X() + e.J();
                0 < a - h.c.b.vl && (h.c.b.vl = a)
            }
        };
        l.d("pv-b", m.hb);
        l.d("pv-b", n.lb);
        return m
    })();
    (function () {
        var a = mt.lang, b = mt.f, d = mt.event, e = mt.h, g = h.l, l = h.r, f = h.R, m = f.O, n = +new Date, r = [],
            t = {
                Q: function () {
                    return function (e) {
                        if (h.c && h.c.Y && c.aet && c.aet.length) {
                            var d = e.target || e.srcElement;
                            if (d) {
                                var f = h.c.Qa, p = b.getAttribute(d, g.Pa) != v ? u : w;
                                if (b.getAttribute(d, g.Oa) == v) if (p) t.sa(t.za(d, e)); else {
                                    var y = b.V(d);
                                    if (a.K(f, "*") || a.K(f, y)) t.sa(t.za(d, e)); else for (; d.parentNode != v;) {
                                        var p = d.parentNode, y = b.V(p), z = "a" === y && a.K(f, "a") ? u : w,
                                            y = "button" === y && a.K(f, "button") ? u : w,
                                            G = b.getAttribute(p, g.Pa) != v ? u : w;
                                        if (b.getAttribute(p, g.Oa) == v && (z || y || G)) {
                                            t.sa(t.za(p, e));
                                            break
                                        }
                                        d = d.parentNode
                                    }
                                }
                            }
                        }
                    }
                }, za: function (d, f) {
                    var k = {}, p = g.Na;
                    k.id = b.getAttribute(d, p.id) || b.getAttribute(d, "id") || "";
                    k.da = b.getAttribute(d, p.da) || b.getAttribute(d, "class") || "";
                    k.ba = b.getAttribute(d, p.ba) || b.ha(d);
                    k.content = b.getAttribute(d, p.content) || b.U(d, u);
                    k.pa = b.getAttribute(d, p.pa) || b.V(d);
                    k.link = b.getAttribute(d, p.link) || b.getAttribute(d, "href") || "";
                    k.type = f.type || "click";
                    p = a.Fa(d.offsetTop) ? d.offsetTop : 0;
                    "click" === f.type ? p = e.Ea ? f.clientY +
                        Math.max(document.documentElement.scrollTop, document.body.scrollTop) : f.pageY : "touchend" === f.type && (f.Ga && a.e(f.Ga.changedTouches, "Array") && f.Ga.changedTouches.length) && (p = f.Ga.changedTouches[0].pageY);
                    k.xc = p;
                    return k
                }, sa: function (b) {
                    var d = a.g;
                    b = [+new Date - (h.c.F !== q ? h.c.F : n), d(b.id), d(b.da), d(b.pa), d(b.ba), d(b.link), d(b.content), b.type, b.xc].join("*");
                    t.ta(b);
                    a.e(this.aa(), "Function") && this.aa()()
                }, ta: function (a) {
                    a.length > g.P || (encodeURIComponent(r.join("!") + a).length > g.P && (t.w(r.join("!")), r = []),
                        r.push(a))
                }, w: function (a) {
                    h.c.b.et = 5;
                    h.c.b.ep = a;
                    h.c.b.p = m(f.A("autoEventTracking"));
                    h.c.i();
                    h.c.b.p = ""
                }, aa: function () {
                    return function () {
                        r && r.length && (t.w(r.join("!")), r = [])
                    }
                }
            };
        a.L(c.aet) && "" !== c.aet && l.d("pv-b", function () {
            d.d(document, "click", t.Q());
            "ontouchend" in document && d.d(window, "touchend", t.Q());
            d.d(window, "unload", t.aa())
        });
        return t
    })();
    (function () {
        var a = mt.event, b = mt.h, d = h.l, e = h.r, g = +new Date, l = [], f = v, m = {
            yb: function () {
                return function () {
                    h.c && (h.c.Y && c.aet && c.aet.length) && (window.clearTimeout(f), f = window.setTimeout(function () {
                        m.jb(b.X() + b.J())
                    }, 150))
                }
            }, jb: function (a) {
                m.ta([+new Date - (h.c.F !== q ? h.c.F : g), a].join("*"))
            }, ta: function (a) {
                if (encodeURIComponent(l.join("!") + a).length > d.P || 3 < l.length) m.w(l.join("!")), l = [];
                l.push(a)
            }, w: function (a) {
                h.c.b.et = 6;
                h.c.b.vh = b.J();
                h.c.b.ep = a;
                h.c.i()
            }, aa: function () {
                return function () {
                    l && l.length && (m.w(l.join("!")),
                        l = [])
                }
            }
        };
        mt.lang.L(c.aet) && "" !== c.aet && e.d("pv-b", function () {
            a.d(window, "scroll", m.yb());
            a.d(window, "unload", m.aa())
        });
        return m
    })();
    (function () {
        var a = mt.f, b = h.l, d = h.load, e = h.Cb;
        h.r.d("pv-b", function () {
            var g = b.protocol + "//crs.baidu.com/";
            c.rec && a.Ka(function () {
                for (var l = 0, f = c.rp.length; l < f; l++) {
                    var m = c.rp[l][0], n = c.rp[l][1], r = a.fa("hm_t_" + m);
                    if (n && !(2 == n && !r || r && "" !== r.innerHTML)) r = "", r = Math.round(Math.random() * b.N), r = 4 == n ? g + "hl.js?" + ["siteId=" + c.id, "planId=" + m, "rnd=" + r].join("&") : g + "t.js?" + ["siteId=" + c.id, "planId=" + m, "from=" + e(), "referer=" + encodeURIComponent(document.referrer), "title=" + encodeURIComponent(document.title), "rnd=" +
                    r].join("&"), d(r)
                }
            })
        })
    })();
    (function () {
        function a() {
            return function () {
                h.c.b.nv = 0;
                h.c.b.st = 4;
                h.c.b.et = 3;
                h.c.b.ep = h.xa.Nb() + "," + h.xa.Ib();
                h.c.i()
            }
        }

        function b() {
            clearTimeout(z);
            var a;
            p && (a = "visible" == document[p]);
            y && (a = !document[y]);
            m = "undefined" == typeof a ? u : a;
            if ((!f || !n) && m && r) k = u, s = +new Date; else if (f && n && (!m || !r)) k = w, x += +new Date - s;
            f = m;
            n = r;
            z = setTimeout(b, 100)
        }

        function d(a) {
            var b = document, p = "";
            if (a in b) p = a; else for (var d = ["webkit", "ms", "moz", "o"], e = 0; e < d.length; e++) {
                var z = d[e] + a.charAt(0).toUpperCase() + a.slice(1);
                if (z in b) {
                    p =
                        z;
                    break
                }
            }
            return p
        }

        function e(a) {
            if (!("focus" == a.type || "blur" == a.type) || !(a.target && a.target != window)) r = "focus" == a.type || "focusin" == a.type ? u : w, b()
        }

        var g = mt.event, l = h.r, f = u, m = u, n = u, r = u, t = +new Date, s = t, x = 0, k = u,
            p = d("visibilityState"), y = d("hidden"), z;
        b();
        (function () {
            var a = p.replace(/[vV]isibilityState/, "visibilitychange");
            g.d(document, a, b);
            g.d(window, "pageshow", b);
            g.d(window, "pagehide", b);
            "object" == typeof document.onfocusin ? (g.d(document, "focusin", e), g.d(document, "focusout", e)) : (g.d(window, "focus", e),
                g.d(window, "blur", e))
        })();
        h.xa = {
            Nb: function () {
                return +new Date - t
            }, Ib: function () {
                return k ? +new Date - s + x : x
            }
        };
        l.d("pv-b", function () {
            g.d(window, "unload", a())
        });
        l.d("duration-send", a());
        l.d("duration-done", function () {
            s = t = +new Date;
            x = 0
        });
        return h.xa
    })();
    (function () {
        var a = mt.lang, b = h.l, d = h.load, e = {
            ac: function (e) {
                if ((window._dxt === q || a.e(window._dxt, "Array")) && "undefined" !== typeof h.c) {
                    var l = h.c.T();
                    d([b.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(l)].join(""), e)
                }
            }, wc: function (b) {
                if (a.e(b, "String") || a.e(b, "Number")) window._dxt = window._dxt || [], window._dxt.push(["_setUserId", b])
            }
        };
        return h.wb = e
    })();
    (function () {
        function a(a, b, d, e) {
            if (!(a === q || b === q || e === q)) {
                if ("" === a) return [b, d, e].join("*");
                a = String(a).split("!");
                for (var f, g = w, k = 0; k < a.length; k++) if (f = a[k].split("*"), String(b) === f[0]) {
                    f[1] = d;
                    f[2] = e;
                    a[k] = f.join("*");
                    g = u;
                    break
                }
                g || a.push([b, d, e].join("*"));
                return a.join("!")
            }
        }

        function b(a) {
            for (var d in a) if ({}.hasOwnProperty.call(a, d)) {
                var z = a[d];
                e.e(z, "Object") || e.e(z, "Array") ? b(z) : a[d] = String(z)
            }
        }

        var d = mt.url, e = mt.lang, g = mt.s, l = mt.h, f = h.l, m = h.r, n = h.wb, r = h.load, t = h.wa, s = h.R,
            x = s.O, k = {
                $: [], oa: 0, Wa: w,
                C: {Ma: "", page: ""}, init: function () {
                    k.j = 0;
                    s.init();
                    m.d("pv-b", function () {
                        k.xb();
                        k.zb()
                    });
                    m.d("pv-d", function () {
                        k.Ab();
                        k.C.page = ""
                    });
                    m.d("stag-b", function () {
                        h.c.b.api = k.j || k.oa ? k.j + "_" + k.oa : "";
                        h.c.b.ct = [decodeURIComponent(t.getData("Hm_ct_" + c.id) || ""), k.C.Ma, k.C.page].join("!")
                    });
                    m.d("stag-d", function () {
                        h.c.b.api = 0;
                        k.j = 0;
                        k.oa = 0
                    })
                }, xb: function () {
                    var a = window._hmt || [];
                    if (!a || e.e(a, "Array")) window._hmt = {
                        id: c.id, cmd: {}, push: function () {
                            for (var a = window._hmt, b = 0; b < arguments.length; b++) {
                                var d = arguments[b];
                                e.e(d, "Array") && (a.cmd[a.id].push(d), "_setAccount" === d[0] && (1 < d.length && /^[0-9a-f]{32}$/.test(d[1])) && (d = d[1], a.id = d, a.cmd[d] = a.cmd[d] || []))
                            }
                        }
                    }, window._hmt.cmd[c.id] = [], window._hmt.push.apply(window._hmt, a)
                }, zb: function () {
                    var a = window._hmt;
                    if (a && a.cmd && a.cmd[c.id]) for (var b = a.cmd[c.id], d = /^_track(Event|MobConv|Order|RTEvent)$/, e = 0, f = b.length; e < f; e++) {
                        var g = b[e];
                        d.test(g[0]) ? k.$.push(g) : k.Ia(g)
                    }
                    a.cmd[c.id] = {push: k.Ia}
                }, Ab: function () {
                    if (0 < k.$.length) for (var a = 0, b = k.$.length; a < b; a++) k.Ia(k.$[a]);
                    k.$ =
                        v
                }, Ia: function (a) {
                    var b = a[0];
                    if (k.hasOwnProperty(b) && e.e(k[b], "Function")) k[b](a)
                }, _setAccount: function (a) {
                    1 < a.length && /^[0-9a-f]{32}$/.test(a[1]) && (k.j |= 1)
                }, _setAutoPageview: function (a) {
                    if (1 < a.length && (a = a[1], w === a || u === a)) k.j |= 2, h.c.Ua = a
                }, _trackPageview: function (a) {
                    if (1 < a.length && a[1].charAt && "/" === a[1].charAt(0)) {
                        k.j |= 4;
                        h.c.b.sn = h.c.Sa();
                        h.c.b.et = 0;
                        h.c.b.ep = "";
                        h.c.b.vl = l.X() + l.J();
                        h.c.b.kb = 0;
                        h.c.Da ? (h.c.b.nv = 0, h.c.b.st = 4) : h.c.Da = u;
                        var b = h.c.b.u, d = h.c.b.su;
                        h.c.b.u = f.protocol + "//" + document.location.host +
                            a[1];
                        k.Wa || (h.c.b.su = document.location.href);
                        h.c.b.p = x(s.A("pageview"));
                        h.c.i();
                        h.c.b.u = b;
                        h.c.b.su = d;
                        h.c.b.p = "";
                        h.c.F = +new Date;
                        s.z("pageview")
                    }
                }, _trackEvent: function (a) {
                    2 < a.length && (k.j |= 8, h.c.b.nv = 0, h.c.b.st = 4, h.c.b.et = 4, h.c.b.ep = e.g(a[1]) + "*" + e.g(a[2]) + (a[3] ? "*" + e.g(a[3]) : "") + (a[4] ? "*" + e.g(a[4]) : ""), h.c.b.p = x(s.Ba()), h.c.i(), h.c.b.p = "")
                }, _setCustomVar: function (a) {
                    if (!(4 > a.length)) {
                        var b = a[1], d = a[4] || 3;
                        if (0 < b && 6 > b && 0 < d && 4 > d) {
                            k.oa++;
                            for (var f = (h.c.b.cv || "*").split("!"), g = f.length; g < b - 1; g++) f.push("*");
                            f[b - 1] = d + "*" + e.g(a[2]) + "*" + e.g(a[3]);
                            h.c.b.cv = f.join("!");
                            a = h.c.b.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
                            "" !== a ? t.setData("Hm_cv_" + c.id, encodeURIComponent(a), c.age) : t.nc("Hm_cv_" + c.id)
                        }
                    }
                }, _setUserTag: function (b) {
                    if (!(3 > b.length)) {
                        var d = e.g(b[1]);
                        b = e.g(b[2]);
                        if (d !== q && b !== q) {
                            var f = decodeURIComponent(t.getData("Hm_ct_" + c.id) || ""), f = a(f, d, 1, b);
                            t.setData("Hm_ct_" + c.id, encodeURIComponent(f), c.age)
                        }
                    }
                }, _setVisitTag: function (b) {
                    if (!(3 > b.length)) {
                        var d = e.g(b[1]);
                        b = e.g(b[2]);
                        if (d !==
                            q && b !== q) {
                            var f = k.C.Ma, f = a(f, d, 2, b);
                            k.C.Ma = f
                        }
                    }
                }, _setPageTag: function (b) {
                    if (!(3 > b.length)) {
                        var d = e.g(b[1]);
                        b = e.g(b[2]);
                        if (d !== q && b !== q) {
                            var f = k.C.page, f = a(f, d, 3, b);
                            k.C.page = f
                        }
                    }
                }, _setReferrerOverride: function (a) {
                    1 < a.length && (h.c.b.su = a[1].charAt && "/" === a[1].charAt(0) ? f.protocol + "//" + window.location.host + a[1] : a[1], k.Wa = u)
                }, _trackOrder: function (a) {
                    a = a[1];
                    e.e(a, "Object") && (b(a), k.j |= 16, h.c.b.nv = 0, h.c.b.st = 4, h.c.b.et = 94, h.c.b.ep = g.stringify(a), h.c.b.p = x(s.Ba()), h.c.i(), h.c.b.p = "")
                }, _trackMobConv: function (a) {
                    if (a =
                        {
                            webim: 1,
                            tel: 2,
                            map: 3,
                            sms: 4,
                            callback: 5,
                            share: 6
                        }[a[1]]) k.j |= 32, h.c.b.et = 93, h.c.b.ep = a, h.c.i()
                }, _setDataxId: function (a) {
                    a = a[1];
                    n.ac();
                    n.wc(a)
                }, _setUserId: function (a) {
                    a = a[1];
                    if (a !== q && (e.L(a) || e.Fa(a))) {
                        var b = s.A("user").uid_;
                        if (!(b && b.value === e.g(String(a)))) {
                            var b = h.c.b.p, d = h.c.b.ep;
                            h.c.b.et = 8;
                            h.c.b.ep = "";
                            h.c.b.p = "uid_*" + e.g(String(a));
                            h.c.i();
                            var f = {};
                            f.uid_ = a;
                            s.setProperty("user", f, u);
                            h.c.b.p = b;
                            h.c.b.ep = d
                        }
                    }
                }, _clearUserId: function (a) {
                    1 < a.length && u === a[1] && s.z("userId")
                }, _setUserProperty: function (a) {
                    a =
                        a[1];
                    e.e(a, "Object") && s.setProperty("user", a)
                }, _clearUserProperty: function (a) {
                    1 < a.length && u === a[1] && s.z("user")
                }, _setSessionProperty: function (a) {
                    a = a[1];
                    e.e(a, "Object") && s.setProperty("session", a)
                }, _clearSessionProperty: function (a) {
                    1 < a.length && u === a[1] && s.z("session")
                }, _setPageviewProperty: function (a) {
                    a = a[1];
                    e.e(a, "Object") && s.setProperty("pageview", a)
                }, _clearPageviewProperty: function (a) {
                    1 < a.length && u === a[1] && s.z("pageview")
                }, _setAutoEventTrackingProperty: function (a) {
                    a = a[1];
                    e.e(a, "Object") && s.setProperty("autoEventTracking",
                        a)
                }, _clearAutoEventTrackingProperty: function (a) {
                    1 < a.length && u === a[1] && s.z("autoEventTracking")
                }, _setAutoTracking: function (a) {
                    if (1 < a.length && (a = a[1], w === a || u === a)) h.c.Va = a
                }, _setAutoEventTracking: function (a) {
                    if (1 < a.length && (a = a[1], w === a || u === a)) h.c.Y = a
                }, _trackPageDuration: function (a) {
                    1 < a.length ? (a = a[1], 2 === String(a).split(",").length && (h.c.b.et = 3, h.c.b.ep = a, h.c.i())) : m.I("duration-send");
                    m.I("duration-done")
                }, _require: function (a) {
                    1 < a.length && (a = a[1], f.nb.test(d.W(a)) && r(a))
                }, _providePlugin: function (a) {
                    if (1 <
                        a.length) {
                        var b = window._hmt, d = a[1];
                        a = a[2];
                        if (e.K(f.Za, d) && e.e(a, "Function") && (b.plugins = b.plugins || {}, b.G = b.G || {}, b.plugins[d] = a, b.B = b.B || [], a = b.B.slice(), d && a.length && a[0][1] === d)) for (var g = 0, k = a.length; g < k; g++) {
                            var l = a[g][2] || {};
                            if (b.plugins[d] && !b.G[d]) b.G[d] = new b.plugins[d](l), b.B.shift(); else break
                        }
                    }
                }, _requirePlugin: function (a) {
                    if (1 < a.length) {
                        var b = window._hmt, d = a[1], g = a[2] || {};
                        if (e.K(f.Za, d)) if (b.plugins = b.plugins || {}, b.G = b.G || {}, b.plugins[d] && !b.G[d]) b.G[d] = new b.plugins[d](g); else {
                            b.B = b.B ||
                                [];
                            for (var g = 0, l = b.B.length; g < l; g++) if (b.B[g][1] === d) return;
                            b.B.push(a);
                            k._require([v, f.lc + d + ".js"])
                        }
                    }
                }, _trackCustomEvent: function (a) {
                    if (1 < a.length) {
                        var b = a[1];
                        a = a[2];
                        e.e(a, "Object") || (a = {});
                        a._iden = b;
                        s.setProperty("customEvent", a);
                        h.c.b.et = 7;
                        h.c.b.ep = "";
                        h.c.b.p = x(s.A("customEvent"));
                        h.c.i();
                        h.c.b.p = "";
                        s.z("customEvent")
                    }
                }
            };
        k.init();
        h.ob = k;
        return h.ob
    })();
    (function () {
        var a = h.r;
        c.spa !== q && "1" === String(c.spa) && (window._hmt = window._hmt || [], window._hmt.push(["_requirePlugin", "UrlChangeTracker"]), a.d("pv-b", function () {
            "" !== window.location.hash && (h.c.b.u = window.location.href)
        }))
    })();
    (function () {
        function a() {
            "undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = u, this.b = {}, this.Va = this.Ua = u, this.Y = k.Y, this.Qa = g.L(c.aet) && 0 < c.aet.length ? c.aet.split(",") : "", this.Da = w, this.init())
        }

        var b = mt.url, d = mt.eb, e = mt.La, g = mt.lang, l = mt.cookie, f = mt.h, m = mt.sessionStorage, n = mt.s,
            r = mt.event, t = h.wa, s = h.R, x = s.O, k = h.l, p = h.load, y = h.r;
        a.prototype = {
            Z: function (a, b) {
                a = "." + a.replace(/:\d+/, "");
                b = "." + b.replace(/:\d+/, "");
                var d = a.indexOf(b);
                return -1 < d && d + b.length === a.length
            }, la: function (a,
                             b) {
                a = a.replace(/^https?:\/\//, "");
                return 0 === a.indexOf(b)
            }, ia: function (a) {
                for (var d = 0; d < c.dm.length; d++) if (-1 < c.dm[d].indexOf("/")) {
                    if (this.la(a, c.dm[d])) return u
                } else {
                    var e = b.W(a);
                    if (e && this.Z(e, c.dm[d])) return u
                }
                return w
            }, T: function () {
                for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++) if (this.Z(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[/?#].*/, "");
                return a
            }, ga: function () {
                for (var a = 0, b = c.dm.length; a < b; a++) {
                    var d = c.dm[a];
                    if (-1 < d.indexOf("/") && this.la(document.location.href, d)) return d.replace(/^[^/]+(\/.*)/,
                        "$1") + "/"
                }
                return "/"
            }, Qb: function () {
                if (!document.referrer) return k.H - k.M > c.vdur ? 1 : 4;
                var a = w;
                this.ia(document.referrer) && this.ia(document.location.href) ? a = u : (a = b.W(document.referrer), a = this.Z(a || "", document.location.hostname));
                return a ? k.H - k.M > c.vdur ? 1 : 4 : 3
            }, uc: function () {
                var a, b, d, e, f;
                k.M = t.getData("Hm_lpvt_" + c.id) || 0;
                13 === k.M.length && (k.M = Math.round(k.M / 1E3));
                b = this.Qb();
                a = 4 !== b ? 1 : 0;
                if (d = t.getData("Hm_lvt_" + c.id)) {
                    e = d.split(",");
                    for (f = e.length - 1; 0 <= f; f--) 13 === e[f].length && (e[f] = "" + Math.round(e[f] /
                        1E3));
                    for (; 2592E3 < k.H - e[0];) e.shift();
                    f = 4 > e.length ? 2 : 3;
                    for (1 === a && e.push(k.H); 4 < e.length;) e.shift();
                    d = e.join(",");
                    e = e[e.length - 1]
                } else d = k.H, e = "", f = 1;
                t.setData("Hm_lvt_" + c.id, d, c.age);
                t.setData("Hm_lpvt_" + c.id, k.H);
                d = l.gc(this.T(), this.ga());
                if (0 === c.nv && this.ia(document.location.href) && ("" === document.referrer || this.ia(document.referrer))) a = 0, b = 4;
                this.b.nv = a;
                this.b.st = b;
                this.b.cc = d;
                this.b.lt = e;
                this.b.lv = f
            }, bb: function () {
                for (var a = [], b = this.b.et, d = +new Date, e = 0, f = k.fb.length; e < f; e++) {
                    var g = k.fb[e],
                        l = this.b[g];
                    "undefined" !== typeof l && "" !== l && ("tt" !== g || "tt" === g && 0 === b) && (("ct" !== g || "ct" === g && 0 === b) && ("kb" !== g || "kb" === g && 3 === b)) && a.push(g + "=" + encodeURIComponent(l))
                }
                switch (b) {
                    case 0:
                        this.b.rt && a.push("rt=" + encodeURIComponent(this.b.rt));
                        break;
                    case 5:
                        a.push("_lpt=" + this.F);
                        a.push("_ct=" + d);
                        break;
                    case 6:
                        a.push("_lpt=" + this.F);
                        a.push("_ct=" + d);
                        break;
                    case 90:
                        this.b.rt && a.push("rt=" + this.b.rt)
                }
                return a.join("&")
            }, vc: function () {
                this.uc();
                this.b.si = c.id;
                this.b.sn = this.Sa();
                this.b.su = document.referrer;
                this.b.ds = f.oc;
                this.b.cl = f.colorDepth + "-bit";
                this.b.ln = String(f.language).toLowerCase();
                this.b.ja = f.javaEnabled ? 1 : 0;
                this.b.ck = f.cookieEnabled ? 1 : 0;
                this.b.lo = "number" === typeof _bdhm_top ? 1 : 0;
                this.b.fl = e.Sb();
                this.b.v = "1.2.68";
                this.b.cv = decodeURIComponent(t.getData("Hm_cv_" + c.id) || "");
                this.b.tt = document.title || "";
                this.b.vl = f.X() + f.J();
                var a = document.location.href;
                this.b.cm = b.o(a, k.Xb) || "";
                this.b.cp = b.o(a, k.Yb) || b.o(a, k.Ac) || "";
                this.b.cw = b.o(a, k.Wb) || b.o(a, k.Cc) || "";
                this.b.ci = b.o(a, k.Ub) || b.o(a, k.zc) ||
                    "";
                this.b.cf = b.o(a, k.Zb) || b.o(a, k.Bc) || "";
                this.b.cu = b.o(a, k.Vb) || b.o(a, k.yc) || "";
                f.ec() && (this.b.u = window.location.href)
            }, init: function () {
                try {
                    this.vc(), 0 === this.b.nv ? this.tc() : this.Ra(), h.c = this, this.qb(), this.pb(), y.I("pv-b"), this.rc()
                } catch (a) {
                    var b = [];
                    b.push("si=" + c.id);
                    b.push("n=" + encodeURIComponent(a.name));
                    b.push("m=" + encodeURIComponent(a.message));
                    b.push("r=" + encodeURIComponent(document.referrer));
                    d.log(k.ma + "//" + k.Ja + "?" + b.join("&"))
                }
            }, rc: function () {
                function a() {
                    y.I("pv-d")
                }

                this.Ua ? (this.Da =
                    u, this.b.et = 0, this.b.ep = "", this.b.p = x(s.A("pageview")), this.b.vl = f.X() + f.J(), this.i(a), this.b.p = "") : a();
                this.F = +new Date;
                s.z("pageview")
            }, i: function (a) {
                if (this.Va) {
                    var b = this;
                    b.b.rnd = Math.round(Math.random() * k.N);
                    y.I("stag-b");
                    var e = k.ma + "//" + k.Ja + "?" + b.bb();
                    y.I("stag-d");
                    b.mb(e);
                    d.log(e, function (d) {
                        b.ab(d);
                        g.e(a, "Function") && a.call(b)
                    })
                }
            }, qb: function () {
                var a = document.location.hash.substring(1), d = RegExp(c.id),
                    e = b.W(document.referrer) === k.gb ? 1 : 0, f = b.o(a, "jn"),
                    g = /^heatlink$|^select$|^pageclick$/.test(f);
                a && (d.test(a) && e && g) && (this.b.rnd = Math.round(Math.random() * k.N), a = document.createElement("script"), a.setAttribute("type", "text/javascript"), a.setAttribute("charset", "utf-8"), a.setAttribute("src", k.protocol + "//" + c.js + f + ".js?" + this.b.rnd), f = document.getElementsByTagName("script")[0], f.parentNode.insertBefore(a, f))
            }, pb: function () {
                if (window.postMessage && window.self !== window.parent) {
                    var a = this;
                    r.d(window, "message", function (d) {
                        if (b.W(d.origin) === k.gb) {
                            d = d.data || {};
                            var e = d.jn || "", f = /^customevent$/.test(e);
                            if (RegExp(c.id).test(d.sd || "") && f) a.b.rnd = Math.round(Math.random() * k.N), p(k.protocol + "//" + c.js + e + ".js?" + a.b.rnd)
                        }
                    });
                    window.parent.postMessage({
                        id: c.id,
                        url: document.location.href,
                        status: "__Messenger__hmLoaded"
                    }, "*")
                }
            }, mb: function (a) {
                var b;
                try {
                    b = n.parse(m.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                var e = this.b.u ? "" : "&u=" + encodeURIComponent(document.location.href);
                b.push(a.replace(/^https?:\/\//, "") + e);
                m.set("Hm_unsent_" + c.id, n.stringify(b))
            }, ab: function (a) {
                var b;
                try {
                    b = n.parse(m.get("Hm_unsent_" + c.id) ||
                        "[]")
                } catch (d) {
                    b = []
                }
                if (b.length) {
                    a = a.replace(/^https?:\/\//, "");
                    for (var e = 0; e < b.length; e++) if (a.replace(/&u=[^&]*/, "") === b[e].replace(/&u=[^&]*/, "")) {
                        b.splice(e, 1);
                        break
                    }
                    b.length ? m.set("Hm_unsent_" + c.id, n.stringify(b)) : this.Ra()
                }
            }, Ra: function () {
                m.remove("Hm_unsent_" + c.id)
            }, tc: function () {
                var a = this, b;
                try {
                    b = n.parse(m.get("Hm_unsent_" + c.id) || "[]")
                } catch (e) {
                    b = []
                }
                if (b.length) for (var f = function (b) {
                    d.log(k.ma + "//" + b, function (b) {
                        a.ab(b)
                    })
                }, g = 0; g < b.length; g++) f(b[g])
            }, Sa: function () {
                return Math.round(+new Date /
                    1E3) % 65535
            }
        };
        return new a
    })();
    var B = h.l, C = h.load;
    if (c.apps) {
        var D = [B.protocol, "//ers.baidu.com/app/s.js?"];
        D.push(c.apps);
        C(D.join(""))
    }
    (function () {
        var a = mt.event, b = mt.lang, d = h.l;
        if (c.kbtrk && "undefined" !== typeof h.c) {
            h.c.b.kb = b.Fa(h.c.b.kb) ? h.c.b.kb : 0;
            var e = function () {
                h.c.b.et = 85;
                h.c.b.ep = h.c.b.kb;
                h.c.i()
            };
            a.d(document, "keyup", function () {
                h.c.b.kb++
            });
            a.d(window, "unload", function () {
                e()
            });
            setInterval(e, d.hc)
        }
    })();
    var E = h.l, F = h.load;
    c.pt && F([E.protocol, "//ada.baidu.com/phone-tracker/insert_bdtj?sid=", c.pt].join(""));
    var H = h.l, I = h.load;
    c.lxb && I([H.protocol, "//lxbjs.baidu.com/lxb.js?sid=", c.lxb].join(""));
    var J = h.load, K = h.l.protocol;
    if (c.qiao) {
        for (var L = [K + "//goutong.baidu.com/site/"], M = c.id, N = 5381, O = M.length, P = 0; P < O; P++) N = (33 * N + Number(M.charCodeAt(P))) % 4294967296;
        2147483648 < N && (N -= 2147483648);
        L.push(N % 1E3 + "/");
        L.push(c.id + "/b.js");
        L.push("?siteId=" + c.qiao);
        J(L.join(""))
    }
    (function () {
        var a = mt.h, b = mt.lang, d = mt.event, e = mt.s;
        if ("undefined" !== typeof h.c && (c.med || (!a.Ea || 7 < a.Kb()) && c.cvcc)) {
            var g, l, f, m, n = function (a) {
                if (a.item) {
                    for (var b = a.length, d = Array(b); b--;) d[b] = a[b];
                    return d
                }
                return [].slice.call(a)
            }, r = function (a, b) {
                for (var d in a) if (a.hasOwnProperty(d) && b.call(a, d, a[d]) === w) return w
            }, t = function (a, d) {
                var k = {};
                k.n = g;
                k.t = "clk";
                k.v = a;
                if (d) {
                    var l = d.getAttribute("href"), m = d.getAttribute("onclick") ? "" + d.getAttribute("onclick") : v,
                        n = d.getAttribute("id") || "";
                    f.test(l) ? (k.sn =
                        "mediate", k.snv = l) : b.e(m, "String") && f.test(m) && (k.sn = "wrap", k.snv = m);
                    k.id = n
                }
                h.c.b.et = 86;
                h.c.b.ep = e.stringify(k);
                h.c.i();
                for (k = +new Date; 400 >= +new Date - k;) ;
            };
            if (c.med) l = "/zoosnet", g = "swt", f = /swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i, m = {
                click: function () {
                    for (var a = [], b = n(document.getElementsByTagName("a")), b = [].concat.apply(b, n(document.getElementsByTagName("area"))), b = [].concat.apply(b, n(document.getElementsByTagName("img"))), d, e, g = 0, k = b.length; g < k; g++) d = b[g], e =
                        d.getAttribute("onclick"), d = d.getAttribute("href"), (f.test(e) || f.test(d)) && a.push(b[g]);
                    return a
                }
            }; else if (c.cvcc) {
                l = "/other-comm";
                g = "other";
                f = c.cvcc.q || q;
                var s = c.cvcc.id || q;
                m = {
                    click: function () {
                        for (var a = [], b = n(document.getElementsByTagName("a")), b = [].concat.apply(b, n(document.getElementsByTagName("area"))), b = [].concat.apply(b, n(document.getElementsByTagName("img"))), d, e, g, k = 0, l = b.length; k < l; k++) d = b[k], f !== q ? (e = d.getAttribute("onclick"), g = d.getAttribute("href"), s ? (d = d.getAttribute("id"), (f.test(e) ||
                            f.test(g) || s.test(d)) && a.push(b[k])) : (f.test(e) || f.test(g)) && a.push(b[k])) : s !== q && (d = d.getAttribute("id"), s.test(d) && a.push(b[k]));
                        return a
                    }
                }
            }
            if ("undefined" !== typeof m && "undefined" !== typeof f) {
                var x;
                l += /\/$/.test(l) ? "" : "/";
                var k = function (a, d) {
                    if (x === d) return t(l + a, d), w;
                    if (b.e(d, "Array") || b.e(d, "NodeList")) for (var e = 0, f = d.length; e < f; e++) if (x === d[e]) return t(l + a + "/" + (e + 1), d[e]), w
                };
                d.d(document, "mousedown", function (a) {
                    a = a || window.event;
                    x = a.target || a.srcElement;
                    var d = {};
                    for (r(m, function (a, e) {
                        d[a] = b.e(e,
                            "Function") ? e() : document.getElementById(e)
                    }); x && x !== document && r(d, k) !== w;) x = x.parentNode
                })
            }
        }
    })();
    (function () {
        var a = mt.f, b = mt.lang, d = mt.event, e = mt.s;
        if ("undefined" !== typeof h.c && b.e(c.cvcf, "Array") && 0 < c.cvcf.length) {
            var g = {
                ib: function () {
                    for (var b = c.cvcf.length, e, m = 0; m < b; m++) (e = a.fa(decodeURIComponent(c.cvcf[m]))) && d.d(e, "click", g.ea())
                }, ea: function () {
                    return function () {
                        h.c.b.et = 86;
                        var a = {n: "form", t: "clk"};
                        a.id = this.id;
                        h.c.b.ep = e.stringify(a);
                        h.c.i()
                    }
                }
            };
            a.Ka(function () {
                g.ib()
            })
        }
    })();
    (function () {
        var a = mt.event, b = mt.s;
        if (c.med && "undefined" !== typeof h.c) {
            var d = {n: "anti", sb: 0, kb: 0, clk: 0}, e = function () {
                h.c.b.et = 86;
                h.c.b.ep = b.stringify(d);
                h.c.i()
            };
            a.d(document, "click", function () {
                d.clk++
            });
            a.d(document, "keyup", function () {
                d.kb = 1
            });
            a.d(window, "scroll", function () {
                d.sb++
            });
            a.d(window, "load", function () {
                setTimeout(e, 5E3)
            })
        }
    })();
})();
