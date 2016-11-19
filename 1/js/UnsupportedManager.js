var UnsupportedManager = {
    supported: {
        Chrome: 21,
        MSIE: 8,
        Firefox: 20,
        Safari: 6
    },
    dataBrowser: [{
        string: navigator.userAgent,
        subString: "Chrome",
        identity: "Chrome"
    },
    {
        string: navigator.userAgent,
        subString: "MSIE",
        identity: "Explorer"
    },
    {
        string: navigator.userAgent,
        subString: "Firefox",
        identity: "Firefox"
    },
    {
        string: navigator.userAgent,
        subString: "Safari",
        identity: "Safari"
    }],
    init: function() {
        this.browser = this.searchString(this.dataBrowser) || "Other",
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown",
        this.isSupportedCheck()
    },
    searchString: function(r) {
        for (var i = 0; i < r.length; i++) {
            var t = r[i].string;
            if (this.versionSearchString = r[i].subString, -1 != t.indexOf(r[i].subString)) return r[i].identity
        }
    },
    searchVersion: function(r) {
        var i = r.indexOf(this.versionSearchString);
        if ( - 1 != i) return parseFloat(r.substring(i + this.versionSearchString.length + 1))
    },
    isSupportedCheck: function() {
        return this.version < this.supported[this.browser] ? !1 : !0
    },
    redirect: function() {
        window.location = "/unsupported.html"
    }
};
UnsupportedManager.init();