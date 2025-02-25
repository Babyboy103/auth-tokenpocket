(window.webpackJsonp = window.webpackJsonp || []).push([
    [4],
    [function(e, t, o) {
        "use strict";
        o.d(t, "k", (function() {
            return _
        })), o.d(t, "m", (function() {
            return A
        })), o.d(t, "l", (function() {
            return y
        })), o.d(t, "e", (function() {
            return v
        })), o.d(t, "b", (function() {
            return O
        })), o.d(t, "s", (function() {
            return P
        })), o.d(t, "g", (function() {
            return D
        })), o.d(t, "h", (function() {
            return C
        })), o.d(t, "d", (function() {
            return w
        })), o.d(t, "r", (function() {
            return S
        })), o.d(t, "j", (function() {
            return E
        })), o.d(t, "t", (function() {
            return M
        })), o.d(t, "o", (function() {
            return I
        })), o.d(t, "q", (function() {
            return B
        })), o.d(t, "f", (function() {
            return R
        })), o.d(t, "c", (function() {
            return U
        })), o.d(t, "i", (function() {
            return L
        })), o.d(t, "p", (function() {
            return F
        })), o.d(t, "a", (function() {
            return V
        })), o.d(t, "v", (function() {
            return Y
        })), o.d(t, "n", (function() {
            return X
        })), o.d(t, "u", (function() {
            return J
        }));
        o(5), o(55), o(12), o(13);
        var n = o(42),
            r = o(10),
            c = o(3),
            l = o(23),
            d = (o(69), o(8), o(277), o(18), o(44), o(45), o(11), o(56), o(57), o(43), o(35), o(161), o(129), o(163), o(84), o(85), o(281), o(123), o(115), o(1)),
            m = o(33);

        function h(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }

        function k(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? h(Object(source), !0).forEach((function(t) {
                    Object(c.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }

        function T(e, t) {
            var o = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!o) {
                if (Array.isArray(e) || (o = function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return f(e, t);
                        var o = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === o && e.constructor && (o = e.constructor.name);
                        if ("Map" === o || "Set" === o) return Array.from(e);
                        if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return f(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                    o && (e = o);
                    var i = 0,
                        n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, c = !0,
                l = !1;
            return {
                s: function() {
                    o = o.call(e)
                },
                n: function() {
                    var e = o.next();
                    return c = e.done, e
                },
                e: function(e) {
                    l = !0, r = e
                },
                f: function() {
                    try {
                        c || null == o.return || o.return()
                    } finally {
                        if (l) throw r
                    }
                }
            }
        }

        function f(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, o = new Array(t); i < t; i++) o[i] = e[i];
            return o
        }

        function _(e) {
            d.default.config.errorHandler && d.default.config.errorHandler(e)
        }

        function A(e) {
            return e.then((function(e) {
                return e.default || e
            }))
        }

        function y(e) {
            return e.$options && "function" == typeof e.$options.fetch && !e.$options.fetch.length
        }

        function v(e) {
            var t, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                n = e.$children || [],
                r = T(n);
            try {
                for (r.s(); !(t = r.n()).done;) {
                    var c = t.value;
                    c.$fetch ? o.push(c) : c.$children && v(c, o)
                }
            } catch (e) {
                r.e(e)
            } finally {
                r.f()
            }
            return o
        }

        function O(e, t) {
            if (t || !e.options.__hasNuxtData) {
                var o = e.options._originDataFn || e.options.data || function() {
                    return {}
                };
                e.options._originDataFn = o, e.options.data = function() {
                    var data = o.call(this, this);
                    return this.$ssrContext && (t = this.$ssrContext.asyncData[e.cid]), k(k({}, data), t)
                }, e.options.__hasNuxtData = !0, e._Ctor && e._Ctor.options && (e._Ctor.options.data = e.options.data)
            }
        }

        function P(e) {
            return e.options && e._Ctor === e || (e.options ? (e._Ctor = e, e.extendOptions = e.options) : (e = d.default.extend(e))._Ctor = e, !e.options.name && e.options.__file && (e.options.name = e.options.__file)), e
        }

        function D(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
            return Array.prototype.concat.apply([], e.matched.map((function(e, n) {
                return Object.keys(e[o]).map((function(r) {
                    return t && t.push(n), e[o][r]
                }))
            })))
        }

        function C(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return D(e, t, "instances")
        }

        function w(e, t) {
            return Array.prototype.concat.apply([], e.matched.map((function(e, o) {
                return Object.keys(e.components).reduce((function(n, r) {
                    return e.components[r] ? n.push(t(e.components[r], e.instances[r], e, r, o)) : delete e.components[r], n
                }), [])
            })))
        }

        function S(e, t) {
            return Promise.all(w(e, function() {
                var e = Object(r.a)(regeneratorRuntime.mark((function e(o, n, r, c) {
                    var l, d;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ("function" != typeof o || o.options) {
                                    e.next = 11;
                                    break
                                }
                                return e.prev = 1, e.next = 4, o();
                            case 4:
                                o = e.sent, e.next = 11;
                                break;
                            case 7:
                                throw e.prev = 7, e.t0 = e.catch(1), e.t0 && "ChunkLoadError" === e.t0.name && "undefined" != typeof window && window.sessionStorage && (l = Date.now(), (!(d = parseInt(window.sessionStorage.getItem("nuxt-reload"))) || d + 6e4 < l) && (window.sessionStorage.setItem("nuxt-reload", l), window.location.reload(!0))), e.t0;
                            case 11:
                                return r.components[c] = o = P(o), e.abrupt("return", "function" == typeof t ? t(o, n, r, c) : o);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 7]
                    ])
                })));
                return function(t, o, n, r) {
                    return e.apply(this, arguments)
                }
            }()))
        }

        function E(e) {
            return x.apply(this, arguments)
        }

        function x() {
            return (x = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (t) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            return e.next = 4, S(t);
                        case 4:
                            return e.abrupt("return", k(k({}, t), {}, {
                                meta: D(t).map((function(e, o) {
                                    return k(k({}, e.options.meta), (t.matched[o] || {}).meta)
                                }))
                            }));
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function M(e, t) {
            return N.apply(this, arguments)
        }

        function N() {
            return (N = Object(r.a)(regeneratorRuntime.mark((function e(t, o) {
                var r, c, d, h;
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return t.context || (t.context = {
                                isStatic: !0,
                                isDev: !1,
                                isHMR: !1,
                                app: t,
                                store: t.store,
                                payload: o.payload,
                                error: o.error,
                                base: t.router.options.base,
                                env: {
                                    environment: "production"
                                }
                            }, o.req && (t.context.req = o.req), o.res && (t.context.res = o.res), o.ssrContext && (t.context.ssrContext = o.ssrContext), t.context.redirect = function(e, path, o) {
                                if (e) {
                                    t.context._redirected = !0;
                                    var r = Object(n.a)(path);
                                    if ("number" == typeof e || "undefined" !== r && "object" !== r || (o = path || {}, path = e, r = Object(n.a)(path), e = 302), "object" === r && (path = t.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = Object(m.d)(path, o), window.location.replace(path), new Error("ERR_REDIRECT");
                                    t.context.next({
                                        path: path,
                                        query: o,
                                        status: e
                                    })
                                }
                            }, t.context.nuxtState = window.__NUXT__), e.next = 3, Promise.all([E(o.route), E(o.from)]);
                        case 3:
                            r = e.sent, c = Object(l.a)(r, 2), d = c[0], h = c[1], o.route && (t.context.route = d), o.from && (t.context.from = h), t.context.next = o.next, t.context._redirected = !1, t.context._errored = !1, t.context.isHMR = !1, t.context.params = t.context.route.params || {}, t.context.query = t.context.route.query || {};
                        case 15:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function I(e, t) {
            return !e.length || t._redirected || t._errored ? Promise.resolve() : B(e[0], t).then((function() {
                return I(e.slice(1), t)
            }))
        }

        function B(e, t) {
            var o;
            return (o = 2 === e.length ? new Promise((function(o) {
                e(t, (function(e, data) {
                    e && t.error(e), o(data = data || {})
                }))
            })) : e(t)) && o instanceof Promise && "function" == typeof o.then ? o : Promise.resolve(o)
        }

        function R(base, e) {
            if ("hash" === e) return window.location.hash.replace(/^#\//, "");
            base = decodeURI(base).slice(0, -1);
            var path = decodeURI(window.location.pathname);
            base && path.startsWith(base) && (path = path.slice(base.length));
            var t = (path || "/") + window.location.search + window.location.hash;
            return Object(m.c)(t)
        }

        function U(e, t) {
            return function(e, t) {
                for (var o = new Array(e.length), i = 0; i < e.length; i++) "object" === Object(n.a)(e[i]) && (o[i] = new RegExp("^(?:" + e[i].pattern + ")$", G(t)));
                return function(t, n) {
                    for (var path = "", data = t || {}, r = (n || {}).pretty ? H : encodeURIComponent, c = 0; c < e.length; c++) {
                        var l = e[c];
                        if ("string" != typeof l) {
                            var d = data[l.name || "pathMatch"],
                                m = void 0;
                            if (null == d) {
                                if (l.optional) {
                                    l.partial && (path += l.prefix);
                                    continue
                                }
                                throw new TypeError('Expected "' + l.name + '" to be defined')
                            }
                            if (Array.isArray(d)) {
                                if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(d) + "`");
                                if (0 === d.length) {
                                    if (l.optional) continue;
                                    throw new TypeError('Expected "' + l.name + '" to not be empty')
                                }
                                for (var h = 0; h < d.length; h++) {
                                    if (m = r(d[h]), !o[c].test(m)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(m) + "`");
                                    path += (0 === h ? l.prefix : l.delimiter) + m
                                }
                            } else {
                                if (m = l.asterisk ? z(d) : r(d), !o[c].test(m)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + m + '"');
                                path += l.prefix + m
                            }
                        } else path += l
                    }
                    return path
                }
            }(function(e, t) {
                var o, n = [],
                    r = 0,
                    c = 0,
                    path = "",
                    l = t && t.delimiter || "/";
                for (; null != (o = j.exec(e));) {
                    var d = o[0],
                        m = o[1],
                        h = o.index;
                    if (path += e.slice(c, h), c = h + d.length, m) path += m[1];
                    else {
                        var k = e[c],
                            T = o[2],
                            f = o[3],
                            _ = o[4],
                            A = o[5],
                            y = o[6],
                            v = o[7];
                        path && (n.push(path), path = "");
                        var O = null != T && null != k && k !== T,
                            P = "+" === y || "*" === y,
                            D = "?" === y || "*" === y,
                            C = o[2] || l,
                            pattern = _ || A;
                        n.push({
                            name: f || r++,
                            prefix: T || "",
                            delimiter: C,
                            optional: D,
                            repeat: P,
                            partial: O,
                            asterisk: Boolean(v),
                            pattern: pattern ? W(pattern) : v ? ".*" : "[^" + K(C) + "]+?"
                        })
                    }
                }
                c < e.length && (path += e.substr(c));
                path && n.push(path);
                return n
            }(e, t), t)
        }

        function L(e, t) {
            var o = {},
                n = k(k({}, e), t);
            for (var r in n) String(e[r]) !== String(t[r]) && (o[r] = !0);
            return o
        }

        function F(e) {
            var t;
            if (e.message || "string" == typeof e) t = e.message || e;
            else try {
                t = JSON.stringify(e, null, 2)
            } catch (o) {
                t = "[".concat(e.constructor.name, "]")
            }
            return k(k({}, e), {}, {
                message: t,
                statusCode: e.statusCode || e.status || e.response && e.response.status || 500
            })
        }
        window.onNuxtReadyCbs = [], window.onNuxtReady = function(e) {
            window.onNuxtReadyCbs.push(e)
        };
        var j = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

        function H(e, t) {
            var o = t ? /[?#]/g : /[/?#]/g;
            return encodeURI(e).replace(o, (function(e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
            }))
        }

        function z(e) {
            return H(e, !0)
        }

        function K(e) {
            return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
        }

        function W(e) {
            return e.replace(/([=!:$/()])/g, "\\$1")
        }

        function G(e) {
            return e && e.sensitive ? "" : "i"
        }

        function V(e, t, o) {
            e.$options[t] || (e.$options[t] = []), e.$options[t].includes(o) || e.$options[t].push(o)
        }
        var Y = m.b,
            X = (m.e, m.a);

        function J(e) {
            try {
                window.history.scrollRestoration = e
            } catch (e) {}
        }
    }, , , , , , , , , , , , , , , , , function(e, t, o) {
        "use strict";
        o.d(t, "d", (function() {
            return d
        })), o.d(t, "i", (function() {
            return m
        })), o.d(t, "h", (function() {
            return h
        })), o.d(t, "a", (function() {
            return k
        })), o.d(t, "g", (function() {
            return T
        })), o.d(t, "b", (function() {
            return f
        })), o.d(t, "c", (function() {
            return _
        })), o.d(t, "f", (function() {
            return A
        })), o.d(t, "e", (function() {
            return y
        }));
        o(5), o(12), o(13);
        var n = o(3),
            r = (o(245), o(92), o(18), o(84), o(85), o(43), o(45), o(8), o(11), o(129), o(107));

        function c(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }

        function l(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? c(Object(source), !0).forEach((function(t) {
                    Object(n.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }

        function d(e) {
            var t, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300;
            return function() {
                var n = this,
                    r = arguments;
                t && clearTimeout(t), t = setTimeout((function() {
                    e.apply(n, r)
                }), o)
            }
        }

        function m(e) {
            e ? document.documentElement.setAttribute("theme", "dark") : document.documentElement.removeAttribute("theme")
        }

        function h(e) {
            try {
                if (-1 !== String(e).indexOf("e")) {
                    var t = String(e),
                        o = t.indexOf("e");
                    if ("-" !== t.charAt(o + 1)) return e;
                    var n = Number(t.substring(o + 2)) - 1,
                        r = t.substring(0, o).split(".").join("").substring(0, 3);
                    return "0.0{".concat(n, "}").concat(r)
                }
                if (e >= 10) return e.toFixed(2);
                if (e < 10 && e >= 1) return e.toFixed(3);
                if (!(e > 0)) return e;
                var c = e.toString().split(""),
                    l = c.indexOf(".");
                if (l >= 0) {
                    for (var d = l, i = l + 1; i < c.length; i++)
                        if ("0" !== c[i]) {
                            d = i;
                            break
                        }
                    return e < 1 && e >= 1e-4 ? c.slice(0, Math.min(d + 3, c.length)).join("") : "0.0{".concat(d - l - 1, "}").concat(c.slice(d, Math.min(d + 3, c.length)).join(""))
                }
            } catch (t) {
                console.log(t, e)
            }
        }
        var k = {
            "ethereum:1": "ETH",
            "eosio:aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906": "EOS",
            "iost:1024": "IOST",
            "tron:728126428": "TRX",
            "bitcoin:000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f": "BTC",
            "ethereum:56": "BSC",
            "polkadot:0": "DOT",
            "polkadot:2": "KSM",
            "ethereum:128": "HECO",
            "ethereum:137": "MATIC",
            "ethereum:66": "OKTC",
            "klaytn:8217": "KLAY",
            "ethereum:43114": "AVAX",
            "ethereum:42161": "ARB",
            "ethereum:250": "FTM",
            "ethereum:10": "OP",
            "solana:1": "SOL",
            "ethereum:1284": "GLMR",
            "ethereum:321": "KCC",
            "ethereum:1030": "CFX",
            "ethereum:61": "ETC",
            "aptos:25": "APTOS",
            "bitcoin:1a91e3dace36e2be3bf030a65679fe821aa1d6ef92e7c9902eb318182c355691": "DOGE",
            "ethereum:324": "zkSync Era",
            "ethereum:17777": "EOS EVM",
            "ethereum:5000": "Mantle",
            "ethereum:59144": "LINEA",
            "ethereum:8453": "Base",
            "ethereum:204": "OPBNB"
        };

        function T(data) {
            try {
                return JSON.parse(data)
            } catch (e) {
                console.log(e)
            }
        }

        function f(e) {
            var t = _();
            t = l(l({}, t), e);
            var o = Object.keys(t).filter((function(e) {
                return t[e]
            })).map((function(e) {
                return "".concat(e, "=").concat(t[e])
            })).join("&");
            o ? history.replaceState("", "", "".concat(location.origin).concat(location.pathname, "?").concat(o)) : history.replaceState("", "", "".concat(location.origin).concat(location.pathname))
        }

        function _() {
            var e = location.search.slice(1),
                t = {};
            return e && Object(r.forEach)(e.split("&"), (function(e) {
                var o = e.split("=");
                t[o[0]] = o[1]
            })), t
        }

        function A(e) {
            return /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/.test(e)
        }

        function y(e) {
            return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(e)
        }
    }, , , , function(e, t, o) {
        "use strict";
        var n, r;
        o.d(t, "a", (function() {
            return n
        })), o.d(t, "b", (function() {
            return r
        })), n = "https://preserver.mytokenpocket.vip", r = "https://betaserver.mytokenpocket.vip"
    }, , , , , , , , , function(e, t, o) {
        "use strict";
        o.d(t, "g", (function() {
            return k
        })), o.d(t, "f", (function() {
            return T
        })), o.d(t, "c", (function() {
            return f
        })), o.d(t, "a", (function() {
            return _
        })), o.d(t, "d", (function() {
            return A
        })), o.d(t, "e", (function() {
            return y
        })), o.d(t, "b", (function() {
            return v
        })), o.d(t, "i", (function() {
            return O
        })), o.d(t, "l", (function() {
            return P
        })), o.d(t, "m", (function() {
            return D
        })), o.d(t, "k", (function() {
            return C
        })), o.d(t, "j", (function() {
            return w
        })), o.d(t, "h", (function() {
            return S
        })), o.d(t, "n", (function() {
            return E
        })), o.d(t, "p", (function() {
            return x
        })), o.d(t, "o", (function() {
            return M
        })), o.d(t, "r", (function() {
            return N
        })), o.d(t, "q", (function() {
            return I
        }));
        var n = o(21),
            r = (o(18), o(27)),
            c = o.n(r),
            l = o(239),
            d = c.a.create({
                timeout: 3e4
            });
        d.defaults.headers.post["Content-Type"] = "application/json", d.interceptors.request.use((function(e) {
            return "get" === e.method && (e.data = Object(l.stringify)(e.data)), e
        }), (function(e) {
            return Promise.reject(e)
        })), d.interceptors.response.use((function(e) {
            if (200 === e.status) return e.data
        }), (function(e) {
            return console.log("request error: ", e), Promise.reject(e)
        }));
        var m = d,
            h = "https://betaserver.mytokenpocket.vip",
            k = "".concat(h, "/v1/news/list"),
            T = "".concat(h, "/v1/news/"),
            f = "".concat(h, "/v1/banner/list"),
            _ = "".concat(h, "/v1/activity/list"),
            A = "".concat(h, "/v1/category/list"),
            y = "".concat(h, "/v1/application/list"),
            v = "".concat(h, "/v1/ad/list");

        function O() {
            return m.get("".concat(n.a, "/v1/block_chain/list?lang=en&version=0.0.1&os=web"))
        }

        function P(e, t) {
            return m.get("".concat(n.a, "/v1/application/home_section_list"), {
                params: t,
                headers: {
                    lang: e.lang,
                    os: e.os
                }
            })
        }

        function D(e, t) {
            return m.get("".concat(n.a, "/v1/application/section_more"), {
                params: t,
                headers: {
                    lang: e.lang,
                    os: e.os
                }
            })
        }

        function C(e, t) {
            var o = e.lang,
                r = e.os,
                c = e.appver;
            return m.get("".concat(n.a, "/v1/application/category_list"), {
                params: t,
                headers: {
                    lang: o,
                    os: r,
                    appver: c
                }
            })
        }

        function w(e, t) {
            return m.get("".concat(n.a, "/v1/application/category_dapplist"), {
                params: t,
                headers: {
                    lang: e.lang,
                    os: e.os
                }
            })
        }

        function S(e, t) {
            return m.get("".concat(n.a, "/v1/banner/superlist"), {
                params: t,
                headers: {
                    lang: e.lang,
                    os: e.os
                }
            })
        }

        function E(e, t) {
            return m.get("".concat(n.a, "/v1/application/hot_list"), {
                params: t,
                headers: {
                    lang: e.lang,
                    os: e.os
                }
            })
        }

        function x(e, t) {
            return m.get("".concat(n.a, "/v1/application/search"), {
                params: t,
                headers: {
                    lang: e.lang
                }
            })
        }

        function M(data) {
            return m.post("".concat(n.a, "/v1/swap_market/market_optional"), data)
        }

        function N(e, t) {
            return m.get("".concat(n.a, "/v1/application/listbyids_new"), {
                params: t,
                headers: {
                    lang: e.lang
                }
            })
        }

        function I() {
            return m.get("".concat(n.a, "/v1/token/ns_token_protocol_list_map"))
        }
    }, , , , function(e, t, o) {
        "use strict";
        o.d(t, "b", (function() {
            return We
        })), o.d(t, "a", (function() {
            return R
        }));
        o(11), o(5), o(8), o(12), o(13);
        var n = o(10),
            r = o(3),
            c = (o(69), o(44), o(45), o(18), o(35), o(1)),
            l = o(4),
            d = o(236),
            m = o(155),
            h = o.n(m),
            k = o(68),
            T = o.n(k),
            f = o(156),
            _ = o(33),
            A = o(0);
        "scrollRestoration" in window.history && (Object(A.u)("manual"), window.addEventListener("beforeunload", (function() {
            Object(A.u)("auto")
        })), window.addEventListener("load", (function() {
            Object(A.u)("manual")
        })));

        function y(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }

        function v(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? y(Object(source), !0).forEach((function(t) {
                    Object(r.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : y(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        var O = function() {};
        c.default.use(f.a);
        var P = {
            mode: "history",
            base: "/",
            linkActiveClass: "nuxt-link-active",
            linkExactActiveClass: "nuxt-link-exact-active",
            scrollBehavior: function(e, t, o) {
                var n = !1,
                    r = e !== t;
                o ? n = o : r && function(e) {
                    var t = Object(A.g)(e);
                    if (1 === t.length) {
                        var o = t[0].options;
                        return !1 !== (void 0 === o ? {} : o).scrollToTop
                    }
                    return t.some((function(e) {
                        var t = e.options;
                        return t && t.scrollToTop
                    }))
                }(e) && (n = {
                    x: 0,
                    y: 0
                });
                var c = window.$nuxt;
                return (!r || e.path === t.path && e.hash !== t.hash) && c.$nextTick((function() {
                    return c.$emit("triggerScroll")
                })), new Promise((function(t) {
                    c.$once("triggerScroll", (function() {
                        if (e.hash) {
                            var o = e.hash;
                            void 0 !== window.CSS && void 0 !== window.CSS.escape && (o = "#" + window.CSS.escape(o.substr(1)));
                            try {
                                document.querySelector(o) && (n = {
                                    selector: o
                                })
                            } catch (e) {
                                console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                            }
                        }
                        t(n)
                    }))
                }))
            },
            routes: [{
                path: "/404",
                component: function() {
                    return Object(A.m)(o.e(6).then(o.bind(null, 1128)))
                },
                name: "404"
            }, {
                path: "/",
                component: function() {
                    return Object(A.m)(Promise.all([o.e(0), o.e(3), o.e(25)]).then(o.bind(null, 1140)))
                },
                name: "index"
            }, {
                path: "/:lang",
                component: function() {
                    return Object(A.m)(Promise.all([o.e(0), o.e(3)]).then(o.bind(null, 1120)))
                },
                name: "lang"
            }, {
                path: "/:lang/about",
                component: function() {
                    return Object(A.m)(o.e(15).then(o.bind(null, 1123)))
                },
                name: "lang-about"
            }, {
                path: "/:lang/brandkit",
                component: function() {
                    return Object(A.m)(o.e(16).then(o.bind(null, 1129)))
                },
                name: "lang-brandkit"
            }, {
                path: "/:lang/dapp",
                component: function() {
                    return Object(A.m)(o.e(17).then(o.bind(null, 1124)))
                },
                name: "lang-dapp"
            }, {
                path: "/:lang/dappstore",
                component: function() {
                    return Object(A.m)(Promise.all([o.e(0), o.e(28), o.e(1), o.e(18)]).then(o.bind(null, 1122)))
                },
                name: "lang-dappstore"
            }, {
                path: "/:lang/developer",
                component: function() {
                    return Object(A.m)(o.e(19).then(o.bind(null, 1130)))
                },
                name: "lang-developer"
            }, {
                path: "/:lang/news",
                component: function() {
                    return Object(A.m)(o.e(21).then(o.bind(null, 1126)))
                },
                name: "lang-news"
            }, {
                path: "/:lang/partner",
                component: function() {
                    return Object(A.m)(o.e(22).then(o.bind(null, 1131)))
                },
                name: "lang-partner"
            }, {
                path: "/:lang/recruiting",
                component: function() {
                    return Object(A.m)(o.e(23).then(o.bind(null, 1132)))
                },
                name: "lang-recruiting"
            }, {
                path: "/:lang/success",
                component: function() {
                    return Object(A.m)(o.e(24).then(o.bind(null, 1133)))
                },
                name: "lang-success"
            }, {
                path: "/:lang/news/:id",
                component: function() {
                    return Object(A.m)(o.e(20).then(o.bind(null, 1127)))
                },
                name: "lang-news-id"
            }, {
                path: "/:lang/:dappstore/detail",
                component: function() {
                    return Object(A.m)(Promise.all([o.e(1), o.e(7)]).then(o.bind(null, 1134)))
                },
                name: "lang-dappstore-detail"
            }, {
                path: "/:lang/:download/android",
                component: function() {
                    return Object(A.m)(o.e(8).then(o.bind(null, 1135)))
                },
                name: "lang-download-android"
            }, {
                path: "/:lang/:download/app",
                component: function() {
                    return Object(A.m)(o.e(9).then(o.bind(null, 1125)))
                },
                name: "lang-download-app"
            }, {
                path: "/:lang/:download/ios",
                component: function() {
                    return Object(A.m)(o.e(10).then(o.bind(null, 1136)))
                },
                name: "lang-download-ios"
            }, {
                path: "/:lang/:download/pc",
                component: function() {
                    return Object(A.m)(o.e(11).then(o.bind(null, 1137)))
                },
                name: "lang-download-pc"
            }, {
                path: "/:lang/:project/dapp",
                component: function() {
                    return Object(A.m)(Promise.all([o.e(2), o.e(12)]).then(o.bind(null, 1121)))
                },
                name: "lang-project-dapp"
            }, {
                path: "/:lang/:project/nft",
                component: function() {
                    return Object(A.m)(o.e(13).then(o.bind(null, 1138)))
                },
                name: "lang-project-nft"
            }, {
                path: "/:lang/:project/token",
                component: function() {
                    return Object(A.m)(Promise.all([o.e(2), o.e(14)]).then(o.bind(null, 1139)))
                },
                name: "lang-project-token"
            }],
            fallback: !1
        };

        function D(e, t) {
            var base = t._app && t._app.basePath || P.base,
                o = new f.a(v(v({}, P), {}, {
                    base: base
                })),
                n = o.push;
            o.push = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O,
                    o = arguments.length > 2 ? arguments[2] : void 0;
                return n.call(this, e, t, o)
            };
            var r = o.resolve.bind(o);
            return o.resolve = function(e, t, o) {
                return "string" == typeof e && (e = Object(_.c)(e)), r(e, t, o)
            }, o
        }
        var C = {
                name: "NuxtChild",
                functional: !0,
                props: {
                    nuxtChildKey: {
                        type: String,
                        default: ""
                    },
                    keepAlive: Boolean,
                    keepAliveProps: {
                        type: Object,
                        default: void 0
                    }
                },
                render: function(e, t) {
                    var o = t.parent,
                        data = t.data,
                        n = t.props,
                        r = o.$createElement;
                    data.nuxtChild = !0;
                    for (var c = o, l = o.$nuxt.nuxt.transitions, d = o.$nuxt.nuxt.defaultTransition, m = 0; o;) o.$vnode && o.$vnode.data.nuxtChild && m++, o = o.$parent;
                    data.nuxtChildDepth = m;
                    var h = l[m] || d,
                        k = {};
                    w.forEach((function(e) {
                        void 0 !== h[e] && (k[e] = h[e])
                    }));
                    var T = {};
                    S.forEach((function(e) {
                        "function" == typeof h[e] && (T[e] = h[e].bind(c))
                    }));
                    var f = T.beforeEnter;
                    if (T.beforeEnter = function(e) {
                            if (window.$nuxt.$nextTick((function() {
                                    window.$nuxt.$emit("triggerScroll")
                                })), f) return f.call(c, e)
                        }, !1 === h.css) {
                        var _ = T.leave;
                        (!_ || _.length < 2) && (T.leave = function(e, t) {
                            _ && _.call(c, e), c.$nextTick(t)
                        })
                    }
                    var A = r("routerView", data);
                    return n.keepAlive && (A = r("keep-alive", {
                        props: n.keepAliveProps
                    }, [A])), r("transition", {
                        props: k,
                        on: T
                    }, [A])
                }
            },
            w = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
            S = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
            E = ["/2018/01/18/sumbitnewtoken/index.html", "/2018/01/18/whatisprivatekey/index.html", "/contactus/", "/whatiskeystore/index.html", "/help/index.html", "/privacy/index.html", "/terms/index.html", "/release/ios.html", "/release/android.html", "/how-to-create-eos-account-by-friend/index.html", "/permission-intro/index.html", "/en/contactus/", "/en/whatiskeystore/index.html", "/en/help/index.html", "/en/privacy/index.html", "/en/terms/index.html", "/en/release/ios.html", "/en/release/android.html", "/en/how-to-create-eos-account-by-friend/index.html", "/en/permission-intro/index.html"],
            x = ["/download/ios", "/download/android"];

        function M(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }
        var N = {
                name: "Error",
                props: {
                    error: {
                        type: Object,
                        default: function() {
                            return {}
                        }
                    }
                },
                data: function() {
                    return {
                        isRedirect: !1
                    }
                },
                computed: function(e) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? M(Object(source), !0).forEach((function(t) {
                            Object(r.a)(e, t, source[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : M(Object(source)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                        }))
                    }
                    return e
                }({}, Object(l.b)(["language"])),
                created: function() {
                    this.redirect()
                },
                layout: "blog",
                mounted: function() {},
                methods: {
                    redirect: function() {
                        var path = this.$route.path.replace("/", ""); - 1 !== E.indexOf(this.$route.path) ? (this.isRedirect = !0, location.href = "https://tp-web.cdn.bcebos.com/".concat(path)) : -1 !== x.indexOf(this.$route.path) ? (this.isRedirect = !0, this.$router.replace("/".concat(this.language, "/").concat(path))) : this.isRedirect = !1
                    }
                }
            },
            I = N,
            B = (o(286), o(2)),
            R = Object(B.a)(I, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {}, [e.isRedirect || 404 != e.error.statusCode ? e._e() : o("div", [o("div", {
                    staticClass: "error-404"
                }, [o("HeaderLayout", {
                    attrs: {
                        "nav-title-color": "#fff",
                        "arrow-class": "icon-down-fff",
                        "lang-class": "icon-earth-mini"
                    }
                }), e._v(" "), o("a", {
                    staticClass: "home-button",
                    attrs: {
                        href: "/"
                    }
                }, [e._v(e._s(e.$t("COMMON.LAYOUT.toHome")))])], 1), e._v(" "), o("FooterLayout")], 1)])
            }), [], !1, null, "6708da39", null).exports,
            U = o(23),
            L = (o(84), o(85), {
                name: "Nuxt",
                components: {
                    NuxtChild: C,
                    NuxtError: R
                },
                props: {
                    nuxtChildKey: {
                        type: String,
                        default: void 0
                    },
                    keepAlive: Boolean,
                    keepAliveProps: {
                        type: Object,
                        default: void 0
                    },
                    name: {
                        type: String,
                        default: "default"
                    }
                },
                errorCaptured: function(e) {
                    this.displayingNuxtError && (this.errorFromNuxtError = e, this.$forceUpdate())
                },
                computed: {
                    routerViewKey: function() {
                        if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(A.c)(this.$route.matched[0].path)(this.$route.params);
                        var e = Object(U.a)(this.$route.matched, 1)[0];
                        if (!e) return this.$route.path;
                        var t = e.components.default;
                        if (t && t.options) {
                            var o = t.options;
                            if (o.key) return "function" == typeof o.key ? o.key(this.$route) : o.key
                        }
                        return /\/$/.test(e.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                    }
                },
                beforeCreate: function() {
                    c.default.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
                },
                render: function(e) {
                    var t = this;
                    return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                        return t.errorFromNuxtError = !1
                    })), e("div", {}, [e("h2", "An error occurred while showing the error page"), e("p", "Unfortunately an error occurred and while showing the error page another error occurred"), e("p", "Error details: ".concat(this.errorFromNuxtError.toString())), e("nuxt-link", {
                        props: {
                            to: "/"
                        }
                    }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function() {
                        return t.displayingNuxtError = !1
                    })), e(R, {
                        props: {
                            error: this.nuxt.err
                        }
                    })) : e("NuxtChild", {
                        key: this.routerViewKey,
                        props: this.$props
                    })
                }
            }),
            F = (o(43), o(55), o(56), o(57), {
                name: "NuxtLoading",
                data: function() {
                    return {
                        percent: 0,
                        show: !1,
                        canSucceed: !0,
                        reversed: !1,
                        skipTimerCount: 0,
                        rtl: !1,
                        throttle: 200,
                        duration: 5e3,
                        continuous: !1
                    }
                },
                computed: {
                    left: function() {
                        return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                    }
                },
                beforeDestroy: function() {
                    this.clear()
                },
                methods: {
                    clear: function() {
                        clearInterval(this._timer), clearTimeout(this._throttle), this._timer = null
                    },
                    start: function() {
                        var e = this;
                        return this.clear(), this.percent = 0, this.reversed = !1, this.skipTimerCount = 0, this.canSucceed = !0, this.throttle ? this._throttle = setTimeout((function() {
                            return e.startTimer()
                        }), this.throttle) : this.startTimer(), this
                    },
                    set: function(e) {
                        return this.show = !0, this.canSucceed = !0, this.percent = Math.min(100, Math.max(0, Math.floor(e))), this
                    },
                    get: function() {
                        return this.percent
                    },
                    increase: function(e) {
                        return this.percent = Math.min(100, Math.floor(this.percent + e)), this
                    },
                    decrease: function(e) {
                        return this.percent = Math.max(0, Math.floor(this.percent - e)), this
                    },
                    pause: function() {
                        return clearInterval(this._timer), this
                    },
                    resume: function() {
                        return this.startTimer(), this
                    },
                    finish: function() {
                        return this.percent = this.reversed ? 0 : 100, this.hide(), this
                    },
                    hide: function() {
                        var e = this;
                        return this.clear(), setTimeout((function() {
                            e.show = !1, e.$nextTick((function() {
                                e.percent = 0, e.reversed = !1
                            }))
                        }), 500), this
                    },
                    fail: function(e) {
                        return this.canSucceed = !1, this
                    },
                    startTimer: function() {
                        var e = this;
                        this.show || (this.show = !0), void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)), this._timer = setInterval((function() {
                            e.skipTimerCount > 0 ? e.skipTimerCount-- : (e.reversed ? e.decrease(e._cut) : e.increase(e._cut), e.continuous && (e.percent >= 100 || e.percent <= 0) && (e.skipTimerCount = 1, e.reversed = !e.reversed))
                        }), 100)
                    }
                },
                render: function(e) {
                    var t = e(!1);
                    return this.show && (t = e("div", {
                        staticClass: "nuxt-progress",
                        class: {
                            "nuxt-progress-notransition": this.skipTimerCount > 0, "nuxt-progress-failed": !this.canSucceed
                        },
                        style: {
                            width: this.percent + "%",
                            left: this.left
                        }
                    })), t
                }
            }),
            j = (o(287), Object(B.a)(F, undefined, undefined, !1, null, null, null).exports),
            H = (o(288), o(289), o(290), o(291), o(292), o(17)),
            z = o(107),
            K = o(238),
            W = o.n(K);

        function G(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }
        var V = {
                components: {
                    DonateBox: o(165).a
                },
                data: function() {
                    return {
                        donateDialog: !1
                    }
                },
                created: function() {
                    var e = this;
                    this.initTheme(), this.$store.dispatch("GET_BLOCKCHAIN_LIST"), this.$store.dispatch("GET_TOKEN_PROTOCOL_MAP"), this.$store.commit("SET_DEVICESIZE", this.setDeviceSize()), window.onresize = function() {
                        e.$store.commit("SET_DEVICESIZE", e.setDeviceSize())
                    }
                },
                mounted: function() {
                    var e = this;
                    this.$mitt.on("show-donate-dialog", (function(t) {
                        console.log("donate-res", t), e.donateDialog = t.show
                    }))
                },
                computed: function(e) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? G(Object(source), !0).forEach((function(t) {
                            Object(r.a)(e, t, source[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : G(Object(source)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                        }))
                    }
                    return e
                }({}, Object(l.b)(["deviceSize"])),
                watch: {},
                methods: {
                    initTheme: function() {
                        var e = this,
                            t = Object(H.c)(),
                            o = "",
                            n = Object(z.includes)(["light", "dark"], t.theme) ? t.theme : "light";
                        o = t.theme ? n : localStorage.getItem("theme"), Object(H.b)({
                            theme: ""
                        }), o ? "dark" === o ? (Object(H.i)(!0), this.$store.commit("SET_DARKMODE", !0), localStorage.setItem("theme", "dark")) : (Object(H.i)(!1), this.$store.commit("SET_DARKMODE", !1), localStorage.setItem("theme", "light")) : navigator.userAgent.indexOf("TokenPocket") > -1 && W.a.isDarkMode().then((function(t) {
                            t.result && t.data ? (e.$store.commit("SET_DARKMODE", t.data), Object(H.i)(!0)) : Object(H.i)(!1)
                        }))
                    },
                    setDeviceSize: function() {
                        return document.documentElement.clientWidth <= 1250 && document.documentElement.clientWidth > 767 ? "ipad" : document.documentElement.clientWidth <= 767 ? "mobile" : "web"
                    }
                }
            },
            Y = V,
            X = (o(318), Object(B.a)(Y, (function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", [t("nuxt")], 1)
            }), [], !1, null, "7016ca8a", null).exports),
            J = o(66),
            Q = o(64),
            $ = o(112),
            Z = o(65),
            ee = o(67),
            te = o(113);

        function oe(e, t) {
            var o = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!o) {
                if (Array.isArray(e) || (o = function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return ae(e, t);
                        var o = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === o && e.constructor && (o = e.constructor.name);
                        if ("Map" === o || "Set" === o) return Array.from(e);
                        if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return ae(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                    o && (e = o);
                    var i = 0,
                        n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, c = !0,
                l = !1;
            return {
                s: function() {
                    o = o.call(e)
                },
                n: function() {
                    var e = o.next();
                    return c = e.done, e
                },
                e: function(e) {
                    l = !0, r = e
                },
                f: function() {
                    try {
                        c || null == o.return || o.return()
                    } finally {
                        if (l) throw r
                    }
                }
            }
        }

        function ae(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, o = new Array(t); i < t; i++) o[i] = e[i];
            return o
        }
        var ne = {
                _default: Object(A.s)(X),
                _FooterLayout: Object(A.s)(J.a),
                "_Header/index": Object(A.s)(Q.a),
                "_Header/mini": Object(A.s)($.a),
                "_Header/NavIndex": Object(A.s)(Z.a),
                "_Header/normal": Object(A.s)(ee.a),
                "_Header/warn": Object(A.s)(te.a)
            },
            re = {
                render: function(e, t) {
                    var o = e("NuxtLoading", {
                            ref: "loading"
                        }),
                        n = e(this.layout || "nuxt"),
                        r = e("div", {
                            domProps: {
                                id: "__layout"
                            },
                            key: this.layoutName
                        }, [n]),
                        c = e("transition", {
                            props: {
                                name: "layout",
                                mode: "out-in"
                            },
                            on: {
                                beforeEnter: function(e) {
                                    window.$nuxt.$nextTick((function() {
                                        window.$nuxt.$emit("triggerScroll")
                                    }))
                                }
                            }
                        }, [r]);
                    return e("div", {
                        domProps: {
                            id: "__nuxt"
                        }
                    }, [o, c])
                },
                data: function() {
                    return {
                        isOnline: !0,
                        layout: null,
                        layoutName: "",
                        nbFetching: 0
                    }
                },
                beforeCreate: function() {
                    c.default.util.defineReactive(this, "nuxt", this.$options.nuxt)
                },
                created: function() {
                    this.$root.$options.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
                },
                mounted: function() {
                    var e = this;
                    return Object(n.a)(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    e.$loading = e.$refs.loading;
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                watch: {
                    "nuxt.err": "errorChanged"
                },
                computed: {
                    isOffline: function() {
                        return !this.isOnline
                    },
                    isFetching: function() {
                        return this.nbFetching > 0
                    },
                    isPreview: function() {
                        return Boolean(this.$options.previewData)
                    }
                },
                methods: {
                    refreshOnlineStatus: function() {
                        void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                    },
                    refresh: function() {
                        var e = this;
                        return Object(n.a)(regeneratorRuntime.mark((function t() {
                            var o, n;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if ((o = Object(A.h)(e.$route)).length) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 3:
                                        return e.$loading.start(), n = o.map((function(t) {
                                            var p = [];
                                            if (t.$options.fetch && t.$options.fetch.length && p.push(Object(A.q)(t.$options.fetch, e.context)), t.$fetch) p.push(t.$fetch());
                                            else {
                                                var o, n = oe(Object(A.e)(t.$vnode.componentInstance));
                                                try {
                                                    for (n.s(); !(o = n.n()).done;) {
                                                        var component = o.value;
                                                        p.push(component.$fetch())
                                                    }
                                                } catch (e) {
                                                    n.e(e)
                                                } finally {
                                                    n.f()
                                                }
                                            }
                                            return t.$options.asyncData && p.push(Object(A.q)(t.$options.asyncData, e.context).then((function(e) {
                                                for (var o in e) c.default.set(t.$data, o, e[o])
                                            }))), Promise.all(p)
                                        })), t.prev = 5, t.next = 8, Promise.all(n);
                                    case 8:
                                        t.next = 15;
                                        break;
                                    case 10:
                                        t.prev = 10, t.t0 = t.catch(5), e.$loading.fail(t.t0), Object(A.k)(t.t0), e.error(t.t0);
                                    case 15:
                                        e.$loading.finish();
                                    case 16:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [5, 10]
                            ])
                        })))()
                    },
                    errorChanged: function() {
                        if (this.nuxt.err) {
                            this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err), this.$loading.finish && this.$loading.finish());
                            var e = (R.options || R).layout;
                            "function" == typeof e && (e = e(this.context)), this.setLayout(e)
                        }
                    },
                    setLayout: function(e) {
                        return e && ne["_" + e] || (e = "default"), this.layoutName = e, this.layout = ne["_" + e], this.layout
                    },
                    loadLayout: function(e) {
                        return e && ne["_" + e] || (e = "default"), Promise.resolve(ne["_" + e])
                    }
                },
                components: {
                    NuxtLoading: j
                }
            };
        c.default.use(l.a);
        var ie = {};
        (ie = function(e, t) {
            if ((e = e.default || e).commit) throw new Error("[nuxt] ".concat(t, " should export a method that returns a Vuex instance."));
            return "function" != typeof e && (e = Object.assign({}, e)),
                function(e, t) {
                    if (e.state && "function" != typeof e.state) {
                        console.warn("'state' should be a method that returns an object in ".concat(t));
                        var o = Object.assign({}, e.state);
                        e = Object.assign({}, e, {
                            state: function() {
                                return o
                            }
                        })
                    }
                    return e
                }(e, t)
        }(o(408), "store/index.js")).modules = ie.modules || {};
        var se = ie instanceof Function ? ie : function() {
            return new l.a.Store(Object.assign({
                strict: !1
            }, ie))
        };
        var ce = o(27),
            le = o.n(ce);

        function ue(e, t) {
            var o = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!o) {
                if (Array.isArray(e) || (o = function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return de(e, t);
                        var o = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === o && e.constructor && (o = e.constructor.name);
                        if ("Map" === o || "Set" === o) return Array.from(e);
                        if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return de(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                    o && (e = o);
                    var i = 0,
                        n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, c = !0,
                l = !1;
            return {
                s: function() {
                    o = o.call(e)
                },
                n: function() {
                    var e = o.next();
                    return c = e.done, e
                },
                e: function(e) {
                    l = !0, r = e
                },
                f: function() {
                    try {
                        c || null == o.return || o.return()
                    } finally {
                        if (l) throw r
                    }
                }
            }
        }

        function de(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, o = new Array(t); i < t; i++) o[i] = e[i];
            return o
        }
        for (var pe = {
                setBaseURL: function(e) {
                    this.defaults.baseURL = e
                },
                setHeader: function(e, t) {
                    var o, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                        r = ue(Array.isArray(n) ? n : [n]);
                    try {
                        for (r.s(); !(o = r.n()).done;) {
                            var c = o.value;
                            if (!t) return void delete this.defaults.headers[c][e];
                            this.defaults.headers[c][e] = t
                        }
                    } catch (e) {
                        r.e(e)
                    } finally {
                        r.f()
                    }
                },
                setToken: function(e, t) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                        n = e ? (t ? t + " " : "") + e : null;
                    this.setHeader("Authorization", n, o)
                },
                onRequest: function(e) {
                    this.interceptors.request.use((function(t) {
                        return e(t) || t
                    }))
                },
                onResponse: function(e) {
                    this.interceptors.response.use((function(t) {
                        return e(t) || t
                    }))
                },
                onRequestError: function(e) {
                    this.interceptors.request.use(void 0, (function(t) {
                        return e(t) || Promise.reject(t)
                    }))
                },
                onResponseError: function(e) {
                    this.interceptors.response.use(void 0, (function(t) {
                        return e(t) || Promise.reject(t)
                    }))
                },
                onError: function(e) {
                    this.onRequestError(e), this.onResponseError(e)
                }
            }, me = function() {
                var e = ge[he];
                pe["$" + e] = function() {
                    return this[e].apply(this, arguments).then((function(e) {
                        return e && e.data
                    }))
                }
            }, he = 0, ge = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; he < ge.length; he++) me();
        var ke = function(e, t) {
                var o = {
                    baseURL: "http://localhost:3000/",
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        },
                        delete: {},
                        get: {},
                        head: {},
                        post: {},
                        put: {},
                        patch: {}
                    }
                };
                o.headers.common = e.req && e.req.headers ? Object.assign({}, e.req.headers) : {}, delete o.headers.common.accept, delete o.headers.common.host, delete o.headers.common["cf-ray"], delete o.headers.common["cf-connecting-ip"], delete o.headers.common["content-length"], delete o.headers.common["content-md5"], delete o.headers.common["content-type"];
                var n = le.a.create(o);
                n.CancelToken = le.a.CancelToken, n.isCancel = le.a.isCancel,
                    function(e) {
                        for (var t in pe) e[t] = pe[t].bind(e)
                    }(n),
                    function(e, t) {
                        var o = {
                                finish: function() {},
                                start: function() {},
                                fail: function() {},
                                set: function() {}
                            },
                            n = function() {
                                return window.$nuxt && window.$nuxt.$loading && window.$nuxt.$loading.set ? window.$nuxt.$loading : o
                            },
                            r = 0;
                        e.onRequest((function(e) {
                            e && !1 === e.progress || r++
                        })), e.onResponse((function(e) {
                            e && e.config && !1 === e.config.progress || --r <= 0 && (r = 0, n().finish())
                        })), e.onError((function(e) {
                            e && e.config && !1 === e.config.progress || (r--, le.a.isCancel(e) || (n().fail(), n().finish()))
                        }));
                        var c = function(e) {
                            if (r) {
                                var progress = 100 * e.loaded / (e.total * r);
                                n().set(Math.min(100, progress))
                            }
                        };
                        e.defaults.onUploadProgress = c, e.defaults.onDownloadProgress = c
                    }(n), e.$axios = n, t("axios", n)
            },
            Te = o(240),
            fe = o.n(Te);
        o(409);
        c.default.use(fe.a);
        var be = o(83),
            _e = o(162);
        c.default.component("ContainerLayout", be.a), c.default.component("HeaderLayout", Q.a), c.default.component("FooterLayout", J.a), c.default.component("Layout", _e.a);
        var Ae = o(157),
            ye = {
                COMMON: {
                    EMAIL: "Email",
                    YES: "是",
                    NO: "否",
                    HAS: "有",
                    HAVENT: "没有",
                    BLOCKCHAIN: "项目网络",
                    MULTIPLE_CHOICE: "(可多选)",
                    IS_SUPPORT_TP_CONNECT: "是否支持TokenPocket连接（包括移动端和插件端）",
                    SUPPORT_BOTH: "均已支持",
                    SUPPORT_EXTENSION: "仅支持插件端",
                    SUPPORT_MOBILE: "仅支持移动端",
                    SUPPORT_NONE: "均未支持",
                    blockchainWallet: "区块链钱包",
                    iostWallet: "IOST钱包",
                    tronWallet: "TRON钱包",
                    platformInfo: {
                        eos: "EOS",
                        moac: "墨客",
                        eth: "以太坊",
                        jt: "井通",
                        enu: "ENU",
                        bos: "BOS",
                        iost: "IOST",
                        cosmos: "COSMOS",
                        bnb: "BNB",
                        trx: "TRON",
                        bsc: "币安智能链",
                        heco: "火币生态链",
                        okex: "OKExChain",
                        dot: "Polkadot",
                        hsc: "虎符智能链",
                        matic: "Polygon",
                        klaytn: "Klaytn",
                        arb: "Arbitrum One",
                        arbn: "Arbirtum Nova",
                        ftm: "Fantom",
                        etc: "Ethereum Classic",
                        cfx: "Conflux eSpace",
                        solana: "Solana",
                        avax: "AVAX",
                        oe: "Optimistic Ethereum",
                        xdai: "Gnosis Chain",
                        harmony: "Harmony",
                        wax: "WAX",
                        aurora: "Aurora",
                        ksm: "Kusama",
                        mb: "Moonbeam",
                        sbg: "SubGame",
                        kcc: "KCC Mainnet",
                        lat: "PlatON",
                        bttc: "BTTC",
                        gt: "GateChain",
                        halo: "HALO",
                        aptos: "Aptos",
                        fil: "Filecoin FVM",
                        zks: "zkSync Era",
                        eosevm: "EOS EVM",
                        mantle: "Mantle",
                        linea: "Linea",
                        base: "Base",
                        opbnb: "opBNB",
                        polyzk: "Polygon zkEVM",
                        core: "CORE",
                        haqq: "HAQQ",
                        scroll: "Scroll",
                        manta: "Manta",
                        bevm: "BEVM",
                        zkfair: "ZKFair",
                        metis: "Metis",
                        zeta: "Zeta Chain",
                        merlin: "Merlin",
                        blast: "Blast",
                        xlayer: "X Layer",
                        bitlayer: "Bitlayer",
                        kroma: "Kroma"
                    },
                    submit: "提交",
                    confirm: "确认",
                    save: "保存",
                    contactEmail: "联系邮箱:",
                    submitSuccess: "提交成功！",
                    submitDAppSuccessDesc: "您提交的项目将会在我们审核通过之后上架！",
                    submitTokenSuccessDesc: "您提交的代币将会在我们审核通过之后上架！",
                    backToHome: "返回官网首页",
                    searchNetwork: "搜索网络名称",
                    example: "示例",
                    submitTokenInfoAndLogo: "提交代币信息及logo",
                    toGithubSubmit: "跳转至Github提交",
                    contact: "联系方式：",
                    contactDesc: "请务必留下除邮箱以外的客服联系方式，否则无法通过审核",
                    addContactDetail: "添加联系方式",
                    urlError: "请输入正确的链接",
                    eg: "例：",
                    moreThan: "请勿超过{count}字符",
                    nftType: "NFT类型",
                    logoDesc: "剽窃或模仿现有项目、涉及版权风险或政治元素的图片将不会通过审核。",
                    logoDesc_2: "请提交 <strong>400*400px、JPG&PNG、最大 5M</strong> 的高质量logo，以确保您提交的项目能成功通过审核。",
                    uploadError: "请提交 400*400px、JPG&PNG、最大 5M 的高质量logo",
                    nextStep: "下一步",
                    donate: {
                        title: "请捐赠",
                        desc: "请在提交申请时，捐赠指定数额的<strong>TPT</strong>代币。",
                        tutorial: "指南",
                        tutorial_1: '支持的网络：<strong style="color: var(--color-1)">BSC</strong>',
                        tutorial_2: '支持的代币：<strong style="color: var(--color-1)">TPT (</strong><span data-info="info" style="color: #2980FE;cursor: pointer;">代币信息</span><strong style="color: var(--color-1)">)</strong>。如果您发送任何其他代币，您提交的项目将不会通过审核。<span data-link="link" style="color: #2980FE;cursor: pointer;">前往获取TPT</span>',
                        tutorial_2_mobile: '支持的代币：<strong style="color: var(--color-1)">TPT</strong>。如果您发送任何其他代币，您提交的项目将不会通过审核。<span data-link="link" style="color: #2980FE>前往获取TPT</span>',
                        tutorial_3: '<strong style="color: var(--color-1)">发送代币时请勿离开当前页面。</strong>如果您离开了当前页面，所需的捐赠金额可能会变化，这将导致我们无法确认您的支付情况。',
                        tutorial_4: '支付成功后，请将<strong style="color: var(--color-1)">交易的哈希链接</strong>粘贴到下方的输入框中。',
                        amount: "捐赠数额:",
                        blockchain: "公链",
                        receivingAddress: "接收地址",
                        hash: "交易哈希链接",
                        tokenInfo: "代币信息",
                        tokenContract: "代币合约"
                    },
                    LAYOUT: {
                        features: "功能",
                        products: "产品",
                        buyCryptoFooter: "购买数字资产",
                        mobileWallet: "手机钱包",
                        mobileWalletDesc: "您的移动端数字资产钱包，支持iOS和Android",
                        hardwareWallet: "硬件钱包",
                        hardwareWalletDesc: "拥有KeyPal，让您的资产更安全",
                        TPCard: "TP Card",
                        TPCardDesc: "你的第一张去中心化银行卡",
                        extensionWallet: "插件钱包",
                        extensionWalletDesc: "您电脑上更好用的钱包",
                        desktop: "桌面端钱包",
                        fiveDegrees: "5Degrees",
                        versionVerification: "正版检测",
                        versionVerificationDesc: "验证你的钱包是否为正版",
                        approvalDetector: "授权检测",
                        approvalDetectorDesc: "查看和取消授权您已经授权的代币",
                        tokenSecurity: "代币安全检测",
                        tokenSecurityDesc: "通过合约地址检查代币是否安全",
                        keyGenerator: "私钥生成器",
                        keyGeneratorDesc: "在多个网络上生成公钥和私钥",
                        tokenProfile: "代币信息",
                        tokenProfileDesc: "了解代币的全方位信息",
                        tokenClaim: "领取空投",
                        tokenClaimDesc: "获取您的空投",
                        easyInscription: "铭文助手",
                        easyInscriptionDesc: "安全的铭文铸造工具",
                        nostrAssetsBatchSender: "Nostr批量转账",
                        nostrAssetsBatchSenderDesc: "Nostr资产的批量发送工具",
                        BATCH_SENDER: "批量转账",
                        BATCH_SENDER_DESC: "一次性向多个接收者批量发送代币",
                        trade: "交易",
                        swap: "闪兑",
                        swapDesc: "用最优价格交易",
                        bridge: "跨链桥",
                        bridgeDesc: "在不同公链之间无缝衔接资产",
                        buyCrypto: "购买代币",
                        buyCryptoDesc: "用信用卡购买数字资产",
                        market: "市场",
                        marketDesc: "实时洞察，发现热门代币",
                        information: "信息",
                        blockchainGuide: "区块链小白书",
                        tronWallet: "波场小白书",
                        iostWallet: "IOST小白书",
                        tpMan: "TP侠",
                        developers: "开发者资源",
                        github: "Github (TP-Lab)",
                        devCenter: "开发者中心",
                        developersDesc: "TokenPocket的开发者文档",
                        subToken: "提交代币",
                        subTokenDesc: "提交您的数字资产和NFT",
                        subDApp: "提交DApp",
                        subDAppDesc: "提交您的DApp，我们将在审核后展示它",
                        subNFT: "提交NFT",
                        subNFTDesc: "提交您的NFT和艺术品",
                        subChain: "提交公链",
                        subChainDesc: "提交您的区块链",
                        bugBounty: "漏洞赏金",
                        tools: "工具",
                        build: "开发者中心",
                        learn: "学习",
                        explorer: "探索",
                        darkMode: "暗黑模式",
                        company: "公司",
                        about: "关于",
                        careers: "招聘",
                        pressKit: "品牌素材",
                        swagShop: "周边商店",
                        support: "支持",
                        helpCenter: "帮助中心",
                        helpCenterDesc: "答疑解惑与获取资源的首选",
                        contactUs: "联系我们",
                        contactUsDesc: "分享您对TokenPocket的任何建议，提出您的任何疑问",
                        forum: "社区论坛",
                        forumDesc: "祝您与社区成员会谈愉快",
                        legal: "法律",
                        privacyPolicy: "隐私策略",
                        terms: "服务协议",
                        brandKit: "品牌标志",
                        toHome: "返回首页",
                        defiWallet: "DeFi钱包",
                        ETHWallet: "以太坊錢包",
                        ethWallet: "ETH钱包"
                    }
                },
                HOME: {
                    download: "下载",
                    downloadNow: "立即下载",
                    HEADER: {
                        title: "让区块链随处发生",
                        desc_1: "让你安全、简单地探索区块链，是全球领先的数字资产钱包"
                    },
                    INTRODUCTION: {
                        title: "TokenPocket深受全球用户信赖",
                        desc_1: "我们为全球200多个国家及地区的用户提供安全易用的数字资产服务",
                        desc_2: "服务的用户",
                        desc_3: "日均交易数",
                        desc_4: "国家及地区",
                        desc_5: "成立于"
                    },
                    SECURITY: {
                        title: "安全是我们的根基",
                        desc_1: "TokenPocket只在用户的设备里生成并存储私钥助记词，您是唯一可以访问的人",
                        desc_2: "TokenPocket同时开发了冷钱包、多签钱包等，来满足您对安全的需求",
                        desc_3: "多链钱包，支持BTC、ETH、BSC、TRON、Aptos、Polygon、Solana、Cosmos、Polkadot、EOS、IOST等"
                    },
                    EXCHANGE: {
                        title: "兑换、交易更简单",
                        desc_1: "随时随地，让你更方便地交易",
                        desc_2: "用你的信用卡购入数字资产，轻松存储、发送、跨链与兑换",
                        desc_3: "闪兑",
                        desc_4: "简单快速",
                        desc_5: "跨链",
                        desc_6: "多链转换",
                        desc_7: "购入数字资产",
                        desc_8: "仅在5分钟内",
                        desc_9: "TP Card",
                        desc_10: "使用数字资产支付"
                    },
                    DAPPSTORE: {
                        title: "一站式DApp商店",
                        desc_1: "找到你最喜爱的去中心化应用，发现最新、最热的DApp，一切尽在TokenPocket",
                        desc_2: "集成DApp浏览器，您可以访问你的任何DApp链接",
                        desc_3: "DeFi",
                        desc_4: "NFT",
                        desc_5: "DApp",
                        desc_6: "已支持"
                    },
                    COMMUNITY: {
                        title: "社区",
                        desc_1: "我们坚持开放性社区，始终如一！我们欢迎所有开发者一起开发更方便、更丰富的的区块链世界",
                        desc_2: "TP-Lab",
                        desc_3: "开发者社区",
                        desc_4: "开发者文档"
                    },
                    DOWNLOAD: {
                        title: "现在就拥有您的TokenPocket!",
                        desc_1: "安全可信赖的数字资产钱包，伴您探索区块链世界"
                    },
                    FOLLOW: {
                        title: "关注我们",
                        desc1: "TokenPocket 客服不会私聊您！",
                        desc2: "请注意，您即将进入TokenPocket社区，您进入社区可能会有人假冒TokenPocket的工作人员私聊您，请您务必警惕，所有私聊您的都可能是骗子！TokenPocket工作人员不会主动跟您私信！",
                        desc3: "知道了，继续前往"
                    },
                    EXTENSIONMODAL: {
                        title: "Extension is now live!",
                        desc1: "Your Crypto & DeFi & GameFi",
                        desc2: "wallet on computer",
                        btnText: "Use It Now",
                        btnTextm: "Copy Link",
                        tips: "Copy the link successfully, please go to the computer to open"
                    }
                },
                DAPP: {
                    RULES: {
                        platform: "项目网络不能为空",
                        title: "项目名称不能为空",
                        address: "DApp合约帐号不能为空",
                        url: "项目链接不能为空",
                        desc: "项目简介不能为空",
                        icon_url: "请上传DApp图标",
                        rakeBackAccount: "邀请奖励合约账号不能为空",
                        email: "邮箱不能为空",
                        others: "其他联系方式不能为空",
                        category: "请至少选择一个项目分类",
                        tp_connect: "至少选择一项",
                        audit_url_1: "审计报告链接已超出限定字符（1000字符）",
                        audit_url: "审计报告链接不能为空"
                    },
                    title: "项目名称",
                    address: "DApp合约地址",
                    url: "项目链接",
                    desc: "项目简介",
                    icon: "DApp图标",
                    referral: "返佣",
                    hasReferral: "是否有返佣机制",
                    referralReward: "邀请奖励发放方式",
                    reward_1: "邀请奖励发放方式",
                    reward_2: "邀请人需在DApp里手动领取",
                    hasInviteReward: "邀请人账号是否需要在DApp中完成一笔交易才能激活邀请奖励",
                    inviteAccount: "给TP发放邀请奖励的合约账号",
                    DAppRequirement: "DApp要求",
                    requirement_1: "DApp需要支持TokenPocket移动端和插件端。",
                    requirement_2: "您提供的项目网址需要可以公开访问，并且稳定性有所保证。",
                    requirement_3: "您的项目的智能合约需要已经部署到主网上，敏感逻辑处需要开源。",
                    requirement_4: "敏感的合约需要提供第三方安全机构的审计报告。",
                    requirement_5: "DApp需要交互逻辑清晰，有实际用途，并且适配移动端。",
                    requirement_6: "要求符合相关法律法规，不存在欺诈和侵权等行为。",
                    requirement_7: "如果违反相关法律法规，您应自愿承受相应法律责任。",
                    dappInfo: "项目信息：",
                    necessary: "为必填项",
                    language: "项目语言",
                    languageDesc: "(多语言请分别提交)",
                    en: "English",
                    zh: "中文简体",
                    zhTW: "中文繁体",
                    descDesc: "一句话简单描述项目，将出现在DApp副标题里",
                    auditInfo: "审计信息：",
                    hasAudit: "是否已进行合约审计",
                    auditUrl: "审计报告链接",
                    auditUrlExample: "如：https://auditlink.com",
                    auditReport: "审计报告",
                    auditUpload: "点击上传",
                    contact: "联系方式：",
                    emailAddr: "邮箱",
                    emailExample: "例：build@tokenpocket.pro",
                    others: "其他",
                    othersExample: "例：https://t.me/tokenpocket_en",
                    auditOptional: "审计信息至少选填一项",
                    oversize: "已超出限定字符",
                    select: "请选择",
                    tutorial_url: "https://help.tokenpocket.pro/developer-cn/",
                    tutorial: "对接教程",
                    noData: "查无此网络～",
                    categories: "分类",
                    IS_SUPPORT_TP_CONNECT_1: "是否支持TokenPocket连接",
                    IS_SUPPORT_TP_CONNECT_2: "(包括移动端和插件端)",
                    IS_SUPPORT_TP_CONNECT_3: "TokenPocket连接",
                    dappTokensTitle: "DApp代币",
                    dappTokens: "您的项目是否有发行代币？",
                    emailError: "请输入正确的邮箱",
                    dappSmartContract: "智能合约",
                    dappSmartContractDesc: "添加您的DApp的智能合约，如果超过一个，请使用逗号（,）分隔",
                    addAuditUrl: "添加审计报告链接",
                    backToHome: "返回官网首页",
                    openSmartContract: "为每条链添加智能合约",
                    openTokens: "添加代币信息",
                    tokens: "请添加至少一条代币信息",
                    addToken: "添加代币",
                    network: "代币网络",
                    symbol: "代币符号",
                    contract: "代币合约"
                },
                DOWNLOAD: {
                    TITLE: "下载 TokenPocket",
                    TITLE_Android: "TokenPocket 安卓客户端",
                    TITLE_IOS: "TokenPocket iOS客户端",
                    TITLE_Chrome: "TokenPocket 浏览器插件",
                    TEXT: "TokenPocket 是一款支持多链的自托管钱包，使用简单安全，深受全球数千万人的信赖与喜爱",
                    TEXT_Chrome: "TokenPocket插件钱包是一款多链自托管钱包，支持所有EVM兼容链，使用简单安全，深受全球数千万人的信赖与喜爱",
                    TEXT_PC: "TokenPocket桌面端是基于ETH、TRON、EOS的多链钱包，我们努力为用户提供强大且安全的数字资产管理服务",
                    scanCode: "扫码下载",
                    installTutorial: "插件安装教程",
                    desc_1: "请务必从官网下载钱包应用，并检查网站的SSL证书",
                    desc_2: "保护好您的私钥、助记词，切勿泄露，更不可与任何人透露",
                    desc_3: "了解更多安全知识",
                    verifyText: "最新安卓版本：",
                    verifyText1: "如何验证钱包App的真假",
                    verifyText2: "最新版本",
                    verifyText3: "最新谷歌商店版本：",
                    footerTitle: "",
                    footerDesc_1: "多链钱包，支持BTC、ETH、BSC、TRON、Matic、Aptos、Solana、EOS、Polkadot、IOST等等",
                    footerDesc_2: "多重安全保护措施，让您安心使用",
                    footerDesc_3: "支持DeFi、DApp、GameFi和NFT等",
                    coming_soon: "即将上线",
                    desc_tp_wallet: "正式成为 TokenPocket 唯一 iOS App 发行商",
                    tp_wallet_version: "TP Wallet版本:",
                    token_pocket_version: "Token Pocket版本:",
                    delisted: "已下架",
                    checkoutAllVersion: "查看所有版本",
                    apk32Title: "下载 32 位安装包",
                    apk32Desc: "32位安装包适用于较配置较低的设备，如果您出现DApp无法正常链接的情况，可以下载使用32位的安装包。",
                    download: "下载"
                },
                TOKEN: {
                    RULES: {
                        network: "项目网络不能为空",
                        email: "Email不能为空",
                        address: "合约地址不能为空",
                        owner_address: "合约帐号地址不能为空",
                        symbol: "代币符号不能为空",
                        bl_symbol: "网络代码不能为空",
                        total_supply: "代币数量不能为空",
                        decimal: "代币精度不能为空",
                        precision: "代币小数位不能为空",
                        gas: "GAS费用不能为空",
                        website: "官网地址不能为空",
                        website_1: "官方网址已超出限定字符",
                        companyName: "公司或个人名字不能为空",
                        contact: "项目方联系方式不能为空",
                        description: "项目简介不能为空",
                        description_1: "项目简介已超出限定字符",
                        name: "代币名称不能为空",
                        icon_url: "请上传代币Logo"
                    },
                    icon: "代币图标",
                    handleText: "我们会在两个工作日内处理您的申请",
                    tokenStandard: "代币协议",
                    requirement_1: "请勿提交貔貅代币或钓鱼代币。",
                    requirement_2: "请不要重复提交相同的代币。",
                    requirement_3: "代币的智能合约要求已经被部署在主网上。",
                    requirement_4: "必须提交代币logo。",
                    requirement_5: "如违反相关法律法规，自愿承受相应法律责任。",
                    addMore: "添加其他联系方式",
                    placeholder_1: "请输入...",
                    tokenRequirement: "代币要求",
                    information: "代币信息",
                    network: "代币网络",
                    name: "代币名称",
                    symbol: "代币符号",
                    bl_symbol: "网络代码",
                    precision: "代币小数位",
                    decimal: "精度",
                    totalSupply: "代币数量",
                    contract: "合约地址",
                    website: "官方网址",
                    introduction: "项目简介"
                },
                RECRUITING: {
                    title: "TP侠招募计划",
                    text: "加入TokenPocket社区",
                    text1: "投身到区块链世界，贡献自己的一份力量",
                    text2: "共同建设Web3.0世界",
                    joinUs: "加入我们",
                    aboutTitle: "关于TP侠",
                    aboutText: "TP侠是TP社区中的重要一员，我们诚挚地邀请您成为全球TP侠中的一员！",
                    aboutText1: "热衷于区块链事业并认可它的价值",
                    aboutText2: "作为TokenPocket的忠诚用户，希望为探索区块链增加便利",
                    missionTitle: "TP侠使命",
                    missionText: "在全球范围内，帮助TP钱包服务更多的区块链用户，我们希望您（满足以下其中两项要求即可报名）",
                    missionText1: "能够通过多种渠道拓展并促进TP与所在国家的的营销公司或热门项目合作",
                    missionText2: "能够策划符合当地用户需求的市场营销活动",
                    missionText3: "具有其中一至几项主流社交媒体如Twitter、Youtube、Telegram、Discord等媒体的运营能力",
                    missionText4: "具有流畅的英语水平，能完成对应的翻译工作",
                    missionText5: "TokenPocket当前计划为区块链市场提供更多的福利，如果您来自印度、美国、土耳其、俄罗斯、韩国、越南、菲律宾等，我们将给您提供更多的工作支持",
                    getTitle: "我们提供的福利",
                    getText: "一段直接与区块链各个领域直接接触的工作经历，你将获得不限于DApp项目方、kol、主流媒体的交互机会",
                    getText1: "根据工作内容（翻译推文、制作视频、社群运营、寻求商务合作等）获得对应的丰厚报酬",
                    getText2: "获得最专业的区块链知识培训，与团队一起探索WEB3.0世界",
                    getText3: "TP官方福利，包含TokenPocket定制衣服，硬件钱包",
                    processTitle: "招募流程",
                    processText: "投递简历",
                    processText1: "简历筛选",
                    processText2: "线上面试",
                    processText3: "面试结果",
                    processText4: "开始工作",
                    applyTitle: "招募对象",
                    applyText: "来自全球任何地方",
                    applyText1: "对区块链保持着无尽的好奇和热情",
                    applyText2: "填写表格并附上简历，我们会尽快联系您",
                    footerTitle: "关于TokenPocket",
                    footerText: "超过",
                    footerText1_1: "2千万",
                    footerText1_2: "全球用户量",
                    footerText2_1: "350万",
                    footerText2_2: "月活",
                    footerText3_1: "200个",
                    footerText3_2: "国家和地区",
                    footerText4: "TokenPocket 全球领先的多链自托管钱包",
                    footerText5: "Coming soon"
                },
                ABOUT: {
                    title: "关于我们",
                    desc: "TokenPocket是一款去中心化多链钱包，为用户提供手机钱包、插件钱包和硬件钱包，支持比特币、以太坊、Solana、币安智能链、TRON、Aptos、Polygon、Polkadot、EOS等公链以及所有EVM兼容链。TokenPocket服务于来自200多个国家和地区的3000多万用户。它是全球用户信赖的领先的加密钱包。",
                    philosophy: {
                        title: "我们的理念",
                        desc: "我们坚持开发技术社区，欢迎所有的开发者共同构建更便捷、更安全、更丰富的区块链世界",
                        ambition: "目标",
                        ambition_desc: "让区块链随处发生",
                        value: "价值",
                        value_desc: "让数据回归用户，让价值归属用户",
                        attitude: "态度",
                        attitude_desc: "开放思维，互相协作"
                    },
                    milestones: {
                        title: "里程碑",
                        desc_2018_4_1: "TokenPocket成立。",
                        desc_2018_8_1: "由火币、浩方资本、字节资本投资。",
                        desc_2019_8_1: "发布桌面端钱包，并支持TRON网络。",
                        desc_2019_11_1: "谷歌商店下载次数突破100万。",
                        desc_2020_7_1: "支持身份钱包（HD钱包）。",
                        desc_2020_9_1: "支持BSC网络以及DeFi趋势。",
                        desc_2020_12_1: "支持Eth2.0系统质押。",
                        desc_2021_3_1: "孵化去中心化聚合平台Transit。",
                        desc_2021_6_1: "总用户量突破2000万。",
                        desc_2021_8_1: "孵化硬件钱包KeyPal。",
                        desc_2021_11_1: "品牌升级（新logo new brand）。",
                        desc_2022_1_1: "收购dFox并将品牌升级为TokenPocket Extension。",
                        desc_2022_5_1: "孵化品牌".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://buy.transit.finance/ramp" target="_blank">Transit Buy</a>', "上线，支持全球法币。"),
                        desc_2022_7_1: "投资基于 DID 的 Web3 社群管理工具 ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://debox.pro/" target="_blank">DeBox</a>', "。"),
                        desc_2022_9_1: "投资可编程 DID 协议 Midhub。",
                        desc_2022_12_1: "支持多签钱包。",
                        desc_2023_4_1: "支持Ethereum Shapella升级。",
                        desc_2023_4_2: "质押宝支持自托管质押。",
                        desc_2023_5_1: "上线波场能量租赁，为用户网络费最高降低75%。",
                        desc_2023_5_2: "支持比特币生态，Nostr、BRC20。",
                        desc_2023_8_1: "投资LRT协议 ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://www.puffer.fi/" target="_blank">Puffer Finance</a>', "。"),
                        desc_2023_10_1: "".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://card.keypal.pro/" target="_blank">Keypal Card</a>', " 加密安全芯片卡片发售。"),
                        desc_2023_11_1: "上线AA智能钱包。",
                        desc_2024_2_1: "获得美国FinCEN颁发的MSB牌照。",
                        desc_2024_3_1: "".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://twitter.com/TokenPocket_TP" target="_blank">Twitter (X)</a>', "粉丝数突破600000。"),
                        desc_2024_5_1: "与综合性全牌照公司胜利证券达成深度合作。",
                        desc_2024_5_2: "正式入驻香港数码港并设立亚太运营中心。",
                        January: "1月",
                        February: "2月",
                        March: "3月",
                        April: "4月",
                        May: "5月",
                        June: "6月",
                        July: "7月",
                        August: "8月",
                        September: "9月",
                        October: "10月",
                        November: "11月",
                        December: "12月"
                    },
                    contact_us: {
                        title: "联系我们",
                        service: "服务邮箱",
                        service_desc: "service@tokenpocket.pro",
                        bd: "商务合作",
                        bd_desc: "bd@tokenpocket.pro",
                        developers: "开发者",
                        developers_desc: "Discord"
                    }
                },
                SEO: {
                    title: "TokenPocket - 让区块链随处发生 | TP钱包-ETH钱包-BTC钱包-BSC钱包-Aptos钱包-HECO钱包-OKExChain钱包-Polkadot钱包-Kusama钱包-DeFi钱包-Layer 2钱包-EOS钱包-TRX钱包-以太坊钱包-BNB钱包-波场钱包-比特币钱包-OK钱包-Web3钱包-加密钱包-NFT钱包-nostr",
                    description: "TokenPocket是全球最大的数字货币钱包，支持包括BTC, ETH, BSC, TRON, Aptos, Polygon, Solana, OKExChain, Polkadot, Kusama, EOS等在内的所有主流公链及Layer 2，已为全球近千万用户提供可信赖的数字货币资产管理服务，也是当前DeFi用户必备的工具钱包。",
                    keywords: "TokenPocket,Token Pocket,TP钱包,ETH钱包,BTC钱包,EOS钱包,IOST,波卡,Polkadot,COSMOS,波场,以太坊,DeFi,火币链,币安智能链,钱包,layer2,加密,区块链,web3,NFT,nostr"
                },
                DAPPSTORE: {
                    document_title: "DApp发现中心 | TokenPocket",
                    copy: "复制成功",
                    title: "DApp 商店",
                    agreement: "我已阅读并同意",
                    risk_statement: "《风险声明》",
                    no_again: "不再进行提示",
                    collect: "收藏",
                    no_collect: "暂无收藏",
                    data_loading: "数据加载中",
                    hot: "热门",
                    hot_title: "热门探索",
                    hot_desc: "汇聚 100+ 公链上的优质 DApp，包括 DeFi、DEX、链游、NFT 市场等热门类别，为你提供一站式的体验。去中心化金融 (DeFi) 包括建立在区块链上的去中心化交易所 (DEX)、合成资产、支付、借贷等去中心化应用 (DApp)。",
                    placeholder: "通过名称搜索DApp",
                    recent_search: "最近搜索",
                    hot_search: "热门搜索",
                    search_result: "搜索结果",
                    no_search_result: "沒有搜索結果",
                    enter: "进入 ",
                    supported_networks: "支持的网络",
                    category: "类别",
                    all_networks: "全部网络",
                    community_tutorial: "社区教程",
                    related_tokens: "相关Token",
                    more: "展开",
                    moreDApp: "更多",
                    cancel: "取消"
                },
                BRANDKIT: {
                    title: "品牌素材",
                    download: "素材下载",
                    desc: "在此页面，您将找到官方的 TokenPocket logo 和配色方案，帮助您在项目中展示我们的品牌。我们邀请您根据我们的品牌指南，探索并使用这些资源，以确保 TokenPocket 的一致性和专业表现。",
                    logoDownload: "Logo 下载",
                    logoDownloadDesc: "立即下载我们的品牌 Logo，确保您的设计项目保持一致且专业的形象。",
                    logoDownloadDesc_1: "所有文件均为高质量，适用于网页、印刷及各种应用，帮助您轻松制作出色的视觉效果。",
                    colorVersion: "彩色版本",
                    whiteVersion: "白色版本",
                    brandTrademark: "品牌商标",
                    brandTrademarkDesc: "TokenPocket 图标由大写字母 “T” 和 “P” 组成；",
                    brandTrademarkDesc_2: "文字部分为大写 “TOKEN POCKET”；",
                    brandTrademarkDesc_3: "图标与文字共同构成 TokenPocket 品牌的商标。",
                    logo: "Logo",
                    fullVertical: "全版（纵向）",
                    fullHorizontal: "全版（横向）",
                    spellingRules: "拼写规则",
                    spellingRulesDesc: "表示品牌时：TOKEN POCKET",
                    spellingRulesDesc_1: "表示应用时：TokenPocket",
                    spellingRulesDesc_2: "错误示范：TOKENPOCKET，Tokenpocket，tokenpocket",
                    representingBrand: "表示品牌时",
                    applicationBrand: "表示应用时",
                    TokenPocketIcon: "TokenPocket 图标",
                    TokenPocketIconDesc: "在提到 TokenPocket 作为应用时，使用应用图标；",
                    TokenPocketIconDesc_1: "在社交媒体或组织如 Twitter、Facebook、Medium 和 Telegram 中使用社交头像。",
                    roundedIcon: "圆角图标",
                    squareIcon: "方形图标",
                    socialAvatar: "社交头像",
                    TokenPocketColor: "TokenPocket 色彩",
                    TokenPocketColorDesc: "TokenPocket 的品牌色是蓝色，蓝色象征着互联网的科技感与信任。在 App 的图表中还使用了渐变色。",
                    primary: "主色",
                    secondary: "辅色",
                    colorSystem: "颜色系统",
                    brandBlue: "品牌蓝",
                    brandBlack: "品牌黑",
                    OffWhite: "灰白色",
                    palette: "调色板"
                }
            },
            ve = {
                COMMON: {
                    EMAIL: "Email",
                    YES: "Yes",
                    NO: "No",
                    HAS: "Yes",
                    HAVENT: "No",
                    BLOCKCHAIN: "Blockchain",
                    MULTIPLE_CHOICE: "(MultiSelect)",
                    IS_SUPPORT_TP_CONNECT: "Does it support TokenPocket connection? (Extension and Mobile app)",
                    SUPPORT_BOTH: "Both are supported",
                    SUPPORT_EXTENSION: "Only extension",
                    SUPPORT_MOBILE: "Only mobile",
                    SUPPORT_NONE: "None",
                    blockchainWallet: "Blockchain Wallet",
                    iostWallet: "IOST Wallet",
                    tronWallet: "TRON Wallet",
                    platformInfo: {
                        eos: "EOS",
                        moac: "MOAC",
                        eth: "ETH",
                        jt: "Jingtum ",
                        enu: "ENU",
                        bos: "BOS",
                        iost: "IOST",
                        cosmos: "COSMOS",
                        bnb: "BNB",
                        trx: "TRON",
                        bsc: "BSC",
                        heco: "HECO",
                        okex: "OKExChain",
                        dot: "Polkadot",
                        hsc: "HSC",
                        matic: "Polygon",
                        klaytn: "Klaytn",
                        arb: "Arbitrum One",
                        arbn: "Arbirtum Nova",
                        ftm: "Fantom",
                        etc: "Ethereum Classic",
                        cfx: "Conflux eSpace",
                        solana: "Solana",
                        avax: "AVAX",
                        oe: "Optimistic Ethereum",
                        xdai: "Gnosis Chain",
                        harmony: "Harmony",
                        wax: "WAX",
                        aurora: "Aurora",
                        ksm: "Kusama",
                        mb: "Moonbeam",
                        sbg: "SubGame",
                        kcc: "KCC Mainnet",
                        lat: "PlatON",
                        bttc: "BTTC",
                        gt: "GateChain",
                        halo: "HALO",
                        aptos: "Aptos",
                        fil: "Filecoin FVM",
                        zks: "zkSync Era",
                        eosevm: "EOS EVM",
                        mantle: "Mantle",
                        linea: "Linea",
                        base: "Base",
                        opbnb: "opBNB",
                        polyzk: "Polygon zkEVM",
                        core: "CORE",
                        haqq: "HAQQ",
                        scroll: "Scroll",
                        manta: "Manta",
                        bevm: "BEVM",
                        zkfair: "ZKFair",
                        metis: "Metis",
                        zeta: "Zeta Chain",
                        merlin: "Merlin",
                        blast: "Blast",
                        xlayer: "X Layer",
                        bitlayer: "Bitlayer",
                        kroma: "Kroma"
                    },
                    submit: "Submit",
                    confirm: "Confirm",
                    save: "Save",
                    contactEmail: "Contact email:",
                    submitSuccess: "Submit Success！",
                    submitDAppSuccessDesc: "The DApp you submit will be launched after we review!",
                    submitTokenSuccessDesc: "The token you submit will be launched after we review!",
                    backToHome: "Back to home page",
                    searchNetwork: "Search blockchain name",
                    example: "Example",
                    submitTokenInfoAndLogo: "Update token logo and other Info",
                    toGithubSubmit: "Go to Github",
                    contact: "Contact details",
                    contactDesc: "Please be sure to leave the customer service contact information other than the mailbox, otherwise it will not pass the review",
                    addContactDetail: "Add contact detail",
                    urlError: "Please enter the correct URL",
                    eg: "e.g. ",
                    moreThan: "No more than {count} characters",
                    nftType: "NFT protocol standard",
                    logoDesc: "Pictures that plagiarize or imitate existing projects, involve copyright risks, or involve political elements will not be approved.",
                    logoDesc_2: "Please submit <strong>400*400px, JPG&PNG</strong>, max <strong>5M</strong> high quality logo to ensure your submission is successfully reviewed.",
                    uploadError: "Please submit 400*400px, JPG&PNG, max 5M logo",
                    nextStep: "Next Step",
                    donate: {
                        title: "Please Donate",
                        desc: 'Please donate the specified amount <strong style="color: var(--color-1)">TPT</strong> when submitting a request.',
                        tutorial: "Tutorial",
                        tutorial_1: 'Supported network: <strong style="color: var(--color-1)">BSC</strong>.',
                        tutorial_2: 'Supported token: <strong style="color: var(--color-1)">TPT (</strong><span data-info="info" style="color: #2980FE;cursor: pointer;">Token Info</span><strong style="color: var(--color-1)">)</strong>. If you send any other token types, your submitting will not be processed. <span data-link="link" style="color: #2980FE;cursor: pointer;">Go to get TPT</span>',
                        tutorial_2_mobile: 'Supported token: <strong style="color: var(--color-1)">TPT</strong>. If you send any other token types, your submitting will not be processed. <span data-link="link" style="color: #2980FE;cursor: pointer;">Go to get TPT</span>',
                        tutorial_3: '<strong style="color: var(--color-1)">Please don\'t leave this page when you sending the token</strong>. If you leave, the amount may change, and we will not be able to confirm your payment.',
                        tutorial_4: 'After payment, paste the <strong style="color: var(--color-1)">transaction hash link</strong> of the transaction below.',
                        amount: "Donating Amount:",
                        blockchain: "Blockchain",
                        receivingAddress: "Receiving Address",
                        hash: "Transaction Hash Link",
                        tokenInfo: "Token Info",
                        tokenContract: "Token Contract"
                    },
                    LAYOUT: {
                        features: "Features",
                        products: "Products",
                        buyCryptoFooter: "Buy Crypto",
                        mobileWallet: "Mobile Wallet",
                        mobileWalletDesc: "Crypto & DeFi mobile wallet on blockchain.",
                        hardwareWallet: "Hardware Wallet",
                        hardwareWalletDesc: "Get your KeyPal, to guard your assets.",
                        TPCard: "TP Card",
                        TPCardDesc: "A bank card operates in a decentralized manner.",
                        extensionWallet: "Extension Wallet",
                        extensionWalletDesc: "A better wallet on your computer.",
                        desktop: "Desktop Wallet",
                        fiveDegrees: "5Degrees",
                        versionVerification: "Authenticity Check",
                        versionVerificationDesc: "Verify your wallet.",
                        approvalDetector: "Approval Detector",
                        approvalDetectorDesc: "View and unapprove your approved tokens.",
                        tokenSecurity: "Token Security",
                        tokenSecurityDesc: "Verify if the token is secure by its contract address.",
                        keyGenerator: "Key Generator",
                        keyGeneratorDesc: "Randomly generate public and private keys for various networks.",
                        tokenProfile: "Token Profile",
                        tokenProfileDesc: "Learn all information about the token.",
                        tokenClaim: "Token Claim",
                        tokenClaimDesc: "Claim your airdrop.",
                        easyInscription: "Easy Inscription",
                        easyInscriptionDesc: "A secure inscription tool.",
                        nostrAssetsBatchSender: "NostrAssets BatchSender",
                        nostrAssetsBatchSenderDesc: "A batch sending tool for NostrAssets.",
                        BATCH_SENDER: "BatchSender",
                        BATCH_SENDER_DESC: "Send tokens to multiple recipients at once.",
                        trade: "Trade",
                        swap: "Transit Swap",
                        swapDesc: "Trade with the best prices.",
                        bridge: "Bridge",
                        bridgeDesc: "Seamlessly cross assets from one chain to another.",
                        buyCrypto: "Buy",
                        buyCryptoDesc: "Buy cryptocurrency with your credit cards.",
                        market: "Market",
                        marketDesc: "Real-time insights to discover hot tokens.",
                        information: "Information",
                        blockchainGuide: "Blockchain Guide",
                        tronWallet: "TRON Guide",
                        iostWallet: "IOST Guide",
                        tpMan: "TP Man",
                        developers: "Developers",
                        github: "Github (TP-Lab)",
                        devCenter: "Dev Center",
                        developersDesc: "TokenPocket developer documentation.",
                        subToken: "Submit Token",
                        subTokenDesc: "Submit your token & NFT.",
                        subDApp: "Submit DApp",
                        subDAppDesc: "Submit your DApp, and show it after audit.",
                        subNFT: "Submit NFT",
                        subNFTDesc: "Submit your NFT & arts.",
                        subChain: "Submit Chain",
                        subChainDesc: "Submit your blockchain.",
                        bugBounty: "Bug Bounty",
                        tools: "Tools",
                        build: "Build",
                        learn: "Learn",
                        explorer: "Explorer",
                        darkMode: "Dark Mode",
                        company: "Company",
                        about: "About",
                        careers: "Careers",
                        pressKit: "Brand Kit",
                        swagShop: "Swag Shop",
                        support: "Support",
                        helpCenter: "Help Center",
                        helpCenterDesc: "Your go-to resources for answers and assistance.",
                        contactUs: "Contact Us",
                        contactUsDesc: "Share your suggestions and ask any questions.",
                        forum: "Forum",
                        forumDesc: "Enjoy your talks with the community members.",
                        legal: "Legal",
                        privacyPolicy: "Privacy Policy",
                        terms: "Terms of Use",
                        brandKit: "Brand Kit",
                        toHome: "Home",
                        defiWallet: "DeFi Wallet",
                        ETHWallet: "Ethereum Wallet",
                        ethWallet: "ETH Wallet"
                    }
                },
                HOME: {
                    download: "Download",
                    downloadNow: "Download Now",
                    HEADER: {
                        title: "Your secure crypto wallet to explore blockchain",
                        desc_1: "Easy and safe to buy, store, send, swap tokens and collect NFTs. Trusted by 30+ millions users from 200+ countries and regions."
                    },
                    INTRODUCTION: {
                        title: "TokenPocket is trusted by global users",
                        desc_1: "We are providing secure and easy crypto wallet service among 200+ countries and regions around the world",
                        desc_2: "Serving users",
                        desc_3: "Daily Transactions",
                        desc_4: "Supporting countries and regions",
                        desc_5: "Founded in"
                    },
                    SECURITY: {
                        title: "Security as it should be",
                        desc_1: "TokenPocket generates and stores keys and passwords on your device only, only you can access your account and assets.",
                        desc_2: "TokenPocket also develops hardware cold wallet and MultiSig wallet feature to enhance the security as you need.",
                        desc_3: "Supporting BTC, ETH, BSC, TRON, Aptos, Polygon, Solana, Cosmos, Polkadot, EOS, IOST and so on."
                    },
                    EXCHANGE: {
                        title: "Exchange & Transact Easily",
                        desc_1: "You can trade your crypto anytime, anywhere within TokenPocket.",
                        desc_2: "Buy crypto with credit cards. Store, send, cross chain and exchange with ease.",
                        desc_3: "Swap",
                        desc_4: "Instantly and easily",
                        desc_5: "Bridge",
                        desc_6: "Among different chains",
                        desc_7: "Buy Crypto",
                        desc_8: "In 5 minutes",
                        desc_9: "TP Card",
                        desc_10: "Pay with Crypto"
                    },
                    DAPPSTORE: {
                        title: "A DApp Store",
                        desc_1: "You can find your favorite decentralized applications, discover the latest and hottest ones and use them without leaving the wallet.",
                        desc_2: "DApp Browser integrated, you can always access the DApps with your links.",
                        desc_3: "DeFi",
                        desc_4: "NFT",
                        desc_5: "DApp",
                        desc_6: "Supported"
                    },
                    COMMUNITY: {
                        title: "Community",
                        desc_1: "We insist on an open technology community, and we welcome all developers to build a more convenient, secure and richer blockchain world together",
                        desc_2: "TP-Lab",
                        desc_3: "Community",
                        desc_4: "Dev Docs"
                    },
                    DOWNLOAD: {
                        title: "Get the TokenPocket Wallet now!",
                        desc_1: "Your secure and trusted crypto wallet to explore blockchain"
                    },
                    FOLLOW: {
                        title: "Follow Us",
                        desc1: "TokenPocket Staffs won't send you private messages!",
                        desc2: "Caution! You're entering TokenPocket community, there might be someone impersonating us to send you private messages! Please be aware that, anyone who sends private messages might be a scammer! We will never contact you first!",
                        desc3: "Understood, enter"
                    },
                    EXTENSIONMODAL: {
                        title: "Extension is now live!",
                        desc1: "Your Crypto & DeFi & GameFi",
                        desc2: "wallet on computer",
                        btnText: "Use It Now",
                        btnTextm: "Copy Link",
                        tips: "Copy the link successfully, please go to the computer to open"
                    }
                },
                DAPP: {
                    RULES: {
                        platform: "Network is required",
                        title: "DApp Name is required",
                        address: "DApp Contract is required",
                        url: "DApp Website is required",
                        desc: "Desc is required",
                        icon_url: "DApp Logo is required",
                        rakeBackAccount: "Contract account is required",
                        email: "Email is required",
                        others: "Other contact information is required",
                        category: "Select at least one category",
                        tp_connect: "Select at least one",
                        audit_url: "Audit report URL is required."
                    },
                    title: "DApp Name",
                    address: "Smart Contract",
                    url: "DApp Website",
                    desc: "Brief Description",
                    icon: "DApp Logo",
                    referral: "Referral",
                    hasReferral: "Does it have a referral system",
                    referralReward: "The distribution of the referral reward",
                    reward_1: "Automatically distribute by the smart contract (Live)",
                    reward_2: "Need to claim it on the DApp Manually",
                    hasInviteReward: "Does the inviter need to make a transaction in the DApp to activate the referral link",
                    inviteAccount: "The smart contract of referral distribution",
                    DAppRequirement: "DApp Requirement",
                    requirement_1: "DApp needs to support TokenPocket mobile and TokenPocket extension.",
                    requirement_2: "The provided website is accessible and stable.",
                    requirement_3: "The smart contracts have deployed on the mainnet, and the sensitive part requires to be open source.",
                    requirement_4: "The sensitive contracts require audit reports from third-party security agencies.",
                    requirement_5: "The interaction logic is clear and has been adapted to the mobile UI.",
                    requirement_6: "Obey the relevant laws and regulations, without fraud and infringement.",
                    requirement_7: "If you violate relevant laws and regulations, you will voluntarily assume corresponding legal responsibilities.",
                    dappInfo: "DApp Information:",
                    necessary: "Required",
                    language: "DApp language",
                    languageDesc: "(Please submit separately for multiple languages)",
                    en: "English",
                    zh: "中文简体",
                    zhTW: "中文繁体",
                    descDesc: "A brief description of the project in one sentence, which will appear in the DApp subtitle",
                    auditInfo: "Audit information:",
                    hasAudit: "Whether the contract audit has been carried out",
                    auditUrl: "Audit report URL",
                    auditUrlExample: "For example: https://auditlink.com",
                    auditReport: "Audit Report",
                    auditUpload: "Upload",
                    contact: "Contact details",
                    contactDesc: "Please be sure to leave the customer service contact information other than the mailbox, otherwise it will not pass the review",
                    emailAddr: "Email",
                    emailExample: "e.g. build@tokenpocket.pro",
                    others: "Other",
                    othersExample: "e.g. https://t.me/tokenpocket_en",
                    auditOptional: "Fill in at least one item of audit information",
                    oversize: " has exceeded the qualified characters",
                    select: "Select",
                    tutorial_url: "https://help.tokenpocket.pro/developer-en/",
                    tutorial: "View tutorial",
                    noData: "Chain not found~",
                    categories: "Categories",
                    IS_SUPPORT_TP_CONNECT_1: "Does it support TokenPocket connection?",
                    IS_SUPPORT_TP_CONNECT_2: "(Extension and Mobile App)",
                    IS_SUPPORT_TP_CONNECT_3: "TokenPocket Connection",
                    dappTokensTitle: "DApp Tokens",
                    dappTokens: "Does your DApp have tokens?",
                    emailError: "Please enter the correct Email address",
                    dappSmartContract: "Smart Contract",
                    dappSmartContractDesc: "Add your DApp's smart contrats. If more than one, separate by comma(,)",
                    addAuditUrl: "Add audit report URL",
                    addContactDetail: "Add contact detail",
                    backToHome: "Back to home page",
                    openSmartContract: "Edit smart contract for each blockchain",
                    openTokens: "Edit token information",
                    tokens: "Add at least one token information.",
                    addToken: "Add Token",
                    network: "Token Network",
                    symbol: "Token Symbol",
                    contract: "Token Contract"
                },
                DOWNLOAD: {
                    TITLE: "Download TokenPocket",
                    TITLE_Android: "TokenPocket for Android",
                    TITLE_IOS: "TokenPocket for iOS",
                    TITLE_Chrome: "TokenPocket for your browser",
                    TEXT: "TokenPocket is a multi-chain crypto wallet, easy and secure to use that trusted by millions.",
                    TEXT_Chrome: "TokenPocket Extension is a multi-chain crypto wallet, all EVM compatible chain supported. Easy and secure to use that trusted by millions.",
                    TEXT_PC: "TokenPocket Desktop is the largest multi-blockchain wallet based EOS ETH BOS TRON, we strive to provide a powerful and secure digital asset management to users.",
                    scanCode: "Scan to Download",
                    installTutorial: "Install Tutorial",
                    desc_1: "Download the app from the official website and check its SSL certification",
                    desc_2: "Protect your Recovery Phrase (mnemonic) and Private Key from leaking, never share it to others",
                    desc_3: "Learn more security tips",
                    verifyText: "Latest APK Version:",
                    verifyText1: "How to verify your app's security",
                    verifyText2: "Latest Version:",
                    verifyText3: "Latest Google Play Version:",
                    footerTitle: "Make a great first impression",
                    footerDesc_1: "Supporting BTC, ETH, BSC, TRON, Matic, Aptos, Solana, EOS, Polkadot, IOST and so on.",
                    footerDesc_2: "Multi-layer security protections",
                    footerDesc_3: "DeFi, DApp, GameFi and NFT supported",
                    coming_soon: "Coming Soon",
                    desc_tp_wallet: "has been officially appointed as the sole iOS App publisher of TokenPocket",
                    tp_wallet_version: "TP Wallet Version:",
                    token_pocket_version: "Token Pocket Version:",
                    delisted: "Delisted",
                    checkoutAllVersion: "Check All Versions",
                    apk32Title: "Download 32-bit package",
                    apk32Desc: "The 32-bit installation package is suitable for devices with lower configurations. If you encounter a situation where the DApp cannot be linked properly, you can download and use the 32-bit installation package.",
                    download: "Download"
                },
                TOKEN: {
                    RULES: {
                        network: "Network is required",
                        email: "Email is required",
                        address: "Address is required",
                        owner_address: "Owner address is required",
                        symbol: "Token Symbol is required",
                        bl_symbol: "BL Symbol is required",
                        total_supply: "Total supply is required",
                        decimal: "Decimal is required",
                        precision: "Precision is required",
                        gas: "GAS is required",
                        website: "Website is required",
                        website_1: "Official Website is too long",
                        companyName: "Company or personal name is required",
                        contact: "Contact is required",
                        description: "Project introduction is required",
                        description_1: "Token Introduction is too long",
                        name: "Token Name is required",
                        icon_url: "Logo is required"
                    },
                    icon: "Token Logo",
                    handleText: "We will process your request in 2 workdays",
                    tokenStandard: "Token Standard",
                    requirement_1: "Do not submit a honeypot token or scam token.",
                    requirement_2: "Do not submit the same token multiple times.",
                    requirement_3: "The smart contracts have deployed on the mainnet.",
                    requirement_4: "Logo is necessary.",
                    requirement_5: "If you violate relevant laws and regulations, you will voluntarily assume corresponding legal responsibilities.",
                    addMore: "Add More",
                    placeholder_1: "Please enter...",
                    tokenRequirement: "Token Requirement",
                    information: "Token Information",
                    network: "Network",
                    name: "Token Name",
                    symbol: "Token Symbol",
                    bl_symbol: "BL Symbol",
                    precision: "Token Precision",
                    decimal: "Token Decimal",
                    totalSupply: "Total Supply",
                    contract: "Token Contract",
                    website: "Official Website",
                    introduction: "Token Introduction"
                },
                RECRUITING: {
                    title: "TP Man Recruitment Plan",
                    text: "Join the TokenPocket community",
                    text1: "Committed to the blockchain world and contribute your part",
                    text2: "We build a Web3.0 world together",
                    joinUs: "Join Us",
                    aboutTitle: "About TP Man",
                    aboutText: "TP Man is an important part of the TokenPocket community, and we sincerely invite you to join us!",
                    aboutText1: "You are a blockchain enthusiast and endorse the industry value.",
                    aboutText2: "Enjoy the convenience brought by TokenPocket wallet when you explore the blockchain world.",
                    missionTitle: "The Mission of TP Man",
                    missionText: "Help TokenPocket to serve more blockchain users around the world. We hope you, meet two of the following requirements to apply.",
                    missionText1: "Expand and promote TokenPocket cooperation with companies or hot projects in your country through various channels",
                    missionText2: "Plan marketing activities that meet the needs of local users",
                    missionText3: "Have the ability to operate mainstream social medias such as Twitter, Youtube, Telegram, and Discord",
                    missionText4: "Fluent in English, and be able to complete translation work",
                    missionText5: "TokenPocket plans to provide more usage and technical support for global blockchain users, so we hope that you have a certain understanding of the blockchain markets of no less than one country and their users (India, the United States, Turkey, Russia, South Korea, Vietnam, the Philippines, etc.)",
                    getTitle: "What will you get?",
                    getText: "A work experience directly involved with various fields of the blockchain industry, and you will get but not limited to communication opportunities with DApp projects, Influencers, and mainstream media in the industry.",
                    getText1: "Get rich rewards from your work such as tweets translation, making video, community operation and business cooperation.",
                    getText2: "Get the most professional blockchain knowledge training and explore the Web3.0 world with the team together.",
                    getText3: "TokenPocket official benefits, including TokenPocket Swag and hardware wallets.",
                    processTitle: "Recruitment process",
                    processText: "Submit CV",
                    processText1: "CV screening",
                    processText2: "Online interview ",
                    processText3: "Interview results",
                    processText4: "Welcome aboard",
                    applyTitle: "Who can apply",
                    applyText: "Face the world, regardless of country",
                    applyText1: "Be keen and curious about the blockchain world",
                    applyText2: "Fill out the form and attach your resume, then we will contact you as soon as possible",
                    footerTitle: "About TokenPocket",
                    footerText: "over",
                    footerText1_1: "20M",
                    footerText1_2: "global users",
                    footerText2_1: "3.5M",
                    footerText2_2: "monthly active users",
                    footerText3_1: "200",
                    footerText3_2: "countries and regions",
                    footerText4: "TokenPocket is the world's leading multi-chain self-custodial wallet",
                    footerText5: "Coming soon"
                },
                ABOUT: {
                    title: "About Us",
                    desc: "TokenPocket is a multi-chain decentralized wallet, it provides users with mobile wallet, extension wallet and hardware wallet, supporting public chains including Bitcoin, Ethereum, Solana, BNB Smart Chain, TRON, Aptos, Polygon and all EVM compatible chains. Serving over 30 millions users from more than 200 countries and regions. It is a world-wide leading crypto wallet that trusted by global users.",
                    philosophy: {
                        title: "Our philosophy",
                        desc: "We insist on an open technology community, and we welcome all developers to build a more convenient, secure and richer blockchain world together",
                        ambition: "Ambition",
                        ambition_desc: "Make the blockchain happen everywhere",
                        value: "Value",
                        value_desc: "Let data return to users, make value belong to real owners",
                        attitude: "Attitude",
                        attitude_desc: "Open-minded, mutual collaboration"
                    },
                    milestones: {
                        title: "Milestones",
                        desc_2018_4_1: "TokenPocket Founded.",
                        desc_2018_8_1: "Invested by Huobi, Hofan, Byte Capital.",
                        desc_2019_8_1: "Released desktop wallet, supported TRON.",
                        desc_2019_11_1: "Google Play download exceeded 1,000,000.",
                        desc_2020_7_1: "HD wallet supported.",
                        desc_2020_9_1: "Supported BSC and DeFi tendency.",
                        desc_2020_12_1: "Supported Eth2.0 Staking.",
                        desc_2021_3_1: "Incubated Transit.",
                        desc_2021_6_1: "User base exceeded 20,000,000.",
                        desc_2021_8_1: "Incubated KeyPal hardware wallet.",
                        desc_2021_11_1: "Brand upgrade, new logo and new brand.",
                        desc_2022_1_1: "Incubated ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://buy.transit.finance/ramp" target="_blank">Transit Buy</a>', ", global fiat supported."),
                        desc_2022_5_1: "Acquired dFox and rebranded to TokenPocket Extension.",
                        desc_2022_7_1: "Invested ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://debox.pro/" target="_blank">DeBox</a>', ", a DID-Based community menagement tool in Web3."),
                        desc_2022_9_1: "Invested WrapCoin.",
                        desc_2022_12_1: "Multi-sig wallet supported.",
                        desc_2023_4_1: "Support Ethereum Shapella Update.",
                        desc_2023_4_2: "Support self-custody staking on Stake Vault.",
                        desc_2023_5_1: "Launched TRON Energy Rental and Energy Subsidy Service, which can save up to 75% network fees for users.",
                        desc_2023_5_2: "Support Bitcoin ecosystem, Nostr protocol, BRC-20.",
                        desc_2023_8_1: "Investment LRT protocol ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://www.puffer.fi/" target="_blank">Puffer Finance</a>'),
                        desc_2023_10_1: "".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://card.keypal.pro/" target="_blank">Keypal Card</a>', " encrypted secure chip card on sale."),
                        desc_2023_11_1: "Launched AA Smart Wallet.",
                        desc_2024_2_1: "Obtained MSB licence from FinCEN, USA.",
                        desc_2024_3_1: "Over 600,000 followers on ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://twitter.com/TokenPocket_TP" target="_blank">Twitter (X)</a>', "."),
                        desc_2024_5_1: "Collaborate with Victory Securities, a comprehensive full-licensed securities firm.",
                        desc_2024_5_2: "Settled in HK Cyberport, establishing Asia-Pacific operations center.",
                        January: "January",
                        February: "February",
                        March: "March",
                        April: "April",
                        May: "May",
                        June: "June",
                        July: "July",
                        August: "August",
                        September: "September",
                        October: "October",
                        November: "November",
                        December: "December"
                    },
                    contact_us: {
                        title: "Contact Us",
                        service: "Customer Service",
                        service_desc: "service@tokenpocket.pro",
                        bd: "Business Collaborations",
                        bd_desc: "bd@tokenpocket.pro",
                        developers: "Developers",
                        developers_desc: "Discord"
                    }
                },
                SEO: {
                    title: "TokenPocket - Your secure crypto & DeFi Wallet | TP wallet - ETH wallet - BTC wallet - BSC wallet - HECO wallet - OKXChain wallet - Web3 Wallet - Crypto Wallet - blockchain wallet - Polkadot wallet - Kusama wallet - DeFi wallet - Layer 2 wallet - Solana Wallet - EOS wallet - TRX wallet - nostr",
                    description: "TokenPocket is a world-leading crypto wallet, supporting public blockchains including BTC, ETH, BSC, TRON, Aptos, Polygon, Solana, OKExChain, Polkadot, Kusama, EOS and Layer2.",
                    keywords: "TokenPocket,Token Pocket,TP wallet,Ethereum wallet,Bitcoin,EOS,IOST,COSMOS,heco,bsc,layer2,DeFi,wallet,crypto,blockchain,web3,NFT,nostr"
                },
                DAPPSTORE: {
                    document_title: "DAppStore | TokenPocket",
                    title: "DApp Store",
                    copy: "Copied successfully",
                    agreement: "Read and agree to",
                    risk_statement: "Risk Statement",
                    no_again: "No further prompts",
                    collect: "Favorites",
                    no_collect: "No favorites yet",
                    data_loading: "Loading DApps...",
                    hot: "Trend",
                    hot_title: "Trending DApps",
                    hot_desc: "Explore 100+ top DApps across public blockchains, including DeFi, DEX, blockchain games, NFT markets, and more, all in one place. DeFi includes decentralized exchanges (DEX), synthetic assets, payments, lending, and other blockchain-based applications.",
                    placeholder: "Search DApps with names or keywords",
                    recent_search: "Recent Searches",
                    hot_search: "Hot Searches",
                    search_result: "Results",
                    no_search_result: "No records found",
                    enter: "Enter ",
                    supported_networks: "Supported",
                    category: "Category",
                    all_networks: "All Networks",
                    community_tutorial: "Tutorials",
                    related_tokens: "Related Tokens",
                    more: "More",
                    moreDApp: "More",
                    cancel: "Cancel"
                },
                BRANDKIT: {
                    title: "Brand Kit",
                    download: "Download Kit",
                    desc: "In this page you’ll find the official TokenPocket logo, color palette to help you showcase our brand in your projects. We invite you to explore and use these resources in line with our brand guidelines to ensure a consistent and professional representation of TokenPocket.",
                    logoDownload: "Logo Download",
                    logoDownloadDesc: "Download our brand logo now to ensure your design projects maintain a consistent and professional image.",
                    logoDownloadDesc_1: "All files are high-quality and suitable for web, print, and various applications, making it easy for you to create impressive visuals.",
                    colorVersion: "Color Version",
                    whiteVersion: "White Version",
                    brandTrademark: "Brand Trademark",
                    brandTrademarkDesc: 'The TokenPocket icon is composed of the capital letters "T" and "P";',
                    brandTrademarkDesc_2: "The text part is the capital TOKEN POCKET;",
                    brandTrademarkDesc_3: "The icon and text constitute the TokenPocket brand's trademark.",
                    logo: "Logo",
                    fullVertical: "Full (Vertical)",
                    fullHorizontal: "Full (Horizontal)",
                    spellingRules: "Spelling Rules",
                    spellingRulesDesc: "When representing the brand: TOKEN POCKET",
                    spellingRulesDesc_1: "When representing an application: TokenPocket",
                    spellingRulesDesc_2: "Error demonstration: TOKENPOCKET, Tokenpocket, tokenpocket",
                    representingBrand: "When representing the brand",
                    applicationBrand: "When representing an application",
                    TokenPocketIcon: "TokenPocket Icon",
                    TokenPocketIconDesc: "Use the app icon when TokenPocket is mention as an application;",
                    TokenPocketIconDesc_1: "Use the social avatar in social media or organization such as Twitter, Facebook, Medium and Telegram.",
                    roundedIcon: "Rounded icon",
                    squareIcon: "Square icon",
                    socialAvatar: "Social Avatar",
                    TokenPocketColor: "TokenPocket Color",
                    TokenPocketColorDesc: "The brand color of TokenPocket is blue, which symbolizes the technological feel and trust of the internet. Gradient colors are also used in the app's charts.",
                    primary: "Primary",
                    secondary: "Secondary",
                    colorSystem: "Color System",
                    brandBlue: "Brand Blue",
                    brandBlack: "Brand Black",
                    OffWhite: "Off-White",
                    palette: "Palette"
                }
            },
            Oe = {
                COMMON: {
                    EMAIL: "이메일",
                    YES: "예",
                    NO: "아니요",
                    HAS: "예",
                    HAVENT: "아니요",
                    BLOCKCHAIN: "블록체인",
                    MULTIPLE_CHOICE: "(다중 선택)",
                    IS_SUPPORT_TP_CONNECT: "TokenPocket 연결을 지원합니까? (확장 및 모바일 앱)",
                    SUPPORT_BOTH: "둘 다 지원됩니다",
                    SUPPORT_EXTENSION: "확장만",
                    SUPPORT_MOBILE: "모바일 전용",
                    SUPPORT_NONE: "없음",
                    blockchainWallet: "블록체인 지갑",
                    iostWallet: "IOST 지갑",
                    tronWallet: "TRON 지갑",
                    platformInfo: {
                        eos: "EOS",
                        moac: "MOAC",
                        eth: "ETH",
                        jt: "Jingtum ",
                        enu: "ENU",
                        bos: "BOS",
                        iost: "IOST",
                        cosmos: "COSMOS",
                        bnb: "BNB",
                        trx: "TRON",
                        bsc: "BSC",
                        heco: "HECO",
                        okex: "OKExChain",
                        dot: "Polkadot",
                        hsc: "HSC",
                        matic: "Polygon",
                        klaytn: "Klaytn",
                        arb: "Arbitrum One",
                        arbn: "Arbirtum Nova",
                        ftm: "Fantom",
                        etc: "Ethereum Classic",
                        cfx: "Conflux eSpace",
                        solana: "Solana",
                        avax: "AVAX",
                        oe: "Optimistic Ethereum",
                        xdai: "Gnosis Chain",
                        harmony: "Harmony",
                        wax: "WAX",
                        aurora: "Aurora",
                        ksm: "Kusama",
                        mb: "Moonbeam",
                        sbg: "SubGame",
                        kcc: "KCC Mainnet",
                        lat: "PlatON",
                        bttc: "BTTC",
                        gt: "GateChain",
                        halo: "HALO",
                        aptos: "Aptos",
                        fil: "Filecoin FVM",
                        zks: "zkSync Era",
                        eosevm: "EOS EVM"
                    },
                    submit: "제출",
                    confirm: "확인",
                    save: "저장",
                    contactEmail: "이메일 연락:",
                    submitSuccess: "제출 성공",
                    submitDAppSuccessDesc: "제출하신 디앱은 검토 후 등록 예정입니다!",
                    submitTokenSuccessDesc: "제출하신 토큰은 검토 후 등록 예정입니다!",
                    backToHome: "홈페이지로 돌아가기",
                    searchNetwork: "블록체인 검색",
                    example: "예시",
                    submitTokenInfoAndLogo: "토큰 정보 및 로고 제출",
                    toGithubSubmit: "Github 커밋으로 이동",
                    contact: "연락처 정보",
                    contactDesc: "고객 서비스 연락처를 메일함 이외의 것을 꼭 남겨주세요, 그렇지 않으면 검토가 통과되지 않습니다.",
                    addContactDetail: "컨트랙트 세부 정보 추가",
                    urlError: "올바른 URL을 입력하세요.",
                    eg: "예시",
                    moreThan: "{count}자 이내로 입력하세요.",
                    nftType: "NFT 유형",
                    logoDesc: "기존 프로젝트를 표절하거나 모방한 그림, 저작권 위험이 있는 내용, 정치적 요소가 포함된 내용은 승인되지 않습니다.",
                    logoDesc_2: "<strong>400*400px, JPG&PNG, 최대 5M의</strong> 고품질 로고를 제출해 주시면 성공적으로 검토될 수 있습니다.",
                    uploadError: "400*400px, JPG&PNG, 최대 5M 로고를 제출해 주세요.",
                    nextStep: "다음 단계",
                    donate: {
                        title: "기부해 주세요",
                        desc: '요청을 제출할 때 지정된 금액 <strong style="color: var(--color-1)">TPT</strong>를 기부해주세요.',
                        tutorial: "튜토리얼",
                        tutorial_1: '지원되는 네트워크: <strong style="color: var(--color-1)">BSC</strong>.',
                        tutorial_2: '지원되는 토큰: <strong style="color: var(--color-1)">TPT (</strong><span data-info="info" style="color: #2980FE;cursor: pointer;">토큰 정보</span><strong style="color: var(--color-1)">)</strong>. 다른 토큰을 전송하면 처리되지 않습니다. <span data-link="link" style="color: #2980FE;cursor: pointer;">TPT를 받으러 가기</span>',
                        tutorial_2_mobile: '지원되는 토큰: <strong style="color: var(--color-1)">TPT</strong>. 다른 토큰을 전송하면 처리되지 않습니다. <span data-link="link" style="color: #2980FE;cursor: pointer;">TPT를 받으러 가기</span>',
                        tutorial_3: '<strong style="color: var(--color-1)">토큰을 전송하는 동안 이 페이지를 떠나지 마세요</strong>. 떠나면 금액이 변경될 수 있으며, 결제를 확인할 수 없습니다.',
                        tutorial_4: '결제 후 아래에 <strong style="color: var(--color-1)">거래 해시 링크</strong>를 붙여넣어 주세요.',
                        amount: "기부 금액:",
                        blockchain: "블록체인",
                        receivingAddress: "수신 주소",
                        hash: "거래 해시 링크",
                        tokenInfo: "토큰 정보",
                        tokenContract: "토큰 계약"
                    },
                    LAYOUT: {
                        features: "기능",
                        products: "제품",
                        buyCryptoFooter: "암호화폐 구매",
                        mobileWallet: "모바일 지갑",
                        mobileWalletDesc: "블록체인 기반 \b암호화폐 & DeFi 모바일 지갑.",
                        hardwareWallet: "하드웨어 지갑",
                        hardwareWalletDesc: "KeyPal로 자산을 보호하세요.",
                        TPCard: "TP Card",
                        TPCardDesc: "뱅크 카드는 탈중앙화 방식으로 운영됩니다.",
                        extensionWallet: "익스텐션 지갑",
                        extensionWalletDesc: "컴퓨터에서 더 나은 지갑 사용.",
                        desktop: "데스크탑 지갑",
                        fiveDegrees: "5Degrees",
                        versionVerification: "정품 확인",
                        versionVerificationDesc: "지갑을 검증하세요.",
                        approvalDetector: "승인 탐지기",
                        approvalDetectorDesc: "승인된 토큰 보기 및 승인 해제.",
                        tokenSecurity: "토큰 보안",
                        tokenSecurityDesc: "토큰의 계약 주소를 통해 보안을 확인하세요.",
                        keyGenerator: "키 생성기",
                        keyGeneratorDesc: "여러 네트워크를 위한 퍼블릭 및 프라이빗 키 무작위 생성.",
                        tokenProfile: "토큰 프로필",
                        tokenProfileDesc: "토큰에 대한 모든 정보 알아보기.",
                        tokenClaim: "토큰 청구",
                        tokenClaimDesc: "에어드랍 청구.",
                        easyInscription: "간편한 인스크립션",
                        easyInscriptionDesc: "안전한 인스크립션 도구.",
                        nostrAssetsBatchSender: "NostrAssets 일괄 전송",
                        nostrAssetsBatchSenderDesc: "NostrAssets용 일괄 전송 도구.",
                        BATCH_SENDER: "일괄 전송",
                        BATCH_SENDER_DESC: "한 번에 여러 수신자에게 토큰 전송.",
                        trade: "거래",
                        swap: "트랜짓 스왑",
                        swapDesc: "최상의 가격으로 스왑",
                        bridge: "브릿지",
                        bridgeDesc: "블록체인 간 거래 지원",
                        buyCrypto: "구매",
                        buyCryptoDesc: "신용카드로 암호화폐 구매.",
                        market: "마켓",
                        marketDesc: "실시간 인사이트 인기 토큰 확인.",
                        information: "정보",
                        blockchainGuide: "Blockchain 지갑 가이드라인",
                        tronWallet: "TRON 지갑 가이드라인",
                        iostWallet: "IOST 지갑 가이드라인",
                        tpMan: "TP 맨",
                        developers: "개발자",
                        github: "Github (TP-Lab)",
                        devCenter: "개발자 센터",
                        developersDesc: "토큰포켓 개발자 문서.",
                        subToken: "토큰 제출",
                        subTokenDesc: "토큰 및 NFT 제출.",
                        subDApp: "DApp 제출",
                        subDAppDesc: "DApp 제출 검토 후 표시.",
                        subNFT: "NFT 제출",
                        subNFTDesc: "NFT 및 예술 작품 제출.",
                        subChain: "체인 제출",
                        subChainDesc: "블록체인 제출.",
                        bugBounty: "버그 바운티",
                        tools: "도구",
                        build: "빌드",
                        learn: "Learn",
                        explorer: "Explorer",
                        darkMode: "다크 모드",
                        company: "회사",
                        about: "에 대한",
                        careers: "직업",
                        pressKit: "브랜드 키트",
                        swagShop: "스웨그 샵",
                        support: "서포트",
                        helpCenter: "도움 센터",
                        helpCenterDesc: "답변과 지원을 위한 리소스.",
                        contactUs: "문의하기",
                        contactUsDesc: "제안 공유 및 질문.",
                        forum: "포럼",
                        forumDesc: "커뮤니티 회원들과의 대화.",
                        legal: "법률",
                        privacyPolicy: "개인 정보 보호 정책",
                        terms: "이용 약관",
                        brandKit: "브랜드 키트",
                        toHome: "홈",
                        defiWallet: "DeFi 지갑",
                        ETHWallet: "이더리움 지갑",
                        ethWallet: "eth 지갑"
                    }
                },
                HOME: {
                    download: "다운로드",
                    downloadNow: "지금 다운로드",
                    HEADER: {
                        title: "블록체인을 탐색할 수 있는 안전한 암호화폐 지갑",
                        desc_1: "토큰을 구입, 저장, 전송, 교환 및 수집하기 쉽고 안전합니다. 200개 이상의 국가 및 지역에서 3,000만 명 이상의 사용자가 사용합니다."
                    },
                    INTRODUCTION: {
                        title: "토큰포켓은 글로벌 사용자가 신뢰합니다",
                        desc_1: "토큰포켓은 전 세계 200여 개 국가와 지역에 안전하고 간편한 암호화폐 지갑 서비스를 제공하고 있습니다",
                        desc_2: "서비스 사용자",
                        desc_3: "일 트랜잭션",
                        desc_4: "지원 국가 및 지역",
                        desc_5: "설립됨"
                    },
                    SECURITY: {
                        title: "보안은 필수적입니다",
                        desc_1: "토큰포켓 사용자는 자신의 기기에서만 키와 비밀번호를 생성하고 저장하며 사용자 자신만이 계정과 자산에 액세스할 수 있습니다.",
                        desc_2: "토큰포켓은 또한 하드웨어 콜드 지갑 및 다중 서명 지갑 기능을 개발하여 필수에 따라 보안을 강화 가능합니다.",
                        desc_3: "BTC, ETH, BSC, TRON, Aptos, Polygon, Solana, Cosmos, Polkadot, EOS, IOST 등을 지원합니다."
                    },
                    EXCHANGE: {
                        title: "쉬운 거래 및 전송",
                        desc_1: "토큰포켓에서 언제 어디서나 암호화폐를 거래할 수 있습니다.",
                        desc_2: "신용 카드로 암호화폐를 구매 가능. 쉬운 저장, 전송, 크로스 체인 및 거래.",
                        desc_3: "스왑",
                        desc_4: "쉽고 빠른",
                        desc_5: "브릿지",
                        desc_6: "다른 체인들 중",
                        desc_7: "암호화폐 구매",
                        desc_8: "5분 안에",
                        desc_9: "TP Card",
                        desc_10: "암호화폐로 결제"
                    },
                    DAPPSTORE: {
                        title: "댑 스토어",
                        desc_1: "가장 좋아하는 탈중앙화 애플리케이션을 찾을 수 있으며, 최신 및 가장 인기있는 디앱을 찾고 지갑 내에서 사용 가능합니다.",
                        desc_2: "DApp 브라우저가 통합되어 링크를 통해 디앱을 이용 가능합니다.",
                        desc_3: "DeFi",
                        desc_4: "NFT",
                        desc_5: "DApp",
                        desc_6: "지원"
                    },
                    COMMUNITY: {
                        title: "커뮤니티",
                        desc_1: "토큰포켓은 오픈 기술 커뮤니티이며 더 편리하고 안전하며 풍부한 블록체인 세상을 함께 구축할 모든 개발자를환영합니다",
                        desc_2: "TP-Lab",
                        desc_3: "커뮤니티",
                        desc_4: "개발자 문서"
                    },
                    DOWNLOAD: {
                        title: "토큰포켓 지갑을 지금 다운로드하세요!",
                        desc_1: "블록체인 탐색을 위한 안전하고 신뢰할 수 있는 암호화 지갑"
                    },
                    FOLLOW: {
                        title: "우리를 따라오세요",
                        desc1: "TokenPocket 직원은 개인 메시지를 보내지 않습니다!",
                        desc2: "주의! TokenPocket 커뮤니티에 참여 중입니다. 누군가 우리를 사칭하여 개인 메시지를 보낼 수 있습니다! 개인 메시지를 보내는 사람은 모두 사기꾼일 수 있다는 점에 유의하세요! 우리는 당신에게 먼저 연락하지 않을 것입니다!",
                        desc3: "이해, 입력"
                    },
                    EXTENSIONMODAL: {
                        title: "확장 기능이 활성화되었습니다!",
                        desc1: "귀하의 Crypto & DeFi & GameFi",
                        desc2: "컴퓨터의 지갑",
                        btnText: "지금 사용",
                        btnTextm: "링크 복사",
                        tips: "링크를 성공적으로 복사하십시오. 열려면 컴퓨터로 이동하십시오"
                    }
                },
                DAPP: {
                    RULES: {
                        platform: "설명은 필수입니다.",
                        title: "DApp 명칭을 입력해주세요.",
                        address: "DApp컨트렉을 입력해주세요.",
                        url: "DApp웹사이트 주소를 입력해주세요.",
                        desc: "모든분의 자기소개 문구를 입력해주세요.",
                        icon_url: "DApp 아이콘을 업로드 해주세요.",
                        rakeBackAccount: "초대 리워드 컨트렉 계정을 입력해주세요.",
                        email: "이메일을 입력해주세요",
                        others: "기타 연락처 정보가 필요합니다",
                        category: "카테고리를 하나 이상 선택하세요.",
                        tp_connect: "이 항목은 비워둘 수 없습니다.",
                        audit_url: "감사 보고서 URL이 필요합니다"
                    },
                    title: "DApp 이름",
                    address: "DApp 컨트렉 주소",
                    url: "DApp 웹사이트 주소",
                    desc: "짦은 소개문구",
                    icon: "DApp 로고",
                    referral: "리퍼럴",
                    hasReferral: "리퍼럴 시스템이 있습니까?",
                    referralReward: "초대 리워드 분배방식",
                    reward_1: "초대 리워드 분배방식",
                    reward_2: "초대하신분은 DApp내부에서 수동으로 수령하셔야 합니다.",
                    hasInviteReward: "초대하신 분은 DApp내부에서 1회의 트랜섹션을 완료한후 초대 리워드를 활성화 할수 있습니다.",
                    inviteAccount: "초청 보상을 TP에 공개하기위한 계약 계정",
                    DAppRequirement: "DApp 요구사항",
                    requirement_1: "DApp은 TokenPocket 앱 및 TokenPocket 확장을 지원해야 합니다.",
                    requirement_2: "프로젝트측에서 제공해주신 웹사이트 주소는 접근 가능하며 안전해야 합니다.",
                    requirement_3: "스마트 컨트렉은 이미 메인넷에 응용이 되었으며 민감한 부분에 대하여 오픈소스로 전환해야 합니다.",
                    requirement_4: "민감한 스마트 컨트렉은 제3자를 통해 안전성에 대한 검증 및 리포트가 필요합니다.",
                    requirement_5: "상호적용 로직이 분명하며 모바일 유저인터페이스에도 응용이 되어야 합니다.",
                    requirement_6: "관련되 법과 규제를 준수하며 범법및 침해행위를 하면 안됩니다.",
                    requirement_7: "관련 법규를 위반할 경우 자발적으로 해당 법적 책임을지게됩니다. ",
                    dappInfo: "DApp 정보 :",
                    necessary: "필수",
                    language: "DApp 언어",
                    languageDesc: "(언어가 다양하면 별도로 제출하세요)",
                    en: "English",
                    zh: "中文简体",
                    zhTW: "中文繁体",
                    descDesc: "한 문장으로 된 프로젝트에 대한 간략한 설명",
                    auditInfo: "감사 정보 :",
                    hasAudit: "계약 감사가 수행되었는지 여부",
                    auditUrl: "감사 보고서 URL",
                    auditUrlExample: "예 : https://auditlink.com",
                    auditReport: "감사 보고서",
                    auditUpload: "업로드",
                    contact: "연락처 세부 정보",
                    contactDesc: "우편함 이외의 고객 서비스 연락처 정보를 남겨 두십시오, 그렇지 않으면 검토를 통과하지 않을 것입니다",
                    emailAddr: "이메일",
                    emailExample: "예 : build@tokenpocket.pro",
                    others: "기타",
                    othersExample: "예: https://t.me/tokenpocket_en",
                    auditOptional: "감사 정보 항목을 하나 이상 입력하십시오",
                    oversize: " 정규화 된 문자를 초과했습니다",
                    select: "선택",
                    tutorial_url: "https://help.tokenpocket.pro/developer-en/",
                    tutorial: "튜토리얼 보기",
                    noData: "체인을 찾을 수 없습니다~",
                    categories: "카테고리",
                    IS_SUPPORT_TP_CONNECT_1: "토큰포켓 연동을 지원하나요?",
                    IS_SUPPORT_TP_CONNECT_2: "(확장 및 모바일 앱)",
                    IS_SUPPORT_TP_CONNECT_3: "토큰포켓 연결",
                    dappTokensTitle: "디앱 토큰",
                    dappTokens: "디앱에 토큰이 있나요?",
                    emailError: "올바른 이메일 주소를 입력하세요.",
                    dappSmartContract: "스마트 컨트랙트",
                    dappSmartContractDesc: "디앱의 스마트 컨트랙트를 추가합니다. 2개 이상일 경우 쉼표(,)로 구분합니다.",
                    addAuditUrl: "감사 보고서 URL 추가",
                    addContactDetail: "컨트랙트 세부 정보 추가",
                    backToHome: "홈페이지로 돌아가기",
                    openSmartContract: "각 블록체인의 스마트 컨트랙트 수정",
                    openTokens: "토큰 정보 수정",
                    tokens: "토큰 정보를 하나 이상 추가하세요.",
                    addToken: "토큰 추가",
                    network: "토큰 네트워크",
                    symbol: "토큰 심볼",
                    contract: "토큰 컨트랙트"
                },
                DOWNLOAD: {
                    TITLE: "토큰포켓 다운로드",
                    TITLE_Android: "토큰포켓 안드로이드 버전",
                    TITLE_IOS: "토큰포켓 iOS 버전",
                    TITLE_Chrome: "토큰포켓 브라우저 버전",
                    TEXT: "토큰포켓은 수백만 명이 사용하는 쉽고 안전한 멀티 체인 암호화 지갑입니다.",
                    TEXT_Chrome: "토큰포켓 확장 지갑은 수백만 명이 쉽고 안전한 사용하며 모든 EVM 호환 체인을 지원하는 멀티 체인 암호화 지갑입니다.",
                    TEXT_PC: "TokenPocket 데스크톱은 EOS, ETH, BOS 그리고 TRON을 지원하는 가장 큰 멀티 블록체인 지갑입니다. 저희는 강력하고 안전한 디지털 자산 관리 솔루션을 제공해드립니다.",
                    scanCode: "코드 스캔",
                    installTutorial: "튜토리얼 설치",
                    desc_1: "공식 웹 사이트에서 앱을 다운로드하고 SSL 인증을 확인하십시오",
                    desc_2: "복구 구문(니모닉) 및 개인 키가 유출되지 않도록 안전하게 보관하고 타인과 절대 공유하지 마세요",
                    desc_3: "보안 팁 더 알아보기",
                    verifyText: "현재 APK 버전:",
                    verifyText1: "앱의 보안을 확인하는 방법",
                    verifyText2: "현재 버전:",
                    verifyText3: "현재 Google Play 버전:",
                    footerDesc_1: "BTC, ETH, BSC, TRON, Matic, Aptos, Solana, EOS, Polkadot, IOST 등 지원",
                    footerDesc_2: "멀티 레이어 보안 보호 기능 제공",
                    footerDesc_3: "DeFi, DApp, GameFi, NFT 지원",
                    coming_soon: "Coming Soon",
                    desc_tp_wallet: "는 공식적으로 TokenPocket의 유일한 iOS 앱 퍼블리셔로 지정되었습니다",
                    tp_wallet_version: "TP Wallet 버전:",
                    token_pocket_version: "Token Pocket 버전:",
                    delisted: "상장폐지",
                    checkoutAllVersion: "Check All Versions",
                    apk32Title: "32비트 패키지 다운로드",
                    apk32Desc: "32비트 설치 패키지는 하위 구성을 가진 기기에 적합합니다. DApp이 제대로 연결되지 않는 상황이 발생하면 32비트 설치 패키지를 다운로드하여 사용할 수 있습니다.",
                    download: "다운로드"
                },
                TOKEN: {
                    RULES: {
                        network: "네트워크는 필수입니다.",
                        email: "이메일을 입력해주세요.",
                        address: "컨트렉주소를 입력해세요.",
                        owner_address: "컨트렉 계정주소를 입력해주세요.",
                        symbol: "심볼을 입력해주세요.",
                        bl_symbol: "베이스 라인 심볼을 입력해주세요.",
                        total_supply: "총 공급량을 입력해주세요.",
                        decimal: "소수점을 입력해주세요.",
                        precision: "정밀도를 입력해주세요.",
                        gas: "기스 비용을 입력해주세요.",
                        website: "웹사이트를 입력해주세요.",
                        website_1: "Official Website is too long",
                        companyName: "회사 혹은 개인 이름을 입력해주세요.",
                        contact: "연락처를 입력해주세요.",
                        description: "Project introduction is required",
                        description_1: "Token Introduction is too long",
                        name: "프로젝트 소개를 입력해주세요.",
                        icon_url: "로고를 올려주세요."
                    },
                    icon: "토큰로고(반드시",
                    handleText: "저희가 2 업무일 안에 처리해드리겠습니다.",
                    tokenStandard: "토큰 스탠다드",
                    requirement_1: "허니팟 토큰 또는 스캠 토큰을 제출하지 마세요.",
                    requirement_2: "동일한 토큰을 여러 번 제출하지 마세요.",
                    requirement_3: "메인넷에 스마트 컨트랙트 배포는 필수입니다.",
                    requirement_4: "로고는 필수입니다.",
                    requirement_5: "관련 법률 및 규정을 위반할 경우 자발적으로 그에 상응하는 법적 책임을 져야합니다.",
                    addMore: "추가하기",
                    placeholder_1: "입력하세요...",
                    tokenRequirement: "토큰 등록 요구 사항",
                    information: "토큰 정보",
                    network: "네트워크",
                    name: "토큰 이름",
                    symbol: "토큰 이름",
                    success: "완료",
                    bl_symbol: "베이스 라인 심볼을 입력해주세요",
                    precision: "정밀도를 입력해주세요",
                    decimal: "소수점을 입력해주세요",
                    totalSupply: "총 공급량",
                    contract: "토큰 컨트렉",
                    website: "웹사이트를 입력해주세요",
                    introduction: "토큰 소개"
                },
                RECRUITING: {
                    title: "TP Man 채용계획",
                    text: "TokenPocket 커뮤니티 가입",
                    text1: "블록체인 세계에 헌신하고 당신의 몫을 기여하십시오",
                    text2: "우리는 함께 Web3.0 세상을 만듭니다",
                    joinUs: "우리와 함께",
                    aboutTitle: "티피맨 소개",
                    aboutText: "TP Man은 TokenPocket 커뮤니티의 중요한 부분이며 글로벌 TP Men의 회원이 되실 수 있도록 진심으로 초대합니다!",
                    aboutText1: "당신은 블록체인 애호가이며 업계 가치를 인정합니다.",
                    aboutText2: "블록체인 세계를 탐험할 때 TokenPocket 지갑이 제공하는 편리함을 즐기십시오.",
                    missionTitle: "TP맨의 미션",
                    missionText: "TokenPocket이 전 세계의 더 많은 블록체인 사용자에게 서비스를 제공할 수 있도록 도와주세요. 다음 요구 사항 중 두 가지를 충족하여 지원하시기 바랍니다.",
                    missionText1: "다양한 채널을 통해 국내 기업이나 핫한 프로젝트와의 협력을 확대하고 추진하세요.",
                    missionText2: "지역 사용자의 요구에 맞는 마케팅 활동을 계획합니다.",
                    missionText3: "Twitter, Youtube, Telegram, Discord와 같은 주류 소셜 미디어를 운영할 수 있는 능력이 있어야 합니다.",
                    missionText4: "영어가 유창하고 번역 작업을 완료할 수 있습니다.",
                    missionText5: "TokenPocket은 글로벌 블록체인 사용자에게 더 많은 사용 및 기술 지원을 제공할 계획이므로 적어도 한 국가와 해당 사용자(인도, 미국, 터키, 러시아, 한국, 베트남, 필리핀 등)",
                    getTitle: "무엇을 얻습니까?",
                    getText: "블록체인 산업의 다양한 분야와 직접 관련된 업무 경험으로 DApp 프로젝트, 인플루언서 및 업계의 주류 미디어와의 커뮤니케이션 기회를 얻을 수 있습니다.",
                    getText1: "트윗 번역, 영상 제작, 커뮤니티 운영, 비즈니스 협력 등 풍부한 보상을 확보하세요.",
                    getText2: "가장 전문적인 블록체인 지식 교육을 받고 팀과 함께 Web3.0 세계를 탐험하십시오.",
                    getText3: "TokenPocket 맞춤형 의류 및 하드웨어 지갑을 포함한 TokenPocket 공식 혜택.",
                    processTitle: "채용 과정",
                    processText: "이력서 제출",
                    processText1: "화면 이력서",
                    processText2: "온라인 인터뷰",
                    processText3: "면접 결과",
                    processText4: "작업 확장",
                    applyTitle: "신청할 수 있는 사람",
                    applyText: "나라를 가리지 않고 세상을 마주하다",
                    applyText1: "블록체인 세계에 대한 관심과 호기심",
                    applyText2: "양식을 작성하고 이력서를 첨부하면 최대한 빨리 연락 드리겠습니다.",
                    footerTitle: "에 대한 TokenPocket",
                    footerText: "초과하다",
                    footerText1_1: "20M",
                    footerText1_2: "글로벌 사용자",
                    footerText2_1: "3.5M",
                    footerText2_2: "활성 사용자",
                    footerText3_1: "200",
                    footerText3_2: "국가 및 지역",
                    footerText4: "양식을 작성하고 이력서를 첨부하면 최대한 빨리 연락 드리겠습니다.",
                    footerText5: "출시 예정"
                },
                ABOUT: {
                    title: "소개",
                    desc: "토큰포켓'은 멀티 체인 탈중앙화 지갑으로 모바일 지갑, 웹 지갑 그리고 하드웨어 지갑을 제공하며 비트코인, 이더리움, 바이낸스 스마트 체인, 트론, 폴리곤, 솔라나, 앱토스, 폴카닷, EOS 및 모든 EVM 호환 체인을 지원합니다. 200개 이상의 국가 및 지역에서 3,000만 명 이상의 사용자에게 서비스를 제공합니다. 전 세계 이용자들의 신뢰를 받은 세계적인 암호화폐 지갑입니다.",
                    philosophy: {
                        title: "철학",
                        desc: "우리는 오픈 소스 기술 커뮤니티를 추구하며, 모든 개발자가 보다 편리하고 안전하며 풍부한 블록체인 세계를 함께 구축하기를 환영합니다.",
                        ambition: "포부",
                        ambition_desc: "블록체인을 모든 곳에 사용 될 수 있도록 만들겠습니다.",
                        value: "가치",
                        value_desc: "데이터를 사용자에게 돌려주고 가치를 실제 소유자가 가질 수 있게 합니다.",
                        attitude: "태도",
                        attitude_desc: "열린 마음으로 상호 협력합니다."
                    },
                    milestones: {
                        title: "이정표",
                        desc_2018_4_1: "토큰포켓 창립。",
                        desc_2018_8_1: "Huobi, Hofan, Byte Capital로부터 투자 유치。",
                        desc_2019_8_1: "트론 지원 데스크탑 지갑 출시。",
                        desc_2019_11_1: "구글 플레이, 토큰포켓 앱 다운로드 100만 건 돌파。",
                        desc_2020_7_1: "HD 지갑 지원。",
                        desc_2020_9_1: "BSC 및 DeFi 프로젝트 지원。",
                        desc_2020_12_1: "이더리움 2.0 스테이킹 지원。",
                        desc_2021_3_1: "스왑 플랫폼 Transit 인큐베이팅。",
                        desc_2021_6_1: "사용자 2천만명 돌파。",
                        desc_2021_8_1: "하드웨어 지갑 KeyPal 인큐베이팅。",
                        desc_2021_11_1: "브랜드 업그레이드, 신규 로고 및 브랜드。",
                        desc_2022_1_1: "트랜짓 바이(".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://buy.transit.finance/ramp" target="_blank">Transit Buy</a>', ") 인큐베이션, 글로벌 법정화폐 지원。"),
                        desc_2022_5_1: "dFox 인수 후 토큰포켓 웹 확장 지갑으로 브랜드 변경。",
                        desc_2022_7_1: "디박스(".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://debox.pro/" target="_blank">DeBox</a>', ") 투자, 웹3 DID 기반 커뮤니티 관리 도구。"),
                        desc_2022_9_1: "랩 코인(WrapCoin) 투자。",
                        desc_2022_12_1: "멀티시그 지갑 지원。",
                        desc_2023_4_1: "이더리움 샤펠라 업데이트 지원。",
                        desc_2023_4_2: "스테이크 볼트, 비수탁 관리 스테이킹 지원。",
                        desc_2023_5_1: "트론 에너지 렌탈 및 에너지 보조금 서비스 출시, 최대 75% 네트워크 수수료 절감。",
                        desc_2023_5_2: "비트코인 생태계, 노스트르(Nostr) 프로토콜 및 BRC-20 지원。",
                        desc_2023_8_1: "LRT 프로토콜 퍼퍼 파이낸스(".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://www.puffer.fi/" target="_blank">Puffer Finance</a>', ") 투자。"),
                        desc_2023_10_1: "암호화된 보안 칩 카드 키팔(".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://card.keypal.pro/" target="_blank">Keypal Card</a>', ") 카드 판매 중。"),
                        desc_2023_11_1: "AA 스마트 월렛 출시。",
                        desc_2024_2_1: "미국 FinCEN으로부터 MSB 라이센스 획득。",
                        desc_2024_3_1: "".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://twitter.com/TokenPocket_TP" target="_blank">트위터 (X).</a>', " 팔로워 60만 명 이상。"),
                        desc_2024_5_1: "종합 라이센스 증권사 빅토리 시큐리티(Victory Securities)와 협력。",
                        desc_2024_5_2: "홍콩 사이버포트에 정착, 아시아태평양 작전센터 설립。",
                        January: "1월",
                        February: "2월",
                        March: "3월",
                        April: "4월l",
                        May: "5월",
                        June: "6월",
                        July: "7월",
                        August: "8월",
                        September: "9월",
                        October: "10월",
                        November: "11월",
                        December: "12월"
                    },
                    contact_us: {
                        title: "문의하기",
                        service: "고객 서비스",
                        service_desc: "service@tokenpocket.pro",
                        bd: "사업 협업",
                        bd_desc: "bd@tokenpocket.pro",
                        developers: "개발자",
                        developers_desc: "Discord"
                    }
                },
                SEO: {
                    title: "토큰포켓 - 여러분의 범용 디지털 지갑입니다. | TP 지갑 - ETH  지갑 - BTC  지갑 - BSC  지갑 - HECO 지갑 - OKExChain 지갑 - Polkadot 지갑 - Kusama 지갑 - DeFi  지갑 - Layer 2 지갑 - EOS 지갑 - TRX 지갑 - nostr",
                    description: "TokenPocket is a world-leading digital currency wallet, supporting public blockchains including BTC, ETH, BSC, HECO, TRON, OKExChain, Polkadot, Kusama, EOS and Layer 2.",
                    keywords: "TokenPocket,Token Pocket,TP wallet,Ethereum wallet,Bitcoin,EOS,IOST,COSMOS,heco,bsc,layer2,DeFi,wallet,암호화, 블록체인, web3,NFT,nostr"
                },
                DAPPSTORE: {
                    document_title: "DAppStore | TokenPocket",
                    title: "DApp 스토어",
                    copy: "Copied successfully",
                    agreement: "독서 및 동의",
                    risk_statement: "위험성 진술",
                    no_again: "더 이상 프롬프트 없음",
                    collect: "즐겨찾기",
                    no_collect: "즐겨찾기가 아직 없습니다",
                    data_loading: "DApp 로딩 중...",
                    hot: "트렌드",
                    hot_title: "인기 있는 DApp",
                    hot_desc: "DeFi, DEX, 블록체인 게임, NFT 마켓 등 포함한 100개 이상의 주요 DApp을 모두 한 곳에서 살펴보세요. DeFi에는 탈중앙화 거래소 (DEX), 합성 자산, 지불, 대출 등이 포함됩니다.",
                    placeholder: "이름 또는 키워드로 DApp 검색",
                    recent_search: "최근 검색",
                    hot_search: "인기 검색어",
                    search_result: "결과",
                    no_search_result: "기록을 찾을 수 없습니다",
                    enter: "입력 ",
                    supported_networks: "지원되는",
                    category: "카테고리",
                    all_networks: "모든 네트워크",
                    community_tutorial: "튜토리얼",
                    related_tokens: "관련 토큰",
                    more: "더",
                    moreDApp: "더",
                    cancel: "취소"
                },
                BRANDKIT: {
                    title: "다운로드 키트",
                    download: "다운로드",
                    desc: "이 페이지에서는 TokenPocket의 공식 로고와 색상 팔레트를 찾아보실 수 있습니다. 이를 통해 프로젝트에서 우리의 브랜드를 잘 표현하시길 바랍니다. 브랜드 가이드라인에 맞게 이 자원을 사용하여 TokenPocket의 일관되고 전문적인 이미지를 유지하시기 바랍니다.",
                    logoDownload: "로고 다운로드",
                    logoDownloadDesc: "지금 우리의 브랜드 로고를 다운로드하여 디자인 프로젝트에서 일관되고 전문적인 이미지를 유지하세요. ",
                    logoDownloadDesc_1: "모든 파일은 고품질이며 웹, 인쇄 및 다양한 응용 프로그램에 적합하여 인상적인 비주얼을 쉽게 만들 수 있습니다.",
                    colorVersion: "컬러 버전",
                    whiteVersion: "화이트 버전",
                    brandTrademark: "브랜드 상표",
                    brandTrademarkDesc: 'TokenPocket 아이콘은 대문자 "T"와 "P"로 구성되어 있으며,',
                    brandTrademarkDesc_2: '텍스트 부분은 대문자 "TOKEN POCKET"입니다.',
                    brandTrademarkDesc_3: "아이콘과 텍스트는 TokenPocket 브랜드의 상표를 구성합니다.",
                    logo: "Logo",
                    fullVertical: "풀(세로)",
                    fullHorizontal: "풀(가로)",
                    spellingRules: "표기 규칙",
                    spellingRulesDesc: '"브랜드를 나타낼 때: TOKEN POCKET"',
                    spellingRulesDesc_1: '"애플리케이션을 나타낼 때: TokenPocket"',
                    spellingRulesDesc_2: '"잘못된 예시: TOKENPOCKET, Tokenpocket, tokenpocket"',
                    representingBrand: "브랜드를 나타낼 때",
                    applicationBrand: "애플리케이션을 나타낼 때",
                    TokenPocketIcon: "TokenPocket 아이콘",
                    TokenPocketIconDesc: "TokenPocket을 애플리케이션으로 언급할 때 애플리케이션 아이콘을 사용하세요. ",
                    TokenPocketIconDesc_1: "소셜 미디어 또는 Twitter, Facebook, Medium, Telegram 등의 조직에서 소셜 아바타를 사용하세요.",
                    roundedIcon: "라운드 아이콘",
                    squareIcon: "정사각형 아이콘",
                    socialAvatar: "소셜 아바타",
                    TokenPocketColor: "TokenPocket 색상",
                    TokenPocketColorDesc: "TokenPocket의 브랜드 색상은 파란색으로, 파란색은 인터넷의 기술적인 느낌과 신뢰를 상징합니다. 앱의 차트에서는 그라데이션 색상이 사용되었습니다.",
                    primary: "주요 색상",
                    secondary: "보조 색상",
                    colorSystem: "색상 시스템",
                    brandBlue: "브랜드 블루",
                    brandBlack: "브랜드 블랙",
                    OffWhite: "오프 화이트",
                    palette: "팔레트"
                }
            },
            Pe = {
                zh: ye,
                "zh-tw": {
                    COMMON: {
                        EMAIL: "Email",
                        YES: "是",
                        NO: "否",
                        HAS: "有",
                        HAVENT: "没有",
                        BLOCKCHAIN: "項目網絡",
                        MULTIPLE_CHOICE: "(可多選)",
                        IS_SUPPORT_TP_CONNECT: "是否支持TokenPocket連接（包括移動端和插件端）",
                        SUPPORT_BOTH: "均已支持",
                        SUPPORT_EXTENSION: "僅支持插件端",
                        SUPPORT_MOBILE: "僅支持移動端",
                        SUPPORT_NONE: "均未支持",
                        blockchainWallet: "區塊鏈錢包",
                        iostWallet: "IOST錢包",
                        tronWallet: "TRON錢包",
                        platformInfo: {
                            eos: "EOS",
                            moac: "墨客",
                            eth: "以太坊",
                            jt: "井通",
                            enu: "ENU",
                            bos: "BOS",
                            iost: "IOST",
                            cosmos: "COSMOS",
                            bnb: "BNB",
                            trx: "TRON",
                            bsc: "幣安智能鏈",
                            heco: "火幣生態鏈",
                            okex: "OKExChain",
                            dot: "Polkadot",
                            hsc: "虎符智能鏈",
                            matic: "Polygon",
                            klaytn: "Klaytn",
                            arb: "Arbitrum One",
                            arbn: "Arbirtum Nova",
                            ftm: "Fantom",
                            etc: "Ethereum Classic",
                            cfx: "Conflux eSpace",
                            solana: "Solana",
                            avax: "AVAX",
                            oe: "Optimistic Ethereum",
                            xdai: "Gnosis Chain",
                            harmony: "Harmony",
                            wax: "WAX",
                            aurora: "Aurora",
                            ksm: "Kusama",
                            mb: "Moonbeam",
                            sbg: "SubGame",
                            kcc: "KCC Mainnet",
                            lat: "PlatON",
                            bttc: "BTTC",
                            gt: "GateChain",
                            halo: "HALO",
                            aptos: "Aptos",
                            fil: "Filecoin FVM",
                            zks: "zkSync Era",
                            eosevm: "EOS EVM",
                            mantle: "Mantle",
                            linea: "Linea",
                            base: "Base",
                            opbnb: "opBNB",
                            polyzk: "Polygon zkEVM",
                            core: "CORE",
                            haqq: "HAQQ",
                            scroll: "Scroll",
                            manta: "Manta",
                            bevm: "BEVM",
                            zkfair: "ZKFair",
                            metis: "Metis",
                            zeta: "Zeta Chain",
                            merlin: "Merlin",
                            blast: "Blast",
                            xlayer: "X Layer",
                            bitlayer: "Bitlayer",
                            kroma: "Kroma"
                        },
                        submit: "提交",
                        confirm: "確認",
                        save: "儲存",
                        contactEmail: "聯絡信箱:",
                        submitDAppSuccessDesc: "您提交的項目將會在我們審核通過之後上架！",
                        submitTokenSuccessDesc: "您提交的代幣將會在我們審核通過之後上架！",
                        backToHome: "返回官網首頁",
                        searchNetwork: "搜尋網路名稱",
                        example: "示例",
                        submitTokenInfoAndLogo: "提交代幣信息及logo",
                        toGithubSubmit: "跳轉至Github提交",
                        contact: "聯絡方式：",
                        contactDesc: "請務必留下郵箱以外的客服聯絡方式，否則無法通過審核",
                        addContactDetail: "新增聯絡方式",
                        urlError: "請輸入正確的連結",
                        eg: "例：",
                        moreThan: "請勿超過{count}字符",
                        nftType: "NFT類型",
                        logoDesc: "剽竊或模仿現有項目、涉及版權風險或政治元素的圖片將不會通過審核。",
                        logoDesc_2: "請提交 <strong>400*400px、JPG&PNG、最大 5M</strong> 的高品質logo，以確保您提交的專案能成功通過審核。",
                        uploadError: "請提交 400*400px、JPG&PNG、最大 5M 的高品質logo",
                        nextStep: "下一步",
                        donate: {
                            title: "請捐贈",
                            desc: "請在提交申請時，捐贈指定數額的<strong>TPT</strong>代幣。",
                            tutorial: "指南",
                            tutorial_1: '支援的網路：<strong style="color: var(--color-1)">BSC</strong>',
                            tutorial_2: '支持的代幣：<strong style="color: var(--color-1)">TPT (</strong><span data-info="info" style="color: #2980FE;cursor: pointer;">代幣資訊</span><strong style="color: var(--color-1)">)</strong>。如果您发送任何其他代币，您提交的项目将不会通过审核。<span data-link="link" style="color: #2980FE>前往獲取TPT</span>',
                            tutorial_2_mobile: '支持的代幣：<strong style="color: var(--color-1)">TPT</strong>。如果您发送任何其他代币，您提交的项目将不会通过审核。<span data-link="link" style="color: #2980FE>前往獲取TP</span>',
                            tutorial_3: '<strong style="color: var(--color-1)">發送代幣時請勿離開目前頁面。 </strong>如果您離開了目前頁面，所需的捐款金額可能會變化，這將導致我們無法確認您的付款情況。',
                            tutorial_4: '付款成功後，請將<strong style="color: var(--color-1)">交易的雜湊連結</strong>貼到下方的輸入框中。',
                            amount: "捐贈數額:",
                            blockchain: "公鏈",
                            receivingAddress: "接收地址",
                            hash: "交易哈希連結",
                            tokenInfo: "代幣資訊",
                            tokenContract: "代幣合約"
                        },
                        LAYOUT: {
                            features: "功能",
                            products: "產品",
                            buyCryptoFooter: "購買數字資產",
                            mobileWallet: "手機錢包",
                            mobileWalletDesc: "您的移動端數字資產錢包，支持iOS和Android",
                            hardwareWallet: "硬體錢包",
                            hardwareWalletDesc: "擁有KeyPal，讓您的資產更安全",
                            TPCard: "TP Card",
                            TPCardDesc: "你的第一張去中心化銀行卡",
                            extensionWallet: "插件錢包",
                            extensionWalletDesc: "您電腦上更好用的錢包",
                            desktop: "桌面端錢包",
                            fiveDegrees: "5Degrees",
                            versionVerification: "正版偵測",
                            versionVerificationDesc: "驗證你的錢包是否為正版",
                            approvalDetector: "授權檢測",
                            approvalDetectorDesc: "查看和取消授權您已經授權的代幣",
                            tokenSecurity: "代幣安全檢測",
                            tokenSecurityDesc: "通過合約地址檢查代幣是否安全",
                            keyGenerator: "私鑰生成器",
                            keyGeneratorDesc: "在多個網絡上生成公鑰和私鑰",
                            tokenProfile: "代幣資訊",
                            tokenProfileDesc: "了解代幣的全方位資訊",
                            tokenClaim: "領取空投",
                            tokenClaimDesc: "獲取您的空投",
                            easyInscription: "銘文助手",
                            easyInscriptionDesc: "安全的銘文鑄造工具",
                            nostrAssetsBatchSender: "Nostr批量轉帳",
                            nostrAssetsBatchSenderDesc: "Nostr資產的批量發送工具",
                            BATCH_SENDER: "批量轉帳",
                            BATCH_SENDER_DESC: "一次性向多個接收者批量發送代幣",
                            trade: "交易",
                            swap: "閃兌",
                            swapDesc: "用最優價格交易",
                            bridge: "跨鏈橋",
                            bridgeDesc: "Ensuring seamless asset liquidity.",
                            buyCrypto: "購買代幣",
                            buyCryptoDesc: "用信用卡購買數字資產",
                            market: "市場",
                            marketDesc: "實時洞察，發現熱門代幣",
                            information: "信息",
                            blockchainGuide: "區塊鏈小白書",
                            tronWallet: "波場小白書",
                            iostWallet: "IOST小白書",
                            tpMan: "TP俠",
                            developers: "開發者",
                            github: "Github (TP-Lab)",
                            devCenter: "開發者中心",
                            developersDesc: "TokenPocket的開發者文檔",
                            subToken: "提交代幣",
                            subTokenDesc: "提交您的數位資產和NFT",
                            subDApp: "提交DApp",
                            subDAppDesc: "提交您的DApp，我們將在審核後展示它",
                            subNFT: "提交NFT",
                            subNFTDesc: "提交您的NFT和藝術品",
                            subChain: "提交公鏈",
                            subChainDesc: "提交您的區塊鏈",
                            bugBounty: "漏洞賞金",
                            tools: "工具",
                            build: "開發者中心",
                            learn: "學習",
                            explorer: "探索",
                            darkMode: "暗黑模式",
                            company: "公司",
                            about: "關於",
                            careers: "招聘",
                            pressKit: "品牌素材",
                            swagShop: "周邊商店",
                            support: "支持",
                            helpCenter: "幫助中心",
                            helpCenterDesc: "答疑解惑與獲取資源的首選",
                            contactUs: "聯繫我們",
                            contactUsDesc: "分享您對TokenPocket的任何建議，提出您的任何疑問",
                            forum: "社區論壇",
                            forumDesc: "祝您與社區成員會談愉快",
                            legal: "法律",
                            privacyPolicy: "隱私策略",
                            terms: "服務協議",
                            brandKit: "品牌標誌",
                            toHome: "返回首頁",
                            defiWallet: "DeFi錢包",
                            ETHWallet: "Ethereum Wallet",
                            ethWallet: "ETH錢包"
                        }
                    },
                    HOME: {
                        download: "下載",
                        downloadNow: "立即下載",
                        HEADER: {
                            title: "加密錢包 安全簡單",
                            desc_1: "讓你安全、簡單地探索區塊鏈，是全球領先的數字資產錢包"
                        },
                        INTRODUCTION: {
                            title: "TokenPocket深受全球的用戶信賴",
                            desc_1: "我們為全球200多個國家及地區的用戶提供安全易用的數字資產服務",
                            desc_2: "服務的用戶",
                            desc_3: "日均交易數",
                            desc_4: "國家及地區",
                            desc_5: "成立於"
                        },
                        SECURITY: {
                            title: "安全是我們的根基",
                            desc_1: "TokenPocket只在用戶的設備裡生成並存儲私鑰助記詞，您是唯一可以訪問的人",
                            desc_2: "TokenPocket同時開發了冷錢包、多簽錢包等，來滿足您對安全的需求",
                            desc_3: "多鏈錢包，支持BTC、ETH、BSC、TRON、Aptos、Polygon、Solana、Cosmos、Polkadot、EOS、IOST等"
                        },
                        EXCHANGE: {
                            title: "兌換、交易更簡單",
                            desc_1: "隨時隨地，讓你更方便地交易",
                            desc_2: "用你的信用卡購入數字資產，輕鬆存儲、發送、跨鏈與兌換",
                            desc_3: "閃兌",
                            desc_4: "簡單快速",
                            desc_5: "跨鏈",
                            desc_6: "多鏈轉換",
                            desc_7: "購入數字資產",
                            desc_8: "僅在5分鐘內",
                            desc_9: "TP Card",
                            desc_10: "使用數位資產支付"
                        },
                        DAPPSTORE: {
                            title: "一站式DApp商店",
                            desc_1: "找到你最喜愛的去中心化應用，發現最新、最熱的DApp，一切盡在TokenPocket",
                            desc_2: "集成DApp瀏覽器，您可以訪問你的任何DApp鏈接",
                            desc_3: "DeFi",
                            desc_4: "NFT",
                            desc_5: "DApp",
                            desc_6: "已支持"
                        },
                        COMMUNITY: {
                            title: "社區",
                            desc_1: "我們堅持開放性社區，始終如一！我們歡迎所有開發者一起開發更方便、更豐富的的區塊鏈世界",
                            desc_2: "TP-Lab",
                            desc_3: "開發者社區",
                            desc_4: "開發者文檔"
                        },
                        DOWNLOAD: {
                            title: "現在就擁有您的TokenPocket！",
                            desc_1: "安全可信賴的數字資產錢包，伴您探索區塊鏈世界"
                        },
                        FOLLOW: {
                            title: "關注我們",
                            desc1: "TokenPocket 客服不會私聊您！",
                            desc2: "請注意，您即將進入TokenPocket社區，您進入社區可能會有人假冒TokenPocket的工作人員私聊您，請您務必警惕，所有私聊您的都可能是騙子！ TokenPocket工作人員不會主動跟您私信！",
                            desc3: "知道了，繼續前往"
                        },
                        EXTENSIONMODAL: {
                            title: "插件錢包現已上線！",
                            desc1: "一款應用在電腦上的 Crypto/DeFi",
                            desc2: "/GameFi 錢包",
                            btnTextm: "複製鏈接",
                            btnText: "立即使用",
                            tips: "複製鏈接成功，請前往電腦端打開"
                        }
                    },
                    DAPP: {
                        RULES: {
                            platform: "項目網絡不能為空",
                            title: "項目名稱不能為空",
                            address: "DApp合約帳號不能為空",
                            url: "項目鏈接不能為空",
                            desc: "項目簡介不能為空",
                            icon_url: "請上傳DApp圖標",
                            rakeBackAccount: "邀請獎勵合約賬號不能為空",
                            email: "郵箱不能為空",
                            others: "其他聯繫方式不能為空",
                            category: "請至少選擇一個項目分類",
                            tp_connect: "該項不能為空",
                            audit_url: "審計報告連結不能為空"
                        },
                        title: "項目名稱",
                        address: "DApp合約地址",
                        url: "項目鏈接",
                        desc: "項目簡介",
                        icon: "DApp圖標",
                        referral: "返佣",
                        hasReferral: "是否有返佣機制",
                        referralReward: "邀請獎勵發放方式",
                        reward_1: "邀请奖励发放方式",
                        reward_2: "邀請人需在DApp里手動領取",
                        hasInviteReward: "邀請人賬號是否需要在DApp中完成一筆交易才能激活邀請獎勵",
                        inviteAccount: "給TP發放邀請獎勵的合約賬號",
                        DAppRequirement: "DApp要求",
                        requirement_1: "DApp需要支持TokenPocket移動端和插件端。",
                        requirement_2: "您提供的項目網址需要可以公開訪問，並且穩定性有所保證。",
                        requirement_3: "您的項目的智能合約需要已經部署到主網上，敏感邏輯處需要開源。",
                        requirement_4: "敏感的合約需要提供第三方安全機構的審計報告。",
                        requirement_5: "DApp需要交互邏輯清晰，有實際用途，並且適配移動端。",
                        requirement_6: "要求符合相關法律法規，不存在欺詐和侵權等行為。",
                        requirement_7: "如果違反相關法律法規，您應自願承受相應法律責任。",
                        dappInfo: "項目信息：",
                        necessary: "為必填項",
                        language: "項目語言",
                        languageDesc: "(多語言請分別提交)",
                        en: "English",
                        zh: "中文简体",
                        zhTW: "中文繁体",
                        descDesc: "一句話簡單描述項目，將出現在DApp副標題裡",
                        auditInfo: "審計信息：",
                        hasAudit: "是否已進行合約審計",
                        auditUrl: "審計報告鏈接",
                        auditUrlExample: "如：https://auditlink.com",
                        auditReport: "審計報告",
                        auditUpload: "點擊上傳",
                        contact: "聯繫方式：",
                        contactDesc: "請務必留下除郵箱以外的客服聯繫方式，否則無法通過審核",
                        emailAddr: "郵箱",
                        emailExample: "例：build@tokenpocket.pro",
                        others: "其他",
                        othersExample: "例：https://t.me/tokenpocket_en",
                        auditOptional: "審計信息至少選填一項",
                        oversize: "已超出限定字符",
                        select: "請選擇",
                        tutorial_url: "https://help.tokenpocket.pro/developer-en/",
                        tutorial: "對接教程",
                        noData: "查無此網絡～",
                        categories: "分類",
                        IS_SUPPORT_TP_CONNECT_1: "是否支持TokenPocket連接",
                        IS_SUPPORT_TP_CONNECT_2: "(包括移動端和插件端)",
                        IS_SUPPORT_TP_CONNECT_3: "TokenPocket連接",
                        dappTokensTitle: "DApp代幣",
                        dappTokens: "您的項目是否有發行代幣？",
                        emailError: "請輸入正確的信箱",
                        dappSmartContract: "智能合約",
                        dappSmartContractDesc: "添加您的DApp的智能合約，如果超過一個，請使用逗號（,）分隔",
                        addAuditUrl: "添加審計報告鏈接",
                        backToHome: "返回官網首頁",
                        openSmartContract: "為每條鏈添加智能合約",
                        openTokens: "添加代幣信息",
                        tokens: "請添加至少一條代幣信息",
                        addToken: "添加代幣",
                        network: "代幣網絡",
                        symbol: "代幣符號",
                        contract: "代幣合約"
                    },
                    DOWNLOAD: {
                        TITLE: "下載 TokenPocket",
                        TITLE_Android: "TokenPocket 安卓客戶端",
                        TITLE_IOS: "TokenPocket iOS客戶端",
                        TITLE_Chrome: "TokenPocket 瀏覽器插件",
                        TEXT: "TokenPocket 是一款支持多鏈的自託管錢包，使用簡單安全，深受全球數千萬人的信賴與喜愛",
                        TEXT_Chrome: "TokenPocket插件錢包是一款多鏈自託管錢包，支持所有EVM兼容鏈，使用簡單安全，深受全球數千萬人的信賴與喜愛",
                        TEXT_PC: "TokenPocket桌面端是基於ETH、TRON、EOS的多鏈錢包，我們努力為用戶提供強大且安全的數字資產管理服務",
                        scanCode: "掃碼下載",
                        installTutorial: "插件安装教程",
                        desc_1: "請務必從官網下載錢包應用，並檢查網站的SSL證書",
                        desc_2: "保護好您的私鑰、助記詞，切勿洩露，更不可與任何人透露",
                        desc_3: "了解更多安全知識",
                        verifyText: "當前安卓版本:",
                        verifyText1: "如何驗證應用安全性",
                        verifyText2: "當前版本:",
                        verifyText3: "當前 Google Play 版本:",
                        footerDesc_1: "多鏈錢包，支持BTC、ETH、BSC、TRON、Aptos、Matic、Solana、EOS、Polkadot、IOST等等",
                        footerDesc_2: "多重安全保護措施，讓您安心使用",
                        footerDesc_3: "支持DeFi、DApp、GameFi和NFT等",
                        coming_soon: "即將上線",
                        desc_tp_wallet: "正式成為 TokenPocket 唯一 iOS App 發行商",
                        tp_wallet_version: "TP Wallet 版本:",
                        token_pocket_version: "Token Pocket 版本:",
                        delisted: "已下架",
                        checkoutAllVersion: "查看所有版本",
                        apk32Title: "下載 32 位元安裝包",
                        apk32Desc: "32位元安裝套件適用於較配置較低的設備，如果您出現DApp無法正常連結的情況，可以下載使用32位元的安裝套件。",
                        download: "下載"
                    },
                    TOKEN: {
                        RULES: {
                            network: "專案網路不能為空",
                            email: "Email不能為空",
                            address: "合約地址不能為空",
                            owner_address: "合約帳號地址不能為空",
                            symbol: "代幣符號不能為空",
                            bl_symbol: "網絡代碼不能為空",
                            total_supply: "代幣數量不能為空",
                            decimal: "代幣精度不能為空",
                            precision: "代幣小數位不能為空",
                            gas: "GAS費用不能為空",
                            website: "官網地址不能為空",
                            website_1: "官方網址已超出限定字符",
                            companyName: "公司或個人名字不能為空",
                            contact: "項目方聯繫方式不能為空",
                            description: "專案簡介不能為空",
                            description_1: "項目簡介已超出限定字符",
                            name: "代幣名稱不能為空",
                            icon_url: "請上傳代幣Logo"
                        },
                        icon: "代幣圖標",
                        handleText: "我們會在兩個工作日內處理您的申請",
                        tokenStandard: "代幣協議",
                        requirement_1: "請勿提交貔貅代幣或釣魚代幣。",
                        requirement_2: "請不要重複提交相同的代幣。",
                        requirement_3: "代幣的智能合約要求已經部署在主網上。",
                        requirement_4: "必須提交代幣logo。",
                        requirement_5: "如違反相關法律法規，自願承受相應法律責任。",
                        addMore: "新增其他聯絡方式",
                        placeholder_1: "請輸入...",
                        tokenRequirement: "代幣要求",
                        information: "代幣資訊",
                        network: "代幣網絡",
                        name: "代幣名稱",
                        symbol: "代幣符號",
                        bl_symbol: "網路程式碼",
                        precision: "代幣小數位",
                        decimal: "精度",
                        totalSupply: "代幣數量",
                        contract: "合約地址",
                        website: "官方網址",
                        introduction: "專案簡介"
                    },
                    RECRUITING: {
                        title: "TP俠招募計劃",
                        text: "加入TokenPocket社區",
                        text1: "投身到區塊鏈世界，貢獻自己的一份力量",
                        text2: "共同建設Web3.0世界",
                        joinUs: "加入我們",
                        aboutTitle: "關於TP俠",
                        aboutText: "TP俠是TP社區中的重要一員，我們誠摯地邀請您成為全球TP俠中的一員！",
                        aboutText1: "熱衷於區塊鏈事業並認可它的價值",
                        aboutText2: "作為TokenPocket的忠誠用戶，希望為探索區塊鏈增加便利",
                        missionTitle: "TP俠使命",
                        missionText: "在全球範圍內，幫助TP錢包服務更多的區塊鏈用戶，我們希望您（滿足以下其中兩項要求即可報名）",
                        missionText1: "能夠通過多種渠道拓展並促進TP與所在國家的的營銷公司或熱門項目合作",
                        missionText2: "能夠策劃符合當地用戶需求的市場營銷活動",
                        missionText3: "具有其中一至幾項主流社交媒體如Twitter、Youtube、Telegram、Discord等媒體的運營能力",
                        missionText4: "具有流暢的英語水平，能完成對應的翻譯工作",
                        missionText5: "TokenPocket當前計劃為區塊鏈市場提供更多的福利，如果您來自印度、美國、土耳其、俄羅斯、韓國、越南、菲律賓等，我們將給您提供更多的工作支持",
                        getTitle: "我們提供的福利",
                        getText: "一段直接與區塊鏈各個領域直接接觸的工作經歷，你將獲得不限於DApp項目方、kol、主流媒體的交互機會",
                        getText1: "根據工作內容（翻譯推文、製作視頻、社群運營、尋求商務合作等）獲得對應的豐厚報酬",
                        getText2: "獲得最專業的區塊鏈知識培訓，與團隊一起探索WEB3.0世界",
                        getText3: "TP官方福利，包含TokenPocket定製衣服，硬件錢包",
                        processTitle: "招募流程",
                        processText: "投遞簡歷",
                        processText1: "簡歷篩選",
                        processText2: "線上面試",
                        processText3: "面試結果",
                        processText4: "開始工作",
                        applyTitle: "招募對象",
                        applyText: "來自全球任何地方",
                        applyText1: "對區塊鏈保持著無盡的好奇和熱情",
                        applyText2: "填寫表格並附上簡歷，我們會盡快聯繫您",
                        footerTitle: "關於TokenPocket",
                        footerText: "超過",
                        footerText1_1: "2千萬",
                        footerText1_2: "全球用戶量",
                        footerText2_1: "350萬",
                        footerText2_2: "月活",
                        footerText3_1: "200個",
                        footerText3_2: "國家和地區",
                        footerText4: "TokenPocket 全球領先的多鏈自託管錢包",
                        footerText5: "Coming soon"
                    },
                    ABOUT: {
                        title: "關於我們",
                        desc: "TokenPocket是一款去中心化多鏈錢包，為用戶提供手機錢包、插件錢包和硬體錢包，支援比特幣、以太坊、Solana、幣安智能鏈、TRON、Aptos、Polygon、Polkadot、EOS等公鏈以及所有EVM相容鏈。 TokenPocket服務於來自200多個國家和地區的3000多萬用戶。它是全球用戶信賴的領先的加密錢包。",
                        philosophy: {
                            title: "我們的理念",
                            desc: "我們堅持開發技術社區，歡迎所有的開發者共同構建更便捷、更安全、更豐富的區塊鏈世界",
                            ambition: "目標",
                            ambition_desc: "讓區塊鏈隨處發生",
                            value: "價值",
                            value_desc: "讓數據回歸用戶，讓價值歸屬用戶",
                            attitude: "態度",
                            attitude_desc: "開放思維，互相協作"
                        },
                        milestones: {
                            title: "里程碑",
                            desc_2018_4_1: "TokenPocket成立。",
                            desc_2018_8_1: "由火幣、浩方資本、字節資本投資。",
                            desc_2019_8_1: "發布桌面端錢包，並支持TRON網絡。",
                            desc_2019_11_1: "谷歌商店下載次數突破100萬。",
                            desc_2020_7_1: "支持身份錢包（HD錢包）。",
                            desc_2020_9_1: "支持BSC網絡以及DeFi趨勢。",
                            desc_2020_12_1: "支持Eth2.0系統質押。",
                            desc_2021_3_1: "孵化去中心化聚合平台Transit。",
                            desc_2021_6_1: "總用戶量突破2000萬。",
                            desc_2021_8_1: "孵化硬件錢包KeyPal。",
                            desc_2021_11_1: "品牌升级（新logo new brand）。",
                            desc_2022_1_1: "收購dFox並將品牌升級為TokenPocket Extension。",
                            desc_2022_5_1: "孵化品牌".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://buy.transit.finance/ramp" target="_blank">Transit Buy</a>', "上线，支持全球法币。"),
                            desc_2022_7_1: "投资基于 DID 的 Web3 社群管理工具 ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://debox.pro/" target="_blank">DeBox</a>', "。"),
                            desc_2022_9_1: "投资可编程 DID 协议 Midhub。",
                            desc_2022_12_1: "支持多签钱包。",
                            desc_2023_4_1: "支持Ethereum Shapella升级。",
                            desc_2023_4_2: "质押宝支持自托管质押。",
                            desc_2023_5_1: "上线波场能量租赁，为用户网络费最高降低75%。",
                            desc_2023_5_2: "支持比特币生态，Nostr、BRC20。",
                            desc_2023_8_1: "投资LRT协议 ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://www.puffer.fi/" target="_blank">Puffer Finance</a>', "。"),
                            desc_2023_10_1: "".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://card.keypal.pro/" target="_blank">Keypal Card</a>', " 加密安全芯片卡片发售。"),
                            desc_2023_11_1: "上线AA智能钱包。",
                            desc_2024_2_1: "获得美国FinCEN颁发的MSB牌照。",
                            desc_2024_3_1: "".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://twitter.com/TokenPocket_TP" target="_blank">Twitter (X)</a>', "粉丝数突破600000。"),
                            desc_2024_5_1: "与综合性全牌照公司胜利证券达成深度合作。",
                            desc_2024_5_2: "正式入驻香港数码港并设立亚太运营中心。",
                            January: "1月",
                            February: "2月",
                            March: "3月",
                            April: "4月",
                            May: "5月",
                            June: "6月",
                            July: "7月",
                            August: "8月",
                            September: "9月",
                            October: "10月",
                            November: "11月",
                            December: "12月"
                        },
                        contact_us: {
                            title: "聯繫我們",
                            service: "服務郵箱",
                            service_desc: "service@tokenpocket.pro",
                            bd: "商務合作",
                            bd_desc: "bd@tokenpocket.pro",
                            developers: "開發者",
                            developers_desc: "Discord link"
                        }
                    },
                    SEO: {
                        title: "TokenPocket - 你的通用數字錢包 | TP錢包-ETH錢包-BTC錢包-BSC錢包-HECO錢包-OKExChain錢包-Polkadot錢包-Kusama 錢包-DeFi錢包-Layer 2錢包-EOS錢包-TRX錢包-nostr",
                        description: "TokenPocket是全球最大的數字貨幣錢包，支持包括BTC、ETH、BSC、HECO、TRON、Aptos、OKExChain、Polkadot、Kusama、EOS等在內的所有主流公鍊及Layer 2，已為全球近千萬用戶提供可信賴的數字貨幣資產管理服務，也是當前DeFi用戶必備的工具錢包。",
                        keywords: "TokenPocket,Token Pocket,TP錢包,ETH錢包,BTC錢包,EOS錢包,IOST,波卡,Polkadot,COSMOS,波場,以太坊,DeFi,火幣鏈,幣安智能鏈,錢包,layer2,加密,區塊鏈,web3,NFT,nostr"
                    },
                    DAPPSTORE: {
                        document_title: "DApp發現中心 | TokenPocket",
                        title: "DApp 發現中心",
                        copy: "複製成功",
                        agreement: "我已閱讀並同意",
                        risk_statement: "《风险声明》",
                        no_again: "不再進行提示",
                        collect: "收藏",
                        no_collect: "暂无收藏",
                        data_loading: "資料載入中",
                        hot: "熱門",
                        hot_title: "熱門探索 DApp",
                        hot_desc: "匯聚 100+ 公鏈上的優質 DApp，包括 DeFi、DEX、鏈遊、NFT 市場等熱門類別，為你提供一站式的體驗。 去中心化金融 (DeFi) 包括建立在區塊鏈上的去中心化交易所 (DEX)、合成資產、支付、借貸等去中心化應用程式 (DApp)。",
                        placeholder: "通过名称搜尋DApp",
                        recent_search: "最近搜尋",
                        hot_search: "熱門搜尋",
                        search_result: "搜尋結果",
                        no_search_result: "没有搜尋結果",
                        enter: "進入 ",
                        supported_networks: "支援的網路",
                        category: "類別",
                        all_networks: "全部網絡",
                        community_tutorial: "社群教程",
                        related_tokens: "相關Token",
                        more: "展開",
                        moreDApp: "更多",
                        cancel: "取消"
                    },
                    BRANDKIT: {
                        title: "品牌素材",
                        download: "素材下載",
                        desc: "在此頁面，您將找到官方的 TokenPocket logo 和配色方案，幫助您在項目中展示我們的品牌。我們邀請您根據我們的品牌指南，探索並使用這些資源，以確保 TokenPocket 的一致性和專業表現。",
                        logoDownload: "Logo 下載",
                        logoDownloadDesc: "立即下載我們的品牌 Logo，確保您的設計專案保持一致且專業的形象。",
                        logoDownloadDesc_1: "所有文件均為高品質，適用於網頁、印刷及各種應用，幫助您輕鬆製作出色的視覺效果。",
                        colorVersion: "彩色版本",
                        whiteVersion: "白色版本",
                        brandTrademark: "品牌商標",
                        brandTrademarkDesc: "TokenPocket 圖標由大寫字母 “T” 和 “P” 組成；",
                        brandTrademarkDesc_2: "文字部分為大寫 “TOKEN POCKET”；",
                        brandTrademarkDesc_3: "圖標與文字共同構成 TokenPocket 品牌的商標。",
                        logo: "Logo",
                        fullVertical: "全版（縱向）",
                        fullHorizontal: "全版（橫向）",
                        spellingRules: "拼寫規則",
                        spellingRulesDesc: "表示品牌時：TOKEN POCKET",
                        spellingRulesDesc_1: "表示應用時：TokenPocket",
                        spellingRulesDesc_2: "錯誤示範：TOKENPOCKET，Tokenpocket，tokenpocket",
                        representingBrand: "表示品牌時",
                        applicationBrand: "表示應用時",
                        TokenPocketIcon: "TokenPocket 圖標",
                        TokenPocketIconDesc: "在提到 TokenPocket 作為應用時，使用應用圖標；",
                        TokenPocketIconDesc_1: "在社交媒體或組織如 Twitter、Facebook、Medium 和 Telegram 中使用社交頭像。",
                        roundedIcon: "圓角圖標",
                        squareIcon: "方形圖標",
                        socialAvatar: "社交頭像",
                        TokenPocketColor: "TokenPocket 色彩",
                        TokenPocketColorDesc: "TokenPocket 的品牌色是藍色，藍色象徵著互聯網的科技感與信任。在 App 的圖表中還使用了漸變色。",
                        primary: "主色",
                        secondary: "輔色",
                        colorSystem: "顏色系統",
                        brandBlue: "品牌藍",
                        brandBlack: "品牌黑",
                        OffWhite: "灰白色",
                        palette: "調色板"
                    }
                },
                en: ve,
                ko: Oe,
                ru: {
                    COMMON: {
                        EMAIL: "Email",
                        YES: "Да",
                        NO: "Нет",
                        HAS: "Да",
                        HAVENT: "Нет",
                        BLOCKCHAIN: "Блокчейн",
                        MULTIPLE_CHOICE: "(Множественный выбор)",
                        IS_SUPPORT_TP_CONNECT: "Поддерживает ли он подключение TokenPocket? (Расширение и мобильное приложение)",
                        SUPPORT_BOTH: "Поддерживаются оба",
                        SUPPORT_EXTENSION: "Только расширение",
                        SUPPORT_MOBILE: "Только для мобильных устройств",
                        SUPPORT_NONE: "Нет",
                        blockchainWallet: "Блокчейн-кошелек",
                        iostWallet: "Кошелек IOST",
                        tronWallet: "Кошелек ТRОN",
                        platformInfo: {
                            eos: "EOS",
                            moac: "MOAC",
                            eth: "ETH",
                            jt: "Jingtum ",
                            enu: "ENU",
                            bos: "BOS",
                            iost: "IOST",
                            cosmos: "COSMOS",
                            bnb: "BNB",
                            trx: "TRON",
                            bsc: "BSC",
                            heco: "HECO",
                            okex: "OKExChain",
                            dot: "Polkadot",
                            hsc: "HSC",
                            matic: "Polygon",
                            klaytn: "Klaytn",
                            arb: "Arbitrum One",
                            arbn: "Arbirtum Nova",
                            ftm: "Fantom",
                            etc: "Ethereum Classic",
                            cfx: "Conflux eSpace",
                            solana: "Solana",
                            avax: "AVAX",
                            oe: "Optimistic Ethereum",
                            xdai: "Gnosis Chain",
                            harmony: "Harmony",
                            wax: "WAX",
                            aurora: "Aurora",
                            ksm: "Kusama",
                            mb: "Moonbeam",
                            sbg: "SubGame",
                            kcc: "KCC Mainnet",
                            lat: "PlatON",
                            bttc: "BTTC",
                            gt: "GateChain",
                            halo: "HALO",
                            aptos: "Aptos",
                            fil: "Filecoin FVM",
                            zks: "zkSync Era",
                            eosevm: "EOS EVM",
                            mantle: "Mantle",
                            linea: "Linea",
                            base: "Base",
                            opbnb: "opBNB",
                            polyzk: "Polygon zkEVM",
                            core: "CORE",
                            haqq: "HAQQ",
                            scroll: "Scroll",
                            manta: "Manta",
                            bevm: "BEVM",
                            zkfair: "ZKFair",
                            metis: "Metis",
                            zeta: "Zeta Chain",
                            merlin: "Merlin",
                            blast: "Blast",
                            xlayer: "X Layer",
                            bitlayer: "Bitlayer",
                            kroma: "Kroma"
                        },
                        submit: "Отправить",
                        confirm: "Подтвердить",
                        save: "Сохранить",
                        contactEmail: "Контактный адрес электронной почты:",
                        submitSuccess: "Отправка успешна",
                        submitDAppSuccessDesc: "Ваш DApp будет запущен после проверки!",
                        submitTokenSuccessDesc: "Токен, который вы отправите, будет запущен после нашей проверки!",
                        backToHome: "Вернуться на главную страницу",
                        searchNetwork: "Искать название блокчейна",
                        example: "Пример",
                        submitTokenInfoAndLogo: "Обновить логотип токена и другую информацию",
                        toGithubSubmit: "Перейти на Github",
                        contact: "Контактные данные",
                        contactDesc: "Обязательно оставьте контактную информацию службы поддержки клиентов, кроме почтового ящика, иначе это не пройдет проверку.",
                        addContactDetail: "Добавить детали контракта",
                        urlError: "Пожалуйста, введите правильный URL",
                        eg: "например",
                        moreThan: "Не более {count} символов",
                        nftType: "Стандарт протокола NFT",
                        logoDesc: "Изображения, копирующие или имитирующие существующие проекты, с рисками нарушения авторских прав или содержащие политические элементы, не будут одобрены.",
                        logoDesc_2: "Пожалуйста, отправьте <strong>400*400px, JPG&PNG</strong>, максимум <strong>5M</strong> логотип высокого качества, чтобы ваша заявка была успешно рассмотрена.",
                        uploadError: "Пожалуйста, отправьте логотип 400*400px, JPG&PNG, максимум 5M.",
                        nextStep: "Следующий шаг",
                        donate: {
                            title: "Пожалуйста, сделайте пожертвование",
                            desc: 'Пожалуйста, пожертвуйте указанную сумму <strong style="color: var(--color-1)">TPT</strong> при отправке запроса.',
                            tutorial: "Руководство",
                            tutorial_1: 'Поддерживаемая сеть: <strong style="color: var(--color-1)">BSC</strong>.',
                            tutorial_2: 'Поддерживаемый токен: <strong style="color: var(--color-1)">TPT (</strong><span data-info="info" style="color: #2980FE;cursor: pointer;">Информация о токене</span><strong style="color: var(--color-1)">)</strong>. Если вы отправите другой тип токенов, ваша заявка не будет обработана. <span data-link="link" style="color: #2980FE;cursor: pointer;">Перейти для получения TPT</span>',
                            tutorial_2_mobile: 'Поддерживаемый токен: <strong style="color: var(--color-1)">TPT</strong>. Если вы отправите другой тип токенов, ваша заявка не будет обработана. <span data-link="link" style="color: #2980FE;cursor: pointer;">Перейти для получения TPT</span>',
                            tutorial_3: '<strong style="color: var(--color-1)">Пожалуйста, не покидайте эту страницу при отправке токенов</strong>. Если вы покинете страницу, сумма может измениться, и мы не сможем подтвердить ваш платеж.',
                            tutorial_4: 'После оплаты вставьте ниже <strong style="color: var(--color-1)">ссылку на хэш транзакции</strong>.',
                            amount: "Сумма пожертвования:",
                            blockchain: "Блокчейн",
                            receivingAddress: "Адрес для получения",
                            hash: "Ссылка на хэш транзакции",
                            tokenInfo: "Информация о токене",
                            tokenContract: "Контракт токена"
                        },
                        LAYOUT: {
                            features: "Особенности",
                            products: "Продукты",
                            buyCryptoFooter: "Покупка",
                            mobileWallet: "Мобильный кошелек",
                            mobileWalletDesc: "Крипто и DeFi мобильный кошелек на блокчейне.",
                            hardwareWallet: "Аппаратный кошелек",
                            hardwareWalletDesc: "Получите KeyPal, чтобы защитить ваши активы.",
                            TPCard: "TP Card",
                            TPCardDesc: "Банковская карта работает в децентрализованной манере.",
                            extensionWallet: "Расширение кошелька",
                            extensionWalletDesc: "Удобный кошелек для вашего компьютера.",
                            desktop: "Desktop Wallet",
                            fiveDegrees: "5Degrees",
                            versionVerification: "Проверка подлинности",
                            versionVerificationDesc: "Проверьте ваш кошелек.",
                            approvalDetector: "Обнаружение одобрений",
                            approvalDetectorDesc: "Просматривайте и отменяйте одобрения ваших токенов.",
                            tokenSecurity: "Безопасность токенов",
                            tokenSecurityDesc: "Проверьте безопасность токена по его адресу контракта.",
                            keyGenerator: "Генератор ключей",
                            keyGeneratorDesc: "Генерация случайных публичных и приватных ключей для сетей.",
                            tokenProfile: "Профиль токена",
                            tokenProfileDesc: "Узнайте всю информацию о токене.",
                            tokenClaim: "Запрос токенов",
                            tokenClaimDesc: "Запросите ваш airdrop.",
                            easyInscription: "Легкая надпись",
                            easyInscriptionDesc: "Безопасный инструмент для надписей.",
                            nostrAssetsBatchSender: "NostrAssets BatchSender",
                            nostrAssetsBatchSenderDesc: "Инструмент массовой отправки для NostrAssets.",
                            BATCH_SENDER: "BatchSender",
                            BATCH_SENDER_DESC: "Отправляйте токены нескольким получателям одновременно.",
                            trade: "Торговля",
                            swap: "Обмен",
                            swapDesc: "Торгуйте по лучшим ценам.",
                            bridge: "Мост",
                            bridgeDesc: "Легко переводите активы с одной цепочки на другую.",
                            buyCrypto: "Покупка",
                            buyCryptoDesc: "Покупайте криптовалюту с помощью кредитных карт.",
                            market: "Рынок",
                            marketDesc: "Мгновенные данные для обнаружения популярных токенов.",
                            information: "Информация",
                            blockchainGuide: "Руководство по блокчейну",
                            tronWallet: "Руководство по TRON",
                            iostWallet: "Руководство по IOST",
                            tpMan: "ТП-мужчина",
                            developers: "Разработчики",
                            github: "Github (TP-Lab)",
                            devCenter: "Центр разработки",
                            developersDesc: "Документация для разработчиков TokenPocket.",
                            subToken: "Отправить токен",
                            subTokenDesc: "Отправьте свой токен и NFT.",
                            subDApp: "Отправить DApp",
                            subDAppDesc: "Отправьте ваше DApp, и оно будет отображено после аудита.",
                            subNFT: "Отправить NFT",
                            subNFTDesc: "Отправьте ваши NFT и произведения искусства.",
                            subChain: "Отправить цепочку",
                            subChainDesc: "Отправьте вашу блокчейн.",
                            bugBounty: "Bug Bounty",
                            tools: "Инструменты",
                            build: "Разработка",
                            learn: "Учиться",
                            explorer: "Проводник",
                            darkMode: "Темный режим",
                            company: "Компания",
                            about: "О",
                            careers: "Карьера",
                            pressKit: "Бренд-кит",
                            swagShop: "Магазин сувениров",
                            support: "Поддержка",
                            helpCenter: "Центр помощи",
                            helpCenterDesc: "Ваши ресурсы для получения ответов и помощи.",
                            contactUs: "Свяжитесь с нами",
                            contactUsDesc: "Делитесь своими предложениями и задавайте любые вопросы.",
                            forum: "Форум",
                            forumDesc: "Наслаждайтесь беседами с членами сообщества.",
                            legal: "Юридический",
                            privacyPolicy: "Политика конфиденциальности",
                            terms: "Условия использования",
                            brandKit: "Брендовый комплект",
                            toHome: "Дом",
                            defiWallet: "Кошелек DeFi",
                            ETHWallet: "Кошелек Эфириума",
                            ethWallet: "ETH-кошелек"
                        }
                    },
                    HOME: {
                        download: "Скачать",
                        downloadNow: "Скачать сейчас",
                        HEADER: {
                            title: "Ваш безопасный криптокошелек для изучения блокчейна",
                            desc_1: "Легко и безопасно покупать, хранить, отправлять, обменивать токены и собирать NFT. Нам доверяют более 30 миллионов пользователей из более чем 200 стран и регионов."
                        },
                        INTRODUCTION: {
                            title: "TokenPocket доверяют пользователи со всего мира",
                            desc_1: "Мы предоставляем безопасный и простой сервис криптовалютного кошелька в более чем 200 странах и регионах по всему миру",
                            desc_2: "Обслуживание пользователей",
                            desc_3: "Ежедневные транзакции",
                            desc_4: "Поддерживаемые страны и регионы",
                            desc_5: "Основано"
                        },
                        SECURITY: {
                            title: "Безопасность, какой она должна быть",
                            desc_1: "TokenPocket генерирует и хранит ключи и пароли только на вашем устройстве, только вы можете получить доступ к своей учетной записи и активам.",
                            desc_2: "TokenPocket также разрабатывает аппаратный холодный кошелек и функцию кошелька с несколькими подписями для повышения безопасности по мере необходимости.",
                            desc_3: "Поддержка BTC, ETH, BSC, TRON, Aptos, Polygon, Solana, Cosmos, Polkadot, EOS, IOST и т. д."
                        },
                        EXCHANGE: {
                            title: "Легкий обмен и транзакции",
                            desc_1: "Вы можете торговать своей криптовалютой в любое время и в любом месте в TokenPocket.",
                            desc_2: "Покупайте криптовалюту с помощью кредитных карт. С легкостью храните, отправляйте, пересекайте цепочки и обменивайте.",
                            desc_3: "Swap",
                            desc_4: "Мгновенно и легко",
                            desc_5: "Bridge",
                            desc_6: "Среди разных цепочек",
                            desc_7: "Купить криптовалюту",
                            desc_8: "Через 5 минут",
                            desc_9: "TP Card",
                            desc_10: "Оплата криптовалютой"
                        },
                        DAPPSTORE: {
                            title: "Магазин децентрализованных приложений",
                            desc_1: "Вы можете найти свои любимые децентрализованные приложения, открыть для себя последние и самые популярные и использовать их, не выходя из кошелька.",
                            desc_2: "Браузер DApp интегрирован, вы всегда можете получить доступ к DApps по своим ссылкам.",
                            desc_3: "DeFi",
                            desc_4: "NFT",
                            desc_5: "DApp",
                            desc_6: "Supported"
                        },
                        COMMUNITY: {
                            title: "Сообщество",
                            desc_1: "Мы настаиваем на открытом технологическом сообществе и приглашаем всех разработчиков вместе создавать более удобный, безопасный и богатый блокчейн-мир",
                            desc_2: "TP-Lab",
                            desc_3: "Сообщество",
                            desc_4: "Dev Docs"
                        },
                        DOWNLOAD: {
                            title: "Получить кошелек TokenPocket прямо сейчас!",
                            desc_1: "Ваш безопасный и надежный криптокошелек для изучения блокчейна"
                        },
                        FOLLOW: {
                            title: "Подписывайтесь на нас",
                            desc1: "Сотрудники TokenPocket не будут отправлять вам личные сообщения!",
                            desc2: "Осторожность! Вы входите в сообщество TokenPocket, возможно, кто-то выдает себя за нас, чтобы отправлять вам личные сообщения! Имейте в виду, что любой, кто отправляет личные сообщения, может быть мошенником! Мы никогда не свяжемся с вами первыми!",
                            desc3: "Понятно, вводите"
                        },
                        EXTENSIONMODAL: {
                            title: "Расширение запущено!",
                            desc1: "Ваша криптовалюта, DeFi и GameFi",
                            desc2: "кошелек на компьютере",
                            btnText: "Использовать сейчас",
                            btnTextm: "Копировать ссылку",
                            tips: "Скопируйте ссылку успешно, перейдите на компьютер, чтобы открыть"
                        }
                    },
                    DAPP: {
                        RULES: {
                            platform: "Требуется описание",
                            title: "Требуется имя децентрализованного приложения",
                            address: "Требуется контракт DApp",
                            url: "Требуется веб-сайт DApp",
                            desc: "Требуется описание",
                            icon_url: "Требуется логотип децентрализованного приложения",
                            rakeBackAccount: "Требуется контрактный аккаунт",
                            email: "Требуется электронная почта",
                            others: "Требуется другая контактная информация",
                            category: "Выберите как минимум одну категорию",
                            tp_connect: "Этот элемент не может быть пустым",
                            audit_url: "Требуется URL аудиторского отчета"
                        },
                        title: "Имя децентрализованного приложения",
                        address: "Смарт-контракт",
                        url: "Веб-сайт децентрализованного приложения",
                        desc: "Краткое описание",
                        icon: "Логотип DApp",
                        referral: "Реферал",
                        hasReferral: "Есть ли реферальная система",
                        referralReward: "Распределение реферального вознаграждения",
                        reward_1: "Автоматически распределять по смарт-контракту (Live)",
                        reward_2: "Необходимо запросить его в DApp вручную",
                        hasInviteReward: "Нужно ли приглашающему совершить транзакцию в DApp, чтобы активировать реферальную ссылку",
                        inviteAccount: "Смарт-контракт распределения рефералов",
                        DAppRequirement: "Требование DApp",
                        requirement_1: "DApp должен поддерживать мобильное приложение TokenPocket и расширение TokenPocket.",
                        requirement_2: "Предоставленный веб-сайт доступен и стабилен.",
                        requirement_3: "Смарт-контракты развернуты в основной сети, а конфиденциальная часть должна быть с открытым исходным кодом.",
                        requirement_4: "Конфиденциальные контракты требуют аудиторских отчетов от сторонних агентств безопасности.",
                        requirement_5: "Логика взаимодействия понятна и адаптирована к мобильному интерфейсу.",
                        requirement_6: "Соблюдайте соответствующие законы и постановления без мошенничества и нарушений.",
                        requirement_7: "Если вы нарушите соответствующие законы и постановления, вы добровольно возьмете на себя соответствующую юридическую ответственность.",
                        dappInfo: "Информация о децентрализованном приложении:",
                        necessary: "требуется",
                        language: "Язык DApp",
                        languageDesc: "(Пожалуйста, отправьте отдельно для нескольких языков)",
                        en: "English",
                        zh: "中文简体",
                        zhTW: "中文繁体",
                        descDesc: "Краткое описание проекта в одном предложении, которое появится в подзаголовке DApp",
                        auditInfo: "Информация аудита:",
                        hasAudit: "Проведен ли аудит договора",
                        auditUrl: "URL отчета об аудите",
                        auditUrlExample: "Например: https://auditlink.com",
                        auditReport: "Аудиторский отчет",
                        auditUpload: "Загрузить",
                        contact: "Контактная информация",
                        contactDesc: "Пожалуйста, не забудьте оставить контактную информацию службы поддержки, кроме почтового ящика, иначе она не пройдет проверку",
                        emailAddr: "Электронная почта",
                        emailExample: "Например: build@tokenpocket.pro",
                        others: "Другое",
                        othersExample: "Например: https://t.me/tokenpocket_en",
                        auditOptional: "Заполните хотя бы один пункт информации об аудите",
                        oversize: "превышено допустимое количество символов",
                        select: "Выбрать",
                        tutorial_url: "https://help.tokenpocket.pro/developer-ru/",
                        tutorial: "Просмотреть учебник",
                        noData: "Цепочка не найдена~",
                        categories: "Категории",
                        IS_SUPPORT_TP_CONNECT_1: "Поддерживает ли он подключение TokenPocket?",
                        IS_SUPPORT_TP_CONNECT_2: "(Расширение и мобильное приложение)",
                        IS_SUPPORT_TP_CONNECT_3: "Подключение",
                        dappTokensTitle: "Токены DApp",
                        dappTokens: "Ваш DApp имеет токены?",
                        emailError: "Пожалуйста, введите правильный адрес электронной почты",
                        dappSmartContract: "Смарт-контракт",
                        dappSmartContractDesc: "Добавьте смарт-контракты вашего DApp. Если их больше одного, разделяйте запятыми (,)",
                        addAuditUrl: "Добавить URL отчета об аудите",
                        backToHome: "Вернуться на главную страницу",
                        openSmartContract: "Редактировать смарт-контракт для каждого блокчейна",
                        openTokens: "Редактировать информацию о токенах",
                        tokens: "Добавьте как минимум одну информацию о токене",
                        addToken: "Добавить токен",
                        network: "Сеть токенов",
                        symbol: "Символ токена",
                        contract: "Контракт токена"
                    },
                    DOWNLOAD: {
                        TITLE: "Скачать TokenPocket",
                        TITLE_Android: "TokenPocket для Android",
                        TITLE_IOS: "TokenPocket для iOS",
                        TITLE_Chrome: "TokenPocket для вашего браузера",
                        TEXT: "TokenPocket — это простой и безопасный крипто-кошелек с несколькими цепочками, которому доверяют миллионы",
                        TEXT_Chrome: "Расширение TokenPocket — это крипто-кошелек с несколькими цепочками, поддерживающий все цепочки, совместимые с EVM. Простое и безопасное использование, которому доверяют миллионы.",
                        TEXT_PC: "TokenPocket Desktop — это крупнейший мультиблокчейн-кошелек на основе EOS ETH BOS TRON, мы стремимся предоставить пользователям мощное и безопасное управление цифровыми активами.",
                        scanCode: "Сканировать для загрузки",
                        installTutorial: "Учебник по установке",
                        desc_1: "Скачайте приложение с официального сайта и проверьте его сертификат SSL",
                        desc_2: "Защитите свою фразу восстановления (мнемонику) и закрытый ключ от утечки, никогда не передавайте их другим",
                        desc_3: "Узнайте больше советов по безопасности",
                        verifyText: "Последняя версия APK:",
                        verifyText1: "Как проверить безопасность приложения",
                        verifyText2: "Последняя версия:",
                        verifyText3: "Последняя версия Google Play:",
                        footerTitle: "Производите отличное первое впечатление",
                        footerDesc_1: "Поддержка BTC, ETH, BSC, TRON, Matic, Aptos, Solana, EOS, Polkadot, IOST и т. д.",
                        footerDesc_2: "Многоуровневая защита",
                        footerDesc_3: "Поддерживаются DeFi, DApp, GameFi и NFT",
                        coming_soon: "Coming Soon",
                        desc_tp_wallet: "официально назначена единственным издателем iOS-приложения TokenPocket",
                        tp_wallet_version: "TP Wallet Версия:",
                        token_pocket_version: "Token Pocket Версия:",
                        delisted: "Исключен из списка",
                        checkoutAllVersion: "Check All Versions",
                        apk32Title: "Скачать 32-битный пакет",
                        apk32Desc: "32-битный установочный пакет подходит для устройств с более низкой конфигурацией. Если у вас возникла ситуация, когда DApp не удается правильно связать, вы можете скачать и использовать 32-битный установочный пакет.",
                        download: "Скачать"
                    },
                    TOKEN: {
                        RULES: {
                            network: "Требуется сеть",
                            email: "Требуется электронная почта",
                            address: "Требуется адрес",
                            owner_address: "Требуется адрес владельца",
                            symbol: "Требуется символ",
                            bl_symbol: "Требуется символ BL",
                            total_supply: "Требуется общий запас",
                            decimal: "Требуется десятичный",
                            precision: "Требуется точность",
                            gas: "Требуется ГАЗ",
                            website: "Требуется веб-сайт",
                            website_1: "Official Website is too long",
                            companyName: "Требуется название компании или имя",
                            contact: "Требуется контакт",
                            description: "Project introduction is required",
                            description_1: "Token Introduction is too long",
                            name: "Требуется представление проекта",
                            icon_url: "Требуется логотип"
                        },
                        icon: "Логотип токена",
                        handleText: "Мы обработаем ваш запрос в течение 2 рабочих дней",
                        tokenStandard: "Стандарт токена",
                        requirement_1: "Не отправляйте мошеннические токены или токены-ловушки.",
                        requirement_2: "Не отправляйте один и тот же токен несколько раз.",
                        requirement_3: "Смарт-контракты должны быть развернуты в основной сети.",
                        requirement_4: "Логотип обязателен.",
                        requirement_5: "Если вы нарушаете соответствующие законы и правила, вы добровольно несете соответствующую юридическую ответственность.",
                        addMore: "Добавить еще",
                        placeholder_1: "Пожалуйста, введите...",
                        tokenRequirement: "Требования к токену",
                        information: "Информация о токене",
                        network: "Сеть",
                        name: "Название токена",
                        symbol: "Имя токена",
                        success: "Success",
                        bl_symbol: "BL Symbol",
                        precision: "Точность токена",
                        decimal: "Десятичный токен",
                        totalSupply: "Общее предложение",
                        contract: "Токен-контракт",
                        website: "Официальный сайт",
                        introduction: "Введение токена"
                    },
                    RECRUITING: {
                        title: "План найма TP Man",
                        text: "Присоединяйтесь к сообществу TokenPocket",
                        text1: "Приверженность миру блокчейна и внесите свой вклад",
                        text2: "Вместе мы строим мир Web3.0",
                        joinUs: "Присоединяйтесь к нам",
                        aboutTitle: "О ТП Мэн",
                        aboutText: "TP Man — важная часть сообщества TokenPocket, и мы искренне приглашаем вас присоединиться к нам!",
                        aboutText1: "Вы энтузиаст блокчейна и поддерживаете ценность отрасли.",
                        aboutText2: "Наслаждайтесь удобством кошелька TokenPocket при изучении мира блокчейна.",
                        missionTitle: "Миссия TP Man",
                        missionText: "Помогите TokenPocket обслуживать больше пользователей блокчейна по всему миру. Мы надеемся, что вы соответствуете двум из следующих требований, чтобы подать заявку",
                        missionText1: "Расширяйте и продвигайте сотрудничество TokenPocket с компаниями или популярными проектами в вашей стране по различным каналам.",
                        missionText2: "Планируйте маркетинговые мероприятия, отвечающие потребностям местных пользователей",
                        missionText3: "Иметь возможность работать с основными социальными сетями, такими как Twitter, Youtube, Telegram и Discord.",
                        missionText4: "Свободное владение английским языком и умение выполнять переводческие работы",
                        missionText5: "TokenPocket планирует обеспечить более широкое использование и техническую поддержку для глобальных пользователей блокчейна, поэтому мы надеемся, что у вас есть определенное понимание рынков блокчейнов не менее чем в одной стране и их пользователей (Индия, США, Турция, Россия, Южная Корея, Вьетнам, Филиппины и др.)",
                        getTitle: "Что вы получите?",
                        getText: "Опыт работы, непосредственно связанный с различными областями индустрии блокчейнов, и вы получите, помимо прочего, возможности общения с проектами DApp, влиятельными лицами и основными СМИ в отрасли..",
                        getText1: "Получайте щедрые вознаграждения за свою работу, такую ​​как перевод твитов, создание видео, работа в сообществе и деловое сотрудничество..",
                        getText2: "Получите самое профессиональное обучение по блокчейну и исследуйте мир Web3.0 вместе с командой.",
                        getText3: "Официальные преимущества TokenPocket, включая TokenPocket Swag и аппаратные кошельки.",
                        processTitle: "Процесс набора",
                        processText: "Отправить резюме",
                        processText1: "проверка резюме",
                        processText2: "Онлайн-интервью ",
                        processText3: "Результаты интервью",
                        processText4: "Добро пожаловать на борт",
                        applyTitle: "Кто может подать заявку",
                        applyText: "Лицом к миру, независимо от страны",
                        applyText1: "Будьте увлечены и любопытны в мире блокчейна",
                        applyText2: "Заполните форму и прикрепите свое резюме, тогда мы свяжемся с вами в ближайшее время",
                        footerTitle: "О TokenPocket",
                        footerText: "над",
                        footerText1_1: "20M",
                        footerText1_2: "глобальные пользователи",
                        footerText2_1: "3.5M",
                        footerText2_2: "ежемесячно активных пользователей",
                        footerText3_1: "200",
                        footerText3_2: "страны и регионы",
                        footerText4: "TokenPocket — ведущий в мире мультичейн-кошелек с самостоятельным хранением.",
                        footerText5: "Вскоре"
                    },
                    ABOUT: {
                        title: "О нас",
                        desc: "TokenPocket — это многосетевой децентрализованный кошелек, предоставляющий пользователям мобильный кошелек, расширение кошелька и аппаратный кошелек. Поддерживаются такие публичные блокчейны, как Bitcoin, Ethereum, BNB Smart Chain, TRON, Aptos, Polygon, Solana, Polkadot, EOS и все совместимые с EVM цепочки. Обслуживает более 30 миллионов пользователей из более чем 200 стран и регионов. Это ведущий в мире криптокошелек, которому доверяют пользователи по всему миру.",
                        philosophy: {
                            title: "Наша философия",
                            desc: "Мы настаиваем на открытом технологическом сообществе и приветствуем всех разработчиков для совместного создания более удобного, безопасного и богатого блокчейн-мира",
                            ambition: "Амбиции",
                            ambition_desc: "Сделать блокчейн доступным повсюду",
                            value: "Ценности",
                            value_desc: "Возвращение данных пользователям, предоставление ценности реальным владельцам",
                            attitude: "Отношение",
                            attitude_desc: "Открытость, взаимное сотрудничество"
                        },
                        milestones: {
                            title: "Основные этапы",
                            desc_2018_4_1: "Основан TokenPocket",
                            desc_2018_8_1: "Инвестирован Huobi, Hofan, Byte Capital",
                            desc_2019_8_1: "Выпущен десктопный кошелек, поддержка TRON",
                            desc_2019_11_1: "Скачивания в Google Play превысили 1 000 000",
                            desc_2020_7_1: "Поддержка HD кошелька",
                            desc_2020_9_1: "Поддержка BSC и трендов DeFi",
                            desc_2020_12_1: "Поддержка стейкинга Eth2.0",
                            desc_2021_3_1: "Инкубирован проект Transit",
                            desc_2021_6_1: "База пользователей превысила 20 000 000",
                            desc_2021_8_1: "Инкубирован аппаратный кошелек KeyPal",
                            desc_2021_11_1: "Ребрендинг, новый логотип и новый бренд.",
                            desc_2022_1_1: "Инкубирован ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://buy.transit.finance/ramp" target="_blank">Transit Buy</a>', ", поддержка глобальных фиатных валют."),
                            desc_2022_5_1: "Приобретен dFox и переименован в TokenPocket Extension",
                            desc_2022_7_1: "Инвестирован ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://debox.pro/" target="_blank">DeBox</a>', ", инструмент управления сообществом на основе DID в Web3."),
                            desc_2022_9_1: "Инвестирован WrapCoin.",
                            desc_2022_12_1: "Поддержка мультиподписи кошельков.",
                            desc_2023_4_1: "Поддержка обновления Ethereum Shapella.",
                            desc_2023_4_2: "Поддержка самостоятельного стейкинга на Stake Vault.",
                            desc_2023_5_1: "Запуск TRON Energy Rental и Energy Subsidy Service, что позволяет сэкономить до 75% сетевых сборов для пользователей.",
                            desc_2023_5_2: "Поддержка экосистемы Bitcoin, протокола Nostr, BRC-20.",
                            desc_2023_8_1: "Инвестирование в протокол LRT ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://www.puffer.fi/" target="_blank">Puffer Finance</a>'),
                            desc_2023_10_1: "".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://card.keypal.pro/" target="_blank">Keypal Card</a>', " продажа зашифрованных безопасных чип-карт."),
                            desc_2023_11_1: "Запуск AA Smart Wallet.",
                            desc_2024_2_1: "Получена лицензия MSB от FinCEN, США.",
                            desc_2024_3_1: "Более 600 000 подписчиков на ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://twitter.com/TokenPocket_TP" target="_blank">Twitter (X).</a>'),
                            desc_2024_5_1: "Сотрудничество с Victory Securities, полнофункциональной брокерской фирмой с лицензией.",
                            desc_2024_5_2: "Офис в HK Cyberport, создание операционного центра для Азиатско-Тихоокеанского региона.",
                            January: "Январь",
                            February: "Февраль",
                            March: "Март",
                            April: "Апрель",
                            May: "Май",
                            June: "Июнь",
                            July: "Июль",
                            August: "Август",
                            September: "Сентябрь",
                            October: "Октябрь",
                            November: "Ноябрь",
                            December: "Декабрь"
                        },
                        contact_us: {
                            title: "Свяжитесь с нами",
                            service: "Обслуживание клиентов",
                            service_desc: "service@tokenpocket.pro",
                            bd: "Бизнес-сотрудничество",
                            bd_desc: "bd@tokenpocket.pro",
                            developers: "Разработчики",
                            developers_desc: "Discord"
                        }
                    },
                    SEO: {
                        title: "TokenPocket - Ваш универсальный цифровой кошелек | Кошелек TP - Кошелек ETH - Кошелек BTC - Кошелек BSC - Кошелек HECO - Кошелек OKExChain - Кошелек Polkadot - Кошелек Kusama - Кошелек DeFi - Кошелек Layer 2 - Кошелек EOS - Кошелек TRX - nostr",
                        description: "TokenPocket — это ведущий в мире кошелек цифровой валюты, поддерживающий общедоступные блокчейны, включая BTC, ETH, BSC, HECO, TRON, OKExChain, Polkadot, Kusama, EOS и Layer 2.",
                        keywords: "TokenPocket, Token Pocket, кошелек TP, кошелек Ethereum, биткойн, EOS, IOST, COSMOS, heco, bsc, layer2, DeFi, кошелек,крипто,блокчейн,web3,NFT,nostr"
                    },
                    DAPPSTORE: {
                        document_title: "DAppStore | TokenPocket",
                        title: "DApp магазин",
                        copy: "Copied successfully",
                        agreement: "Читать и соглашаться с",
                        risk_statement: "Заявление о рисках",
                        no_again: "Больше не подсказывать",
                        collect: "Избранное",
                        no_collect: "Пока нет избранных",
                        data_loading: "Загрузка DApps...",
                        hot: "Тренд",
                        hot_title: "Популярные DApp",
                        hot_desc: "Исследуйте более 100 лучших DApp на общедоступных блокчейнах, включая DeFi, DEX, блокчейн-игры, рынки NFT и многое другое, все в одном месте. DeFi включает децентрализованные биржи (DEX), синтетические активы, платежи, кредитование и другие блокчейн-приложения.",
                        placeholder: "Поиск DApps по названиям или ключевым словам",
                        recent_search: "Последние поисковые запросы",
                        hot_search: "Популярные запросы",
                        search_result: "Результаты",
                        no_search_result: "Записи не найдены",
                        enter: "Вход ",
                        supported_networks: "Поддерживаемые",
                        category: "Категория",
                        all_networks: "Все сети",
                        community_tutorial: "Обучающие материалы",
                        related_tokens: "Связанные токены",
                        more: "больше",
                        moreDApp: "больше",
                        cancel: "отмена"
                    },
                    BRANDKIT: {
                        title: "Скачать комплект",
                        download: "Скачать",
                        desc: "На этой странице вы найдете официальный логотип TokenPocket и палитру цветов, которые помогут вам представить наш бренд в ваших проектах. Мы приглашаем вас использовать эти ресурсы в соответствии с нашими рекомендациями по бренду, чтобы обеспечить последовательное и профессиональное представление TokenPocket.",
                        logoDownload: "Скачайте логотип",
                        logoDownloadDesc: "Скачайте наш логотип сейчас, чтобы гарантировать, что ваши дизайнерские проекты будут поддерживать последовательный и профессиональный имидж. ",
                        logoDownloadDesc_1: "Все файлы высококачественные и подходят для веба, печати и различных приложений, что делает создание впечатляющих визуальных материалов легким.",
                        colorVersion: "Цветная версия",
                        whiteVersion: "Белая версия",
                        brandTrademark: "Торговая марка",
                        brandTrademarkDesc: 'Иконка TokenPocket состоит из заглавных букв "T" и "P";',
                        brandTrademarkDesc_2: 'текстовая часть — это заглавные "TOKEN POCKET";',
                        brandTrademarkDesc_3: "иконка и текст составляют товарный знак бренда TokenPocket.",
                        logo: "Logo",
                        fullVertical: "Полный (вертикальный)",
                        fullHorizontal: "Полный (горизонтальный)",
                        spellingRules: "Правила написания",
                        spellingRulesDesc: '"При обозначении бренда: TOKEN POCKET"',
                        spellingRulesDesc_1: '"При обозначении приложения: TokenPocket"',
                        spellingRulesDesc_2: '"Ошибочные примеры: TOKENPOCKET, Tokenpocket, tokenpocket"',
                        representingBrand: "При обозначении бренда",
                        applicationBrand: "При обозначении приложения",
                        TokenPocketIcon: "Иконка TokenPocket",
                        TokenPocketIconDesc: "Используйте иконку приложения, когда упоминается TokenPocket как приложение; ",
                        TokenPocketIconDesc_1: "используйте социальный аватар в социальных сетях или организациях, таких как Twitter, Facebook, Medium и Telegram.",
                        roundedIcon: "Закругленный значок",
                        squareIcon: "Квадратный значок",
                        socialAvatar: "Аватар для соцсетей",
                        TokenPocketColor: "Цвет TokenPocket",
                        TokenPocketColorDesc: "Брендовый цвет TokenPocket — синий, который символизирует технологичность и доверие интернета. В графиках приложения также используется градиентный цвет.",
                        primary: "Основной",
                        secondary: "Дополнительный цвет",
                        colorSystem: "Система цветов",
                        brandBlue: "Синий брендовый",
                        brandBlack: "Черный брендовый",
                        OffWhite: "Белый с оттенком",
                        palette: "Палитра"
                    }
                },
                es: {
                    COMMON: {
                        EMAIL: "Correo electrónico",
                        YES: "Sí",
                        NO: "No",
                        HAS: "Sí",
                        HAVENT: "No",
                        BLOCKCHAIN: "Blockchain",
                        MULTIPLE_CHOICE: "(Opción)",
                        IS_SUPPORT_TP_CONNECT: "¿Admite la conexión de TokenPocket? (Extensión y aplicación móvil)",
                        SUPPORT_BOTH: "Se aceptan ambos",
                        SUPPORT_EXTENSION: "Sólo la extensión",
                        SUPPORT_MOBILE: "Sólo móvil",
                        SUPPORT_NONE: "Ninguno",
                        blockchainWallet: "Billetera Blockchain",
                        iostWallet: "Billetera IOST",
                        tronWallet: "Billetera TRON",
                        platformInfo: {
                            eos: "EOS",
                            moac: "MOAC",
                            eth: "ETH",
                            jt: "Jingtum ",
                            enu: "ENU",
                            bos: "BOS",
                            iost: "IOST",
                            cosmos: "COSMOS",
                            bnb: "BNB",
                            trx: "TRON",
                            bsc: "BSC",
                            heco: "HECO",
                            okex: "OKExChain",
                            dot: "Polkadot",
                            hsc: "HSC",
                            matic: "Polygon",
                            klaytn: "Klaytn",
                            arb: "Arbitrum One",
                            arbn: "Arbirtum Nova",
                            ftm: "Fantom",
                            etc: "Ethereum Classic",
                            cfx: "Conflux eSpace",
                            solana: "Solana",
                            avax: "AVAX",
                            oe: "Optimistic Ethereum",
                            xdai: "Gnosis Chain",
                            harmony: "Harmony",
                            wax: "WAX",
                            aurora: "Aurora",
                            ksm: "Kusama",
                            mb: "Moonbeam",
                            sbg: "SubGame",
                            kcc: "KCC Mainnet",
                            lat: "PlatON",
                            bttc: "BTTC",
                            gt: "GateChain",
                            halo: "HALO",
                            aptos: "Aptos",
                            fil: "Filecoin FVM",
                            zks: "zkSync Era",
                            eosevm: "EOS EVM",
                            mantle: "Mantle",
                            linea: "Linea",
                            base: "Base",
                            opbnb: "opBNB",
                            polyzk: "Polygon zkEVM",
                            core: "CORE",
                            haqq: "HAQQ",
                            scroll: "Scroll",
                            manta: "Manta",
                            bevm: "BEVM",
                            zkfair: "ZKFair",
                            metis: "Metis",
                            zeta: "Zeta Chain",
                            merlin: "Merlin",
                            blast: "Blast",
                            xlayer: "X Layer",
                            bitlayer: "Bitlayer",
                            kroma: "Kroma"
                        },
                        submit: "Envía",
                        confirm: "Confirmar",
                        save: "Guardar",
                        contactEmail: "Correo electrónico de contacto:",
                        submitSuccess: "Éxito de envío!",
                        submitDAppSuccessDesc: "¡El DApp que envíe será lanzado después de nuestra revisión!",
                        submitTokenSuccessDesc: "¡El token que envíes se lanzará después de nuestra revisión!",
                        backToHome: "Volver a la página principal",
                        searchNetwork: "Buscar nombre del blockchain",
                        example: "Ejemplo",
                        submitTokenInfoAndLogo: "Actualiza el logotipo del token y otra información",
                        toGithubSubmit: "Ve a Github",
                        contact: "Detalles de contacto",
                        contactDesc: "Asegúrese de dejar la información de contacto del servicio al cliente aparte del correo electrónico, de lo contrario no pasará la revisión.",
                        addContactDetail: "Agregar detalle de contrato",
                        urlError: "Por favor, ingrese la URL correcta",
                        eg: "por ejemplo",
                        moreThan: "No más de {count} caracteres",
                        nftType: "Estándar de protocolo del NFT",
                        logoDesc: "Las imágenes que plagien o imiten proyectos existentes, impliquen riesgos de derechos de autor o contengan elementos políticos no serán aprobadas.",
                        logoDesc_2: "Por favor, envíe un logotipo de <strong>400*400px, JPG&PNG</strong>, máximo <strong>5M</strong> de alta calidad para asegurar que su envío sea revisado con éxito.",
                        uploadError: "Por favor, envíe un logotipo de 400*400px, JPG&PNG, máximo 5M.",
                        nextStep: "Siguiente paso",
                        donate: {
                            title: "Por favor, done",
                            desc: 'Por favor, done la cantidad especificada de <strong style="color: var(--color-1)">TPT</strong> al enviar una solicitud.',
                            tutorial: "Tutorial",
                            tutorial_1: 'Red soportada: <strong style="color: var(--color-1)">BSC</strong>.',
                            tutorial_2: 'Token soportado: <strong style="color: var(--color-1)">TPT (</strong><span data-info="info" style="color: #2980FE;cursor: pointer;">Información del Token</span><strong style="color: var(--color-1)">)</strong>. Si envía otro tipo de token, su solicitud no será procesada. <span data-link="link" style="color: #2980FE;cursor: pointer;">Ir a obtener TPT</span>',
                            tutorial_2_mobile: 'Token soportado: <strong style="color: var(--color-1)">TPT</strong>. Si envía otro tipo de token, su solicitud no será procesada.',
                            tutorial_3: '<strong style="color: var(--color-1)">Por favor, no abandone esta página al enviar el token</strong>. Si lo hace, la cantidad puede cambiar, y no podremos confirmar su pago.',
                            tutorial_4: 'Después del pago, pegue el <strong style="color: var(--color-1)">enlace del hash de la transacción</strong> a continuación.',
                            amount: "Cantidad a donar:",
                            blockchain: "Blockchain",
                            receivingAddress: "Dirección de recepción",
                            hash: "Enlace del hash de la transacción",
                            tokenInfo: "Información del token",
                            tokenContract: "Contrato del token"
                        },
                        LAYOUT: {
                            features: "Características",
                            products: "Productos",
                            buyCryptoFooter: "Покупка",
                            mobileWallet: "Billetera móvil",
                            mobileWalletDesc: "Billetera móvil de Crypto y DeFi en blockchain.",
                            hardwareWallet: "Billetera de hardware",
                            hardwareWalletDesc: "Obtén tu KeyPal, para proteger tus activos.",
                            TPCard: "TP Card",
                            TPCardDesc: "Una tarjeta bancaria opera de manera descentralizada.",
                            extensionWallet: "Extensión de billetera",
                            extensionWalletDesc: "Una mejor billetera en tu computadora.",
                            desktop: "Desktop Wallet",
                            fiveDegrees: "5Degrees",
                            versionVerification: "Verificación de autenticidad",
                            versionVerificationDesc: "Verifica tu billetera.",
                            approvalDetector: "Detector de aprobaciones",
                            approvalDetectorDesc: "Ve y desaprueba tus tokens aprobados.",
                            tokenSecurity: "Seguridad de tokens",
                            tokenSecurityDesc: "Verifica si el token es seguro por su dirección de contrato.",
                            keyGenerator: "Generador de claves",
                            keyGeneratorDesc: "Genera claves públicas y privadas aleatoriamente para varias redes.",
                            tokenProfile: "Perfil de token",
                            tokenProfileDesc: "Aprende toda la información sobre el token.",
                            tokenClaim: "Reclamación de tokens",
                            tokenClaimDesc: "Reclama tu airdrop.",
                            easyInscription: "Inscripción fácil",
                            easyInscriptionDesc: "Una herramienta de inscripción segura.",
                            nostrAssetsBatchSender: "NostrAssets BatchSender",
                            nostrAssetsBatchSenderDesc: "Una herramienta de envío masivo para NostrAssets.",
                            BATCH_SENDER: "BatchSender",
                            BATCH_SENDER_DESC: "Envía tokens a múltiples destinatarios a la vez.",
                            trade: "Comercio",
                            swap: "Intercambio",
                            swapDesc: "Opera con los mejores precios.",
                            bridge: "Puente",
                            bridgeDesc: "Cruza activos sin problemas de una cadena a otra.",
                            buyCrypto: "Comprar",
                            buyCryptoDesc: "Compra criptomonedas con tus tarjetas de crédito.",
                            market: "Mercado",
                            marketDesc: "Información en tiempo real para descubrir tokens populares.",
                            information: "Información",
                            blockchainGuide: "Guía de cadena de bloques",
                            tronWallet: "Guía de TRON",
                            iostWallet: "Guía de IOST",
                            tpMan: "TP Man",
                            developers: "Desarrolladores",
                            github: "Github (TP-Lab)",
                            devCenter: "Центр разработки",
                            developersDesc: "Документация для разработчиков TokenPocket.",
                            subToken: "Enviar token",
                            subTokenDesc: "Envía tu token y NFT.",
                            subDApp: "Enviar DApp",
                            subDAppDesc: "Envía tu DApp, y se mostrará después de la auditoría.",
                            subNFT: "Enviar NFT",
                            subNFTDesc: "Envía tu NFT y arte.",
                            subChain: "Enviar cadena",
                            subChainDesc: "Envía tu blockchain.",
                            bugBounty: "Bug Bounty",
                            tools: "Herramientas",
                            build: "Construir",
                            learn: "Aprender",
                            explorer: "Explorador",
                            darkMode: "Modo oscuro",
                            company: "Compañía",
                            about: "Acerca de",
                            careers: "Empleos",
                            pressKit: "Kit de marca",
                            swagShop: "Tienda de artículos de regalo",
                            support: "Soporte",
                            helpCenter: "Centro de ayuda",
                            helpCenterDesc: "Tus recursos para obtener respuestas y asistencia.",
                            contactUs: "Contáctenos",
                            contactUsDesc: "Comparte tus sugerencias y haz cualquier pregunta.",
                            forum: "Foro",
                            forumDesc: "Disfruta de tus conversaciones con los miembros de la comunidad.",
                            legal: "Legal",
                            privacyPolicy: "Política de Privacidad",
                            terms: "Términos de Uso",
                            brandKit: "Kit de marca",
                            toHome: "Página Principal",
                            defiWallet: "Billetera DeFi",
                            ETHWallet: "Ethereum na Wallet",
                            ethWallet: "Billetera ETH"
                        }
                    },
                    HOME: {
                        download: "Descargar",
                        downloadNow: "Descarga ahora",
                        HEADER: {
                            title: "Su billetera cripto segura para explorar la blockchain",
                            desc_1: "Fácil y segura para comprar, almacenar, enviar, intercambiar tokens y recolectar NFT. Con la confianza de más de 30 millones de usuarios de más de 200 países y regiones."
                        },
                        INTRODUCTION: {
                            title: "Los usuarios globales confían en TokenPocket",
                            desc_1: "Brindamos un servicio de billetera cripto, fácil de usar entre más de 200 países y regiones de todo el mundo",
                            desc_2: "Atención al usuario",
                            desc_3: "Transacciones Diarias",
                            desc_4: "Países y regiones que apoyan",
                            desc_5: "Fundado"
                        },
                        SECURITY: {
                            title: "Seguridad como debe ser",
                            desc_1: "TokenPocket genera y almacena claves y contraseñas solo en su dispositivo, solo usted puede acceder a su cuenta y activos.",
                            desc_2: "TokenPocket también desarrolla una billetera hardware y una función de billetera de múltiples firmas, para mejorar la seguridad según lo necesite.",
                            desc_3: "Compatible con BTC, ETH, BSC, TRON, Aptos, Polygon, Solana, Cosmos, Polkadot, EOS, IOST, etc."
                        },
                        EXCHANGE: {
                            title: "Intercambia y realiza transacciones fácilmente",
                            desc_1: "Puede intercambiar tus criptos en cualquier momento y en cualquier lugar dentro de TokenPocket.",
                            desc_2: "Compre criptomonedas con tarjetas de crédito. Almacene, envíe, intercambie entre diferentes cadenas con facilidad.",
                            desc_3: "Swap",
                            desc_4: "Al instante y fácilmente",
                            desc_5: "Bridge",
                            desc_6: "Entre diferentes cadenas",
                            desc_7: "Compra cripto",
                            desc_8: "En 5 minutos",
                            desc_9: "TP Card",
                            desc_10: "Paga con criptomonedas"
                        },
                        DAPPSTORE: {
                            title: "Una tienda DApp",
                            desc_1: "Puede encontrar sus aplicaciones descentralizadas favoritas, descubrir las más populares y recientes y como si fuera poco sin salir de la billetera.",
                            desc_2: "Navegador DApp integrado, siempre puede acceder a las DApps con sus enlaces.",
                            desc_3: "DeFi",
                            desc_4: "NFT",
                            desc_5: "DApp",
                            desc_6: "Soportado"
                        },
                        COMMUNITY: {
                            title: "Comunidad",
                            desc_1: "Insistimos en una comunidad de tecnología abierta (Open Source), y damos la bienvenida a todos los desarrolladores para que construyamos entre todos un mundo blockchain más conveniente, seguro y próspero",
                            desc_2: "TP-Lab",
                            desc_3: "Comunidad",
                            desc_4: "Dev Docs"
                        },
                        DOWNLOAD: {
                            title: "¡Obten la billetera TokenPocket ahora!",
                            desc_1: "Su billetera cripto segura y confiable para explorar la blockchain"
                        },
                        FOLLOW: {
                            title: "Síganos",
                            desc1: "TokenPocket Staffs no te enviará mensajes privados!",
                            desc2: "¡Precaución! Está ingresando a la comunidad TokenPocket, ¡podría haber alguien haciéndose pasar por nosotros para enviarle mensajes privados! ¡Tenga en cuenta que cualquier persona que envíe mensajes privados podría ser un estafador! ¡Nunca te contactaremos primero!",
                            desc3: "Entendido, entra"
                        },
                        EXTENSIONMODAL: {
                            title: "¡La extensión ya está disponible!",
                            desc1: "Tus Cripto y DeFi y GameFi",
                            desc2: "billetera en la computadora",
                            btnText: "Úsalo ahora",
                            btnTextm: "Copiar el enlace",
                            tips: "Copie el enlace, vaya a la computadora para abrir"
                        }
                    },
                    DAPP: {
                        RULES: {
                            platform: "La red es requerida",
                            title: "Se requiere el nombre de la DApp",
                            address: "Se requiere contrato de la DApp",
                            url: "Se requiere el sitio web de la DApp",
                            desc: "Se requiere Desc+",
                            icon_url: "Se requiere el logotipo de la DApp",
                            rakeBackAccount: "Se requiere cuenta del contrato",
                            email: "Se requiere de un correo electrónico",
                            others: "Se requiere otra información de contacto",
                            category: "Seleccione al menos una categoría",
                            tp_connect: "Este elemento no puede estar en vacío",
                            audit_url: "Se requiere la URL del informe de auditoría."
                        },
                        title: "Nombre de la DApp",
                        address: "Contrato inteligente",
                        url: "Sitio web de la DApp",
                        desc: "Breve descripción",
                        icon: "Logotipo de la DApp",
                        referral: "Referidol",
                        hasReferral: "Tiene un programa de referidos?",
                        referralReward: "Distribución de la recompensa por referidos",
                        reward_1: "Distribuir automáticamente por el contrato inteligente (Live)",
                        reward_2: "Necesita reclamarlo en la DApp manualmente",
                        hasInviteReward: "¿El remitente necesita hacer una transacción en la DApp para activar el enlace de referencia?",
                        inviteAccount: "El contrato inteligente de distribución por referidos",
                        DAppRequirement: "Requisito de la DApp",
                        requirement_1: "La DApp debe ser compatible tanto con la versión móvil como la extensión de TokenPocket.",
                        requirement_2: "El sitio web proporcionado es accesible y estable.",
                        requirement_3: "Los contratos inteligentes se implementaron en la red principal y la parte sensible debe ser de código abierto.",
                        requirement_4: "Los contratos sensibles requieren informes de auditoría por parte de agencias de seguridad certificadas por terceros.",
                        requirement_5: "La lógica de interacción es clara y se ha adaptado a la interfaz de usuario móvil.",
                        requirement_6: "Obedecer las leyes y reglamentos pertinentes, sin hechos de fraude ni infracción.",
                        requirement_7: "Si viola las leyes y regulaciones pertinentes, asumirá voluntariamente las responsabilidades legales correspondientes.",
                        dappInfo: "Información de la aplicación DApp:",
                        necessary: "requerido",
                        language: "Idioma de la DApp",
                        languageDesc: "(Envíe por separado para varios idiomas)",
                        en: "English",
                        zh: "中文简体",
                        zhTW: "中文繁体",
                        descDesc: "Una breve descripción del proyecto en una frase, que aparecerá en el subtítulo de la DApp",
                        auditInfo: "Información de auditoría:",
                        hasAudit: "Si se ha realizado la auditoría del contrato.",
                        auditUrl: "URL del informe de auditoría",
                        auditUrlExample: "Por ejemplo: https://auditlink.com",
                        auditReport: "Informe de auditoría",
                        auditUpload: "Subir",
                        contact: "Detalles de contacto",
                        contactDesc: "Asegúrese de dejar la información de contacto del Servicio de Atención al Cliente que no sea el buzón, de lo contrario no pasará la revisión.",
                        emailAddr: "Correo electrónico",
                        emailExample: "Por ejemplo: build@tokenpocket.pro",
                        others: "Otro",
                        othersExample: "Por ejemplo: https://t.me/tokenpocket_en",
                        auditOptional: "Complete al menos un elemento de la información de auditoría",
                        oversize: " ha excedido los caracteres permitidos",
                        select: "Seleccione",
                        tutorial_url: "https://help.tokenpocket.pro/developer-en/",
                        tutorial: "Ver tutorial",
                        noData: "Cadena no encontrada~",
                        categories: "Categorías",
                        IS_SUPPORT_TP_CONNECT_1: "¿Admite la conexión de TokenPocket?",
                        IS_SUPPORT_TP_CONNECT_2: "(Extensión y aplicación móvil)",
                        IS_SUPPORT_TP_CONNECT_3: "Conexión de TokenPocket",
                        dappTokensTitle: "Tokens de DApp",
                        dappTokens: "¿Su DApp tiene tokens?",
                        emailError: "Por favor, ingrese la dirección de correo electrónico correcta",
                        dappSmartContract: "Contrato inteligente",
                        dappSmartContractDesc: "Agregue los contratos inteligentes de su DApp. Si hay más de uno, sepárelos por coma(,)",
                        addAuditUrl: "Agregar URL del informe de auditoría",
                        backToHome: "Volver a la página principal",
                        openSmartContract: "Editar el contrato inteligente para cada blockchain",
                        openTokens: "Editar la información del token",
                        tokens: "Agregar al menos una información del token",
                        addToken: "Agregar token",
                        network: "Red de tokens",
                        symbol: "Símbolo del token",
                        contract: "Contrato del token"
                    },
                    DOWNLOAD: {
                        TITLE: "Descargar TokenPocket",
                        TITLE_Android: "TokenPocket para Android",
                        TITLE_IOS: "TokenPocket para iOS",
                        TITLE_Chrome: "TokenPocket para tu navegador",
                        TEXT: "TokenPocket es una billetera criptográfica multi-cadena, fácil y segura de usar en la que confían millones de personas.",
                        TEXT_Chrome: "TokenPocket Extension es una billetera criptográfica multi-cadena, es compatible con todas las cadenas EVM. Fácil y segura de usar en el que confían millones de personas.",
                        TEXT_PC: "TokenPocket Desktop es la billetera multi-blockchain más grande basada en BTC ETH EOS ETH BOS TRON , nos esforzamos por brindarle a los usuarios una gestión, sólida y segura de sus activos digitales ",
                        scanCode: "Escanear para descargar",
                        installTutorial: "Tutorial de instalación",
                        desc_1: "Descarga la aplicación desde el sitio web oficial y verifique su certificación SSL",
                        desc_2: "Proteja su Frase de Recuperación (mnemotécnica) y Clave Privada de robos, nunca las comparta con otros",
                        desc_3: "Más información sobre consejos de seguridad",
                        verifyText: "Última versión de APK:",
                        verifyText1: "Cómo verificar la seguridad de una aplicación",
                        verifyText2: "Última versión:",
                        verifyText3: "Última versión de Google Play:",
                        footerDesc_1: "Compatible con BTC, ETH, BSC, TRON, Matic, Aptos, Solana, EOS, Polkadot, IOST, etc.",
                        footerDesc_2: "Protecciones de seguridad multicapa",
                        footerDesc_3: "Compatible con DeFi, DApp, GameFi y NFT",
                        coming_soon: "Coming Soon",
                        desc_tp_wallet: "ha sido designado oficialmente como el único editor de aplicaciones para iOS de TokenPocket",
                        tp_wallet_version: "TP Wallet Versión:",
                        token_pocket_version: "Token Pocket Versión:",
                        delisted: "Excluido",
                        checkoutAllVersion: "Check All Versions",
                        apk32Title: "Descargar paquete de 32 bits",
                        apk32Desc: "El paquete de instalación de 32 bits es adecuado para dispositivos con configuraciones más bajas. Si te encuentras en una situación en la que la DApp no puede vincularse correctamente, puedes descargar y usar el paquete de instalación de 32 bits.",
                        download: "Descargar"
                    },
                    TOKEN: {
                        RULES: {
                            network: "La red es requerida",
                            email: "Se requiere de un correo electrónico",
                            address: "Se requiere de una dirección válida",
                            owner_address: "Se requiere la dirección del propietario",
                            symbol: "Se requiere del símbolo",
                            bl_symbol: "Se requiere el símbolo BL",
                            total_supply: "Se requiere de la emisión total",
                            decimal: "Se requiere el Decimal",
                            precision: "Se requiere de la Precisión",
                            gas: "Se requiere GAS",
                            website: "Se requiere sitio web",
                            website_1: "Official Website is too long",
                            companyName: "Se requiere el nombre de la empresa o del responsable",
                            contact: "Se requiere Información de Contacto",
                            description: "Project introduction is required",
                            description_1: "Token Introduction is too long",
                            name: "Se requiere presentación del proyecto",
                            icon_url: "Se requiere del logotipo"
                        },
                        icon: "Logotipo de token",
                        handleText: "Procesaremos su solicitud en 2 días hábiles",
                        tokenStandard: "Estándar del token",
                        requirement_1: "No envíe un token fraudulento o de estafa.",
                        requirement_2: "No envíe el mismo token varias veces.",
                        requirement_3: "Los contratos inteligentes deben estar desplegados en la red principal.",
                        requirement_4: "El logotipo es necesario.",
                        requirement_5: "Si violas las leyes y regulaciones pertinentes, asumirás voluntariamente las responsabilidades legales correspondientes.",
                        addMore: "Agregar más",
                        placeholder_1: "Por favor, ingrese...",
                        tokenRequirement: "Requisitos del token",
                        information: "Información del token",
                        network: "Red",
                        name: "Nombre del token",
                        symbol: "Nombre del Token",
                        success: "Success",
                        bl_symbol: "Símbolo BL",
                        precision: "Precision del Token",
                        decimal: "Token Decimal",
                        totalSupply: "Emisión total",
                        contract: "Contrato del Token",
                        website: "Sitio web oficial",
                        introduction: "Presentación del token"
                    },
                    RECRUITING: {
                        title: " Programa de Reclutamiento de TP Man",
                        text: "Únase a la comunidad de TokenPocket",
                        text1: "Intégrate en el mundo blockchain y aporta tu grano de arena",
                        text2: "Construimos juntos un mundo Web3.0",
                        joinUs: "Únete a nosotros",
                        aboutTitle: "Acerca de TP Man",
                        aboutText: "TP Man es una parte importante de la comunidad TokenPocket, e invitamos cordialmente a unirse a nosotros!",
                        aboutText1: "Eres un entusiasta de blockchain y respaldas el valor de la industria.",
                        aboutText2: "Disfrute de la comodidad que le brinda la billetera TokenPocket cuando explore el mundo de la cadena de bloques.",
                        missionTitle: "La Misión del TP Man",
                        missionText: "Contribuya junto a TokenPocket a proporcionar a más usuarios, los servicios de la blockchain en todo el mundo. Esperamos que cumpla con dos de los siguientes requisitos para aplicar.",
                        missionText1: "Expandir y promover la cooperación de TokenPocket con empresas o proyectos tendencia en su país, a través de varios canales",
                        missionText2: "Planificar actividades de marketing que satisfagan las necesidades de los usuarios locales.",
                        missionText3: "Tener la capacidad de manejar las principales redes sociales como Twitter, Youtube, Telegram y Discord",
                        missionText4: "Fluidez en inglés y ser capaz de completar el trabajo de traducción.",
                        missionText5: "TokenPocket planea brindar más usos y soporte técnico para los usuarios globales de la blockchain, por lo que esperamos que tenga una cierta comprensión de los mercados de blockchain de no menos de un país y así como también de sus usuarios (India, Estados Unidos, Turquía, Rusia, Corea del Sur, Vietnam, Filipinas, etc.)",
                        getTitle: "¿Qué obtendrás?",
                        getText: "Una experiencia laboral directamente relacionada con varios campos de la industria Blockchain, y obtendrá oportunidades de interacción con proyectos DApp, Influencers y los principales medios de comunicación de la industria.",
                        getText1: "Obtén jugosas recompensas de acuerdo a su trabajo, como la traducción de tweets, la creación de videos, administración de los canales de información y cooperación empresarial.",
                        getText2: "Obtén la mejor capacitación profesional en temas de blockchain y explore junto al equipo, el mundo Web3.0.",
                        getText3: "Beneficios oficiales de TokenPocket, incluidos material de regalo de TokenPocket y billeteras de hardware.",
                        processTitle: "Proceso de reclutamiento",
                        processText: "Enviar CV",
                        processText1: "Selección rigurosa de CV",
                        processText2: "Entrevista en línea",
                        processText3: "Resultados de la entrevista",
                        processText4: "Bienvenido a bordo",
                        applyTitle: "¿Quién puede aplicar?",
                        applyText: "Enfréntate al mundo, sin importar el país",
                        applyText1: "Ser entusiasta y curioso sobre el mundo de la cadena de bloques",
                        applyText2: "Rellena el formulario y adjunta tu currículum, luego nos pondremos en contacto contigo lo antes posible",
                        footerTitle: "Acerca de TokenPocket",
                        footerText: "sobre",
                        footerText1_1: "20M",
                        footerText1_2: "usuarios globales",
                        footerText2_1: "3.5M",
                        footerText2_2: "usuarios activos mensuales",
                        footerText3_1: "200",
                        footerText3_2: "países y regiones",
                        footerText4: "TokenPocket es la billetera auto custodiada y multi-cadenas líder en el mundo",
                        footerText5: "Próximamente"
                    },
                    ABOUT: {
                        title: "Acerca de nosotros",
                        desc: "TokenPocket es una billetera descentralizada multi cadenas que proporciona a los usuarios una billetera móvil, una billetera de extensión y una billetera de hardware; admite cadenas públicas, incluidas Bitcoin, Ethereum, BNB Smart Chain, TRON, Polygon, Solana, Aptos, Polkadot, EOS y todas las cadenas compatibles con EVM. Sirviendo a más de 30 millones de usuarios de más de 200 países y regiones. Es una billetera cripto líder en la que los usuarios confían en todo el mundo.",
                        philosophy: {
                            title: "Nuestra Filosofía",
                            desc: "Insistimos en una comunidad de tecnología abierta y damos la bienvenida a todos los desarrolladores para que construyamos juntos un mundo blockchain más conveniente, seguro y próspero.",
                            ambition: "Visión",
                            ambition_desc: "Hacer que la cadena de bloques tenga presencia en todas partes",
                            value: "Valor",
                            value_desc: "Que la data regrese a los usuarios y que ésta pertenezca a los verdaderos propietarios",
                            attitude: "Actitud",
                            attitude_desc: "Colaboración mutua y de mente abierta."
                        },
                        milestones: {
                            title: "Hitos",
                            desc_2018_4_1: "Fundación de TokenPocket.",
                            desc_2018_8_1: "Inversiones por parte de Huobi, Hofan, Byte Capital.",
                            desc_2019_8_1: "Lanzamiento de la cartera de escritorio compatible con TRON.",
                            desc_2019_11_1: "Las descargas de Google Play superan los más de 1.000.000.",
                            desc_2020_7_1: "Cartera HD compatible.",
                            desc_2020_9_1: "Admite las últimas tendencias BSC y DeFi.",
                            desc_2020_12_1: "Apoyo al Staking de Eth2.0.",
                            desc_2021_3_1: "Transit Incubado.",
                            desc_2021_6_1: "El número de usuarios superó los 20.000.000.",
                            desc_2021_8_1: "Billetera de hardware KeyPal Incubado.",
                            desc_2021_11_1: "Actualización de la marca (nuevo logo, nueva marca)",
                            desc_2022_1_1: "Incubated ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://buy.transit.finance/ramp" target="_blank">Transit Buy</a>', ", global fiat supported."),
                            desc_2022_5_1: "Lanzamiento de la incubadora de la marca TansitBuy, apoyo a monedas fiduciarias globales",
                            desc_2022_7_1: "Inversión en la herramienta de gestión de comunidades Web3 basada en DID ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://debox.pro/" target="_blank">DeBox</a>'),
                            desc_2022_9_1: "Inversión en el protocolo DID programable WrapCoin",
                            desc_2022_12_1: "Soporte para monedero multifirma",
                            desc_2023_4_1: "Soporte para la actualización Ethereum Shapella.",
                            desc_2023_4_2: "Soporte para staking autogestionado.",
                            desc_2023_5_1: "Lanzamiento de alquiler de energía Tron, reducción de los costos de red del usuario hasta en un 75%",
                            desc_2023_5_2: "Soporte para el ecosistema Bitcoin, Nostr, BRC20.",
                            desc_2023_8_1: "Inversión en el protocolo LRT ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://www.puffer.fi/" target="_blank">Puffer Finance</a>'),
                            desc_2023_10_1: "Lanzamiento de la tarjeta de seguridad criptográfica ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://card.keypal.pro/" target="_blank">Keypal Card</a>'),
                            desc_2023_11_1: "Lanzamiento del monedero inteligente AA",
                            desc_2024_2_1: "Obtención de la licencia MSB otorgada por FinCEN de EE.UU.",
                            desc_2024_3_1: "Superación de los 600000 seguidores en ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://twitter.com/TokenPocket_TP" target="_blank">Twitter (X)</a>', "."),
                            desc_2024_5_1: "Cooperación profunda con la empresa de licencias integrales Shengli Securities.",
                            desc_2024_5_2: "instalación oficial en Cyberport de Hong Kong y establecimiento de centro de operaciones en Asia-Pacífico.",
                            January: "Enero",
                            February: "Febrero",
                            March: "Marzo",
                            April: "Abril",
                            May: "Mayo",
                            June: "Junio",
                            July: "Julio",
                            August: "Agostot",
                            September: "Septiembre",
                            October: "Octubre",
                            November: "Noviembre",
                            December: "Diciembre"
                        },
                        contact_us: {
                            title: "Contáctanos para:",
                            service: "Atención al Cliente",
                            service_desc: "service@tokenpocket.pro",
                            bd: "Colaboraciones Empresariales y Comerciales",
                            bd_desc: "bd@tokenpocket.pro",
                            developers: "Desarrolladores",
                            developers_desc: "Discord"
                        }
                    },
                    SEO: {
                        title: "TokenPocket - Tu billetera digital universal | Cartera TP - Cartera ETH - Cartera BTC - Cartera BSC - Cartera HECO - Cartera OKExChain - Cartera Polkadot - Cartera Kusama - Cartera DeFi - Cartera Layer 2 - Cartera EOS - Cartera TRX - nostr",
                        description: "TokenPocket es una billetera de moneda digital líder en el mundo que admite cadenas de bloques públicas, incluidas BTC, ETH, BSC, HECO, TRON, OKExChain, Polkadot, Kusama, EOS y Layer 2.",
                        keywords: "TokenPocket, Token Pocket, billetera TP, billetera Ethereum, Bitcoin, EOS, IOST, COSMOS, heco, bsc, capa 2, DeFi, billetera,cripto, cadena de bloques,web3,NFT,nostr"
                    },
                    DAPPSTORE: {
                        document_title: "DAppStore | TokenPocket",
                        title: "Tienda de DApp",
                        copy: "Copied successfully",
                        agreement: "Leer y aceptar",
                        risk_statement: "Declaración de riesgos",
                        no_again: "No más indicaciones",
                        collect: "Favoritos",
                        no_collect: "Sin favoritos aún",
                        data_loading: "Cargando DApps...",
                        hot: "Tendencia",
                        hot_title: "DApp populares",
                        hot_desc: "Explora más de 100 mejores DApp en blockchains públicos, incluyendo DeFi, DEX, juegos blockchain, mercados NFT y más, todo en un solo lugar. DeFi incluye intercambios descentralizados (DEX), activos sintéticos, pagos, préstamos y otras aplicaciones basadas en blockchain.",
                        placeholder: "Buscar DApps por nombres o palabras clave",
                        recent_search: "Búsquedas recientes",
                        hot_search: "Búsquedas populares",
                        search_result: "Resultados",
                        no_search_result: "No se encontraron registros",
                        enter: "Ingresar ",
                        supported_networks: "Compatible",
                        category: "Categoría",
                        all_networks: "Todas las redes",
                        community_tutorial: "Tutoriales",
                        related_tokens: "Tokens relacionados",
                        more: "Más",
                        moreDApp: "Más",
                        cancel: "Cancelar"
                    },
                    BRANDKIT: {
                        title: "Descargar kit",
                        download: "Descargar",
                        desc: "En esta página encontrará el logotipo oficial de TokenPocket y la paleta de colores para ayudarle a mostrar nuestra marca en sus proyectos. Lo invitamos a explorar y utilizar estos recursos de acuerdo con nuestras directrices de marca para garantizar una representación coherente y profesional de TokenPocket.",
                        logoDownload: "Descargar el logo",
                        logoDownloadDesc: "Descarga ahora nuestro logo de marca para asegurar que tus proyectos de diseño mantengan una imagen coherente y profesional. ",
                        logoDownloadDesc_1: "Todos los archivos son de alta calidad y adecuados para la web, impresión y diversas aplicaciones, lo que facilita crear materiales visuales impresionantes.",
                        colorVersion: "Versión en color",
                        whiteVersion: "Versión blanca",
                        brandTrademark: "Marca registrada",
                        brandTrademarkDesc: 'El icono de TokenPocket está compuesto por las letras mayúsculas "T" y "P";',
                        brandTrademarkDesc_2: 'la parte de texto es "TOKEN POCKET" en mayúsculas;',
                        brandTrademarkDesc_3: "el icono y el texto constituyen la marca registrada de TokenPocket.",
                        logo: "Logo",
                        fullVertical: "Completo (Vertical)",
                        fullHorizontal: "Completo (Horizontal)",
                        spellingRules: "Reglas de ortografía",
                        spellingRulesDesc: '"Cuando se represente la marca: TOKEN POCKET"',
                        spellingRulesDesc_1: '"Cuando se represente una aplicación: TokenPocket"',
                        spellingRulesDesc_2: '"Demostración de error: TOKENPOCKET, Tokenpocket, tokenpocket"',
                        representingBrand: "Cuando se represente la marca",
                        applicationBrand: "Cuando se represente una aplicación",
                        TokenPocketIcon: "Icono de TokenPocket",
                        TokenPocketIconDesc: "Usa el icono de la aplicación cuando se mencione TokenPocket como una aplicación; ",
                        TokenPocketIconDesc_1: "usa el avatar social en redes sociales u organizaciones como Twitter, Facebook, Medium y Telegram.",
                        roundedIcon: "Icono redondeado",
                        squareIcon: "Icono cuadrado",
                        socialAvatar: "Avatar social",
                        TokenPocketColor: "Color de TokenPocket",
                        TokenPocketColorDesc: "El color de la marca de TokenPocket es azul, lo que simboliza la sensación tecnológica y la confianza de Internet. También se utilizan colores degradados en los gráficos de la aplicación.",
                        primary: "Principal",
                        secondary: "Color secundario",
                        colorSystem: "Sistema de colores",
                        brandBlue: "Azul de marca",
                        brandBlack: "Negro de marca",
                        OffWhite: "Blanco roto",
                        palette: "Paleta"
                    }
                },
                hi: {
                    COMMON: {
                        EMAIL: "Email",
                        YES: "हाँ",
                        NO: "नहीं",
                        HAS: "हाँ",
                        HAVENT: "नहीं",
                        BLOCKCHAIN: "ब्लॉकचेन",
                        MULTIPLE_CHOICE: "(बहुविकल्पी)",
                        IS_SUPPORT_TP_CONNECT: "क्या यह टोकनपॉकेट कनेक्शन का समर्थन करता है? (एक्सटेंशन और मोबाइल ऐप)",
                        SUPPORT_BOTH: "दोनों समर्थित हैं",
                        SUPPORT_EXTENSION: "केवल एक्सटेंशन",
                        SUPPORT_MOBILE: "केवल मोबाइल",
                        SUPPORT_NONE: "कोई भी नहीं",
                        blockchainWallet: "ब्लॉकचेन वॉलेट",
                        iostWallet: "IOST वॉलेट",
                        tronWallet: "TRON वॉलेट",
                        platformInfo: {
                            eos: "EOS",
                            moac: "MOAC",
                            eth: "ETH",
                            jt: "Jingtum ",
                            enu: "ENU",
                            bos: "BOS",
                            iost: "IOST",
                            cosmos: "COSMOS",
                            bnb: "BNB",
                            trx: "TRON",
                            bsc: "BSC",
                            heco: "HECO",
                            okex: "OKExChain",
                            dot: "Polkadot",
                            hsc: "HSC",
                            matic: "Polygon",
                            klaytn: "Klaytn",
                            arb: "Arbitrum One",
                            arbn: "Arbirtum Nova",
                            ftm: "Fantom",
                            etc: "Ethereum Classic",
                            cfx: "Conflux eSpace",
                            solana: "Solana",
                            avax: "AVAX",
                            oe: "Optimistic Ethereum",
                            xdai: "Gnosis Chain",
                            harmony: "Harmony",
                            wax: "WAX",
                            aurora: "Aurora",
                            ksm: "Kusama",
                            mb: "Moonbeam",
                            sbg: "SubGame",
                            kcc: "KCC Mainnet",
                            lat: "PlatON",
                            bttc: "BTTC",
                            gt: "GateChain",
                            halo: "HALO",
                            aptos: "Aptos",
                            fil: "Filecoin FVM",
                            zks: "zkSync Era",
                            eosevm: "EOS EVM",
                            mantle: "Mantle",
                            linea: "Linea",
                            base: "Base",
                            opbnb: "opBNB",
                            polyzk: "Polygon zkEVM",
                            core: "CORE",
                            haqq: "HAQQ",
                            scroll: "Scroll",
                            manta: "Manta",
                            bevm: "BEVM",
                            zkfair: "ZKFair",
                            metis: "Metis",
                            zeta: "Zeta Chain",
                            merlin: "Merlin",
                            blast: "Blast",
                            xlayer: "X Layer",
                            bitlayer: "Bitlayer",
                            kroma: "Kroma"
                        },
                        submit: "प्रस्तुत करना",
                        confirm: "पुष्टि करना",
                        save: "सेव करें",
                        contactEmail: "संपर्क ईमेल:",
                        submitSuccess: "सबमिट करना सफल होना",
                        submitDAppSuccessDesc: "आपके द्वारा सबमिट किया गया DApp हमारी समीक्षा के बाद लॉन्च किया जाएगा!",
                        submitTokenSuccessDesc: "आपके द्वारा सबमिट किया गया टोकन हमारी समीक्षा के बाद लॉन्च किया जाएगा!",
                        backToHome: "मुखपृष्ठ पर वापस",
                        searchNetwork: "ब्लॉकचेन नाम खोजें",
                        example: "उदाहरण",
                        submitTokenInfoAndLogo: "टोकन लोगो और अन्य जानकारी अपडेट करें",
                        toGithubSubmit: "Github पर जाएं",
                        contact: "सम्पर्क करने का विवरण",
                        contactDesc: "* कृपया मेलबॉक्स के अलावा ग्राहक सेवा संपर्क जानकारी छोड़ना सुनिश्चित करें, अन्यथा यह समीक्षा में सफल नहीं होगा।",
                        addContactDetail: "अनुबंध विवरण जोड़ें",
                        urlError: "कृपया सही URL दर्ज करें",
                        eg: "जैसे",
                        moreThan: "{count} वर्णों से अधिक नहीं",
                        nftType: "NFT प्रोटोकॉल मानक",
                        logoDesc: "ऐसी तस्वीरें जो मौजूदा परियोजनाओं की नकल या अनुकरण करती हैं, जिनमें कॉपीराइट जोखिम या राजनीतिक तत्व शामिल होते हैं, को मंजूरी नहीं दी जाएगी।",
                        logoDesc_2: "कृपया सफल समीक्षा के लिए <strong>400*400px, JPG&PNG</strong>, अधिकतम <strong>5M</strong> उच्च गुणवत्ता वाला लोगो सबमिट करें।",
                        uploadError: "कृपया 400*400px, JPG&PNG, अधिकतम 5M का लोगो सबमिट करें।",
                        nextStep: "अगला कदम",
                        donate: {
                            title: "कृपया दान करें",
                            desc: 'कृपया अनुरोध सबमिट करते समय निर्दिष्ट राशि <strong style="color: var(--color-1)">TPT</strong> दान करें।',
                            tutorial: "ट्यूटोरियल",
                            tutorial_1: 'समर्थित नेटवर्क: <strong style="color: var(--color-1)">BSC</strong>।',
                            tutorial_2: 'समर्थित टोकन: <strong style="color: var(--color-1)">TPT (</strong><span data-info="info" style="color: #2980FE;cursor: pointer;">टोकन जानकारी</span><strong style="color: var(--color-1)">)</strong>। यदि आप कोई अन्य टोकन भेजते हैं, तो आपकी सबमिशन प्रोसेस नहीं की जाएगी।. <span data-link="link" style="color: #2980FE;cursor: pointer;">TPT प्राप्त करने के लिए जाएं</span>',
                            tutorial_2_mobile: 'समर्थित टोकन: <strong style="color: var(--color-1)">TPT</strong>। यदि आप कोई अन्य टोकन भेजते हैं, तो आपकी सबमिशन प्रोसेस नहीं की जाएगी।. <span data-link="link" style="color: #2980FE;cursor: pointer;">TPT प्राप्त करने के लिए जाएं</span>',
                            tutorial_3: '<strong style="color: var(--color-1)">कृपया टोकन भेजते समय इस पृष्ठ को न छोड़ें</strong>। यदि आप छोड़ते हैं, तो राशि बदल सकती है, और हम आपके भुगतान की पुष्टि नहीं कर पाएंगे।',
                            tutorial_4: 'भुगतान के बाद, नीचे लेन-देन का <strong style="color: var(--color-1)">हैश लिंक</strong> पेस्ट करें।',
                            amount: "दान राशि:",
                            blockchain: "ब्लॉकचेन",
                            receivingAddress: "प्राप्तकर्ता का पता",
                            hash: "लेन-देन हैश लिंक",
                            tokenInfo: "टोकन जानकारी",
                            tokenContract: "टोकन अनुबंध"
                        },
                        LAYOUT: {
                            features: "विशेषताएँ",
                            products: "उत्पादों",
                            buyCryptoFooter: "खरीदना",
                            mobileWallet: "मोबाइल वॉलेट",
                            mobileWalletDesc: "ब्लॉकचेन पर क्रिप्टो और DeFi मोबाइल वॉलेट।",
                            hardwareWallet: "एक्सटेंशन वॉलेट",
                            hardwareWalletDesc: "आपके कंप्यूटर पर एक बेहतर वॉलेट.",
                            TPCard: "TP Card",
                            TPCardDesc: "एक बैंक कार्ड विकेंद्रीकृत तरीके से संचालित होता है।",
                            extensionWallet: "हार्डवेयर वॉलेट",
                            extensionWalletDesc: "अपनी संपत्तियों की सुरक्षा के लिए अपना KeyPal प्राप्त करें।",
                            desktop: "Desktop Wallet",
                            fiveDegrees: "5Degrees",
                            versionVerification: "प्रामाणिकता जांच",
                            versionVerificationDesc: "अपना वॉलेट सत्यापित करें.",
                            approvalDetector: "अनुमोदन डिटेक्टर",
                            approvalDetectorDesc: "अपने स्वीकृत टोकन देखें और अस्वीकृत करें।",
                            tokenSecurity: "टोकन सुरक्षा",
                            tokenSecurityDesc: "सत्यापित करें कि टोकन उसके अनुबंध पते से सुरक्षित है या नहीं।",
                            keyGenerator: "कुंजी जनरेटर",
                            keyGeneratorDesc: "विभिन्न नेटवर्कों के लिए बेतरतीब ढंग से सार्वजनिक और निजी कुंजी उत्पन्न करें।",
                            tokenProfile: "टोकन प्रोफ़ाइल",
                            tokenProfileDesc: "टोकन के बारे में सारी जानकारी जानें.",
                            tokenClaim: "सांकेतिक दावा",
                            tokenClaimDesc: "अपने एयरड्रॉप का दावा करें.",
                            easyInscription: "आसान शिलालेख",
                            easyInscriptionDesc: "एक सुरक्षित शिलालेख उपकरण.",
                            nostrAssetsBatchSender: "NostrAssets  बैचसेंडर",
                            nostrAssetsBatchSenderDesc: "NostrAssets के लिए एक बैच भेजने वाला उपकरण।",
                            BATCH_SENDER: "बैचसेंडर",
                            BATCH_SENDER_DESC: "एक साथ अनेक प्राप्तकर्ताओं को टोकन भेजें।",
                            trade: "व्यापार",
                            swap: "बदलना",
                            swapDesc: "सर्वोत्तम कीमतों के साथ व्यापार करें।",
                            bridge: "ब्रिज",
                            bridgeDesc: "परिसंपत्तियों को एक श्रृंखला से दूसरी श्रृंखला में निर्बाध रूप से स्थानांतरित करें।",
                            buyCrypto: "खरीदना",
                            buyCryptoDesc: "अपने क्रेडिट कार्ड से क्रिप्टोकरेंसी खरीदें।",
                            market: "बाज़ार",
                            marketDesc: "हॉट टोकन खोजने के लिए वास्तविक समय की अंतर्दृष्टि।",
                            information: "जानकारी",
                            blockchainGuide: "ब्लॉकचेन गाइड",
                            tronWallet: "ट्रॉन गाइड",
                            iostWallet: "IOST गाइड",
                            tpMan: "TP Man",
                            developers: "डेवलपर्स",
                            github: "Github (TP-Lab)",
                            devCenter: "डेवलपर केंद्र",
                            developersDesc: "टोकनपॉकेट डेवलपर दस्तावेज़ीकरण।",
                            subToken: "टोकन जमा करें",
                            subTokenDesc: "अपना टोकन और NFT जमा करें.",
                            subDApp: "DApp जमा करें",
                            subDAppDesc: "अपना DApp जमा करें, और ऑडिट के बाद इसे दिखाएं।",
                            subNFT: "NFT जमा करें",
                            subNFTDesc: "अपना NFT और कला जमा करें।",
                            subChain: "चेन जमा करें",
                            subChainDesc: "अपना ब्लॉकचेन सबमिट करें.",
                            bugBounty: "Bug Bounty",
                            tools: "औजार",
                            build: "निर्माण",
                            learn: "सीखना",
                            explorer: "अन्वेषक",
                            darkMode: "डार्क मोड",
                            company: "कंपनी",
                            about: "के बारे में",
                            careers: "करियर",
                            pressKit: "ब्रांड किट",
                            swagShop: "स्वैग की दुकान",
                            support: "सहायता",
                            helpCenter: "सहायता केंद्र",
                            helpCenterDesc: "उत्तर और सहायता के लिए आपके संसाधन।",
                            contactUs: "संपर्क करें",
                            contactUsDesc: "अपने सुझाव साझा करें और कोई भी प्रश्न पूछें।",
                            forum: "फोरम",
                            forumDesc: "समुदाय के सदस्यों के साथ अपनी बातचीत का आनंद लें।",
                            legal: "वैध",
                            privacyPolicy: "गोपनीयता नीति",
                            terms: "उपयोग की शर्तें",
                            brandKit: "ब्रांड किट",
                            toHome: "होम",
                            defiWallet: "DeFi वॉलेट",
                            ETHWallet: "Ethereum वॉलेट",
                            ethWallet: "ETH वॉलेट"
                        }
                    },
                    HOME: {
                        download: "डाउनलोड",
                        downloadNow: "अब डाउनलोड करो",
                        HEADER: {
                            title: "ब्लॉकचेन का पता लगाने के लिए आपका सुरक्षित क्रिप्टो वॉलेट",
                            desc_1: "खरीदने, स्टोर करने, भेजने, टोकन की अदला-बदली करने और NFTs एकत्र करने में आसान और सुरक्षित। 200+ देशों और क्षेत्रों के 30+ मिलियन उपयोगकर्ताओं द्वारा विश्वसनीय।"
                        },
                        INTRODUCTION: {
                            title: "वैश्विक उपयोगकर्ताओं द्वारा टोकनपॉकेट पर भरोसा किया जाता है",
                            desc_1: "हम दुनिया भर के 200+ देशों और क्षेत्रों में सुरक्षित और आसान क्रिप्टो वॉलेट सेवा प्रदान कर रहे हैं",
                            desc_2: "उपयोगकर्ताओं की सेवा",
                            desc_3: "दैनिक लेनदेन",
                            desc_4: "सहायक देश और क्षेत्र",
                            desc_5: "स्थापित किया गया"
                        },
                        SECURITY: {
                            title: "सुरक्षा जैसी होनी चाहिए",
                            desc_1: "टोकनपॉकेट केवल आपके डिवाइस पर कुंजी और पासवर्ड बनाता है और संग्रहीत करता है, केवल आप ही अपने खाते और संपत्ति तक पहुंच सकते हैं।",
                            desc_2: "टोकनपॉकेट आपकी आवश्यकता के अनुसार सुरक्षा बढ़ाने के लिए हार्डवेयर कोल्ड वॉलेट और मल्टी-साइन वॉलेट सुविधा भी विकसित करता है।",
                            desc_3: "BTC, ETH, BSC, TRON, Aptos, Polygon, Solana, Cosmos, Polkadot, EOS, IOST इत्यादि का समर्थन करना।"
                        },
                        EXCHANGE: {
                            title: "आसानी से एक्सचेंज और लेनदेन करें",
                            desc_1: "आप टोकनपॉकेट के भीतर कभी भी, कहीं भी अपने क्रिप्टो का व्यापार कर सकते हैं।",
                            desc_2: "क्रेडिट कार्ड से क्रिप्टो खरीदें। आसानी से स्टोर करें, भेजें, क्रॉस चेन और एक्सचेंज करें।",
                            desc_3: "बदलना",
                            desc_4: "तुरंत और आसानी से",
                            desc_5: "Bridge",
                            desc_6: "विभिन्न चेइनो के बीच",
                            desc_7: "क्रिप्टो खरीदें",
                            desc_8: "5 मिनट में",
                            desc_9: "TP Card",
                            desc_10: "क्रिप्टो से भुगतान करें"
                        },
                        DAPPSTORE: {
                            title: "एक DApp स्टोर",
                            desc_1: "आप अपने पसंदीदा विकेन्द्रीकृत एप्लिकेशन ढूंढ सकते हैं, नवीनतम और सबसे लोकप्रिय एप्लिकेशन खोज सकते हैं और बटुए को छोड़े बिना उनका उपयोग कर सकते हैं।",
                            desc_2: "DApps ब्राउज़र एकीकृत, आप हमेशा अपने लिंक के साथ DApps तक पहुंच सकते हैं।",
                            desc_3: "DeFi",
                            desc_4: "NFT",
                            desc_5: "DApp",
                            desc_6: "समर्थित"
                        },
                        COMMUNITY: {
                            title: "समुदाय",
                            desc_1: "हम एक खुले प्रौद्योगिकी समुदाय पर जोर देते हैं, और हम सभी डेवलपर्स का एक साथ अधिक सुविधाजनक, सुरक्षित और समृद्ध ब्लॉकचेन दुनिया बनाने के लिए स्वागत करते हैं",
                            desc_2: "TP-Lab",
                            desc_3: "समुदाय",
                            desc_4: "Dev Docs"
                        },
                        DOWNLOAD: {
                            title: "टोकनपॉकेट वॉलेट अभी प्राप्त करें!",
                            desc_1: "ब्लॉकचेन का पता लगाने के लिए आपका सुरक्षित और विश्वसनीय क्रिप्टो वॉलेट"
                        },
                        FOLLOW: {
                            title: "हमारे पर का पालन करें",
                            desc1: "TokenPocket कर्मचारी आपको निजी संदेश नहीं भेजेंगे!",
                            desc2: "सावधानी! आप टोकनपॉकेट समुदाय में प्रवेश कर रहे हैं, हो सकता है कि कोई व्यक्ति आपको निजी संदेश भेजने के लिए प्रतिरूपित कर रहा हो! कृपया ध्यान रखें कि निजी संदेश भेजने वाला कोई भी व्यक्ति स्कैमर हो सकता है! हम आपसे पहले कभी संपर्क नहीं करेंगे!",
                            desc3: "समझे, दर्ज करें"
                        },
                        EXTENSIONMODAL: {
                            title: "एक्सटेंशन अब लाइव है!",
                            desc1: "आपका क्रिप्टो और DeFi और GameFi",
                            desc2: "कंप्यूटर पर वॉलेट",
                            btnText: "इसे अब प्रयोग करो",
                            btnTextm: "लिंक कॉपी करे",
                            tips: "लिंक को सफलतापूर्वक कॉपी करें, कृपया खोलने के लिए कंप्यूटर पर जाएं"
                        }
                    },
                    DAPP: {
                        RULES: {
                            platform: "प्लेटफार्म आवश्यक है",
                            title: "DApp नाम की आवश्यक है",
                            address: "DApp अनुबंध की आवश्यकता है",
                            url: "DApp वेबसाइट की आवश्यक है",
                            desc: "Desc की आवश्यक है",
                            icon_url: "DApp लोगो की आवश्यक है",
                            rakeBackAccount: "अनुबंध खाते की आवश्यकता है",
                            email: "Email की जरूरत है",
                            others: "अन्य संपर्क जानकारी की आवश्यकता है",
                            category: "कम से कम एक श्रेणी चुनें",
                            tp_connect: "यह आइटम खाली नहीं हो सकता",
                            audit_url: "ऑडिट रिपोर्ट का URL आवश्यक है।."
                        },
                        title: "DApp नाम",
                        address: "स्मार्ट अनुबंध",
                        url: "DApp वेबसाइट",
                        desc: "संक्षिप्त वर्णन",
                        icon: "DApp Logo",
                        referral: "रेफरल",
                        hasReferral: "क्या इसमें रेफरल सिस्टम है",
                        referralReward: "रेफरल इनाम का वितरण",
                        reward_1: "स्मार्ट अनुबंध द्वारा स्वचालित रूप से वितरित करें (लाइव)",
                        reward_2: "इसे मैन्युअल रूप से DApp पर दावा करने की आवश्यकता है",
                        hasInviteReward: "क्या रेफरल लिंक को सक्रिय करने के लिए आमंत्रणकर्ता को DApp में लेनदेन करने की आवश्यकता है",
                        inviteAccount: "रेफरल वितरण का स्मार्ट अनुबंध",
                        DAppRequirement: "DApp आवश्यकता",
                        requirement_1: "DApp को टोकनपॉकेट मोबाइल और टोकनपॉकेट एक्सटेंशन का समर्थन करने की आवश्यकता है।",
                        requirement_2: "प्रदान की गई वेबसाइट सुलभ और स्थिर है।",
                        requirement_3: "स्मार्ट कॉन्ट्रैक्ट्स मेननेट पर तैनात हैं, और संवेदनशील हिस्से को ओपन सोर्स होना चाहिए।",
                        requirement_4: "संवेदनशील अनुबंधों के लिए तृतीय-पक्ष सुरक्षा एजेंसियों से ऑडिट रिपोर्ट की आवश्यकता होती है।",
                        requirement_5: "इंटरैक्शन लॉजिक स्पष्ट है और इसे मोबाइल UI के लिए अनुकूलित किया गया है।",
                        requirement_6: "धोखाधड़ी और उल्लंघन के बिना प्रासंगिक कानूनों और विनियमों का पालन करें।",
                        requirement_7: "यदि आप प्रासंगिक कानूनों और विनियमों का उल्लंघन करते हैं, तो आप स्वेच्छा से संबंधित कानूनी जिम्मेदारियों को ग्रहण करेंगे।",
                        dappInfo: "DApp जानकारी:",
                        necessary: "आवश्यक",
                        language: "DApp भाषा",
                        languageDesc: "(कृपया अनेक भाषाओं के लिए अलग से सबमिट करें)",
                        en: "English",
                        zh: "中文简体",
                        zhTW: "中文繁体",
                        descDesc: "एक वाक्य में परियोजना का संक्षिप्त विवरण, जो DApp उपशीर्षक में दिखाई देगा",
                        auditInfo: "लेखापरीक्षा जानकारी:",
                        hasAudit: "क्या अनुबंध लेखापरीक्षा की गई है",
                        auditUrl: "ऑडिट रिपोर्ट URL",
                        auditUrlExample: "उदाहरण के लिए: https://auditlink.com",
                        auditReport: "परीक्षण विवरण",
                        auditUpload: "अपलोड करना",
                        contact: "संपर्क विवरण",
                        contactDesc: "कृपया मेलबॉक्स के अलावा ग्राहक सेवा संपर्क जानकारी छोड़ना सुनिश्चित करें, अन्यथा यह समीक्षा पास नहीं करेगा",
                        emailAddr: "Email",
                        emailExample: "उदाहरण के लिए: build@tokenpocket.pro",
                        others: "अन्य",
                        othersExample: "उदाहरण के लिए: टेलीग्राम：https://t.me/tokenpocket_en",
                        auditOptional: "ऑडिट जानकारी का कम से कम एक आइटम भरें",
                        oversize: " योग्य वर्णों को पार कर गया है",
                        select: "चयन",
                        tutorial_url: "https://help.tokenpocket.pro/developer-en/",
                        tutorial: "ट्यूटोरियल देखें",
                        noData: "चेन नहीं मिली~",
                        categories: "श्रेणियाँ",
                        IS_SUPPORT_TP_CONNECT_1: "क्या यह टोकनपॉकेट कनेक्शन का समर्थन करता है?",
                        IS_SUPPORT_TP_CONNECT_2: "(एक्सटेंशन और मोबाइल ऐप)",
                        IS_SUPPORT_TP_CONNECT_3: "टोकनपॉकेट कनेक्शन",
                        dappTokensTitle: "डीएप टोकन",
                        dappTokens: "क्या आपके DApp के पास टोकन हैं?",
                        emailError: "कृपया सही ईमेल पता दर्ज करें",
                        dappSmartContract: "स्मार्ट अनुबंध",
                        dappSmartContractDesc: "अपने DApp के स्मार्ट अनुबंध जोड़ें। यदि एक से अधिक हो तो अल्पविराम से अलग करें(,)",
                        addAuditUrl: "ऑडिट रिपोर्ट URL जोड़ें",
                        addContactDetail: "अनुबंध विवरण जोड़ें",
                        backToHome: "मुखपृष्ठ पर वापस",
                        openSmartContract: "प्रत्येक ब्लॉकचेन के लिए स्मार्ट अनुबंध संपादित करें",
                        openTokens: "टोकन जानकारी संपादित करें",
                        tokens: "कम से कम एक टोकन जानकारी जोड़ें",
                        addToken: "टोकन जोड़ें",
                        network: "टोकन नेटवर्क",
                        symbol: "सांकेतिक चिह्न",
                        contract: "सांकेतिक अनुबंध"
                    },
                    DOWNLOAD: {
                        TITLE: "टोकनपॉकेट डाउनलोड करें",
                        TITLE_Android: "एंड्रॉयड के लिए टोकनपॉकेट",
                        TITLE_IOS: "iOS के लिए टोकनपॉकेट",
                        TITLE_Chrome: "आपके ब्राउज़र के लिए टोकनपॉकेट",
                        TEXT: "टोकनपॉकेट एक बहु-श्रृंखला क्रिप्टो वॉलेट है, जिसका उपयोग करना आसान और सुरक्षित है, जिस पर लाखों लोग भरोसा करते हैं।",
                        TEXT_Chrome: "टोकनपॉकेट एक्सटेंशन एक बहु-श्रृंखला क्रिप्टो वॉलेट है, जो सभी EVM संगत श्रृंखला समर्थित है। उपयोग करने में आसान और सुरक्षित, जिस पर लाखों लोग भरोसा करते हैं।",
                        TEXT_PC: "TokenPocket Desktop सबसे बड़ा मल्टी-ब्लॉकचेन वॉलेट आधारित EOS ETH BOS TRON है, हम उपयोगकर्ताओं को एक शक्तिशाली और सुरक्षित डिजिटल एसेट मैनेजमेंट प्रदान करने का प्रयास करते हैं।",
                        ALERT: "कृपया इस पेज को अपना मोबाइल फोन खोलें या कोबो वॉलेट इंस्टॉल करने के लिए दाईं ओर क्यूआर कोड स्कैन करें।",
                        scanCode: "डाउनलोड करने के लिए स्कैन करें",
                        installTutorial: "ट्यूटोरियल स्थापित करें",
                        desc_1: "आधिकारिक वेबसाइट से ऐप डाउनलोड करें और इसके एसएसएल प्रमाणन की जांच करें",
                        desc_2: "अपने पुनर्प्राप्ति वाक्यांश (स्मरक) और निजी कुंजी को लीक होने से बचाएं, इसे कभी भी दूसरों को साझा न करें",
                        desc_3: "अधिक सुरक्षा युक्तियाँ जानें",
                        verifyText: "नवीनतम एंड्रॉयड संस्करण:",
                        verifyText1: "किसी app's की सुरक्षा कैसे सत्यापित करें",
                        verifyText2: "नवीनतम संस्करण",
                        verifyText3: "नवीनतम Google Play संस्करण:",
                        footerTitle: "एक अच्छा पहला प्रभाव बनाएं",
                        footerDesc_1: "BTC, ETH, BSC, TRON, Matic, Aptos, Solana, EOS, Polkadot, IOST इत्यादि का समर्थन करना।",
                        footerDesc_2: "बहु-परत सुरक्षा सुरक्षा",
                        footerDesc_3: "DeFi, DApp, GameFi and NFT समर्थित",
                        coming_soon: "Coming Soon",
                        desc_tp_wallet: "आधिकारिक तौर पर टोकनपॉकेट के एकमात्र आईओएस ऐप प्रकाशक के रूप में नियुक्त किया गया है",
                        tp_wallet_version: "TP Wallet संस्करण:",
                        token_pocket_version: "Token Pocket संस्करण:",
                        delisted: "हटाए",
                        checkoutAllVersion: "Check All Versions",
                        apk32Title: "32-बिट पैकेज डाउनलोड करें",
                        apk32Desc: "32-बिट स्थापना पैकेज उन डिवाइसेस के लिए उपयुक्त है जिनमें कम कॉन्फ़िगरेशन है। यदि आपको कहीं ऐसी स्थिति का सामना करना पड़ता है जहां DApp को सही ढंग से जड़ा नहीं जा सकता, तो आप 32-बिट स्थापना पैकेज को डाउनलोड और उपयोग कर सकते हैं.",
                        download: "डाउनलोड"
                    },
                    TOKEN: {
                        RULES: {
                            network: "नेटवर्क आवश्यक है",
                            email: "Email की जरूरत है",
                            address: "पता आवश्यक है",
                            owner_address: "मालिक का पता आवश्यक है",
                            symbol: "प्रतीक आवश्यक है",
                            bl_symbol: "BL प्रतीक आवश्यक है",
                            total_supply: "कुल आपूर्ति की आवश्यकता है",
                            decimal: "दशमलव आवश्यक है",
                            precision: "प्रेसिजन की आवश्यकता है",
                            gas: "गैस की आवश्यकता है",
                            website: "वेबसाइट की आवश्यकता है",
                            website_1: "Official Website is too long",
                            companyName: "कंपनी या व्यक्तिगत नाम आवश्यक है",
                            contact: "संपर्क आवश्यक है",
                            description: "Project introduction is required",
                            description_1: "Token Introduction is too long",
                            name: "परियोजना परिचय की आवश्यकता है",
                            icon_url: "लोगो की आवश्यकता है"
                        },
                        icon: "टोकन लोगो",
                        handleText: "हम आपके अनुरोध को 2 कार्यदिवसों में संसाधित करेंगे",
                        tokenStandard: "टोकन मानक",
                        requirement_1: "कृपया हनीपॉट टोकन या घोटाला टोकन जमा न करें।.",
                        requirement_2: "कृपया एक ही टोकन को कई बार जमा न करें।.",
                        requirement_3: "स्मार्ट कॉन्ट्रैक्ट्स मेननेट पर तैनात किए गए हैं।.",
                        requirement_4: "लोगो आवश्यक है।.",
                        requirement_5: "यदि आप संबंधित कानूनों और विनियमों का उल्लंघन करते हैं, तो आप स्वेच्छा से संबंधित कानूनी जिम्मेदारियों को स्वीकार करेंगे।.",
                        addMore: "और जोड़ें",
                        placeholder_1: "कृपया दर्ज करें...",
                        tokenRequirement: "टोकन आवश्यकताएँ",
                        information: "टोकन जानकारी",
                        network: "नेटवर्क",
                        name: "टोकन नाम",
                        symbol: "टोकन नाम",
                        success: "Success",
                        bl_symbol: "BL Symbol",
                        precision: "टोकन प्रेसिजन",
                        decimal: "टोकन दशमलव",
                        totalSupply: "कुल आपूर्ति",
                        contract: "टोकन अनुबंध",
                        website: "आधिकारिक वेबसाइट",
                        introduction: "टोकन परिचय"
                    },
                    RECRUITING: {
                        title: "TP Man भर्ती योजना",
                        text: "टोकनपॉकेट समुदाय में शामिल हों",
                        text1: "ब्लॉकचेन की दुनिया के लिए प्रतिबद्ध और अपना योगदान दें",
                        text2: "हम एक साथ एक Web3.0 दुनिया का निर्माण करते हैं",
                        joinUs: "हमसे जुड़ें",
                        aboutTitle: "TP Man के बारे में",
                        aboutText: "TP Man टोकनपॉकेट समुदाय का एक महत्वपूर्ण हिस्सा है, और हम ईमानदारी से आपको हमसे जुड़ने के लिए आमंत्रित करते हैं!",
                        aboutText1: "आप एक ब्लॉकचेन उत्साही हैं और उद्योग मूल्य का समर्थन करते हैं।",
                        aboutText2: "जब आप ब्लॉकचेन की दुनिया का पता लगाते हैं तो टोकनपॉकेट वॉलेट द्वारा लाई गई सुविधा का आनंद लें।",
                        missionTitle: "TP Man का मिशन",
                        missionText: "दुनिया भर में अधिक ब्लॉकचेन उपयोगकर्ताओं की सेवा करने के लिए टोकनपॉकेट की मदद करें। हम आशा करते हैं कि आप आवेदन करने के लिए निम्नलिखित में से दो आवश्यकताओं को पूरा करेंगे।",
                        missionText1: "विभिन्न चैनलों के माध्यम से अपने देश में कंपनियों या हॉट प्रोजेक्ट्स के साथ टोकनपॉकेट सहयोग का विस्तार और प्रचार करें",
                        missionText2: "स्थानीय उपयोगकर्ताओं की जरूरतों को पूरा करने वाली मार्केटिंग गतिविधियों की योजना बनाएं",
                        missionText3: "मुख्यधारा के सोशल मीडिया जैसे ट्विटर, यूट्यूब, टेलीग्राम और डिस्कॉर्ड को संचालित करने की क्षमता रखते हैं",
                        missionText4: "अंग्रेजी में धाराप्रवाह, और अनुवाद कार्य पूरा करने में सक्षम हो",
                        missionText5: "टोकनपॉकेट वैश्विक ब्लॉकचेन उपयोगकर्ताओं के लिए अधिक उपयोग और तकनीकी सहायता प्रदान करने की योजना बना रहा है, इसलिए हम आशा करते हैं कि आपको कम से कम एक देश और उनके उपयोगकर्ताओं (भारत, संयुक्त राज्य अमेरिका, तुर्की, रूस, दक्षिण कोरिया) के ब्लॉकचेन बाजारों की एक निश्चित समझ है। वियतनाम, फिलीपींस, आदि)",
                        getTitle: "आपको क्या मिलेगा?",
                        getText: "ब्लॉकचैन उद्योग के विभिन्न क्षेत्रों में सीधे तौर पर शामिल एक कार्य अनुभव, और आपको उद्योग में DApp परियोजनाओं, इन्फ्लुएंसर और मुख्यधारा के मीडिया के साथ संचार के अवसर मिलेंगे, लेकिन सीमित नहीं होंगे।",
                        getText1: "अपने काम से समृद्ध पुरस्कार प्राप्त करें जैसे कि ट्वीट अनुवाद, वीडियो बनाना, सामुदायिक संचालन और व्यावसायिक सहयोग।",
                        getText2: "सबसे अधिक पेशेवर ब्लॉकचेन ज्ञान प्रशिक्षण प्राप्त करें और टीम के साथ मिलकर Web3.0 दुनिया का अन्वेषण करें।",
                        getText3: "टोकनपॉकेट आधिकारिक लाभ, जिसमें टोकनपॉकेट स्वैग और हार्डवेयर वॉलेट शामिल हैं।",
                        processTitle: "भर्ती प्रक्रिया",
                        processText: "CV जमा करें",
                        processText1: "CV जाँच",
                        processText2: "ऑनलाइन साक्षात्कार ",
                        processText3: "साक्षात्कार के परिणाम",
                        processText4: "नाव पर स्वागत है",
                        applyTitle: "कौन आवेदन कर सकता है",
                        applyText: "देश की परवाह किए बिना दुनिया का सामना करें",
                        applyText1: "ब्लॉकचेन की दुनिया के बारे में उत्सुक और उत्सुक रहें",
                        applyText2: "फॉर्म भरें और अपना बायोडाटा संलग्न करें, फिर हम आपसे जल्द से जल्द संपर्क करेंगे",
                        footerTitle: "टोकनपॉकेट के बारे में",
                        footerText: "ऊपर",
                        footerText1_1: "20M",
                        footerText1_2: "वैश्विक उपयोगकर्ता",
                        footerText2_1: "3.5M",
                        footerText2_2: "मासिक सक्रिय उपयोगकर्ता",
                        footerText3_1: "200",
                        footerText3_2: "देश और क्षेत्र",
                        footerText4: "टोकनपॉकेट दुनिया का अग्रणी मल्टी-चेन सेल्फ-कस्टोडियल वॉलेट है",
                        footerText5: "जल्द आ रहा है"
                    },
                    ABOUT: {
                        title: "हमारे बारे में",
                        desc: "टोकनपॉकेट एक बहु-श्रृंखला विकेन्द्रीकृत वॉलेट है, यह उपयोगकर्ताओं को मोबाइल वॉलेट, एक्सटेंशन वॉलेट और हार्डवेयर वॉलेट प्रदान करता है, Bitcoin, Ethereum, BNB Smart Chain, TRON, Polygon, Solana, Aptos, Polkadot, EOS और सभी EVM संगत चेन सहित सार्वजनिक श्रृंखलाओं का समर्थन करता है। . 200 से अधिक देशों और क्षेत्रों के 30 मिलियन से अधिक उपयोगकर्ताओं को सेवा प्रदान करना। यह एक विश्वव्यापी अग्रणी क्रिप्टो वॉलेट है जिस पर वैश्विक उपयोगकर्ताओं द्वारा भरोसा किया जाता है।",
                        philosophy: {
                            title: "हमारा दर्शन",
                            desc: "हम एक खुले प्रौद्योगिकी समुदाय पर जोर देते हैं, और हम सभी डेवलपर्स का एक साथ अधिक सुविधाजनक, सुरक्षित और समृद्ध ब्लॉकचेन दुनिया बनाने के लिए स्वागत करते हैं",
                            ambition: "महत्वाकांक्षा",
                            ambition_desc: "ब्लॉकचेन को हर जगह बनाएं",
                            value: "मूल्य",
                            value_desc: "उपयोगकर्ताओं को डेटा वापस करने दें, मूल्य को वास्तविक स्वामियों का बनाएं",
                            attitude: "मनोभाव",
                            attitude_desc: "खुले विचारों वाला, आपसी सहयोग"
                        },
                        milestones: {
                            title: "उपलब्धि",
                            desc_2018_4_1: "टोकनपॉकेट की स्थापना.",
                            desc_2018_8_1: "हुओबी, होफन, बाइट कैपिटल द्वारा निवेश किया गया.",
                            desc_2019_8_1: "जारी किया गया डेस्कटॉप वॉलेट, समर्थित TRON.",
                            desc_2019_11_1: "गूगल प्ले डाउनलोड 1,000,000 से अधिक हो गया.",
                            desc_2020_7_1: "HD वॉलेट समर्थित.",
                            desc_2020_9_1: "समर्थित BSC और DeFi प्रवृत्ति.",
                            desc_2020_12_1: "समर्थित Eth2.0 स्टेकिंग.",
                            desc_2021_3_1: "इनक्यूबेटेड ट्रांजिट.",
                            desc_2021_6_1: "उपयोगकर्ता आधार 20,000,000 से अधिक हो गया.",
                            desc_2021_8_1: "इनक्यूबेटेड कीपाल हार्डवेयर वॉलेट.",
                            desc_2021_11_1: "ब्रांड अपग्रेड, नया लोगो और नया ब्रांड।.",
                            desc_2022_1_1: "".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://buy.transit.finance/ramp" target="_blank">Transit Buy</a>', " इनक्यूबेटेड, वैश्विक फिएट समर्थित।."),
                            desc_2022_5_1: "डीफॉक्स का अधिग्रहण किया और टोकनपॉकेट एक्सटेंशन का नाम बदला.",
                            desc_2022_7_1: "".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://debox.pro/" target="_blank">DeBox</a>', " में निवेश किया, Web3 में DID-आधारित समुदाय प्रबंधन उपकरण।."),
                            desc_2022_9_1: "WrapCoin में निवेश किया।.",
                            desc_2022_12_1: "मल्टी-सिग वॉलेट समर्थित।.",
                            desc_2023_4_1: "एथेरियम शापेला अपडेट का समर्थन।.",
                            desc_2023_4_2: "Stake Vault पर सेल्फ-कस्टडी स्टेकिंग का समर्थन।.",
                            desc_2023_5_1: "TRON एनर्जी रेंटल और एनर्जी सब्सिडी सेवा शुरू की, जो उपयोगकर्ताओं के लिए 75% तक नेटवर्क शुल्क बचा सकती है।.",
                            desc_2023_5_2: "बिटकॉइन इकोसिस्टम, Nostr प्रोटोकॉल, BRC-20 का समर्थन।.",
                            desc_2023_8_1: "LRT प्रोटोकॉल ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://www.puffer.fi/" target="_blank">Puffer Finance</a>', " में निवेश।."),
                            desc_2023_10_1: "".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://card.keypal.pro/" target="_blank">Keypal Card</a>', " Card एन्क्रिप्टेड सुरक्षित चिप कार्ड बिक्री पर।."),
                            desc_2023_11_1: "AA स्मार्ट वॉलेट लॉन्च किया।.",
                            desc_2024_2_1: "यूएसए के FinCEN से MSB लाइसेंस प्राप्त किया।.",
                            desc_2024_3_1: "".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://twitter.com/TokenPocket_TP" target="_blank">Twitter (X)</a>', " पर 600,000 से अधिक फॉलोअर्स।."),
                            desc_2024_5_1: "Victory Securities के साथ सहयोग, एक व्यापक पूर्ण-लाइसेंस प्राप्त सिक्योरिटीज फर्म।.",
                            desc_2024_5_2: "विक्ट्री सिक्योरिटीज, एक व्यापक पूर्ण-लाइसेंस प्राप्त प्रतिभूति फर्म के साथ सहयोग करें।.",
                            January: "जनवरी",
                            February: "फ़रवरी",
                            March: "मार्च",
                            April: "अप्रैल",
                            May: "मई",
                            June: "जून",
                            July: "जुलाई",
                            August: "अगस्त",
                            September: "सितंबर",
                            October: "अक्टूबर",
                            November: "नवंबर",
                            December: "दिसंबर"
                        },
                        contact_us: {
                            title: "संपर्क करें",
                            service: "ग्राहक सेवा",
                            service_desc: "service@tokenpocket.pro",
                            bd: "व्यापार सहयोग",
                            bd_desc: "bd@tokenpocket.pro",
                            developers: "डेवलपर्स",
                            developers_desc: "Discord link"
                        }
                    },
                    SEO: {
                        title: "टोकनपॉकेट - आपका सार्वभौमिक डिजिटल वॉलेट | TP वॉलेट - ETH वॉलेट - BTC वॉलेट - BSC वॉलेट - HECO वॉलेट - OKExChain वॉलेट - Polkadot वॉलेट - Kusama वॉलेट - DeFi वॉलेट - Layer 2 वॉलेट - EOS वॉलेट - TRX वॉलेट - nostr",
                        description: "TokenPocket एक विश्व-अग्रणी डिजिटल मुद्रा वॉलेट है, जो BTC, ETH, BSC, HECO, TRON, OKExChain, Polkadot, Kusama, EOS और Layer 2 सहित सार्वजनिक ब्लॉकचेन का समर्थन करता है।",
                        keywords: "TokenPocket,Token Pocket,TP wallet,Ethereum wallet,Bitcoin,EOS,IOST,COSMOS,heco,bsc,layer2,DeFi,wallet,crypto,blockchain,web3,NFT,nostr"
                    },
                    DAPPSTORE: {
                        document_title: "DAppStore | TokenPocket",
                        title: "डीएप स्टोर",
                        copy: "Copied successfully",
                        agreement: "पढ़ें और सहमत हों",
                        risk_statement: "जोखिम का बयान",
                        no_again: "कोई अधिक संकेत नहीं",
                        collect: "पसंदीदा",
                        no_collect: "अबतक कोई पसंद नहीं",
                        data_loading: "DApps लोड हो रहे हैं...",
                        hot: "प्रचलन",
                        hot_title: "लोकप्रिय DApp",
                        hot_desc: "सार्वजनिक ब्लॉकचेन में 100+ शीर्ष DApp खोजें, जिसमें डीफाई, डेक्स, ब्लॉकचेन खेल, एनएफटी बाजार और अधिक शामिल हैं, सभी एक ही स्थान पर। डीफाई में डेसेंट्रलाइज्ड एक्सचेंज (डेक्स), सिंथेटिक एसेट, भुगतान, उधार और अन्य ब्लॉकचेन आधारित एप्लिकेशन शामिल हैं।",
                        placeholder: "नाम या शब्दकों के साथ DApps खोजें",
                        recent_search: "हाल के खोज",
                        hot_search: "लोकप्रिय खोजें",
                        search_result: "परिणाम",
                        no_search_result: "कोई रिकॉर्ड नहीं मिला",
                        enter: "प्रवेश करें ",
                        supported_networks: "समर्थित",
                        category: "वर्ग",
                        all_networks: "सभी नेटवर्क",
                        community_tutorial: "ट्यूटोरियल्स",
                        related_tokens: "संबंधित टोकन",
                        more: "अधिक",
                        moreDApp: "अधिक",
                        cancel: "रद्द करना"
                    },
                    BRANDKIT: {
                        title: "डाउनलोड किट",
                        download: "डाउनलोड",
                        desc: "इस पृष्ठ पर आपको TokenPocket का आधिकारिक लोगो और रंग पैलेट मिलेगा, जो आपको अपने प्रोजेक्ट्स में हमारे ब्रांड को दिखाने में मदद करेगा। हम आपको इन संसाधनों का अन्वेषण करने और हमारे ब्रांड गाइडलाइंस के अनुसार उनका उपयोग करने के लिए आमंत्रित करते हैं, ताकि TokenPocket का सुसंगत और पेशेवर प्रदर्शन सुनिश्चित किया जा सके।",
                        logoDownload: "लोगो डाउनलोड करें",
                        logoDownloadDesc: "हमारे ब्रांड लोगो को अभी डाउनलोड करें और सुनिश्चित करें कि आपके डिज़ाइन प्रोजेक्ट्स एक सुसंगत और पेशेवर छवि बनाए रखें।",
                        logoDownloadDesc_1: "सभी फ़ाइलें उच्च गुणवत्ता की हैं और वेब, प्रिंट, और विभिन्न अनुप्रयोगों के लिए उपयुक्त हैं, जिससे आपको उत्कृष्ट दृश्य सामग्री बनाने में आसानी होगी।",
                        colorVersion: "रंग संस्करण",
                        whiteVersion: "सफेद संस्करण",
                        brandTrademark: "ब्रांड ट्रेडमार्क",
                        brandTrademarkDesc: 'TokenPocket आइकन में बड़े अक्षर "T" और "P" होते हैं;',
                        brandTrademarkDesc_2: 'टेक्स्ट भाग में बड़े अक्षर "TOKEN POCKET" होते हैं;',
                        brandTrademarkDesc_3: "आइकन और टेक्स्ट मिलकर TokenPocket ब्रांड का ट्रेडमार्क बनाते हैं।",
                        logo: "Logo",
                        fullVertical: "पूर्ण (वर्टिकल)",
                        fullHorizontal: "पूर्ण (हॉरिज़ॉन्टल)",
                        spellingRules: "स्पेलिंग नियम",
                        spellingRulesDesc: '"ब्रांड का प्रतिनिधित्व करते समय: TOKEN POCKET"',
                        spellingRulesDesc_1: '"ऐप का प्रतिनिधित्व करते समय: TokenPocket"',
                        spellingRulesDesc_2: '"गलत उदाहरण: TOKENPOCKET, Tokenpocket, tokenpocket"',
                        representingBrand: "ब्रांड का प्रतिनिधित्व करते समय",
                        applicationBrand: "ऐप का प्रतिनिधित्व करते समय",
                        TokenPocketIcon: "TokenPocket आइकन",
                        TokenPocketIconDesc: "जब TokenPocket को एक ऐप के रूप में उल्लेख किया जाए, तो ऐप आइकन का उपयोग करें; ",
                        TokenPocketIconDesc_1: "ट्विटर, फेसबुक, मीडियम और टेलीग्राम जैसे सोशल मीडिया या संगठनों में सोशल अवतार का उपयोग करें।",
                        roundedIcon: "गोल आइकन",
                        squareIcon: "वर्गाकार आइकन",
                        socialAvatar: "सोशल अवतार",
                        TokenPocketColor: "TokenPocket रंग",
                        TokenPocketColorDesc: "TokenPocket का ब्रांड रंग नीला है, जो इंटरनेट की तकनीकी भावना और विश्वास को प्रतीकित करता है। ऐप के चार्ट में भी ग्रेडियंट रंगों का उपयोग किया गया है।",
                        primary: "प्राथमिक",
                        secondary: "सहायक रंग",
                        colorSystem: "रंग प्रणाली",
                        brandBlue: "ब्रांड नीला",
                        brandBlack: "ब्रांड काला",
                        OffWhite: "ऑफ-व्हाइट",
                        palette: "पैलेट"
                    }
                },
                ja: {
                    COMMON: {
                        EMAIL: "メール",
                        YES: "Yes",
                        NO: "No",
                        HAS: "Yes",
                        HAVENT: "No",
                        BLOCKCHAIN: "ブロックチェーン",
                        MULTIPLE_CHOICE: "(複数選択)",
                        IS_SUPPORT_TP_CONNECT: "TokenPocketのコネクトに対応していますか？(モバイルアプリと拡張機能)",
                        SUPPORT_BOTH: "両方に対応しています。",
                        SUPPORT_EXTENSION: "拡張機能にのみ対応しています。",
                        SUPPORT_MOBILE: "モバイルにのみ対応しています。",
                        SUPPORT_NONE: "対応していません。",
                        blockchainWallet: "ブロックチェーンウォレット",
                        iostWallet: "IOST Wallet",
                        tronWallet: "TRON Wallet",
                        platformInfo: {
                            eos: "EOS",
                            moac: "MOAC",
                            eth: "ETH",
                            jt: "Jingtum ",
                            enu: "ENU",
                            bos: "BOS",
                            iost: "IOST",
                            cosmos: "COSMOS",
                            bnb: "BNB",
                            trx: "TRON",
                            bsc: "BSC",
                            heco: "HECO",
                            okex: "OKExChain",
                            dot: "Polkadot",
                            hsc: "HSC",
                            matic: "Polygon",
                            klaytn: "Klaytn",
                            arb: "Arbitrum One",
                            arbn: "Arbirtum Nova",
                            ftm: "Fantom",
                            etc: "Ethereum Classic",
                            cfx: "Conflux eSpace",
                            solana: "Solana",
                            avax: "AVAX",
                            oe: "Optimistic Ethereum",
                            xdai: "Gnosis Chain",
                            harmony: "Harmony",
                            wax: "WAX",
                            aurora: "Aurora",
                            ksm: "Kusama",
                            mb: "Moonbeam",
                            sbg: "SubGame",
                            kcc: "KCC Mainnet",
                            lat: "PlatON",
                            bttc: "BTTC",
                            gt: "GateChain",
                            halo: "HALO",
                            aptos: "Aptos",
                            fil: "Filecoin FVM",
                            zks: "zkSync Era",
                            eosevm: "EOS EVM",
                            mantle: "Mantle",
                            linea: "Linea",
                            base: "Base",
                            opbnb: "opBNB",
                            polyzk: "Polygon zkEVM",
                            core: "CORE",
                            haqq: "HAQQ",
                            scroll: "Scroll",
                            manta: "Manta",
                            bevm: "BEVM",
                            zkfair: "ZKFair",
                            metis: "Metis",
                            zeta: "Zeta Chain",
                            merlin: "Merlin",
                            blast: "Blast",
                            xlayer: "X Layer",
                            bitlayer: "Bitlayer",
                            kroma: "Kroma"
                        },
                        submit: "完了",
                        confirm: "確認",
                        save: "保存",
                        contactEmail: "連絡先のメールアドレス:",
                        submitSuccess: "送信しました",
                        submitDAppSuccessDesc: "送信されたDAppは、審査後に掲載されます",
                        submitTokenSuccessDesc: "提出していただいたトークンは、審査後に発行されます。",
                        backToHome: "ホームに戻る",
                        searchNetwork: "ブロックチェーンを検索",
                        example: "サンプル",
                        submitTokenInfoAndLogo: "トークンのロゴとその他の情報をアップデート",
                        toGithubSubmit: "Githubへ移動",
                        contact: "コントラクトの詳細",
                        contactDesc: "*メールボックス以外のカスタマーサービスの連絡先情報を入力してください。",
                        addContactDetail: "コントラクトの詳細を追加",
                        urlError: "正しいコントラクトアドレスを入力してください",
                        eg: "例:",
                        moreThan: "{count}文字以下で入力してください",
                        nftType: "NFTのプロトコル規格",
                        logoDesc: "既存のプロジェクトを盗作または模倣した画像、著作権のリスクを伴う画像、または政治的要素を含む画像は承認されません。",
                        logoDesc_2: "提出が正常にレビューされるように、<strong>400*400px、JPG＆PNG</strong>、最大<strong>5M</strong>の高品質ロゴを提出してください。",
                        uploadError: "400*400px、JPG＆PNG、最大5Mのロゴを提出してください。",
                        nextStep: "次のステップ",
                        donate: {
                            title: "寄付してください",
                            desc: 'リクエストを提出する際に指定された金額<strong style="color: var(--color-1)">TPT</strong>を寄付してください。',
                            tutorial: "チュートリアル",
                            tutorial_1: 'サポートされているネットワーク: <strong style="color: var(--color-1)">BSC</strong>。',
                            tutorial_2: 'サポートされているトークン: <strong style="color: var(--color-1)">TPT (</strong><span data-info="info" style="color: #2980FE;cursor: pointer;">トークン情報</span><strong style="color: var(--color-1)">)</strong>。他のトークンを送信した場合、処理されません。<span data-link="link" style="color: #2980FE;cursor: pointer;">TPTを取得しに行く</span>',
                            tutorial_2_mobile: 'サポートされているトークン: <strong style="color: var(--color-1)">TPT</strong>。他のトークンを送信した場合、処理されません。<span data-link="link" style="color: #2980FE;cursor: pointer;">TPTを取得しに行く</span>',
                            tutorial_3: '<strong style="color: var(--color-1)">トークンを送信中はこのページを離れないでください</strong>。ページを離れると、金額が変更され、支払いの確認ができません。',
                            tutorial_4: '支払い後、トランザクションの<strong style="color: var(--color-1)">トランザクションハッシュリンク</strong>を下に貼り付けてください。',
                            amount: "寄付金額：",
                            blockchain: "ブロックチェーン",
                            receivingAddress: "受取アドレス",
                            hash: "トランザクションハッシュリンク",
                            tokenInfo: "トークン情報",
                            tokenContract: "トークン契約"
                        },
                        LAYOUT: {
                            features: "プロダクト",
                            products: "プロダクト",
                            buyCryptoFooter: "暗号通貨を購入する",
                            mobileWallet: "モバイルウォレット",
                            mobileWalletDesc: "ブロックチェーンのモバイルウォレット。",
                            hardwareWallet: "ハードウェアウォレット",
                            hardwareWalletDesc: "資産を守るためにKeyPalを手に入れよう！",
                            TPCard: "TP Card",
                            TPCardDesc: "TPカードは分散型の仕組みで機能します。",
                            extensionWallet: "ブラウザ拡張ウォレット",
                            extensionWalletDesc: "コンピューター上でのより良いウォレット",
                            desktop: "デスクトップウォレット",
                            fiveDegrees: "5Degrees",
                            versionVerification: "正規性確認",
                            versionVerificationDesc: "ウォレットの検証",
                            approvalDetector: "アプルーバルディテクター",
                            approvalDetectorDesc: "アプルーブの表示とリボーク",
                            tokenSecurity: "トークンセキュリティ",
                            tokenSecurityDesc: "トークンのコントラクトアドレスを監査",
                            keyGenerator: "キージェネレーター",
                            keyGeneratorDesc: "さまざまなネットワークの公開鍵と秘密鍵をランダムに生成",
                            tokenProfile: "トークンプロファイル",
                            tokenProfileDesc: "トークンに関する全ての情報を確認",
                            tokenClaim: "トークンクレーム",
                            tokenClaimDesc: "エアドロップを受け取る",
                            easyInscription: "イージーインスクリプション",
                            easyInscriptionDesc: "安全かつ簡単なインスクリプションのためのツール",
                            nostrAssetsBatchSender: "NostrAssetsバッチトランスファー",
                            nostrAssetsBatchSenderDesc: "NostrAssetsのためのバッチトランスファーツール",
                            BATCH_SENDER: "バッチトランスファー",
                            BATCH_SENDER_DESC: "複数のアドレスに一度にトークンを転送",
                            trade: "取引",
                            swap: "TransitSwap",
                            swapDesc: "ベストレートで取引。",
                            bridge: "ブリッジ",
                            bridgeDesc: "シームレスに資産を他のチェーンにクロスします。",
                            buyCrypto: "購入",
                            buyCryptoDesc: "クレジットカードで暗号資産を購入",
                            market: "市場",
                            marketDesc: "リアルタイムインサイトでトレンドのトークンを見つける",
                            information: "詳細",
                            blockchainGuide: "ブロックチェーンガイド",
                            tronWallet: "TRON Guide",
                            iostWallet: "IOST Guide",
                            tpMan: "TPマン",
                            developers: "開発者",
                            github: "Github (TP-Lab)",
                            devCenter: "開発者センター",
                            developersDesc: "TokenPocket開発者向けドキュメント",
                            subToken: "トークンを投稿",
                            subTokenDesc: "トークンとNFTを提出する。",
                            subDApp: "DAppの投稿",
                            subDAppDesc: "DAppを投稿し、監査後に表示",
                            subNFT: "NFTの投稿",
                            subNFTDesc: "NFTとアート作品の投稿",
                            subChain: "チェーンを投稿",
                            subChainDesc: "ブロックチェーンをを投稿",
                            bugBounty: "バグバウンティ",
                            tools: "ツール",
                            build: "ビルド",
                            learn: "学ぶ",
                            explorer: "エクスプローラー",
                            darkMode: "ダークモード",
                            company: "会社",
                            about: "TokenPocketについて",
                            careers: "キャリア",
                            pressKit: "ブランドキット",
                            swagShop: "スワッグショップ",
                            support: "サポート",
                            helpCenter: "ヘルプセンター",
                            helpCenterDesc: "問題解決のためのアシスタント",
                            contactUs: "お問い合わせ",
                            contactUsDesc: "提案を共有と質問",
                            forum: "フォーラム",
                            forumDesc: "コミュニティメンバーとの会話を楽しむ",
                            legal: "法的情報",
                            privacyPolicy: "プライバシーポリシー",
                            terms: "利用規約",
                            brandKit: "ブランドキット",
                            toHome: "ホーム",
                            defiWallet: "DeFiウォレット",
                            ETHWallet: "イーサリアムウォレット",
                            ethWallet: "ETHウォレット"
                        }
                    },
                    HOME: {
                        download: "ダウンロード",
                        downloadNow: "ダウンロードする",
                        HEADER: {
                            title: "安全にブロックチェーンを探索できる暗号資産ウォレット",
                            desc_1: "安全で簡単に、トークンの購入、保管、送受信、スワップ、NFTの収集ができ、200以上の国と地域、3000万人以上のユーザーに信頼されています。"
                        },
                        INTRODUCTION: {
                            title: "TokenPocketは世界中のユーザーから信用されています。",
                            desc_1: "200以上の国や地域で、安全で簡単な暗号資産のウォレットサービスを提供しています。",
                            desc_2: "ユーザー数",
                            desc_3: "1日のトランザクション数",
                            desc_4: "提供している国と地域",
                            desc_5: "設立"
                        },
                        SECURITY: {
                            title: "セキュリティのあるべき姿",
                            desc_1: "TokenPocketは、ユーザーのデバイスのみにキーとパスワードを生成して保存しており、あなただけがあなたの資産をコントロールできます。",
                            desc_2: "また、必要に応じてよりセキュリティを強化できるよう、ハードウェアウォレットのKeyPalや、マルチシグウォレットを開発しています。",
                            desc_3: "BTC、ETH、BSC、TRON、Polygon、Solana、Cosmos、Polkadot、EOS、IOSTなど対応。"
                        },
                        EXCHANGE: {
                            title: "簡単な交換・取引",
                            desc_1: "TokenPocketから、いつでもどこでも暗号資産を取引することができます。",
                            desc_2: "クレジットカードで暗号資産を購入でき、保管、送受信、クロスチェーン、取引を簡単に行うことができます。",
                            desc_3: "スワップ",
                            desc_4: "瞬時に、そして簡単に",
                            desc_5: "ブリッジ",
                            desc_6: "異なるチェーンの間で",
                            desc_7: "暗号資産の購入",
                            desc_8: "5分で",
                            desc_9: "TP Card",
                            desc_10: "暗号通貨で支払う"
                        },
                        DAPPSTORE: {
                            title: "DAppストア",
                            desc_1: "ウォレットに搭載されたDAppブラウザーでお気に入りの分散型アプリケーションを見つけ、最新でホットなものを発見し、",
                            desc_2: "ウォレットから離れることなく使用することができ、いつでもDAppsにアクセスすることができます。",
                            desc_3: "DeFi",
                            desc_4: "NFT",
                            desc_5: "DApp",
                            desc_6: "サポート"
                        },
                        COMMUNITY: {
                            title: "コミュニティ",
                            desc_1: "オープンな開発者コミュニティにこだわり、より便利に安全で豊かなブロックチェーンの世界を一緒に作ってくれる開発者の方々を歓迎します",
                            desc_2: "TP-Lab",
                            desc_3: "開発者コミュニティ",
                            desc_4: "開発者向けドキュメント"
                        },
                        DOWNLOAD: {
                            title: "TokenPocketを手に入れよう！",
                            desc_1: "安全にブロックチェーンを探索できる暗号資産ウォレット"
                        },
                        FOLLOW: {
                            title: "フォローする",
                            desc1: "TokenPocket スタッフからプライベート メッセージは送信されません!",
                            desc2: "注意！ TokenPocket コミュニティに参加しようとしています。誰かが私たちになりすましてプライベート メッセージを送信している可能性があります。 プライベート メッセージを送信する人は詐欺師である可能性があることに注意してください。 最初に連絡することはありません！",
                            desc3: "了解、入力"
                        },
                        EXTENSIONMODAL: {
                            title: "拡張機能のウォレットが利用できます！",
                            desc1: "暗号資産&DeFi&GaneFi",
                            desc2: "コンピューターで",
                            btnText: "利用可能",
                            btnTextm: "リンクをコビーする",
                            tips: "リンクをコピーして、コンピューターから開いてください。"
                        }
                    },
                    DAPP: {
                        RULES: {
                            platform: "ネットワークが必要です",
                            title: "DAppの名前が必要です",
                            address: "DAppのコントラクトが必要です",
                            url: "DAppのウェブサイトが必要です",
                            desc: "説明が必要です",
                            icon_url: "DAppのロゴが必要です",
                            rakeBackAccount: "コントラクトのアカウントが必要です",
                            email: "Eメールアドレスが必要です",
                            others: "その他の連絡先情報が必要です",
                            category: "少なくもと1つのカテゴリーを選択してください",
                            tp_connect: "このアイテムは空白にすることができません",
                            audit_url: "監査報告書のURLが必要です"
                        },
                        title: "DAppの名前",
                        address: "スマートコントラクト",
                        url: "DAppのウェブサイト",
                        desc: "短い説明",
                        icon: "DAppのロゴ",
                        referral: "リファラル",
                        hasReferral: "リファラルシステムの有無",
                        referralReward: "リファラルリワードの分配について",
                        reward_1: "スマートコントラクトによる自動配信(Live)",
                        reward_2: "DAppに手動でクレームする必要がある",
                        hasInviteReward: "リファラルリンクを有効にするためにはDAppで取引をする必要がありますか？",
                        inviteAccount: "リファラルを配信するコントラクト",
                        DAppRequirement: "DAppの必要条件",
                        requirement_1: "TokenPocketのモバイル及び拡張ウォレットをサポートしていること",
                        requirement_2: "ウェブサイトがアクセス可能で安定していること.",
                        requirement_3: "オープンソースかつ、メインネットでデプロイされていること",
                        requirement_4: "機密性の高いコントラクトの場合、第三者のセキュリティエージェントから監査を受けていること",
                        requirement_5: "インタラクションロジックが明確で、モバイルのUIに適していること",
                        requirement_6: "関連する法令を遵守し、不正や侵害を行わないこと",
                        requirement_7: "関連する法令に違反した場合、対応する法的責任を負うこと",
                        dappInfo: "DAppの情報:",
                        necessary: "必須",
                        language: "DAppの言語",
                        languageDesc: "(多言語に対応されている場合は別途ご提出ください)",
                        en: "English",
                        zh: "中文简体",
                        zhTW: "中文繁体",
                        descDesc: "DAppのサブタイトルに表示される、プロジェクトの簡単な説明(1文)",
                        auditInfo: "監査に関する情報:",
                        hasAudit: "コントラクトの監査の実施有無",
                        auditUrl: "監査報告書のURL",
                        auditUrlExample: "例: https://auditlink.com",
                        auditReport: "監査報告",
                        auditUpload: "アップロード",
                        contact: "コントラクトの詳細",
                        contactDesc: "メール以外のカスタマーサービスの連絡先を必ず記入してください",
                        emailAddr: "Eメール",
                        emailExample: "例: build@tokenpocket.pro",
                        others: "その他",
                        othersExample: "例: https://t.me/tokenpocket_en",
                        auditOptional: "監査情報を1項目以上入力してください",
                        oversize: "サイズを超えています",
                        select: "選択",
                        tutorial_url: "https://help.tokenpocket.pro/developer-en/",
                        tutorial: "チュートリアルを見る",
                        noData: "チェーンが見つかりません〜",
                        categories: "カテゴリー",
                        IS_SUPPORT_TP_CONNECT_1: "TokenPocketのコネクトに対応していますか？",
                        IS_SUPPORT_TP_CONNECT_2: "(モバイルアプリと拡張機能)",
                        IS_SUPPORT_TP_CONNECT_3: "TokenPocket接続",
                        dappTokensTitle: "DAppトークン",
                        dappTokens: "DAppのトークンの有無",
                        emailError: "正しいEメールアドレスを入力してください",
                        dappSmartContract: "スマートコントラクト",
                        dappSmartContractDesc: "DAppのスマートコントラクト(複数ある場合は、カンマ(,)で区切ってください)",
                        addAuditUrl: "監査レポートのURLを追加",
                        backToHome: "ホームに戻る",
                        openSmartContract: "ブロックチェーンごとにスマートコントラクトを編集",
                        openTokens: "トークンの情報を編集",
                        tokens: "少なくとも1つのトークンの情報が必要です。",
                        addToken: "トークンの追加",
                        network: "トークンのネットワーク",
                        symbol: "トークンのシンボル",
                        contract: "トークンのコントラクト"
                    },
                    DOWNLOAD: {
                        TITLE: "TokenPocketをダウンロード",
                        TITLE_Android: "TokenPocket for Android",
                        TITLE_IOS: "TokenPocket for iOS",
                        TITLE_Chrome: "TokenPocket for browser",
                        TEXT: "TokenPocketは、数百万人に信頼されている安全で簡単に使用できるマルチチェーンの暗号資産ウォレットです。",
                        TEXT_Chrome: "TokenPocketは、数百万人に信頼されている安全で簡単に使用できるマルチチェーンの暗号資産ウォレットです。",
                        TEXT_PC: "TokenPocketのデスクトップウォレットは、EOS,ETH,BOS,TRONをベースとした最大級のマルチブチェーンウォレットで、ユーザーに強力かつ安全な暗号資産資産管理を提供するために努力しています。",
                        scanCode: "スキャンしてダウンロード",
                        installTutorial: "チュートリアルのインストール",
                        desc_1: "SSL認証を確認して、公式サイトからダウンロードしてください",
                        desc_2: "ニーモニックフレーズ/秘密鍵は漏洩しないように管理し、絶対に他人に教えないでください。",
                        desc_3: "セキュリティについてもっと見る",
                        verifyText: "最新のAndroidバージョン:",
                        verifyText1: "アプリのセキュリティを確認する方法",
                        verifyText2: "最新のバージョン:",
                        verifyText3: "最新のGoogle Playバージョン:",
                        footerTitle: "ファーストインプレッションを高める",
                        footerDesc_1: "BTC, ETH, BSC, TRON,Polygon, Aptos, Solana, EOS, Polkadot, IOSTなどをサポート",
                        footerDesc_2: "マルチレイヤーのセキュリティプロテクション",
                        footerDesc_3: "DeFi, DApp, GameFi&NFT をサポート",
                        coming_soon: "Coming Soon",
                        desc_tp_wallet: "は、TokenPocket の唯一の iOS アプリ発行者として正式に任命されました。",
                        tp_wallet_version: "TP Wallet バージョン:",
                        token_pocket_version: "Token Pocket バージョン:",
                        delisted: "上場廃止",
                        checkoutAllVersion: "Check All Versions",
                        apk32Title: "32ビットパッケージをダウンロード",
                        apk32Desc: "32ビットのインストールパッケージは、より低い構成のデバイスに適しています。DAppが正しくリンクできない状況に遭遇した場合は、32ビットのインストールパッケージをダウンロードして使用できます。",
                        download: "ダウンロード"
                    },
                    TOKEN: {
                        RULES: {
                            network: "ネットワークが必要です",
                            email: "メールが必要です",
                            address: "アドレスが必要です",
                            owner_address: "オーナーのアドレスが必要です",
                            symbol: "シンボルが必要です",
                            bl_symbol: "BL シンボルが必要です",
                            total_supply: "総発行量が必要です",
                            decimal: "小数点が必要です",
                            precision: "精度が必要です",
                            gas: "ガスが必要です",
                            website: "ウェブサイトが必要です",
                            website_1: "Official Website is too long",
                            companyName: "会社名または個人名が必要です",
                            contact: "連絡先が必要です",
                            description: "Project introduction is required",
                            description_1: "Token Introduction is too long",
                            name: "プロジェクトの説明が必要です",
                            icon_url: "ロゴが必要です"
                        },
                        icon: "トークンのロゴ",
                        handleText: "2営業日以内に処理します。",
                        tokenStandard: "トークン標準",
                        requirement_1: "ハニーポットトークンや詐欺トークンを提出しないでください。",
                        requirement_2: "同じトークンを複数回提出しないでください。",
                        requirement_3: "スマートコントラクトはメインネットにデプロイされています。",
                        requirement_4: "ロゴが必要です。",
                        requirement_5: "関連する法律や規制に違反した場合、相応の法的責任を自主的に負うことになります。",
                        addMore: "追加項目",
                        placeholder_1: "入力してください",
                        tokenRequirement: "トークン要件",
                        information: "トークン情報",
                        network: "ネットワーク",
                        name: "トークン名",
                        symbol: "トークンネーム",
                        success: "Success",
                        bl_symbol: "シンボル",
                        precision: "精度",
                        decimal: "小数点の桁数",
                        totalSupply: "発行量",
                        contract: "ントラクト",
                        website: "公式サイト",
                        introduction: "説明"
                    },
                    RECRUITING: {
                        title: "TP Man Recruitment Plan",
                        text: "Join the TokenPocket community",
                        text1: "Committed to the blockchain world and contribute your part",
                        text2: "We build a Web3.0 world together",
                        joinUs: "Join Us",
                        aboutTitle: "About TP Man",
                        aboutText: "TP Man is an important part of the TokenPocket community, and we sincerely invite you to join us!",
                        aboutText1: "You are a blockchain enthusiast and endorse the industry value.",
                        aboutText2: "Enjoy the convenience brought by TokenPocket wallet when you explore the blockchain world.",
                        missionTitle: "The Mission of TP Man",
                        missionText: "Help TokenPocket to serve more blockchain users around the world. We hope you, meet two of the following requirements to apply.",
                        missionText1: "Expand and promote TokenPocket cooperation with companies or hot projects in your country through various channels",
                        missionText2: "Plan marketing activities that meet the needs of local users",
                        missionText3: "Have the ability to operate mainstream social medias such as Twitter, Youtube, Telegram, and Discord",
                        missionText4: "Fluent in English, and be able to complete translation work",
                        missionText5: "TokenPocket plans to provide more usage and technical support for global blockchain users, so we hope that you have a certain understanding of the blockchain markets of no less than one country and their users (India, the United States, Turkey, Russia, South Korea, Vietnam, the Philippines, etc.)",
                        getTitle: "What will you get?",
                        getText: "A work experience directly involved with various fields of the blockchain industry, and you will get but not limited to communication opportunities with DApp projects, Influencers, and mainstream media in the industry.",
                        getText1: "Get rich rewards from your work such as tweets translation, making video, community operation and business cooperation.",
                        getText2: "Get the most professional blockchain knowledge training and explore the Web3.0 world with the team together.",
                        getText3: "TokenPocket official benefits, including TokenPocket Swag and hardware wallets.",
                        processTitle: "Recruitment process",
                        processText: "Submit CV",
                        processText1: "CV screening",
                        processText2: "Online interview ",
                        processText3: "Interview results",
                        processText4: "Welcome aboard",
                        applyTitle: "Who can apply",
                        applyText: "Face the world, regardless of country",
                        applyText1: "Be keen and curious about the blockchain world",
                        applyText2: "Fill out the form and attach your resume, then we will contact you as soon as possible",
                        footerTitle: "About TokenPocket",
                        footerText: "over",
                        footerText1_1: "20M",
                        footerText1_2: "global users",
                        footerText2_1: "3.5M",
                        footerText2_2: "monthly active users",
                        footerText3_1: "200",
                        footerText3_2: "countries and regions",
                        footerText4: "TokenPocket is the world's leading multi-chain self-custodial wallet",
                        footerText5: "Coming soon"
                    },
                    ABOUT: {
                        title: "TokenPocketについて",
                        desc: "TokenPocketは、BTC、ETH、BNB、TRON、Polygon、Solana、HECO、Klaytn、Avalanche、OKC、HSC、Fantom、Polkadot、Kusama、IOSTなど主流のパブリックチェーンをデフォルトでサポートし、すべてのEVM互換、Polkadot互換、EOS互換のパブリックチェーンに対応する世界有数のマルチチェーンセルフカストディウォレットで、現在までに、全世界200カ国以上、3000万人以上のユーザーに信頼性の高いサービスを提供し、月間アクティブユーザー数は350万人を超えています。三位一体となる、モバイルウォレット(iOS、iPadOS、Android)、Chrome拡張ウォレット、ハードウェアウォレット(KeyPal)を提供しており、あらゆるデバイスからご利用いただけます。",
                        philosophy: {
                            title: "私たちの理念",
                            desc: "私たちはオープンな技術コミュニティにこだわり、より便利で安全で豊かなブロックチェーンの世界を一緒に作ってくれる開発者の方々を歓迎します",
                            ambition: "目的",
                            ambition_desc: "ブロックチェーンをあらゆる場所で実現すること",
                            value: "価値",
                            value_desc: "データをユーザーの手に戻し、価値を真の所有者に帰属させる。",
                            attitude: "姿勢",
                            attitude_desc: "オープンマインドで、互いに協力し合う"
                        },
                        milestones: {
                            title: "マイルストーン",
                            desc_2018_4_1: "TokenPocketの設立。",
                            desc_2018_8_1: "Huobi、Hofan、Byte Capitalから投資を受ける。",
                            desc_2019_8_1: "デスクトップウォレットをリリース、TRONをサポート。",
                            desc_2019_11_1: "Google Playでのダウンロード数が100万を突破。",
                            desc_2020_7_1: "HDウォレットをサポート。",
                            desc_2020_9_1: "BSCとDeFuをサポート。",
                            desc_2020_12_1: "ETH2.0のステーキングをサポート。",
                            desc_2021_3_1: "TransitFinanceを提供開始。",
                            desc_2021_6_1: "ユーザー数が2000万人を突破。",
                            desc_2021_8_1: "KeyPal ハードウェアウォレットを販売開始。",
                            desc_2021_11_1: "新しいロゴと新しいブランドでブランドのアップグレード。",
                            desc_2022_1_1: "".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://buy.transit.finance/ramp" target="_blank">Transit Buy</a>', "のインキュベート、法定通貨への対応。"),
                            desc_2022_5_1: "dFoxを買収し、Chrome拡張ウォレットを提供開始。",
                            desc_2022_7_1: "Web3のDIDベースのコミュニティ管理ツールである".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://debox.pro/" target="_blank">DeBox</a>', "へ投資。"),
                            desc_2022_9_1: "WrapCoinに投資。",
                            desc_2022_12_1: "マルチシグウォレットに対応。",
                            desc_2023_4_1: "イーサリアムのシャペラアップデートに対応。",
                            desc_2023_4_2: "Stake Vaultで自己管理ステーキングに対応。",
                            desc_2023_5_1: "ネットワーク手数料を最大75％節約できるTRONのエネルギーレンタルおよびエネルギー補助サービスを開始。",
                            desc_2023_5_2: "ビットコインエコシステム、Nostrプロトコル、BRC-20に対応。",
                            desc_2023_8_1: "LRTプロトコルの".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://www.puffer.fi/" target="_blank">Puffer Finance</a>', "に投資。"),
                            desc_2023_10_1: "暗号化セキュアチップカードの".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://card.keypal.pro/" target="_blank">Keypal Card</a>', "を販売。"),
                            desc_2023_11_1: "AAスマートウォレットをリリース。",
                            desc_2024_2_1: "米国FinCENからMSBライセンスを取得。",
                            desc_2024_3_1: "".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://twitter.com/TokenPocket_TP" target="_blank">Twitter (X)</a>', "フォロワー60万人を突破。"),
                            desc_2024_5_1: "総合証券会社のVictory Securitiesとの提携。",
                            desc_2024_5_2: "香港サイバーポートに拠点を置き、アジア太平洋事業センターを設立。",
                            January: "1月",
                            February: "2月",
                            March: "3月",
                            April: "4月",
                            May: "5月",
                            June: "6月",
                            July: "7月",
                            August: "8月",
                            September: "9月",
                            October: "10月",
                            November: "11月",
                            December: "12月"
                        },
                        contact_us: {
                            title: "お問い合わせ",
                            service: "カスタマーサービス",
                            service_desc: "service@tokenpocket.pro",
                            bd: "ビジネスコラボレーション",
                            bd_desc: "bd@tokenpocket.pro",
                            developers: "開発者",
                            developers_desc: "Discord"
                        }
                    },
                    SEO: {
                        title: "TokenPocket - ユニバーサルデザインウォレット｜TPウォレット - ETHウォレット - BTCウォレット - BSCウォレット - HECOウォレット - OKExChainウォレット - Polkadotウォレット - Kusamaウォレット - DeFiウォレット - レイヤー2ウォレット - EOSウォレット - TRXウォレット - nostr",
                        description: "TokenPocketは、BTC、ETH、BSC、HECO、TRON、OKExChain、Polkadot、Kusama、EOS、Layer 2などのパブリックブロックチェーンをサポートする世界トップレベルの暗号資産ウォレットです。",
                        keywords: "TokenPocket,Token Pocket,TP ウォレット,トークンポケット,仮想通貨,暗号資産,ウォレット,イーサリアムウォレット,ビットコイン,EOS,IOST,COSMOS,heco,bsc,レイヤー2,DeFi,ウォレット,web3,NFT,nostr"
                    },
                    DAPPSTORE: {
                        document_title: "DAppStore | TokenPocket",
                        title: "DAppストア",
                        copy: "Copied successfully",
                        agreement: "読んで同意する",
                        risk_statement: "リスク声明",
                        no_again: "もうプロンプトなし",
                        collect: "お気に入り",
                        no_collect: "まだお気に入りはありません",
                        data_loading: "DApps の読み込み中...",
                        hot: "トレンド",
                        hot_title: "人気のあるDApp",
                        hot_desc: "DeFi、DEX、ブロックチェーンゲーム、NFTマーケットなど、100以上のトップDAppを公共ブロックチェーン上で一括して探索します。DeFiには、分散型取引所（DEX）、合成資産、支払い、貸付などが含まれます。",
                        placeholder: "名前やキーワードで DApps を検索する",
                        recent_search: "最近の検索",
                        hot_search: "人気のある検索",
                        search_result: "結果",
                        no_search_result: "レコードが見つかりません",
                        enter: "入力 ",
                        supported_networks: "サポート",
                        category: "カテゴリ",
                        all_networks: "すべてのネットワーク",
                        community_tutorial: "チュートリアル",
                        related_tokens: "関連トークン",
                        more: "もっと",
                        moreDApp: "もっと",
                        cancel: "キャンセル"
                    },
                    BRANDKIT: {
                        title: "キットをダウンロード",
                        download: "ダウンロード",
                        desc: '"このページでは、TokenPocketの公式ロゴとカラーパレットを見つけることができます。これらを使用して、プロジェクトでブランドを効果的に表現してください。ブランドガイドラインに従ってこれらのリソースを活用し、TokenPocketの一貫したプロフェッショナルな表現を確保してください。',
                        logoDownload: "ロゴをダウンロード",
                        logoDownloadDesc: "今すぐブランドロゴをダウンロードして、デザインプロジェクトが一貫したプロフェッショナルなイメージを保つことができるようにしてください。すべてのファイルは高品質で、ウェブ、印刷、さまざまなアプリケーションに適しており、印象的なビジュアルを簡単に作成できます。",
                        logoDownloadDesc_1: "すべてのファイルは高品質で、ウェブ、印刷、さまざまなアプリケーションに適しており、印象的なビジュアルを簡単に作成できます。",
                        colorVersion: "カラー版",
                        whiteVersion: "白版",
                        brandTrademark: "ブランド商標",
                        brandTrademarkDesc: 'TokenPocketのアイコンは、大文字の"T"と"P"で構成されています。',
                        brandTrademarkDesc_2: 'テキスト部分は大文字の" TOKEN POCKET"です。',
                        brandTrademarkDesc_3: "アイコンとテキストがTokenPocketブランドの商標を構成します。",
                        logo: "Logo",
                        fullVertical: "フル（縦）",
                        fullHorizontal: "フル（横）",
                        spellingRules: "スペルルール",
                        spellingRulesDesc: '"ブランドを表す場合：TOKEN POCKET"',
                        spellingRulesDesc_1: '"アプリを表す場合：TokenPocket"',
                        spellingRulesDesc_2: '"誤った例：TOKENPOCKET、Tokenpocket、tokenpocket"',
                        representingBrand: "ブランドを表す場合",
                        applicationBrand: "アプリを表す場合",
                        TokenPocketIcon: "TokenPocketアイコン",
                        TokenPocketIconDesc: "TokenPocketをアプリとして言及する場合はアプリアイコンを使用してください。Twitter、Facebook、Medium、Telegramなどのソーシャルメディアや組織ではソーシャルアバターを使用してください。",
                        TokenPocketIconDesc_1: "Twitter、Facebook、Medium、Telegramなどのソーシャルメディアや組織ではソーシャルアバターを使用してください。",
                        roundedIcon: "丸いアイコン",
                        squareIcon: "四角いアイコン",
                        socialAvatar: "ソーシャルアバター",
                        TokenPocketColor: "TokenPocketの色",
                        TokenPocketColorDesc: "TokenPocketのブランドカラーは青色で、青はインターネットの技術感と信頼を象徴しています。アプリのグラフではグラデーションカラーも使用されています。",
                        primary: "プライマリー",
                        secondary: "補助色",
                        colorSystem: "カラーシステム",
                        brandBlue: "ブランドブルー",
                        brandBlack: "ブランドブラック",
                        OffWhite: "オフホワイト",
                        palette: "パレット"
                    }
                },
                fil: {
                    COMMON: {
                        EMAIL: "Email",
                        YES: "Oo",
                        NO: "Hindi",
                        HAS: "Oo",
                        HAVENT: "Hindi",
                        BLOCKCHAIN: "Blockchain",
                        WALLET_GUIDE: "Gabay sa Wallet",
                        MULTIPLE_CHOICE: "(Maraming)",
                        IS_SUPPORT_TP_CONNECT: "Sinusuportahan ba nito ang koneksyon ng TokenPocket? (Extension at Mobile app)",
                        SUPPORT_BOTH: "Parehong sinusuportahan",
                        SUPPORT_EXTENSION: "Tanging Extension",
                        SUPPORT_MOBILE: "Tanging mobile",
                        SUPPORT_NONE: "wala",
                        blockchainWallet: "Blockchain Wallet",
                        iostWallet: "IOST Wallet",
                        tronWallet: "TRON Wallet",
                        platformInfo: {
                            eos: "EOS",
                            moac: "MOAC",
                            eth: "ETH",
                            jt: "Jingtum ",
                            enu: "ENU",
                            bos: "BOS",
                            iost: "IOST",
                            cosmos: "COSMOS",
                            bnb: "BNB",
                            trx: "TRON",
                            bsc: "BSC",
                            heco: "HECO",
                            okex: "OKExChain",
                            dot: "Polkadot",
                            hsc: "HSC",
                            matic: "Polygon",
                            klaytn: "Klaytn",
                            arb: "Arbitrum One",
                            arbn: "Arbirtum Nova",
                            ftm: "Fantom",
                            etc: "Ethereum Classic",
                            cfx: "Conflux eSpace",
                            solana: "Solana",
                            avax: "AVAX",
                            oe: "Optimistic Ethereum",
                            xdai: "Gnosis Chain",
                            harmony: "Harmony",
                            wax: "WAX",
                            aurora: "Aurora",
                            ksm: "Kusama",
                            mb: "Moonbeam",
                            sbg: "SubGame",
                            kcc: "KCC Mainnet",
                            lat: "PlatON",
                            bttc: "BTTC",
                            gt: "GateChain",
                            halo: "HALO",
                            aptos: "Aptos",
                            fil: "Filecoin FVM",
                            zks: "zkSync Era",
                            eosevm: "EOS EVM",
                            mantle: "Mantle",
                            linea: "Linea",
                            base: "Base",
                            opbnb: "opBNB",
                            polyzk: "Polygon zkEVM",
                            core: "CORE",
                            haqq: "HAQQ",
                            scroll: "Scroll",
                            manta: "Manta",
                            bevm: "BEVM",
                            zkfair: "ZKFair",
                            metis: "Metis",
                            zeta: "Zeta Chain",
                            merlin: "Merlin",
                            blast: "Blast",
                            xlayer: "X Layer",
                            bitlayer: "Bitlayer",
                            kroma: "Kroma"
                        },
                        submit: "I-submit",
                        confirm: "Kumpirmahin",
                        save: "I-save",
                        contactEmail: "Makipag-ugnayan sa Email:",
                        submitSuccess: "I-submit ang tagumpay",
                        submitDAppSuccessDesc: "Ang DApp na i-susumite mo ay ilulunsad pagkatapos naming suriin!",
                        submitTokenSuccessDesc: "Ang token na iyong i-susumite ay ilulunsad pagkatapos naming suriin!",
                        backToHome: "Bumalik sa Panimula",
                        searchNetwork: "Maghanap ng pangalan ng blockchain",
                        example: "Halimbawa",
                        submitTokenInfoAndLogo: "I-update ang logo ng token at iba pang Impormasyon",
                        toGithubSubmit: "Pumunta sa Github",
                        contact: "Mga detalye ng contact",
                        contactDesc: "* Pakitiyak na iwanan ang impormasyon sa pakikipag-ugnayan sa customer service maliban sa mailbox, kung hindi, hindi ito papasa sa pagsusuri.",
                        addContactDetail: "Magdagdag ng detalye ng contract",
                        urlError: "Pakilagay ang tamang URL",
                        eg: "hal.",
                        moreThan: "Hindi hihigit sa {count} character",
                        nftType: "Pamantayan ng protocol ng NFT",
                        logoDesc: "Ang mga larawan na nagkopya o nanggagaya ng mga umiiral na proyekto, may mga panganib sa copyright, o may mga elementong pampulitika ay hindi maaaprubahan.",
                        logoDesc_2: "Mangyaring magsumite ng isang <strong>400*400px, JPG&PNG</strong>, maximum <strong>5M</strong> mataas na kalidad na logo upang matiyak na matagumpay na mare-review ang iyong pagsusumite.",
                        uploadError: "Mangyaring magsumite ng isang 400*400px, JPG&PNG, maximum 5M na logo.",
                        nextStep: "Susunod na Hakbang",
                        donate: {
                            title: "Mangyaring Mag-Donate",
                            desc: 'Mangyaring mag-donate ng tinukoy na halaga ng <strong style="color: var(--color-1)">TPT</strong> kapag nagsusumite ng kahilingan.',
                            tutorial: "Patnubay",
                            tutorial_1: 'Sinusuportahang network: <strong style="color: var(--color-1)">BSC</strong>.',
                            tutorial_2: 'Sinusuportahang token: <strong style="color: var(--color-1)">TPT (</strong><span data-info="info" style="color: #2980FE;cursor: pointer;">Impormasyon ng Token</span><strong style="color: var(--color-1)">)</strong>. Kung magpapadala ka ng ibang uri ng token, hindi mapoproseso ang iyong pagsusumite. <span data-link="link" style="color: #2980FE;cursor: pointer;">Pumunta upang makuha ang TPT</span>',
                            tutorial_2_mobile: 'Sinusuportahang token: <strong style="color: var(--color-1)">TPT</strong>. Kung magpapadala ka ng ibang uri ng token, hindi mapoproseso ang iyong pagsusumite. <span data-link="link" style="color: #2980FE;cursor: pointer;">Pumunta upang makuha ang TPT</span>',
                            tutorial_3: '<strong style="color: var(--color-1)">Huwag umalis sa page na ito habang nagpapadala ng token</strong>. Kung aalis ka, maaaring magbago ang halaga, at hindi namin makukumpirma ang iyong pagbabayad.',
                            tutorial_4: 'Pagkatapos ng pagbabayad, idikit ang <strong style="color: var(--color-1)">transaction hash link</strong> ng transaksyon sa ibaba.',
                            amount: "Halaga ng Donasyon:",
                            blockchain: "Blockchain",
                            receivingAddress: "Address ng Pagtanggap",
                            hash: "Transaction Hash Link",
                            tokenInfo: "Impormasyon ng Token",
                            tokenContract: "Kontrata ng Token"
                        },
                        LAYOUT: {
                            features: "Mga tampok",
                            products: "Produkto",
                            buyCryptoFooter: "Bumili ng Crypto",
                            mobileWallet: "Mobile Wallet",
                            mobileWalletDesc: "Crypto&DeFi Mobile Wallet sa Blockchain.",
                            hardwareWallet: "Hardware Wallet",
                            hardwareWalletDesc: "Kunin ang iyong KeyPal, para maingatan ang iyong mga asset.",
                            TPCard: "TP Card",
                            TPCardDesc: "Isang bank card na gumagana sa isang desentralisadong paraan.",
                            extensionWallet: "Extension Wallet",
                            extensionWalletDesc: "Mas magandang wallet sa iyong computer.",
                            desktop: "Desktop na Wallet",
                            fiveDegrees: "5Degrees",
                            versionVerification: "Pagsusuri ng pagiging tunay",
                            versionVerificationDesc: "I-verify ang iyong wallet.",
                            approvalDetector: "Approval Detector",
                            approvalDetectorDesc: "Tingnan at I-unapprove ang Iyong Mga Na-approve na Token.",
                            tokenSecurity: "Seguridad ng Token",
                            tokenSecurityDesc: "I-verify kung ligtas ang token sa pamamagitan ng contract address nito.",
                            keyGenerator: "Key Generator",
                            keyGeneratorDesc: "Generate ng Random Pampubliko at Private Key para sa Network.",
                            tokenProfile: "Token Profile",
                            tokenProfileDesc: "Alamin ang lahat ng impormasyon tungkol sa token.",
                            tokenClaim: "Token Claim",
                            tokenClaimDesc: "I-claim ang Iyong Airdrop.",
                            easyInscription: "Madaling Inscription",
                            easyInscriptionDesc: "Isang Secure na Inscription tool.",
                            nostrAssetsBatchSender: "NostrAssets BatchSender",
                            nostrAssetsBatchSenderDesc: "Isang Batch Sending Tool para sa NostrAssets.",
                            BATCH_SENDER: "BatchSender",
                            BATCH_SENDER_DESC: "Magpadala ng Mga Token sa Maraming Tumatanggap nang Sabay-sabay.",
                            trade: "Trade",
                            swap: "Transit Swap",
                            swapDesc: "Magpalit sa pinakamagandang presyo.",
                            bridge: "Bridge",
                            bridgeDesc: "Ensuring seamless asset liquidity.",
                            buyCrypto: "Bumili",
                            buyCryptoDesc: "Bumili ng cryptocurrency gamit ang iyong mga credit card.",
                            market: "Market",
                            marketDesc: "Mga real-time na pananaw para matuklasan ang mga trending na token.",
                            information: "Impormasyon",
                            blockchainGuide: "Gabay sa Blockchain",
                            tronWallet: "Gabay sa TRON",
                            iostWallet: "Gabay sa IOST",
                            tpMan: "TP Man",
                            developers: "Mga developer",
                            github: "Github (TP-Lab)",
                            devCenter: "Dev Center",
                            developersDesc: "TokenPocket developer dokumentansyon.",
                            subToken: "I-submit ang Token",
                            subTokenDesc: "Isumite ang iyong token at NFT.",
                            subDApp: "I-submit ang DApp",
                            subDAppDesc: "I-submit ang iyong DApp, at ipakita ito pagkatapos ng audit.",
                            subNFT: "I-submit ang NFT",
                            subNFTDesc: "I-submit ang iyong NFT at sining.",
                            subChain: "I-submit ang Chain",
                            subChainDesc: "I-submit ang iyong blockchain.",
                            bugBounty: "Gantimpala sa Bugs",
                            tools: "Mga Tool",
                            build: "Gumawa",
                            learn: "Matuto",
                            explorer: "Galugarin",
                            darkMode: "Madilim na Mode",
                            company: "kumpanya",
                            about: "Tungkol sa",
                            careers: "Mga Career",
                            pressKit: "Kitis ng Tatak",
                            swagShop: "Swag Shop",
                            support: "Suporta",
                            helpCenter: "Help Center",
                            helpCenterDesc: "Ang iyong mga pangunahing mapagkukunan para sa mga sagot at tulong.",
                            contactUs: "Makipag-ugnayan sa Amin",
                            contactUsDesc: "Ibahagi ang iyong mga mungkahi at magtanong ng anumang mga katanungan.",
                            forum: "Forum",
                            forumDesc: "Makipag ugnayan sa iyong mga pag-uusap sa mga miyembro ng komunidad.",
                            legal: "Legal",
                            privacyPolicy: "Patakaran sa Privacy",
                            terms: "Mga Tuntunin ng Paggamit",
                            brandKit: "Brand Kit",
                            toHome: "Home",
                            defiWallet: "DeFi na Wallet",
                            ETHWallet: "Ethereum Wallet",
                            ethWallet: "ETH na Wallet"
                        }
                    },
                    HOME: {
                        download: "I-download",
                        downloadNow: "I-download na ngayon",
                        HEADER: {
                            title: "Ang iyong secure na crypto wallet para i-explore ang blockchain",
                            desc_1: "Madali at ligtas na bumili, mag-imbak, magpadala, mag-swap ng mga token at mangolekta ng mga NFT. Pinagkakatiwalaan ng 30+ milyong user mula sa 200+ na bansa at rehiyon."
                        },
                        INTRODUCTION: {
                            title: "Ang TokenPocket ay pinagkakatiwalaan ng mga global users",
                            desc_1: "Nagbibigay kami ng ligtas at madaling serbisyo ng crypto wallet sa 200+ na bansa at rehiyon sa buong mundo",
                            desc_2: "Naglilingkod sa mga user",
                            desc_3: "Pang-araw-araw na Transaksyon",
                            desc_4: "Pagsuporta sa mga bansa at rehiyon",
                            desc_5: "Itinatag"
                        },
                        SECURITY: {
                            title: "Seguridad tulad ng nararapat",
                            desc_1: "Ang TokenPocket ay bumubuo at nag-iimbak ng mga key at password sa iyong device lamang, ikaw lang ang makaka-access sa iyong account at mga asset.",
                            desc_2: "Gumagawa din ang TokenPocket ng hardware cold wallet at feature na multi-sign wallet para mapahusay ang seguridad ayon sa kailangan mo.",
                            desc_3: "Sinusuportahan ang BTC, ETH, BSC, TRON, Aptos, Polygon, Solana, Cosmos, Polkadot, EOS, IOST at iba pa."
                        },
                        EXCHANGE: {
                            title: "Exchange & Madaling Transact",
                            desc_1: "Maaari mong i-trade ang iyong crypto anumang oras, kahit saan sa loob ng TokenPocket.",
                            desc_2: "Bumili ng crypto gamit ang mga credit card. Mag-imbak, magpadala, mag-cross chain at mag-exchange ng madali.",
                            desc_3: "I-swap",
                            desc_4: "Agad at madali",
                            desc_5: "Bridge",
                            desc_6: "Kabilang sa iba't ibang mga chain",
                            desc_7: "Bumili ng Crypto",
                            desc_8: "Sa loob ng 5 minuto",
                            desc_9: "TP Card",
                            desc_10: "Paga con criptomonedas"
                        },
                        DAPPSTORE: {
                            title: "Isang DApp Store",
                            desc_1: "Maaari mong mahanap ang iyong mga paboritong desentralisadong application, tuklasin ang pinakabago at pinakamainit at gamitin ang mga ito nang hindi umaalis sa wallet.",
                            desc_2: "Pinagsama ang DApp Browser, maaari mong palaging ma-access ang DApps gamit ang iyong mga link.",
                            desc_3: "DeFi",
                            desc_4: "NFT",
                            desc_5: "DApp",
                            desc_6: "Sinusuportahan"
                        },
                        COMMUNITY: {
                            title: "Komunidad",
                            desc_1: "Iginigiit namin ang isang bukas na komunidad ng teknolohiya, at tinatanggap namin ang lahat ng mga developer na bumuo ng isang mas maginhawa, secure at mas mayamang mundo ng blockchain nang magkasama.",
                            desc_2: "TP-Lab",
                            desc_3: "Komunidad",
                            desc_4: "Dev Docs"
                        },
                        DOWNLOAD: {
                            title: "Kunin ang TokenPocket Wallet ngayon!",
                            desc_1: "Ang iyong secure at pinagkakatiwalaang crypto wallet para i-explore ang blockchain"
                        },
                        FOLLOW: {
                            title: "Sundan mo kami",
                            desc1: "Ang TokenPocket Staffs ay hindi magpapadala sa iyo ng mga pribadong mensahe!",
                            desc2: "Ingat! Pumapasok ka sa komunidad ng TokenPocket, maaaring may gumagaya sa amin para magpadala sa iyo ng mga pribadong mensahe! Mangyaring magkaroon ng kamalayan na, sinuman na nagpapadala ng mga pribadong mensahe ay maaaring isang scammer! Hindi ka muna namin makokontak!",
                            desc3: "Naiintindihan, pumasok"
                        },
                        EXTENSIONMODAL: {
                            title: "Live na ngayon ang extension!",
                            desc1: "Ang iyong Crypto at DeFi at GameFi",
                            desc2: "wallet sa computer",
                            btnText: "Gamitin Ito Ngayon",
                            btnTextm: "Kopyahin ang Link",
                            tips: "Matagumpay na kopyahin ang link, mangyaring pumunta sa computer para buksan"
                        }
                    },
                    DAPP: {
                        RULES: {
                            platform: "Kinakailangan ang network",
                            title: "Kinakailangan ang Pangalan ng DApp",
                            address: "Kinakailangan ang Contract ng DApp",
                            url: "Kinakailangan ang Website ng DApp",
                            desc: "Kinakailangan ang desc",
                            icon_url: "Kinakailangan ang Logo ng DApp",
                            rakeBackAccount: "Kinakailangan ang account ng Contract",
                            email: "Kinakailangan ang email",
                            others: "Kinakailangan ang iba pang impormasyon sa pakikipag-ugnayan",
                            category: "I-select ng kahit isang kategorya",
                            tp_connect: "Hindi maaaring blangko ang item na ito",
                            audit_url: "Kinakailangan ang URL ng ulat ng pag-audit."
                        },
                        title: "Pangalan ng DApp",
                        address: "Smart Contract",
                        url: "Website ng DApp",
                        desc: "Maikling Description",
                        icon: "Logo ng DApp",
                        referral: "Referral",
                        hasReferral: "May referral system ba ito",
                        referralReward: "Ang pamamahagi ng reward sa referral",
                        reward_1: "Awtomatikong ipamahagi sa pamamagitan ng smart contract (Live)",
                        reward_2: "Kailangang i-claim ito sa DApp nang Manu-mano",
                        hasInviteReward: "Kailangan bang gumawa ng transaksyon ang nag-imbita sa DApp para ma-activate ang referral link",
                        inviteAccount: "Ang smart contract ng referral distribution",
                        DAppRequirement: "DApp Requirement",
                        requirement_1: "Kailangang suportahan ng DApp ang TokenPocket mobile at TokenPocket extension.",
                        requirement_2: "Ang ibinigay na website ay naa-access at stable.",
                        requirement_3: "Ang mga smart contract ay na-deploy sa mainnet, at ang sensitibong bahagi ay nangangailangan na maging open source.",
                        requirement_4: "Ang mga sensitibong contract ay nangangailangan ng mga ulat sa pag-audit mula sa mga ahensya ng seguridad ng third-party.",
                        requirement_5: "Ang logic ng pakikipag-ugnayan ay malinaw at inangkop sa mobile UI.",
                        requirement_6: "Sundin ang mga nauugnay na batas at regulasyon, nang walang pandaraya at paglabag.",
                        requirement_7: "Kung lalabag ka sa mga nauugnay na batas at regulasyon, kusang-loob mong aakohin ang kaukulang mga legal na responsibilidad.",
                        dappInfo: "Impormasyon ng DApp:",
                        necessary: "kailangan",
                        language: "Wika ng DApp",
                        languageDesc: "(Mangyaring i-submit nang hiwalay para sa maraming wika)",
                        en: "English",
                        zh: "中文简体",
                        zhTW: "中文繁体",
                        descDesc: "Isang maikling paglalarawan ng proyekto sa isang pangungusap, na lalabas sa subtitle ng DApp",
                        auditInfo: "Impormasyon sa pag-audit:",
                        hasAudit: "Kung ang pag-audit ng contract ay naisagawa",
                        auditUrl: "URL ng ulat ng audit",
                        auditUrlExample: "Halimbawa: https://auditlink.com",
                        auditReport: "Ulat sa Pag-audit",
                        auditUpload: "Mag-upload",
                        contact: "Mga detalye ng contact",
                        contactDesc: "Pakitiyak na iwanan ang impormasyon sa pakikipag-ugnayan sa customer service maliban sa mailbox, kung hindi, hindi ito papasa sa pagsusuri",
                        emailAddr: "Email",
                        emailExample: "Halimbawa: build@tokenpocket.pro",
                        others: "Iba pa",
                        othersExample: "Halimbawa: https://t.me/tokenpocket_en",
                        auditOptional: "Punan ang hindi bababa sa isang item ng impormasyon sa pag-audit",
                        oversize: " ay lumampas sa mga kwalipikadong character",
                        select: "Mag-select",
                        tutorial_url: "https://help.tokenpocket.pro/developer-en/",
                        tutorial: "Tingnan ang tutorial",
                        noData: "Hindi nakita ang kadena~",
                        categories: "分类",
                        IS_SUPPORT_TP_CONNECT_1: "Sinusuportahan ba nito ang koneksyon ng TokenPocket?",
                        IS_SUPPORT_TP_CONNECT_2: "(Extension at Mobile app)",
                        IS_SUPPORT_TP_CONNECT_3: "Koneksyon ng TokenPocket",
                        dappTokensTitle: "Mga Token ng DApp",
                        dappTokens: "May mga token ba ang dapp mo?",
                        emailError: "Mangyaring i-enter ang tamang email address",
                        dappSmartContract: "Smart contract",
                        dappSmartContractDesc: "Idagdag ang mga smart contracts ng iyong DApp. Kung higit sa isa, paghiwalayin ng kuwit(,)",
                        addAuditUrl: "Magdagdag ng URL ng ulat sa pag-audit",
                        backToHome: "Bumalik sa Panimula",
                        openSmartContract: "I-edit ang smart contract para sa bawat blockchain",
                        openTokens: "I-edit ang impormasyon ng token",
                        tokens: "Magdagdag ng kahit isang impormasyon ng token",
                        addToken: "Magdagdag ng token",
                        network: "Network ng Token",
                        symbol: "Simbolo ng Token",
                        contract: "Contract ng Token"
                    },
                    DOWNLOAD: {
                        TITLE: "I-download ang TokenPocket",
                        TITLE_Android: "TokenPocket para sa Android",
                        TITLE_IOS: "TokenPocket para sa iOS",
                        TITLE_Chrome: "TokenPocket para sa iyong browser",
                        TEXT: "Ang TokenPocket ay isang multi-chain na crypto wallet, madali at secure na gamitin na pinagkakatiwalaan ng milyun-milyon.",
                        TEXT_Chrome: "Ang TokenPocket Extension ay isang multi-chain na crypto wallet, lahat ng EVM compatible na chain ay sinusuportahan. Madali at secure na gamitin ang pinagkakatiwalaan ng milyun-milyon.",
                        TEXT_PC: "Ang TokenPocket Desktop ay ang pinakamalaking multi-blockchain wallet na nakabatay sa EOS ETH BOS TRON, nagsusumikap kaming magbigay ng malakas at secure na pamamahala ng digital asset sa mga user.",
                        scanCode: "Scan to Download",
                        installTutorial: "I-install ang Tutorial",
                        desc_1: "I-download ang app mula sa opisyal na website at suriin ang SSL certification nito",
                        desc_2: "Protektahan ang iyong Recovery Phrase (mnemonic) at Private Key mula sa pag-leaking, huwag na huwag itong ibahagi sa iba",
                        desc_3: "Matuto pa ng mga tip sa seguridad",
                        verifyText: "Pinakabagong Bersyon ng Android:",
                        verifyText1: "Paano i-verify ang seguridad ng isang app",
                        verifyText2: "Pinakabagong bersyon",
                        verifyText3: "Pinakabagong Bersyon ng Google Play:",
                        footerDesc_1: "Sinusuportahan ang BTC, ETH, BSC, TRON, Matic, Aptos, Solana, EOS, Polkadot, IOST at iba pa.",
                        footerDesc_2: "Multi-layer na mga proteksyon sa seguridad",
                        footerDesc_3: "Sinusuportahan ang DeFi, DApp, GameFi at NFT",
                        coming_soon: "Coming Soon",
                        desc_tp_wallet: "ay opisyal na itinalaga bilang nag-iisang iOS App publisher ng TokenPocket",
                        tp_wallet_version: "TP Wallet Bersyon:",
                        token_pocket_version: "Token Pocket Bersyon:",
                        delisted: "Na-delist",
                        checkoutAllVersion: "Check All Versions",
                        apk32Title: "I-download ang 32-bit na package",
                        apk32Desc: "Ang 32-bit na installation package ay angkop para sa mga device na may mas mababang configuration. Kung mangyari na hindi maayos na ma-link ang DApp, maaari mong i-download at gamitin ang 32-bit na installation package.",
                        download: "I-download"
                    },
                    TOKEN: {
                        RULES: {
                            network: "Kinakailangan ang network",
                            email: "Kinakailangan ang email",
                            address: "Kinakailangan ang address",
                            owner_address: "Kinakailangan ang address ng may-ari",
                            symbol: "Kinakailangan ang simbolo",
                            bl_symbol: "Kinakailangan ang Simbolo ng BL",
                            total_supply: "Kinakailangan ang kabuuang supply",
                            decimal: "Kinakailangan ang decimal",
                            precision: "Kinakailangan ang Precision",
                            gas: "Kinakailangan ang GAS",
                            website: "Kailangan ang website",
                            website_1: "Official Website is too long",
                            companyName: "Kinakailangan ang pangalan ng kumpanya o personal",
                            contact: "Kinakailangan ang Contact",
                            description: "Project introduction is required",
                            description_1: "Token Introduction is too long",
                            name: "Kinakailangan ang Introduction ng proyekto",
                            icon_url: "Kinakailangan ang logo"
                        },
                        icon: "Logo ng Token",
                        handleText: "Ipoproseso namin ang iyong kahilingan sa loob ng 2 working days",
                        tokenStandard: "Pamantayan ng token",
                        requirement_1: "Huwag mag-submit ng honeypot token o scam token.",
                        requirement_2: "Huwag i-submit ang parehong token multiple.",
                        requirement_3: "Ang mga smart contract ay na-deploy sa mainnet.",
                        requirement_4: "Kailangan ang logo.",
                        requirement_5: "Kung lalabag ka sa mga nauugnay na batas at regulasyon, kusang-loob mong aakohin ang kaukulang mga legal na responsibilidad.",
                        addMore: "Magdagdag pa",
                        placeholder_1: "Mangyaring mag-enter...",
                        tokenRequirement: "Kinakailangan ng token",
                        information: "Impormasyon ng token",
                        network: "Network",
                        name: "Pangalan ng token",
                        symbol: "Pangalan ng Token",
                        success: "Success",
                        bl_symbol: "Simbolo ng BL",
                        precision: "Precision ng Token",
                        decimal: "Decimal ng Token",
                        totalSupply: "Kabuuang Supply",
                        contract: "Contract ng Token",
                        website: "Opisyal na website",
                        introduction: "Panimula ng Token"
                    },
                    RECRUITING: {
                        title: "TP Man Recruitment Plan",
                        text: "Sumali sa komunidad ng TokenPocket",
                        text1: "Nakatuon sa mundo ng blockchain at mag-ambag ng iyong bahagi",
                        text2: "Bumuo kami ng isang Web3.0 na mundo nang magkasama",
                        joinUs: "Sumali sa amin",
                        aboutTitle: "Tungkol sa TP Man",
                        aboutText: "Ang TP Man ay isang mahalagang bahagi ng komunidad ng TokenPocket, at taos-puso kaming nag-aanyaya sa iyo na sumali sa amin!",
                        aboutText1: "Ikaw ay isang mahilig sa blockchain at ini-endorso ang halaga ng industriya.",
                        aboutText2: "Tangkilikin ang kaginhawaan na hatid ng TokenPocket wallet kapag i-explore mo ang mundo ng blockchain.",
                        missionTitle: "Ang Misyon ng TP Man",
                        missionText: "Tulungan ang TokenPocket na maghatid ng higit pang mga gumagamit ng blockchain sa buong mundo. Umaasa kami na matugunan mo ang dalawa sa mga sumusunod na kinakailangan para mag-apply.",
                        missionText1: "Palawakin at isulong ang pakikipagtulungan ng TokenPocket sa mga kumpanya o maiinit na proyekto sa iyong bansa sa pamamagitan ng iba't ibang channel",
                        missionText2: "Magplano ng mga aktibidad sa marketing na nakakatugon sa mga pangangailangan ng mga lokal na user",
                        missionText3: "Magkaroon ng kakayahang magpatakbo ng mga pangunahing social media tulad ng Twitter, Youtube, Telegram, at Discord",
                        missionText4: "Fluent sa Ingles, at makatapos ng gawaing pagsasalin",
                        missionText5: "Plano ng TokenPocket na magbigay ng higit pang paggamit at teknikal na suporta para sa mga global na gumagamit ng blockchain, kaya umaasa kami na mayroon kang tiyak na pag-unawa sa mga merkado ng blockchain ng hindi bababa sa isang bansa at ang kanilang mga user (India, United States, Turkey, Russia, South Korea, Vietnam, Pilipinas, atbp.)",
                        getTitle: "Ano ang makukuha mo?",
                        getText: "Isang karanasan sa trabaho na direktang kasangkot sa iba't ibang larangan ng industriya ng blockchain, at makakakuha ka ngunit hindi limitado sa mga pagkakataon sa komunikasyon sa mga proyekto ng DApp, Influencer, at mainstream na media sa industriya.",
                        getText1: "Makakuha ng masaganang gantimpala mula sa iyong trabaho gaya ng pagsasalin ng mga tweet, paggawa ng video, pagpapatakbo ng komunidad at pakikipagtulungan sa negosyo.",
                        getText2: "Kunin ang pinakapropesyonal na pagsasanay sa kaalaman sa blockchain at galugarin ang mundo ng Web3.0 kasama ang koponan nang magkasama.",
                        getText3: "Mga opisyal na benepisyo ng TokenPocket, kabilang ang TokenPocket Swag at mga wallet ng hardware.",
                        processTitle: "Proseso ng pangangalap",
                        processText: "I-submit ang CV",
                        processText1: "Pagsusuri ng CV",
                        processText2: "Online na panayam ",
                        processText3: "Mga resulta ng panayam",
                        processText4: "Welcome sa aboard",
                        applyTitle: "Sino ang maaaring mag-apply",
                        applyText: "Harapin ang mundo, anuman ang bansa",
                        applyText1: "Maging masigasig at mausisa tungkol sa mundo ng blockchain",
                        applyText2: "Punan ang form at ilakip ang iyong resume, pagkatapos ay makikipag-ugnayan kami sa iyo sa lalong madaling panahon",
                        footerTitle: "Tungkol sa TokenPocket",
                        footerText: "sa buo",
                        footerText1_1: "20M",
                        footerText1_2: "pandaigdigang mga user",
                        footerText2_1: "3.5M",
                        footerText2_2: "buwanang aktibong user",
                        footerText3_1: "200",
                        footerText3_2: "mga bansa at rehiyon",
                        footerText4: "Ang TokenPocket ay ang nangungunang multi-chain na self-custodial wallet sa buong mundo",
                        footerText5: "Malapit na"
                    },
                    ABOUT: {
                        title: "Tungkol sa Amin",
                        desc: "Ang TokenPocket ay isang multi-chain na desentralisadong wallet, nagbibigay ito sa mga user ng mobile wallet, extension wallet at hardware wallet, na sumusuporta sa mga public chain kabilang ang Bitcoin, Ethereum, BNB Smart Chain, TRON, Polygon, Solana, Aptos, Polkadot, EOS at lahat ng EVM compatible chain. . Naglilingkod sa mahigit 30 milyong user mula sa mahigit 200 bansa at rehiyon. Ito ay isang nangungunang crypto wallet sa buong mundo na pinagkakatiwalaan ng mga global user.",
                        philosophy: {
                            title: "Ang aming Pilosopiya",
                            desc: "Iginigiit namin ang isang bukas na komunidad ng teknolohiya, at tinatanggap namin ang lahat ng mga developer na bumuo ng isang mas maginhawa, secure at mas mayamang mundo ng blockchain nang magkasama.",
                            ambition: "Ambisyon",
                            ambition_desc: "Gawin ang blockchain na mangyari sa lahat ng dako",
                            value: "kahalagahan",
                            value_desc: "Hayaang bumalik ang data sa mga user, gawing halaga ang pagmamay-ari ng mga tunay na may-ari",
                            attitude: "Saloobin",
                            attitude_desc: "Bukas ang isipan, pagtutulungan sa isa't isa"
                        },
                        milestones: {
                            title: "Milestones",
                            desc_2018_4_1: "Itinatag ang TokenPocket.",
                            desc_2018_8_1: "Namuhunan ng Huobi, Hofan, Byte Capital.",
                            desc_2019_8_1: "Inilabas ang desktop wallet, suportado ang TRON.",
                            desc_2019_11_1: "Ang pag-download ng Google Play ay lumampas sa 1,000,000.",
                            desc_2020_7_1: "Sinusuportahan ang HD wallet.",
                            desc_2020_9_1: "Sinusuportahan ang BSC at DeFi tendency.",
                            desc_2020_12_1: "Sinusuportahan ang Eth2.0 Staking.",
                            desc_2021_3_1: "Incubated Transit.",
                            desc_2021_6_1: "User base exceeded 20,000,000.",
                            desc_2021_8_1: "Incubated KeyPal hardware wallet.",
                            desc_2021_11_1: "Pag-upgrade ng brand, bagong logo at bagong brand.",
                            desc_2022_1_1: "Incubated ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://buy.transit.finance/ramp" target="_blank">Transit Buy</a>', ", suportado ng global fiat."),
                            desc_2022_5_1: "Nakuha ang dFox at na-rebranded sa TokenPocket Extension.",
                            desc_2022_7_1: "Namuhunan ang ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://debox.pro/" target="_blank">DeBox</a>', ", isang tool sa based ng komunidad na Nakabatay sa DID sa Web3."),
                            desc_2022_9_1: "Namuhunan ng WrapCoin.",
                            desc_2022_12_1: "Sinusuportahan ang multi-sig wallet.",
                            desc_2023_4_1: "Suportahan ang Ethereum Shapella Update.",
                            desc_2023_4_2: "Suportahan ang self-custody staking sa Stake Vault.",
                            desc_2023_5_1: "Inilunsad ang TRON Energy Rental at Energy Subsidy Service, na makakatipid ng hanggang 75% na bayad sa network para sa mga user.",
                            desc_2023_5_2: "Suportahan ang Bitcoin ecosystem, Nostr protocol, BRC-20.",
                            desc_2023_8_1: "Investment LRT protocol ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://www.puffer.fi/" target="_blank">Puffer Finance</a>', "."),
                            desc_2023_10_1: "Naka-encrypt ang ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://card.keypal.pro/" target="_blank">Keypal Card</a>', " na secure na chip card na ibinebenta."),
                            desc_2023_11_1: "Inilunsad ang AA Smart Wallet.",
                            desc_2024_2_1: "Nakakuha ng lisensya ng MSB mula sa FinCEN, USA.",
                            desc_2024_3_1: "Higit sa 600,000 mga follwer sa ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://twitter.com/TokenPocket_TP" target="_blank">Twitter (X)</a>', "."),
                            desc_2024_5_1: "Makipagtulungan sa Victory Securities, isang komprehensibong full-licensed securities firm.",
                            desc_2024_5_2: "Nanirahan sa HK Cyberport, nagtatag ng Asia-Pacific operations center.",
                            January: "Enero",
                            February: "Pebrero",
                            March: "Marso",
                            April: "Abril",
                            May: "Mayo",
                            June: "Hunyo",
                            July: "Hulyo",
                            August: "Agosto",
                            September: "Setyembre",
                            October: "Oktubre",
                            November: "Nobyembre",
                            December: "Disyembre"
                        },
                        contact_us: {
                            title: "Makipag-ugnayan sa amin",
                            service: "Serbisyo sa Customer",
                            service_desc: "service@tokenpocket.pro",
                            bd: "Pakikipagtulungan sa Negosyo",
                            bd_desc: "bd@tokenpocket.pro",
                            developers: "Mga Developer",
                            developers_desc: "Discord"
                        }
                    },
                    SEO: {
                        title: "TokenPocket - Ang iyong universal digital wallet | TP wallet - ETH wallet - BTC wallet - BSC wallet - HECO wallet - OKExChain wallet - Polkadot wallet - Kusama wallet - DeFi wallet - Layer 2 wallet - EOS wallet - TRX wallet - nostr",
                        description: "Ang TokenPocket ay isang world-leading digital currency wallet, na sumusuporta sa mga public blockchain kabilang ang BTC, ETH, BSC, HECO, TRON, OKExChain, Polkadot, Kusama, EOS at Layer 2.",
                        keywords: "TokenPocket,Token Pocket,TP wallet,Ethereum wallet,Bitcoin,EOS,IOST,COSMOS,heco,bsc,layer2,DeFi,wallet,crypto,blockchain,web3,NFT,nostr"
                    },
                    DAPPSTORE: {
                        document_title: "DAppStore | TokenPocket",
                        title: "DApp Store",
                        copy: "Copied successfully",
                        agreement: "Basahin at sumang-ayon",
                        risk_statement: "Pahayag ng Panganib",
                        no_again: "Walang karagdagang pagsigaw",
                        collect: "Mga Paborito",
                        no_collect: "Walang paboritong ngayon",
                        data_loading: "Naglo-load ng mga DApps...",
                        hot: "Trend",
                        hot_title: "Trending na DApps",
                        hot_desc: "Pag-aralan ang 100+ na pangunahing DApps sa mga pampublikong blockchains, kabilang ang DeFi, DEX, mga laro sa blockchain, mga merkado ng NFT, at higit pa, lahat sa iisang lugar. Kasama sa DeFi ang mga desentralisadong palitan (DEX), sintetikong mga asset, mga pagbabayad, pautang, at iba pang aplikasyon na batay sa blockchain.",
                        placeholder: "Maghanap ng mga DApps gamit ang mga pangalan o mga keyword",
                        recent_search: "Mga Huling Paghahanap",
                        hot_search: "Mainit na Paghahanap",
                        search_result: "Mga Resulta",
                        no_search_result: " Walang nahanap na mga talaan",
                        enter: "Pasok ",
                        supported_networks: "Sinusuportahang",
                        category: "Kategorya",
                        all_networks: "Lahat ng mga Network",
                        community_tutorial: "Mga Tutorial",
                        related_tokens: "Kaugnay na Mga Token",
                        more: "higit pa",
                        moreDApp: "higit pa",
                        cancel: "kanselahin"
                    },
                    BRANDKIT: {
                        title: "I-download ang kit",
                        download: "I-download",
                        desc: "Sa pahinang ito, makikita mo ang opisyal na logo ng TokenPocket at color palette upang matulungan kang ipakita ang aming brand sa iyong mga proyekto. Inaanyayahan ka naming tuklasin at gamitin ang mga resources na ito alinsunod sa aming mga alituntunin sa brand upang matiyak ang isang pare-pareho at propesyonal na representasyon ng TokenPocket.",
                        logoDownload: "I-download ang logo",
                        logoDownloadDesc: "I-download ang aming brand logo ngayon upang matiyak na ang iyong mga proyekto sa disenyo ay mapanatili ang isang pare-pareho at propesyonal na imahe. ",
                        logoDownloadDesc_1: "Ang lahat ng mga file ay mataas na kalidad at angkop para sa web, pag-print at iba’t ibang mga aplikasyon, na nagpapadali sa paggawa ng mga kahanga-hangang visual.",
                        colorVersion: "Bersyon ng kulay",
                        whiteVersion: "Bersyon na puti",
                        brandTrademark: "Trademark ng Brand",
                        brandTrademarkDesc: 'Ang icon ng TokenPocket ay binubuo ng mga malaking titik na "T" at "P";',
                        brandTrademarkDesc_2: 'ang bahagi ng teksto ay ang malaking "TOKEN POCKET";',
                        brandTrademarkDesc_3: "ang icon at teksto ay bumubuo sa trademark ng TokenPocket brand.",
                        logo: "Logo",
                        fullVertical: "Buo (Patayo)",
                        fullHorizontal: "Buo (Pahalang)",
                        spellingRules: "Mga Panuntunan sa Pagbaybay",
                        spellingRulesDesc: '"Kapag ipinapakita ang brand: TOKEN POCKET"',
                        spellingRulesDesc_1: '"apag ipinapakita ang app: TokenPocket"',
                        spellingRulesDesc_2: '"Maling halimbawa: TOKENPOCKET, Tokenpocket, tokenpocket"',
                        representingBrand: "Kapag ipinapakita ang brand",
                        applicationBrand: "Kapag ipinapakita ang app",
                        TokenPocketIcon: "Icon ng TokenPocket",
                        TokenPocketIconDesc: "Gamitin ang app icon kapag ang TokenPocket ay binanggit bilang isang app; ",
                        TokenPocketIconDesc_1: "gamitin ang social avatar sa mga social media o organisasyon tulad ng Twitter, Facebook, Medium at Telegram.",
                        roundedIcon: "Rounded icon",
                        squareIcon: "Parisukat na icon",
                        socialAvatar: "Social Avatar",
                        TokenPocketColor: "TokenPocket kulay",
                        TokenPocketColorDesc: "Ang kulay ng brand ng TokenPocket ay asul, na sumisimbolo sa teknolohikal na pakiramdam at tiwala sa internet. Gumagamit din ang app ng mga gradient na kulay sa mga chart nito.",
                        primary: "Pangunahing kulay",
                        secondary: "Pandagdag na kulay",
                        colorSystem: "Sistema ng kulay",
                        brandBlue: "Asul ng tatak",
                        brandBlack: "Itim ng tatak",
                        OffWhite: "Kulay puting malapit",
                        palette: "Paleta"
                    }
                },
                pt: {
                    COMMON: {
                        EMAIL: "Email",
                        BATCH_SENDER: "Batchsender",
                        YES: "Sim",
                        NO: "Não",
                        HAS: "Sim",
                        HAVENT: "Não",
                        BLOCKCHAIN: "Blockchain",
                        MULTIPLE_CHOICE: "(Escolha múltipla)",
                        IS_SUPPORT_TP_CONNECT: "Suporta conexão com TokenPocket (app móvel e extensão)?",
                        SUPPORT_BOTH: "Ambas são suportadas",
                        SUPPORT_EXTENSION: "Apenas extensão",
                        SUPPORT_MOBILE: "Apenas móvel",
                        SUPPORT_NONE: "Nenhuma",
                        blockchainWallet: "Carteira Blockchain",
                        iostWallet: "Carteira IOST",
                        tronWallet: "Carteira TRON",
                        platformInfo: {
                            eos: "EOS",
                            moac: "MOAC",
                            eth: "ETH",
                            jt: "Jingtum ",
                            enu: "ENU",
                            bos: "BOS",
                            iost: "IOST",
                            cosmos: "COSMOS",
                            bnb: "BNB",
                            trx: "TRON",
                            bsc: "BSC",
                            heco: "HECO",
                            okex: "OKExChain",
                            dot: "Polkadot",
                            hsc: "HSC",
                            matic: "Polygon",
                            klaytn: "Klaytn",
                            arb: "Arbitrum One",
                            arbn: "Arbirtum Nova",
                            ftm: "Fantom",
                            etc: "Ethereum Classic",
                            cfx: "Conflux eSpace",
                            solana: "Solana",
                            avax: "AVAX",
                            oe: "Optimistic Ethereum",
                            xdai: "Gnosis Chain",
                            harmony: "Harmony",
                            wax: "WAX",
                            aurora: "Aurora",
                            ksm: "Kusama",
                            mb: "Moonbeam",
                            sbg: "SubGame",
                            kcc: "KCC Mainnet",
                            lat: "PlatON",
                            bttc: "BTTC",
                            gt: "GateChain",
                            halo: "HALO",
                            aptos: "Aptos",
                            fil: "Filecoin FVM",
                            zks: "zkSync Era",
                            eosevm: "EOS EVM",
                            mantle: "Mantle",
                            linea: "Linea",
                            base: "Base",
                            opbnb: "opBNB",
                            polyzk: "Polygon zkEVM",
                            core: "CORE",
                            haqq: "HAQQ",
                            scroll: "Scroll",
                            manta: "Manta",
                            bevm: "BEVM",
                            zkfair: "ZKFair",
                            metis: "Metis",
                            zeta: "Zeta Chain",
                            merlin: "Merlin",
                            blast: "Blast",
                            xlayer: "X Layer",
                            bitlayer: "Bitlayer",
                            kroma: "Kroma"
                        },
                        submit: "Submeter",
                        confirm: "Confirmar",
                        save: "Salvar",
                        contactEmail: "Email de Contato:",
                        submitSuccess: "Envio bem-sucedido",
                        submitDAppSuccessDesc: "O DApp que você enviar será lançado após a nossa revisão!",
                        submitTokenSuccessDesc: "O token que você enviar será lançado após nossa revisão!",
                        backToHome: "Voltar para a página inicial",
                        searchNetwork: "Pesquisar nome do blockchain",
                        example: "Exemplo",
                        submitTokenInfoAndLogo: "Actualizar Logo do Token e outras informações",
                        toGithubSubmit: "Ir para Github",
                        contact: "Detalhes de Contato",
                        contactDesc: "Certifique-se de deixar as informações de contato do serviço ao cliente além do correio, caso contrário, não passará na revisão.",
                        addContactDetail: "Adicionar detalhe do contrato",
                        urlError: "Por favor, insira o URL correto",
                        eg: "por exemplo",
                        moreThan: "Não mais que {count} caracteres",
                        nftType: "Protocolo estandardizado NFT",
                        logoDesc: "Imagens que plagiam ou imitam projetos existentes, envolvem riscos de direitos autorais ou envolvem elementos políticos não serão aprovadas.",
                        logoDesc_2: "Por favor, envie um logotipo de <strong>400*400px, JPG&PNG</strong>, máximo de <strong>5M</strong> de alta qualidade para garantir que sua submissão seja revisada com sucesso.",
                        uploadError: "Por favor, envie um logotipo de 400*400px, JPG&PNG, máximo de 5M.",
                        nextStep: "Próxima Etapa",
                        donate: {
                            title: "Por Favor, Doe",
                            desc: 'Por favor, doe o valor especificado de <strong style="color: var(--color-1)">TPT</strong> ao enviar uma solicitação.',
                            tutorial: "Tutorial",
                            tutorial_1: 'Rede suportada: <strong style="color: var(--color-1)">BSC</strong>.',
                            tutorial_2: 'Token suportado: <strong style="color: var(--color-1)">TPT (</strong><span data-info="info" style="color: #2980FE;cursor: pointer;">Informação do Token</span><strong style="color: var(--color-1)">)</strong>. Se você enviar outro tipo de token, sua solicitação não será processada. <span data-link="link" style="color: #2980FE;cursor: pointer;">Vá obter TPT</span>',
                            tutorial_2_mobile: 'Token suportado: <strong style="color: var(--color-1)">TPT</strong>. Se você enviar outro tipo de token, sua solicitação não será processada. <span data-link="link" style="color: #2980FE;cursor: pointer;">Vá obter TPT</span>',
                            tutorial_3: '<strong style="color: var(--color-1)">Por favor, não saia desta página ao enviar o token</strong>. Se você sair, o valor pode mudar, e não poderemos confirmar seu pagamento.',
                            tutorial_4: 'Após o pagamento, cole o <strong style="color: var(--color-1)">link do hash da transação</strong> abaixo.',
                            amount: "Valor da Doação:",
                            blockchain: "Blockchain",
                            receivingAddress: "Endereço de Recebimento",
                            hash: "Link do Hash da Transação",
                            tokenInfo: "Informações do Token",
                            tokenContract: "Contrato do Token"
                        },
                        LAYOUT: {
                            features: "características",
                            products: "Produtos",
                            buyCryptoFooter: "Comprar",
                            mobileWallet: "Carteira móvel",
                            mobileWalletDesc: "Carteira móvel de Crypto e DeFi no blockchain.",
                            hardwareWallet: "Carteira de hardware",
                            hardwareWalletDesc: "Obtenha seu KeyPal, para proteger seus ativos.",
                            TPCard: "TP Card",
                            TPCardDesc: "Um cartão bancário que opera de maneira descentralizada.",
                            extensionWallet: "Extensão da carteira",
                            extensionWalletDesc: "Uma carteira melhor no seu computador.",
                            desktop: "Desktop Wallet",
                            fiveDegrees: "5Degrees",
                            versionVerification: "Verificação de autenticidade",
                            versionVerificationDesc: "Verifique sua carteira.",
                            approvalDetector: "Detector de aprovações",
                            approvalDetectorDesc: "Veja e desaprove seus tokens aprovados.",
                            tokenSecurity: "Segurança de tokens",
                            tokenSecurityDesc: "Verifique se o token é seguro pelo endereço do contrato.",
                            keyGenerator: "Gerador de chaves",
                            keyGeneratorDesc: "Gere chaves públicas e privadas aleatoriamente para várias redes.",
                            tokenProfile: "Perfil de token",
                            tokenProfileDesc: "Saiba todas as informações sobre o token.",
                            tokenClaim: "Reivindicação de tokens",
                            tokenClaimDesc: "Reivindique seu airdrop.",
                            easyInscription: "Inscrição fácil",
                            easyInscriptionDesc: "Uma ferramenta de inscrição segura.",
                            nostrAssetsBatchSender: "NostrAssets BatchSender",
                            nostrAssetsBatchSenderDesc: "Uma ferramenta de envio em massa para NostrAssets.",
                            BATCH_SENDER: "BatchSender",
                            BATCH_SENDER_DESC: "Envie tokens para vários destinatários de uma vez.",
                            trade: "Comércio",
                            swap: "Troca",
                            swapDesc: "Negocie com os melhores preços.",
                            bridge: "Ponte",
                            bridgeDesc: "Atravesse ativos de uma cadeia para outra sem problemas.",
                            buyCrypto: "Comprar",
                            buyCryptoDesc: "Compre criptomoedas com seus cartões de crédito.",
                            market: "Mercado",
                            marketDesc: "Insights em tempo real para descobrir tokens populares.",
                            information: "Informação",
                            blockchainGuide: "Guia da Blockchain",
                            tronWallet: "Guia TRON",
                            iostWallet: "Guia IOST",
                            tpMan: "Homem TP",
                            developers: "Desenvolvedores",
                            github: "Github (TP-Lab)",
                            devCenter: "Centro de Programadores",
                            developersDesc: "Documentação para desenvolvedores TokenPocket.",
                            subToken: "Enviar token",
                            subTokenDesc: "Envie seu token e NFT.",
                            subDApp: "Enviar DApp",
                            subDAppDesc: "Envie seu DApp, e ele será exibido após a auditoria.",
                            subNFT: "Enviar NFT",
                            subNFTDesc: "Envie seu NFT e arte.",
                            subChain: "Enviar cadeia",
                            subChainDesc: "Envie sua blockchain.",
                            bugBounty: "Bug Bounty",
                            tools: "Ferramentas",
                            build: "Construir",
                            learn: "Aprender",
                            explorer: "Explorar",
                            darkMode: "Modo Escuro",
                            company: "Companhia",
                            about: "Acerca (de)",
                            careers: "Carreiras",
                            pressKit: "Kit de marca",
                            swagShop: "Loja Swag",
                            support: "Suporte",
                            helpCenter: "Centro de ajuda",
                            helpCenterDesc: "Seus recursos para obter respostas e assistência.",
                            contactUs: "Contate-Nos",
                            contactUsDesc: "Compartilhe suas sugestões e faça qualquer pergunta.",
                            forum: "Fórum",
                            forumDesc: "Desfrute de suas conversas com os membros da comunidade.",
                            legal: "Legal",
                            privacyPolicy: "Política de Privacidade",
                            terms: "Termos de Utilização",
                            brandKit: "Kit de Marca",
                            toHome: "Página principal",
                            defiWallet: "Carteira DeF",
                            ETHWallet: "Carteira Ethereum",
                            ethWallet: "Carteira ETH"
                        }
                    },
                    HOME: {
                        download: "Descarga",
                        downloadNow: "Descarrega agora",
                        HEADER: {
                            title: "A tua carteira cripto segura para explorar a blockchain",
                            desc_1: "Fácil e segura para comprar, armazenar, enviar, trocar tokens e colecionar NFTs. Com a confiança de mais de 30 milhões de utilizadores de mais de 200 países e regiões"
                        },
                        INTRODUCTION: {
                            title: "Utilizadores à escala global confiam na Tokenpocket",
                            desc_1: "Providenciamos uma carteira segura e fácil de utilizar em mais de 200 países e regiões por todo o mundo",
                            desc_2: "Servindo os utilizadores",
                            desc_3: "Transações diárias",
                            desc_4: "Suporta países e reguões",
                            desc_5: "Fundado"
                        },
                        SECURITY: {
                            title: "Segurança como ela deve ser",
                            desc_1: "A TokenPocket gera e armazena chaves e passwords no teu dispositivo apenas, só tu podes aceder à tua conta e aos teus fundos.",
                            desc_2: "A TokenPocket também desenvolve carteiras frias e carteiras multi-sig a fim de melhorar a segurança de acordo com as tuas necessidades.",
                            desc_3: "Suportando BTC, ETH, BSC, TRON, Aptos, Polygon, Solana, Cosmos, Polkadot, EOS, IOST and so on."
                        },
                        EXCHANGE: {
                            title: "Troca e transaciona facilmente",
                            desc_1: "Podes negociar as tuas criptos a qualquer momento, em qualquer lado com a TokenPocket.",
                            desc_2: "Compra criptos com cartão de crédito. Armazena, envia, troca de cadeira e negoceia com facilidade.",
                            desc_3: "Swap",
                            desc_4: "Instantânea e fácil",
                            desc_5: "Bridge",
                            desc_6: "Entre diferentes cadeias",
                            desc_7: "Compra cripto",
                            desc_8: "Em 5 minutos",
                            desc_9: "TP Card",
                            desc_10: "Pague com criptomoedas"
                        },
                        DAPPSTORE: {
                            title: "Uma loja de DApps",
                            desc_1: "Podes encontrar as tuas aplicações descentralizadas favoritas, descobrir as mais recentes e populares sem sair da carteira.",
                            desc_2: "Explorador de DAapps integrado, podes sempre aceder às DApps com os teus links.",
                            desc_3: "DeFi",
                            desc_4: "NFT",
                            desc_5: "DApp",
                            desc_6: "Suportado"
                        },
                        COMMUNITY: {
                            title: "Comunidade",
                            desc_1: "Insistimos numa tecnologia aberta à comunidade e convidamos todos os programadores a desenvolver de uma forma mais conveniente e segura uma blockchain mais rica",
                            desc_2: "TP-Lab",
                            desc_3: "Comunidade",
                            desc_4: "Dev Docs"
                        },
                        DOWNLOAD: {
                            title: "Obtém uma carteira TokenPocket agora!",
                            desc_1: "A tua carteira segura e confiável para explorar a blockchain"
                        },
                        FOLLOW: {
                            title: "Siga-nos",
                            desc1: "TokenPocket Os funcionários não enviarão mensagens privadas!",
                            desc2: "uidado! Você está entrando na comunidade TokenPocket, pode haver alguém se passando por nós para lhe enviar mensagens privadas! Esteja ciente de que qualquer pessoa que envie mensagens privadas pode ser um golpista! Nós nunca entraremos em contato com você primeiro!",
                            desc3: "Entendido, digite"
                        },
                        EXTENSIONMODAL: {
                            title: "Extension is now live!",
                            desc1: "Your Crypto & DeFi & GameFi",
                            desc2: "wallet on computer",
                            btnText: "Use It Now",
                            btnTextm: "Copy Link",
                            tips: "Copy the link successfully, please go to the computer to open"
                        }
                    },
                    DAPP: {
                        RULES: {
                            platform: "Rede é obrigatória",
                            title: "Nome da DApp é necessário",
                            address: "Contrato da DApp é necessário",
                            url: "Website é necessário",
                            desc: "Descrição é necessária",
                            icon_url: "Logo da DApp é necessário",
                            rakeBackAccount: "Conta do contrato é necessária",
                            email: "Email é necessário",
                            others: "Outras informações de contacto são necessárias”",
                            category: "Selecione pelo menos uma categoria",
                            tp_connect: "Este campo não pode ser deixado em branco",
                            audit_url: "É necessário o URL do relatório de auditoria"
                        },
                        title: "Nome da DApp”",
                        address: "Smart Contract",
                        url: "ebsite da DApp",
                        desc: "Curta descrição”",
                        icon: "Logo da DApp",
                        referral: "Referenciação",
                        hasReferral: "em sistema de referenciação?",
                        referralReward: "Distribuição das recompensas de referenciação",
                        reward_1: "Distribui automaticamente pelo smart contract",
                        reward_2: "Necessária a colheita manual na DApp",
                        hasInviteReward: "O referenciador tem que efectuar uma transação na DApp para activar link de referenciação?",
                        inviteAccount: "O referenciador tem que efectuar uma transação na DApp para activar link de referenciação",
                        DAppRequirement: "Requerimentos da DApp",
                        requirement_1: "A DApp precisa de suportar TokenPocket móvel e extensão TokenPocket.",
                        requirement_2: "A DApp precisa de suportar TokenPocket móvel e extensão TokenPocket.",
                        requirement_3: "Os smart contracts estão implantados na mainnet e a parte sensitiva tem que ser open source.",
                        requirement_4: "Os contratos sensitivos requerem auditoria por parte de agentes de segurança terciários.",
                        requirement_5: "A lógica de integração é clara e foi adapatda ao UI móvel.",
                        requirement_6: "Obedece a leis e regulações relevantes, sem infringir a lei e sem fraude.",
                        requirement_7: "Se violares leis e regulações relevantes, assumirá voluntariamente as respectivas responsabilidades legais.",
                        dappInfo: "Informação da DApp:",
                        necessary: "requerido",
                        language: "Idioma da DApp",
                        languageDesc: "(Por favor submeter vários idiomas separadamente)",
                        en: "English",
                        zh: "中文简体",
                        zhTW: "中文繁体",
                        descDesc: "Uma breve descrição do projecto numa só frase, que irá aparecer como subtítulo",
                        auditInfo: "Informação sobre Auditoria:",
                        hasAudit: "Se o contracto foi auditado",
                        auditUrl: "URL do relatório de auditoria",
                        auditUrlExample: "For example: https://auditlink.com",
                        auditReport: "Relatório de Auditoria",
                        auditUpload: "Carregar",
                        contact: "Detalhes de contacto",
                        contactDesc: "Por favor assegura-te que forneces informação de contacto relativa ao serviço de apoio ao cliente para além do endereço de email, caso contrário não será aprovada",
                        emailAddr: "Email",
                        emailExample: "por exemplo: build@tokenpocket.pro",
                        others: "Outros",
                        othersExample: "por exemplo: https://t.me/tokenpocket_en",
                        auditOptional: "Preenche pelo menos um dos items acerca da auditoria",
                        oversize: "excedeu o número de caracteres",
                        select: "selecionar",
                        tutorial_url: "https://help.tokenpocket.pro/developer-en/",
                        tutorial: "Ver tutorial",
                        noData: "Corrente não encontrada~",
                        categories: "Categorias",
                        IS_SUPPORT_TP_CONNECT_1: "Suporta conexão com TokenPocket?",
                        IS_SUPPORT_TP_CONNECT_2: "(app móvel e extensão)",
                        IS_SUPPORT_TP_CONNECT_3: "Conexão TokenPocket",
                        dappTokensTitle: "Tokens de DApp",
                        dappTokens: "Seu DApp possui tokens?",
                        emailError: "Por favor, insira o endereço de email correto",
                        dappSmartContract: "Contrato inteligente",
                        dappSmartContractDesc: "Adicione os contratos inteligentes do seu DApp. Se houver mais de um, separe por vírgula(,)",
                        addAuditUrl: "Adicionar URL do relatório de auditoria",
                        backToHome: "Voltar para a página inicial",
                        openSmartContract: "Editar contrato inteligente para cada blockchain",
                        openTokens: "Editar informações do token",
                        tokens: "Adicionar pelo menos uma informação do token",
                        addToken: "Adicionar token",
                        network: "Rede de Tokens",
                        symbol: "Símbolo do Token",
                        contract: "Contrato do Token"
                    },
                    DOWNLOAD: {
                        TITLE: "Descarregar TokenPocket",
                        TITLE_Android: "TokenPocket para Android",
                        TITLE_IOS: "TokenPocket para iOS",
                        TITLE_Chrome: "TokenPocket para explorador",
                        TEXT: "A TokenPocket é uma carteira cripto multi-cadeia, fácil e segura de utilizar, confiada por milhões.",
                        TEXT_Chrome: "A extensão TokenPocket é uma carteira cripto multi-cadeia que suporta todas as cadeiras EVM. Fácil e segura, confiada por milhões.",
                        TEXT_PC: "A TokenPocket Desktop é a maior carteira multi-cadeira EOS ETH BOS TRON, providenciamos uma gestão segura e poderosa dos teus activos.",
                        scanCode: "Scan to Download",
                        installTutorial: "Install Tutorial",
                        desc_1: "Descarrega a app do website oficial e verifica a certificação SSL",
                        desc_2: "Protege a tua frase de recuperação (mnemónica) e a tua chave privada, nunca partilhes com terceiros",
                        desc_3: "Aprende mais dicas de segurança",
                        verifyText: "última versão APK:",
                        verifyText1: "Como verificar a segurança de uma app",
                        verifyText2: "última versão:",
                        verifyText3: "última versão no Google Play:",
                        footerDesc_1: "Suporta BTC, ETH, BSC, TRON, Matic, Aptos, Solana, EOS, Polkadot, IOST and so on.",
                        footerDesc_2: "Várias camadas de protecção",
                        footerDesc_3: "DeFi, DApp, GameFi and NFT supported",
                        coming_soon: "Coming Soon",
                        desc_tp_wallet: "foi oficialmente nomeada como a única editora de aplicativos iOS do TokenPocket",
                        tp_wallet_version: "TP Wallet Versão:",
                        token_pocket_version: "Token Pocket Versão:",
                        delisted: "Removido",
                        checkoutAllVersion: "Check All Versions",
                        apk32Title: "Baixar pacote de 32 bits",
                        apk32Desc: "O pacote de instalação de 32 bits é adequado para dispositivos com configurações mais baixas. Se você encontrar uma situação em que o DApp não pode ser vinculado corretamente, você pode baixar e usar o pacote de instalação de 32 bits.",
                        download: "Baixar"
                    },
                    TOKEN: {
                        RULES: {
                            network: "Rede é obrigatória",
                            email: "Email é necessário",
                            address: "Endereço é necessário",
                            owner_address: "Endereço do proprietário é necessário",
                            symbol: "Símbolo é necessário",
                            bl_symbol: "Símbolo BL é necessário",
                            total_supply: "Fornecimento total é necessário",
                            decimal: "Decimais são necessários",
                            precision: "Precisão é necessária",
                            gas: "Gas é necessário",
                            website: "Website é necessário",
                            website_1: "Official Website is too long",
                            companyName: "Companhia ou nome pessoal é necessário",
                            contact: "Contacto é necessário",
                            description: "Project introduction is required",
                            description_1: "Token Introduction is too long",
                            name: "Introdução ao projecto é necessária",
                            icon_url: "Logo é necessário"
                        },
                        icon: "Logo do token",
                        handleText: "Processaremos o teu pedido em 2 dias úteis",
                        tokenStandard: "Padrão do token",
                        requirement_1: "Não envie um token fraudulento ou de golpe.",
                        requirement_2: "Não envie o mesmo token várias vezes.",
                        requirement_3: "Os contratos inteligentes devem ser implantados na rede principal.",
                        requirement_4: "O logotipo é necessário..",
                        requirement_5: "Se você violar as leis e regulamentos relevantes, assumirá voluntariamente as responsabilidades legais correspondentes.",
                        addMore: "Adicionar mais",
                        placeholder_1: "Por favor, insira...",
                        tokenRequirement: "Requisitos do token",
                        information: "Informação do token",
                        network: "Rede",
                        name: "Nome do token",
                        symbol: "Nome do Token",
                        success: "Success",
                        bl_symbol: "Símbolo BL",
                        precision: "Precisão do Token",
                        decimal: "Decimais do Token",
                        totalSupply: "Fornecimento total",
                        contract: "Contrato do token",
                        website: "Site Oficial",
                        introduction: "Introdução do Token"
                    },
                    RECRUITING: {
                        title: "Plano de Recrutamento Homem TP",
                        text: "Junta-te à comunidade TokenPocket",
                        text1: "Comprometidos com a blockchain, contribui também",
                        text2: "Juntos construímos um mundo Web3.0",
                        joinUs: "Junta-te a nós",
                        aboutTitle: "Acerca do Homem TP",
                        aboutText: "O Homem TP é uma parte importante da comunidade TokenPocket, convidamos-te a juntares-te a nós!",
                        aboutText1: "És um entusiasta da blockchain e apoias o valor da industria",
                        aboutText2: "Disfruta da conveniência trazida pela carteira TokenPocket na exploração da blockchain",
                        missionTitle: "A missão do Homem TP",
                        missionText: "Ajuda a TokenPocket a servir mais utilizadores por todo o mundo. Esperamos que preenchas aos dois seguintes requisitos",
                        missionText1: "Expandir e promover a cooperação da Tokenpocket com outras companhias ou projectos no teu país através de vários canais",
                        missionText2: "Planear actividades de marketing dirigidas aos utilizadores locais",
                        missionText3: "Ter a habilidade para operar redes sociais tais como Twitter, Youtube, Telegram ou Discord",
                        missionText4: "Fluência em inglês e ser capaz de realizar traduções",
                        missionText5: "A TokenPocket planeia expandir a sua utilização bem como suporte técnico por isso esperamos que tenhas algum entendimento sobre a blockchain e os seus mercados em pelo menos um país (Índia, Estados Unidos, Turquia, Russia, Coreia do Sul, Vietname, Filipinas, etc",
                        getTitle: "O que irei receber?",
                        getText: "Uma experiência de trabalho em várias áreas da industria da blockchain e irás ter oportunidade de comunicar com outros projectos, influenciadores e meios de comunicação mainstream",
                        getText1: "Ganha recompensas pelos teus trabalhos, sejam eles traduções de tweets, vídeos, trabalho junto da comunidade ou desenvolvimento de negócios",
                        getText2: "Acede a conhecimentos profissionais e vamos explorar a Web3.0 juntos, em equipa",
                        getText3: "Benefícios oficiais da TokenPocket, incluindo TokenPocket Swag e carteiras frias",
                        processTitle: "Processo de recrutamento",
                        processText: "Submete o teu CV",
                        processText1: "Análise de CV",
                        processText2: "Entrevista Online",
                        processText3: "Resultados da entrevista",
                        processText4: "Sê bem-vindo",
                        applyTitle: "Quem pode candidatar-se",
                        applyText: "Aborda o mundo, independentemente do país",
                        applyText1: "Aplica-te e sê curioso acerca da blockchain",
                        applyText2: "Fill out the form and attach your resume, then we will contact you as soon as possible",
                        footerTitle: "Preenche o formulário e anexa o teu CV, iremos contactar-te o mais breve possível",
                        footerText: "mais",
                        footerText1_1: "20M",
                        footerText1_2: "Utilizadores globais",
                        footerText2_1: "3.5M",
                        footerText2_2: "utilizadores activos mensais",
                        footerText3_1: "200",
                        footerText3_2: "países e regiões",
                        footerText4: "A TokenPocket é a carteira líder a nível mundial",
                        footerText5: "Em breve"
                    },
                    ABOUT: {
                        title: "Acerca de Nós",
                        desc: "A TokenPocket é uma carteira descentralizada multi-cadeia disponível em carteira móvel, extensão do explorador e carteira fria, suportando cadeias públicas tais como Bitcoin, Ethereum, BNB Smart Chain, TRON, Polygon, Solana, Aptos, Polkadot, EOS e todas as cadeias compatíveis com EVM. É uma carteira lider a nível mundial, com a confiança de mais de 30 milhões de utilizadores em mais de 200 países e regiões em todo o mundo",
                        philosophy: {
                            title: "A nossa filosofia",
                            desc: "Acreditamos uma comunidade tecnológica aberta, pelo que convidamos todos os programadores de desenvolver uma blockchain mais rica conosco, de forma segura e conveniente",
                            ambition: " Ambição",
                            ambition_desc: "Fazer a blockchain acontecer em todo o lado",
                            value: "Valor",
                            value_desc: "Deixar os dados voltar aos utilizadores, fazer com que o valor pertença aos seus verdadeiros donos",
                            attitude: "Atitude",
                            attitude_desc: "Colaboração mútua de mente aberta"
                        },
                        milestones: {
                            title: "Marcos alcançados",
                            desc_2018_4_1: "Fundação da TokenPocket.",
                            desc_2018_8_1: "Investimento da Huobi, Hofan, Byte Capital.",
                            desc_2019_8_1: "Lançamento da carteira desktop, suportando TRON.",
                            desc_2019_11_1: "Mais de 1M de downloads na Google Play.",
                            desc_2020_7_1: "Suporte para carteira fria.",
                            desc_2020_9_1: "Suporte da BSC e plataformas DeFi.",
                            desc_2020_12_1: "Suporte de staking ETH2.0.",
                            desc_2021_3_1: "Incubação da TransitSwap.",
                            desc_2021_6_1: "Número de utilizadores ultrapassa os 20M.",
                            desc_2021_8_1: "Incubação da carteira fria KeyPal.",
                            desc_2021_11_1: "Atualização da marca (novo logo, nova marca)",
                            desc_2022_1_1: "Incubated ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://buy.transit.finance/ramp" target="_blank">Transit Buy</a>', ", global fiat supported."),
                            desc_2022_5_1: "Lançamento da incubadora da marca TansitBuy, suporte para moedas fiduciárias globais.",
                            desc_2022_7_1: "Investimento na ferramenta de gerenciamento de comunidade Web3 baseada em DID ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://debox.pro/" target="_blank">DeBox</a>'),
                            desc_2022_9_1: "Investimento no protocolo DID programável WrapCoin",
                            desc_2022_12_1: "Suporte para carteira multi-assinatura.",
                            desc_2023_4_1: "Suporte para a atualização Ethereum Shapella.",
                            desc_2023_4_2: "suporte para staking autogerido.",
                            desc_2023_5_1: "Lançamento do aluguel de energia Tron, redução dos custos de rede do usuário em até 75%",
                            desc_2023_5_2: "Suporte ao ecossistema Bitcoin, Nostr, BRC20.",
                            desc_2023_8_1: "Investimento no protocolo LRT ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://www.puffer.fi/" target="_blank">Puffer Finance</a>'),
                            desc_2023_10_1: "Lançamento do cartão de segurança criptografada ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://card.keypal.pro/" target="_blank">Keypal Card</a>'),
                            desc_2023_11_1: "Lançamento da carteira inteligente AA",
                            desc_2024_2_1: "Obtenção da licença MSB do FinCEN dos EUA.",
                            desc_2024_3_1: "Ultrapassagem de 600000 seguidores no ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://twitter.com/TokenPocket_TP" target="_blank">Twitter (X)</a>', "."),
                            desc_2024_5_1: "Cooperação profunda com a empresa de licenciamento completo Shengli Securities",
                            desc_2024_5_2: "instalação oficial no Cyberport de Hong Kong e estabelecimento do centro de operações da Ásia-Pacífico.",
                            January: "Janeiro",
                            February: "Fevereiro",
                            March: "Março",
                            April: "Abril",
                            May: "Maio",
                            June: "Junho",
                            July: "Julho",
                            August: "Agosto",
                            September: "Setembro",
                            October: "Outubro",
                            November: "Novembro",
                            December: "Dezembro"
                        },
                        contact_us: {
                            title: "Contacta-nos",
                            service: "Apoio ao Cliente",
                            service_desc: "service@tokenpocket.pro",
                            bd: "Propostas de Colaboração",
                            bd_desc: "bd@tokenpocket.pro",
                            developers: "Programadores",
                            developers_desc: "Discord"
                        }
                    },
                    SEO: {
                        title: "TokenPocket - Your universal digital wallet | TP wallet - ETH wallet - BTC wallet - BSC wallet - HECO wallet - OKExChain wallet - Polkadot wallet - Kusama wallet - DeFi wallet - Layer 2 wallet - EOS wallet - TRX wallet - nostr",
                        description: "A TokenPocket é uma carteira de activos digitais líder a nível mundial que suporta blockchains incluindo BTC, ETH, BSC, HECO, TRON, OKExChain, Polkadot, Kusama, EOS e Layer 2",
                        keywords: "TokenPocket,Token Pocket,TP wallet,Ethereum wallet,Bitcoin,EOS,IOST,COSMOS,heco,bsc,layer2,DeFi,wallet,crypto,blockchain,web3,NFT,nostr"
                    },
                    DAPPSTORE: {
                        document_title: "DAppStore | TokenPocket",
                        title: "Loja de DApp",
                        copy: "Copied successfully",
                        agreement: "Ler e concordar com",
                        risk_statement: "Declaração de Risco",
                        no_again: "Sem mais avisos",
                        no_collect: "Ainda sem favoritos",
                        data_loading: "Carregando DApps...",
                        collect: "Favoritos",
                        hot: "Tendência",
                        hot_title: "DApps em Tendência",
                        hot_desc: "Explore mais de 100 dos melhores DApps em blockchains públicos, incluindo DeFi, DEX, jogos blockchain, mercados de NFT e muito mais, tudo em um só lugar. DeFi inclui trocas descentralizadas (DEX), ativos sintéticos, pagamentos, empréstimos e outras aplicações baseadas em blockchain.",
                        placeholder: "Buscar DApps por nomes ou palavras-chave",
                        recent_search: "Pesquisas Recentes",
                        hot_search: "Pesquisas Populares",
                        search_result: "Resultados",
                        no_search_result: "Nenhum registro encontrado",
                        enter: "Entrar ",
                        supported_networks: "Suportado",
                        category: "Categoria",
                        all_networks: "Todas as Redes",
                        community_tutorial: "Tutoriais da Comunidade",
                        related_tokens: "Tokens Relacionados",
                        more: "Mais",
                        moreDApp: "Mais",
                        cancel: "Cancelar"
                    },
                    BRANDKIT: {
                        title: "Baixar kit",
                        download: "Baixar",
                        desc: "Nesta página, você encontrará o logotipo oficial do TokenPocket e a paleta de cores para ajudá-lo a apresentar nossa marca em seus projetos. Convidamos você a explorar e usar esses recursos de acordo com nossas diretrizes de marca para garantir uma representação consistente e profissional do TokenPocket.",
                        logoDownload: "Baixar o logo",
                        logoDownloadDesc: "Baixe agora o nosso logo de marca para garantir que seus projetos de design mantenham uma imagem consistente e profissional. ",
                        logoDownloadDesc_1: "Todos os arquivos são de alta qualidade e adequados para web, impressão e vários aplicativos, facilitando a criação de materiais visuais impressionantes.",
                        colorVersion: "Versão de cor",
                        whiteVersion: "Versão branca",
                        brandTrademark: "Marca registrada",
                        brandTrademarkDesc: 'O ícone TokenPocket é composto pelas letras maiúsculas "T" e "P";',
                        brandTrademarkDesc_2: 'a parte do texto é "TOKEN POCKET" em maiúsculas;',
                        brandTrademarkDesc_3: "o ícone e o texto constituem a marca registrada TokenPocket.",
                        logo: "Logo",
                        fullVertical: "Completo (Vertical)",
                        fullHorizontal: "Completo (Horizontal)",
                        spellingRules: "Regras de ortografia",
                        spellingRulesDesc: '"Quando representar a marca: TOKEN POCKET"',
                        spellingRulesDesc_1: '"Quando representar o aplicativo: TokenPocket"',
                        spellingRulesDesc_2: '"Exemplo incorreto: TOKENPOCKET, Tokenpocket, tokenpocket"',
                        representingBrand: "Quando representar a marca",
                        applicationBrand: "Quando representar o aplicativo",
                        TokenPocketIcon: "Ícone do TokenPocket",
                        TokenPocketIconDesc: '"Use o ícone do aplicativo quando o TokenPocket for mencionado como um aplicativo;',
                        TokenPocketIconDesc_2: "use o avatar social nas redes sociais ou organizações como Twitter, Facebook, Medium e Telegram.",
                        roundedIcon: "Ícone arredondado",
                        squareIcon: "Ícone quadrado",
                        socialAvatar: "Avatar social",
                        TokenPocketColor: "Cor TokenPocket",
                        TokenPocketColorDesc: "A cor da marca do TokenPocket é azul, que simboliza a sensação tecnológica e confiança da internet. Cores em gradiente também são usadas nos gráficos do aplicativo.",
                        primary: "Primário",
                        secondary: "Cor secundária",
                        colorSystem: "Sistema de cores",
                        brandBlue: "Azul da marca",
                        brandBlack: "Preto da marca",
                        OffWhite: "Branco gelo",
                        palette: "Paleta"
                    }
                },
                vi: {
                    COMMON: {
                        EMAIL: "Email",
                        YES: "Có",
                        NO: "Không",
                        HAS: "Có",
                        HAVENT: "Không",
                        BLOCKCHAIN: "Blockchain",
                        MULTIPLE_CHOICE: "(Nhiều lựa chọn)",
                        IS_SUPPORT_TP_CONNECT: "Có hỗ trợ kết nối TokenPocket không? (Ứng dụng mở rộng và ứng dụng dành cho thiết bị di động)",
                        SUPPORT_BOTH: "Cả hai đều được hỗ trợ",
                        SUPPORT_EXTENSION: "Chỉ ứng dụng mở rộng",
                        SUPPORT_MOBILE: "Chỉ ứng dụng dành cho thiết bị di động",
                        SUPPORT_NONE: "Không có",
                        blockchainWallet: "Ví Blockchain",
                        iostWallet: "Ví IOST",
                        tronWallet: "Ví TRON",
                        platformInfo: {
                            eos: "EOS",
                            moac: "MOAC",
                            eth: "ETH",
                            jt: "Jingtum ",
                            enu: "ENU",
                            bos: "BOS",
                            iost: "IOST",
                            cosmos: "COSMOS",
                            bnb: "BNB",
                            trx: "TRON",
                            bsc: "BSC",
                            heco: "HECO",
                            okex: "OKExChain",
                            dot: "Polkadot",
                            hsc: "HSC",
                            matic: "Polygon",
                            klaytn: "Klaytn",
                            arb: "Arbitrum One",
                            arbn: "Arbirtum Nova",
                            ftm: "Fantom",
                            etc: "Ethereum Classic",
                            cfx: "Conflux eSpace",
                            solana: "Solana",
                            avax: "AVAX",
                            oe: "Optimistic Ethereum",
                            xdai: "Gnosis Chain",
                            harmony: "Harmony",
                            wax: "WAX",
                            aurora: "Aurora",
                            ksm: "Kusama",
                            mb: "Moonbeam",
                            sbg: "SubGame",
                            kcc: "KCC Mainnet",
                            lat: "PlatON",
                            bttc: "BTTC",
                            gt: "GateChain",
                            halo: "HALO",
                            aptos: "Aptos",
                            fil: "Filecoin FVM",
                            zks: "zkSync Era",
                            eosevm: "EOS EVM",
                            mantle: "Mantle",
                            linea: "Linea",
                            base: "Base",
                            opbnb: "opBNB",
                            polyzk: "Polygon zkEVM",
                            core: "CORE",
                            haqq: "HAQQ",
                            scroll: "Scroll",
                            manta: "Manta",
                            bevm: "BEVM",
                            zkfair: "ZKFair",
                            metis: "Metis",
                            zeta: "Zeta Chain",
                            merlin: "Merlin",
                            blast: "Blast",
                            xlayer: "X Layer",
                            bitlayer: "Bitlayer",
                            kroma: "Kroma"
                        },
                        submit: "Nộp",
                        confirm: "Xác nhận",
                        save: "Lưu",
                        contactEmail: "Liên hệ Email:",
                        submitSuccess: "Nộp thành công",
                        submitDAppSuccessDesc: "DApp bạn nộp sẽ được ra mắt sau khi chúng tôi xem xét!",
                        submitTokenSuccessDesc: "Token bạn nộp sẽ được ra mắt sau khi chúng tôi xem xét!",
                        backToHome: "Trở về trang chủ",
                        searchNetwork: "Tìm kiếm tên blockchain",
                        example: "Ví dụ",
                        submitTokenInfoAndLogo: "Cập nhật biểu tượng Token và các Thông tin khác",
                        toGithubSubmit: "Đi tới Github",
                        contact: "Thông tin liên hệ",
                        contactDesc: "* Hãy chắc chắn để lại thông tin liên hệ dịch vụ khách hàng ngoài email, nếu không sẽ không được xét duyệt.",
                        addContactDetail: "Thêm chi tiết hợp đồng",
                        urlError: "Vui lòng nhập địa chỉ email chính xác",
                        eg: "ví dụ:",
                        moreThan: "Không quá {count} ký tự",
                        nftType: "Tiêu chuẩn giao thức NFT",
                        logoDesc: "Hình ảnh sao chép hoặc bắt chước các dự án hiện có, có rủi ro về bản quyền hoặc liên quan đến các yếu tố chính trị sẽ không được phê duyệt.",
                        logoDesc_2: "Vui lòng gửi logo <strong>400*400px, JPG&PNG</strong>, tối đa <strong>5M</strong> chất lượng cao để đảm bảo yêu cầu của bạn được xem xét thành công.",
                        uploadError: "Vui lòng gửi logo 400*400px, JPG&PNG, tối đa 5M.",
                        nextStep: "Bước Tiếp Theo",
                        donate: {
                            title: "Vui Lòng Quyên Góp",
                            desc: 'Vui lòng quyên góp số tiền được chỉ định <strong style="color: var(--color-1)">TPT</strong> khi gửi yêu cầu.',
                            tutorial: "Hướng Dẫn",
                            tutorial_1: 'Mạng lưới được hỗ trợ: <strong style="color: var(--color-1)">BSC</strong>.',
                            tutorial_2: 'Token được hỗ trợ: <strong style="color: var(--color-1)">TPT (</strong><span data-info="info" style="color: #2980FE;cursor: pointer;">Thông Tin Token</span><strong style="color: var(--color-1)">)</strong>. Nếu bạn gửi bất kỳ loại token nào khác, yêu cầu của bạn sẽ không được xử lý. <span data-link="link" style="color: #2980FE;cursor: pointer;">Đi đến nhận TPT</span>',
                            tutorial_2_mobile: 'Token được hỗ trợ: <strong style="color: var(--color-1)">TPT</strong>. Nếu bạn gửi bất kỳ loại token nào khác, yêu cầu của bạn sẽ không được xử lý. <span data-link="link" style="color: #2980FE;cursor: pointer;">Đi đến nhận TPT</span>',
                            tutorial_3: '<strong style="color: var(--color-1)">Vui lòng không rời khỏi trang này khi đang gửi token</strong>. Nếu bạn rời đi, số tiền có thể thay đổi và chúng tôi sẽ không thể xác nhận khoản thanh toán của bạn.',
                            tutorial_4: 'Sau khi thanh toán, hãy dán <strong style="color: var(--color-1)">liên kết hash giao dịch</strong> bên dưới.',
                            amount: "Số Tiền Quyên Góp:",
                            blockchain: "Chuỗi khối",
                            receivingAddress: "Địa Chỉ Nhận",
                            hash: "Liên Kết Hash Giao Dịch",
                            tokenInfo: "Thông tin Token",
                            tokenContract: "Hợp đồng Token"
                        },
                        LAYOUT: {
                            features: "Tính năng",
                            products: "Sản phẩm",
                            buyCryptoFooter: "buyCrypto",
                            mobileWallet: "Ví Điện Thoại",
                            mobileWalletDesc: "Ví di động Crypto & DeFi trên blockchain.",
                            hardwareWallet: "Ví Cứng",
                            hardwareWalletDesc: "Nhận KeyPal của bạn để bảo vệ tài sản của bạn.",
                            TPCard: "TP Card",
                            TPCardDesc: "Thẻ ngân hàng hoạt động theo cách phi tập trung.",
                            extensionWallet: "Ví Mở Rộng",
                            extensionWalletDesc: "Một ví tốt hơn trên máy tính của bạn.",
                            desktop: "Desktop Wallet",
                            fiveDegrees: "5Degrees",
                            versionVerification: "Kiểm tra tính xác thực",
                            versionVerificationDesc: "Xác minh ví của bạn.",
                            approvalDetector: "Phát Hiện Phê Duyệt",
                            approvalDetectorDesc: "Xem và hủy phê duyệt các token đã phê duyệt của bạn.",
                            tokenSecurity: "An Ninh Token",
                            tokenSecurityDesc: "Xác minh token có an toàn bằng địa chỉ hợp đồng của nó.",
                            keyGenerator: "Tạo Khóa",
                            keyGeneratorDesc: "Tạo ngẫu nhiên khóa công khai và khóa riêng cho các mạng khác nhau.",
                            tokenProfile: "Hồ Sơ Token",
                            tokenProfileDesc: "Tìm hiểu tất cả thông tin về token.",
                            tokenClaim: "Yêu Cầu Token",
                            tokenClaimDesc: "Nhận airdrop của bạn.",
                            easyInscription: "Khắc Chữ Dễ Dàng",
                            easyInscriptionDesc: "Công cụ khắc an toàn.",
                            nostrAssetsBatchSender: "NostrAssets BatchSender",
                            nostrAssetsBatchSenderDesc: "Công cụ gửi hàng loạt cho NostrAssets.",
                            BATCH_SENDER: "BatchSender",
                            BATCH_SENDER_DESC: "Gửi token cho nhiều người nhận cùng một lúc.",
                            trade: "Công cụ",
                            swap: "Hoán đổi",
                            swapDesc: "Giao dịch với giá tốt nhất.",
                            bridge: "Cầu Nối",
                            bridgeDesc: "Chuyển tài sản từ chuỗi này sang chuỗi khác một cách mượt mà.",
                            buyCrypto: "Mua",
                            buyCryptoDesc: "Mua tiền điện tử bằng thẻ tín dụng của bạn.",
                            market: "Thị Trường",
                            marketDesc: "Thông tin chi tiết theo thời gian thực để khám phá các token hot.",
                            information: "Thông tin",
                            blockchainGuide: "Hướng dẫn về Blockchain",
                            tronWallet: "Hướng dẫn về TRON",
                            iostWallet: "Hướng dẫn về IOST",
                            tpMan: "TP Man",
                            developers: "Nhà Phát Triển",
                            github: "Github (TP-Lab)",
                            devCenter: "Trung tâm phát triển",
                            developersDesc: "Tài liệu phát triển TokenPocket.",
                            subToken: "Nộp Token",
                            subTokenDesc: "Gửi token và NFT của bạn.",
                            subDApp: "Nộp DApp",
                            subDAppDesc: "Gửi DApp của bạn và hiển thị nó sau khi kiểm duyệt.",
                            subNFT: "Nộp NFT",
                            subNFTDesc: "Gửi NFT và nghệ thuật của bạn.",
                            subChain: "Nộp Chuỗi",
                            subChainDesc: "Gửi blockchain của bạn.",
                            bugBounty: "Bug Bounty",
                            tools: "Công cụ",
                            build: "Xây dựng",
                            learn: "Học",
                            explorer: "Trình khám phá",
                            darkMode: "Chế độ tối",
                            company: "Công ty",
                            about: "Giới thiệu",
                            careers: "Nghề nghiệp",
                            pressKit: "Bộ công cụ thương hiệu",
                            swagShop: "Swag Shop",
                            support: "Hỗ trợ",
                            helpCenter: "Trung tâm Trợ giúp",
                            helpCenterDesc: "Nguồn tài nguyên của bạn để có câu trả lời và hỗ trợ.",
                            contactUs: "Liên hệ Chúng Tôi",
                            contactUsDesc: "Chia sẻ đề xuất của bạn và hỏi bất kỳ câu hỏi nào.",
                            forum: "Diễn Đàn",
                            forumDesc: "Thưởng thức các cuộc trò chuyện với các thành viên cộng đồng.",
                            legal: "Hợp pháp",
                            privacyPolicy: "Chính sách bảo mật",
                            terms: "Điều khoản Sử dụng",
                            brandKit: "Bộ công cụ thương hiệu",
                            toHome: "Trang chủ",
                            defiWallet: "Ví DeFi",
                            ETHWallet: "Ví Ethereum",
                            ethWallet: "Ví ETH"
                        }
                    },
                    HOME: {
                        download: "Tải xuống",
                        downloadNow: "Tải ngay",
                        HEADER: {
                            title: "Ví tiền điện tử an toàn của bạn giúp khám phá blockchain",
                            desc_1: "Dễ dàng và an toàn để mua, lưu trữ, gửi, hoán đổi token và thu thập NFT. Được tin dùng bởi hơn 30 triệu người dùng từ hơn 200 quốc gia và khu vực."
                        },
                        INTRODUCTION: {
                            title: "TokenPocket được người dùng toàn cầu tin cậy",
                            desc_1: "Chúng tôi đang cung cấp dịch vụ ví tiền điện tử an toàn và dễ dàng tại hơn 200 quốc gia và khu vực trên thế giới",
                            desc_2: "Phục vụ người dùng",
                            desc_3: "Giao dịch hàng ngày",
                            desc_4: "Hỗ trợ các quốc gia và khu vực",
                            desc_5: "Được thành lập"
                        },
                        SECURITY: {
                            title: "Bảo mật đúng cấp độ",
                            desc_1: "TokenPocket chỉ tạo và lưu trữ khóa và mật khẩu trên thiết bị của bạn, chỉ bạn mới có thể truy cập vào tài khoản và tài sản của mình.",
                            desc_2: "TokenPocket cũng phát triển ví lạnh phần cứng và tính năng ví đa chữ ký để tăng cường bảo mật khi bạn cần.",
                            desc_3: "Hỗ trợ BTC, ETH, BSC, TRON, Polygon, Solana, Cosmos, Polkadot, EOS, IOST, v.v."
                        },
                        EXCHANGE: {
                            title: "Trao đổi & Giao dịch Dễ dàng",
                            desc_1: "Bạn có thể giao dịch bằng tiền điện tử của mình mọi lúc, mọi nơi trong TokenPocket.",
                            desc_2: "Mua tiền điện tử bằng thẻ tín dụng. Lưu trữ, gửi, chuỗi chéo và trao đổi một cách dễ dàng.",
                            desc_3: "Tráo đổi",
                            desc_4: "Tức thì và dễ dàng",
                            desc_5: "Cầu",
                            desc_6: "Giữa các chuỗi khác nhau",
                            desc_7: "Mua tiền điện tử",
                            desc_8: "Trong 5 phút",
                            desc_9: "TP Card",
                            desc_10: "Thanh toán bằng tiền điện tử"
                        },
                        DAPPSTORE: {
                            title: "A DApp Store",
                            desc_1: "Bạn có thể tìm thấy các ứng dụng phi tập trung yêu thích của mình, khám phá và sử dụng những ứng dụng mới nhất và hấp dẫn nhất mà không cần rời khỏi ví.",
                            desc_2: "Trình duyệt DApp được tích hợp, bạn luôn có thể truy cập DApp bằng các liên kết của mình.",
                            desc_3: "DeFi",
                            desc_4: "NFT",
                            desc_5: "DApp",
                            desc_6: "Được hỗ trợ"
                        },
                        COMMUNITY: {
                            title: "Cộng đồng",
                            desc_1: "Chúng tôi quyết tâm tạo ra một cộng đồng công nghệ mở và hoan nghênh tất cả các nhà phát triển cùng nhau xây dựng một thế giới blockchain thuận tiện, an toàn và phong phú hơn",
                            desc_2: "TP-Lab",
                            desc_3: "Cộng đồng",
                            desc_4: "Tài liệu phát triển"
                        },
                        DOWNLOAD: {
                            title: "Nhận Ví TokenPocket ngay bây giờ!",
                            desc_1: "Ví tiền điện tử an toàn và uy tín của bạn giúp khám phá blockchain"
                        },
                        FOLLOW: {
                            title: "Theo chúng tôi",
                            desc1: "Nhân viên TokenPocket sẽ không gửi tin nhắn riêng tư cho bạn!",
                            desc2: "Thận trọng! Bạn đang tham gia cộng đồng TokenPocket, có thể có ai đó mạo danh chúng tôi để gửi tin nhắn riêng tư cho bạn! Xin lưu ý rằng bất kỳ ai gửi tin nhắn riêng tư đều có thể là kẻ lừa đảo! Chúng tôi sẽ không bao giờ liên hệ với bạn trước!",
                            desc3: "Đã hiểu, nhập"
                        },
                        EXTENSIONMODAL: {
                            title: "Ứng dụng mở rộng hiện đã hoạt động!",
                            desc1: "Crypto & DeFi & GameFi của bạn",
                            desc2: "ví trên máy tính",
                            btnText: "Sử dụng ngay",
                            btnTextm: "Sao chép link",
                            tips: "Copy link thành công, vui lòng vào máy tính để mở"
                        }
                    },
                    DAPP: {
                        RULES: {
                            platform: "Bắt buộc phải có platfrom",
                            title: "Bắt buộc phải có tên DApp",
                            address: "Bắt buộc phải có hợp đồng DApp",
                            url: "Bắt buộc phải có trang web DApp",
                            desc: "Bắt buộc phải có mô tả",
                            icon_url: "Bắt buộc phải có logo DApp",
                            rakeBackAccount: "Bắt buộc phải có tài khoản hợp đồng",
                            email: "Bắt buộc phải có email",
                            others: "Bắt buộc phải có thông tin liên hệ khác",
                            category: "Chọn ít nhất một danh mục",
                            tp_connect: "Mục này không được để trống",
                            audit_url: "Cần có URL của báo cáo kiểm toán"
                        },
                        title: "Tên DApp",
                        address: "Hợp đồng Thông minh",
                        url: "Trang web DApp",
                        desc: "Mô tả ngắn",
                        icon: "Logo DApp",
                        referral: "Giới thiệu",
                        hasReferral: "Có hệ thống giới thiệu không",
                        referralReward: "Phát phần thưởng giới thiệu",
                        reward_1: "Tự động phát theo hợp đồng thông minh (Trực tiếp)",
                        reward_2: "Cần phải nhận phần thưởng trên DApp theo cách thủ công",
                        hasInviteReward: "Người mời có cần thực hiện giao dịch trong DApp để kích hoạt link giới thiệu không",
                        inviteAccount: "Hợp đồng thông minh về chuyển lời mời giới thiệu",
                        DAppRequirement: "Yêu cầu DApp",
                        requirement_1: "DApp cần phải hỗ trợ ứng dụngTokenPocket trên thiết bị di động và ứng dụng TokenPocket mở rộng.",
                        requirement_2: "Trang web được cung cấp có thể truy cập được và ổn định.",
                        requirement_3: "Các hợp đồng thông minh đã được triển khai trên mạng chính và phần nhạy cảm phải là mã nguồn mở.",
                        requirement_4: "Các hợp đồng nhạy cảm yêu cầu phải có báo cáo kiểm tra từ các cơ quan an ninh bên thứ ba",
                        requirement_5: "Logic tương tác rõ ràng và đã được điều chỉnh cho phù hợp với giao diện người dùng di động.",
                        requirement_6: "Tuân thủ luật định có liên quan, không gian lận và vi phạm.",
                        requirement_7: "Nếu bạn vi phạm các luật định liên quan, bạn sẽ phải tự chịu trách nhiệm pháp lý tương ứng.",
                        dappInfo: "Thông tin DApp:",
                        necessary: "yêu cầu",
                        language: "Ngôn ngữ DApp",
                        languageDesc: "(Vui lòng gửi riêng nếu có nhiều ngôn ngữ)",
                        en: "English",
                        zh: "中文简体",
                        zhTW: "中文繁体",
                        descDesc: "Mô tả ngắn gọn về dự án trong một câu, câu này sẽ xuất hiện trong phụ đề DApp",
                        auditInfo: "Thông tin kiểm tra:",
                        hasAudit: "Việc kiểm tra hợp đồng đã được thực hiện hay chưa",
                        auditUrl: "Url báo cáo kiểm tra",
                        auditUrlExample: "Ví dụ: https://auditlink.com",
                        auditReport: "Báo cáo kiểm tra",
                        auditUpload: "Tải lên",
                        contact: "Thông tin liên hệ",
                        contactDesc: "Hãy chắc chắn để lại thông tin liên hệ cho bộ phận dịch vụ khách hàng ngoài hộp thư, nếu không sẽ không được xem xét",
                        emailAddr: "Email",
                        emailExample: "Ví dụ: build@tokenpocket.pro",
                        others: "Khác",
                        othersExample: "Ví dụ: https://t.me/tokenpocket_en",
                        auditOptional: "Điền vào ít nhất một mục thông tin kiểm tra",
                        oversize: "đã vượt quá số ký tự đủ điều kiện",
                        select: "Lựa chọn",
                        tutorial_url: "https://help.tokenpocket.pro/developer-en/",
                        tutorial: "Xem hướng dẫn",
                        noData: "Thêm URL báo cáo kiểm tra",
                        categories: "Danh mục",
                        IS_SUPPORT_TP_CONNECT_1: "Có hỗ trợ kết nối TokenPocket không? ",
                        IS_SUPPORT_TP_CONNECT_2: "(Ứng dụng mở rộng và ứng dụng dành cho thiết bị di động)",
                        IS_SUPPORT_TP_CONNECT_3: "Kết nối TokenPocket",
                        dappTokensTitle: "Token DApp",
                        dappTokens: "DApp của bạn có token không?",
                        emailError: "Vui lòng nhập địa chỉ email chính xác",
                        dappSmartContract: "Hợp đồng thông minh",
                        dappSmartContractDesc: "Thêm hợp đồng thông minh của DApp của bạn. Nếu có nhiều hơn một, hãy ngăn cách bằng dấu phẩy (,)",
                        addAuditUrl: "Thêm URL báo cáo kiểm toán",
                        backToHome: "Trở về trang chủ",
                        openSmartContract: "Chỉnh sửa hợp đồng thông minh cho mỗi blockchain",
                        openTokens: "Chỉnh sửa thông tin token",
                        tokens: "Thêm ít nhất một thông tin token",
                        addToken: "Thêm token",
                        network: "Mạng lưới Token",
                        symbol: "Ký hiệu Token",
                        contract: "Hợp đồng Token"
                    },
                    DOWNLOAD: {
                        TITLE: "Tải xuống TokenPocket",
                        TITLE_Android: "TokenPocket dành cho Android",
                        TITLE_IOS: "TokenPocket dành cho iOS",
                        TITLE_Chrome: "TokenPocket dành cho trình duyệt của bạn",
                        TEXT: "TokenPocket là một ví tiền điện tử đa chuỗi, dễ sử dụng và an toàn, được hàng triệu người tin tưởng.",
                        TEXT_Chrome: "TokenPocket mở rộng là một ví tiền điện tử đa chuỗi, tất cả các chuỗi tương thích EVM đều được hỗ trợ. Sử dụng dễ dàng và an toàn, được hàng triệu người tin cậy.",
                        TEXT_PC: "TokenPocket Desktop là ví đa chuỗi lớn nhất dựa trên nền tảng EOS ETH BOS TRON, chúng tôi cố gắng cung cấp khả năng quản lý tài sản số mạnh mẽ và an toàn cho người dùng.",
                        scanCode: "Quét để tải xuống",
                        installTutorial: "Hướng dẫn cài đặt",
                        desc_1: "Tải xuống ứng dụng từ trang web chính thức và kiểm tra chứng nhận SSL của ứng dụng",
                        desc_2: "Bảo vệ Recovery Phrase (mnemonic) và Private key của bạn khỏi bị rò rỉ, không bao giờ chia sẻ với người khác",
                        desc_3: "Tìm hiểu thêm các mẹo bảo mật",
                        verifyText: "Phiên bản Android mới nhất:",
                        verifyText1: "Cách xác minh tính bảo mật của ứng dụng",
                        verifyText2: "Phiên bản mới nhất:",
                        verifyText3: "Phiên bản Google Play mới nhất:",
                        footerTitle: "Tạo ấn tượng ban đầu tuyệt vời",
                        footerDesc_1: "Hỗ trợ BTC, ETH, BSC, TRON, Matic, Aptos, Solana, EOS, Polkadot, IOST, v.v.",
                        footerDesc_2: "Bảo vệ an ninh nhiều lớp",
                        footerDesc_3: "Hỗ trợ DeFi, DApp, GameFi và NFT",
                        coming_soon: "Coming Soon",
                        desc_tp_wallet: "đã chính thức được chỉ định là nhà xuất bản Ứng dụng iOS duy nhất của TokenPocket",
                        tp_wallet_version: "TP Wallet Phiên bản:",
                        token_pocket_version: "Token Pocket Phiên bản:",
                        delisted: "Đã hủy niêm yết",
                        checkoutAllVersion: "Check All Versions",
                        apk32Title: "Tải gói 32-bit",
                        apk32Desc: "Gói cài đặt 32 bit phù hợp cho các thiết bị có cấu hình thấp hơn. Nếu bạn gặp tình huống mà DApp không thể kết nối đúng cách, bạn có thể tải về và sử dụng gói cài đặt 32 bit.",
                        download: "Tải về"
                    },
                    TOKEN: {
                        RULES: {
                            network: "Mạng lưới là bắt buộc",
                            email: "Bắt buộc phải có email",
                            address: "Bắt buộc phải có địa chỉ",
                            owner_address: "Bắt buộc phải có địa chỉ chủ sở hữu",
                            symbol: "Bắt buộc phải có biểu tượng",
                            bl_symbol: "Bắt buộc phải có biểu tượng BL",
                            total_supply: "Bắt buộc phải có tổng cung",
                            decimal: "Bắt buộc phải có dấu thập phân",
                            precision: "Bắt buộc phải có độ chính xác",
                            gas: "Bắt buộc phải có GAS",
                            website: "Bắt buộc phải có trang web",
                            website_1: "Official Website is too long",
                            companyName: "Bắt buộc phải có tên công ty hoặc tên cá nhân",
                            contact: "Bắt buộc phải có liên hệ",
                            description: "Project introduction is required",
                            description_1: "Token Introduction is too long",
                            name: "Bắt buộc phải có giới thiệu về dự án",
                            icon_url: "Bắt buộc phải có logo"
                        },
                        icon: "Logo của token",
                        handleText: "Chúng tôi sẽ xử lý yêu cầu của bạn trong 2 ngày làm việc",
                        tokenStandard: "Tiêu chuẩn Token",
                        requirement_1: "Không nộp token honeypot hoặc token lừa đảo.",
                        requirement_2: "Không nộp cùng một token nhiều lần.",
                        requirement_3: "Hợp đồng thông minh đã triển khai trên mainnet.",
                        requirement_4: "Cần có logo.",
                        requirement_5: "Nếu bạn vi phạm các luật và quy định liên quan, bạn sẽ tự nguyện chịu trách nhiệm pháp lý tương ứng.",
                        addMore: "Thêm nữa",
                        placeholder_1: "Vui lòng nhập...",
                        tokenRequirement: "Yêu cầu Token",
                        information: "Thông tin Token",
                        network: "Mạng lưới",
                        name: "Tên Token",
                        symbol: "Tên Token",
                        success: "Success",
                        bl_symbol: "Biểu tượng BL",
                        precision: "Độ chính xác của Token",
                        decimal: "Số thập phân của Token",
                        totalSupply: "Tổng cung",
                        contract: "Hợp đồng Token",
                        website: "Trang web chính thức",
                        introduction: "Giới thiệu Token"
                    },
                    RECRUITING: {
                        title: "TP Man Recruitment Plan",
                        text: "Join the TokenPocket community",
                        text1: "Committed to the blockchain world and contribute your part",
                        text2: "We build a Web3.0 world together",
                        joinUs: "Join Us",
                        aboutTitle: "About TP Man",
                        aboutText: "TP Man is an important part of the TokenPocket community, and we sincerely invite you to join us!",
                        aboutText1: "You are a blockchain enthusiast and endorse the industry value.",
                        aboutText2: "Enjoy the convenience brought by TokenPocket wallet when you explore the blockchain world.",
                        missionTitle: "The Mission of TP Man",
                        missionText: "Help TokenPocket to serve more blockchain users around the world. We hope you, meet two of the following requirements to apply.",
                        missionText1: "Expand and promote TokenPocket cooperation with companies or hot projects in your country through various channels",
                        missionText2: "Plan marketing activities that meet the needs of local users",
                        missionText3: "Have the ability to operate mainstream social medias such as Twitter, Youtube, Telegram, and Discord",
                        missionText4: "Fluent in English, and be able to complete translation work",
                        missionText5: "TokenPocket plans to provide more usage and technical support for global blockchain users, so we hope that you have a certain understanding of the blockchain markets of no less than one country and their users (India, the United States, Turkey, Russia, South Korea, Vietnam, the Philippines, etc.)",
                        getTitle: "What will you get?",
                        getText: "A work experience directly involved with various fields of the blockchain industry, and you will get but not limited to communication opportunities with DApp projects, Influencers, and mainstream media in the industry.",
                        getText1: "Get rich rewards from your work such as tweets translation, making video, community operation and business cooperation.",
                        getText2: "Get the most professional blockchain knowledge training and explore the Web3.0 world with the team together.",
                        getText3: "TokenPocket official benefits, including TokenPocket Swag and hardware wallets.",
                        processTitle: "Recruitment process",
                        processText: "Submit CV",
                        processText1: "CV screening",
                        processText2: "Online interview ",
                        processText3: "Interview results",
                        processText4: "Welcome aboard",
                        applyTitle: "Who can apply",
                        applyText: "Face the world, regardless of country",
                        applyText1: "Be keen and curious about the blockchain world",
                        applyText2: "Fill out the form and attach your resume, then we will contact you as soon as possible",
                        footerTitle: "About TokenPocket",
                        footerText: "over",
                        footerText1_1: "20M",
                        footerText1_2: "global users",
                        footerText2_1: "3.5M",
                        footerText2_2: "monthly active users",
                        footerText3_1: "200",
                        footerText3_2: "countries and regions",
                        footerText4: "TokenPocket is the world's leading multi-chain self-custodial wallet",
                        footerText5: "Coming soon"
                    },
                    ABOUT: {
                        title: "Về Chúng Tôi",
                        desc: "TokenPocket là ví phi tập trung đa chuỗi, cung cấp ví di động, ví mở rộng và ví phần cứng cho người dùng, hỗ trợ các chuỗi công cộng bao gồm Bitcoin, Ethereum, BNB Smart Chain, TRON, Aptos, Polygon, Solana, Polkadot, EOS và tất cả các chuỗi tương thích với EVM. Phục vụ hơn 30 triệu người dùng từ hơn 200 quốc gia và vùng lãnh thổ. Đây là ví tiền điện tử hàng đầu thế giới được tin cậy bởi người dùng toàn cầu.",
                        philosophy: {
                            title: "Triết lý của chúng tôi",
                            desc: "Chúng tôi kiên trì với cộng đồng công nghệ mở và hoan nghênh tất cả các nhà phát triển cùng xây dựng một thế giới blockchain tiện lợi, an toàn và phong phú hơn",
                            ambition: "Tham vọng",
                            ambition_desc: "Làm cho blockchain hiện diện khắp nơi",
                            value: "Giá trị",
                            value_desc: "Để dữ liệu trở về với người dùng, làm cho giá trị thuộc về chủ sở hữu thực sự",
                            attitude: "Thái độ",
                            attitude_desc: "Tư duy cởi mở, hợp tác lẫn nhau"
                        },
                        milestones: {
                            title: "Cột mốc",
                            desc_2018_4_1: "Thành lập TokenPocket.",
                            desc_2018_8_1: "Được đầu tư bởi Huobi, Hofan, Byte Capital.",
                            desc_2019_8_1: "Phát hành ví máy tính, hỗ trợ TRON.",
                            desc_2019_11_1: "Số lượt tải xuống trên Google Play vượt 1.000.000.",
                            desc_2020_7_1: "Hỗ trợ ví HD.",
                            desc_2020_9_1: "Hỗ trợ BSC và xu hướng DeFi.",
                            desc_2020_12_1: "Hỗ trợ Eth2.0 Staking.",
                            desc_2021_3_1: "Ươm tạo Transit.",
                            desc_2021_6_1: "Cơ sở người dùng vượt quá 20.000.000.",
                            desc_2021_8_1: "Ươm tạo ví phần cứng KeyPal.",
                            desc_2021_11_1: "Nâng cấp thương hiệu, logo và thương hiệu mới.",
                            desc_2022_1_1: "Ươm tạo ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://buy.transit.finance/ramp" target="_blank">Transit Buy</a>', ", hỗ trợ tài chính toàn cầu."),
                            desc_2022_5_1: "Mua lại dFox và đổi tên thành TokenPocket Extension.",
                            desc_2022_7_1: "Đầu tư vào ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://debox.pro/" target="_blank">DeBox</a>', ", một công cụ quản lý cộng đồng dựa trên DID trong Web3."),
                            desc_2022_9_1: "Đầu tư vào WrapCoin.",
                            desc_2022_12_1: "Hỗ trợ ví đa chữ ký.",
                            desc_2023_4_1: "Hỗ trợ cập nhật Ethereum Shapella.",
                            desc_2023_4_2: "Hỗ trợ staking tự quản lý trên Stake Vault.",
                            desc_2023_5_1: "Ra mắt Dịch vụ Cho thuê năng lượng TRON và Dịch vụ Trợ cấp Năng lượng, giúp tiết kiệm tới 75% phí mạng cho người dùng.",
                            desc_2023_5_2: "Hỗ trợ hệ sinh thái Bitcoin, giao thức Nostr, BRC-20.",
                            desc_2023_8_1: "Đầu tư vào giao thức LRT ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://www.puffer.fi/" target="_blank">Puffer Finance</a>', "."),
                            desc_2023_10_1: "".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://card.keypal.pro/" target="_blank">Keypal Card</a>', " thẻ chip an toàn mã hóa được bán."),
                            desc_2023_11_1: "Ra mắt AA Smart Wallet.",
                            desc_2024_2_1: "Đã nhận được giấy phép MSB từ FinCEN, Hoa Kỳ.",
                            desc_2024_3_1: "Trên 600.000 người theo dõi trên ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://twitter.com/TokenPocket_TP" target="_blank">Twitter (X)</a>', "."),
                            desc_2024_5_1: "Hợp tác với Victory Securities, một công ty chứng khoán được cấp phép đầy đủ.",
                            desc_2024_5_2: "Đặt tại HK Cyberport, thành lập trung tâm hoạt động khu vực Châu Á - Thái Bình Dương.",
                            January: "Tháng 1",
                            February: "Tháng 2",
                            March: "Tháng 3",
                            April: "Tháng 4",
                            May: "Tháng 5",
                            June: "Tháng 6",
                            July: "Tháng 7",
                            August: "Tháng 8",
                            September: "Tháng 9",
                            October: "Tháng 10",
                            November: "Tháng 11",
                            December: "Tháng 12"
                        },
                        contact_us: {
                            title: "Liên hệ chúng tôi",
                            service: "Dịch vụ khách hàng",
                            service_desc: "service@tokenpocket.pro",
                            bd: "Hợp tác kinh doanh",
                            bd_desc: "bd@tokenpocket.pro",
                            developers: "Nhà phát triển",
                            developers_desc: "Discord"
                        }
                    },
                    SEO: {
                        title: "TokenPocket - Ví kĩ thuật số toàn cầu của bạn | Ví TP - Ví ETH - Ví BTC - Ví BSC - Ví HECO - Ví OKExChain - Ví Polkadot - Ví Kusama - Ví DeFi - Ví Layer 2 - Ví EOS - Ví TRX - nostr",
                        description: "TokenPocket là ví kỹ thuật số hàng đầu thế giới, hỗ trợ các blockchain công khai bao gồm BTC, ETH, BSC, HECO, TRON, OKExChain, Polkadot, Kusama, EOS và Layer 2.",
                        keywords: "TokenPocket, Token Pocket, ví TP, ví Ethereum, Bitcoin, EOS, IOST, COSMOS, heco, bsc, layer2, DeFi, ví,wallet,crypto,blockchain,web3,NFT,nostr"
                    },
                    DAPPSTORE: {
                        document_title: "DAppStore | TokenPocket",
                        title: "Cửa hàng DApp",
                        copy: "Copied successfully",
                        agreement: "Đọc và đồng ý",
                        risk_statement: "Tuyên bố rủi ro",
                        no_again: "Không còn lời nhắc nữa",
                        collect: "Yêu thích",
                        no_collect: "Chưa có mục yêu thích",
                        data_loading: "Đang tải DApps...",
                        hot: "Xu hướng",
                        hot_title: "Các DApp đang Hot",
                        hot_desc: "Khám phá hơn 100 DApp hàng đầu trên các blockchain công cộng, bao gồm DeFi, DEX, trò chơi blockchain, thị trường NFT và nhiều hơn nữa, tất cả trong một nơi. DeFi bao gồm các sàn giao dịch phi tập trung (DEX), tài sản tổng hợp, thanh toán, cho vay và các ứng dụng khác dựa trên blockchain.",
                        placeholder: "Tìm kiếm DApps bằng tên hoặc từ khóa",
                        recent_search: "Tìm kiếm Gần đây",
                        hot_search: "Tìm kiếm Phổ biến",
                        search_result: "Kết quả",
                        no_search_result: "Không tìm thấy bản ghi",
                        enter: "Nhập ",
                        supported_networks: "Hỗ trợ",
                        category: "Thể loại",
                        all_networks: "Tất cả Mạng",
                        community_tutorial: "Hướng dẫn Cộng đồng",
                        related_tokens: "Các Token Liên quan",
                        more: "thêm",
                        moreDApp: "thêm",
                        cancel: "Hủy bỏ"
                    },
                    BRANDKIT: {
                        title: "Tải bộ công cụ",
                        download: "Tải về",
                        desc: "Trên trang này, bạn sẽ tìm thấy logo chính thức của TokenPocket và bảng màu giúp bạn giới thiệu thương hiệu của chúng tôi trong các dự án của bạn. Chúng tôi mời bạn khám phá và sử dụng những tài nguyên này theo hướng dẫn của chúng tôi để đảm bảo sự thể hiện nhất quán và chuyên nghiệp của TokenPocket.",
                        logoDownload: "Tải logo",
                        logoDownloadDesc: "Tải logo thương hiệu của chúng tôi ngay bây giờ để đảm bảo các dự án thiết kế của bạn duy trì hình ảnh nhất quán và chuyên nghiệp. .",
                        logoDownloadDesc_1: "Tất cả các tệp đều có chất lượng cao và phù hợp với web, in ấn và nhiều ứng dụng khác nhau, giúp bạn dễ dàng tạo ra những hình ảnh ấn tượng.",
                        colorVersion: "Phiên bản màu",
                        whiteVersion: "Phiên bản trắng",
                        brandTrademark: "Thương hiệu đã đăng ký",
                        brandTrademarkDesc: 'Biểu tượng TokenPocket được tạo thành từ các chữ cái viết hoa "T" và "P";',
                        brandTrademarkDesc_2: 'phần văn bản là "TOKEN POCKET" viết hoa;',
                        brandTrademarkDesc_3: "biểu tượng và văn bản tạo thành thương hiệu đã đăng ký của TokenPocket.",
                        logo: "Logo",
                        fullVertical: "Đầy đủ (Dọc)",
                        fullHorizontal: "Đầy đủ (Ngang)",
                        spellingRules: "Quy tắc chính tả",
                        spellingRulesDesc: '"Khi đại diện cho thương hiệu: TOKEN POCKET"',
                        spellingRulesDesc_1: '"Khi đại diện cho ứng dụng: TokenPocket"',
                        spellingRulesDesc_2: '"Ví dụ sai: TOKENPOCKET, Tokenpocket, tokenpocket"',
                        representingBrand: "Khi đại diện cho thương hiệu",
                        applicationBrand: "Khi đại diện cho ứng dụng",
                        TokenPocketIcon: "Biểu tượng TokenPocket",
                        TokenPocketIconDesc: '"Sử dụng biểu tượng ứng dụng khi đề cập đến TokenPocket như một ứng dụng;',
                        TokenPocketIconDesc_1: "sử dụng ảnh đại diện xã hội trên các mạng xã hội hoặc tổ chức như Twitter, Facebook, Medium và Telegram.",
                        roundedIcon: "Biểu tượng tròn",
                        squareIcon: "Biểu tượng vuông",
                        socialAvatar: "Avatar mạng xã hội",
                        TokenPocketColor: "Màu sắc TokenPocket",
                        TokenPocketColorDesc: "Màu sắc thương hiệu của TokenPocket là màu xanh, tượng trưng cho cảm giác công nghệ và sự tin cậy của internet. Màu gradient cũng được sử dụng trong các biểu đồ của ứng dụng.",
                        primary: "Màu chính",
                        secondary: "Màu phụ",
                        colorSystem: "Hệ thống màu",
                        brandBlue: "Xanh thương hiệu",
                        brandBlack: "Đen thương hiệu",
                        OffWhite: "Trắng ngà",
                        palette: "Bảng màu"
                    }
                },
                th: {
                    COMMON: {
                        EMAIL: "อีเมล",
                        BATCH_SENDER: "ผู้ส่งแบทช์",
                        YES: "ใช่",
                        NO: "ไม่",
                        HAS: "ใช่",
                        HAVENT: "ไม่",
                        BLOCKCHAIN: "บล็อกเชน",
                        MULTIPLE_CHOICE: "(ตัวเลือกหลากหลาย)",
                        IS_SUPPORT_TP_CONNECT: "องรับการเชื่อมต่อ โทเค็นพ็อกเก็ต หรือไม่ (ส่วนขยายและแอพมือถือ)",
                        SUPPORT_BOTH: "รองรับทั้งคู่",
                        SUPPORT_EXTENSION: "เฉพาะส่วนขยาย",
                        SUPPORT_MOBILE: "เฉพาะมือถือ",
                        SUPPORT_NONE: "ไม่มี",
                        blockchainWallet: "บล็อกเชนกระเป๋าเงิน",
                        iostWallet: "กระเป๋าเงิน IOST",
                        tronWallet: "กระเป๋าเงิน TRON",
                        platformInfo: {
                            eos: "EOS",
                            moac: "MOAC",
                            eth: "ETH",
                            jt: "Jingtum ",
                            enu: "ENU",
                            bos: "BOS",
                            iost: "IOST",
                            cosmos: "COSMOS",
                            bnb: "BNB",
                            trx: "TRON",
                            bsc: "BSC",
                            heco: "HECO",
                            okex: "OKExChain",
                            dot: "Polkadot",
                            hsc: "HSC",
                            matic: "Polygon",
                            klaytn: "Klaytn",
                            arb: "Arbitrum One",
                            arbn: "Arbirtum Nova",
                            ftm: "Fantom",
                            etc: "Ethereum Classic",
                            cfx: "Conflux eSpace",
                            solana: "Solana",
                            avax: "AVAX",
                            oe: "Optimistic Ethereum",
                            xdai: "Gnosis Chain",
                            harmony: "Harmony",
                            wax: "WAX",
                            aurora: "Aurora",
                            ksm: "Kusama",
                            mb: "Moonbeam",
                            sbg: "SubGame",
                            kcc: "KCC Mainnet",
                            lat: "PlatON",
                            bttc: "BTTC",
                            gt: "GateChain",
                            halo: "HALO",
                            aptos: "Aptos",
                            fil: "Filecoin FVM",
                            zks: "zkSync Era",
                            eosevm: "EOS EVM",
                            mantle: "Mantle",
                            linea: "Linea",
                            base: "Base",
                            opbnb: "opBNB",
                            polyzk: "Polygon zkEVM",
                            core: "CORE",
                            haqq: "HAQQ",
                            scroll: "Scroll",
                            manta: "Manta",
                            bevm: "BEVM",
                            zkfair: "ZKFair",
                            metis: "Metis",
                            zeta: "Zeta Chain",
                            merlin: "Merlin",
                            blast: "Blast",
                            xlayer: "X Layer",
                            bitlayer: "Bitlayer",
                            kroma: "Kroma"
                        },
                        submit: "ส่ง",
                        confirm: "ยืนยัน",
                        save: "บันทึก",
                        contactEmail: "อีเมลติดต่อ:",
                        submitSuccess: "ส่งสำเร็จ",
                        submitDAppSuccessDesc: "DApp ที่คุณส่งจะเปิดตัวหลังจากเราตรวจสอบ!",
                        submitTokenSuccessDesc: "โทเค็นที่คุณส่งจะเปิดตัวหลังจากเราตรวจสอบ!",
                        backToHome: "กลับไปที่หน้าหลัก",
                        searchNetwork: "ค้นหาชื่อบล็อกเชน",
                        example: "ตัวอย่าง",
                        submitTokenInfoAndLogo: "Uอัปเดตโลโก้โทเค็นและข้อมูลอื่น ๆ",
                        toGithubSubmit: "ไปที่ Github",
                        contact: "รายละเอียดการติดต่อ",
                        contactDesc: "* กรุณาแน่ใจว่าได้ทิ้งข้อมูลการติดต่อฝ่ายบริการลูกค้านอกเหนือจากอีเมล มิฉะนั้นจะไม่ผ่านการตรวจสอบ",
                        addContactDetail: "เพิ่มรายละเอียดสัญญา",
                        urlError: "กรุณากรอก URL ที่ถูกต้อง",
                        eg: "เช่น",
                        moreThan: "ไม่เกิน {count} ตัวอักษร",
                        nftType: "มาตรฐานโปรโตคอล NFT",
                        logoDesc: "ภาพที่ลอกเลียนหรือเลียนแบบโครงการที่มีอยู่ มีความเสี่ยงด้านลิขสิทธิ์ หรือเกี่ยวข้องกับการเมืองจะไม่ได้รับการอนุมัติ",
                        logoDesc_2: "โปรดส่งโลโก้ <strong>400*400px, JPG&PNG</strong>, ขนาดสูงสุด <strong>5M</strong> คุณภาพสูงเพื่อให้แน่ใจว่าการส่งของคุณได้รับการตรวจสอบสำเร็จ",
                        uploadError: "โปรดส่งโลโก้ขนาด 400*400px, JPG&PNG, ขนาดสูงสุด 5M",
                        nextStep: "ขั้นตอนถัดไป",
                        donate: {
                            title: "โปรดบริจาค",
                            desc: 'โปรดบริจาคจำนวนเงินที่กำหนด <strong style="color: var(--color-1)">TPT</strong> เมื่อส่งคำขอ',
                            tutorial: "คำแนะนำ",
                            tutorial_1: 'เครือข่ายที่รองรับ: <strong style="color: var(--color-1)">BSC</strong>',
                            tutorial_2: 'โทเค็นที่รองรับ: <strong style="color: var(--color-1)">TPT (</strong><span data-info="info" style="color: #2980FE;cursor: pointer;">ข้อมูลโทเค็น</span><strong style="color: var(--color-1)">)</strong> หากคุณส่งโทเค็นประเภทอื่น คำขอของคุณจะไม่ได้รับการดำเนินการ. <span data-link="link" style="color: #2980FE;cursor: pointer;">ไปที่รับ TPT</span>',
                            tutorial_2_mobile: 'โทเค็นที่รองรับ: <strong style="color: var(--color-1)">TPT</strong> หากคุณส่งโทเค็นประเภทอื่น คำขอของคุณจะไม่ได้รับการดำเนินการ. <span data-link="link" style="color: #2980FE;cursor: pointer;">ไปที่รับ TPT</span>',
                            tutorial_3: '<strong style="color: var(--color-1)">โปรดอย่าออกจากหน้านี้ในขณะที่ส่งโทเค็น</strong> หากคุณออกจากหน้านี้ จำนวนเงินอาจเปลี่ยนแปลงได้ และเราไม่สามารถยืนยันการชำระเงินของคุณได้',
                            tutorial_4: 'หลังจากการชำระเงิน ให้วางลิงก์ <strong style="color: var(--color-1)">ธุรกรรมแฮช</strong> ของธุรกรรมไว้ด้านล่าง',
                            amount: "จำนวนเงินบริจาค:",
                            blockchain: "บล็อกเชน",
                            receivingAddress: "ที่อยู่การรับ",
                            hash: "ลิงก์ธุรกรรมแฮช",
                            tokenInfo: "ข้อมูลโทเค็น",
                            tokenContract: "สัญญาโทเค็น"
                        },
                        LAYOUT: {
                            features: "คุณสมบัติ",
                            products: "สินค้า",
                            buyCryptoFooter: "ซื้อ",
                            mobileWallet: "กระเป๋าเงินบนมือถือ",
                            mobileWalletDesc: "กระเป๋าเงินมือถือ Crypto & DeFi บนบล็อกเชน",
                            hardwareWallet: "กระเป๋าเงินฮาร์ดแวร์",
                            hardwareWalletDesc: "รับ KeyPal ของคุณ เพื่อปกป้องทรัพย์สินของคุณ",
                            TPCard: "TP Card",
                            TPCardDesc: "บัตรธนาคารที่ดำเนินการแบบกระจายศูนย์.",
                            extensionWallet: "กระเป๋าเงินสำหรับเบราว์เซอร์",
                            extensionWalletDesc: "กระเป๋าเงินที่ดีกว่าบนคอมพิวเตอร์ของคุณ",
                            desktop: "Desktop Wallet",
                            fiveDegrees: "5Degrees",
                            versionVerification: "การตรวจสอบความถูกต้อง",
                            versionVerificationDesc: "ตรวจสอบกระเป๋าเงินของคุณ",
                            approvalDetector: "ตรวจจับการอนุมัติ",
                            approvalDetectorDesc: "ดูและยกเลิกการอนุมัติโทเค็นของคุณที่ได้รับอนุมัติ",
                            tokenSecurity: "ความปลอดภัยของโทเค็น",
                            tokenSecurityDesc: "ตรวจสอบว่าโทเค็นปลอดภัยหรือไม่ด้วยที่อยู่สัญญาของมัน",
                            keyGenerator: "ตัวสร้างคีย์",
                            keyGeneratorDesc: "สร้างคีย์สาธารณะและส่วนตัวแบบสุ่มสำหรับเครือข่ายต่างๆ",
                            tokenProfile: "โปรไฟล์โทเค็น",
                            tokenProfileDesc: "เรียนรู้ข้อมูลทั้งหมดเกี่ยวกับโทเค็น",
                            tokenClaim: "การเรียกร้องโทเค็น",
                            tokenClaimDesc: "เรียกร้องแอร์ดรอปของคุณ",
                            easyInscription: "การจารึกอย่างง่าย",
                            easyInscriptionDesc: "เครื่องมือการจารึกที่ปลอดภัย",
                            nostrAssetsBatchSender: "NostrAssets BatchSender",
                            nostrAssetsBatchSenderDesc: "เครื่องมือการส่งแบบกลุ่มสำหรับ NostrAssets",
                            BATCH_SENDER: "BatchSender",
                            BATCH_SENDER_DESC: "ส่งโทเค็นไปยังผู้รับหลายรายพร้อมกัน",
                            trade: "การซื้อขาย",
                            swap: "แลกเปลี่ยน",
                            swapDesc: "ซื้อขายด้วยราคาที่ดีที่สุด",
                            bridge: "บริดจ์",
                            bridgeDesc: "ข้ามทรัพย์สินจากเชนหนึ่งไปยังอีกเชนหนึ่งอย่างราบรื่น",
                            buyCrypto: "ซื้อ",
                            buyCryptoDesc: "ซื้อสกุลเงินดิจิทัลด้วยบัตรเครดิตของคุณ",
                            market: "ตลาด",
                            marketDesc: "ข้อมูลเชิงลึกแบบเรียลไทม์เพื่อค้นหาโทเค็นที่น่าสนใจ",
                            information: "ข้อมูล",
                            blockchainGuide: "คู่มือบล็อคเชน",
                            tronWallet: "คู่มือ TRON",
                            iostWallet: "คู่มือ IOST",
                            tpMan: "ชาย TP",
                            developers: "นักพัฒนา",
                            github: "Github (TP-Lab)",
                            devCenter: "ศูนย์นักพัฒนา",
                            developersDesc: "เอกสารสำหรับนักพัฒนา TokenPocket",
                            subToken: "ส่งโทเค็น",
                            subTokenDesc: "ส่งโทเค็นและ NFT ของคุณ.",
                            subDApp: "ส่ง DApp",
                            subDAppDesc: "ส่ง DApp ของคุณและแสดงหลังจากการตรวจสอบ",
                            subNFT: "ส่ง NFT",
                            subNFTDesc: "ส่ง NFT และศิลปะของคุณ",
                            subChain: "ส่งเชน",
                            subChainDesc: "ส่งบล็อกเชนของคุณ",
                            bugBounty: "Bug Bounty",
                            tools: "เครื่องมือ",
                            build: "สร้าง",
                            learn: "เรียนรู้",
                            explorer: "ตัวสำรวจ",
                            darkMode: "โหมดมืด",
                            company: "บริษัท",
                            about: "กี่ยวกับ",
                            careers: "อาชีพ",
                            pressKit: "ชุดแบรนด์",
                            swagShop: "Swag Shop",
                            support: "การสนับสนุน",
                            helpCenter: "ศูนย์ช่วยเหลือ",
                            helpCenterDesc: "ทรัพยากรหลักของคุณสำหรับคำตอบและความช่วยเหลือ",
                            contactUs: "ติดต่อเรา",
                            contactUsDesc: "แชร์คำแนะนำของคุณและถามคำถามใด ๆ",
                            forum: "ฟอรั่ม",
                            forumDesc: "เพลิดเพลินไปกับการสนทนากับสมาชิกในชุมชน",
                            legal: "ถูกกฎหมาย",
                            privacyPolicy: "นโยบายความเป็นส่วนตัว",
                            terms: "ข้อกำหนดการใช้งาน",
                            brandKit: "ชุดเครื่องมือแบรนด์",
                            toHome: "บ้าน",
                            defiWallet: "กระเป๋าเงินDeFi",
                            ETHWallet: "กระเป๋าเงินEthereum",
                            ethWallet: "กระเป๋าเงินETH"
                        }
                    },
                    HOME: {
                        download: "ดาวน์โหลด",
                        downloadNow: "ดาวน์โหลดทันที",
                        HEADER: {
                            title: "กระเป๋าเงินคริปโตที่ปลอดภัยของคุณเพื่อสำรวจบล็อคเชน",
                            desc_1: "ซื้อ จัดเก็บ ส่ง แลกเปลี่ยนโทเค็นและรวบรวม NFT ได้ง่ายและปลอดภัย ได้รับความไว้วางใจจากผู้ใช้กว่า 30 ล้านคนจาก 200 กว่าประเทศและภูมิภาค"
                        },
                        INTRODUCTION: {
                            title: "โทเค็นพ็อกเก็ต ได้รับความไว้วางใจจากผู้ใช้ทั่วโลก",
                            desc_1: "เราให้บริการกระเป๋าเงินคริปโตที่ปลอดภัยและง่ายดายกว่า 200 ประเทศและภูมิภาคทั่วโลก",
                            desc_2: "ให้บริการผู้ใช้",
                            desc_3: "ธุรกรรมรายวัน",
                            desc_4: "ประเทศและภูมิภาคที่สนับสนุน",
                            desc_5: "ก่อตั้ง"
                        },
                        SECURITY: {
                            title: "ความปลอดภัยตามที่ควรจะเป็น",
                            desc_1: "โทเค็นพ็อกเก็ต สร้างและจัดเก็บคีย์และรหัสผ่านบนอุปกรณ์ของคุณเท่านั้น มีเพียงคุณเท่านั้นที่สามารถเข้าถึงบัญชีและทรัพย์สินของคุณ",
                            desc_2: "โทเค็นพ็อกเก็ต ยังพัฒนาฮาร์ดแวร์กระเป๋าเงินเย็นและคุณสมบัติกระเป๋าเงินหลายป้ายเพื่อเพิ่มความปลอดภัยตามที่คุณต้องการ",
                            desc_3: "รองรับ BTC, ETH, BSC, TRON, Polygon, Solana, Cosmos, Polkadot, EOS, IOST และอื่นๆ"
                        },
                        EXCHANGE: {
                            title: "แลกเปลี่ยนและทำธุรกรรมได้อย่างง่ายดาย",
                            desc_1: "คุณสามารถแลกเปลี่ยนคริปโตของคุณได้ทุกที่ทุกเวลาในโทเค็นพ็อกเก็ต",
                            desc_2: "ซื้อคริปโต ด้วยบัตรเครดิต จัดเก็บ ส่ง ข้ามห่วงโซ่และแลกเปลี่ยนได้อย่างง่ายดาย",
                            desc_3: "สลับ",
                            desc_4: "ทันทีและง่ายมาก",
                            desc_5: "สะพาน",
                            desc_6: "ท่ามกลางสายโซ่ต่างๆ",
                            desc_7: "ซื้อคริปโต",
                            desc_8: "ภายใน 5 นาที",
                            desc_9: "TP Card",
                            desc_10: "ชำระเงินด้วยคริปโต"
                        },
                        DAPPSTORE: {
                            title: "ดีแอปสโตร์",
                            desc_1: "คุณสามารถค้นหาแอปพลิเคชั่นกระจายอำนาจที่คุณชื่นชอบ ค้นพบแอปพลิเคชั่นล่าสุดและร้อนแรงที่สุด และใช้งานได้โดยไม่ต้องออกจากกระเป๋าเงิน",
                            desc_2: "รวมดีแอปเบราว์เซอร์อด้วย คุณสามารถเข้าถึง ดีแอป ด้วยลิงก์ของคุณได้ตลอดเวลา",
                            desc_3: "DeFi",
                            desc_4: "NFT",
                            desc_5: "DApp",
                            desc_6: "รองรับ"
                        },
                        COMMUNITY: {
                            title: "ชุมชน",
                            desc_1: "เรายืนกรานในชุมชนเทคโนโลยีแบบเปิด และเรายินดีต้อนรับนักพัฒนาทุกคนเพื่อสร้างโลกบล็อกเชนที่สะดวก ปลอดภัย และสมบูรณ์ยิ่งขึ้นไปด้วยกัน",
                            desc_2: "TP-Lab",
                            desc_3: "ชุมชน",
                            desc_4: "เอกสารสำหรับนักพัฒนา"
                        },
                        DOWNLOAD: {
                            title: "รับ กระเป๋าเงินโทเค็นพ็อกเก็ต ทันที!",
                            desc_1: "กระเป๋าเงินคริปโตที่ปลอดภัยและเชื่อถือได้ของคุณในการสำรวจบล็อคเชน"
                        },
                        FOLLOW: {
                            title: "ตามเรามา",
                            desc1: "พนักงาน TokenPocket จะไม่ส่งข้อความส่วนตัวถึงคุณ!",
                            desc2: "คำเตือน! คุณกำลังเข้าสู่ชุมชน TokenPocket อาจมีใครบางคนแอบอ้างเราเพื่อส่งข้อความส่วนตัวถึงคุณ! โปรดทราบว่าทุกคนที่ส่งข้อความส่วนตัวอาจเป็นสแกมเมอร์! เราจะไม่ติดต่อคุณก่อน!",
                            desc3: "เข้าใจแล้ว ป้อน"
                        },
                        EXTENSIONMODAL: {
                            title: "ส่วนขยายใช้งานได้แล้ว",
                            desc1: "คริปโต และ DeFi และ GameFi ของคุณ",
                            desc2: "กระเป๋าเงินบนคอมพิวเตอร์",
                            btnText: "ใช้งานเดี๋ยวนี้",
                            btnTextm: "คัดลอกลิงก์",
                            tips: "คัดลอกลิงก์สำเร็จ โปรดไปที่คอมพิวเตอร์เพื่อเปิด"
                        }
                    },
                    DAPP: {
                        RULES: {
                            platform: "จำเป็นต้องมีแพลตฟอร์ม",
                            title: "ต้องระบุชื่อดีแอป",
                            address: "ต้องมีสัญญาดีแอป",
                            url: "จำเป็นต้องมีเว็บไซต์ดีแอป",
                            desc: "ต้องระบุ",
                            icon_url: "ต้องมีโลโก้ดีแอป",
                            rakeBackAccount: "ต้องมีบัญชีสัญญา",
                            email: "จำเป็นต้องใช้อีเมล",
                            others: "ต้องการข้อมูลติดต่ออื่น",
                            category: "เลือกอย่างน้อยหนึ่งหมวดหมู่",
                            tp_connect: "รายการนี้ไม่สามารถเว้นว่างได้",
                            audit_url: "ต้องการ URL ของรายงานการตรวจสอบ"
                        },
                        title: "ชื่อดีแอป",
                        address: "Smart Contract",
                        url: "เว็บไซต์ดีแอป",
                        desc: "คำอธิบายสั้นๆ",
                        icon: "โลโก้ ดีแอป",
                        referral: "อ้างอิง",
                        hasReferral: "มีระบบการอ้างอิงหรือไม่",
                        referralReward: "การกระจายรางวัลผู้อ้างอิ",
                        reward_1: "แจกจ่ายอัตโนมัติตามสัญญาอัจฉริยะ (สด)",
                        reward_2: "จำเป็นต้องรับสิทธิ์ในดีแอป ด้วยตนเอง",
                        hasInviteReward: "ผู้เชิญจำเป็นต้องทำธุรกรรมในดีแอป เพื่อเปิดใช้งานลิงก์ผู้อ้างอิงหรือไม่",
                        inviteAccount: "สัญญาอัจฉริยะของการกระจายผู้อ้างอิง",
                        DAppRequirement: "ข้อกำหนดของดีแอป",
                        requirement_1: "ดีแอปต้องรองรับ โทเค็นพ็อกเก็ตมือถือ และส่วนขยาย โทเค็นพ็อกเก็ต",
                        requirement_2: "เว็บไซต์ที่ให้มานั้นสามารถเข้าถึงได้และเสถียร",
                        requirement_3: "สัญญาอัจฉริยะได้ปรับใช้บน mainnet และส่วนที่ละเอียดอ่อนต้องเป็นโอเพ่นซอร์ส",
                        requirement_4: "สัญญาที่มีความละเอียดอ่อนต้องมีรายงานการตรวจสอบจากหน่วยงานรักษาความปลอดภัยบุคคลที่สาม",
                        requirement_5: "ตรรกะการโต้ตอบมีความชัดเจนและได้รับการปรับให้เข้ากับ UI บนมือถือแล้ว",
                        requirement_6: "ปฏิบัติตามกฎหมายและข้อบังคับที่เกี่ยวข้อง โดยปราศจากการฉ้อโกงและการละเมิด",
                        requirement_7: "หากคุณละเมิดกฎหมายและข้อบังคับที่เกี่ยวข้อง คุณจะต้องรับผิดชอบทางกฎหมายที่เกี่ยวข้องโดยสมัครใจ",
                        dappInfo: "ข้อมูลดีแอป",
                        necessary: "จำเป็น",
                        language: "ภาษาดีแอป",
                        languageDesc: "(โปรดส่งแยกกันสำหรับหลายภาษา)",
                        en: "English",
                        zh: "中文简体",
                        zhTW: "中文繁体",
                        descDesc: "คำอธิบายสั้น ๆ ของโครงการในหนึ่งประโยค ซึ่งจะปรากฏในคำบรรยายของดีแอป",
                        auditInfo: "ข้อมูลการตรวจสอบ",
                        hasAudit: "ไม่ว่าจะมีการตรวจสอบสัญญาหรือไม่",
                        auditUrl: "รายงานการตรวจสอบURL",
                        auditUrlExample: "ตัวอย่างเช่น: https://auditlink.com",
                        auditReport: "รายงานการตรวจสอบ",
                        auditUpload: "อัพโหลด",
                        contact: "รายละเอียดการติดต่อ",
                        contactDesc: "โปรดทิ้งข้อมูลติดต่อฝ่ายบริการลูกค้านอกเหนือจากกล่องจดหมาย มิฉะนั้น จะไม่ผ่านการตรวจสอบ",
                        emailAddr: "อีเมล",
                        emailExample: "ตัวอย่างเช่น: build@tokenpocket.pro",
                        others: "อื่นๆ",
                        othersExample: "ตัวอย่างเช่น: โทรเลข：https://t.me/tokenpocket_en",
                        auditOptional: "ใส่ข้อมูลการตรวจสอบอย่างน้อยหนึ่งรายการ",
                        oversize: " เกินอักขระที่ผ่านการรับรอง",
                        select: "เลือก",
                        tutorial_url: "https://help.tokenpocket.pro/developer-en/",
                        tutorial: "ดูบทช่วยสอน",
                        noData: "เพิ่ม URL รายงานการตรวจสอบ",
                        categories: "หมวดหมู่",
                        IS_SUPPORT_TP_CONNECT_1: "องรับการเชื่อมต่อ โทเค็นพ็อกเก็ต หรือไม่?",
                        IS_SUPPORT_TP_CONNECT_2: "(ส่วนขยายและแอพมือถือ)",
                        IS_SUPPORT_TP_CONNECT_3: "การเชื่อมต่อ TokenPocket",
                        dappTokensTitle: "โทเค็น DApp",
                        dappTokens: "DApp ของคุณมีโทเค็นหรือไม่?",
                        emailError: "กรุณากรอกอีเมลที่ถูกต้อง",
                        dappSmartContract: "สมาร์ทคอนแทรค",
                        dappSmartContractDesc: "เพิ่มสมาร์ตคอนแทรกต์ของ DApp ของคุณ หากมีมากกว่าหนึ่งโปรดแยกด้วยเครื่องหมายจุลภาค (,)",
                        addAuditUrl: "กรุณากรอกอีเมลที่ถูกต้อง",
                        backToHome: "กลับไปที่หน้าหลัก",
                        openSmartContract: "แก้ไขสมาร์ทคอนแทรคสำหรับแต่ละบล็อกเชน",
                        openTokens: "แก้ไขข้อมูลโทเค็น",
                        tokens: "เพิ่มข้อมูลโทเค็นอย่างน้อยหนึ่งรายการ",
                        addToken: "เพิ่มโทเค็น",
                        network: "เครือข่ายโทเค็น",
                        symbol: "สัญลักษณ์โทเค็น",
                        contract: "สัญญาโทเค็น"
                    },
                    DOWNLOAD: {
                        TITLE: "ดาวน์โหลด โทเค็นพ็อกเก็ต",
                        TITLE_Android: "โทเค็นพ็อกเก็ต สำหรับ แอนดรอยด์",
                        TITLE_IOS: "โทเค็นพ็อกเก็ต สำหรับ iOS",
                        TITLE_Chrome: "โทเค็นพ็อกเก็ตสำหรับเบราว์เซอร์ของคุณ",
                        TEXT: "โทเค็นพ็อกเก็ตเป็นกระเป๋าเงินดิจิตอลเข้ารหัสหลายสาย ใช้งานง่ายและปลอดภัยซึ่งคนนับล้านไว้วางใจ",
                        TEXT_Chrome: "โทเค็นพ็อกเก็ต Extension เป็นกระเป๋าเงินดิจิตอลเข้ารหัสหลายสาย รองรับ EVM ที่เข้ากันได้กับ EVM ทั้งหมด ง่ายและปลอดภัยในการใช้งานที่ได้รับความไว้วางใจจากคนนับล้าน",
                        TEXT_PC: "โทเค็นพ็อกเก็ต Desktop เป็นกระเป๋าเงิน multi-blockchain ที่ใหญ่ที่สุดตาม EOS ETH BOS TRON เรามุ่งมั่นที่จะมอบการจัดการสินทรัพย์ดิจิทัลที่มีประสิทธิภาพและปลอดภัยแก่ผู้ใช้",
                        scanCode: "Scan to Download",
                        installTutorial: "Install Tutorial",
                        desc_1: "ดาวน์โหลดแอปจากเว็บไซต์อย่างเป็นทางการและตรวจสอบใบรับรอง SSL",
                        desc_2: "ปกป้อง Recovery Phrase (mnemonic) และ Private Key ของคุณไม่ให้รั่วไหล อย่าแชร์ให้ผู้อื่นทราบ",
                        desc_3: "เรียนรู้เคล็ดลับความปลอดภัยเพิ่มเติม",
                        verifyText: "เวอร์ชัน แอนดรอย ล่าสุด",
                        verifyText1: "วิธีตรวจสอบความปลอดภัยของแอป",
                        verifyText2: "เวอร์ชันล่าสุด:",
                        verifyText3: "เวอร์ชันล่าสุดของ Google Play",
                        footerTitle: "สร้างความประทับใจแรกพบที่ยอดเยี่ยม",
                        footerDesc_1: "รองรับ BTC, ETH, BSC, TRON, Matic, Aptos, Solana, EOS, Polkadot, IOST และอื่นๆ",
                        footerDesc_2: "การป้องกันความปลอดภัยหลายชั้น",
                        footerDesc_3: "รองรับ DeFi, DApp, GameFi และ NFT",
                        coming_soon: "Coming Soon",
                        desc_tp_wallet: "ได้รับการแต่งตั้งอย่างเป็นทางการให้เป็นผู้เผยแพร่แอป iOS ของ TokenPocket แต่เพียงผู้เดียว",
                        tp_wallet_version: "TP Wallet รุ่น:",
                        token_pocket_version: "Token Pocket รุ่น:",
                        delisted: "ถูกเพิกถอน",
                        checkoutAllVersion: "Check All Versions",
                        apk32Title: "ดาวน์โหลดแพ็คเกจ 32 บิต",
                        apk32Desc: "แพ็คเกจการติดตั้ง 32 บิตเหมาะสำหรับอุปกรณ์ที่มีการกำหนดค่าต่ำกว่า หากคุณพบสถานการณ์ที่ DApp ไม่สามารถเชื่อมโยงได้อย่างถูกต้อง คุณสามารถดาวน์โหลดและใช้แพ็คเกจการติดตั้ง 32 บิตได้.",
                        download: "ดาวน์โหลด"
                    },
                    TOKEN: {
                        RULES: {
                            network: "จำเป็นต้องมีเครือข่าย",
                            email: "จำเป็นต้องใช้อีเมล",
                            address: "ต้องระบุที่อยู่",
                            owner_address: "ต้องระบุที่อยู่ของเจ้าของ",
                            symbol: "ต้องมีสัญลักษณ์",
                            bl_symbol: "จำเป็นต้องใช้สัญลักษณ์ BL",
                            total_supply: "ต้องจัดหาทั้งหมด",
                            decimal: "ต้องมีทศนิยม",
                            precision: "ต้องมีความแม่นยำ",
                            gas: "จำเป็นต้องใช้ GAS",
                            website: "จำเป็นต้องมีเว็บไซต์",
                            website_1: "Official Website is too long",
                            companyName: "จำเป็นต้องระบุชื่อบริษัทหรือบุคคล",
                            contact: "ต้องติดต่อ",
                            description: "Project introduction is required",
                            description_1: "Token Introduction is too long",
                            name: "จำเป็นต้องมีการแนะนำโครงการ",
                            icon_url: "ต้องมีโลโก้"
                        },
                        icon: "โลโก้โทเค็น",
                        handleText: "เราจะดำเนินการตามคำขอของคุณใน 2 วันทำการ",
                        tokenStandard: "มาตรฐานโทเค็น",
                        requirement_1: "อย่าส่งโทเค็น honeypot หรือโทเค็นหลอกลวง.",
                        requirement_2: "อย่าส่งโทเค็นเดียวกันหลายครั้ง.",
                        requirement_3: "สมาร์ทคอนแทรคต้องถูกปรับใช้บนเมนเน็ต.",
                        requirement_4: "จำเป็นต้องมีโลโก้.",
                        requirement_5: "หากคุณละเมิดกฎหมายและข้อบังคับที่เกี่ยวข้อง คุณต้องรับผิดชอบทางกฎหมายที่เกี่ยวข้องด้วยตัวเอง.",
                        addMore: "เพิ่มอีก",
                        placeholder_1: "กรุณากรอก...",
                        tokenRequirement: "ข้อกำหนดโทเค็น",
                        information: "ข้อมูลโทเค็น",
                        network: "เครือข่าย",
                        name: "ชื่อโทเค็น",
                        symbol: "ชื่อโทเค็น",
                        success: "Success",
                        bl_symbol: "สัญลักษณ์ BL",
                        precision: "ความแม่นยำของโทเค็น",
                        decimal: "ทศนิยมของโทเค็น",
                        totalSupply: "อุปทานทั้งหมด",
                        contract: "สัญญาโทเค็น",
                        website: "เว็บไซต์อย่างเป็นทางการ",
                        introduction: "โทเค็นแนะนำ"
                    },
                    RECRUITING: {
                        title: "TP Man Recruitment Plan",
                        text: "Join the TokenPocket community",
                        text1: "Committed to the blockchain world and contribute your part",
                        text2: "We build a Web3.0 world together",
                        joinUs: "Join Us",
                        aboutTitle: "About TP Man",
                        aboutText: "TP Man is an important part of the TokenPocket community, and we sincerely invite you to join us!",
                        aboutText1: "You are a blockchain enthusiast and endorse the industry value.",
                        aboutText2: "Enjoy the convenience brought by TokenPocket wallet when you explore the blockchain world.",
                        missionTitle: "The Mission of TP Man",
                        missionText: "Help TokenPocket to serve more blockchain users around the world. We hope you, meet two of the following requirements to apply.",
                        missionText1: "Expand and promote TokenPocket cooperation with companies or hot projects in your country through various channels",
                        missionText2: "Plan marketing activities that meet the needs of local users",
                        missionText3: "Have the ability to operate mainstream social medias such as Twitter, Youtube, Telegram, and Discord",
                        missionText4: "Fluent in English, and be able to complete translation work",
                        missionText5: "TokenPocket plans to provide more usage and technical support for global blockchain users, so we hope that you have a certain understanding of the blockchain markets of no less than one country and their users (India, the United States, Turkey, Russia, South Korea, Vietnam, the Philippines, etc.)",
                        getTitle: "What will you get?",
                        getText: "A work experience directly involved with various fields of the blockchain industry, and you will get but not limited to communication opportunities with DApp projects, Influencers, and mainstream media in the industry.",
                        getText1: "Get rich rewards from your work such as tweets translation, making video, community operation and business cooperation.",
                        getText2: "Get the most professional blockchain knowledge training and explore the Web3.0 world with the team together.",
                        getText3: "TokenPocket official benefits, including TokenPocket Swag and hardware wallets.",
                        processTitle: "Recruitment process",
                        processText: "Submit CV",
                        processText1: "CV screening",
                        processText2: "Online interview ",
                        processText3: "Interview results",
                        processText4: "Welcome aboard",
                        applyTitle: "Who can apply",
                        applyText: "Face the world, regardless of country",
                        applyText1: "Be keen and curious about the blockchain world",
                        applyText2: "Fill out the form and attach your resume, then we will contact you as soon as possible",
                        footerTitle: "About TokenPocket",
                        footerText: "over",
                        footerText1_1: "20M",
                        footerText1_2: "global users",
                        footerText2_1: "3.5M",
                        footerText2_2: "monthly active users",
                        footerText3_1: "200",
                        footerText3_2: "countries and regions",
                        footerText4: "TokenPocket is the world's leading multi-chain self-custodial wallet",
                        footerText5: "Coming soon"
                    },
                    ABOUT: {
                        title: "เกี่ยวกับเรา",
                        desc: "TokenPocket เป็นกระเป๋าเงินแบบกระจายศูนย์หลายเชนที่ให้บริการแก่ผู้ใช้ด้วยกระเป๋าเงินมือถือ กระเป๋าเงินแบบขยาย และกระเป๋าเงินฮาร์ดแวร์ รองรับเชนสาธารณะเช่น Bitcoin, Ethereum, BNB Smart Chain, TRON, Aptos, Polygon, Solana, Polkadot, EOS และเชนที่เข้ากันได้กับ EVM ทั้งหมด บริการผู้ใช้กว่า 30 ล้านคนจากกว่า 200 ประเทศและภูมิภาค เป็นกระเป๋าเงินคริปโตชั้นนำของโลกที่ได้รับความไว้วางใจจากผู้ใช้ทั่วโลก",
                        philosophy: {
                            title: "ปรัชญาของเรา",
                            desc: "เรายึดมั่นในชุมชนเทคโนโลยีแบบเปิดและยินดีต้อนรับนักพัฒนาทุกคนให้ร่วมสร้างโลกบล็อกเชนที่สะดวก ปลอดภัย และมีคุณค่ามากขึ้น",
                            ambition: "ความทะเยอทะยาน",
                            ambition_desc: "ทำให้บล็อกเชนเกิดขึ้นทุกที่",
                            value: "คุณค่า",
                            value_desc: "คืนข้อมูลให้ผู้ใช้ ทำให้คุณค่าเป็นของเจ้าของที่แท้จริง",
                            attitude: "ทัศนคติ",
                            attitude_desc: "เปิดใจกว้าง ความร่วมมือร่วมกัน"
                        },
                        milestones: {
                            title: "เหตุการณ์สำคัญ",
                            desc_2018_4_1: "ก่อตั้ง TokenPocket",
                            desc_2018_8_1: "ได้รับการลงทุนจาก Huobi, Hofan, Byte Capital",
                            desc_2019_8_1: "เปิดตัวกระเป๋าเงินเดสก์ท็อป รองรับ TRON",
                            desc_2019_11_1: "ยอดดาวน์โหลดใน Google Play เกิน 1,000,000",
                            desc_2020_7_1: "รองรับกระเป๋าเงิน HD",
                            desc_2020_9_1: "รองรับ BSC และแนวโน้ม DeFi",
                            desc_2020_12_1: "รองรับ Eth2.0 Staking",
                            desc_2021_3_1: "บ่มเพาะ Transit",
                            desc_2021_6_1: "ฐานผู้ใช้เกิน 20,000,000",
                            desc_2021_8_1: "บ่มเพาะกระเป๋าเงินฮาร์ดแวร์ KeyPal",
                            desc_2021_11_1: "อัปเกรดแบรนด์ โลโก้ใหม่และแบรนด์ใหม่",
                            desc_2022_1_1: "บ่มเพาะ ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://buy.transit.finance/ramp" target="_blank">Transit Buy</a>', ", รองรับการเงินโลก"),
                            desc_2022_5_1: "ซื้อกิจการ dFox และเปลี่ยนชื่อเป็น TokenPocket Extension",
                            desc_2022_7_1: "ลงทุนใน ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://debox.pro/" target="_blank">DeBox</a>', ", เครื่องมือการจัดการชุมชนแบบ DID ใน Web3"),
                            desc_2022_9_1: "ลงทุนใน WrapCoin",
                            desc_2022_12_1: "รองรับกระเป๋าเงินหลายลายเซ็น",
                            desc_2023_4_1: "รองรับการอัปเดต Ethereum Shapella",
                            desc_2023_4_2: "รองรับการจัดการสเตคด้วยตนเองใน Stake Vault",
                            desc_2023_5_1: "เปิดตัวบริการเช่าพลังงาน TRON และบริการชดเชยพลังงาน ซึ่งช่วยประหยัดค่าธรรมเนียมเครือข่ายได้ถึง 75%",
                            desc_2023_5_2: "รองรับระบบนิเวศ Bitcoin, โปรโตคอล Nostr, BRC-20",
                            desc_2023_8_1: "ลงทุนในโปรโตคอล LRT ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://www.puffer.fi/" target="_blank">Puffer Finance</a>'),
                            desc_2023_10_1: "".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://card.keypal.pro/" target="_blank">Keypal Card</a>', " บัตรชิปเข้ารหัสปลอดภัยจำหน่าย"),
                            desc_2023_11_1: "เปิดตัว AA Smart Wallet",
                            desc_2024_2_1: "ได้รับใบอนุญาต MSB จาก FinCEN, สหรัฐอเมริกา",
                            desc_2024_3_1: "ผู้ติดตามเกิน 600,000 คนบน ".concat('<a style="color: #2980fe;text-decoration: underline;" href="https://twitter.com/TokenPocket_TP" target="_blank">Twitter (X)</a>'),
                            desc_2024_5_1: "ร่วมมือกับ Victory Securities บริษัทหลักทรัพย์ที่มีใบอนุญาตครบวงจร",
                            desc_2024_5_2: "ตั้งอยู่ใน HK Cyberport, จัดตั้งศูนย์ปฏิบัติการเอเชียแปซิฟิก",
                            January: "มกราคม",
                            February: "กุมภาพันธ์",
                            March: "มีนาคม",
                            April: "เมษายน",
                            May: "พฤษภาคม",
                            June: "มิถุนายน",
                            July: "กรกฎาคม",
                            August: "สิงหาคม",
                            September: "กันยายน",
                            October: "ตุลาคม",
                            November: "พฤศจิกายน",
                            December: "ธันวาคม"
                        },
                        contact_us: {
                            title: "ติดต่อเรา",
                            service: "บริการลูกค้า",
                            service_desc: "service@tokenpocket.pro",
                            bd: "ความร่วมมือทางธุรกิจ",
                            bd_desc: "bd@tokenpocket.pro",
                            developers: "นักพัฒนา",
                            developers_desc: "Discord"
                        }
                    },
                    SEO: {
                        title: "TokenPocket - Your universal digital wallet | TP wallet - ETH wallet - BTC wallet - BSC wallet - HECO wallet - OKExChain wallet - Polkadot wallet - Kusama wallet - DeFi wallet - Layer 2 wallet - EOS wallet - TRX wallet - nostr",
                        description: "โทเค็นพ็อกเก็ต เป็นกระเป๋าเงินสกุลเงินดิจิทัลชั้นนำของโลก รองรับบล็อคเชนสาธารณะรวมถึง BTC, ETH, BSC, HECO, TRON, OKExChain, Polkadot, Kusama, EOS and เลเยอร์ 2.",
                        keywords: "โทเค็นพ็อกเก็ต,โทเค็นพ็อกเก็ต,กระเป๋าเงินTP,กระเป๋าเงินEthereum ,Bitcoin,EOS,IOST,COSMOS,heco,bsc,เลเยอร์2,DeFi,กระเป๋าเงิน,crypto,blockchain,web3,NFT,nostr"
                    },
                    DAPPSTORE: {
                        document_title: "DAppStore | TokenPocket",
                        title: "ร้านค้า DApp",
                        copy: "Copied successfully",
                        agreement: "อ่านและยอมรับ",
                        risk_statement: "คำแถลงความเสี่ยง",
                        no_again: "ไม่มีการแสดงข้อความเพิ่มเติม",
                        collect: "รายการโปรด",
                        no_collect: "ยังไม่มีรายการโปรด",
                        data_loading: "กำลังโหลด DApps...",
                        hot: "แนวโน้ม",
                        hot_title: "DApp ยอดนิยม",
                        hot_desc: "สำรวจมากกว่า 100 DApp ยอดเยี่ยมบนบล็อกเชนสาธารณะ รวมถึง DeFi, DEX, เกมบล็อกเชน, ตลาด NFT และอื่น ๆ ทั้งหมดในที่เดียว ซึ่ง DeFi รวมถึง ตลาดแลกเปลี่ยนที่ไม่มีความเป็นกลาง (DEX), สินทรัพย์สังเคราะห์, การชำระเงิน, การให้กู้ยืม และแอปพลิเคชันอื่น ๆ ที่ใช้เทคโนโลยีบล็อกเชน",
                        placeholder: "ค้นหา DApps ด้วยชื่อหรือคำหลัก",
                        recent_search: "การค้นหาล่าสุด",
                        hot_search: "การค้นหายอดนิยม",
                        search_result: "ผลลัพธ์",
                        no_search_result: "ไม่พบรายการ",
                        enter: "เข้า ",
                        supported_networks: "รองรับ",
                        category: "หมวดหมู่",
                        all_networks: "เครือข่ายทั้งหมด",
                        community_tutorial: "คำแนะนำจากชุมชน",
                        related_tokens: "โทเค็นที่เกี่ยวข้อง",
                        more: "มากกว่า",
                        moreDApp: "มากกว่า",
                        cancel: "ยกเลิก"
                    },
                    BRANDKIT: {
                        title: "ดาวน์โหลดชุด",
                        download: "ดาวน์โหลด",
                        desc: "ในหน้านี้คุณจะพบกับโลโก้ทางการของ TokenPocket และพาเลตสีที่จะช่วยให้คุณนำเสนอแบรนด์ของเราในโครงการของคุณ เราขอเชิญคุณสำรวจและใช้ทรัพยากรเหล่านี้ตามแนวทางแบรนด์ของเราเพื่อให้แน่ใจว่าการแสดงภาพ TokenPocket เป็นไปอย่างสม่ำเสมอและเป็นมืออาชีพ",
                        logoDownload: "ดาวน์โหลดโลโก้",
                        logoDownloadDesc: "ดาวน์โหลดโลโก้แบรนด์ของเราตอนนี้เพื่อให้โครงการออกแบบของคุณรักษาภาพลักษณ์ที่สอดคล้องและดูเป็นมืออาชีพ",
                        logoDownloadDesc_1: "ไฟล์ทั้งหมดมีคุณภาพสูง เหมาะสำหรับการใช้งานบนเว็บ การพิมพ์ และแอปพลิเคชันต่าง ๆ ช่วยให้คุณสร้างภาพลักษณ์ที่น่าประทับใจได้อย่างง่ายดาย",
                        colorVersion: "เวอร์ชันสี",
                        whiteVersion: "เวอร์ชันสีขาว",
                        brandTrademark: "เครื่องหมายการค้าแบรนด์",
                        brandTrademarkDesc: 'ไอคอนของ TokenPocket ประกอบด้วยตัวอักษรตัวใหญ่ "T" และ "P"',
                        brandTrademarkDesc_2: 'ส่วนของข้อความคือ "TOKEN POCKET" ตัวอักษรใหญ่',
                        brandTrademarkDesc_3: "ไอคอนและข้อความสร้างเป็นเครื่องหมายการค้าของ TokenPocket",
                        logo: "Logo",
                        fullVertical: "เต็ม (แนวตั้ง)",
                        fullHorizontal: "เต็ม (แนวนอน)",
                        spellingRules: "กฎการสะกด",
                        spellingRulesDesc: '"เมื่อแทนแบรนด์: TOKEN POCKET"',
                        spellingRulesDesc_1: '"เมื่อแทนแอปพลิเคชัน: TokenPocket"',
                        spellingRulesDesc_2: '"ตัวอย่างผิด: TOKENPOCKET, Tokenpocket, tokenpocket"',
                        representingBrand: "เมื่อแทนแบรนด์",
                        applicationBrand: "เมื่อแทนแอปพลิเคชัน",
                        TokenPocketIcon: "ไอคอน TokenPocket",
                        TokenPocketIconDesc: '"ใช้ไอคอนแอปเมื่อกล่าวถึง TokenPocket เป็นแอป',
                        TokenPocketIconDesc_1: "ใช้ภาพโปรไฟล์สังคมในโซเชียลมีเดียหรือองค์กรต่างๆ เช่น Twitter, Facebook, Medium และ Telegram",
                        roundedIcon: "ไอคอนกลม",
                        squareIcon: "ไอคอนสี่เหลี่ยม",
                        socialAvatar: "อวาตาร์โซเชียล",
                        TokenPocketColor: "สีของ TokenPocket",
                        TokenPocketColorDesc: "สีแบรนด์ของ TokenPocket คือสีน้ำเงิน ซึ่งเป็นสัญลักษณ์ของความรู้สึกทางเทคโนโลยีและความไว้วางใจในอินเทอร์เน็ต ในกราฟของแอปยังใช้สีแบบไล่ระดับด้วย",
                        primary: "สีหลัก",
                        secondary: "สีรอง",
                        colorSystem: "ระบบสี",
                        brandBlue: "สีน้ำเงินแบรนด์",
                        brandBlack: "สีดำแบรนด์",
                        OffWhite: "สีขาวงาช้าง",
                        palette: "พาเลตต์"
                    }
                }
            };

        function De(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }

        function Ce(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? De(Object(source), !0).forEach((function(t) {
                    Object(r.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : De(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        c.default.use(Ae.a);
        var we = function(e) {
                var t = e.app,
                    o = e.store;
                t.i18n = new Ae.a({
                    locale: o.state.language,
                    fallbackLocale: "en",
                    messages: {
                        zh: Ce({}, Pe.zh),
                        "zh-tw": Ce({}, Pe["zh-tw"]),
                        en: Ce({}, Pe.en),
                        ko: Ce({}, Pe.ko),
                        ru: Ce({}, Pe.ru),
                        es: Ce({}, Pe.es),
                        hi: Ce({}, Pe.hi),
                        fil: Ce({}, Pe.fil),
                        pt: Ce({}, Pe.pt),
                        ja: Ce({}, Pe.ja),
                        vi: Ce({}, Pe.vi),
                        th: Ce({}, Pe.th)
                    }
                }), t.i18n.path = function(link) {
                    return "/".concat(t.i18n.locale).concat(link)
                }
            },
            Se = (o(92), function(e) {
                e.app.router.afterEach((function(e, t, o) {
                    ! function() {
                        var e = document.createElement("script");
                        e.src = "https://hm.baidu.com/hm.js?b46777860a3e1d6895b3546afafc8b0f";
                        var s = document.getElementsByTagName("script")[0];
                        s.parentNode.insertBefore(e, s)
                    }(),
                    function() {
                        var e = document.createElement("script"),
                            t = window.location.protocol.split(":")[0];
                        e.src = "https" === t ? "https://zz.bdstatic.com/linksubmit/push.js" : "http://push.zhanzhang.baidu.com/push.js";
                        var s = document.getElementsByTagName("script")[0];
                        s.parentNode.insertBefore(e, s)
                    }()
                }))
            }),
            Ee = o(241),
            xe = o.n(Ee);
        c.default.use(xe.a);
        var Me = o(242),
            Ne = o.n(Me);
        c.default.use(Ne.a);
        var i, s, Ie, Be, a, Re, Ue = o(243);
        c.default.prototype.$mitt = Object(Ue.a)(), i = window, s = document, Ie = "script", Be = "ga", i.GoogleAnalyticsObject = Be, i.ga = i.ga || function() {
            (i.ga.q = i.ga.q || []).push(arguments)
        }, i.ga.l = 1 * new Date, a = s.createElement(Ie), Re = s.getElementsByTagName(Ie)[0], a.async = 1, a.src = "https://www.google-analytics.com/analytics.js", Re.parentNode.insertBefore(a, Re), ga("create", "UA-153148934-1", "auto");
        var Le = function(e) {
            var t = e.app.router;
            e.store;
            t.afterEach((function(e, t) {
                ga("set", "page", e.fullPath), ga("send", "pageview")
            }))
        };

        function Fe(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }

        function je(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? Fe(Object(source), !0).forEach((function(t) {
                    Object(r.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : Fe(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        c.default.component(h.a.name, h.a), c.default.component(T.a.name, je(je({}, T.a), {}, {
            render: function(e, t) {
                return T.a._warned || (T.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), T.a.render(e, t)
            }
        })), c.default.component(C.name, C), c.default.component("NChild", C), c.default.component(L.name, L), Object.defineProperty(c.default.prototype, "$nuxt", {
            get: function() {
                var e = this.$root.$options.$nuxt;
                return e || "undefined" == typeof window ? e : window.$nuxt
            },
            configurable: !0
        }), c.default.use(d.a, {
            keyName: "head",
            attribute: "data-n-head",
            ssrAttribute: "data-n-head-ssr",
            tagIDKeyName: "hid"
        });
        var He = {
                name: "page",
                mode: "out-in",
                appear: !1,
                appearClass: "appear",
                appearActiveClass: "appear-active",
                appearToClass: "appear-to"
            },
            ze = l.a.Store.prototype.registerModule;

        function Ke(path, e) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                o = Array.isArray(path) ? !!path.reduce((function(e, path) {
                    return e && e[path]
                }), this.state) : path in this.state;
            return ze.call(this, path, e, je({
                preserveState: o
            }, t))
        }

        function We(e) {
            return qe.apply(this, arguments)
        }

        function qe() {
            return qe = Object(n.a)(regeneratorRuntime.mark((function e(t) {
                var o, r, l, d, m, h, path, k, T = arguments;
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return k = function(e, t) {
                                if (!e) throw new Error("inject(key, value) has no key provided");
                                if (void 0 === t) throw new Error("inject('".concat(e, "', value) has no value provided"));
                                d[e = "$" + e] = t, d.context[e] || (d.context[e] = t), l[e] = d[e];
                                var o = "__nuxt_" + e + "_installed__";
                                c.default[o] || (c.default[o] = !0, c.default.use((function() {
                                    Object.prototype.hasOwnProperty.call(c.default.prototype, e) || Object.defineProperty(c.default.prototype, e, {
                                        get: function() {
                                            return this.$root.$options[e]
                                        }
                                    })
                                })))
                            }, o = T.length > 1 && void 0 !== T[1] ? T[1] : {}, e.next = 4, D(0, o);
                        case 4:
                            return r = e.sent, (l = se(t)).$router = r, l.registerModule = Ke, d = je({
                                head: {
                                    title: "TokenPocket - Your secure crypto & DeFi Wallet | TP wallet - ETH wallet - BTC wallet - BSC wallet - HECO wallet - OKXChain wallet - Web3 Wallet - Crypto Wallet - blockchain wallet - Polkadot wallet - Kusama wallet - DeFi wallet - Layer 2 wallet - Solana Wallet - EOS wallet - TRX wallet - nostr",
                                    meta: [{
                                        charset: "utf-8"
                                    }, {
                                        name: "viewport",
                                        content: "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
                                    }, {
                                        hid: "description",
                                        name: "description",
                                        content: "TokenPocket is a world-leading crypto wallet, supporting public blockchains including BTC, ETH, BSC, TRON, Aptos, Polygon, Solana, OKExChain, Polkadot, Kusama, EOS and Layer2."
                                    }, {
                                        hid: "keywords",
                                        name: "keywords",
                                        content: "TokenPocket is a world-leading crypto wallet, supporting public blockchains including BTC, ETH, BSC, TRON, Aptos, Polygon, Solana, OKExChain, Polkadot, Kusama, EOS and Layer2."
                                    }, {
                                        property: "og:type",
                                        content: "website"
                                    }, {
                                        hid: "og:title",
                                        property: "og:title",
                                        content: "TokenPocket - Your secure crypto & DeFi Wallet | TP wallet - ETH wallet - BTC wallet - BSC wallet - HECO wallet - OKXChain wallet - Web3 Wallet - Crypto Wallet - blockchain wallet - Polkadot wallet - Kusama wallet - DeFi wallet - Layer 2 wallet - Solana Wallet - EOS wallet - TRX wallet - nostr"
                                    }, {
                                        property: "og:url",
                                        content: "https://www.tokenpocket.pro"
                                    }, {
                                        hid: "og:site_name",
                                        property: "og:site_name",
                                        content: "TokenPocket - Your secure crypto & DeFi Wallet | TP wallet - ETH wallet - BTC wallet - BSC wallet - HECO wallet - OKXChain wallet - Web3 Wallet - Crypto Wallet - blockchain wallet - Polkadot wallet - Kusama wallet - DeFi wallet - Layer 2 wallet - Solana Wallet - EOS wallet - TRX wallet - nostr"
                                    }, {
                                        hid: "og:description",
                                        property: "og:description",
                                        content: "TokenPocket is a world-leading crypto wallet, supporting public blockchains including BTC, ETH, BSC, TRON, Aptos, Polygon, Solana, OKExChain, Polkadot, Kusama, EOS and Layer2."
                                    }, {
                                        property: "og:locale",
                                        content: function() {
                                            return console.log(this), "zh-CN"
                                        }
                                    }, {
                                        hid: "twitter:card",
                                        property: "twitter:card",
                                        content: "summary"
                                    }, {
                                        hid: "twitter:title",
                                        property: "twitter:title",
                                        content: "TokenPocket - Your secure crypto & DeFi Wallet | TP wallet - ETH wallet - BTC wallet - BSC wallet - HECO wallet - OKXChain wallet - Web3 Wallet - Crypto Wallet - blockchain wallet - Polkadot wallet - Kusama wallet - DeFi wallet - Layer 2 wallet - Solana Wallet - EOS wallet - TRX wallet - nostr"
                                    }, {
                                        hid: "twitter:description",
                                        property: "twitter:description",
                                        content: "TokenPocket is a world-leading crypto wallet, supporting public blockchains including BTC, ETH, BSC, TRON, Aptos, Polygon, Solana, OKExChain, Polkadot, Kusama, EOS and Layer2."
                                    }],
                                    link: [{
                                        rel: "icon",
                                        type: "image/x-icon",
                                        href: "/favicon.png"
                                    }, {
                                        rel: "stylesheet",
                                        href: "https://hk.tpstatic.net/bootstrap-grid.min.css"
                                    }],
                                    script: [],
                                    style: []
                                },
                                store: l,
                                router: r,
                                nuxt: {
                                    defaultTransition: He,
                                    transitions: [He],
                                    setTransitions: function(e) {
                                        return Array.isArray(e) || (e = [e]), e = e.map((function(e) {
                                            return e = e ? "string" == typeof e ? Object.assign({}, He, {
                                                name: e
                                            }) : Object.assign({}, He, e) : He
                                        })), this.$options.nuxt.transitions = e, e
                                    },
                                    err: null,
                                    dateErr: null,
                                    error: function(e) {
                                        e = e || null, d.context._errored = Boolean(e), e = e ? Object(A.p)(e) : null;
                                        var o = d.nuxt;
                                        return this && (o = this.nuxt || this.$options.nuxt), o.dateErr = Date.now(), o.err = e, t && (t.nuxt.error = e), e
                                    }
                                }
                            }, re), l.app = d, m = t ? t.next : function(e) {
                                return d.router.push(e)
                            }, t ? h = r.resolve(t.url).route : (path = Object(A.f)(r.options.base, r.options.mode), h = r.resolve(path).route), e.next = 14, Object(A.t)(d, {
                                store: l,
                                route: h,
                                next: m,
                                error: d.nuxt.error.bind(d),
                                payload: t ? t.payload : void 0,
                                req: t ? t.req : void 0,
                                res: t ? t.res : void 0,
                                beforeRenderFns: t ? t.beforeRenderFns : void 0,
                                ssrContext: t
                            });
                        case 14:
                            return k("config", o), window.__NUXT__ && window.__NUXT__.state && l.replaceState(window.__NUXT__.state), d.context.enablePreview = function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                d.previewData = Object.assign({}, e), k("preview", e)
                            }, e.next = 20, ke(d.context, k);
                        case 20:
                            e.next = 23;
                            break;
                        case 23:
                            e.next = 26;
                            break;
                        case 26:
                            return e.next = 29, we(d.context);
                        case 29:
                            return e.next = 32, Se(d.context);
                        case 32:
                            e.next = 35;
                            break;
                        case 35:
                            e.next = 38;
                            break;
                        case 38:
                            e.next = 41;
                            break;
                        case 41:
                            return e.next = 44, Le(d.context);
                        case 44:
                            return d.context.enablePreview = function() {
                                console.warn("You cannot call enablePreview() outside a plugin.")
                            }, e.next = 47, new Promise((function(e, t) {
                                var o = r.resolve(d.context.route.fullPath).route;
                                if (!o.matched.length) return e();
                                r.replace(o, e, (function(o) {
                                    if (!o._isRouter) return t(o);
                                    if (2 !== o.type) return e();
                                    var c = r.afterEach(function() {
                                        var t = Object(n.a)(regeneratorRuntime.mark((function t(o, n) {
                                            return regeneratorRuntime.wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.next = 3, Object(A.j)(o);
                                                    case 3:
                                                        d.context.route = t.sent, d.context.params = o.params || {}, d.context.query = o.query || {}, c(), e();
                                                    case 8:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        })));
                                        return function(e, o) {
                                            return t.apply(this, arguments)
                                        }
                                    }())
                                }))
                            }));
                        case 47:
                            return e.abrupt("return", {
                                store: l,
                                app: d,
                                router: r
                            });
                        case 48:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), qe.apply(this, arguments)
        }
    }, , , , , , , , , , , , , , , , , , , , function(e, t, o) {
        "use strict";
        o(11), o(5), o(8), o(12), o(13);
        var n = o(3),
            r = o(4);

        function c(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }

        function l(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? c(Object(source), !0).forEach((function(t) {
                    Object(n.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        t.a = {
            computed: l(l({}, Object(r.b)(["isDarkMode"])), {}, {
                darkModeImg: function() {
                    var e = "";
                    return this.isDarkMode && (e = "-dark"), e
                }
            })
        }
    }, , , , , , , , , , function(e, t, o) {
        "use strict";
        var n = o(67),
            r = o(112),
            c = o(113),
            l = {
                methods: {
                    onLink: function() {
                        window.location.href = "https://help.tpwallet.io/cn/TokenPocket-product-policy-adjustment-instructions"
                    }
                }
            },
            d = (o(406), o(2)),
            m = Object(d.a)(l, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "tips"
                }, [n("div", {
                    staticClass: "text tips-text"
                }, [e._v("根据用户属地相关的监管政策，TokenPocket 已限制中国境内用户访问、使用个别功能")]), e._v(" "), n("div", {
                    staticClass: "tips-button",
                    on: {
                        click: e.onLink
                    }
                }, [n("span", [e._v("了解更多")]), e._v(" "), n("img", {
                    attrs: {
                        src: o(405)
                    }
                })])])
            }), [], !1, null, "22a48f07", null).exports,
            h = {
                components: {
                    Warn: c.a,
                    NormalNav: n.a,
                    MiniNav: r.a,
                    Tips: m
                },
                props: {
                    navTitleColor: {
                        type: String,
                        default: "#fff"
                    },
                    arrowClass: {
                        type: String,
                        default: "icon-down-fff"
                    },
                    langClass: {
                        type: String,
                        default: "icon-earth"
                    }
                },
                data: function() {
                    return {
                        scroll: 0,
                        isMobileDonateLayout: !1
                    }
                },
                mounted: function() {
                    var e = this;
                    window.addEventListener("scroll", this.handleScroll), this.$nextTick((function() {
                        var t = e.$refs.HeaderLayout;
                        t && e.$store.commit("SET_HEADERLAYOUTHEIGHT", t.clientHeight)
                    })), this.$mitt.on("show-footer", (function(t) {
                        e.isMobileDonateLayout = !t.show
                    }))
                },
                methods: {
                    handleScroll: function() {
                        this.scroll = document.documentElement.scrollTop || document.body.scrollTop
                    }
                },
                beforeDestroy: function() {
                    window.removeEventListener("scroll", this.handleScroll)
                }
            },
            k = (o(407), Object(d.a)(h, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    ref: "HeaderLayout",
                    staticClass: "HeaderLayout",
                    class: {
                        scrollBg: 0 !== e.scroll && e.$route.path !== e.$i18n.path("/dappstore"), "mobile-donate-layout": e.isMobileDonateLayout
                    }
                }, [o("normal-nav", {
                    staticClass: "normal-header",
                    attrs: {
                        "arrow-class": e.arrowClass,
                        "lang-class": e.langClass,
                        "nav-title-color": e.navTitleColor
                    }
                }), e._v(" "), o("mini-nav", {
                    staticClass: "mini-header"
                })], 1)
            }), [], !1, null, "2fbc36a8", null));
        t.a = k.exports
    }, function(e, t, o) {
        "use strict";
        o(11), o(5), o(8), o(12), o(13);
        var n = o(3),
            r = (o(35), o(67)),
            c = o(4),
            l = o(207),
            d = o(108),
            m = o(164),
            h = o(54),
            k = o(17),
            T = {
                name: "Switcher",
                props: {
                    value: {
                        type: Boolean
                    },
                    size: {
                        type: String
                    }
                },
                data: function() {
                    return {
                        checked: this.value
                    }
                },
                watch: {
                    value: function(e) {
                        this.checked = e
                    }
                },
                methods: {
                    toggle: function() {
                        this.checked = !this.checked, this.$emit("switch", !this.checked)
                    }
                }
            },
            f = (o(346), o(2)),
            component = Object(f.a)(T, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "switch-wrap"
                }, [o("span", {
                    staticClass: "weui-switch",
                    class: {
                        "weui-switch-on": e.checked, big: "big" === e.size
                    },
                    attrs: {
                        value: e.value
                    },
                    on: {
                        click: function(t) {
                            return t.stopPropagation(), e.toggle.apply(null, arguments)
                        }
                    }
                })])
            }), [], !1, null, null, null),
            _ = component.exports;

        function A(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }

        function y(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? A(Object(source), !0).forEach((function(t) {
                    Object(n.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : A(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        t.a = {
            name: "HeaderLayout",
            mixins: [l.a, d.a, m.a, h.a],
            components: {
                normalNav: r.a,
                Switcher: _
            },
            props: {
                navTitleColor: {
                    type: String,
                    default: "#fff"
                },
                navIconColor: {
                    type: String,
                    default: "#fff"
                },
                arrowClass: {
                    type: String,
                    default: "icon-down-fff"
                },
                langClass: {
                    type: String,
                    default: "icon-earth"
                }
            },
            data: function() {
                return {
                    black: "#000",
                    navIndex: "",
                    menuState: !1,
                    clientWidth: 0,
                    canRun: !0,
                    eventListen: null,
                    isOpen: "false",
                    isBrandKit: !1
                }
            },
            computed: y(y({}, Object(c.b)(["language", "isDarkMode", "deviceSize"])), {}, {
                brandKitList: function() {
                    return [{
                        class: "nav-icon-1".concat(this.darkModeImg),
                        title: this.$t("BRANDKIT.title"),
                        local: !0,
                        url: this.$i18n.path("/brandkit")
                    }, {
                        class: "nav-icon-2".concat(this.darkModeImg),
                        title: this.$t("BRANDKIT.download"),
                        download: !0,
                        url: "https://hk.tpstatic.net/brand-kit/brand-kit.zip"
                    }]
                },
                navLogo: function() {
                    return o(347)("./logo".concat(this.darkModeImg, ".png"))
                },
                languageImg: function() {
                    return o(350)("./language".concat(this.darkModeImg, ".png"))
                },
                closeImg: function() {
                    return o(353)("./close".concat(this.darkModeImg, ".png"))
                },
                menuImg: function() {
                    return o(356)("./menu".concat(this.darkModeImg, ".png"))
                },
                titleLang: function() {
                    switch (this.language) {
                        case "zh":
                            return "中文简体";
                        case "zh-tw":
                            return "中文繁体";
                        case "en":
                            return "English";
                        case "ko":
                            return "한국어";
                        case "ru":
                            return "Русский";
                        case "es":
                            return "Español";
                        case "hi":
                            return "हिन्दी";
                        case "fil":
                            return "Filipino";
                        case "pt":
                            return "Português";
                        case "ja":
                            return "日本語";
                        case "vi":
                            return "Tiếng Việt";
                        case "th":
                            return "ภาษาไทย";
                        default:
                            return "中文"
                    }
                },
                navList: function() {
                    var e = {
                            local: !0,
                            title: this.$t("COMMON.LAYOUT.products"),
                            img: o(359)("./products".concat(this.darkModeImg, ".png")),
                            navMobileIcon: o(362)("./1-m".concat(this.darkModeImg, ".png")),
                            children: [{
                                class: "nav-icon-1".concat(this.darkModeImg),
                                desc: this.$t("COMMON.LAYOUT.mobileWalletDesc"),
                                local: !0,
                                title: this.$t("COMMON.LAYOUT.mobileWallet"),
                                url: "/"
                            }, {
                                class: "nav-icon-2".concat(this.darkModeImg),
                                desc: this.$t("COMMON.LAYOUT.hardwareWalletDesc"),
                                title: this.$t("COMMON.LAYOUT.hardwareWallet"),
                                url: this.keypalUrl
                            }, {
                                class: "nav-icon-26".concat(this.darkModeImg),
                                desc: this.$t("COMMON.LAYOUT.TPCardDesc"),
                                title: this.$t("COMMON.LAYOUT.TPCard"),
                                url: this.TPCardUrl
                            }, {
                                class: "nav-icon-3".concat(this.darkModeImg),
                                desc: this.$t("COMMON.LAYOUT.extensionWalletDesc"),
                                title: this.$t("COMMON.LAYOUT.extensionWallet"),
                                url: this.extensionUrl
                            }]
                        },
                        t = {
                            title: this.$t("COMMON.LAYOUT.brandKit"),
                            navMobileIcon: o(365)("./2-m".concat(this.darkModeImg, ".png")),
                            children: this.brandKitList
                        },
                        n = {
                            title: this.$t("COMMON.LAYOUT.tools"),
                            img: o(368)("./tools".concat(this.darkModeImg, ".png")),
                            navMobileIcon: o(371)("./3-m".concat(this.darkModeImg, ".png")),
                            column: 3,
                            children: [{
                                class: "nav-icon-4".concat(this.darkModeImg),
                                desc: this.$t("COMMON.LAYOUT.versionVerificationDesc"),
                                title: this.$t("COMMON.LAYOUT.versionVerification"),
                                url: this.verifyVersionUrl
                            }, {
                                class: "nav-icon-5".concat(this.darkModeImg),
                                desc: this.$t("COMMON.LAYOUT.easyInscriptionDesc"),
                                title: this.$t("COMMON.LAYOUT.easyInscription"),
                                url: this.inscriptionUrl
                            }, {
                                class: "nav-icon-6".concat(this.darkModeImg),
                                desc: this.$t("COMMON.LAYOUT.BATCH_SENDER_DESC"),
                                title: this.$t("COMMON.LAYOUT.BATCH_SENDER"),
                                url: this.batchSenderUrl
                            }, {
                                class: "nav-icon-7".concat(this.darkModeImg),
                                desc: this.$t("COMMON.LAYOUT.tokenSecurityDesc"),
                                title: this.$t("COMMON.LAYOUT.tokenSecurity"),
                                url: this.tokenSecurityUrl
                            }, {
                                class: "nav-icon-8".concat(this.darkModeImg),
                                desc: this.$t("COMMON.LAYOUT.keyGeneratorDesc"),
                                title: this.$t("COMMON.LAYOUT.keyGenerator"),
                                url: this.keyUrl
                            }, {
                                class: "nav-icon-9".concat(this.darkModeImg),
                                desc: this.$t("COMMON.LAYOUT.tokenClaimDesc"),
                                title: this.$t("COMMON.LAYOUT.tokenClaim"),
                                url: this.tokenClaimUrl
                            }, {
                                class: "nav-icon-10".concat(this.darkModeImg),
                                desc: this.$t("COMMON.LAYOUT.tokenProfileDesc"),
                                title: this.$t("COMMON.LAYOUT.tokenProfile"),
                                url: this.tokenProfileUrl
                            }, {
                                class: "nav-icon-11".concat(this.darkModeImg),
                                desc: this.$t("COMMON.LAYOUT.approvalDetectorDesc"),
                                title: this.$t("COMMON.LAYOUT.approvalDetector"),
                                url: this.approvalUrl
                            }, {
                                class: "nav-icon-12".concat(this.darkModeImg),
                                desc: this.$t("COMMON.LAYOUT.nostrAssetsBatchSenderDesc"),
                                title: this.$t("COMMON.LAYOUT.nostrAssetsBatchSender"),
                                url: this.nostrUrl
                            }]
                        },
                        r = {
                            title: this.$t("COMMON.LAYOUT.trade"),
                            img: o(374)("./trade".concat(this.darkModeImg, ".png")),
                            navMobileIcon: o(377)("./4-m".concat(this.darkModeImg, ".png")),
                            children: [{
                                class: "nav-icon-13".concat(this.darkModeImg),
                                desc: this.$t("COMMON.LAYOUT.swapDesc"),
                                title: this.$t("COMMON.LAYOUT.swap"),
                                url: this.transitSwapUrl
                            }, {
                                class: "nav-icon-14".concat(this.darkModeImg),
                                desc: this.$t("COMMON.LAYOUT.bridgeDesc"),
                                title: this.$t("COMMON.LAYOUT.bridge"),
                                url: this.transitSwapUrl
                            }, {
                                class: "nav-icon-15".concat(this.darkModeImg),
                                desc: this.$t("COMMON.LAYOUT.buyCryptoDesc"),
                                title: this.$t("COMMON.LAYOUT.buyCrypto"),
                                url: this.transitBuyUrl
                            }, {
                                class: "nav-icon-16".concat(this.darkModeImg),
                                desc: this.$t("COMMON.LAYOUT.marketDesc"),
                                title: this.$t("COMMON.LAYOUT.market"),
                                url: this.transitSwapMarketUrl
                            }]
                        },
                        c = {
                            title: this.$t("DAPPSTORE.title"),
                            navMobileIcon: o(380)("./5-m".concat(this.darkModeImg, ".png")),
                            local: !0,
                            url: this.$i18n.path("/dappstore")
                        },
                        l = {
                            title: this.$t("COMMON.LAYOUT.build"),
                            img: o(383)("./build".concat(this.darkModeImg, ".png")),
                            navMobileIcon: o(386)("./6-m".concat(this.darkModeImg, ".png")),
                            leftDis: !0,
                            children: [{
                                class: "nav-icon-19".concat(this.darkModeImg),
                                desc: this.$t("COMMON.LAYOUT.subDAppDesc"),
                                local: !0,
                                title: this.$t("COMMON.LAYOUT.subDApp"),
                                url: this.$i18n.path("/submit/dapp")
                            }, {
                                class: "nav-icon-21".concat(this.darkModeImg),
                                desc: this.$t("COMMON.LAYOUT.subTokenDesc"),
                                local: !0,
                                title: this.$t("COMMON.LAYOUT.subToken"),
                                url: this.$i18n.path("/submit/token")
                            }, {
                                class: "nav-icon-20".concat(this.darkModeImg),
                                desc: this.$t("COMMON.LAYOUT.subChainDesc"),
                                title: this.$t("COMMON.LAYOUT.subChain"),
                                url: "https://github.com/TP-Lab/networklist-org"
                            }, {
                                class: "nav-icon-17".concat(this.darkModeImg),
                                desc: this.$t("COMMON.LAYOUT.developersDesc"),
                                title: this.$t("COMMON.LAYOUT.developers"),
                                url: this.developerUrl
                            }]
                        },
                        d = {
                            title: this.$t("COMMON.LAYOUT.support"),
                            img: o(389)("./support".concat(this.darkModeImg, ".png")),
                            navMobileIcon: o(392)("./7-m".concat(this.darkModeImg, ".png")),
                            children: [{
                                class: "nav-icon-22".concat(this.darkModeImg),
                                desc: this.$t("COMMON.LAYOUT.helpCenterDesc"),
                                title: this.$t("COMMON.LAYOUT.helpCenter"),
                                url: this.helpUrl
                            }, {
                                class: "nav-icon-23".concat(this.darkModeImg),
                                desc: this.$t("COMMON.LAYOUT.contactUsDesc"),
                                title: this.$t("COMMON.LAYOUT.contactUs"),
                                url: this.contactUsUrl
                            }, {
                                class: "nav-icon-24".concat(this.darkModeImg),
                                desc: this.$t("COMMON.LAYOUT.forumDesc"),
                                title: this.$t("COMMON.LAYOUT.forum"),
                                url: "https://fans.tokenpocket.pro/"
                            }]
                        },
                        m = {
                            title: this.$t("COMMON.LAYOUT.darkMode"),
                            navMobileIcon: o(395)("./8-m".concat(this.darkModeImg, ".png")),
                            darkMode: !0
                        },
                        h = {
                            title: this.titleLang,
                            navMobileIcon: o(398)("./9-m".concat(this.darkModeImg, ".png")),
                            lang: !0,
                            class: "language-changes",
                            children: [{
                                title: "简体中文",
                                lang: "zh",
                                link: "/zh",
                                class: "locale-zh"
                            }, {
                                title: "繁体中文",
                                lang: "zh-tw",
                                link: "/zh-tw",
                                class: "locale-zh-tw"
                            }, {
                                title: "English",
                                lang: "en",
                                link: "/en",
                                class: "locale-en"
                            }, {
                                title: "한국어",
                                lang: "ko",
                                link: "/ko",
                                class: "locale-ko"
                            }, {
                                title: "Русский",
                                lang: "ru",
                                link: "/ru",
                                class: "locale-ru"
                            }, {
                                title: "Español",
                                lang: "es",
                                link: "/es",
                                class: "locale-es"
                            }, {
                                title: "हिन्दी",
                                lang: "hi",
                                link: "/hi",
                                class: "locale-hi"
                            }, {
                                title: "Filipino",
                                lang: "fil",
                                link: "/fil",
                                class: "locale-fil"
                            }, {
                                title: "Português",
                                lang: "pt",
                                link: "/pt",
                                class: "locale-pt"
                            }, {
                                title: "日本語",
                                lang: "ja",
                                link: "/ja",
                                class: "locale-ja"
                            }, {
                                title: "Tiếng Việt",
                                lang: "vi",
                                link: "/vi",
                                class: "locale-vi"
                            }, {
                                title: "ภาษาไทย",
                                lang: "th",
                                link: "/th",
                                class: "locale-th"
                            }]
                        };
                    return "web" === this.deviceSize ? [e, n, r, c, l, d, {
                        title: ""
                    }, m, h] : [e, t, n, r, c, l, d, m, h]
                },
                currentNav: function() {
                    return "" !== this.navIndex && this.navList[this.navIndex].children && !this.navList[this.navIndex].lang ? this.navList[this.navIndex] : null
                },
                isShow: function() {
                    return "true" === this.isOpen && this.currentNav && this.currentNav.title && !this.currentNav.lang
                }
            }),
            watch: {
                clientWidth: function() {
                    this.navIndex = ""
                },
                menuState: function(e) {
                    document.body.style.overflow = e ? "hidden" : "auto"
                }
            },
            mounted: function() {
                var e = this;
                this.clientWidth = document.body.clientWidth, this.navState(), this.windowChange(), document.body.addEventListener("click", (function() {
                    e.isBrandKit = !1
                }))
            },
            beforeDestroy: function() {
                document.removeEventListener("click", this.eventListen)
            },
            methods: {
                onLogo: function(e) {
                    e.preventDefault(), 0 === e.button ? this.$router.push("/") : 2 === e.button && (this.isBrandKit = !this.isBrandKit)
                },
                onBrand: function(e, t) {
                    switch (t) {
                        case 0:
                            this.$router.push(this.$i18n.path("/brandkit"));
                            break;
                        case 1:
                            var link = document.createElement("a");
                            link.href = e, document.body.appendChild(link), link.click(), document.body.removeChild(link)
                    }
                },
                changeMode: function() {
                    this.$store.commit("SET_DARKMODE", !this.isDarkMode), Object(k.i)(this.isDarkMode), localStorage.setItem("theme", this.isDarkMode ? "dark" : "light")
                },
                changeMenuState: function() {
                    this.menuState = !this.menuState, this.navIndex = ""
                },
                navClass: function(e, t) {
                    var o = -1 !== ["/", "/en", "/zh", "/ko", "/zh-tw"].indexOf(this.$route.fullPath);
                    return o && !e.lang ? "icon-down-fff" : o || e.lang ? o && e.lang ? "icon-earth" : !o && e.lang ? "icon-earth-mini" : void 0 : "icon-down-"
                },
                navState: function(e) {
                    var t = this;
                    document.addEventListener("click", (function(e) {
                        t.clientWidth > 768 && t.$refs.navMain && !t.$refs.navMain.contains(e.target) && (t.navIndex = "")
                    }), !1)
                },
                navGo: function(e, t, o) {
                    if (o.preventDefault(), e.children && (t === this.navIndex ? this.navIndex = "" : this.navIndex = t), e.url && !e.local && !e.download) return window.open(e.url);
                    e.url && e.local && this.$router.push(e.url)
                },
                onMouseenter: function() {
                    this.isOpen = "true"
                },
                onMouseleave: function() {
                    this.navIndex = "", this.isOpen = "false"
                },
                navEnter: function(e, t, o) {
                    if (o.preventDefault(), this.isOpen = "true", this.navIndex = t, e.url && !e.local && e.children) return window.open(e.url);
                    e.url && e.local && e.children && this.$router.push(e.url)
                },
                navLeave: function(e, t, o) {
                    o.preventDefault(), this.isOpen = "false", e.lang && (this.navIndex = "")
                },
                navChildrenGo: function(e, t) {
                    if (t && t.preventDefault(), e.url && !e.local) return window.open(e.url, e.download ? "_self" : "_blank");
                    if (e.url && e.local && !e.lang) {
                        if (e.url !== this.$i18n.path("/dappstore") || this.$route.path !== this.$i18n.path("/dappstore")) return e.url === this.$i18n.path("/dappstore") ? this.$router.push({
                            path: e.url,
                            query: {
                                category_id: 99998,
                                category: this.$t("DAPPSTORE.hot")
                            }
                        }) : this.$router.push(e.url);
                        window.location.reload()
                    }
                    if (e.lang) {
                        if (e.lang === this.langChange) return !1;
                        this.$route.fullPath.replace("".concat(this.language), e.lang), "/" !== this.$route.fullPath.replace("".concat(this.language), e.lang) && this.$router.replace(this.$route.fullPath.replace("".concat(this.language), e.lang)), this.langChange(e.lang)
                    }
                    this.navIndex = ""
                },
                langChange: function(e) {
                    this.$store.commit("SET_LANGUAGE", e), this.$i18n.locale = e, this.navIndex = "", this.menuState = !1, Object(k.b)({
                        theme: ""
                    })
                },
                windowChange: function() {
                    var e = this;
                    window.addEventListener("resize", (function(t) {
                        e.clientWidth = t.target.screen.width, e.$store.commit("SET_CLIENT_WIDTH", e.clientWidth)
                    }))
                }
            }
        }
    }, function(e, t, o) {
        "use strict";
        o(11), o(5), o(8), o(12), o(13);
        var n = o(3),
            r = (o(163), o(4)),
            c = o(160),
            l = o(108);

        function d(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }

        function m(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? d(Object(source), !0).forEach((function(t) {
                    Object(n.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        var h = {
                name: "FooterLayout",
                components: {
                    Modal: o(234).a
                },
                mixins: [c.a, l.a],
                data: function() {
                    return {
                        email: "",
                        show: !1,
                        url: "",
                        foldFooterList: []
                    }
                },
                computed: m(m({}, Object(r.b)(["language", "deviceSize"])), {}, {
                    followList: function() {
                        return [{
                            url: "https://twitter.com/TokenPocket_TP"
                        }, {
                            isTelegram: !0,
                            url: "zh" === this.language || "zh-tw" === this.language ? "https://t.me/tokenPocket_cn" : "ko" === this.language ? "https://t.me/tokenpocket_kor" : "https://t.me/tokenpocket_en"
                        }, {
                            url: "https://fans.tokenpocket.pro/"
                        }, {
                            url: "https://www.youtube.com/channel/UCudaS5hcbqUaMtOGHmQ2e0A"
                        }, {
                            url: "https://discord.com/invite/NKPM8TXFQk"
                        }, {
                            url: "https://github.com/TP-Lab"
                        }, {
                            url: "https://tokenpocket-gm.medium.com/"
                        }]
                    },
                    isZH: function() {
                        return "zh" === this.language
                    },
                    privacyPolicy: function() {
                        return this.isZH ? "/privacy-zh/index.html" : "/privacy-en/index.html"
                    },
                    terms: function() {
                        return this.isZH ? "/terms-zh/index.html" : "/terms-en/index.html"
                    },
                    copyright: function() {
                        return this.isZH ? "Copyright © 2018-2022 TokenPocket" : "Copyright © 2022 Singapore TokenPocket Foundation Ltd. All rights reserved."
                    },
                    footerList: function() {
                        var e, t = this;
                        return [
                            [{
                                order: 0,
                                title: this.$t("COMMON.LAYOUT.products"),
                                data: [{
                                    title: this.$t("COMMON.LAYOUT.mobileWallet"),
                                    curPage: !0,
                                    url: this.$i18n.path("/")
                                }, {
                                    title: this.$t("COMMON.LAYOUT.hardwareWallet"),
                                    url: this.keypalUrl
                                }, {
                                    title: this.$t("COMMON.LAYOUT.extensionWallet"),
                                    url: this.extensionUrl
                                }, {
                                    title: this.$t("COMMON.LAYOUT.TPCard"),
                                    url: this.TPCardUrl
                                }, {
                                    title: this.$t("COMMON.LAYOUT.swap"),
                                    url: this.transitSwapUrl
                                }, {
                                    title: this.$t("COMMON.LAYOUT.market"),
                                    url: this.transitSwapMarketUrl
                                }, {
                                    title: this.$t("COMMON.LAYOUT.buyCryptoFooter"),
                                    url: this.transitBuyUrl
                                }, {
                                    title: this.$t("COMMON.LAYOUT.fiveDegrees"),
                                    url: this.fiveDegreesUrl
                                }]
                            }],
                            [{
                                order: 1,
                                title: this.$t("COMMON.LAYOUT.tools"),
                                data: [{
                                    title: this.$t("COMMON.LAYOUT.versionVerification"),
                                    url: this.verifyVersionUrl
                                }, {
                                    title: this.$t("COMMON.LAYOUT.tokenSecurity"),
                                    url: this.tokenSecurityUrl
                                }, {
                                    title: this.$t("COMMON.LAYOUT.tokenProfile"),
                                    url: this.tokenProfileUrl
                                }, {
                                    title: this.$t("COMMON.LAYOUT.easyInscription"),
                                    url: this.inscriptionUrl
                                }, {
                                    title: this.$t("COMMON.LAYOUT.keyGenerator"),
                                    url: this.keyUrl
                                }, {
                                    title: this.$t("COMMON.LAYOUT.approvalDetector"),
                                    url: this.approvalUrl
                                }, {
                                    title: this.$t("COMMON.LAYOUT.BATCH_SENDER"),
                                    url: this.batchSenderUrl
                                }, {
                                    title: this.$t("COMMON.LAYOUT.tokenClaim"),
                                    url: this.tokenClaimUrl
                                }, {
                                    title: this.$t("COMMON.LAYOUT.nostrAssetsBatchSender"),
                                    url: this.nostrUrl
                                }, {
                                    title: "REX",
                                    url: this.rexUrl
                                }]
                            }],
                            [{
                                order: 2,
                                title: this.$t("COMMON.LAYOUT.explorer"),
                                data: [{
                                    title: this.$t("COMMON.LAYOUT.swap"),
                                    url: this.transitSwapUrl
                                }, {
                                    title: this.$t("COMMON.LAYOUT.bridge"),
                                    url: this.transitSwapUrl
                                }, {
                                    title: this.$t("COMMON.LAYOUT.buyCrypto"),
                                    url: this.transitBuyUrl
                                }, {
                                    title: this.$t("COMMON.LAYOUT.market"),
                                    url: this.transitSwapMarketUrl
                                }, {
                                    title: this.$t("DAPPSTORE.title"),
                                    url: this.$i18n.path("/dappstore")
                                }]
                            }],
                            [{
                                order: 3,
                                title: this.$t("COMMON.LAYOUT.build"),
                                data: [{
                                    title: this.$t("COMMON.LAYOUT.devCenter"),
                                    url: this.developerUrl
                                }, {
                                    title: "TP Lab",
                                    url: "https://github.com/TP-Lab"
                                }, {
                                    local: !0,
                                    title: this.$t("COMMON.LAYOUT.subDApp"),
                                    url: this.$i18n.path("/submit/dapp")
                                }, {
                                    local: !0,
                                    title: this.$t("COMMON.LAYOUT.subToken"),
                                    url: this.$i18n.path("/submit/token")
                                }, {
                                    title: this.$t("COMMON.LAYOUT.subChain"),
                                    url: "https://github.com/TP-Lab/networklist-org"
                                }, {
                                    title: this.$t("COMMON.LAYOUT.bugBounty"),
                                    url: "https://bugrap.io/bounties/TokenPocket"
                                }]
                            }],
                            [{
                                order: 4,
                                title: this.$t("COMMON.LAYOUT.learn"),
                                data: [{
                                    title: this.$t("COMMON.LAYOUT.blockchainGuide"),
                                    url: this.isZH ? "https://github.tokenpocket.pro/BlockchainGuideSeries/#/" : "https://github.tokenpocket.pro/BlockchainGuideSeries-EN/#/"
                                }, {
                                    title: this.$t("COMMON.LAYOUT.tronWallet"),
                                    url: this.isZH ? "https://github.tokenpocket.pro/BlockchainGuide-TRON/#/" : "https://github.tokenpocket.pro/BlockchainGuide-TRON-EN/#/"
                                }, {
                                    title: this.$t("COMMON.LAYOUT.iostWallet"),
                                    url: this.isZH ? "https://github.tokenpocket.pro/BlockchainGuide-IOST/#/" : "https://github.tokenpocket.pro/BlockchainGuide-IOST-EN/#/"
                                }]
                            }, {
                                order: 5,
                                title: this.$t("COMMON.LAYOUT.company"),
                                data: (e = [{
                                    local: !0,
                                    title: t.$t("COMMON.LAYOUT.about"),
                                    url: t.$i18n.path("/about")
                                }, {
                                    title: t.$t("COMMON.LAYOUT.careers"),
                                    url: t.joinUsUrl
                                }, {
                                    local: !0,
                                    title: t.$t("COMMON.LAYOUT.tpMan"),
                                    url: t.$i18n.path("/recruiting")
                                }, {
                                    title: t.$t("COMMON.LAYOUT.pressKit"),
                                    local: !0,
                                    url: t.$i18n.path("/brandkit")
                                }], t.isZH && e.push({
                                    title: t.$t("COMMON.LAYOUT.swagShop"),
                                    url: "https://shop95838799.m.youzan.com/v2/showcase/homepage?alias=sptfzUCg0j"
                                }), e)
                            }],
                            [{
                                order: 6,
                                title: this.$t("COMMON.LAYOUT.support"),
                                data: [{
                                    title: this.$t("COMMON.LAYOUT.helpCenter"),
                                    url: this.helpUrl
                                }, {
                                    title: this.$t("COMMON.LAYOUT.contactUs"),
                                    url: this.contactUsUrl
                                }]
                            }, {
                                order: 7,
                                title: this.$t("COMMON.LAYOUT.legal"),
                                data: [{
                                    title: this.$t("COMMON.LAYOUT.privacyPolicy"),
                                    url: this.isZH ? "/privacy-zh/index.html" : "/privacy-en/index.html"
                                }, {
                                    title: this.$t("COMMON.LAYOUT.terms"),
                                    url: this.isZH ? "/terms-zh/index.html" : "/terms-en/index.html"
                                }]
                            }]
                        ]
                    },
                    foldImg: function() {
                        return o(341)
                    },
                    unFoldImg: function() {
                        return o(342)
                    }
                }),
                watch: {
                    footerList: {
                        handler: function(e) {
                            var t = this;
                            e.flat(1 / 0).forEach((function(e) {
                                var o = {
                                    fold: !1,
                                    foldImg: t.foldImg,
                                    unFoldImg: t.unFoldImg
                                };
                                t.foldFooterList.push(o)
                            }))
                        },
                        immediate: !0
                    },
                    deviceSize: {
                        handler: function(e) {
                            "mobile" !== e ? this.foldFooterList.forEach((function(e) {
                                return e.fold = !0
                            })) : this.foldFooterList.forEach((function(e) {
                                return e.fold = !1
                            }))
                        },
                        immediate: !0
                    }
                },
                methods: {
                    onFold: function(e) {
                        "mobile" === this.deviceSize && (e.fold = !e.fold)
                    },
                    openFollow: function(e) {
                        e.isTelegram ? (this.show = !0, this.url = e.url) : window.open(e.url)
                    },
                    close: function() {
                        this.show = !1
                    },
                    footerUrl: function(e, t) {
                        if (t.preventDefault(), e.scrollTop) return document.body.scrollTop = document.documentElement.scrollTop = 0, !1;
                        e.curPage ? location.reload() : e.local ? this.localLink(e.url, t) : window.open(e.url)
                    },
                    subscribeEmail: function() {
                        var e = this;
                        if (!new RegExp(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/).test(this.email)) {
                            var t = "zh" === this.language ? "请输入正确的邮箱地址" : "Error Email!";
                            return this.$message.error(t), !1
                        }
                        var o = window.origin || window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
                        this.$axios.post("".concat(o, "/api/tokenPocket/subscribe"), {
                            email: this.email
                        }).then((function(t) {
                            if (0 === t.data.result) {
                                var o = "zh" === e.language ? "订阅成功" : "Subscribe sucess";
                                e.email = "", e.$message.success(o)
                            } else e.$message.error(t.data.message)
                        })).catch((function(t) {
                            e.$message.error(t)
                        }))
                    }
                }
            },
            k = (o(343), o(2)),
            component = Object(k.a)(h, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "FooterLayout"
                }, [n("footer", {
                    staticClass: "content d-flex jc-between"
                }, [n("div", {
                    staticClass: "follow-wrap"
                }, [n("img", {
                    staticClass: "logo",
                    attrs: {
                        src: o(198)
                    }
                }), e._v(" "), n("div", {
                    staticClass: "footer-follows"
                }, [e._l(e.followList, (function(t, o) {
                    return n("div", {
                        key: o,
                        staticClass: "footer-follow",
                        class: ["footer-follow-" + (o + 1)],
                        on: {
                            click: function(o) {
                                return e.openFollow(t)
                            }
                        }
                    })
                })), e._v(" "), n("a", {
                    staticClass: "footer-follow footer-follow-8",
                    attrs: {
                        href: "mailto:service@tokenpocket.pro",
                        target: "_blank"
                    }
                })], 2), e._v(" "), n("div", {
                    staticClass: "copyright"
                }, [e._v("© TP Global Ltd")])]), e._v(" "), n("div", {
                    staticClass: "footer-wrap flex-1 d-flex flex-wrap jc-between"
                }, e._l(e.footerList, (function(t, o) {
                    return n("div", {
                        key: o,
                        staticClass: "footer-list",
                        class: {
                            "lang-wrap": !1
                        }
                    }, e._l(t, (function(t, o) {
                        return n("div", {
                            key: o,
                            staticClass: "footer-item"
                        }, [n("div", {
                            staticClass: "title",
                            on: {
                                click: function(o) {
                                    return e.onFold(e.foldFooterList[t.order])
                                }
                            }
                        }, [n("span", [e._v(e._s(t.title))]), e._v(" "), e.foldFooterList[t.order] && e.foldFooterList[t.order].fold ? n("img", {
                            attrs: {
                                src: e.foldFooterList[o].unFoldImg,
                                alt: ""
                            }
                        }) : n("img", {
                            attrs: {
                                src: e.foldFooterList[t.order].foldImg,
                                alt: ""
                            }
                        })]), e._v(" "), n("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.foldFooterList[t.order].fold,
                                expression: "foldFooterList[child.order].fold"
                            }],
                            staticClass: "footer-link-wrap"
                        }, e._l(t.data, (function(data, t) {
                            return n("div", {
                                key: t,
                                staticClass: "footer-link",
                                class: {
                                    width0: "Transit Swap" === data.title && "zh" === e.$i18n.locale
                                }
                            }, ["Transit Swap" !== data.title || "zh" !== e.$i18n.locale ? n("a", {
                                staticClass: "pointer ft-14",
                                attrs: {
                                    rel: "nofollow",
                                    href: data.url,
                                    target: data.local ? "_self" : "_blank"
                                },
                                on: {
                                    click: function(t) {
                                        return e.footerUrl(data, t)
                                    }
                                }
                            }, [e._v(e._s(data.title))]) : e._e()])
                        })), 0)])
                    })), 0)
                })), 0)]), e._v(" "), e.show ? n("Modal", {
                    attrs: {
                        url: e.url
                    },
                    on: {
                        close: e.close
                    }
                }) : e._e()], 1)
            }), [], !1, null, "414b0314", null);
        t.a = component.exports
    }, function(e, t, o) {
        "use strict";
        var n = {
                name: "normalNav",
                mixins: [o(65).a]
            },
            r = (o(401), o(2)),
            component = Object(r.a)(n, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "normal-nav container",
                    staticStyle: {
                        margintop: "20px"
                    }
                }, [n("nav", {
                    staticClass: "navbar-wrap"
                }, [n("a", {
                    attrs: {
                        href: "",
                        target: "_blank"
                    }
                }), e._v(" "), n("div", {
                    staticClass: "navbar-logo"
                }, [n("img", {
                    staticClass: "logo pointer",
                    attrs: {
                        src: e.navLogo,
                        alt: e.$t("COMMON.LAYOUT.defiWallet")
                    },
                    on: {
                        click: function(t) {
                            return t.stopPropagation(), e.onLogo.apply(null, arguments)
                        },
                        contextmenu: function(t) {
                            return t.stopPropagation(), e.onLogo.apply(null, arguments)
                        }
                    }
                }), e._v(" "), e.isBrandKit ? n("div", {
                    staticClass: "brand-kit-wrap"
                }, e._l(e.brandKitList, (function(t, o) {
                    return n("div", {
                        key: o,
                        staticClass: "brand-kit-item",
                        on: {
                            click: function(n) {
                                return e.onBrand(t.url, o)
                            }
                        }
                    }, [n("span", {
                        class: [t.class]
                    }), e._v(" "), n("span", [e._v(e._s(t.title))])])
                })), 0) : e._e()]), e._v(" "), n("div", {
                    ref: "navMain",
                    staticClass: "navbar-tab-list"
                }, e._l(e.navList, (function(t, r) {
                    return n("a", {
                        key: r,
                        staticClass: "nav-title",
                        class: {
                            null: !t.title, "nav-language": t.lang, "nav-dark-mode": t.darkMode, active: r === e.navIndex && t.title && !t.lang && "true" === e.isOpen
                        },
                        attrs: {
                            href: t.local && t.url ? t.url : "javascript:void(0)"
                        },
                        on: {
                            click: function(o) {
                                return o.stopPropagation(), e.navGo(t, r, o)
                            },
                            mouseenter: function(o) {
                                return e.navEnter(t, r, o)
                            },
                            mouseleave: function(o) {
                                return e.navLeave(t, r, o)
                            }
                        }
                    }, [t.darkMode ? n("div", {
                        staticClass: "dark-mode-content",
                        on: {
                            click: e.changeMode,
                            contextmenu: e.changeMode
                        }
                    }, [e.isDarkMode ? n("img", {
                        attrs: {
                            src: o(344),
                            alt: ""
                        }
                    }) : n("img", {
                        attrs: {
                            src: o(345),
                            alt: ""
                        }
                    })]) : e._e(), e._v(" "), t.darkMode ? e._e() : n("div", {
                        staticClass: "pointer title language-content"
                    }, [r === e.navList.length - 1 ? n("img", {
                        staticClass: "language-img",
                        attrs: {
                            src: e.languageImg
                        }
                    }) : e._e(), e._v(" "), n("span", {
                        staticClass: "title-left",
                        class: {
                            "language-title": r === e.navList.length - 1
                        }
                    }, [e._v("\n            " + e._s(t.title) + "\n          ")]), e._v(" "), n("span", {
                        staticClass: "title-right text-right"
                    }, [t.children && !t.lang ? n("i", {
                        class: [t.lang ? "" : e.arrowClass, t.lang ? e.langClass : ""]
                    }) : e._e()]), e._v(" "), n("div", {
                        staticClass: "nav-title-border-bottom"
                    })]), e._v(" "), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.children && e.navIndex === r && t.lang,
                            expression: "item.children && navIndex === index && item.lang"
                        }],
                        staticClass: "nav-children-wrap"
                    }, e._l(t.children, (function(o, r) {
                        return n("a", {
                            key: r,
                            staticClass: "d-flex",
                            attrs: {
                                href: !o.lang && o.url ? o.url : "javascript:void(0)",
                                target: o.local || o.lang ? "_self" : "_blank"
                            },
                            on: {
                                click: function(t) {
                                    return t.stopPropagation(), e.navChildrenGo(o, t)
                                }
                            }
                        }, [n("div", {
                            staticClass: "nav-children"
                        }, [n("div", {
                            class: [o.class]
                        }), e._v(" "), n("div", {
                            staticClass: "detail",
                            class: {
                                lang: o.lang, leftDis: t.leftDis
                            }
                        }, [n("div", {
                            staticClass: "child-title"
                        }, [e._v(e._s(o.title))]), e._v(" "), o.desc ? n("div", {
                            staticClass: "child-title desc"
                        }, [e._v("\n                  " + e._s(o.desc) + "\n                ")]) : e._e()])])])
                    })), 0)])
                })), 0)]), e._v(" "), n("div", {
                    staticClass: "navbar-wrap-child-container",
                    class: {
                        chinese: "zh" === e.$i18n.locale && "/" === e.$route.path, show: e.isShow
                    }
                }, [n("div", {
                    staticClass: "navbar-wrap-child-content-wrap",
                    class: {
                        "ani-down": e.isShow
                    },
                    attrs: {
                        "data-isOpen": e.isOpen
                    },
                    on: {
                        mouseenter: e.onMouseenter,
                        mouseleave: e.onMouseleave
                    }
                }, [n("div", {
                    staticClass: "navbar-wrap-child-content"
                }, e._l(e.navList, (function(t, o) {
                    return n("div", {
                        key: o,
                        staticClass: "navbar-wrap-child-item",
                        class: {
                            show: e.navIndex === o && "true" === e.isOpen && t.title && !t.lang
                        }
                    }, [t.img ? n("div", {
                        staticClass: "nav-child-left"
                    }, [n("img", {
                        attrs: {
                            src: t.img,
                            alt: ""
                        }
                    })]) : e._e(), e._v(" "), n("div", {
                        staticClass: "nav-child-right",
                        class: {
                            "display-type-3": 3 === t.column
                        }
                    }, e._l(t.children, (function(t, o) {
                        return n("div", {
                            key: o,
                            staticClass: "nav-children-item",
                            on: {
                                click: function(o) {
                                    return e.navChildrenGo(t, o)
                                }
                            }
                        }, [n("div", {
                            staticClass: "nav-children-header"
                        }, [n("span", {
                            class: [t.class]
                        }), e._v(" "), n("span", {
                            staticClass: "nav-text"
                        }, [e._v(e._s(t.title))])]), e._v(" "), n("div", {
                            staticClass: "nav-children-desc"
                        }, [e._v(e._s(t.desc))])])
                    })), 0)])
                })), 0)])])])
            }), [], !1, null, "0d102f48", null);
        t.a = component.exports
    }, , , , , , , , , , , , , , , , function(e, t, o) {
        "use strict";
        var n = {
                name: "ContainerLayout"
            },
            r = (o(410), o(2)),
            component = Object(r.a)(n, (function() {
                var e = this,
                    t = e.$createElement;
                return (e._self._c || t)("div", {
                    staticClass: "container"
                }, [e._t("default")], 2)
            }), [], !1, null, "510569d4", null);
        t.a = component.exports
    }, , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, o) {
        "use strict";
        o(11), o(5), o(8), o(12), o(13);
        var n = o(3),
            r = o(4);

        function c(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }

        function l(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? c(Object(source), !0).forEach((function(t) {
                    Object(n.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        t.a = {
            computed: l(l({}, Object(r.b)(["isDarkMode"])), {}, {
                isTokenPocketPro: function() {
                    return "tokenpocket.pro" === window.location.hostname || "www.tokenpocket.pro" === window.location.hostname
                },
                isZH: function() {
                    return "zh" === this.$i18n.locale
                },
                theme: function() {
                    return this.isDarkMode ? "dark" : "light"
                },
                homeUrl: function() {
                    return this.isTokenPocketPro ? "https://tokenpocket.pro/" : "https://tpwallet.io/"
                },
                extensionUrl: function() {
                    return this.isTokenPocketPro ? this.isZH ? "https://extension.tokenpocket.pro/?locale=zh" : "https://extension.tokenpocket.pro/?locale=en" : this.isZH ? "https://extension.tpwallet.io/?locale=zh" : "https://extension.tpwallet.io/?locale=en"
                },
                dappUrl: function() {
                    return this.isTokenPocketPro ? "https://tokenpocket.pro/".concat(this.$i18n.locale, "/submit/dapp") : "https://tpwallet.io/".concat(this.$i18n.locale, "/submit/dapp")
                },
                tokenUrl: function() {
                    return this.isTokenPocketPro ? "https://tokenpocket.pro/".concat(this.$i18n.locale, "/submit/token") : "https://tpwallet.io/".concat(this.$i18n.locale, "/submit/token")
                },
                nftUrl: function() {
                    return this.isTokenPocketPro ? "https://tokenpocket.pro/".concat(this.$i18n.locale, "/submit/nft") : "https://tpwallet.io/".concat(this.$i18n.locale, "/submit/nft")
                },
                recruitingUrl: function() {
                    return this.isTokenPocketPro ? "https://tokenpocket.pro/".concat(this.$i18n.locale, "/recruiting") : "https://tpwallet.io/".concat(this.$i18n.locale, "/recruiting")
                },
                aboutUrl: function() {
                    return this.isTokenPocketPro ? "https://tokenpocket.pro/".concat(this.$i18n.locale, "/about") : "https://tpwallet.io/".concat(this.$i18n.locale, "/about")
                },
                developerUrl: function() {
                    return this.isZH ? "https://help.tokenpocket.pro/developer-cn/" : "https://help.tokenpocket.pro/developer-en/"
                },
                helpUrl: function() {
                    return this.isTokenPocketPro ? this.isZH ? "https://help.tokenpocket.pro/cn/" : "https://help.tokenpocket.pro/en/" : this.isZH ? "https://help.tpwallet.io/cn/" : "https://help.tpwallet.io/en/"
                },
                desktopUrl: function() {
                    return this.isTokenPocketPro ? "https://tokenpocket.pro/".concat(this.$i18n.locale, "/download/pc") : "https://tpwallet.io/".concat(this.$i18n.locale, "/download/pc")
                },
                approvalUrl: function() {
                    return this.isTokenPocketPro ? this.isZH ? "https://approval.tokenpocket.pro/?locale=zh" : "https://approval.tokenpocket.pro/?locale=en" : this.isZH ? "https://approval.tptool.pro/?locale=zh" : "https://approval.tptool.pro/?locale=en"
                },
                batchSenderUrl: function() {
                    return this.isTokenPocketPro ? this.isZH ? "https://batchsender.tokenpocket.pro/?locale=zh" : "https://batchsender.tokenpocket.pro/?locale=en" : this.isZH ? "https://batchsender.tptool.pro/?locale=zh" : "https://batchsender.tptool.pro/?locale=en"
                },
                tokenSecurityUrl: function() {
                    return this.isTokenPocketPro ? this.isZH ? "https://tokensecurity.tokenpocket.pro/?locale=zh" : "https://tokensecurity.tokenpocket.pro/?locale=en" : this.isZH ? "https://tokensecurity.tptool.pro/?locale=zh" : "https://tokensecurity.tptool.pro/?locale=en"
                },
                contactUsUrl: function() {
                    return this.isTokenPocketPro ? this.isZH ? "https://help.tokenpocket.pro/cn/contact-us/contact-methods" : "https://help.tokenpocket.pro/en/contact-us/contact-methods" : this.isZH ? "https://help.tpwallet.io/cn/contact-us/contact-methods" : "https://help.tpwallet.io/en/contact-us/contact-methods"
                },
                rexUrl: function() {
                    return this.isTokenPocketPro ? this.isZH ? "https://rex.tokenpocket.pro/?locale=zh" : "https://rex.tokenpocket.pro/?locale=en" : this.isZH ? "https://rex.tptool.pro/?locale=zh" : "https://rex.tptool.pro/?locale=en"
                },
                joinUsUrl: function() {
                    return this.isTokenPocketPro ? this.isZH ? "https://help.tpwallet.io/cn/contact-us/joinus" : "https://help.tpwallet.io/en/contact-us/Joinus" : this.isZH ? "https://help.tokenpocket.pro/cn/contact-us/joinus" : "https://help.tokenpocket.pro/en/contact-us/Joinus"
                },
                stakeVaultUrl: function() {
                    return this.isTokenPocketPro ? this.isZH ? "https://dapp.tokenpocket.pro/StakeVault/index.html?locale=zh#/" : "https://dapp.tokenpocket.pro/StakeVault/index.html?locale=en#/" : this.isZH ? "https://dapp.tptool.pro/StakeVault/index.html?locale=zh#/" : "https://dapp.tptool.pro/StakeVault/index.html?locale=en#/"
                },
                verifyVersionUrl: function() {
                    return this.isTokenPocketPro ? "https://verify.tokenpocket.pro/?locale=".concat(this.$i18n.locale, "&theme=").concat(this.theme, "#/") : "https://verify.tpwallet.io/?locale=".concat(this.$i18n.locale, "&theme=").concat(this.theme, "#/")
                },
                fiveDegreesUrl: function() {
                    return this.isZH ? "https://www.5degrees.io/?locale=zh#/" : "https://www.5degrees.io/?locale=en#/"
                },
                keypalUrl: function() {
                    return this.isZH ? "https://www.keypal.pro/?locale=zh#/" : "https://www.keypal.pro/?locale=en#/"
                },
                transitFinanceUrl: function() {
                    return "https://transit.finance/?".concat(this.$i18n.locale, "&theme=").concat(this.theme, "#/")
                },
                transitSwapUrl: function() {
                    return "https://swap.transit.finance/?from=tp&locale=".concat(this.$i18n.locale, "&theme=").concat(this.theme, "#/")
                },
                transitSwapMarketUrl: function() {
                    return "https://swap.transit.finance/?from=tp&locale=".concat(this.$i18n.locale, "&theme=").concat(this.theme, "#/market")
                },
                keyUrl: function() {
                    return this.isTokenPocketPro ? "https://key.tokenpocket.pro/?locale=".concat(this.$i18n.locale, "#/") : "https://key.tptool.pro/?locale=".concat(this.$i18n.locale, "#/")
                },
                tokenProfileUrl: function() {
                    return this.isTokenPocketPro ? "https://profile.tokenpocket.pro/?locale=".concat(this.$i18n.locale, "#/") : "https://profile.tptool.pro/?locale=".concat(this.$i18n.locale, "#/")
                },
                inscriptionUrl: function() {
                    return this.isTokenPocketPro ? "https://tp-lab.tokenpocket.pro/insc/?locale=".concat(this.$i18n.locale, "#/") : "https://tp-lab.tptool.pro/insc/?locale=".concat(this.$i18n.locale, "#/")
                },
                nostrUrl: function() {
                    return this.isTokenPocketPro ? "https://tp-lab.tokenpocket.pro/nostr/?locale=".concat(this.$i18n.locale, "#/") : "https://tp-lab.tptool.pro/nostr/?locale=".concat(this.$i18n.locale, "#/")
                },
                transitBuyUrl: function() {
                    return "https://buy.transit.finance/?locale=".concat(this.$i18n.locale, "&theme=").concat(this.theme)
                },
                tokenClaimUrl: function() {
                    return "https://claim.tokenpocket.pro/?locale=".concat(this.$i18n.locale, "#/")
                },
                TPCardUrl: function() {
                    return this.isTokenPocketPro ? "https://card.tokenpocket.pro/?locale=".concat(this.$i18n.locale, "&theme=").concat(this.theme, "#/") : "https://card.tpwallet.io/?locale=".concat(this.$i18n.locale, "&theme=").concat(this.theme, "#/")
                }
            })
        }
    }, , , , function(e, t, o) {
        "use strict";
        var n = {
                name: "miniNav",
                mixins: [o(65).a]
            },
            r = (o(402), o(2)),
            component = Object(r.a)(n, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "mini-nav"
                }, [o("nav", {
                    staticClass: "mini-navbar-wrap",
                    class: {
                        isFixed: e.menuState
                    }
                }, [o("div", {
                    staticClass: "mini-navbar-header",
                    class: {
                        "route-dappstore": e.$route.path === e.$i18n.path("/dappstore") || e.$route.path === e.$i18n.path("/dappstore/detail")
                    }
                }, [o("div", [o("img", {
                    staticClass: "mini-navbar-logo pointer",
                    attrs: {
                        src: e.navLogo,
                        alt: e.$t("COMMON.LAYOUT.defiWallet")
                    },
                    on: {
                        click: function(t) {
                            return e.indexGo("/")
                        }
                    }
                })]), e._v(" "), o("div", {
                    staticClass: "menu-status text-right"
                }, [e.menuState ? o("img", {
                    attrs: {
                        src: e.closeImg,
                        alt: ""
                    },
                    on: {
                        click: e.changeMenuState
                    }
                }) : o("img", {
                    staticClass: "menu-img",
                    attrs: {
                        src: e.menuImg,
                        alt: ""
                    },
                    on: {
                        click: e.changeMenuState
                    }
                })])]), e._v(" "), e.menuState ? o("div", {
                    staticClass: "mini-menu hidden-scrollbar"
                }, e._l(e.navList, (function(t, n) {
                    return o("a", {
                        key: n,
                        staticClass: "ft-18",
                        staticStyle: {
                            display: "block"
                        },
                        attrs: {
                            href: t.local && t.url ? t.url : "javascript:void(0)"
                        }
                    }, [t.title ? o("div", {
                        staticClass: "mini-menu-title"
                    }, [o("div", {
                        staticClass: "menu-item",
                        class: {
                            active: t.children && e.navIndex === n
                        },
                        on: {
                            click: function(o) {
                                return o.stopPropagation(), e.navGo(t, n, o)
                            }
                        }
                    }, [o("div", {
                        staticClass: "menu-item-title"
                    }, [t.navMobileIcon ? o("img", {
                        attrs: {
                            src: t.navMobileIcon,
                            alt: ""
                        }
                    }) : e._e(), e._v(" "), o("span", {
                        attrs: {
                            span: ""
                        }
                    }, [e._v(e._s(t.title))])]), e._v(" "), t.children ? o("div", {
                        staticClass: "text-right"
                    }, [o("i", {
                        class: [e.navIndex !== n ? "icon-right" : "icon-right icon-dropdown"],
                        staticStyle: {
                            transition: "all .3s"
                        }
                    })]) : e._e(), e._v(" "), t.darkMode ? o("div", {
                        staticClass: "dark-mode-switch"
                    }, [o("Switcher", {
                        attrs: {
                            value: e.isDarkMode
                        },
                        on: {
                            switch: e.changeMode
                        }
                    })], 1) : e._e()]), e._v(" "), t.children && e.navIndex === n ? o("div", {
                        staticClass: "mini-menu-children"
                    }, e._l(t.children, (function(t, n) {
                        return o("a", {
                            key: n,
                            staticClass: "mini-menu-children-title",
                            attrs: {
                                href: !t.lang && t.url ? t.url : "javascript:void(0)",
                                target: t.local || t.lang ? "_self" : "_blank"
                            },
                            on: {
                                click: function(o) {
                                    return o.stopPropagation(), e.navChildrenGo(t, o)
                                }
                            }
                        }, [e._v(e._s(t.title))])
                    })), 0) : e._e()]) : e._e()])
                })), 0) : e._e()])])
            }), [], !1, null, "4db8d523", null);
        t.a = component.exports
    }, function(e, t, o) {
        "use strict";
        o(11), o(5), o(8), o(12), o(13);
        var n = o(3),
            r = o(4);

        function c(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }
        var l = {
                name: "warn",
                computed: function(e) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? c(Object(source), !0).forEach((function(t) {
                            Object(n.a)(e, t, source[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                        }))
                    }
                    return e
                }({}, Object(r.b)(["language"]))
            },
            d = l,
            m = (o(404), o(2)),
            component = Object(m.a)(d, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "warn-container"
                }, [n("img", {
                    attrs: {
                        src: o(403)
                    }
                }), e._v(" "), n("span", {
                    domProps: {
                        innerHTML: e._s(e.$t("COMMON.LAYOUT.warn"))
                    }
                }), e._v(" "), n("a", {
                    staticClass: "learn",
                    attrs: {
                        href: e.$t("COMMON.LAYOUT.learnUrl"),
                        target: "_blank"
                    }
                }, [e._v(e._s(e.$t("COMMON.LAYOUT.goLearn")))])])
            }), [], !1, null, null, null);
        t.a = component.exports
    }, function(e, t, o) {
        "use strict";
        o(123), o(115), o(45), o(8), o(18), o(43), o(44), o(5), o(55), o(56), o(57);
        var n = o(1);

        function r(e, t) {
            var o = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!o) {
                if (Array.isArray(e) || (o = function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return c(e, t);
                        var o = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === o && e.constructor && (o = e.constructor.name);
                        if ("Map" === o || "Set" === o) return Array.from(e);
                        if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return c(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                    o && (e = o);
                    var i = 0,
                        n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, l = !0,
                d = !1;
            return {
                s: function() {
                    o = o.call(e)
                },
                n: function() {
                    var e = o.next();
                    return l = e.done, e
                },
                e: function(e) {
                    d = !0, r = e
                },
                f: function() {
                    try {
                        l || null == o.return || o.return()
                    } finally {
                        if (d) throw r
                    }
                }
            }
        }

        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, o = new Array(t); i < t; i++) o[i] = e[i];
            return o
        }
        var l = window.requestIdleCallback || function(e) {
                var t = Date.now();
                return setTimeout((function() {
                    e({
                        didTimeout: !1,
                        timeRemaining: function() {
                            return Math.max(0, 50 - (Date.now() - t))
                        }
                    })
                }), 1)
            },
            d = window.cancelIdleCallback || function(e) {
                clearTimeout(e)
            },
            m = window.IntersectionObserver && new window.IntersectionObserver((function(e) {
                e.forEach((function(e) {
                    var t = e.intersectionRatio,
                        link = e.target;
                    t <= 0 || !link.__prefetch || link.__prefetch()
                }))
            }));
        t.a = {
            name: "NuxtLink",
            extends: n.default.component("RouterLink"),
            props: {
                prefetch: {
                    type: Boolean,
                    default: !0
                },
                noPrefetch: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted: function() {
                this.prefetch && !this.noPrefetch && (this.handleId = l(this.observe, {
                    timeout: 2e3
                }))
            },
            beforeDestroy: function() {
                d(this.handleId), this.__observed && (m.unobserve(this.$el), delete this.$el.__prefetch)
            },
            methods: {
                observe: function() {
                    m && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), m.observe(this.$el), this.__observed = !0)
                },
                shouldPrefetch: function() {
                    return this.getPrefetchComponents().length > 0
                },
                canPrefetch: function() {
                    var e = navigator.connection;
                    return !(this.$nuxt.isOffline || e && ((e.effectiveType || "").includes("2g") || e.saveData))
                },
                getPrefetchComponents: function() {
                    return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(e) {
                        return e.components.default
                    })).filter((function(e) {
                        return "function" == typeof e && !e.options && !e.__prefetched
                    }))
                },
                prefetchLink: function() {
                    if (this.canPrefetch()) {
                        m.unobserve(this.$el);
                        var e, t = r(this.getPrefetchComponents());
                        try {
                            for (t.s(); !(e = t.n()).done;) {
                                var o = e.value,
                                    n = o();
                                n instanceof Promise && n.catch((function() {})), o.__prefetched = !0
                            }
                        } catch (e) {
                            t.e(e)
                        } finally {
                            t.f()
                        }
                    }
                }
            }
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, o) {
        "use strict";
        var n = {};
        n.context = o(273), n.context = n.context.default || n.context, n.redirect = o(275), n.redirect = n.redirect.default || n.redirect, t.a = n
    }, , , , , , function(e, t, o) {
        "use strict";
        o(11), o(5), o(8), o(12), o(13);
        var n = o(3),
            r = o(4),
            c = o(30);

        function l(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }

        function d(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? l(Object(source), !0).forEach((function(t) {
                    Object(n.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        var m = {
            data: function() {
                return {
                    form: {
                        start: 0,
                        count: 20,
                        status: 0,
                        lang: ""
                    },
                    newsHasMore: !0,
                    newsDetailData: {},
                    activityList: [],
                    adList: []
                }
            },
            computed: d(d({}, Object(r.b)(["language"])), {}, {
                lang: function() {
                    return "zh" === this.language ? "zh-Hans" : "en"
                },
                isEn: function() {
                    return "en" === this.language
                },
                telegramLink: function() {
                    return "zh" === this.language ? "https://t.me/bptokenpocket" : "https://t.me/tokenpocketadmin"
                },
                telegramGM: function() {
                    return "zh" === this.language ? "Kevin | TokenPocket" : "Marcus | TokenPocket"
                },
                evmList: function() {
                    return [{
                        value: 1,
                        title: this.$t("COMMON.platformInfo.eth"),
                        type: "platform_eth"
                    }, {
                        value: 12,
                        title: this.$t("COMMON.platformInfo.bsc"),
                        type: "platform_bsc"
                    }, {
                        value: 15,
                        title: this.$t("COMMON.platformInfo.heco"),
                        type: "platform_heco"
                    }, {
                        value: 18,
                        title: this.$t("COMMON.platformInfo.matic"),
                        type: "platform_matic"
                    }, {
                        value: 25,
                        title: this.$t("COMMON.platformInfo.ftm"),
                        type: "platform_ftm"
                    }]
                },
                createAccountUrl: function() {
                    return "https://account.tokenpocket.pro"
                }
            }),
            watch: {
                language: function() {
                    this.checkLanguage()
                }
            },
            methods: {
                copy: function(e) {
                    var t = this;
                    this.$copyText(e).then((function(e) {}), (function(e) {
                        t.$message.error("复制失败")
                    }))
                },
                checkLanguage: function() {
                    "zh" === this.language ? this.form.lang = "zh-Hans" : this.form.lang = "en"
                },
                getNews: function() {
                    var e = this;
                    this.form.start += 20, this.$axios.get(c.g, {
                        params: this.form
                    }).then((function(t) {
                        0 === t.data.result && (e.newsHasMore = null !== t.data.data, e.$store.dispatch("GET_NEWS_LIST", {
                            list: t.data.data,
                            reset: !1
                        }))
                    }))
                },
                getActivity: function() {
                    var e = this;
                    this.$axios.get(c.a, {
                        params: {
                            start: 0,
                            count: 5,
                            lang: this.form.lang
                        }
                    }).then((function(t) {
                        0 === t.data.result && (e.activityList = t.data.data)
                    }))
                },
                getAdList: function() {
                    var e = this;
                    this.$axios.get(c.b, {
                        params: {
                            start: 0,
                            count: 5,
                            lang: this.form.lang
                        }
                    }).then((function(t) {
                        0 === t.data.result && (null !== t.data.data ? e.adList = t.data.data : e.adList = [])
                    }))
                },
                localLink: function(e, t) {
                    t.preventDefault(), this.$router.push(e)
                }
            },
            created: function() {
                this.checkLanguage()
            }
        };
        t.a = m
    }, , function(e, t, o) {
        "use strict";
        var n = o(83),
            r = o(64),
            c = o(66),
            l = {
                name: "Layouts",
                components: {
                    ContainerLayout: n.a,
                    HeaderLayout: r.a,
                    FooterLayout: c.a
                },
                data: function() {
                    return {
                        isFooter: !0
                    }
                },
                mounted: function() {
                    var e = this;
                    this.$mitt.on("show-footer", (function(t) {
                        e.isFooter = t.show
                    }))
                }
            },
            d = (o(411), o(2)),
            component = Object(d.a)(l, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "layout-wrap"
                }, [o("header-layout", {
                    attrs: {
                        "nav-title-color": "#000",
                        "arrow-class": "icon-down-333",
                        "lang-class": "icon-earth-mini"
                    }
                }), e._v(" "), e._t("default"), e._v(" "), e.$route.path !== e.$i18n.path("/dappstore/detail") && e.isFooter ? o("footer-layout") : e._e()], 2)
            }), [], !1, null, "7d354392", null);
        t.a = component.exports
    }, , function(e, t, o) {
        "use strict";
        o(189);
        t.a = {
            data: function() {
                return {
                    isMobile: !1
                }
            },
            mounted: function() {
                navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|TokenPocket|WebOS|Symbian|Windows Phone)/i) ? this.isMobile = !0 : this.isMobile = !1
            }
        }
    }, function(e, t, o) {
        "use strict";
        o(11), o(5), o(8), o(12), o(13);
        var n = o(3),
            r = o(4),
            c = o(166),
            l = {
                props: {
                    donateItem: {
                        type: Object
                    }
                },
                methods: {
                    onCopy: function(e) {
                        var t = this;
                        this.$copyText(e).then((function(o) {
                            t.$mitt.emit("showToast", e)
                        }), (function(e) {
                            t.$message.error("Fail")
                        }))
                    }
                }
            },
            d = (o(313), o(2)),
            m = Object(d.a)(l, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "donate-item"
                }, [o("div", {
                    staticClass: "donate-left",
                    class: {
                        dot: e.donateItem.dot
                    }
                }, [e._v(e._s(e.donateItem.name))]), e._v(" "), o("div", {
                    staticClass: "donate-right",
                    class: {
                        "type-2": 2 === e.donateItem.type
                    }
                }, [e.donateItem.isShort && e.donateItem.text ? o("span", [e._v("\n      " + e._s(e.donateItem.text.slice(0, 8) + "..." + e.donateItem.text.slice(-8)) + "\n    ")]) : o("span", [e._v(e._s(e.donateItem.text))]), e._v(" "), o("img", {
                    attrs: {
                        src: e.donateItem.icon,
                        alt: ""
                    },
                    on: {
                        click: function(t) {
                            return e.onCopy(e.donateItem.text)
                        }
                    }
                })])])
            }), [], !1, null, "dd2c86ca", null).exports,
            h = o(54);

        function k(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }

        function T(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? k(Object(source), !0).forEach((function(t) {
                    Object(n.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : k(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        var f = {
                props: {
                    donateType: {
                        type: String,
                        default: "DApp"
                    },
                    show: {
                        type: Boolean
                    }
                },
                components: {
                    RequirementItem: c.a,
                    DonateItem: m
                },
                mixins: [h.a],
                data: function() {
                    return {
                        payment: 0,
                        explorer_url: "",
                        isTokenInfo: !1
                    }
                },
                computed: T(T({}, Object(r.b)(["deviceSize"])), {}, {
                    donateTutorialList: function() {
                        return [{
                            html: !0,
                            text: this.$t("COMMON.donate.tutorial_1")
                        }, {
                            html: !0,
                            text: "mobile" === this.deviceSize ? this.$t("COMMON.donate.tutorial_2_mobile") : this.$t("COMMON.donate.tutorial_2")
                        }, {
                            html: !0,
                            text: this.$t("COMMON.donate.tutorial_3")
                        }, {
                            html: !0,
                            text: this.$t("COMMON.donate.tutorial_4")
                        }]
                    },
                    tokenInfoList: function() {
                        return [{
                            name: this.$t("TOKEN.name"),
                            text: "TPT",
                            dot: "mobile" === this.deviceSize,
                            icon: o(314)
                        }, {
                            type: 2,
                            isShort: !0,
                            name: this.$t("COMMON.donate.tokenContract"),
                            dot: "mobile" === this.deviceSize,
                            text: "0xeca41281c24451168a37211f0bc2b8645af45092",
                            icon: o(195)("./copy".concat(this.darkModeImg, ".png"))
                        }]
                    },
                    donateList: function() {
                        return [{
                            name: this.$t("COMMON.donate.blockchain"),
                            text: "Binance Smart Chain (BSC)",
                            icon: "https://hk.tpstatic.net/token/tokenpocket-1654745966943.png"
                        }, {
                            type: 2,
                            isShort: "mobile" === this.deviceSize,
                            name: this.$t("COMMON.donate.receivingAddress"),
                            text: "0x7837AE9E4FD6E967F1B8C8824D6288ECE6e730F9",
                            icon: o(195)("./copy".concat(this.darkModeImg, ".png"))
                        }]
                    }
                }),
                mounted: function() {
                    var e = this;
                    document.body.addEventListener("click", (function() {
                        e.showTokenInfo(!1)
                    }))
                },
                watch: {
                    show: {
                        handler: function(e) {
                            if (e) {
                                var t = Math.floor(9e3 * Math.random()) + 1e3;
                                t = "0." + t, "DApp" === this.donateType ? this.payment = "200,00" + t : this.payment = "100,00" + t
                            }
                        },
                        immediate: !0
                    },
                    deviceSize: {
                        handler: function(e) {
                            "mobile" === e && (this.isTokenInfo = !0)
                        },
                        immediate: !0
                    }
                },
                methods: {
                    showTokenInfo: function(e) {
                        "mobile" !== this.deviceSize && (this.isTokenInfo = e)
                    },
                    submit: function() {
                        this.$emit("submitToken", {
                            payment: this.payment,
                            explorer_url: this.explorer_url
                        })
                    }
                }
            },
            _ = (o(317), Object(d.a)(f, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "donate-box"
                }, [n("div", {
                    staticClass: "donate-desc",
                    domProps: {
                        innerHTML: e._s(e.$t("COMMON.donate.desc"))
                    }
                }), e._v(" "), n("div", {
                    staticClass: "title donate-tutorial"
                }, [e._v(e._s(e.$t("COMMON.donate.tutorial")) + ":")]), e._v(" "), n("div", {
                    staticClass: "donate-tutorial-content"
                }, [n("div", {
                    staticClass: "title"
                }, [e._v(e._s(e.$t("COMMON.donate.tutorial")))]), e._v(" "), e._l(e.donateTutorialList, (function(t, o) {
                    return n("RequirementItem", {
                        key: o,
                        attrs: {
                            requirementItem: t
                        },
                        on: {
                            showTokenInfo: e.showTokenInfo
                        }
                    })
                })), e._v(" "), n("div", {
                    staticClass: "line"
                }), e._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isTokenInfo,
                        expression: "isTokenInfo"
                    }],
                    staticClass: "donate-token-info"
                }, [n("div", {
                    staticClass: "title"
                }, [e._v(e._s(e.$t("COMMON.donate.tokenInfo")))]), e._v(" "), e._l(e.tokenInfoList, (function(e, t) {
                    return n("DonateItem", {
                        key: t,
                        attrs: {
                            donateItem: e
                        }
                    })
                }))], 2)], 2), e._v(" "), n("div", {
                    staticClass: "donate-qr-code"
                }, [n("div", {
                    staticClass: "donate-amount"
                }, [n("span", [e._v(e._s(e.$t("COMMON.donate.amount")))]), e._v(" "), n("span", [e._v(e._s(e.payment) + " TPT")])]), e._v(" "), n("img", {
                    staticClass: "qr-code-img",
                    attrs: {
                        src: o(309),
                        alt: ""
                    }
                }), e._v(" "), n("div", {
                    staticClass: "donate-qr-code-list"
                }, e._l(e.donateList, (function(e, t) {
                    return n("DonateItem", {
                        key: t,
                        attrs: {
                            donateItem: e
                        }
                    })
                })), 1)]), e._v(" "), n("div", {
                    staticClass: "title donate-hash"
                }, [e._v(e._s(e.$t("COMMON.donate.hash")))]), e._v(" "), n("div", {
                    staticClass: "donate-hash-link"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.explorer_url,
                        expression: "explorer_url"
                    }],
                    attrs: {
                        type: "text",
                        placeholder: e.$t("COMMON.eg") + "https://bscscan.com/tx/0x4bec9be05cdf925ad9"
                    },
                    domProps: {
                        value: e.explorer_url
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.explorer_url = t.target.value)
                        }
                    }
                })]), e._v(" "), n("div", {
                    staticClass: "button",
                    on: {
                        click: e.submit
                    }
                }, [e._v(e._s(e.$t("COMMON.submit")))])])
            }), [], !1, null, "30e67d7e", null));
        t.a = _.exports
    }, function(e, t, o) {
        "use strict";
        o(310);
        var n = {
                props: {
                    requirementItem: {
                        type: Object
                    }
                },
                methods: {
                    info: function(e) {
                        if (e.target && e.target.dataset && "info" === e.target.dataset.info ? this.$emit("showTokenInfo", !0) : this.$emit("showTokenInfo", !1), e.target && e.target.dataset && "link" === e.target.dataset.link) {
                            var t = "en";
                            "zh" === this.$i18n.locale && (t = "zh"), window.open("https://swap.transit.finance/?locale=".concat(t, "&inputChain=BSC&inputSymbol=BNB&outputChain=BSC&outputSymbol=TPT&outputCurrency=0xeca41281c24451168a37211f0bc2b8645af45092#/"))
                        }
                    }
                }
            },
            r = (o(312), o(2)),
            component = Object(r.a)(n, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "requirement-item",
                    on: {
                        click: function(t) {
                            return t.stopPropagation(), e.info.apply(null, arguments)
                        }
                    }
                }, [e.requirementItem.html ? o("span", {
                    domProps: {
                        innerHTML: e._s(e.requirementItem.text)
                    }
                }) : o("span", [e._v(e._s(e.requirementItem.text))])])
            }), [], !1, null, "67ff4ab2", null);
        t.a = component.exports
    }, , , , , , , , , , , , , , , , , , , , , , , , function(e, t, o) {}, function(e, t, o) {}, , function(e, t, o) {}, function(e, t, o) {}, function(e, t, o) {
        var map = {
            "./copy-dark.png": 315,
            "./copy.png": 316
        };

        function n(e) {
            var t = r(e);
            return o(t)
        }

        function r(e) {
            if (!o.o(map, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return map[e]
        }
        n.keys = function() {
            return Object.keys(map)
        }, n.resolve = r, e.exports = n, n.id = 195
    }, function(e, t, o) {}, function(e, t, o) {}, function(e, t, o) {
        e.exports = o.p + "img/logo-dark.7bbc5e9.png"
    }, , , , , , , function(e, t, o) {}, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        o(35);
        var n = {
            date: function() {
                return {}
            },
            methods: {
                indexGo: function(e) {
                    window.scrollTo({
                        top: 0
                    }), this.$router.replace("/")
                },
                linkGo: function(e) {
                    this.$router.push(this.$i18n.path(e))
                }
            }
        };
        t.a = n
    }, function(e, t, o) {}, function(e, t, o) {}, function(e, t, o) {}, function(e, t, o) {}, function(e, t, o) {}, function(e, t, o) {}, function(e, t, o) {}, function(e, t, o) {}, , , , , , , , , , , , , , , , , , , function(e, t, o) {
        "use strict";
        var n = o(54),
            r = {
                props: {
                    url: {
                        type: String
                    }
                },
                mixins: [n.a],
                computed: {
                    closeImg: function() {
                        return o(246)("./close-modal".concat(this.darkModeImg, ".png"))
                    }
                }
            },
            c = (o(340), o(2)),
            component = Object(c.a)(r, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "modal d-flex flex-column ai-center jc-center"
                }, [n("div", {
                    staticClass: "modal-content d-flex ai-center jc-center"
                }, [n("div", {
                    staticClass: "content"
                }, [n("img", {
                    attrs: {
                        src: o(338)
                    }
                }), e._v(" "), n("div", {
                    staticClass: "desc1"
                }, [e._v(e._s(e.$t("HOME.FOLLOW.desc1")))]), e._v(" "), n("div", {
                    staticClass: "desc2"
                }, [e._v(e._s(e.$t("HOME.FOLLOW.desc2")))]), e._v(" "), n("a", {
                    staticClass: "button",
                    attrs: {
                        href: e.url,
                        target: "_blank"
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("close")
                        }
                    }
                }, [e._v("\n        " + e._s(e.$t("HOME.FOLLOW.desc3")) + "\n      ")])]), e._v(" "), n("img", {
                    staticClass: "close",
                    attrs: {
                        src: e.closeImg
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("close")
                        }
                    }
                })])])
            }), [], !1, null, "39aa751a", null);
        t.a = component.exports
    }, , , , , , , , , , function(e, t, o) {
        "use strict";
        var n = o(10),
            r = (o(69), o(18), o(1)),
            c = o(0),
            l = window.__NUXT__;

        function d() {
            if (!this._hydrated) return this.$fetch()
        }

        function m() {
            if ((e = this).$vnode && e.$vnode.elm && e.$vnode.elm.dataset && e.$vnode.elm.dataset.fetchKey) {
                var e;
                this._hydrated = !0, this._fetchKey = this.$vnode.elm.dataset.fetchKey;
                var data = l.fetch[this._fetchKey];
                if (data && data._error) this.$fetchState.error = data._error;
                else
                    for (var t in data) r.default.set(this.$data, t, data[t])
            }
        }

        function h() {
            var e = this;
            return this._fetchPromise || (this._fetchPromise = k.call(this).then((function() {
                delete e._fetchPromise
            }))), this._fetchPromise
        }

        function k() {
            return T.apply(this, arguments)
        }

        function T() {
            return (T = Object(n.a)(regeneratorRuntime.mark((function e() {
                var t, o, n, r = this;
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1, t = null, o = Date.now(), e.prev = 6, e.next = 9, this.$options.fetch.call(this);
                        case 9:
                            e.next = 15;
                            break;
                        case 11:
                            e.prev = 11, e.t0 = e.catch(6), t = Object(c.p)(e.t0);
                        case 15:
                            if (!((n = this._fetchDelay - (Date.now() - o)) > 0)) {
                                e.next = 19;
                                break
                            }
                            return e.next = 19, new Promise((function(e) {
                                return setTimeout(e, n)
                            }));
                        case 19:
                            this.$fetchState.error = t, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((function() {
                                return r.$nuxt.nbFetching--
                            }));
                        case 23:
                        case "end":
                            return e.stop()
                    }
                }), e, this, [
                    [6, 11]
                ])
            })))).apply(this, arguments)
        }
        t.a = {
            beforeCreate: function() {
                Object(c.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, r.default.util.defineReactive(this, "$fetchState", {
                    pending: !1,
                    error: null,
                    timestamp: Date.now()
                }), this.$fetch = h.bind(this), Object(c.a)(this, "created", m), Object(c.a)(this, "beforeMount", d))
            }
        }
    }, , function(e, t, o) {
        var map = {
            "./close-modal-dark.png": 339,
            "./close-modal.png": 248
        };

        function n(e) {
            var t = r(e);
            return o(t)
        }

        function r(e) {
            if (!o.o(map, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return map[e]
        }
        n.keys = function() {
            return Object.keys(map)
        }, n.resolve = r, e.exports = n, n.id = 246
    }, , function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAM1BMVEUAAACfoKWen6SdnaOfoaeenqWeoaSdoKaeoqWZoKGeoKWfoaWgoKSdoKWeoKafn5+eoKWEa/YkAAAAEHRSTlMA9+gnf0dUU0cf3m47p3sI6HHvBAAAAKxJREFUSMft0bsSgkAQBdFdZVXAx/z/1+qWQQdQTHUEAR3PSeaWs6M2qhOa6yNzQ32uuIhMDhFIXHSZuBV5D+SGi8u1SIlzEuckzkmckzgncU7inMQ5iXMS5yTOSZySDedk4JTEKYmTvf5wNoYd+oe085LdpWT3m5TsjnQOaR3SOCdxTuKcxDmJcxLnJM5JnJM4J984J1vFbclpLEvZXSJx1KafS2R3yz7lbOe+Ccsae4pM6ZYAAAAASUVORK5CYII="
    }, function(e, t, o) {
        e.exports = o(250)
    }, function(e, t, o) {
        "use strict";
        o.r(t),
            function(e) {
                o(43), o(5), o(55);
                var t = o(42),
                    n = o(10),
                    r = (o(178), o(260), o(268), o(270), o(69), o(44), o(8), o(11), o(123), o(115), o(45), o(56), o(18), o(57), o(1)),
                    c = o(235),
                    l = o(154),
                    d = o(0),
                    m = o(34),
                    h = o(244),
                    k = o(114);

                function T(e, t) {
                    var o = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!o) {
                        if (Array.isArray(e) || (o = function(e, t) {
                                if (!e) return;
                                if ("string" == typeof e) return f(e, t);
                                var o = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === o && e.constructor && (o = e.constructor.name);
                                if ("Map" === o || "Set" === o) return Array.from(e);
                                if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return f(e, t)
                            }(e)) || t && e && "number" == typeof e.length) {
                            o && (e = o);
                            var i = 0,
                                n = function() {};
                            return {
                                s: n,
                                n: function() {
                                    return i >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[i++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: n
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var r, c = !0,
                        l = !1;
                    return {
                        s: function() {
                            o = o.call(e)
                        },
                        n: function() {
                            var e = o.next();
                            return c = e.done, e
                        },
                        e: function(e) {
                            l = !0, r = e
                        },
                        f: function() {
                            try {
                                c || null == o.return || o.return()
                            } finally {
                                if (l) throw r
                            }
                        }
                    }
                }

                function f(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, o = new Array(t); i < t; i++) o[i] = e[i];
                    return o
                }
                r.default.__nuxt__fetch__mixin__ || (r.default.mixin(h.a), r.default.__nuxt__fetch__mixin__ = !0), r.default.component(k.a.name, k.a), r.default.component("NLink", k.a), e.fetch || (e.fetch = c.a);
                var _, A, y = [],
                    v = window.__NUXT__ || {},
                    O = v.config || {};
                O._app && (o.p = Object(d.v)(O._app.cdnURL, O._app.assetsPath)), Object.assign(r.default.config, {
                    silent: !0,
                    performance: !1
                });
                var P = r.default.config.errorHandler || console.error;

                function D(e, t, o) {
                    for (var n = function(component) {
                            var e = function(component, e) {
                                if (!component || !component.options || !component.options[e]) return {};
                                var option = component.options[e];
                                if ("function" == typeof option) {
                                    for (var t = arguments.length, o = new Array(t > 2 ? t - 2 : 0), n = 2; n < t; n++) o[n - 2] = arguments[n];
                                    return option.apply(void 0, o)
                                }
                                return option
                            }(component, "transition", t, o) || {};
                            return "string" == typeof e ? {
                                name: e
                            } : e
                        }, r = o ? Object(d.g)(o) : [], c = Math.max(e.length, r.length), l = [], m = function(i) {
                            var t = Object.assign({}, n(e[i])),
                                o = Object.assign({}, n(r[i]));
                            Object.keys(t).filter((function(e) {
                                return void 0 !== t[e] && !e.toLowerCase().includes("leave")
                            })).forEach((function(e) {
                                o[e] = t[e]
                            })), l.push(o)
                        }, i = 0; i < c; i++) m(i);
                    return l
                }

                function C(e, t, o) {
                    return w.apply(this, arguments)
                }

                function w() {
                    return (w = Object(n.a)(regeneratorRuntime.mark((function e(t, o, n) {
                        var r, c, l, m, h = this;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this._routeChanged = Boolean(_.nuxt.err) || o.name !== t.name, this._paramChanged = !this._routeChanged && o.path !== t.path, this._queryChanged = !this._paramChanged && o.fullPath !== t.fullPath, this._diffQuery = this._queryChanged ? Object(d.i)(t.query, o.query) : [], (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(), e.prev = 5, !this._queryChanged) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.next = 9, Object(d.r)(t, (function(e, t) {
                                        return {
                                            Component: e,
                                            instance: t
                                        }
                                    }));
                                case 9:
                                    r = e.sent, r.some((function(e) {
                                        var n = e.Component,
                                            r = e.instance,
                                            c = n.options.watchQuery;
                                        return !0 === c || (Array.isArray(c) ? c.some((function(e) {
                                            return h._diffQuery[e]
                                        })) : "function" == typeof c && c.apply(r, [t.query, o.query]))
                                    })) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                                case 12:
                                    n(), e.next = 26;
                                    break;
                                case 15:
                                    if (e.prev = 15, e.t0 = e.catch(5), c = e.t0 || {}, l = c.statusCode || c.status || c.response && c.response.status || 500, m = c.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(m)) {
                                        e.next = 23;
                                        break
                                    }
                                    return window.location.reload(!0), e.abrupt("return");
                                case 23:
                                    this.error({
                                        statusCode: l,
                                        message: m
                                    }), this.$nuxt.$emit("routeChanged", t, o, c), n();
                                case 26:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [5, 15]
                        ])
                    })))).apply(this, arguments)
                }

                function S(e, t) {
                    return v.serverRendered && t && Object(d.b)(e, t), e._Ctor = e, e
                }

                function E(e) {
                    return Object(d.d)(e, function() {
                        var e = Object(n.a)(regeneratorRuntime.mark((function e(t, o, n, r, c) {
                            var l;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("function" != typeof t || t.options) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 3, t();
                                    case 3:
                                        t = e.sent;
                                    case 4:
                                        return l = S(Object(d.s)(t), v.data ? v.data[c] : null), n.components[r] = l, e.abrupt("return", l);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, o, n, r, c) {
                            return e.apply(this, arguments)
                        }
                    }())
                }

                function x(e, t, o) {
                    var n = this,
                        r = ["context", "redirect"],
                        c = !1;
                    if (void 0 !== o && (r = [], (o = Object(d.s)(o)).options.middleware && (r = r.concat(o.options.middleware)), e.forEach((function(e) {
                            e.options.middleware && (r = r.concat(e.options.middleware))
                        }))), r = r.map((function(e) {
                            return "function" == typeof e ? e : ("function" != typeof l.a[e] && (c = !0, n.error({
                                statusCode: 500,
                                message: "Unknown middleware " + e
                            })), l.a[e])
                        })), !c) return Object(d.o)(r, t)
                }

                function M(e, t, o) {
                    return N.apply(this, arguments)
                }

                function N() {
                    return N = Object(n.a)(regeneratorRuntime.mark((function e(t, o, r) {
                        var c, l, h, k, f, A, v, O, P, C, w, S, E, M, N, I = this;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", r());
                                case 2:
                                    return !1, t === o ? (y = [], !0) : (c = [], y = Object(d.g)(o, c).map((function(e, i) {
                                        return Object(d.c)(o.matched[c[i]].path)(o.params)
                                    }))), l = !1, h = function(path) {
                                        o.path === path.path && I.$loading.finish && I.$loading.finish(), o.path !== path.path && I.$loading.pause && I.$loading.pause(), l || (l = !0, r(path))
                                    }, e.next = 8, Object(d.t)(_, {
                                        route: t,
                                        from: o,
                                        next: h.bind(this)
                                    });
                                case 8:
                                    if (this._dateLastError = _.nuxt.dateErr, this._hadError = Boolean(_.nuxt.err), k = [], (f = Object(d.g)(t, k)).length) {
                                        e.next = 27;
                                        break
                                    }
                                    return e.next = 15, x.call(this, f, _.context);
                                case 15:
                                    if (!l) {
                                        e.next = 17;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 17:
                                    return A = (m.a.options || m.a).layout, e.next = 20, this.loadLayout("function" == typeof A ? A.call(m.a, _.context) : A);
                                case 20:
                                    return v = e.sent, e.next = 23, x.call(this, f, _.context, v);
                                case 23:
                                    if (!l) {
                                        e.next = 25;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 25:
                                    return _.context.error({
                                        statusCode: 404,
                                        message: "This page could not be found"
                                    }), e.abrupt("return", r());
                                case 27:
                                    return f.forEach((function(e) {
                                        e._Ctor && e._Ctor.options && (e.options.asyncData = e._Ctor.options.asyncData, e.options.fetch = e._Ctor.options.fetch)
                                    })), this.setTransitions(D(f, t, o)), e.prev = 29, e.next = 32, x.call(this, f, _.context);
                                case 32:
                                    if (!l) {
                                        e.next = 34;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 34:
                                    if (!_.context._errored) {
                                        e.next = 36;
                                        break
                                    }
                                    return e.abrupt("return", r());
                                case 36:
                                    return "function" == typeof(O = f[0].options.layout) && (O = O(_.context)), e.next = 40, this.loadLayout(O);
                                case 40:
                                    return O = e.sent, e.next = 43, x.call(this, f, _.context, O);
                                case 43:
                                    if (!l) {
                                        e.next = 45;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 45:
                                    if (!_.context._errored) {
                                        e.next = 47;
                                        break
                                    }
                                    return e.abrupt("return", r());
                                case 47:
                                    P = !0, e.prev = 48, C = T(f), e.prev = 50, C.s();
                                case 52:
                                    if ((w = C.n()).done) {
                                        e.next = 63;
                                        break
                                    }
                                    if ("function" == typeof(S = w.value).options.validate) {
                                        e.next = 56;
                                        break
                                    }
                                    return e.abrupt("continue", 61);
                                case 56:
                                    return e.next = 58, S.options.validate(_.context);
                                case 58:
                                    if (P = e.sent) {
                                        e.next = 61;
                                        break
                                    }
                                    return e.abrupt("break", 63);
                                case 61:
                                    e.next = 52;
                                    break;
                                case 63:
                                    e.next = 68;
                                    break;
                                case 65:
                                    e.prev = 65, e.t0 = e.catch(50), C.e(e.t0);
                                case 68:
                                    return e.prev = 68, C.f(), e.finish(68);
                                case 71:
                                    e.next = 77;
                                    break;
                                case 73:
                                    return e.prev = 73, e.t1 = e.catch(48), this.error({
                                        statusCode: e.t1.statusCode || "500",
                                        message: e.t1.message
                                    }), e.abrupt("return", r());
                                case 77:
                                    if (P) {
                                        e.next = 80;
                                        break
                                    }
                                    return this.error({
                                        statusCode: 404,
                                        message: "This page could not be found"
                                    }), e.abrupt("return", r());
                                case 80:
                                    return e.next = 82, Promise.all(f.map(function() {
                                        var e = Object(n.a)(regeneratorRuntime.mark((function e(n, i) {
                                            var r, c, l, m, h, T, f, A, p;
                                            return regeneratorRuntime.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (n._path = Object(d.c)(t.matched[k[i]].path)(t.params), n._dataRefresh = !1, r = n._path !== y[i], I._routeChanged && r ? n._dataRefresh = !0 : I._paramChanged && r ? (c = n.options.watchParam, n._dataRefresh = !1 !== c) : I._queryChanged && (!0 === (l = n.options.watchQuery) ? n._dataRefresh = !0 : Array.isArray(l) ? n._dataRefresh = l.some((function(e) {
                                                                return I._diffQuery[e]
                                                            })) : "function" == typeof l && (E || (E = Object(d.h)(t)), n._dataRefresh = l.apply(E[i], [t.query, o.query]))), I._hadError || !I._isMounted || n._dataRefresh) {
                                                            e.next = 6;
                                                            break
                                                        }
                                                        return e.abrupt("return");
                                                    case 6:
                                                        return m = [], h = n.options.asyncData && "function" == typeof n.options.asyncData, T = Boolean(n.options.fetch) && n.options.fetch.length, f = h && T ? 30 : 45, h && ((A = Object(d.q)(n.options.asyncData, _.context)).then((function(e) {
                                                            Object(d.b)(n, e), I.$loading.increase && I.$loading.increase(f)
                                                        })), m.push(A)), I.$loading.manual = !1 === n.options.loading, T && ((p = n.options.fetch(_.context)) && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((function(e) {
                                                            I.$loading.increase && I.$loading.increase(f)
                                                        })), m.push(p)), e.abrupt("return", Promise.all(m));
                                                    case 14:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t, o) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 82:
                                    l || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), r()), e.next = 99;
                                    break;
                                case 85:
                                    if (e.prev = 85, e.t2 = e.catch(29), "ERR_REDIRECT" !== (M = e.t2 || {}).message) {
                                        e.next = 90;
                                        break
                                    }
                                    return e.abrupt("return", this.$nuxt.$emit("routeChanged", t, o, M));
                                case 90:
                                    return y = [], Object(d.k)(M), "function" == typeof(N = (m.a.options || m.a).layout) && (N = N(_.context)), e.next = 96, this.loadLayout(N);
                                case 96:
                                    this.error(M), this.$nuxt.$emit("routeChanged", t, o, M), r();
                                case 99:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [29, 85],
                            [48, 73],
                            [50, 65, 68, 71]
                        ])
                    }))), N.apply(this, arguments)
                }

                function I(e, o) {
                    Object(d.d)(e, (function(e, o, n, c) {
                        return "object" !== Object(t.a)(e) || e.options || ((e = r.default.extend(e))._Ctor = e, n.components[c] = e), e
                    }))
                }

                function B(e) {
                    var t = Boolean(this.$options.nuxt.err);
                    this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (t = !1);
                    var o = t ? (m.a.options || m.a).layout : e.matched[0].components.default.options.layout;
                    "function" == typeof o && (o = o(_.context)), this.setLayout(o)
                }

                function R(e) {
                    e._hadError && e._dateLastError === e.$options.nuxt.dateErr && e.error()
                }

                function U(e, t) {
                    var o = this;
                    if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                        var n = Object(d.h)(e),
                            c = Object(d.g)(e),
                            l = !1;
                        r.default.nextTick((function() {
                            n.forEach((function(e, i) {
                                if (e && !e._isDestroyed && e.constructor._dataRefresh && c[i] === e.constructor && !0 !== e.$vnode.data.keepAlive && "function" == typeof e.constructor.options.data) {
                                    var t = e.constructor.options.data.call(e);
                                    for (var o in t) r.default.set(e.$data, o, t[o]);
                                    l = !0
                                }
                            })), l && window.$nuxt.$nextTick((function() {
                                window.$nuxt.$emit("triggerScroll")
                            })), R(o)
                        }))
                    }
                }

                function L(e) {
                    window.onNuxtReadyCbs.forEach((function(t) {
                        "function" == typeof t && t(e)
                    })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(e), A.afterEach((function(t, o) {
                        r.default.nextTick((function() {
                            return e.$nuxt.$emit("routeChanged", t, o)
                        }))
                    }))
                }

                function F() {
                    return (F = Object(n.a)(regeneratorRuntime.mark((function e(t) {
                        var o, n, c, l, m;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return _ = t.app, A = t.router, t.store, o = new r.default(_), n = v.layout || "default", e.next = 7, o.loadLayout(n);
                                case 7:
                                    return o.setLayout(n), c = function() {
                                        o.$mount("#__nuxt"), A.afterEach(I), A.afterEach(B.bind(o)), A.afterEach(U.bind(o)), r.default.nextTick((function() {
                                            L(o)
                                        }))
                                    }, e.next = 11, Promise.all(E(_.context.route));
                                case 11:
                                    if (l = e.sent, o.setTransitions = o.$options.nuxt.setTransitions.bind(o), l.length && (o.setTransitions(D(l, A.currentRoute)), y = A.currentRoute.matched.map((function(e) {
                                            return Object(d.c)(e.path)(A.currentRoute.params)
                                        }))), o.$loading = {}, v.error && o.error(v.error), A.beforeEach(C.bind(o)), A.beforeEach(M.bind(o)), !v.serverRendered || !Object(d.n)(v.routePath, o.context.route.path)) {
                                        e.next = 20;
                                        break
                                    }
                                    return e.abrupt("return", c());
                                case 20:
                                    return m = function() {
                                        I(A.currentRoute, A.currentRoute), B.call(o, A.currentRoute), R(o), c()
                                    }, e.next = 23, new Promise((function(e) {
                                        return setTimeout(e, 0)
                                    }));
                                case 23:
                                    M.call(o, A.currentRoute, A.currentRoute, (function(path) {
                                        if (path) {
                                            var e = A.afterEach((function(t, o) {
                                                e(), m()
                                            }));
                                            A.push(path, void 0, (function(e) {
                                                e && P(e)
                                            }))
                                        } else m()
                                    }));
                                case 24:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                Object(m.b)(null, v.config).then((function(e) {
                    return F.apply(this, arguments)
                })).catch(P)
            }.call(this, o(24))
    }, , , , , , , , , , , , , , , , , , , , , , , function(e, t, o) {
        "use strict";
        o.r(t);
        o(92);
        t.default = function(e) {
            var t = e.isHMR,
                o = e.app,
                n = e.store,
                r = e.params,
                c = e.error,
                l = e.req,
                d = "en",
                m = ["zh", "zh-tw", "en", "ko", "ru", "es", "hi", "ja", "fil", "pt", "vi", "th"],
                h = function(e) {
                    var t = [];
                    e.split(",").forEach((function(e) {
                        t.push(e.split(";")[0].split("-")[0])
                    })), d = m.indexOf(t[0]) > -1 ? t[0] : -1 !== e.indexOf("zh") ? "zh" : d = -1 !== e.indexOf("ko") ? "ko" : "en"
                };
            if (l && l.headers["accept-language"] && h(l.headers["accept-language"]), l || h(navigator.language), !t) {
                var k = "en",
                    T = r.lang && m.indexOf(r.lang) > -1;
                r.lang ? T ? k = r.lang : c({
                    message: "This page could not be found.",
                    statusCode: 404
                }) : k = d, (r.lang || "" === n.state.language) && n.commit("SET_LANGUAGE", k), o.i18n.locale = n.state.language
            }
        }
    }, , function(e, t, o) {
        "use strict";
        o.r(t), t.default = function(e) {
            var t = e.app,
                o = e.route,
                n = e.redirect;
            return o.fullPath === t.i18n.path("/download/ios") ? n({
                path: t.i18n.path("/download/app"),
                query: {
                    ios: 1
                }
            }) : o.fullPath === t.i18n.path("/download/android") ? n({
                path: t.i18n.path("/download/app"),
                query: {
                    android: 1
                }
            }) : void 0
        }
    }, , , , , , , , , , , function(e, t, o) {
        "use strict";
        o(190)
    }, function(e, t, o) {
        "use strict";
        o(191)
    }, , , function(e, t, o) {}, function(e, t, o) {}, function(e, t, o) {}, , , , , , , , , , , , , , , , , function(e, t, o) {
        e.exports = o.p + "img/qr-code-TPT.e19310a.png"
    }, , , function(e, t, o) {
        "use strict";
        o(193)
    }, function(e, t, o) {
        "use strict";
        o(194)
    }, function(e, t, o) {
        e.exports = o.p + "img/TPT.ed141aa.png"
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA0ZJREFUWEftlk9oHVUUh7/fpDUyN+/NJDEWorUi1gpWI2oxRaGICxUEqxsVakERV24s6M6CuFZE6UYQ6UIoiiioRRdWKBZRqmi1oDUFpWqx0XTeS2e6qG+O3Djv8RJf3syzNt307u7cc37nm3PO/SPO89B5js8FgMoZmJ212kUh23N4WLAeuLRP+ZrAjODdNOSFSSlbzrYSQCOzW814C1j7H3pmJhePjoX6tJdvKUCS2s3AAWC4EMgRRzB+7gMzAdwIBG2fXGzpBVEF4MNCDIx9fwU8fUmoX8sy0WzaeGsVL8nYVtjOZCFTS8tRClAWqGy9kdpug+3eTrAzcnq+26cngJkNNzIeMdgquNYg7NNECfC9xJtRqD1L7Xwm8iF+B4aAr2InX9LO+BdAs2kb8iG8kK/hYEPsI+CJ+GId7XZMUvsW2Ag0Y6doWYBGapsMPgFcl9EscLwPyThwWdf6XEtMjYf6pf0tSc330V1+Hjst+unOxMxWNzK+BK4vHPcGLXbU6/qhLA1JarcALwObF2yN/ZHjDkm5n1YCOJnZUzJeLJrlvXrIfZKsLHh73fdNkvGx4LYFDWNbNKI3KgMkqX0GTHv+llg3HupY1eBdqb4JFrLoxzux0wODAPhu9g1yMHbaNGjwLoiTvtQYR+IRbRgEoJ3uj2Knu88C4BvgBoPjo06TFwCKDCxkBTgRO63peQ4kqZ2TEsymNrkafEMHBgdGnW5fUYDklO1BPFhs7ycjp10rC5Daj8DVwLEzGddNTGh+pQH8u2GNxJYo1OdLd1fnKE5SS/nn1jsUO02dxTb8CVjXPgeS1PYCz8ZO7QNqkXQ3gDfwJ9mZoMVkva4/BoWYm7eNQYC/+TD4YNTp3jKNDkAjtZ0GzxUOr8dOj5U5d6+bWdDIeB+4p/j+eOz0WplGB2BuzqJgmK+BK4uO3R3kPFOr6USZyJ+ZXT5kvAJsLWwPRiHTklplvovu5mZmm3NjP7CqcPQCX/iHRB+hK4BrihePNzudG9NjIzpUFrz40cVmySm7E/EqcFUVgSVb6nAr56Gxmr6r6tvzTfibWegydhjcj1iPUVtWUMxjHMZ4e96xa610umrwnhkYxPn/sD3nz/IyyL8BisRzMG2XkIcAAAAASUVORK5CYII="
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAh1BMVEUAAAAyMjIzMzMyMjIyMjIzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM0NDQxMTEzMzMzMzMzMzMyMjIzMzMzMzMqKiozMzMzMzMzMzMyMjIzMzMyMjI2NjYzMzMyMjIzMzMzMzMzMzMzMzMyMjI3NzcyMjIyMjIzMzOA5hHdAAAALHRSTlMAcM2iGdGn3/jx69mxE8ebf3k0H/3Atp+JSgfnuoyDQCoJc2jlvHFWOQ6TJCwdlxUAAAHeSURBVFjD7ZbZcuowDIaNS/aNBGhYQspWKD3/+z/fGcvutKljhQmX5btihuhLZMmyxZMnDNkxDSJ0iJKm3N8ZXtUh+vHW98TvwPA+HQqfLsFyrgayDzBAyBteoYn99jL5SVl/qc9cFjMQyVX08CbNOjCCT0+x2zj+XoG4pxaswRPjycng6KjNeubnskNTzz6660CCsi/8XxGhl7i9iW+oFo0dfmhDOIlP3w8WVCW7/yRY/EOn0NHv+Plg/y2/KjuB4vf3S2gWMn3pkCYw+JygNqkeM2ExX4UgTm5BtYDilcJtPrZan7kEZgPlG+cO96BYuQRzKLbMHttTFmeX4ATFdXhIvTkEKX0AF28+snQIPF0lFqpm7RDE2j48qHKHgIo44QUv6hnpEOCvCfR2fkDgq1/BAwIqejpaYPr+MlowpcEbZqMFBXRPjxakUFTjBY2eLOMFSzWgxQOCHAis0UXzasYLfOhXSzN67WFR8AJphs5n34tS3Zwc2UIvXj+tmZgMR/Zisoci52YqbYBowyaInTP+4IFfpnXnCLe46fYL54OXQ9m7DtcAxI7LcQtNUpSTn1xaPwb4o5OoIvDY/Wcf4SzysUv6oriJYdbSFd5U4j725XsSoUPo+cepeMLxH5jcouqOIlJnAAAAAElFTkSuQmCC"
    }, function(e, t, o) {
        "use strict";
        o(196)
    }, function(e, t, o) {
        "use strict";
        o(197)
    }, , , , , , , , , , , , , , , , , , , , function(e, t, o) {
        e.exports = o.p + "img/modal-img.cf62ffa.png"
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwBAMAAAA0zul4AAAAJFBMVEUAAAD///////////////////////////////////////////+0CY3pAAAADHRSTlMAZgZZUw0zJxNgLUCD4/hrAAABS0lEQVRYw+3UsQlCQRAA0eWDYroIisZGZgYWYAeCDWgHlqBdWIAFCDYomAz4uTsmMLsJD5Z3yW70er0/to1mk1uMGw7naHV6xLhNLprgbgUJmHlugZmQgAlZAjMhAROyCCYkg5BlMHM5/ipkBcxrSBJQkoCOBJQkoCMBJQnoSEBJAjoSUJKAjgSUJKAjASUJ6EhASQI6ElCSgI4ElCSgIwElCehIQEkCOhJQkoCSBJTkG9CRCehIQEMCShLQkoCu+3fwJSZYC5ZEdMpkSSQI6UBICUJq8OlIFp9T4MArp8CBnAILBqQDISUIKUFIC0JKENKAjgSUJKAjASUJ6EhASQI6ElCSgI4ElCSgIwElCehIQEkCOhJQkoCOBJQkoCQHwDq5/n2+AFbJ/e/rFLBGzo8xIgErJCAkYJkEDLoAFknAoFk0G47R6/VafQD+kXfRUY4mwQAAAABJRU5ErkJggg=="
    }, function(e, t, o) {
        "use strict";
        o(205)
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAxBAMAAABucDcRAAAAJ1BMVEUAAAD///////////////////////////////////////////////+uPUo5AAAADHRSTlMA3yAQb+/Pv6+gn3/0srx8AAAAcElEQVQ4y2OgM3BMwS7OfeaMA1YJxjNnArBK8Jw5c2BUgm4SjoIQIHPmzEEoMwUacZjAARxxGAASlayYwhDLOLBJLABKMM/BFD9uwACSUYIAnTNnDkGZBgMfViNGghWXBAck4jAB8xxgxGGXAYpTAADtBaqAza534QAAAABJRU5ErkJggg=="
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAxBAMAAABucDcRAAAAJ1BMVEUAAAD///////////////////////////////////////////////+uPUo5AAAADHRSTlMA3yAQb+/Pv6+gn3/0srx8AAAAP0lEQVQ4y2MYBaOAGOAoiAFSQOLcZ7AAB6AEIzaJAKAEKzaJA0AJDmwSC4ASzHMwxY8bMIBklDCAAcMoGIEAAHbOViYrjlc/AAAAAElFTkSuQmCC"
    }, function(e, t, o) {
        "use strict";
        o(206)
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAUVBMVEUAAADX2t/g4ODX2t/X2uDX2uDX2uHY2uDY2uHV2+HX2uDX2uDX2uDX2eDX2eDX2uDX2uDW2t/Y2uHY2+HZ2eDW2uHX19/c3NzV2+HX2uDX2uD7FiKlAAAAGnRSTlMAmQi6YNvLwTYr9fHdxberppBuVUlFIBYq8PXa5wgAAAEkSURBVEjH1JDbkoMgEAVREfCu0WjS//+hu0tNlQsTU5XH9JN1PA3DmNc0fd+YT1hg+UgooPg64bGd32WwDpwN5Zltj6wPlfxepxahnVY5ooLU2BDD1iTUVvpsJqGKxj5Izc+zF3XYY78yKTF0HcBoDxM57AjQObleGREf/qfBA9JXhgO45fENwJVGs3fwvOv8/oRuN5oBkH5mAIOObTKPmsqqtAZvLvBQ59kKhCshAGuWTTCaS0aYsp226Zj6gW2pLj2uhUMNbJNnaepzgGYpfnFqR2pP7q+3NKZHmN8JM0L/02yd2wAAgCAUrd1/YRt68joGIPHAjyzgkqBpH6svzq3h5nN7+wH5iToEHDMOMkelw9hxfxAoUdTI2o9dEOBzwu/PAxvnK684Gj/6AAAAAElFTkSuQmCC"
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAjVBMVEUAAAAzMzM1NTUzMzMzMzMzMzMzMzMzMzMyMjIzMzMzMzMzMzMzMzMzMzMzMzMzMzMxMTEzMzMzMzMzMzMzMzMzMzM0NDQyMjIzMzMyMjIzMzMzMzMyMjIyMjIzMzMzMzM0NDQzMzMzMzMzMzMzMzMzMzMzMzMyMjIzMzM0NDQ0NDQzMzMyMjIyMjIzMzNuUKsMAAAALnRSTlMA/AX1rEfr5ZGDcxvZn5ovC/nfw7hmEselV00pIw+KXiHTsjTPvntrPjoX7lJRckAjwgAAAdFJREFUSMeNlut2gjAQhA3IVe4ioiJWq7W17ff+j1ewxxYJCcyvZM5uluxOdpnJ2G+8+dGfTYRhlSYN4on2B4c7nGnmuyUNRAbhJPu3tD3bW3iwmmIfAaZv3BfWhNvOgdOiXTar13H7HPB+10tYjDp4IB4fHoAxZm8JuD422bjDwgb3b7ce/6QQlv+Hjl/6RSA6WnBhOxrA7Wx9WI0FMIvO/gtKvSR62ikEttZh2b/kGj409s2BgRTS0zhsIHpmYgg0pXPh0KOOLaXEHCo5aKYO0Vwx6XOBrhQZpvy2wSlUDubAkzfOkOscJOxMdWoDxAC7ArbKQt8G6BOY36q0xkMdcw3CVxRuM8QnTWhcY1Aa5UzpcbTk2Eo1JxENTrs+f1GreWsD6enwXES/lasCtzktRO5bVWEYf080fVG39DDlgct/Gw51Xcs78wvrwaSI3UyH4tu14dwtxTGZafGedofAzR7rLFVjEfaasa+x3wfg7Hup1XgYFzA/JAkSGYo0tTr8GhpZeTVYbuc+bSTUQFrvpc5bAubgW7oKwPbip2yWLZnFChXktAjqzXuVJIvXVeTQQNTqGlkBEvJYO3634Scd2G414YemzrNPYWbr+VU+/AcYNT4z47/tlAAAAABJRU5ErkJggg=="
    }, function(e, t, o) {
        "use strict";
        o(208)
    }, function(e, t, o) {
        var map = {
            "./logo-dark.png": 198,
            "./logo-w.png": 348,
            "./logo.png": 349
        };

        function n(e) {
            var t = r(e);
            return o(t)
        }

        function r(e) {
            if (!o.o(map, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return map[e]
        }
        n.keys = function() {
            return Object.keys(map)
        }, n.resolve = r, e.exports = n, n.id = 347
    }, function(e, t, o) {
        e.exports = o.p + "img/logo-w.7f84b51.png"
    }, function(e, t, o) {
        e.exports = o.p + "img/logo.30210bd.png"
    }, function(e, t, o) {
        var map = {
            "./language-dark.png": 351,
            "./language.png": 352
        };

        function n(e) {
            var t = r(e);
            return o(t)
        }

        function r(e) {
            if (!o.o(map, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return map[e]
        }
        n.keys = function() {
            return Object.keys(map)
        }, n.resolve = r, e.exports = n, n.id = 350
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAQlBMVEUAAADv9f/v9//w9v/w9f/x9f/w9f/w9f/w9f/v+P/w9v/w9f/w9v/v9P/w9f/v9P/v9f/v8v/v9v/x9//x9v/w9f/OKG4HAAAAFXRSTlMAQCC/gJ/v33AQr2DfoM+QUFAwn49wm5x7AAACTElEQVRIx61VCZKjMAz0fQImzPT/v7pILsWsSVJ7jCoxptxtqSUjqx+wvDtfrLXe7eYP0G7DxTb3maMtbubfU0whQKBx4R/s8olSA0G0iUDTgHZAzHrF+aiv8N8MV8qfeEUE1QB7+iVRbkYzLiTyAyyqE5TlUSUK6wV+OWgSASOEA4gsbrkx3Ik3LISWhKBOAbswvn/TS8oIQVGYQThIBb3GE3BRbiLIbM0GKGoQmJ9Tr04wVwHJ9coCXj81ZEOpYHBKvFW3vq1ZF4iF2P/y6rKkTBx0b7rhhbWO06RHHPiLr0dy3ttz4purR5PN2EWWlIov0Tomj5EdLQXfsIiaRJsIQXw2WQ3YpohUQxiuBPU1VpGHU7YCOxMibyvh7V3CoZ66ykywiCP9LGJlR7Ld10SgZX5KeL0gYgGlTxKQ+mxaZsJfmP0XQkHQYoCdQyqXkCITVgQlhlei47ScxmlR8V6HMupwAG4q3IZ4r4OdCpcxil9eHY2mps/ADhFymIXA26UR8DYf70pO53O+j+OdZBM7ZCWzV+c84F3atUnjpBVxP75WWr5bNfOHqUHB5fS25lvN0hKfJ9KlgG7+YQxryEbXgm6xumu3zB0cmjZdDxMkk5r7j/RSKUlvPtIahCCNkN3XqRlHI61hELw043i7IlZh2NHuycHC2T7xq1I3BpI0uHGh1B6Q4KeosBmuz3cn9MRoK1fWbJWS4XU+H44IfMkwPOxvrt2VU25p4B9KAI2Ut/eU2axWn8y07YqOru/+mfNw3lpbvKtZ/b/9AiYVQCn1XsZ7AAAAAElFTkSuQmCC"
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAASFBMVEUAAAAYICwYICgZICsZICwZICsaICwaICwTICgZICsZICsaICwZIC0aICwZICsZICoaICwXICoaICsbICwaICsZIC0ZICwaICzj7t+fAAAAF3RSTlMAQCCgv9/vgBBwX69Qz5Awf0/PkLCPwAaxKxMAAAJMSURBVEjHrVWJlhpBCOz7nEtX0///p+EIMjsz60uyy/NohaIoQdr8gJUp+x5C8HlyfxG9zWNn8/YeY8M4mf8a4joGJHyN9BghvoO0hCHWQdBix7AZQMV6hLer+CeFGwMR2SDAfMAXwIuitmM0xaWKPJDQMMDM9GoqlnURH1c8QEFOACuBgSSeEBu4HAlBFwM4zU0Qz096UZnFUwACBayoAj8CYKhySoCSW3FjPIwCCF8qdye5vYCWubNQkX1pKA48iYIrKO8vAjo7zzzkj/jUj7kQmVUCZrPLuLDFshP1CIHfcU01ex/g4Jfc1g9JRhSFDlm4VKseJpCnzkyHeURRUzGJAIRzEW8a90NFMD1JqSRKvZhOSNn6CEdApLRS3o0lrOal63EEBC3YsQhPRJLOHwDoFi+Vxw0RS6PzAdRXPn12PwjwDxb+B9BHsmJj/DqW1HclRQL4kYzYuBIdD+6s02LiuQ9d+7COkbVxMiXnPoRD48puNPrFaMgsaceCipBhVkAB9Vrw/TjeDUhPc37T8a6SJKis6qaWM7D7XCfrqk5aF3r9t6L7bM3J6HnlmoGoftnzuRVeiTv5uSa5DybnSENxtvXBFtsmBKSCg9NiHeshgCwU6yODgEBskuVDq0EBsgiJvpmdZUwgq+F6GefzuneyTQXg/qz7NdLuOCFGlQVHAAI3LkgEH6oad0f9eTKAfhi+WfPlpRjB422Btw0BdMlQeJrMpTlPv17Qa7cn6kxh/zXkZMGad+aWeR8dM2d/j5myDyF0n1sx37ffErJECjOw5M4AAAAASUVORK5CYII="
    }, function(e, t, o) {
        var map = {
            "./close-dark.png": 354,
            "./close.png": 355
        };

        function n(e) {
            var t = r(e);
            return o(t)
        }

        function r(e) {
            if (!o.o(map, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return map[e]
        }
        n.keys = function() {
            return Object.keys(map)
        }, n.resolve = r, e.exports = n, n.id = 353
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwBAMAAAA0zul4AAAAIVBMVEUAAADw9f/v9P/x9v/w9f/w9f/v9//w9v/v9P/v9//w9f+4WEtBAAAACnRSTlMA7zCfkHAg32AQsHtThgAAARhJREFUWMPt1iEOwkAQheGmQAMWiSo3QHAAEi6ABYXkDCgUGsMBEKTJOyWiJE9su80vmpp5cjOzX9Nud7eIRCKRSGSqlMdn1/B7fx1ovKipO6bb6JvvqySt0+GtpDrbOJf0cYlB6ZBtnKklU1C7bONCLZmCemQbV5uWTMFm4LVuU7L0ZJm4Kp2LkZ4KkAB0IQRdSUGXQtC1FHQxBF1NQZdD0CQFTRqEpEFIGoSkQUgaJKRBSBrEJAd5I39U/nL45+ALgC+5kRc5/634j8y3Dr5Z8e1x3A2ZHwH80OHHHD9Y+VEOQES6CpLV/V+UTvbKNi77r2SnMS6B/Nrpkv6L7nXoam3QKe/6FvlUx3PX8G1fF5FIJBKJTJQfoBMzQka+bpEAAAAASUVORK5CYII="
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwBAMAAAA0zul4AAAAJ1BMVEUAAAA6Oz06Ojo5Ojw8PEA7Oz06PD46Oz06Oj1AQEA5Oz47PT46Oz35PKBjAAAADHRSTlMA7zBwIJ+Q32AQoI/ROeJJAAABHUlEQVRYw+zVIQ7CQBCFYVIaEpDoivYeCI6Ax3AUBDfgLByAIGreoRArnphmml8QzIxs3uzXtLs7m6qqqqqqqn9V93osPX5ezyuNJ83jwnKDPnlfL+kYH0+SxrRxJ+ntiEHpljYe1MgI6pI2btXICOqeNu6HRkZwXvmsUyQ7L5aUU3EtRuZgJCnoIASdpKCjEHSWgg5D0GkKOg5BkxQ0aRCSBiFpEJIGIWmQkAYhaRCTHOSN/FX5x+G/g28AvuV+u8n5seIHmV8d/LLi1yMEKclHAB86fMzxwcpHOQAR6RQk++9qcDWQDk7Aq5EDd5PMgOxGIG2anUy4G7oOBJrWWAOeqYZQ05qBJdUSm7BHmALDKBgFo2AUjIJRMEAAACl1bDXan8UIAAAAAElFTkSuQmCC"
    }, function(e, t, o) {
        var map = {
            "./menu-dark.png": 357,
            "./menu.png": 358
        };

        function n(e) {
            var t = r(e);
            return o(t)
        }

        function r(e) {
            if (!o.o(map, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return map[e]
        }
        n.keys = function() {
            return Object.keys(map)
        }, n.resolve = r, e.exports = n, n.id = 356
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAYAAADG4PRLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgB7d3BbRNBFIDhN3HEGTpgj76FVEIL0AEUAh1ACYEK6IBwc27ZDsI5kj3sIjjFkZKMJ5mdfJ+0Z8t+2tk5zO+NAAAAAAAAAAAAAKAHKR7BZnP5Olbpa444mT7wZTxzKcdZ3uWP6/UwRqHqA5yHl1fp3OBuuIptPi0d4lFUlo/TZ8Pb69W0Kn2JQtUHOC0Xb4PbnESh+ndgxO/gNsUrU/07MOJXsNe0kfkehaoPcHpQv3MX3jT9JlfT4+VDFKo+wHmXlbb5TUrxLfj/SPmRDrADBQAAAAAAAACAHj1KG1Gqt7ZiUW1EqY7bimW0EaU6biuW0UaU6rytaL+NKNX5qe7224hS0/J5Hp1aRhtRapvfzx1BdGYxbUSpf23FaUpxFn+/972vpmgjAAAAAAAAAACqO8jJ7JxzjOOYdrsXcX10HS1ZD0Nz52IOqXiA8/AuLsZhPmXsvRB301QbsdlcDnmVfhrcvbXRRuTj9MnwHqSNNsJ7IYo8fRvhH+mLPH0b0XO7UFsbbUSn7UJtzbQRB2gXal9N0UYAAAAAAAAAAAAAsM8fYTLRHS8t4d8AAAAASUVORK5CYII="
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAYAAADG4PRLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHZSURBVHgB7d0xchJRHMfx/+6TXusURitLTUVJbaVH0BvoQfQGsbaKnkA6qRKPQJEeysyQ5blEbRyciTw2LuvnM8MwNDS/WdjifSECAAAAAAAAAAAAgCGo4g6Mx5PjlJoPOeJp+/J+/O9ynK3Xq7ez2WwehTofcDNenZqLMNzvFutmdVI6Yh0dq+vmfRhvmwdVGp1Goc4HbK/xF8FW1Y+vlCLdDxixDP6k+JOp8wHbG5dvwXY5Pkeh7gds0qtwFW6zaO9E30ShzgeczabzdZOe5Zw/BRvLHPnLPu5AAQAAAAAAAABgiO6kjSg1uLbikNqIUgNuKw6jjSg14LbiQNqIUgNuKw6ljSg15FPd/W8jSrU3LhcxVIfQRpTKTXrdPi1ieA6jjSj1s604yTmfxc0F+dePvtFGAAAAAAAAAAB0ay8nsyeTyc17rVb3YjS6jj6ZTqd9PBezN8UDbsa7uopHKTWn/hfilvbYRhSfStuMV6fmvB1vEsa7nSpe1ml0Ph6Pj6NQ8YB13bwLw+2iJ22E/4XYWV/aCL9Iv7t/30YMul3oWh/aiAG3C13bSxuRotDl5Xx5dPT4Y1Trh1VVPYn+6VuFvGkjvubm+rk2AgAAAAAAAAAAAIBfvgMByriERHejJQAAAABJRU5ErkJggg=="
    }, function(e, t, o) {
        var map = {
            "./products-dark.png": 360,
            "./products.png": 361
        };

        function n(e) {
            var t = r(e);
            return o(t)
        }

        function r(e) {
            if (!o.o(map, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return map[e]
        }
        n.keys = function() {
            return Object.keys(map)
        }, n.resolve = r, e.exports = n, n.id = 359
    }, function(e, t, o) {
        e.exports = o.p + "img/products-dark.68d68f2.png"
    }, function(e, t, o) {
        e.exports = o.p + "img/products.5bfa46e.png"
    }, function(e, t, o) {
        var map = {
            "./1-m-dark.png": 363,
            "./1-m.png": 364
        };

        function n(e) {
            var t = r(e);
            return o(t)
        }

        function r(e) {
            if (!o.o(map, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return map[e]
        }
        n.keys = function() {
            return Object.keys(map)
        }, n.resolve = r, e.exports = n, n.id = 362
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAM1BMVEUAAADv8//v8/7v8v3x9P7v9//v8//v8/3v9P/v9P/v8/3v9P7v9P7v8/7v8//v7//v8/783sRoAAAAEHRSTlMAYL+gnyBAcBCPgM/lr38gEKBz8QAAAMNJREFUWMPt2UkOwyAMhWGGEhsy+f6n7SbqsCCpY6qq5P0H+OQFFgs71FFMMaibKR25WU6W991RTjfuuYsC0sycxBRXYW+DqQpHG3w7gvOgrHwIe6fMAwYMGDBgwIABAwYMGPCVYH2AAZ+GKSkj6XXzuoB5iVsltYTTJI+m1BAO8lJoCMtbDeHpW3CsbK4Z5vHpBm76jge/NfzJglwVjl7Z7WdfE9lgX4XZBq+uWrG4xe0UrAeW9jNnd9BKc1AXiR3qpztYl35pCuXmdwAAAABJRU5ErkJggg=="
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAANlBMVEUAAAA6Oj07Oz07Oz05Oz4/P0A6PT08PDw6Oz1AQEA5Oz06Oz07Oz46Oz06Oz07Oz05Ozs6Oz2E+KXbAAAAEXRSTlMAYL+foCBgQIAQcI/P5a9wcGRwCrEAAADDSURBVFjD7dlLDoMwDEXRfOoSJ0Dr/W+2E9TPgFATVxXh3QUceRArAzvUUZxjUDdn2nKL7KzU3VF2N9bcJEvGM5M0xauwb4PzKnxpg+MWXAZl6Uv46pR5wIABAwYMGDBgwIABAz4TrA8w4N3wjZTdpdfN6wLmFJcSWcI0ybOJDOEgbwVDWD4yhCcjuL7r0RDm8eUGNn3Hg18aDrIgZ4WjVxb/9jXlNtivwtwG04/OFclVCq0HFvuZi9uI8hzUxcwO9dMDHs6HMFYPPQoAAAAASUVORK5CYII="
    }, function(e, t, o) {
        var map = {
            "./2-m-dark.png": 366,
            "./2-m.png": 367
        };

        function n(e) {
            var t = r(e);
            return o(t)
        }

        function r(e) {
            if (!o.o(map, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return map[e]
        }
        n.keys = function() {
            return Object.keys(map)
        }, n.resolve = r, e.exports = n, n.id = 365
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAQlBMVEUAAADv8//v9v/v8/7v8/7v8//w9P7v9P/v8/7v7//v9P/v9P7v8/3v8f3w8//v8v/v8/7v///v9P7v9P/v7//v8/46uVAcAAAAFXRSTlMAYCCAv0Cg3+8QMHCQcK9QzxDPjzAwQrRsAAADLElEQVRYw83Z23KkIBAG4Obc4Gkms77/q+5WiTaMICKkav+rxEl9djg6AqlwxSqiHNyJEhLXyqCcCvh7kuvDvBjkw3BtiMnRXK6NMTzlDrg2B6ezK9YuEVcuylGw2xGjjOSsK5WFylgmM/IQsPAofD6IKbiKeyMM8DjTgdDYMPtw+QMN4TsjwYfFw7BdZnHByKExDr1ko4IHaM4UUa/tlxk6RAat7PxdeA9YeUzRGJYAHUsW9CPrAysq0/ek7QPbjUMAR7fo2RZ8r33sBY9777GvNYmn8k4ayeti7zIW9t1bYGbT0fxr153NtnR/VAyzJPxzb29QMrqp4CWYFXad3KZrWAF+rZdZtnJTrSX5JZw3adEa8jt/HsaCzMjNyWeYFuaFn+IfkTRw+ufFwrlbtDmesWwJVpAbnRLMec9l+7XPE3jwVZ6GXjhKVD2stk9ehtwwmtabPEwD6Dxo/c/6tKS9qOQivBp7uoS5zdzRSpaE5+/BBSq8oIM/TTYGZqf0CV5Wys8Sb458xq3BqACXgUFfVKyt2PzdPbqa5hbLwSAwA0u1r+HzaShQK4oU7OOUUlsnDweM3G4U7TW0YtngNvoCpn1LHLABOMOmA4whrOPNzURNUQmvKdhGnedbrwDPd2DgGo/FiPupV4B1GU6vFvY27EJYpGEa0xJuw/weTJO9LyxogPSE3x+aqrdgXYBpE9gLboBprVjEorhbPju7In8A8wCWmYexBXrA7JtFBjfgsQhrIuk7bRkWtfBooRK2IczSMM4KoBaGDDzuqNHMAvSBT0P6v4Hlb8Gr+ZcYpjTBFNUOpwVLT2hhxlrYYgz80I4fRdXCMMXAPl/VqeAyLL4+DoozVJgLLqOAVISHs1/S1cK2OAjjlI+zhS/p/HdeKzgApC+HHWJ9O9EtVB+YUQOI3i+b6BG4Y8ncY45u0qfkOZxRA733bQtRLJrA6Jobwkvmt1/zguwh03w3iVfpU0P7HghPrWZzbdHnF1tD7riCvWvVt5KXByFkf2oOWD4Si0c37RHJc4zm4JAZho2RuZ5nTTRenkG+Hlc72cL8mZ4cxgp1b3LWHR8nW/YvEdMED3Dmn3QAAAAASUVORK5CYII="
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAARVBMVEUAAAA6Oj06PT1AQEA6Oz07Oz08PD06Oz06Oz06Oz1AQEA5Ojw4OEA6Ojo7Oz46PD06PD09PT06Oj07PD46OkA8PUA6Oz3UvLCgAAAAFnRSTlMAYGAggL9AoN/vEHAgMM+Qr1CwjzBQf7iTnQAAAyVJREFUWMPN2duSoyAQBuBmOUiDhxx9/0fdrRLSEkBESNX+VzOm5rMHkY4CqXDFKqJecCZKSFwrg9IWcGPlejEzg3wYrg3ROXqUa2M0T7kW1+agjV2xdok4clEugp2OWGQgZ12pDFTGMJmR7Y6FSxlvH8LujiIN/uXYD0JzQ/vpMkFDRs9IcGHhNGyXWVgwcmjMhE4yQcEWmmMDat5+uUGHyN0oT+sW3gNWDlNUvgToWLKgH1kfWFGZ7kqaPrDZOASY6BQ9x4L72pde8OKvHvtak3gq6XGi4/E6+cfDf7YREphpOgP/6roPvS3dTxXCLAnP53qDksFJBS/BrNB1ck1XswI8r4e5b+WmRkvyQzhv0qJl850/D2NB/kNuTo5hWpjfPIr7ijTASP+8uHM+3QftD8ymBCvIzU4JOu65zB97XoGtqzLR4mmWqHpYbZ/M2rthBlpv8jBNoHjSup+HaEmbqeQivGoTHcJkM6cutOTgWzi5aN12laZbAg0G5mAWwfeVMt/D5jg+cBswKuCVgWE4qHgwYvO9G1xqdH+SgUFgBpbKr+GPaCrQKIoU7DIppbaLbD8wckPUAhAssWZ3muEApr4lPrAGiGHdAcY9PITNTQdDUQmvKdgEF8+NXgG+nYFhHNAvRn7VUwV4KMPp1cKchqc9LNIwzWkJp+HxHEw3e19Y0ATpCZsnPXqcgocCTE3AF9wA01rxFm/FX++nZ1fkF2C+g2Xmy9gdesDsm0UGJ+ClCA9E0jNtGRa18GKgEjZ7mKVhvCmAWhgy8OJRPTCqthGOpvR/A8tfwav+lxCmNMEU1Q6nBeO/oYVZamGDITBTxw+i6uD4CcbfryoquAyLr493xWkqbNodRgGpCAdnH9LVnW1x5XpauUym8JA+/ua1wgsA6eGwQ4wbJzqF6gMzGgDR+2UTfQXuWPLosBedpE/Jj/0dZfu/gmTBDYxT80A4Sf/6NS/IHjLd7/qHr9Lj1exRW3T8YsvmtitY/XaFkocbIWQ/azZYnhKLWzftET/dxIqnYWNk7sqzJhoP9yDny9VaU7h/7JXNWKHO3Zx128fJkf0LSmkTQ7fUrs4AAAAASUVORK5CYII="
    }, function(e, t, o) {
        var map = {
            "./tools-dark.png": 369,
            "./tools.png": 370
        };

        function n(e) {
            var t = r(e);
            return o(t)
        }

        function r(e) {
            if (!o.o(map, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return map[e]
        }
        n.keys = function() {
            return Object.keys(map)
        }, n.resolve = r, e.exports = n, n.id = 368
    }, function(e, t, o) {
        e.exports = o.p + "img/tools-dark.4d235a6.png"
    }, function(e, t, o) {
        e.exports = o.p + "img/tools.1755d52.png"
    }, function(e, t, o) {
        var map = {
            "./3-m-dark.png": 372,
            "./3-m.png": 373
        };

        function n(e) {
            var t = r(e);
            return o(t)
        }

        function r(e) {
            if (!o.o(map, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return map[e]
        }
        n.keys = function() {
            return Object.keys(map)
        }, n.resolve = r, e.exports = n, n.id = 371
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAPFBMVEUAAADv8//v8/7v8/7v7//v8/7v9//v9P/v8/7v8/7v9P7v8//v9P7v8v7v8v/v9P3v8f/v8/3x9P7v8/4ArJwiAAAAE3RSTlMA34BgIO8gEK+/kEDPcFBwMKCfM2iRaAAAAVFJREFUWMPt1t1ugzAMhmE7P00oUKC5/3vdqkXqtq9JZ+Kjyc8ZwnpLQS4lY8x5ac2MlslfaMgaSwOvNMCVDken+dI101ncDzOdNENK6ZK3d+Ft7NFFB+LY43PNW8n/O4zLG0stg3oi4qILllcEF90VJQ6WV8sMT0MJw/JqmWF5lWyN5ZXDRcdVGMIWtrCFh8PJuxsBGBCHL48xhlcNDIjDU3mYCMCALJzKF7xkHHgfLvgiZtAeKBj2RdENvpeSAE9Cx52+C1GrGwP9sEel7k6/hEOjOwVCoZ7M7tO1HlzdCzCQ60Gil+pZXz+lvSAw4OsBWVgQptj56YcBSfj23HsAA5Iw7XnJM7XVAVFYwMIWtrCF1cKxvh5J7OiHl3r6cCLPl/TSCF/LgN53nXX+Dupf8p1aEo90OVFT4IFuoI509m5El6gv+Dyx0JLXRMaYv/sAKnulaipyX3UAAAAASUVORK5CYII="
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAPFBMVEUAAAA0NDQyMjIzMzMzMzM0NDQzMzM1NTUzMzMzMzMzMzM0NDQzMzMzMzMzMzMzMzMyMjIxMTE0NDQzMzNo2ffIAAAAE3RSTlMAgN/fYCDvEK9wkEDPv1CffzC/TG5nFAAAAVNJREFUWMPtl9tuwyAQRJdwj+/h//+1TY1UtRNvC+xTtOeNMDrBgYltUhSln5jTDZkX58e8OZQLbB7x7oVh7/e6wjJ1iy0vtr3eCVRCS85/iXv3z5QvggHqWTFjYkuAfW8xljeUkxtQJwJTdCjvGDZjeYXYobxSTLAbQlimvHJLzpLizJS3DSw6VmEIq2IVq3hYHJ1ZCYBAs9g/Y9aDDgKt4qU8WcAHgUZxLCewZAjwYrwfwycVJlBQ7IogK1yXEB52Qobt59kJUt7wa7uPIOQ94LxvEt6HJ8TXyWQ+udfB3bwAAqkOIr2kzrrzW5iCQMDVAam4QUyB+euHQIt4/e49AIEWMR1pThMx1ECLuAEVq1jFKhYTh3p7bBdvvHiu05tpJJWT+UJ8L93w1zrJPA7KL3mjK6Id8drIvbAMeD0xxN5fI5hIPN6lh21kTjmSoij/5wNK5aZBLBHyVQAAAABJRU5ErkJggg=="
    }, function(e, t, o) {
        var map = {
            "./trade-dark.png": 375,
            "./trade.png": 376
        };

        function n(e) {
            var t = r(e);
            return o(t)
        }

        function r(e) {
            if (!o.o(map, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return map[e]
        }
        n.keys = function() {
            return Object.keys(map)
        }, n.resolve = r, e.exports = n, n.id = 374
    }, function(e, t, o) {
        e.exports = o.p + "img/trade-dark.9eba9d8.png"
    }, function(e, t, o) {
        e.exports = o.p + "img/trade.44fdcdb.png"
    }, function(e, t, o) {
        var map = {
            "./4-m-dark.png": 378,
            "./4-m.png": 379
        };

        function n(e) {
            var t = r(e);
            return o(t)
        }

        function r(e) {
            if (!o.o(map, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return map[e]
        }
        n.keys = function() {
            return Object.keys(map)
        }, n.resolve = r, e.exports = n, n.id = 377
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAPFBMVEUAAADv9f/v8//v8//v8/7x8//v8/3v9P7w8//v9P/v7//v8//w9P7v8v/v8/7v9P7v8f3v///v7//v8/4mC9qQAAAAE3RSTlMAIN9Av1+Az68wEH+fUO+QcBAw7VuMxwAAAVBJREFUWMPt2MmOhCAQgGE2ZWnsZer933UyHZM6gIhV5YQD/90vUQuJqNls1l18BEPJu1U32E8ARvmQ1gZYGS3sopyqcAZ2oeZqEChW4FUCXiuwg28+akLRHz8LjzdDyO6vT5XtM6FpsJ7w6LB1xtkb4A3+WuRhDyiLwrC3SMMGZVn4DSiLwmpFmQATZD5cyny4lPlwW+bDpUyD7cvVA5Qp8AYdbQTY9MDP67CGrvRlOPXB6TKsXI+bCc84hXPXadIcR3uSHn8zFYK1PSmS4I+D00IiwBk6cmqcBXLbklbPHteM9NlUC17v6r0sbY5RfgivvFLmw6XMh5syHy5lNtyW+XApv2VhlI0wjLIsjLKXhVHeZGH8cxx/M53wTbClwfF41APneMx6+Ob+80Dvh0c23lDgu1nVSgZgzANkdAs5c9yQWnO+Om8ohTWq2WzW2y+yhKKYG4dgUQAAAABJRU5ErkJggg=="
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAP1BMVEUAAAAyMjI4ODg0NDQwMDAzMzM0NDQyMjI0NDQ0NDQzMzMzMzM0NDQyMjIzMzMzMzMzMzMzMzMzMzMyMjIzMzN7GW8iAAAAFHRSTlMA3yBAIL+/X4AwEK/Pf59Qz++QcMO4VXEAAAFXSURBVFjD7djbjoQgDIDhloMj4Ooc+v7PutmJSS+KGSydjRf8936JWsQAo9GoufRTUNM9zg6Oy4U6Wg9ph9QVOmOX5VyFV+qu1FxHBiWQzRbwDLJI75bkFKX78bNY+GYU+f31gWyfCaeDw4CvDvuI0X8B3uivmz28EMumMO3drGFk2RZ+EcumMMwsK2CF3A9LuR+Wsi0s5X5YyjrYP2M9YlkDb9TQpoCxBX6chwM15U7DuQ3Op2GILe4K7fCZf9opqOY4+Q+562+mRrDzH0oqODeMRckKeKWGIlxngXxtScOjxcUrfTbhxtdP9Z5eN8cs/9guECn3w1K2haXcD0vZFJZyPyzlly3MMhrDLNvCLC+2MMubPQx+wslffzMd8Jdgr4PT8agXendPTpFf9j3sPw/0kgUcoFLpd1eolbHXxQDVAhq7LK89bslwXJinBTWVOcFoNGrtF+oLrFTomDKtAAAAAElFTkSuQmCC"
    }, function(e, t, o) {
        var map = {
            "./5-m-dark.png": 381,
            "./5-m.png": 382
        };

        function n(e) {
            var t = r(e);
            return o(t)
        }

        function r(e) {
            if (!o.o(map, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return map[e]
        }
        n.keys = function() {
            return Object.keys(map)
        }, n.resolve = r, e.exports = n, n.id = 380
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAPFBMVEUAAADv8//v8/7v9P7v9P/v8v7w9P7v8/7v///v7//v8//v8v/v8v3v9P/v8/3v9P7v8/3v9P/v8//v8/5NvLbpAAAAE3RSTlMAQL/fIGCg7xAQr1BwMIDPkI9/vcihdAAAAf9JREFUWMPt10GSrCAQBFCBAltUtMf73/X34scQkjMmUM7O3GIT7YOSYnjy5MmTe/MyZviDmPd4HC7cPPfrazv+x3m5bdbZHqdYfxcBJJMoCDCchBNgkERPYCMh6SKwaRoG8Y6QNBKM+/c/W4NDkl4CM50e8YSkngBCSOoIII0kwgk+oSQC846coIZkLGfeGUEtyV6Mh9NoNC2VdPppKIdLrUXqKqm0gAVM7fv+5XEbLQNmjvBYMI2V9OsibweS1BEcdpnIIhMSICDbiJA0EjSR1BM0k3QScBJO0EOiICAkagIkUROY4IWQZAIombf5BfRrPJUDkAABHD7uLThk6ck4BxjAkonl6wQ4GTtbkFSMb1gOfS2IKx6JpKVkBNmiXDrHW0okwDjBLWVJSwkE1dUoucqABAgwY1qvSuT4KaNNs5FPVp/iz7OSgz2TkFACToLhBI0klQScRE3ASfQESKIk4CRIoI8s9tw5y3BbJrOk8MnuzdRzwbWKe+wSvVx9WuPctcgWvlj42XRh7b8dO7k8mjYv9QTnXRPJ0ZRJGEGR7eLWBCSE4PJyM2VjSpIJMFZIl0ZIjG3q6HzUHE3WTOQOi3FxMat8hmVeAsxKbshAQkIIOAmGEzSSNBJwEj0BkigIKImagJPoCbCX3/KsbgcC3dk0+5S8X6fhyZMn6vwD3y2WFsKpnfkAAAAASUVORK5CYII="
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAP1BMVEUAAAA0NDQzMzM0NDQyMjIzMzMzMzM0NDQzMzMzMzNAQEAwMDAzMzMzMzMyMjI1NTUzMzM0NDQ0NDQzMzMzMzPNLjLEAAAAFHRSTlMAQN8gYKDvv7+AEBCvUHAwkI/Pz9h664oAAAIASURBVFjD7dfNkoMgEARgYUAl4E+yvv+zbg5bS2lvbGDcm33FUKkPBobuzp07d67Nw5juH2Ke/bZZf/Hcj/C1/cQ6uWzWadx2Gd1VBJBMoiDAcBJOgEESPcGQCEkTwRBi14mzhKSSoF9//9niLZK0Epi4+8QRknICCCEpI4BUkggneIeSCMzbc4ISkv4488oISknWw7jfjSZTU0m7n/rj8FFrlrJKOlrAAob6ff9wuI3mDjMl+Mybykr6uMivjZBkAph1jmSRCQkQkG1ESCoJqkjKCapJGgk4CSdoIVEQEBI1AZKoCYx38oGEEjzC03wADf2uHIAECODysU/BoZHejJOHASyZFE/PY+uktQUJh/EXlkNbC2K7fRJpKRlBtjguneUtJRJgrOCWGkhLCQTF1Si5yoAECDB9WM5KZPsr/RgmI+8sLqS/ZyUXeyYhoQScBMMJKkkKCTiJmoCT6AmQREnASZBAH5mHfecs3WWJZg7+ndWZ2PLAHRXv2Dk5OTta09S0yCOcWHhsWr+0v46tnF5NX07KCfYnaCJXUyZhBIe8Tl5NQEIITh83MRtTkkyAGYR1aZmEEvCOziXN1TSYSN6wGJtms8h7WKbZw6zkhQwkJISAk2A4QSVJJQEn0RMgiYKAkqgJOImeAHv5V57VrkCgu5smF4JzS+zu3LmjzjdxwJ4So65dEgAAAABJRU5ErkJggg=="
    }, function(e, t, o) {
        var map = {
            "./build-dark.png": 384,
            "./build.png": 385
        };

        function n(e) {
            var t = r(e);
            return o(t)
        }

        function r(e) {
            if (!o.o(map, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return map[e]
        }
        n.keys = function() {
            return Object.keys(map)
        }, n.resolve = r, e.exports = n, n.id = 383
    }, function(e, t, o) {
        e.exports = o.p + "img/build-dark.319aef4.png"
    }, function(e, t, o) {
        e.exports = o.p + "img/build.99acb85.png"
    }, function(e, t, o) {
        var map = {
            "./6-m-dark.png": 387,
            "./6-m.png": 388
        };

        function n(e) {
            var t = r(e);
            return o(t)
        }

        function r(e) {
            if (!o.o(map, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return map[e]
        }
        n.keys = function() {
            return Object.keys(map)
        }, n.resolve = r, e.exports = n, n.id = 386
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAARVBMVEUAAADv8/7v8//v9P7v9P/v8/7v7//v8/7v8//v9P7v8/7v8/7v9P7v8//v8/3x9P/v8v/v8vzv9Pzv///v9P/v8v/v8/7veMb1AAAAFnRSTlMAgCDfMO8QoEBwz7/PsJBfUFBgEI9gHt9rvgAAAh5JREFUWMPt2OFygjAQBOAkJAGKIFXk/R+1tJlxWxc9csYfHbk/7QzNV7XrnsXs805zHhvzijmGea58edeFeZkQi8Pt/DOn4nCf4LY4/JHgpjg8p4mlXZ/cYErPZ4K74rBN8GCW2UPxklA0yT2UVRGKvjg8JNg+/cyn+m/bdAkev6/VU/NUaCfza0KCvTHTE4/cUrTinOb6V7Q6F4cpFLiodXEWLd+n71QyTs6OQtEa45Yvqnf3cTnCS6jDq365/sBR57aroVimhaxx7f2Wt/myh/ug5SEHv9EN5HLLs6x30fIq2ZHLLa+RXcUutzzLldvqDttW/0Cy4NZbV38NWedyKFjWuWj5XBnu4dHq93wBsuBGg+GW5yuQV06eD+SKq5/lj5jtouWzZLiV06x+V0HOzAyHgmV+Sl520fKS7PlNhcfDE6XP8uOa4YSWQig6uW0dvcbYMzmhwDbDu1aWueUzXZallpddlm3uZ/mWXKpFyFLL80FUqixzy8vHZFlueT6UKyMU4hFZFkPBBxQyhUJyH8m10PJiROVQ4h88djNu5VwgU8vrXJb7eL/lzx254owBi4ZanpZZaGQR5QqZVj9cVLhGXg9Frgu5wqZZafmLwsVyRBIG/iyP5auVTwhFg7DD1cnpLIci4ppG7pYC9rctj9/aOaOd6O63fIz7bbx/cBtvv7d7G4qxOFxTyxe9B1uZ8mNROIXHNd7s8z7zBX2mdPyp7vzjAAAAAElFTkSuQmCC"
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAQlBMVEUAAAAzMzMzMzM0NDQzMzMwMDAzMzMzMzM0NDQ0NDQwMDAzMzMzMzMzMzM4ODgzMzM0NDQzMzMzMzNAQEAzMzMzMzMpGdJuAAAAFXRSTlMAgN8w7xCgX0DPIHBQkCDPv6+/ELDn1DzQAAACGUlEQVRYw+3Y2W6DMBAFUIwXjFlCFv//r5bWVa6SwRk8dR6qMC+tRH0aNZc7Kc0xnzTX0TfvmM7E2Or67mziOsZWh4f4M111+JzgoTrcJ9hXh2MaW9vVyTVN7RkTvFSHVYKn9dsjFO8JhU9uX1dFKG7V4SnB6q+On9xj21wSPH5fc5OXuopE1iRY/752JXRJtGxMc38XlczFYRIKXBS7UZGWv6XvRDJOxkBCMTRNWL+I7u7ufrCjofDkBwTusBmKdQbIElflW16Vyxrui5aHbPRO18DNtjyV5S5aXiTPcLMtL5HnFi7f8pDbea877Vv9E5EZ1+1d/Q6y0EUosrLMRcuXynD7V6ufvv8nyIxrGwxteXoF8sbJaw+3dPVDPtliFy1fJMNtg2T1hzYjO9ZFKBj5/HBT8S5anpM1vanweujYzc/ynBGYlkIoFr5tA/kbY88UhQLbDHctL9OW511GZlqed6msSj/LD9SltQiZb3kcxHYok9Hy3LFCGS3PHuJlPhT0iEBGKLgDvMyEgnPzsuNb3jEuH0r8g1dWBMxthJaXuVQ+23zLXy/EZWc0WDSk5ckyM54XUa6QyeqHiwqXyNuhKHUht9g0Gy3fCVwsRyRhop/lsXylcodQeIQdrlRuw1YoLK5J5CXGRT+3PH7rArd07JxveWuPx3j/4DHe8Wz3ORRjddiRlq/6DLZt6o9C4VSe4HVzzOfMF/0BcHxeH/jNAAAAAElFTkSuQmCC"
    }, function(e, t, o) {
        var map = {
            "./support-dark.png": 390,
            "./support.png": 391
        };

        function n(e) {
            var t = r(e);
            return o(t)
        }

        function r(e) {
            if (!o.o(map, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return map[e]
        }
        n.keys = function() {
            return Object.keys(map)
        }, n.resolve = r, e.exports = n, n.id = 389
    }, function(e, t, o) {
        e.exports = o.p + "img/support-dark.b1751eb.png"
    }, function(e, t, o) {
        e.exports = o.p + "img/support.eb64193.png"
    }, function(e, t, o) {
        var map = {
            "./7-m-dark.png": 393,
            "./7-m.png": 394
        };

        function n(e) {
            var t = r(e);
            return o(t)
        }

        function r(e) {
            if (!o.o(map, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return map[e]
        }
        n.keys = function() {
            return Object.keys(map)
        }, n.resolve = r, e.exports = n, n.id = 392
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAPFBMVEUAAADw9P3v9f/v8/7v8/7v8/7v9P/v8/7v8//v7//v8v/v8/3v9P7v8/7v8//v9P7v8/7v8v/v///v8/43ct0tAAAAE3RSTlMAnyBwgL/f70AQMGCQz6/Pr1AQzp8ZBwAAAaBJREFUWMPt2dtuwyAMBmBjbA459MT7v+smdYk7QXoRG2Wd8t81ir4SCrgQOHPmqKB3u+Nxkx24qMIbtC/qUMulYhBfu1hMMlQw28Bs3GAJbvxy0e3LLWz0snteDgg7g/EpuDZ8gd1xb2H3j+DH3RP5O9rCD1qH+TyiHUyxvCSQEYxXQWVQ6mEMIoqsg8WtZTUcSjNzVsIkVgxzlE+kg3GFOMF3klu/Jqvg1RmrAkYquLEYjkuTNXAqcrl6iqSAfassDMtTKODpefXa7J9JAbtmhbzIvUrYmcNextpLWA/DLF1cTRrSwOCZKbdneVLB23W+ZFsYg0waQ/ghVSqZwclPt4WVO/UwVSXEBk7lV+5gBU/VnsAIdkUSR+gCM4IxLMXPHuYM0AV2cMLdYJIKagvnKEuEFSwLMQ9ddk0ZP2o71hNG7AL7WErw0GsckzWMUpxtYVpgbwy7BXbGsO/V4hx/YDSG5a+yNQwDx8jps6b0QfDlLRxxr4tB4NY4DTe3L1HGeddD0/7HvDDYN1h6+e8e0ntoBlnH8tDrBcuZMwflC5+wmpa/5TKpAAAAAElFTkSuQmCC"
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAP1BMVEUAAAAzMzMzMzM1NTUzMzMzMzMzMzMzMzM0NDQyMjI0NDQ0NDQzMzMzMzMyMjIzMzMzMzMzMzMzMzM0NDQzMzNgqmb3AAAAFHRSTlMAn6AggL/f73BwQBDPrzBgkFBvj47cC28AAAGoSURBVFjD7dnbbsIwDAbgpM45PbHl/Z91k2j5NWa4qB0xpv53RNVHiJxYKebMmVeFsj2cTA/Z2TdR/AP6o4njONc1hWRmeZtK5l+w14G98oQRuoPTNh7tsUxhA9IdPFyHA5mDoXgVLA9P5nCGp7D9R3C9ZOfyhXTh6m5lPi6kB7vYGhKcEkwjUBSlHKYAEbIEhsvJYjg0NmMVwg5WDGPEJyeDCedhMd8pw+1rqgi2u7PsIxlTlsDMYbjsU5bApTHD+2oUAZy4tjDvv0IAr1ttseuzCuCB7ZATnhXCVh1ODbWGeDlsRmaJCYUs2NLJe1f5XV4E8LM+36ouTAGbRhGu6FJFDS75c9pZPCmHHdtC5HBpP3IxWvDK3wnk8NCQuJgusCejDKP56cO+GtMFtuaE+8DY0as6XCOOCC0YB7Gfu9yaKr3VdawnTNQF/oithWx61bHThgnNWRd2O5x0YZzzVhlOvWZc4waTKoxr2KJfx7OP0Zf32tIvgqencKSjLgXAXJ2GyR5LRJ13fWna/zWvmfUnjK31d1/SJ8OGvIz1c68/WM6ceVG+AP6Oo+t4Jj8eAAAAAElFTkSuQmCC"
    }, function(e, t, o) {
        var map = {
            "./8-m-dark.png": 396,
            "./8-m.png": 397
        };

        function n(e) {
            var t = r(e);
            return o(t)
        }

        function r(e) {
            if (!o.o(map, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return map[e]
        }
        n.keys = function() {
            return Object.keys(map)
        }, n.resolve = r, e.exports = n, n.id = 395
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAP1BMVEUAAADv9f/v8/7v7//v8/7w8//v8//v9P/v8/7v9P/v8/7v9Pzv8v/w9P3v///w8//v8/7v9P7v9P/v8vzv8/7hg/9pAAAAFHRSTlMAIO8Qv19A33AwgGBQnxCvz8+PUJG+G44AAALXSURBVFjD7ZjdjuMgDIUD5jchTdv1+z/rbsoARSSAI1YjVT1XMyr55OAcYzN9sm5W3ab/IMMR9TyeK/ElMxysPZiP5jL8EfuCv+BxYCXdkXEhgOHI7E6qVj0QiKjdVEp4rjgyJUfEDargzT8uy18sfxmPnZpd1LgW8ZTMVs7FMddLNStNSe56ZKms+oOJTOWiqywDjlGqSCwrN8JhlIbOAMQbUj037avmfTN2SrqXAbfJIQK1csykDYtfd7nDbTJ4rMADrR4NJbdNfuz/MIEnmr1tErebbP0Beiq9B60Ct0vqjij2j+KJNfE9Xdav7RWArxu5ivBNWEvTA5PErF7psm7VOZmuZ4p0ZpkpROYiquYULSvSG6PmjMpl1ddlW/InUTqEZGsvRN9mGbmtFHCgBdyORyQL0gNea1ngF0IW0bUVmVgnusX6EqPJH4bsa05Mx14wr1tsAtIOtw8yFY4ur3y8SC5L7+jaqUg7ZqPR9VK613sUets0k96M8bI2gQ8wedRm40a7W3jE3ctNo9Ar4lRftmME+t+fPINY//NlMDsDq5jcpPUaWGTHYcxBnjwVtq4llTh58srCLey+iJg8kTcK/N2wwF6CrA2BzlNmyxisXQSWpkH6CyfJ0ox8opq+SivrW1YZkebRZXMSPSFLcqFPzzxrO/wTsL50mMqOw3Tw8T+nbpYk0duwLBNNttpi3TaMfT9VJps3cimdtfVErXiCVpfb2HKGQ2H8LSGTz7w+EnXbKXDHhkxY21R613vPcBPWOtI3rBrj2ONtHJO93HQubGfhziEPgUwdeaU+wqaRN5EHDOkzxPraS3aIR55SswjXCqthhfPbZNCVbx/8YZtJFX1V8+pmGXp1I+vc64+oyiImOF9ZhWyrZficy7PyXJK3+vm87U8vtCtIp/cfoFXhpQPqpSk4aT/w/vgL/n0wTIPFQws4WiaYfTxZh4FouJSF6YP1F2D2giuWauAuAAAAAElFTkSuQmCC"
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAS1BMVEUAAABAQEBAQEA6Oj06Oz07Oz06Oz04OEA5Ojw8PT08PDw6Ojo8PEA6Oz07Oz06PD07Oz46PD06Oj47PD46Oz45Oz06OkA5OT46Oz0HAvvGAAAAGHRSTlMAIBBg77/fIHBQQDBAr5+Az49/z8+gMG/LVS26AAACzklEQVRYw+1Y247jIAwN13DLpZ1tl///0p0UCqIQwNmMRqp6nlpBjoyNj22Gdwa+Gzz8AP5Sa/n1fF5iHxCnE3NHTM/mHa0H+hB/iM8jNkTiUj5bj+KiJKalB8xay2VhhTleVkpK+r0w1XVkcp+TfEXTR+Kh3WRnNV5t7S7zeKOUFXk9VFNpcub//kRaKDOxAbIWO2oDVLaIUM0SjpsGZMHA5jJxp5rrJO5DxFducJv5aYGZqU3AxdN0DHAdeSE2zBYwoxdi0h+OP487xuwOXPVjkbebWbsCugu+Ga1AV0h9h4Rtl+Jia6BbuLTb2wuMnW6kyMwXfi8Qq41gi3qES8sbT5nhiH6gC0qSgiVZBMU1Wouy8AarKQJXjOpxxynmJxD8aZIury8H3UwCbysEFMMMbtkTk245YvBciwI9YDILWVuBAOiEx9gXGA6+GKSvOREdvkAOfsuUeLhZyJT/60nS8SJmWTyjbIciekyzoKckzd6Yo7i3TRPxZCPNtQl7A0ModO+4IX2tid5LvG6sQ6AzfdEOFvDvn6lW393yYeJxj1iF4EbMx4hZUg5DDNLgmeC6BoznyYKXCzfT2yZg8FjaKFCR9mUxQXDevFdFecoSZA+8U10YQDghKT2CK6roU1pSd1llRFrOls2B9ZhMwEIfv7nUPOwN5oeKKQEU05PK/zV2syCwBvM1tvIw6GqLhYP8rgMUIpk3UhietPVA3OwOtam0sfDGW7hXQkQuJX0EjgqrrQA2KsSzrl3Djd8rQXd4YxaVcWxFGy9wzIt1Ydozd/GzdGCGjryEl2hLIy94SFe31yF9wZAhPZbHvEirhXFn6tcsUJb5bWbM6w8h2c1SSV/1U083v/HYpCqbRkbpjCrM96YMl3lpkOcy85QtZEJLCewJUvJtAbcU/tijqX7D9+MP8e8T4+FkUEALCIIAiBOQmfuB6HwojYc3xj/83ppfV7cDRwAAAABJRU5ErkJggg=="
    }, function(e, t, o) {
        var map = {
            "./9-m-dark.png": 399,
            "./9-m.png": 400
        };

        function n(e) {
            var t = r(e);
            return o(t)
        }

        function r(e) {
            if (!o.o(map, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return map[e]
        }
        n.keys = function() {
            return Object.keys(map)
        }, n.resolve = r, e.exports = n, n.id = 398
    }, function(e, t, o) {
        e.exports = o.p + "img/9-m-dark.6fe6979.png"
    }, function(e, t, o) {
        e.exports = o.p + "img/9-m.c79ed5d.png"
    }, function(e, t, o) {
        "use strict";
        o(209)
    }, function(e, t, o) {
        "use strict";
        o(210)
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAArdJREFUWEfFl8+LTmEUxz/fRihmykJJwkLIwoKU5fgxSBFZTtkbs5CEEmpEZhQK4y9goeRHKfk1s1SyEprJSpKyUGYsSB0dzqtn7vvOe+97397uqbu5z3nO+T7ne348jygoZjYX2ALsBdYBS+NzC5/jewc8BMYk/SpiWnlKZrYEOAP0Az15+rH+HbgFDEn60mzPrADMbB5wCjgKLCjoOKv2A7gMnJf0s5GNhgDi1PeAzZlNk8B94CnwMcLuKk7HcqAP2Aeszux7CexvFI06AGa2HngELEuMvAaOS3pRJBJmthUYATYm+p+A3ZLepDZmAIiTv0qc/waOAKOSrIjzmo6Zue0B4CowJ/47iE1pJP4DCM7Hk7B/Aw5IGmvFcVbXzLxy7gKLYs3p6K3lRApgCDgdSn7yHc2cm9kK4Dbg5XlQ0vvZgAaIJ0kkzknyyuIvgAj9hyTbByXdaHZyM3NqroSOl9vZHP3DwPXQ8epY5VTUAIwCh2LRE855asp5CQDuy/Orlpg3JQ0oOtzXpMlsK5LtZrYSuBMU9Et6m5crUR3Pk2a12AHsBB7HzwlJa/MMtbNuZhNJn9jlAJxrLxeXEUknijows/lAlyTntJCY2bD3lFAedQBeZr3xo0/SsyKWzGwD4I2pC9gjyUs4V8xse3RS1x13AGlI1kjydpsrZnYMuBSKFyT53MgVM/M27T5dJh3AFLAwfnRLms618q90naqLoTss6WTBfe7LfbpMZwH0SKotNrXXBoBuwMe1y1Q7FJSNQB0FZZOwLIC6JCxVhm1QUFeGpRpRGwDqGpFPszKtuGUKGrZiT0UzKzOMWgIQF5T6YRQA/Obb6XE8CFyL8ps5jgNEdReSAODX8OquZAkV1VxKa3230mt5AsKTstHDxGv4QUcfJgmI6p5m6Ris7HGancWdep7/AdJ2mOXNV7+dAAAAAElFTkSuQmCC"
    }, function(e, t, o) {
        "use strict";
        o(211)
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAMAAAD9GTxlAAAAUVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////8IN+deAAAAGnRSTlMA6OE1KibrooaemjDwjYqD9JlyFfpaH86pb9VaEwgAAAB6SURBVBjTZdBJFsMgDAPQMJkwBWjStNX9D1qyANzGu//8pIWW2z0/huslE/NDQCQ9qCtBbtPBix+ry6uZdv+m5nPaRoi8MxcQc7AHYl6YgWNSOwBDJhGKH78kEKvp2iSoaibhQ8+tlxSX6zqbaGjPrdMqNk5pYnyHji9BnAaCtCUeCQAAAABJRU5ErkJggg=="
    }, function(e, t, o) {
        "use strict";
        o(212)
    }, function(e, t, o) {
        "use strict";
        o(213)
    }, function(e, t, o) {
        "use strict";
        o.r(t), o.d(t, "state", (function() {
            return _
        })), o.d(t, "getters", (function() {
            return A
        })), o.d(t, "mutations", (function() {
            return y
        })), o.d(t, "actions", (function() {
            return v
        }));
        var n = o(3),
            r = o(70),
            c = (o(35), o(8), o(11), o(5), o(12), o(13), o(52)),
            l = o.n(c),
            d = o(27),
            m = o.n(d),
            h = o(17),
            k = o(30);

        function T(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }

        function f(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? T(Object(source), !0).forEach((function(t) {
                    Object(n.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : T(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        var _ = function() {
                return {
                    language: "",
                    clientWidth: 0,
                    newsForm: {
                        start: 0,
                        count: 20,
                        status: 0,
                        lang: "zh-Hans"
                    },
                    lang: "en",
                    newsList: [],
                    newsDate: [],
                    newsDetailData: {},
                    bannerList: [],
                    categoryList: [],
                    allBlockchainList: [],
                    categoryId: null,
                    dappForm: {
                        start: 0,
                        count: 500,
                        key: "",
                        status: 0,
                        category_id: null,
                        version: "10.0.0"
                    },
                    dappList: [],
                    downloadPlatformIndex: 0,
                    headerLayoutHeight: 0,
                    deviceSize: "web",
                    tokenProtocolMap: null,
                    isDarkMode: !1,
                    queryObj: null
                }
            },
            A = {
                language: function(e) {
                    return e.language
                },
                lang: function(e) {
                    return e.lang
                },
                clientWidth: function(e) {
                    return e.clientWidth
                },
                newsList: function(e) {
                    return e.newsList
                },
                newsDetailData: function(e) {
                    return e.newsDetailData
                },
                bannerList: function(e) {
                    return e.bannerList
                },
                categoryList: function(e) {
                    return e.categoryList
                },
                dappList: function(e) {
                    return e.dappList
                },
                downloadPlatformIndex: function(e) {
                    return e.downloadPlatformIndex
                },
                headerLayoutHeight: function(e) {
                    return e.headerLayoutHeight
                },
                deviceSize: function(e) {
                    return e.deviceSize
                },
                allBlockchainList: function(e) {
                    return e.allBlockchainList
                },
                tokenProtocolMap: function(e) {
                    return e.tokenProtocolMap
                },
                isDarkMode: function(e) {
                    return e.isDarkMode
                },
                queryObj: function(e) {
                    return e.queryObj
                }
            },
            y = {
                SET_LANGUAGE: function(e, t) {
                    switch (e.language = t, e.language) {
                        case "zh":
                            e.lang = "zh-Hans";
                            break;
                        case "zh-tw":
                            e.lang = "zh-Hant";
                            break;
                        case "en":
                        default:
                            e.lang = "en";
                            break;
                        case "ko":
                            e.lang = "ko";
                            break;
                        case "ru":
                            e.lang = "ru";
                            break;
                        case "es":
                            e.lang = "es";
                            break;
                        case "hi":
                            e.lang = "hi";
                            break;
                        case "fil":
                            e.lang = "fil";
                            break;
                        case "pt":
                            e.lang = "pt";
                            break;
                        case "ja":
                            e.lang = "ja";
                            break;
                        case "vi":
                            e.lang = "vi";
                            break;
                        case "th":
                            e.lang = "th"
                    }
                },
                SET_DOWNLOADPLATFORMINDEX: function(e, t) {
                    e.downloadPlatformIndex = t
                },
                SET_DARKMODE: function(e, t) {
                    e.isDarkMode = t
                },
                SET_QUERYOBJ: function(e, t) {
                    e.queryObj = t
                },
                SET_HEADERLAYOUTHEIGHT: function(e, t) {
                    e.headerLayoutHeight = t
                },
                SET_DEVICESIZE: function(e, t) {
                    e.deviceSize = t
                },
                SET_CLIENT_WIDTH: function(e, t) {
                    e.clientWidth = t
                },
                NEWS_DATE: function(e, t) {
                    t && (e.newsDate = t)
                },
                NEWS_LIST: function(e, t) {
                    Array.isArray(t.list) && (t.reset ? e.newsList = t.list : e.newsList = [].concat(Object(r.a)(e.newsList), Object(r.a)(t.list)))
                },
                NEWS_DETAIL: function(e, t) {
                    e.newsDetailData = t
                },
                BANNER_LIST: function(e, t) {
                    e.bannerList = t
                },
                CATEGORY_LIST: function(e, t) {
                    e.categoryList = t
                },
                CATEGORY_ID: function(e, t) {
                    e.dappForm.category_id = t
                },
                COUNT_START: function(e) {
                    e.dappForm.start += 40
                },
                DAPP_LIST: function(e, t) {
                    t.nextPage ? e.dappList = [].concat(Object(r.a)(e.dappList), Object(r.a)(t.list)) : e.dappList = t.list
                },
                BLOCKCHAIN_LIST: function(e, t) {
                    e.allBlockchainList = t
                },
                TOKEN_PROTOCOL_MAP: function(e, t) {
                    e.tokenProtocolMap = t
                }
            },
            v = {
                GET_NEWS_LIST: function(e, t) {
                    var o = e.commit;
                    e.state;
                    if (!t || Array.isArray(t.list)) {
                        var n = [],
                            r = [],
                            c = null;
                        t.list.forEach((function(e, t, o) {
                            e.create_time = e.create_time.replace(/[TZ]/g, " ");
                            var time = l()(e.create_time).format("YYYY-MM-DD"); - 1 === n.indexOf(time) && n.push(time), e.days = l()(e.create_time).format("MM-DD"), e.times = l()(e.create_time).format("HH:mm")
                        })), o("NEWS_DATE", n), n.forEach((function(e) {
                            c = t.list.filter((function(t) {
                                return l()(t.create_time).format("YYYY-MM-DD") === e
                            })), r.push({
                                time: e,
                                list: c
                            })
                        })), o("NEWS_LIST", {
                            list: r,
                            reset: t.reset
                        })
                    }
                },
                GET_NEWS_DETAIL: function(e, t) {
                    var o = e.commit;
                    e.state;
                    t && (t.create_time = t.create_time.replace(/[TZ]/g, " "), t.days = l()(t.create_time.substring(0, 10)).format("MM-DD"), t.times = l()(t.create_time.substring(0, t.create_time.length - 1)).format("HH:mm"), o("NEWS_DETAIL", t))
                },
                GET_ACTIVITY: function(e, t) {
                    e.commit, e.state
                },
                GET_BANNER_LIST: function(e, t) {
                    var o = e.commit,
                        n = e.state;
                    return m.a.get(k.c, {
                        params: {
                            start: 0,
                            count: 10,
                            lang: n.lang,
                            status: 0
                        }
                    }).then((function(e) {
                        if (0 === e.data.result) {
                            var t = e.data.data.filter((function(data) {
                                return -1 !== data.object.url.indexOf("http")
                            }));
                            o("BANNER_LIST", t)
                        }
                    }))
                },
                GET_CATEGORY_LIST: function(e, t) {
                    var o = e.commit,
                        n = e.state;
                    return m.a.get(k.d, {
                        params: {
                            lang: n.lang
                        }
                    }).then((function(e) {
                        if (0 === e.data.result) {
                            e.data.data.sort((function(a, b) {
                                return a.m_index - b.m_index
                            }));
                            var t = e.data.data.filter((function(data) {
                                return 0 === data.category_type
                            }));
                            o("CATEGORY_LIST", t), o("CATEGORY_ID", t[0].hid)
                        }
                    }))
                },
                GET_DAPP_LIST: function(e, t) {
                    var o = e.commit,
                        n = e.state;
                    if (t) {
                        t.nextPage && o("COUNT_START"), t.id && o("CATEGORY_ID", t.id);
                        var form = f(f({}, n.dappForm), {}, {
                            lang: n.lang
                        });
                        return m.a.get(k.e, {
                            params: form
                        }).then((function(e) {
                            if (0 === e.data.result) {
                                var n = [];
                                Array.isArray(e.data.data) && (n = e.data.data.filter((function(data) {
                                    return -1 !== data.url.indexOf("http")
                                }))), o("DAPP_LIST", {
                                    list: n,
                                    nextPage: t.nextPage
                                })
                            }
                        }))
                    }
                },
                GET_BLOCKCHAIN_LIST: function(e, t) {
                    var o = e.commit;
                    e.state;
                    Object(k.i)().then((function(e) {
                        if (0 === e.result && e.data) {
                            var t = [];
                            e.data.forEach((function(e) {
                                if (!e.deprecated) {
                                    var o = e.hid,
                                        n = e.icon_url,
                                        title = e.title,
                                        r = e.ns,
                                        c = e.metadata,
                                        l = "";
                                    c && (l = JSON.parse(c).chain_id);
                                    var d = {
                                        hid: o,
                                        icon: n,
                                        title: title,
                                        ns: r,
                                        chain_id: l
                                    };
                                    t.push(d)
                                }
                            })), localStorage.setItem("blockchainList", JSON.stringify(t)), o("BLOCKCHAIN_LIST", t)
                        }
                    })).catch((function(e) {
                        var t = Object(h.g)(localStorage.getItem("blockchainList")) || [];
                        o("BLOCKCHAIN_LIST", t), console.log(e)
                    }))
                },
                GET_TOKEN_PROTOCOL_MAP: function(e, t) {
                    var o = e.commit;
                    e.state;
                    Object(k.q)().then((function(e) {
                        if (0 === e.result && e.data) {
                            for (var t in e.data) Array.isArray(e.data[t]) && e.data[t].forEach((function(e) {
                                e.isSelected = !1, e.title = e.key
                            }));
                            localStorage.setItem("tokenProtocolMap", JSON.stringify(e.data)), o("TOKEN_PROTOCOL_MAP", e.data)
                        }
                    })).catch((function(e) {
                        var t = Object(h.g)(localStorage.getItem("tokenProtocolMap")) || null;
                        o("TOKEN_PROTOCOL_MAP", t), console.log(e)
                    }))
                }
            }
    }, , function(e, t, o) {
        "use strict";
        o(214)
    }, function(e, t, o) {
        "use strict";
        o(215)
    }],
    [
        [249, 26, 5, 27]
    ]
]);