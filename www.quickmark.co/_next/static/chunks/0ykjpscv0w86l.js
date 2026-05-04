(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 195057, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        formatUrl: function() {
            return s
        },
        formatWithValidation: function() {
            return u
        },
        urlObjectKeys: function() {
            return l
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let a = e.r(190809)._(e.r(998183)),
        o = /https?|ftp|gopher|file/;

    function s(e) {
        let {
            auth: t,
            hostname: r
        } = e, n = e.protocol || "", i = e.pathname || "", s = e.hash || "", l = e.query || "", u = !1;
        t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? u = t + e.host : r && (u = t + (~r.indexOf(":") ? `[${r}]` : r), e.port && (u += ":" + e.port)), l && "object" == typeof l && (l = String(a.urlQueryToSearchParams(l)));
        let c = e.search || l && `?${l}` || "";
        return n && !n.endsWith(":") && (n += ":"), e.slashes || (!n || o.test(n)) && !1 !== u ? (u = "//" + (u || ""), i && "/" !== i[0] && (i = "/" + i)) : u || (u = ""), s && "#" !== s[0] && (s = "#" + s), c && "?" !== c[0] && (c = "?" + c), i = i.replace(/[?#]/g, encodeURIComponent), c = c.replace("#", "%23"), `${n}${u}${i}${c}${s}`
    }
    let l = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

    function u(e) {
        return s(e)
    }
}, 818581, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let n = e.r(271645);

    function i(e, t) {
        let r = (0, n.useRef)(null),
            i = (0, n.useRef)(null);
        return (0, n.useCallback)(n => {
            if (null === n) {
                let e = r.current;
                e && (r.current = null, e());
                let t = i.current;
                t && (i.current = null, t())
            } else e && (r.current = a(e, n)), t && (i.current = a(t, n))
        }, [e, t])
    }

    function a(e, t) {
        if ("function" != typeof e) return e.current = t, () => {
            e.current = null
        }; {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 573668, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = e.r(718967),
        i = e.r(652817);

    function a(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
            let t = (0, n.getLocationOrigin)(),
                r = new URL(e, t);
            return r.origin === t && (0, i.hasBasePath)(r.pathname)
        } catch (e) {
            return !1
        }
    }
}, 284508, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e => {}
}, 522016, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return b
        },
        useLinkStatus: function() {
            return y
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let a = e.r(190809),
        o = e.r(843476),
        s = a._(e.r(271645)),
        l = e.r(195057),
        u = e.r(8372),
        c = e.r(818581),
        d = e.r(718967),
        h = e.r(405550);
    e.r(233525);
    let f = e.r(388540),
        p = e.r(91949),
        m = e.r(573668),
        x = e.r(509396);

    function b(t) {
        var r, n;
        let i, a, b, [y, k] = (0, s.useOptimistic)(p.IDLE_LINK_STATUS),
            v = (0, s.useRef)(null),
            {
                href: j,
                as: w,
                children: S,
                prefetch: N = null,
                passHref: C,
                replace: q,
                shallow: _,
                scroll: E,
                onClick: P,
                onMouseEnter: T,
                onTouchStart: A,
                legacyBehavior: O = !1,
                onNavigate: L,
                transitionTypes: R,
                ref: I,
                unstable_dynamicOnHover: U,
                ...M
            } = t;
        i = S, O && ("string" == typeof i || "number" == typeof i) && (i = (0, o.jsx)("a", {
            children: i
        }));
        let D = s.default.useContext(u.AppRouterContext),
            B = !1 !== N,
            K = !1 !== N ? null === (n = N) || "auto" === n ? x.FetchStrategy.PPR : x.FetchStrategy.Full : x.FetchStrategy.PPR,
            $ = "string" == typeof(r = w || j) ? r : (0, l.formatUrl)(r);
        if (O) {
            if (i ? .$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: !1,
                configurable: !0
            });
            a = s.default.Children.only(i)
        }
        let z = O ? a && "object" == typeof a && a.ref : I,
            W = s.default.useCallback(e => (null !== D && (v.current = (0, p.mountLinkInstance)(e, $, D, K, B, k)), () => {
                v.current && ((0, p.unmountLinkForCurrentNavigation)(v.current), v.current = null), (0, p.unmountPrefetchableInstance)(e)
            }), [B, $, D, K, k]),
            F = {
                ref: (0, c.useMergedRef)(W, z),
                onClick(t) {
                    O || "function" != typeof P || P(t), O && a.props && "function" == typeof a.props.onClick && a.props.onClick(t), !D || t.defaultPrevented || function(t, r, n, i, a, o, l) {
                        if ("u" > typeof window) {
                            let u, {
                                nodeName: c
                            } = t.currentTarget;
                            if ("A" === c.toUpperCase() && ((u = t.currentTarget.getAttribute("target")) && "_self" !== u || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
                            if (!(0, m.isLocalURL)(r)) {
                                i && (t.preventDefault(), location.replace(r));
                                return
                            }
                            if (t.preventDefault(), o) {
                                let e = !1;
                                if (o({
                                        preventDefault: () => {
                                            e = !0
                                        }
                                    }), e) return
                            }
                            let {
                                dispatchNavigateAction: d
                            } = e.r(699781);
                            s.default.startTransition(() => {
                                d(r, i ? "replace" : "push", !1 === a ? f.ScrollBehavior.NoScroll : f.ScrollBehavior.Default, n.current, l)
                            })
                        }
                    }(t, $, v, q, E, L, R)
                },
                onMouseEnter(e) {
                    O || "function" != typeof T || T(e), O && a.props && "function" == typeof a.props.onMouseEnter && a.props.onMouseEnter(e), D && B && (0, p.onNavigationIntent)(e.currentTarget, !0 === U)
                },
                onTouchStart: function(e) {
                    O || "function" != typeof A || A(e), O && a.props && "function" == typeof a.props.onTouchStart && a.props.onTouchStart(e), D && B && (0, p.onNavigationIntent)(e.currentTarget, !0 === U)
                }
            };
        return (0, d.isAbsoluteUrl)($) ? F.href = $ : O && !C && ("a" !== a.type || "href" in a.props) || (F.href = (0, h.addBasePath)($)), b = O ? s.default.cloneElement(a, F) : (0, o.jsx)("a", { ...M,
            ...F,
            children: i
        }), (0, o.jsx)(g.Provider, {
            value: y,
            children: b
        })
    }
    e.r(284508);
    let g = (0, s.createContext)(p.IDLE_LINK_STATUS),
        y = () => (0, s.useContext)(g);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 768741, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(271645),
        n = e.i(705766),
        i = e.i(557951),
        a = e.i(776639),
        o = e.i(519455),
        s = e.i(846932);

    function l() {
        let [e, n] = (0, r.useState)(!1), {
            isGuest: l,
            isAuthenticated: u,
            loading: c,
            signInWithGoogle: d,
            continueAsGuest: h
        } = (0, i.useAuth)();
        (0, r.useEffect)(() => {
            let e = window.location.pathname.startsWith("/app");
            c || u || l || !e || sessionStorage.getItem("hasSeenAuth") || (setTimeout(() => n(!0), 0), sessionStorage.setItem("hasSeenAuth", "true"))
        }, [u, l, c]);
        let f = async () => {
            await d(), n(!1)
        };
        return u || l ? null : (0, t.jsx)(a.Dialog, {
            open: e,
            onOpenChange: n,
            children: (0, t.jsxs)(a.DialogContent, {
                className: "sm:max-w-md",
                children: [(0, t.jsxs)(a.DialogHeader, {
                    children: [(0, t.jsx)(a.DialogTitle, {
                        className: "text-3xl font-black text-boutique-ink dark:text-boutique-cream",
                        children: "Welcome to QuickMark"
                    }), (0, t.jsx)(a.DialogDescription, {
                        className: "text-base pt-2 text-boutique-ink/60 dark:text-boutique-cream/60 font-medium",
                        children: "Choose how you'd like to use QuickMark. You can always sign in later from the header."
                    })]
                }), (0, t.jsxs)("div", {
                    className: "flex flex-col gap-3 pt-4",
                    children: [(0, t.jsx)(s.motion.div, {
                        whileHover: {
                            scale: 1.02
                        },
                        whileTap: {
                            scale: .98
                        },
                        transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 17
                        },
                        children: (0, t.jsxs)(o.Button, {
                            onClick: f,
                            className: "w-full h-14 text-base",
                            size: "lg",
                            children: [(0, t.jsxs)("svg", {
                                className: "w-5 h-5 mr-2",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [(0, t.jsx)("path", {
                                    d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
                                }), (0, t.jsx)("polyline", {
                                    points: "10 17 15 12 10 7"
                                }), (0, t.jsx)("line", {
                                    x1: "15",
                                    x2: "3",
                                    y1: "12",
                                    y2: "12"
                                })]
                            }), "Sign in with Google"]
                        })
                    }), (0, t.jsx)(s.motion.div, {
                        whileHover: {
                            scale: 1.02
                        },
                        whileTap: {
                            scale: .98
                        },
                        transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 17
                        },
                        children: (0, t.jsxs)(o.Button, {
                            onClick: () => {
                                h(), n(!1)
                            },
                            variant: "outline",
                            className: "w-full h-14 text-base",
                            size: "lg",
                            children: [(0, t.jsxs)("svg", {
                                className: "w-5 h-5 mr-2",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [(0, t.jsx)("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "10"
                                }), (0, t.jsx)("circle", {
                                    cx: "12",
                                    cy: "10",
                                    r: "3"
                                }), (0, t.jsx)("path", {
                                    d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"
                                })]
                            }), "Continue as guest"]
                        })
                    })]
                }), (0, t.jsxs)("div", {
                    className: "pt-4 space-y-3 text-xs text-boutique-ink/60 dark:text-boutique-cream/60",
                    children: [(0, t.jsxs)("div", {
                        className: "flex items-start gap-2",
                        children: [(0, t.jsx)("span", {
                            className: "font-black text-boutique-sage",
                            children: "Signed in:"
                        }), (0, t.jsx)("span", {
                            className: "font-medium",
                            children: "Save your progress, access leaderboards, earn achievements, and sync across devices"
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "flex items-start gap-2",
                        children: [(0, t.jsx)("span", {
                            className: "font-black text-boutique-ink/40 dark:text-boutique-cream/40",
                            children: "Guest mode:"
                        }), (0, t.jsx)("span", {
                            className: "font-medium",
                            children: "Practice anonymously with all features except leaderboards and achievements"
                        })]
                    })]
                })]
            })
        })
    }
    var u = e.i(247167),
        c = e.i(522016),
        d = e.i(88653),
        h = e.i(375679),
        f = e.i(657916),
        p = e.i(784564);
    let m = {
            analytics: !1,
            advertisement: !1,
            functional: !0
        },
        x = (u.default.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ? ? "").trim();

    function b() {
        let [e, n] = (0, r.useState)(!1), [i, a] = (0, r.useState)(!1), [o, l] = (0, r.useState)(!1), [u, b] = (0, r.useState)(m);

        function y() {
            return p.ADSENSE_ENABLED && !!(x && !x.includes("YOUR_PUBLISHER_ID"))
        }(0, r.useEffect)(() => {
            a(null === localStorage.getItem(f.STORAGE_KEY)), b(function() {
                let e = localStorage.getItem(f.STORAGE_KEY);
                if (!e) return m;
                try {
                    let t = JSON.parse(e);
                    return { ...m,
                        ...t.preferences,
                        functional: !0
                    }
                } catch {
                    return m
                }
            }()), n(!0)
        }, []);
        let k = (0, r.useCallback)(() => {
            if (document.querySelector('script[src^="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]') || !y()) return;
            let e = document.createElement("script");
            e.async = !0, e.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${x}`, e.crossOrigin = "anonymous", document.head.appendChild(e)
        }, []);
        (0, r.useEffect)(() => {
            (0, f.shouldTrack)("analytics") && (0, h.initAnalytics)(), (0, f.shouldTrack)("advertisement") && k()
        }, [k]);
        let v = () => {
                w({
                    analytics: !1,
                    advertisement: !1,
                    functional: !0
                })
            },
            j = e => {
                b(e)
            },
            w = e => {
                let t = { ...e,
                    functional: !0,
                    advertisement: !!y() && e.advertisement
                };
                b(t), localStorage.setItem(f.STORAGE_KEY, JSON.stringify({
                    preferences: t,
                    timestamp: new Date().toISOString(),
                    version: "1.0"
                })), t.analytics && (0, h.initAnalytics)(), t.advertisement && k(), a(!1)
            };
        if (!e) return null;
        let S = y() ? "Personalized ads based on your interests. Helps us maintain and improve the platform. Uses Google AdSense." : "Advertising is currently disabled while we improve site quality and prepare for review. This setting will be available once ads are re-enabled.";
        return (0, t.jsx)(d.AnimatePresence, {
            children: i && (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(s.motion.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 bg-black/30 z-40",
                    onClick: () => v()
                }), (0, t.jsx)(s.motion.div, {
                    initial: {
                        y: 400,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1
                    },
                    exit: {
                        y: 400,
                        opacity: 0
                    },
                    transition: {
                        type: "spring",
                        damping: 30,
                        stiffness: 300
                    },
                    className: "fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 md:p-8",
                    children: (0, t.jsxs)("div", {
                        className: "max-w-4xl mx-auto bg-white dark:bg-dark-elevated rounded-xl shadow-2xl border border-boutique-ink/10 dark:border-white/10",
                        children: [(0, t.jsxs)("div", {
                            className: "flex items-start justify-between p-6 border-b border-boutique-ink/10 dark:border-white/10",
                            children: [(0, t.jsxs)("div", {
                                children: [(0, t.jsx)("h2", {
                                    className: "text-xl font-bold text-boutique-ink dark:text-white mb-2",
                                    children: "Your Privacy Matters"
                                }), (0, t.jsx)("p", {
                                    className: "text-sm text-boutique-ink/70 dark:text-boutique-cream/70",
                                    children: "We use cookies to enhance your experience and analyze how you use our platform."
                                })]
                            }), (0, t.jsx)("button", {
                                onClick: () => v(),
                                className: "text-boutique-ink/50 dark:text-white/50 hover:text-boutique-ink dark:hover:text-white transition-colors",
                                children: (0, t.jsxs)("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [(0, t.jsx)("line", {
                                        x1: "18",
                                        y1: "6",
                                        x2: "6",
                                        y2: "18"
                                    }), (0, t.jsx)("line", {
                                        x1: "6",
                                        y1: "6",
                                        x2: "18",
                                        y2: "18"
                                    })]
                                })
                            })]
                        }), (0, t.jsx)(s.motion.div, {
                            initial: !1,
                            animate: {
                                height: o ? "auto" : 0
                            },
                            className: "overflow-hidden",
                            children: (0, t.jsxs)("div", {
                                className: "p-6 space-y-4 border-b border-boutique-ink/10 dark:border-white/10",
                                children: [(0, t.jsx)(g, {
                                    title: "Functional Cookies",
                                    description: "Essential for basic site functionality like navigation and user sessions. Always enabled.",
                                    checked: !0,
                                    disabled: !0,
                                    disabledLabel: "Always on"
                                }), (0, t.jsx)(g, {
                                    title: "Analytics",
                                    description: "Help us understand how you use our platform so we can improve your experience. Uses Google Analytics.",
                                    checked: u.analytics,
                                    onChange: e => j({ ...u,
                                        analytics: e
                                    })
                                }), (0, t.jsx)(g, {
                                    title: "Advertisement",
                                    description: S,
                                    checked: u.advertisement,
                                    onChange: e => j({ ...u,
                                        advertisement: e
                                    }),
                                    disabled: !y(),
                                    disabledLabel: "Currently unavailable"
                                })]
                            })
                        }), (0, t.jsxs)("button", {
                            onClick: () => l(!o),
                            className: "w-full px-6 py-3 flex items-center justify-center gap-2 text-sm font-medium text-boutique-ink dark:text-white hover:bg-boutique-ink/5 dark:hover:bg-white/5 transition-colors",
                            children: [(0, t.jsxs)("span", {
                                children: [o ? "Hide" : "Customize", " Preferences"]
                            }), (0, t.jsx)(s.motion.div, {
                                animate: {
                                    rotate: 180 * !!o
                                },
                                children: (0, t.jsx)("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: (0, t.jsx)("polyline", {
                                        points: "6 9 12 15 18 9"
                                    })
                                })
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "p-6 flex gap-3 flex-col sm:flex-row",
                            children: [(0, t.jsx)("button", {
                                onClick: () => v(),
                                className: "flex-1 px-4 py-3 text-sm font-medium text-boutique-ink dark:text-white bg-boutique-ink/10 dark:bg-white/10 hover:bg-boutique-ink/20 dark:hover:bg-white/20 rounded-lg transition-colors",
                                children: "Essential Only"
                            }), o && (0, t.jsx)("button", {
                                onClick: () => w(u),
                                className: "flex-1 px-4 py-3 text-sm font-medium text-boutique-ink dark:text-white bg-boutique-sage/20 dark:bg-boutique-sage/15 hover:bg-boutique-sage/30 dark:hover:bg-boutique-sage/25 rounded-lg transition-colors font-semibold",
                                children: "Save Preferences"
                            }), (0, t.jsx)("button", {
                                onClick: () => void w({
                                    analytics: !0,
                                    advertisement: y(),
                                    functional: !0
                                }),
                                className: "flex-1 px-4 py-3 text-sm font-medium text-white bg-boutique-ink dark:bg-white dark:text-boutique-ink hover:bg-boutique-ink/90 dark:hover:bg-white/90 rounded-lg transition-colors font-semibold",
                                children: "Accept All"
                            })]
                        }), (0, t.jsx)("div", {
                            className: "px-6 py-3 bg-boutique-ink/5 dark:bg-white/5 rounded-b-xl text-xs text-boutique-ink/60 dark:text-boutique-cream/60",
                            children: (0, t.jsxs)("p", {
                                children: ["Read our", " ", (0, t.jsx)(c.default, {
                                    href: "/privacy",
                                    className: "text-boutique-ink dark:text-white hover:underline font-medium",
                                    children: "Privacy Policy"
                                }), " ", "and", " ", (0, t.jsx)(c.default, {
                                    href: "/terms",
                                    className: "text-boutique-ink dark:text-white hover:underline font-medium",
                                    children: "Terms of Service"
                                }), " ", "for more information."]
                            })
                        })]
                    })
                })]
            })
        })
    }

    function g({
        title: e,
        description: r,
        checked: n,
        disabled: i,
        disabledLabel: a,
        onChange: o
    }) {
        return (0, t.jsxs)("div", {
            className: "flex items-start gap-4",
            children: [(0, t.jsx)("input", {
                type: "checkbox",
                checked: n,
                disabled: i,
                onChange: e => o ? .(e.target.checked),
                className: "w-5 h-5 mt-1 rounded border-2 border-boutique-ink dark:border-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed accent-boutique-ink dark:accent-white"
            }), (0, t.jsxs)("div", {
                className: "flex-1",
                children: [(0, t.jsxs)("h3", {
                    className: "font-medium text-boutique-ink dark:text-white text-sm",
                    children: [e, i && (0, t.jsxs)("span", {
                        className: "text-xs text-boutique-ink/60 dark:text-white/60 ml-2",
                        children: ["(", a ? ? "Unavailable", ")"]
                    })]
                }), (0, t.jsx)("p", {
                    className: "text-xs text-boutique-ink/60 dark:text-boutique-cream/60 mt-1",
                    children: r
                })]
            })]
        })
    }
    var y = e.i(292721);

    function k() {
        let e = (0, y.useUIStore)(e => e.setTheme);
        return (0, r.useEffect)(() => {
            let t = localStorage.getItem("theme");
            t ? e(t) : e(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
        }, [e]), null
    }
    e.s(["AppProviders", 0, function({
        children: e,
        initialBackendUser: a,
        hasServerSession: o
    }) {
        return (0, r.useEffect)(() => {
            let e = new URLSearchParams(window.location.search),
                t = e.get("ref") ? .trim();
            t && localStorage.setItem("referralCode", t)
        }, []), (0, t.jsxs)(i.AuthProvider, {
            initialBackendUser: a,
            hasServerSession: o,
            children: [(0, t.jsx)(k, {}), (0, t.jsx)(n.Toaster, {
                position: "top-right"
            }), (0, t.jsx)(b, {}), (0, t.jsx)(l, {}), e]
        })
    }], 768741)
}]);