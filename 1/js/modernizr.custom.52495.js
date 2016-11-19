window.Modernizr = function(e, t, n) {
    function r(e) {
        h.cssText = e
    }
    function o(e, t) {
        return r(x.join(e + ";") + (t || ""))
    }
    function i(e, t) {
        return typeof e === t
    }
    function a(e, t) {
        return !! ~ ("" + e).indexOf(t)
    }
    function u(e, t) {
        for (var r in e) {
            var o = e[r];
            if (!a(o, "-") && h[o] !== n) return "pfx" == t ? o: !0
        }
        return ! 1
    }
    function c(e, t, r) {
        for (var o in e) {
            var a = t[e[o]];
            if (a !== n) return r === !1 ? e[o] : i(a, "function") ? a.bind(r || t) : a
        }
        return ! 1
    }
    function s(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1),
        o = (e + " " + k.join(r + " ") + r).split(" ");
        return i(t, "string") || i(t, "undefined") ? u(o, t) : (o = (e + " " + z.join(r + " ") + r).split(" "), c(o, t, n))
    }
    function d() {
        m.input = function(n) {
            for (var r = 0,
            o = n.length; o > r; r++) P[n[r]] = n[r] in b;
            return P.list && (P.list = !!t.createElement("datalist") && !!e.HTMLDataListElement),
            P
        } ("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),
        m.inputtypes = function(e) {
            for (var r, o, i, a = 0,
            u = e.length; u > a; a++) b.setAttribute("type", o = e[a]),
            r = "text" !== b.type,
            r && (b.value = w, b.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && b.style.WebkitAppearance !== n ? (g.appendChild(b), i = t.defaultView, r = i.getComputedStyle && "textfield" !== i.getComputedStyle(b, null).WebkitAppearance && 0 !== b.offsetHeight, g.removeChild(b)) : /^(search|tel)$/.test(o) || (r = /^(url|email)$/.test(o) ? b.checkValidity && b.checkValidity() === !1 : b.value != w)),
            M[e[a]] = !!r;
            return M
        } ("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var l, p, f = "2.6.2",
    m = {},
    g = t.documentElement,
    v = "modernizr",
    y = t.createElement(v),
    h = y.style,
    b = t.createElement("input"),
    w = ":)",
    S = {}.toString,
    x = " -webkit- -moz- -o- -ms- ".split(" "),
    C = "Webkit Moz O ms",
    k = C.split(" "),
    z = C.toLowerCase().split(" "),
    E = {
        svg: "http://www.w3.org/2000/svg"
    },
    T = {},
    M = {},
    P = {},
    I = [],
    j = I.slice,
    A = function(e, n, r, o) {
        var i, a, u, c, s = t.createElement("div"),
        d = t.body,
        l = d || t.createElement("body");
        if (parseInt(r, 10)) for (; r--;) u = t.createElement("div"),
        u.id = o ? o[r] : v + (r + 1),
        s.appendChild(u);
        return i = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""),
        s.id = v,
        (d ? s: l).innerHTML += i,
        l.appendChild(s),
        d || (l.style.background = "", l.style.overflow = "hidden", c = g.style.overflow, g.style.overflow = "hidden", g.appendChild(l)),
        a = n(s, e),
        d ? s.parentNode.removeChild(s) : (l.parentNode.removeChild(l), g.style.overflow = c),
        !!a
    },
    W = function() {
        function e(e, o) {
            o = o || t.createElement(r[e] || "div"),
            e = "on" + e;
            var a = e in o;
            return a || (o.setAttribute || (o = t.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(e, ""), a = i(o[e], "function"), i(o[e], "undefined") || (o[e] = n), o.removeAttribute(e))),
            o = null,
            a
        }
        var r = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return e
    } (),
    $ = {}.hasOwnProperty;
    p = i($, "undefined") || i($.call, "undefined") ?
    function(e, t) {
        return t in e && i(e.constructor.prototype[t], "undefined")
    }: function(e, t) {
        return $.call(e, t)
    },
    Function.prototype.bind || (Function.prototype.bind = function(e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError;
        var n = j.call(arguments, 1),
        r = function() {
            if (this instanceof r) {
                var o = function() {};
                o.prototype = t.prototype;
                var i = new o,
                a = t.apply(i, n.concat(j.call(arguments)));
                return Object(a) === a ? a: i
            }
            return t.apply(e, n.concat(j.call(arguments)))
        };
        return r
    }),
    T.flexbox = function() {
        return s("flexWrap")
    },
    T.flexboxlegacy = function() {
        return s("boxDirection")
    },
    T.canvas = function() {
        var e = t.createElement("canvas");
        return !! e.getContext && !!e.getContext("2d")
    },
    T.canvastext = function() {
        return !! m.canvas && !!i(t.createElement("canvas").getContext("2d").fillText, "function")
    },
    T.webgl = function() {
        return !! e.WebGLRenderingContext
    },
    T.touch = function() {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : A(["@media (", x.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""),
        function(e) {
            n = 9 === e.offsetTop
        }),
        n
    },
    T.geolocation = function() {
        return "geolocation" in navigator
    },
    T.postmessage = function() {
        return !! e.postMessage
    },
    T.websqldatabase = function() {
        return !! e.openDatabase
    },
    T.indexedDB = function() {
        return !! s("indexedDB", e)
    },
    T.hashchange = function() {
        return W("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
    },
    T.history = function() {
        return !! e.history && !!history.pushState
    },
    T.draganddrop = function() {
        var e = t.createElement("div");
        return "draggable" in e || "ondragstart" in e && "ondrop" in e
    },
    T.websockets = function() {
        return "WebSocket" in e || "MozWebSocket" in e
    },
    T.rgba = function() {
        return r("background-color:rgba(150,255,150,.5)"),
        a(h.backgroundColor, "rgba")
    },
    T.hsla = function() {
        return r("background-color:hsla(120,40%,100%,.5)"),
        a(h.backgroundColor, "rgba") || a(h.backgroundColor, "hsla")
    },
    T.multiplebgs = function() {
        return r("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(h.background)
    },
    T.backgroundsize = function() {
        return s("backgroundSize")
    },
    T.borderimage = function() {
        return s("borderImage")
    },
    T.borderradius = function() {
        return s("borderRadius")
    },
    T.boxshadow = function() {
        return s("boxShadow")
    },
    T.textshadow = function() {
        return "" === t.createElement("div").style.textShadow
    },
    T.opacity = function() {
        return o("opacity:.55"),
        /^0.55$/.test(h.opacity)
    },
    T.cssanimations = function() {
        return s("animationName")
    },
    T.csscolumns = function() {
        return s("columnCount")
    },
    T.cssgradients = function() {
        var e = "background-image:",
        t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
        n = "linear-gradient(left top,#9f9, white);";
        return r((e + "-webkit- ".split(" ").join(t + e) + x.join(n + e)).slice(0, -e.length)),
        a(h.backgroundImage, "gradient")
    },
    T.cssreflections = function() {
        return s("boxReflect")
    },
    T.csstransforms = function() {
        return !! s("transform")
    },
    T.csstransforms3d = function() {
        var e = !!s("perspective");
        return e && "webkitPerspective" in g.style && A("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
        function(t) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight
        }),
        e
    },
    T.csstransitions = function() {
        return s("transition")
    },
    T.fontface = function() {
        var e;
        return A('@font-face {font-family:"font";src:url("https://")}',
        function(n, r) {
            var o = t.getElementById("smodernizr"),
            i = o.sheet || o.styleSheet,
            a = i ? i.cssRules && i.cssRules[0] ? i.cssRules[0].cssText: i.cssText || "": "";
            e = /src/i.test(a) && 0 === a.indexOf(r.split(" ")[0])
        }),
        e
    },
    T.generatedcontent = function() {
        var e;
        return A(["#", v, "{font:0/0 a}#", v, ':after{content:"', w, '";visibility:hidden;font:3px/1 a}'].join(""),
        function(t) {
            e = t.offsetHeight >= 3
        }),
        e
    },
    T.video = function() {
        var e = t.createElement("video"),
        n = !1;
        try { (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch(r) {}
        return n
    },
    T.audio = function() {
        var e = t.createElement("audio"),
        n = !1;
        try { (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch(r) {}
        return n
    },
    T.localstorage = function() {
        try {
            return localStorage.setItem(v, v),
            localStorage.removeItem(v),
            !0
        } catch(e) {
            return ! 1
        }
    },
    T.sessionstorage = function() {
        try {
            return sessionStorage.setItem(v, v),
            sessionStorage.removeItem(v),
            !0
        } catch(e) {
            return ! 1
        }
    },
    T.webworkers = function() {
        return !! e.Worker
    },
    T.applicationcache = function() {
        return !! e.applicationCache
    },
    T.svg = function() {
        return !! t.createElementNS && !!t.createElementNS(E.svg, "svg").createSVGRect
    },
    T.inlinesvg = function() {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>",
        (e.firstChild && e.firstChild.namespaceURI) == E.svg
    },
    T.smil = function() {
        return !! t.createElementNS && /SVGAnimate/.test(S.call(t.createElementNS(E.svg, "animate")))
    },
    T.svgclippaths = function() {
        return !! t.createElementNS && /SVGClipPath/.test(S.call(t.createElementNS(E.svg, "clipPath")))
    };
    for (var N in T) p(T, N) && (l = N.toLowerCase(), m[l] = T[N](), I.push((m[l] ? "": "no-") + l));
    return m.input || d(),
    m.addTest = function(e, t) {
        if ("object" == typeof e) for (var r in e) p(e, r) && m.addTest(r, e[r]);
        else {
            if (e = e.toLowerCase(), m[e] !== n) return m;
            t = "function" == typeof t ? t() : t,
            "undefined" != typeof enableClasses && enableClasses && (g.className += " " + (t ? "": "no-") + e),
            m[e] = t
        }
        return m
    },
    r(""),
    y = b = null,
    m._version = f,
    m._prefixes = x,
    m._domPrefixes = z,
    m._cssomPrefixes = k,
    m.hasEvent = W,
    m.testProp = function(e) {
        return u([e])
    },
    m.testAllProps = s,
    m.testStyles = A,
    m
} (this, this.document),
function() {
    var e = document.createElement("a"),
    t = e.style,
    n = "right 10px bottom 10px";
    Modernizr.addTest("bgpositionshorthand",
    function() {
        return t.cssText = "background-position: " + n + ";",
        t.backgroundPosition === n
    })
} (),
Modernizr.testStyles("#modernizr{background-size:cover}",
function(e) {
    var t = window.getComputedStyle ? window.getComputedStyle(e, null) : e.currentStyle;
    Modernizr.addTest("bgsizecover", "cover" == t.backgroundSize)
}),
Modernizr.addTest("bgpositionxy",
function() {
    return Modernizr.testStyles("#modernizr {background-position: 3px 5px;}",
    function(e) {
        var t = window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle,
        n = "3px" == t.backgroundPositionX || "3px" == t["background-position-x"],
        r = "5px" == t.backgroundPositionY || "5px" == t["background-position-y"];
        return n && r
    })
}),
function() {
    function e(e) {
        return window.getComputedStyle ? getComputedStyle(e, null).getPropertyValue("background") : e.currentStyle.background
    }
    Modernizr.testStyles(" #modernizr { background-repeat: round; } ",
    function(t) {
        Modernizr.addTest("bgrepeatround", "round" == e(t))
    }),
    Modernizr.testStyles(" #modernizr { background-repeat: space; } ",
    function(t) {
        Modernizr.addTest("bgrepeatspace", "space" == e(t))
    })
} (),
Modernizr.addTest("pointerevents",
function() {
    var e, t = document.createElement("x"),
    n = document.documentElement,
    r = window.getComputedStyle;
    return "pointerEvents" in t.style ? (t.style.pointerEvents = "auto", t.style.pointerEvents = "x", n.appendChild(t), e = r && "auto" === r(t, "").pointerEvents, n.removeChild(t), !!e) : !1
}),
Modernizr.addTest("cssvhunit",
function() {
    var e;
    return Modernizr.testStyles("#modernizr { height: 50vh; }",
    function(t) {
        var n = parseInt(window.innerHeight / 2, 10),
        r = parseInt((window.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).height, 10);
        e = r == n
    }),
    e
}),
Modernizr.addTest("cssvmaxunit",
function() {
    var e;
    return Modernizr.testStyles("#modernizr { width: 50vmax; }",
    function(t) {
        var n = window.innerWidth / 100,
        r = window.innerHeight / 100,
        o = parseInt((window.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).width, 10);
        e = parseInt(50 * Math.max(n, r), 10) == o
    }),
    e
}),
Modernizr.addTest("cssvwunit",
function() {
    var e;
    return Modernizr.testStyles("#modernizr { width: 50vw; }",
    function(t) {
        var n = parseInt(window.innerWidth / 2, 10),
        r = parseInt((window.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).width, 10);
        e = r == n
    }),
    e
}),
Modernizr.addTest("cssvminunit",
function() {
    var e;
    return Modernizr.testStyles("#modernizr { width: 50vmin; }",
    function(t) {
        var n = window.innerWidth / 100,
        r = window.innerHeight / 100,
        o = parseInt((window.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).width, 10);
        e = parseInt(50 * Math.min(n, r), 10) == o
    }),
    e
});