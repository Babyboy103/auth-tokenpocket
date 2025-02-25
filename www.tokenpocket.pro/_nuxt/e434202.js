(window.webpackJsonp = window.webpackJsonp || []).push([
    [3], {
        1120: function(t, e, n) {
            "use strict";
            n.r(e);
            n(11), n(5), n(8), n(12), n(13);
            var o = n(3),
                r = (n(245), {
                    props: {
                        btnItem: {
                            type: Object
                        },
                        isSecurity: {
                            type: Boolean
                        },
                        isHeader: {
                            type: Boolean
                        }
                    },
                    methods: {
                        openUrl: function(t) {
                            t.local ? this.$router.push(t.url) : window.open(t.url, "_self")
                        }
                    }
                }),
                c = (n(671), n(2)),
                l = Object(c.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "button d-flex ai-center jc-center",
                        class: {
                            isHeader: t.isHeader
                        },
                        on: {
                            click: function(e) {
                                return t.openUrl(t.btnItem)
                            }
                        }
                    }, [n("img", {
                        staticClass: "icon",
                        attrs: {
                            src: t.btnItem.icon
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "icon-hover",
                        attrs: {
                            src: t.btnItem.iconHover
                        }
                    }), t._v(" "), n("span", {
                        class: {
                            security: t.isSecurity
                        }
                    }, [t._v(t._s(t.btnItem.text))])])
                }), [], !1, null, "4cc6339e", null).exports,
                A = n(164),
                m = n(4);

            function d(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function h(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? d(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var v = {
                    mixins: [A.a],
                    computed: h(h({}, Object(m.b)(["isDarkMode"])), {}, {
                        downloadIconImg: function() {
                            return this.isDarkMode ? n(541) : n(672)
                        },
                        keypalIconImg: function() {
                            return this.isDarkMode ? n(673) : n(674)
                        },
                        btnList: function() {
                            return [{
                                local: !0,
                                icon: this.downloadIconImg,
                                iconHover: n(541),
                                text: this.$t("HOME.download"),
                                url: this.$i18n.path("/download/app")
                            }, {
                                icon: this.keypalIconImg,
                                iconHover: n(675),
                                text: "KeyPal",
                                url: "zh" === this.$i18n.locale ? "https://www.keypal.pro/?locale=zh" : "https://www.keypal.pro/?locale=en"
                            }]
                        }
                    })
                },
                f = n(54),
                O = {
                    components: {
                        Button: l
                    },
                    mixins: [v, f.a],
                    computed: {
                        mainZHImg: function() {
                            return n(676)("./header-img-zh".concat(this.darkModeImg, ".png"))
                        },
                        mainENImg: function() {
                            return n(679)("./header-img-en".concat(this.darkModeImg, ".png"))
                        },
                        mainMobileZHImg: function() {
                            return n(682)("./header-img-zh".concat(this.darkModeImg, ".png"))
                        },
                        mainMobileENImg: function() {
                            return n(685)("./header-img-en".concat(this.darkModeImg, ".png"))
                        }
                    }
                },
                header = (n(688), Object(c.a)(O, (function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "HomeHeader",
                        class: {
                            chinese: "zh" === t.$i18n.locale
                        }
                    }, [o("div", {
                        staticClass: "content d-flex ai-center jc-between"
                    }, [o("div", {
                        staticClass: "content-left flex-1"
                    }, [o("div", {
                        staticClass: "title",
                        class: {
                            chinese: "zh" === t.$i18n.locale || "zh-tw" === t.$i18n.locale
                        }
                    }, [t._v("\n        " + t._s(t.$t("HOME.HEADER.title")) + "\n      ")]), t._v(" "), o("div", {
                        staticClass: "desc"
                    }, [t._v("\n        " + t._s(t.$t("HOME.HEADER.desc_1")) + "\n      ")]), t._v(" "), o("div", {
                        staticClass: "buttons d-flex"
                    }, t._l(t.btnList, (function(t, e) {
                        return o("Button", {
                            key: e,
                            attrs: {
                                btnItem: t,
                                isHeader: 0 === e
                            }
                        })
                    })), 1)]), t._v(" "), "zh" === t.$i18n.locale || "zh-tw" === t.$i18n.locale ? o("img", {
                        staticClass: "main-img",
                        attrs: {
                            src: t.mainZHImg
                        }
                    }) : o("img", {
                        staticClass: "main-img",
                        attrs: {
                            src: t.mainENImg
                        }
                    }), t._v(" "), "zh" === t.$i18n.locale || "zh-tw" === t.$i18n.locale ? o("img", {
                        staticClass: "main-img-mobile",
                        attrs: {
                            src: t.mainMobileZHImg
                        }
                    }) : o("img", {
                        staticClass: "main-img-mobile",
                        attrs: {
                            src: t.mainMobileENImg
                        }
                    })]), t._v(" "), o("img", {
                        staticClass: "header-bg-img",
                        attrs: {
                            src: n(670)
                        }
                    })])
                }), [], !1, null, "7dfcd392", null).exports),
                w = n(535),
                C = n(476),
                E = {
                    components: {
                        Button: l
                    },
                    mixins: [C.a, v, f.a],
                    computed: {
                        securityZHImg: function() {
                            return n(689)("./security-img-zh".concat(this.darkModeImg, ".png"))
                        },
                        securityENImg: function() {
                            return n(692)("./security-img-en".concat(this.darkModeImg, ".png"))
                        }
                    }
                },
                k = (n(695), Object(c.a)(E, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "HomeSecurity"
                    }, [n("div", {
                        staticClass: "content d-flex ai-center jc-between"
                    }, ["zh" === t.$i18n.locale || "zh-tw" === t.$i18n.locale ? n("img", {
                        staticClass: "main-img",
                        attrs: {
                            src: t.securityZHImg
                        }
                    }) : n("img", {
                        staticClass: "main-img",
                        attrs: {
                            src: t.securityENImg
                        }
                    }), t._v(" "), n("div", {
                        ref: "security",
                        staticClass: "content-right flex-1"
                    }, [n("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("HOME.SECURITY.title")))]), t._v(" "), n("div", {
                        staticClass: "desc desc1"
                    }, [t._v("\n        " + t._s(t.$t("HOME.SECURITY.desc_1")) + "\n      ")]), t._v(" "), n("div", {
                        staticClass: "desc"
                    }, [t._v("\n        " + t._s(t.$t("HOME.SECURITY.desc_2")) + "\n      ")]), t._v(" "), n("div", {
                        staticClass: "desc"
                    }, [t._v("\n        " + t._s(t.$t("HOME.SECURITY.desc_3")) + "\n      ")]), t._v(" "), n("div", {
                        staticClass: "buttons d-flex"
                    }, t._l(t.btnList, (function(t, e) {
                        return n("Button", {
                            key: e,
                            attrs: {
                                btnItem: t,
                                isSecurity: ""
                            }
                        })
                    })), 1)])])])
                }), [], !1, null, "c1c74d10", null).exports),
                M = n(10),
                _ = (n(69), {
                    props: {
                        item: {
                            type: Object
                        },
                        flag: {
                            type: Boolean
                        }
                    }
                }),
                I = (n(696), Object(c.a)(_, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("a", {
                        staticClass: "box-item d-flex ai-center jc-between",
                        attrs: {
                            href: t.item.url,
                            target: "_blank"
                        }
                    }, [n("div", {
                        staticClass: "box-left d-flex ai-center"
                    }, [t.item.titleImg ? n("img", {
                        attrs: {
                            src: t.item.titleImg
                        }
                    }) : t._e(), t._v(" "), t.item.title ? n("span", [t._v(t._s(t.item.title))]) : t._e(), t._v(" "), t.flag ? n("span", [t._v(t._s(t.item.desc))]) : t._e()]), t._v(" "), n("div", {
                        staticClass: "box-right d-flex ai-center"
                    }, [!t.flag && t.item.desc ? n("span", [t._v(t._s(t.item.desc))]) : t._e(), t._v(" "), n("img", {
                        attrs: {
                            src: t.item.icon
                        }
                    })])])
                }), [], !1, null, "59ce48af", null).exports),
                x = {
                    props: {
                        msgList: {
                            type: Array
                        }
                    },
                    methods: {
                        goRoutePath: function(t) {
                            t.url ? window.open(t.url) : t.routePath && this.$router.push(t.routePath)
                        }
                    }
                },
                B = (n(697), Object(c.a)(x, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "message-box d-flex ai-center jc-between"
                    }, t._l(t.msgList, (function(e, o) {
                        return n("div", {
                            key: o,
                            staticClass: "item d-flex ai-center jc-center flex-1",
                            class: {
                                border: o !== t.msgList.length, pointer: e.url || e.routePath
                            },
                            on: {
                                click: function(n) {
                                    return t.goRoutePath(e)
                                }
                            }
                        }, [n("div", {
                            staticClass: "d-flex flex-column ai-center",
                            class: {
                                "item-wrap": e.titleImg_hover
                            }
                        }, [e.title ? n("div", {
                            staticClass: "title"
                        }, [t._v(t._s(e.title))]) : t._e(), t._v(" "), e.titleImg ? n("img", {
                            staticClass: "title-img",
                            attrs: {
                                src: e.titleImg
                            }
                        }) : t._e(), t._v(" "), e.titleImg_hover ? n("img", {
                            staticClass: "title-img title-img-hover",
                            attrs: {
                                src: e.titleImg_hover
                            }
                        }) : t._e(), t._v(" "), n("div", {
                            staticClass: "desc-wrap d-flex ai-center"
                        }, [n("span", [t._v(t._s(e.desc))]), t._v(" "), e.icon ? n("img", {
                            staticClass: "icon",
                            attrs: {
                                src: e.icon
                            }
                        }) : t._e(), t._v(" "), e.icon_hover ? n("img", {
                            staticClass: "icon-hover",
                            attrs: {
                                src: e.icon_hover
                            }
                        }) : t._e()])])])
                    })), 0)
                }), [], !1, null, "67a21646", null).exports),
                y = n(108),
                D = {
                    components: {
                        MessageBox: B,
                        BoxItem: I
                    },
                    mixins: [C.a, y.a, f.a],
                    data: function() {
                        return {
                            usdtNumber: "",
                            intervalId: "",
                            priceError: !1
                        }
                    },
                    computed: {
                        exchangeImg: function() {
                            return n(698)
                        },
                        msgList: function() {
                            return [{
                                title: this.$t("HOME.EXCHANGE.desc_5"),
                                desc: this.$t("HOME.EXCHANGE.desc_6"),
                                icon: n(473),
                                url: "zh" === this.$i18n.locale ? "https://swap.transit.finance/?locale=zh#/" : "https://swap.transit.finance/?locale=en#/"
                            }, {
                                title: this.$t("HOME.EXCHANGE.desc_9"),
                                desc: this.$t("HOME.EXCHANGE.desc_10"),
                                icon: n(473),
                                url: this.TPCardUrl
                            }, {
                                title: this.$t("HOME.EXCHANGE.desc_7"),
                                desc: this.$t("HOME.EXCHANGE.desc_8"),
                                icon: n(473),
                                url: this.transitBuyUrl
                            }]
                        }
                    },
                    created: function() {},
                    methods: {
                        getPriceUsd: function() {
                            var t = this;
                            return Object(M.a)(regeneratorRuntime.mark((function e() {
                                var data, n, o;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, data = [{
                                                address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                                                blockchain_id: 1
                                            }], e.next = 4, fetch("https://preserver.mytokenpocket.vip/v1/swap_market/market_optional", {
                                                method: "post",
                                                body: JSON.stringify(data),
                                                headers: {
                                                    "Content-Type": "application/json"
                                                }
                                            });
                                        case 4:
                                            return n = e.sent, e.next = 7, n.json();
                                        case 7:
                                            0 === (o = e.sent).result && o.data && (t.usdtNumber = 10 * o.data[0].price_usd), e.next = 14;
                                            break;
                                        case 11:
                                            e.prev = 11, e.t0 = e.catch(0), t.priceError = !0;
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 11]
                                ])
                            })))()
                        },
                        getExchangePrice: function() {
                            var t = this;
                            return Object(M.a)(regeneratorRuntime.mark((function e() {
                                var n, o;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.priceError = !1, e.prev = 1, e.next = 4, fetch("https://aggserver.mytokenpocket.vip/v3/transit/swap?token0=0x0000000000000000000000000000000000000000&token1=0xdac17f958d2ee523a2206206994597c13d831ec7&decimal0=18&decimal1=6&impact=300&part=10&amountIn=10000000000000000000&amountOutMin=0&to=0x959E1d86982BDD541cBB8a36bd74693249f088f2&chain=ETH&issuer=0x959E1d86982BDD541cBB8a36bd74693249f088f2&channel=web");
                                        case 4:
                                            return n = e.sent, e.next = 7, n.json();
                                        case 7:
                                            0 === (o = e.sent).result && o.data && (t.usdtNumber = o.data.totalAmountOut / 1e6), e.next = 14;
                                            break;
                                        case 11:
                                            e.prev = 11, e.t0 = e.catch(1), t.priceError = !0;
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 11]
                                ])
                            })))()
                        }
                    }
                },
                P = (n(699), Object(c.a)(D, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "HomeExchange"
                    }, [n("div", {
                        staticClass: "content d-flex ai-center jc-between"
                    }, [n("div", {
                        ref: "exchange",
                        staticClass: "content-left"
                    }, [n("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("HOME.EXCHANGE.title")))]), t._v(" "), n("div", {
                        staticClass: "desc desc1"
                    }, [t._v("\n        " + t._s(t.$t("HOME.EXCHANGE.desc_1")) + "\n      ")]), t._v(" "), n("div", {
                        staticClass: "desc desc2"
                    }, [t._v("\n        " + t._s(t.$t("HOME.EXCHANGE.desc_2")) + "\n      ")]), t._v(" "), n("div", {
                        staticClass: "message-box-wrap"
                    }, [n("MessageBox", {
                        attrs: {
                            msgList: t.msgList
                        }
                    })], 1), t._v(" "), n("div", {
                        staticClass: "box-item-wrap"
                    }, t._l(t.msgList, (function(t) {
                        return n("BoxItem", {
                            key: t.title,
                            attrs: {
                                item: t
                            }
                        })
                    })), 1)]), t._v(" "), n("div", {
                        staticClass: "main-img-wrap"
                    }, [n("img", {
                        attrs: {
                            src: t.exchangeImg
                        }
                    })])])])
                }), [], !1, null, "0d9f4594", null).exports),
                U = {
                    components: {
                        MessageBox: B
                    },
                    mixins: [C.a, f.a],
                    computed: {
                        dappStoreImg: function() {
                            return n(700)("./dapp-store-img".concat(this.darkModeImg, ".png"))
                        },
                        msgList: function() {
                            return [{
                                title: this.$t("HOME.DAPPSTORE.desc_3"),
                                desc: this.$t("HOME.DAPPSTORE.desc_6")
                            }, {
                                title: this.$t("HOME.DAPPSTORE.desc_4"),
                                desc: this.$t("HOME.DAPPSTORE.desc_6")
                            }, {
                                title: this.$t("HOME.DAPPSTORE.desc_5"),
                                desc: this.$t("HOME.DAPPSTORE.desc_6"),
                                icon: n(473),
                                routePath: this.$i18n.path("/dappstore")
                            }]
                        }
                    }
                },
                T = (n(703), Object(c.a)(U, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "HomeDappStore"
                    }, [n("div", {
                        staticClass: "content d-flex ai-center jc-between"
                    }, [n("img", {
                        staticClass: "main-img",
                        attrs: {
                            src: t.dappStoreImg
                        }
                    }), t._v(" "), n("div", {
                        ref: "dapp-store",
                        staticClass: "content-right flex-1"
                    }, [n("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("HOME.DAPPSTORE.title")))]), t._v(" "), n("div", {
                        staticClass: "desc desc1"
                    }, [t._v("\n        " + t._s(t.$t("HOME.DAPPSTORE.desc_1")) + "\n      ")]), t._v(" "), n("div", {
                        staticClass: "desc"
                    }, [t._v("\n        " + t._s(t.$t("HOME.DAPPSTORE.desc_2")) + "\n      ")]), t._v(" "), n("div", {
                        staticClass: "message-box-wrap"
                    }, [n("MessageBox", {
                        attrs: {
                            msgList: t.msgList
                        }
                    })], 1)])])])
                }), [], !1, null, "09c1263a", null).exports),
                H = n(160);

            function N(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function j(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? N(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : N(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var S = {
                    name: "HomeEcology",
                    mixins: [H.a],
                    data: function() {
                        return {}
                    },
                    computed: j(j({}, Object(m.b)(["language"])), {}, {
                        mobileBgImg: function() {
                            return "zh" === this.language ? n(548) : n(549)
                        },
                        phoneBgImg: function() {
                            return "zh" === this.language ? n(548) : n(549)
                        },
                        ecologyMethod: function() {
                            return [{
                                text: this.$t("HOME.ECOLOGY.staking"),
                                img: n(704)
                            }, {
                                text: this.$t("HOME.ECOLOGY.mining"),
                                img: n(705)
                            }, {
                                text: this.$t("HOME.ECOLOGY.DeFi"),
                                img: n(706)
                            }, {
                                text: this.$t("HOME.ECOLOGY.cryptoGame"),
                                img: n(707)
                            }]
                        }
                    }),
                    methods: {
                        goLink: function(t) {
                            t.url && window.open(t.url)
                        }
                    }
                },
                R = (n(708), Object(c.a)(S, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "HomeEcology"
                    }, [n("div", {
                        staticClass: "container"
                    }, [n("main", {
                        staticClass: "row",
                        staticStyle: {
                            "align-items": "center"
                        }
                    }, [n("div", {
                        staticClass: "ecology-l col-lg-7"
                    }, [n("h2", [t._v(t._s(t.$t("HOME.ECOLOGY.title")))]), t._v(" "), n("div", {
                        staticClass: "ecology-text"
                    }, [n("p", [t._v(t._s(t.$t("HOME.ECOLOGY.desc_1")))]), t._v(" "), n("p", [t._v(t._s(t.$t("HOME.ECOLOGY.desc_2")))]), t._v(" "), n("p", [t._v(t._s(t.$t("HOME.ECOLOGY.desc_3")))])]), t._v(" "), n("h2", [t._v(t._s(t.$t("HOME.ECOLOGY.joinUs")))]), t._v(" "), n("div", {
                        staticClass: "ecology-join"
                    }, [n("a", {
                        staticClass: "pointer",
                        attrs: {
                            href: t.$i18n.path("/project/dapp"),
                            target: "_self"
                        },
                        on: {
                            click: function(e) {
                                t.localLink(t.$i18n.path("/project/dapp"), e)
                            }
                        }
                    }, [t._v(t._s(t.$t("HOME.ECOLOGY.subDApp")))]), t._v(" "), n("a", {
                        staticClass: "pointer",
                        attrs: {
                            href: t.$i18n.path("/project/token"),
                            target: "_self"
                        },
                        on: {
                            click: function(e) {
                                t.localLink(t.$i18n.path("/project/token"), e)
                            }
                        }
                    }, [t._v(t._s(t.$t("HOME.ECOLOGY.subToken")))])]), t._v(" "), n("h2", [t._v(t._s(t.$t("HOME.ECOLOGY.ways")))]), t._v(" "), n("div", {
                        staticClass: "ecology-methods clearfix"
                    }, t._l(t.ecologyMethod, (function(e, o) {
                        return n("div", {
                            key: o,
                            staticClass: "ecology-methods-item"
                        }, [n("img", {
                            attrs: {
                                src: e.img,
                                alt: t.$t("COMMON.LAYOUT.ethWallet")
                            }
                        }), t._v(" "), n("p", [t._v(t._s(e.text))])])
                    })), 0)]), t._v(" "), n("div", {
                        staticClass: "ecology-r col-lg-5"
                    }, [n("img", {
                        staticClass: "ecology-mobile",
                        attrs: {
                            src: t.mobileBgImg,
                            alt: t.$t("COMMON.LAYOUT.ETHWallet")
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "ecology-pc",
                        attrs: {
                            src: t.phoneBgImg,
                            alt: t.$t("COMMON.LAYOUT.ETHWallet")
                        }
                    })])])])])
                }), [], !1, null, "410083af", null).exports),
                L = {
                    components: {
                        MessageBox: B,
                        BoxItem: I
                    },
                    mixins: [C.a, f.a],
                    computed: {
                        communityImg: function() {
                            return n(709)("./community-img".concat(this.darkModeImg, ".png"))
                        },
                        communityMobileImg: function() {
                            return n(712)("./community-img".concat(this.darkModeImg, ".png"))
                        },
                        developerUrl: function() {
                            return "zh" === this.$i18n.locale ? "https://help.tokenpocket.pro/developer-cn/" : "https://help.tokenpocket.pro/developer-en/"
                        },
                        msgList: function() {
                            return [{
                                titleImg: n(715)("./TP-Lab".concat(this.darkModeImg, ".png")),
                                titleImg_hover: n(551),
                                desc: this.$t("HOME.COMMUNITY.desc_2"),
                                icon: n(473),
                                icon_hover: n(478),
                                url: "https://github.com/TP-Lab"
                            }, {
                                titleImg: n(718)("./discord".concat(this.darkModeImg, ".png")),
                                titleImg_hover: n(552),
                                desc: this.$t("HOME.COMMUNITY.desc_3"),
                                icon: n(473),
                                icon_hover: n(478),
                                url: "https://discord.com/invite/NKPM8TXFQk"
                            }, {
                                titleImg: n(721)("./Dev-Docs".concat(this.darkModeImg, ".png")),
                                titleImg_hover: n(553),
                                desc: this.$t("HOME.COMMUNITY.desc_4"),
                                icon: n(473),
                                icon_hover: n(478),
                                url: this.developerUrl
                            }]
                        }
                    }
                },
                V = (n(724), Object(c.a)(L, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "HomeCommunity"
                    }, [n("div", {
                        staticClass: "content d-flex ai-center jc-between"
                    }, [n("div", {
                        ref: "community",
                        staticClass: "content-left"
                    }, [n("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("HOME.COMMUNITY.title")))]), t._v(" "), n("div", {
                        staticClass: "desc"
                    }, [t._v("\n        " + t._s(t.$t("HOME.COMMUNITY.desc_1")) + "\n      ")]), t._v(" "), n("div", {
                        staticClass: "message-box-wrap"
                    }, [n("MessageBox", {
                        attrs: {
                            msgList: t.msgList
                        }
                    })], 1), t._v(" "), n("div", {
                        staticClass: "box-item-wrap"
                    }, t._l(t.msgList, (function(t) {
                        return n("BoxItem", {
                            key: t.title,
                            attrs: {
                                item: t,
                                flag: !0
                            }
                        })
                    })), 1)]), t._v(" "), n("img", {
                        staticClass: "main-img",
                        attrs: {
                            src: t.communityImg
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "main-img-mobile",
                        attrs: {
                            src: t.communityMobileImg
                        }
                    })])])
                }), [], !1, null, "223cde11", null).exports),
                z = {
                    name: "HomeGrowth",
                    mixins: [H.a]
                },
                Q = (n(725), Object(c.a)(z, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "HomeGrowth"
                    }, [n("div", {
                        staticClass: "container"
                    }, [n("h2", [t._v(t._s(t.$t("HOME.GROWTH.title")))]), t._v(" "), n("div", {
                        staticClass: "growth-main"
                    }, [n("div", {
                        staticClass: "growth-items"
                    }, [n("div", {
                        staticClass: "growth-item"
                    }, [n("div", {
                        staticClass: "growth-item-content growth-item-top"
                    }, [n("h4", {
                        staticClass: "growth-item-time"
                    }, [t._v("2017-12")]), t._v(" "), n("p", {
                        staticClass: "growth-item-desc"
                    }, [t._v(t._s(t.$t("HOME.GROWTH.desc_1")))])]), t._v(" "), t._m(0)]), t._v(" "), n("div", {
                        staticClass: "growth-item"
                    }, [n("div", {
                        staticClass: "growth-item-content growth-item-bottom"
                    }, [n("h4", {
                        staticClass: "growth-item-time"
                    }, [t._v("2018-06")]), t._v(" "), n("p", {
                        staticClass: "growth-item-desc"
                    }, [t._v(t._s(t.$t("HOME.GROWTH.desc_2")))])]), t._v(" "), t._m(1)]), t._v(" "), n("div", {
                        staticClass: "growth-item"
                    }, [t._m(2), t._v(" "), n("div", {
                        staticClass: "growth-item-content growth-item-top"
                    }, [n("h4", {
                        staticClass: "growth-item-time"
                    }, [t._v("2018-08")]), t._v(" "), n("p", {
                        staticClass: "growth-item-desc"
                    }, [t._v(t._s(t.$t("HOME.GROWTH.desc_3")))])])]), t._v(" "), n("div", {
                        staticClass: "growth-item"
                    }, [n("div", {
                        staticClass: "growth-item-content growth-item-bottom"
                    }, [n("h4", {
                        staticClass: "growth-item-time"
                    }, [t._v("2019-01")]), t._v(" "), n("p", {
                        staticClass: "growth-item-desc"
                    }, [t._v(t._s(t.$t("HOME.GROWTH.desc_4")))])]), t._v(" "), t._m(3)]), t._v(" "), n("div", {
                        staticClass: "growth-item"
                    }, [t._m(4), t._v(" "), n("div", {
                        staticClass: "growth-item-content growth-item-top"
                    }, [n("h4", {
                        staticClass: "growth-item-time important-date"
                    }, [t._v("2019-04")]), t._v(" "), n("p", {
                        staticClass: "growth-item-desc"
                    }, [t._v(t._s(t.$t("HOME.GROWTH.desc_5")))])])]), t._v(" "), n("div", {
                        staticClass: "growth-item"
                    }, [t._m(5), t._v(" "), n("div", {
                        staticClass: "growth-item-content growth-item-bottom"
                    }, [n("h4", {
                        staticClass: "growth-item-time"
                    }, [t._v("2019-08")]), t._v(" "), n("p", {
                        staticClass: "growth-item-desc"
                    }, [t._v(t._s(t.$t("HOME.GROWTH.desc_6")))])])]), t._v(" "), n("div", {
                        staticClass: "growth-item"
                    }, [n("div", {
                        staticClass: "growth-item-content growth-item-top"
                    }, [n("h4", {
                        staticClass: "growth-item-time important-date"
                    }, [t._v("2019-10")]), t._v(" "), n("p", {
                        staticClass: "growth-item-desc"
                    }, [t._v(t._s(t.$t("HOME.GROWTH.desc_7")))])]), t._v(" "), t._m(6)]), t._v(" "), n("div", {
                        staticClass: "growth-item"
                    }, [t._m(7), t._v(" "), n("div", {
                        staticClass: "growth-item-content growth-item-bottom"
                    }, [n("h4", {
                        staticClass: "growth-item-time"
                    }, [t._v("2019-11")]), t._v(" "), n("p", {
                        staticClass: "growth-item-desc"
                    }, [t._v(t._s(t.$t("HOME.GROWTH.desc_8")))])])]), t._v(" "), n("div", {
                        staticClass: "growth-item"
                    }, [n("div", {
                        staticClass: "growth-item-content growth-item-top"
                    }, [n("h4", {
                        staticClass: "growth-item-time"
                    }, [t._v("2019-12")]), t._v(" "), n("p", {
                        staticClass: "growth-item-desc"
                    }, [t._v(t._s(t.$t("HOME.GROWTH.desc_9")))])]), t._v(" "), t._m(8)]), t._v(" "), n("div", {
                        staticClass: "growth-item"
                    }, [t._m(9), t._v(" "), n("div", {
                        staticClass: "growth-item-content growth-item-bottom"
                    }, [n("h4", {
                        staticClass: "growth-item-time"
                    }, [t._v("2020-05")]), t._v(" "), n("p", {
                        staticClass: "growth-item-desc"
                    }, [t._v(t._s(t.$t("HOME.GROWTH.desc_10")))])])]), t._v(" "), n("div", {
                        staticClass: "growth-item"
                    }, [n("div", {
                        staticClass: "growth-item-content growth-item-top"
                    }, [n("h4", {
                        staticClass: "growth-item-time"
                    }, [t._v("2020-07")]), t._v(" "), n("p", {
                        staticClass: "growth-item-desc"
                    }, [t._v(t._s(t.$t("HOME.GROWTH.desc_11")))])]), t._v(" "), t._m(10)]), t._v(" "), n("div", {
                        staticClass: "growth-item"
                    }, [n("div", {
                        staticClass: "growth-item-content growth-item-bottom"
                    }, [n("h4", {
                        staticClass: "growth-item-time"
                    }, [t._v("2020-09")]), t._v(" "), n("p", {
                        staticClass: "growth-item-desc"
                    }, [t._v(t._s(t.$t("HOME.GROWTH.desc_13")))])]), t._v(" "), t._m(11)]), t._v(" "), n("div", {
                        staticClass: "growth-item"
                    }, [n("div", {
                        staticClass: "growth-item-content growth-item-top"
                    }, [n("h4", {
                        staticClass: "growth-item-time"
                    }, [t._v("2020-12")]), t._v(" "), n("p", {
                        staticClass: "growth-item-desc"
                    }, [t._v(t._s(t.$t("HOME.GROWTH.desc_15")))])]), t._v(" "), t._m(12)])])]), t._v(" "), n("div", {
                        staticClass: "growth-partner text-center"
                    }, [n("a", {
                        staticClass: "pointer",
                        attrs: {
                            href: t.$i18n.path("/partner"),
                            target: "_self"
                        },
                        on: {
                            click: function(e) {
                                t.localLink(t.$i18n.path("/partner"), e)
                            }
                        }
                    }, [t._v("\n          " + t._s(t.$t("HOME.GROWTH.ourPartner")) + "\n          "), n("i", {
                        staticClass: "partner-icon-right"
                    })])])])])
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", [e("i")])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", [e("i")])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", [e("i")])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", [e("i")])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", [e("i")])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", [e("i")])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", [e("i")])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", [e("i")])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", [e("i")])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", [e("i")])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", [e("i")])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", [e("i")])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", [e("i")])
                }], !1, null, "6cabb8ae", null).exports),
                G = {
                    name: "HomeNews",
                    data: function() {
                        return {
                            elImgWidth: 0
                        }
                    },
                    computed: {
                        newsList: function() {
                            return {
                                zh: [{
                                    img: n(726),
                                    url: "https://www.jinse.com/news/blockchain/967202.html",
                                    time: "2020-12",
                                    title: "TokenPocket荣获年度区块链百强企业奖与“2020最受用户信任钱包”奖"
                                }, {
                                    img: n(727),
                                    url: "https://mp.weixin.qq.com/s/51yIpsM7uHuoCDrls_nd4Q",
                                    time: "2020-11",
                                    title: "TokenPocket上线Eth 2.0 Staking产品质押宝"
                                }, {
                                    img: n(728),
                                    url: "https://mp.weixin.qq.com/s/L_4fO7hCNQpW1LiRcMut6g",
                                    time: "2020-09",
                                    title: "TokenPocket已全面支持币安智能链"
                                }, {
                                    img: n(729),
                                    url: "https://github.tokenpocket.pro/BlockchainGuide-TRON/#/",
                                    time: "2020-08",
                                    title: "由TokenPocket联合波场TRON官方，以及志愿者共同撰写的《波场钱包的现在过去与未来》已正式上线"
                                }, {
                                    img: n(730),
                                    url: "https://weibo.com/ttarticle/p/show?id=2309404537869862830262",
                                    time: "2020-08",
                                    title: "联合创始人兼CTO陈达做客虎符AMA"
                                }],
                                en: [{
                                    img: n(556),
                                    url: "https://tokenpocket-gm.medium.com/tokenpocket-won-the-annual-blockchain-top-100-enterprise-award-and-2020-most-trusted-wallet-award-3fdf703a9dd6",
                                    time: "2020-12",
                                    title: "TokenPocket won the Annual Blockchain Top 100 Enterprise Award and 2020 Most Trusted Wallet Award"
                                }, {
                                    img: n(557),
                                    url: "https://tokenpocket-gm.medium.com/eth2-0-staking-vault-is-officially-launched-with-an-estimated-apy-of-5-20-6e3f8be7f97a",
                                    time: "2020-11",
                                    title: "TokenPocket launches Eth 2.0 Staking Vault"
                                }, {
                                    img: n(558),
                                    url: "https://tokenpocket-gm.medium.com/binances-defi-breakthrough-the-binance-smart-chain-faed55c0cec4",
                                    time: "2020-09",
                                    title: "TokenPocket has fully supported Binance Smart Chain"
                                }, {
                                    img: n(559),
                                    url: "https://github.tokenpocket.pro/BlockchainGuide-TRON-EN/#/",
                                    time: "2020-08",
                                    title: "《The Present, Past and Future of TRON Wallet》co-written by TokenPocket, TRON official and volunteers, has been officially launched"
                                }, {
                                    img: n(560),
                                    url: "https://organixprotocol.medium.com/ama-with-hoo-com-organix-101-how-eos-defi-excels-as-a-latecomer-d2d506542d36",
                                    time: "2020-08",
                                    title: "Co-founder and CTO Chen Da participated in the Hoo AMA"
                                }],
                                ko: [{
                                    img: n(556),
                                    url: "https://tokenpocket-gm.medium.com/tokenpocket-won-the-annual-blockchain-top-100-enterprise-award-and-2020-most-trusted-wallet-award-3fdf703a9dd6",
                                    time: "2020-12",
                                    title: "토큰포켓은 블록체인 상위 100대 기업상과 2020년 가장 신뢰할 수 있는 지갑상을 수상"
                                }, {
                                    img: n(557),
                                    url: "https://tokenpocket-gm.medium.com/eth2-0-staking-vault-is-officially-launched-with-an-estimated-apy-of-5-20-6e3f8be7f97a",
                                    time: "2020-11",
                                    title: "토큰포켓이 이더리움 2.0 스테이킹 볼트 출시"
                                }, {
                                    img: n(558),
                                    url: "https://tokenpocket-gm.medium.com/binances-defi-breakthrough-the-binance-smart-chain-faed55c0cec4",
                                    time: "2020-09",
                                    title: "토큰포켓 바이낸스 스마트 체인 완전 지원"
                                }, {
                                    img: n(559),
                                    url: "https://github.tokenpocket.pro/BlockchainGuide-TRON-EN/#/",
                                    time: "2020-08",
                                    title: "토큰포켓이 공동 집필한 《트론 지갑의 현재, 과거, 미래》가 공식 출시"
                                }, {
                                    img: n(560),
                                    url: "https://organixprotocol.medium.com/ama-with-hoo-com-organix-101-how-eos-defi-excels-as-a-latecomer-d2d506542d36",
                                    time: "2020-08",
                                    title: "토큰포켓 공동 창립자 겸 CTO Chen Da, Hoo AMA 참여"
                                }]
                            }[this.$i18n.locale]
                        }
                    },
                    methods: {
                        goNewsDetail: function(t) {
                            window && window.open(t)
                        }
                    },
                    mounted: function() {
                        window && this.$nextTick((function() {
                            new(n(668))(".swiper-container", {
                                slidesPerView: 3,
                                paginationClickable: !0,
                                spaceBetween: 20
                            })
                        }))
                    }
                },
                K = (n(731), Object(c.a)(G, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "HomeNews"
                    }, [n("div", {
                        staticClass: "container"
                    }, [n("h2", [t._v(t._s(t.$t("HOME.NEWS.title")))]), t._v(" "), n("main", {
                        staticClass: "news-main"
                    }, [n("div", {
                        staticClass: "swiper-container"
                    }, [n("div", {
                        staticClass: "swiper-wrapper"
                    }, t._l(t.newsList, (function(e, o) {
                        return n("div", {
                            key: o,
                            staticClass: "swiper-slide pointer",
                            on: {
                                click: function(n) {
                                    return t.goNewsDetail(e.url)
                                }
                            }
                        }, [n("img", {
                            staticClass: "news-poster",
                            staticStyle: {
                                width: "100%"
                            },
                            attrs: {
                                src: e.img,
                                alt: t.$t("COMMON.LAYOUT.defiWallet")
                            }
                        }), t._v(" "), n("h5", {
                            staticClass: "news-time"
                        }, [t._v(t._s(e.time))]), t._v(" "), n("p", {
                            staticClass: "news-desc"
                        }, [t._v(t._s(e.title))])])
                    })), 0)]), t._v(" "), n("div", {
                        staticClass: "news-sm"
                    }, t._l(t.newsList, (function(e, o) {
                        return n("div", {
                            key: o,
                            staticClass: "pointer",
                            on: {
                                click: function(n) {
                                    return t.goNewsDetail(e.url)
                                }
                            }
                        }, [n("img", {
                            staticClass: "news-poster",
                            staticStyle: {
                                width: "100%"
                            },
                            attrs: {
                                src: e.img,
                                alt: t.$t("COMMON.LAYOUT.defiWallet")
                            }
                        }), t._v(" "), n("h5", {
                            staticClass: "news-time"
                        }, [t._v(t._s(e.time))]), t._v(" "), n("p", {
                            staticClass: "news-desc"
                        }, [t._v(t._s(e.title))])])
                    })), 0)])])])
                }), [], !1, null, "636e185f", null).exports);

            function F(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function Z(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? F(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : F(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var Y = {
                    name: "HomeFollow",
                    components: {
                        Modal: n(234).a
                    },
                    data: function() {
                        return {
                            show: !1,
                            url: "false"
                        }
                    },
                    computed: Z(Z({}, Object(m.b)(["language"])), {}, {
                        followImgList: function() {
                            return [{
                                class: "follow-1",
                                url: "https://twitter.com/TokenPocket_TP"
                            }, {
                                class: "follow-2",
                                isTelegram: !0,
                                url: "zh" === this.language ? "https://t.me/tokenPocket_cn" : "ko" === this.language ? "https://t.me/tokenpocket_kor" : "https://t.me/tokenpocket_en"
                            }, {
                                class: "follow-8",
                                url: "https://www.youtube.com/channel/UCudaS5hcbqUaMtOGHmQ2e0A"
                            }, {
                                class: "follow-4",
                                url: "https://github.com/TP-Lab"
                            }, {
                                class: "follow-5",
                                url: "https://fans.tokenpocket.pro/"
                            }, {
                                class: "follow-6",
                                url: "https://tokenpocket-gm.medium.com/"
                            }]
                        }
                    }),
                    methods: {
                        openFollow: function(t) {
                            t.isTelegram ? (this.show = !0, this.url = t.url) : window.open(t.url)
                        },
                        close: function() {
                            this.show = !1
                        }
                    }
                },
                J = (n(732), Object(c.a)(Y, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "HomeFollow"
                    }, [n("div", {
                        staticClass: "container"
                    }, [n("h2", {
                        staticClass: "text-center"
                    }, [t._v(t._s(t.$t("HOME.FOLLOW.title")))]), t._v(" "), n("div", {
                        staticClass: "follow-logo"
                    }, [t._l(t.followImgList, (function(e, o) {
                        return n("div", {
                            key: o,
                            staticClass: "follow-logo-item"
                        }, [n("span", {
                            class: [e.class],
                            on: {
                                click: function(n) {
                                    return t.openFollow(e)
                                }
                            }
                        })])
                    })), t._v(" "), t._m(0)], 2)]), t._v(" "), t.show ? n("Modal", {
                        attrs: {
                            url: t.url
                        },
                        on: {
                            close: t.close
                        }
                    }) : t._e()], 1)
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "follow-logo-item"
                    }, [e("a", {
                        staticClass: "follow-7",
                        attrs: {
                            href: "mailto:service@tokenpocket.pro",
                            target: "_blank"
                        }
                    })])
                }], !1, null, "62e96600", null).exports),
                W = n(536),
                X = n(17);

            function $(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function tt(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? $(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : $(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var et = {
                    scrollToTop: !1,
                    components: {
                        HomeHeader: header,
                        HomeIntroduction: w.a,
                        HomeSecurity: k,
                        HomeExchange: P,
                        HomeDappStore: T,
                        HomeEcology: R,
                        HomeCommunity: V,
                        HomeGrowth: Q,
                        HomeNews: K,
                        HomeFollow: J,
                        HomeDownload: W.a
                    },
                    head: function() {
                        return {
                            title: this.$t("SEO.title"),
                            meta: [{
                                hid: "description",
                                name: "description",
                                content: this.$t("SEO.description")
                            }, {
                                hid: "keywords",
                                name: "keywords",
                                content: this.$t("SEO.keywords")
                            }, {
                                hid: "og:title",
                                property: "og:title",
                                content: this.$t("SEO.title")
                            }, {
                                hid: "og:site_name",
                                property: "og:site_name",
                                content: this.$t("SEO.title")
                            }, {
                                hid: "og:description",
                                property: "og:description",
                                content: this.$t("SEO.description")
                            }, {
                                hid: "twitter:title",
                                property: "twitter:title",
                                content: this.$t("SEO.title")
                            }, {
                                hid: "twitter:description",
                                property: "twitter:description",
                                content: this.$t("SEO.description")
                            }]
                        }
                    },
                    mixins: [A.a],
                    computed: tt(tt({}, Object(m.b)(["queryObj"])), {}, {
                        homeBg: function() {
                            return this.$i18n.locale, n(563)
                        },
                        extensionModalImg: function() {
                            return "zh" === this.$i18n.locale ? n(733) : n(734)
                        },
                        extensionModalImgM: function() {
                            return "zh" === this.$i18n.locale ? n(735) : n(736)
                        },
                        btnText: function() {
                            return this.$t("HOME.EXTENSIONMODAL.btnText")
                        },
                        downloadUrl: function() {
                            return "zh" == this.$i18n.locale ? "https://chrome.google.com/webstore/detail/tokenpocket/mfgccjchihfkkindfppnaooecgfneiii?hl=zh-CN" : "https://chrome.google.com/webstore/detail/tokenpocket/mfgccjchihfkkindfppnaooecgfneiii?hl=en-us"
                        },
                        needAlert: function() {
                            return "zh" === this.$i18n.locale
                        }
                    }),
                    data: function() {
                        return {
                            isClosed: !1
                        }
                    },
                    created: function() {
                        Object(X.b)({
                            theme: ""
                        })
                    },
                    mounted: function() {},
                    methods: {
                        getTime: function() {
                            var t = "";
                            if (window && (t = JSON.parse(window.localStorage.getItem("lastTimeData"))), t) {
                                var e = (Date.now() - Number(t.time)) / 864e5;
                                parseInt(e) >= 3 && 1 === t.count ? this.onOpen(2) : parseInt(e) >= 7 && 2 === t.count ? this.onOpen(3) : parseInt(e) >= 15 && 3 === t.count ? this.onOpen(4) : parseInt(e) >= 30 && 4 === t.count && this.onOpen(5)
                            } else this.onOpen(1)
                        },
                        onOpen: function(t) {
                            var e = {
                                count: t,
                                time: Date.now()
                            };
                            window && window.localStorage.setItem("lastTimeData", JSON.stringify(e));
                            var n = "";
                            this.isMobile ? (n = "onshow-mobile", this.$modal.show("extension-panel-m")) : (n = "onshow", this.$modal.show("extension-panel")), setTimeout((function() {
                                window._hmt && window._hmt.push(["_trackEvent", "showExtensionModal", n])
                            }), 3e3)
                        },
                        onClose: function() {
                            var t = "";
                            t = this.isMobile ? "onclose-mobile" : "onclose", this.$modal.hide("extension-panel-m"), this.$modal.hide("extension-panel"), window._hmt && window._hmt.push(["_trackEvent", "closeExtensionModal", t])
                        },
                        onDownload: function() {
                            var t = "";
                            t = this.isMobile ? "onuse-mobile" : "onuse", window.open(this.downloadUrl), this.onClose(), window._hmt && window._hmt.push(["_trackEvent", "clickUse", t])
                        }
                    }
                },
                nt = (n(737), Object(c.a)(et, (function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "home layout"
                    }, [o("div", {
                        staticClass: "header-bg"
                    }, [o("HeaderLayout", {
                        attrs: {
                            "nav-title-color": "#000",
                            "arrow-class": "icon-down-333",
                            "arrow-up-class": "icon-up-333",
                            "lang-class": "icon-earth-mini"
                        }
                    }), t._v(" "), o("HomeHeader")], 1), t._v(" "), o("modal", {
                        attrs: {
                            name: "notice-panel",
                            classes: "notice-modal",
                            width: "90%",
                            height: "575",
                            maxWidth: 620,
                            adaptive: !0
                        }
                    }, [o("p", {
                        staticClass: "title-bold"
                    }, [o("b", [t._v("致中国境内用户：TokenPocket 产品政策调整说明")])]), t._v(" "), o("p", [t._v("\n      为响应监管要求，TokenPocket将于2021年11月5日起，发布新版本，新版本将对中国大陆IP进行以下第三方的应用移除，包括但不限于：\n    ")]), t._v(" "), o("p", [t._v("\n      DAPP：DEX 币币兑换"), o("br"), t._v("\n      Staking：流动性挖矿"), o("br"), t._v("\n      借贷、衍生品等第三方DApps\n    ")]), t._v(" "), o("p", [t._v("\n      同时将整体下架DeFi数据板块，以及市场、资讯页面。TokenPocket仍继续保留钱包的基础服务功能，转账、收款、DApp浏览器等功能可继续使用，此过程对用户的资产安全没有任何影响。TokenPocket将致力于区块链技术产业落地，持续努力做好数字钱包的工作。\n    ")]), t._v(" "), o("p", {
                        staticClass: "title-red"
                    }, [t._v("\n      目前市场上出现诸多下载TokenPocket国际版的诈骗行文，TokenPocket在此严正声明，TokenPocket没有“国际版本”，请广大用户谨防上当受骗。\n    ")]), t._v(" "), o("p", [t._v("TokenPocket基金会")]), t._v(" "), o("div", {
                        staticClass: "close-btn",
                        on: {
                            click: function(e) {
                                return t.$modal.hide("notice-panel")
                            }
                        }
                    }, [t._v("知道了")])]), t._v(" "), o("modal", {
                        attrs: {
                            name: "extension-panel",
                            classes: "extension-content",
                            height: "520",
                            width: "880"
                        },
                        on: {
                            closed: t.onClose
                        }
                    }, [o("img", {
                        attrs: {
                            src: t.extensionModalImg
                        }
                    }), t._v(" "), o("div", {
                        staticClass: "desc-right"
                    }, [o("div", {
                        staticClass: "title-wrap"
                    }, [o("div", {
                        staticClass: "title"
                    }, [t._v("TokenPocket")]), t._v(" "), o("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("HOME.EXTENSIONMODAL.title")))])]), t._v(" "), o("div", {
                        staticClass: "desc-wrap"
                    }, [o("div", {
                        staticClass: "desc"
                    }, [t._v(t._s(t.$t("HOME.EXTENSIONMODAL.desc1")))]), t._v(" "), o("div", {
                        staticClass: "desc"
                    }, [t._v(t._s(t.$t("HOME.EXTENSIONMODAL.desc2")))])]), t._v(" "), o("div", {
                        staticClass: "use-now",
                        on: {
                            click: t.onDownload
                        }
                    }, [t._v("\n        " + t._s(t.btnText) + "\n      ")])]), t._v(" "), o("img", {
                        staticClass: "close",
                        attrs: {
                            src: n(485)
                        },
                        on: {
                            click: function(e) {
                                return t.onClose()
                            }
                        }
                    })]), t._v(" "), o("modal", {
                        attrs: {
                            name: "extension-panel-m",
                            classes: "extension-content extension-content-mobile",
                            height: "auto",
                            width: "314"
                        },
                        on: {
                            closed: t.onClose
                        }
                    }, [o("img", {
                        attrs: {
                            src: t.extensionModalImgM
                        }
                    }), t._v(" "), o("div", {
                        staticClass: "desc-right"
                    }, [o("div", {
                        staticClass: "title-wrap"
                    }, [o("div", {
                        staticClass: "title"
                    }, [t._v("\n          TokenPocket " + t._s(t.$t("HOME.EXTENSIONMODAL.title")) + "\n        ")])]), t._v(" "), o("div", {
                        staticClass: "desc-wrap"
                    }, [o("div", {
                        staticClass: "desc"
                    }, [t._v(t._s(t.$t("HOME.EXTENSIONMODAL.desc1")))]), t._v(" "), o("div", {
                        staticClass: "desc"
                    }, [t._v(t._s(t.$t("HOME.EXTENSIONMODAL.desc2")))])]), t._v(" "), o("div", {
                        staticClass: "use-now",
                        on: {
                            click: t.onDownload
                        }
                    }, [t._v("\n        " + t._s(t.btnText) + "\n      ")]), t._v(" "), o("img", {
                        staticClass: "close",
                        attrs: {
                            src: n(669)
                        },
                        on: {
                            click: function(e) {
                                return t.onClose()
                            }
                        }
                    })])]), t._v(" "), o("HomeIntroduction"), t._v(" "), o("HomeSecurity"), t._v(" "), o("HomeExchange"), t._v(" "), o("HomeDappStore"), t._v(" "), o("HomeCommunity"), t._v(" "), o("HomeDownload"), t._v(" "), o("footer-layout")], 1)
                }), [], !1, null, null, null));
            e.default = nt.exports
        },
        473: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAhFBMVEUAAACDg4icnqKbnqKTlZmIi5CLjI+KjI6IiIxxcXFSUlKbnqKbnaKbnaKam6GXmZ6Vl5uUl5yWmJyTlZqMjZGOj5OJio+cnaGZnKCZm6CYmp+YmZ6TlJqTlZmXmJ2Ymp6Rk5eLjZKMjJKLkZObnqOUlZqTlJqXm56Ym519fYKeoKWcnqMLgRUyAAAAKnRSTlMAG+/1ck4wKBINBvrp5OLJuJSAd1hAN/Ha0s/Dp6OchnxlVCPFsK6Mii3dkjOXAAAAq0lEQVQ4y8XSWRKCMBRE0QQCishonBVx1sf+96fNBl5/KPT3raTqJOa/821MdU4kjJjwJiIBc2Yj3+VWD22Oskj0Mg5QHoy+S4ryRJQLwRxRvhCmBNLsISTSdEcjZSzSikby3e+RnjTSvUeasEgNEW4RVvrVJbq5fnWFLlxyPN1Z/5U9eK0/4RrdUe2uGbp9wsFs7OAwLQnjR4IxJQODFQwMVlMwWOTeZrh9AHauHYvYzQKSAAAAAElFTkSuQmCC"
        },
        476: function(t, e, n) {
            "use strict";
            n(486);
            e.a = {
                data: function() {
                    return {
                        intersectionObserver: null
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$nextTick((function() {
                        t.initIntersectionObserver()
                    }))
                },
                beforeDestroy: function() {
                    this.intersectionObserver.disconnect()
                },
                methods: {
                    initIntersectionObserver: function() {
                        var t = this;
                        this.intersectionObserver = new IntersectionObserver((function(t) {
                            t.forEach((function(t) {
                                t.intersectionRatio >= .3 ? "milestones-mobile-item first-milestones-mobile-item" === t.target._prevClass || "milestones-mobile-item last-milestones-mobile-item" === t.target._prevClass ? t.target.parentNode.parentNode.classList.add("enter-animation") : t.target.classList.add("enter-animation") : 0 === t.intersectionRatio && t.target.classList.remove("enter-animation")
                            }))
                        }), {
                            threshold: [0, .3]
                        }), this.$refs && Object.values(this.$refs).forEach((function(e) {
                            Array.isArray(e) || "milestones-mobile-list" === e._prevClass || "milestones-year-list" === e._prevClass || "milestones-list" === e._prevClass || t.intersectionObserver.observe(e), Array.isArray(e) && e.length && ("milestones-mobile-item first-milestones-mobile-item" === e[0]._prevClass || "milestones-mobile-item last-milestones-mobile-item" === e[0]._prevClass) && t.intersectionObserver.observe(e[0])
                        }))
                    }
                }
            }
        },
        477: function(t, e, n) {},
        478: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAjVBMVEUAAAAofvspfvskZtAofvone/Une/Yldu4kceAibt4YbcsWPo8nfvkoffknfPcmeO4nePAmevEkc+Mkbt4kbdogc+UfcOMofvsoffYmeO8md+0md+0ofPQodekjct4mZtMVVaone/QnevQme/EnefIoevQnfPQkcuUldOsleu8ldOMmd+8iZswkc9spgP6SLLgPAAAALnRSTlMA/O8b9dHId1ZODwbp5OKilIBAODEnIPHauq+nhnNlFAzDw7WYjIp/dG9aLy0qEAblCQAAAKVJREFUOMvV0lkSgjAQhOGQYBRUFkVxF/d97n88bS8wzYNS9PNXlao/Y367++VBuatIGDHQi4gtCJjKZ4nToUsgfazLwkIujb5eALkiZFewNSHPgAERqb8QMlLcYSNNh2ykcdlkpFPNSC820lGH2y/M9KfncIOJCjO4cETm2ZDBc/0LLVxKHsW+4sLMXPvDlHXC7CoVHpgwmGfCYDkVBotuT/O/vQE+jx92MmYrIAAAAABJRU5ErkJggg=="
        },
        479: function(t, e, n) {},
        485: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAG1BMVEUAAADY2Njb29vY2NjX19fa2trY2NjY2NjX19dgydn0AAAACHRSTlMAtgevgVlOvfaSeR8AAACvSURBVDjLzdM9DsIwDAVgBBLMMDG2nICRCyBxAAZGRkauUPVH79gdXmS3fbK8Vc1kN/naJrF3a433d5YenyU4oa0mz/cP/Bl9gMtkogZ6Ri+gqRxcgY7hDyQGMDA8gMQA7hY7qblKEl/kmQBLBVi+AE4EGBFQyK0AIWcFJCBQIoDEgRIFOqGvSj+uv5tuUI8kPUQ99vSi9GrTYtDyCQsuLNGwqMM2CBsnbLWwObc6RhYBiCNnxyl6AAAAAElFTkSuQmCC"
        },
        495: function(t, e, n) {
            var map = {
                "./founded-in-dark.png": 496,
                "./founded-in.png": 497
            };

            function o(t) {
                var e = r(t);
                return n(e)
            }

            function r(t) {
                if (!n.o(map, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return map[t]
            }
            o.keys = function() {
                return Object.keys(map)
            }, o.resolve = r, t.exports = o, o.id = 495
        },
        496: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAAaVBMVEUAAAAwZ74waL8wZ74waL4wZr4wbL8wZr0wZ74wZ74waL4wZ70wZr8waL8wZr8wZ77///9kjc7l7PdKesaXs95+oNZ9oNaxxuc9ccLy9fvL2e+kveOKqdpxl9KYs9+Ys97Y4/O+z+uKqduheYlwAAAAD3RSTlMA3yDPYO8QcL+vn5CPQHBI3OMfAAACtElEQVR42u3c2XLiMBBAUXnBLAlpLTHIC4SZ///IGbYxkjwRFLa7K/R9pHg4pbYipyqRuC2dr5IZTNosW85T0V++AKSyXIStE0As8UnFOyD3XjgPTwboJemNJwECdaKChAcgu04N/fm59n7Z7kCm9QlEZGDHEmILBJD/BRHY8V0LIVIgVSrmQKq5WAKpVrQeIYBEzIBUMwHEYhCDGOTFoFgMisWgWAyKxaBYDLo72/6q5OE3PNGAILWv5bmDhQcbHGRVU8muBh5oeJBt60q6WbizIUDhoMIU3NPgILvbVj5Fo4FMOKiqbq3CAalGS1/TKAsACCBbhoOqv04EDFBZy55BAQAOyNb9g0IDNX2DQgSZYFDIoNIdFD7o86S5DIoMSMM5BjHox4FU6WSwQQfptccFlTLIooI+Q5BBBSnH4n+uDQSNDIIvz1MpB7oHv/G3vXFytn3fIiH+HOpdJAIgqRV0UQBJ2VjowgT9+71Eb6ALEaTMVl7aGujCPFxL7S7S+CBrnHwQ+Is0Lig8O/TGA/mLNDJoJ/0q64KCRSJxuCpnkSZdofD1wzvzDnZUENT3vqAZfR3buCBQu8grbLBIFqi85F8WaUcGBEYe2zCIQQx6BLSrtVNtPJA6f+GwmwZkpJ92Qd0XVAfCPFy7w66dBNTGDtcOtJkEZLXvaZyRdV/QZhIQmHbr1AavsOX5c/uq255BDGIQgxjEoG/aV3K4quZpUCOHbf8sqBoYVP040OfAoOZZEDSDPtRf0Ndr/B0jg/4Tg2IxKBaDYjEoFoNiMSgWg2IxKNYLgMj9ezuhSzaOZWIFpFrSu0SC3DUbYgGEyihe1UJpnyXi2BrIlItTb0CkN3GuIHI7SlJQvVSLhihLxU0F+nP0Vgi3HPfqurUIyzNAapGL/tKPZTb19YfJ6sN5eP4AH73AdNck9LkAAAAASUVORK5CYII="
        },
        497: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAAV1BMVEUAAABdn/9fn/9dn/9en/9dn/9dn/9dn/9gn/9dn/9doP9dn/9dn/9eoP9dn/////+Ft//r8/9xq/+uz/+aw//C2/9npf/1+f/X5/+41f+kyf+Qvf/h7f+fMAF3AAAADnRSTlMA3yBgz++QcBC/r59Az0rqYOwAAAKgSURBVHja7dzZcqMwEIVhgXG85mgBi83v/5wzHuMhkpiRU2DUFfd/mfLFV91gSFUi8bV8d8q2WLVtcdzlYrrNAYkqNiLsnCFhmU/afyBxH3vn4imQvCz/4slAoFG0J+EBisfWkl8/jz6G2x1kOotbRBZ2KyM2IOD2dUTgjh87CJGDVLnYgVQ7cQSpTrQuISATW5BqK0AsBjGIQV4MisWgWAyKxaBYDIrFoKezXVPLa4cZLQhSZSPvXS3mNR9kVVvLsRYzmgUaF+VmMaMZoGFRYQrPtDjI9pfap+hkIBMuqm46q9KAVKulr2mVBZAAZKtwUU15JyQAVY2cWBSANCDbTC8qGaidWlRCkAkWlRhUuYtKDyr/aIZFkQFp3GMQg34cSFVOJjXoKr3KtKBKBtmkoDIEmaQg5Vj8n2uDoNeCwhHVyoGW8Hv9bW+cAAcUDinh99DkkAiApFYYowCSsrUYSwn6+3uJrjCUFqTMRQ5dDIYSP1wr7Q7p9SBrnHwQgiGt/MWoKw/kD+nFoF761dYFBUMi8XBVzpDWnVD4+uHKr/alIDTPvqAZ/Vjba0FQfeQVNhiSBZWX/GFIPRkQjLxVMYhBDPoOqG+0U2M8kLp/4NqvAzLST7ug8QNqBKV8uPbyUbcKqIs9XEdQtQrIat/TOisbP6DNKiCY7uLUBa+w1f3n9l1vewYxiEEMYhCD/gep5XLV7WxQK5etnAuqFwbVPw5ULgxq54LQLnpRl5jqPf6OkUH/iEGxGBSLQbEYFItBsRgUi0GxGBTrDUDk/r2d0CEbtwpxAqmO9A6RIHfMhjiAUAXFo1oo3WeZuHUGmTY0D0QSeyKno2R7qodq0RAVOeWD2X63SXt03VmEbT6RqMNGTJfvjp9rH3+YndzjD38BZIFvXaOeBb0AAAAASUVORK5CYII="
        },
        498: function(t, e, n) {
            var map = {
                "./users-dark.png": 499,
                "./users.png": 500
            };

            function o(t) {
                var e = r(t);
                return n(e)
            }

            function r(t) {
                if (!n.o(map, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return map[t]
            }
            o.keys = function() {
                return Object.keys(map)
            }, o.resolve = r, t.exports = o, o.id = 498
        },
        499: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAXVBMVEUAAAAwZr4wZ74waL8waL4wZ74wZ74wZ78wbL8waL0wZ78wZr0wZ77///9kjc5KesaYs9/l7Pc9ccLy9ftXg8qkveOxxueKqdpwl9LY4/N+oNbL2e+LqtqLqdq+z+sEgCihAAAADHRSTlMA73Agv7/fnxCAf4CiAgeDAAACEElEQVRo3u2a226jMBBAgYQkTcceMObabP//M7e+oKHbJZXcGbWpfJ5OlIgDDMVIpYhcrvUJ2Cjr6lBsOdTAznmTqEoQoKyKyBWEuMb9BzEqf/5LEKN0cziDIPXbAYAoF5qADM/FEUSpixJEORUgTA7kQA7kQA78sgBqbVfnD2DTqTfaASFgLHIGxk6tNCHYOmMLNCpAhd4bQ4C2T4wuEIwngMrRNZMeW28IgMEMS2Bw25qNb83OGzKWgNvZFoMbN+2OjCNg17NN80AyhoB2G9IQmfwnMq7A9DGnuQL4bpqj+2TJOIbcbS5I9BPfGEMgTHNGp2Z2PpCxBDDc50Y9Nd6U/0MLxhKAmyLiPPpgj3Kz2xa6P3HYzjgXnCHc3RqEiDbcS6bVmmb6kIu+XMCg1VvQcAZ036oPzPRwseCXAuZV7RAS2DlLD2CrdohrXB8sIUDb3y8YgCZaYmBQjpd+mfSWpQnhAcAEe00LoHL854aw7rkmSwoM8Ya2W+id3bwlBe4uWS/uS7KUgNk/gPX6MWQJAT+CBXZY/IJGlhC491gSn4osGWuAviX7sYGb3mFkCuzzAAH7ecD636VeRdCrT+jj71JvFWD1XSxErP3hi34OvCcHciAHAHLgGwInEKWU/2fpE4hSFRcQ5VDInqOz+EsD4q89OOTm/Cz/6snK4QzsHP95P6c6Mh7G6fh0KQJ/AermsvwnYe3YAAAAAElFTkSuQmCC"
        },
        500: function(t, e, n) {
            t.exports = n.p + "img/users.b9e99c8.png"
        },
        501: function(t, e, n) {
            var map = {
                "./contries-dark.png": 502,
                "./contries.png": 503
            };

            function o(t) {
                var e = r(t);
                return n(e)
            }

            function r(t) {
                if (!n.o(map, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return map[t]
            }
            o.keys = function() {
                return Object.keys(map)
            }, o.resolve = r, t.exports = o, o.id = 501
        },
        502: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAXVBMVEUAAAAwZr4wZ74wZ74waL8wZ74wZ74wZ78wbL8wZ77///9kjc7l7PdKesaxxuc9ccJXg8qkvePL2e/Y4/OKqdry9ft9oNZxl9K+0OuYs95+oNZxltLY4vOXs9+Ys9+N6OICAAAACXRSTlMA779wIIDfnxC1qPNnAAACwElEQVRo3u2a23arIBCG1RxhOHpKdO/2/R+zCWKGKLnoCBddy/8qbbr4mPkHGKyF1/VUnVkyldXhWIQ6Viy5LgHiULIMKg+F14ll0snPn2WTi+FYsmwqnz5cWEZVjwBYVl1zOYA+VyyrqqJkWXUuWGbtgB2wA3bA3wNIAwCSoRIC9M023KtRN50YAPeOv0tBQgDUPKJaJgJoyz9IyRQAI16pt+0N4KaQIOR2QN/5hLR6JvJA/VZA6ycPQcpcdkYfWLsN0MdGEVN2BoyBDJBTpg170zD9Vk/udIYOkCLuZOMIX/P3mgxQHypFuy/+zzOwFAAmKJqBxgHmigIiwK3f79X0v+qpcu+vKqtpAHAJ+rzuevQDSAAVK0I5zR69BRcMBaCjASjc6oJEdpoAuEVXUfccTg0tvK/1fwSAm+uqRPlDwzpSSwA0WB4fAViyBEA4MW1MsA8p9iZ3XPweIINNznaciz4SF5ogfw0A9M4Gp8v9+SFSDYYGAP8Jj8gaI1j8JR2gOErgstoKMC5Fc9qbkNJHUgREk7GccA9yAYAVolFANRnHDUjDhFAafecCyGWKWz6W02iVXdpidU1caHZqEGW7TvHAl74r2maHYpG2QvlmmLrZaWx3FxOUs9XwMl4TAOwe7xCx8DFZinpkxttoEyyGkSONdujXo4k2LYB+kw59DMFEy4trDIZLIoDZpQGYlO+g9VOMCtAiQmhwTGwtiQBmulXzK3F8IzBBFADmg3+tahSvDmOSC4jolycdNFsvIBiDR0jsUpq25k7dyLYA0Emn2l0C5x/RHSIACYp/kNWJLuIyfhGHlI8SllF0d0j+MAT3/8amfRiCkgBg/ML6mw+kdsBDO2AH7IAMKs4sq8r8/yw9saw6FFeWVccib44u2V8ayP3aQ/YXN/K/euJ1vLDkqhbv5xyqhGGcq9PVD/wDIzlNhmXZ57cAAAAASUVORK5CYII="
        },
        503: function(t, e, n) {
            t.exports = n.p + "img/contries.b51d1f5.png"
        },
        504: function(t, e, n) {
            "use strict";
            n(477)
        },
        505: function(t, e, n) {
            t.exports = n.p + "img/download-img-zh.1a7b93e.png"
        },
        506: function(t, e, n) {
            t.exports = n.p + "img/download-img-en.9e8573d.png"
        },
        507: function(t, e, n) {
            t.exports = n.p + "img/download-img-zh.bce7a85.png"
        },
        508: function(t, e, n) {
            t.exports = n.p + "img/download-img-en.1cc50af.png"
        },
        509: function(t, e, n) {
            "use strict";
            n(479)
        },
        535: function(t, e, n) {
            "use strict";
            var o = n(476),
                r = n(54),
                c = {
                    mixins: [o.a, r.a],
                    computed: {
                        usersList: function() {
                            return [{
                                icon: n(495)("./founded-in".concat(this.darkModeImg, ".png")),
                                name: this.$t("HOME.INTRODUCTION.desc_5"),
                                number: "2018"
                            }, {
                                icon: n(498)("./users".concat(this.darkModeImg, ".png")),
                                name: this.$t("HOME.INTRODUCTION.desc_2"),
                                number: "30M+"
                            }, {
                                icon: n(501)("./contries".concat(this.darkModeImg, ".png")),
                                name: this.$t("HOME.INTRODUCTION.desc_4"),
                                number: "200+"
                            }]
                        }
                    }
                },
                l = (n(504), n(2)),
                component = Object(l.a)(c, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "HomeIntroduction"
                    }, [n("div", {
                        ref: "introduction-0",
                        staticClass: "content"
                    }, [n("div", {
                        staticClass: "title"
                    }, [t._v("\n      " + t._s(t.$t("HOME.INTRODUCTION.title")) + "\n    ")]), t._v(" "), n("div", {
                        staticClass: "desc"
                    }, [t._v("\n      " + t._s(t.$t("HOME.INTRODUCTION.desc_1")) + "\n    ")]), t._v(" "), n("div", {
                        staticClass: "users d-flex ai-center jc-center"
                    }, t._l(t.usersList, (function(e, o) {
                        return n("div", {
                            key: o,
                            staticClass: "box d-flex flex-column ai-center jc-center"
                        }, [n("img", {
                            attrs: {
                                src: e.icon
                            }
                        }), t._v(" "), n("div", {
                            staticClass: "name"
                        }, [t._v(t._s(e.name))]), t._v(" "), n("div", {
                            staticClass: "number"
                        }, [t._v(t._s(e.number))])])
                    })), 0)])])
                }), [], !1, null, "0e520ca2", null);
            e.a = component.exports
        },
        536: function(t, e, n) {
            "use strict";
            var o = {
                    methods: {
                        goDownload: function() {
                            this.$router.push(this.$i18n.path("/download/app"))
                        }
                    }
                },
                r = (n(509), n(2)),
                component = Object(r.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "HomeDownload"
                    }, [o("div", {
                        staticClass: "content d-flex ai-center jc-between"
                    }, [o("div", {
                        staticClass: "content-left"
                    }, [o("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("HOME.DOWNLOAD.title")))]), t._v(" "), o("div", {
                        staticClass: "desc"
                    }, [t._v("\n        " + t._s(t.$t("HOME.DOWNLOAD.desc_1")) + "\n      ")]), t._v(" "), o("div", {
                        staticClass: "button pointer",
                        on: {
                            click: t.goDownload
                        }
                    }, [t._v("\n        " + t._s(t.$t("HOME.downloadNow")) + "\n      ")])]), t._v(" "), "zh" === t.$i18n.locale || "zh-tw" === t.$i18n.locale ? o("img", {
                        staticClass: "main-img",
                        attrs: {
                            src: n(505)
                        }
                    }) : o("img", {
                        staticClass: "main-img",
                        attrs: {
                            src: n(506)
                        }
                    }), t._v(" "), "zh" === t.$i18n.locale || "zh-tw" === t.$i18n.locale ? o("img", {
                        staticClass: "main-img-mobile",
                        attrs: {
                            src: n(507)
                        }
                    }) : o("img", {
                        staticClass: "main-img-mobile",
                        attrs: {
                            src: n(508)
                        }
                    })])])
                }), [], !1, null, "6963459d", null);
            e.a = component.exports
        },
        540: function(t, e, n) {},
        541: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMA3yCgzxDeMO+/cK+PgEBgK7ycxQAAAMRJREFUSMft1d0OgjAMhuG12xzIj73/qxWs+CVM2nmGCe8JCcmTnqxbuLLrZen+m2FZowudExUaco04JTZMJ5LyHjGJEFtGFZAaQyURVUBq1qJxSFVtCEbGA8T0URtiEgzyVFFUGVPpt3MNFIJxlG18BeMr2/gKxleGMZVvBlmaahWNmzBXK6cqGmuJH4hjIoz2EToV6kxUviD3ZYk1eqvCR42yR1laSwFRK4oBTa1oDig3jhrdLW/Y+0dPh91eDXO4+queUkIltWgboS8AAAAASUVORK5CYII="
        },
        542: function(t, e, n) {},
        543: function(t, e, n) {},
        544: function(t, e, n) {},
        545: function(t, e, n) {},
        546: function(t, e, n) {},
        547: function(t, e, n) {},
        548: function(t, e, n) {
            t.exports = n.p + "img/ecology-phone-zh.b1f25f9.png"
        },
        549: function(t, e, n) {
            t.exports = n.p + "img/ecology-phone-en.675933b.png"
        },
        550: function(t, e, n) {},
        551: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABZCAMAAABi1XidAAAAS1BMVEUAAAAogP8pgP4jgP8pgP4pgP4pgP4ogf4ogPsogP4pgP0pgP0pgP8pgP4ogP8ogP8ngP0qgP4mgP8ogPwqgP4rgP8qgf8pgP4pgP75kaeEAAAAGHRSTlMAIN8Qv4DvX0BwkKDPr59AMK9QUO6PT7ByR5DuAAAC50lEQVRYw7WZ6XIjIQyEgwBxzOmxs6v3f9LdxKngsWAYgd0/ceqzqt0SRz5OS6v/0h+vlN7CPAL9CMxkN/UC6hKBMoJ56yp/mZHKmrbWci1QRRBUCxfphMBK2S5xq3VLuKshgWA9DQ4klD3HVYbEAnUmaUgNQtfqRL8jlpplBWChBgFYipaC+w1x1K2QzzFSv3wGrIFeIFScPOwmmJ3gJGoOASnJHJs8f634oc6dPPvlw7PJkHFLDXBYrv3ZsPyRH/v60hf+riOYb434W29CIBX9UFT6TAHBHFadVrR3cSR4TMFUzsdAzOZEykZ0txqLhS2slWQKxVBPnWRHhaIV7RWlZFvqxOfgzlJypHzRGmkvkJLZzqlLM04LyaVxyvfqPzKwJ8raofk0aPU56bs/r+LDAxdktwA20pwYzP34+7U60l5jHVRPB+Zsdi1knzF6YWFukuH1BUEDCuIR+ZJrI3te4ER7rW1kxXNgBJ0t6HDgIW/j5jj4NjK9iazeTu7/BbFKVo1kzkHB1Bfkmbg/oY28cPLIGr5JlnfK9KJZx7s7viYcmU0lUK/R2c00ZtZMC3kiHjFNz/JtmePDGPqL5vs/ptWuohVlq3PUe5TRkL/MamIaZcm7cMLKQy5H65mYgN8y5IaokbhiOplzWd3xYKieY25m81C2U0Iuz61/OCsq+3hbXw4HZ0TKy7FB5dgVHE3cFs1qXV00SCVB5uj0qRM6yQqfhVxuuoLmrzOmnuDyhPd7jK3tuapWctKw78uxdgcwZfDlI2mXaVRPVlvhI6cq/mlMASlPvrUItuUfBe8hs3BP3TXfIyXwWB6F6VtXv5a7UPIQrTAlL0lI9sfvH59Ccv3NJQjQwsfcmOZcC/ly6gwFk3XLsmwu6rNkowXbe/lAXauYy7aSh/pxFZvI9syWCXLyzZ/bjQcp+aJOn1lBQr452X8Hz5JvLJZVS7BKTkZI2XBwu4B7vYkr03UiDPmPPJA59vcfJSM236EmXz8AAAAASUVORK5CYII="
        },
        552: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABZCAMAAABi1XidAAAAdVBMVEUAAAAogP8ogPwpgP4pgP4pgP4ggP8pgP4of/0wgP8pgP4pgP0ogP0ogP0ogPwpgP4ogf8ngP4pgP7///9eoP5EkP7y9/+UwP/k7/83iP7J3/95r/6GuP+vz/6hx//X5/9rp/682P+uz/9RmP6u0P9DkP55sP77h1RPAAAAEnRSTlMAIGDe378Qr3AQ75CAQDDPX1AmjFNyAAACe0lEQVRYw+3Z11LjMBSAYQypkITFR12uae//iLvJLpwVkq1iZSYz5L/UmC9Nlmzz9Gigxe55Sh/bhdvdzsvJzX/ZboHupGbFN3j3WubKfNsFwtPb/i/PyozNFgh/lFlbobzMK89Rfi/zhnKZueIh35V86r6PkMN0mVSKARBzkAKA4mSCTBoG15Q5vodrYk+SZMkZfKU1Px57pdTxyHWH44LTaLliEBaPlCkER+JkES4LGSNriIhHyFLEyIyGyxyi2gfLVEBcNFTmENk+UJYCYpNhsoboeJgs4mUmQ2QCCekQeZ8iqxBZQErSLxNIqvLLDZipSnMBRqzRVQ1mvV9uTYTY504tHScq88oSjA72J2k/1wBmHumTO+Pw+usFkaHuRaDyyXxgv6jxLbs/Xu2T+4G5VKHgnp+tT24NuQyXmU8eWngbh8zMY8dlOjT/W3vxIdY0csruo4VjylQDC0wXJUNj71/s4N559LjcWRsRvbye+VtdDNlYK8e4rMGqbZm10CsBVtwnB/Yj5C5d1p5ZdzOZmh+Q1mIIYg2x1sXwVVTRsuxq5mCVluVBmefUmGzvQj253mD1LQ6JviLyz6DhChJyjVQJ15XEiVw7uTZixmXgVW4N2Ll0RgDrPVe5brt1qObmo0jcXdvnrKBDMmX/Zkj8Paw8K/fdHu5fqpKJ9920K0c6n+73KcRDvn95djP5LR1ZvYzK23R5XjjoIsfD3NfFejkmr9O/6Wf8Ml3yU4F0wsPmjS1j6+Rf8fLsfeWQseLtPW124P82bBn1hBZ///LFlqeHNMo5Wy9zy9gG5ew0yrlboZy73Ut2GacIytnp7DLOPpRzt0H5Jv0GxWuqXs2hm64AAAAASUVORK5CYII="
        },
        553: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABaCAMAAADkQQozAAAASFBMVEUAAAAogP8pgP4pgP4pgP4pgP4pgP8ogP8pf/0ggP8ogf4qgf8ogP8pgP0qgP8ogPspgP8ogPopgP4pgP0lgP8wgP8nf/0pgP5Osy4tAAAAF3RSTlMAIIDf77/PQHAQX0+foJ9AjzCvkDAQcItw44IAAAGzSURBVFjD7dfdTsMwDAXgxOnP2tF2P4Df/00RoHHEHNx6Ti+AnLtF3afqqHWTUFNT40k/J15Nc+mt7nDijZmjDe54c9JgkU9sSGuAI5uybJcn5p1uurPJzXaZjRlCTc1/Sn9N/HDS3Ptmsj6rjTPZO6tPXCCtZSa7Z/VURm4NM9k9q7lQYpX98jh1hWTib+lCCPF4ez4nh0x3q0+fc+tm0MMy3a8ew3sOXwZZZcAh968Wv+ghmcRqFz7SwABtkAmrsmYYZJYJq7maYZBRJqzma4ZBBhnwoNTMzwG0Lks4JqVmThG0LuswatZpKa/BqBlpzqBXZcDnW6GyZmQEvSIDHkHImpEDaF0GzEimZtkdKbK4Tq9Z0nZZ1myXcd0rKzWb25BFr9d8AGx96vSaR8DGN0WvuVkAG99uveaEV9AxkVCzfSJl6VzNnikKOlezZ/KDztXs+VqBztXs+cKCztbs2BWAztbs2MmAztbs2H2B1oZGpAK73MsY5dCYC+3M0zw2v/I08UflQchpt9PxdbcT/VJGHoPMtfAtIy+dH04xZOnJfcdD+CHLlBxPxWUJNTU11rwBilxLfcydV7sAAAAASUVORK5CYII="
        },
        554: function(t, e, n) {},
        555: function(t, e, n) {},
        556: function(t, e, n) {
            t.exports = n.p + "img/2020-12-jinse-reward-en.ebbabf4.png"
        },
        557: function(t, e, n) {
            t.exports = n.p + "img/eth2.0-en.b13cd02.png"
        },
        558: function(t, e, n) {
            t.exports = n.p + "img/tp-binance-chain-en.983d6fc.png"
        },
        559: function(t, e, n) {
            t.exports = n.p + "img/2020-08-tron-book-en.7ed6ac4.png"
        },
        560: function(t, e, n) {
            t.exports = n.p + "img/2020-08-hoo-ama-ogx-en.3f56e2b.png"
        },
        561: function(t, e, n) {},
        562: function(t, e, n) {},
        563: function(t, e, n) {
            t.exports = n.p + "img/bg.2713697.png"
        },
        564: function(t, e, n) {},
        669: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+BAMAAACB77V3AAAAGFBMVEUAAAD///////////////////////////8jfp1fAAAAB3RSTlMACb3s24RUtKCbxgAAAMhJREFUOMvtlK0OwkAQhI/woxsSgkZhcVgUGt4AwQsAYl4fdTuhzeTzpKe6c/0m7d3utP9Yw1RaNK/n5z7e3p2v9byR3sOIPkqPXqwkHX73t5IuvdjLBsb16tVSNjCuU6/WsoFx3Vx2A+MGXIf3LQS8lICXFHBrAS8x4FYDbjngpQe8DAoPBoUHg8KDgfFgYHxqYDwYGId98Kfvo//D86Hzxfuh+8X+oP7C/qT+xvmg+cL5pPmmfKB8oXyifKN8pHyFfKZ8n1drX3B3ufEPDL4eAAAAAElFTkSuQmCC"
        },
        670: function(t, e, n) {
            t.exports = n.p + "img/header-bg.3361bd1.png"
        },
        671: function(t, e, n) {
            "use strict";
            n(540)
        },
        672: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAAOVBMVEUAAAA5Oj04OD05Oz1AQEA6Oz43Ojo6Oz06Ozw5OT05Ojw6Ojw6Ozw6Oz04PDw7Oz46PDw6Oj06Oz19XodcAAAAEnRSTlMA3yCgEM8w779wr4DPj0DPkGAU71XAAAAAw0lEQVRIx+3V3Q6CMAyG4bUbA/lTe/8XK6TilzBp5xkmvCckJE96sm7hyq6TpdtvhmWNLnROlKlPJeLmzoZpRZq0R0wixJZRBaTGUKOIKiA1a9E4pKo2BCOPA8T0URtiEgzyVFZUGFPpt3UNFIJxlG18BeMr2/gKxleGMZVvelkaShWNmzAVK6cqGmuJH4jjSBjtI3Qq1Joof0HuyxJL9FaZj5pkj5LU1gREtSgGNNSiOaBUOWpyt7xi758dOfVzuPqrXuYqKfxjYJLeAAAAAElFTkSuQmCC"
        },
        673: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA1CAMAAAA5+jh8AAAARVBMVEUAAADv9//v9//v8//w9f/w9v/w9f/w9f/x9f/w9f8NDg9/gYccHR+3u8Obn6WNkJZjZWni5/DU2OGprbRVV1orLC4qLC7MegIBAAAACXRSTlMAIEAQ39+A75/gPrUkAAAAuklEQVRIx+3W2w6DIAyAYboCioioO7z/o25ZSIih5bDtavJfSr4YIpGKHwQXMuAF6sEwDSPjQJpMEjiTVUig0RTSBJIlJFODphgmCMKKJQpLwKKJqKOOOvpL1PiP4Dsz2hZrr43Iz9Orx9KC7BSy9WiPh8FVozWiWzWaI5qrUXJY29/Uvqe1GrmI9mpkPP2dCrf7cn9v6HiQsDhHOOvddniiRJr+ZGJBlTeKnqhUyZBqZNmgUbABk/i+J/f+PQKZw5yJAAAAAElFTkSuQmCC"
        },
        674: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAATlBMVEUAAAA4OEA4ODg7Oz06Oz06Oz05OTw6Oz05Oz06Oz04PDw6Oz1AQEA6Oz05Ozw6Oz3////n5+fa2tuEhIZSU1VGR0nOzs6dnZ6cnZ7Ozs9wSEISAAAAD3RSTlMAICCfn4Bv779aQP4Q7r/wUWbVAAAAp0lEQVRIx+3WwQ6DIBBFUdSKgraMIGj//0drmjaEdCYDNe64S5KzARZPnG6WHZFqKSMHQ9fjpicBrZRh0ggaOTQiyHANv6YxbC2JAKmiiiqq6EBkFZUhvwUA64rQusC7ZS1Ah/kon41c/AxbNrIRBR4h/+9aFKKx2WiPyGUjH6/8gscV6cZxFuC5++Tsn/HxQJDmkC4fVFP5DJvuUhA16pbWfZOzONsL0GFiJULkQL8AAAAASUVORK5CYII="
        },
        675: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAAQlBMVEUAAAD///////////////////////////////////////////////////8pgP5EkP7y9//k7/+vz/+UwP9eoP5RmP7epHdGAAAADXRSTlMAIJ+egL9v70BfEO5Q77YkPAAAAKBJREFUSMft1ssOwiAQhWGoLaVVppTL+7+qxmgmRCYMwe7mX5J8G2Bx1HC7mYg2TRmzOrq5bmYS0OrhGtkKWlpoqSDXav012jXTJIJKggQJEqQdnaA+5GMCyKELnQe8O84O9DIf5dko4GeIbJQRJTYCwK5FCU1mo4gosJHHK7/gcVW5cUIGSNEXZ/8aH7aF7Mig4qu7UUR6m8pu38yuRnsCMA5VKvWzbOYAAAAASUVORK5CYII="
        },
        676: function(t, e, n) {
            var map = {
                "./header-img-zh-dark.png": 677,
                "./header-img-zh.png": 678
            };

            function o(t) {
                var e = r(t);
                return n(e)
            }

            function r(t) {
                if (!n.o(map, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return map[t]
            }
            o.keys = function() {
                return Object.keys(map)
            }, o.resolve = r, t.exports = o, o.id = 676
        },
        677: function(t, e, n) {
            t.exports = n.p + "img/header-img-zh-dark.175d84f.png"
        },
        678: function(t, e, n) {
            t.exports = n.p + "img/header-img-zh.f0846fd.png"
        },
        679: function(t, e, n) {
            var map = {
                "./header-img-en-dark.png": 680,
                "./header-img-en.png": 681
            };

            function o(t) {
                var e = r(t);
                return n(e)
            }

            function r(t) {
                if (!n.o(map, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return map[t]
            }
            o.keys = function() {
                return Object.keys(map)
            }, o.resolve = r, t.exports = o, o.id = 679
        },
        680: function(t, e, n) {
            t.exports = n.p + "img/header-img-en-dark.5196157.png"
        },
        681: function(t, e, n) {
            t.exports = n.p + "img/header-img-en.7d2e340.png"
        },
        682: function(t, e, n) {
            var map = {
                "./header-img-zh-dark.png": 683,
                "./header-img-zh.png": 684
            };

            function o(t) {
                var e = r(t);
                return n(e)
            }

            function r(t) {
                if (!n.o(map, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return map[t]
            }
            o.keys = function() {
                return Object.keys(map)
            }, o.resolve = r, t.exports = o, o.id = 682
        },
        683: function(t, e, n) {
            t.exports = n.p + "img/header-img-zh-dark.378ee51.png"
        },
        684: function(t, e, n) {
            t.exports = n.p + "img/header-img-zh.e1ec522.png"
        },
        685: function(t, e, n) {
            var map = {
                "./header-img-en-dark.png": 686,
                "./header-img-en.png": 687
            };

            function o(t) {
                var e = r(t);
                return n(e)
            }

            function r(t) {
                if (!n.o(map, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return map[t]
            }
            o.keys = function() {
                return Object.keys(map)
            }, o.resolve = r, t.exports = o, o.id = 685
        },
        686: function(t, e, n) {
            t.exports = n.p + "img/header-img-en-dark.7a38a4e.png"
        },
        687: function(t, e, n) {
            t.exports = n.p + "img/header-img-en.6e698e0.png"
        },
        688: function(t, e, n) {
            "use strict";
            n(542)
        },
        689: function(t, e, n) {
            var map = {
                "./security-img-zh-dark.png": 690,
                "./security-img-zh.png": 691
            };

            function o(t) {
                var e = r(t);
                return n(e)
            }

            function r(t) {
                if (!n.o(map, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return map[t]
            }
            o.keys = function() {
                return Object.keys(map)
            }, o.resolve = r, t.exports = o, o.id = 689
        },
        690: function(t, e, n) {
            t.exports = n.p + "img/security-img-zh-dark.1da091d.png"
        },
        691: function(t, e, n) {
            t.exports = n.p + "img/security-img-zh.fd03c1b.png"
        },
        692: function(t, e, n) {
            var map = {
                "./security-img-en-dark.png": 693,
                "./security-img-en.png": 694
            };

            function o(t) {
                var e = r(t);
                return n(e)
            }

            function r(t) {
                if (!n.o(map, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return map[t]
            }
            o.keys = function() {
                return Object.keys(map)
            }, o.resolve = r, t.exports = o, o.id = 692
        },
        693: function(t, e, n) {
            t.exports = n.p + "img/security-img-en-dark.5a51181.png"
        },
        694: function(t, e, n) {
            t.exports = n.p + "img/security-img-en.201821c.png"
        },
        695: function(t, e, n) {
            "use strict";
            n(543)
        },
        696: function(t, e, n) {
            "use strict";
            n(544)
        },
        697: function(t, e, n) {
            "use strict";
            n(545)
        },
        698: function(t, e, n) {
            t.exports = n.p + "img/exchange-img.46b709e.png"
        },
        699: function(t, e, n) {
            "use strict";
            n(546)
        },
        700: function(t, e, n) {
            var map = {
                "./dapp-store-img-dark.png": 701,
                "./dapp-store-img.png": 702
            };

            function o(t) {
                var e = r(t);
                return n(e)
            }

            function r(t) {
                if (!n.o(map, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return map[t]
            }
            o.keys = function() {
                return Object.keys(map)
            }, o.resolve = r, t.exports = o, o.id = 700
        },
        701: function(t, e, n) {
            t.exports = n.p + "img/dapp-store-img-dark.64922bf.png"
        },
        702: function(t, e, n) {
            t.exports = n.p + "img/dapp-store-img.f218e4a.png"
        },
        703: function(t, e, n) {
            "use strict";
            n(547)
        },
        704: function(t, e, n) {
            t.exports = n.p + "img/ecology-1.1500bd3.png"
        },
        705: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABkCAMAAABDybVbAAAAe1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////NgkbwAAAAKHRSTlMA9SXjC5Qr8efsBkXJeD/Sp42HE147NnPewn25bmlN2ZkxF7GfHVcibcAqWgAAArBJREFUaN7tmNuSojAQhpuTaBBBwQMygoAK7/+Ea7eHAIvuKp2Lqcp3MaOE4qskfzcpQaPRaDQajeY15TJvXCtPTvu4EKCK866RGPNlZoMK0qaHkcb8JrMZwAgXzJrs+tTEtktzEa/C1voFseDW7CK4E2XOU7WLOXOGT5xmIDH3D1Pg8XmcBnE6u74I76KwxCnaDOtnVw2Sb6BN7Rh0eebTKlrLzWiR3xB+r55OTYfT6JQXQYNUvQdt5h1Pbo5eOOeWrQK6bA2qoqlxS8T4qvVm9MB+hs1qGnoAwqP5HhlaW3LbgRehErRT5niPWJIniV6sK85nz9IQXNqgCQxywd3haaM5etwMhohwCFiw0wb5gSFwBJi4bdBqaDacGohvgYO/OGA+gA3PkB2hzZz6ER/FdCjYAi8egJGaAjcfODPMIk5PRPOpocMEFzPk1KzQYol+H8WrHrNlVsBQCALlFtjgQMxqmQBiep2VC7HlCWYLVWTQztYZxy7sFsq1DZIjXmBqadJCpKJ3El6wW4iwtzshu8UI8O+y1fDwos1n+SGLF5FnC08szDS3BeBs4aesE5GK23Jl4uLHZ7EW+E2MtEy7FmJBDa6UqzamsTmDFiJulw+VzorPsuiVbNg6RyXsFqJqHXdqHB1v2UpL98TZrIHAw/aE3ULUMxmDFNsnu0VWf5M8b/e/tZiDFsmeTomPexxmiyR9NOcMu7YqC0QWbo8NsMYqGm1ZwwvW9+qZXP/l31v8NxZZpTG9qa3PLdZ7i0TgAco1zU81xw8siGngPTOM9hiL+8bSfW/HCi20ykSl0EIcrGtkfPGVZS8t/6Ys4f+5DFn4maOlblk2oAIXXxrKLRBgY4pUWmS28rNiC4iEMuAotBD2HA2KLeRRb5E/A1loUcvlFPo2aDQajUbzq/gDg72N7zhRXVIAAAAASUVORK5CYII="
        },
        706: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABkCAMAAABDybVbAAAAflBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////vroaSAAAAKXRSTlMA76BWv639RNIL5uvfG/f02KU/BsyDZTomETSVj29fT0qKLsazfLp3ExM+KtcAAALlSURBVGje7ZjbkqIwEIZ/QYMBVAQFweN4mLHf/wV30omUTG1NJUpqL5bvQokV85nuNglgYGBgYGBg4J/SBNn0C565B4K++YBXyoSYhYQ/zhd6sIEv5Iegltolm+vJZfor4wMehDExQslSWFNdyIIIzOZq2uNIvQaw5UuQDTfVt7jNiYkPCNX7AZbcyApRAcgz09jWQOBSAZHQX1yNf2VyBGRglKsG3yhlDEv49yWHwqLAVsQs9tycqesl7DiyZQYL1sQsTWdOTQk7OA4hbEhV1zSCYeuSGhWIEaxYdOc9VU1YEqt/AKyYciHn0NSqdCawZGTfuSSFWD8lde9BgyUxYw7cTl2efWiwFuxJTm1SvWgQxTpwu0Iq49WPhvPDrPbq9cuT5h7TM40nzbJjSeFHc+TERA9Z6UdTx+YsUyZcB/Cj4fUvkwBkubs18KM5tbub5n1NER4kfiA5ZDv0qLkSpZu/hSxt7fn4cnpTE/Ja3PVEHLIchnpBNJ+9p8lIkZyfQ8ab2rZt57wdvqU5kGbUoGXbDRmitzVFSg9PBUMu9ImwR03JmeFxF/lzyAL0pzGFmx/YM9cT2LFZ9qnhJf4TCLVHVW3Flyf0qJF8f6SScpxzDYeQmQ5Zn5obtdviyXg+OGR1n5pafSDOZqwFezhkR/SpWXdOxjl79Ed9amZqXLFp29WImOTeq2b3M9lNQnrAPjWzOf1cEc8J9+hBk8nOYr9Fh81lPpF9aGhcmBGFnowFrprnOlrqI4UvjRn7rCazuHvU8C3ERF2s4VMjQjT8B5FeNTSvPvXp25tmFfMWpvcUf5pJwwqdIo8anAQxaeFVg5KYEl41ZgPICs8aXs5EBF+amM8XinBdwZ7Q7KgOD1MSuMNBrtzuJnO4UkzVylG7TT6VL01mDGtkyh63+dQBKUKnXDLxNbBluRLkNBlmS68Rz9yy+Zon28CRMHV18BNiZ4owWMUjW5Lscz/DwMDAwMDA/8EfSgvBWdarLqgAAAAASUVORK5CYII="
        },
        707: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABkCAMAAABDybVbAAAAdVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////li2ZAAAAAJnRSTlMAKWPfriEL9BMH+KF5yV02LhmOhe9A58FV5NbSvJVvUEe27JppgKlFIXAAAAIZSURBVGje7ZjrjoIwEIWLCqIo1CqCihe88P6PuCEWZ3WS7Q5Mk91kzk9I5oN2Lu1RIpFIJBL9RQUmuSjfisy8aZo6UF41ujZPmVh5U35oXrrelR+Fk+ZNh1zxK3rMn9HnZrS1oEnITUl3NnQdtnnQIdcRJyRbWsj+8rGA25QNskpszM0JHl729uEyY4HMFlMb8PaexKeNfZ6shlPOYxus0OpD8dG+mi5mwyC6spHGJeE1Tfhz3T9LF15899bRhVPJnYiELUKFQSsrktZQ5sQmEVMo5KYVdR+2JGAO0ILJy0xop+N2Q+/9xlFAw0x6zFbB2IZjbrlj702SDcYscV7jTJ6GAzGxo0ptXaZD/2YHPeeHLqOHYjTuoLhnpgyZhucBngBDMXi64XnGVje6gGGMpjNneZbw8ej3ODB4K45oszgwOLFQ6jFioEygkNgxUPQwvD1iVGTaUFXoexAEbaiREoxgBCOY/4UZZ1TMqiZj8HDEGDReqfebBEa9A4NOOluKq1V3B5fz7zDB66Sj+3kolXZgeroq+CQTOzD3K5x0mPwtFbU35hwboA6bgmwrpNPGOG0KuveIHYIZcgMGu5EQyOBAKaO3CssyQkvK6hTDJucoQTh9b0jZSQjp7sHFj01XgI/o+zWkChSvgq7/7EpdQCtiF9iF1M5C7j+bBpTEypfiWwcpMuVTunjuj/Ktstg/IiUSiUQiEUlfbUidXUGyzLsAAAAASUVORK5CYII="
        },
        708: function(t, e, n) {
            "use strict";
            n(550)
        },
        709: function(t, e, n) {
            var map = {
                "./community-img-dark.png": 710,
                "./community-img.png": 711
            };

            function o(t) {
                var e = r(t);
                return n(e)
            }

            function r(t) {
                if (!n.o(map, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return map[t]
            }
            o.keys = function() {
                return Object.keys(map)
            }, o.resolve = r, t.exports = o, o.id = 709
        },
        710: function(t, e, n) {
            t.exports = n.p + "img/community-img-dark.7ba3b0c.png"
        },
        711: function(t, e, n) {
            t.exports = n.p + "img/community-img.804a5a0.png"
        },
        712: function(t, e, n) {
            var map = {
                "./community-img-dark.png": 713,
                "./community-img.png": 714
            };

            function o(t) {
                var e = r(t);
                return n(e)
            }

            function r(t) {
                if (!n.o(map, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return map[t]
            }
            o.keys = function() {
                return Object.keys(map)
            }, o.resolve = r, t.exports = o, o.id = 712
        },
        713: function(t, e, n) {
            t.exports = n.p + "img/community-img-dark.0859045.png"
        },
        714: function(t, e, n) {
            t.exports = n.p + "img/community-img.441f6c1.png"
        },
        715: function(t, e, n) {
            var map = {
                "./TP-Lab-dark.png": 716,
                "./TP-Lab-hover.png": 551,
                "./TP-Lab.png": 717
            };

            function o(t) {
                var e = r(t);
                return n(e)
            }

            function r(t) {
                if (!n.o(map, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return map[t]
            }
            o.keys = function() {
                return Object.keys(map)
            }, o.resolve = r, t.exports = o, o.id = 715
        },
        716: function(t, e, n) {
            t.exports = n.p + "img/TP-Lab-dark.fffa10b.png"
        },
        717: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAATlBMVEUAAAA5Oj06Oz05OzxAQEA6Oj05PDw6Oj04OEA5Oz04ODg5PT02OTo6Oj46Ojw6Oj06PDw6Oz46Ozw5OTs5Ojw5Ojw5OT06Oz46Oj06Oz1VwOLXAAAAGXRSTlMA3++/EF9AkCCgIFAwf4CvgM/PcHCvb86wLiLxtQAAAupJREFUWMPFmduOozAMhrFzApICbaed9fu/6HY10tLggBNTaf5Lqn44jk8JXYWSC8MVkF5CMHOIqTsvfzFIXGZK56hIu4Jh1GINCTJOgXVAFYJWtBewSnRvqEH1vn4iNQm/qrBWMFdrdAJSCESyQ1IJhT28kFoXiasna7l68pNOaifsIp2WL6YbnAdjKeoYV6OrZdxAqyAEU2vjIwSkVYElRpah/zLbVbCNz23ibrZQ+LEf6iqEz5Lb7kcwvh4wNMLNmBvgau343yp615RFRL7AvJHg4xnH1Y4UpwcQxm7Vjd71HhlDvsTsnalYA223+3fDDF4X06iwlybDSfBEZZN7+iyYxrLBNLSC5w0g7CTztRV82wDQrkmXybZxLQO4dSGZYhs48lQvv2/uGmWo5IsotXJZPZYqfig66KQzQmFLoVPI8MCy3GCFPA8szwxWCZmT7yztVAps3fyJQjzLAkuPpAOnDeZPZ5jXdWJhAZRLReW7B/yBTlsDsSMBrI23DVjvCvo18Kjj9gyMQhwriwV2IGSesnACq5rhM7XCsJS+6sA3Bg5Ci1buXWBlk+4asOOUWGzdp/u0L3R/r/IEdyh8wOSBCiVnOG+yZ4ihOLqBFBjy0dOtI5beGfbKCeO6o5lmq+Ayy+6aqxjuB15wLBWElzpzy5eU4ya6bw8j3tTJ2HXo8W+e6Zc39OAPgywgleW3CemY09BMMVlm6eiCQdrTNw/wS3E7li14oUO5Qg25Wj6gz1LNOZggfB6Bk9Re/RE4lY+AX9vbCyOVycM52GJ24OlBKPz36lvOr7eTdE72QlOWuvycn1ftAj/hFoXKLh4ILGzXnnwa5ZYh15i+qRwLEVF2c1CBeSrxhLoowYs4J4HTgEPNBAbzFP1LLlSDB2G2q5vERa5cuGwdeBEHXawa8RXfWHpoB3+nqr47tIKNVXxyk8EQG4amBWvBGLi5sj9kcEjtM2/4KZwHJ1xcbKeSM4RubxvQuCPsX1KoQt2l3I2DAAAAAElFTkSuQmCC"
        },
        718: function(t, e, n) {
            var map = {
                "./discord-dark.png": 719,
                "./discord-hover.png": 552,
                "./discord.png": 720
            };

            function o(t) {
                var e = r(t);
                return n(e)
            }

            function r(t) {
                if (!n.o(map, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return map[t]
            }
            o.keys = function() {
                return Object.keys(map)
            }, o.resolve = r, t.exports = o, o.id = 718
        },
        719: function(t, e, n) {
            t.exports = n.p + "img/discord-dark.64906db.png"
        },
        720: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAilBMVEUAAAA6Oj05OT06Oz04OEBAQEA6Oz06PDw6Oz02Ojo6Oz45Oj05PDw6Oz06Ozw7PT04ODg6Oz3////z8/NrbG1TU1Xn5+ecnZ7Ozs61tbaDhIbCwsJfYGGRkZJHR0mpqaqdnZ53eHmQkJFGR0ny8vOEhYaEhIXOzs+1trba2tuoqapGSEm1trdfX2Gsj6k2AAAAEXRSTlMAYN/+IBDvfr8wz69An5BQIC5/pqYAAAKESURBVFjD7djrcqIwGIBhQPGw6nbz5QAIykGLtt29/9tb21G/xgA5mM74w/dnnHkmYEjQ4FlX8Ty8p5dl3Mm+zMjdzUKFHSN7V9Ef2Z1PiKcmc2m+6N4vf59zRDw2QzckXlte4YVfeOH3TmDRFSaee8IPAxf17Qgr7oZZle4BmDzIASBNmDvMyj18lcrjGXwlMuYCf1R7uLZpkmOensqPSVPjuKi4LZyAYZUdzME4ZgULc/jNBl6DRRtzmAsbmO6M4RKsqkxhDnbRnSGcgWWVGcwpuExZD6/BusoIFvYwNYEZOMQM4MwFPhrA1AWmOy1cg1NMC2cgl7d1I0BKJG2bgVyphYVs/FN353LbsZ8IHcxB6nJAvONQ1v0ccQ1cA4YI2aHCuw+Z114Yp4bhMZ/DuUPPxZUaOIXvdZyBZc/CzDWw0MFJDyw0MEjhss/UZ2wHUsMwB6mNeiW0bxfkgzBTTmAF2fTsgswGhlI9XWnR/UpT98A9m3xeXN62UN58EFLkcNOrGYztxYXFhABwgvU94YFqzXIzj9qs40J+8Hgietlk2yg7oQJjDQVMMEJYJjrU8vOTVFrcuqOJSxtnuv68jDY70Kvw9rfh5IaFAzd4E2pF1z675Yyxgm9x41emq3+NfVe+EyUm3W2igZHO8NTrKZVYHYyd1wPlfTCnyBrBWJvj5ttRA/TAHH9LbxkZqN4+6t8KT/ih4cjdmAzCv93hMBqCl+7wahx1wB6mPInjxQAc/3KWl0EwVWBs7CyvgpM8UmBsGrneC1UOpMbhzMoenQuDU/NIgj02jvzD6rcUeC1eIOy56Q/BuDgC74UjhP02j/zDuOwQ9r3sgh8pXiHsuWlw6j+UzJOI0SRt/AAAAABJRU5ErkJggg=="
        },
        721: function(t, e, n) {
            var map = {
                "./Dev-Docs-dark.png": 722,
                "./Dev-Docs-hover.png": 553,
                "./Dev-Docs.png": 723
            };

            function o(t) {
                var e = r(t);
                return n(e)
            }

            function r(t) {
                if (!n.o(map, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return map[t]
            }
            o.keys = function() {
                return Object.keys(map)
            }, o.resolve = r, t.exports = o, o.id = 721
        },
        722: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAAApVBMVEUAAADy9v/w9f/v9f/x9v/x9f/v9f/v9//u9P/x9v/w9f/w9f/x9v/x9f/x9P/w9f/w9v/w9v/w9f/w8v/t8//w9v/x9f/w9v/w9v/w9v/x9v/x9v/w9v/w9f/w9f/w9f/x9//w9v/w9v/w9f/x9f/w9f/x9v/x9v/w9f/w9f/w9f/x9v/x9f/u9v/w9v/w9f/x9v/t7f/w9f/w9f/w9v/t8v/w9f9/4e+bAAAANnRSTlMAHenm2bFbIBdxYs/75g3RE9+cEQr313sp4tv99L53QD0vI7q1mZRe7quHgkcbkGdSB6XHxDn3zb6iAAACPElEQVRYw+3X626qQBSG4YWCIiCnCgoqFYtn8dR27v/StkCZlWHPFDDZO23i+8chJo/mSwwIz35DtiTKbgYcd2FXVHh7bSCcLY+I86xzrXDRDfJdhn6pmyFBgZ+3G31PfFqkLr9mjsVKqcutIUypX5dkwrP6Rsde8442B+jtdLl5lqKNqsTBMkibDP9QEY7hlLRr6lxYYueRtnkJI9gyaV/ATCp1HyA60v8jjO32IULu0KNzOu93Tnbayi0IPfqg57fFVV3cstN7pDcmdG2i0As3BVi62UmZaHoNgYKtUmI2vgK8znNCtdHgEygAEnIPAHpBQcALGlwChTuBUwCMIuOLQINPoADLt/J6JZVTkPkE0BATlvZyv+yPHTrFqJyCBIc+GlwChck+qE5RGHv8HlwChVOHMFOMjfJz14VhcQmugFMwhrmxeAQV4jUKOAUacWZoPp9Qltlx408JLcym2ASENvU3cG+Z8InhQM3ePTjT6hQoFIuqgyGPoIY6lg3BFEY4VkuBQ6BhDvwvYxYxUxjywMyFLhEQrIFTOBxBRKAROXSKK50iiFAQEWhICclaSwB9OkUiocAn0Ch/qR47haKiICLQKIjwkk+BBAoiAo2CmOdTeEigICLQiJW/pyBJjIKIQGP/kb24n337iD+Q90O3xX1k6+Vz+rfo5OB9eEsqxM+7p6bDR4iUeegNHyAc9jF4NWstzFxgiv3Wz1pyDGyaP2v3HeQzVItXYad5jhsDJzOVmpY+/1D8q/4AEf92rt+kKYIAAAAASUVORK5CYII="
        },
        723: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABaCAMAAADkQQozAAAARVBMVEUAAAA4ODg6PDw6Oj45Oj06Oz06PDw6Oz06Oz1AQEA6Oz45OTs4OEA6Oj05Oz06Oz07Oz41ODo6Ozw5Ojw5Oj05PT06Oz0FrP9sAAAAFnRSTlMAIIB/3+9Av58Qz3AgT6CPXzDPr2BQMudBLgAAAcNJREFUWMPt2d1ugzAMBWDiJfyUjp+28/s/6tRN7Ki1amMCF9ty7hrBp+goskRalZSU5KRuI5tJ19rrdiOvTBt88IlXJ3YeeWRHGgd8ZlccXQ/MB2364pPTepmd6aqSkv+Ueoy8ObGtM2ayOaudMzl3Vo+8QxrPTM6e1cM+cuOYydmzmndKKHK+fBsuO8nEDzndz/3Hcj6HDJmeVtvvubUYtFmm59X3ryf7H4M2yoTVh7ca/KJNMmEVNd+TYIB2yIRVWTMMcsuEVVHzg0EeGXCl1LwY5JABd0rNPFegdVnC56jUzDGA1mQTRs2SVmULRs1IQiG2DHheCpU1IxNoQwY8gZA1Iz1oXQbMjMiakTfQigz4TcCoWaelLB8zaxabUWTQPRs1S1iXQd/W1dwDNmTQc1pR8w2wKYM+R6vmVANWZUnrNccZsCFLWqs5BsCWLGmtZuzYliWt1RwAm7KktZoDYFOWtHaaA2BTlrR2mgNgU5a0dpoDYFOWtDY0AmBTlrQ2NAJgt8zLu9cpyKHRskNWEtsp/cqviT8qd0KOh30dj4d90df7yNNhNyeH3fa8uEgasnfcvbxVG6IHkv+AlJSUePMJDr4+RHI3veUAAAAASUVORK5CYII="
        },
        724: function(t, e, n) {
            "use strict";
            n(554)
        },
        725: function(t, e, n) {
            "use strict";
            n(555)
        },
        726: function(t, e, n) {
            t.exports = n.p + "img/2020-12-jinse-reward.b7f16ab.png"
        },
        727: function(t, e, n) {
            t.exports = n.p + "img/eth2.0.1255ebd.png"
        },
        728: function(t, e, n) {
            t.exports = n.p + "img/tp-binance-chain.400cde6.png"
        },
        729: function(t, e, n) {
            t.exports = n.p + "img/2020-08-tron-book.3265826.png"
        },
        730: function(t, e, n) {
            t.exports = n.p + "img/2020-08-hoo-ama-ogx.cdd2dfc.png"
        },
        731: function(t, e, n) {
            "use strict";
            n(561)
        },
        732: function(t, e, n) {
            "use strict";
            n(562)
        },
        733: function(t, e, n) {
            t.exports = n.p + "img/extension-modal.80f32f6.png"
        },
        734: function(t, e, n) {
            t.exports = n.p + "img/extension-modal-en.a7ada22.png"
        },
        735: function(t, e, n) {
            t.exports = n.p + "img/extension-modal-m.38f5adf.png"
        },
        736: function(t, e, n) {
            t.exports = n.p + "img/extension-modal-m-en.535641f.png"
        },
        737: function(t, e, n) {
            "use strict";
            n(564)
        }
    }
]);