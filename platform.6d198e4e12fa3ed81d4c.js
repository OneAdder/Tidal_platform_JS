!
function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = e,
    n.c = t,
    n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    },
    n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
            return e[t]
        }.bind(null, i));
        return r
    },
    n.n = function (e) {
        var t = e && e.__esModule ?
        function () {
            return e.
        default
        } : function () {
            return e
        };
        return n.d(t, "a", t),
        t
    },
    n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    n.p = "/",
    n(n.s = 585)
}({
    108: function (e, t, n) {
        (function (e, r) {
            var i;
/*!
 * Platform.js <https://mths.be/platform>
 * Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 * Copyright 2011-2013 John-David Dalton <http://allyoucanleet.com/>
 * Available under MIT license <https://mths.be/mit>
 */
            (function () {
                "use strict";
                var o = {
                    function: !0,
                    object: !0
                },
                    a = o[typeof window] && window || this,
                    l = o[typeof t] && t,
                    s = o[typeof e] && e && !e.nodeType && e,
                    b = l && s && "object" == typeof r && r;
                !b || b.global !== b && b.window !== b && b.self !== b || (a = b);
                var c = Math.pow(2, 53) - 1,
                    u = /\bOpera/,
                    p = Object.prototype,
                    d = p.hasOwnProperty,
                    f = p.toString;

                function S(e) {
                    return (e = String(e)).charAt(0).toUpperCase() + e.slice(1)
                }
                function x(e) {
                    return e = y(e),
                    /^(?:webOS|i(?:OS|P))/.test(e) ? e : S(e)
                }
                function h(e, t) {
                    for (var n in e) d.call(e, n) && t(e[n], n, e)
                }
                function m(e) {
                    return null == e ? S(e) : f.call(e).slice(8, -1)
                }
                function g(e) {
                    return String(e).replace(/([ -])(?!$)/g, "$1?")
                }
                function O(e, t) {
                    var n = null;
                    return function (e, t) {
                        var n = -1,
                            r = e ? e.length : 0;
                        if ("number" == typeof r && r > -1 && r <= c) for (; ++n < r;) t(e[n], n, e);
                        else h(e, t)
                    }(e, function (r, i) {
                        n = t(n, r, i, e)
                    }),
                    n
                }
                function y(e) {
                    return String(e).replace(/^ +| +$/g, "")
                }
                var w = function e(t) {
                    var n = a,
                        r = t && "object" == typeof t && "String" != m(t);
                    r && (n = t, t = null);
                    var i = n.navigator || {},
                        o = i.userAgent || "";
                    t || (t = o);
                    var l, s, b = r ? !! i.likeChrome : /\bChrome\b/.test(t) && !/internal|\n/i.test(f.toString()),
                        c = r ? "Object" : "ScriptBridgingProxyObject",
                        p = r ? "Object" : "Environment",
                        d = r && n.java ? "JavaPackage" : m(n.java),
                        S = r ? "Object" : "RuntimeObject",
                        w = /\bJava/.test(d) && n.java,
                        v = w && m(n.environment) == p,
                        M = w ? "a" : "α",
                        P = w ? "b" : "β",
                        E = n.document || {},
                        k = n.operamini || n.opera,
                        C = u.test(C = r && k ? k["[[Class]]"] : m(k)) ? C : k = null,
                        W = t,
                        B = [],
                        I = null,
                        T = t == o,
                        A = T && k && "function" == typeof k.version && k.version(),
                        F = function (e) {
                            return O(e, function (e, n) {
                                return e || RegExp("\\b" + (n.pattern || g(n)) + "\\b", "i").exec(t) && (n.label || n)
                            })
                        }([{
                            label: "EdgeHTML",
                            pattern: "Edge"
                        },
                        "Trident", {
                            label: "WebKit",
                            pattern: "AppleWebKit"
                        },
                        "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
                        R = function (e) {
                            return O(e, function (e, n) {
                                return e || RegExp("\\b" + (n.pattern || g(n)) + "\\b", "i").exec(t) && (n.label || n)
                            })
                        }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                            label: "Microsoft Edge",
                            pattern: "Edge"
                        },
                        "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                            label: "Samsung Internet",
                            pattern: "SamsungBrowser"
                        },
                        "SeaMonkey", {
                            label: "Silk",
                            pattern: "(?:Cloud9|Silk-Accelerated)"
                        },
                        "Sleipnir", "SlimBrowser", {
                            label: "SRWare Iron",
                            pattern: "Iron"
                        },
                        "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                            label: "Opera Mini",
                            pattern: "OPiOS"
                        },
                        "Opera", {
                            label: "Opera",
                            pattern: "OPR"
                        },
                        "Chrome", {
                            label: "Chrome Mobile",
                            pattern: "(?:CriOS|CrMo)"
                        },
                        {
                            label: "Firefox",
                            pattern: "(?:Firefox|Minefield)"
                        },
                        {
                            label: "Firefox for iOS",
                            pattern: "FxiOS"
                        },
                        {
                            label: "IE",
                            pattern: "IEMobile"
                        },
                        {
                            label: "IE",
                            pattern: "MSIE"
                        },
                        "Safari"]),
                        G = X([{
                            label: "BlackBerry",
                            pattern: "BB10"
                        },
                        "BlackBerry", {
                            label: "Galaxy S",
                            pattern: "GT-I9000"
                        },
                        {
                            label: "Galaxy S2",
                            pattern: "GT-I9100"
                        },
                        {
                            label: "Galaxy S3",
                            pattern: "GT-I9300"
                        },
                        {
                            label: "Galaxy S4",
                            pattern: "GT-I9500"
                        },
                        {
                            label: "Galaxy S5",
                            pattern: "SM-G900"
                        },
                        {
                            label: "Galaxy S6",
                            pattern: "SM-G920"
                        },
                        {
                            label: "Galaxy S6 Edge",
                            pattern: "SM-G925"
                        },
                        {
                            label: "Galaxy S7",
                            pattern: "SM-G930"
                        },
                        {
                            label: "Galaxy S7 Edge",
                            pattern: "SM-G935"
                        },
                        "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                            label: "Kindle Fire",
                            pattern: "(?:Cloud9|Silk-Accelerated)"
                        },
                        "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                            label: "Wii U",
                            pattern: "WiiU"
                        },
                        "Wii", "Xbox One", {
                            label: "Xbox 360",
                            pattern: "Xbox"
                        },
                        "Xoom"]),
                        j = function (e) {
                            return O(e, function (e, n, r) {
                                return e || (n[G] || n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(G)] || RegExp("\\b" + g(r) + "(?:\\b|\\w*\\d)", "i").exec(t)) && r
                            })
                        }({
                            Apple: {
                                iPad: 1,
                                iPhone: 1,
                                iPod: 1
                            },
                            Archos: {},
                            Amazon: {
                                Kindle: 1,
                                "Kindle Fire": 1
                            },
                            Asus: {
                                Transformer: 1
                            },
                            "Barnes & Noble": {
                                Nook: 1
                            },
                            BlackBerry: {
                                PlayBook: 1
                            },
                            Google: {
                                "Google TV": 1,
                                Nexus: 1
                            },
                            HP: {
                                TouchPad: 1
                            },
                            HTC: {},
                            LG: {},
                            Microsoft: {
                                Xbox: 1,
                                "Xbox One": 1
                            },
                            Motorola: {
                                Xoom: 1
                            },
                            Nintendo: {
                                "Wii U": 1,
                                Wii: 1
                            },
                            Nokia: {
                                Lumia: 1
                            },
                            Samsung: {
                                "Galaxy S": 1,
                                "Galaxy S2": 1,
                                "Galaxy S3": 1,
                                "Galaxy S4": 1
                            },
                            Sony: {
                                PlayStation: 1,
                                "PlayStation Vita": 1
                            }
                        }),
                        $ = function (e) {
                            return O(e, function (e, n) {
                                var r = n.pattern || g(n);
                                return !e && (e = RegExp("\\b" + r + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(t)) && (e = function (e, t, n) {
                                    var r = {
                                        "10.0": "10",
                                        6.4: "10 Technical Preview",
                                        6.3: "8.1",
                                        6.2: "8",
                                        6.1: "Server 2008 R2 / 7",
                                        "6.0": "Server 2008 / Vista",
                                        5.2: "Server 2003 / XP 64-bit",
                                        5.1: "XP",
                                        5.01: "2000 SP1",
                                        "5.0": "2000",
                                        "4.0": "NT",
                                        "4.90": "ME"
                                    };
                                    return t && n && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (r = r[/[\d.]+$/.exec(e)]) && (e = "Windows " + r),
                                    e = String(e),
                                    t && n && (e = e.replace(RegExp(t, "i"), n)),
                                    e = x(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                                }(e, r, n.label || n)),
                                e
                            })
                        }(["Windows Phone", "Android", "CentOS", {
                            label: "Chrome OS",
                            pattern: "CrOS"
                        },
                        "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);

                    function X(e) {
                        return O(e, function (e, n) {
                            var r = n.pattern || g(n);
                            return !e && (e = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(t) || RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(t) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(t)) && ((e = String(n.label && !RegExp(r, "i").test(n.label) ? n.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]), n = n.label || n, e = x(e[0].replace(RegExp(r, "i"), n).replace(RegExp("; *(?:" + n + "[_-])?", "i"), " ").replace(RegExp("(" + n + ")[-_.]?(\\w)", "i"), "$1 $2"))),
                            e
                        })
                    }
                    if (F && (F = [F]), j && !G && (G = X([j])), (l = /\bGoogle TV\b/.exec(G)) && (G = l[0]), /\bSimulator\b/i.test(t) && (G = (G ? G + " " : "") + "Simulator"), "Opera Mini" == R && /\bOPiOS\b/.test(t) && B.push("running in Turbo/Uncompressed mode"), "IE" == R && /\blike iPhone OS\b/.test(t) ? (j = (l = e(t.replace(/like iPhone OS/, ""))).manufacturer, G = l.product) : /^iP/.test(G) ? (R || (R = "Safari"), $ = "iOS" + ((l = / OS ([\d_]+)/i.exec(t)) ? " " + l[1].replace(/_/g, ".") : "")) : "Konqueror" != R || /buntu/i.test($) ? j && "Google" != j && (/Chrome/.test(R) && !/\bMobile Safari\b/i.test(t) || /\bVita\b/.test(G)) || /\bAndroid\b/.test($) && /^Chrome/.test(R) && /\bVersion\//i.test(t) ? (R = "Android Browser", $ = /\bAndroid\b/.test($) ? $ : "Android") : "Silk" == R ? (/\bMobi/i.test(t) || ($ = "Android", B.unshift("desktop mode")), /Accelerated *= *true/i.test(t) && B.unshift("accelerated")) : "PaleMoon" == R && (l = /\bFirefox\/([\d.]+)\b/.exec(t)) ? B.push("identifying as Firefox " + l[1]) : "Firefox" == R && (l = /\b(Mobile|Tablet|TV)\b/i.exec(t)) ? ($ || ($ = "Firefox OS"), G || (G = l[1])) : !R || (l = !/\bMinefield\b/i.test(t) && /\b(?:Firefox|Safari)\b/.exec(R)) ? (R && !G && /[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(l + "/") + 8)) && (R = null), (l = G || j || $) && (G || j || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test($)) && (R = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test($) ? $ : l) + " Browser")) : "Electron" == R && (l = (/\bChrome\/([\d.]+)\b/.exec(t) || 0)[1]) && B.push("Chromium " + l) : $ = "Kubuntu", A || (A = function (e) {
                        return O(e, function (e, n) {
                            return e || (RegExp(n + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(t) || 0)[1] || null
                        })
                    }(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", g(R), "(?:Firefox|Minefield|NetFront)"])), (l = ("iCab" == F && parseFloat(A) > 3 ? "WebKit" : /\bOpera\b/.test(R) && (/\bOPR\b/.test(t) ? "Blink" : "Presto")) || /\b(?:Midori|Nook|Safari)\b/i.test(t) && !/^(?:Trident|EdgeHTML)$/.test(F) && "WebKit" || !F && /\bMSIE\b/i.test(t) && ("Mac OS" == $ ? "Tasman" : "Trident") || "WebKit" == F && /\bPlayStation\b(?! Vita\b)/i.test(R) && "NetFront") && (F = [l]), "IE" == R && (l = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t) || 0)[1]) ? (R += " Mobile", $ = "Windows Phone " + (/\+$/.test(l) ? l : l + ".x"), B.unshift("desktop mode")) : /\bWPDesktop\b/i.test(t) ? (R = "IE Mobile", $ = "Windows Phone 8.x", B.unshift("desktop mode"), A || (A = (/\brv:([\d.]+)/.exec(t) || 0)[1])) : "IE" != R && "Trident" == F && (l = /\brv:([\d.]+)/.exec(t)) && (R && B.push("identifying as " + R + (A ? " " + A : "")), R = "IE", A = l[1]), T) {
                        if (function (e, t) {
                            var n = null != e ? typeof e[t] : "number";
                            return !(/^(?:boolean|number|string|undefined)$/.test(n) || "object" == n && !e[t])
                        }(n, "global")) if (w && (W = (l = w.lang.System).getProperty("os.arch"), $ = $ || l.getProperty("os.name") + " " + l.getProperty("os.version")), v) {
                            try {
                                A = n.require("ringo/engine").version.join("."),
                                R = "RingoJS"
                            } catch (e) {
                                (l = n.system) && l.global.system == n.system && (R = "Narwhal", $ || ($ = l[0].os || null))
                            }
                            R || (R = "Rhino")
                        } else "object" == typeof n.process && !n.process.browser && (l = n.process) && ("object" == typeof l.versions && ("string" == typeof l.versions.electron ? (B.push("Node " + l.versions.node), R = "Electron", A = l.versions.electron) : "string" == typeof l.versions.nw && (B.push("Chromium " + A, "Node " + l.versions.node), R = "NW.js", A = l.versions.nw)), R || (R = "Node.js", W = l.arch, $ = l.platform, A = (A = /[\d.]+/.exec(l.version)) ? A[0] : null));
                        else m(l = n.runtime) == c ? (R = "Adobe AIR", $ = l.flash.system.Capabilities.os) : m(l = n.phantom) == S ? (R = "PhantomJS", A = (l = l.version || null) && l.major + "." + l.minor + "." + l.patch) : "number" == typeof E.documentMode && (l = /\bTrident\/(\d+)/i.exec(t)) ? (A = [A, E.documentMode], (l = +l[1] + 4) != A[1] && (B.push("IE " + A[1] + " mode"), F && (F[1] = ""), A[1] = l), A = "IE" == R ? String(A[1].toFixed(1)) : A[0]) : "number" == typeof E.documentMode && /^(?:Chrome|Firefox)\b/.test(R) && (B.push("masking as " + R + " " + A), R = "IE", A = "11.0", F = ["Trident"], $ = "Windows");
                        $ = $ && x($)
                    }
                    if (A && (l = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(A) || /(?:alpha|beta)(?: ?\d)?/i.exec(t + ";" + (T && i.appMinorVersion)) || /\bMinefield\b/i.test(t) && "a") && (I = /b/i.test(l) ? "beta" : "alpha", A = A.replace(RegExp(l + "\\+?$"), "") + ("beta" == I ? P : M) + (/\d+\+?/.exec(l) || "")), "Fennec" == R || "Firefox" == R && /\b(?:Android|Firefox OS)\b/.test($)) R = "Firefox Mobile";
                    else if ("Maxthon" == R && A) A = A.replace(/\.[\d.]+/, ".x");
                    else if (/\bXbox\b/i.test(G))"Xbox 360" == G && ($ = null),
                    "Xbox 360" == G && /\bIEMobile\b/.test(t) && B.unshift("mobile mode");
                    else if (!/^(?:Chrome|IE|Opera)$/.test(R) && (!R || G || /Browser|Mobi/.test(R)) || "Windows CE" != $ && !/Mobi/i.test(t)) if ("IE" == R && T) try {
                        null === n.external && B.unshift("platform preview")
                    } catch (e) {
                        B.unshift("embedded")
                    } else(/\bBlackBerry\b/.test(G) || /\bBB10\b/.test(t)) && (l = (RegExp(G.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(t) || 0)[1] || A) ? ($ = ((l = [l, /BB10/.test(t)])[1] ? (G = null, j = "BlackBerry") : "Device Software") + " " + l[0], A = null) : this != h && "Wii" != G && (T && k || /Opera/.test(R) && /\b(?:MSIE|Firefox)\b/i.test(t) || "Firefox" == R && /\bOS X (?:\d+\.){2,}/.test($) || "IE" == R && ($ && !/^Win/.test($) && A > 5.5 || /\bWindows XP\b/.test($) && A > 8 || 8 == A && !/\bTrident\b/.test(t))) && !u.test(l = e.call(h, t.replace(u, "") + ";")) && l.name && (l = "ing as " + l.name + ((l = l.version) ? " " + l : ""), u.test(R) ? (/\bIE\b/.test(l) && "Mac OS" == $ && ($ = null), l = "identify" + l) : (l = "mask" + l, R = C ? x(C.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(l) && ($ = null), T || (A = null)), F = ["Presto"], B.push(l));
                    else R += " Mobile";
                    (l = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(t) || 0)[1]) && (l = [parseFloat(l.replace(/\.(\d)$/, ".0$1")), l], "Safari" == R && "+" == l[1].slice(-1) ? (R = "WebKit Nightly", I = "alpha", A = l[1].slice(0, -1)) : A != l[1] && A != (l[2] = (/\bSafari\/([\d.]+\+?)/i.exec(t) || 0)[1]) || (A = null), l[1] = (/\bChrome\/([\d.]+)/i.exec(t) || 0)[1], 537.36 == l[0] && 537.36 == l[2] && parseFloat(l[1]) >= 28 && "WebKit" == F && (F = ["Blink"]), T && (b || l[1]) ? (F && (F[1] = "like Chrome"), l = l[1] || ((l = l[0]) < 530 ? 1 : l < 532 ? 2 : l < 532.05 ? 3 : l < 533 ? 4 : l < 534.03 ? 5 : l < 534.07 ? 6 : l < 534.1 ? 7 : l < 534.13 ? 8 : l < 534.16 ? 9 : l < 534.24 ? 10 : l < 534.3 ? 11 : l < 535.01 ? 12 : l < 535.02 ? "13+" : l < 535.07 ? 15 : l < 535.11 ? 16 : l < 535.19 ? 17 : l < 536.05 ? 18 : l < 536.1 ? 19 : l < 537.01 ? 20 : l < 537.11 ? "21+" : l < 537.13 ? 23 : l < 537.18 ? 24 : l < 537.24 ? 25 : l < 537.36 ? 26 : "Blink" != F ? "27" : "28")) : (F && (F[1] = "like Safari"), l = (l = l[0]) < 400 ? 1 : l < 500 ? 2 : l < 526 ? 3 : l < 533 ? 4 : l < 534 ? "4+" : l < 535 ? 5 : l < 537 ? 6 : l < 538 ? 7 : l < 601 ? 8 : "8"), F && (F[1] += " " + (l += "number" == typeof l ? ".x" : /[.+]/.test(l) ? "" : "+")), "Safari" == R && (!A || parseInt(A) > 45) && (A = l)),
                    "Opera" == R && (l = /\bzbov|zvav$/.exec($)) ? (R += " ", B.unshift("desktop mode"), "zvav" == l ? (R += "Mini", A = null) : R += "Mobile", $ = $.replace(RegExp(" *" + l + "$"), "")) : "Safari" == R && /\bChrome\b/.exec(F && F[1]) && (B.unshift("desktop mode"), R = "Chrome Mobile", A = null, /\bOS X\b/.test($) ? (j = "Apple", $ = "iOS 4.3+") : $ = null),
                    A && 0 == A.indexOf(l = /[\d.]+$/.exec($)) && t.indexOf("/" + l + "-") > -1 && ($ = y($.replace(l, ""))),
                    F && !/\b(?:Avant|Nook)\b/.test(R) && (/Browser|Lunascape|Maxthon/.test(R) || "Safari" != R && /^iOS/.test($) && /\bSafari\b/.test(F[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(R) && F[1]) && (l = F[F.length - 1]) && B.push(l),
                    B.length && (B = ["(" + B.join("; ") + ")"]),
                    j && G && G.indexOf(j) < 0 && B.push("on " + j),
                    G && B.push((/^on /.test(B[B.length - 1]) ? "" : "on ") + G),
                    $ && (l = / ([\d.+]+)$/.exec($), s = l && "/" == $.charAt($.length - l[0].length - 1), $ = {
                        architecture: 32,
                        family: l && !s ? $.replace(l[0], "") : $,
                        version: l ? l[1] : null,
                        toString: function () {
                            var e = this.version;
                            return this.family + (e && !s ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
                        }
                    }),
                    (l = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(W)) && !/\bi686\b/i.test(W) ? ($ && ($.architecture = 64, $.family = $.family.replace(RegExp(" *" + l), "")), R && (/\bWOW64\b/i.test(t) || T && /\w(?:86|32)$/.test(i.cpuClass || i.platform) && !/\bWin64; x64\b/i.test(t)) && B.unshift("32-bit")) : $ && /^OS X/.test($.family) && "Chrome" == R && parseFloat(A) >= 39 && ($.architecture = 64),
                    t || (t = null);
                    var N = {};
                    return N.description = t,
                    N.layout = F && F[0],
                    N.manufacturer = j,
                    N.name = R,
                    N.prerelease = I,
                    N.product = G,
                    N.ua = t,
                    N.version = R && A,
                    N.os = $ || {
                        architecture: null,
                        family: null,
                        version: null,
                        toString: function () {
                            return "null"
                        }
                    },
                    N.parse = e,
                    N.toString = function () {
                        return this.description || ""
                    },
                    N.version && B.unshift(A),
                    N.name && B.unshift(R),
                    $ && R && ($ != String($).split(" ")[0] || $ != R.split(" ")[0] && !G) && B.push(G ? "(" + $ + ")" : "on " + $),
                    B.length && (N.description = B.join(" ")),
                    N
                }();
                a.platform = w,
                void 0 === (i = function () {
                    return w
                }.call(t, n, t, e)) || (e.exports = i)
            }).call(this)
        }).call(this, n(174)(e), n(49))
    },
    174: function (e, t) {
        e.exports = function (e) {
            return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function () {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function () {
                    return e.i
                }
            }), e.webpackPolyfill = 1),
            e
        }
    },
    49: function (e, t) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    },
    585: function (e, t, n) {
        "use strict";
        n(108);
        window.shouldShowOldBrowserMessage = -1 !== window.platform.toString().indexOf("IE") || -1 !== window.platform.toString().indexOf("Safari") && -1 === window.platform.toString().indexOf("iOS") && parseFloat(window.platform.version) <= 10
    }
});
//# sourceMappingURL=platform.6d198e4e12fa3ed81d4c.js.map
