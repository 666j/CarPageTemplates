function HashManager() {
    this.BAD_HASH_STR_ARRAY = ["?", "", "#!", "", " "],
    this.hashChangeCallback = null,
    this.currentHashArray = [],
    this.previousHashArray = [],
    this.$footerLanguageAnchorTags = null,
    this.isInitHashChange = !0
}
function Section(t, e, n) {
    if (this.sectionData = t, this.defaultParallax = n, this.sectionData.onInit(this.sectionData), this.$elem = $(t.containerSelectorStr), this.elemData = this.$elem.data(), this.name = this.$elem.attr("id") || "", this.initSectionDisplay = this.$elem.css("display"), this.scrollPositionY = 0, this.TIMELINE_SCALER = 2, this.isInitUpdate = !0, this.isInView = !1, this.isInitAndLoaded = !1, this.viewableScrollPositionRange = {
        min: e + this.sectionData.START_POS_OFFSET * this.TIMELINE_SCALER,
        max: e + (this.sectionData.START_POS_OFFSET + this.sectionData.SECTION_SCROLLY_LENGTH) * this.TIMELINE_SCALER
    },
    this.viewableScrollPositionRangeCropped = {
        min: this.viewableScrollPositionRange.min,
        max: this.viewableScrollPositionRange.max
    },
    this.snapPoints = [], this.numOfSnapPoints = 0, this.sectionData.snapPoints) {
        this.snapPoints = this.sectionData.snapPoints,
        this.numOfSnapPoints = this.snapPoints.length;
        for (var i = 0; i < this.snapPoints.length; i++) this.snapPoints[i].scrollPosY *= this.TIMELINE_SCALER,
        this.snapPoints[i].scrollPosY += this.viewableScrollPositionRange.min
    }
    this.viewportScaleMultiplier = null,
    this.viewportTranslateOffsets = null,
    this.elements = [],
    this.numOfElements = this.sectionData.elements.length
}
function SectionElement(t, e, n, i) {
    if (this.elemAnimationData = t, this.DEFAULT_PARALLAX = i, this.$elem = $(this.elemAnimationData.selectorString), this.elemWidth = this.$elem.width(), this.elemHeight = this.$elem.height(), this.$elemData = this.$elem.data(), this.name = this.$elem.attr("id") || "", Modernizr.touch && this.$elem.hasClass("lockup-instructions") && (this.$elemData.img_src = this.$elemData.img_src.replace("-laptop", "")), this.isImg = this.$elem.is("img"), this.isVideo = this.$elem.hasClass("video"), this.isSpritesheet = this.$elem.hasClass("spritesheet"), this.scaleOffsetDisabled = this.$elem.hasClass("noScaleOffset"), this.rawKeyframes = $.extend(!0, [], this.elemAnimationData.keyframes), this.numOfKeyframes = this.rawKeyframes.length, this.hasKeyframes = this.numOfKeyframes > 0, this.keyframes = null, this.hasKeyframes) for (var o = 0; o < this.numOfKeyframes; o++) this.rawKeyframes[o].scrollYPos *= n,
    this.rawKeyframes[o].scrollYPos += e;
    if (this.isResponsiveToCenterSectionContainer = this.$elem.hasClass("responsiveToCenterSectionContainer"), this.isDisplayNoneDisabled = this.$elem.hasClass("noDisplayNone"), this.nativeOnScreenStyle = this.getNativeOnScreenStyle(), this.scaledOnScreenStyle = null, this.parallaxLockupTransitionTween = null, this.parallaxLockupTransitionPercentage = 0, this.viewportScaleMultiplier = null, this.viewportTranslateOffsets = null, this.elemAnimationData.spriteSheetData) {
        var a = this.elemAnimationData.spriteSheetData;
        if (this.spriteSheet = {
            totalColumns: 0,
            totalRows: 0,
            animLoopDuration: 0,
            numberOfFramesInSheet: 0,
            currentUpdateMS: 0
        },
        this.nativeOnScreenStyle.backgroundSize) {
            var r = parseFloat(this.nativeOnScreenStyle.width),
            s = parseFloat(this.nativeOnScreenStyle.height);
            this.spriteSheet.frameAnimSequence = a.frameAnimSequence,
            this.spriteSheet.numOfFramesInSequence = a.frameAnimSequence.length,
            this.spriteSheet.animInterval = a.animInterval ? a.animInterval: null,
            this.spriteSheet.numberOfFramesInSheet = this.nativeOnScreenStyle.backgroundSize.x * this.nativeOnScreenStyle.backgroundSize.y / (r * s) - 1,
            this.spriteSheet.totalColumns = this.nativeOnScreenStyle.backgroundSize.x / r,
            this.spriteSheet.totalRows = this.nativeOnScreenStyle.backgroundSize.y / s,
            this.spriteSheet.animLoopDuration = this.spriteSheet.numOfFramesInSequence * this.spriteSheet.animInterval
        }
    }
    this.currentStyle = {
        translateOffsetParallax: {
            x: 0,
            y: 0
        },
        backgroundPosition: {
            x: 0,
            y: 0
        },
        opacity: 1,
        scale: {
            x: 1,
            y: 1
        },
        rotate: 0,
        translate: {
            x: 0,
            y: 0
        },
        display: "none"
    },
    this.updateOpacity = Modernizr.opacity ? this.setCSSOpacity: this.setCSSNoOpacity,
    this.updateTransforms = this.isVideo ? this.setCSSNoTransforms: Modernizr.csstransforms3d ? this.setCSSTransforms3D: Modernizr.csstransforms ? this.setCSSTransforms: this.setCSSNoTransforms
}
function FullScreenVideoJSPlayer(t) {
    this.propObj = t,
    this.isPlayerReady = !1,
    this.onReadyCallback = null,
    this.hasPlayStarted = !1,
    this.$videoContainer = this.propObj.$videoContainer,
    this.$blackBg = this.propObj.$blackBg;
    var e = this;
    this.player = videojs(this.propObj.videoElemString).ready(function() {
        e.onPlayerReady(),
        this.on("ended",
        function() {
            _gaq.push(["_trackEvent", "Killing Kennedy", "Video Complete", e.propObj.videoElemString]),
            e.onVideoComplete()
        }),
        this.on("error",
        function() {}),
        this.on("play",
        function() {
            e.hasPlayStarted || (e.hasPlayStarted = !0, Nav.mutePrimarySound && e.player.volume(0), _gaq.push(["_trackEvent", "Killing Kennedy", "Video Play", e.propObj.videoElemString]))
        })
    }),
    this.$vjsTech = this.$videoContainer.find(".vjs-tech"),
    this.$vjsBigPlayButton = this.$videoContainer.find(".vjs-big-play-button"),
    this.$vjsControlBar = this.$videoContainer.find(".vjs-control-bar"),
    FullScreenVideoManager.vPlayers.push(this)
} !
function(t, e) {
    function n(t) {
        var e = t.length,
        n = ce.type(t);
        return ce.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || "function" !== n && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    function i(t) {
        var e = Ce[t] = {};
        return ce.each(t.match(de) || [],
        function(t, n) {
            e[n] = !0
        }),
        e
    }
    function o(t, n, i, o) {
        if (ce.acceptData(t)) {
            var a, r, s = ce.expando,
            l = t.nodeType,
            u = l ? ce.cache: t,
            c = l ? t[s] : t[s] && s;
            if (c && u[c] && (o || u[c].data) || i !== e || "string" != typeof n) return c || (c = l ? t[s] = ee.pop() || ce.guid++:s),
            u[c] || (u[c] = l ? {}: {
                toJSON: ce.noop
            }),
            ("object" == typeof n || "function" == typeof n) && (o ? u[c] = ce.extend(u[c], n) : u[c].data = ce.extend(u[c].data, n)),
            r = u[c],
            o || (r.data || (r.data = {}), r = r.data),
            i !== e && (r[ce.camelCase(n)] = i),
            "string" == typeof n ? (a = r[n], null == a && (a = r[ce.camelCase(n)])) : a = r,
            a
        }
    }
    function a(t, e, n) {
        if (ce.acceptData(t)) {
            var i, o, a = t.nodeType,
            r = a ? ce.cache: t,
            l = a ? t[ce.expando] : ce.expando;
            if (r[l]) {
                if (e && (i = n ? r[l] : r[l].data)) {
                    ce.isArray(e) ? e = e.concat(ce.map(e, ce.camelCase)) : e in i ? e = [e] : (e = ce.camelCase(e), e = e in i ? [e] : e.split(" ")),
                    o = e.length;
                    for (; o--;) delete i[e[o]];
                    if (n ? !s(i) : !ce.isEmptyObject(i)) return
                } (n || (delete r[l].data, s(r[l]))) && (a ? ce.cleanData([t], !0) : ce.support.deleteExpando || r != r.window ? delete r[l] : r[l] = null)
            }
        }
    }
    function r(t, n, i) {
        if (i === e && 1 === t.nodeType) {
            var o = "data-" + n.replace(ke, "-$1").toLowerCase();
            if (i = t.getAttribute(o), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null: +i + "" === i ? +i: Pe.test(i) ? ce.parseJSON(i) : i
                } catch(a) {}
                ce.data(t, n, i)
            } else i = e
        }
        return i
    }
    function s(t) {
        var e;
        for (e in t) if (("data" !== e || !ce.isEmptyObject(t[e])) && "toJSON" !== e) return ! 1;
        return ! 0
    }
    function l() {
        return ! 0
    }
    function u() {
        return ! 1
    }
    function c() {
        try {
            return K.activeElement
        } catch(t) {}
    }
    function h(t, e) {
        do t = t[e];
        while (t && 1 !== t.nodeType);
        return t
    }
    function d(t, e, n) {
        if (ce.isFunction(e)) return ce.grep(t,
        function(t, i) {
            return !! e.call(t, i, t) !== n
        });
        if (e.nodeType) return ce.grep(t,
        function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (We.test(e)) return ce.filter(e, t, n);
            e = ce.filter(e, t)
        }
        return ce.grep(t,
        function(t) {
            return ce.inArray(t, e) >= 0 !== n
        })
    }
    function p(t) {
        var e = Ue.split("|"),
        n = t.createDocumentFragment();
        if (n.createElement) for (; e.length;) n.createElement(e.pop());
        return n
    }
    function f(t, e) {
        return ce.nodeName(t, "table") && ce.nodeName(1 === e.nodeType ? e: e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function m(t) {
        return t.type = (null !== ce.find.attr(t, "type")) + "/" + t.type,
        t
    }
    function g(t) {
        var e = an.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"),
        t
    }
    function y(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++) ce._data(n, "globalEval", !e || ce._data(e[i], "globalEval"))
    }
    function v(t, e) {
        if (1 === e.nodeType && ce.hasData(t)) {
            var n, i, o, a = ce._data(t),
            r = ce._data(e, a),
            s = a.events;
            if (s) {
                delete r.handle,
                r.events = {};
                for (n in s) for (i = 0, o = s[n].length; o > i; i++) ce.event.add(e, n, s[n][i])
            }
            r.data && (r.data = ce.extend({},
            r.data))
        }
    }
    function b(t, e) {
        var n, i, o;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !ce.support.noCloneEvent && e[ce.expando]) {
                o = ce._data(e);
                for (i in o.events) ce.removeEvent(e, i, o.handle);
                e.removeAttribute(ce.expando)
            }
            "script" === n && e.text !== t.text ? (m(e).text = t.text, g(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ce.support.html5Clone && t.innerHTML && !ce.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && en.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected: ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }
    function S(t, n) {
        var i, o, a = 0,
        r = typeof t.getElementsByTagName !== X ? t.getElementsByTagName(n || "*") : typeof t.querySelectorAll !== X ? t.querySelectorAll(n || "*") : e;
        if (!r) for (r = [], i = t.childNodes || t; null != (o = i[a]); a++) ! n || ce.nodeName(o, n) ? r.push(o) : ce.merge(r, S(o, n));
        return n === e || n && ce.nodeName(t, n) ? ce.merge([t], r) : r
    }
    function w(t) {
        en.test(t.type) && (t.defaultChecked = t.checked)
    }
    function x(t, e) {
        if (e in t) return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = Cn.length; o--;) if (e = Cn[o] + n, e in t) return e;
        return i
    }
    function M(t, e) {
        return t = e || t,
        "none" === ce.css(t, "display") || !ce.contains(t.ownerDocument, t)
    }
    function T(t, e) {
        for (var n, i, o, a = [], r = 0, s = t.length; s > r; r++) i = t[r],
        i.style && (a[r] = ce._data(i, "olddisplay"), n = i.style.display, e ? (a[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && M(i) && (a[r] = ce._data(i, "olddisplay", _(i.nodeName)))) : a[r] || (o = M(i), (n && "none" !== n || !o) && ce._data(i, "olddisplay", o ? n: ce.css(i, "display"))));
        for (r = 0; s > r; r++) i = t[r],
        i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? a[r] || "": "none"));
        return t
    }
    function C(t, e, n) {
        var i = vn.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }
    function P(t, e, n, i, o) {
        for (var a = n === (i ? "border": "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > a; a += 2)"margin" === n && (r += ce.css(t, n + Tn[a], !0, o)),
        i ? ("content" === n && (r -= ce.css(t, "padding" + Tn[a], !0, o)), "margin" !== n && (r -= ce.css(t, "border" + Tn[a] + "Width", !0, o))) : (r += ce.css(t, "padding" + Tn[a], !0, o), "padding" !== n && (r += ce.css(t, "border" + Tn[a] + "Width", !0, o)));
        return r
    }
    function k(t, e, n) {
        var i = !0,
        o = "width" === e ? t.offsetWidth: t.offsetHeight,
        a = hn(t),
        r = ce.support.boxSizing && "border-box" === ce.css(t, "boxSizing", !1, a);
        if (0 >= o || null == o) {
            if (o = dn(t, e, a), (0 > o || null == o) && (o = t.style[e]), bn.test(o)) return o;
            i = r && (ce.support.boxSizingReliable || o === t.style[e]),
            o = parseFloat(o) || 0
        }
        return o + P(t, e, n || (r ? "border": "content"), i, a) + "px"
    }
    function _(t) {
        var e = K,
        n = wn[t];
        return n || (n = E(t, e), "none" !== n && n || (cn = (cn || ce("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (cn[0].contentWindow || cn[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), n = E(t, e), cn.detach()), wn[t] = n),
        n
    }
    function E(t, e) {
        var n = ce(e.createElement(t)).appendTo(e.body),
        i = ce.css(n[0], "display");
        return n.remove(),
        i
    }
    function O(t, e, n, i) {
        var o;
        if (ce.isArray(e)) ce.each(e,
        function(e, o) {
            n || kn.test(t) ? i(t, o) : O(t + "[" + ("object" == typeof o ? e: "") + "]", o, n, i)
        });
        else if (n || "object" !== ce.type(e)) i(t, e);
        else for (o in e) O(t + "[" + o + "]", e[o], n, i)
    }
    function A(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, o = 0,
            a = e.toLowerCase().match(de) || [];
            if (ce.isFunction(n)) for (; i = a[o++];)"+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }
    function D(t, n, i, o) {
        function a(l) {
            var u;
            return r[l] = !0,
            ce.each(t[l] || [],
            function(t, l) {
                var c = l(n, i, o);
                return "string" != typeof c || s || r[c] ? s ? !(u = c) : e: (n.dataTypes.unshift(c), a(c), !1)
            }),
            u
        }
        var r = {},
        s = t === qn;
        return a(n.dataTypes[0]) || !r["*"] && a("*")
    }
    function L(t, n) {
        var i, o, a = ce.ajaxSettings.flatOptions || {};
        for (o in n) n[o] !== e && ((a[o] ? t: i || (i = {}))[o] = n[o]);
        return i && ce.extend(!0, t, i),
        t
    }
    function N(t, n, i) {
        for (var o, a, r, s, l = t.contents,
        u = t.dataTypes;
        "*" === u[0];) u.shift(),
        a === e && (a = t.mimeType || n.getResponseHeader("Content-Type"));
        if (a) for (s in l) if (l[s] && l[s].test(a)) {
            u.unshift(s);
            break
        }
        if (u[0] in i) r = u[0];
        else {
            for (s in i) {
                if (!u[0] || t.converters[s + " " + u[0]]) {
                    r = s;
                    break
                }
                o || (o = s)
            }
            r = r || o
        }
        return r ? (r !== u[0] && u.unshift(r), i[r]) : e
    }
    function I(t, e, n, i) {
        var o, a, r, s, l, u = {},
        c = t.dataTypes.slice();
        if (c[1]) for (r in t.converters) u[r.toLowerCase()] = t.converters[r];
        for (a = c.shift(); a;) if (t.responseFields[a] && (n[t.responseFields[a]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = a, a = c.shift()) if ("*" === a) a = l;
        else if ("*" !== l && l !== a) {
            if (r = u[l + " " + a] || u["* " + a], !r) for (o in u) if (s = o.split(" "), s[1] === a && (r = u[l + " " + s[0]] || u["* " + s[0]])) {
                r === !0 ? r = u[o] : u[o] !== !0 && (a = s[0], c.unshift(s[1]));
                break
            }
            if (r !== !0) if (r && t["throws"]) e = r(e);
            else try {
                e = r(e)
            } catch(h) {
                return {
                    state: "parsererror",
                    error: r ? h: "No conversion from " + l + " to " + a
                }
            }
        }
        return {
            state: "success",
            data: e
        }
    }
    function $() {
        try {
            return new t.XMLHttpRequest
        } catch(e) {}
    }
    function H() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch(e) {}
    }
    function j() {
        return setTimeout(function() {
            Zn = e
        }),
        Zn = ce.now()
    }
    function R(t, e, n) {
        for (var i, o = (ai[e] || []).concat(ai["*"]), a = 0, r = o.length; r > a; a++) if (i = o[a].call(n, e, t)) return i
    }
    function F(t, e, n) {
        var i, o, a = 0,
        r = oi.length,
        s = ce.Deferred().always(function() {
            delete l.elem
        }),
        l = function() {
            if (o) return ! 1;
            for (var e = Zn || j(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, a = 1 - i, r = 0, l = u.tweens.length; l > r; r++) u.tweens[r].run(a);
            return s.notifyWith(t, [u, a, n]),
            1 > a && l ? n: (s.resolveWith(t, [u]), !1)
        },
        u = s.promise({
            elem: t,
            props: ce.extend({},
            e),
            opts: ce.extend(!0, {
                specialEasing: {}
            },
            n),
            originalProperties: e,
            originalOptions: n,
            startTime: Zn || j(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
                var i = ce.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(i),
                i
            },
            stop: function(e) {
                var n = 0,
                i = e ? u.tweens.length: 0;
                if (o) return this;
                for (o = !0; i > n; n++) u.tweens[n].run(1);
                return e ? s.resolveWith(t, [u, e]) : s.rejectWith(t, [u, e]),
                this
            }
        }),
        c = u.props;
        for (B(c, u.opts.specialEasing); r > a; a++) if (i = oi[a].call(u, t, c, u.opts)) return i;
        return ce.map(c, R, u),
        ce.isFunction(u.opts.start) && u.opts.start.call(t, u),
        ce.fx.timer(ce.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function B(t, e) {
        var n, i, o, a, r;
        for (n in t) if (i = ce.camelCase(n), o = e[i], a = t[n], ce.isArray(a) && (o = a[1], a = t[n] = a[0]), n !== i && (t[i] = a, delete t[n]), r = ce.cssHooks[i], r && "expand" in r) {
            a = r.expand(a),
            delete t[i];
            for (n in a) n in t || (t[n] = a[n], e[n] = o)
        } else e[i] = o
    }
    function W(t, e, n) {
        var i, o, a, r, s, l, u = this,
        c = {},
        h = t.style,
        d = t.nodeType && M(t),
        p = ce._data(t, "fxshow");
        n.queue || (s = ce._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, u.always(function() {
            u.always(function() {
                s.unqueued--,
                ce.queue(t, "fx").length || s.empty.fire()
            })
        })),
        1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ce.css(t, "display") && "none" === ce.css(t, "float") && (ce.support.inlineBlockNeedsLayout && "inline" !== _(t.nodeName) ? h.zoom = 1 : h.display = "inline-block")),
        n.overflow && (h.overflow = "hidden", ce.support.shrinkWrapBlocks || u.always(function() {
            h.overflow = n.overflow[0],
            h.overflowX = n.overflow[1],
            h.overflowY = n.overflow[2]
        }));
        for (i in e) if (o = e[i], ei.exec(o)) {
            if (delete e[i], a = a || "toggle" === o, o === (d ? "hide": "show")) continue;
            c[i] = p && p[i] || ce.style(t, i)
        }
        if (!ce.isEmptyObject(c)) {
            p ? "hidden" in p && (d = p.hidden) : p = ce._data(t, "fxshow", {}),
            a && (p.hidden = !d),
            d ? ce(t).show() : u.done(function() {
                ce(t).hide()
            }),
            u.done(function() {
                var e;
                ce._removeData(t, "fxshow");
                for (e in c) ce.style(t, e, c[e])
            });
            for (i in c) r = R(d ? p[i] : 0, i, u),
            i in p || (p[i] = r.start, d && (r.end = r.start, r.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function V(t, e, n, i, o) {
        return new V.prototype.init(t, e, n, i, o)
    }
    function q(t, e) {
        var n, i = {
            height: t
        },
        o = 0;
        for (e = e ? 1 : 0; 4 > o; o += 2 - e) n = Tn[o],
        i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t),
        i
    }
    function z(t) {
        return ce.isWindow(t) ? t: 9 === t.nodeType ? t.defaultView || t.parentWindow: !1
    }
    var U, Y, X = typeof e,
    G = t.location,
    K = t.document,
    J = K.documentElement,
    Q = t.jQuery,
    Z = t.$,
    te = {},
    ee = [],
    ne = "1.10.2",
    ie = ee.concat,
    oe = ee.push,
    ae = ee.slice,
    re = ee.indexOf,
    se = te.toString,
    le = te.hasOwnProperty,
    ue = ne.trim,
    ce = function(t, e) {
        return new ce.fn.init(t, e, Y)
    },
    he = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    de = /\S+/g,
    pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    fe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    me = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    ge = /^[\],:{}\s]*$/,
    ye = /(?:^|:|,)(?:\s*\[)+/g,
    ve = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    be = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    Se = /^-ms-/,
    we = /-([\da-z])/gi,
    xe = function(t, e) {
        return e.toUpperCase()
    },
    Me = function(t) { (K.addEventListener || "load" === t.type || "complete" === K.readyState) && (Te(), ce.ready())
    },
    Te = function() {
        K.addEventListener ? (K.removeEventListener("DOMContentLoaded", Me, !1), t.removeEventListener("load", Me, !1)) : (K.detachEvent("onreadystatechange", Me), t.detachEvent("onload", Me))
    };
    ce.fn = ce.prototype = {
        jquery: ne,
        constructor: ce,
        init: function(t, n, i) {
            var o, a;
            if (!t) return this;
            if ("string" == typeof t) {
                if (o = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : fe.exec(t), !o || !o[1] && n) return ! n || n.jquery ? (n || i).find(t) : this.constructor(n).find(t);
                if (o[1]) {
                    if (n = n instanceof ce ? n[0] : n, ce.merge(this, ce.parseHTML(o[1], n && n.nodeType ? n.ownerDocument || n: K, !0)), me.test(o[1]) && ce.isPlainObject(n)) for (o in n) ce.isFunction(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
                    return this
                }
                if (a = K.getElementById(o[2]), a && a.parentNode) {
                    if (a.id !== o[2]) return i.find(t);
                    this.length = 1,
                    this[0] = a
                }
                return this.context = K,
                this.selector = t,
                this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ce.isFunction(t) ? i.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), ce.makeArray(t, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return ae.call(this)
        },
        get: function(t) {
            return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
        },
        pushStack: function(t) {
            var e = ce.merge(this.constructor(), t);
            return e.prevObject = this,
            e.context = this.context,
            e
        },
        each: function(t, e) {
            return ce.each(this, t, e)
        },
        ready: function(t) {
            return ce.ready.promise().done(t),
            this
        },
        slice: function() {
            return this.pushStack(ae.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(t) {
            var e = this.length,
            n = +t + (0 > t ? e: 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        map: function(t) {
            return this.pushStack(ce.map(this,
            function(e, n) {
                return t.call(e, n, e)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: oe,
        sort: [].sort,
        splice: [].splice
    },
    ce.fn.init.prototype = ce.fn,
    ce.extend = ce.fn.extend = function() {
        var t, n, i, o, a, r, s = arguments[0] || {},
        l = 1,
        u = arguments.length,
        c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {},
        l = 2), "object" == typeof s || ce.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++) if (null != (a = arguments[l])) for (o in a) t = s[o],
        i = a[o],
        s !== i && (c && i && (ce.isPlainObject(i) || (n = ce.isArray(i))) ? (n ? (n = !1, r = t && ce.isArray(t) ? t: []) : r = t && ce.isPlainObject(t) ? t: {},
        s[o] = ce.extend(c, r, i)) : i !== e && (s[o] = i));
        return s
    },
    ce.extend({
        expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
        noConflict: function(e) {
            return t.$ === ce && (t.$ = Z),
            e && t.jQuery === ce && (t.jQuery = Q),
            ce
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? ce.readyWait++:ce.ready(!0)
        },
        ready: function(t) {
            if (t === !0 ? !--ce.readyWait: !ce.isReady) {
                if (!K.body) return setTimeout(ce.ready);
                ce.isReady = !0,
                t !== !0 && --ce.readyWait > 0 || (U.resolveWith(K, [ce]), ce.fn.trigger && ce(K).trigger("ready").off("ready"))
            }
        },
        isFunction: function(t) {
            return "function" === ce.type(t)
        },
        isArray: Array.isArray ||
        function(t) {
            return "array" === ce.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return ! isNaN(parseFloat(t)) && isFinite(t)
        },
        type: function(t) {
            return null == t ? t + "": "object" == typeof t || "function" == typeof t ? te[se.call(t)] || "object": typeof t
        },
        isPlainObject: function(t) {
            var n;
            if (!t || "object" !== ce.type(t) || t.nodeType || ce.isWindow(t)) return ! 1;
            try {
                if (t.constructor && !le.call(t, "constructor") && !le.call(t.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(i) {
                return ! 1
            }
            if (ce.support.ownLast) for (n in t) return le.call(t, n);
            for (n in t);
            return n === e || le.call(t, n)
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return ! 1;
            return ! 0
        },
        error: function(t) {
            throw Error(t)
        },
        parseHTML: function(t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1),
            e = e || K;
            var i = me.exec(t),
            o = !n && [];
            return i ? [e.createElement(i[1])] : (i = ce.buildFragment([t], e, o), o && ce(o).remove(), ce.merge([], i.childNodes))
        },
        parseJSON: function(n) {
            return t.JSON && t.JSON.parse ? t.JSON.parse(n) : null === n ? n: "string" == typeof n && (n = ce.trim(n), n && ge.test(n.replace(ve, "@").replace(be, "]").replace(ye, ""))) ? Function("return " + n)() : (ce.error("Invalid JSON: " + n), e)
        },
        parseXML: function(n) {
            var i, o;
            if (!n || "string" != typeof n) return null;
            try {
                t.DOMParser ? (o = new DOMParser, i = o.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
            } catch(a) {
                i = e
            }
            return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ce.error("Invalid XML: " + n),
            i
        },
        noop: function() {},
        globalEval: function(e) {
            e && ce.trim(e) && (t.execScript ||
            function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(Se, "ms-").replace(we, xe)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, i) {
            var o, a = 0,
            r = t.length,
            s = n(t);
            if (i) {
                if (s) for (; r > a && (o = e.apply(t[a], i), o !== !1); a++);
                else for (a in t) if (o = e.apply(t[a], i), o === !1) break
            } else if (s) for (; r > a && (o = e.call(t[a], a, t[a]), o !== !1); a++);
            else for (a in t) if (o = e.call(t[a], a, t[a]), o === !1) break;
            return t
        },
        trim: ue && !ue.call("锘柯�") ?
        function(t) {
            return null == t ? "": ue.call(t)
        }: function(t) {
            return null == t ? "": (t + "").replace(pe, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? ce.merge(i, "string" == typeof t ? [t] : t) : oe.call(i, t)),
            i
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (re) return re.call(e, t, n);
                for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n: 0; i > n; n++) if (n in e && e[n] === t) return n
            }
            return - 1
        },
        merge: function(t, n) {
            var i = n.length,
            o = t.length,
            a = 0;
            if ("number" == typeof i) for (; i > a; a++) t[o++] = n[a];
            else for (; n[a] !== e;) t[o++] = n[a++];
            return t.length = o,
            t
        },
        grep: function(t, e, n) {
            var i, o = [],
            a = 0,
            r = t.length;
            for (n = !!n; r > a; a++) i = !!e(t[a], a),
            n !== i && o.push(t[a]);
            return o
        },
        map: function(t, e, i) {
            var o, a = 0,
            r = t.length,
            s = n(t),
            l = [];
            if (s) for (; r > a; a++) o = e(t[a], a, i),
            null != o && (l[l.length] = o);
            else for (a in t) o = e(t[a], a, i),
            null != o && (l[l.length] = o);
            return ie.apply([], l)
        },
        guid: 1,
        proxy: function(t, n) {
            var i, o, a;
            return "string" == typeof n && (a = t[n], n = t, t = a),
            ce.isFunction(t) ? (i = ae.call(arguments, 2), o = function() {
                return t.apply(n || this, i.concat(ae.call(arguments)))
            },
            o.guid = t.guid = t.guid || ce.guid++, o) : e
        },
        access: function(t, n, i, o, a, r, s) {
            var l = 0,
            u = t.length,
            c = null == i;
            if ("object" === ce.type(i)) {
                a = !0;
                for (l in i) ce.access(t, n, l, i[l], !0, r, s)
            } else if (o !== e && (a = !0, ce.isFunction(o) || (s = !0), c && (s ? (n.call(t, o), n = null) : (c = n, n = function(t, e, n) {
                return c.call(ce(t), n)
            })), n)) for (; u > l; l++) n(t[l], i, s ? o: o.call(t[l], l, n(t[l], i)));
            return a ? t: c ? n.call(t) : u ? n(t[0], i) : r
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(t, e, n, i) {
            var o, a, r = {};
            for (a in e) r[a] = t.style[a],
            t.style[a] = e[a];
            o = n.apply(t, i || []);
            for (a in e) t.style[a] = r[a];
            return o
        }
    }),
    ce.ready.promise = function(e) {
        if (!U) if (U = ce.Deferred(), "complete" === K.readyState) setTimeout(ce.ready);
        else if (K.addEventListener) K.addEventListener("DOMContentLoaded", Me, !1),
        t.addEventListener("load", Me, !1);
        else {
            K.attachEvent("onreadystatechange", Me),
            t.attachEvent("onload", Me);
            var n = !1;
            try {
                n = null == t.frameElement && K.documentElement
            } catch(i) {}
            n && n.doScroll &&
            function o() {
                if (!ce.isReady) {
                    try {
                        n.doScroll("left")
                    } catch(t) {
                        return setTimeout(o, 50)
                    }
                    Te(),
                    ce.ready()
                }
            } ()
        }
        return U.promise(e)
    },
    ce.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(t, e) {
        te["[object " + e + "]"] = e.toLowerCase()
    }),
    Y = ce(K),
    function(t, e) {
        function n(t, e, n, i) {
            var o, a, r, s, l, u, c, h, f, m;
            if ((e ? e.ownerDocument || e: F) !== D && A(e), e = e || D, n = n || [], !t || "string" != typeof t) return n;
            if (1 !== (s = e.nodeType) && 9 !== s) return [];
            if (N && !i) {
                if (o = be.exec(t)) if (r = o[1]) {
                    if (9 === s) {
                        if (a = e.getElementById(r), !a || !a.parentNode) return n;
                        if (a.id === r) return n.push(a),
                        n
                    } else if (e.ownerDocument && (a = e.ownerDocument.getElementById(r)) && j(e, a) && a.id === r) return n.push(a),
                    n
                } else {
                    if (o[2]) return te.apply(n, e.getElementsByTagName(t)),
                    n;
                    if ((r = o[3]) && M.getElementsByClassName && e.getElementsByClassName) return te.apply(n, e.getElementsByClassName(r)),
                    n
                }
                if (M.qsa && (!I || !I.test(t))) {
                    if (h = c = R, f = e, m = 9 === s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
                        for (u = d(t), (c = e.getAttribute("id")) ? h = c.replace(xe, "\\$&") : e.setAttribute("id", h), h = "[id='" + h + "'] ", l = u.length; l--;) u[l] = h + p(u[l]);
                        f = pe.test(t) && e.parentNode || e,
                        m = u.join(",")
                    }
                    if (m) try {
                        return te.apply(n, f.querySelectorAll(m)),
                        n
                    } catch(g) {} finally {
                        c || e.removeAttribute("id")
                    }
                }
            }
            return w(t.replace(ue, "$1"), e, n, i)
        }
        function i() {
            function t(n, i) {
                return e.push(n += " ") > C.cacheLength && delete t[e.shift()],
                t[n] = i
            }
            var e = [];
            return t
        }
        function o(t) {
            return t[R] = !0,
            t
        }
        function a(t) {
            var e = D.createElement("div");
            try {
                return !! t(e)
            } catch(n) {
                return ! 1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function r(t, e) {
            for (var n = t.split("|"), i = t.length; i--;) C.attrHandle[n[i]] = e
        }
        function s(t, e) {
            var n = e && t,
            i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === e) return - 1;
            return t ? 1 : -1
        }
        function l(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }
        function u(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }
        function c(t) {
            return o(function(e) {
                return e = +e,
                o(function(n, i) {
                    for (var o, a = t([], n.length, e), r = a.length; r--;) n[o = a[r]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }
        function h() {}
        function d(t, e) {
            var i, o, a, r, s, l, u, c = q[t + " "];
            if (c) return e ? 0 : c.slice(0);
            for (s = t, l = [], u = C.preFilter; s;) { (!i || (o = he.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(a = [])),
                i = !1,
                (o = de.exec(s)) && (i = o.shift(), a.push({
                    value: i,
                    type: o[0].replace(ue, " ")
                }), s = s.slice(i.length));
                for (r in C.filter) ! (o = ye[r].exec(s)) || u[r] && !(o = u[r](o)) || (i = o.shift(), a.push({
                    value: i,
                    type: r,
                    matches: o
                }), s = s.slice(i.length));
                if (!i) break
            }
            return e ? s.length: s ? n.error(t) : q(t, l).slice(0)
        }
        function p(t) {
            for (var e = 0,
            n = t.length,
            i = ""; n > e; e++) i += t[e].value;
            return i
        }
        function f(t, e, n) {
            var i = e.dir,
            o = n && "parentNode" === i,
            a = W++;
            return e.first ?
            function(e, n, a) {
                for (; e = e[i];) if (1 === e.nodeType || o) return t(e, n, a)
            }: function(e, n, r) {
                var s, l, u, c = B + " " + a;
                if (r) {
                    for (; e = e[i];) if ((1 === e.nodeType || o) && t(e, n, r)) return ! 0
                } else for (; e = e[i];) if (1 === e.nodeType || o) if (u = e[R] || (e[R] = {}), (l = u[i]) && l[0] === c) {
                    if ((s = l[1]) === !0 || s === T) return s === !0
                } else if (l = u[i] = [c], l[1] = t(e, n, r) || T, l[1] === !0) return ! 0
            }
        }
        function m(t) {
            return t.length > 1 ?
            function(e, n, i) {
                for (var o = t.length; o--;) if (!t[o](e, n, i)) return ! 1;
                return ! 0
            }: t[0]
        }
        function g(t, e, n, i, o) {
            for (var a, r = [], s = 0, l = t.length, u = null != e; l > s; s++)(a = t[s]) && (!n || n(a, i, o)) && (r.push(a), u && e.push(s));
            return r
        }
        function y(t, e, n, i, a, r) {
            return i && !i[R] && (i = y(i)),
            a && !a[R] && (a = y(a, r)),
            o(function(o, r, s, l) {
                var u, c, h, d = [],
                p = [],
                f = r.length,
                m = o || S(e || "*", s.nodeType ? [s] : s, []),
                y = !t || !o && e ? m: g(m, d, t, s, l),
                v = n ? a || (o ? t: f || i) ? [] : r: y;
                if (n && n(y, v, s, l), i) for (u = g(v, p), i(u, [], s, l), c = u.length; c--;)(h = u[c]) && (v[p[c]] = !(y[p[c]] = h));
                if (o) {
                    if (a || t) {
                        if (a) {
                            for (u = [], c = v.length; c--;)(h = v[c]) && u.push(y[c] = h);
                            a(null, v = [], u, l)
                        }
                        for (c = v.length; c--;)(h = v[c]) && (u = a ? ne.call(o, h) : d[c]) > -1 && (o[u] = !(r[u] = h))
                    }
                } else v = g(v === r ? v.splice(f, v.length) : v),
                a ? a(null, r, v, l) : te.apply(r, v)
            })
        }
        function v(t) {
            for (var e, n, i, o = t.length,
            a = C.relative[t[0].type], r = a || C.relative[" "], s = a ? 1 : 0, l = f(function(t) {
                return t === e
            },
            r, !0), u = f(function(t) {
                return ne.call(e, t) > -1
            },
            r, !0), c = [function(t, n, i) {
                return ! a && (i || n !== E) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i))
            }]; o > s; s++) if (n = C.relative[t[s].type]) c = [f(m(c), n)];
            else {
                if (n = C.filter[t[s].type].apply(null, t[s].matches), n[R]) {
                    for (i = ++s; o > i && !C.relative[t[i].type]; i++);
                    return y(s > 1 && m(c), s > 1 && p(t.slice(0, s - 1).concat({
                        value: " " === t[s - 2].type ? "*": ""
                    })).replace(ue, "$1"), n, i > s && v(t.slice(s, i)), o > i && v(t = t.slice(i)), o > i && p(t))
                }
                c.push(n)
            }
            return m(c)
        }
        function b(t, e) {
            var i = 0,
            a = e.length > 0,
            r = t.length > 0,
            s = function(o, s, l, u, c) {
                var h, d, p, f = [],
                m = 0,
                y = "0",
                v = o && [],
                b = null != c,
                S = E,
                w = o || r && C.find.TAG("*", c && s.parentNode || s),
                x = B += null == S ? 1 : Math.random() || .1;
                for (b && (E = s !== D && s, T = i); null != (h = w[y]); y++) {
                    if (r && h) {
                        for (d = 0; p = t[d++];) if (p(h, s, l)) {
                            u.push(h);
                            break
                        }
                        b && (B = x, T = ++i)
                    }
                    a && ((h = !p && h) && m--, o && v.push(h))
                }
                if (m += y, a && y !== m) {
                    for (d = 0; p = e[d++];) p(v, f, s, l);
                    if (o) {
                        if (m > 0) for (; y--;) v[y] || f[y] || (f[y] = Q.call(u));
                        f = g(f)
                    }
                    te.apply(u, f),
                    b && !o && f.length > 0 && m + e.length > 1 && n.uniqueSort(u)
                }
                return b && (B = x, E = S),
                v
            };
            return a ? o(s) : s
        }
        function S(t, e, i) {
            for (var o = 0,
            a = e.length; a > o; o++) n(t, e[o], i);
            return i
        }
        function w(t, e, n, i) {
            var o, a, r, s, l, u = d(t);
            if (!i && 1 === u.length) {
                if (a = u[0] = u[0].slice(0), a.length > 2 && "ID" === (r = a[0]).type && M.getById && 9 === e.nodeType && N && C.relative[a[1].type]) {
                    if (e = (C.find.ID(r.matches[0].replace(Me, Te), e) || [])[0], !e) return n;
                    t = t.slice(a.shift().value.length)
                }
                for (o = ye.needsContext.test(t) ? 0 : a.length; o--&&(r = a[o], !C.relative[s = r.type]);) if ((l = C.find[s]) && (i = l(r.matches[0].replace(Me, Te), pe.test(a[0].type) && e.parentNode || e))) {
                    if (a.splice(o, 1), t = i.length && p(a), !t) return te.apply(n, i),
                    n;
                    break
                }
            }
            return _(t, u)(i, e, !N, n, pe.test(t)),
            n
        }
        var x, M, T, C, P, k, _, E, O, A, D, L, N, I, $, H, j, R = "sizzle" + -new Date,
        F = t.document,
        B = 0,
        W = 0,
        V = i(),
        q = i(),
        z = i(),
        U = !1,
        Y = function(t, e) {
            return t === e ? (U = !0, 0) : 0
        },
        X = typeof e,
        G = 1 << 31,
        K = {}.hasOwnProperty,
        J = [],
        Q = J.pop,
        Z = J.push,
        te = J.push,
        ee = J.slice,
        ne = J.indexOf ||
        function(t) {
            for (var e = 0,
            n = this.length; n > e; e++) if (this[e] === t) return e;
            return - 1
        },
        ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        oe = "[\\x20\\t\\r\\n\\f]",
        ae = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        re = ae.replace("w", "w#"),
        se = "\\[" + oe + "*(" + ae + ")" + oe + "*(?:([*^$|!~]?=)" + oe + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + re + ")|)|)" + oe + "*\\]",
        le = ":(" + ae + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + se.replace(3, 8) + ")*)|.*)\\)|)",
        ue = RegExp("^" + oe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + oe + "+$", "g"),
        he = RegExp("^" + oe + "*," + oe + "*"),
        de = RegExp("^" + oe + "*([>+~]|" + oe + ")" + oe + "*"),
        pe = RegExp(oe + "*[+~]"),
        fe = RegExp("=" + oe + "*([^\\]'\"]*)" + oe + "*\\]", "g"),
        me = RegExp(le),
        ge = RegExp("^" + re + "$"),
        ye = {
            ID: RegExp("^#(" + ae + ")"),
            CLASS: RegExp("^\\.(" + ae + ")"),
            TAG: RegExp("^(" + ae.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + se),
            PSEUDO: RegExp("^" + le),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + oe + "*(even|odd|(([+-]|)(\\d*)n|)" + oe + "*(?:([+-]|)" + oe + "*(\\d+)|))" + oe + "*\\)|)", "i"),
            bool: RegExp("^(?:" + ie + ")$", "i"),
            needsContext: RegExp("^" + oe + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + oe + "*((?:-\\d)?\\d*)" + oe + "*\\)|)(?=[^-]|$)", "i")
        },
        ve = /^[^{]+\{\s*\[native \w/,
        be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        Se = /^(?:input|select|textarea|button)$/i,
        we = /^h\d$/i,
        xe = /'|\\/g,
        Me = RegExp("\\\\([\\da-f]{1,6}" + oe + "?|(" + oe + ")|.)", "ig"),
        Te = function(t, e, n) {
            var i = "0x" + e - 65536;
            return i !== i || n ? e: 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
        };
        try {
            te.apply(J = ee.call(F.childNodes), F.childNodes),
            J[F.childNodes.length].nodeType
        } catch(Ce) {
            te = {
                apply: J.length ?
                function(t, e) {
                    Z.apply(t, ee.call(e))
                }: function(t, e) {
                    for (var n = t.length,
                    i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        k = n.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName: !1
        },
        M = n.support = {},
        A = n.setDocument = function(t) {
            var n = t ? t.ownerDocument || t: F,
            i = n.defaultView;
            return n !== D && 9 === n.nodeType && n.documentElement ? (D = n, L = n.documentElement, N = !k(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload",
            function() {
                A()
            }), M.attributes = a(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }), M.getElementsByTagName = a(function(t) {
                return t.appendChild(n.createComment("")),
                !t.getElementsByTagName("*").length
            }), M.getElementsByClassName = a(function(t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>",
                t.firstChild.className = "i",
                2 === t.getElementsByClassName("i").length
            }), M.getById = a(function(t) {
                return L.appendChild(t).id = R,
                !n.getElementsByName || !n.getElementsByName(R).length
            }), M.getById ? (C.find.ID = function(t, e) {
                if (typeof e.getElementById !== X && N) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            },
            C.filter.ID = function(t) {
                var e = t.replace(Me, Te);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete C.find.ID, C.filter.ID = function(t) {
                var e = t.replace(Me, Te);
                return function(t) {
                    var n = typeof t.getAttributeNode !== X && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), C.find.TAG = M.getElementsByTagName ?
            function(t, n) {
                return typeof n.getElementsByTagName !== X ? n.getElementsByTagName(t) : e
            }: function(t, e) {
                var n, i = [],
                o = 0,
                a = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = a[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return a
            },
            C.find.CLASS = M.getElementsByClassName &&
            function(t, n) {
                return typeof n.getElementsByClassName !== X && N ? n.getElementsByClassName(t) : e
            },
            $ = [], I = [], (M.qsa = ve.test(n.querySelectorAll)) && (a(function(t) {
                t.innerHTML = "<select><option selected=''></option></select>",
                t.querySelectorAll("[selected]").length || I.push("\\[" + oe + "*(?:value|" + ie + ")"),
                t.querySelectorAll(":checked").length || I.push(":checked")
            }), a(function(t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("t", ""),
                t.querySelectorAll("[t^='']").length && I.push("[*^$]=" + oe + "*(?:''|\"\")"),
                t.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                I.push(",.*:")
            })), (M.matchesSelector = ve.test(H = L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && a(function(t) {
                M.disconnectedMatch = H.call(t, "div"),
                H.call(t, "[s!='']:x"),
                $.push("!=", le)
            }), I = I.length && RegExp(I.join("|")), $ = $.length && RegExp($.join("|")), j = ve.test(L.contains) || L.compareDocumentPosition ?
            function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement: t,
                i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            }: function(t, e) {
                if (e) for (; e = e.parentNode;) if (e === t) return ! 0;
                return ! 1
            },
            Y = L.compareDocumentPosition ?
            function(t, e) {
                if (t === e) return U = !0,
                0;
                var i = e.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(e);
                return i ? 1 & i || !M.sortDetached && e.compareDocumentPosition(t) === i ? t === n || j(F, t) ? -1 : e === n || j(F, e) ? 1 : O ? ne.call(O, t) - ne.call(O, e) : 0 : 4 & i ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
            }: function(t, e) {
                var i, o = 0,
                a = t.parentNode,
                r = e.parentNode,
                l = [t],
                u = [e];
                if (t === e) return U = !0,
                0;
                if (!a || !r) return t === n ? -1 : e === n ? 1 : a ? -1 : r ? 1 : O ? ne.call(O, t) - ne.call(O, e) : 0;
                if (a === r) return s(t, e);
                for (i = t; i = i.parentNode;) l.unshift(i);
                for (i = e; i = i.parentNode;) u.unshift(i);
                for (; l[o] === u[o];) o++;
                return o ? s(l[o], u[o]) : l[o] === F ? -1 : u[o] === F ? 1 : 0
            },
            n) : D
        },
        n.matches = function(t, e) {
            return n(t, null, null, e)
        },
        n.matchesSelector = function(t, e) {
            if ((t.ownerDocument || t) !== D && A(t), e = e.replace(fe, "='$1']"), !(!M.matchesSelector || !N || $ && $.test(e) || I && I.test(e))) try {
                var i = H.call(t, e);
                if (i || M.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch(o) {}
            return n(e, D, null, [t]).length > 0
        },
        n.contains = function(t, e) {
            return (t.ownerDocument || t) !== D && A(t),
            j(t, e)
        },
        n.attr = function(t, n) { (t.ownerDocument || t) !== D && A(t);
            var i = C.attrHandle[n.toLowerCase()],
            o = i && K.call(C.attrHandle, n.toLowerCase()) ? i(t, n, !N) : e;
            return o === e ? M.attributes || !N ? t.getAttribute(n) : (o = t.getAttributeNode(n)) && o.specified ? o.value: null: o
        },
        n.error = function(t) {
            throw Error("Syntax error, unrecognized expression: " + t)
        },
        n.uniqueSort = function(t) {
            var e, n = [],
            i = 0,
            o = 0;
            if (U = !M.detectDuplicates, O = !M.sortStable && t.slice(0), t.sort(Y), U) {
                for (; e = t[o++];) e === t[o] && (i = n.push(o));
                for (; i--;) t.splice(n[i], 1)
            }
            return t
        },
        P = n.getText = function(t) {
            var e, n = "",
            i = 0,
            o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += P(t)
                } else if (3 === o || 4 === o) return t.nodeValue
            } else for (; e = t[i]; i++) n += P(e);
            return n
        },
        C = n.selectors = {
            cacheLength: 50,
            createPseudo: o,
            match: ye,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(Me, Te),
                    t[3] = (t[4] || t[5] || "").replace(Me, Te),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || n.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && n.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var n, i = !t[5] && t[2];
                    return ye.CHILD.test(t[0]) ? null: (t[3] && t[4] !== e ? t[2] = t[4] : i && me.test(i) && (n = d(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (t[0] = t[0].slice(0, n), t[2] = i.slice(0, n)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(Me, Te).toLowerCase();
                    return "*" === t ?
                    function() {
                        return ! 0
                    }: function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = V[t + " "];
                    return e || (e = RegExp("(^|" + oe + ")" + t + "(" + oe + "|$)")) && V(t,
                    function(t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== X && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, e, i) {
                    return function(o) {
                        var a = n.attr(o, t);
                        return null == a ? "!=" === e: e ? (a += "", "=" === e ? a === i: "!=" === e ? a !== i: "^=" === e ? i && 0 === a.indexOf(i) : "*=" === e ? i && a.indexOf(i) > -1 : "$=" === e ? i && a.slice( - i.length) === i: "~=" === e ? (" " + a + " ").indexOf(i) > -1 : "|=" === e ? a === i || a.slice(0, i.length + 1) === i + "-": !1) : !0
                    }
                },
                CHILD: function(t, e, n, i, o) {
                    var a = "nth" !== t.slice(0, 3),
                    r = "last" !== t.slice( - 4),
                    s = "of-type" === e;
                    return 1 === i && 0 === o ?
                    function(t) {
                        return !! t.parentNode
                    }: function(e, n, l) {
                        var u, c, h, d, p, f, m = a !== r ? "nextSibling": "previousSibling",
                        g = e.parentNode,
                        y = s && e.nodeName.toLowerCase(),
                        v = !l && !s;
                        if (g) {
                            if (a) {
                                for (; m;) {
                                    for (h = e; h = h[m];) if (s ? h.nodeName.toLowerCase() === y: 1 === h.nodeType) return ! 1;
                                    f = m = "only" === t && !f && "nextSibling"
                                }
                                return ! 0
                            }
                            if (f = [r ? g.firstChild: g.lastChild], r && v) {
                                for (c = g[R] || (g[R] = {}), u = c[t] || [], p = u[0] === B && u[1], d = u[0] === B && u[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (d = p = 0) || f.pop();) if (1 === h.nodeType && ++d && h === e) {
                                    c[t] = [B, p, d];
                                    break
                                }
                            } else if (v && (u = (e[R] || (e[R] = {}))[t]) && u[0] === B) d = u[1];
                            else for (; (h = ++p && h && h[m] || (d = p = 0) || f.pop()) && ((s ? h.nodeName.toLowerCase() !== y: 1 !== h.nodeType) || !++d || (v && ((h[R] || (h[R] = {}))[t] = [B, d]), h !== e)););
                            return d -= o,
                            d === i || 0 === d % i && d / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, e) {
                    var i, a = C.pseudos[t] || C.setFilters[t.toLowerCase()] || n.error("unsupported pseudo: " + t);
                    return a[R] ? a(e) : a.length > 1 ? (i = [t, t, "", e], C.setFilters.hasOwnProperty(t.toLowerCase()) ? o(function(t, n) {
                        for (var i, o = a(t, e), r = o.length; r--;) i = ne.call(t, o[r]),
                        t[i] = !(n[i] = o[r])
                    }) : function(t) {
                        return a(t, 0, i)
                    }) : a
                }
            },
            pseudos: {
                not: o(function(t) {
                    var e = [],
                    n = [],
                    i = _(t.replace(ue, "$1"));
                    return i[R] ? o(function(t, e, n, o) {
                        for (var a, r = i(t, null, o, []), s = t.length; s--;)(a = r[s]) && (t[s] = !(e[s] = a))
                    }) : function(t, o, a) {
                        return e[0] = t,
                        i(e, null, a, n),
                        !n.pop()
                    }
                }),
                has: o(function(t) {
                    return function(e) {
                        return n(t, e).length > 0
                    }
                }),
                contains: o(function(t) {
                    return function(e) {
                        return (e.textContent || e.innerText || P(e)).indexOf(t) > -1
                    }
                }),
                lang: o(function(t) {
                    return ge.test(t || "") || n.error("unsupported lang: " + t),
                    t = t.replace(Me, Te).toLowerCase(),
                    function(e) {
                        var n;
                        do
                        if (n = N ? e.lang: e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(),
                        n === t || 0 === n.indexOf(t + "-");
                        while ((e = e.parentNode) && 1 === e.nodeType);
                        return ! 1
                    }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === L
                },
                focus: function(t) {
                    return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return ! 1;
                    return ! 0
                },
                parent: function(t) {
                    return ! C.pseudos.empty(t)
                },
                header: function(t) {
                    return we.test(t.nodeName)
                },
                input: function(t) {
                    return Se.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(t, e) {
                    return [e - 1]
                }),
                eq: c(function(t, e, n) {
                    return [0 > n ? n + e: n]
                }),
                even: c(function(t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: c(function(t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: c(function(t, e, n) {
                    for (var i = 0 > n ? n + e: n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: c(function(t, e, n) {
                    for (var i = 0 > n ? n + e: n; e > ++i;) t.push(i);
                    return t
                })
            }
        },
        C.pseudos.nth = C.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) C.pseudos[x] = l(x);
        for (x in {
            submit: !0,
            reset: !0
        }) C.pseudos[x] = u(x);
        h.prototype = C.filters = C.pseudos,
        C.setFilters = new h,
        _ = n.compile = function(t, e) {
            var n, i = [],
            o = [],
            a = z[t + " "];
            if (!a) {
                for (e || (e = d(t)), n = e.length; n--;) a = v(e[n]),
                a[R] ? i.push(a) : o.push(a);
                a = z(t, b(o, i))
            }
            return a
        },
        M.sortStable = R.split("").sort(Y).join("") === R,
        M.detectDuplicates = U,
        A(),
        M.sortDetached = a(function(t) {
            return 1 & t.compareDocumentPosition(D.createElement("div"))
        }),
        a(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || r("type|href|height|width",
        function(t, n, i) {
            return i ? e: t.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
        }),
        M.attributes && a(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || r("value",
        function(t, n, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? e: t.defaultValue
        }),
        a(function(t) {
            return null == t.getAttribute("disabled")
        }) || r(ie,
        function(t, n, i) {
            var o;
            return i ? e: (o = t.getAttributeNode(n)) && o.specified ? o.value: t[n] === !0 ? n.toLowerCase() : null
        }),
        ce.find = n,
        ce.expr = n.selectors,
        ce.expr[":"] = ce.expr.pseudos,
        ce.unique = n.uniqueSort,
        ce.text = n.getText,
        ce.isXMLDoc = n.isXML,
        ce.contains = n.contains
    } (t);
    var Ce = {};
    ce.Callbacks = function(t) {
        t = "string" == typeof t ? Ce[t] || i(t) : ce.extend({},
        t);
        var n, o, a, r, s, l, u = [],
        c = !t.once && [],
        h = function(e) {
            for (o = t.memory && e, a = !0, s = l || 0, l = 0, r = u.length, n = !0; u && r > s; s++) if (u[s].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                o = !1;
                break
            }
            n = !1,
            u && (c ? c.length && h(c.shift()) : o ? u = [] : d.disable())
        },
        d = {
            add: function() {
                if (u) {
                    var e = u.length; !
                    function i(e) {
                        ce.each(e,
                        function(e, n) {
                            var o = ce.type(n);
                            "function" === o ? t.unique && d.has(n) || u.push(n) : n && n.length && "string" !== o && i(n)
                        })
                    } (arguments),
                    n ? r = u.length: o && (l = e, h(o))
                }
                return this
            },
            remove: function() {
                return u && ce.each(arguments,
                function(t, e) {
                    for (var i; (i = ce.inArray(e, u, i)) > -1;) u.splice(i, 1),
                    n && (r >= i && r--, s >= i && s--)
                }),
                this
            },
            has: function(t) {
                return t ? ce.inArray(t, u) > -1 : !(!u || !u.length)
            },
            empty: function() {
                return u = [],
                r = 0,
                this
            },
            disable: function() {
                return u = c = o = e,
                this
            },
            disabled: function() {
                return ! u
            },
            lock: function() {
                return c = e,
                o || d.disable(),
                this
            },
            locked: function() {
                return ! c
            },
            fireWith: function(t, e) {
                return ! u || a && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? c.push(e) : h(e)),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! a
            }
        };
        return d
    },
    ce.extend({
        Deferred: function(t) {
            var e = [["resolve", "done", ce.Callbacks("once memory"), "resolved"], ["reject", "fail", ce.Callbacks("once memory"), "rejected"], ["notify", "progress", ce.Callbacks("memory")]],
            n = "pending",
            i = {
                state: function() {
                    return n
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var t = arguments;
                    return ce.Deferred(function(n) {
                        ce.each(e,
                        function(e, a) {
                            var r = a[0],
                            s = ce.isFunction(t[e]) && t[e];
                            o[a[1]](function() {
                                var t = s && s.apply(this, arguments);
                                t && ce.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                            })
                        }),
                        t = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? ce.extend(t, i) : i
                }
            },
            o = {};
            return i.pipe = i.then,
            ce.each(e,
            function(t, a) {
                var r = a[2],
                s = a[3];
                i[a[1]] = r.add,
                s && r.add(function() {
                    n = s
                },
                e[1 ^ t][2].disable, e[2][2].lock),
                o[a[0]] = function() {
                    return o[a[0] + "With"](this === o ? i: this, arguments),
                    this
                },
                o[a[0] + "With"] = r.fireWith
            }),
            i.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(t) {
            var e, n, i, o = 0,
            a = ae.call(arguments),
            r = a.length,
            s = 1 !== r || t && ce.isFunction(t.promise) ? r: 0,
            l = 1 === s ? t: ce.Deferred(),
            u = function(t, n, i) {
                return function(o) {
                    n[t] = this,
                    i[t] = arguments.length > 1 ? ae.call(arguments) : o,
                    i === e ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                }
            };
            if (r > 1) for (e = Array(r), n = Array(r), i = Array(r); r > o; o++) a[o] && ce.isFunction(a[o].promise) ? a[o].promise().done(u(o, i, a)).fail(l.reject).progress(u(o, n, e)) : --s;
            return s || l.resolveWith(i, a),
            l.promise()
        }
    }),
    ce.support = function(e) {
        var n, i, o, a, r, s, l, u, c, h = K.createElement("div");
        if (h.setAttribute("className", "t"), h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = h.getElementsByTagName("*") || [], i = h.getElementsByTagName("a")[0], !i || !i.style || !n.length) return e;
        a = K.createElement("select"),
        s = a.appendChild(K.createElement("option")),
        o = h.getElementsByTagName("input")[0],
        i.style.cssText = "top:1px;float:left;opacity:.5",
        e.getSetAttribute = "t" !== h.className,
        e.leadingWhitespace = 3 === h.firstChild.nodeType,
        e.tbody = !h.getElementsByTagName("tbody").length,
        e.htmlSerialize = !!h.getElementsByTagName("link").length,
        e.style = /top/.test(i.getAttribute("style")),
        e.hrefNormalized = "/a" === i.getAttribute("href"),
        e.opacity = /^0.5/.test(i.style.opacity),
        e.cssFloat = !!i.style.cssFloat,
        e.checkOn = !!o.value,
        e.optSelected = s.selected,
        e.enctype = !!K.createElement("form").enctype,
        e.html5Clone = "<:nav></:nav>" !== K.createElement("nav").cloneNode(!0).outerHTML,
        e.inlineBlockNeedsLayout = !1,
        e.shrinkWrapBlocks = !1,
        e.pixelPosition = !1,
        e.deleteExpando = !0,
        e.noCloneEvent = !0,
        e.reliableMarginRight = !0,
        e.boxSizingReliable = !0,
        o.checked = !0,
        e.noCloneChecked = o.cloneNode(!0).checked,
        a.disabled = !0,
        e.optDisabled = !s.disabled;
        try {
            delete h.test
        } catch(d) {
            e.deleteExpando = !1
        }
        o = K.createElement("input"),
        o.setAttribute("value", ""),
        e.input = "" === o.getAttribute("value"),
        o.value = "t",
        o.setAttribute("type", "radio"),
        e.radioValue = "t" === o.value,
        o.setAttribute("checked", "t"),
        o.setAttribute("name", "t"),
        r = K.createDocumentFragment(),
        r.appendChild(o),
        e.appendChecked = o.checked,
        e.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked,
        h.attachEvent && (h.attachEvent("onclick",
        function() {
            e.noCloneEvent = !1
        }), h.cloneNode(!0).click());
        for (c in {
            submit: !0,
            change: !0,
            focusin: !0
        }) h.setAttribute(l = "on" + c, "t"),
        e[c + "Bubbles"] = l in t || h.attributes[l].expando === !1;
        h.style.backgroundClip = "content-box",
        h.cloneNode(!0).style.backgroundClip = "",
        e.clearCloneStyle = "content-box" === h.style.backgroundClip;
        for (c in ce(e)) break;
        return e.ownLast = "0" !== c,
        ce(function() {
            var n, i, o, a = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
            r = K.getElementsByTagName("body")[0];
            r && (n = K.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", r.appendChild(n).appendChild(h), h.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = h.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", e.reliableHiddenOffsets = u && 0 === o[0].offsetHeight, h.innerHTML = "", h.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ce.swap(r, null != r.style.zoom ? {
                zoom: 1
            }: {},
            function() {
                e.boxSizing = 4 === h.offsetWidth
            }), t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(h, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(h, null) || {
                width: "4px"
            }).width, i = h.appendChild(K.createElement("div")), i.style.cssText = h.style.cssText = a, i.style.marginRight = i.style.width = "0", h.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(i, null) || {}).marginRight)), typeof h.style.zoom !== X && (h.innerHTML = "", h.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === h.offsetWidth, h.style.display = "block", h.innerHTML = "<div></div>", h.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== h.offsetWidth, e.inlineBlockNeedsLayout && (r.style.zoom = 1)), r.removeChild(n), n = h = o = i = null)
        }),
        n = a = r = s = i = o = null,
        e
    } ({});
    var Pe = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    ke = /([A-Z])/g;
    ce.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return t = t.nodeType ? ce.cache[t[ce.expando]] : t[ce.expando],
            !!t && !s(t)
        },
        data: function(t, e, n) {
            return o(t, e, n)
        },
        removeData: function(t, e) {
            return a(t, e)
        },
        _data: function(t, e, n) {
            return o(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return a(t, e, !0)
        },
        acceptData: function(t) {
            if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType) return ! 1;
            var e = t.nodeName && ce.noData[t.nodeName.toLowerCase()];
            return ! e || e !== !0 && t.getAttribute("classid") === e
        }
    }),
    ce.fn.extend({
        data: function(t, n) {
            var i, o, a = null,
            s = 0,
            l = this[0];
            if (t === e) {
                if (this.length && (a = ce.data(l), 1 === l.nodeType && !ce._data(l, "parsedAttrs"))) {
                    for (i = l.attributes; i.length > s; s++) o = i[s].name,
                    0 === o.indexOf("data-") && (o = ce.camelCase(o.slice(5)), r(l, o, a[o]));
                    ce._data(l, "parsedAttrs", !0)
                }
                return a
            }
            return "object" == typeof t ? this.each(function() {
                ce.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                ce.data(this, t, n)
            }) : l ? r(l, t, ce.data(l, t)) : null
        },
        removeData: function(t) {
            return this.each(function() {
                ce.removeData(this, t)
            })
        }
    }),
    ce.extend({
        queue: function(t, n, i) {
            var o;
            return t ? (n = (n || "fx") + "queue", o = ce._data(t, n), i && (!o || ce.isArray(i) ? o = ce._data(t, n, ce.makeArray(i)) : o.push(i)), o || []) : e
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = ce.queue(t, e),
            i = n.length,
            o = n.shift(),
            a = ce._queueHooks(t, e),
            r = function() {
                ce.dequeue(t, e)
            };
            "inprogress" === o && (o = n.shift(), i--),
            o && ("fx" === e && n.unshift("inprogress"), delete a.stop, o.call(t, r, a)),
            !i && a && a.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return ce._data(t, n) || ce._data(t, n, {
                empty: ce.Callbacks("once memory").add(function() {
                    ce._removeData(t, e + "queue"),
                    ce._removeData(t, n)
                })
            })
        }
    }),
    ce.fn.extend({
        queue: function(t, n) {
            var i = 2;
            return "string" != typeof t && (n = t, t = "fx", i--),
            i > arguments.length ? ce.queue(this[0], t) : n === e ? this: this.each(function() {
                var e = ce.queue(this, t, n);
                ce._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                ce.dequeue(this, t)
            })
        },
        delay: function(t, e) {
            return t = ce.fx ? ce.fx.speeds[t] || t: t,
            e = e || "fx",
            this.queue(e,
            function(e, n) {
                var i = setTimeout(e, t);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, n) {
            var i, o = 1,
            a = ce.Deferred(),
            r = this,
            s = this.length,
            l = function() {--o || a.resolveWith(r, [r])
            };
            for ("string" != typeof t && (n = t, t = e), t = t || "fx"; s--;) i = ce._data(r[s], t + "queueHooks"),
            i && i.empty && (o++, i.empty.add(l));
            return l(),
            a.promise(n)
        }
    });
    var _e, Ee, Oe = /[\t\r\n\f]/g,
    Ae = /\r/g,
    De = /^(?:input|select|textarea|button|object)$/i,
    Le = /^(?:a|area)$/i,
    Ne = /^(?:checked|selected)$/i,
    Ie = ce.support.getSetAttribute,
    $e = ce.support.input;
    ce.fn.extend({
        attr: function(t, e) {
            return ce.access(this, ce.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                ce.removeAttr(this, t)
            })
        },
        prop: function(t, e) {
            return ce.access(this, ce.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = ce.propFix[t] || t,
            this.each(function() {
                try {
                    this[t] = e,
                    delete this[t]
                } catch(n) {}
            })
        },
        addClass: function(t) {
            var e, n, i, o, a, r = 0,
            s = this.length,
            l = "string" == typeof t && t;
            if (ce.isFunction(t)) return this.each(function(e) {
                ce(this).addClass(t.call(this, e, this.className))
            });
            if (l) for (e = (t || "").match(de) || []; s > r; r++) if (n = this[r], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Oe, " ") : " ")) {
                for (a = 0; o = e[a++];) 0 > i.indexOf(" " + o + " ") && (i += o + " ");
                n.className = ce.trim(i)
            }
            return this
        },
        removeClass: function(t) {
            var e, n, i, o, a, r = 0,
            s = this.length,
            l = 0 === arguments.length || "string" == typeof t && t;
            if (ce.isFunction(t)) return this.each(function(e) {
                ce(this).removeClass(t.call(this, e, this.className))
            });
            if (l) for (e = (t || "").match(de) || []; s > r; r++) if (n = this[r], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Oe, " ") : "")) {
                for (a = 0; o = e[a++];) for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                n.className = t ? ce.trim(i) : ""
            }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ce.isFunction(t) ? this.each(function(n) {
                ce(this).toggleClass(t.call(this, n, this.className, e), e)
            }) : this.each(function() {
                if ("string" === n) for (var e, i = 0,
                o = ce(this), a = t.match(de) || []; e = a[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else(n === X || "boolean" === n) && (this.className && ce._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "": ce._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ",
            n = 0,
            i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Oe, " ").indexOf(e) >= 0) return ! 0;
            return ! 1
        },
        val: function(t) {
            var n, i, o, a = this[0];
            return arguments.length ? (o = ce.isFunction(t), this.each(function(n) {
                var a;
                1 === this.nodeType && (a = o ? t.call(this, n, ce(this).val()) : t, null == a ? a = "": "number" == typeof a ? a += "": ce.isArray(a) && (a = ce.map(a,
                function(t) {
                    return null == t ? "": t + ""
                })), i = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, a, "value") !== e || (this.value = a))
            })) : a ? (i = ce.valHooks[a.type] || ce.valHooks[a.nodeName.toLowerCase()], i && "get" in i && (n = i.get(a, "value")) !== e ? n: (n = a.value, "string" == typeof n ? n.replace(Ae, "") : null == n ? "": n)) : void 0
        }
    }),
    ce.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = ce.find.attr(t, "value");
                    return null != e ? e: t.text
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options,
                    o = t.selectedIndex,
                    a = "select-one" === t.type || 0 > o,
                    r = a ? null: [], s = a ? o + 1 : i.length, l = 0 > o ? s: a ? o: 0; s > l; l++) if (n = i[l], !(!n.selected && l !== o || (ce.support.optDisabled ? n.disabled: null !== n.getAttribute("disabled")) || n.parentNode.disabled && ce.nodeName(n.parentNode, "optgroup"))) {
                        if (e = ce(n).val(), a) return e;
                        r.push(e)
                    }
                    return r
                },
                set: function(t, e) {
                    for (var n, i, o = t.options,
                    a = ce.makeArray(e), r = o.length; r--;) i = o[r],
                    (i.selected = ce.inArray(ce(i).val(), a) >= 0) && (n = !0);
                    return n || (t.selectedIndex = -1),
                    a
                }
            }
        },
        attr: function(t, n, i) {
            var o, a, r = t.nodeType;
            return t && 3 !== r && 8 !== r && 2 !== r ? typeof t.getAttribute === X ? ce.prop(t, n, i) : (1 === r && ce.isXMLDoc(t) || (n = n.toLowerCase(), o = ce.attrHooks[n] || (ce.expr.match.bool.test(n) ? Ee: _e)), i === e ? o && "get" in o && null !== (a = o.get(t, n)) ? a: (a = ce.find.attr(t, n), null == a ? e: a) : null !== i ? o && "set" in o && (a = o.set(t, i, n)) !== e ? a: (t.setAttribute(n, i + ""), i) : (ce.removeAttr(t, n), e)) : void 0
        },
        removeAttr: function(t, e) {
            var n, i, o = 0,
            a = e && e.match(de);
            if (a && 1 === t.nodeType) for (; n = a[o++];) i = ce.propFix[n] || n,
            ce.expr.match.bool.test(n) ? $e && Ie || !Ne.test(n) ? t[i] = !1 : t[ce.camelCase("default-" + n)] = t[i] = !1 : ce.attr(t, n, ""),
            t.removeAttribute(Ie ? n: i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!ce.support.radioValue && "radio" === e && ce.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e),
                        n && (t.value = n),
                        e
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, n, i) {
            var o, a, r, s = t.nodeType;
            return t && 3 !== s && 8 !== s && 2 !== s ? (r = 1 !== s || !ce.isXMLDoc(t), r && (n = ce.propFix[n] || n, a = ce.propHooks[n]), i !== e ? a && "set" in a && (o = a.set(t, i, n)) !== e ? o: t[n] = i: a && "get" in a && null !== (o = a.get(t, n)) ? o: t[n]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = ce.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : De.test(t.nodeName) || Le.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }),
    Ee = {
        set: function(t, e, n) {
            return e === !1 ? ce.removeAttr(t, n) : $e && Ie || !Ne.test(n) ? t.setAttribute(!Ie && ce.propFix[n] || n, n) : t[ce.camelCase("default-" + n)] = t[n] = !0,
            n
        }
    },
    ce.each(ce.expr.match.bool.source.match(/\w+/g),
    function(t, n) {
        var i = ce.expr.attrHandle[n] || ce.find.attr;
        ce.expr.attrHandle[n] = $e && Ie || !Ne.test(n) ?
        function(t, n, o) {
            var a = ce.expr.attrHandle[n],
            r = o ? e: (ce.expr.attrHandle[n] = e) != i(t, n, o) ? n.toLowerCase() : null;
            return ce.expr.attrHandle[n] = a,
            r
        }: function(t, n, i) {
            return i ? e: t[ce.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }),
    $e && Ie || (ce.attrHooks.value = {
        set: function(t, n, i) {
            return ce.nodeName(t, "input") ? (t.defaultValue = n, e) : _e && _e.set(t, n, i)
        }
    }),
    Ie || (_e = {
        set: function(t, n, i) {
            var o = t.getAttributeNode(i);
            return o || t.setAttributeNode(o = t.ownerDocument.createAttribute(i)),
            o.value = n += "",
            "value" === i || n === t.getAttribute(i) ? n: e
        }
    },
    ce.expr.attrHandle.id = ce.expr.attrHandle.name = ce.expr.attrHandle.coords = function(t, n, i) {
        var o;
        return i ? e: (o = t.getAttributeNode(n)) && "" !== o.value ? o.value: null
    },
    ce.valHooks.button = {
        get: function(t, n) {
            var i = t.getAttributeNode(n);
            return i && i.specified ? i.value: e
        },
        set: _e.set
    },
    ce.attrHooks.contenteditable = {
        set: function(t, e, n) {
            _e.set(t, "" === e ? !1 : e, n)
        }
    },
    ce.each(["width", "height"],
    function(t, n) {
        ce.attrHooks[n] = {
            set: function(t, i) {
                return "" === i ? (t.setAttribute(n, "auto"), i) : e
            }
        }
    })),
    ce.support.hrefNormalized || ce.each(["href", "src"],
    function(t, e) {
        ce.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }),
    ce.support.style || (ce.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || e
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    }),
    ce.support.optSelected || (ce.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
            null
        }
    }),
    ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        ce.propFix[this.toLowerCase()] = this
    }),
    ce.support.enctype || (ce.propFix.enctype = "encoding"),
    ce.each(["radio", "checkbox"],
    function() {
        ce.valHooks[this] = {
            set: function(t, n) {
                return ce.isArray(n) ? t.checked = ce.inArray(ce(t).val(), n) >= 0 : e
            }
        },
        ce.support.checkOn || (ce.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on": t.value
        })
    });
    var He = /^(?:input|select|textarea)$/i,
    je = /^key/,
    Re = /^(?:mouse|contextmenu)|click/,
    Fe = /^(?:focusinfocus|focusoutblur)$/,
    Be = /^([^.]*)(?:\.(.+)|)$/;
    ce.event = {
        global: {},
        add: function(t, n, i, o, a) {
            var r, s, l, u, c, h, d, p, f, m, g, y = ce._data(t);
            if (y) {
                for (i.handler && (u = i, i = u.handler, a = u.selector), i.guid || (i.guid = ce.guid++), (s = y.events) || (s = y.events = {}), (h = y.handle) || (h = y.handle = function(t) {
                    return typeof ce === X || t && ce.event.triggered === t.type ? e: ce.event.dispatch.apply(h.elem, arguments)
                },
                h.elem = t), n = (n || "").match(de) || [""], l = n.length; l--;) r = Be.exec(n[l]) || [],
                f = g = r[1],
                m = (r[2] || "").split(".").sort(),
                f && (c = ce.event.special[f] || {},
                f = (a ? c.delegateType: c.bindType) || f, c = ce.event.special[f] || {},
                d = ce.extend({
                    type: f,
                    origType: g,
                    data: o,
                    handler: i,
                    guid: i.guid,
                    selector: a,
                    needsContext: a && ce.expr.match.needsContext.test(a),
                    namespace: m.join(".")
                },
                u), (p = s[f]) || (p = s[f] = [], p.delegateCount = 0, c.setup && c.setup.call(t, o, m, h) !== !1 || (t.addEventListener ? t.addEventListener(f, h, !1) : t.attachEvent && t.attachEvent("on" + f, h))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)), a ? p.splice(p.delegateCount++, 0, d) : p.push(d), ce.event.global[f] = !0);
                t = null
            }
        },
        remove: function(t, e, n, i, o) {
            var a, r, s, l, u, c, h, d, p, f, m, g = ce.hasData(t) && ce._data(t);
            if (g && (c = g.events)) {
                for (e = (e || "").match(de) || [""], u = e.length; u--;) if (s = Be.exec(e[u]) || [], p = m = s[1], f = (s[2] || "").split(".").sort(), p) {
                    for (h = ce.event.special[p] || {},
                    p = (i ? h.delegateType: h.bindType) || p, d = c[p] || [], s = s[2] && RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = d.length; a--;) r = d[a],
                    !o && m !== r.origType || n && n.guid !== r.guid || s && !s.test(r.namespace) || i && i !== r.selector && ("**" !== i || !r.selector) || (d.splice(a, 1), r.selector && d.delegateCount--, h.remove && h.remove.call(t, r));
                    l && !d.length && (h.teardown && h.teardown.call(t, f, g.handle) !== !1 || ce.removeEvent(t, p, g.handle), delete c[p])
                } else for (p in c) ce.event.remove(t, p + e[u], n, i, !0);
                ce.isEmptyObject(c) && (delete g.handle, ce._removeData(t, "events"))
            }
        },
        trigger: function(n, i, o, a) {
            var r, s, l, u, c, h, d, p = [o || K],
            f = le.call(n, "type") ? n.type: n,
            m = le.call(n, "namespace") ? n.namespace.split(".") : [];
            if (l = h = o = o || K, 3 !== o.nodeType && 8 !== o.nodeType && !Fe.test(f + ce.event.triggered) && (f.indexOf(".") >= 0 && (m = f.split("."), f = m.shift(), m.sort()), s = 0 > f.indexOf(":") && "on" + f, n = n[ce.expando] ? n: new ce.Event(f, "object" == typeof n && n), n.isTrigger = a ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = e, n.target || (n.target = o), i = null == i ? [n] : ce.makeArray(i, [n]), c = ce.event.special[f] || {},
            a || !c.trigger || c.trigger.apply(o, i) !== !1)) {
                if (!a && !c.noBubble && !ce.isWindow(o)) {
                    for (u = c.delegateType || f, Fe.test(u + f) || (l = l.parentNode); l; l = l.parentNode) p.push(l),
                    h = l;
                    h === (o.ownerDocument || K) && p.push(h.defaultView || h.parentWindow || t)
                }
                for (d = 0; (l = p[d++]) && !n.isPropagationStopped();) n.type = d > 1 ? u: c.bindType || f,
                r = (ce._data(l, "events") || {})[n.type] && ce._data(l, "handle"),
                r && r.apply(l, i),
                r = s && l[s],
                r && ce.acceptData(l) && r.apply && r.apply(l, i) === !1 && n.preventDefault();
                if (n.type = f, !a && !n.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), i) === !1) && ce.acceptData(o) && s && o[f] && !ce.isWindow(o)) {
                    h = o[s],
                    h && (o[s] = null),
                    ce.event.triggered = f;
                    try {
                        o[f]()
                    } catch(g) {}
                    ce.event.triggered = e,
                    h && (o[s] = h)
                }
                return n.result
            }
        },
        dispatch: function(t) {
            t = ce.event.fix(t);
            var n, i, o, a, r, s = [],
            l = ae.call(arguments),
            u = (ce._data(this, "events") || {})[t.type] || [],
            c = ce.event.special[t.type] || {};
            if (l[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (s = ce.event.handlers.call(this, t, u), n = 0; (a = s[n++]) && !t.isPropagationStopped();) for (t.currentTarget = a.elem, r = 0; (o = a.handlers[r++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, i = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(a.elem, l), i !== e && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(t, n) {
            var i, o, a, r, s = [],
            l = n.delegateCount,
            u = t.target;
            if (l && u.nodeType && (!t.button || "click" !== t.type)) for (; u != this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== t.type)) {
                for (a = [], r = 0; l > r; r++) o = n[r],
                i = o.selector + " ",
                a[i] === e && (a[i] = o.needsContext ? ce(i, this).index(u) >= 0 : ce.find(i, this, null, [u]).length),
                a[i] && a.push(o);
                a.length && s.push({
                    elem: u,
                    handlers: a
                })
            }
            return n.length > l && s.push({
                elem: this,
                handlers: n.slice(l)
            }),
            s
        },
        fix: function(t) {
            if (t[ce.expando]) return t;
            var e, n, i, o = t.type,
            a = t,
            r = this.fixHooks[o];
            for (r || (this.fixHooks[o] = r = Re.test(o) ? this.mouseHooks: je.test(o) ? this.keyHooks: {}), i = r.props ? this.props.concat(r.props) : this.props, t = new ce.Event(a), e = i.length; e--;) n = i[e],
            t[n] = a[n];
            return t.target || (t.target = a.srcElement || K),
            3 === t.target.nodeType && (t.target = t.target.parentNode),
            t.metaKey = !!t.metaKey,
            r.filter ? r.filter(t, a) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode: e.keyCode),
                t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, n) {
                var i, o, a, r = n.button,
                s = n.fromElement;
                return null == t.pageX && null != n.clientX && (o = t.target.ownerDocument || K, a = o.documentElement, i = o.body, t.pageX = n.clientX + (a && a.scrollLeft || i && i.scrollLeft || 0) - (a && a.clientLeft || i && i.clientLeft || 0), t.pageY = n.clientY + (a && a.scrollTop || i && i.scrollTop || 0) - (a && a.clientTop || i && i.clientTop || 0)),
                !t.relatedTarget && s && (t.relatedTarget = s === t.target ? n.toElement: s),
                t.which || r === e || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== c() && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === c() && this.blur ? (this.blur(), !1) : e
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ce.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : e
                },
                _default: function(t) {
                    return ce.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    t.result !== e && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, i) {
            var o = ce.extend(new ce.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? ce.event.trigger(o, null, e) : ce.event.dispatch.call(e, o),
            o.isDefaultPrevented() && n.preventDefault()
        }
    },
    ce.removeEvent = K.removeEventListener ?
    function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    }: function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && (typeof t[i] === X && (t[i] = null), t.detachEvent(i, n))
    },
    ce.Event = function(t, n) {
        return this instanceof ce.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? l: u) : this.type = t, n && ce.extend(this, n), this.timeStamp = t && t.timeStamp || ce.now(), this[ce.expando] = !0, e) : new ce.Event(t, n)
    },
    ce.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = l,
            t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = l,
            t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = l,
            this.stopPropagation()
        }
    },
    ce.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(t, e) {
        ce.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                o = t.relatedTarget,
                a = t.handleObj;
                return (!o || o !== i && !ce.contains(i, o)) && (t.type = a.origType, n = a.handler.apply(this, arguments), t.type = e),
                n
            }
        }
    }),
    ce.support.submitBubbles || (ce.event.special.submit = {
        setup: function() {
            return ce.nodeName(this, "form") ? !1 : (ce.event.add(this, "click._submit keypress._submit",
            function(t) {
                var n = t.target,
                i = ce.nodeName(n, "input") || ce.nodeName(n, "button") ? n.form: e;
                i && !ce._data(i, "submitBubbles") && (ce.event.add(i, "submit._submit",
                function(t) {
                    t._submit_bubble = !0
                }), ce._data(i, "submitBubbles", !0))
            }), e)
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ce.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return ce.nodeName(this, "form") ? !1 : (ce.event.remove(this, "._submit"), e)
        }
    }),
    ce.support.changeBubbles || (ce.event.special.change = {
        setup: function() {
            return He.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ce.event.add(this, "propertychange._change",
            function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), ce.event.add(this, "click._change",
            function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1),
                ce.event.simulate("change", this, t, !0)
            })), !1) : (ce.event.add(this, "beforeactivate._change",
            function(t) {
                var e = t.target;
                He.test(e.nodeName) && !ce._data(e, "changeBubbles") && (ce.event.add(e, "change._change",
                function(t) { ! this.parentNode || t.isSimulated || t.isTrigger || ce.event.simulate("change", this.parentNode, t, !0)
                }), ce._data(e, "changeBubbles", !0))
            }), e)
        },
        handle: function(t) {
            var n = t.target;
            return this !== n || t.isSimulated || t.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? t.handleObj.handler.apply(this, arguments) : e
        },
        teardown: function() {
            return ce.event.remove(this, "._change"),
            !He.test(this.nodeName)
        }
    }),
    ce.support.focusinBubbles || ce.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(t, e) {
        var n = 0,
        i = function(t) {
            ce.event.simulate(e, t.target, ce.event.fix(t), !0)
        };
        ce.event.special[e] = {
            setup: function() {
                0 === n++&&K.addEventListener(t, i, !0)
            },
            teardown: function() {
                0 === --n && K.removeEventListener(t, i, !0)
            }
        }
    }),
    ce.fn.extend({
        on: function(t, n, i, o, a) {
            var r, s;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = e);
                for (r in t) this.on(r, n, i, t[r], a);
                return this
            }
            if (null == i && null == o ? (o = n, i = n = e) : null == o && ("string" == typeof n ? (o = i, i = e) : (o = i, i = n, n = e)), o === !1) o = u;
            else if (!o) return this;
            return 1 === a && (s = o, o = function(t) {
                return ce().off(t),
                s.apply(this, arguments)
            },
            o.guid = s.guid || (s.guid = ce.guid++)),
            this.each(function() {
                ce.event.add(this, t, o, i, n)
            })
        },
        one: function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function(t, n, i) {
            var o, a;
            if (t && t.preventDefault && t.handleObj) return o = t.handleObj,
            ce(t.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace: o.origType, o.selector, o.handler),
            this;
            if ("object" == typeof t) {
                for (a in t) this.off(a, n, t[a]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (i = n, n = e),
            i === !1 && (i = u),
            this.each(function() {
                ce.event.remove(this, t, i, n)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                ce.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, n) {
            var i = this[0];
            return i ? ce.event.trigger(t, n, i, !0) : e
        }
    });
    var We = /^.[^:#\[\.,]*$/,
    Ve = /^(?:parents|prev(?:Until|All))/,
    qe = ce.expr.match.needsContext,
    ze = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ce.fn.extend({
        find: function(t) {
            var e, n = [],
            i = this,
            o = i.length;
            if ("string" != typeof t) return this.pushStack(ce(t).filter(function() {
                for (e = 0; o > e; e++) if (ce.contains(i[e], this)) return ! 0
            }));
            for (e = 0; o > e; e++) ce.find(t, i[e], n);
            return n = this.pushStack(o > 1 ? ce.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + t: t,
            n
        },
        has: function(t) {
            var e, n = ce(t, this),
            i = n.length;
            return this.filter(function() {
                for (e = 0; i > e; e++) if (ce.contains(this, n[e])) return ! 0
            })
        },
        not: function(t) {
            return this.pushStack(d(this, t || [], !0))
        },
        filter: function(t) {
            return this.pushStack(d(this, t || [], !1))
        },
        is: function(t) {
            return !! d(this, "string" == typeof t && qe.test(t) ? ce(t) : t || [], !1).length
        },
        closest: function(t, e) {
            for (var n, i = 0,
            o = this.length,
            a = [], r = qe.test(t) || "string" != typeof t ? ce(t, e || this.context) : 0; o > i; i++) for (n = this[i]; n && n !== e; n = n.parentNode) if (11 > n.nodeType && (r ? r.index(n) > -1 : 1 === n.nodeType && ce.find.matchesSelector(n, t))) {
                n = a.push(n);
                break
            }
            return this.pushStack(a.length > 1 ? ce.unique(a) : a)
        },
        index: function(t) {
            return t ? "string" == typeof t ? ce.inArray(this[0], ce(t)) : ce.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(t, e) {
            var n = "string" == typeof t ? ce(t, e) : ce.makeArray(t && t.nodeType ? [t] : t),
            i = ce.merge(this.get(), n);
            return this.pushStack(ce.unique(i))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject: this.prevObject.filter(t))
        }
    }),
    ce.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e: null
        },
        parents: function(t) {
            return ce.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return ce.dir(t, "parentNode", n)
        },
        next: function(t) {
            return h(t, "nextSibling")
        },
        prev: function(t) {
            return h(t, "previousSibling")
        },
        nextAll: function(t) {
            return ce.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return ce.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return ce.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return ce.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return ce.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return ce.sibling(t.firstChild)
        },
        contents: function(t) {
            return ce.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document: ce.merge([], t.childNodes)
        }
    },
    function(t, e) {
        ce.fn[t] = function(n, i) {
            var o = ce.map(this, e, n);
            return "Until" !== t.slice( - 5) && (i = n),
            i && "string" == typeof i && (o = ce.filter(i, o)),
            this.length > 1 && (ze[t] || (o = ce.unique(o)), Ve.test(t) && (o = o.reverse())),
            this.pushStack(o)
        }
    }),
    ce.extend({
        filter: function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"),
            1 === e.length && 1 === i.nodeType ? ce.find.matchesSelector(i, t) ? [i] : [] : ce.find.matches(t, ce.grep(e,
            function(t) {
                return 1 === t.nodeType
            }))
        },
        dir: function(t, n, i) {
            for (var o = [], a = t[n]; a && 9 !== a.nodeType && (i === e || 1 !== a.nodeType || !ce(a).is(i));) 1 === a.nodeType && o.push(a),
            a = a[n];
            return o
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    });
    var Ue = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Ye = / jQuery\d+="(?:null|\d+)"/g,
    Xe = RegExp("<(?:" + Ue + ")[\\s/>]", "i"),
    Ge = /^\s+/,
    Ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Je = /<([\w:]+)/,
    Qe = /<tbody/i,
    Ze = /<|&#?\w+;/,
    tn = /<(?:script|style|link)/i,
    en = /^(?:checkbox|radio)$/i,
    nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
    on = /^$|\/(?:java|ecma)script/i,
    an = /^true\/(.*)/,
    rn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    sn = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ce.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    ln = p(K),
    un = ln.appendChild(K.createElement("div"));
    sn.optgroup = sn.option,
    sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead,
    sn.th = sn.td,
    ce.fn.extend({
        text: function(t) {
            return ce.access(this,
            function(t) {
                return t === e ? ce.text(this) : this.empty().append((this[0] && this[0].ownerDocument || K).createTextNode(t))
            },
            null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = f(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments,
            function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = f(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
            function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
            function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, i = t ? ce.filter(t, this) : this, o = 0; null != (n = i[o]); o++) e || 1 !== n.nodeType || ce.cleanData(S(n)),
            n.parentNode && (e && ce.contains(n.ownerDocument, n) && y(S(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && ce.cleanData(S(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && ce.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t,
            e = null == e ? t: e,
            this.map(function() {
                return ce.clone(this, t, e)
            })
        },
        html: function(t) {
            return ce.access(this,
            function(t) {
                var n = this[0] || {},
                i = 0,
                o = this.length;
                if (t === e) return 1 === n.nodeType ? n.innerHTML.replace(Ye, "") : e;
                if (! ("string" != typeof t || tn.test(t) || !ce.support.htmlSerialize && Xe.test(t) || !ce.support.leadingWhitespace && Ge.test(t) || sn[(Je.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Ke, "<$1></$2>");
                    try {
                        for (; o > i; i++) n = this[i] || {},
                        1 === n.nodeType && (ce.cleanData(S(n, !1)), n.innerHTML = t);
                        n = 0
                    } catch(a) {}
                }
                n && this.empty().append(t)
            },
            null, t, arguments.length)
        },
        replaceWith: function() {
            var t = ce.map(this,
            function(t) {
                return [t.nextSibling, t.parentNode]
            }),
            e = 0;
            return this.domManip(arguments,
            function(n) {
                var i = t[e++],
                o = t[e++];
                o && (i && i.parentNode !== o && (i = this.nextSibling), ce(this).remove(), o.insertBefore(n, i))
            },
            !0),
            e ? this: this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e, n) {
            t = ie.apply([], t);
            var i, o, a, r, s, l, u = 0,
            c = this.length,
            h = this,
            d = c - 1,
            p = t[0],
            f = ce.isFunction(p);
            if (f || !(1 >= c || "string" != typeof p || ce.support.checkClone) && nn.test(p)) return this.each(function(i) {
                var o = h.eq(i);
                f && (t[0] = p.call(this, i, o.html())),
                o.domManip(t, e, n)
            });
            if (c && (l = ce.buildFragment(t, this[0].ownerDocument, !1, !n && this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                for (r = ce.map(S(l, "script"), m), a = r.length; c > u; u++) o = l,
                u !== d && (o = ce.clone(o, !0, !0), a && ce.merge(r, S(o, "script"))),
                e.call(this[u], o, u);
                if (a) for (s = r[r.length - 1].ownerDocument, ce.map(r, g), u = 0; a > u; u++) o = r[u],
                on.test(o.type || "") && !ce._data(o, "globalEval") && ce.contains(s, o) && (o.src ? ce._evalUrl(o.src) : ce.globalEval((o.text || o.textContent || o.innerHTML || "").replace(rn, "")));
                l = i = null
            }
            return this
        }
    }),
    ce.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(t, e) {
        ce.fn[t] = function(t) {
            for (var n, i = 0,
            o = [], a = ce(t), r = a.length - 1; r >= i; i++) n = i === r ? this: this.clone(!0),
            ce(a[i])[e](n),
            oe.apply(o, n.get());
            return this.pushStack(o)
        }
    }),
    ce.extend({
        clone: function(t, e, n) {
            var i, o, a, r, s, l = ce.contains(t.ownerDocument, t);
            if (ce.support.html5Clone || ce.isXMLDoc(t) || !Xe.test("<" + t.nodeName + ">") ? a = t.cloneNode(!0) : (un.innerHTML = t.outerHTML, un.removeChild(a = un.firstChild)), !(ce.support.noCloneEvent && ce.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ce.isXMLDoc(t))) for (i = S(a), s = S(t), r = 0; null != (o = s[r]); ++r) i[r] && b(o, i[r]);
            if (e) if (n) for (s = s || S(t), i = i || S(a), r = 0; null != (o = s[r]); r++) v(o, i[r]);
            else v(t, a);
            return i = S(a, "script"),
            i.length > 0 && y(i, !l && S(t, "script")),
            i = s = o = null,
            a
        },
        buildFragment: function(t, e, n, i) {
            for (var o, a, r, s, l, u, c, h = t.length,
            d = p(e), f = [], m = 0; h > m; m++) if (a = t[m], a || 0 === a) if ("object" === ce.type(a)) ce.merge(f, a.nodeType ? [a] : a);
            else if (Ze.test(a)) {
                for (s = s || d.appendChild(e.createElement("div")), l = (Je.exec(a) || ["", ""])[1].toLowerCase(), c = sn[l] || sn._default, s.innerHTML = c[1] + a.replace(Ke, "<$1></$2>") + c[2], o = c[0]; o--;) s = s.lastChild;
                if (!ce.support.leadingWhitespace && Ge.test(a) && f.push(e.createTextNode(Ge.exec(a)[0])), !ce.support.tbody) for (a = "table" !== l || Qe.test(a) ? "<table>" !== c[1] || Qe.test(a) ? 0 : s: s.firstChild, o = a && a.childNodes.length; o--;) ce.nodeName(u = a.childNodes[o], "tbody") && !u.childNodes.length && a.removeChild(u);
                for (ce.merge(f, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = d.lastChild
            } else f.push(e.createTextNode(a));
            for (s && d.removeChild(s), ce.support.appendChecked || ce.grep(S(f, "input"), w), m = 0; a = f[m++];) if ((!i || -1 === ce.inArray(a, i)) && (r = ce.contains(a.ownerDocument, a), s = S(d.appendChild(a), "script"), r && y(s), n)) for (o = 0; a = s[o++];) on.test(a.type || "") && n.push(a);
            return s = null,
            d
        },
        cleanData: function(t, e) {
            for (var n, i, o, a, r = 0,
            s = ce.expando,
            l = ce.cache,
            u = ce.support.deleteExpando,
            c = ce.event.special; null != (n = t[r]); r++) if ((e || ce.acceptData(n)) && (o = n[s], a = o && l[o])) {
                if (a.events) for (i in a.events) c[i] ? ce.event.remove(n, i) : ce.removeEvent(n, i, a.handle);
                l[o] && (delete l[o], u ? delete n[s] : typeof n.removeAttribute !== X ? n.removeAttribute(s) : n[s] = null, ee.push(o))
            }
        },
        _evalUrl: function(t) {
            return ce.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }),
    ce.fn.extend({
        wrapAll: function(t) {
            if (ce.isFunction(t)) return this.each(function(e) {
                ce(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = ce(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return ce.isFunction(t) ? this.each(function(e) {
                ce(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = ce(this),
                n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = ce.isFunction(t);
            return this.each(function(n) {
                ce(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ce.nodeName(this, "body") || ce(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var cn, hn, dn, pn = /alpha\([^)]*\)/i,
    fn = /opacity\s*=\s*([^)]*)/,
    mn = /^(top|right|bottom|left)$/,
    gn = /^(none|table(?!-c[ea]).+)/,
    yn = /^margin/,
    vn = RegExp("^(" + he + ")(.*)$", "i"),
    bn = RegExp("^(" + he + ")(?!px)[a-z%]+$", "i"),
    Sn = RegExp("^([+-])=(" + he + ")", "i"),
    wn = {
        BODY: "block"
    },
    xn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Mn = {
        letterSpacing: 0,
        fontWeight: 400
    },
    Tn = ["Top", "Right", "Bottom", "Left"],
    Cn = ["Webkit", "O", "Moz", "ms"];
    ce.fn.extend({
        css: function(t, n) {
            return ce.access(this,
            function(t, n, i) {
                var o, a, r = {},
                s = 0;
                if (ce.isArray(n)) {
                    for (a = hn(t), o = n.length; o > s; s++) r[n[s]] = ce.css(t, n[s], !1, a);
                    return r
                }
                return i !== e ? ce.style(t, n, i) : ce.css(t, n)
            },
            t, n, arguments.length > 1)
        },
        show: function() {
            return T(this, !0)
        },
        hide: function() {
            return T(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                M(this) ? ce(this).show() : ce(this).hide()
            })
        }
    }),
    ce.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = dn(t, "opacity");
                        return "" === n ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ce.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(t, n, i, o) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var a, r, s, l = ce.camelCase(n),
                u = t.style;
                if (n = ce.cssProps[l] || (ce.cssProps[l] = x(u, l)), s = ce.cssHooks[n] || ce.cssHooks[l], i === e) return s && "get" in s && (a = s.get(t, !1, o)) !== e ? a: u[n];
                if (r = typeof i, "string" === r && (a = Sn.exec(i)) && (i = (a[1] + 1) * a[2] + parseFloat(ce.css(t, n)), r = "number"), !(null == i || "number" === r && isNaN(i) || ("number" !== r || ce.cssNumber[l] || (i += "px"), ce.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (i = s.set(t, i, o)) === e))) try {
                    u[n] = i
                } catch(c) {}
            }
        },
        css: function(t, n, i, o) {
            var a, r, s, l = ce.camelCase(n);
            return n = ce.cssProps[l] || (ce.cssProps[l] = x(t.style, l)),
            s = ce.cssHooks[n] || ce.cssHooks[l],
            s && "get" in s && (r = s.get(t, !0, i)),
            r === e && (r = dn(t, n, o)),
            "normal" === r && n in Mn && (r = Mn[n]),
            "" === i || i ? (a = parseFloat(r), i === !0 || ce.isNumeric(a) ? a || 0 : r) : r
        }
    }),
    t.getComputedStyle ? (hn = function(e) {
        return t.getComputedStyle(e, null)
    },
    dn = function(t, n, i) {
        var o, a, r, s = i || hn(t),
        l = s ? s.getPropertyValue(n) || s[n] : e,
        u = t.style;
        return s && ("" !== l || ce.contains(t.ownerDocument, t) || (l = ce.style(t, n)), bn.test(l) && yn.test(n) && (o = u.width, a = u.minWidth, r = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = o, u.minWidth = a, u.maxWidth = r)),
        l
    }) : K.documentElement.currentStyle && (hn = function(t) {
        return t.currentStyle
    },
    dn = function(t, n, i) {
        var o, a, r, s = i || hn(t),
        l = s ? s[n] : e,
        u = t.style;
        return null == l && u && u[n] && (l = u[n]),
        bn.test(l) && !mn.test(n) && (o = u.left, a = t.runtimeStyle, r = a && a.left, r && (a.left = t.currentStyle.left), u.left = "fontSize" === n ? "1em": l, l = u.pixelLeft + "px", u.left = o, r && (a.left = r)),
        "" === l ? "auto": l
    }),
    ce.each(["height", "width"],
    function(t, n) {
        ce.cssHooks[n] = {
            get: function(t, i, o) {
                return i ? 0 === t.offsetWidth && gn.test(ce.css(t, "display")) ? ce.swap(t, xn,
                function() {
                    return k(t, n, o)
                }) : k(t, n, o) : e
            },
            set: function(t, e, i) {
                var o = i && hn(t);
                return C(t, e, i ? P(t, n, i, ce.support.boxSizing && "border-box" === ce.css(t, "boxSizing", !1, o), o) : 0)
            }
        }
    }),
    ce.support.opacity || (ce.cssHooks.opacity = {
        get: function(t, e) {
            return fn.test((e && t.currentStyle ? t.currentStyle.filter: t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": e ? "1": ""
        },
        set: function(t, e) {
            var n = t.style,
            i = t.currentStyle,
            o = ce.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")": "",
            a = i && i.filter || n.filter || "";
            n.zoom = 1,
            (e >= 1 || "" === e) && "" === ce.trim(a.replace(pn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = pn.test(a) ? a.replace(pn, o) : a + " " + o)
        }
    }),
    ce(function() {
        ce.support.reliableMarginRight || (ce.cssHooks.marginRight = {
            get: function(t, n) {
                return n ? ce.swap(t, {
                    display: "inline-block"
                },
                dn, [t, "marginRight"]) : e
            }
        }),
        !ce.support.pixelPosition && ce.fn.position && ce.each(["top", "left"],
        function(t, n) {
            ce.cssHooks[n] = {
                get: function(t, i) {
                    return i ? (i = dn(t, n), bn.test(i) ? ce(t).position()[n] + "px": i) : e
                }
            }
        })
    }),
    ce.expr && ce.expr.filters && (ce.expr.filters.hidden = function(t) {
        return 0 >= t.offsetWidth && 0 >= t.offsetHeight || !ce.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || ce.css(t, "display"))
    },
    ce.expr.filters.visible = function(t) {
        return ! ce.expr.filters.hidden(t)
    }),
    ce.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(t, e) {
        ce.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0,
                o = {},
                a = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + Tn[i] + e] = a[i] || a[i - 2] || a[0];
                return o
            }
        },
        yn.test(t) || (ce.cssHooks[t + e].set = C)
    });
    var Pn = /%20/g,
    kn = /\[\]$/,
    _n = /\r?\n/g,
    En = /^(?:submit|button|image|reset|file)$/i,
    On = /^(?:input|select|textarea|keygen)/i;
    ce.fn.extend({
        serialize: function() {
            return ce.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = ce.prop(this, "elements");
                return t ? ce.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !ce(this).is(":disabled") && On.test(this.nodeName) && !En.test(t) && (this.checked || !en.test(t))
            }).map(function(t, e) {
                var n = ce(this).val();
                return null == n ? null: ce.isArray(n) ? ce.map(n,
                function(t) {
                    return {
                        name: e.name,
                        value: t.replace(_n, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(_n, "\r\n")
                }
            }).get()
        }
    }),
    ce.param = function(t, n) {
        var i, o = [],
        a = function(t, e) {
            e = ce.isFunction(e) ? e() : null == e ? "": e,
            o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (n === e && (n = ce.ajaxSettings && ce.ajaxSettings.traditional), ce.isArray(t) || t.jquery && !ce.isPlainObject(t)) ce.each(t,
        function() {
            a(this.name, this.value)
        });
        else for (i in t) O(i, t[i], n, a);
        return o.join("&").replace(Pn, "+")
    },
    ce.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(t, e) {
        ce.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }),
    ce.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var An, Dn, Ln = ce.now(),
    Nn = /\?/,
    In = /#.*$/,
    $n = /([?&])_=[^&]*/,
    Hn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    jn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Rn = /^(?:GET|HEAD)$/,
    Fn = /^\/\//,
    Bn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    Wn = ce.fn.load,
    Vn = {},
    qn = {},
    zn = "*/".concat("*");
    try {
        Dn = G.href
    } catch(Un) {
        Dn = K.createElement("a"),
        Dn.href = "",
        Dn = Dn.href
    }
    An = Bn.exec(Dn.toLowerCase()) || [],
    ce.fn.load = function(t, n, i) {
        if ("string" != typeof t && Wn) return Wn.apply(this, arguments);
        var o, a, r, s = this,
        l = t.indexOf(" ");
        return l >= 0 && (o = t.slice(l, t.length), t = t.slice(0, l)),
        ce.isFunction(n) ? (i = n, n = e) : n && "object" == typeof n && (r = "POST"),
        s.length > 0 && ce.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: n
        }).done(function(t) {
            a = arguments,
            s.html(o ? ce("<div>").append(ce.parseHTML(t)).find(o) : t)
        }).complete(i &&
        function(t, e) {
            s.each(i, a || [t.responseText, e, t])
        }),
        this
    },
    ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(t, e) {
        ce.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    ce.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Dn,
            type: "GET",
            isLocal: jn.test(An[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ce.parseJSON,
                "text xml": ce.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? L(L(t, ce.ajaxSettings), e) : L(ce.ajaxSettings, t)
        },
        ajaxPrefilter: A(Vn),
        ajaxTransport: A(qn),
        ajax: function(t, n) {
            function i(t, n, i, o) {
                var a, h, v, b, w, M = n;
                2 !== S && (S = 2, l && clearTimeout(l), c = e, s = o || "", x.readyState = t > 0 ? 4 : 0, a = t >= 200 && 300 > t || 304 === t, i && (b = N(d, x, i)), b = I(d, b, x, a), a ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (ce.lastModified[r] = w), w = x.getResponseHeader("etag"), w && (ce.etag[r] = w)), 204 === t || "HEAD" === d.type ? M = "nocontent": 304 === t ? M = "notmodified": (M = b.state, h = b.data, v = b.error, a = !v)) : (v = M, (t || !M) && (M = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (n || M) + "", a ? m.resolveWith(p, [h, M, x]) : m.rejectWith(p, [x, M, v]), x.statusCode(y), y = e, u && f.trigger(a ? "ajaxSuccess": "ajaxError", [x, d, a ? h: v]), g.fireWith(p, [x, M]), u && (f.trigger("ajaxComplete", [x, d]), --ce.active || ce.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = e),
            n = n || {};
            var o, a, r, s, l, u, c, h, d = ce.ajaxSetup({},
            n),
            p = d.context || d,
            f = d.context && (p.nodeType || p.jquery) ? ce(p) : ce.event,
            m = ce.Deferred(),
            g = ce.Callbacks("once memory"),
            y = d.statusCode || {},
            v = {},
            b = {},
            S = 0,
            w = "canceled",
            x = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === S) {
                        if (!h) for (h = {}; e = Hn.exec(s);) h[e[1].toLowerCase()] = e[2];
                        e = h[t.toLowerCase()]
                    }
                    return null == e ? null: e
                },
                getAllResponseHeaders: function() {
                    return 2 === S ? s: null
                },
                setRequestHeader: function(t, e) {
                    var n = t.toLowerCase();
                    return S || (t = b[n] = b[n] || t, v[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return S || (d.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    var e;
                    if (t) if (2 > S) for (e in t) y[e] = [y[e], t[e]];
                    else x.always(t[x.status]);
                    return this
                },
                abort: function(t) {
                    var e = t || w;
                    return c && c.abort(e),
                    i(0, e),
                    this
                }
            };
            if (m.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, d.url = ((t || d.url || Dn) + "").replace(In, "").replace(Fn, An[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = ce.trim(d.dataType || "*").toLowerCase().match(de) || [""], null == d.crossDomain && (o = Bn.exec(d.url.toLowerCase()), d.crossDomain = !(!o || o[1] === An[1] && o[2] === An[2] && (o[3] || ("http:" === o[1] ? "80": "443")) === (An[3] || ("http:" === An[1] ? "80": "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ce.param(d.data, d.traditional)), D(Vn, d, n, x), 2 === S) return x;
            u = d.global,
            u && 0 === ce.active++&&ce.event.trigger("ajaxStart"),
            d.type = d.type.toUpperCase(),
            d.hasContent = !Rn.test(d.type),
            r = d.url,
            d.hasContent || (d.data && (r = d.url += (Nn.test(r) ? "&": "?") + d.data, delete d.data), d.cache === !1 && (d.url = $n.test(r) ? r.replace($n, "$1_=" + Ln++) : r + (Nn.test(r) ? "&": "?") + "_=" + Ln++)),
            d.ifModified && (ce.lastModified[r] && x.setRequestHeader("If-Modified-Since", ce.lastModified[r]), ce.etag[r] && x.setRequestHeader("If-None-Match", ce.etag[r])),
            (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", d.contentType),
            x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + zn + "; q=0.01": "") : d.accepts["*"]);
            for (a in d.headers) x.setRequestHeader(a, d.headers[a]);
            if (d.beforeSend && (d.beforeSend.call(p, x, d) === !1 || 2 === S)) return x.abort();
            w = "abort";
            for (a in {
                success: 1,
                error: 1,
                complete: 1
            }) x[a](d[a]);
            if (c = D(qn, d, n, x)) {
                x.readyState = 1,
                u && f.trigger("ajaxSend", [x, d]),
                d.async && d.timeout > 0 && (l = setTimeout(function() {
                    x.abort("timeout")
                },
                d.timeout));
                try {
                    S = 1,
                    c.send(v, i)
                } catch(M) {
                    if (! (2 > S)) throw M;
                    i( - 1, M)
                }
            } else i( - 1, "No Transport");
            return x
        },
        getJSON: function(t, e, n) {
            return ce.get(t, e, n, "json")
        },
        getScript: function(t, n) {
            return ce.get(t, e, n, "script")
        }
    }),
    ce.each(["get", "post"],
    function(t, n) {
        ce[n] = function(t, i, o, a) {
            return ce.isFunction(i) && (a = a || o, o = i, i = e),
            ce.ajax({
                url: t,
                type: n,
                dataType: a,
                data: i,
                success: o
            })
        }
    }),
    ce.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return ce.globalEval(t),
                t
            }
        }
    }),
    ce.ajaxPrefilter("script",
    function(t) {
        t.cache === e && (t.cache = !1),
        t.crossDomain && (t.type = "GET", t.global = !1)
    }),
    ce.ajaxTransport("script",
    function(t) {
        if (t.crossDomain) {
            var n, i = K.head || ce("head")[0] || K.documentElement;
            return {
                send: function(e, o) {
                    n = K.createElement("script"),
                    n.async = !0,
                    t.scriptCharset && (n.charset = t.scriptCharset),
                    n.src = t.url,
                    n.onload = n.onreadystatechange = function(t, e) { (e || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, e || o(200, "success"))
                    },
                    i.insertBefore(n, i.firstChild)
                },
                abort: function() {
                    n && n.onload(e, !0)
                }
            }
        }
    });
    var Yn = [],
    Xn = /(=)\?(?=&|$)|\?\?/;
    ce.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Yn.pop() || ce.expando + "_" + Ln++;
            return this[t] = !0,
            t
        }
    }),
    ce.ajaxPrefilter("json jsonp",
    function(n, i, o) {
        var a, r, s, l = n.jsonp !== !1 && (Xn.test(n.url) ? "url": "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Xn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (a = n.jsonpCallback = ce.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Xn, "$1" + a) : n.jsonp !== !1 && (n.url += (Nn.test(n.url) ? "&": "?") + n.jsonp + "=" + a), n.converters["script json"] = function() {
            return s || ce.error(a + " was not called"),
            s[0]
        },
        n.dataTypes[0] = "json", r = t[a], t[a] = function() {
            s = arguments
        },
        o.always(function() {
            t[a] = r,
            n[a] && (n.jsonpCallback = i.jsonpCallback, Yn.push(a)),
            s && ce.isFunction(r) && r(s[0]),
            s = r = e
        }), "script") : e
    });
    var Gn, Kn, Jn = 0,
    Qn = t.ActiveXObject &&
    function() {
        var t;
        for (t in Gn) Gn[t](e, !0)
    };
    ce.ajaxSettings.xhr = t.ActiveXObject ?
    function() {
        return ! this.isLocal && $() || H()
    }: $,
    Kn = ce.ajaxSettings.xhr(),
    ce.support.cors = !!Kn && "withCredentials" in Kn,
    Kn = ce.support.ajax = !!Kn,
    Kn && ce.ajaxTransport(function(n) {
        if (!n.crossDomain || ce.support.cors) {
            var i;
            return {
                send: function(o, a) {
                    var r, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType),
                    n.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in o) l.setRequestHeader(s, o[s])
                    } catch(u) {}
                    l.send(n.hasContent && n.data || null),
                    i = function(t, o) {
                        var s, u, c, h;
                        try {
                            if (i && (o || 4 === l.readyState)) if (i = e, r && (l.onreadystatechange = ce.noop, Qn && delete Gn[r]), o) 4 !== l.readyState && l.abort();
                            else {
                                h = {},
                                s = l.status,
                                u = l.getAllResponseHeaders(),
                                "string" == typeof l.responseText && (h.text = l.responseText);
                                try {
                                    c = l.statusText
                                } catch(d) {
                                    c = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = h.text ? 200 : 404
                            }
                        } catch(p) {
                            o || a( - 1, p)
                        }
                        h && a(s, c, h, u)
                    },
                    n.async ? 4 === l.readyState ? setTimeout(i) : (r = ++Jn, Qn && (Gn || (Gn = {},
                    ce(t).unload(Qn)), Gn[r] = i), l.onreadystatechange = i) : i()
                },
                abort: function() {
                    i && i(e, !0)
                }
            }
        }
    });
    var Zn, ti, ei = /^(?:toggle|show|hide)$/,
    ni = RegExp("^(?:([+-])=|)(" + he + ")([a-z%]*)$", "i"),
    ii = /queueHooks$/,
    oi = [W],
    ai = {
        "*": [function(t, e) {
            var n = this.createTween(t, e),
            i = n.cur(),
            o = ni.exec(e),
            a = o && o[3] || (ce.cssNumber[t] ? "": "px"),
            r = (ce.cssNumber[t] || "px" !== a && +i) && ni.exec(ce.css(n.elem, t)),
            s = 1,
            l = 20;
            if (r && r[3] !== a) {
                a = a || r[3],
                o = o || [],
                r = +i || 1;
                do s = s || ".5",
                r /= s,
                ce.style(n.elem, t, r + a);
                while (s !== (s = n.cur() / i) && 1 !== s && --l)
            }
            return o && (r = n.start = +r || +i || 0, n.unit = a, n.end = o[1] ? r + (o[1] + 1) * o[2] : +o[2]),
            n
        }]
    };
    ce.Animation = ce.extend(F, {
        tweener: function(t, e) {
            ce.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var n, i = 0,
            o = t.length; o > i; i++) n = t[i],
            ai[n] = ai[n] || [],
            ai[n].unshift(e)
        },
        prefilter: function(t, e) {
            e ? oi.unshift(t) : oi.push(t)
        }
    }),
    ce.Tween = V,
    V.prototype = {
        constructor: V,
        init: function(t, e, n, i, o, a) {
            this.elem = t,
            this.prop = n,
            this.easing = o || "swing",
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = a || (ce.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var t = V.propHooks[this.prop];
            return t && t.get ? t.get(this) : V.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = V.propHooks[this.prop];
            return this.pos = e = this.options.duration ? ce.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : V.propHooks._default.set(this),
            this
        }
    },
    V.prototype.init.prototype = V.prototype,
    V.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ce.css(t.elem, t.prop, ""), e && "auto" !== e ? e: 0) : t.elem[t.prop]
            },
            set: function(t) {
                ce.fx.step[t.prop] ? ce.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ce.cssProps[t.prop]] || ce.cssHooks[t.prop]) ? ce.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    },
    V.propHooks.scrollTop = V.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    ce.each(["toggle", "show", "hide"],
    function(t, e) {
        var n = ce.fn[e];
        ce.fn[e] = function(t, i, o) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(q(e, !0), t, i, o)
        }
    }),
    ce.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(M).css("opacity", 0).show().end().animate({
                opacity: e
            },
            t, n, i)
        },
        animate: function(t, e, n, i) {
            var o = ce.isEmptyObject(t),
            a = ce.speed(e, n, i),
            r = function() {
                var e = F(this, ce.extend({},
                t), a); (o || ce._data(this, "finish")) && e.stop(!0)
            };
            return r.finish = r,
            o || a.queue === !1 ? this.each(r) : this.queue(a.queue, r)
        },
        stop: function(t, n, i) {
            var o = function(t) {
                var e = t.stop;
                delete t.stop,
                e(i)
            };
            return "string" != typeof t && (i = n, n = t, t = e),
            n && t !== !1 && this.queue(t || "fx", []),
            this.each(function() {
                var e = !0,
                n = null != t && t + "queueHooks",
                a = ce.timers,
                r = ce._data(this);
                if (n) r[n] && r[n].stop && o(r[n]);
                else for (n in r) r[n] && r[n].stop && ii.test(n) && o(r[n]);
                for (n = a.length; n--;) a[n].elem !== this || null != t && a[n].queue !== t || (a[n].anim.stop(i), e = !1, a.splice(n, 1)); (e || !i) && ce.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"),
            this.each(function() {
                var e, n = ce._data(this),
                i = n[t + "queue"],
                o = n[t + "queueHooks"],
                a = ce.timers,
                r = i ? i.length: 0;
                for (n.finish = !0, ce.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = a.length; e--;) a[e].elem === this && a[e].queue === t && (a[e].anim.stop(!0), a.splice(e, 1));
                for (e = 0; r > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }),
    ce.each({
        slideDown: q("show"),
        slideUp: q("hide"),
        slideToggle: q("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(t, e) {
        ce.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }),
    ce.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? ce.extend({},
        t) : {
            complete: n || !n && e || ce.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !ce.isFunction(e) && e
        };
        return i.duration = ce.fx.off ? 0 : "number" == typeof i.duration ? i.duration: i.duration in ce.fx.speeds ? ce.fx.speeds[i.duration] : ce.fx.speeds._default,
        (null == i.queue || i.queue === !0) && (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            ce.isFunction(i.old) && i.old.call(this),
            i.queue && ce.dequeue(this, i.queue)
        },
        i
    },
    ce.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return.5 - Math.cos(t * Math.PI) / 2
        }
    },
    ce.timers = [],
    ce.fx = V.prototype.init,
    ce.fx.tick = function() {
        var t, n = ce.timers,
        i = 0;
        for (Zn = ce.now(); n.length > i; i++) t = n[i],
        t() || n[i] !== t || n.splice(i--, 1);
        n.length || ce.fx.stop(),
        Zn = e
    },
    ce.fx.timer = function(t) {
        t() && ce.timers.push(t) && ce.fx.start()
    },
    ce.fx.interval = 13,
    ce.fx.start = function() {
        ti || (ti = setInterval(ce.fx.tick, ce.fx.interval))
    },
    ce.fx.stop = function() {
        clearInterval(ti),
        ti = null
    },
    ce.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    ce.fx.step = {},
    ce.expr && ce.expr.filters && (ce.expr.filters.animated = function(t) {
        return ce.grep(ce.timers,
        function(e) {
            return t === e.elem
        }).length
    }),
    ce.fn.offset = function(t) {
        if (arguments.length) return t === e ? this: this.each(function(e) {
            ce.offset.setOffset(this, t, e)
        });
        var n, i, o = {
            top: 0,
            left: 0
        },
        a = this[0],
        r = a && a.ownerDocument;
        return r ? (n = r.documentElement, ce.contains(n, a) ? (typeof a.getBoundingClientRect !== X && (o = a.getBoundingClientRect()), i = z(r), {
            top: o.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o) : void 0
    },
    ce.offset = {
        setOffset: function(t, e, n) {
            var i = ce.css(t, "position");
            "static" === i && (t.style.position = "relative");
            var o, a, r = ce(t),
            s = r.offset(),
            l = ce.css(t, "top"),
            u = ce.css(t, "left"),
            c = ("absolute" === i || "fixed" === i) && ce.inArray("auto", [l, u]) > -1,
            h = {},
            d = {};
            c ? (d = r.position(), o = d.top, a = d.left) : (o = parseFloat(l) || 0, a = parseFloat(u) || 0),
            ce.isFunction(e) && (e = e.call(t, n, s)),
            null != e.top && (h.top = e.top - s.top + o),
            null != e.left && (h.left = e.left - s.left + a),
            "using" in e ? e.using.call(t, h) : r.css(h)
        }
    },
    ce.fn.extend({
        position: function() {
            if (this[0]) {
                var t, e, n = {
                    top: 0,
                    left: 0
                },
                i = this[0];
                return "fixed" === ce.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ce.nodeName(t[0], "html") || (n = t.offset()), n.top += ce.css(t[0], "borderTopWidth", !0), n.left += ce.css(t[0], "borderLeftWidth", !0)),
                {
                    top: e.top - n.top - ce.css(i, "marginTop", !0),
                    left: e.left - n.left - ce.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || J; t && !ce.nodeName(t, "html") && "static" === ce.css(t, "position");) t = t.offsetParent;
                return t || J
            })
        }
    }),
    ce.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(t, n) {
        var i = /Y/.test(n);
        ce.fn[t] = function(o) {
            return ce.access(this,
            function(t, o, a) {
                var r = z(t);
                return a === e ? r ? n in r ? r[n] : r.document.documentElement[o] : t[o] : (r ? r.scrollTo(i ? ce(r).scrollLeft() : a, i ? a: ce(r).scrollTop()) : t[o] = a, e)
            },
            t, o, arguments.length, null)
        }
    }),
    ce.each({
        Height: "height",
        Width: "width"
    },
    function(t, n) {
        ce.each({
            padding: "inner" + t,
            content: n,
            "": "outer" + t
        },
        function(i, o) {
            ce.fn[o] = function(o, a) {
                var r = arguments.length && (i || "boolean" != typeof o),
                s = i || (o === !0 || a === !0 ? "margin": "border");
                return ce.access(this,
                function(n, i, o) {
                    var a;
                    return ce.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (a = n.documentElement, Math.max(n.body["scroll" + t], a["scroll" + t], n.body["offset" + t], a["offset" + t], a["client" + t])) : o === e ? ce.css(n, i, s) : ce.style(n, i, o, s)
                },
                n, r ? o: e, r, null)
            }
        })
    }),
    ce.fn.size = function() {
        return this.length
    },
    ce.fn.andSelf = ce.fn.addBack,
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ce: (t.jQuery = t.$ = ce, "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return ce
    }))
} (window),
function(t, e, n) {
    "function" == typeof define && define.amd ? define(["jquery"],
    function(i) {
        return n(i, t, e),
        i.mobile
    }) : n(t.jQuery, t, e)
} (this, document,
function(t, e, n) { !
    function(t) {
        t.extend(t.support, {
            orientation: "orientation" in e && "onorientationchange" in e
        })
    } (t),
    function(t) {
        t.event.special.throttledresize = {
            setup: function() {
                t(this).bind("resize", a)
            },
            teardown: function() {
                t(this).unbind("resize", a)
            }
        };
        var e, n, i, o = 250,
        a = function() {
            n = (new Date).getTime(),
            i = n - r,
            i >= o ? (r = n, t(this).trigger("throttledresize")) : (e && clearTimeout(e), e = setTimeout(a, o - i))
        },
        r = 0
    } (t),
    function(t, e) {
        function i() {
            var t = o();
            t !== a && (a = t, l.trigger(u))
        }
        var o, a, r, s, l = t(e),
        u = "orientationchange",
        c = {
            0 : !0,
            180 : !0
        };
        if (t.support.orientation) {
            var h = e.innerWidth || t(e).width(),
            d = e.innerHeight || t(e).height(),
            p = 50;
            r = h > d && h - d > p,
            s = c[e.orientation],
            (r && s || !r && !s) && (c = {
                "-90": !0,
                90 : !0
            })
        }
        t.event.special.orientationchange = t.extend({},
        t.event.special.orientationchange, {
            setup: function() {
                return t.support.orientation && !t.event.special.orientationchange.disabled ? !1 : (a = o(), l.bind("throttledresize", i), void 0)
            },
            teardown: function() {
                return t.support.orientation && !t.event.special.orientationchange.disabled ? !1 : (l.unbind("throttledresize", i), void 0)
            },
            add: function(t) {
                var e = t.handler;
                t.handler = function(t) {
                    return t.orientation = o(),
                    e.apply(this, arguments)
                }
            }
        }),
        t.event.special.orientationchange.orientation = o = function() {
            var i = !0,
            o = n.documentElement;
            return i = t.support.orientation ? c[e.orientation] : o && o.clientWidth / o.clientHeight < 1.1,
            i ? "portrait": "landscape"
        },
        t.fn[u] = function(t) {
            return t ? this.bind(u, t) : this.trigger(u)
        },
        t.attrFn && (t.attrFn[u] = !0)
    } (t, this),
    function(t, e, n, i) {
        function o(t) {
            for (; t && "undefined" != typeof t.originalEvent;) t = t.originalEvent;
            return t
        }
        function a(e, n) {
            var a, r, s, l, u, c, h, d, p, f = e.type;
            if (e = t.Event(e), e.type = n, a = e.originalEvent, r = t.event.props, f.search(/^(mouse|click)/) > -1 && (r = E), a) for (h = r.length, l; h;) l = r[--h],
            e[l] = a[l];
            if (f.search(/mouse(down|up)|click/) > -1 && !e.which && (e.which = 1), -1 !== f.search(/^touch/) && (s = o(a), f = s.touches, u = s.changedTouches, c = f && f.length ? f[0] : u && u.length ? u[0] : i, c)) for (d = 0, p = k.length; p > d; d++) l = k[d],
            e[l] = c[l];
            return e
        }
        function r(e) {
            for (var n, i, o = {}; e;) {
                n = t.data(e, T);
                for (i in n) n[i] && (o[i] = o.hasVirtualBinding = !0);
                e = e.parentNode
            }
            return o
        }
        function s(e, n) {
            for (var i; e;) {
                if (i = t.data(e, T), i && (!n || i[n])) return e;
                e = e.parentNode
            }
            return null
        }
        function l() {
            H = !1
        }
        function u() {
            H = !0
        }
        function c() {
            B = 0,
            I.length = 0,
            $ = !1,
            u()
        }
        function h() {
            l()
        }
        function d() {
            p(),
            A = setTimeout(function() {
                A = 0,
                c()
            },
            t.vmouse.resetTimerDuration)
        }
        function p() {
            A && (clearTimeout(A), A = 0)
        }
        function f(e, n, i) {
            var o;
            return (i && i[e] || !i && s(n.target, e)) && (o = a(n, e), t(n.target).trigger(o)),
            o
        }
        function m(e) {
            var n = t.data(e.target, C);
            if (! ($ || B && B === n)) {
                var i = f("v" + e.type, e);
                i && (i.isDefaultPrevented() && e.preventDefault(), i.isPropagationStopped() && e.stopPropagation(), i.isImmediatePropagationStopped() && e.stopImmediatePropagation())
            }
        }
        function g(e) {
            var n, i, a = o(e).touches;
            if (a && 1 === a.length && (n = e.target, i = r(n), i.hasVirtualBinding)) {
                B = F++,
                t.data(n, C, B),
                p(),
                h(),
                N = !1;
                var s = o(e).touches[0];
                D = s.pageX,
                L = s.pageY,
                f("vmouseover", e, i),
                f("vmousedown", e, i)
            }
        }
        function y(t) {
            H || (N || f("vmousecancel", t, r(t.target)), N = !0, d())
        }
        function v(e) {
            if (!H) {
                var n = o(e).touches[0],
                i = N,
                a = t.vmouse.moveDistanceThreshold,
                s = r(e.target);
                N = N || Math.abs(n.pageX - D) > a || Math.abs(n.pageY - L) > a,
                N && !i && f("vmousecancel", e, s),
                f("vmousemove", e, s),
                d()
            }
        }
        function b(t) {
            if (!H) {
                u();
                var e, n = r(t.target);
                if (f("vmouseup", t, n), !N) {
                    var i = f("vclick", t, n);
                    i && i.isDefaultPrevented() && (e = o(t).changedTouches[0], I.push({
                        touchID: B,
                        x: e.clientX,
                        y: e.clientY
                    }), $ = !0)
                }
                f("vmouseout", t, n),
                N = !1,
                d()
            }
        }
        function S(e) {
            var n, i = t.data(e, T);
            if (i) for (n in i) if (i[n]) return ! 0;
            return ! 1
        }
        function w() {}
        function x(e) {
            var n = e.substr(1);
            return {
                setup: function() {
                    S(this) || t.data(this, T, {});
                    var i = t.data(this, T);
                    i[e] = !0,
                    O[e] = (O[e] || 0) + 1,
                    1 === O[e] && R.bind(n, m),
                    t(this).bind(n, w),
                    j && (O.touchstart = (O.touchstart || 0) + 1, 1 === O.touchstart && R.bind("touchstart", g).bind("touchend", b).bind("touchmove", v).bind("scroll", y))
                },
                teardown: function() {--O[e],
                    O[e] || R.unbind(n, m),
                    j && (--O.touchstart, O.touchstart || R.unbind("touchstart", g).unbind("touchmove", v).unbind("touchend", b).unbind("scroll", y));
                    var i = t(this),
                    o = t.data(this, T);
                    o && (o[e] = !1),
                    i.unbind(n, w),
                    S(this) || i.removeData(T)
                }
            }
        }
        var M, T = "virtualMouseBindings",
        C = "virtualTouchID",
        P = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
        k = "clientX clientY pageX pageY screenX screenY".split(" "),
        _ = t.event.mouseHooks ? t.event.mouseHooks.props: [],
        E = t.event.props.concat(_),
        O = {},
        A = 0,
        D = 0,
        L = 0,
        N = !1,
        I = [],
        $ = !1,
        H = !1,
        j = "addEventListener" in n,
        R = t(n),
        F = 1,
        B = 0;
        t.vmouse = {
            moveDistanceThreshold: 10,
            clickDistanceThreshold: 10,
            resetTimerDuration: 1500
        };
        for (var W = 0; W < P.length; W++) t.event.special[P[W]] = x(P[W]);
        j && n.addEventListener("click",
        function(e) {
            var n, i, o, a, r, s, l = I.length,
            u = e.target;
            if (l) for (n = e.clientX, i = e.clientY, M = t.vmouse.clickDistanceThreshold, o = u; o;) {
                for (a = 0; l > a; a++) if (r = I[a], s = 0, o === u && Math.abs(r.x - n) < M && Math.abs(r.y - i) < M || t.data(o, C) === r.touchID) return e.preventDefault(),
                e.stopPropagation(),
                void 0;
                o = o.parentNode
            }
        },
        !0)
    } (t, e, n),
    function(t) {
        var e = {
            touch: "ontouchend" in n
        };
        t.mobile = t.mobile || {},
        t.mobile.support = t.mobile.support || {},
        t.extend(t.support, e),
        t.extend(t.mobile.support, e)
    } (t),
    function(t, e, i) {
        function o(e, n, i) {
            var o = i.type;
            i.type = n,
            t.event.handle.call(e, i),
            i.type = o
        }
        t.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),
        function(e, n) {
            t.fn[n] = function(t) {
                return t ? this.bind(n, t) : this.trigger(n)
            },
            t.attrFn && (t.attrFn[n] = !0)
        });
        var a = t.mobile.support.touch,
        r = "touchmove scroll",
        s = a ? "touchstart": "mousedown",
        l = a ? "touchend": "mouseup",
        u = a ? "touchmove": "mousemove";
        t.event.special.scrollstart = {
            enabled: !0,
            setup: function() {
                function e(t, e) {
                    n = e,
                    o(a, n ? "scrollstart": "scrollstop", t)
                }
                var n, i, a = this,
                s = t(a);
                s.bind(r,
                function(o) {
                    t.event.special.scrollstart.enabled && (n || e(o, !0), clearTimeout(i), i = setTimeout(function() {
                        e(o, !1)
                    },
                    50))
                })
            }
        },
        t.event.special.tap = {
            tapholdThreshold: 750,
            setup: function() {
                var e = this,
                i = t(e);
                i.bind("vmousedown",
                function(a) {
                    function r() {
                        clearTimeout(u)
                    }
                    function s() {
                        r(),
                        i.unbind("vclick", l).unbind("vmouseup", r),
                        t(n).unbind("vmousecancel", s)
                    }
                    function l(t) {
                        s(),
                        c === t.target && o(e, "tap", t)
                    }
                    if (a.which && 1 !== a.which) return ! 1;
                    var u, c = a.target;
                    a.originalEvent,
                    i.bind("vmouseup", r).bind("vclick", l),
                    t(n).bind("vmousecancel", s),
                    u = setTimeout(function() {
                        o(e, "taphold", t.Event("taphold", {
                            target: c
                        }))
                    },
                    t.event.special.tap.tapholdThreshold)
                })
            }
        },
        t.event.special.swipe = {
            scrollSupressionThreshold: 30,
            durationThreshold: 1e3,
            horizontalDistanceThreshold: 30,
            verticalDistanceThreshold: 75,
            setup: function() {
                var e = this,
                n = t(e);
                n.bind(s,
                function(e) {
                    function o(e) {
                        if (s) {
                            var n = e.originalEvent.touches ? e.originalEvent.touches[0] : e;
                            a = {
                                time: (new Date).getTime(),
                                coords: [n.pageX, n.pageY]
                            },
                            Math.abs(s.coords[0] - a.coords[0]) > t.event.special.swipe.scrollSupressionThreshold && e.preventDefault()
                        }
                    }
                    var a, r = e.originalEvent.touches ? e.originalEvent.touches[0] : e,
                    s = {
                        time: (new Date).getTime(),
                        coords: [r.pageX, r.pageY],
                        origin: t(e.target)
                    };
                    n.bind(u, o).one(l,
                    function() {
                        n.unbind(u, o),
                        s && a && a.time - s.time < t.event.special.swipe.durationThreshold && Math.abs(s.coords[0] - a.coords[0]) > t.event.special.swipe.horizontalDistanceThreshold && Math.abs(s.coords[1] - a.coords[1]) < t.event.special.swipe.verticalDistanceThreshold && s.origin.trigger("swipe").trigger(s.coords[0] > a.coords[0] ? "swipeleft": "swiperight"),
                        s = a = i
                    })
                })
            }
        },
        t.each({
            scrollstop: "scrollstart",
            taphold: "tap",
            swipeleft: "swipe",
            swiperight: "swipe"
        },
        function(e, n) {
            t.event.special[e] = {
                setup: function() {
                    t(this).bind(n, t.noop)
                }
            }
        })
    } (t, this),
    function(t, e, i) {
        var o = {};
        t.mobile = t.extend({},
        {
            version: "1.2.1",
            ns: "",
            subPageUrlKey: "ui-page",
            activePageClass: "ui-page-active",
            activeBtnClass: "ui-btn-active",
            focusClass: "ui-focus",
            ajaxEnabled: !0,
            hashListeningEnabled: !0,
            linkBindingEnabled: !0,
            defaultPageTransition: "fade",
            maxTransitionWidth: !1,
            minScrollBack: 250,
            touchOverflowEnabled: !1,
            defaultDialogTransition: "pop",
            pageLoadErrorMessage: "Error Loading Page",
            pageLoadErrorMessageTheme: "e",
            phonegapNavigationEnabled: !1,
            autoInitializePage: !0,
            pushStateEnabled: !0,
            ignoreContentEnabled: !1,
            orientationChangeEnabled: !0,
            buttonMarkup: {
                hoverDelay: 200
            },
            keyCode: {
                ALT: 18,
                BACKSPACE: 8,
                CAPS_LOCK: 20,
                COMMA: 188,
                COMMAND: 91,
                COMMAND_LEFT: 91,
                COMMAND_RIGHT: 93,
                CONTROL: 17,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                INSERT: 45,
                LEFT: 37,
                MENU: 93,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SHIFT: 16,
                SPACE: 32,
                TAB: 9,
                UP: 38,
                WINDOWS: 91
            },
            behaviors: {},
            silentScroll: function(i) {
                "number" !== t.type(i) && (i = t.mobile.defaultHomeScroll),
                t.event.special.scrollstart.enabled = !1,
                setTimeout(function() {
                    e.scrollTo(0, i),
                    t(n).trigger("silentscroll", {
                        x: 0,
                        y: i
                    })
                },
                20),
                setTimeout(function() {
                    t.event.special.scrollstart.enabled = !0
                },
                150)
            },
            nsNormalizeDict: o,
            nsNormalize: function(e) {
                return e ? o[e] || (o[e] = t.camelCase(t.mobile.ns + e)) : void 0
            },
            getInheritedTheme: function(t, e) {
                for (var n, i, o = t[0], a = "", r = /ui-(bar|body|overlay)-([a-z])\b/; o && (n = o.className || "", !(n && (i = r.exec(n)) && (a = i[2])));) o = o.parentNode;
                return a || e || "a"
            },
            closestPageData: function(t) {
                return t.closest(':jqmData(role="page"), :jqmData(role="dialog")').data("page")
            },
            enhanceable: function(t) {
                return this.haveParents(t, "enhance")
            },
            hijackable: function(t) {
                return this.haveParents(t, "ajax")
            },
            haveParents: function(e, n) {
                if (!t.mobile.ignoreContentEnabled) return e;
                for (var i, o, a, r = e.length,
                s = t(), l = 0; r > l; l++) {
                    for (o = e.eq(l), a = !1, i = e[l]; i;) {
                        var u = i.getAttribute ? i.getAttribute("data-" + t.mobile.ns + n) : "";
                        if ("false" === u) {
                            a = !0;
                            break
                        }
                        i = i.parentNode
                    }
                    a || (s = s.add(o))
                }
                return s
            },
            getScreenHeight: function() {
                return e.innerHeight || t(e).height()
            }
        },
        t.mobile),
        t.fn.jqmData = function(e, n) {
            var o;
            return "undefined" != typeof e && (e && (e = t.mobile.nsNormalize(e)), o = arguments.length < 2 || n === i ? this.data(e) : this.data(e, n)),
            o
        },
        t.jqmData = function(e, n, i) {
            var o;
            return "undefined" != typeof n && (o = t.data(e, n ? t.mobile.nsNormalize(n) : n, i)),
            o
        },
        t.fn.jqmRemoveData = function(e) {
            return this.removeData(t.mobile.nsNormalize(e))
        },
        t.jqmRemoveData = function(e, n) {
            return t.removeData(e, t.mobile.nsNormalize(n))
        },
        t.fn.removeWithDependents = function() {
            t.removeWithDependents(this)
        },
        t.removeWithDependents = function(e) {
            var n = t(e); (n.jqmData("dependents") || t()).remove(),
            n.remove()
        },
        t.fn.addDependents = function(e) {
            t.addDependents(t(this), e)
        },
        t.addDependents = function(e, n) {
            var i = t(e).jqmData("dependents") || t();
            t(e).jqmData("dependents", t.merge(i, n))
        },
        t.fn.getEncodedText = function() {
            return t("<div/>").text(t(this).text()).html()
        },
        t.fn.jqmEnhanceable = function() {
            return t.mobile.enhanceable(this)
        },
        t.fn.jqmHijackable = function() {
            return t.mobile.hijackable(this)
        };
        var a = t.find,
        r = /:jqmData\(([^)]*)\)/g;
        t.find = function(e, n, i, o) {
            return e = e.replace(r, "[data-" + (t.mobile.ns || "") + "$1]"),
            a.call(this, e, n, i, o)
        },
        t.extend(t.find, a),
        t.find.matches = function(e, n) {
            return t.find(e, null, null, n)
        },
        t.find.matchesSelector = function(e, n) {
            return t.find(n, null, null, [e]).length > 0
        }
    } (t, this),
    function(t) {
        var e = t("meta[name=viewport]"),
        n = e.attr("content"),
        i = n + ",maximum-scale=1, user-scalable=no",
        o = n + ",maximum-scale=10, user-scalable=yes",
        a = /(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test(n);
        t.mobile.zoom = t.extend({},
        {
            enabled: !a,
            locked: !1,
            disable: function(n) { ! a && !t.mobile.zoom.locked && (e.attr("content", i), t.mobile.zoom.enabled = !1, t.mobile.zoom.locked = n || !1)
            },
            enable: function(n) { ! a && (!t.mobile.zoom.locked || n === !0) && (e.attr("content", o), t.mobile.zoom.enabled = !0, t.mobile.zoom.locked = !1)
            },
            restore: function() {
                a || (e.attr("content", n), t.mobile.zoom.enabled = !0)
            }
        })
    } (t),
    function(t, e) {
        function n(t) {
            i = t.originalEvent,
            s = i.accelerationIncludingGravity,
            o = Math.abs(s.x),
            a = Math.abs(s.y),
            r = Math.abs(s.z),
            !e.orientation && (o > 7 || (r > 6 && 8 > a || 8 > r && a > 6) && o > 5) ? l.enabled && l.disable() : l.enabled || l.enable()
        }
        if (/iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1) {
            var i, o, a, r, s, l = t.mobile.zoom;
            t(e).bind("orientationchange.iosorientationfix", l.enable).bind("devicemotion.iosorientationfix", n)
        }
    } (t, this)
}),
/*! Copyright (c) 2013 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.1.3
 *
 * Requires: 1.2.2+
 */
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t: t(jQuery)
} (function(t) {
    function e(e) {
        var o, a = e || window.event,
        r = [].slice.call(arguments, 1),
        s = 0,
        l = 0,
        u = 0,
        c = 0,
        h = 0;
        return e = t.event.fix(a),
        e.type = "mousewheel",
        a.wheelDelta && (s = a.wheelDelta),
        a.detail && (s = -1 * a.detail),
        a.deltaY && (u = -1 * a.deltaY, s = u),
        a.deltaX && (l = a.deltaX, s = -1 * l),
        void 0 !== a.wheelDeltaY && (u = a.wheelDeltaY),
        void 0 !== a.wheelDeltaX && (l = -1 * a.wheelDeltaX),
        c = Math.abs(s),
        (!n || n > c) && (n = c),
        h = Math.max(Math.abs(u), Math.abs(l)),
        (!i || i > h) && (i = h),
        o = s > 0 ? "floor": "ceil",
        s = Math[o](s / n),
        l = Math[o](l / i),
        u = Math[o](u / i),
        r.unshift(e, s, l, u),
        (t.event.dispatch || t.event.handle).apply(this, r)
    }
    var n, i, o = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
    a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"];
    if (t.event.fixHooks) for (var r = o.length; r;) t.event.fixHooks[o[--r]] = t.event.mouseHooks;
    t.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) for (var t = a.length; t;) this.addEventListener(a[--t], e, !1);
            else this.onmousewheel = e
        },
        teardown: function() {
            if (this.removeEventListener) for (var t = a.length; t;) this.removeEventListener(a[--t], e, !1);
            else this.onmousewheel = null
        }
    },
    t.fn.extend({
        mousewheel: function(t) {
            return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
        },
        unmousewheel: function(t) {
            return this.unbind("mousewheel", t)
        }
    })
}),
/** @license
 *
 * SoundManager 2: JavaScript Sound for the Web
 * ----------------------------------------------
 * http://schillmania.com/projects/soundmanager2/
 *
 * Copyright (c) 2007, Scott Schiller. All rights reserved.
 * Code provided under the BSD License:
 * http://schillmania.com/projects/soundmanager2/license.txt
 *
 * V2.97a.20130512
 */
function(t, e) {
    "use strict";
    function n(n, i) {
        function o(t) {
            return me.preferFlash && le && !me.ignoreFlash && me.flash[t] !== e && me.flash[t]
        }
        function a(t) {
            return function(e) {
                var n, i = this._s;
                return i && i._a ? n = t.call(this, e) : (i && i.id ? me._wD(i.id + ": Ignoring " + e.type) : me._wD(Se + "Ignoring " + e.type), n = null),
                n
            }
        }
        this.setupOptions = {
            url: n || null,
            flashVersion: 8,
            debugMode: !0,
            debugFlash: !1,
            useConsole: !0,
            consoleOnly: !0,
            waitForWindowLoad: !1,
            bgColor: "#ffffff",
            useHighPerformance: !1,
            flashPollingInterval: null,
            html5PollingInterval: null,
            flashLoadTimeout: 1e3,
            wmode: null,
            allowScriptAccess: "always",
            useFlashBlock: !1,
            useHTML5Audio: !0,
            html5Test: /^(probably|maybe)$/i,
            preferFlash: !0,
            noSWFCache: !1,
            idPrefix: "sound"
        },
        this.defaultOptions = {
            autoLoad: !1,
            autoPlay: !1,
            from: null,
            loops: 1,
            onid3: null,
            onload: null,
            whileloading: null,
            onplay: null,
            onpause: null,
            onresume: null,
            whileplaying: null,
            onposition: null,
            onstop: null,
            onfailure: null,
            onfinish: null,
            multiShot: !0,
            multiShotEvents: !1,
            position: null,
            pan: 0,
            stream: !0,
            to: null,
            type: null,
            usePolicyFile: !1,
            volume: 100
        },
        this.flash9Options = {
            isMovieStar: null,
            usePeakData: !1,
            useWaveformData: !1,
            useEQData: !1,
            onbufferchange: null,
            ondataerror: null
        },
        this.movieStarOptions = {
            bufferTime: 3,
            serverURL: null,
            onconnect: null,
            duration: null
        },
        this.audioFormats = {
            mp3: {
                type: ['audio/mpeg; codecs="mp3"', "audio/mpeg", "audio/mp3", "audio/MPA", "audio/mpa-robust"],
                required: !0
            },
            mp4: {
                related: ["aac", "m4a", "m4b"],
                type: ['audio/mp4; codecs="mp4a.40.2"', "audio/aac", "audio/x-m4a", "audio/MP4A-LATM", "audio/mpeg4-generic"],
                required: !1
            },
            ogg: {
                type: ["audio/ogg; codecs=vorbis"],
                required: !1
            },
            opus: {
                type: ["audio/ogg; codecs=opus", "audio/opus"],
                required: !1
            },
            wav: {
                type: ['audio/wav; codecs="1"', "audio/wav", "audio/wave", "audio/x-wav"],
                required: !1
            }
        },
        this.movieID = "sm2-container",
        this.id = i || "sm2movie",
        this.debugID = "soundmanager-debug",
        this.debugURLParam = /([#?&])debug=1/i,
        this.versionNumber = "V2.97a.20130512",
        this.version = null,
        this.movieURL = null,
        this.altURL = null,
        this.swfLoaded = !1,
        this.enabled = !1,
        this.oMC = null,
        this.sounds = {},
        this.soundIDs = [],
        this.muted = !1,
        this.didFlashBlock = !1,
        this.filePattern = null,
        this.filePatterns = {
            flash8: /\.mp3(\?.*)?$/i,
            flash9: /\.mp3(\?.*)?$/i
        },
        this.features = {
            buffering: !1,
            peakData: !1,
            waveformData: !1,
            eqData: !1,
            movieStar: !1
        },
        this.sandbox = {
            type: null,
            types: {
                remote: "remote (domain-based) rules",
                localWithFile: "local with file access (no internet access)",
                localWithNetwork: "local with network (internet access only, no local access)",
                localTrusted: "local, trusted (local+internet access)"
            },
            description: null,
            noRemote: null,
            noLocal: null
        },
        this.html5 = {
            usingFlash: null
        },
        this.flash = {},
        this.html5Only = !1,
        this.ignoreFlash = !1;
        var r, s, l, u, c, h, d, p, f, m, g, y, v, b, S, w, x, M, T, C, P, k, _, E, O, A, D, L, N, I, $, H, j, R, F, B, W, V, q, z, U, Y, X, G, K, J, Q, Z, te, ee, ne, ie, oe, ae, re, se, le, ue, ce, he, de, pe, fe, me = this,
        ge = null,
        ye = null,
        ve = "soundManager",
        be = ve + ": ",
        Se = "HTML5::",
        we = navigator.userAgent,
        xe = t.location.href.toString(),
        Me = document,
        Te = [],
        Ce = !0,
        Pe = !1,
        ke = !1,
        _e = !1,
        Ee = !1,
        Oe = !1,
        Ae = 0,
        De = ["log", "info", "warn", "error"],
        Le = 8,
        Ne = null,
        Ie = null,
        $e = !1,
        He = !1,
        je = 0,
        Re = null,
        Fe = [],
        Be = null,
        We = Array.prototype.slice,
        Ve = !1,
        qe = 0,
        ze = we.match(/(ipad|iphone|ipod)/i),
        Ue = we.match(/android/i),
        Ye = we.match(/msie/i),
        Xe = we.match(/webkit/i),
        Ge = we.match(/safari/i) && !we.match(/chrome/i),
        Ke = we.match(/opera/i),
        Je = we.match(/firefox/i),
        Qe = we.match(/(mobile|pre\/|xoom)/i) || ze || Ue,
        Ze = !xe.match(/usehtml5audio/i) && !xe.match(/sm2\-ignorebadua/i) && Ge && !we.match(/silk/i) && we.match(/OS X 10_6_([3-7])/i),
        tn = t.console !== e && console.log !== e,
        en = Me.hasFocus !== e ? Me.hasFocus() : null,
        nn = Ge && (Me.hasFocus === e || !Me.hasFocus()),
        on = !nn,
        an = /(mp3|mp4|mpa|m4a|m4b)/i,
        rn = 1e3,
        sn = "about:blank",
        ln = Me.location ? Me.location.protocol.match(/http/i) : null,
        un = ln ? "": "http://",
        cn = /^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,
        hn = ["mpeg4", "aac", "flv", "mov", "mp4", "m4v", "f4v", "m4a", "m4b", "mp4v", "3gp", "3g2"],
        dn = new RegExp("\\.(" + hn.join("|") + ")(\\?.*)?$", "i");
        this.mimePattern = /^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i,
        this.useAltURL = !ln,
        W = {
            swfBox: "sm2-object-box",
            swfDefault: "movieContainer",
            swfError: "swf_error",
            swfTimedout: "swf_timedout",
            swfLoaded: "swf_loaded",
            swfUnblocked: "swf_unblocked",
            sm2Debug: "sm2_debug",
            highPerf: "high_performance",
            flashDebug: "flash_debug"
        },
        this.hasHTML5 = function() {
            try {
                return Audio !== e && (Ke && opera !== e && opera.version() < 10 ? new Audio(null) : new Audio).canPlayType !== e
            } catch(t) {
                return ! 1
            }
        } (),
        this.setup = function(t) {
            var n = !me.url;
            return t !== e && _e && Be && me.ok() && (t.flashVersion !== e || t.url !== e || t.html5Test !== e) && U(R("setupLate")),
            g(t),
            t && (n && O && t.url !== e && me.beginDelayedInit(), O || t.url === e || "complete" !== Me.readyState || setTimeout(_, 1)),
            me
        },
        this.ok = function() {
            return Be ? _e && !Ee: me.useHTML5Audio && me.hasHTML5
        },
        this.supported = this.ok,
        this.getMovie = function(e) {
            return s(e) || Me[e] || t[e]
        },
        this.createSound = function(t, n) {
            function i() {
                return s = q(s),
                me.sounds[s.id] = new r(s),
                me.soundIDs.push(s.id),
                me.sounds[s.id]
            }
            var o, a, s, l = null;
            if (o = ve + ".createSound(): ", a = o + R(_e ? "notOK": "notReady"), !_e || !me.ok()) return U(a),
            !1;
            if (n !== e && (t = {
                id: t,
                url: n
            }), s = m(t), s.url = J(s.url), void 0 === s.id && (s.id = me.setupOptions.idPrefix + qe++), s.id.toString().charAt(0).match(/^[0-9]$/) && me._wD(o + R("badID", s.id), 2), me._wD(o + s.id + (s.url ? " (" + s.url + ")": ""), 1), Y(s.id, !0)) return me._wD(o + s.id + " exists", 1),
            me.sounds[s.id];
            if (te(s)) l = i(),
            me._wD(s.id + ": Using HTML5"),
            l._setup_html5(s);
            else {
                if (me.html5Only) return me._wD(s.id + ": No HTML5 support for this sound, and no Flash. Exiting."),
                i();
                if (me.html5.usingFlash && s.url && s.url.match(/data\:/i)) return me._wD(s.id + ": data: URIs not supported via Flash. Exiting."),
                i();
                h > 8 && (null === s.isMovieStar && (s.isMovieStar = !!(s.serverURL || (s.type ? s.type.match(cn) : !1) || s.url && s.url.match(dn))), s.isMovieStar && (me._wD(o + "using MovieStar handling"), s.loops > 1 && p("noNSLoop"))),
                s = z(s, o),
                l = i(),
                8 === h ? ye._createSound(s.id, s.loops || 1, s.usePolicyFile) : (ye._createSound(s.id, s.url, s.usePeakData, s.useWaveformData, s.useEQData, s.isMovieStar, s.isMovieStar ? s.bufferTime: !1, s.loops || 1, s.serverURL, s.duration || null, s.autoPlay, !0, s.autoLoad, s.usePolicyFile), s.serverURL || (l.connected = !0, s.onconnect && s.onconnect.apply(l))),
                s.serverURL || !s.autoLoad && !s.autoPlay || l.load(s)
            }
            return ! s.serverURL && s.autoPlay && l.play(),
            l
        },
        this.destroySound = function(t, e) {
            if (!Y(t)) return ! 1;
            var n, i = me.sounds[t];
            for (i._iO = {},
            i.stop(), i.unload(), n = 0; n < me.soundIDs.length; n++) if (me.soundIDs[n] === t) {
                me.soundIDs.splice(n, 1);
                break
            }
            return e || i.destruct(!0),
            i = null,
            delete me.sounds[t],
            !0
        },
        this.load = function(t, e) {
            return Y(t) ? me.sounds[t].load(e) : !1
        },
        this.unload = function(t) {
            return Y(t) ? me.sounds[t].unload() : !1
        },
        this.onPosition = function(t, e, n, i) {
            return Y(t) ? me.sounds[t].onposition(e, n, i) : !1
        },
        this.onposition = this.onPosition,
        this.clearOnPosition = function(t, e, n) {
            return Y(t) ? me.sounds[t].clearOnPosition(e, n) : !1
        },
        this.play = function(t, e) {
            var n = null,
            i = e && !(e instanceof Object);
            if (!_e || !me.ok()) return U(ve + ".play(): " + R(_e ? "notOK": "notReady")),
            !1;
            if (Y(t, i)) i && (e = {
                url: e
            });
            else {
                if (!i) return ! 1;
                i && (e = {
                    url: e
                }),
                e && e.url && (me._wD(ve + '.play(): Attempting to create "' + t + '"', 1), e.id = t, n = me.createSound(e).play())
            }
            return null === n && (n = me.sounds[t].play(e)),
            n
        },
        this.start = this.play,
        this.setPosition = function(t, e) {
            return Y(t) ? me.sounds[t].setPosition(e) : !1
        },
        this.stop = function(t) {
            return Y(t) ? (me._wD(ve + ".stop(" + t + ")", 1), me.sounds[t].stop()) : !1
        },
        this.stopAll = function() {
            var t;
            me._wD(ve + ".stopAll()", 1);
            for (t in me.sounds) me.sounds.hasOwnProperty(t) && me.sounds[t].stop()
        },
        this.pause = function(t) {
            return Y(t) ? me.sounds[t].pause() : !1
        },
        this.pauseAll = function() {
            var t;
            for (t = me.soundIDs.length - 1; t >= 0; t--) me.sounds[me.soundIDs[t]].pause()
        },
        this.resume = function(t) {
            return Y(t) ? me.sounds[t].resume() : !1
        },
        this.resumeAll = function() {
            var t;
            for (t = me.soundIDs.length - 1; t >= 0; t--) me.sounds[me.soundIDs[t]].resume()
        },
        this.togglePause = function(t) {
            return Y(t) ? me.sounds[t].togglePause() : !1
        },
        this.setPan = function(t, e) {
            return Y(t) ? me.sounds[t].setPan(e) : !1
        },
        this.setVolume = function(t, e) {
            return Y(t) ? me.sounds[t].setVolume(e) : !1
        },
        this.mute = function(t) {
            var e = 0;
            if (t instanceof String && (t = null), t) return Y(t) ? (me._wD(ve + '.mute(): Muting "' + t + '"'), me.sounds[t].mute()) : !1;
            for (me._wD(ve + ".mute(): Muting all sounds"), e = me.soundIDs.length - 1; e >= 0; e--) me.sounds[me.soundIDs[e]].mute();
            return me.muted = !0,
            !0
        },
        this.muteAll = function() {
            me.mute()
        },
        this.unmute = function(t) {
            var e;
            if (t instanceof String && (t = null), t) return Y(t) ? (me._wD(ve + '.unmute(): Unmuting "' + t + '"'), me.sounds[t].unmute()) : !1;
            for (me._wD(ve + ".unmute(): Unmuting all sounds"), e = me.soundIDs.length - 1; e >= 0; e--) me.sounds[me.soundIDs[e]].unmute();
            return me.muted = !1,
            !0
        },
        this.unmuteAll = function() {
            me.unmute()
        },
        this.toggleMute = function(t) {
            return Y(t) ? me.sounds[t].toggleMute() : !1
        },
        this.getMemoryUse = function() {
            var t = 0;
            return ye && 8 !== h && (t = parseInt(ye._getMemoryUse(), 10)),
            t
        },
        this.disable = function(n) {
            var i;
            if (n === e && (n = !1), Ee) return ! 1;
            for (Ee = !0, p("shutdown", 1), i = me.soundIDs.length - 1; i >= 0; i--) $(me.sounds[me.soundIDs[i]]);
            return f(n),
            re.remove(t, "load", S),
            !0
        },
        this.canPlayMIME = function(t) {
            var e;
            return me.hasHTML5 && (e = ee({
                type: t
            })),
            !e && Be && (e = t && me.ok() ? !!((h > 8 ? t.match(cn) : null) || t.match(me.mimePattern)) : null),
            e
        },
        this.canPlayURL = function(t) {
            var e;
            return me.hasHTML5 && (e = ee({
                url: t
            })),
            !e && Be && (e = t && me.ok() ? !!t.match(me.filePattern) : null),
            e
        },
        this.canPlayLink = function(t) {
            return t.type !== e && t.type && me.canPlayMIME(t.type) ? !0 : me.canPlayURL(t.href)
        },
        this.getSoundById = function(t, e) {
            if (!t) return null;
            var n = me.sounds[t];
            return n || e || me._wD(ve + '.getSoundById(): Sound "' + t + '" not found.', 2),
            n
        },
        this.onready = function(e, n) {
            var i = "onready",
            o = !1;
            if ("function" != typeof e) throw R("needFunction", i);
            return _e && me._wD(R("queue", i)),
            n || (n = t),
            v(i, e, n),
            b(),
            o = !0,
            o
        },
        this.ontimeout = function(e, n) {
            var i = "ontimeout",
            o = !1;
            if ("function" != typeof e) throw R("needFunction", i);
            return _e && me._wD(R("queue", i)),
            n || (n = t),
            v(i, e, n),
            b({
                type: i
            }),
            o = !0,
            o
        },
        this._writeDebug = function(t, n) {
            var i, o, a = "soundmanager-debug";
            return me.debugMode ? tn && me.useConsole && (n && "object" == typeof n ? console.log(t, n) : De[n] !== e ? console[De[n]](t) : console.log(t), me.consoleOnly) ? !0 : (i = s(a)) ? (o = Me.createElement("div"), 0 === ++Ae % 2 && (o.className = "sm2-alt"), n = n === e ? 0 : parseInt(n, 10), o.appendChild(Me.createTextNode(t)), n && (n >= 2 && (o.style.fontWeight = "bold"), 3 === n && (o.style.color = "#ff3333")), i.insertBefore(o, i.firstChild), i = null, !0) : !1 : !1
        },
        -1 !== xe.indexOf("sm2-debug=alert") && (this._writeDebug = function(e) {
            t.alert(e)
        }),
        this._wD = this._writeDebug,
        this._debug = function() {
            var t, e;
            for (p("currentObj", 1), t = 0, e = me.soundIDs.length; e > t; t++) me.sounds[me.soundIDs[t]]._debug()
        },
        this.reboot = function(e, n) {
            me.soundIDs.length && me._wD("Destroying " + me.soundIDs.length + " SMSound object" + (1 !== me.soundIDs.length ? "s": "") + "...");
            var i, o, a;
            for (i = me.soundIDs.length - 1; i >= 0; i--) me.sounds[me.soundIDs[i]].destruct();
            if (ye) try {
                Ye && (Ie = ye.innerHTML),
                Ne = ye.parentNode.removeChild(ye)
            } catch(r) {
                p("badRemove", 2)
            }
            if (Ie = Ne = Be = ye = null, me.enabled = O = _e = $e = He = Pe = ke = Ee = Ve = me.swfLoaded = !1, me.soundIDs = [], me.sounds = {},
            qe = 0, e) Te = [];
            else for (i in Te) if (Te.hasOwnProperty(i)) for (o = 0, a = Te[i].length; a > o; o++) Te[i][o].fired = !1;
            return n || me._wD(ve + ": Rebooting..."),
            me.html5 = {
                usingFlash: null
            },
            me.flash = {},
            me.html5Only = !1,
            me.ignoreFlash = !1,
            t.setTimeout(function() {
                k(),
                n || me.beginDelayedInit()
            },
            20),
            me
        },
        this.reset = function() {
            return p("reset"),
            me.reboot(!0, !0)
        },
        this.getMoviePercent = function() {
            return ye && "PercentLoaded" in ye ? ye.PercentLoaded() : null
        },
        this.beginDelayedInit = function() {
            Oe = !0,
            _(),
            setTimeout(function() {
                return He ? !1 : (D(), P(), He = !0, !0)
            },
            20),
            w()
        },
        this.destruct = function() {
            me._wD(ve + ".destruct()"),
            me.disable(!0)
        },
        r = function(t) {
            var n, i, o, a, r, s, l, u, c, f, g = this,
            y = !1,
            v = [],
            b = 0,
            S = null;
            c = {
                duration: null,
                time: null
            },
            this.id = t.id,
            this.sID = this.id,
            this.url = t.url,
            this.options = m(t),
            this.instanceOptions = this.options,
            this._iO = this.instanceOptions,
            this.pan = this.options.pan,
            this.volume = this.options.volume,
            this.isHTML5 = !1,
            this._a = null,
            f = this.url ? !1 : !0,
            this.id3 = {},
            this._debug = function() {
                me._wD(g.id + ": Merged options:", g.options)
            },
            this.load = function(t) {
                var n, i = null;
                if (t !== e ? g._iO = m(t, g.options) : (t = g.options, g._iO = t, S && S !== g.url && (p("manURL"), g._iO.url = g.url, g.url = null)), g._iO.url || (g._iO.url = g.url), g._iO.url = J(g._iO.url), g.instanceOptions = g._iO, n = g._iO, me._wD(g.id + ": load (" + n.url + ")"), !n.url && !g.url) return me._wD(g.id + ": load(): url is unassigned. Exiting.", 2),
                g;
                if (g.isHTML5 || 8 !== h || g.url || n.autoPlay || me._wD(g.id + ": Flash 8 load() limitation: Wait for onload() before calling play().", 1), n.url === g.url && 0 !== g.readyState && 2 !== g.readyState) return p("onURL", 1),
                3 === g.readyState && n.onload && fe(g,
                function() {
                    n.onload.apply(g, [ !! g.duration])
                }),
                g;
                if (g.loaded = !1, g.readyState = 1, g.playState = 0, g.id3 = {},
                te(n)) i = g._setup_html5(n),
                i._called_load ? me._wD(g.id + ": Ignoring request to load again") : (g._html5_canplay = !1, g.url !== n.url && (me._wD(p("manURL") + ": " + n.url), g._a.src = n.url, g.setPosition(0)), g._a.autobuffer = "auto", g._a.preload = "auto", g._a._called_load = !0, n.autoPlay && g.play());
                else {
                    if (me.html5Only) return me._wD(g.id + ": No flash support. Exiting."),
                    g;
                    if (g._iO.url && g._iO.url.match(/data\:/i)) return me._wD(g.id + ": data: URIs not supported via Flash. Exiting."),
                    g;
                    try {
                        g.isHTML5 = !1,
                        g._iO = z(q(n)),
                        n = g._iO,
                        8 === h ? ye._load(g.id, n.url, n.stream, n.autoPlay, n.usePolicyFile) : ye._load(g.id, n.url, !!n.stream, !!n.autoPlay, n.loops || 1, !!n.autoLoad, n.usePolicyFile)
                    } catch(o) {
                        p("smError", 2),
                        d("onload", !1),
                        L({
                            type: "SMSOUND_LOAD_JS_EXCEPTION",
                            fatal: !0
                        })
                    }
                }
                return g.url = n.url,
                g
            },
            this.unload = function() {
                return 0 !== g.readyState && (me._wD(g.id + ": unload()"), g.isHTML5 ? (a(), g._a && (g._a.pause(), S = ie(g._a))) : 8 === h ? ye._unload(g.id, sn) : ye._unload(g.id), n()),
                g
            },
            this.destruct = function(t) {
                me._wD(g.id + ": Destruct"),
                g.isHTML5 ? (a(), g._a && (g._a.pause(), ie(g._a), Ve || o(), g._a._s = null, g._a = null)) : (g._iO.onfailure = null, ye._destroySound(g.id)),
                t || me.destroySound(g.id, !0)
            },
            this.play = function(t, n) {
                var i, o, a, l, c, d, p, v = !0,
                b = null;
                if (i = g.id + ": play(): ", n = n === e ? !0 : n, t || (t = {}), g.url && (g._iO.url = g.url), g._iO = m(g._iO, g.options), g._iO = m(t, g._iO), g._iO.url = J(g._iO.url), g.instanceOptions = g._iO, !g.isHTML5 && g._iO.serverURL && !g.connected) return g.getAutoPlay() || (me._wD(i + " Netstream not connected yet - setting autoPlay"), g.setAutoPlay(!0)),
                g;
                if (te(g._iO) && (g._setup_html5(g._iO), r()), 1 !== g.playState || g.paused || (o = g._iO.multiShot, o ? me._wD(i + "Already playing (multi-shot)", 1) : (me._wD(i + "Already playing (one-shot)", 1), g.isHTML5 && g.setPosition(g._iO.position), b = g)), null !== b) return b;
                if (t.url && t.url !== g.url && (g.readyState || g.isHTML5 || 8 !== h || !f ? g.load(g._iO) : f = !1), g.loaded ? me._wD(i.substr(0, i.lastIndexOf(":"))) : 0 === g.readyState ? (me._wD(i + "Attempting to load"), g.isHTML5 || me.html5Only ? g.isHTML5 ? g.load(g._iO) : (me._wD(i + "Unsupported type. Exiting."), b = g) : (g._iO.autoPlay = !0, g.load(g._iO)), g.instanceOptions = g._iO) : 2 === g.readyState ? (me._wD(i + "Could not load - exiting", 2), b = g) : me._wD(i + "Loading - attempting to play..."), null !== b) return b;
                if (!g.isHTML5 && 9 === h && g.position > 0 && g.position === g.duration && (me._wD(i + "Sound at end, resetting to position:0"), t.position = 0), g.paused && g.position >= 0 && (!g._iO.serverURL || g.position > 0)) me._wD(i + "Resuming from paused state", 1),
                g.resume();
                else {
                    if (g._iO = m(t, g._iO), null !== g._iO.from && null !== g._iO.to && 0 === g.instanceCount && 0 === g.playState && !g._iO.serverURL) {
                        if (l = function() {
                            g._iO = m(t, g._iO),
                            g.play(g._iO)
                        },
                        g.isHTML5 && !g._html5_canplay ? (me._wD(i + "Beginning load for from/to case"), g.load({
                            oncanplay: l
                        }), b = !1) : g.isHTML5 || g.loaded || g.readyState && 2 === g.readyState || (me._wD(i + "Preloading for from/to case"), g.load({
                            onload: l
                        }), b = !1), null !== b) return b;
                        g._iO = u()
                    } (!g.instanceCount || g._iO.multiShotEvents || g.isHTML5 && g._iO.multiShot && !Ve || !g.isHTML5 && h > 8 && !g.getAutoPlay()) && g.instanceCount++,
                    g._iO.onposition && 0 === g.playState && s(g),
                    g.playState = 1,
                    g.paused = !1,
                    g.position = g._iO.position === e || isNaN(g._iO.position) ? 0 : g._iO.position,
                    g.isHTML5 || (g._iO = z(q(g._iO))),
                    g._iO.onplay && n && (g._iO.onplay.apply(g), y = !0),
                    g.setVolume(g._iO.volume, !0),
                    g.setPan(g._iO.pan, !0),
                    g.isHTML5 ? g.instanceCount < 2 ? (r(), a = g._setup_html5(), g.setPosition(g._iO.position), a.play()) : (me._wD(g.id + ": Cloning Audio() for instance #" + g.instanceCount + "..."), c = new Audio(g._iO.url), d = function() {
                        re.remove(c, "onended", d),
                        g._onfinish(g),
                        ie(c),
                        c = null
                    },
                    p = function() {
                        re.remove(c, "canplay", p);
                        try {
                            c.currentTime = g._iO.position / rn
                        } catch(t) {
                            U(g.id + ": multiShot play() failed to apply position of " + g._iO.position / rn)
                        }
                        c.play()
                    },
                    re.add(c, "ended", d), g._iO.position ? re.add(c, "canplay", p) : c.play()) : (v = ye._start(g.id, g._iO.loops || 1, 9 === h ? g.position: g.position / rn, g._iO.multiShot || !1), 9 !== h || v || (me._wD(i + "No sound hardware, or 32-sound ceiling hit", 2), g._iO.onplayerror && g._iO.onplayerror.apply(g)))
                }
                return g
            },
            this.start = this.play,
            this.stop = function(t) {
                var e, n = g._iO;
                return 1 === g.playState && (me._wD(g.id + ": stop()"), g._onbufferchange(0), g._resetOnPosition(0), g.paused = !1, g.isHTML5 || (g.playState = 0), l(), n.to && g.clearOnPosition(n.to), g.isHTML5 ? g._a && (e = g.position, g.setPosition(0), g.position = e, g._a.pause(), g.playState = 0, g._onTimer(), a()) : (ye._stop(g.id, t), n.serverURL && g.unload()), g.instanceCount = 0, g._iO = {},
                n.onstop && n.onstop.apply(g)),
                g
            },
            this.setAutoPlay = function(t) {
                me._wD(g.id + ": Autoplay turned " + (t ? "on": "off")),
                g._iO.autoPlay = t,
                g.isHTML5 || (ye._setAutoPlay(g.id, t), t && (g.instanceCount || 1 !== g.readyState || (g.instanceCount++, me._wD(g.id + ": Incremented instance count to " + g.instanceCount))))
            },
            this.getAutoPlay = function() {
                return g._iO.autoPlay
            },
            this.setPosition = function(t) {
                t === e && (t = 0);
                var n, i, o = g.isHTML5 ? Math.max(t, 0) : Math.min(g.duration || g._iO.duration, Math.max(t, 0));
                if (g.position = o, i = g.position / rn, g._resetOnPosition(g.position), g._iO.position = o, g.isHTML5) {
                    if (g._a) {
                        if (g._html5_canplay) {
                            if (g._a.currentTime !== i) {
                                me._wD(g.id + ": setPosition(" + i + ")");
                                try {
                                    g._a.currentTime = i,
                                    (0 === g.playState || g.paused) && g._a.pause()
                                } catch(a) {
                                    me._wD(g.id + ": setPosition(" + i + ") failed: " + a.message, 2)
                                }
                            }
                        } else if (i) return me._wD(g.id + ": setPosition(" + i + "): Cannot seek yet, sound not ready", 2),
                        g;
                        g.paused && g._onTimer(!0)
                    }
                } else n = 9 === h ? g.position: i,
                g.readyState && 2 !== g.readyState && ye._setPosition(g.id, n, g.paused || !g.playState, g._iO.multiShot);
                return g
            },
            this.pause = function(t) {
                return g.paused || 0 === g.playState && 1 !== g.readyState ? g: (me._wD(g.id + ": pause()"), g.paused = !0, g.isHTML5 ? (g._setup_html5().pause(), a()) : (t || t === e) && ye._pause(g.id, g._iO.multiShot), g._iO.onpause && g._iO.onpause.apply(g), g)
            },
            this.resume = function() {
                var t = g._iO;
                return g.paused ? (me._wD(g.id + ": resume()"), g.paused = !1, g.playState = 1, g.isHTML5 ? (g._setup_html5().play(), r()) : (t.isMovieStar && !t.serverURL && g.setPosition(g.position), ye._pause(g.id, t.multiShot)), !y && t.onplay ? (t.onplay.apply(g), y = !0) : t.onresume && t.onresume.apply(g), g) : g
            },
            this.togglePause = function() {
                return me._wD(g.id + ": togglePause()"),
                0 === g.playState ? (g.play({
                    position: 9 !== h || g.isHTML5 ? g.position / rn: g.position
                }), g) : (g.paused ? g.resume() : g.pause(), g)
            },
            this.setPan = function(t, n) {
                return t === e && (t = 0),
                n === e && (n = !1),
                g.isHTML5 || ye._setPan(g.id, t),
                g._iO.pan = t,
                n || (g.pan = t, g.options.pan = t),
                g
            },
            this.setVolume = function(t, n) {
                return t === e && (t = 100),
                n === e && (n = !1),
                g.isHTML5 ? g._a && (g._a.volume = Math.max(0, Math.min(1, t / 100))) : ye._setVolume(g.id, me.muted && !g.muted || g.muted ? 0 : t),
                g._iO.volume = t,
                n || (g.volume = t, g.options.volume = t),
                g
            },
            this.mute = function() {
                return g.muted = !0,
                g.isHTML5 ? g._a && (g._a.muted = !0) : ye._setVolume(g.id, 0),
                g
            },
            this.unmute = function() {
                g.muted = !1;
                var t = g._iO.volume !== e;
                return g.isHTML5 ? g._a && (g._a.muted = !1) : ye._setVolume(g.id, t ? g._iO.volume: g.options.volume),
                g
            },
            this.toggleMute = function() {
                return g.muted ? g.unmute() : g.mute()
            },
            this.onPosition = function(t, n, i) {
                return v.push({
                    position: parseInt(t, 10),
                    method: n,
                    scope: i !== e ? i: g,
                    fired: !1
                }),
                g
            },
            this.onposition = this.onPosition,
            this.clearOnPosition = function(t, e) {
                var n;
                if (t = parseInt(t, 10), isNaN(t)) return ! 1;
                for (n = 0; n < v.length; n++) t === v[n].position && (e && e !== v[n].method || (v[n].fired && b--, v.splice(n, 1)))
            },
            this._processOnPosition = function() {
                var t, e, n = v.length;
                if (!n || !g.playState || b >= n) return ! 1;
                for (t = n - 1; t >= 0; t--) e = v[t],
                !e.fired && g.position >= e.position && (e.fired = !0, b++, e.method.apply(e.scope, [e.position]));
                return ! 0
            },
            this._resetOnPosition = function(t) {
                var e, n, i = v.length;
                if (!i) return ! 1;
                for (e = i - 1; e >= 0; e--) n = v[e],
                n.fired && t <= n.position && (n.fired = !1, b--);
                return ! 0
            },
            u = function() {
                var t, e, n = g._iO,
                i = n.from,
                o = n.to;
                return e = function() {
                    me._wD(g.id + ': "To" time of ' + o + " reached."),
                    g.clearOnPosition(o, e),
                    g.stop()
                },
                t = function() {
                    me._wD(g.id + ': Playing "from" ' + i),
                    null === o || isNaN(o) || g.onPosition(o, e)
                },
                null === i || isNaN(i) || (n.position = i, n.multiShot = !1, t()),
                n
            },
            s = function() {
                var t, e = g._iO.onposition;
                if (e) for (t in e) e.hasOwnProperty(t) && g.onPosition(parseInt(t, 10), e[t])
            },
            l = function() {
                var t, e = g._iO.onposition;
                if (e) for (t in e) e.hasOwnProperty(t) && g.clearOnPosition(parseInt(t, 10))
            },
            r = function() {
                g.isHTML5 && X(g)
            },
            a = function() {
                g.isHTML5 && G(g)
            },
            n = function(t) {
                t || (v = [], b = 0),
                y = !1,
                g._hasTimer = null,
                g._a = null,
                g._html5_canplay = !1,
                g.bytesLoaded = null,
                g.bytesTotal = null,
                g.duration = g._iO && g._iO.duration ? g._iO.duration: null,
                g.durationEstimate = null,
                g.buffered = [],
                g.eqData = [],
                g.eqData.left = [],
                g.eqData.right = [],
                g.failures = 0,
                g.isBuffering = !1,
                g.instanceOptions = {},
                g.instanceCount = 0,
                g.loaded = !1,
                g.metadata = {},
                g.readyState = 0,
                g.muted = !1,
                g.paused = !1,
                g.peakData = {
                    left: 0,
                    right: 0
                },
                g.waveformData = {
                    left: [],
                    right: []
                },
                g.playState = 0,
                g.position = null,
                g.id3 = {}
            },
            n(),
            this._onTimer = function(t) {
                var e, n, i = !1,
                o = {};
                return g._hasTimer || t ? (g._a && (t || (g.playState > 0 || 1 === g.readyState) && !g.paused) && (e = g._get_html5_duration(), e !== c.duration && (c.duration = e, g.duration = e, i = !0), g.durationEstimate = g.duration, n = g._a.currentTime * rn || 0, n !== c.time && (c.time = n, i = !0), (i || t) && g._whileplaying(n, o, o, o, o)), i) : void 0
            },
            this._get_html5_duration = function() {
                var t = g._iO,
                e = g._a && g._a.duration ? g._a.duration * rn: t && t.duration ? t.duration: null,
                n = e && !isNaN(e) && 1 / 0 !== e ? e: null;
                return n
            },
            this._apply_loop = function(t, e) { ! t.loop && e > 1 && me._wD("Note: Native HTML5 looping is infinite.", 1),
                t.loop = e > 1 ? "loop": ""
            },
            this._setup_html5 = function(t) {
                var e, o = m(g._iO, t),
                a = Ve ? ge: g._a,
                r = decodeURI(o.url);
                if (Ve ? r === decodeURI(se) && (e = !0) : r === decodeURI(S) && (e = !0), a) {
                    if (a._s) if (Ve) a._s && a._s.playState && !e && a._s.stop();
                    else if (!Ve && r === decodeURI(S)) return g._apply_loop(a, o.loops),
                    a;
                    e || (n(!1), a.src = o.url, g.url = o.url, S = o.url, se = o.url, a._called_load = !1)
                } else g._a = o.autoLoad || o.autoPlay ? new Audio(o.url) : Ke && opera.version() < 10 ? new Audio(null) : new Audio,
                a = g._a,
                a._called_load = !1,
                Ve && (ge = a);
                return g.isHTML5 = !0,
                g._a = a,
                a._s = g,
                i(),
                g._apply_loop(a, o.loops),
                o.autoLoad || o.autoPlay ? g.load() : (a.autobuffer = !1, a.preload = "auto"),
                a
            },
            i = function() {
                function t(t, e, n) {
                    return g._a ? g._a.addEventListener(t, e, n || !1) : null
                }
                if (g._a._added_events) return ! 1;
                var e;
                g._a._added_events = !0;
                for (e in he) he.hasOwnProperty(e) && t(e, he[e]);
                return ! 0
            },
            o = function() {
                function t(t, e, n) {
                    return g._a ? g._a.removeEventListener(t, e, n || !1) : null
                }
                var e;
                me._wD(g.id + ": Removing event listeners"),
                g._a._added_events = !1;
                for (e in he) he.hasOwnProperty(e) && t(e, he[e])
            },
            this._onload = function(t) {
                var e, n = !!t || !g.isHTML5 && 8 === h && g.duration;
                return e = g.id + ": ",
                me._wD(e + (n ? "onload()": "Failed to load / invalid sound?" + (g.duration ? " -": " Zero-length duration reported.") + " (" + g.url + ")"), n ? 1 : 2),
                n || g.isHTML5 || (me.sandbox.noRemote === !0 && me._wD(e + R("noNet"), 1), me.sandbox.noLocal === !0 && me._wD(e + R("noLocal"), 1)),
                g.loaded = n,
                g.readyState = n ? 3 : 2,
                g._onbufferchange(0),
                g._iO.onload && fe(g,
                function() {
                    g._iO.onload.apply(g, [n])
                }),
                !0
            },
            this._onbufferchange = function(t) {
                return 0 === g.playState ? !1 : t && g.isBuffering || !t && !g.isBuffering ? !1 : (g.isBuffering = 1 === t, g._iO.onbufferchange && (me._wD(g.id + ": Buffer state change: " + t), g._iO.onbufferchange.apply(g)), !0)
            },
            this._onsuspend = function() {
                return g._iO.onsuspend && (me._wD(g.id + ": Playback suspended"), g._iO.onsuspend.apply(g)),
                !0
            },
            this._onfailure = function(t, e, n) {
                g.failures++,
                me._wD(g.id + ": Failures = " + g.failures),
                g._iO.onfailure && 1 === g.failures ? g._iO.onfailure(g, t, e, n) : me._wD(g.id + ": Ignoring failure")
            },
            this._onfinish = function() {
                var t = g._iO.onfinish;
                g._onbufferchange(0),
                g._resetOnPosition(0),
                g.instanceCount && (g.instanceCount--, g.instanceCount || (l(), g.playState = 0, g.paused = !1, g.instanceCount = 0, g.instanceOptions = {},
                g._iO = {},
                a(), g.isHTML5 && (g.position = 0)), (!g.instanceCount || g._iO.multiShotEvents) && t && (me._wD(g.id + ": onfinish()"), fe(g,
                function() {
                    t.apply(g)
                })))
            },
            this._whileloading = function(t, e, n, i) {
                var o = g._iO;
                g.bytesLoaded = t,
                g.bytesTotal = e,
                g.duration = Math.floor(n),
                g.bufferLength = i,
                g.durationEstimate = g.isHTML5 || o.isMovieStar ? g.duration: o.duration ? g.duration > o.duration ? g.duration: o.duration: parseInt(g.bytesTotal / g.bytesLoaded * g.duration, 10),
                g.isHTML5 || (g.buffered = [{
                    start: 0,
                    end: g.duration
                }]),
                (3 !== g.readyState || g.isHTML5) && o.whileloading && o.whileloading.apply(g)
            },
            this._whileplaying = function(t, n, i, o, a) {
                var r, s = g._iO;
                return isNaN(t) || null === t ? !1 : (g.position = Math.max(0, t), g._processOnPosition(), !g.isHTML5 && h > 8 && (s.usePeakData && n !== e && n && (g.peakData = {
                    left: n.leftPeak,
                    right: n.rightPeak
                }), s.useWaveformData && i !== e && i && (g.waveformData = {
                    left: i.split(","),
                    right: o.split(",")
                }), s.useEQData && a !== e && a && a.leftEQ && (r = a.leftEQ.split(","), g.eqData = r, g.eqData.left = r, a.rightEQ !== e && a.rightEQ && (g.eqData.right = a.rightEQ.split(",")))), 1 === g.playState && (g.isHTML5 || 8 !== h || g.position || !g.isBuffering || g._onbufferchange(0), s.whileplaying && s.whileplaying.apply(g)), !0)
            },
            this._oncaptiondata = function(t) {
                me._wD(g.id + ": Caption data received."),
                g.captiondata = t,
                g._iO.oncaptiondata && g._iO.oncaptiondata.apply(g, [t])
            },
            this._onmetadata = function(t, e) {
                me._wD(g.id + ": Metadata received.");
                var n, i, o = {};
                for (n = 0, i = t.length; i > n; n++) o[t[n]] = e[n];
                g.metadata = o,
                g._iO.onmetadata && g._iO.onmetadata.apply(g)
            },
            this._onid3 = function(t, e) {
                me._wD(g.id + ": ID3 data received.");
                var n, i, o = [];
                for (n = 0, i = t.length; i > n; n++) o[t[n]] = e[n];
                g.id3 = m(g.id3, o),
                g._iO.onid3 && g._iO.onid3.apply(g)
            },
            this._onconnect = function(t) {
                t = 1 === t,
                me._wD(g.id + ": " + (t ? "Connected.": "Failed to connect? - " + g.url), t ? 1 : 2),
                g.connected = t,
                t && (g.failures = 0, Y(g.id) && (g.getAutoPlay() ? g.play(e, g.getAutoPlay()) : g._iO.autoLoad && g.load()), g._iO.onconnect && g._iO.onconnect.apply(g, [t]))
            },
            this._ondataerror = function(t) {
                g.playState > 0 && (me._wD(g.id + ": Data error: " + t), g._iO.ondataerror && g._iO.ondataerror.apply(g))
            },
            this._debug()
        },
        A = function() {
            return Me.body || Me._docElement || Me.getElementsByTagName("div")[0]
        },
        s = function(t) {
            return Me.getElementById(t)
        },
        m = function(t, n) {
            var i, o, a = t || {};
            i = n === e ? me.defaultOptions: n;
            for (o in i) i.hasOwnProperty(o) && a[o] === e && (a[o] = "object" != typeof i[o] || null === i[o] ? i[o] : m(a[o], i[o]));
            return a
        },
        fe = function(e, n) {
            e.isHTML5 || 8 !== h ? n() : t.setTimeout(n, 0)
        },
        y = {
            onready: 1,
            ontimeout: 1,
            defaultOptions: 1,
            flash9Options: 1,
            movieStarOptions: 1
        },
        g = function(t, n) {
            var i, o = !0,
            a = n !== e,
            r = me.setupOptions,
            s = y;
            if (t === e) {
                o = [];
                for (i in r) r.hasOwnProperty(i) && o.push(i);
                for (i in s) s.hasOwnProperty(i) && ("object" == typeof me[i] ? o.push(i + ": {...}") : me[i] instanceof Function ? o.push(i + ": function() {...}") : o.push(i));
                return me._wD(R("setup", o.join(", "))),
                !1
            }
            for (i in t) if (t.hasOwnProperty(i)) if ("object" != typeof t[i] || null === t[i] || t[i] instanceof Array || t[i] instanceof RegExp) a && s[n] !== e ? me[n][i] = t[i] : r[i] !== e ? (me.setupOptions[i] = t[i], me[i] = t[i]) : s[i] === e ? (U(R(me[i] === e ? "setupUndef": "setupError", i), 2), o = !1) : me[i] instanceof Function ? me[i].apply(me, t[i] instanceof Array ? t[i] : [t[i]]) : me[i] = t[i];
            else {
                if (s[i] !== e) return g(t[i], i);
                U(R(me[i] === e ? "setupUndef": "setupError", i), 2),
                o = !1
            }
            return o
        },
        re = function() {
            function e(t) {
                var e = We.call(t),
                n = e.length;
                return a ? (e[1] = "on" + e[1], n > 3 && e.pop()) : 3 === n && e.push(!1),
                e
            }
            function n(t, e) {
                var n = t.shift(),
                i = [r[e]];
                a ? n[i](t[0], t[1]) : n[i].apply(n, t)
            }
            function i() {
                n(e(arguments), "add")
            }
            function o() {
                n(e(arguments), "remove")
            }
            var a = t.attachEvent,
            r = {
                add: a ? "attachEvent": "addEventListener",
                remove: a ? "detachEvent": "removeEventListener"
            };
            return {
                add: i,
                remove: o
            }
        } (),
        he = {
            abort: a(function() {
                me._wD(this._s.id + ": abort")
            }),
            canplay: a(function() {
                var t, n = this._s;
                if (n._html5_canplay) return ! 0;
                if (n._html5_canplay = !0, me._wD(n.id + ": canplay"), n._onbufferchange(0), t = n._iO.position === e || isNaN(n._iO.position) ? null: n._iO.position / rn, n.position && this.currentTime !== t) {
                    me._wD(n.id + ": canplay: Setting position to " + t);
                    try {
                        this.currentTime = t
                    } catch(i) {
                        me._wD(n.id + ": canplay: Setting position of " + t + " failed: " + i.message, 2)
                    }
                }
                n._iO._oncanplay && n._iO._oncanplay()
            }),
            canplaythrough: a(function() {
                var t = this._s;
                t.loaded || (t._onbufferchange(0), t._whileloading(t.bytesLoaded, t.bytesTotal, t._get_html5_duration()), t._onload(!0))
            }),
            ended: a(function() {
                var t = this._s;
                me._wD(t.id + ": ended"),
                t._onfinish()
            }),
            error: a(function() {
                me._wD(this._s.id + ": HTML5 error, code " + this.error.code),
                this._s._onload(!1)
            }),
            loadeddata: a(function() {
                var t = this._s;
                me._wD(t.id + ": loadeddata"),
                t._loaded || Ge || (t.duration = t._get_html5_duration())
            }),
            loadedmetadata: a(function() {
                me._wD(this._s.id + ": loadedmetadata")
            }),
            loadstart: a(function() {
                me._wD(this._s.id + ": loadstart"),
                this._s._onbufferchange(1)
            }),
            play: a(function() {
                this._s._onbufferchange(0)
            }),
            playing: a(function() {
                me._wD(this._s.id + ": playing"),
                this._s._onbufferchange(0)
            }),
            progress: a(function(t) {
                var e, n, i, o = this._s,
                a = 0,
                r = "progress" === t.type,
                s = t.target.buffered,
                l = t.loaded || 0,
                u = t.total || 1;
                if (o.buffered = [], s && s.length) {
                    for (e = 0, n = s.length; n > e; e++) o.buffered.push({
                        start: s.start(e) * rn,
                        end: s.end(e) * rn
                    });
                    if (a = (s.end(0) - s.start(0)) * rn, l = Math.min(1, a / (t.target.duration * rn)), r && s.length > 1) {
                        for (i = [], n = s.length, e = 0; n > e; e++) i.push(t.target.buffered.start(e) * rn + "-" + t.target.buffered.end(e) * rn);
                        me._wD(this._s.id + ": progress, timeRanges: " + i.join(", "))
                    }
                    r && !isNaN(l) && me._wD(this._s.id + ": progress, " + Math.floor(100 * l) + "% loaded")
                }
                isNaN(l) || (o._onbufferchange(0), o._whileloading(l, u, o._get_html5_duration()), l && u && l === u && he.canplaythrough.call(this, t))
            }),
            ratechange: a(function() {
                me._wD(this._s.id + ": ratechange")
            }),
            suspend: a(function(t) {
                var e = this._s;
                me._wD(this._s.id + ": suspend"),
                he.progress.call(this, t),
                e._onsuspend()
            }),
            stalled: a(function() {
                me._wD(this._s.id + ": stalled")
            }),
            timeupdate: a(function() {
                this._s._onTimer()
            }),
            waiting: a(function() {
                var t = this._s;
                me._wD(this._s.id + ": waiting"),
                t._onbufferchange(1)
            })
        },
        te = function(t) {
            var e;
            return e = t && (t.type || t.url || t.serverURL) ? t.serverURL || t.type && o(t.type) ? !1 : t.type ? ee({
                type: t.type
            }) : ee({
                url: t.url
            }) || me.html5Only || t.url.match(/data\:/i) : !1
        },
        ie = function(t) {
            var e;
            return t && (e = Ge && !ze ? null: Je ? sn: null, t.src = e, void 0 !== t._called_unload && (t._called_load = !1)),
            Ve && (se = null),
            e
        },
        ee = function(t) {
            if (!me.useHTML5Audio || !me.hasHTML5) return ! 1;
            var n, i, a, r, s = t.url || null,
            l = t.type || null,
            u = me.audioFormats;
            if (l && me.html5[l] !== e) return me.html5[l] && !o(l);
            if (!ne) {
                ne = [];
                for (r in u) u.hasOwnProperty(r) && (ne.push(r), u[r].related && (ne = ne.concat(u[r].related)));
                ne = new RegExp("\\.(" + ne.join("|") + ")(\\?.*)?$", "i")
            }
            return a = s ? s.toLowerCase().match(ne) : null,
            a && a.length ? a = a[1] : l ? (i = l.indexOf(";"), a = ( - 1 !== i ? l.substr(0, i) : l).substr(6)) : n = !1,
            a && me.html5[a] !== e ? n = me.html5[a] && !o(a) : (l = "audio/" + a, n = me.html5.canPlayType({
                type: l
            }), me.html5[a] = n, n = n && me.html5[l] && !o(l)),
            n
        },
        ae = function() {
            function t(t) {
                var e, n, i, o = !1,
                a = !1;
                if (!r || "function" != typeof r.canPlayType) return o;
                if (t instanceof Array) {
                    for (n = 0, i = t.length; i > n; n++)(me.html5[t[n]] || r.canPlayType(t[n]).match(me.html5Test)) && (a = !0, me.html5[t[n]] = !0, me.flash[t[n]] = !!t[n].match(an));
                    o = a
                } else e = r && "function" == typeof r.canPlayType ? r.canPlayType(t) : !1,
                o = !(!e || !e.match(me.html5Test));
                return o
            }
            if (!me.useHTML5Audio || !me.hasHTML5) return me.html5.usingFlash = !0,
            Be = !0,
            !1;
            var n, i, o, a, r = Audio !== e ? Ke && opera.version() < 10 ? new Audio(null) : new Audio: null,
            s = {};
            o = me.audioFormats;
            for (n in o) if (o.hasOwnProperty(n) && (i = "audio/" + n, s[n] = t(o[n].type), s[i] = s[n], n.match(an) ? (me.flash[n] = !0, me.flash[i] = !0) : (me.flash[n] = !1, me.flash[i] = !1), o[n] && o[n].related)) for (a = o[n].related.length - 1; a >= 0; a--) s["audio/" + o[n].related[a]] = s[n],
            me.html5[o[n].related[a]] = s[n],
            me.flash[o[n].related[a]] = s[n];
            return s.canPlayType = r ? t: null,
            me.html5 = m(me.html5, s),
            me.html5.usingFlash = Z(),
            Be = me.html5.usingFlash,
            !0
        },
        C = {
            notReady: "Unavailable - wait until onready() has fired.",
            notOK: "Audio support is not available.",
            domError: ve + "exception caught while appending SWF to DOM.",
            spcWmode: "Removing wmode, preventing known SWF loading issue(s)",
            swf404: be + "Verify that %s is a valid path.",
            tryDebug: "Try " + ve + ".debugFlash = true for more security details (output goes to SWF.)",
            checkSWF: "See SWF output for more debug info.",
            localFail: be + "Non-HTTP page (" + Me.location.protocol + " URL?) Review Flash player security settings for this special case:\nhttp://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html\nMay need to add/allow path, eg. c:/sm2/ or /users/me/sm2/",
            waitFocus: be + "Special case: Waiting for SWF to load with window focus...",
            waitForever: be + "Waiting indefinitely for Flash (will recover if unblocked)...",
            waitSWF: be + "Waiting for 100% SWF load...",
            needFunction: be + "Function object expected for %s",
            badID: 'Sound ID "%s" should be a string, starting with a non-numeric character',
            currentObj: be + "_debug(): Current sound objects",
            waitOnload: be + "Waiting for window.onload()",
            docLoaded: be + "Document already loaded",
            onload: be + "initComplete(): calling soundManager.onload()",
            onloadOK: ve + ".onload() complete",
            didInit: be + "init(): Already called?",
            secNote: "Flash security note: Network/internet URLs will not load due to security restrictions. Access can be configured via Flash Player Global Security Settings Page: http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html",
            badRemove: be + "Failed to remove Flash node.",
            shutdown: ve + ".disable(): Shutting down",
            queue: be + "Queueing %s handler",
            smError: "SMSound.load(): Exception: JS-Flash communication failed, or JS error.",
            fbTimeout: "No flash response, applying ." + W.swfTimedout + " CSS...",
            fbLoaded: "Flash loaded",
            fbHandler: be + "flashBlockHandler()",
            manURL: "SMSound.load(): Using manually-assigned URL",
            onURL: ve + ".load(): current URL already assigned.",
            badFV: ve + '.flashVersion must be 8 or 9. "%s" is invalid. Reverting to %s.',
            as2loop: "Note: Setting stream:false so looping can work (flash 8 limitation)",
            noNSLoop: "Note: Looping not implemented for MovieStar formats",
            needfl9: "Note: Switching to flash 9, required for MP4 formats.",
            mfTimeout: "Setting flashLoadTimeout = 0 (infinite) for off-screen, mobile flash case",
            needFlash: be + "Fatal error: Flash is needed to play some required formats, but is not available.",
            gotFocus: be + "Got window focus.",
            policy: "Enabling usePolicyFile for data access",
            setup: ve + ".setup(): allowed parameters: %s",
            setupError: ve + '.setup(): "%s" cannot be assigned with this method.',
            setupUndef: ve + '.setup(): Could not find option "%s"',
            setupLate: ve + ".setup(): url, flashVersion and html5Test property changes will not take effect until reboot().",
            noURL: be + "Flash URL required. Call soundManager.setup({url:...}) to get started.",
            sm2Loaded: "SoundManager 2: Ready.",
            reset: ve + ".reset(): Removing event callbacks",
            mobileUA: "Mobile UA detected, preferring HTML5 by default.",
            globalHTML5: "Using singleton HTML5 Audio() pattern for this device."
        },
        R = function() {
            var t, e, n = We.call(arguments),
            i = n.shift(),
            o = C && C[i] ? C[i] : "";
            if (o && n && n.length) for (t = 0, e = n.length; e > t; t++) o = o.replace("%s", n[t]);
            return o
        },
        q = function(t) {
            return 8 === h && t.loops > 1 && t.stream && (p("as2loop"), t.stream = !1),
            t
        },
        z = function(t, e) {
            return t && !t.usePolicyFile && (t.onid3 || t.usePeakData || t.useWaveformData || t.useEQData) && (me._wD((e || "") + R("policy")), t.usePolicyFile = !0),
            t
        },
        U = function(t) {
            tn && console.warn !== e ? console.warn(t) : me._wD(t)
        },
        l = function() {
            return ! 1
        },
        $ = function(t) {
            var e;
            for (e in t) t.hasOwnProperty(e) && "function" == typeof t[e] && (t[e] = l);
            e = null
        },
        H = function(t) {
            t === e && (t = !1),
            (Ee || t) && me.disable(t)
        },
        j = function(t) {
            var e, n = null;
            if (t) if (t.match(/\.swf(\?.*)?$/i)) {
                if (n = t.substr(t.toLowerCase().lastIndexOf(".swf?") + 4)) return t
            } else t.lastIndexOf("/") !== t.length - 1 && (t += "/");
            return e = (t && -1 !== t.lastIndexOf("/") ? t.substr(0, t.lastIndexOf("/") + 1) : "./") + me.movieURL,
            me.noSWFCache && (e += "?ts=" + (new Date).getTime()),
            e
        },
        M = function() {
            h = parseInt(me.flashVersion, 10),
            8 !== h && 9 !== h && (me._wD(R("badFV", h, Le)), me.flashVersion = h = Le);
            var t = me.debugMode || me.debugFlash ? "_debug.swf": ".swf";
            me.useHTML5Audio && !me.html5Only && me.audioFormats.mp4.required && 9 > h && (me._wD(R("needfl9")), me.flashVersion = h = 9),
            me.version = me.versionNumber + (me.html5Only ? " (HTML5-only mode)": 9 === h ? " (AS3/Flash 9)": " (AS2/Flash 8)"),
            h > 8 ? (me.defaultOptions = m(me.defaultOptions, me.flash9Options), me.features.buffering = !0, me.defaultOptions = m(me.defaultOptions, me.movieStarOptions), me.filePatterns.flash9 = new RegExp("\\.(mp3|" + hn.join("|") + ")(\\?.*)?$", "i"), me.features.movieStar = !0) : me.features.movieStar = !1,
            me.filePattern = me.filePatterns[8 !== h ? "flash9": "flash8"],
            me.movieURL = (8 === h ? "soundmanager2.swf": "soundmanager2_flash9.swf").replace(".swf", t),
            me.features.peakData = me.features.waveformData = me.features.eqData = h > 8
        },
        N = function(t, e) {
            return ye ? (ye._setPolling(t, e), void 0) : !1
        },
        I = function() {
            if (me.debugURLParam.test(xe) && (me.debugMode = !0), s(me.debugID)) return ! 1;
            var t, e, n, i, o;
            if (! (!me.debugMode || s(me.debugID) || tn && me.useConsole && me.consoleOnly)) {
                t = Me.createElement("div"),
                t.id = me.debugID + "-toggle",
                i = {
                    position: "fixed",
                    bottom: "0px",
                    right: "0px",
                    width: "1.2em",
                    height: "1.2em",
                    lineHeight: "1.2em",
                    margin: "2px",
                    textAlign: "center",
                    border: "1px solid #999",
                    cursor: "pointer",
                    background: "#fff",
                    color: "#333",
                    zIndex: 10001
                },
                t.appendChild(Me.createTextNode("-")),
                t.onclick = V,
                t.title = "Toggle SM2 debug console",
                we.match(/msie 6/i) && (t.style.position = "absolute", t.style.cursor = "hand");
                for (o in i) i.hasOwnProperty(o) && (t.style[o] = i[o]);
                if (e = Me.createElement("div"), e.id = me.debugID, e.style.display = me.debugMode ? "block": "none", me.debugMode && !s(t.id)) {
                    try {
                        n = A(),
                        n.appendChild(t)
                    } catch(a) {
                        throw new Error(R("domError") + " \n" + a.toString())
                    }
                    n.appendChild(e)
                }
            }
            n = null
        },
        Y = this.getSoundById,
        p = function(t, e) {
            return t ? me._wD(R(t), e) : ""
        },
        V = function() {
            var t = s(me.debugID),
            e = s(me.debugID + "-toggle");
            return t ? (Ce ? (e.innerHTML = "+", t.style.display = "none") : (e.innerHTML = "-", t.style.display = "block"), Ce = !Ce, void 0) : !1
        },
        d = function(n, i, o) {
            if (t.sm2Debugger !== e) try {
                sm2Debugger.handleEvent(n, i, o)
            } catch(a) {
                return ! 1
            }
            return ! 0
        },
        B = function() {
            var t = [];
            return me.debugMode && t.push(W.sm2Debug),
            me.debugFlash && t.push(W.flashDebug),
            me.useHighPerformance && t.push(W.highPerf),
            t.join(" ")
        },
        F = function() {
            var t = R("fbHandler"),
            e = me.getMoviePercent(),
            n = W,
            i = {
                type: "FLASHBLOCK"
            };
            return me.html5Only ? !1 : (me.ok() ? (me.didFlashBlock && me._wD(t + ": Unblocked"), me.oMC && (me.oMC.className = [B(), n.swfDefault, n.swfLoaded + (me.didFlashBlock ? " " + n.swfUnblocked: "")].join(" "))) : (Be && (me.oMC.className = B() + " " + n.swfDefault + " " + (null === e ? n.swfTimedout: n.swfError), me._wD(t + ": " + R("fbTimeout") + (e ? " (" + R("fbLoaded") + ")": ""))), me.didFlashBlock = !0, b({
                type: "ontimeout",
                ignoreInit: !0,
                error: i
            }), L(i)), void 0)
        },
        v = function(t, n, i) {
            Te[t] === e && (Te[t] = []),
            Te[t].push({
                method: n,
                scope: i || null,
                fired: !1
            })
        },
        b = function(t) {
            if (t || (t = {
                type: me.ok() ? "onready": "ontimeout"
            }), !_e && t && !t.ignoreInit) return ! 1;
            if ("ontimeout" === t.type && (me.ok() || Ee && !t.ignoreInit)) return ! 1;
            var e, n, i = {
                success: t && t.ignoreInit ? me.ok() : !Ee
            },
            o = t && t.type ? Te[t.type] || [] : [],
            a = [],
            r = [i],
            s = Be && !me.ok();
            for (t.error && (r[0].error = t.error), e = 0, n = o.length; n > e; e++) o[e].fired !== !0 && a.push(o[e]);
            if (a.length) for (e = 0, n = a.length; n > e; e++) a[e].scope ? a[e].method.apply(a[e].scope, r) : a[e].method.apply(this, r),
            s || (a[e].fired = !0);
            return ! 0
        },
        S = function() {
            t.setTimeout(function() {
                me.useFlashBlock && F(),
                b(),
                "function" == typeof me.onload && (p("onload", 1), me.onload.apply(t), p("onloadOK", 1)),
                me.waitForWindowLoad && re.add(t, "load", S)
            },
            1)
        },
        ue = function() {
            if (le !== e) return le;
            var n, i, o, a = !1,
            r = navigator,
            s = r.plugins,
            l = t.ActiveXObject;
            if (s && s.length) i = "application/x-shockwave-flash",
            o = r.mimeTypes,
            o && o[i] && o[i].enabledPlugin && o[i].enabledPlugin.description && (a = !0);
            else if (l !== e && !we.match(/MSAppHost/i)) {
                try {
                    n = new l("ShockwaveFlash.ShockwaveFlash")
                } catch(u) {
                    n = null
                }
                a = !!n,
                n = null
            }
            return le = a,
            a
        },
        Z = function() {
            var t, e, n = me.audioFormats,
            i = ze && !!we.match(/os (1|2|3_0|3_1)/i);
            if (i ? (me.hasHTML5 = !1, me.html5Only = !0, me.oMC && (me.oMC.style.display = "none")) : me.useHTML5Audio && (me.html5 && me.html5.canPlayType || (me._wD("SoundManager: No HTML5 Audio() support detected."), me.hasHTML5 = !1), Ze && me._wD(be + "Note: Buggy HTML5 Audio in Safari on this OS X release, see https://bugs.webkit.org/show_bug.cgi?id=32159 - " + (le ? "will use flash fallback for MP3/MP4, if available": " would use flash fallback for MP3/MP4, but none detected."), 1)), me.useHTML5Audio && me.hasHTML5) {
                Q = !0;
                for (e in n) n.hasOwnProperty(e) && n[e].required && (me.html5.canPlayType(n[e].type) ? me.preferFlash && (me.flash[e] || me.flash[n[e].type]) && (t = !0) : (Q = !1, t = !0))
            }
            return me.ignoreFlash && (t = !1, Q = !0),
            me.html5Only = me.hasHTML5 && me.useHTML5Audio && !t,
            !me.html5Only
        },
        J = function(t) {
            var e, n, i, o = 0;
            if (t instanceof Array) {
                for (e = 0, n = t.length; n > e; e++) if (t[e] instanceof Object) {
                    if (me.canPlayMIME(t[e].type)) {
                        o = e;
                        break
                    }
                } else if (me.canPlayURL(t[e])) {
                    o = e;
                    break
                }
                t[o].url && (t[o] = t[o].url),
                i = t[o]
            } else i = t;
            return i
        },
        X = function(t) {
            t._hasTimer || (t._hasTimer = !0, !Qe && me.html5PollingInterval && (null === Re && 0 === je && (Re = setInterval(K, me.html5PollingInterval)), je++))
        },
        G = function(t) {
            t._hasTimer && (t._hasTimer = !1, !Qe && me.html5PollingInterval && je--)
        },
        K = function() {
            var t;
            if (null !== Re && !je) return clearInterval(Re),
            Re = null,
            !1;
            for (t = me.soundIDs.length - 1; t >= 0; t--) me.sounds[me.soundIDs[t]].isHTML5 && me.sounds[me.soundIDs[t]]._hasTimer && me.sounds[me.soundIDs[t]]._onTimer()
        },
        L = function(n) {
            n = n !== e ? n: {},
            "function" == typeof me.onerror && me.onerror.apply(t, [{
                type: n.type !== e ? n.type: null
            }]),
            n.fatal !== e && n.fatal && me.disable()
        },
        ce = function() {
            if (!Ze || !ue()) return ! 1;
            var t, e, n = me.audioFormats;
            for (e in n) if (n.hasOwnProperty(e) && ("mp3" === e || "mp4" === e) && (me._wD(ve + ": Using flash fallback for " + e + " format"), me.html5[e] = !1, n[e] && n[e].related)) for (t = n[e].related.length - 1; t >= 0; t--) me.html5[n[e].related[t]] = !1
        },
        this._setSandboxType = function(t) {
            var n = me.sandbox;
            n.type = t,
            n.description = n.types[n.types[t] !== e ? t: "unknown"],
            "localWithFile" === n.type ? (n.noRemote = !0, n.noLocal = !1, p("secNote", 2)) : "localWithNetwork" === n.type ? (n.noRemote = !1, n.noLocal = !0) : "localTrusted" === n.type && (n.noRemote = !1, n.noLocal = !1)
        },
        this._externalInterfaceOK = function(t) {
            if (me.swfLoaded) return ! 1;
            var e;
            return d("swf", !0),
            d("flashtojs", !0),
            me.swfLoaded = !0,
            nn = !1,
            Ze && ce(),
            t && t.replace(/\+dev/i, "") === me.versionNumber.replace(/\+dev/i, "") ? (setTimeout(c, Ye ? 100 : 1), void 0) : (e = ve + ': Fatal: JavaScript file build "' + me.versionNumber + '" does not match Flash SWF build "' + t + '" at ' + me.url + ". Ensure both are up-to-date.", setTimeout(function() {
                throw new Error(e)
            },
            0), !1)
        },
        D = function(t, n) {
            function i() {
                var t, e = [],
                n = [],
                i = " + ";
                t = "SoundManager " + me.version + (!me.html5Only && me.useHTML5Audio ? me.hasHTML5 ? " + HTML5 audio": ", no HTML5 audio support": ""),
                me.html5Only ? me.html5PollingInterval && e.push("html5PollingInterval (" + me.html5PollingInterval + "ms)") : (me.preferFlash && e.push("preferFlash"), me.useHighPerformance && e.push("useHighPerformance"), me.flashPollingInterval && e.push("flashPollingInterval (" + me.flashPollingInterval + "ms)"), me.html5PollingInterval && e.push("html5PollingInterval (" + me.html5PollingInterval + "ms)"), me.wmode && e.push("wmode (" + me.wmode + ")"), me.debugFlash && e.push("debugFlash"), me.useFlashBlock && e.push("flashBlock")),
                e.length && (n = n.concat([e.join(i)])),
                me._wD(t + (n.length ? i + n.join(", ") : ""), 1),
                de()
            }
            function o(t, e) {
                return '<param name="' + t + '" value="' + e + '" />'
            }
            if (Pe && ke) return ! 1;
            if (me.html5Only) return M(),
            i(),
            me.oMC = s(me.movieID),
            c(),
            Pe = !0,
            ke = !0,
            !1;
            var a, r, l, u, h, d, p, f, m = n || me.url,
            g = me.altURL || m,
            y = "JS/Flash audio component (SoundManager 2)",
            v = A(),
            b = B(),
            S = null,
            w = Me.getElementsByTagName("html")[0];
            if (S = w && w.dir && w.dir.match(/rtl/i), t = t === e ? me.id: t, M(), me.url = j(ln ? m: g), n = me.url, me.wmode = !me.wmode && me.useHighPerformance ? "transparent": me.wmode, null !== me.wmode && (we.match(/msie 8/i) || !Ye && !me.useHighPerformance) && navigator.platform.match(/win32|win64/i) && (Fe.push(C.spcWmode), me.wmode = null), a = {
                name: t,
                id: t,
                src: n,
                quality: "high",
                allowScriptAccess: me.allowScriptAccess,
                bgcolor: me.bgColor,
                pluginspage: un + "www.macromedia.com/go/getflashplayer",
                title: y,
                type: "application/x-shockwave-flash",
                wmode: me.wmode,
                hasPriority: "true"
            },
            me.debugFlash && (a.FlashVars = "debug=1"), me.wmode || delete a.wmode, Ye) r = Me.createElement("div"),
            u = ['<object id="' + t + '" data="' + n + '" type="' + a.type + '" title="' + a.title + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + un + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">', o("movie", n), o("AllowScriptAccess", me.allowScriptAccess), o("quality", a.quality), me.wmode ? o("wmode", me.wmode) : "", o("bgcolor", me.bgColor), o("hasPriority", "true"), me.debugFlash ? o("FlashVars", a.FlashVars) : "", "</object>"].join("");
            else {
                r = Me.createElement("embed");
                for (l in a) a.hasOwnProperty(l) && r.setAttribute(l, a[l])
            }
            if (I(), b = B(), v = A()) if (me.oMC = s(me.movieID) || Me.createElement("div"), me.oMC.id) f = me.oMC.className,
            me.oMC.className = (f ? f + " ": W.swfDefault) + (b ? " " + b: ""),
            me.oMC.appendChild(r),
            Ye && (h = me.oMC.appendChild(Me.createElement("div")), h.className = W.swfBox, h.innerHTML = u),
            ke = !0;
            else {
                if (me.oMC.id = me.movieID, me.oMC.className = W.swfDefault + " " + b, d = null, h = null, me.useFlashBlock || (me.useHighPerformance ? d = {
                    position: "fixed",
                    width: "8px",
                    height: "8px",
                    bottom: "0px",
                    left: "0px",
                    overflow: "hidden"
                }: (d = {
                    position: "absolute",
                    width: "6px",
                    height: "6px",
                    top: "-9999px",
                    left: "-9999px"
                },
                S && (d.left = Math.abs(parseInt(d.left, 10)) + "px"))), Xe && (me.oMC.style.zIndex = 1e4), !me.debugFlash) for (p in d) d.hasOwnProperty(p) && (me.oMC.style[p] = d[p]);
                try {
                    Ye || me.oMC.appendChild(r),
                    v.appendChild(me.oMC),
                    Ye && (h = me.oMC.appendChild(Me.createElement("div")), h.className = W.swfBox, h.innerHTML = u),
                    ke = !0
                } catch(x) {
                    throw new Error(R("domError") + " \n" + x.toString())
                }
            }
            return Pe = !0,
            i(),
            !0
        },
        P = function() {
            return me.html5Only ? (D(), !1) : ye ? !1 : me.url ? (ye = me.getMovie(me.id), ye || (Ne ? (Ye ? me.oMC.innerHTML = Ie: me.oMC.appendChild(Ne), Ne = null, Pe = !0) : D(me.id, me.url), ye = me.getMovie(me.id)), "function" == typeof me.oninitmovie && setTimeout(me.oninitmovie, 1), pe(), !0) : (p("noURL"), !1)
        },
        w = function() {
            setTimeout(x, 1e3)
        },
        x = function() {
            var e, n = !1;
            return me.url ? $e ? !1 : ($e = !0, re.remove(t, "load", w), nn && !en ? (p("waitFocus"), !1) : (_e || (e = me.getMoviePercent(), e > 0 && 100 > e && (n = !0)), setTimeout(function() {
                return e = me.getMoviePercent(),
                n ? ($e = !1, me._wD(R("waitSWF")), t.setTimeout(w, 1), !1) : (_e || (me._wD(ve + ": No Flash response within expected time. Likely causes: " + (0 === e ? "SWF load failed, ": "") + "Flash blocked or JS-Flash security error." + (me.debugFlash ? " " + R("checkSWF") : ""), 2), !ln && e && (p("localFail", 2), me.debugFlash || p("tryDebug", 2)), 0 === e && me._wD(R("swf404", me.url), 1), d("flashtojs", !1, " (Check flash security or flash blockers)")), !_e && on && (null === e ? me.useFlashBlock || 0 === me.flashLoadTimeout ? (me.useFlashBlock && F(), p("waitForever")) : !me.useFlashBlock && Q ? t.setTimeout(function() {
                    U(be + "useFlashBlock is false, 100% HTML5 mode is possible. Rebooting with preferFlash: false..."),
                    me.setup({
                        preferFlash: !1
                    }).reboot(),
                    me.didFlashBlock = !0,
                    me.beginDelayedInit()
                },
                1) : (p("waitForever"), b({
                    type: "ontimeout",
                    ignoreInit: !0
                })) : 0 === me.flashLoadTimeout ? p("waitForever") : H(!0)), void 0)
            },
            me.flashLoadTimeout), void 0)) : !1
        },
        T = function() {
            function e() {
                re.remove(t, "focus", T)
            }
            return en || !nn ? (e(), !0) : (on = !0, en = !0, p("gotFocus"), $e = !1, w(), e(), !0)
        },
        pe = function() {
            Fe.length && (me._wD("SoundManager 2: " + Fe.join(" "), 1), Fe = [])
        },
        de = function() {
            pe();
            var t, e = [];
            if (me.useHTML5Audio && me.hasHTML5) {
                for (t in me.audioFormats) me.audioFormats.hasOwnProperty(t) && e.push(t + " = " + me.html5[t] + (!me.html5[t] && Be && me.flash[t] ? " (using flash)": me.preferFlash && me.flash[t] && Be ? " (preferring flash)": me.html5[t] ? "": " (" + (me.audioFormats[t].required ? "required, ": "") + "and no flash support)"));
                me._wD("SoundManager 2 HTML5 support: " + e.join(", "), 1)
            }
        },
        f = function(e) {
            if (_e) return ! 1;
            if (me.html5Only) return p("sm2Loaded"),
            _e = !0,
            S(),
            d("onload", !0),
            !0;
            var n, i = me.useFlashBlock && me.flashLoadTimeout && !me.getMoviePercent(),
            o = !0;
            return i || (_e = !0, Ee && (n = {
                type: !le && Be ? "NO_FLASH": "INIT_TIMEOUT"
            })),
            me._wD("SoundManager 2 " + (Ee ? "failed to load": "loaded") + " (" + (Ee ? "Flash security/load error": "OK") + ")", Ee ? 2 : 1),
            Ee || e ? (me.useFlashBlock && me.oMC && (me.oMC.className = B() + " " + (null === me.getMoviePercent() ? W.swfTimedout: W.swfError)), b({
                type: "ontimeout",
                error: n,
                ignoreInit: !0
            }), d("onload", !1), L(n), o = !1) : d("onload", !0),
            Ee || (me.waitForWindowLoad && !Oe ? (p("waitOnload"), re.add(t, "load", S)) : (me.waitForWindowLoad && Oe && p("docLoaded"), S())),
            o
        },
        u = function() {
            var t, n = me.setupOptions;
            for (t in n) n.hasOwnProperty(t) && (me[t] === e ? me[t] = n[t] : me[t] !== n[t] && (me.setupOptions[t] = me[t]))
        },
        c = function() {
            function e() {
                re.remove(t, "load", me.beginDelayedInit)
            }
            if (_e) return p("didInit"),
            !1;
            if (me.html5Only) return _e || (e(), me.enabled = !0, f()),
            !0;
            P();
            try {
                ye._externalInterfaceTest(!1),
                N(!0, me.flashPollingInterval || (me.useHighPerformance ? 10 : 50)),
                me.debugMode || ye._disableDebug(),
                me.enabled = !0,
                d("jstoflash", !0),
                me.html5Only || re.add(t, "unload", l)
            } catch(n) {
                return me._wD("js/flash exception: " + n.toString()),
                d("jstoflash", !1),
                L({
                    type: "JS_TO_FLASH_EXCEPTION",
                    fatal: !0
                }),
                H(!0),
                f(),
                !1
            }
            return f(),
            e(),
            !0
        },
        _ = function() {
            return O ? !1 : (O = !0, u(), I(),
            function() {
                var t = "sm2-usehtml5audio=",
                e = "sm2-preferflash=",
                n = null,
                i = null,
                o = xe.toLowerCase(); - 1 !== o.indexOf(t) && (n = "1" === o.charAt(o.indexOf(t) + t.length), tn && console.log((n ? "Enabling ": "Disabling ") + "useHTML5Audio via URL parameter"), me.setup({
                    useHTML5Audio: n
                })),
                -1 !== o.indexOf(e) && (i = "1" === o.charAt(o.indexOf(e) + e.length), tn && console.log((i ? "Enabling ": "Disabling ") + "preferFlash via URL parameter"), me.setup({
                    preferFlash: i
                }))
            } (), !le && me.hasHTML5 && (me._wD("SoundManager: No Flash detected" + (me.useHTML5Audio ? ". Trying HTML5-only mode.": ", enabling HTML5."), 1), me.setup({
                useHTML5Audio: !0,
                preferFlash: !1
            })), ae(), !le && Be && (Fe.push(C.needFlash), me.setup({
                flashLoadTimeout: 1
            })), Me.removeEventListener && Me.removeEventListener("DOMContentLoaded", _, !1), P(), !0)
        },
        oe = function() {
            return "complete" === Me.readyState && (_(), Me.detachEvent("onreadystatechange", oe)),
            !0
        },
        E = function() {
            Oe = !0,
            re.remove(t, "load", E)
        },
        k = function() {
            Qe && ((!me.setupOptions.useHTML5Audio || me.setupOptions.preferFlash) && Fe.push(C.mobileUA), me.setupOptions.useHTML5Audio = !0, me.setupOptions.preferFlash = !1, (ze || Ue && !we.match(/android\s2\.3/i)) && (Fe.push(C.globalHTML5), ze && (me.ignoreFlash = !0), Ve = !0))
        },
        k(),
        ue(),
        re.add(t, "focus", T),
        re.add(t, "load", w),
        re.add(t, "load", E),
        Me.addEventListener ? Me.addEventListener("DOMContentLoaded", _, !1) : Me.attachEvent ? Me.attachEvent("onreadystatechange", oe) : (d("onload", !1), L({
            type: "NO_DOM2_EVENTS",
            fatal: !0
        }))
    }
    var i = null;
    void 0 !== t.SM2_DEFER && SM2_DEFER || (i = new n),
    t.SoundManager = n,
    t.soundManager = i
} (window),
Date.now || (Date.now = function() {
    return (new Date).getTime()
}),
function() {
    for (var t = 0,
    e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[e[n] + "RequestAnimationFrame"],
    window.cancelAnimationFrame = window[e[n] + "CancelAnimationFrame"] || window[e[n] + "CancelRequestAnimationFrame"];
    void 0 === window.requestAnimationFrame && (window.requestAnimationFrame = function(e) {
        var n = Date.now(),
        i = Math.max(0, 16 - (n - t)),
        o = window.setTimeout(function() {
            e(n + i)
        },
        i);
        return t = n + i,
        o
    }),
    window.cancelAnimationFrame = window.cancelAnimationFrame ||
    function(t) {
        window.clearTimeout(t)
    }
} ();
var THREE = {};
THREE.Vector2 = function(t, e) {
    this.x = t || 0,
    this.y = e || 0
},
THREE.Vector2.prototype = {
    constructor: THREE.Vector2,
    set: function(t, e) {
        return this.x = t,
        this.y = e,
        this
    },
    setX: function(t) {
        return this.x = t,
        this
    },
    setY: function(t) {
        return this.y = t,
        this
    },
    setComponent: function(t, e) {
        switch (t) {
        case 0:
            this.x = e;
            break;
        case 1:
            this.y = e;
            break;
        default:
            throw new Error("index is out of range: " + t)
        }
    },
    getComponent: function(t) {
        switch (t) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        default:
            throw new Error("index is out of range: " + t)
        }
    },
    copy: function(t) {
        return this.x = t.x,
        this.y = t.y,
        this
    },
    add: function(t, e) {
        return void 0 !== e ? (console.warn("DEPRECATED: Vector2's .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this)
    },
    addVectors: function(t, e) {
        return this.x = t.x + e.x,
        this.y = t.y + e.y,
        this
    },
    addScalar: function(t) {
        return this.x += t,
        this.y += t,
        this
    },
    sub: function(t, e) {
        return void 0 !== e ? (console.warn("DEPRECATED: Vector2's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this)
    },
    subVectors: function(t, e) {
        return this.x = t.x - e.x,
        this.y = t.y - e.y,
        this
    },
    multiplyScalar: function(t) {
        return this.x *= t,
        this.y *= t,
        this
    },
    divideScalar: function(t) {
        return 0 !== t ? (this.x /= t, this.y /= t) : this.set(0, 0),
        this
    },
    min: function(t) {
        return this.x > t.x && (this.x = t.x),
        this.y > t.y && (this.y = t.y),
        this
    },
    max: function(t) {
        return this.x < t.x && (this.x = t.x),
        this.y < t.y && (this.y = t.y),
        this
    },
    clamp: function(t, e) {
        return this.x < t.x ? this.x = t.x: this.x > e.x && (this.x = e.x),
        this.y < t.y ? this.y = t.y: this.y > e.y && (this.y = e.y),
        this
    },
    negate: function() {
        return this.multiplyScalar( - 1)
    },
    dot: function(t) {
        return this.x * t.x + this.y * t.y
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    },
    normalize: function() {
        return this.divideScalar(this.length())
    },
    distanceTo: function(t) {
        return Math.sqrt(this.distanceToSquared(t))
    },
    distanceToSquared: function(t) {
        var e = this.x - t.x,
        n = this.y - t.y;
        return e * e + n * n
    },
    setLength: function(t) {
        var e = this.length();
        return 0 !== e && t !== e && this.multiplyScalar(t / e),
        this
    },
    lerp: function(t, e) {
        return this.x += (t.x - this.x) * e,
        this.y += (t.y - this.y) * e,
        this
    },
    equals: function(t) {
        return t.x === this.x && t.y === this.y
    },
    clone: function() {
        return new THREE.Vector2(this.x, this.y)
    }
},
THREE.Clock = function(t) {
    this.autoStart = void 0 !== t ? t: !0,
    this.startTime = 0,
    this.oldTime = 0,
    this.elapsedTime = 0,
    this.running = !1
},
THREE.Clock.prototype.start = function() {
    this.startTime = Date.now(),
    this.oldTime = this.startTime,
    this.running = !0
},
THREE.Clock.prototype.stop = function() {
    this.getElapsedTime(),
    this.running = !1
},
THREE.Clock.prototype.getElapsedTime = function() {
    return this.getDelta(),
    this.elapsedTime
},
THREE.Clock.prototype.getDelta = function() {
    var t = 0;
    if (this.autoStart && !this.running && this.start(), this.running) {
        var e = Date.now();
        t = .001 * (e - this.oldTime),
        this.oldTime = e,
        this.elapsedTime += t
    }
    return t
},
THREE.Math = {
    clamp: function(t, e, n) {
        return e > t ? e: t > n ? n: t
    },
    clampBottom: function(t, e) {
        return e > t ? e: t
    },
    mapLinear: function(t, e, n, i, o) {
        return i + (t - e) * (o - i) / (n - e)
    },
    random16: function() {
        return (65280 * Math.random() + 255 * Math.random()) / 65535
    },
    randInt: function(t, e) {
        return t + Math.floor(Math.random() * (e - t + 1))
    },
    randFloat: function(t, e) {
        return t + Math.random() * (e - t)
    },
    randFloatSpread: function(t) {
        return t * (.5 - Math.random())
    },
    sign: function(t) {
        return 0 > t ? -1 : t > 0 ? 1 : 0
    },
    degToRad: function(t) {
        return t * THREE.Math.__d2r
    },
    radToDeg: function(t) {
        return t * THREE.Math.__r2d
    }
},
THREE.Math.__d2r = Math.PI / 180,
THREE.Math.__r2d = 180 / Math.PI;
/*

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
var Handlebars = {}; !
function(t, e) {
    t.VERSION = "1.0.0",
    t.COMPILER_REVISION = 4,
    t.REVISION_CHANGES = {
        1 : "<= 1.0.rc.2",
        2 : "== 1.0.0-rc.3",
        3 : "== 1.0.0-rc.4",
        4 : ">= 1.0.0"
    },
    t.helpers = {},
    t.partials = {};
    var n = Object.prototype.toString,
    i = "[object Function]",
    o = "[object Object]";
    t.registerHelper = function(e, i, a) {
        if (n.call(e) === o) {
            if (a || i) throw new t.Exception("Arg not supported with multiple helpers");
            t.Utils.extend(this.helpers, e)
        } else a && (i.not = a),
        this.helpers[e] = i
    },
    t.registerPartial = function(e, i) {
        n.call(e) === o ? t.Utils.extend(this.partials, e) : this.partials[e] = i
    },
    t.registerHelper("helperMissing",
    function(t) {
        if (2 === arguments.length) return e;
        throw new Error("Missing helper: '" + t + "'")
    }),
    t.registerHelper("blockHelperMissing",
    function(e, o) {
        var a = o.inverse ||
        function() {},
        r = o.fn,
        s = n.call(e);
        return s === i && (e = e.call(this)),
        e === !0 ? r(this) : e === !1 || null == e ? a(this) : "[object Array]" === s ? e.length > 0 ? t.helpers.each(e, o) : a(this) : r(e)
    }),
    t.K = function() {},
    t.createFrame = Object.create ||
    function(e) {
        t.K.prototype = e;
        var n = new t.K;
        return t.K.prototype = null,
        n
    },
    t.logger = {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        level: 3,
        methodMap: {
            0 : "debug",
            1 : "info",
            2 : "warn",
            3 : "error"
        },
        log: function(e, n) {
            if (t.logger.level <= e) {
                var i = t.logger.methodMap[e];
                "undefined" != typeof console && console[i] && console[i].call(console, n)
            }
        }
    },
    t.log = function(e, n) {
        t.logger.log(e, n)
    },
    t.registerHelper("each",
    function(e, o) {
        var a, r = o.fn,
        s = o.inverse,
        l = 0,
        u = "",
        c = n.call(e);
        if (c === i && (e = e.call(this)), o.data && (a = t.createFrame(o.data)), e && "object" == typeof e) if (e instanceof Array) for (var h = e.length; h > l; l++) a && (a.index = l),
        u += r(e[l], {
            data: a
        });
        else for (var d in e) e.hasOwnProperty(d) && (a && (a.key = d), u += r(e[d], {
            data: a
        }), l++);
        return 0 === l && (u = s(this)),
        u
    }),
    t.registerHelper("if",
    function(e, o) {
        var a = n.call(e);
        return a === i && (e = e.call(this)),
        !e || t.Utils.isEmpty(e) ? o.inverse(this) : o.fn(this)
    }),
    t.registerHelper("unless",
    function(e, n) {
        return t.helpers["if"].call(this, e, {
            fn: n.inverse,
            inverse: n.fn
        })
    }),
    t.registerHelper("with",
    function(e, o) {
        var a = n.call(e);
        return a === i && (e = e.call(this)),
        t.Utils.isEmpty(e) ? void 0 : o.fn(e)
    }),
    t.registerHelper("log",
    function(e, n) {
        var i = n.data && null != n.data.level ? parseInt(n.data.level, 10) : 1;
        t.log(i, e)
    });
    var a = function() {
        function t() {
            this.yy = {}
        }
        var e = {
            trace: function() {},
            yy: {},
            symbols_: {
                error: 2,
                root: 3,
                program: 4,
                EOF: 5,
                simpleInverse: 6,
                statements: 7,
                statement: 8,
                openInverse: 9,
                closeBlock: 10,
                openBlock: 11,
                mustache: 12,
                partial: 13,
                CONTENT: 14,
                COMMENT: 15,
                OPEN_BLOCK: 16,
                inMustache: 17,
                CLOSE: 18,
                OPEN_INVERSE: 19,
                OPEN_ENDBLOCK: 20,
                path: 21,
                OPEN: 22,
                OPEN_UNESCAPED: 23,
                CLOSE_UNESCAPED: 24,
                OPEN_PARTIAL: 25,
                partialName: 26,
                params: 27,
                hash: 28,
                dataName: 29,
                param: 30,
                STRING: 31,
                INTEGER: 32,
                BOOLEAN: 33,
                hashSegments: 34,
                hashSegment: 35,
                ID: 36,
                EQUALS: 37,
                DATA: 38,
                pathSegments: 39,
                SEP: 40,
                $accept: 0,
                $end: 1
            },
            terminals_: {
                2 : "error",
                5 : "EOF",
                14 : "CONTENT",
                15 : "COMMENT",
                16 : "OPEN_BLOCK",
                18 : "CLOSE",
                19 : "OPEN_INVERSE",
                20 : "OPEN_ENDBLOCK",
                22 : "OPEN",
                23 : "OPEN_UNESCAPED",
                24 : "CLOSE_UNESCAPED",
                25 : "OPEN_PARTIAL",
                31 : "STRING",
                32 : "INTEGER",
                33 : "BOOLEAN",
                36 : "ID",
                37 : "EQUALS",
                38 : "DATA",
                40 : "SEP"
            },
            productions_: [0, [3, 2], [4, 2], [4, 3], [4, 2], [4, 1], [4, 1], [4, 0], [7, 1], [7, 2], [8, 3], [8, 3], [8, 1], [8, 1], [8, 1], [8, 1], [11, 3], [9, 3], [10, 3], [12, 3], [12, 3], [13, 3], [13, 4], [6, 2], [17, 3], [17, 2], [17, 2], [17, 1], [17, 1], [27, 2], [27, 1], [30, 1], [30, 1], [30, 1], [30, 1], [30, 1], [28, 1], [34, 2], [34, 1], [35, 3], [35, 3], [35, 3], [35, 3], [35, 3], [26, 1], [26, 1], [26, 1], [29, 2], [21, 1], [39, 3], [39, 1]],
            performAction: function(t, e, n, i, o, a) {
                var r = a.length - 1;
                switch (o) {
                case 1:
                    return a[r - 1];
                case 2:
                    this.$ = new i.ProgramNode([], a[r]);
                    break;
                case 3:
                    this.$ = new i.ProgramNode(a[r - 2], a[r]);
                    break;
                case 4:
                    this.$ = new i.ProgramNode(a[r - 1], []);
                    break;
                case 5:
                    this.$ = new i.ProgramNode(a[r]);
                    break;
                case 6:
                    this.$ = new i.ProgramNode([], []);
                    break;
                case 7:
                    this.$ = new i.ProgramNode([]);
                    break;
                case 8:
                    this.$ = [a[r]];
                    break;
                case 9:
                    a[r - 1].push(a[r]),
                    this.$ = a[r - 1];
                    break;
                case 10:
                    this.$ = new i.BlockNode(a[r - 2], a[r - 1].inverse, a[r - 1], a[r]);
                    break;
                case 11:
                    this.$ = new i.BlockNode(a[r - 2], a[r - 1], a[r - 1].inverse, a[r]);
                    break;
                case 12:
                    this.$ = a[r];
                    break;
                case 13:
                    this.$ = a[r];
                    break;
                case 14:
                    this.$ = new i.ContentNode(a[r]);
                    break;
                case 15:
                    this.$ = new i.CommentNode(a[r]);
                    break;
                case 16:
                    this.$ = new i.MustacheNode(a[r - 1][0], a[r - 1][1]);
                    break;
                case 17:
                    this.$ = new i.MustacheNode(a[r - 1][0], a[r - 1][1]);
                    break;
                case 18:
                    this.$ = a[r - 1];
                    break;
                case 19:
                    this.$ = new i.MustacheNode(a[r - 1][0], a[r - 1][1], "&" === a[r - 2][2]);
                    break;
                case 20:
                    this.$ = new i.MustacheNode(a[r - 1][0], a[r - 1][1], !0);
                    break;
                case 21:
                    this.$ = new i.PartialNode(a[r - 1]);
                    break;
                case 22:
                    this.$ = new i.PartialNode(a[r - 2], a[r - 1]);
                    break;
                case 23:
                    break;
                case 24:
                    this.$ = [[a[r - 2]].concat(a[r - 1]), a[r]];
                    break;
                case 25:
                    this.$ = [[a[r - 1]].concat(a[r]), null];
                    break;
                case 26:
                    this.$ = [[a[r - 1]], a[r]];
                    break;
                case 27:
                    this.$ = [[a[r]], null];
                    break;
                case 28:
                    this.$ = [[a[r]], null];
                    break;
                case 29:
                    a[r - 1].push(a[r]),
                    this.$ = a[r - 1];
                    break;
                case 30:
                    this.$ = [a[r]];
                    break;
                case 31:
                    this.$ = a[r];
                    break;
                case 32:
                    this.$ = new i.StringNode(a[r]);
                    break;
                case 33:
                    this.$ = new i.IntegerNode(a[r]);
                    break;
                case 34:
                    this.$ = new i.BooleanNode(a[r]);
                    break;
                case 35:
                    this.$ = a[r];
                    break;
                case 36:
                    this.$ = new i.HashNode(a[r]);
                    break;
                case 37:
                    a[r - 1].push(a[r]),
                    this.$ = a[r - 1];
                    break;
                case 38:
                    this.$ = [a[r]];
                    break;
                case 39:
                    this.$ = [a[r - 2], a[r]];
                    break;
                case 40:
                    this.$ = [a[r - 2], new i.StringNode(a[r])];
                    break;
                case 41:
                    this.$ = [a[r - 2], new i.IntegerNode(a[r])];
                    break;
                case 42:
                    this.$ = [a[r - 2], new i.BooleanNode(a[r])];
                    break;
                case 43:
                    this.$ = [a[r - 2], a[r]];
                    break;
                case 44:
                    this.$ = new i.PartialNameNode(a[r]);
                    break;
                case 45:
                    this.$ = new i.PartialNameNode(new i.StringNode(a[r]));
                    break;
                case 46:
                    this.$ = new i.PartialNameNode(new i.IntegerNode(a[r]));
                    break;
                case 47:
                    this.$ = new i.DataNode(a[r]);
                    break;
                case 48:
                    this.$ = new i.IdNode(a[r]);
                    break;
                case 49:
                    a[r - 2].push({
                        part: a[r],
                        separator: a[r - 1]
                    }),
                    this.$ = a[r - 2];
                    break;
                case 50:
                    this.$ = [{
                        part: a[r]
                    }]
                }
            },
            table: [{
                3 : 1,
                4 : 2,
                5 : [2, 7],
                6 : 3,
                7 : 4,
                8 : 6,
                9 : 7,
                11 : 8,
                12 : 9,
                13 : 10,
                14 : [1, 11],
                15 : [1, 12],
                16 : [1, 13],
                19 : [1, 5],
                22 : [1, 14],
                23 : [1, 15],
                25 : [1, 16]
            },
            {
                1 : [3]
            },
            {
                5 : [1, 17]
            },
            {
                5 : [2, 6],
                7 : 18,
                8 : 6,
                9 : 7,
                11 : 8,
                12 : 9,
                13 : 10,
                14 : [1, 11],
                15 : [1, 12],
                16 : [1, 13],
                19 : [1, 19],
                20 : [2, 6],
                22 : [1, 14],
                23 : [1, 15],
                25 : [1, 16]
            },
            {
                5 : [2, 5],
                6 : 20,
                8 : 21,
                9 : 7,
                11 : 8,
                12 : 9,
                13 : 10,
                14 : [1, 11],
                15 : [1, 12],
                16 : [1, 13],
                19 : [1, 5],
                20 : [2, 5],
                22 : [1, 14],
                23 : [1, 15],
                25 : [1, 16]
            },
            {
                17 : 23,
                18 : [1, 22],
                21 : 24,
                29 : 25,
                36 : [1, 28],
                38 : [1, 27],
                39 : 26
            },
            {
                5 : [2, 8],
                14 : [2, 8],
                15 : [2, 8],
                16 : [2, 8],
                19 : [2, 8],
                20 : [2, 8],
                22 : [2, 8],
                23 : [2, 8],
                25 : [2, 8]
            },
            {
                4 : 29,
                6 : 3,
                7 : 4,
                8 : 6,
                9 : 7,
                11 : 8,
                12 : 9,
                13 : 10,
                14 : [1, 11],
                15 : [1, 12],
                16 : [1, 13],
                19 : [1, 5],
                20 : [2, 7],
                22 : [1, 14],
                23 : [1, 15],
                25 : [1, 16]
            },
            {
                4 : 30,
                6 : 3,
                7 : 4,
                8 : 6,
                9 : 7,
                11 : 8,
                12 : 9,
                13 : 10,
                14 : [1, 11],
                15 : [1, 12],
                16 : [1, 13],
                19 : [1, 5],
                20 : [2, 7],
                22 : [1, 14],
                23 : [1, 15],
                25 : [1, 16]
            },
            {
                5 : [2, 12],
                14 : [2, 12],
                15 : [2, 12],
                16 : [2, 12],
                19 : [2, 12],
                20 : [2, 12],
                22 : [2, 12],
                23 : [2, 12],
                25 : [2, 12]
            },
            {
                5 : [2, 13],
                14 : [2, 13],
                15 : [2, 13],
                16 : [2, 13],
                19 : [2, 13],
                20 : [2, 13],
                22 : [2, 13],
                23 : [2, 13],
                25 : [2, 13]
            },
            {
                5 : [2, 14],
                14 : [2, 14],
                15 : [2, 14],
                16 : [2, 14],
                19 : [2, 14],
                20 : [2, 14],
                22 : [2, 14],
                23 : [2, 14],
                25 : [2, 14]
            },
            {
                5 : [2, 15],
                14 : [2, 15],
                15 : [2, 15],
                16 : [2, 15],
                19 : [2, 15],
                20 : [2, 15],
                22 : [2, 15],
                23 : [2, 15],
                25 : [2, 15]
            },
            {
                17 : 31,
                21 : 24,
                29 : 25,
                36 : [1, 28],
                38 : [1, 27],
                39 : 26
            },
            {
                17 : 32,
                21 : 24,
                29 : 25,
                36 : [1, 28],
                38 : [1, 27],
                39 : 26
            },
            {
                17 : 33,
                21 : 24,
                29 : 25,
                36 : [1, 28],
                38 : [1, 27],
                39 : 26
            },
            {
                21 : 35,
                26 : 34,
                31 : [1, 36],
                32 : [1, 37],
                36 : [1, 28],
                39 : 26
            },
            {
                1 : [2, 1]
            },
            {
                5 : [2, 2],
                8 : 21,
                9 : 7,
                11 : 8,
                12 : 9,
                13 : 10,
                14 : [1, 11],
                15 : [1, 12],
                16 : [1, 13],
                19 : [1, 19],
                20 : [2, 2],
                22 : [1, 14],
                23 : [1, 15],
                25 : [1, 16]
            },
            {
                17 : 23,
                21 : 24,
                29 : 25,
                36 : [1, 28],
                38 : [1, 27],
                39 : 26
            },
            {
                5 : [2, 4],
                7 : 38,
                8 : 6,
                9 : 7,
                11 : 8,
                12 : 9,
                13 : 10,
                14 : [1, 11],
                15 : [1, 12],
                16 : [1, 13],
                19 : [1, 19],
                20 : [2, 4],
                22 : [1, 14],
                23 : [1, 15],
                25 : [1, 16]
            },
            {
                5 : [2, 9],
                14 : [2, 9],
                15 : [2, 9],
                16 : [2, 9],
                19 : [2, 9],
                20 : [2, 9],
                22 : [2, 9],
                23 : [2, 9],
                25 : [2, 9]
            },
            {
                5 : [2, 23],
                14 : [2, 23],
                15 : [2, 23],
                16 : [2, 23],
                19 : [2, 23],
                20 : [2, 23],
                22 : [2, 23],
                23 : [2, 23],
                25 : [2, 23]
            },
            {
                18 : [1, 39]
            },
            {
                18 : [2, 27],
                21 : 44,
                24 : [2, 27],
                27 : 40,
                28 : 41,
                29 : 48,
                30 : 42,
                31 : [1, 45],
                32 : [1, 46],
                33 : [1, 47],
                34 : 43,
                35 : 49,
                36 : [1, 50],
                38 : [1, 27],
                39 : 26
            },
            {
                18 : [2, 28],
                24 : [2, 28]
            },
            {
                18 : [2, 48],
                24 : [2, 48],
                31 : [2, 48],
                32 : [2, 48],
                33 : [2, 48],
                36 : [2, 48],
                38 : [2, 48],
                40 : [1, 51]
            },
            {
                21 : 52,
                36 : [1, 28],
                39 : 26
            },
            {
                18 : [2, 50],
                24 : [2, 50],
                31 : [2, 50],
                32 : [2, 50],
                33 : [2, 50],
                36 : [2, 50],
                38 : [2, 50],
                40 : [2, 50]
            },
            {
                10 : 53,
                20 : [1, 54]
            },
            {
                10 : 55,
                20 : [1, 54]
            },
            {
                18 : [1, 56]
            },
            {
                18 : [1, 57]
            },
            {
                24 : [1, 58]
            },
            {
                18 : [1, 59],
                21 : 60,
                36 : [1, 28],
                39 : 26
            },
            {
                18 : [2, 44],
                36 : [2, 44]
            },
            {
                18 : [2, 45],
                36 : [2, 45]
            },
            {
                18 : [2, 46],
                36 : [2, 46]
            },
            {
                5 : [2, 3],
                8 : 21,
                9 : 7,
                11 : 8,
                12 : 9,
                13 : 10,
                14 : [1, 11],
                15 : [1, 12],
                16 : [1, 13],
                19 : [1, 19],
                20 : [2, 3],
                22 : [1, 14],
                23 : [1, 15],
                25 : [1, 16]
            },
            {
                14 : [2, 17],
                15 : [2, 17],
                16 : [2, 17],
                19 : [2, 17],
                20 : [2, 17],
                22 : [2, 17],
                23 : [2, 17],
                25 : [2, 17]
            },
            {
                18 : [2, 25],
                21 : 44,
                24 : [2, 25],
                28 : 61,
                29 : 48,
                30 : 62,
                31 : [1, 45],
                32 : [1, 46],
                33 : [1, 47],
                34 : 43,
                35 : 49,
                36 : [1, 50],
                38 : [1, 27],
                39 : 26
            },
            {
                18 : [2, 26],
                24 : [2, 26]
            },
            {
                18 : [2, 30],
                24 : [2, 30],
                31 : [2, 30],
                32 : [2, 30],
                33 : [2, 30],
                36 : [2, 30],
                38 : [2, 30]
            },
            {
                18 : [2, 36],
                24 : [2, 36],
                35 : 63,
                36 : [1, 64]
            },
            {
                18 : [2, 31],
                24 : [2, 31],
                31 : [2, 31],
                32 : [2, 31],
                33 : [2, 31],
                36 : [2, 31],
                38 : [2, 31]
            },
            {
                18 : [2, 32],
                24 : [2, 32],
                31 : [2, 32],
                32 : [2, 32],
                33 : [2, 32],
                36 : [2, 32],
                38 : [2, 32]
            },
            {
                18 : [2, 33],
                24 : [2, 33],
                31 : [2, 33],
                32 : [2, 33],
                33 : [2, 33],
                36 : [2, 33],
                38 : [2, 33]
            },
            {
                18 : [2, 34],
                24 : [2, 34],
                31 : [2, 34],
                32 : [2, 34],
                33 : [2, 34],
                36 : [2, 34],
                38 : [2, 34]
            },
            {
                18 : [2, 35],
                24 : [2, 35],
                31 : [2, 35],
                32 : [2, 35],
                33 : [2, 35],
                36 : [2, 35],
                38 : [2, 35]
            },
            {
                18 : [2, 38],
                24 : [2, 38],
                36 : [2, 38]
            },
            {
                18 : [2, 50],
                24 : [2, 50],
                31 : [2, 50],
                32 : [2, 50],
                33 : [2, 50],
                36 : [2, 50],
                37 : [1, 65],
                38 : [2, 50],
                40 : [2, 50]
            },
            {
                36 : [1, 66]
            },
            {
                18 : [2, 47],
                24 : [2, 47],
                31 : [2, 47],
                32 : [2, 47],
                33 : [2, 47],
                36 : [2, 47],
                38 : [2, 47]
            },
            {
                5 : [2, 10],
                14 : [2, 10],
                15 : [2, 10],
                16 : [2, 10],
                19 : [2, 10],
                20 : [2, 10],
                22 : [2, 10],
                23 : [2, 10],
                25 : [2, 10]
            },
            {
                21 : 67,
                36 : [1, 28],
                39 : 26
            },
            {
                5 : [2, 11],
                14 : [2, 11],
                15 : [2, 11],
                16 : [2, 11],
                19 : [2, 11],
                20 : [2, 11],
                22 : [2, 11],
                23 : [2, 11],
                25 : [2, 11]
            },
            {
                14 : [2, 16],
                15 : [2, 16],
                16 : [2, 16],
                19 : [2, 16],
                20 : [2, 16],
                22 : [2, 16],
                23 : [2, 16],
                25 : [2, 16]
            },
            {
                5 : [2, 19],
                14 : [2, 19],
                15 : [2, 19],
                16 : [2, 19],
                19 : [2, 19],
                20 : [2, 19],
                22 : [2, 19],
                23 : [2, 19],
                25 : [2, 19]
            },
            {
                5 : [2, 20],
                14 : [2, 20],
                15 : [2, 20],
                16 : [2, 20],
                19 : [2, 20],
                20 : [2, 20],
                22 : [2, 20],
                23 : [2, 20],
                25 : [2, 20]
            },
            {
                5 : [2, 21],
                14 : [2, 21],
                15 : [2, 21],
                16 : [2, 21],
                19 : [2, 21],
                20 : [2, 21],
                22 : [2, 21],
                23 : [2, 21],
                25 : [2, 21]
            },
            {
                18 : [1, 68]
            },
            {
                18 : [2, 24],
                24 : [2, 24]
            },
            {
                18 : [2, 29],
                24 : [2, 29],
                31 : [2, 29],
                32 : [2, 29],
                33 : [2, 29],
                36 : [2, 29],
                38 : [2, 29]
            },
            {
                18 : [2, 37],
                24 : [2, 37],
                36 : [2, 37]
            },
            {
                37 : [1, 65]
            },
            {
                21 : 69,
                29 : 73,
                31 : [1, 70],
                32 : [1, 71],
                33 : [1, 72],
                36 : [1, 28],
                38 : [1, 27],
                39 : 26
            },
            {
                18 : [2, 49],
                24 : [2, 49],
                31 : [2, 49],
                32 : [2, 49],
                33 : [2, 49],
                36 : [2, 49],
                38 : [2, 49],
                40 : [2, 49]
            },
            {
                18 : [1, 74]
            },
            {
                5 : [2, 22],
                14 : [2, 22],
                15 : [2, 22],
                16 : [2, 22],
                19 : [2, 22],
                20 : [2, 22],
                22 : [2, 22],
                23 : [2, 22],
                25 : [2, 22]
            },
            {
                18 : [2, 39],
                24 : [2, 39],
                36 : [2, 39]
            },
            {
                18 : [2, 40],
                24 : [2, 40],
                36 : [2, 40]
            },
            {
                18 : [2, 41],
                24 : [2, 41],
                36 : [2, 41]
            },
            {
                18 : [2, 42],
                24 : [2, 42],
                36 : [2, 42]
            },
            {
                18 : [2, 43],
                24 : [2, 43],
                36 : [2, 43]
            },
            {
                5 : [2, 18],
                14 : [2, 18],
                15 : [2, 18],
                16 : [2, 18],
                19 : [2, 18],
                20 : [2, 18],
                22 : [2, 18],
                23 : [2, 18],
                25 : [2, 18]
            }],
            defaultActions: {
                17 : [2, 1]
            },
            parseError: function(t) {
                throw new Error(t)
            },
            parse: function(t) {
                function e() {
                    var t;
                    return t = n.lexer.lex() || 1,
                    "number" != typeof t && (t = n.symbols_[t] || t),
                    t
                }
                var n = this,
                i = [0],
                o = [null],
                a = [],
                r = this.table,
                s = "",
                l = 0,
                u = 0,
                c = 0;
                this.lexer.setInput(t),
                this.lexer.yy = this.yy,
                this.yy.lexer = this.lexer,
                this.yy.parser = this,
                "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                var h = this.lexer.yylloc;
                a.push(h);
                var d = this.lexer.options && this.lexer.options.ranges;
                "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                for (var p, f, m, g, y, v, b, S, w, x = {};;) {
                    if (m = i[i.length - 1], this.defaultActions[m] ? g = this.defaultActions[m] : ((null === p || "undefined" == typeof p) && (p = e()), g = r[m] && r[m][p]), "undefined" == typeof g || !g.length || !g[0]) {
                        var M = "";
                        if (!c) {
                            w = [];
                            for (v in r[m]) this.terminals_[v] && v > 2 && w.push("'" + this.terminals_[v] + "'");
                            M = this.lexer.showPosition ? "Parse error on line " + (l + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + w.join(", ") + ", got '" + (this.terminals_[p] || p) + "'": "Parse error on line " + (l + 1) + ": Unexpected " + (1 == p ? "end of input": "'" + (this.terminals_[p] || p) + "'"),
                            this.parseError(M, {
                                text: this.lexer.match,
                                token: this.terminals_[p] || p,
                                line: this.lexer.yylineno,
                                loc: h,
                                expected: w
                            })
                        }
                    }
                    if (g[0] instanceof Array && g.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + m + ", token: " + p);
                    switch (g[0]) {
                    case 1:
                        i.push(p),
                        o.push(this.lexer.yytext),
                        a.push(this.lexer.yylloc),
                        i.push(g[1]),
                        p = null,
                        f ? (p = f, f = null) : (u = this.lexer.yyleng, s = this.lexer.yytext, l = this.lexer.yylineno, h = this.lexer.yylloc, c > 0 && c--);
                        break;
                    case 2:
                        if (b = this.productions_[g[1]][1], x.$ = o[o.length - b], x._$ = {
                            first_line: a[a.length - (b || 1)].first_line,
                            last_line: a[a.length - 1].last_line,
                            first_column: a[a.length - (b || 1)].first_column,
                            last_column: a[a.length - 1].last_column
                        },
                        d && (x._$.range = [a[a.length - (b || 1)].range[0], a[a.length - 1].range[1]]), y = this.performAction.call(x, s, u, l, this.yy, g[1], o, a), "undefined" != typeof y) return y;
                        b && (i = i.slice(0, 2 * -1 * b), o = o.slice(0, -1 * b), a = a.slice(0, -1 * b)),
                        i.push(this.productions_[g[1]][0]),
                        o.push(x.$),
                        a.push(x._$),
                        S = r[i[i.length - 2]][i[i.length - 1]],
                        i.push(S);
                        break;
                    case 3:
                        return ! 0
                    }
                }
                return ! 0
            }
        },
        n = function() {
            var t = {
                EOF: 1,
                parseError: function(t, e) {
                    if (!this.yy.parser) throw new Error(t);
                    this.yy.parser.parseError(t, e)
                },
                setInput: function(t) {
                    return this._input = t,
                    this._more = this._less = this.done = !1,
                    this.yylineno = this.yyleng = 0,
                    this.yytext = this.matched = this.match = "",
                    this.conditionStack = ["INITIAL"],
                    this.yylloc = {
                        first_line: 1,
                        first_column: 0,
                        last_line: 1,
                        last_column: 0
                    },
                    this.options.ranges && (this.yylloc.range = [0, 0]),
                    this.offset = 0,
                    this
                },
                input: function() {
                    var t = this._input[0];
                    this.yytext += t,
                    this.yyleng++,
                    this.offset++,
                    this.match += t,
                    this.matched += t;
                    var e = t.match(/(?:\r\n?|\n).*/g);
                    return e ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++,
                    this.options.ranges && this.yylloc.range[1]++,
                    this._input = this._input.slice(1),
                    t
                },
                unput: function(t) {
                    var e = t.length,
                    n = t.split(/(?:\r\n?|\n)/g);
                    this._input = t + this._input,
                    this.yytext = this.yytext.substr(0, this.yytext.length - e - 1),
                    this.offset -= e;
                    var i = this.match.split(/(?:\r\n?|\n)/g);
                    this.match = this.match.substr(0, this.match.length - 1),
                    this.matched = this.matched.substr(0, this.matched.length - 1),
                    n.length - 1 && (this.yylineno -= n.length - 1);
                    var o = this.yylloc.range;
                    return this.yylloc = {
                        first_line: this.yylloc.first_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.first_column,
                        last_column: n ? (n.length === i.length ? this.yylloc.first_column: 0) + i[i.length - n.length].length - n[0].length: this.yylloc.first_column - e
                    },
                    this.options.ranges && (this.yylloc.range = [o[0], o[0] + this.yyleng - e]),
                    this
                },
                more: function() {
                    return this._more = !0,
                    this
                },
                less: function(t) {
                    this.unput(this.match.slice(t))
                },
                pastInput: function() {
                    var t = this.matched.substr(0, this.matched.length - this.match.length);
                    return (t.length > 20 ? "...": "") + t.substr( - 20).replace(/\n/g, "")
                },
                upcomingInput: function() {
                    var t = this.match;
                    return t.length < 20 && (t += this._input.substr(0, 20 - t.length)),
                    (t.substr(0, 20) + (t.length > 20 ? "...": "")).replace(/\n/g, "")
                },
                showPosition: function() {
                    var t = this.pastInput(),
                    e = new Array(t.length + 1).join("-");
                    return t + this.upcomingInput() + "\n" + e + "^"
                },
                next: function() {
                    if (this.done) return this.EOF;
                    this._input || (this.done = !0);
                    var t, e, n, i, o;
                    this._more || (this.yytext = "", this.match = "");
                    for (var a = this._currentRules(), r = 0; r < a.length && (n = this._input.match(this.rules[a[r]]), !n || e && !(n[0].length > e[0].length) || (e = n, i = r, this.options.flex)); r++);
                    return e ? (o = e[0].match(/(?:\r\n?|\n).*/g), o && (this.yylineno += o.length), this.yylloc = {
                        first_line: this.yylloc.last_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.last_column,
                        last_column: o ? o[o.length - 1].length - o[o.length - 1].match(/\r?\n?/)[0].length: this.yylloc.last_column + e[0].length
                    },
                    this.yytext += e[0], this.match += e[0], this.matches = e, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(e[0].length), this.matched += e[0], t = this.performAction.call(this, this.yy, this, a[i], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), t ? t: void 0) : "" === this._input ? this.EOF: this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                        text: "",
                        token: null,
                        line: this.yylineno
                    })
                },
                lex: function() {
                    var t = this.next();
                    return "undefined" != typeof t ? t: this.lex()
                },
                begin: function(t) {
                    this.conditionStack.push(t)
                },
                popState: function() {
                    return this.conditionStack.pop()
                },
                _currentRules: function() {
                    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                },
                topState: function() {
                    return this.conditionStack[this.conditionStack.length - 2]
                },
                pushState: function(t) {
                    this.begin(t)
                }
            };
            return t.options = {},
            t.performAction = function(t, e, n, i) {
                switch (n) {
                case 0:
                    return e.yytext = "\\",
                    14;
                case 1:
                    if ("\\" !== e.yytext.slice( - 1) && this.begin("mu"), "\\" === e.yytext.slice( - 1) && (e.yytext = e.yytext.substr(0, e.yyleng - 1), this.begin("emu")), e.yytext) return 14;
                    break;
                case 2:
                    return 14;
                case 3:
                    return "\\" !== e.yytext.slice( - 1) && this.popState(),
                    "\\" === e.yytext.slice( - 1) && (e.yytext = e.yytext.substr(0, e.yyleng - 1)),
                    14;
                case 4:
                    return e.yytext = e.yytext.substr(0, e.yyleng - 4),
                    this.popState(),
                    15;
                case 5:
                    return 25;
                case 6:
                    return 16;
                case 7:
                    return 20;
                case 8:
                    return 19;
                case 9:
                    return 19;
                case 10:
                    return 23;
                case 11:
                    return 22;
                case 12:
                    this.popState(),
                    this.begin("com");
                    break;
                case 13:
                    return e.yytext = e.yytext.substr(3, e.yyleng - 5),
                    this.popState(),
                    15;
                case 14:
                    return 22;
                case 15:
                    return 37;
                case 16:
                    return 36;
                case 17:
                    return 36;
                case 18:
                    return 40;
                case 19:
                    break;
                case 20:
                    return this.popState(),
                    24;
                case 21:
                    return this.popState(),
                    18;
                case 22:
                    return e.yytext = e.yytext.substr(1, e.yyleng - 2).replace(/\\"/g, '"'),
                    31;
                case 23:
                    return e.yytext = e.yytext.substr(1, e.yyleng - 2).replace(/\\'/g, "'"),
                    31;
                case 24:
                    return 38;
                case 25:
                    return 33;
                case 26:
                    return 33;
                case 27:
                    return 32;
                case 28:
                    return 36;
                case 29:
                    return e.yytext = e.yytext.substr(1, e.yyleng - 2),
                    36;
                case 30:
                    return "INVALID";
                case 31:
                    return 5
                }
            },
            t.rules = [/^(?:\\\\(?=(\{\{)))/, /^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|$)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\{\{>)/, /^(?:\{\{#)/, /^(?:\{\{\/)/, /^(?:\{\{\^)/, /^(?:\{\{\s*else\b)/, /^(?:\{\{\{)/, /^(?:\{\{&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{)/, /^(?:=)/, /^(?:\.(?=[}\/ ]))/, /^(?:\.\.)/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}\}\})/, /^(?:\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=[}\s]))/, /^(?:false(?=[}\s]))/, /^(?:-?[0-9]+(?=[}\s]))/, /^(?:[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.]))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/],
            t.conditions = {
                mu: {
                    rules: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                    inclusive: !1
                },
                emu: {
                    rules: [3],
                    inclusive: !1
                },
                com: {
                    rules: [4],
                    inclusive: !1
                },
                INITIAL: {
                    rules: [0, 1, 2, 31],
                    inclusive: !0
                }
            },
            t
        } ();
        return e.lexer = n,
        t.prototype = e,
        e.Parser = t,
        new t
    } ();
    t.Parser = a,
    t.parse = function(e) {
        return e.constructor === t.AST.ProgramNode ? e: (t.Parser.yy = t.AST, t.Parser.parse(e))
    },
    t.AST = {},
    t.AST.ProgramNode = function(e, n) {
        this.type = "program",
        this.statements = e,
        n && (this.inverse = new t.AST.ProgramNode(n))
    },
    t.AST.MustacheNode = function(t, e, n) {
        this.type = "mustache",
        this.escaped = !n,
        this.hash = e;
        var i = this.id = t[0],
        o = this.params = t.slice(1),
        a = this.eligibleHelper = i.isSimple;
        this.isHelper = a && (o.length || e)
    },
    t.AST.PartialNode = function(t, e) {
        this.type = "partial",
        this.partialName = t,
        this.context = e
    },
    t.AST.BlockNode = function(e, n, i, o) {
        var a = function(e, n) {
            if (e.original !== n.original) throw new t.Exception(e.original + " doesn't match " + n.original)
        };
        a(e.id, o),
        this.type = "block",
        this.mustache = e,
        this.program = n,
        this.inverse = i,
        this.inverse && !this.program && (this.isInverse = !0)
    },
    t.AST.ContentNode = function(t) {
        this.type = "content",
        this.string = t
    },
    t.AST.HashNode = function(t) {
        this.type = "hash",
        this.pairs = t
    },
    t.AST.IdNode = function(e) {
        this.type = "ID";
        for (var n = "",
        i = [], o = 0, a = 0, r = e.length; r > a; a++) {
            var s = e[a].part;
            if (n += (e[a].separator || "") + s, ".." === s || "." === s || "this" === s) {
                if (i.length > 0) throw new t.Exception("Invalid path: " + n);
                ".." === s ? o++:this.isScoped = !0
            } else i.push(s)
        }
        this.original = n,
        this.parts = i,
        this.string = i.join("."),
        this.depth = o,
        this.isSimple = 1 === e.length && !this.isScoped && 0 === o,
        this.stringModeValue = this.string
    },
    t.AST.PartialNameNode = function(t) {
        this.type = "PARTIAL_NAME",
        this.name = t.original
    },
    t.AST.DataNode = function(t) {
        this.type = "DATA",
        this.id = t
    },
    t.AST.StringNode = function(t) {
        this.type = "STRING",
        this.original = this.string = this.stringModeValue = t
    },
    t.AST.IntegerNode = function(t) {
        this.type = "INTEGER",
        this.original = this.integer = t,
        this.stringModeValue = Number(t)
    },
    t.AST.BooleanNode = function(t) {
        this.type = "BOOLEAN",
        this.bool = t,
        this.stringModeValue = "true" === t
    },
    t.AST.CommentNode = function(t) {
        this.type = "comment",
        this.comment = t
    };
    var r = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
    t.Exception = function() {
        for (var t = Error.prototype.constructor.apply(this, arguments), e = 0; e < r.length; e++) this[r[e]] = t[r[e]]
    },
    t.Exception.prototype = new Error,
    t.SafeString = function(t) {
        this.string = t
    },
    t.SafeString.prototype.toString = function() {
        return this.string.toString()
    };
    var s = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    },
    l = /[&<>"'`]/g,
    u = /[&<>"'`]/,
    c = function(t) {
        return s[t] || "&amp;"
    };
    t.Utils = {
        extend: function(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
        },
        escapeExpression: function(e) {
            return e instanceof t.SafeString ? e.toString() : null == e || e === !1 ? "": (e = e.toString(), u.test(e) ? e.replace(l, c) : e)
        },
        isEmpty: function(t) {
            return t || 0 === t ? "[object Array]" === n.call(t) && 0 === t.length ? !0 : !1 : !0
        }
    };
    var h = t.Compiler = function() {},
    d = t.JavaScriptCompiler = function() {};
    h.prototype = {
        compiler: h,
        disassemble: function() {
            for (var t, e, n, i = this.opcodes,
            o = [], a = 0, r = i.length; r > a; a++) if (t = i[a], "DECLARE" === t.opcode) o.push("DECLARE " + t.name + "=" + t.value);
            else {
                e = [];
                for (var s = 0; s < t.args.length; s++) n = t.args[s],
                "string" == typeof n && (n = '"' + n.replace("\n", "\\n") + '"'),
                e.push(n);
                o.push(t.opcode + " " + e.join(" "))
            }
            return o.join("\n")
        },
        equals: function(t) {
            var e = this.opcodes.length;
            if (t.opcodes.length !== e) return ! 1;
            for (var n = 0; e > n; n++) {
                var i = this.opcodes[n],
                o = t.opcodes[n];
                if (i.opcode !== o.opcode || i.args.length !== o.args.length) return ! 1;
                for (var a = 0; a < i.args.length; a++) if (i.args[a] !== o.args[a]) return ! 1
            }
            if (e = this.children.length, t.children.length !== e) return ! 1;
            for (n = 0; e > n; n++) if (!this.children[n].equals(t.children[n])) return ! 1;
            return ! 0
        },
        guid: 0,
        compile: function(t, e) {
            this.children = [],
            this.depths = {
                list: []
            },
            this.options = e;
            var n = this.options.knownHelpers;
            if (this.options.knownHelpers = {
                helperMissing: !0,
                blockHelperMissing: !0,
                each: !0,
                "if": !0,
                unless: !0,
                "with": !0,
                log: !0
            },
            n) for (var i in n) this.options.knownHelpers[i] = n[i];
            return this.program(t)
        },
        accept: function(t) {
            return this[t.type](t)
        },
        program: function(t) {
            var e, n = t.statements;
            this.opcodes = [];
            for (var i = 0,
            o = n.length; o > i; i++) e = n[i],
            this[e.type](e);
            return this.isSimple = 1 === o,
            this.depths.list = this.depths.list.sort(function(t, e) {
                return t - e
            }),
            this
        },
        compileProgram: function(t) {
            var e, n = (new this.compiler).compile(t, this.options),
            i = this.guid++;
            this.usePartial = this.usePartial || n.usePartial,
            this.children[i] = n;
            for (var o = 0,
            a = n.depths.list.length; a > o; o++) e = n.depths.list[o],
            2 > e || this.addDepth(e - 1);
            return i
        },
        block: function(t) {
            var e = t.mustache,
            n = t.program,
            i = t.inverse;
            n && (n = this.compileProgram(n)),
            i && (i = this.compileProgram(i));
            var o = this.classifyMustache(e);
            "helper" === o ? this.helperMustache(e, n, i) : "simple" === o ? (this.simpleMustache(e), this.opcode("pushProgram", n), this.opcode("pushProgram", i), this.opcode("emptyHash"), this.opcode("blockValue")) : (this.ambiguousMustache(e, n, i), this.opcode("pushProgram", n), this.opcode("pushProgram", i), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")),
            this.opcode("append")
        },
        hash: function(t) {
            var e, n, i = t.pairs;
            this.opcode("pushHash");
            for (var o = 0,
            a = i.length; a > o; o++) e = i[o],
            n = e[1],
            this.options.stringParams ? (n.depth && this.addDepth(n.depth), this.opcode("getContext", n.depth || 0), this.opcode("pushStringParam", n.stringModeValue, n.type)) : this.accept(n),
            this.opcode("assignToHash", e[0]);
            this.opcode("popHash")
        },
        partial: function(t) {
            var e = t.partialName;
            this.usePartial = !0,
            t.context ? this.ID(t.context) : this.opcode("push", "depth0"),
            this.opcode("invokePartial", e.name),
            this.opcode("append")
        },
        content: function(t) {
            this.opcode("appendContent", t.string)
        },
        mustache: function(t) {
            var e = this.options,
            n = this.classifyMustache(t);
            "simple" === n ? this.simpleMustache(t) : "helper" === n ? this.helperMustache(t) : this.ambiguousMustache(t),
            t.escaped && !e.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
        },
        ambiguousMustache: function(t, e, n) {
            var i = t.id,
            o = i.parts[0],
            a = null != e || null != n;
            this.opcode("getContext", i.depth),
            this.opcode("pushProgram", e),
            this.opcode("pushProgram", n),
            this.opcode("invokeAmbiguous", o, a)
        },
        simpleMustache: function(t) {
            var e = t.id;
            "DATA" === e.type ? this.DATA(e) : e.parts.length ? this.ID(e) : (this.addDepth(e.depth), this.opcode("getContext", e.depth), this.opcode("pushContext")),
            this.opcode("resolvePossibleLambda")
        },
        helperMustache: function(t, e, n) {
            var i = this.setupFullMustacheParams(t, e, n),
            o = t.id.parts[0];
            if (this.options.knownHelpers[o]) this.opcode("invokeKnownHelper", i.length, o);
            else {
                if (this.options.knownHelpersOnly) throw new Error("You specified knownHelpersOnly, but used the unknown helper " + o);
                this.opcode("invokeHelper", i.length, o)
            }
        },
        ID: function(t) {
            this.addDepth(t.depth),
            this.opcode("getContext", t.depth);
            var e = t.parts[0];
            e ? this.opcode("lookupOnContext", t.parts[0]) : this.opcode("pushContext");
            for (var n = 1,
            i = t.parts.length; i > n; n++) this.opcode("lookup", t.parts[n])
        },
        DATA: function(e) {
            if (this.options.data = !0, e.id.isScoped || e.id.depth) throw new t.Exception("Scoped data references are not supported: " + e.original);
            this.opcode("lookupData");
            for (var n = e.id.parts,
            i = 0,
            o = n.length; o > i; i++) this.opcode("lookup", n[i])
        },
        STRING: function(t) {
            this.opcode("pushString", t.string)
        },
        INTEGER: function(t) {
            this.opcode("pushLiteral", t.integer)
        },
        BOOLEAN: function(t) {
            this.opcode("pushLiteral", t.bool)
        },
        comment: function() {},
        opcode: function(t) {
            this.opcodes.push({
                opcode: t,
                args: [].slice.call(arguments, 1)
            })
        },
        declare: function(t, e) {
            this.opcodes.push({
                opcode: "DECLARE",
                name: t,
                value: e
            })
        },
        addDepth: function(t) {
            if (isNaN(t)) throw new Error("EWOT");
            0 !== t && (this.depths[t] || (this.depths[t] = !0, this.depths.list.push(t)))
        },
        classifyMustache: function(t) {
            var e = t.isHelper,
            n = t.eligibleHelper,
            i = this.options;
            if (n && !e) {
                var o = t.id.parts[0];
                i.knownHelpers[o] ? e = !0 : i.knownHelpersOnly && (n = !1)
            }
            return e ? "helper": n ? "ambiguous": "simple"
        },
        pushParams: function(t) {
            for (var e, n = t.length; n--;) e = t[n],
            this.options.stringParams ? (e.depth && this.addDepth(e.depth), this.opcode("getContext", e.depth || 0), this.opcode("pushStringParam", e.stringModeValue, e.type)) : this[e.type](e)
        },
        setupMustacheParams: function(t) {
            var e = t.params;
            return this.pushParams(e),
            t.hash ? this.hash(t.hash) : this.opcode("emptyHash"),
            e
        },
        setupFullMustacheParams: function(t, e, n) {
            var i = t.params;
            return this.pushParams(i),
            this.opcode("pushProgram", e),
            this.opcode("pushProgram", n),
            t.hash ? this.hash(t.hash) : this.opcode("emptyHash"),
            i
        }
    };
    var p = function(t) {
        this.value = t
    };
    d.prototype = {
        nameLookup: function(t, e) {
            return /^[0-9]+$/.test(e) ? t + "[" + e + "]": d.isValidJavaScriptVariableName(e) ? t + "." + e: t + "['" + e + "']"
        },
        appendToBuffer: function(t) {
            return this.environment.isSimple ? "return " + t + ";": {
                appendToBuffer: !0,
                content: t,
                toString: function() {
                    return "buffer += " + t + ";"
                }
            }
        },
        initializeBuffer: function() {
            return this.quotedString("")
        },
        namespace: "Handlebars",
        compile: function(e, n, i, o) {
            this.environment = e,
            this.options = n || {},
            t.log(t.logger.DEBUG, this.environment.disassemble() + "\n\n"),
            this.name = this.environment.name,
            this.isChild = !!i,
            this.context = i || {
                programs: [],
                environments: [],
                aliases: {}
            },
            this.preamble(),
            this.stackSlot = 0,
            this.stackVars = [],
            this.registers = {
                list: []
            },
            this.compileStack = [],
            this.inlineStack = [],
            this.compileChildren(e, n);
            var a, r = e.opcodes;
            for (this.i = 0, y = r.length; this.i < y; this.i++) a = r[this.i],
            "DECLARE" === a.opcode ? this[a.name] = a.value: this[a.opcode].apply(this, a.args);
            return this.createFunctionContext(o)
        },
        nextOpcode: function() {
            var t = this.environment.opcodes;
            return t[this.i + 1]
        },
        eat: function() {
            this.i = this.i + 1
        },
        preamble: function() {
            var t = [];
            if (this.isChild) t.push("");
            else {
                var e = this.namespace,
                n = "helpers = this.merge(helpers, " + e + ".helpers);";
                this.environment.usePartial && (n = n + " partials = this.merge(partials, " + e + ".partials);"),
                this.options.data && (n += " data = data || {};"),
                t.push(n)
            }
            this.environment.isSimple ? t.push("") : t.push(", buffer = " + this.initializeBuffer()),
            this.lastContext = 0,
            this.source = t
        },
        createFunctionContext: function(e) {
            var n = this.stackVars.concat(this.registers.list);
            if (n.length > 0 && (this.source[1] = this.source[1] + ", " + n.join(", ")), !this.isChild) for (var i in this.context.aliases) this.context.aliases.hasOwnProperty(i) && (this.source[1] = this.source[1] + ", " + i + "=" + this.context.aliases[i]);
            this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"),
            this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"),
            this.environment.isSimple || this.source.push("return buffer;");
            for (var o = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"], a = 0, r = this.environment.depths.list.length; r > a; a++) o.push("depth" + this.environment.depths.list[a]);
            var s = this.mergeSource();
            if (!this.isChild) {
                var l = t.COMPILER_REVISION,
                u = t.REVISION_CHANGES[l];
                s = "this.compilerInfo = [" + l + ",'" + u + "'];\n" + s
            }
            if (e) return o.push(s),
            Function.apply(this, o);
            var c = "function " + (this.name || "") + "(" + o.join(",") + ") {\n  " + s + "}";
            return t.log(t.logger.DEBUG, c + "\n\n"),
            c
        },
        mergeSource: function() {
            for (var t, n = "",
            i = 0,
            o = this.source.length; o > i; i++) {
                var a = this.source[i];
                a.appendToBuffer ? t = t ? t + "\n    + " + a.content: a.content: (t && (n += "buffer += " + t + ";\n  ", t = e), n += a + "\n  ")
            }
            return n
        },
        blockValue: function() {
            this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
            var t = ["depth0"];
            this.setupParams(0, t),
            this.replaceStack(function(e) {
                return t.splice(1, 0, e),
                "blockHelperMissing.call(" + t.join(", ") + ")"
            })
        },
        ambiguousBlockValue: function() {
            this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
            var t = ["depth0"];
            this.setupParams(0, t);
            var e = this.topStack();
            t.splice(1, 0, e),
            t[t.length - 1] = "options",
            this.source.push("if (!" + this.lastHelper + ") { " + e + " = blockHelperMissing.call(" + t.join(", ") + "); }")
        },
        appendContent: function(t) {
            this.source.push(this.appendToBuffer(this.quotedString(t)))
        },
        append: function() {
            this.flushInline();
            var t = this.popStack();
            this.source.push("if(" + t + " || " + t + " === 0) { " + this.appendToBuffer(t) + " }"),
            this.environment.isSimple && this.source.push("else { " + this.appendToBuffer("''") + " }")
        },
        appendEscaped: function() {
            this.context.aliases.escapeExpression = "this.escapeExpression",
            this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
        },
        getContext: function(t) {
            this.lastContext !== t && (this.lastContext = t)
        },
        lookupOnContext: function(t) {
            this.push(this.nameLookup("depth" + this.lastContext, t, "context"))
        },
        pushContext: function() {
            this.pushStackLiteral("depth" + this.lastContext)
        },
        resolvePossibleLambda: function() {
            this.context.aliases.functionType = '"function"',
            this.replaceStack(function(t) {
                return "typeof " + t + " === functionType ? " + t + ".apply(depth0) : " + t
            })
        },
        lookup: function(t) {
            this.replaceStack(function(e) {
                return e + " == null || " + e + " === false ? " + e + " : " + this.nameLookup(e, t, "context")
            })
        },
        lookupData: function() {
            this.push("data")
        },
        pushStringParam: function(t, e) {
            this.pushStackLiteral("depth" + this.lastContext),
            this.pushString(e),
            "string" == typeof t ? this.pushString(t) : this.pushStackLiteral(t)
        },
        emptyHash: function() {
            this.pushStackLiteral("{}"),
            this.options.stringParams && (this.register("hashTypes", "{}"), this.register("hashContexts", "{}"))
        },
        pushHash: function() {
            this.hash = {
                values: [],
                types: [],
                contexts: []
            }
        },
        popHash: function() {
            var t = this.hash;
            this.hash = e,
            this.options.stringParams && (this.register("hashContexts", "{" + t.contexts.join(",") + "}"), this.register("hashTypes", "{" + t.types.join(",") + "}")),
            this.push("{\n    " + t.values.join(",\n    ") + "\n  }")
        },
        pushString: function(t) {
            this.pushStackLiteral(this.quotedString(t))
        },
        push: function(t) {
            return this.inlineStack.push(t),
            t
        },
        pushLiteral: function(t) {
            this.pushStackLiteral(t)
        },
        pushProgram: function(t) {
            null != t ? this.pushStackLiteral(this.programExpression(t)) : this.pushStackLiteral(null)
        },
        invokeHelper: function(t, e) {
            this.context.aliases.helperMissing = "helpers.helperMissing";
            var n = this.lastHelper = this.setupHelper(t, e, !0),
            i = this.nameLookup("depth" + this.lastContext, e, "context");
            this.push(n.name + " || " + i),
            this.replaceStack(function(t) {
                return t + " ? " + t + ".call(" + n.callParams + ") " + ": helperMissing.call(" + n.helperMissingParams + ")"
            })
        },
        invokeKnownHelper: function(t, e) {
            var n = this.setupHelper(t, e);
            this.push(n.name + ".call(" + n.callParams + ")")
        },
        invokeAmbiguous: function(t, e) {
            this.context.aliases.functionType = '"function"',
            this.pushStackLiteral("{}");
            var n = this.setupHelper(0, t, e),
            i = this.lastHelper = this.nameLookup("helpers", t, "helper"),
            o = this.nameLookup("depth" + this.lastContext, t, "context"),
            a = this.nextStack();
            this.source.push("if (" + a + " = " + i + ") { " + a + " = " + a + ".call(" + n.callParams + "); }"),
            this.source.push("else { " + a + " = " + o + "; " + a + " = typeof " + a + " === functionType ? " + a + ".apply(depth0) : " + a + "; }")
        },
        invokePartial: function(t) {
            var e = [this.nameLookup("partials", t, "partial"), "'" + t + "'", this.popStack(), "helpers", "partials"];
            this.options.data && e.push("data"),
            this.context.aliases.self = "this",
            this.push("self.invokePartial(" + e.join(", ") + ")")
        },
        assignToHash: function(t) {
            var e, n, i = this.popStack();
            this.options.stringParams && (n = this.popStack(), e = this.popStack());
            var o = this.hash;
            e && o.contexts.push("'" + t + "': " + e),
            n && o.types.push("'" + t + "': " + n),
            o.values.push("'" + t + "': (" + i + ")")
        },
        compiler: d,
        compileChildren: function(t, e) {
            for (var n, i, o = t.children,
            a = 0,
            r = o.length; r > a; a++) {
                n = o[a],
                i = new this.compiler;
                var s = this.matchExistingProgram(n);
                null == s ? (this.context.programs.push(""), s = this.context.programs.length, n.index = s, n.name = "program" + s, this.context.programs[s] = i.compile(n, e, this.context), this.context.environments[s] = n) : (n.index = s, n.name = "program" + s)
            }
        },
        matchExistingProgram: function(t) {
            for (var e = 0,
            n = this.context.environments.length; n > e; e++) {
                var i = this.context.environments[e];
                if (i && i.equals(t)) return e
            }
        },
        programExpression: function(t) {
            if (this.context.aliases.self = "this", null == t) return "self.noop";
            for (var e, n = this.environment.children[t], i = n.depths.list, o = [n.index, n.name, "data"], a = 0, r = i.length; r > a; a++) e = i[a],
            1 === e ? o.push("depth0") : o.push("depth" + (e - 1));
            return (0 === i.length ? "self.program(": "self.programWithDepth(") + o.join(", ") + ")"
        },
        register: function(t, e) {
            this.useRegister(t),
            this.source.push(t + " = " + e + ";")
        },
        useRegister: function(t) {
            this.registers[t] || (this.registers[t] = !0, this.registers.list.push(t))
        },
        pushStackLiteral: function(t) {
            return this.push(new p(t))
        },
        pushStack: function(t) {
            this.flushInline();
            var e = this.incrStack();
            return t && this.source.push(e + " = " + t + ";"),
            this.compileStack.push(e),
            e
        },
        replaceStack: function(t) {
            var e, n = "",
            i = this.isInline();
            if (i) {
                var o = this.popStack(!0);
                if (o instanceof p) e = o.value;
                else {
                    var a = this.stackSlot ? this.topStackName() : this.incrStack();
                    n = "(" + this.push(a) + " = " + o + "),",
                    e = this.topStack()
                }
            } else e = this.topStack();
            var r = t.call(this, e);
            return i ? ((this.inlineStack.length || this.compileStack.length) && this.popStack(), this.push("(" + n + r + ")")) : (/^stack/.test(e) || (e = this.nextStack()), this.source.push(e + " = (" + n + r + ");")),
            e
        },
        nextStack: function() {
            return this.pushStack()
        },
        incrStack: function() {
            return this.stackSlot++,
            this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot),
            this.topStackName()
        },
        topStackName: function() {
            return "stack" + this.stackSlot
        },
        flushInline: function() {
            var t = this.inlineStack;
            if (t.length) {
                this.inlineStack = [];
                for (var e = 0,
                n = t.length; n > e; e++) {
                    var i = t[e];
                    i instanceof p ? this.compileStack.push(i) : this.pushStack(i)
                }
            }
        },
        isInline: function() {
            return this.inlineStack.length
        },
        popStack: function(t) {
            var e = this.isInline(),
            n = (e ? this.inlineStack: this.compileStack).pop();
            return ! t && n instanceof p ? n.value: (e || this.stackSlot--, n)
        },
        topStack: function(t) {
            var e = this.isInline() ? this.inlineStack: this.compileStack,
            n = e[e.length - 1];
            return ! t && n instanceof p ? n.value: n
        },
        quotedString: function(t) {
            return '"' + t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
        },
        setupHelper: function(t, e, n) {
            var i = [];
            this.setupParams(t, i, n);
            var o = this.nameLookup("helpers", e, "helper");
            return {
                params: i,
                name: o,
                callParams: ["depth0"].concat(i).join(", "),
                helperMissingParams: n && ["depth0", this.quotedString(e)].concat(i).join(", ")
            }
        },
        setupParams: function(t, e, n) {
            var i, o, a, r = [],
            s = [],
            l = [];
            r.push("hash:" + this.popStack()),
            o = this.popStack(),
            a = this.popStack(),
            (a || o) && (a || (this.context.aliases.self = "this", a = "self.noop"), o || (this.context.aliases.self = "this", o = "self.noop"), r.push("inverse:" + o), r.push("fn:" + a));
            for (var u = 0; t > u; u++) i = this.popStack(),
            e.push(i),
            this.options.stringParams && (l.push(this.popStack()), s.push(this.popStack()));
            return this.options.stringParams && (r.push("contexts:[" + s.join(",") + "]"), r.push("types:[" + l.join(",") + "]"), r.push("hashContexts:hashContexts"), r.push("hashTypes:hashTypes")),
            this.options.data && r.push("data:data"),
            r = "{" + r.join(",") + "}",
            n ? (this.register("options", r), e.push("options")) : e.push(r),
            e.join(", ")
        }
    };
    for (var f = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), m = d.RESERVED_WORDS = {},
    g = 0, y = f.length; y > g; g++) m[f[g]] = !0;
    d.isValidJavaScriptVariableName = function(t) {
        return ! d.RESERVED_WORDS[t] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(t) ? !0 : !1
    },
    t.precompile = function(e, n) {
        if (null == e || "string" != typeof e && e.constructor !== t.AST.ProgramNode) throw new t.Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + e);
        n = n || {},
        "data" in n || (n.data = !0);
        var i = t.parse(e),
        o = (new h).compile(i, n);
        return (new d).compile(o, n)
    },
    t.compile = function(n, i) {
        function o() {
            var o = t.parse(n),
            a = (new h).compile(o, i),
            r = (new d).compile(a, i, e, !0);
            return t.template(r)
        }
        if (null == n || "string" != typeof n && n.constructor !== t.AST.ProgramNode) throw new t.Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + n);
        i = i || {},
        "data" in i || (i.data = !0);
        var a;
        return function(t, e) {
            return a || (a = o()),
            a.call(this, t, e)
        }
    },
    t.VM = {
        template: function(e) {
            var n = {
                escapeExpression: t.Utils.escapeExpression,
                invokePartial: t.VM.invokePartial,
                programs: [],
                program: function(e, n, i) {
                    var o = this.programs[e];
                    return i ? o = t.VM.program(e, n, i) : o || (o = this.programs[e] = t.VM.program(e, n)),
                    o
                },
                merge: function(e, n) {
                    var i = e || n;
                    return e && n && (i = {},
                    t.Utils.extend(i, n), t.Utils.extend(i, e)),
                    i
                },
                programWithDepth: t.VM.programWithDepth,
                noop: t.VM.noop,
                compilerInfo: null
            };
            return function(i, o) {
                o = o || {};
                var a = e.call(n, t, i, o.helpers, o.partials, o.data),
                r = n.compilerInfo || [],
                s = r[0] || 1,
                l = t.COMPILER_REVISION;
                if (s !== l) {
                    if (l > s) {
                        var u = t.REVISION_CHANGES[l],
                        c = t.REVISION_CHANGES[s];
                        throw "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + u + ") or downgrade your runtime to an older version (" + c + ")."
                    }
                    throw "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + r[1] + ")."
                }
                return a
            }
        },
        programWithDepth: function(t, e, n) {
            var i = Array.prototype.slice.call(arguments, 3),
            o = function(t, o) {
                return o = o || {},
                e.apply(this, [t, o.data || n].concat(i))
            };
            return o.program = t,
            o.depth = i.length,
            o
        },
        program: function(t, e, n) {
            var i = function(t, i) {
                return i = i || {},
                e(t, i.data || n)
            };
            return i.program = t,
            i.depth = 0,
            i
        },
        noop: function() {
            return ""
        },
        invokePartial: function(n, i, o, a, r, s) {
            var l = {
                helpers: a,
                partials: r,
                data: s
            };
            if (n === e) throw new t.Exception("The partial " + i + " could not be found");
            if (n instanceof Function) return n(o, l);
            if (t.compile) return r[i] = t.compile(n, {
                data: s !== e
            }),
            r[i](o, l);
            throw new t.Exception("The partial " + i + " could not be compiled when running in runtime-only mode")
        }
    },
    t.template = t.VM.template
} (Handlebars),
"function" != typeof Object.create && (Object.create = function(t) {
    function e() {}
    return e.prototype = t,
    new e
});
var ua = {
    toString: function() {
        return navigator.userAgent
    },
    test: function(t) {
        return this.toString().toLowerCase().indexOf(t.toLowerCase()) > -1
    }
};
ua.version = (ua.toString().toLowerCase().match(/[\s\S]+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
ua.webkit = ua.test("webkit"),
ua.gecko = ua.test("gecko") && !ua.webkit,
ua.opera = ua.test("opera"),
ua.ie = ua.test("msie") && !ua.opera,
ua.ie6 = ua.ie && document.compatMode && "undefined" == typeof document.documentElement.style.maxHeight,
ua.ie7 = ua.ie && document.documentElement && "undefined" != typeof document.documentElement.style.maxHeight && "undefined" == typeof XDomainRequest,
ua.ie8 = ua.ie && "undefined" != typeof XDomainRequest;
var domReady = function() {
    var t = [],
    e = function() {
        if (!arguments.callee.done) {
            arguments.callee.done = !0;
            for (var e = 0; e < t.length; e++) t[e]()
        }
    };
    return document.addEventListener && document.addEventListener("DOMContentLoaded", e, !1),
    ua.ie && (!
    function() {
        try {
            document.documentElement.doScroll("left")
        } catch(t) {
            return setTimeout(arguments.callee, 50),
            void 0
        }
        e()
    } (), document.onreadystatechange = function() {
        "complete" === document.readyState && (document.onreadystatechange = null, e())
    }),
    ua.webkit && document.readyState && !
    function() {
        "loading" !== document.readyState ? e() : setTimeout(arguments.callee, 10)
    } (),
    window.onload = e,
    function(e) {
        return "function" == typeof e && (t[t.length] = e),
        e
    }
} (),
cssHelper = function() {
    var t, e = {
        BLOCKS: /[^\s{][^{]*\{(?:[^{}]*\{[^{}]*\}[^{}]*|[^{}]*)*\}/g,
        BLOCKS_INSIDE: /[^\s{][^{]*\{[^{}]*\}/g,
        DECLARATIONS: /[a-zA-Z\-]+[^;]*:[^;]+;/g,
        RELATIVE_URLS: /url\(['"]?([^\/\)'"][^:\)'"]+)['"]?\)/g,
        REDUNDANT_COMPONENTS: /(?:\/\*([^*\\\\]|\*(?!\/))+\*\/|@import[^;]+;)/g,
        REDUNDANT_WHITESPACE: /\s*(,|:|;|\{|\})\s*/g,
        MORE_WHITESPACE: /\s{2,}/g,
        FINAL_SEMICOLONS: /;\}/g,
        NOT_WHITESPACE: /\S+/g
    },
    n = !1,
    i = [],
    o = function(t) {
        "function" == typeof t && (i[i.length] = t)
    },
    a = function() {
        for (var e = 0; e < i.length; e++) i[e](t)
    },
    r = {},
    s = function(t, e) {
        if (r[t]) {
            var n = r[t].listeners;
            if (n) for (var i = 0; i < n.length; i++) n[i](e)
        }
    },
    l = function(t, e, n) {
        if (ua.ie && !window.XMLHttpRequest && (window.XMLHttpRequest = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        }), !XMLHttpRequest) return "";
        var i = new XMLHttpRequest;
        try {
            i.open("get", t, !0),
            i.setRequestHeader("X_REQUESTED_WITH", "XMLHttpRequest")
        } catch(o) {
            return n(),
            void 0
        }
        var a = !1;
        setTimeout(function() {
            a = !0
        },
        5e3),
        document.documentElement.style.cursor = "progress",
        i.onreadystatechange = function() {
            4 !== i.readyState || a || (!i.status && "file:" === location.protocol || i.status >= 200 && i.status < 300 || 304 === i.status || navigator.userAgent.indexOf("Safari") > -1 && "undefined" == typeof i.status ? e(i.responseText) : n(), document.documentElement.style.cursor = "", i = null)
        },
        i.send("")
    },
    u = function(t) {
        return t = t.replace(e.REDUNDANT_COMPONENTS, ""),
        t = t.replace(e.REDUNDANT_WHITESPACE, "$1"),
        t = t.replace(e.MORE_WHITESPACE, " "),
        t = t.replace(e.FINAL_SEMICOLONS, "}")
    },
    c = {
        mediaQueryList: function(t) {
            var n = {},
            i = t.indexOf("{"),
            o = t.substring(0, i);
            t = t.substring(i + 1, t.length - 1);
            for (var a = [], r = [], s = o.toLowerCase().substring(7).split(","), l = 0; l < s.length; l++) a[a.length] = c.mediaQuery(s[l], n);
            var u = t.match(e.BLOCKS_INSIDE);
            if (null !== u) for (l = 0; l < u.length; l++) r[r.length] = c.rule(u[l], n);
            return n.getMediaQueries = function() {
                return a
            },
            n.getRules = function() {
                return r
            },
            n.getListText = function() {
                return o
            },
            n.getCssText = function() {
                return t
            },
            n
        },
        mediaQuery: function(t, n) {
            t = t || "";
            for (var i, o = !1,
            a = [], r = !0, s = t.match(e.NOT_WHITESPACE), l = 0; l < s.length; l++) {
                var u = s[l];
                if (i || "not" !== u && "only" !== u) if (i) {
                    if ("(" === u.charAt(0)) {
                        var c = u.substring(1, u.length - 1).split(":");
                        a[a.length] = {
                            mediaFeature: c[0],
                            value: c[1] || null
                        }
                    }
                } else i = u;
                else "not" === u && (o = !0)
            }
            return {
                getList: function() {
                    return n || null
                },
                getValid: function() {
                    return r
                },
                getNot: function() {
                    return o
                },
                getMediaType: function() {
                    return i
                },
                getExpressions: function() {
                    return a
                }
            }
        },
        rule: function(t, e) {
            for (var n = {},
            i = t.indexOf("{"), o = t.substring(0, i), a = o.split(","), r = [], s = t.substring(i + 1, t.length - 1).split(";"), l = 0; l < s.length; l++) r[r.length] = c.declaration(s[l], n);
            return n.getMediaQueryList = function() {
                return e || null
            },
            n.getSelectors = function() {
                return a
            },
            n.getSelectorText = function() {
                return o
            },
            n.getDeclarations = function() {
                return r
            },
            n.getPropertyValue = function(t) {
                for (var e = 0; e < r.length; e++) if (r[e].getProperty() === t) return r[e].getValue();
                return null
            },
            n
        },
        declaration: function(t, e) {
            var n = t.indexOf(":"),
            i = t.substring(0, n),
            o = t.substring(n + 1);
            return {
                getRule: function() {
                    return e || null
                },
                getProperty: function() {
                    return i
                },
                getValue: function() {
                    return o
                }
            }
        }
    },
    h = function(n) {
        if ("string" == typeof n.cssHelperText) {
            var i = {
                mediaQueryLists: [],
                rules: [],
                selectors: {},
                declarations: [],
                properties: {}
            },
            o = i.mediaQueryLists,
            a = i.rules,
            r = n.cssHelperText.match(e.BLOCKS);
            if (null !== r) for (var s = 0; s < r.length; s++)"@media " === r[s].substring(0, 7) ? (o[o.length] = c.mediaQueryList(r[s]), a = i.rules = a.concat(o[o.length - 1].getRules())) : a[a.length] = c.rule(r[s]);
            var l = i.selectors,
            u = function(t) {
                for (var e = t.getSelectors(), n = 0; n < e.length; n++) {
                    var i = e[n];
                    l[i] || (l[i] = []),
                    l[i][l[i].length] = t
                }
            };
            for (s = 0; s < a.length; s++) u(a[s]);
            var h = i.declarations;
            for (s = 0; s < a.length; s++) h = i.declarations = h.concat(a[s].getDeclarations());
            var d = i.properties;
            for (s = 0; s < h.length; s++) {
                var p = h[s].getProperty();
                d[p] || (d[p] = []),
                d[p][d[p].length] = h[s]
            }
            return n.cssHelperParsed = i,
            t[t.length] = n,
            i
        }
    },
    d = function(t, e) {
        return t.cssHelperText = u(e || t.innerHTML),
        h(t)
    },
    p = function() {
        n = !0,
        t = [];
        for (var i = [], o = function() {
            for (var t = 0; t < i.length; t++) h(i[t]);
            var e = document.getElementsByTagName("style");
            for (t = 0; t < e.length; t++) d(e[t]);
            n = !1,
            a()
        },
        r = document.getElementsByTagName("link"), s = 0; s < r.length; s++) {
            var c = r[s];
            c.getAttribute("rel").indexOf("style") > -1 && c.href && 0 !== c.href.length && !c.disabled && (i[i.length] = c)
        }
        if (i.length > 0) {
            var p = 0,
            f = function() {
                p++,
                p === i.length && o()
            },
            m = function(t) {
                var n = t.href;
                l(n,
                function(i) {
                    i = u(i).replace(e.RELATIVE_URLS, "url(" + n.substring(0, n.lastIndexOf("/")) + "/$1)"),
                    t.cssHelperText = i,
                    f()
                },
                f)
            };
            for (s = 0; s < i.length; s++) m(i[s])
        } else o()
    },
    f = {
        mediaQueryLists: "array",
        rules: "array",
        selectors: "object",
        declarations: "array",
        properties: "object"
    },
    m = {
        mediaQueryLists: null,
        rules: null,
        selectors: null,
        declarations: null,
        properties: null
    },
    g = function(t, e) {
        if (null !== m[t]) {
            if ("array" === f[t]) return m[t] = m[t].concat(e);
            var n = m[t];
            for (var i in e) e.hasOwnProperty(i) && (n[i] = n[i] ? n[i].concat(e[i]) : e[i]);
            return n
        }
    },
    y = function(e) {
        m[e] = "array" === f[e] ? [] : {};
        for (var n = 0; n < t.length; n++) g(e, t[n].cssHelperParsed[e]);
        return m[e]
    };
    domReady(function() {
        for (var t = document.body.getElementsByTagName("*"), e = 0; e < t.length; e++) t[e].checkedByCssHelper = !0;
        document.implementation.hasFeature("MutationEvents", "2.0") || window.MutationEvent ? document.body.addEventListener("DOMNodeInserted",
        function(t) {
            var e = t.target;
            1 === e.nodeType && (s("DOMElementInserted", e), e.checkedByCssHelper = !0)
        },
        !1) : setInterval(function() {
            for (var t = document.body.getElementsByTagName("*"), e = 0; e < t.length; e++) t[e].checkedByCssHelper || (s("DOMElementInserted", t[e]), t[e].checkedByCssHelper = !0)
        },
        1e3)
    });
    var v = function(t) {
        return "undefined" != typeof window.innerWidth ? window["inner" + t] : "undefined" != typeof document.documentElement && "undefined" != typeof document.documentElement.clientWidth && 0 != document.documentElement.clientWidth ? document.documentElement["client" + t] : void 0
    };
    return {
        addStyle: function(t, e) {
            var n = document.createElement("style");
            return n.setAttribute("type", "text/css"),
            document.getElementsByTagName("head")[0].appendChild(n),
            n.styleSheet ? n.styleSheet.cssText = t: n.appendChild(document.createTextNode(t)),
            n.addedWithCssHelper = !0,
            "undefined" == typeof e || e === !0 ? cssHelper.parsed(function() {
                var e = d(n, t);
                for (var i in e) e.hasOwnProperty(i) && g(i, e[i]);
                s("newStyleParsed", n)
            }) : n.parsingDisallowed = !0,
            n
        },
        removeStyle: function(t) {
            return t.parentNode.removeChild(t)
        },
        parsed: function(e) {
            n ? o(e) : "undefined" != typeof t ? "function" == typeof e && e(t) : (o(e), p())
        },
        mediaQueryLists: function(t) {
            cssHelper.parsed(function() {
                t(m.mediaQueryLists || y("mediaQueryLists"))
            })
        },
        rules: function(t) {
            cssHelper.parsed(function() {
                t(m.rules || y("rules"))
            })
        },
        selectors: function(t) {
            cssHelper.parsed(function() {
                t(m.selectors || y("selectors"))
            })
        },
        declarations: function(t) {
            cssHelper.parsed(function() {
                t(m.declarations || y("declarations"))
            })
        },
        properties: function(t) {
            cssHelper.parsed(function() {
                t(m.properties || y("properties"))
            })
        },
        broadcast: s,
        addListener: function(t, e) {
            "function" == typeof e && (r[t] || (r[t] = {
                listeners: []
            }), r[t].listeners[r[t].listeners.length] = e)
        },
        removeListener: function(t, e) {
            if ("function" == typeof e && r[t]) for (var n = r[t].listeners, i = 0; i < n.length; i++) n[i] === e && (n.splice(i, 1), i -= 1)
        },
        getViewportWidth: function() {
            return v("Width")
        },
        getViewportHeight: function() {
            return v("Height")
        }
    }
} ();
domReady(function() {
    var t, e = {
        LENGTH_UNIT: /[0-9]+(em|ex|px|in|cm|mm|pt|pc)$/,
        RESOLUTION_UNIT: /[0-9]+(dpi|dpcm)$/,
        ASPECT_RATIO: /^[0-9]+\/[0-9]+$/,
        ABSOLUTE_VALUE: /^[0-9]*(\.[0-9]+)*$/
    },
    n = [],
    i = function() {
        var t = "css3-mediaqueries-test",
        e = document.createElement("div");
        e.id = t;
        var n = cssHelper.addStyle("@media all and (width) { #" + t + " { width: 1px !important; } }", !1);
        document.body.appendChild(e);
        var o = 1 === e.offsetWidth;
        return n.parentNode.removeChild(n),
        e.parentNode.removeChild(e),
        i = function() {
            return o
        },
        o
    },
    o = function() {
        t = document.createElement("div"),
        t.style.cssText = "position:absolute;top:-9999em;left:-9999em;margin:0;border:none;padding:0;width:1em;font-size:1em;",
        document.body.appendChild(t),
        16 !== t.offsetWidth && (t.style.fontSize = 16 / t.offsetWidth + "em"),
        t.style.width = ""
    },
    a = function(e) {
        t.style.width = e;
        var n = t.offsetWidth;
        return t.style.width = "",
        n
    },
    r = function(t, n) {
        var i = t.length,
        o = "min-" === t.substring(0, 4),
        r = !o && "max-" === t.substring(0, 4);
        if (null !== n) {
            var s, l;
            if (e.LENGTH_UNIT.exec(n)) s = "length",
            l = a(n);
            else if (e.RESOLUTION_UNIT.exec(n)) {
                s = "resolution",
                l = parseInt(n, 10);
                var u = n.substring((l + "").length)
            } else e.ASPECT_RATIO.exec(n) ? (s = "aspect-ratio", l = n.split("/")) : e.ABSOLUTE_VALUE ? (s = "absolute", l = n) : s = "unknown"
        }
        var c, h;
        if ("device-width" === t.substring(i - 12, i)) return c = screen.width,
        null !== n ? "length" === s ? o && c >= l || r && l > c || !o && !r && c === l: !1 : c > 0;
        if ("device-height" === t.substring(i - 13, i)) return h = screen.height,
        null !== n ? "length" === s ? o && h >= l || r && l > h || !o && !r && h === l: !1 : h > 0;
        if ("width" === t.substring(i - 5, i)) return c = document.documentElement.clientWidth || document.body.clientWidth,
        null !== n ? "length" === s ? o && c >= l || r && l > c || !o && !r && c === l: !1 : c > 0;
        if ("height" === t.substring(i - 6, i)) return h = document.documentElement.clientHeight || document.body.clientHeight,
        null !== n ? "length" === s ? o && h >= l || r && l > h || !o && !r && h === l: !1 : h > 0;
        if ("device-aspect-ratio" === t.substring(i - 19, i)) return "aspect-ratio" === s && screen.width * l[1] === screen.height * l[0];
        if ("color-index" === t.substring(i - 11, i)) {
            var d = Math.pow(2, screen.colorDepth);
            return null !== n ? "absolute" === s ? o && d >= l || r && l > d || !o && !r && d === l: !1 : d > 0
        }
        if ("color" === t.substring(i - 5, i)) {
            var p = screen.colorDepth;
            return null !== n ? "absolute" === s ? o && p >= l || r && l > p || !o && !r && p === l: !1 : p > 0
        }
        if ("resolution" === t.substring(i - 10, i)) {
            var f;
            return f = "dpcm" === u ? a("1cm") : a("1in"),
            null !== n ? "resolution" === s ? o && f >= l || r && l > f || !o && !r && f === l: !1 : f > 0
        }
        return ! 1
    },
    s = function(t) {
        var e = t.getValid(),
        n = t.getExpressions(),
        i = n.length;
        if (i > 0) {
            for (var o = 0; i > o && e; o++) e = r(n[o].mediaFeature, n[o].value);
            var a = t.getNot();
            return e && !a || a && !e
        }
    },
    l = function(t) {
        for (var e = t.getMediaQueries(), i = {},
        o = 0; o < e.length; o++) s(e[o]) && (i[e[o].getMediaType()] = !0);
        var a = [],
        r = 0;
        for (var l in i) i.hasOwnProperty(l) && (r > 0 && (a[r++] = ","), a[r++] = l);
        a.length > 0 && (n[n.length] = cssHelper.addStyle("@media " + a.join("") + "{" + t.getCssText() + "}", !1))
    },
    u = function(t) {
        for (var e = 0; e < t.length; e++) l(t[e]);
        ua.ie ? (document.documentElement.style.display = "block", setTimeout(function() {
            document.documentElement.style.display = ""
        },
        0), setTimeout(function() {
            cssHelper.broadcast("cssMediaQueriesTested")
        },
        100)) : cssHelper.broadcast("cssMediaQueriesTested")
    },
    c = function() {
        for (var t = 0; t < n.length; t++) cssHelper.removeStyle(n[t]);
        n = [],
        cssHelper.mediaQueryLists(u)
    },
    h = 0,
    d = function() {
        var t = cssHelper.getViewportWidth(),
        e = cssHelper.getViewportHeight();
        if (ua.ie) {
            var n = document.createElement("div");
            n.style.position = "absolute",
            n.style.top = "-9999em",
            n.style.overflow = "scroll",
            document.body.appendChild(n),
            h = n.offsetWidth - n.clientWidth,
            document.body.removeChild(n)
        }
        var o, a = function() {
            var n = cssHelper.getViewportWidth(),
            a = cssHelper.getViewportHeight(); (Math.abs(n - t) > h || Math.abs(a - e) > h) && (t = n, e = a, clearTimeout(o), o = setTimeout(function() {
                i() ? cssHelper.broadcast("cssMediaQueriesTested") : c()
            },
            500))
        };
        window.onresize = function() {
            var t = window.onresize ||
            function() {};
            return function() {
                t(),
                a()
            }
        } ()
    },
    p = document.documentElement;
    return p.style.marginLeft = "-32767px",
    setTimeout(function() {
        p.style.marginTop = ""
    },
    2e4),
    function() {
        i() ? p.style.marginLeft = "": (cssHelper.addListener("newStyleParsed",
        function(t) {
            u(t.cssHelperParsed.mediaQueryLists)
        }), cssHelper.addListener("cssMediaQueriesTested",
        function() {
            ua.ie && (p.style.width = "1px"),
            setTimeout(function() {
                p.style.width = "",
                p.style.marginLeft = ""
            },
            0),
            cssHelper.removeListener("cssMediaQueriesTested", arguments.callee)
        }), o(), c()),
        d()
    }
} ());
try {
    document.execCommand("BackgroundImageCache", !1, !0)
} catch(e) {}
var CSS_STYLE_LIST = ["background-position", "background-position-x", "background-position-y", "background-size", "height", "width", "bottom", "display", "left", "right", "top", "transform", "transform-origin"];
/*! Video.js v4.2.1 Copyright 2013 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */
!
function() {
    function m() {
        return function() {}
    }
    function p(t) {
        return function() {
            return this[t]
        }
    }
    function q(t) {
        return function() {
            return t
        }
    }
    function u(t, e, n) {
        if ("string" == typeof t) {
            if (0 === t.indexOf("#") && (t = t.slice(1)), u.wa[t]) return u.wa[t];
            t = u.v(t)
        }
        if (!t || !t.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
        return t.player || new u.w(t, e, n)
    }
    function D(t) {
        t.t("vjs-lock-showing")
    }
    function E(t, e, n, i) {
        return n !== b ? (t.a.style[e] = -1 !== ("" + n).indexOf("%") || -1 !== ("" + n).indexOf("px") ? n: "auto" === n ? "": n + "px", i || t.j("resize"), t) : t.a ? (n = t.a.style[e], i = n.indexOf("px"), -1 !== i ? parseInt(n.slice(0, i), 10) : parseInt(t.a["offset" + u.$(e)], 10)) : 0
    }
    function F(t, e) {
        var n, i, o, a;
        return n = t.a,
        i = u.Xc(n),
        a = o = n.offsetWidth,
        n = t.handle,
        t.g.zd ? (a = i.top, i = e.changedTouches ? e.changedTouches[0].pageY: e.pageY, n && (n = n.v().offsetHeight, a += n / 2, o -= n), Math.max(0, Math.min(1, (a - i + o) / o))) : (o = i.left, i = e.changedTouches ? e.changedTouches[0].pageX: e.pageX, n && (n = n.v().offsetWidth, o += n / 2, a -= n), Math.max(0, Math.min(1, (i - o) / a)))
    }
    function ca(t, e) {
        t.Z(e),
        e.d("click", u.bind(t,
        function() {
            D(this)
        }))
    }
    function H(t) {
        t.oa = f,
        t.va.m("vjs-lock-showing"),
        t.a.setAttribute("aria-pressed", f),
        t.J && 0 < t.J.length && t.J[0].v().focus()
    }
    function G(t) {
        t.oa = l,
        D(t.va),
        t.a.setAttribute("aria-pressed", l)
    }
    function da(t) {
        var e = {
            sources: [],
            tracks: []
        };
        if (u.k.B(e, u.wb(t)), t.hasChildNodes()) {
            var n, i, o, a;
            for (t = t.childNodes, o = 0, a = t.length; a > o; o++) n = t[o],
            i = n.nodeName.toLowerCase(),
            "source" === i ? e.sources.push(u.wb(n)) : "track" === i && e.tracks.push(u.wb(n))
        }
        return e
    }
    function J(t, e, n) {
        t.h ? (t.aa = l, t.h.D(), t.Db && (t.Db = l, clearInterval(t.Qa)), t.Eb && K(t), t.h = l) : "Html5" !== e && t.F && (t.a.removeChild(t.F), t.F.player = j, t.F = j),
        t.ia = e,
        t.aa = l;
        var i = u.k.B({
            source: n,
            parentEl: t.a
        },
        t.g[e.toLowerCase()]);
        n && (n.src == t.u.src && 0 < t.u.currentTime && (i.startTime = t.u.currentTime), t.u.src = n.src),
        t.h = new window.videojs[e](t, i),
        t.h.M(function() {
            if (this.b.Ta(), !this.l.progressEvents) {
                var t = this.b;
                t.Db = f,
                t.Qa = setInterval(u.bind(t,
                function() {
                    this.u.kb < this.buffered().end(0) ? this.j("progress") : 1 == this.Ia() && (clearInterval(this.Qa), this.j("progress"))
                }), 500),
                t.h.U("progress",
                function() {
                    this.l.progressEvents = f;
                    var t = this.b;
                    t.Db = l,
                    clearInterval(t.Qa)
                })
            }
            this.l.timeupdateEvents || (t = this.b, t.Eb = f, t.d("play", t.yc), t.d("pause", t.ya), t.h.U("timeupdate",
            function() {
                this.l.timeupdateEvents = f,
                K(this.b)
            }))
        })
    }
    function K(t) {
        t.Eb = l,
        t.ya(),
        t.n("play", t.yc),
        t.n("pause", t.ya)
    }
    function M(t, e, n) {
        if (t.h && !t.h.aa) t.h.M(function() {
            this[e](n)
        });
        else try {
            t.h[e](n)
        } catch(i) {
            throw u.log(i),
            i
        }
    }
    function L(t, e) {
        if (t.h && t.h.aa) try {
            return t.h[e]()
        } catch(n) {
            throw t.h[e] === b ? u.log("Video.js: " + e + " method not defined for " + t.ia + " playback technology.", n) : "TypeError" == n.name ? (u.log("Video.js: " + e + " unavailable on " + t.ia + " playback technology element.", n), t.h.aa = l) : u.log(n),
            n
        }
    }
    function N(t) {
        t.Zc = l,
        u.n(document, "keydown", t.hc),
        document.documentElement.style.overflow = t.Uc,
        u.t(document.body, "vjs-full-window"),
        t.j("exitFullWindow")
    }
    function I(t, e) {
        return e !== b ? (e = !!e, e !== t.Ob && ((t.Ob = e) ? (t.ja = f, t.t("vjs-user-inactive"), t.m("vjs-user-active"), t.j("useractive")) : (t.ja = l, t.h.U("mousemove",
        function(t) {
            t.stopPropagation(),
            t.preventDefault()
        }), t.t("vjs-user-active"), t.m("vjs-user-inactive"), t.j("userinactive"))), t) : t.Ob
    }
    function ea() {
        var t = u.media.Ua[i];
        return function() {
            throw Error('The "' + t + "\" method is not available on the playback technology's API")
        }
    }
    function fa() {
        var t = S[U],
        e = t.charAt(0).toUpperCase() + t.slice(1);
        R["set" + e] = function(e) {
            return this.a.vjs_setProperty(t, e)
        }
    }
    function V(t) {
        R[t] = function() {
            return this.a.vjs_getProperty(t)
        }
    }
    function W(t) {
        return t.za = t.za || [],
        t.za
    }
    function X(t, e, n) {
        for (var i, o, a = t.za,
        r = 0,
        s = a.length; s > r; r++) i = a[r],
        i.id() === e ? (i.show(), o = i) : n && i.K() == n && 0 < i.mode() && i.disable(); (e = o ? o.K() : n ? n: l) && t.j(e + "trackchange")
    }
    function Y(t) {
        0 === t.ha && t.load(),
        0 === t.ga && (t.b.d("timeupdate", u.bind(t, t.update, t.Q)), t.b.d("ended", u.bind(t, t.reset, t.Q)), ("captions" === t.A || "subtitles" === t.A) && t.b.V.textTrackDisplay.Z(t))
    }
    function ga(t) {
        var e = t.split(":");
        t = 0;
        var n, i, o;
        return 3 == e.length ? (n = e[0], i = e[1], e = e[2]) : (n = 0, i = e[0], e = e[1]),
        e = e.split(/\s+/),
        e = e.splice(0, 1)[0],
        e = e.split(/\.|,/),
        o = parseFloat(e[1]),
        e = e[0],
        t += 3600 * parseFloat(n),
        t += 60 * parseFloat(i),
        t += parseFloat(e),
        o && (t += o / 1e3),
        t
    }
    function $(t, e) {
        var n = t.split("."),
        i = ha; ! (n[0] in i) && i.execScript && i.execScript("var " + n[0]);
        for (var o; n.length && (o = n.shift());) n.length || e === b ? i = i[o] ? i[o] : i[o] = {}: i[o] = e
    }
    var b = void 0,
    f = !0,
    j = null,
    l = !1,
    t;
    document.createElement("video"),
    document.createElement("audio"),
    document.createElement("track");
    var v = u;
    window.Qd = window.Rd = u,
    u.Rb = "4.2",
    u.Bc = "https:" == document.location.protocol ? "https://": "http://",
    u.options = {
        techOrder: ["html5", "flash"],
        html5: {},
        flash: {},
        width: 300,
        height: 150,
        defaultVolume: 0,
        children: {
            mediaLoader: {},
            posterImage: {},
            textTrackDisplay: {},
            loadingSpinner: {},
            bigPlayButton: {},
            controlBar: {}
        },
        notSupportedMessage: 'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'
    },
    "GENERATED_CDN_VSN" !== u.Rb && (v.options.flash.swf = u.Bc + "vjs.zencdn.net/" + u.Rb + "/video-js.swf"),
    u.wa = {},
    u.ka = u.CoreObject = m(),
    u.ka.extend = function(t) {
        var e, n;
        t = t || {},
        e = t.init || t.i || this.prototype.init || this.prototype.i || m(),
        n = function() {
            e.apply(this, arguments)
        },
        n.prototype = u.k.create(this.prototype),
        n.prototype.constructor = n,
        n.extend = u.ka.extend,
        n.create = u.ka.create;
        for (var i in t) t.hasOwnProperty(i) && (n.prototype[i] = t[i]);
        return n
    },
    u.ka.create = function() {
        var t = u.k.create(this.prototype);
        return this.apply(t, arguments),
        t
    },
    u.d = function(t, e, n) {
        var i = u.getData(t);
        i.z || (i.z = {}),
        i.z[e] || (i.z[e] = []),
        n.s || (n.s = u.s++),
        i.z[e].push(n),
        i.W || (i.disabled = l, i.W = function(e) {
            if (!i.disabled) {
                e = u.gc(e);
                var n = i.z[e.type];
                if (n) for (var n = n.slice(0), o = 0, a = n.length; a > o && !e.lc(); o++) n[o].call(t, e)
            }
        }),
        1 == i.z[e].length && (document.addEventListener ? t.addEventListener(e, i.W, l) : document.attachEvent && t.attachEvent("on" + e, i.W))
    },
    u.n = function(t, e, n) {
        if (u.kc(t)) {
            var i = u.getData(t);
            if (i.z) if (e) {
                var o = i.z[e];
                if (o) {
                    if (n) {
                        if (n.s) for (i = 0; i < o.length; i++) o[i].s === n.s && o.splice(i--, 1)
                    } else i.z[e] = [];
                    u.dc(t, e)
                }
            } else for (o in i.z) e = o,
            i.z[e] = [],
            u.dc(t, e)
        }
    },
    u.dc = function(t, e) {
        var n = u.getData(t);
        0 === n.z[e].length && (delete n.z[e], document.removeEventListener ? t.removeEventListener(e, n.W, l) : document.detachEvent && t.detachEvent("on" + e, n.W)),
        u.Ab(n.z) && (delete n.z, delete n.W, delete n.disabled),
        u.Ab(n) && u.qc(t)
    },
    u.gc = function(t) {
        function e() {
            return f
        }
        function n() {
            return l
        }
        if (!t || !t.Bb) {
            var i = t || window.event;
            t = {};
            for (var o in i)"layerX" !== o && "layerY" !== o && (t[o] = i[o]);
            if (t.target || (t.target = t.srcElement || document), t.relatedTarget = t.fromElement === t.target ? t.toElement: t.fromElement, t.preventDefault = function() {
                i.preventDefault && i.preventDefault(),
                t.returnValue = l,
                t.zb = e
            },
            t.zb = n, t.stopPropagation = function() {
                i.stopPropagation && i.stopPropagation(),
                t.cancelBubble = f,
                t.Bb = e
            },
            t.Bb = n, t.stopImmediatePropagation = function() {
                i.stopImmediatePropagation && i.stopImmediatePropagation(),
                t.lc = e,
                t.stopPropagation()
            },
            t.lc = n, t.clientX != j) {
                o = document.documentElement;
                var a = document.body;
                t.pageX = t.clientX + (o && o.scrollLeft || a && a.scrollLeft || 0) - (o && o.clientLeft || a && a.clientLeft || 0),
                t.pageY = t.clientY + (o && o.scrollTop || a && a.scrollTop || 0) - (o && o.clientTop || a && a.clientTop || 0)
            }
            t.which = t.charCode || t.keyCode,
            t.button != j && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
        }
        return t
    },
    u.j = function(t, e) {
        var n = u.kc(t) ? u.getData(t) : {},
        i = t.parentNode || t.ownerDocument;
        return "string" == typeof e && (e = {
            type: e,
            target: t
        }),
        e = u.gc(e),
        n.W && n.W.call(t, e),
        i && !e.Bb() && e.bubbles !== l ? u.j(i, e) : i || e.zb() || (n = u.getData(e.target), !e.target[e.type]) || (n.disabled = f, "function" == typeof e.target[e.type] && e.target[e.type](), n.disabled = l),
        !e.zb()
    },
    u.U = function(t, e, n) {
        function i() {
            u.n(t, e, i),
            n.apply(this, arguments)
        }
        i.s = n.s = n.s || u.s++,
        u.d(t, e, i)
    };
    var w = Object.prototype.hasOwnProperty;
    u.e = function(t, e) {
        var n, i;
        n = document.createElement(t || "div");
        for (i in e) w.call(e, i) && ( - 1 !== i.indexOf("aria-") || "role" == i ? n.setAttribute(i, e[i]) : n[i] = e[i]);
        return n
    },
    u.$ = function(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    },
    u.k = {},
    u.k.create = Object.create ||
    function(t) {
        function e() {}
        return e.prototype = t,
        new e
    },
    u.k.ta = function(t, e, n) {
        for (var i in t) w.call(t, i) && e.call(n || this, i, t[i])
    },
    u.k.B = function(t, e) {
        if (!e) return t;
        for (var n in e) w.call(e, n) && (t[n] = e[n]);
        return t
    },
    u.k.fc = function(t, e) {
        var n, i, o;
        t = u.k.copy(t);
        for (n in e) w.call(e, n) && (i = t[n], o = e[n], t[n] = u.k.mc(i) && u.k.mc(o) ? u.k.fc(i, o) : e[n]);
        return t
    },
    u.k.copy = function(t) {
        return u.k.B({},
        t)
    },
    u.k.mc = function(t) {
        return !! t && "object" == typeof t && "[object Object]" === t.toString() && t.constructor === Object
    },
    u.bind = function(t, e, n) {
        function i() {
            return e.apply(t, arguments)
        }
        return e.s || (e.s = u.s++),
        i.s = n ? n + "_" + e.s: e.s,
        i
    },
    u.qa = {},
    u.s = 1,
    u.expando = "vdata" + (new Date).getTime(),
    u.getData = function(t) {
        var e = t[u.expando];
        return e || (e = t[u.expando] = u.s++, u.qa[e] = {}),
        u.qa[e]
    },
    u.kc = function(t) {
        return t = t[u.expando],
        !(!t || u.Ab(u.qa[t]))
    },
    u.qc = function(t) {
        var e = t[u.expando];
        if (e) {
            delete u.qa[e];
            try {
                delete t[u.expando]
            } catch(n) {
                t.removeAttribute ? t.removeAttribute(u.expando) : t[u.expando] = j
            }
        }
    },
    u.Ab = function(t) {
        for (var e in t) if (t[e] !== j) return l;
        return f
    },
    u.m = function(t, e) { - 1 == (" " + t.className + " ").indexOf(" " + e + " ") && (t.className = "" === t.className ? e: t.className + " " + e)
    },
    u.t = function(t, e) {
        var n, i;
        if ( - 1 != t.className.indexOf(e)) {
            for (n = t.className.split(" "), i = n.length - 1; i >= 0; i--) n[i] === e && n.splice(i, 1);
            t.className = n.join(" ")
        }
    },
    u.ma = u.e("video"),
    u.G = navigator.userAgent,
    u.Hc = /iPhone/i.test(u.G),
    u.Gc = /iPad/i.test(u.G),
    u.Ic = /iPod/i.test(u.G),
    u.Fc = u.Hc || u.Gc || u.Ic;
    var aa = u,
    x, y = u.G.match(/OS (\d+)_/i);
    x = y && y[1] ? y[1] : b,
    aa.Cd = x,
    u.Dc = /Android/i.test(u.G);
    var ba = u,
    z, A = u.G.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
    B,
    C;
    A ? (B = A[1] && parseFloat(A[1]), C = A[2] && parseFloat(A[2]), z = B && C ? parseFloat(A[1] + "." + A[2]) : B ? B: j) : z = j,
    ba.Cc = z,
    u.Jc = u.Dc && /webkit/i.test(u.G) && 2.3 > u.Cc,
    u.Ec = /Firefox/i.test(u.G),
    u.Dd = /Chrome/i.test(u.G),
    u.Mc = "ontouchstart" in window,
    u.wb = function(t) {
        var e, n, i, o;
        if (e = {},
        t && t.attributes && 0 < t.attributes.length) {
            n = t.attributes;
            for (var a = n.length - 1; a >= 0; a--) i = n[a].name,
            o = n[a].value,
            ("boolean" == typeof t[i] || -1 !== ",autoplay,controls,loop,muted,default,".indexOf("," + i + ",")) && (o = o !== j ? f: l),
            e[i] = o
        }
        return e
    },
    u.Hd = function(t, e) {
        var n = "";
        return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "").getPropertyValue(e) : t.currentStyle && (n = t["client" + e.substr(0, 1).toUpperCase() + e.substr(1)] + "px"),
        n
    },
    u.yb = function(t, e) {
        e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
    },
    u.Nb = {},
    u.v = function(t) {
        return 0 === t.indexOf("#") && (t = t.slice(1)),
        document.getElementById(t)
    },
    u.Ka = function(t, e) {
        e = e || t;
        var n = Math.floor(t % 60),
        i = Math.floor(t / 60 % 60),
        o = Math.floor(t / 3600),
        a = Math.floor(e / 60 % 60),
        r = Math.floor(e / 3600);
        return (isNaN(t) || 1 / 0 === t) && (o = i = n = "-"),
        o = o > 0 || r > 0 ? o + ":": "",
        o + (((o || a >= 10) && 10 > i ? "0" + i: i) + ":") + (10 > n ? "0" + n: n)
    },
    u.Pc = function() {
        document.body.focus(),
        document.onselectstart = q(l)
    },
    u.yd = function() {
        document.onselectstart = q(f)
    },
    u.trim = function(t) {
        return (t + "").replace(/^\s+|\s+$/g, "")
    },
    u.round = function(t, e) {
        return e || (e = 0),
        Math.round(t * Math.pow(10, e)) / Math.pow(10, e)
    },
    u.sb = function(t, e) {
        return {
            length: 1,
            start: function() {
                return t
            },
            end: function() {
                return e
            }
        }
    },
    u.get = function(t, e, n) {
        var i, o;
        "undefined" == typeof XMLHttpRequest && (window.XMLHttpRequest = function() {
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch(t) {}
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch(e) {}
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP")
            } catch(n) {}
            throw Error("This browser does not support XMLHttpRequest.")
        }),
        o = new XMLHttpRequest;
        try {
            o.open("GET", t)
        } catch(a) {
            n(a)
        }
        i = 0 === t.indexOf("file:") || 0 === window.location.href.indexOf("file:") && -1 === t.indexOf("http"),
        o.onreadystatechange = function() {
            4 === o.readyState && (200 === o.status || i && 0 === o.status ? e(o.responseText) : n && n())
        };
        try {
            o.send()
        } catch(r) {
            n && n(r)
        }
    },
    u.qd = function(t) {
        try {
            var e = window.localStorage || l;
            e && (e.volume = t)
        } catch(n) {
            22 == n.code || 1014 == n.code ? u.log("LocalStorage Full (VideoJS)", n) : 18 == n.code ? u.log("LocalStorage not allowed (VideoJS)", n) : u.log("LocalStorage Error (VideoJS)", n)
        }
    },
    u.ic = function(t) {
        return t.match(/^https?:\/\//) || (t = u.e("div", {
            innerHTML: '<a href="' + t + '">x</a>'
        }).firstChild.href),
        t
    },
    u.log = function() {
        u.log.history = u.log.history || [],
        u.log.history.push(arguments),
        window.console && window.console.log(Array.prototype.slice.call(arguments))
    },
    u.Xc = function(t) {
        var e, n;
        return t.getBoundingClientRect && t.parentNode && (e = t.getBoundingClientRect()),
        e ? (t = document.documentElement, n = document.body, {
            left: e.left + (window.pageXOffset || n.scrollLeft) - (t.clientLeft || n.clientLeft || 0),
            top: e.top + (window.pageYOffset || n.scrollTop) - (t.clientTop || n.clientTop || 0)
        }) : {
            left: 0,
            top: 0
        }
    },
    u.c = u.ka.extend({
        i: function(t, e, n) {
            if (this.b = t, this.g = u.k.copy(this.g), e = this.options(e), this.Q = e.id || (e.el && e.el.id ? e.el.id: t.id() + "_component_" + u.s++), this.cd = e.name || j, this.a = e.el || this.e(), this.H = [], this.pb = {},
            this.V = {},
            (t = this.g) && t.children) {
                var i = this;
                u.k.ta(t.children,
                function(t, e) {
                    e !== l && !e.loadEvent && (i[t] = i.Z(t, e))
                })
            }
            this.M(n)
        }
    }),
    t = u.c.prototype,
    t.D = function() {
        if (this.j("dispose"), this.H) for (var t = this.H.length - 1; t >= 0; t--) this.H[t].D && this.H[t].D();
        this.V = this.pb = this.H = j,
        this.n(),
        this.a.parentNode && this.a.parentNode.removeChild(this.a),
        u.qc(this.a),
        this.a = j
    },
    t.L = p("b"),
    t.options = function(t) {
        return t === b ? this.g: this.g = u.k.fc(this.g, t)
    },
    t.e = function(t, e) {
        return u.e(t, e)
    },
    t.v = p("a"),
    t.id = p("Q"),
    t.name = p("cd"),
    t.children = p("H"),
    t.Z = function(t, e) {
        var n, i;
        return "string" == typeof t ? (i = t, e = e || {},
        n = e.componentClass || u.$(i), e.name = i, n = new window.videojs[n](this.b || this, e)) : n = t,
        this.H.push(n),
        "function" == typeof n.id && (this.pb[n.id()] = n),
        (i = i || n.name && n.name()) && (this.V[i] = n),
        "function" == typeof n.el && n.el() && (this.ra || this.a).appendChild(n.el()),
        n
    },
    t.removeChild = function(t) {
        if ("string" == typeof t && (t = this.V[t]), t && this.H) {
            for (var e = l,
            n = this.H.length - 1; n >= 0; n--) if (this.H[n] === t) {
                e = f,
                this.H.splice(n, 1);
                break
            }
            e && (this.pb[t.id] = j, this.V[t.name] = j, (e = t.v()) && e.parentNode === (this.ra || this.a) && (this.ra || this.a).removeChild(t.v()))
        }
    },
    t.T = q(""),
    t.d = function(t, e) {
        return u.d(this.a, t, u.bind(this, e)),
        this
    },
    t.n = function(t, e) {
        return u.n(this.a, t, e),
        this
    },
    t.U = function(t, e) {
        return u.U(this.a, t, u.bind(this, e)),
        this
    },
    t.j = function(t, e) {
        return u.j(this.a, t, e),
        this
    },
    t.M = function(t) {
        return t && (this.aa ? t.call(this) : (this.Ra === b && (this.Ra = []), this.Ra.push(t))),
        this
    },
    t.Ta = function() {
        this.aa = f;
        var t = this.Ra;
        if (t && 0 < t.length) {
            for (var e = 0,
            n = t.length; n > e; e++) t[e].call(this);
            this.Ra = [],
            this.j("ready")
        }
    },
    t.m = function(t) {
        return u.m(this.a, t),
        this
    },
    t.t = function(t) {
        return u.t(this.a, t),
        this
    },
    t.show = function() {
        return this.a.style.display = "block",
        this
    },
    t.C = function() {
        return this.a.style.display = "none",
        this
    },
    t.disable = function() {
        this.C(),
        this.show = m()
    },
    t.width = function(t, e) {
        return E(this, "width", t, e)
    },
    t.height = function(t, e) {
        return E(this, "height", t, e)
    },
    t.Tc = function(t, e) {
        return this.width(t, f).height(e)
    },
    u.q = u.c.extend({
        i: function(t, e) {
            u.c.call(this, t, e);
            var n = l;
            this.d("touchstart",
            function(t) {
                t.preventDefault(),
                n = f
            }),
            this.d("touchmove",
            function() {
                n = l
            });
            var i = this;
            this.d("touchend",
            function(t) {
                n && i.p(t),
                t.preventDefault()
            }),
            this.d("click", this.p),
            this.d("focus", this.Na),
            this.d("blur", this.Ma)
        }
    }),
    t = u.q.prototype,
    t.e = function(t, e) {
        return e = u.k.B({
            className: this.T(),
            innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">' + (this.pa || "Need Text") + "</span></div>",
            nd: "button",
            "aria-live": "polite",
            tabIndex: 0
        },
        e),
        u.c.prototype.e.call(this, t, e)
    },
    t.T = function() {
        return "vjs-control " + u.c.prototype.T.call(this)
    },
    t.p = m(),
    t.Na = function() {
        u.d(document, "keyup", u.bind(this, this.ba))
    },
    t.ba = function(t) { (32 == t.which || 13 == t.which) && (t.preventDefault(), this.p())
    },
    t.Ma = function() {
        u.n(document, "keyup", u.bind(this, this.ba))
    },
    u.O = u.c.extend({
        i: function(t, e) {
            u.c.call(this, t, e),
            this.Oc = this.V[this.g.barName],
            this.handle = this.V[this.g.handleName],
            t.d(this.oc, u.bind(this, this.update)),
            this.d("mousedown", this.Oa),
            this.d("touchstart", this.Oa),
            this.d("focus", this.Na),
            this.d("blur", this.Ma),
            this.d("click", this.p),
            this.b.d("controlsvisible", u.bind(this, this.update)),
            t.M(u.bind(this, this.update)),
            this.P = {}
        }
    }),
    t = u.O.prototype,
    t.e = function(t, e) {
        return e = e || {},
        e.className += " vjs-slider",
        e = u.k.B({
            nd: "slider",
            "aria-valuenow": 0,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            tabIndex: 0
        },
        e),
        u.c.prototype.e.call(this, t, e)
    },
    t.Oa = function(t) {
        t.preventDefault(),
        u.Pc(),
        this.P.move = u.bind(this, this.Gb),
        this.P.end = u.bind(this, this.Hb),
        u.d(document, "mousemove", this.P.move),
        u.d(document, "mouseup", this.P.end),
        u.d(document, "touchmove", this.P.move),
        u.d(document, "touchend", this.P.end),
        this.Gb(t)
    },
    t.Hb = function() {
        u.yd(),
        u.n(document, "mousemove", this.P.move, l),
        u.n(document, "mouseup", this.P.end, l),
        u.n(document, "touchmove", this.P.move, l),
        u.n(document, "touchend", this.P.end, l),
        this.update()
    },
    t.update = function() {
        if (this.a) {
            var t, e = this.xb(),
            n = this.handle,
            i = this.Oc;
            if (isNaN(e) && (e = 0), t = e, n) {
                t = this.a.offsetWidth;
                var o = n.v().offsetWidth;
                t = o ? o / t: 0,
                e *= 1 - t,
                t = e + t / 2,
                n.v().style.left = u.round(100 * e, 2) + "%"
            }
            i.v().style.width = u.round(100 * t, 2) + "%"
        }
    },
    t.Na = function() {
        u.d(document, "keyup", u.bind(this, this.ba))
    },
    t.ba = function(t) {
        37 == t.which ? (t.preventDefault(), this.uc()) : 39 == t.which && (t.preventDefault(), this.vc())
    },
    t.Ma = function() {
        u.n(document, "keyup", u.bind(this, this.ba))
    },
    t.p = function(t) {
        t.stopImmediatePropagation(),
        t.preventDefault()
    },
    u.ea = u.c.extend(),
    u.ea.prototype.defaultValue = 0,
    u.ea.prototype.e = function(t, e) {
        return e = e || {},
        e.className += " vjs-slider-handle",
        e = u.k.B({
            innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"
        },
        e),
        u.c.prototype.e.call(this, "div", e)
    },
    u.la = u.c.extend(),
    u.la.prototype.e = function() {
        var t = this.options().Rc || "ul";
        return this.ra = u.e(t, {
            className: "vjs-menu-content"
        }),
        t = u.c.prototype.e.call(this, "div", {
            append: this.ra,
            className: "vjs-menu"
        }),
        t.appendChild(this.ra),
        u.d(t, "click",
        function(t) {
            t.preventDefault(),
            t.stopImmediatePropagation()
        }),
        t
    },
    u.N = u.q.extend({
        i: function(t, e) {
            u.q.call(this, t, e),
            this.selected(e.selected)
        }
    }),
    u.N.prototype.e = function(t, e) {
        return u.q.prototype.e.call(this, "li", u.k.B({
            className: "vjs-menu-item",
            innerHTML: this.g.label
        },
        e))
    },
    u.N.prototype.p = function() {
        this.selected(f)
    },
    u.N.prototype.selected = function(t) {
        t ? (this.m("vjs-selected"), this.a.setAttribute("aria-selected", f)) : (this.t("vjs-selected"), this.a.setAttribute("aria-selected", l))
    },
    u.R = u.q.extend({
        i: function(t, e) {
            u.q.call(this, t, e),
            this.va = this.Ja(),
            this.Z(this.va),
            this.J && 0 === this.J.length && this.C(),
            this.d("keyup", this.ba),
            this.a.setAttribute("aria-haspopup", f),
            this.a.setAttribute("role", "button")
        }
    }),
    t = u.R.prototype,
    t.oa = l,
    t.Ja = function() {
        var t = new u.la(this.b);
        if (this.options().title && t.v().appendChild(u.e("li", {
            className: "vjs-menu-title",
            innerHTML: u.$(this.A),
            wd: -1
        })), this.J = this.createItems()) for (var e = 0; e < this.J.length; e++) ca(t, this.J[e]);
        return t
    },
    t.sa = m(),
    t.T = function() {
        return this.className + " vjs-menu-button " + u.q.prototype.T.call(this)
    },
    t.Na = m(),
    t.Ma = m(),
    t.p = function() {
        this.U("mouseout", u.bind(this,
        function() {
            D(this.va),
            this.a.blur()
        })),
        this.oa ? G(this) : H(this)
    },
    t.ba = function(t) {
        t.preventDefault(),
        32 == t.which || 13 == t.which ? this.oa ? G(this) : H(this) : 27 == t.which && this.oa && G(this)
    },
    u.w = u.c.extend({
        i: function(t, e, n) {
            this.F = t,
            e = u.k.B(da(t), e),
            this.u = {},
            this.pc = e.poster,
            this.rb = e.controls,
            t.controls = l,
            u.c.call(this, this, e, n),
            this.controls() ? this.m("vjs-controls-enabled") : this.m("vjs-controls-disabled"),
            this.U("play",
            function(t) {
                u.j(this.a, {
                    type: "firstplay",
                    target: this.a
                }) || (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation())
            }),
            this.d("ended", this.ed),
            this.d("play", this.Jb),
            this.d("firstplay", this.fd),
            this.d("pause", this.Ib),
            this.d("progress", this.hd),
            this.d("durationchange", this.dd),
            this.d("error", this.Fb),
            this.d("fullscreenchange", this.gd),
            u.wa[this.Q] = this,
            e.plugins && u.k.ta(e.plugins,
            function(t, e) {
                this[t](e)
            },
            this);
            var i, o, a, r;
            i = this.rc,
            t = function() {
                i(),
                clearInterval(o),
                o = setInterval(u.bind(this, i), 250)
            },
            e = function() {
                i(),
                clearInterval(o)
            },
            this.d("mousedown", t),
            this.d("mousemove", i),
            this.d("mouseup", e),
            this.d("keydown", i),
            this.d("keyup", i),
            this.d("touchstart", t),
            this.d("touchmove", i),
            this.d("touchend", e),
            this.d("touchcancel", e),
            a = setInterval(u.bind(this,
            function() {
                this.ja && (this.ja = l, I(this, f), clearTimeout(r), r = setTimeout(u.bind(this,
                function() {
                    this.ja || I(this, l)
                }), 2e3))
            }), 250),
            this.d("dispose",
            function() {
                clearInterval(a),
                clearTimeout(r)
            })
        }
    }),
    t = u.w.prototype,
    t.g = u.options,
    t.D = function() {
        this.j("dispose"),
        this.n("dispose"),
        u.wa[this.Q] = j,
        this.F && this.F.player && (this.F.player = j),
        this.a && this.a.player && (this.a.player = j),
        clearInterval(this.Qa),
        this.ya(),
        this.h && this.h.D(),
        u.c.prototype.D.call(this)
    },
    t.e = function() {
        var t = this.a = u.c.prototype.e.call(this, "div"),
        e = this.F;
        if (e.removeAttribute("width"), e.removeAttribute("height"), e.hasChildNodes()) {
            var n, i, o, a, r;
            for (n = e.childNodes, i = n.length, r = []; i--;) o = n[i],
            a = o.nodeName.toLowerCase(),
            ("source" === a || "track" === a) && r.push(o);
            for (n = 0; n < r.length; n++) e.removeChild(r[n])
        }
        return e.id = e.id || "vjs_video_" + u.s++,
        t.id = e.id,
        t.className = e.className,
        e.id += "_html5_api",
        e.className = "vjs-tech",
        e.player = t.player = this,
        this.m("vjs-paused"),
        this.width(this.g.width, f),
        this.height(this.g.height, f),
        e.parentNode && e.parentNode.insertBefore(t, e),
        u.yb(e, t),
        t
    },
    t.yc = function() {
        this.ec && this.ya(),
        this.ec = setInterval(u.bind(this,
        function() {
            this.j("timeupdate")
        }), 250)
    },
    t.ya = function() {
        clearInterval(this.ec)
    },
    t.ed = function() {
        this.g.loop && (this.currentTime(0), this.play())
    },
    t.Jb = function() {
        u.t(this.a, "vjs-paused"),
        u.m(this.a, "vjs-playing")
    },
    t.fd = function() {
        this.g.starttime && this.currentTime(this.g.starttime),
        this.m("vjs-has-started")
    },
    t.Ib = function() {
        u.t(this.a, "vjs-playing"),
        u.m(this.a, "vjs-paused")
    },
    t.hd = function() {
        1 == this.Ia() && this.j("loadedalldata")
    },
    t.dd = function() {
        this.duration(L(this, "duration"))
    },
    t.Fb = function(t) {
        u.log("Video Error", t)
    },
    t.gd = function() {
        this.I ? this.m("vjs-fullscreen") : this.t("vjs-fullscreen")
    },
    t.play = function() {
        return M(this, "play"),
        this
    },
    t.pause = function() {
        return M(this, "pause"),
        this
    },
    t.paused = function() {
        return L(this, "paused") === l ? l: f
    },
    t.currentTime = function(t) {
        return t !== b ? (this.u.nc = t, M(this, "setCurrentTime", t), this.Eb && this.j("timeupdate"), this) : this.u.currentTime = L(this, "currentTime") || 0
    },
    t.duration = function(t) {
        return t !== b ? (this.u.duration = parseFloat(t), this) : this.u.duration
    },
    t.buffered = function() {
        var t = L(this, "buffered"),
        e = t.length - 1,
        n = this.u.kb = this.u.kb || 0;
        return t && e >= 0 && t.end(e) !== n && (n = t.end(e), this.u.kb = n),
        u.sb(0, n)
    },
    t.Ia = function() {
        return this.duration() ? this.buffered().end(0) / this.duration() : 0
    },
    t.volume = function(t) {
        return t !== b ? (t = Math.max(0, Math.min(1, parseFloat(t))), this.u.volume = t, M(this, "setVolume", t), u.qd(t), this) : (t = parseFloat(L(this, "volume")), isNaN(t) ? 1 : t)
    },
    t.muted = function(t) {
        return t !== b ? (M(this, "setMuted", t), this) : L(this, "muted") || l
    },
    t.Sa = function() {
        return L(this, "supportsFullScreen") || l
    },
    t.xa = function() {
        var t = u.Nb.xa;
        return this.I = f,
        t ? (u.d(document, t.ub, u.bind(this,
        function() {
            this.I = document[t.I],
            this.I === l && u.n(document, t.ub, arguments.callee),
            this.j("fullscreenchange")
        })), this.a[t.sc]()) : this.h.Sa() ? M(this, "enterFullScreen") : (this.Zc = f, this.Uc = document.documentElement.style.overflow, u.d(document, "keydown", u.bind(this, this.hc)), document.documentElement.style.overflow = "hidden", u.m(document.body, "vjs-full-window"), this.j("enterFullWindow"), this.j("fullscreenchange")),
        this
    },
    t.nb = function() {
        var t = u.Nb.xa;
        return this.I = l,
        t ? document[t.mb]() : this.h.Sa() ? M(this, "exitFullScreen") : (N(this), this.j("fullscreenchange")),
        this
    },
    t.hc = function(t) {
        27 === t.keyCode && (this.I === f ? this.nb() : N(this))
    },
    t.src = function(t) {
        if (t instanceof Array) {
            var e;
            t: {
                e = t;
                for (var n = 0,
                i = this.g.techOrder; n < i.length; n++) {
                    var o = u.$(i[n]),
                    a = window.videojs[o];
                    if (a.isSupported()) for (var r = 0,
                    s = e; r < s.length; r++) {
                        var c = s[r];
                        if (a.canPlaySource(c)) {
                            e = {
                                source: c,
                                h: o
                            };
                            break t
                        }
                    }
                }
                e = l
            }
            e ? (t = e.source, e = e.h, e == this.ia ? this.src(t) : J(this, e, t)) : this.a.appendChild(u.e("p", {
                innerHTML: this.options().notSupportedMessage
            }))
        } else t instanceof Object ? window.videojs[this.ia].canPlaySource(t) ? this.src(t.src) : this.src([t]) : (this.u.src = t, this.aa ? (M(this, "src", t), "auto" == this.g.preload && this.load(), this.g.autoplay && this.play()) : this.M(function() {
            this.src(t)
        }));
        return this
    },
    t.load = function() {
        return M(this, "load"),
        this
    },
    t.currentSrc = function() {
        return L(this, "currentSrc") || this.u.src || ""
    },
    t.Pa = function(t) {
        return t !== b ? (M(this, "setPreload", t), this.g.preload = t, this) : L(this, "preload")
    },
    t.autoplay = function(t) {
        return t !== b ? (M(this, "setAutoplay", t), this.g.autoplay = t, this) : L(this, "autoplay")
    },
    t.loop = function(t) {
        return t !== b ? (M(this, "setLoop", t), this.g.loop = t, this) : L(this, "loop")
    },
    t.poster = function(t) {
        return t !== b && (this.pc = t),
        this.pc
    },
    t.controls = function(t) {
        return t !== b ? (t = !!t, this.rb !== t && ((this.rb = t) ? (this.t("vjs-controls-disabled"), this.m("vjs-controls-enabled"), this.j("controlsenabled")) : (this.t("vjs-controls-enabled"), this.m("vjs-controls-disabled"), this.j("controlsdisabled"))), this) : this.rb
    },
    u.w.prototype.Qb,
    t = u.w.prototype,
    t.Pb = function(t) {
        return t !== b ? (t = !!t, this.Qb !== t && ((this.Qb = t) ? (this.m("vjs-using-native-controls"), this.j("usingnativecontrols")) : (this.t("vjs-using-native-controls"), this.j("usingcustomcontrols"))), this) : this.Qb
    },
    t.error = function() {
        return L(this, "error")
    },
    t.seeking = function() {
        return L(this, "seeking")
    },
    t.ja = f,
    t.rc = function() {
        this.ja = f
    },
    t.Ob = f;
    var O, P, Q;
    Q = document.createElement("div"),
    P = {},
    Q.Ed !== b ? (P.sc = "requestFullscreen", P.mb = "exitFullscreen", P.ub = "fullscreenchange", P.I = "fullScreen") : (document.mozCancelFullScreen ? (O = "moz", P.I = O + "FullScreen") : (O = "webkit", P.I = O + "IsFullScreen"), Q[O + "RequestFullScreen"] && (P.sc = O + "RequestFullScreen", P.mb = O + "CancelFullScreen"), P.ub = O + "fullscreenchange"),
    document[P.mb] && (u.Nb.xa = P),
    u.Ea = u.c.extend(),
    u.Ea.prototype.g = {
        Jd: "play",
        children: {
            playToggle: {},
            currentTimeDisplay: {},
            timeDivider: {},
            durationDisplay: {},
            remainingTimeDisplay: {},
            progressControl: {},
            fullscreenToggle: {},
            volumeControl: {},
            muteToggle: {}
        }
    },
    u.Ea.prototype.e = function() {
        return u.e("div", {
            className: "vjs-control-bar"
        })
    },
    u.Wb = u.q.extend({
        i: function(t, e) {
            u.q.call(this, t, e),
            t.d("play", u.bind(this, this.Jb)),
            t.d("pause", u.bind(this, this.Ib))
        }
    }),
    t = u.Wb.prototype,
    t.pa = "Play",
    t.T = function() {
        return "vjs-play-control " + u.q.prototype.T.call(this)
    },
    t.p = function() {
        this.b.paused() ? this.b.play() : this.b.pause()
    },
    t.Jb = function() {
        u.t(this.a, "vjs-paused"),
        u.m(this.a, "vjs-playing"),
        this.a.children[0].children[0].innerHTML = "Pause"
    },
    t.Ib = function() {
        u.t(this.a, "vjs-playing"),
        u.m(this.a, "vjs-paused"),
        this.a.children[0].children[0].innerHTML = "Play"
    },
    u.Xa = u.c.extend({
        i: function(t, e) {
            u.c.call(this, t, e),
            t.d("timeupdate", u.bind(this, this.Ba))
        }
    }),
    u.Xa.prototype.e = function() {
        var t = u.c.prototype.e.call(this, "div", {
            className: "vjs-current-time vjs-time-controls vjs-control"
        });
        return this.content = u.e("div", {
            className: "vjs-current-time-display",
            innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
            "aria-live": "off"
        }),
        t.appendChild(u.e("div").appendChild(this.content)),
        t
    },
    u.Xa.prototype.Ba = function() {
        var t = this.b.Lb ? this.b.u.currentTime: this.b.currentTime();
        this.content.innerHTML = '<span class="vjs-control-text">Current Time </span>' + u.Ka(t, this.b.duration())
    },
    u.Ya = u.c.extend({
        i: function(t, e) {
            u.c.call(this, t, e),
            t.d("timeupdate", u.bind(this, this.Ba))
        }
    }),
    u.Ya.prototype.e = function() {
        var t = u.c.prototype.e.call(this, "div", {
            className: "vjs-duration vjs-time-controls vjs-control"
        });
        return this.content = u.e("div", {
            className: "vjs-duration-display",
            innerHTML: '<span class="vjs-control-text">Duration Time </span>0:00',
            "aria-live": "off"
        }),
        t.appendChild(u.e("div").appendChild(this.content)),
        t
    },
    u.Ya.prototype.Ba = function() {
        var t = this.b.duration();
        t && (this.content.innerHTML = '<span class="vjs-control-text">Duration Time </span>' + u.Ka(t))
    },
    u.$b = u.c.extend({
        i: function(t, e) {
            u.c.call(this, t, e)
        }
    }),
    u.$b.prototype.e = function() {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-time-divider",
            innerHTML: "<div><span>/</span></div>"
        })
    },
    u.eb = u.c.extend({
        i: function(t, e) {
            u.c.call(this, t, e),
            t.d("timeupdate", u.bind(this, this.Ba))
        }
    }),
    u.eb.prototype.e = function() {
        var t = u.c.prototype.e.call(this, "div", {
            className: "vjs-remaining-time vjs-time-controls vjs-control"
        });
        return this.content = u.e("div", {
            className: "vjs-remaining-time-display",
            innerHTML: '<span class="vjs-control-text">Remaining Time </span>-0:00',
            "aria-live": "off"
        }),
        t.appendChild(u.e("div").appendChild(this.content)),
        t
    },
    u.eb.prototype.Ba = function() {
        this.b.duration() && (this.content.innerHTML = '<span class="vjs-control-text">Remaining Time </span>-' + u.Ka(this.b.duration() - this.b.currentTime()))
    },
    u.Fa = u.q.extend({
        i: function(t, e) {
            u.q.call(this, t, e)
        }
    }),
    u.Fa.prototype.pa = "Fullscreen",
    u.Fa.prototype.T = function() {
        return "vjs-fullscreen-control " + u.q.prototype.T.call(this)
    },
    u.Fa.prototype.p = function() {
        this.b.I ? (this.b.nb(), this.a.children[0].children[0].innerHTML = "Fullscreen") : (this.b.xa(), this.a.children[0].children[0].innerHTML = "Non-Fullscreen")
    },
    u.cb = u.c.extend({
        i: function(t, e) {
            u.c.call(this, t, e)
        }
    }),
    u.cb.prototype.g = {
        children: {
            seekBar: {}
        }
    },
    u.cb.prototype.e = function() {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-progress-control vjs-control"
        })
    },
    u.Xb = u.O.extend({
        i: function(t, e) {
            u.O.call(this, t, e),
            t.d("timeupdate", u.bind(this, this.Aa)),
            t.M(u.bind(this, this.Aa))
        }
    }),
    t = u.Xb.prototype,
    t.g = {
        children: {
            loadProgressBar: {},
            playProgressBar: {},
            seekHandle: {}
        },
        barName: "playProgressBar",
        handleName: "seekHandle"
    },
    t.oc = "timeupdate",
    t.e = function() {
        return u.O.prototype.e.call(this, "div", {
            className: "vjs-progress-holder",
            "aria-label": "video progress bar"
        })
    },
    t.Aa = function() {
        var t = this.b.Lb ? this.b.u.currentTime: this.b.currentTime();
        this.a.setAttribute("aria-valuenow", u.round(100 * this.xb(), 2)),
        this.a.setAttribute("aria-valuetext", u.Ka(t, this.b.duration()))
    },
    t.xb = function() {
        var t;
        return "Flash" === this.b.ia && this.b.seeking() ? (t = this.b.u, t = t.nc ? t.nc: this.b.currentTime()) : t = this.b.currentTime(),
        t / this.b.duration()
    },
    t.Oa = function(t) {
        u.O.prototype.Oa.call(this, t),
        this.b.Lb = f,
        this.Ad = !this.b.paused(),
        this.b.pause()
    },
    t.Gb = function(t) {
        t = F(this, t) * this.b.duration(),
        t == this.b.duration() && (t -= .1),
        this.b.currentTime(t)
    },
    t.Hb = function(t) {
        u.O.prototype.Hb.call(this, t),
        this.b.Lb = l,
        this.Ad && this.b.play()
    },
    t.vc = function() {
        this.b.currentTime(this.b.currentTime() + 5)
    },
    t.uc = function() {
        this.b.currentTime(this.b.currentTime() - 5)
    },
    u.$a = u.c.extend({
        i: function(t, e) {
            u.c.call(this, t, e),
            t.d("progress", u.bind(this, this.update))
        }
    }),
    u.$a.prototype.e = function() {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-load-progress",
            innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>'
        })
    },
    u.$a.prototype.update = function() {
        this.a.style && (this.a.style.width = u.round(100 * this.b.Ia(), 2) + "%")
    },
    u.Vb = u.c.extend({
        i: function(t, e) {
            u.c.call(this, t, e)
        }
    }),
    u.Vb.prototype.e = function() {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-play-progress",
            innerHTML: '<span class="vjs-control-text">Progress: 0%</span>'
        })
    },
    u.fb = u.ea.extend(),
    u.fb.prototype.defaultValue = "00:00",
    u.fb.prototype.e = function() {
        return u.ea.prototype.e.call(this, "div", {
            className: "vjs-seek-handle"
        })
    },
    u.hb = u.c.extend({
        i: function(t, e) {
            u.c.call(this, t, e),
            t.h && t.h.l && t.h.l.volumeControl === l && this.m("vjs-hidden"),
            t.d("loadstart", u.bind(this,
            function() {
                t.h.l && t.h.l.volumeControl === l ? this.m("vjs-hidden") : this.t("vjs-hidden")
            }))
        }
    }),
    u.hb.prototype.g = {
        children: {
            volumeBar: {}
        }
    },
    u.hb.prototype.e = function() {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-volume-control vjs-control"
        })
    },
    u.gb = u.O.extend({
        i: function(t, e) {
            u.O.call(this, t, e),
            t.d("volumechange", u.bind(this, this.Aa)),
            t.M(u.bind(this, this.Aa)),
            setTimeout(u.bind(this, this.update), 0)
        }
    }),
    t = u.gb.prototype,
    t.Aa = function() {
        this.a.setAttribute("aria-valuenow", u.round(100 * this.b.volume(), 2)),
        this.a.setAttribute("aria-valuetext", u.round(100 * this.b.volume(), 2) + "%")
    },
    t.g = {
        children: {
            volumeLevel: {},
            volumeHandle: {}
        },
        barName: "volumeLevel",
        handleName: "volumeHandle"
    },
    t.oc = "volumechange",
    t.e = function() {
        return u.O.prototype.e.call(this, "div", {
            className: "vjs-volume-bar",
            "aria-label": "volume level"
        })
    },
    t.Gb = function(t) {
        this.b.volume(F(this, t))
    },
    t.xb = function() {
        return this.b.muted() ? 0 : this.b.volume()
    },
    t.vc = function() {
        this.b.volume(this.b.volume() + .1)
    },
    t.uc = function() {
        this.b.volume(this.b.volume() - .1)
    },
    u.ac = u.c.extend({
        i: function(t, e) {
            u.c.call(this, t, e)
        }
    }),
    u.ac.prototype.e = function() {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-volume-level",
            innerHTML: '<span class="vjs-control-text"></span>'
        })
    },
    u.ib = u.ea.extend(),
    u.ib.prototype.defaultValue = "00:00",
    u.ib.prototype.e = function() {
        return u.ea.prototype.e.call(this, "div", {
            className: "vjs-volume-handle"
        })
    },
    u.da = u.q.extend({
        i: function(t, e) {
            u.q.call(this, t, e),
            t.d("volumechange", u.bind(this, this.update)),
            t.h && t.h.l && t.h.l.volumeControl === l && this.m("vjs-hidden"),
            t.d("loadstart", u.bind(this,
            function() {
                t.h.l && t.h.l.volumeControl === l ? this.m("vjs-hidden") : this.t("vjs-hidden")
            }))
        }
    }),
    u.da.prototype.e = function() {
        return u.q.prototype.e.call(this, "div", {
            className: "vjs-mute-control vjs-control",
            innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
        })
    },
    u.da.prototype.p = function() {
        this.b.muted(this.b.muted() ? l: f)
    },
    u.da.prototype.update = function() {
        var t = this.b.volume(),
        e = 3;
        for (0 === t || this.b.muted() ? e = 0 : .33 > t ? e = 1 : .67 > t && (e = 2), this.b.muted() ? "Unmute" != this.a.children[0].children[0].innerHTML && (this.a.children[0].children[0].innerHTML = "Unmute") : "Mute" != this.a.children[0].children[0].innerHTML && (this.a.children[0].children[0].innerHTML = "Mute"), t = 0; 4 > t; t++) u.t(this.a, "vjs-vol-" + t);
        u.m(this.a, "vjs-vol-" + e)
    },
    u.na = u.R.extend({
        i: function(t, e) {
            u.R.call(this, t, e),
            t.d("volumechange", u.bind(this, this.update)),
            t.h && t.h.l && t.h.l.zc === l && this.m("vjs-hidden"),
            t.d("loadstart", u.bind(this,
            function() {
                t.h.l && t.h.l.zc === l ? this.m("vjs-hidden") : this.t("vjs-hidden")
            })),
            this.m("vjs-menu-button")
        }
    }),
    u.na.prototype.Ja = function() {
        var t = new u.la(this.b, {
            Rc: "div"
        }),
        e = new u.gb(this.b, u.k.B({
            zd: f
        },
        this.g.Sd));
        return t.Z(e),
        t
    },
    u.na.prototype.p = function() {
        u.da.prototype.p.call(this),
        u.R.prototype.p.call(this)
    },
    u.na.prototype.e = function() {
        return u.q.prototype.e.call(this, "div", {
            className: "vjs-volume-menu-button vjs-menu-button vjs-control",
            innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
        })
    },
    u.na.prototype.update = u.da.prototype.update,
    u.bb = u.q.extend({
        i: function(t, e) {
            u.q.call(this, t, e),
            (!t.poster() || !t.controls()) && this.C(),
            t.d("play", u.bind(this, this.C))
        }
    }),
    u.bb.prototype.e = function() {
        var t = u.e("div", {
            className: "vjs-poster",
            tabIndex: -1
        }),
        e = this.b.poster();
        return e && ("backgroundSize" in t.style ? t.style.backgroundImage = 'url("' + e + '")': t.appendChild(u.e("img", {
            src: e
        }))),
        t
    },
    u.bb.prototype.p = function() {
        this.L().controls() && this.b.play()
    },
    u.Ub = u.c.extend({
        i: function(t, e) {
            u.c.call(this, t, e),
            t.d("canplay", u.bind(this, this.C)),
            t.d("canplaythrough", u.bind(this, this.C)),
            t.d("playing", u.bind(this, this.C)),
            t.d("seeked", u.bind(this, this.C)),
            t.d("seeking", u.bind(this, this.show)),
            t.d("seeked", u.bind(this, this.C)),
            t.d("error", u.bind(this, this.show)),
            t.d("waiting", u.bind(this, this.show))
        }
    }),
    u.Ub.prototype.e = function() {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-loading-spinner"
        })
    },
    u.Va = u.q.extend(),
    u.Va.prototype.e = function() {
        return u.q.prototype.e.call(this, "div", {
            className: "vjs-big-play-button",
            innerHTML: "<span></span>",
            "aria-label": "play video"
        })
    },
    u.Va.prototype.p = function() {
        this.b.play()
    },
    u.r = u.c.extend({
        i: function(t, e, n) {
            u.c.call(this, t, e, n);
            var i, o;
            o = this,
            i = this.L(),
            t = function() {
                if (i.controls() && !i.Pb()) {
                    var t, e;
                    o.d("mousedown", o.p),
                    o.d("touchstart",
                    function(t) {
                        t.preventDefault(),
                        t.stopPropagation(),
                        e = I(this.b)
                    }),
                    t = function(t) {
                        t.stopPropagation(),
                        e && this.b.rc()
                    },
                    o.d("touchmove", t),
                    o.d("touchleave", t),
                    o.d("touchcancel", t),
                    o.d("touchend", t);
                    var n, a, r;
                    n = 0,
                    o.d("touchstart",
                    function() {
                        n = (new Date).getTime(),
                        r = f
                    }),
                    t = function() {
                        r = l
                    },
                    o.d("touchmove", t),
                    o.d("touchleave", t),
                    o.d("touchcancel", t),
                    o.d("touchend",
                    function() {
                        r === f && (a = (new Date).getTime() - n, 250 > a && this.j("tap"))
                    }),
                    o.d("tap", o.jd)
                }
            },
            e = u.bind(o, o.md),
            this.M(t),
            i.d("controlsenabled", t),
            i.d("controlsdisabled", e)
        }
    }),
    u.r.prototype.md = function() {
        this.n("tap"),
        this.n("touchstart"),
        this.n("touchmove"),
        this.n("touchleave"),
        this.n("touchcancel"),
        this.n("touchend"),
        this.n("click"),
        this.n("mousedown")
    },
    u.r.prototype.p = function(t) {
        0 === t.button && this.L().controls() && (this.L().paused() ? this.L().play() : this.L().pause())
    },
    u.r.prototype.jd = function() {
        I(this.L(), !I(this.L()))
    },
    u.r.prototype.l = {
        volumeControl: f,
        fullscreenResize: l,
        progressEvents: l,
        timeupdateEvents: l
    },
    u.media = {},
    u.media.Ua = "play pause paused currentTime setCurrentTime duration buffered volume setVolume muted setMuted width height supportsFullScreen enterFullScreen src load currentSrc preload setPreload autoplay setAutoplay loop setLoop error networkState readyState seeking initialTime startOffsetTime played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks defaultPlaybackRate playbackRate mediaGroup controller controls defaultMuted".split(" ");
    for (var i = u.media.Ua.length - 1; i >= 0; i--) u.r.prototype[u.media.Ua[i]] = ea();
    u.o = u.r.extend({
        i: function(t, e, n) {
            if (this.l.volumeControl = u.o.Qc(), this.l.movingMediaElementInDOM = !u.Fc, this.l.fullscreenResize = f, u.r.call(this, t, e, n), (e = e.source) && this.a.currentSrc == e.src ? t.j("loadstart") : e && (this.a.src = e.src), u.Mc && t.options().nativeControlsForTouch !== l) {
                var i, o, a, r;
                i = this,
                o = this.L(),
                e = o.controls(),
                i.a.controls = !!e,
                a = function() {
                    i.a.controls = f
                },
                r = function() {
                    i.a.controls = l
                },
                o.d("controlsenabled", a),
                o.d("controlsdisabled", r),
                e = function() {
                    o.n("controlsenabled", a),
                    o.n("controlsdisabled", r)
                },
                i.d("dispose", e),
                o.d("usingcustomcontrols", e),
                o.Pb(f)
            }
            for (t.M(function() {
                this.F && this.g.autoplay && this.paused() && (delete this.F.poster, this.play())
            }), t = u.o.Za.length - 1; t >= 0; t--) u.d(this.a, u.o.Za[t], u.bind(this.b, this.Wc));
            this.Ta()
        }
    }),
    t = u.o.prototype,
    t.D = function() {
        u.r.prototype.D.call(this)
    },
    t.e = function() {
        var t = this.b,
        e = t.F;
        e && this.l.movingMediaElementInDOM !== l || (e ? (e.player = j, t.F = j, t.v().removeChild(e), e = e.cloneNode(l)) : e = u.e("video", {
            id: t.id() + "_html5_api",
            className: "vjs-tech"
        }), e.player = t, u.yb(e, t.v()));
        for (var n = ["autoplay", "preload", "loop", "muted"], i = n.length - 1; i >= 0; i--) {
            var o = n[i];
            t.g[o] !== j && (e[o] = t.g[o])
        }
        return e
    },
    t.Wc = function(t) {
        this.j(t),
        t.stopPropagation()
    },
    t.play = function() {
        this.a.play()
    },
    t.pause = function() {
        this.a.pause()
    },
    t.paused = function() {
        return this.a.paused
    },
    t.currentTime = function() {
        return this.a.currentTime
    },
    t.pd = function(t) {
        try {
            this.a.currentTime = t
        } catch(e) {
            u.log(e, "Video is not ready. (Video.js)")
        }
    },
    t.duration = function() {
        return this.a.duration || 0
    },
    t.buffered = function() {
        return this.a.buffered
    },
    t.volume = function() {
        return this.a.volume
    },
    t.ud = function(t) {
        this.a.volume = t
    },
    t.muted = function() {
        return this.a.muted
    },
    t.sd = function(t) {
        this.a.muted = t
    },
    t.width = function() {
        return this.a.offsetWidth
    },
    t.height = function() {
        return this.a.offsetHeight
    },
    t.Sa = function() {
        return "function" != typeof this.a.webkitEnterFullScreen || !/Android/.test(u.G) && /Chrome|Mac OS X 10.5/.test(u.G) ? l: f
    },
    t.src = function(t) {
        this.a.src = t
    },
    t.load = function() {
        this.a.load()
    },
    t.currentSrc = function() {
        return this.a.currentSrc
    },
    t.Pa = function() {
        return this.a.Pa
    },
    t.td = function(t) {
        this.a.Pa = t
    },
    t.autoplay = function() {
        return this.a.autoplay
    },
    t.od = function(t) {
        this.a.autoplay = t
    },
    t.controls = function() {
        return this.a.controls
    },
    t.loop = function() {
        return this.a.loop
    },
    t.rd = function(t) {
        this.a.loop = t
    },
    t.error = function() {
        return this.a.error
    },
    t.seeking = function() {
        return this.a.seeking
    },
    u.o.isSupported = function() {
        return !! u.ma.canPlayType
    },
    u.o.lb = function(t) {
        try {
            return !! u.ma.canPlayType(t.type)
        } catch(e) {
            return ""
        }
    },
    u.o.Qc = function() {
        var t = u.ma.volume;
        return u.ma.volume = t / 2 + .1,
        t !== u.ma.volume
    },
    u.o.Za = "loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" "),
    u.Jc && (document.createElement("video").constructor.prototype.canPlayType = function(t) {
        return t && -1 != t.toLowerCase().indexOf("video/mp4") ? "maybe": ""
    }),
    u.f = u.r.extend({
        i: function(t, e, n) {
            u.r.call(this, t, e, n);
            var i = e.source;
            n = e.parentEl;
            var o = this.a = u.e("div", {
                id: t.id() + "_temp_flash"
            }),
            a = t.id() + "_flash_api";
            t = t.g;
            var r = u.k.B({
                readyFunction: "videojs.Flash.onReady",
                eventProxyFunction: "videojs.Flash.onEvent",
                errorEventProxyFunction: "videojs.Flash.onError",
                autoplay: t.autoplay,
                preload: t.Pa,
                loop: t.loop,
                muted: t.muted
            },
            e.flashVars),
            s = u.k.B({
                wmode: "opaque",
                bgcolor: "#000000"
            },
            e.params),
            l = u.k.B({
                id: a,
                name: a,
                "class": "vjs-tech"
            },
            e.attributes);
            if (i && (i.type && u.f.ad(i.type) ? (t = u.f.wc(i.src), r.rtmpConnection = encodeURIComponent(t.qb), r.rtmpStream = encodeURIComponent(t.Mb)) : r.src = encodeURIComponent(u.ic(i.src))), u.yb(o, n), e.startTime && this.M(function() {
                this.load(),
                this.play(),
                this.currentTime(e.startTime)
            }), e.iFrameMode !== f || u.Ec) u.f.Vc(e.swf, o, r, s, l);
            else {
                var c = u.e("iframe", {
                    id: a + "_iframe",
                    name: a + "_iframe",
                    className: "vjs-tech",
                    scrolling: "no",
                    marginWidth: 0,
                    marginHeight: 0,
                    frameBorder: 0
                });
                r.readyFunction = "ready",
                r.eventProxyFunction = "events",
                r.errorEventProxyFunction = "errors",
                u.d(c, "load", u.bind(this,
                function() {
                    var t, n = c.contentWindow;
                    t = c.contentDocument ? c.contentDocument: c.contentWindow.document,
                    t.write(u.f.jc(e.swf, r, s, l)),
                    n.player = this.b,
                    n.ready = u.bind(this.b,
                    function(e) {
                        var n = this.h;
                        n.a = t.getElementById(e),
                        u.f.ob(n)
                    }),
                    n.events = u.bind(this.b,
                    function(t, e) {
                        this && "flash" === this.ia && this.j(e)
                    }),
                    n.errors = u.bind(this.b,
                    function(t, e) {
                        u.log("Flash Error", e)
                    })
                })),
                o.parentNode.replaceChild(c, o)
            }
        }
    }),
    t = u.f.prototype,
    t.D = function() {
        u.r.prototype.D.call(this)
    },
    t.play = function() {
        this.a.vjs_play()
    },
    t.pause = function() {
        this.a.vjs_pause()
    },
    t.src = function(t) {
        if (u.f.$c(t) ? (t = u.f.wc(t), this.Nd(t.qb), this.Od(t.Mb)) : (t = u.ic(t), this.a.vjs_src(t)), this.b.autoplay()) {
            var e = this;
            setTimeout(function() {
                e.play()
            },
            0)
        }
    },
    t.currentSrc = function() {
        var t = this.a.vjs_getProperty("currentSrc");
        if (t == j) {
            var e = this.Ld(),
            n = this.Md();
            e && n && (t = u.f.vd(e, n))
        }
        return t
    },
    t.load = function() {
        this.a.vjs_load()
    },
    t.poster = function() {
        this.a.vjs_getProperty("poster")
    },
    t.buffered = function() {
        return u.sb(0, this.a.vjs_getProperty("buffered"))
    },
    t.Sa = q(l);
    var R = u.f.prototype,
    S = "rtmpConnection rtmpStream preload currentTime defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),
    T = "error currentSrc networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" "),
    U;
    for (U = 0; U < S.length; U++) V(S[U]),
    fa();
    for (U = 0; U < T.length; U++) V(T[U]);
    if (u.f.isSupported = function() {
        return 10 <= u.f.version()[0]
    },
    u.f.lb = function(t) {
        return t.type in u.f.Yc || t.type in u.f.xc ? "maybe": void 0
    },
    u.f.Yc = {
        "video/flv": "FLV",
        "video/x-flv": "FLV",
        "video/mp4": "MP4",
        "video/m4v": "MP4"
    },
    u.f.xc = {
        "rtmp/mp4": "MP4",
        "rtmp/flv": "FLV"
    },
    u.f.onReady = function(t) {
        t = u.v(t);
        var e = t.player || t.parentNode.player,
        n = e.h;
        t.player = e,
        n.a = t,
        u.f.ob(n)
    },
    u.f.ob = function(t) {
        t.v().vjs_getProperty ? t.Ta() : setTimeout(function() {
            u.f.ob(t)
        },
        50)
    },
    u.f.onEvent = function(t, e) {
        u.v(t).player.j(e)
    },
    u.f.onError = function(t, e) {
        u.v(t).player.j("error"),
        u.log("Flash Error", e, t)
    },
    u.f.version = function() {
        var t = "0,0,0";
        try {
            t = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
        } catch(e) {
            try {
                navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
            } catch(n) {}
        }
        return t.split(",")
    },
    u.f.Vc = function(t, e, n, i, o) {
        t = u.f.jc(t, n, i, o),
        t = u.e("div", {
            innerHTML: t
        }).childNodes[0],
        n = e.parentNode,
        e.parentNode.replaceChild(t, e);
        var a = n.childNodes[0];
        setTimeout(function() {
            a.style.display = "block"
        },
        1e3)
    },
    u.f.jc = function(t, e, n, i) {
        var o = "",
        a = "",
        r = "";
        return e && u.k.ta(e,
        function(t, e) {
            o += t + "=" + e + "&amp;"
        }),
        n = u.k.B({
            movie: t,
            flashvars: o,
            allowScriptAccess: "always",
            allowNetworking: "all"
        },
        n),
        u.k.ta(n,
        function(t, e) {
            a += '<param name="' + t + '" value="' + e + '" />'
        }),
        i = u.k.B({
            data: t,
            width: "100%",
            height: "100%"
        },
        i),
        u.k.ta(i,
        function(t, e) {
            r += t + '="' + e + '" '
        }),
        '<object type="application/x-shockwave-flash"' + r + ">" + a + "</object>"
    },
    u.f.vd = function(t, e) {
        return t + "&" + e
    },
    u.f.wc = function(t) {
        var e = {
            qb: "",
            Mb: ""
        };
        if (!t) return e;
        var n, i = t.indexOf("&");
        return - 1 !== i ? n = i + 1 : (i = n = t.lastIndexOf("/") + 1, 0 === i && (i = n = t.length)),
        e.qb = t.substring(0, i),
        e.Mb = t.substring(n, t.length),
        e
    },
    u.f.ad = function(t) {
        return t in u.f.xc
    },
    u.f.Lc = /^rtmp[set]?:\/\//i, u.f.$c = function(t) {
        return u.f.Lc.test(t)
    },
    u.Kc = u.c.extend({
        i: function(t, e, n) {
            if (u.c.call(this, t, e, n), t.g.sources && 0 !== t.g.sources.length) t.src(t.g.sources);
            else for (e = 0, n = t.g.techOrder; e < n.length; e++) {
                var i = u.$(n[e]),
                o = window.videojs[i];
                if (o && o.isSupported()) {
                    J(t, i);
                    break
                }
            }
        }
    }), u.X = u.c.extend({
        i: function(t, e) {
            u.c.call(this, t, e),
            this.Q = e.id || "vjs_" + e.kind + "_" + e.language + "_" + u.s++,
            this.tc = e.src,
            this.Sc = e["default"] || e.dflt,
            this.xd = e.title,
            this.Id = e.srclang,
            this.bd = e.label,
            this.fa = [],
            this.bc = [],
            this.ga = this.ha = 0,
            this.b.d("fullscreenchange", u.bind(this, this.Nc))
        }
    }), t = u.X.prototype, t.K = p("A"), t.src = p("tc"), t.tb = p("Sc"), t.title = p("xd"), t.label = p("bd"), t.readyState = p("ha"), t.mode = p("ga"), t.Nc = function() {
        this.a.style.fontSize = this.b.I ? 140 * (screen.width / this.b.width()) + "%": ""
    },
    t.e = function() {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-" + this.A + " vjs-text-track"
        })
    },
    t.show = function() {
        Y(this),
        this.ga = 2,
        u.c.prototype.show.call(this)
    },
    t.C = function() {
        Y(this),
        this.ga = 1,
        u.c.prototype.C.call(this)
    },
    t.disable = function() {
        2 == this.ga && this.C(),
        this.b.n("timeupdate", u.bind(this, this.update, this.Q)),
        this.b.n("ended", u.bind(this, this.reset, this.Q)),
        this.reset(),
        this.b.V.textTrackDisplay.removeChild(this),
        this.ga = 0
    },
    t.load = function() {
        0 === this.ha && (this.ha = 1, u.get(this.tc, u.bind(this, this.kd), u.bind(this, this.Fb)))
    },
    t.Fb = function(t) {
        this.error = t,
        this.ha = 3,
        this.j("error")
    },
    t.kd = function(t) {
        var e, n;
        t = t.split("\n");
        for (var i = "",
        o = 1,
        a = t.length; a > o; o++) if (i = u.trim(t[o])) {
            for ( - 1 == i.indexOf("-->") ? (e = i, i = u.trim(t[++o])) : e = this.fa.length, e = {
                id: e,
                index: this.fa.length
            },
            n = i.split(" --> "), e.startTime = ga(n[0]), e.ua = ga(n[1]), n = []; t[++o] && (i = u.trim(t[o]));) n.push(i);
            e.text = n.join("<br/>"),
            this.fa.push(e)
        }
        this.ha = 2,
        this.j("loaded")
    },
    t.update = function() {
        if (0 < this.fa.length) {
            var t = this.b.currentTime();
            if (this.Kb === b || t < this.Kb || this.La <= t) {
                var e, n, i, o, a = this.fa,
                r = this.b.duration(),
                s = 0,
                u = l,
                c = [];
                for (t >= this.La || this.La === b ? o = this.vb !== b ? this.vb: 0 : (u = f, o = this.Cb !== b ? this.Cb: a.length - 1);;) {
                    if (i = a[o], i.ua <= t) s = Math.max(s, i.ua),
                    i.Ha && (i.Ha = l);
                    else if (t < i.startTime) {
                        if (r = Math.min(r, i.startTime), i.Ha && (i.Ha = l), !u) break
                    } else u ? (c.splice(0, 0, i), n === b && (n = o), e = o) : (c.push(i), e === b && (e = o), n = o),
                    r = Math.min(r, i.ua),
                    s = Math.max(s, i.startTime),
                    i.Ha = f;
                    if (u) {
                        if (0 === o) break;
                        o--
                    } else {
                        if (o === a.length - 1) break;
                        o++
                    }
                }
                for (this.bc = c, this.La = r, this.Kb = s, this.vb = e, this.Cb = n, t = this.bc, a = "", r = 0, s = t.length; s > r; r++) a += '<span class="vjs-tt-cue">' + t[r].text + "</span>";
                this.a.innerHTML = a,
                this.j("cuechange")
            }
        }
    },
    t.reset = function() {
        this.La = 0,
        this.Kb = this.b.duration(),
        this.Cb = this.vb = 0
    },
    u.Sb = u.X.extend(), u.Sb.prototype.A = "captions", u.Yb = u.X.extend(), u.Yb.prototype.A = "subtitles", u.Tb = u.X.extend(), u.Tb.prototype.A = "chapters", u.Zb = u.c.extend({
        i: function(t, e, n) {
            if (u.c.call(this, t, e, n), t.g.tracks && 0 < t.g.tracks.length) {
                e = this.b,
                t = t.g.tracks;
                var i;
                for (n = 0; n < t.length; n++) {
                    i = t[n];
                    var o = e,
                    a = i.kind,
                    r = i.label,
                    s = i.language,
                    l = i;
                    i = o.za = o.za || [],
                    l = l || {},
                    l.kind = a,
                    l.label = r,
                    l.language = s,
                    a = u.$(a || "subtitles"),
                    o = new window.videojs[a + "Track"](o, l),
                    i.push(o)
                }
            }
        }
    }), u.Zb.prototype.e = function() {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-text-track-display"
        })
    },
    u.Y = u.N.extend({
        i: function(t, e) {
            var n = this.ca = e.track;
            e.label = n.label(),
            e.selected = n.tb(),
            u.N.call(this, t, e),
            this.b.d(n.K() + "trackchange", u.bind(this, this.update))
        }
    }), u.Y.prototype.p = function() {
        u.N.prototype.p.call(this),
        X(this.b, this.ca.Q, this.ca.K())
    },
    u.Y.prototype.update = function() {
        this.selected(2 == this.ca.mode())
    },
    u.ab = u.Y.extend({
        i: function(t, e) {
            e.track = {
                K: function() {
                    return e.kind
                },
                L: t,
                label: function() {
                    return e.kind + " off"
                },
                tb: q(l),
                mode: q(l)
            },
            u.Y.call(this, t, e),
            this.selected(f)
        }
    }), u.ab.prototype.p = function() {
        u.Y.prototype.p.call(this),
        X(this.b, this.ca.Q, this.ca.K())
    },
    u.ab.prototype.update = function() {
        for (var t, e = W(this.b), n = 0, i = e.length, o = f; i > n; n++) t = e[n],
        t.K() == this.ca.K() && 2 == t.mode() && (o = l);
        this.selected(o)
    },
    u.S = u.R.extend({
        i: function(t, e) {
            u.R.call(this, t, e),
            1 >= this.J.length && this.C()
        }
    }), u.S.prototype.sa = function() {
        var t, e = [];
        e.push(new u.ab(this.b, {
            kind: this.A
        }));
        for (var n = 0; n < W(this.b).length; n++) t = W(this.b)[n],
        t.K() === this.A && e.push(new u.Y(this.b, {
            track: t
        }));
        return e
    },
    u.Ca = u.S.extend({
        i: function(t, e, n) {
            u.S.call(this, t, e, n),
            this.a.setAttribute("aria-label", "Captions Menu")
        }
    }), u.Ca.prototype.A = "captions", u.Ca.prototype.pa = "Captions", u.Ca.prototype.className = "vjs-captions-button", u.Ga = u.S.extend({
        i: function(t, e, n) {
            u.S.call(this, t, e, n),
            this.a.setAttribute("aria-label", "Subtitles Menu")
        }
    }), u.Ga.prototype.A = "subtitles", u.Ga.prototype.pa = "Subtitles", u.Ga.prototype.className = "vjs-subtitles-button", u.Da = u.S.extend({
        i: function(t, e, n) {
            u.S.call(this, t, e, n),
            this.a.setAttribute("aria-label", "Chapters Menu")
        }
    }), t = u.Da.prototype, t.A = "chapters", t.pa = "Chapters", t.className = "vjs-chapters-button", t.sa = function() {
        for (var t, e = [], n = 0; n < W(this.b).length; n++) t = W(this.b)[n],
        t.K() === this.A && e.push(new u.Y(this.b, {
            track: t
        }));
        return e
    },
    t.Ja = function() {
        for (var t, e, n = W(this.b), i = 0, o = n.length, a = this.J = []; o > i; i++) if (t = n[i], t.K() == this.A && t.tb()) {
            if (2 > t.readyState()) return this.Fd = t,
            t.d("loaded", u.bind(this, this.Ja)),
            void 0;
            e = t;
            break
        }
        if (n = this.va = new u.la(this.b), n.a.appendChild(u.e("li", {
            className: "vjs-menu-title",
            innerHTML: u.$(this.A),
            wd: -1
        })), e) {
            t = e.fa;
            for (var r, i = 0,
            o = t.length; o > i; i++) r = t[i],
            r = new u.Wa(this.b, {
                track: e,
                cue: r
            }),
            a.push(r),
            n.Z(r)
        }
        return 0 < this.J.length && this.show(),
        n
    },
    u.Wa = u.N.extend({
        i: function(t, e) {
            var n = this.ca = e.track,
            i = this.cue = e.cue,
            o = t.currentTime();
            e.label = i.text,
            e.selected = i.startTime <= o && o < i.ua,
            u.N.call(this, t, e),
            n.d("cuechange", u.bind(this, this.update))
        }
    }), u.Wa.prototype.p = function() {
        u.N.prototype.p.call(this),
        this.b.currentTime(this.cue.startTime),
        this.update(this.cue.startTime)
    },
    u.Wa.prototype.update = function() {
        var t = this.cue,
        e = this.b.currentTime();
        this.selected(t.startTime <= e && e < t.ua)
    },
    u.k.B(u.Ea.prototype.g.children, {
        subtitlesButton: {},
        captionsButton: {},
        chaptersButton: {}
    }), "undefined" != typeof window.JSON && "function" === window.JSON.parse) u.JSON = window.JSON;
    else {
        u.JSON = {};
        var Z = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        u.JSON.parse = function(a, c) {
            function d(t, e) {
                var n, i, o = t[e];
                if (o && "object" == typeof o) for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (i = d(o, n), i !== b ? o[n] = i: delete o[n]);
                return c.call(t, e, o)
            }
            var e;
            if (a = String(a), Z.lastIndex = 0, Z.test(a) && (a = a.replace(Z,
            function(t) {
                return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice( - 4)
            })), /^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"),
            "function" == typeof c ? d({
                "": e
            },
            "") : e;
            throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
        }
    }
    u.cc = function() {
        var t, e, n = document.getElementsByTagName("video");
        if (n && 0 < n.length) for (var i = 0,
        o = n.length; o > i; i++) {
            if (! (e = n[i]) || !e.getAttribute) {
                u.jb();
                break
            }
            e.player === b && (t = e.getAttribute("data-setup"), t !== j && (t = u.JSON.parse(t || "{}"), v(e, t)))
        } else u.Ac || u.jb()
    },
    u.jb = function() {
        setTimeout(u.cc, 1)
    },
    "complete" === document.readyState ? u.Ac = f: u.U(window, "load",
    function() {
        u.Ac = f
    }),
    u.jb(),
    u.ld = function(t, e) {
        u.w.prototype[t] = e
    };
    var ha = this;
    ha.Bd = f,
    $("videojs", u),
    $("_V_", u),
    $("videojs.options", u.options),
    $("videojs.players", u.wa),
    $("videojs.cache", u.qa),
    $("videojs.Component", u.c),
    u.c.prototype.player = u.c.prototype.L,
    u.c.prototype.dispose = u.c.prototype.D,
    u.c.prototype.createEl = u.c.prototype.e,
    u.c.prototype.el = u.c.prototype.v,
    u.c.prototype.addChild = u.c.prototype.Z,
    u.c.prototype.children = u.c.prototype.children,
    u.c.prototype.on = u.c.prototype.d,
    u.c.prototype.off = u.c.prototype.n,
    u.c.prototype.one = u.c.prototype.U,
    u.c.prototype.trigger = u.c.prototype.j,
    u.c.prototype.triggerReady = u.c.prototype.Ta,
    u.c.prototype.show = u.c.prototype.show,
    u.c.prototype.hide = u.c.prototype.C,
    u.c.prototype.width = u.c.prototype.width,
    u.c.prototype.height = u.c.prototype.height,
    u.c.prototype.dimensions = u.c.prototype.Tc,
    u.c.prototype.ready = u.c.prototype.M,
    u.c.prototype.addClass = u.c.prototype.m,
    u.c.prototype.removeClass = u.c.prototype.t,
    $("videojs.Player", u.w),
    u.w.prototype.dispose = u.w.prototype.D,
    u.w.prototype.requestFullScreen = u.w.prototype.xa,
    u.w.prototype.cancelFullScreen = u.w.prototype.nb,
    u.w.prototype.bufferedPercent = u.w.prototype.Ia,
    u.w.prototype.usingNativeControls = u.w.prototype.Pb,
    $("videojs.MediaLoader", u.Kc),
    $("videojs.TextTrackDisplay", u.Zb),
    $("videojs.ControlBar", u.Ea),
    $("videojs.Button", u.q),
    $("videojs.PlayToggle", u.Wb),
    $("videojs.FullscreenToggle", u.Fa),
    $("videojs.BigPlayButton", u.Va),
    $("videojs.LoadingSpinner", u.Ub),
    $("videojs.CurrentTimeDisplay", u.Xa),
    $("videojs.DurationDisplay", u.Ya),
    $("videojs.TimeDivider", u.$b),
    $("videojs.RemainingTimeDisplay", u.eb),
    $("videojs.Slider", u.O),
    $("videojs.ProgressControl", u.cb),
    $("videojs.SeekBar", u.Xb),
    $("videojs.LoadProgressBar", u.$a),
    $("videojs.PlayProgressBar", u.Vb),
    $("videojs.SeekHandle", u.fb),
    $("videojs.VolumeControl", u.hb),
    $("videojs.VolumeBar", u.gb),
    $("videojs.VolumeLevel", u.ac),
    $("videojs.VolumeMenuButton", u.na),
    $("videojs.VolumeHandle", u.ib),
    $("videojs.MuteToggle", u.da),
    $("videojs.PosterImage", u.bb),
    $("videojs.Menu", u.la),
    $("videojs.MenuItem", u.N),
    $("videojs.MenuButton", u.R),
    u.R.prototype.createItems = u.R.prototype.sa,
    u.S.prototype.createItems = u.S.prototype.sa,
    u.Da.prototype.createItems = u.Da.prototype.sa,
    $("videojs.SubtitlesButton", u.Ga),
    $("videojs.CaptionsButton", u.Ca),
    $("videojs.ChaptersButton", u.Da),
    $("videojs.MediaTechController", u.r),
    u.r.prototype.features = u.r.prototype.l,
    u.r.prototype.l.volumeControl = u.r.prototype.l.zc,
    u.r.prototype.l.fullscreenResize = u.r.prototype.l.Gd,
    u.r.prototype.l.progressEvents = u.r.prototype.l.Kd,
    u.r.prototype.l.timeupdateEvents = u.r.prototype.l.Pd,
    $("videojs.Html5", u.o),
    u.o.Events = u.o.Za,
    u.o.isSupported = u.o.isSupported,
    u.o.canPlaySource = u.o.lb,
    u.o.prototype.setCurrentTime = u.o.prototype.pd,
    u.o.prototype.setVolume = u.o.prototype.ud,
    u.o.prototype.setMuted = u.o.prototype.sd,
    u.o.prototype.setPreload = u.o.prototype.td,
    u.o.prototype.setAutoplay = u.o.prototype.od,
    u.o.prototype.setLoop = u.o.prototype.rd,
    $("videojs.Flash", u.f),
    u.f.isSupported = u.f.isSupported,
    u.f.canPlaySource = u.f.lb,
    u.f.onReady = u.f.onReady,
    $("videojs.TextTrack", u.X),
    u.X.prototype.label = u.X.prototype.label,
    $("videojs.CaptionsTrack", u.Sb),
    $("videojs.SubtitlesTrack", u.Yb),
    $("videojs.ChaptersTrack", u.Tb),
    $("videojs.autoSetup", u.cc),
    $("videojs.plugin", u.ld),
    $("videojs.createTimeRange", u.sb)
} ();
var AJAXPromiseManager = {
    dataRequestObj: null,
    returnData: null,
    init: function(t) {
        return this.dataRequestObj = this.getData(t),
        this.dataObj(this.dataRequestObj),
        this.returnData
    },
    getData: function(t) {
        var e = "api/nodes/",
        n = ".json",
        i = e + t + n;
        return $.ajax({
            url: i,
            async: !1
        })
    },
    dataObj: function(t) {
        t.success(function(t) {
            AJAXPromiseManager.returnData = t.value.secondaryContent
        })
    }
},
TemplateManager = {
    $secondaryContent: $("#secondaryContent"),
    render: function(t) {
        var e = $("#secondaryContentTemplate").html(),
        n = Handlebars.compile(e);
        this.$secondaryContent.html(n(AJAXPromiseManager.init(t)))
    }
},
SecondaryContentManager = {
    isVisible: !1,
    $secondaryContent: $("#secondaryContent"),
    videoPlayer: null,
    $modal: null,
    $video: null,
    $multimedia: null,
    $gallery: null,
    $singleImage: null,
    $quote: null,
    imagesCountToLoad: 0,
    imageCountLoaded: 0,
    mouseDown: !1,
    mousePos: new THREE.Vector2(0, 0),
    modalWidth: 0,
    init: function() {
        var t = this;
        this.$secondaryContent.on("vclick", "#close, #secondaryClickCatch",
        function(t) {
            return t.preventDefault(),
            t.stopPropagation(),
            Main.handleModalCloseButtonClicked(),
            !1
        }),
        this.$secondaryContent.on("vmousedown", SecondaryContentManager.$modal,
        function(e) {
            t.mouseDown = !0,
            ShareMenu.handleMouseTouchDown(e.clientX, e.clientY)
        }),
        this.$secondaryContent.on("vmouseup", SecondaryContentManager.$modal,
        function(e) {
            e.preventDefault(),
            t.mouseDown = !1,
            ShareMenu.handleMouseTouchUp()
        }),
        this.$secondaryContent.on("vmousemove", SecondaryContentManager.$modal,
        function(e) {
            return t.mousePos.x == e.pageX && t.mousePos.y == e.pageY ? (t.mousePos.set(e.pageX, e.pageY), void 0) : (t.mousePos.set(e.pageX, e.pageY), t.mouseDown && ShareMenu.hideIfVisibleInterruptIfNot(), void 0)
        }),
        this.$secondaryContent.on("mouseleave", SecondaryContentManager.$modal,
        function(t) {
            return t.preventDefault(),
            t.stopPropagation(),
            !1
        }),
        this.$secondaryContent.on("vmousedown vmousemove", ".caption, .description, .longCopy p, .close",
        function(t) {
            t.stopPropagation()
        })
    },
    load: function(t) {
        TemplateManager.render(t),
        this.isVisible = !0,
        !Modernizr.cssanimations || Modernizr.isWindowsPC && Modernizr.isChrome || Main.$scrollableSectionContainer.addClass("blur"),
        this.$modal = null != this.$secondaryContent.find(".modal")[0] ? this.$secondaryContent.find(".modal") : null;
        var e = this.$modal.find("img");
        if (this.imagesCountToLoad = e.length, this.imageCountLoaded = 0, this.imagesCountToLoad > 0) for (var n = 0; n < this.imagesCountToLoad; n++) {
            var i = $(e[n]),
            o = new Image;
            o.onload = function() {
                SecondaryContentManager.imageCountLoaded++,
                SecondaryContentManager.imageCountLoaded >= SecondaryContentManager.imagesCountToLoad && SecondaryContentManager.handleLoadComplete()
            },
            o.src = i.data("img_src"),
            i.attr("src", o.src)
        } else this.handleLoadComplete()
    },
    handleLoadComplete: function() {
        this.$video = null != this.$secondaryContent.find(".video")[0] ? this.$secondaryContent.find(".video") : null,
        this.$gallery = null != this.$secondaryContent.find(".gallery")[0] ? this.$secondaryContent.find(".gallery") : null,
        this.$multimedia = null != this.$secondaryContent.find(".multimedia")[0] ? this.$secondaryContent.find(".multimedia") : null,
        this.$singleImage = null != this.$secondaryContent.find(".image")[0] ? this.$secondaryContent.find(".image") : null,
        this.$quote = null != this.$secondaryContent.find(".simpleCopy")[0] ? this.$secondaryContent.find(".simpleCopy") : null,
        this.$secondaryContent.show(),
        null != this.$video && (PrimarySoundtrackManager.pauseCurrentSounds(), this.initVideo()),
        null != this.$multimedia && (PrimarySoundtrackManager.pauseCurrentSounds(), this.initAudio()),
        null != this.$gallery && this.initGallery(),
        null != this.$singleImage && this.initSingleImage(),
        null != this.$quote && this.initQuote(),
        Modernizr.opacity || Modernizr.touch || (this.modalWidth = this.$modal.outerWidth()),
        null === this.$singleImage && this.positionModal()
    },
    initVideo: function() {
        SecondaryVideoManager.init(this.$video)
    },
    initQuote: function() {
        QuoteManager.init(this.$quote)
    },
    initGallery: function() {
        this.$gallery.find("section").eq(0).addClass("default"),
        GalleryManager.init(this.$gallery)
    },
    initSingleImage: function() {
        SingleImageManager.init(this.$singleImage)
    },
    initAudio: function() {
        SecondarySoundtrackManager.init(this.$multimedia)
    },
    showModal: function() {
        Modernizr.cssanimations ? this.$secondaryContent.css("visibility", "visible").addClass("active") : (this.$secondaryContent.hide(), this.$secondaryContent.css("visibility", "visible"), this.$secondaryContent.fadeIn(100)),
        DropletManager.deactivate()
    },
    positionModal: function(t) {
        var e = this.CenterSectionContainerObj.heightHalf - this.$modal.outerHeight() / 2,
        n = -this.$modal.outerWidth() / 2;
        void 0 !== t && (e = this.CenterSectionContainerObj.heightHalf - t / 2),
        Modernizr.touch ? (this.$modal.css({
            top: 75
        }), null == this.$gallery && this.$modal.css({
            marginLeft: n
        })) : (this.$modal.css({
            top: e
        }), null === this.$gallery && this.$modal.css({
            marginLeft: n
        })),
        this.showModal()
    },
    handleWindowResize: function(t) {
        this.CenterSectionContainerObj = t,
        this.isVisible && Main.handleModalCloseButtonClicked()
    },
    kill: function() {
        this.isVisible = !1,
        null != this.$video && SecondaryVideoManager.kill(),
        null != this.$gallery && GalleryManager.resetAnim(),
        null != this.$singleImage && SingleImageManager.resetAnim(),
        Modernizr.cssanimations ? this.$secondaryContent.removeClass("active") : (this.$secondaryContent.fadeOut(200), this.$secondaryContent.css("visibility", "hidden")),
        setTimeout(function() {
            SecondaryContentManager.$secondaryContent.css("visibility", "hidden").children().remove()
        },
        200),
        Main.$scrollableSectionContainer.removeClass("blur")
    }
};
HashManager.prototype.init = function(t) {
    this.$footerLanguageAnchorTags = $("#footerMain li span a"),
    this.hashChangeCallback = t,
    this.handleChange(),
    this.enableListener()
},
HashManager.prototype.enableListener = function() {
    var t = this;
    $(window).on("hashchange",
    function(e) {
        return t.handleChange(),
        e.preventDefault(),
        e.stopPropagation(),
        !1
    })
},
HashManager.prototype.disableListener = function() {
    $(window).off("hashchange")
},
HashManager.prototype.handleChange = function() {
    this.previousHashArray = this.currentHashArray.slice(0),
    this.currentHashArray = this.getHashArray(),
    this.hashChangeCallback(this.previousHashArray, this.currentHashArray, this.isInitHashChange),
    this.isInitHashChange = !1,
    _gaq.push(["_trackPageview", "/" + this.getHashArray().join("/")])
},
HashManager.prototype.setHash = function(t, e) {
    var n = this.getHashArray(),
    i = n[0] == t;
    n[0] = String(t),
    !e && n[1] ? n.splice(1, 1) : null != e && (n[1] = String(e)),
    this.set(n),
    i && this.handleChange()
},
HashManager.prototype.getHashArray = function() {
    for (var t = window.location.hash.split("/"), e = 0; e < t.length; e++) for (var n = 0; n < this.BAD_HASH_STR_ARRAY.length; n++) if (t[e] == this.BAD_HASH_STR_ARRAY[n]) {
        t.splice(e, 1),
        e--;
        break
    }
    return t
},
HashManager.prototype.set = function(t) {
    var e = "";
    t.length > 0 && (e = "#!", e += "/" + String(t[0])),
    window.location.hash = e
},
Section.prototype.update = function(t, e, n, i, o) {
    this.scrollPositionY = t;
    var a = this.isInView;
    null != this.scrollPositionY && (a = this.scrollPositionY >= this.viewableScrollPositionRangeCropped.min && this.scrollPositionY <= this.viewableScrollPositionRangeCropped.max),
    a ? ((!this.isInView || this.isInitUpdate) && (this.isInView = !0, this.show()), this.updateElements(this.scrollPositionY, e, n, i, o), this.sectionData.onUpdate(this.sectionData, this.scrollPositionY, n)) : (this.isInView || this.isInitUpdate) && (this.isInView = !1, this.scrollPositionY = this.scrollPositionY < this.viewableScrollPositionRange.min ? this.viewableScrollPositionRange.min: this.viewableScrollPositionRange.max, this.hide(), this.sectionData.onUpdate(this.sectionData, this.scrollPositionY, n)),
    this.isInitUpdate = !1
},
Section.prototype.show = function() {
    this.$elem.css({
        display: this.initSectionDisplay
    }),
    this.resizeAndShowAllElements(),
    this.sectionData.onShow(this.sectionData)
},
Section.prototype.hide = function() {
    0 != this.sectionData.isSectionHidable && this.$elem.css({
        display: "none"
    }),
    this.sectionData.onHide(this.sectionData)
},
Section.prototype.load = function() {
    if (!this.isInitAndLoaded) {
        this.isInitAndLoaded = !0;
        var t = Handlebars.compile($("#" + this.sectionData.templateStr).html()),
        e = String(t());
        this.$elem.append(e),
        (Modernizr.isMobile || Modernizr.touch) && this.$elem.find(".poem").each(function() {
            var t = $(this).html();
            t = t.replace(/<br>/gi, " "),
            $(this).html(t)
        }),
        this.initAllSectionElements(),
        this.sectionData.onLoad && this.sectionData.onLoad(this.sectionData)
    }
},
Section.prototype.unload = function() {
    if (this.isInitAndLoaded) {
        this.isInitAndLoaded = !1;
        for (var t = 0; t < this.numOfElements; t++) this.elements[t].unload(),
        this.elements[t] = null,
        delete this.elements[t];
        this.elements = [],
        this.sectionData.onUnload && this.sectionData.onUnload(this.sectionData)
    }
    this.sectionData.onHide(this.sectionData),
    this.$elem.empty()
},
Section.prototype.setResize = function(t, e) {
    if (this.viewportScaleMultiplier = t, this.viewportTranslateOffsets = e, this.isInView) {
        for (var n = 0; n < this.numOfElements; n++) this.elements[n].onScaleChange(this.viewportScaleMultiplier, this.viewportTranslateOffsets);
        this.sectionData.onResize && this.sectionData.onResize(this.sectionData)
    }
},
Section.prototype.updateElements = function(t, e, n, i, o) {
    for (var a = 0; a < this.numOfElements; a++) this.elements[a].update(t, e, n, i, o)
},
Section.prototype.resizeAndShowAllElements = function() {
    for (var t = 0; t < this.numOfElements; t++) this.elements[t].resizeAndShow(this.viewportScaleMultiplier, this.viewportTranslateOffsets)
},
Section.prototype.hideAllElements = function() {
    for (var t = 0; t < this.numOfElements; t++) this.elements[t].hide()
},
Section.prototype.initAllSectionElements = function() {
    for (var t = !1,
    e = 0; e < this.numOfElements; e++) Modernizr.isMobile ? $(this.sectionData.elements[e].selectorString).hasClass("secondaryIcon") || (t = !0) : t = !0,
    t && (this.elements.push(new SectionElement(this.sectionData.elements[e], this.viewableScrollPositionRange.min, this.TIMELINE_SCALER, this.defaultParallax)), this.elements[e].load())
},
SectionElement.prototype.interpolateKeyFrames = function() {
    var t = [];
    if (this.hasKeyframes) {
        for (var e = 0; e < this.numOfKeyframes; e++) {
            var n = this.keyframes[e];
            for (key in n.styles) t.push(key),
            "translate" == key && (n.styles[key].x.isAPercentageValue() ? n.styles[key].x = parseFloat(n.styles[key].x) / 100 * Main.centerSectionContainer.width: n.styles[key].x.isAPixelValue() && (n.styles[key].x = parseFloat(n.styles[key].x)), n.styles[key].y.isAPercentageValue() ? n.styles[key].y = parseFloat(n.styles[key].y) / 100 * Main.centerSectionContainer.height: n.styles[key].y.isAPixelValue() && (n.styles[key].y = parseFloat(n.styles[key].y)))
        }
        t = t.unique();
        for (var e = 0; e < this.numOfKeyframes; e++) for (var n = this.keyframes[e], i = 0; i < t.length; i++) {
            var o = t[i];
            if (null == n.styles[o]) {
                var a = this.getPrevKeyframeIndexWithStyleProperty(e, o),
                r = this.getNextKeyframeIndexWithStyleProperty(e, o);
                if (null == a) {
                    var s = this.keyframes[r].styles[o];
                    n.styles[o] = isNaN(s) ? $.extend(!0, {},
                    s) : s
                } else if (null == r) {
                    var l = this.keyframes[a].styles[o];
                    n.styles[o] = isNaN(l) ? $.extend(!0, {},
                    l) : l
                } else {
                    var u = this.keyframes[a].styles,
                    c = this.keyframes[r].styles,
                    h = this.keyframes[r].scrollYPos - this.keyframes[a].scrollYPos,
                    d = (n.scrollYPos - this.keyframes[a].scrollYPos) / h;
                    n.styles[o] = this.getInterpolatedKeyframeStylePropertyValue(u, c, d, o)
                }
            }
        }
    }
},
SectionElement.prototype.getNativeOnScreenStyle = function() {
    var t = this.$elem.css(CSS_STYLE_LIST);
    if (t.transformOrigin = {
        x: 0,
        y: 0
    },
    t.lockupParallax = null, t.defaultParallax = null, t["background-position-x"] && t["background-position-y"] && (t.backgroundPosition = {
        x: parseFloat(t["background-position-x"]),
        y: parseFloat(t["background-position-y"])
    }), t["background-size"]) {
        var e = t["background-size"].split(" ");
        t.backgroundSize = {
            x: parseFloat(e[0]),
            y: parseFloat(e[1])
        }
    }
    if (this.$elemData.transform_origin) {
        var n = this.$elemData.transform_origin.split(" ");
        t.transformOrigin = {
            x: parseFloat(n[0]),
            y: parseFloat(n[1])
        }
    }
    if (this.$elemData.default_parallax) {
        var i = this.$elemData.default_parallax.split(" ");
        t.defaultParallax = {
            x: parseFloat(i[0]),
            y: parseFloat(i[1])
        }
    } else t.defaultParallax = this.DEFAULT_PARALLAX;
    if (this.$elemData.lockup_parallax) {
        var i = this.$elemData.lockup_parallax.split(" ");
        t.lockupParallax = {
            x: parseFloat(i[0]) - t.defaultParallax.x,
            y: parseFloat(i[1]) - t.defaultParallax.y
        }
    }
    return t
},
SectionElement.prototype.onScaleChange = function(t, e) {
    if (this.viewportScaleMultiplier = t, this.viewportTranslateOffsets = e, this.$elem.removeAttr("style"), this.nativeOnScreenStyle = this.getNativeOnScreenStyle(), this.scaledOnScreenStyle = $.extend(!0, [], this.nativeOnScreenStyle), this.elemWidth = this.$elem.width(), this.elemHeight = this.$elem.height(), this.scaledOnScreenStyle.left = "auto" != this.scaledOnScreenStyle.left && "inherit" != this.scaledOnScreenStyle.left ? this.scaledOnScreenStyle.left.isAPercentageValue() ? parseFloat(this.scaledOnScreenStyle.left) / 100 * Main.centerSectionContainer.width: parseFloat(this.scaledOnScreenStyle.left) : this.scaledOnScreenStyle.right.isAPercentageValue() ? Main.centerSectionContainer.width - this.elemWidth - Main.centerSectionContainer.width * (parseFloat(this.scaledOnScreenStyle.right) / 100) : Main.centerSectionContainer.width - parseFloat(this.scaledOnScreenStyle.right) - this.elemWidth, this.scaledOnScreenStyle.top = "auto" != this.scaledOnScreenStyle.top && "inherit" != this.scaledOnScreenStyle.top ? this.scaledOnScreenStyle.top.isAPercentageValue() ? parseFloat(this.scaledOnScreenStyle.top) / 100 * Main.centerSectionContainer.height: parseFloat(this.scaledOnScreenStyle.top) : this.scaledOnScreenStyle.bottom.isAPercentageValue() ? Main.centerSectionContainer.height - this.elemHeight - Main.centerSectionContainer.height * (parseFloat(this.scaledOnScreenStyle.bottom) / 100) : Main.centerSectionContainer.height - parseFloat(this.scaledOnScreenStyle.bottom) - this.elemHeight, this.scaledOnScreenStyle.left = parseFloat(this.scaledOnScreenStyle.left), this.scaledOnScreenStyle.right = parseFloat(this.scaledOnScreenStyle.right), this.scaledOnScreenStyle.top = parseFloat(this.scaledOnScreenStyle.top), this.scaledOnScreenStyle.bottom = parseFloat(this.scaledOnScreenStyle.bottom), this.scaledOnScreenStyle.width = parseFloat(this.scaledOnScreenStyle.width), this.scaledOnScreenStyle.height = parseFloat(this.scaledOnScreenStyle.height), this.isResponsiveToCenterSectionContainer || (this.scaledOnScreenStyle.left *= this.viewportScaleMultiplier, this.scaledOnScreenStyle.top *= this.viewportScaleMultiplier, this.scaleOffsetDisabled || (this.scaledOnScreenStyle.left += this.viewportTranslateOffsets.x, this.scaledOnScreenStyle.top += this.viewportTranslateOffsets.y), this.scaledOnScreenStyle.width *= this.viewportScaleMultiplier, this.scaledOnScreenStyle.height *= this.viewportScaleMultiplier, this.isSpritesheet || (this.scaledOnScreenStyle.width = Math.ceil(this.scaledOnScreenStyle.width), this.scaledOnScreenStyle.height = Math.ceil(this.scaledOnScreenStyle.height))), this.scaledOnScreenStyle.scale = this.viewportScaleMultiplier, this.scaledOnScreenStyle.backgroundPosition && (this.scaledOnScreenStyle.backgroundPosition.x *= this.viewportScaleMultiplier, this.scaledOnScreenStyle.backgroundPosition.y *= this.viewportScaleMultiplier), this.scaledOnScreenStyle.backgroundSize && (this.scaledOnScreenStyle.backgroundSize.x *= this.viewportScaleMultiplier, this.scaledOnScreenStyle.backgroundSize.y *= this.viewportScaleMultiplier), this.scaledOnScreenStyle.transformOrigin.x *= this.viewportScaleMultiplier, this.scaledOnScreenStyle.transformOrigin.y *= this.viewportScaleMultiplier, this.scaledOnScreenStyle.defaultParallax.x *= this.viewportScaleMultiplier, this.scaledOnScreenStyle.defaultParallax.y *= this.viewportScaleMultiplier, this.scaledOnScreenStyle.lockupParallax && (this.scaledOnScreenStyle.lockupParallax.x *= this.viewportScaleMultiplier, this.scaledOnScreenStyle.lockupParallax.y *= this.viewportScaleMultiplier, this.scaleOffsetDisabled || (this.scaledOnScreenStyle.lockupParallax.x -= this.viewportTranslateOffsets.x, this.scaledOnScreenStyle.lockupParallax.y -= this.viewportTranslateOffsets.y)), (Modernizr.csstransforms || Modernizr.csstransforms3d) && !this.isVideo) {
        var n = {
            "transform-origin": this.scaledOnScreenStyle.transformOrigin.x + "px " + this.scaledOnScreenStyle.transformOrigin.y + "px",
            "-webkit-transform-origin": this.scaledOnScreenStyle.transformOrigin.x + "px " + this.scaledOnScreenStyle.transformOrigin.y + "px",
            "-moz-transform-origin": this.scaledOnScreenStyle.transformOrigin.x + "px " + this.scaledOnScreenStyle.transformOrigin.y + "px",
            "-o-transform-origin": this.scaledOnScreenStyle.transformOrigin.x + "px " + this.scaledOnScreenStyle.transformOrigin.y + "px",
            "-ms-transform-origin": this.scaledOnScreenStyle.transformOrigin.x + "px " + this.scaledOnScreenStyle.transformOrigin.y + "px"
        };
        this.isResponsiveToCenterSectionContainer || (n.left = this.scaledOnScreenStyle.left + "px", n.top = this.scaledOnScreenStyle.top + "px", n.width = this.scaledOnScreenStyle.width + "px", n.height = this.scaledOnScreenStyle.height + "px"),
        this.$elem.css(n)
    }
    if (this.rawKeyframes && (this.keyframes = $.extend(!0, [], this.rawKeyframes), this.interpolateKeyFrames()), !this.isResponsiveToCenterSectionContainer && this.keyframes) for (var i = 0; i < this.numOfKeyframes; i++) {
        var o = this.keyframes[i];
        o.styles && o.styles.translate && (o.styles.translate.x *= this.viewportScaleMultiplier, o.styles.translate.y *= this.viewportScaleMultiplier)
    }
    this.$elem.css(this.getCalculatedCSS())
},
SectionElement.prototype.update = function(t, e, n, i, o) {
    var a = !1;
    e && (a = !0, this.updateParallaxStyles(e, i, o)),
    null != t && this.hasKeyframes && (a = !0, this.updateScrollStyles(t)),
    this.spriteSheet && this.spriteSheet.animInterval && (a = !0, this.setSpriteSheetFrameIndexBasedOnAnimInterval(n)),
    a && this.$elem.css(this.getCalculatedCSS())
},
SectionElement.prototype.updateParallaxStyles = function(t, e, n) {
    if (this.scaledOnScreenStyle.lockupParallax) {
        if (e || n) {
            var i = this,
            o = e ? 1 : 0;
            TWEEN.remove(this.parallaxTransitionTween),
            this.parallaxTransitionTween = new TWEEN.Tween(this).to({
                parallaxLockupTransitionPercentage: o
            },
            1 == o ? 3e3: 200).easing(TWEEN.Easing.Sinusoidal.Out).onComplete(function() {
                i.parallaxTransitionTween = null
            }).start()
        }
        this.currentStyle.translateOffsetParallax = {
            x: t.x * (this.scaledOnScreenStyle.defaultParallax.x + this.parallaxLockupTransitionPercentage * this.scaledOnScreenStyle.lockupParallax.x),
            y: t.y * (this.scaledOnScreenStyle.defaultParallax.y + this.parallaxLockupTransitionPercentage * this.scaledOnScreenStyle.lockupParallax.y)
        }
    } else this.currentStyle.translateOffsetParallax = {
        x: t.x * this.scaledOnScreenStyle.defaultParallax.x,
        y: t.y * this.scaledOnScreenStyle.defaultParallax.y
    }
},
SectionElement.prototype.setSpriteSheetFrameIndexBasedOnAnimInterval = function(t) {
    this.spriteSheet.currentUpdateMS += t,
    this.spriteSheet.currentUpdateMS > this.spriteSheet.animLoopDuration && (this.spriteSheet.currentUpdateMS -= this.spriteSheet.animLoopDuration),
    this.currentStyle.spriteFrameIndex = this.spriteSheet.currentUpdateMS / this.spriteSheet.animInterval
},
SectionElement.prototype.updateSpriteSheetStyleUsingAnimFrameIndex = function(t) {
    var e = this.spriteSheet.frameAnimSequence[t],
    n = Math.floor(e / this.spriteSheet.totalColumns),
    i = e - n * this.spriteSheet.totalColumns;
    this.currentStyle.backgroundPosition = {
        x: -this.scaledOnScreenStyle.width * i,
        y: -this.scaledOnScreenStyle.height * n
    },
    this.scaledOnScreenStyle.backgroundSize && (this.currentStyle.backgroundSize = {
        x: this.scaledOnScreenStyle.backgroundSize.x,
        y: this.scaledOnScreenStyle.backgroundSize.y
    })
},
SectionElement.prototype.updateScrollStyles = function(t) {
    var e = this.getPrevKeyframeFromScrollPositionY(t),
    n = this.getNextKeyframeFromScrollPositionY(t),
    i = e == n ? 1 : (t - e.scrollYPos) / (n.scrollYPos - e.scrollYPos);
    for (key in e.styles) {
        var o = key;
        this.currentStyle[o] = this.getInterpolatedKeyframeStylePropertyValue(e.styles, n.styles, e.easing ? e.easing(i) : i, o)
    }
},
SectionElement.prototype.getInterpolatedKeyframeStylePropertyValue = function(t, e, n, i) {
    var o = null;
    return null != t[i].x && null != t[i].y ? o = {
        x: t[i].x + (e[i].x - t[i].x) * n,
        y: t[i].y + (e[i].y - t[i].y) * n
    }: isNaN(t[i]) || (o = t[i] + (e[i] - t[i]) * n),
    o
},
SectionElement.prototype.getPrevKeyframeFromScrollPositionY = function(t) {
    for (var e = this.numOfKeyframes - 1; e >= 0; e--) if (this.keyframes[e].scrollYPos <= t || 0 == e) return this.keyframes[e]
},
SectionElement.prototype.getNextKeyframeFromScrollPositionY = function(t) {
    for (var e = 0; e < this.numOfKeyframes; e++) if (this.keyframes[e].scrollYPos >= t || e == this.numOfKeyframes - 1) return this.keyframes[e]
},
SectionElement.prototype.getPrevKeyframeIndexWithStyleProperty = function(t, e) {
    for (var n = null,
    i = t; i >= 0; i--) if (null != this.keyframes[i].styles[e]) {
        n = i;
        break
    }
    return n
},
SectionElement.prototype.getNextKeyframeIndexWithStyleProperty = function(t, e) {
    for (var n = null,
    i = t; i < this.numOfKeyframes; i++) if (null != this.keyframes[i].styles[e]) {
        n = i;
        break
    }
    return n
},
SectionElement.prototype.getCalculatedCSS = function() {
    var t = {},
    e = {
        x: this.currentStyle.translate.x + this.currentStyle.translateOffsetParallax.x,
        y: this.currentStyle.translate.y + this.currentStyle.translateOffsetParallax.y
    };
    return t = this.updateTransforms(t, e),
    this.spriteSheet && null != this.currentStyle.spriteFrameIndex && (this.updateSpriteSheetStyleUsingAnimFrameIndex(Math.floor(this.currentStyle.spriteFrameIndex)), t["background-size"] = this.currentStyle.backgroundSize.x + "px " + this.currentStyle.backgroundSize.y + "px", Modernizr.bgpositionshorthand ? t["background-position"] = this.currentStyle.backgroundPosition.x + "px " + this.currentStyle.backgroundPosition.y + "px": (t["background-position-x"] = this.currentStyle.backgroundPosition.x + "px", t["background-position-y"] = this.currentStyle.backgroundPosition.y + "px")),
    t = this.updateOpacity(t),
    t.display = this.currentStyle.opacity <= 0 ? "none": this.nativeOnScreenStyle.display,
    t
},
SectionElement.prototype.setCSSTransforms3D = function(t, e) {
    var n = "";
    return n += "translate3d(" + e.x + "px, " + e.y + "px, 0px) ",
    n += "scale(" + this.currentStyle.scale.x + ", " + this.currentStyle.scale.y + ") ",
    n += "rotate(" + this.currentStyle.rotate + "deg) ",
    t.transform = n,
    t["-moz-transform"] = n,
    t["-o-transform"] = n,
    t["-ms-transform"] = n,
    t
},
SectionElement.prototype.setCSSTransforms = function(t, e) {
    var n = "";
    return n += "translate(" + e.x + "px, " + e.y + "px) ",
    n += "scale(" + this.currentStyle.scale.x + ", " + this.currentStyle.scale.y + ") ",
    n += "rotate(" + this.currentStyle.rotate + "deg) ",
    t.transform = n,
    t["-moz-transform"] = n,
    t["-o-transform"] = n,
    t["-ms-transform"] = n,
    t
},
SectionElement.prototype.setCSSNoTransforms = function(t, e) {
    var n = {
        x: (1 - this.currentStyle.scale.x) * this.scaledOnScreenStyle.transformOrigin.x,
        y: (1 - this.currentStyle.scale.y) * this.scaledOnScreenStyle.transformOrigin.y
    };
    return t.left = this.scaledOnScreenStyle.left + e.x + n.x + "px",
    t.top = this.scaledOnScreenStyle.top + e.y + n.y + "px",
    this.isResponsiveToCenterSectionContainer || (t.width = this.scaledOnScreenStyle.width * this.currentStyle.scale.x + "px", t.height = this.scaledOnScreenStyle.height * this.currentStyle.scale.y + "px"),
    t
},
SectionElement.prototype.setCSSOpacity = function(t) {
    return t.opacity = this.currentStyle.opacity,
    t
},
SectionElement.prototype.setCSSNoOpacity = function(t) {
    var e = Math.round(100 * this.currentStyle.opacity);
    return t.filter = "alpha(opacity=" + e + ")",
    t["-ms-filter"] = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + e + ")",
    t.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + e + ")",
    t
},
SectionElement.prototype.load = function() {
    this.isImg && this.$elem.attr("src", this.$elemData.img_src)
},
SectionElement.prototype.unload = function() {
    this.isDisplayNoneDisabled || this.$elem.removeAttr("style"),
    this.hide(),
    this.isImg && this.$elem.attr("src", "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),
    this.rawKeyframes = this.keyframes = this.scaledOnScreenStyle = null
},
SectionElement.prototype.resizeAndShow = function(t, e) {
    this.$elem.css({
        display: this.nativeOnScreenStyle.display
    }),
    this.onScaleChange(t, e)
},
SectionElement.prototype.hide = function() {
    this.isDisplayNoneDisabled || this.$elem.css({
        display: "none"
    })
},
String.prototype.isAPercentageValue = function() {
    return "%" == this.charAt(this.length - 1)
},
String.prototype.isAPixelValue = function() {
    return "px" == this.substr(this.length - 2, 2)
},
Array.prototype.unique = function() {
    var t, e = {},
    n = this.length,
    i = [];
    for (t = 0; n > t; t += 1) e[this[t]] = this[t];
    for (t in e) i.push(e[t]);
    return i
};
var Nav = {
    $centerSectionContainer: $("#centerSectionContainer"),
    $superMenuTrigger: $("#superMenuTrigger"),
    $superMenu: $("#superMenu"),
    $chapterIndicator: $("#superMenuTrigger span"),
    $globalAudio: $("#globalAudio"),
    $header: $("#headerBlocker"),
    mutePrimarySound: !1,
    isNavActive: !0,
    inactiveScrollYPosRangeArray: [[250, 750], [12250, 12750], [26750, 27250], [45750, 46250], [48750, 49250]],
    inactiveScrollYPosRangeArrayLength: 0,
    init: function() {
        var t = this;
        this.inactiveScrollYPosRangeArrayLength = this.inactiveScrollYPosRangeArray.length,
        this.$superMenuTrigger.on("vclick",
        function(t) {
            return t.preventDefault(),
            _gaq.push(["_trackEvent", "Killing Kennedy", "Menu Click", "Menu"]),
            Nav.superMenu.active ? Nav.superMenu.deactivate() : Nav.superMenu.activate(),
            !1
        }),
        this.$globalAudio.on("vclick",
        function(e) {
            e.preventDefault(),
            t.mutePrimarySound ? (t.unmuteSounds(), _gaq.push(["_trackEvent", "Killing Kennedy", "Mute Click", "Mute", "Off"])) : (t.muteSounds(), _gaq.push(["_trackEvent", "Killing Kennedy", "Mute Click", "Mute", "On"]))
        }),
        $(".email, .emailIcon").on("vclick",
        function() {
            setTimeout(function() {
                _gaq.push(["_trackEvent", "Killing Kennedy", "Share site email", window.location.hash])
            },
            200)
        })
    },
    muteSounds: function() {
        this.mutePrimarySound = !0,
        PrimarySoundtrackManager.mute(),
        FullScreenVideoManager.mute(),
        this.$globalAudio.removeClass("on").addClass("off"),
        "undefined" != typeof Storage && (localStorage.mutePrimarySound = !0)
    },
    unmuteSounds: function() {
        this.mutePrimarySound = !1,
        PrimarySoundtrackManager.unmute(),
        FullScreenVideoManager.unmute(),
        this.$globalAudio.removeClass("off").addClass("on"),
        "undefined" != typeof Storage && (localStorage.mutePrimarySound = !1)
    },
    superMenu: {
        active: !1,
        activate: function() {
            this.active || (DropletManager.deactivate(), $("#scrollbarScrubber").fadeOut(), Modernizr.cssanimations ? (this.active = !0, Nav.$superMenuTrigger.addClass("active"), Nav.$superMenu.addClass("active"), Main.centerSectionContainer.$elem.addClass("active")) : (this.active = !0, Nav.$superMenuTrigger.addClass("active"), Nav.$superMenu.css({
                visibility: "visible"
            }), Nav.$superMenu.animate({
                right: "160"
            }), Main.centerSectionContainer.$elem.animate({
                right: "160"
            })))
        },
        deactivate: function() {
            this.active && ($("#scrollbarScrubber").fadeIn(), Modernizr.cssanimations ? (this.active = !1, Nav.$superMenuTrigger.removeClass("active"), Nav.$superMenu.removeClass("active"), Main.centerSectionContainer.$elem.removeClass("active")) : (this.active = !1, Nav.$superMenuTrigger.removeClass("active"), Nav.$superMenu.css({
                visibility: "hidden"
            }), Nav.$superMenu.animate({
                right: "0"
            }), Main.centerSectionContainer.$elem.animate({
                right: "0"
            })))
        }
    },
    handleChapterChange: function(t) {
        0 == t ? this.$chapterIndicator.text("MENU") : this.$chapterIndicator.text("CH " + t)
    },
    updateUsingScrollYPos: function(t) {
        this.isScrollPositionWithinInactiveRange(t) && this.isNavActive ? (this.isNavActive = !1, this.$header.addClass("active")) : this.isScrollPositionWithinInactiveRange(t) || this.isNavActive || (this.isNavActive = !0, this.$header.removeClass("active"))
    },
    isScrollPositionWithinInactiveRange: function(t) {
        for (var e = 0; e < this.inactiveScrollYPosRangeArrayLength; e++) if (this.inactiveScrollYPosRangeArray[e][0] < t && t < this.inactiveScrollYPosRangeArray[e][1]) return ! 0;
        return ! 1
    }
},
MobileNav = {
    $smallMenuTrigger: $("#smallMenuTrigger"),
    $smallNavContainer: $("#smallNavContainer"),
    $smallSuperMenu: $("#smallSuperMenu"),
    $dragElem: null,
    active: !1,
    touching: !1,
    superMenuWidth: 0,
    superMenuVisibleWidth: 0,
    superMenuHiddenWidth: 0,
    deviceWidth: 0,
    moveDistance: 0,
    newMoveDistance: 0,
    dragItemWidth: 0,
    init: function() {
        this.getDeviceWidth(),
        this.$dragElem = this.$smallSuperMenu.find("ul"),
        this.dragItemWidth = this.$dragElem.find("li").eq(0).outerWidth(),
        this.superMenuWidth = this.$dragElem.outerWidth(),
        this.superMenuVisibleWidth = .85 * this.deviceWidth,
        this.superMenuHiddenWidth = this.$dragElem.outerWidth() - this.superMenuVisibleWidth,
        this.swipeEvents(),
        this.getMoveDistance(),
        this.$smallMenuTrigger.on("click",
        function(t) {
            return t.preventDefault(),
            MobileNav.active ? MobileNav.deactivate() : MobileNav.activate(),
            !1
        })
    },
    getMoveDistance: function() {
        this.superMenuVisibleWidth >= this.dragItemWidth ? this.moveDistance = this.dragItemWidth: this.superMenuVisibleWidth >= 2 * this.dragItemWidth ? this.moveDistance = 2 * this.dragItemWidth: this.superMenuVisibleWidth >= 3 * this.dragItemWidth && (this.moveDistance = 3 * this.dragItemWidth)
    },
    getDeviceWidth: function() {
        this.deviceWidth = $(window).width()
    },
    activate: function() {
        this.active || ($("#scrollbarScrubber").fadeOut(), this.active = !0, this.$smallMenuTrigger.addClass("active"), this.$smallNavContainer.addClass("active"), Main.centerSectionContainer.$elem.addClass("activeMobile"))
    },
    deactivate: function() {
        this.active && ($("#scrollbarScrubber").fadeIn(), this.active = !1, this.$smallMenuTrigger.removeClass("active"), this.$smallNavContainer.removeClass("active"), Main.centerSectionContainer.$elem.removeClass("activeMobile"))
    },
    swipeEvents: function() {
        var t = this;
        this.$dragElem.on("swipeleft",
        function() {
            t.getSwipeLeftDistance(),
            t.$dragElem.css({
                left: t.newMoveDistance
            })
        }),
        this.$dragElem.on("swiperight",
        function() {
            t.getSwipeRightDistance(),
            t.$dragElem.css({
                left: t.newMoveDistance
            })
        })
    },
    getSwipeLeftDistance: function() {
        var t = parseFloat(this.$dragElem.css("left")),
        e = -Math.abs(this.moveDistance);
        this.newMoveDistance = t + e,
        Math.abs(this.newMoveDistance) + this.superMenuVisibleWidth >= Math.abs(this.superMenuWidth) && (this.newMoveDistance = -Math.abs(this.superMenuWidth) + this.superMenuVisibleWidth),
        0 == this.newMoveDistance && (this.newMoveDistance = -Math.abs(this.moveDistance))
    },
    getSwipeRightDistance: function() {
        var t = parseFloat(this.$dragElem.css("left"));
        this.newMoveDistance = t + Math.abs(this.dragItemWidth),
        Math.abs(t) - this.moveDistance <= 0 && (this.newMoveDistance = 0)
    }
},
DropletManager = {
    active: !1,
    $dropletTrigger: null,
    $droplet: null,
    dropGap: 20,
    originPos: {},
    init: function() {
        var t = this;
        Modernizr.cssanimations || $("[data-dropID]").hide(),
        $("[data-drop]").on("vclick",
        function(e) {
            return e.preventDefault(),
            DropletManager.$dropletTrigger = $(this),
            DropletManager.$droplet = $("[data-dropID=" + DropletManager.$dropletTrigger.data("drop") + "]"),
            t.getPosition(),
            t.checkActiveState($(this)),
            !1
        })
    },
    getPosition: function() {
        DropletManager.originPos.x = DropletManager.$dropletTrigger.offset().left + DropletManager.$dropletTrigger.outerWidth() / 2,
        DropletManager.originPos.y = DropletManager.$dropletTrigger.offset().top + DropletManager.$dropletTrigger.outerHeight()
    },
    checkActiveState: function(t) {
        DropletManager.active ? DropletManager.active && t.hasClass("active") ? DropletManager.deactivate() : DropletManager.active && !t.hasClass("active") && (DropletManager.deactivate(), DropletManager.activate()) : DropletManager.activate()
    },
    activate: function(t) {
        void 0 !== t && (this.$droplet = $("[data-dropID=" + t + "]"), this.$dropletTrigger = $("[data-drop=" + t + "]"), this.getPosition(), this.checkActiveState(this.$dropletTrigger)),
        this.active = !0,
        Nav.superMenu.deactivate(),
        this.$dropletTrigger.addClass("active"),
        this.$droplet.css({
            display: "block",
            top: this.originPos.y + this.dropGap,
            left: this.originPos.x - this.$droplet.outerWidth() / 2
        }),
        Modernizr.cssanimations ? this.$droplet.addClass("active") : this.$droplet.css({
            "-ms-transform": "scale(1)",
            visibility: "visible",
            opacity: "1"
        }).fadeIn()
    },
    deactivate: function() {
        this.active = !1,
        Modernizr.cssanimations && !Modernizr.touch ? ($("[data-drop]").removeClass("active"), $("[data-dropID]").removeClass("active")) : Modernizr.cssanimations && Modernizr.touch ? ($("[data-drop]").removeClass("active"), $("[data-dropID]").hide().removeClass("active")) : ($("[data-drop]").removeClass("active"), $("[data-dropID]").css({
            "-ms-transform": "scale(1)",
            visibility: "hidden",
            opacity: "0"
        }).fadeOut())
    }
},
ShareManager = {
    $shareButtonElem: null,
    init: function() {
        this.$shareButtonElem = $("#shareButton"),
        $("[data-gshare]").on("vclick",
        function(t) {
            t.preventDefault(),
            ShareManager.handleShareClick("site", $(this).data("network"))
        }),
        this.$shareButtonElem.on("vclick",
        function(t) {
            return ShareManager.handleShareClick(),
            t.preventDefault(),
            t.stopPropagation(),
            !1
        })
    },
    handleShareClick: function(t, e) {
        link = "inline" == t ? encodeURIComponent(document.URL.replace("#!/", "")) : window.location.protocol + "//" + window.location.host;
        var n, i, o, a, r = window.screen.width / 2 - 410,
        s = window.screen.height / 2 - 300,
        l = "inline" == t ? Main.hashManager.getHashArray()[Main.hashManager.getHashArray().length - 1] : "default";
        $.ajax({
            type: "GET",
            url: "/api/metas/" + l + ".json"
        }).done(function(l) {
            switch (id = l._id, n = encodeURIComponent(l.title), i = "twitter" == e ? l.description.substr(0, 107) : encodeURIComponent(l.description), a = encodeURIComponent(l.image), _gaq.push(["_trackEvent", "Killing Kennedy", "Share " + t + " " + e, window.location.hash]), e) {
            case "facebook":
                o = "http://www.facebook.com/sharer.php?u=" + link + "&i=http://cdn1.killinglincoln.nationalgeographic.com/kennedy/default-share.jpg&t=" + n;
                break;
            case "twitter":
                "default" == id ? i = encodeURIComponent("Failure. Adversity. Conviction. What drives a man to be a president or an assassin? | @NatGeoChannel #KillingKennedy ") : (i = i.replace(/[`~!@#$%^&*()_|+\-=?;:'"<>\{\}\[\]\\\/]/gi, ""), i = encodeURIComponent(i + "... #KillingKennedy")),
                o = "http://twitter.com/share?text=" + i + "&url=" + link;
                break;
            case "gPlus":
                o = "https://plus.google.com/share?url=" + link
            }
            window.open(o, "Share", "status=no,height=500,width=800,resizable=yes,left=" + r + ",top=" + s + ",screenX=" + r + ",screenY=" + s + ",toolbar=no,menubar=no,scrollbars=yes,location=no,directories=no")
        })
    }
},
ShareMenu = {
    isVisible: !1,
    mouseDownPos: {
        x: null,
        y: null
    },
    timeoutInterval: null,
    $shareMenuUI: $("#shareMenuUI"),
    init: function() {
        this.$shareMenuUI.find("a").on({
            click: function(t) {
                return t.preventDefault(),
                t.stopPropagation(),
                !1
            },
            vmouseup: function(t) {
                return t.preventDefault(),
                t.stopPropagation(),
                ShareMenu.handleShareClick($(t.currentTarget).data("network")),
                !1
            }
        }),
        Modernizr.cssanimations || this.$shareMenuUI.addClass("legacyUI")
    },
    handleMouseTouchDown: function(t, e) {
        this.isVisible && this.hide(),
        this.mouseDownPos.x = t,
        this.mouseDownPos.y = e,
        this.timeoutInterval = setTimeout(function() {
            ShareMenu.show()
        },
        750)
    },
    hideIfVisibleInterruptIfNot: function() {
        this.isVisible ? this.hide() : clearTimeout(this.timeoutInterval)
    },
    handleMouseTouchUp: function() {
        this.isVisible || clearTimeout(this.timeoutInterval)
    },
    show: function() {
        this.isVisible = !0,
        this.$shareMenuUI.css({
            top: this.mouseDownPos.y - 20,
            left: this.mouseDownPos.x - 20,
            visibility: "visible"
        }),
        Modernizr.cssanimations ? this.$shareMenuUI.addClass("active") : this.$shareMenuUI.show()
    },
    hide: function() {
        this.isVisible = !1,
        Modernizr.cssanimations ? this.$shareMenuUI.removeClass("active") : this.$shareMenuUI.fadeOut()
    },
    handleShareClick: function(t) {
        ShareManager.handleShareClick("inline", t),
        this.hide()
    }
},
FullScreenVideoManager = {
    vPlayers: [],
    removePlayerFromArray: function(t) {
        for (var e = 0; e < this.vPlayers.length; e++) {
            var n = this.vPlayers[e];
            if (n == t) return this.vPlayers.splice(e, 1),
            void 0
        }
    },
    mute: function() {
        for (var t = 0; t < this.vPlayers.length; t++) this.vPlayers[t].player.volume(0)
    },
    unmute: function() {
        for (var t = 0; t < this.vPlayers.length; t++) this.vPlayers[t].player.volume(1)
    }
};
FullScreenVideoJSPlayer.prototype.onPlayerReady = function() {
    this.isPlayerReady = !0,
    this.onReadyCallback && this.onReadyCallback()
},
FullScreenVideoJSPlayer.prototype.onVideoComplete = function() {
    this.propObj.onCompleteCallback && !Modernizr.touch && this.propObj.onCompleteCallback()
},
FullScreenVideoJSPlayer.prototype.onError = function() {
    this.onVideoComplete()
},
FullScreenVideoJSPlayer.prototype.play = function() {
    if (!Modernizr.touch) if (this.isPlayerReady) {
        this.onReadyCallback = null;
        var t = this;
        setTimeout(function() {
            t.player.currentTime() > 1 && t.player.currentTime(1),
            t.player.play()
        },
        1)
    } else this.onReadyCallback = this.play
},
FullScreenVideoJSPlayer.prototype.pause = function() {
    this.isPlayerReady ? (this.onReadyCallback = null, this.player.pause()) : this.onReadyCallback = this.pause
},
FullScreenVideoJSPlayer.prototype.dispose = function() {
    this.player.pause();
    var t = $("#" + this.propObj.videoElemString).find("video");
    t && (t.src = "", delete t, $(t).remove()),
    FullScreenVideoManager.removePlayerFromArray(this),
    $("#" + this.propObj.videoElemString).html(""),
    this.player.dispose(),
    this.$videoContainer.empty()
},
FullScreenVideoJSPlayer.prototype.resize = function() {
    var t, e, n, i;
    Modernizr.touch ? (t = 100, e = 0, n = Main.centerSectionContainer.width, i = Main.centerSectionContainer.height - 200) : (t = parseFloat(this.$blackBg.css("top")), e = parseFloat(this.$blackBg.css("left")), n = this.$blackBg.width(), i = this.$blackBg.height(), this.$vjsControlBar.css({
        display: "none"
    })),
    this.$videoContainer.css({
        top: t + "px",
        left: e + "px",
        width: n + "px",
        height: i + "px"
    }),
    this.$vjsTech.width(n),
    this.$vjsTech.height(i),
    this.player.dimensions(n, i),
    Modernizr.touch ? this.$vjsBigPlayButton.css({
        top: i / 2 - this.$vjsBigPlayButton.height() / 2 + "px",
        left: n / 2 - this.$vjsBigPlayButton.width() / 2 + "px"
    }) : this.$vjsBigPlayButton.css({
        display: "none"
    })
};
var GalleryManager = {
    $gallery: null,
    $galleryItemsArray: [],
    galleryItemsObj: [],
    galleryItemsLength: 0,
    $prevNav: null,
    $nextNav: null,
    prefixCSSObj: {},
    classString: "default out in visible outReverse inReverse",
    animating: !1,
    init: function(t) {
        var e = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"];
        this.$gallery = $(t),
        this.$galleryItemsArray = this.$gallery.find("section"),
        this.galleryItemsLength = this.$galleryItemsArray.length,
        this.$prevNav = this.$gallery.find("#prev"),
        this.$nextNav = this.$gallery.find("#next"),
        this.prefixCSSObj.transform = BrowserPrefix.get(e),
        this.$prevNav.hide();
        for (var n = 0; n < this.galleryItemsLength; n++) {
            var i = {
                elem: this.$galleryItemsArray.eq(n),
                width: this.$galleryItemsArray.eq(n).width(),
                height: this.$galleryItemsArray.eq(n).height(),
                imgWidth: this.$galleryItemsArray.eq(n).find("img").width(),
                imgHeight: this.$galleryItemsArray.eq(n).find("img").height(),
                captionHeight: this.$galleryItemsArray.eq(n).find(".caption").height(),
                captionCharacterCount: this.$galleryItemsArray.eq(n).find(".caption p").text().length
            };
            this.galleryItemsObj.push(i),
            this.galleryItemsObj[n].imgWidth <= this.galleryItemsObj[n].imgHeight ? this.$galleryItemsArray.eq(n).addClass("portrait") : this.$galleryItemsArray.eq(n).addClass("landscape"),
            (this.galleryItemsObj[n].captionCharacterCount > 150 || this.galleryItemsObj[n].imgWidth < this.galleryItemsObj[n].imgHeight) && this.$galleryItemsArray.eq(n).addClass("longCopy")
        }
        this.setGalleryDimensions(0),
        Modernizr.cssanimations || this.legacyPrepGallery(),
        this.onEvents()
    },
    setGalleryDimensions: function(t) {
        this.$gallery.css({
            display: "block"
        }),
        $("#modal").removeClass("portrait landscape"),
        $(window).height() >= 768 ? this.$galleryItemsArray.eq(t).hasClass("portrait") ? (this.$gallery.css({
            height: this.galleryItemsObj[t].imgHeight + this.galleryItemsObj[t].captionHeight,
            width: 400
        }), this.$gallery.parent().css({
            width: 400
        }).addClass("portrait")) : (this.$gallery.css({
            height: this.galleryItemsObj[t].imgHeight + this.galleryItemsObj[t].captionHeight,
            width: 500
        }), this.$gallery.parent().css({
            width: 500
        }).addClass("landscape")) : this.$galleryItemsArray.eq(t).hasClass("portrait") ? (this.$gallery.css({
            height: this.galleryItemsObj[t].imgHeight - 100 + this.galleryItemsObj[t].captionHeight,
            width: 300
        }), this.$gallery.parent().css({
            width: 300
        }).addClass("portrait"), Modernizr.opacity || Modernizr.touch || (this.$gallery.find("section").css({
            width: 300,
            height: 478
        }), this.$gallery.find("section img").css({
            width: 300,
            height: 400
        }))) : (this.$gallery.css({
            height: this.galleryItemsObj[t].imgHeight - 100 + this.galleryItemsObj[t].captionHeight,
            width: 400
        }), this.$gallery.parent().css({
            width: 400
        }).addClass("landscape"), Modernizr.opacity || Modernizr.touch || (this.$gallery.find("section").css({
            width: 400,
            height: 378
        }), this.$gallery.find("section img").css({
            width: 400,
            height: 300
        })))
    },
    onEvents: function() {
        var t = this,
        e = 0;
        this.$nextNav.on("vclick",
        function() {
            return t.animating || (t.animating = !0, e++, t.galleryItemsLength - 1 === e && t.$nextNav.hide(), e > 0 && t.$prevNav.show(), t.galleryItemsLength <= e && (e = 0), t.setGalleryDimensions(e), t.animForward()),
            !1
        }),
        this.$prevNav.on("vclick",
        function() {
            return t.animating || (t.animating = !0, e--, 0 >= e && t.$prevNav.hide(), e < t.galleryItemsLength && t.$nextNav.show(), t.galleryItemsLength <= e && (e = t.galleryItemsLength - 1), 0 == e && (e = 0), 0 > e && (e = t.galleryItemsLength - 1), t.setGalleryDimensions(e), t.animBackward()),
            !1
        });
        for (var n = 0; n < this.galleryItemsLength; n++) $(this.galleryItemsObj[n].elem).on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
        function(e) {
            "rotateOutReverse" == e.originalEvent.animationName ? ($(this).removeClass(t.classString), t.refreshArrayOrderBackward(), t.animating = !1) : "rotateOut" == e.originalEvent.animationName && ($(this).removeClass(t.classString), t.refreshArrayOrderForward(), t.animating = !1)
        })
    },
    refreshArrayOrderForward: function() {
        this.galleryItemsObj = this.galleryItemsObj.move(0, this.galleryItemsLength - 1)
    },
    refreshArrayOrderBackward: function() {
        this.galleryItemsObj = this.galleryItemsObj.move(this.galleryItemsLength - 1, 0)
    },
    animForward: function() {
        var t = this;
        Modernizr.cssanimations ? ($(this.galleryItemsObj).each(function() {
            $(this.elem).removeClass(t.classString)
        }), $(this.galleryItemsObj[0].elem).addClass("out"), $(this.galleryItemsObj[1].elem).addClass("visible in")) : this.legacyAnimForward()
    },
    animBackward: function() {
        var t = this;
        Modernizr.cssanimations ? ($(this.galleryItemsObj).each(function() {
            $(this.elem).removeClass(t.classString)
        }), $(this.galleryItemsObj[0].elem).addClass("outReverse"), $(this.galleryItemsObj[this.galleryItemsLength - 1].elem).addClass("visible inReverse")) : this.legacyAnimBackward()
    },
    legacyPrepGallery: function() {
        var t = this;
        $(this.galleryItemsObj).each(function(e) {
            $(this.elem).removeClass(t.classString).css({
                opacity: "1",
                visibility: "visible",
                display: "none"
            }),
            0 == e && $(this.elem).css({
                visibility: "visible",
                display: "block"
            })
        })
    },
    legacyAnimForward: function() {
        var t = this;
        $(this.galleryItemsObj[0].elem).fadeOut(),
        $(this.galleryItemsObj[1].elem).fadeIn(function() {
            t.animating = !1
        }),
        this.refreshArrayOrderForward()
    },
    legacyAnimBackward: function() {
        var t = this;
        $(this.galleryItemsObj[0].elem).fadeOut(),
        $(this.galleryItemsObj[this.galleryItemsLength - 1].elem).fadeIn(function() {
            t.animating = !1
        }),
        this.refreshArrayOrderBackward()
    },
    resetAnim: function() {
        this.$gallery = null,
        this.$galleryItemsArray = [],
        this.galleryItemsObj = [],
        this.galleryItemsLength = 0
    }
},
QuoteManager = {
    $quote: null,
    $copy: null,
    copyWidth: 0,
    copyHeight: 0,
    cLength: 0,
    init: function(t) {
        this.$quote = $(t),
        this.$copy = this.$quote.find("#copyWrapper"),
        this.cLength = this.$copy.find("blockquote").text().length,
        this.updateCharacterSize(),
        this.setDimensions()
    },
    updateCharacterSize: function() {
        this.cLength <= 200 && this.$copy.addClass("largeCopySize")
    },
    setDimensions: function() {
        this.height = this.$copy.height(),
        this.$copy.css({
            "margin-top": -this.height / 2,
            height: this.height
        })
    }
},
SecondarySoundtrackManager = {
    $audioContainer: null,
    $audioElem: null,
    audioPlayer: null,
    paused: !0,
    playing: !1,
    copyLength: 0,
    init: function(t) {
        this.$audioContainer = $(t),
        this.$audioElem = this.$audioContainer.find(".audio"),
        this.setCharacterCap(),
        this.onEvents(),
        this.soundInit()
    },
    setCharacterCap: function() {
        this.copyLength = this.$audioContainer.find(".body p").text().length,
        this.copyLength >= 100 && this.$audioContainer.find(".body").addClass("longCopy")
    },
    soundInit: function() {
        null != this.$audioElem && (this.audioPlayer = soundManager.createSound({
            id: SecondarySoundtrackManager.$audioElem.attr("id"),
            url: SecondarySoundtrackManager.$audioElem.data("src"),
            autoLoad: !0,
            autoPlay: !1,
            volume: 100,
            stream: !0,
            multiShot: !1,
            onfinish: function() {
                SecondarySoundtrackManager.stop()
            }
        }))
    },
    onEvents: function() {
        var t = this;
        this.$audioElem.on("vclick",
        function() {
            t.paused ? t.play() : t.pause()
        })
    },
    play: function() {
        this.paused = !1,
        this.playing = !0,
        this.audioPlayer.play(),
        this.$audioElem.removeClass("playing").addClass("paused")
    },
    pause: function() {
        this.paused = !0,
        this.playing = !1,
        this.audioPlayer.pause(),
        this.$audioElem.removeClass("paused").addClass("playing")
    },
    stop: function() {
        this.paused = !0,
        this.playing = !1,
        this.audioPlayer.stop(),
        this.$audioElem.removeClass("paused").addClass("playing")
    },
    kill: function() {
        return null != this.$audioElem && (this.playing = !1, this.paused = !0, this.audioPlayer.destruct(), this.$audioElem.removeClass("paused").addClass("playing")),
        !1
    }
},
PrimarySoundtrackManager = {
    isMuted: !1,
    isSoundEnabled: !1,
    soundtrackArray: [{
        min: 1e3,
        max: 12e3,
        loops: !0,
        id: "lazysummer1",
        asset: "tracks/ch1-lazysummer.mp3",
        autoLoad: !1
    },
    {
        min: 13e3,
        max: 14750,
        loops: !0,
        id: "lazysummer2",
        asset: "tracks/ch1-lazysummer.mp3",
        autoLoad: !1
    },
    {
        min: 3250,
        max: 6199,
        loops: !0,
        id: "intro_nature",
        asset: "sfx/00_spring.mp3",
        autoLoad: !1
    },
    {
        min: 6201,
        max: 6399,
        playIfScrollForward: !0,
        noFadeIn: !0,
        noFadeOut: !0,
        startVolume: 100,
        id: "jfk_camera",
        asset: "sfx/01_camera.mp3",
        autoLoad: !0
    },
    {
        min: 6800,
        max: 7200,
        loops: !0,
        id: "solomon_islands",
        asset: "sfx/03_jfk_solomon_islands.mp3"
    },
    {
        min: 7201,
        max: 7399,
        playIfScrollForward: !0,
        noFadeIn: !0,
        noFadeOut: !0,
        startVolume: 100,
        id: "oswald_camera",
        asset: "sfx/01_camera.mp3",
        autoLoad: !0
    },
    {
        min: 7870,
        max: 7890,
        playIfScrollForward: !0,
        noFadeIn: !0,
        noFadeOut: !0,
        startVolume: 100,
        id: "lho_m1",
        asset: "sfx/19_lho_m1.mp3",
        autoLoad: !0
    },
    {
        min: 8250,
        max: 10250,
        id: "crossing_atlantic",
        asset: "sfx/02_boat_crossing_atlantic.mp3",
        autoLoad: !1
    },
    {
        min: 10250,
        max: 11250,
        loops: !0,
        id: "moscow",
        asset: "sfx/04_moscow.mp3",
        autoLoad: !1
    },
    {
        min: 11250,
        max: 12001,
        id: "senate",
        asset: "sfx/05_kennedy_senate.mp3",
        autoLoad: !1
    },
    {
        min: 13e3,
        max: 13750,
        loops: !0,
        id: "presidential_race",
        asset: "sfx/06_jfk_presidential_run.mp3",
        autoLoad: !1
    },
    {
        min: 15750,
        max: 23750,
        loops: !0,
        id: "littlemeteor",
        asset: "tracks/ch2-littlemeteor.mp3",
        autoLoad: !1
    },
    {
        min: 14750,
        max: 17750,
        loops: !0,
        id: "minsk_machine",
        asset: "sfx/07_minsk.mp3",
        autoLoad: !1
    },
    {
        min: 17750,
        max: 18750,
        loops: !0,
        id: "07a_cuba_window1",
        asset: "sfx/07a_cuba_window.mp3",
        autoLoad: !1
    },
    {
        min: 19250,
        max: 20250,
        loops: !0,
        id: "07a_cuba_window2",
        asset: "sfx/07a_cuba_window.mp3",
        autoLoad: !1
    },
    {
        min: 20250,
        max: 22250,
        loops: !0,
        id: "bay_of_pigs_firefight",
        asset: "sfx/08_bay_of_pigs_firefight.mp3",
        autoLoad: !1
    },
    {
        min: 24750,
        max: 26500,
        loops: !0,
        id: "anxious01",
        asset: "tracks/ch3-anxious1.mp3",
        autoLoad: !1
    },
    {
        min: 27500,
        max: 28250,
        loops: !0,
        id: "anxious02",
        asset: "tracks/ch3-anxious1.mp3",
        autoLoad: !1
    },
    {
        min: 23750,
        max: 25750,
        loops: !0,
        id: "texas_highway",
        asset: "sfx/09_texas_highway.mp3",
        autoLoad: !1
    },
    {
        min: 25750,
        max: 26250,
        id: "cuban_flyover",
        asset: "sfx/10_cuban_flyover.mp3",
        autoLoad: !1
    },
    {
        min: 28250,
        max: 34750,
        loops: !0,
        id: "silver",
        asset: "tracks/ch4-silver_cloud.mp3",
        autoLoad: !1
    },
    {
        min: 29750,
        max: 30750,
        id: "wedding_bells",
        asset: "sfx/11_wedding_bells.mp3",
        autoLoad: !1
    },
    {
        min: 30750,
        max: 31250,
        id: "baby_noises",
        asset: "sfx/13_baby_noises.mp3",
        autoLoad: !1
    },
    {
        min: 31250,
        max: 31750,
        id: "kids_playing",
        asset: "sfx/12_kids_playing.mp3",
        autoLoad: !1
    },
    {
        min: 32750,
        max: 33750,
        id: "13a_marilyn_backstage",
        loops: !0,
        asset: "sfx/13a_marilyn_backstage.mp3",
        autoLoad: !1
    },
    {
        min: 35750,
        max: 40250,
        loops: !0,
        id: "alienation",
        asset: "tracks/ch5-alienation.mp3",
        autoLoad: !1
    },
    {
        min: 34750,
        max: 36750,
        id: "protest",
        asset: "sfx/14_protest.mp3",
        autoLoad: !1
    },
    {
        min: 38250,
        max: 39250,
        loops: !0,
        id: "boots_berlin_wall",
        asset: "sfx/15_boots_berlin_wall.mp3",
        autoLoad: !1
    },
    {
        min: 41250,
        max: 45500,
        loops: !0,
        id: "beginning",
        asset: "tracks/ch6-beginning.mp3",
        autoLoad: !1
    },
    {
        min: 48e3,
        max: 48500,
        loops: !0,
        id: "quietlament1",
        asset: "tracks/ch6-quietlament.mp3",
        autoLoad: !1
    },
    {
        min: 49500,
        max: 51500,
        loops: !0,
        id: "quietlament2",
        asset: "tracks/ch6-quietlament.mp3",
        autoLoad: !1
    },
    {
        min: 40250,
        max: 42250,
        id: "plane_landing_love_field",
        asset: "sfx/16_plane_landing_love_field.mp3",
        autoLoad: !1
    },
    {
        min: 42250,
        max: 43750,
        id: "book_depository",
        asset: "sfx/17_book_depository.mp3",
        autoLoad: !1
    },
    {
        min: 46250,
        max: 46750,
        id: "18_gb_take2",
        asset: "sfx/18_gb_take2.mp3",
        autoLoad: !1
    },
    {
        min: 46750,
        max: 47250,
        id: "18_gb_take3",
        asset: "sfx/18_gb_take3.mp3",
        autoLoad: !1
    },
    {
        min: 47250,
        max: 47750,
        id: "18_gb_take4",
        asset: "sfx/18_gb_take4.mp3",
        autoLoad: !1
    }],
    onReady: function() {
        if (this.isSoundEnabled = !(Modernizr.isFirefox && soundManager.html5Only || Modernizr.touch), this.isSoundEnabled) for (var t = 0; t < this.soundtrackArray.length; t++) {
            var e = this.soundtrackArray[t];
            e.sound = soundManager.createSound({
                id: e.id,
                url: "http://cdn1.killinglincoln.nationalgeographic.com/kennedy/1398428073/audio/" + e.asset,
                autoLoad: e.autoLoad,
                autoPlay: !1,
                volume: e.startVolume || 0,
                onload: function() {
                    this.isPrimary = !0,
                    Nav.mutePrimarySound && this.mute()
                }
            }),
            e.sound.isLoop = e.loops,
            e.sound.isPrimary = !0,
            e.sound.isComplete = !1,
            e.sound.isInPlayRange = !1,
            e.sound.fadeTween = null
        }
    },
    updateBasedOnScrollYPos: function(t, e) {
        if (this.isSoundEnabled) for (var n = 0; n < this.soundtrackArray.length; n++) {
            var i = this.soundtrackArray[n];
            i.min <= t && t <= i.max ? i.sound.isInPlayRange || (i.sound.isInPlayRange = !0, (!i.playIfScrollForward || i.playIfScrollForward && e) && (i.sound.paused && i.sound.setPosition(1), this.playSound(i.sound, !i.noFadeIn, !0))) : i.sound.isInPlayRange && (i.sound.isInPlayRange = !1, this.removeSound(i.sound, !i.noFadeOut))
        }
    },
    playSound: function(t, e) {
        Nav.mutePrimarySound && t.mute(),
        1 != t.playState ? (t.isComplete = !1, t.play({
            onplay: function() {
                Nav.mutePrimarySound && this.mute()
            },
            onfinish: function() {
                this.isComplete = !0,
                this.isLoop && PrimarySoundtrackManager.playSound(this, !1)
            },
            onpause: function() {},
            onresume: function() {},
            onsuspend: function() {},
            onstop: function() {},
            whileplaying: function() {}
        })) : t.paused && t.resume(),
        e && (t.tweenVolume = t.volume, t.fadeTween && TWEEN.remove(t.fadeTween), t.fadeTween = new TWEEN.Tween(t).to({
            tweenVolume: 100
        },
        750).onUpdate(function() {
            this.setVolume(Math.round(this.tweenVolume))
        }).start())
    },
    removeSound: function(t, e) {
        1 != t.playState || t.paused || e && (t.fadeTween && TWEEN.remove(t.fadeTween), t.fadeTween = new TWEEN.Tween(t).to({
            tweenVolume: 0
        },
        750).onUpdate(function() {
            this.setVolume(Math.round(this.tweenVolume))
        }).onComplete(function() {
            this.pause()
        }).start())
    },
    pauseCurrentSounds: function() {
        for (var t = 0; t < this.soundtrackArray.length; t++) {
            var e = this.soundtrackArray[t].sound;
            e && e.isPrimary && e.isInPlayRange && PrimarySoundtrackManager.removeSound(e, !0)
        }
    },
    resumeCurrentSounds: function() {
        for (var t = 0; t < this.soundtrackArray.length; t++) {
            var e = this.soundtrackArray[t].sound;
            e && e.isPrimary && e.isInPlayRange && !e.isComplete && PrimarySoundtrackManager.playSound(e, !0)
        }
    },
    mute: function() {
        for (var t = 0; t < this.soundtrackArray.length; t++) {
            var e = this.soundtrackArray[t].sound;
            e && e.isPrimary && e.mute()
        }
        _gaq.push(["_trackEvent", "Killing Kennedy", "Mute", "Mute"]),
        this.isMuted = !0
    },
    unmute: function() {
        for (var t = 0; t < this.soundtrackArray.length; t++) {
            var e = this.soundtrackArray[t].sound;
            e && e.isPrimary && e.unmute()
        }
        _gaq.push(["_trackEvent", "Killing Kennedy", "UnMute", "UnMute"]),
        this.isMuted = !1
    }
},
SingleImageManager = {
    $singleImage: null,
    imageWidth: 0,
    imageHeight: 0,
    ratio: null,
    copyLength: 0,
    init: function(t) {
        this.$singleImage = $(t),
        this.imageWidth = this.$singleImage.find("img").width(),
        this.imageHeight = this.$singleImage.find("img").height(),
        this.getRatio(),
        this.setCharacterCap(),
        this.setRatio()
    },
    getRatio: function() {
        this.ratio = this.imageHeight > this.imageWidth ? "portrait": "landscape"
    },
    setCharacterCap: function() {
        this.copyLength = this.$singleImage.find(".caption p").text().length,
        (this.copyLength >= 100 || "portrait" == this.ratio) && this.$singleImage.addClass("longCopy")
    },
    setRatio: function() {
        this.$singleImage.parent().addClass(this.ratio),
        this.$singleImage.parent().hasClass("landscape") ? SecondaryContentManager.positionModal() : setTimeout(function() {
            SecondaryContentManager.positionModal()
        },
        300)
    },
    resetAnim: function() {
        this.$singleImage = null,
        this.imageWidth = 0,
        this.imageHeight = 0,
        this.ratio = null,
        this.copyLength = 0
    }
},
SecondaryVideoManager = {
    $video: null,
    $modalVideoWrapper: null,
    videoPlayer: null,
    init: function(t) {
        var e = this;
        this.$video = $(t),
        this.$modalVideoWrapper = this.$video.find("#modalVideoWrapper"),
        this.videoPlayer = videojs("modalVideoPlayer").ready(function() {
            this.on("play",
            function() {
                _gaq.push(["_trackEvent", "Killing Kennedy", "Video Play", window.location.hash]),
                this.bigPlayButton.hide()
            }),
            this.on("pause",
            function() {
                this.bigPlayButton.show()
            }),
            this.on("ended",
            function() {
                e.resetVideo(),
                $(".vjs-poster").show()
            })
        }),
        this.videoPlayer.bigPlayButton.show(),
        this.setAspectRatio()
    },
    resetVideo: function() {
        this.videoPlayer.currentTime(0),
        this.videoPlayer.pause()
    },
    setAspectRatio: function() {
        var t = {
            x: 16,
            y: 9
        },
        e = this.$modalVideoWrapper.outerWidth() / t.x * t.y,
        n = 6;
        this.$modalVideoWrapper.css({
            height: e + n
        }),
        this.videoPlayer.width("100%"),
        this.videoPlayer.height(e)
    },
    kill: function() {
        this.videoPlayer.pause();
        var t = this.$modalVideoWrapper.find("video");
        t && (t.src = "", delete t, $(t).remove()),
        this.$modalVideoWrapper.html(""),
        this.videoPlayer.dispose(),
        this.$modalVideoWrapper.empty()
    }
},
BrowserPrefix = {
    get: function(t) {
        for (var e = 0; e < t.length; e++) if ("undefined" != typeof document.body.style[t[e]]) return t[e];
        return null
    }
},
LocalStorageManager = {
    init: function() {
        return "undefined" != typeof Storage && this.get(),
        !1
    },
    get: function() {
        "null" !== localStorage.mutePrimarySound && ("true" == localStorage.mutePrimarySound && Nav.muteSounds(), "false" == localStorage.mutePrimarySound && Nav.unmuteSounds())
    }
},
Main = {
    enableContextMenu: !0,
    enableTransforms: !0,
    enableResponsiveScaling: !0,
    NATIVE_COMPOSITION_WIDTH: 1200,
    NATIVE_COMPOSITION_HEIGHT: 900,
    nativeCompositionWidthMultiplier: 1,
    nativeCompositionHeightMultiplier: 1,
    windowWidth: 1200,
    windowHeight: 900,
    header: {
        $elem: $("#headerMain"),
        height: 0
    },
    centerSectionContainer: {
        $elem: $("#centerSectionContainer"),
        width: 0,
        widthHalf: 0,
        height: 0,
        heightHalf: 0,
        centerPoint: new THREE.Vector2(0, 0)
    },
    $scrollableSectionContainer: $("#scrollableSectionContainer"),
    $footerMain: $("#footerMain"),
    $document: $(document),
    chapters: [],
    currentChapter: null,
    numOfChapters: 0,
    chapterSections: [],
    numOfChapterSections: 0,
    CHAPTER_DATA: CHAPTER_DATA,
    nativePageRange: {
        min: 0,
        max: 0
    },
    scroll: {
        MIN_ABS_VEL: .1,
        LAG_MULTIPLIER: .75,
        AUTOMATIC_SCROLL_SPEED_PER_1000PX_IN_MS: 3250,
        autoScrollTween: null,
        isAutoAnimating: !1,
        isAutoAnimatingDownward: !1,
        autoAnimatingHasJustSettled: !1,
        isSettled: !1,
        hasJustSettled: !1,
        hasMovedFromPrevPos: !1,
        isDirectionForward: !0,
        position: {
            previous: 0,
            current: 0,
            dragGoal: 0,
            down: 0,
            vel: 0
        },
        downTimeMS: 0
    },
    scrollbarScrubber: {
        $elem: $("#scrollbarScrubber"),
        height: 80,
        width: 8,
        verticalRange: 0,
        userDraggedScrollPercent: 0
    },
    $scrollbarScrubberTrack: $("#scrollbarScrubberTrack"),
    parallaxMultiplier: {
        DEFAULT_PARALLAX: {
            x: 25,
            y: 25
        },
        MAX_GYRO_TILT_ANGLE: 18,
        LAG_MULTIPLIER: .05,
        current: new THREE.Vector2(0, 0),
        previous: new THREE.Vector2(0, 0),
        goal: new THREE.Vector2(0, 0),
        isBasedOnMousePos: !Modernizr.touch && !Modernizr.isMSSurfaceRT,
        isAutoParallaxEnabled: !1,
        autoParallaxTween: null,
        autoParallaxPosIndex: 0,
        autoParallaxPosArray: [[ - .75, -.75], [.75, -.75], [.75, .75], [ - .75, .75]]
    },
    isLockupParallaxEnabled: !1,
    hasLockupParallaxJustEnabled: !1,
    hasLockupParallaxJustDisabled: !1,
    mouseTouch: {
        isDown: !1,
        position: {
            dragGoal: 0,
            down: 0
        },
        absolutePos: new THREE.Vector2(0, 0)
    },
    hashManager: new HashManager,
    clock: null,
    updateDeltaMS: 0,
    isPaused: !1,
    snapPoints: [],
    numOfSnapPoints: 0,
    currentSnapIndex: 0,
    currentSnapPoint: null,
    updateCurrentSnapIndexInRealtime: !1,
    lockupSnapPoints: [],
    numOfLockupSnapPoints: 0,
    currentLockupSnapPoint: null,
    CHECK_FOR_SECTION_IMAGE_LOAD_EVERY_X_UPDATE_INTERVALS: 40,
    sectionImageLoadCount: 0,
    keyDownPressed: !1,
    keyUpPressed: !1,
    previousMouseWheelDelta: 0,
    msPhoneHasAlertedOrientation: !1,
    init: function() {
        Main.$document.focus(),
        this.parallaxMultiplier.isAutoParallaxEnabled = Modernizr.csstransforms3d && !Modernizr.touch && !Modernizr.isMSSurfaceRT && !Modernizr.isFirefox && !Modernizr.isIE,
        this.parallaxMultiplier.isBasedOnMousePos = !Modernizr.touch && !Modernizr.isMSSurfaceRT,
        this.parallaxMultiplier.LAG_MULTIPLIER = Modernizr.touch ? .05 : .1,
        this.NATIVE_COMPOSITION_WIDTH = 1200 - 2 * this.parallaxMultiplier.DEFAULT_PARALLAX.x,
        this.NATIVE_COMPOSITION_HEIGHT = 900 - 2 * this.parallaxMultiplier.DEFAULT_PARALLAX.y,
        this.enableContextMenu || $(document).on("contextmenu MSHoldVisual",
        function(t) {
            return t.preventDefault(),
            t.stopPropagation(),
            !1
        }),
        this.enableTransforms || (Modernizr.csstransforms = Modernizr.csstransforms3d = !1),
        this.initChaptersAndChapterSections(),
        this.clock = new THREE.Clock,
        $(window).resize(function(t) {
            return Main.handleWindowResize(!0),
            Main.checkMSMobileOrientation(),
            t.preventDefault(),
            t.stopPropagation(),
            !1
        }),
        this.handleWindowResize(!1),
        this.enableInterations(),
        this.hashManager.init(Main.hashChangeCallback),
        this.update(!0),
        this.centerSectionContainer.$elem.css({
            opacity: "1"
        })
    },
    checkMSMobileOrientation: function() {
        Modernizr.isMSSurfaceRT && this.windowWidth < this.windowHeight ? alert("This site is best experienced in landscape mode. Please rotate your device.") : Modernizr.isMSMobile && !this.msPhoneHasAlertedOrientation && this.windowWidth > this.windowHeight && (this.msPhoneHasAlertedOrientation = !0, alert("This site is best experienced in portrait mode. Please rotate your device."))
    },
    initChaptersAndChapterSections: function() {
        for (var t, e, n = 0,
        i = 0,
        o = 0,
        a = 0,
        r = 0; r < this.CHAPTER_DATA.length; r++) {
            t = this.CHAPTER_DATA[r],
            t.index = r,
            t.viewableScrollPositionRange = {
                min: n,
                max: 0
            },
            t.chapterSnapPoints = [];
            for (var s = 0; s < t.sections.length; s++) {
                e = new Section(t.sections[s], i, this.parallaxMultiplier.DEFAULT_PARALLAX),
                i = e.viewableScrollPositionRange.max;
                for (var l = 0; l < e.numOfSnapPoints; l++) {
                    var u = e.snapPoints[l];
                    u.index = o,
                    u.chapterSectionIndex = a,
                    o++,
                    t.chapterSnapPoints.push(u),
                    this.snapPoints.push(u),
                    u.isLockupParallaxEnabled && this.lockupSnapPoints.push(u)
                }
                e.viewableScrollPositionRangeCropped.min += 0 == s && 0 == r ? 0 : 1e-4,
                e.viewableScrollPositionRangeCropped.max -= s == t.sections.length - 1 && r == this.CHAPTER_DATA.length - 1 ? 0 : 1e-4,
                n = e.viewableScrollPositionRangeCropped.max,
                this.nativePageRange.min > e.viewableScrollPositionRange.min && (this.nativePageRange.min = e.viewableScrollPositionRange.min),
                this.nativePageRange.max < e.viewableScrollPositionRange.max && (this.nativePageRange.max = e.viewableScrollPositionRange.max),
                this.chapterSections.push(e),
                a++
            }
            t.numOfSnapPoints = t.chapterSnapPoints.length,
            t.viewableScrollPositionRange.max = n,
            t.viewableScrollPositionRange.range = t.viewableScrollPositionRange.max - t.viewableScrollPositionRange.min,
            this.chapters.push(t)
        }
        this.numOfChapterSections = this.chapterSections.length,
        this.numOfSnapPoints = this.snapPoints.length,
        this.numOfLockupSnapPoints = this.lockupSnapPoints.length
    },
    enableInterations: function() {
        Modernizr.touch || this.$scrollableSectionContainer.addClass("cursorGrab"),
        Modernizr.isMSSurfaceRT ? this.$scrollableSectionContainer.on({
            MSPointerDown: function(t) {
                return Main.handleScrollableContentDragStart(t.originalEvent.clientX, t.originalEvent.clientY),
                t.preventDefault(),
                t.stopPropagation(),
                !1
            },
            MSPointerUp: function(t) {
                return Main.handleScrollableContentDragStop(t.originalEvent.clientX, t.originalEvent.clientY),
                t.preventDefault(),
                t.stopPropagation(),
                !1
            },
            MSPointerLeave: function(t) {
                return Main.handleScrollableContentDragStop(t.originalEvent.clientX, t.originalEvent.clientY),
                t.preventDefault(),
                t.stopPropagation(),
                !1
            },
            MSPointerMove: function(t) {
                return Main.handleScrollableContentDragMove(t.originalEvent.clientX, t.originalEvent.clientY),
                t.preventDefault(),
                t.stopPropagation(),
                !1
            }
        }) : (this.$scrollableSectionContainer.on({
            vmousedown: function(t) {
                return Main.$document.focus(),
                Main.handleScrollableContentDragStart(t.pageX, t.pageY),
                Modernizr.touch ? void 0 : (Main.$scrollableSectionContainer.removeClass("cursorGrab").addClass("cursorGrabbing"), t.preventDefault(), t.stopPropagation(), !1)
            },
            vmouseup: function(t) {
                Main.handleScrollableContentDragStop(t.pageX, t.pageY),
                Modernizr.touch || (Main.$scrollableSectionContainer.removeClass("cursorGrabbing").addClass("cursorGrab"), t.preventDefault())
            }
        }), this.$scrollableSectionContainer.on("vmousedown", ".secondaryIcon, .fullScreenVideoContainer",
        function(t) {
            return Modernizr.touch ? void 0 : (t.preventDefault(), t.stopPropagation(), !1)
        }), this.centerSectionContainer.$elem.on({
            vmousemove: function(t) {
                Main.handleScrollableContentDragMove(t.pageX, t.pageY),
                SecondaryContentManager.isVisible || t.preventDefault()
            },
            mouseleave: function(t) {
                return Main.handleScrollableContentDragStop(t.pageX, t.pageY),
                TWEEN.remove(Main.parallaxMultiplier.autoParallaxTween),
                Main.startAutoParallaxAnim(!0),
                Modernizr.touch || (Main.$scrollableSectionContainer.removeClass("cursorGrabbing").addClass("cursorGrab"), t.preventDefault(), t.stopPropagation()),
                !1
            }
        }), Modernizr.touch ? (window.addEventListener("deviceorientation",
        function(t) {
            Main.handleGyroTilt(t)
        },
        !1), this.scrollbarScrubber.$elem.css({
            width: "4px"
        }), this.$scrollbarScrubberTrack.css({
            width: "4px"
        })) : ($(document).on("keydown",
        function(t) {
            Main.handleKeyDown(t)
        }), this.scrollbarScrubber.$elem.on({
            vmousedown: function(t) {
                return Main.killAutoScrollTween(),
                Main.scrollbarScrubber.downOffsetY = t.pageY - Main.header.height - Main.scrollbarScrubber.$elem.position().top,
                Main.scrollbarScrubber.userDraggedScrollPercent = (t.pageY - Main.header.height - Main.scrollbarScrubber.downOffsetY) / (Main.centerSectionContainer.height - Main.scrollbarScrubber.height),
                Main.scrollbarScrubber.isDown = !0,
                Main.scrollbarScrubber.$elem.addClass("active"),
                Modernizr.touch ? void 0 : (t.preventDefault(), t.stopPropagation(), !1)
            }
        }), this.$scrollbarScrubberTrack.on({
            vmousedown: function(t) {
                return Main.killAutoScrollTween(),
                Main.scrollbarScrubber.downOffsetY = Main.scrollbarScrubber.height / 2,
                Main.scrollbarScrubber.userDraggedScrollPercent = (t.pageY - Main.header.height - Main.scrollbarScrubber.downOffsetY) / (Main.centerSectionContainer.height - Main.scrollbarScrubber.height),
                Main.scrollbarScrubber.isDown = !0,
                Main.scrollbarScrubber.$elem.addClass("active"),
                Modernizr.touch ? void 0 : (t.preventDefault(), t.stopPropagation(), !1)
            }
        }), $(document).on({
            vmouseup: function(t) {
                Main.scrollbarScrubber.isDown && (Main.killAutoScrollTween(), Main.scrollbarScrubber.isDown = !1, Main.scrollbarScrubber.$elem.removeClass("active")),
                Modernizr.touch || t.preventDefault()
            },
            vmousemove: function(t) {
                Main.scrollbarScrubber.userDraggedScrollPercent = (t.pageY - Main.header.height - Main.scrollbarScrubber.downOffsetY) / (Main.centerSectionContainer.height - Main.scrollbarScrubber.height),
                t.preventDefault()
            }
        })), this.$scrollableSectionContainer.mousewheel(function(t, e, n, i) {
            return Main.handleMouseWheelScrollEvent(isNaN(i) ? e: i),
            t.preventDefault(),
            t.stopPropagation(),
            !1
        }))
    },
    hashChangeCallback: function(t, e, n) {
        var i = _scrollCallbackParamArray = null;
        if (t[1] != e[1] && (e[1] ? (i = Main.loadSecondaryContent, _scrollCallbackParamArray = [e[1]]) : (i = Main.removeSecondaryContent, _scrollCallbackParamArray = [])), t[0] != e[0]) Main.scrollToSnapPointByIndex(Main.getSnapPointIndexFromFromHash0(e[0]), n, i, _scrollCallbackParamArray);
        else {
            var o = Main.getSnapPointIndexFromFromHash0(e[0]);
            Main.snapPoints[o].scrollPosY != Main.scroll.position.current ? Main.scrollToSnapPointByIndex(o, n, i, _scrollCallbackParamArray) : i && i.apply(window, _scrollCallbackParamArray)
        }
    },
    handleScrollableContentDragStart: function(t, e) {
        this.killAutoScrollTween(),
        this.mouseTouch.isDown = !0,
        this.scroll.downTimeMS = (new Date).getTime(),
        this.mouseTouch.position.down = e / this.nativeCompositionHeightMultiplier,
        this.scroll.position.down = this.scroll.position.current,
        this.scroll.position.dragGoal = this.scroll.position.current,
        this.scroll.position.vel = 0,
        ShareMenu.handleMouseTouchDown(t, e)
    },
    handleScrollableContentDragStop: function() {
        this.mouseTouch.isDown && (this.mouseTouch.isDown = !1),
        ShareMenu.handleMouseTouchUp()
    },
    handleScrollableContentDragMove: function(t, e) {
        if (this.mouseTouch.absolutePos.x == t && this.mouseTouch.absolutePos.y == e) return this.mouseTouch.absolutePos.set(t, e),
        void 0;
        if (this.mouseTouch.absolutePos.set(t, e), this.parallaxMultiplier.isBasedOnMousePos) {
            var n = THREE.Math.clamp( - (t - this.centerSectionContainer.centerPoint.x) / this.centerSectionContainer.widthHalf, -1, 1),
            i = THREE.Math.clamp( - (e - this.centerSectionContainer.centerPoint.y) / this.centerSectionContainer.heightHalf, -1, 1);
            this.parallaxMultiplier.goal.set(n, i),
            TWEEN.remove(this.parallaxMultiplier.autoParallaxTween),
            this.startAutoParallaxAnim(!0)
        }
        if (this.mouseTouch.isDown) {
            var o = e / this.nativeCompositionHeightMultiplier,
            a = o - this.mouseTouch.position.down;
            this.scroll.position.dragGoal = this.scroll.position.down - a,
            this.removeSecondaryContent(),
            ShareMenu.hideIfVisibleInterruptIfNot()
        }
    },
    startAutoParallaxAnim: function(t) {
        if (this.parallaxMultiplier.isAutoParallaxEnabled) {
            var e = this.parallaxMultiplier.autoParallaxPosArray[this.parallaxMultiplier.autoParallaxPosIndex];
            this.parallaxMultiplier.autoParallaxTween = new TWEEN.Tween(this.parallaxMultiplier.goal).to({
                x: e[0],
                y: e[1]
            },
            18e3).easing(TWEEN.Easing.Sinusoidal.InOut).onStart(function() {}).onComplete(function() {
                Main.startAutoParallaxAnim(!1)
            }).onUpdate(function() {}).delay(t ? 2e4: 0).start(),
            this.parallaxMultiplier.autoParallaxPosIndex++,
            this.parallaxMultiplier.autoParallaxPosIndex > this.parallaxMultiplier.autoParallaxPosArray.length - 1 && (this.parallaxMultiplier.autoParallaxPosIndex = 0)
        }
    },
    handleMouseWheelScrollEvent: function(t) {
        var e = this.scroll.isAutoAnimating && (this.isAutoAnimatingDownward && t > 0 || !this.isAutoAnimatingDownward && 0 > t); (!this.scroll.isAutoAnimating || e) && (this.removeSecondaryContent(), ShareMenu.hideIfVisibleInterruptIfNot(), this.scrollToSnapPointByIndex(t > 0 ? this.currentSnapIndex - 1 : this.currentSnapIndex + 1, !1, null, null)),
        this.previousMouseWheelDelta = t
    },
    handleKeyDown: function(t) {
        switch (t.keyCode) {
        case 38:
            this.keyUpPressed = !0,
            (!this.scroll.isAutoAnimating || this.scroll.isAutoAnimating && this.isAutoAnimatingDownward) && (this.removeSecondaryContent(), ShareMenu.hideIfVisibleInterruptIfNot(), this.scrollToSnapPointByIndex(this.currentSnapIndex - 1, !1, null, null));
            break;
        case 40:
            this.keyDownPressed = !0,
            (!this.scroll.isAutoAnimating || this.scroll.isAutoAnimating && !this.isAutoAnimatingDownward) && (this.removeSecondaryContent(), ShareMenu.hideIfVisibleInterruptIfNot(), this.scrollToSnapPointByIndex(this.currentSnapIndex + 1, !1, null, null))
        }
    },
    handleWindowResize: function(t) {
        this.enableResponsiveScaling ? (this.windowWidth = $(window).width(), this.windowHeight = $(window).height()) : (this.windowWidth = this.NATIVE_COMPOSITION_WIDTH, this.windowHeight = this.NATIVE_COMPOSITION_HEIGHT),
        this.header.height = this.header.$elem.height(),
        this.centerSectionContainer.width = this.windowWidth,
        this.centerSectionContainer.height = this.windowHeight - this.header.height - this.$footerMain.height(),
        this.centerSectionContainer.widthHalf = this.centerSectionContainer.width / 2,
        this.centerSectionContainer.heightHalf = this.centerSectionContainer.height / 2,
        this.centerSectionContainer.centerPoint.set(this.centerSectionContainer.widthHalf, this.centerSectionContainer.heightHalf + this.header.height),
        this.centerSectionContainer.$elem.css({
            width: this.centerSectionContainer.width + "px",
            height: this.centerSectionContainer.height + "px",
            top: this.header.height + "px"
        }),
        this.nativeCompositionWidthMultiplier = this.centerSectionContainer.width / this.NATIVE_COMPOSITION_WIDTH,
        this.nativeCompositionHeightMultiplier = this.centerSectionContainer.height / this.NATIVE_COMPOSITION_HEIGHT;
        var e = 1,
        n = new THREE.Vector2(0, 0);
        this.nativeCompositionWidthMultiplier > this.nativeCompositionHeightMultiplier ? (e = this.nativeCompositionWidthMultiplier, n.x = -this.parallaxMultiplier.DEFAULT_PARALLAX.x * e, n.y = (e * this.NATIVE_COMPOSITION_HEIGHT - this.centerSectionContainer.height) * -.5 - this.parallaxMultiplier.DEFAULT_PARALLAX.y * e) : (e = this.nativeCompositionHeightMultiplier, n.x = (e * this.NATIVE_COMPOSITION_WIDTH - this.centerSectionContainer.width) * -.5 - this.parallaxMultiplier.DEFAULT_PARALLAX.x * e, n.y = -this.parallaxMultiplier.DEFAULT_PARALLAX.y * e),
        this.scrollbarScrubber.height = THREE.Math.clamp(Math.round(this.centerSectionContainer.height / 10), 20, 80),
        this.scrollbarScrubber.$elem.css({
            height: this.scrollbarScrubber.height + "px"
        }),
        this.scrollbarScrubber.verticalRange = this.centerSectionContainer.height - this.scrollbarScrubber.height;
        for (var i = 0; i < this.numOfChapterSections; i++) this.chapterSections[i].setResize(e, n);
        SecondaryContentManager.handleWindowResize(this.centerSectionContainer),
        this.updateCurrentChapterSection(),
        t && (this.updateSections(!0), this.updateScrollbarScrubber(!0)),
        DropletManager.deactivate(),
        Nav.superMenu.deactivate(),
        MobileNav.deactivate()
    },
    handleGyroTilt: function(t) {
        var e = 0,
        n = 0;
        switch (window.orientation) {
        case 0:
            e = t.gamma,
            n = t.beta - 45;
            break;
        case 90:
            e = t.beta,
            n = -(t.gamma + 45);
            break;
        case - 90 : e = -t.beta,
            n = t.gamma - 45;
            break;
        case 180:
            e = -t.gamma,
            n = -t.beta - 45
        }
        e = THREE.Math.clamp(e, -this.parallaxMultiplier.MAX_GYRO_TILT_ANGLE, this.parallaxMultiplier.MAX_GYRO_TILT_ANGLE),
        n = THREE.Math.clamp(n, -this.parallaxMultiplier.MAX_GYRO_TILT_ANGLE, this.parallaxMultiplier.MAX_GYRO_TILT_ANGLE),
        this.parallaxMultiplier.goal.set(e /= this.parallaxMultiplier.MAX_GYRO_TILT_ANGLE, n /= this.parallaxMultiplier.MAX_GYRO_TILT_ANGLE)
    },
    scrollToSnapPointByIndex: function(t, e, n, i) {
        if (t >= 0 && t < this.numOfSnapPoints) {
            this.currentSnapIndex = t;
            var o = this.scroll.position,
            a = THREE.Math.clamp(this.snapPoints[t].scrollPosY, this.nativePageRange.min, this.nativePageRange.max),
            r = n,
            s = i;
            if (this.isAutoAnimatingDownward = o.current < a, o.current != a) {
                var l;
                e ? l = 0 : (l = Math.abs(a - o.current) / 1e3 * this.scroll.AUTOMATIC_SCROLL_SPEED_PER_1000PX_IN_MS, 250 > l ? l = 250 : l > 5e3 && (l = 0)),
                this.removeSecondaryContent(),
                this.killAutoScrollTween(),
                ShareMenu.hideIfVisibleInterruptIfNot(),
                Main.scroll.isAutoAnimating = !0,
                Main.playRAF(),
                this.autoScrollTween = new TWEEN.Tween(o).to({
                    current: a
                },
                l).easing(TWEEN.Easing.Sinusoidal.InOut).onStart(function() {
                    Main.scroll.isAutoAnimating = !0
                }).onComplete(function() {
                    Main.scroll.isAutoAnimating = !1,
                    Main.scroll.autoAnimatingHasJustSettled = !0,
                    r && r.apply(window, s)
                }).start()
            } else r && r.apply(window, s)
        }
    },
    killAutoScrollTween: function() {
        this.scroll.isAutoAnimating = !1,
        TWEEN.remove(this.autoScrollTween),
        Nav.superMenu.deactivate(),
        MobileNav.deactivate(),
        DropletManager.deactivate()
    },
    pauseRAF: function() {
        this.isPaused || (this.isPaused = !0)
    },
    playRAF: function() {
        this.isPaused && (this.isPaused = !1)
    },
    tick: function() {
        Main.update(!1)
    },
    update: function(t) {
        this.updateDeltaMS = this.clock.getDelta(),
        TWEEN.update(),
        this.isPaused || (this.updateScrollPosition(), (this.scroll.hasMovedFromPrevPos || t) && (this.updateCurrentChapter(), this.updateCurrentChapterSection(), this.updateScrollbarScrubber(), this.hashManager.currentHashArray[1] || PrimarySoundtrackManager.updateBasedOnScrollYPos(this.scroll.position.current, this.scroll.isDirectionForward), Modernizr.touch && Nav.updateUsingScrollYPos(this.scroll.position.current)), this.updateParallaxMultiplier(), this.scroll.position.previous = this.scroll.position.current, this.updateSections(t), this.scroll.hasJustSettled && (this.updateSnappingAndHashChange(), TWEEN.remove(this.parallaxMultiplier.autoParallaxTween), this.startAutoParallaxAnim(!0))),
        requestAnimationFrame(Main.tick)
    },
    updateScrollPosition: function() {
        var t = this.scroll.isSettled;
        if (this.scroll.isSettled = this.scroll.hasJustSettled = !1, this.scrollbarScrubber.isDown) {
            this.updateCurrentSnapIndexInRealtime = !0;
            var e = THREE.Math.clamp(this.scrollbarScrubber.userDraggedScrollPercent * this.nativePageRange.max, this.nativePageRange.min, this.nativePageRange.max);
            this.scroll.position.current += THREE.Math.clamp(e - this.scroll.position.current, -50, 50),
            this.scroll.position.vel = 0
        } else this.scroll.isAutoAnimating || this.scroll.autoAnimatingHasJustSettled ? (this.updateCurrentSnapIndexInRealtime = !1, this.scroll.position.vel = 0) : (this.updateCurrentSnapIndexInRealtime = !0, this.scroll.position.current += this.mouseTouch.isDown ? (this.scroll.position.dragGoal - this.scroll.position.previous) * this.scroll.LAG_MULTIPLIER: Math.abs(this.scroll.position.vel) < this.scroll.MIN_ABS_VEL ? 0 : this.scroll.position.vel * this.scroll.LAG_MULTIPLIER, this.scroll.position.current = THREE.Math.clamp(this.scroll.position.current, this.nativePageRange.min, this.nativePageRange.max), this.scroll.position.vel = this.scroll.position.current - this.scroll.position.previous, this.scroll.isSettled = !this.mouseTouch.isDown && 0 == this.scroll.position.vel, this.scroll.hasJustSettled = !t && this.scroll.isSettled);
        this.scroll.hasMovedFromPrevPos = this.scroll.position.previous != this.scroll.position.current,
        this.scroll.isDirectionForward = this.scroll.position.current > this.scroll.position.previous,
        this.scroll.autoAnimatingHasJustSettled = !1
    },
    updateCurrentChapter: function() {
        var t = this.getCurrentChapterFromScrollYPos(this.scroll.position.current);
        this.currentChapter != t && (this.currentChapter = t, Nav.handleChapterChange(this.currentChapter.index, this.currentChapter.name))
    },
    updateCurrentChapterSection: function() {
        var t = this.getNearestSnapPointFromCurrentChapterUsingScrollYPos(this.scroll.position.current);
        if (t) {
            this.updateCurrentSnapIndexInRealtime && (this.currentSnapPoint = t, this.currentSnapIndex = t.index),
            this.chapterSections[t.chapterSectionIndex].load();
            for (var e = 0; e < this.numOfChapterSections; e++) this.chapterSections[e] && (Math.abs(t.chapterSectionIndex - e) < 2 ? this.chapterSections[e].load() : this.chapterSections[e].unload())
        }
    },
    updateScrollbarScrubber: function() {
        this.scrollbarScrubber.$elem.css({
            top: this.scroll.position.current / this.nativePageRange.max * this.scrollbarScrubber.verticalRange + "px"
        })
    },
    updateParallaxMultiplier: function() {
        this.scroll.hasMovedFromPrevPos && (this.currentLockupSnapPoint = this.getLockupSnapPointAtScrollYPosition(this.scroll.position.current)),
        this.currentLockupSnapPoint ? (this.hasLockupParallaxJustDisabled = !1, this.hasLockupParallaxJustEnabled = this.isLockupParallaxEnabled ? !1 : !0, this.isLockupParallaxEnabled = !0) : (this.hasLockupParallaxJustEnabled = !1, this.hasLockupParallaxJustDisabled = this.isLockupParallaxEnabled ? !0 : !1, this.isLockupParallaxEnabled = !1);
        var t = this.parallaxMultiplier.goal.clone().sub(this.parallaxMultiplier.previous);
        this.parallaxMultiplier.current = this.parallaxMultiplier.previous.clone().add(t.multiplyScalar(this.parallaxMultiplier.LAG_MULTIPLIER)),
        this.parallaxMultiplier.current.length() < 5e-4 && this.parallaxMultiplier.current.set(0, 0),
        this.parallaxMultiplier.previous = this.parallaxMultiplier.current.clone()
    },
    updateSections: function(t) {
        for (var e = t || !this.scroll.isSettled ? this.scroll.position.current: null, n = 0; n < this.numOfChapterSections; n++) this.chapterSections[n].update(e, this.parallaxMultiplier.current, this.updateDeltaMS, this.hasLockupParallaxJustEnabled, this.hasLockupParallaxJustDisabled)
    },
    updateSnappingAndHashChange: function() {
        var t = this.getNearestSnapPointFromScrollYPos(this.scroll.position.current);
        t && (t.hashString == this.hashManager.currentHashArray[0] || t.scrollPosY == this.hashManager.currentHashArray[0] ? this.hashManager.previousHashArray[1] != this.hashManager.currentHashArray[1] ? null != this.hashManager.previousHashArray[1] && null == this.hashManager.currentHashArray[1] && this.hashManager.setHash(t.hashString, null) : this.scrollToSnapPointByIndex(t.index, !1, null, null) : this.hashManager.setHash(t.hashString, null))
    },
    loadSecondaryContent: function(t) {
        SecondaryContentManager.isVisible || (Main.pauseRAF(), SecondaryContentManager.load(t))
    },
    handleModalCloseButtonClicked: function() {
        this.hashManager.setHash(Main.hashManager.currentHashArray[0], null)
    },
    removeSecondaryContent: function() {
        SecondaryContentManager.isVisible && (Main.hashManager.previousHashArray = Main.hashManager.currentHashArray.slice(0), Main.hashManager.currentHashArray.splice(1, 1), PrimarySoundtrackManager.resumeCurrentSounds(), Main.playRAF(), SecondaryContentManager.kill(), SecondarySoundtrackManager.kill())
    },
    getCurrentChapterFromScrollYPos: function(t) {
        for (var e = 0; e < this.chapters.length; e++) if (t >= this.chapters[e].viewableScrollPositionRange.min && t <= this.chapters[e].viewableScrollPositionRange.max) return this.chapters[e];
        return null
    },
    getNearestSnapPointFromScrollYPos: function(t) {
        for (var e = null,
        n = Number.POSITIVE_INFINITY,
        i = 0; i < this.numOfSnapPoints; i++) {
            var o = Math.abs(t - this.snapPoints[i].scrollPosY);
            n > o && (n = o, e = this.snapPoints[i])
        }
        return e ? e: null
    },
    getNearestSnapPointFromCurrentChapterUsingScrollYPos: function(t) {
        if (this.currentChapter) {
            for (var e = null,
            n = Number.POSITIVE_INFINITY,
            i = 0; i < this.currentChapter.numOfSnapPoints; i++) {
                var o = Math.abs(t - this.currentChapter.chapterSnapPoints[i].scrollPosY);
                n > o && (n = o, e = this.currentChapter.chapterSnapPoints[i])
            }
            return e ? e: null
        }
    },
    getSnapPointAtScrollYPosition: function(t) {
        for (var e = 0; e < this.numOfSnapPoints; e++) if (t == this.snapPoints[e].scrollPosY) return this.snapPoints[e];
        return null
    },
    getLockupSnapPointAtScrollYPosition: function(t) {
        for (var e = 0; e < this.numOfLockupSnapPoints; e++) if (this.lockupSnapPoints[e].isLockupParallaxEnabled && t == this.lockupSnapPoints[e].scrollPosY) return this.lockupSnapPoints[e];
        return null
    },
    getSnapPointIndexFromFromHash0: function(t) {
        for (var e = 0; e < this.numOfSnapPoints; e++) if (t == this.snapPoints[e].hashString) return this.snapPoints[e].index;
        return 0
    }
};
$(function() {
    Modernizr.isMobile = $(window).width() <= 568 && Modernizr.touch,
    Modernizr.isIPad = null != navigator.userAgent.match(/iPad/i),
    Modernizr.isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
    Modernizr.isIE = IE.isTheBrowser,
    Modernizr.isMSMobile = null != navigator.userAgent.match(/Windows Phone/i),
    Modernizr.isMSSurfaceRT = window.navigator.msPointerEnabled && 5 == window.navigator.msMaxTouchPoints,
    Modernizr.isWindowsPC = -1 != navigator.appVersion.indexOf("Win") ? !0 : !1,
    Modernizr.isChrome = null != window.chrome ? !0 : !1,
    _V_.options.techOrder = ["flash", "html5", "links"],
    videojs.options.flash.swf = "video-js.swf",
    !Modernizr.isMobile || Modernizr.isMSSurfaceRT || Modernizr.isMSMobile || $(window).on("orientationchange",
    function(t) {
        "landscape" == t.orientation && alert("This site is best experienced in portrait mode. Please rotate your device.")
    }),
    GLOBAL.init(),
    soundManager.setup({
        url: "/kennedy/",
        preferFlash: !0,
        flashVersion: 9,
        debugMode: !1,
        useConsole: !1,
        onready: function() {
            Modernizr.isFirefox && soundManager.html5Only && !Modernizr.isMobile && (window.location = "/flash.html"),
            SecondaryContentManager.init(),
            Nav.init(),
            LocalStorageManager.init(),
            MobileNav.init(),
            PrimarySoundtrackManager.onReady(),
            SecondarySoundtrackManager.soundInit(),
            Main.init(),
            ShareMenu.init(),
            ShareManager.init(),
            DropletManager.init()
        }
    })
});
var GLOBAL = {
    LANGUAGE_COUNTRY: null,
    LANGUAGE: null,
    COUNTRY: null,
    init: function() {
        this.setLanguageAndCountry()
    },
    setLanguageAndCountry: function() {
        this.LANGUAGE_COUNTRY = $("html").attr("lang");
        var t = $("html").attr("lang").split("-");
        this.LANGUAGE = t[0],
        this.COUNTRY = t[1]
    }
},
IE = function() {
    "use strict";
    var t, e, n, i, o;
    e = !1,
    i = {
        5.5 : "5.5",
        5.6 : "6",
        5.7 : "7",
        5.8 : "8",
        9 : "9",
        10 : "10"
    };
    try {
        o = new Function("/*@cc_on return @_jscript_version; @*/")(),
        void 0 !== o && (e = !0, n = i[o])
    } catch(a) {}
    return t = {
        isTheBrowser: e,
        actualVersion: n
    }
} ();
Array.prototype.move = function(t, e) {
    if (e >= this.length) for (var n = e - this.length; n--+1;) this.push(void 0);
    return this.splice(e, 0, this.splice(t, 1)[0]),
    this
};