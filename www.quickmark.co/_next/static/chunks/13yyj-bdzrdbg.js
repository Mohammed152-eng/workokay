(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 88653, e => {
    "use strict";
    e.i(247167);
    var t = e.i(843476),
        r = e.i(271645),
        n = e.i(231178),
        a = e.i(947414),
        o = e.i(674008),
        i = e.i(821476),
        s = e.i(772846),
        l = r,
        u = e.i(737806);

    function c(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }
    class d extends l.Component {
        getSnapshotBeforeUpdate(e) {
            let t = this.props.childRef.current;
            if (t && e.isPresent && !this.props.isPresent) {
                let e = t.offsetParent,
                    r = (0, s.isHTMLElement)(e) && e.offsetWidth || 0,
                    n = (0, s.isHTMLElement)(e) && e.offsetHeight || 0,
                    a = this.props.sizeRef.current;
                a.height = t.offsetHeight || 0, a.width = t.offsetWidth || 0, a.top = t.offsetTop, a.left = t.offsetLeft, a.right = r - a.width - a.left, a.bottom = n - a.height - a.top
            }
            return null
        }
        componentDidUpdate() {}
        render() {
            return this.props.children
        }
    }

    function f({
        children: e,
        isPresent: n,
        anchorX: a,
        anchorY: o,
        root: i
    }) {
        let s = (0, l.useId)(),
            p = (0, l.useRef)(null),
            g = (0, l.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }),
            {
                nonce: m
            } = (0, l.useContext)(u.MotionConfigContext),
            h = function(...e) {
                return r.useCallback(function(...e) {
                    return t => {
                        let r = !1,
                            n = e.map(e => {
                                let n = c(e, t);
                                return r || "function" != typeof n || (r = !0), n
                            });
                        if (r) return () => {
                            for (let t = 0; t < n.length; t++) {
                                let r = n[t];
                                "function" == typeof r ? r() : c(e[t], null)
                            }
                        }
                    }
                }(...e), e)
            }(p, e.props ? .ref ? ? e ? .ref);
        return (0, l.useInsertionEffect)(() => {
            let {
                width: e,
                height: t,
                top: r,
                left: l,
                right: u,
                bottom: c
            } = g.current;
            if (n || !p.current || !e || !t) return;
            let d = "left" === a ? `left: ${l}` : `right: ${u}`,
                f = "bottom" === o ? `bottom: ${c}` : `top: ${r}`;
            p.current.dataset.motionPopId = s;
            let h = document.createElement("style");
            m && (h.nonce = m);
            let b = i ? ? document.head;
            return b.appendChild(h), h.sheet && h.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${d}px !important;
            ${f}px !important;
          }
        `), () => {
                b.contains(h) && b.removeChild(h)
            }
        }, [n]), (0, t.jsx)(d, {
            isPresent: n,
            childRef: p,
            sizeRef: g,
            children: l.cloneElement(e, {
                ref: h
            })
        })
    }
    let p = ({
        children: e,
        initial: n,
        isPresent: o,
        onExitComplete: s,
        custom: l,
        presenceAffectsLayout: u,
        mode: c,
        anchorX: d,
        anchorY: p,
        root: m
    }) => {
        let h = (0, a.useConstant)(g),
            b = (0, r.useId)(),
            y = !0,
            v = (0, r.useMemo)(() => (y = !1, {
                id: b,
                initial: n,
                isPresent: o,
                custom: l,
                onExitComplete: e => {
                    for (let t of (h.set(e, !0), h.values()))
                        if (!t) return;
                    s && s()
                },
                register: e => (h.set(e, !1), () => h.delete(e))
            }), [o, h, s]);
        return u && y && (v = { ...v
        }), (0, r.useMemo)(() => {
            h.forEach((e, t) => h.set(t, !1))
        }, [o]), r.useEffect(() => {
            o || h.size || !s || s()
        }, [o]), "popLayout" === c && (e = (0, t.jsx)(f, {
            isPresent: o,
            anchorX: d,
            anchorY: p,
            root: m,
            children: e
        })), (0, t.jsx)(i.PresenceContext.Provider, {
            value: v,
            children: e
        })
    };

    function g() {
        return new Map
    }
    var m = e.i(464978);
    let h = e => e.key || "";

    function b(e) {
        let t = [];
        return r.Children.forEach(e, e => {
            (0, r.isValidElement)(e) && t.push(e)
        }), t
    }
    e.s(["AnimatePresence", 0, ({
        children: e,
        custom: i,
        initial: s = !0,
        onExitComplete: l,
        presenceAffectsLayout: u = !0,
        mode: c = "sync",
        propagate: d = !1,
        anchorX: f = "left",
        anchorY: g = "top",
        root: y
    }) => {
        let [v, x] = (0, m.usePresence)(d), w = (0, r.useMemo)(() => b(e), [e]), k = d && !v ? [] : w.map(h), S = (0, r.useRef)(!0), _ = (0, r.useRef)(w), j = (0, a.useConstant)(() => new Map), E = (0, r.useRef)(new Set), [q, A] = (0, r.useState)(w), [C, O] = (0, r.useState)(w);
        (0, o.useIsomorphicLayoutEffect)(() => {
            S.current = !1, _.current = w;
            for (let e = 0; e < C.length; e++) {
                let t = h(C[e]);
                k.includes(t) ? (j.delete(t), E.current.delete(t)) : !0 !== j.get(t) && j.set(t, !1)
            }
        }, [C, k.length, k.join("-")]);
        let I = [];
        if (w !== q) {
            let e = [...w];
            for (let t = 0; t < C.length; t++) {
                let r = C[t],
                    n = h(r);
                k.includes(n) || (e.splice(t, 0, r), I.push(r))
            }
            return "wait" === c && I.length && (e = I), O(b(e)), A(w), null
        }
        let {
            forceRender: N
        } = (0, r.useContext)(n.LayoutGroupContext);
        return (0, t.jsx)(t.Fragment, {
            children: C.map(e => {
                let r = h(e),
                    n = (!d || !!v) && (w === C || k.includes(r));
                return (0, t.jsx)(p, {
                    isPresent: n,
                    initial: (!S.current || !!s) && void 0,
                    custom: i,
                    presenceAffectsLayout: u,
                    mode: c,
                    root: y,
                    onExitComplete: n ? void 0 : () => {
                        if (E.current.has(r) || (E.current.add(r), !j.has(r))) return;
                        j.set(r, !0);
                        let e = !0;
                        j.forEach(t => {
                            t || (e = !1)
                        }), e && (N ? .(), O(_.current), d && x ? .(), l && l())
                    },
                    anchorX: f,
                    anchorY: g,
                    children: e
                }, r)
            })
        })
    }], 88653)
}, 784564, e => {
    "use strict";
    e.s(["ADSENSE_ENABLED", 0, !1, "DONATIONS_ENABLED", 0, !1, "ENABLE_AI_EXPLANATIONS", 0, !1, "TOPICAL_OVERLAYS_ENABLED", 0, !0])
}, 232136, e => {
    e.q("/_next/static/media/pdf.worker.min.0w~2939~virkk.mjs")
}, 768834, e => {
    "use strict";
    var t = e.i(271645);
    let r = e => {
            let t, r = new Set,
                n = (e, n) => {
                    let a = "function" == typeof e ? e(t) : e;
                    if (!Object.is(a, t)) {
                        let e = t;
                        t = (null != n ? n : "object" != typeof a || null === a) ? a : Object.assign({}, t, a), r.forEach(r => r(t, e))
                    }
                },
                a = () => t,
                o = {
                    setState: n,
                    getState: a,
                    getInitialState: () => i,
                    subscribe: e => (r.add(e), () => r.delete(e))
                },
                i = t = e(n, a, o);
            return o
        },
        n = e => {
            let n = e ? r(e) : r,
                a = e => (function(e, r = e => e) {
                    let n = t.default.useSyncExternalStore(e.subscribe, t.default.useCallback(() => r(e.getState()), [e, r]), t.default.useCallback(() => r(e.getInitialState()), [e, r]));
                    return t.default.useDebugValue(n), n
                })(n, e);
            return Object.assign(a, n), a
        };
    e.s(["create", 0, e => e ? n(e) : n], 768834)
}, 705766, e => {
    "use strict";
    let t, r;
    var n, a = e.i(271645);
    let o = {
            data: ""
        },
        i = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
        s = /\/\*[^]*?\*\/|  +/g,
        l = /\n+/g,
        u = (e, t) => {
            let r = "",
                n = "",
                a = "";
            for (let o in e) {
                let i = e[o];
                "@" == o[0] ? "i" == o[1] ? r = o + " " + i + ";" : n += "f" == o[1] ? u(i, o) : o + "{" + u(i, "k" == o[1] ? "" : t) + "}" : "object" == typeof i ? n += u(i, t ? t.replace(/([^,])+/g, e => o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, t => /&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t)) : o) : null != i && (o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase(), a += u.p ? u.p(o, i) : o + ":" + i + ";")
            }
            return r + (t && a ? t + "{" + a + "}" : a) + n
        },
        c = {},
        d = e => {
            if ("object" == typeof e) {
                let t = "";
                for (let r in e) t += r + d(e[r]);
                return t
            }
            return e
        };

    function f(e) {
        let t, r, n = this || {},
            a = e.call ? e(n.p) : e;
        return ((e, t, r, n, a) => {
            var o;
            let f = d(e),
                p = c[f] || (c[f] = (e => {
                    let t = 0,
                        r = 11;
                    for (; t < e.length;) r = 101 * r + e.charCodeAt(t++) >>> 0;
                    return "go" + r
                })(f));
            if (!c[p]) {
                let t = f !== e ? e : (e => {
                    let t, r, n = [{}];
                    for (; t = i.exec(e.replace(s, ""));) t[4] ? n.shift() : t[3] ? (r = t[3].replace(l, " ").trim(), n.unshift(n[0][r] = n[0][r] || {})) : n[0][t[1]] = t[2].replace(l, " ").trim();
                    return n[0]
                })(e);
                c[p] = u(a ? {
                    ["@keyframes " + p]: t
                } : t, r ? "" : "." + p)
            }
            let g = r && c.g ? c.g : null;
            return r && (c.g = c[p]), o = c[p], g ? t.data = t.data.replace(g, o) : -1 === t.data.indexOf(o) && (t.data = n ? o + t.data : t.data + o), p
        })(a.unshift ? a.raw ? (t = [].slice.call(arguments, 1), r = n.p, a.reduce((e, n, a) => {
            let o = t[a];
            if (o && o.call) {
                let e = o(r),
                    t = e && e.props && e.props.className || /^go/.test(e) && e;
                o = t ? "." + t : e && "object" == typeof e ? e.props ? "" : u(e, "") : !1 === e ? "" : e
            }
            return e + n + (null == o ? "" : o)
        }, "")) : a.reduce((e, t) => Object.assign(e, t && t.call ? t(n.p) : t), {}) : a, (e => {
            if ("object" == typeof window) {
                let t = (e ? e.querySelector("#_goober") : window._goober) || Object.assign(document.createElement("style"), {
                    innerHTML: " ",
                    id: "_goober"
                });
                return t.nonce = window.__nonce__, t.parentNode || (e || document.head).appendChild(t), t.firstChild
            }
            return e || o
        })(n.target), n.g, n.o, n.k)
    }
    f.bind({
        g: 1
    });
    let p, g, m, h = f.bind({
        k: 1
    });

    function b(e, t) {
        let r = this || {};
        return function() {
            let n = arguments;

            function a(o, i) {
                let s = Object.assign({}, o),
                    l = s.className || a.className;
                r.p = Object.assign({
                    theme: g && g()
                }, s), r.o = / *go\d+/.test(l), s.className = f.apply(r, n) + (l ? " " + l : ""), t && (s.ref = i);
                let u = e;
                return e[0] && (u = s.as || e, delete s.as), m && u[0] && m(s), p(u, s)
            }
            return t ? t(a) : a
        }
    }
    var y = (e, t) => "function" == typeof e ? e(t) : e,
        v = (t = 0, () => (++t).toString()),
        x = () => {
            if (void 0 === r && "u" > typeof window) {
                let e = matchMedia("(prefers-reduced-motion: reduce)");
                r = !e || e.matches
            }
            return r
        },
        w = "default",
        k = (e, t) => {
            let {
                toastLimit: r
            } = e.settings;
            switch (t.type) {
                case 0:
                    return { ...e,
                        toasts: [t.toast, ...e.toasts].slice(0, r)
                    };
                case 1:
                    return { ...e,
                        toasts: e.toasts.map(e => e.id === t.toast.id ? { ...e,
                            ...t.toast
                        } : e)
                    };
                case 2:
                    let {
                        toast: n
                    } = t;
                    return k(e, {
                        type: +!!e.toasts.find(e => e.id === n.id),
                        toast: n
                    });
                case 3:
                    let {
                        toastId: a
                    } = t;
                    return { ...e,
                        toasts: e.toasts.map(e => e.id === a || void 0 === a ? { ...e,
                            dismissed: !0,
                            visible: !1
                        } : e)
                    };
                case 4:
                    return void 0 === t.toastId ? { ...e,
                        toasts: []
                    } : { ...e,
                        toasts: e.toasts.filter(e => e.id !== t.toastId)
                    };
                case 5:
                    return { ...e,
                        pausedAt: t.time
                    };
                case 6:
                    let o = t.time - (e.pausedAt || 0);
                    return { ...e,
                        pausedAt: void 0,
                        toasts: e.toasts.map(e => ({ ...e,
                            pauseDuration: e.pauseDuration + o
                        }))
                    }
            }
        },
        S = [],
        _ = {
            toasts: [],
            pausedAt: void 0,
            settings: {
                toastLimit: 20
            }
        },
        j = {},
        E = (e, t = w) => {
            j[t] = k(j[t] || _, e), S.forEach(([e, r]) => {
                e === t && r(j[t])
            })
        },
        q = e => Object.keys(j).forEach(t => E(e, t)),
        A = (e = w) => t => {
            E(t, e)
        },
        C = {
            blank: 4e3,
            error: 4e3,
            success: 2e3,
            loading: 1 / 0,
            custom: 4e3
        },
        O = e => (t, r) => {
            let n, a = ((e, t = "blank", r) => ({
                createdAt: Date.now(),
                visible: !0,
                dismissed: !1,
                type: t,
                ariaProps: {
                    role: "status",
                    "aria-live": "polite"
                },
                message: e,
                pauseDuration: 0,
                ...r,
                id: (null == r ? void 0 : r.id) || v()
            }))(t, e, r);
            return A(a.toasterId || (n = a.id, Object.keys(j).find(e => j[e].toasts.some(e => e.id === n))))({
                type: 2,
                toast: a
            }), a.id
        },
        I = (e, t) => O("blank")(e, t);
    I.error = O("error"), I.success = O("success"), I.loading = O("loading"), I.custom = O("custom"), I.dismiss = (e, t) => {
        let r = {
            type: 3,
            toastId: e
        };
        t ? A(t)(r) : q(r)
    }, I.dismissAll = e => I.dismiss(void 0, e), I.remove = (e, t) => {
        let r = {
            type: 4,
            toastId: e
        };
        t ? A(t)(r) : q(r)
    }, I.removeAll = e => I.remove(void 0, e), I.promise = (e, t, r) => {
        let n = I.loading(t.loading, { ...r,
            ...null == r ? void 0 : r.loading
        });
        return "function" == typeof e && (e = e()), e.then(e => {
            let a = t.success ? y(t.success, e) : void 0;
            return a ? I.success(a, {
                id: n,
                ...r,
                ...null == r ? void 0 : r.success
            }) : I.dismiss(n), e
        }).catch(e => {
            let a = t.error ? y(t.error, e) : void 0;
            a ? I.error(a, {
                id: n,
                ...r,
                ...null == r ? void 0 : r.error
            }) : I.dismiss(n)
        }), e
    };
    var N = 1e3,
        P = h `
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
        M = h `
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
        L = h `
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
        R = b("div")
    `
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${P} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${M} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${L} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, D = h `
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, T = b("div")
    `
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${D} 1s linear infinite;
`, $ = h `
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, z = h `
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, F = b("div")
    `
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${$} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${z} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, G = b("div")
    `
  position: absolute;
`, Q = b("div")
    `
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, U = h `
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, W = b("div")
    `
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${U} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, B = ({
        toast: e
    }) => {
        let {
            icon: t,
            type: r,
            iconTheme: n
        } = e;
        return void 0 !== t ? "string" == typeof t ? a.createElement(W, null, t) : t : "blank" === r ? null : a.createElement(Q, null, a.createElement(T, { ...n
        }), "loading" !== r && a.createElement(G, null, "error" === r ? a.createElement(R, { ...n
        }) : a.createElement(F, { ...n
        })))
    }, V = b("div")
    `
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, H = b("div")
    `
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, Y = a.memo(({
        toast: e,
        position: t,
        style: r,
        children: n
    }) => {
        let o = e.height ? ((e, t) => {
                let r = e.includes("top") ? 1 : -1,
                    [n, a] = x() ? ["0%{opacity:0;} 100%{opacity:1;}", "0%{opacity:1;} 100%{opacity:0;}"] : [`
0% {transform: translate3d(0,${-200*r}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*r}%,-1px) scale(.6); opacity:0;}
`];
                return {
                    animation: t ? `${h(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${h(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
                }
            })(e.position || t || "top-center", e.visible) : {
                opacity: 0
            },
            i = a.createElement(B, {
                toast: e
            }),
            s = a.createElement(H, { ...e.ariaProps
            }, y(e.message, e));
        return a.createElement(V, {
            className: e.className,
            style: { ...o,
                ...r,
                ...e.style
            }
        }, "function" == typeof n ? n({
            icon: i,
            message: s
        }) : a.createElement(a.Fragment, null, i, s))
    });
    n = a.createElement, u.p = void 0, p = n, g = void 0, m = void 0;
    var Z = ({
            id: e,
            className: t,
            style: r,
            onHeightUpdate: n,
            children: o
        }) => {
            let i = a.useCallback(t => {
                if (t) {
                    let r = () => {
                        n(e, t.getBoundingClientRect().height)
                    };
                    r(), new MutationObserver(r).observe(t, {
                        subtree: !0,
                        childList: !0,
                        characterData: !0
                    })
                }
            }, [e, n]);
            return a.createElement("div", {
                ref: i,
                className: t,
                style: r
            }, o)
        },
        K = f `
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;
    e.s(["Toaster", 0, ({
        reverseOrder: e,
        position: t = "top-center",
        toastOptions: r,
        gutter: n,
        children: o,
        toasterId: i,
        containerStyle: s,
        containerClassName: l
    }) => {
        let {
            toasts: u,
            handlers: c
        } = ((e, t = "default") => {
            let {
                toasts: r,
                pausedAt: n
            } = ((e = {}, t = w) => {
                let [r, n] = (0, a.useState)(j[t] || _), o = (0, a.useRef)(j[t]);
                (0, a.useEffect)(() => (o.current !== j[t] && n(j[t]), S.push([t, n]), () => {
                    let e = S.findIndex(([e]) => e === t);
                    e > -1 && S.splice(e, 1)
                }), [t]);
                let i = r.toasts.map(t => {
                    var r, n, a;
                    return { ...e,
                        ...e[t.type],
                        ...t,
                        removeDelay: t.removeDelay || (null == (r = e[t.type]) ? void 0 : r.removeDelay) || (null == e ? void 0 : e.removeDelay),
                        duration: t.duration || (null == (n = e[t.type]) ? void 0 : n.duration) || (null == e ? void 0 : e.duration) || C[t.type],
                        style: { ...e.style,
                            ...null == (a = e[t.type]) ? void 0 : a.style,
                            ...t.style
                        }
                    }
                });
                return { ...r,
                    toasts: i
                }
            })(e, t), o = (0, a.useRef)(new Map).current, i = (0, a.useCallback)((e, t = N) => {
                if (o.has(e)) return;
                let r = setTimeout(() => {
                    o.delete(e), s({
                        type: 4,
                        toastId: e
                    })
                }, t);
                o.set(e, r)
            }, []);
            (0, a.useEffect)(() => {
                if (n) return;
                let e = Date.now(),
                    a = r.map(r => {
                        if (r.duration === 1 / 0) return;
                        let n = (r.duration || 0) + r.pauseDuration - (e - r.createdAt);
                        if (n < 0) {
                            r.visible && I.dismiss(r.id);
                            return
                        }
                        return setTimeout(() => I.dismiss(r.id, t), n)
                    });
                return () => {
                    a.forEach(e => e && clearTimeout(e))
                }
            }, [r, n, t]);
            let s = (0, a.useCallback)(A(t), [t]),
                l = (0, a.useCallback)(() => {
                    s({
                        type: 5,
                        time: Date.now()
                    })
                }, [s]),
                u = (0, a.useCallback)((e, t) => {
                    s({
                        type: 1,
                        toast: {
                            id: e,
                            height: t
                        }
                    })
                }, [s]),
                c = (0, a.useCallback)(() => {
                    n && s({
                        type: 6,
                        time: Date.now()
                    })
                }, [n, s]),
                d = (0, a.useCallback)((e, t) => {
                    let {
                        reverseOrder: n = !1,
                        gutter: a = 8,
                        defaultPosition: o
                    } = t || {}, i = r.filter(t => (t.position || o) === (e.position || o) && t.height), s = i.findIndex(t => t.id === e.id), l = i.filter((e, t) => t < s && e.visible).length;
                    return i.filter(e => e.visible).slice(...n ? [l + 1] : [0, l]).reduce((e, t) => e + (t.height || 0) + a, 0)
                }, [r]);
            return (0, a.useEffect)(() => {
                r.forEach(e => {
                    if (e.dismissed) i(e.id, e.removeDelay);
                    else {
                        let t = o.get(e.id);
                        t && (clearTimeout(t), o.delete(e.id))
                    }
                })
            }, [r, i]), {
                toasts: r,
                handlers: {
                    updateHeight: u,
                    startPause: l,
                    endPause: c,
                    calculateOffset: d
                }
            }
        })(r, i);
        return a.createElement("div", {
            "data-rht-toaster": i || "",
            style: {
                position: "fixed",
                zIndex: 9999,
                top: 16,
                left: 16,
                right: 16,
                bottom: 16,
                pointerEvents: "none",
                ...s
            },
            className: l,
            onMouseEnter: c.startPause,
            onMouseLeave: c.endPause
        }, u.map(r => {
            let i, s, l = r.position || t,
                u = c.calculateOffset(r, {
                    reverseOrder: e,
                    gutter: n,
                    defaultPosition: t
                }),
                d = (i = l.includes("top"), s = l.includes("center") ? {
                    justifyContent: "center"
                } : l.includes("right") ? {
                    justifyContent: "flex-end"
                } : {}, {
                    left: 0,
                    right: 0,
                    display: "flex",
                    position: "absolute",
                    transition: x() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
                    transform: `translateY(${u*(i?1:-1)}px)`,
                    ...i ? {
                        top: 0
                    } : {
                        bottom: 0
                    },
                    ...s
                });
            return a.createElement(Z, {
                id: r.id,
                key: r.id,
                onHeightUpdate: c.updateHeight,
                className: r.visible ? K : "",
                style: d
            }, "custom" === r.type ? y(r.message, r) : o ? o(r) : a.createElement(Y, {
                toast: r,
                position: l
            }))
        }))
    }, "default", 0, I], 705766)
}, 422233, e => {
    "use strict";
    let t, r = "u" > typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto),
        n = new Uint8Array(16),
        a = [];
    for (let e = 0; e < 256; ++e) a.push((e + 256).toString(16).slice(1));
    e.s(["v4", 0, function(e, o, i) {
        if (r && !o && !e) return r();
        let s = (e = e || {}).random ? ? e.rng ? .() ? ? function() {
            if (!t) {
                if ("u" < typeof crypto || !crypto.getRandomValues) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                t = crypto.getRandomValues.bind(crypto)
            }
            return t(n)
        }();
        if (s.length < 16) throw Error("Random bytes length must be >= 16");
        if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, o) {
            if ((i = i || 0) < 0 || i + 16 > o.length) throw RangeError(`UUID byte range ${i}:${i+15} is out of buffer bounds`);
            for (let e = 0; e < 16; ++e) o[i + e] = s[e];
            return o
        }
        return function(e, t = 0) {
            return (a[e[t + 0]] + a[e[t + 1]] + a[e[t + 2]] + a[e[t + 3]] + "-" + a[e[t + 4]] + a[e[t + 5]] + "-" + a[e[t + 6]] + a[e[t + 7]] + "-" + a[e[t + 8]] + a[e[t + 9]] + "-" + a[e[t + 10]] + a[e[t + 11]] + a[e[t + 12]] + a[e[t + 13]] + a[e[t + 14]] + a[e[t + 15]]).toLowerCase()
        }(s)
    }], 422233)
}, 257051, 828188, 767164, 218594, e => {
    "use strict";
    var t = e.i(181595);
    e.s(["onIdTokenChanged", () => t.x], 257051), e.s(["signInWithPopup", () => t.d], 828188), e.s(["signOut", () => t.D], 767164), e.s(["onAuthStateChanged", () => t.z], 218594)
}, 785305, e => {
    "use strict";
    var t = e.i(768834),
        r = e.i(251688),
        n = e.i(422233);
    let a = "attemptQueue";

    function o() {
        return new Promise((e, t) => {
            let r = indexedDB.open("quickmark-pwa-sync", 1);
            r.onerror = () => {
                t(Error("Failed to open sync queue database"))
            }, r.onsuccess = () => {
                e(r.result)
            }, r.onupgradeneeded = e => {
                let t = e.target.result,
                    r = e.oldVersion;
                if (t.objectStoreNames.contains(a)) {
                    if (r < 1) {
                        let t = e.target.transaction,
                            r = t ? .objectStore(a);
                        r && !r.indexNames.contains("userId") && r.createIndex("userId", "userId", {
                            unique: !1
                        })
                    }
                } else {
                    let e = t.createObjectStore(a, {
                        keyPath: "id"
                    });
                    e.createIndex("userId", "userId", {
                        unique: !1
                    }), e.createIndex("status", "status", {
                        unique: !1
                    }), e.createIndex("queuedAt", "queuedAt", {
                        unique: !1
                    }), e.createIndex("lastRetryAt", "lastRetryAt", {
                        unique: !1
                    })
                }
            }
        })
    }
    async function i() {
        let e = await o();
        return new Promise((t, r) => {
            let n = e.transaction(a, "readonly").objectStore(a).getAll();
            n.onsuccess = () => {
                t(n.result)
            }, n.onerror = () => {
                r(Error("Failed to list queued attempts"))
            }
        })
    }
    async function s(e) {
        let t = await o();
        return new Promise((r, n) => {
            let o = t.transaction(a, "readwrite").objectStore(a).add(e);
            o.onsuccess = () => {
                r()
            }, o.onerror = () => {
                n(Error("Failed to add queued attempt"))
            }
        })
    }
    async function l(e) {
        let t = await o();
        return new Promise((r, n) => {
            let o = t.transaction(a, "readwrite").objectStore(a).put(e);
            o.onsuccess = () => {
                r()
            }, o.onerror = () => {
                n(Error("Failed to update queued attempt"))
            }
        })
    }
    async function u(e) {
        let t = await o();
        return new Promise((r, n) => {
            let o = t.transaction(a, "readwrite").objectStore(a).delete(e);
            o.onsuccess = () => {
                r()
            }, o.onerror = () => {
                n(Error("Failed to delete queued attempt"))
            }
        })
    }
    async function c(e) {
        let t = await o();
        return new Promise((r, n) => {
            let o = t.transaction(a, "readonly").objectStore(a).index("status").count(e);
            o.onsuccess = () => {
                r(o.result)
            }, o.onerror = () => {
                n(Error("Failed to count queued attempts"))
            }
        })
    }
    let d = [6e4, 3e5, 9e5, 36e5, 36e5];
    async function f(e, t = null) {
        let r = (0, n.v4)(),
            a = {
                id: r,
                userId: t,
                attempt: e,
                queuedAt: Date.now(),
                retryCount: 0,
                lastRetryAt: null,
                status: "pending"
            };
        return await s(a), window.dispatchEvent(new CustomEvent("sync-queue-updated")), r
    }
    async function p() {
        return (await i()).filter(e => "failed" !== e.status || !(e.retryCount >= 5))
    }
    async function g(e = null) {
        let t = await p(),
            r = Date.now();
        return t.filter(t => {
            if (t.userId !== e) return !1;
            if ("pending" === t.status) return !0;
            if (t.lastRetryAt && t.retryCount > 0) {
                let e = Math.min(t.retryCount - 1, d.length - 1),
                    n = d[e];
                return r - t.lastRetryAt >= n
            }
            return !0
        })
    }
    async function m(e) {
        for (let t of (await i())) t.userId !== e && await u(t.id);
        window.dispatchEvent(new CustomEvent("sync-queue-updated"))
    }
    async function h(e) {
        await u(e), window.dispatchEvent(new CustomEvent("sync-queue-updated"))
    }
    async function b(e, t) {
        let r = (await i()).find(t => t.id === e);
        r && (t ? await h(e) : (r.retryCount++, r.lastRetryAt = Date.now(), r.retryCount >= 5 ? r.status = "failed" : r.status = "retrying", await l(r), window.dispatchEvent(new CustomEvent("sync-queue-updated"))))
    }
    async function y() {
        let [e, t, r] = await Promise.all([c("pending"), c("retrying"), c("failed")]);
        return {
            total: e + t + r,
            pending: e,
            retrying: t,
            failed: r
        }
    }
    let v = (0, t.create)((e, t) => ({
        queueLength: 0,
        get queueCount() {
            return t().queueLength
        },
        isSyncing: !1,
        lastSyncAt: null,
        lastSyncError: null,
        stats: {
            total: 0,
            pending: 0,
            retrying: 0,
            failed: 0
        },
        queueAttempt: async (e, r = null) => {
            let n = await f(e, r);
            return await t().refreshQueueStats(), n
        },
        processSyncQueue: async (n = null) => {
            if (!t().isSyncing) {
                e({
                    isSyncing: !0,
                    lastSyncError: null
                });
                try {
                    let a = await g(n);
                    if (0 === a.length) return void e({
                        isSyncing: !1,
                        lastSyncAt: Date.now()
                    });
                    let o = 0,
                        i = 0;
                    for (let e of a) try {
                        let t = e.attempt;
                        await r.userApi.createAttempt(t), await h(e.id), o++
                    } catch (t) {
                        t instanceof Error && (t.message.includes("already exists") || t.message.includes("duplicate") || t instanceof r.ApiError && 409 === t.status) ? (console.log("Duplicate attempt detected, removing from queue:", e.id), await h(e.id), o++) : (await b(e.id, !1), i++, console.error("Failed to sync attempt:", t))
                    }
                    await t().refreshQueueStats(), e({
                        isSyncing: !1,
                        lastSyncAt: Date.now(),
                        lastSyncError: i > 0 ? `${i} attempt(s) failed to sync` : null
                    }), o > 0 && window.dispatchEvent(new CustomEvent("attempts-synced", {
                        detail: {
                            count: o
                        }
                    }))
                } catch (t) {
                    e({
                        isSyncing: !1,
                        lastSyncError: t instanceof Error ? t.message : "Sync failed"
                    }), console.error("Sync queue processing error:", t)
                }
            }
        },
        refreshQueueStats: async () => {
            try {
                let t = await y();
                e({
                    queueLength: t.pending + t.retrying,
                    stats: t
                })
            } catch (e) {
                console.error("Failed to refresh queue stats:", e)
            }
        },
        clearOtherUsersQueue: async e => {
            await m(e), await t().refreshQueueStats()
        },
        clearQueue: () => {
            e({
                queueLength: 0,
                isSyncing: !1,
                lastSyncAt: null,
                lastSyncError: null,
                stats: {
                    total: 0,
                    pending: 0,
                    retrying: 0,
                    failed: 0
                }
            })
        }
    }));
    v.getState().refreshQueueStats(), window.addEventListener("sync-queue-updated", () => {
        v.getState().refreshQueueStats()
    }), e.s(["useSyncStore", 0, v], 785305)
}, 557951, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(271645);
    e.i(151718);
    var n = e.i(257051),
        a = e.i(828188),
        o = e.i(767164),
        i = e.i(218594),
        s = e.i(959141),
        l = e.i(963416),
        u = e.i(251688),
        c = e.i(785305),
        d = e.i(705766);
    let f = "igcse-welcome-setup-completed",
        p = (0, r.createContext)(void 0);
    async function g(e) {
        let t = e ? JSON.stringify({
                idToken: e
            }) : void 0,
            r = await fetch("/api/auth/session", {
                method: e ? "POST" : "DELETE",
                headers: t ? {
                    "Content-Type": "application/json"
                } : void 0,
                body: t
            });
        if (!r.ok) {
            if (e) {
                let e = !1;
                try {
                    e = (await fetch("/api/auth/session", {
                        method: "DELETE"
                    })).ok
                } catch (e) {
                    console.error("Failed to clear stale auth session cookie after rejected token sync:", e)
                }
                if (401 === r.status && e) return
            }
            throw Error(`Failed to sync auth session cookie: ${r.status}`)
        }
    }
    e.s(["AuthProvider", 0, function({
        children: e,
        initialBackendUser: m,
        hasServerSession: h
    }) {
        let [b, y] = (0, r.useState)(null), [v, x] = (0, r.useState)(m), [w, k] = (0, r.useState)(!h), [S, _] = (0, r.useState)(!1), [j, E] = (0, r.useState)(!1), q = async () => {
            try {
                let e = await u.userApi.getProfile();
                x(e)
            } catch (e) {
                console.error("Error fetching backend user profile:", e)
            }
        };
        (0, r.useEffect)(() => {
            let e = (0, l.getStoredTestAuthSession)();
            if (e) {
                let t = !1;
                return k(!0), _(!1), localStorage.removeItem("guestMode"), (async () => {
                    try {
                        await g(e.token);
                        let r = await u.userApi.syncUser();
                        if (t) return;
                        y(null), x(r), r.isNewUser && !localStorage.getItem(f) && E(!0)
                    } catch (e) {
                        console.error("Error bootstrapping test auth session:", e), t || x(null)
                    } finally {
                        t || k(!1)
                    }
                })(), () => {
                    t = !0
                }
            }
            if (!s.hasConfig) return void k(!1);
            if ("true" === localStorage.getItem("guestMode")) {
                _(!0), k(!1);
                return
            }
            let t = (0, i.onAuthStateChanged)(s.auth, async e => {
                if (y(e), e) {
                    _(!1), localStorage.removeItem("guestMode");
                    try {
                        let e = await u.userApi.syncUser();
                        await q(), e.isNewUser && !localStorage.getItem(f) && E(!0)
                    } catch (e) {
                        console.error("Error syncing with backend:", e)
                    }
                } else h && m || x(null);
                k(!1)
            });
            return () => t()
        }, [h, m]), (0, r.useEffect)(() => {
            if ((0, l.getStoredTestAuthSession)() || !s.hasConfig) return;
            let e = (0, n.onIdTokenChanged)(s.auth, async e => {
                if (!e) {
                    try {
                        await g(null)
                    } catch (e) {
                        console.error("Failed to clear auth session cookie:", e)
                    }
                    return
                }
                try {
                    let t = await e.getIdToken();
                    await g(t)
                } catch {
                    console.warn("Failed to update auth session token; server session may be unavailable until next refresh.")
                }
            });
            return () => e()
        }, []);
        let A = async () => {
                if (!s.hasConfig) {
                    d.default.error("Authentication is unavailable in this environment"), k(!1);
                    return
                }
                try {
                    k(!0);
                    let e = await (0, a.signInWithPopup)(s.auth, s.googleProvider);
                    localStorage.removeItem("guestMode"), _(!1), setTimeout(async () => {
                        try {
                            let t = c.useSyncStore.getState(),
                                r = e.user.uid;
                            await t.clearOtherUsersQueue(r), t.stats.total > 0 && (d.default.loading("Syncing your offline attempts...", {
                                id: "guest-migration"
                            }), await t.processSyncQueue(r), d.default.success("Offline attempts synced!", {
                                id: "guest-migration"
                            }))
                        } catch (e) {
                            console.error("Failed to migrate queued attempts:", e)
                        }
                    }, 1e3), d.default.success("Signed in successfully!")
                } catch (t) {
                    console.error("Error signing in with Google:", t);
                    let e = t instanceof Error ? t.message : "Failed to sign in with Google";
                    d.default.error(e)
                } finally {
                    k(!1)
                }
            },
            C = async () => {
                if ((0, l.getStoredTestAuthSession)()) {
                    (0, l.clearStoredTestAuthSession)(), y(null), x(null);
                    try {
                        await g(null)
                    } catch (e) {
                        console.error("Failed to clear auth session cookie after test sign-out:", e)
                    }
                    d.default.success("Signed out successfully");
                    return
                }
                if (!s.hasConfig) {
                    y(null), x(null);
                    return
                }
                try {
                    await (0, o.signOut)(s.auth), y(null), x(null);
                    try {
                        await g(null)
                    } catch (e) {
                        console.error("Failed to clear auth session cookie after sign-out:", e)
                    }
                    d.default.success("Signed out successfully")
                } catch (t) {
                    console.error("Error signing out:", t);
                    let e = t instanceof Error ? t.message : "Failed to sign out";
                    d.default.error(e)
                }
            },
            O = async () => {
                let e = (0, l.getStoredTestAuthSession)();
                if (e) return e.token;
                if (!b) return null;
                try {
                    return await b.getIdToken()
                } catch (e) {
                    return console.error("Error getting ID token:", e), null
                }
            },
            I = !!(b || v || (0, l.isTestAuthEnabled)() && (0, l.getStoredTestAuthSession)()) && !S;
        return (0, t.jsx)(p.Provider, {
            value: {
                user: b,
                backendUser: v,
                loading: w,
                isGuest: S,
                isAuthenticated: I,
                showWelcomeSetup: j,
                signInWithGoogle: A,
                signOut: C,
                continueAsGuest: () => {
                    _(!0), localStorage.setItem("guestMode", "true"), k(!1)
                },
                getIdToken: O,
                refreshBackendUser: q,
                dismissWelcomeSetup: () => {
                    E(!1), localStorage.setItem(f, "true")
                }
            },
            children: e
        })
    }, "useAuth", 0, function() {
        let e = (0, r.useContext)(p);
        if (void 0 === e) throw Error("useAuth must be used within an AuthProvider");
        return e
    }])
}, 207670, e => {
    "use strict";
    e.s(["clsx", 0, function() {
        for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++)(e = arguments[r]) && (t = function e(t) {
            var r, n, a = "";
            if ("string" == typeof t || "number" == typeof t) a += t;
            else if ("object" == typeof t)
                if (Array.isArray(t)) {
                    var o = t.length;
                    for (r = 0; r < o; r++) t[r] && (n = e(t[r])) && (a && (a += " "), a += n)
                } else
                    for (n in t) t[n] && (a && (a += " "), a += n);
            return a
        }(e)) && (n && (n += " "), n += t);
        return n
    }])
}, 755838, (e, t, r) => {
    "use strict";
    var n = e.r(271645),
        a = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        o = n.useState,
        i = n.useEffect,
        s = n.useLayoutEffect,
        l = n.useDebugValue;

    function u(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var r = t();
            return !a(e, r)
        } catch (e) {
            return !0
        }
    }
    var c = "u" < typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
        return t()
    } : function(e, t) {
        var r = t(),
            n = o({
                inst: {
                    value: r,
                    getSnapshot: t
                }
            }),
            a = n[0].inst,
            c = n[1];
        return s(function() {
            a.value = r, a.getSnapshot = t, u(a) && c({
                inst: a
            })
        }, [e, r, t]), i(function() {
            return u(a) && c({
                inst: a
            }), e(function() {
                u(a) && c({
                    inst: a
                })
            })
        }, [e]), l(r), r
    };
    r.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c
}, 802239, (e, t, r) => {
    "use strict";
    t.exports = e.r(755838)
}, 799676, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(271645),
        n = e.i(30207),
        a = e.i(934620);
    e.i(174080);
    var o = e.i(991918),
        i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
            let a = (0, o.createSlot)(`Primitive.${n}`),
                i = r.forwardRef((e, r) => {
                    let {
                        asChild: o,
                        ...i
                    } = e;
                    return "u" > typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(o ? a : n, { ...i,
                        ref: r
                    })
                });
            return i.displayName = `Primitive.${n}`, { ...e,
                [n]: i
            }
        }, {}),
        s = e.i(802239);

    function l() {
        return () => {}
    }
    var u = "Avatar",
        [c, d] = function(e, n = []) {
            let a = [],
                o = () => {
                    let t = a.map(e => r.createContext(e));
                    return function(n) {
                        let a = n ? .[e] || t;
                        return r.useMemo(() => ({
                            [`__scope${e}`]: { ...n,
                                [e]: a
                            }
                        }), [n, a])
                    }
                };
            return o.scopeName = e, [function(n, o) {
                let i = r.createContext(o);
                i.displayName = n + "Context";
                let s = a.length;
                a = [...a, o];
                let l = n => {
                    let {
                        scope: a,
                        children: o,
                        ...l
                    } = n, u = a ? .[e] ? .[s] || i, c = r.useMemo(() => l, Object.values(l));
                    return (0, t.jsx)(u.Provider, {
                        value: c,
                        children: o
                    })
                };
                return l.displayName = n + "Provider", [l, function(t, a) {
                    let l = a ? .[e] ? .[s] || i,
                        u = r.useContext(l);
                    if (u) return u;
                    if (void 0 !== o) return o;
                    throw Error(`\`${t}\` must be used within \`${n}\``)
                }]
            }, function(...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let n = () => {
                    let n = e.map(e => ({
                        useScope: e(),
                        scopeName: e.scopeName
                    }));
                    return function(e) {
                        let a = n.reduce((t, {
                            useScope: r,
                            scopeName: n
                        }) => {
                            let a = r(e)[`__scope${n}`];
                            return { ...t,
                                ...a
                            }
                        }, {});
                        return r.useMemo(() => ({
                            [`__scope${t.scopeName}`]: a
                        }), [a])
                    }
                };
                return n.scopeName = t.scopeName, n
            }(o, ...n)]
        }(u),
        [f, p] = c(u),
        g = r.forwardRef((e, n) => {
            let {
                __scopeAvatar: a,
                ...o
            } = e, [s, l] = r.useState("idle");
            return (0, t.jsx)(f, {
                scope: a,
                imageLoadingStatus: s,
                onImageLoadingStatusChange: l,
                children: (0, t.jsx)(i.span, { ...o,
                    ref: n
                })
            })
        });
    g.displayName = u;
    var m = "AvatarImage",
        h = r.forwardRef((e, o) => {
            let {
                __scopeAvatar: u,
                src: c,
                onLoadingStatusChange: d = () => {},
                ...f
            } = e, g = p(m, u), h = function(e, {
                referrerPolicy: t,
                crossOrigin: n
            }) {
                let o = (0, s.useSyncExternalStore)(l, () => !0, () => !1),
                    i = r.useRef(null),
                    u = o ? (i.current || (i.current = new window.Image), i.current) : null,
                    [c, d] = r.useState(() => v(u, e));
                return (0, a.useLayoutEffect)(() => {
                    d(v(u, e))
                }, [u, e]), (0, a.useLayoutEffect)(() => {
                    let e = e => () => {
                        d(e)
                    };
                    if (!u) return;
                    let r = e("loaded"),
                        a = e("error");
                    return u.addEventListener("load", r), u.addEventListener("error", a), t && (u.referrerPolicy = t), "string" == typeof n && (u.crossOrigin = n), () => {
                        u.removeEventListener("load", r), u.removeEventListener("error", a)
                    }
                }, [u, n, t]), c
            }(c, f), b = (0, n.useCallbackRef)(e => {
                d(e), g.onImageLoadingStatusChange(e)
            });
            return (0, a.useLayoutEffect)(() => {
                "idle" !== h && b(h)
            }, [h, b]), "loaded" === h ? (0, t.jsx)(i.img, { ...f,
                ref: o,
                src: c
            }) : null
        });
    h.displayName = m;
    var b = "AvatarFallback",
        y = r.forwardRef((e, n) => {
            let {
                __scopeAvatar: a,
                delayMs: o,
                ...s
            } = e, l = p(b, a), [u, c] = r.useState(void 0 === o);
            return r.useEffect(() => {
                if (void 0 !== o) {
                    let e = window.setTimeout(() => c(!0), o);
                    return () => window.clearTimeout(e)
                }
            }, [o]), u && "loaded" !== l.imageLoadingStatus ? (0, t.jsx)(i.span, { ...s,
                ref: n
            }) : null
        });

    function v(e, t) {
        return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
    }
    y.displayName = b;
    var x = e.i(975157);
    let w = r.forwardRef(({
        className: e,
        ...r
    }, n) => (0, t.jsx)(g, {
        ref: n,
        className: (0, x.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", e),
        ...r
    }));
    w.displayName = g.displayName;
    let k = r.forwardRef(({
        className: e,
        ...r
    }, n) => (0, t.jsx)(h, {
        ref: n,
        className: (0, x.cn)("aspect-square h-full w-full", e),
        ...r
    }));
    k.displayName = h.displayName;
    let S = r.forwardRef(({
        className: e,
        ...r
    }, n) => (0, t.jsx)(y, {
        ref: n,
        className: (0, x.cn)("flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-semibold", e),
        ...r
    }));
    S.displayName = y.displayName, e.s(["Avatar", 0, w, "AvatarFallback", 0, S, "AvatarImage", 0, k], 799676)
}, 215013, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.default = void 0, r.default = function() {
        for (var e, t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        "u" > typeof window && (void 0 === window.gtag && (window.dataLayer = window.dataLayer || [], window.gtag = function() {
            window.dataLayer.push(arguments)
        }), (e = window).gtag.apply(e, r))
    }
}, 609905, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.default = function() {
        var e, t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = r || "";
        return a && (i = r.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(e, t, r) {
            return t > 0 && t + e.length !== r.length && e.search(n) > -1 && ":" !== r.charAt(t - 2) && ("-" !== r.charAt(t + e.length) || "-" === r.charAt(t - 1)) && 0 > r.charAt(t - 1).search(/[^\s-]/) ? e.toLowerCase() : e.substr(1).search(/[A-Z]|\../) > -1 ? e : e.charAt(0).toUpperCase() + e.substr(1)
        })), o && (i = "string" == typeof(t = e = i) && -1 !== t.indexOf("@") ? (console.warn("This arg looks like an email address, redacting."), "REDACTED (Potential Email Address)") : e), i
    };
    var n = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i
}, 149868, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.default = r.GA4 = void 0;
    var n = l(e.r(215013)),
        a = l(e.r(609905)),
        o = ["eventCategory", "eventAction", "eventLabel", "eventValue", "hitType"],
        i = ["title", "location"],
        s = ["page", "hitType"];

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function u(e, t) {
        if (null == e) return {};
        var r, n, a = function(e, t) {
            if (null == e) return {};
            var r, n, a = {},
                o = Object.keys(e);
            for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
        }
        return a
    }

    function c(e) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function d(e) {
        return function(e) {
            if (Array.isArray(e)) return m(e)
        }(e) || function(e) {
            if ("u" > typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || g(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function f(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function p(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? f(Object(r), !0).forEach(function(t) {
                h(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }

    function g(e, t) {
        if (e) {
            if ("string" == typeof e) return m(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return m(e, t)
        }
    }

    function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function h(e, t, r) {
        return (t = b(t)) in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function b(e) {
        var t = function(e, t) {
            if ("object" !== c(e) || null === e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" !== c(n)) return n;
                throw TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" === c(t) ? t : String(t)
    }
    var y = function() {
        var e;

        function t() {
            var e = this;
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            h(this, "reset", function() {
                e.isInitialized = !1, e._testMode = !1, e._currentMeasurementId, e._hasLoadedGA = !1, e._isQueuing = !1, e._queueGtag = []
            }), h(this, "_gtag", function() {
                for (var t = arguments.length, r = Array(t), a = 0; a < t; a++) r[a] = arguments[a];
                e._testMode || e._isQueuing ? e._queueGtag.push(r) : n.default.apply(void 0, r)
            }), h(this, "_loadGA", function(t, r) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "https://www.googletagmanager.com/gtag/js";
                if ("u" > typeof window && "u" > typeof document && !e._hasLoadedGA) {
                    var a = document.createElement("script");
                    a.async = !0, a.src = "".concat(n, "?id=").concat(t), r && a.setAttribute("nonce", r), document.body.appendChild(a), window.dataLayer = window.dataLayer || [], window.gtag = function() {
                        window.dataLayer.push(arguments)
                    }, e._hasLoadedGA = !0
                }
            }), h(this, "_toGtagOptions", function(e) {
                if (e) {
                    var t = {
                        cookieUpdate: "cookie_update",
                        cookieExpires: "cookie_expires",
                        cookieDomain: "cookie_domain",
                        cookieFlags: "cookie_flags",
                        userId: "user_id",
                        clientId: "client_id",
                        anonymizeIp: "anonymize_ip",
                        contentGroup1: "content_group1",
                        contentGroup2: "content_group2",
                        contentGroup3: "content_group3",
                        contentGroup4: "content_group4",
                        contentGroup5: "content_group5",
                        allowAdFeatures: "allow_google_signals",
                        allowAdPersonalizationSignals: "allow_ad_personalization_signals",
                        nonInteraction: "non_interaction",
                        page: "page_path",
                        hitCallback: "event_callback"
                    };
                    return Object.entries(e).reduce(function(e, r) {
                        var n = function(e) {
                                if (Array.isArray(e)) return e
                            }(r) || function(e) {
                                var t = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != t) {
                                    var r, n, a, o, i = [],
                                        s = !0,
                                        l = !1;
                                    try {
                                        a = (t = t.call(e)).next, !1;
                                        for (; !(s = (r = a.call(t)).done) && (i.push(r.value), 2 !== i.length); s = !0);
                                    } catch (e) {
                                        l = !0, n = e
                                    } finally {
                                        try {
                                            if (!s && null != t.return && (o = t.return(), Object(o) !== o)) return
                                        } finally {
                                            if (l) throw n
                                        }
                                    }
                                    return i
                                }
                            }(r) || g(r, 2) || function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(),
                            a = n[0],
                            o = n[1];
                        return t[a] ? e[t[a]] = o : e[a] = o, e
                    }, {})
                }
            }), h(this, "initialize", function(t) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!t) throw Error("Require GA_MEASUREMENT_ID");
                var n = "string" == typeof t ? [{
                    trackingId: t
                }] : t;
                e._currentMeasurementId = n[0].trackingId;
                var a = r.gaOptions,
                    o = r.gtagOptions,
                    i = r.nonce,
                    s = r.testMode,
                    l = void 0 !== s && s,
                    u = r.gtagUrl;
                if (e._testMode = l, l || e._loadGA(e._currentMeasurementId, i, u), e.isInitialized || (e._gtag("js", new Date), n.forEach(function(t) {
                        var r = p(p(p({}, e._toGtagOptions(p(p({}, a), t.gaOptions))), o), t.gtagOptions);
                        Object.keys(r).length ? e._gtag("config", t.trackingId, r) : e._gtag("config", t.trackingId)
                    })), e.isInitialized = !0, !l) {
                    var c = d(e._queueGtag);
                    for (e._queueGtag = [], e._isQueuing = !1; c.length;) {
                        var f = c.shift();
                        e._gtag.apply(e, d(f)), "get" === f[0] && (e._isQueuing = !0)
                    }
                }
            }), h(this, "set", function(t) {
                t ? "object" !== c(t) ? console.warn("Expected `fieldsObject` arg to be an Object") : (0 === Object.keys(t).length && console.warn("empty `fieldsObject` given to .set()"), e._gaCommand("set", t)) : console.warn("`fieldsObject` is required in .set()")
            }), h(this, "_gaCommandSendEvent", function(t, r, n, a, o) {
                e._gtag("event", r, p(p({
                    event_category: t,
                    event_label: n,
                    value: a
                }, o && {
                    non_interaction: o.nonInteraction
                }), e._toGtagOptions(o)))
            }), h(this, "_gaCommandSendEventParameters", function() {
                for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                if ("string" == typeof r[0]) e._gaCommandSendEvent.apply(e, d(r.slice(1)));
                else {
                    var a = r[0],
                        i = a.eventCategory,
                        s = a.eventAction,
                        l = a.eventLabel,
                        c = a.eventValue,
                        f = (a.hitType, u(a, o));
                    e._gaCommandSendEvent(i, s, l, c, f)
                }
            }), h(this, "_gaCommandSendTiming", function(t, r, n, a) {
                e._gtag("event", "timing_complete", {
                    name: r,
                    value: n,
                    event_category: t,
                    event_label: a
                })
            }), h(this, "_gaCommandSendPageview", function(t, r) {
                if (r && Object.keys(r).length) {
                    var n = e._toGtagOptions(r),
                        a = n.title,
                        o = n.location,
                        s = u(n, i);
                    e._gtag("event", "page_view", p(p(p(p({}, t && {
                        page_path: t
                    }), a && {
                        page_title: a
                    }), o && {
                        page_location: o
                    }), s))
                } else t ? e._gtag("event", "page_view", {
                    page_path: t
                }) : e._gtag("event", "page_view")
            }), h(this, "_gaCommandSendPageviewParameters", function() {
                for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                if ("string" == typeof r[0]) e._gaCommandSendPageview.apply(e, d(r.slice(1)));
                else {
                    var a = r[0],
                        o = a.page,
                        i = (a.hitType, u(a, s));
                    e._gaCommandSendPageview(o, i)
                }
            }), h(this, "_gaCommandSend", function() {
                for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                var a = "string" == typeof r[0] ? r[0] : r[0].hitType;
                switch (a) {
                    case "event":
                        e._gaCommandSendEventParameters.apply(e, r);
                        break;
                    case "pageview":
                        e._gaCommandSendPageviewParameters.apply(e, r);
                        break;
                    case "timing":
                        e._gaCommandSendTiming.apply(e, d(r.slice(1)));
                        break;
                    case "screenview":
                    case "transaction":
                    case "item":
                    case "social":
                    case "exception":
                        console.warn("Unsupported send command: ".concat(a));
                        break;
                    default:
                        console.warn("Send command doesn't exist: ".concat(a))
                }
            }), h(this, "_gaCommandSet", function() {
                for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                "string" == typeof r[0] && (r[0] = h({}, r[0], r[1])), e._gtag("set", e._toGtagOptions(r[0]))
            }), h(this, "_gaCommand", function(t) {
                for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
                switch (t) {
                    case "send":
                        e._gaCommandSend.apply(e, n);
                        break;
                    case "set":
                        e._gaCommandSet.apply(e, n);
                        break;
                    default:
                        console.warn("Command doesn't exist: ".concat(t))
                }
            }), h(this, "ga", function() {
                for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                if ("string" == typeof r[0]) e._gaCommand.apply(e, r);
                else {
                    var a = r[0];
                    e._gtag("get", e._currentMeasurementId, "client_id", function(t) {
                        e._isQueuing = !1;
                        var r = e._queueGtag;
                        for (a({
                                get: function(r) {
                                    return "clientId" === r ? t : "trackingId" === r ? e._currentMeasurementId : "apiVersion" === r ? "1" : void 0
                                }
                            }); r.length;) {
                            var n = r.shift();
                            e._gtag.apply(e, d(n))
                        }
                    }), e._isQueuing = !0
                }
                return e.ga
            }), h(this, "event", function(t, r) {
                if ("string" == typeof t) e._gtag("event", t, e._toGtagOptions(r));
                else {
                    var n = t.action,
                        o = t.category,
                        i = t.label,
                        s = t.value,
                        l = t.nonInteraction,
                        u = t.transport;
                    if (!o || !n) return void console.warn("args.category AND args.action are required in event()");
                    var c = {
                        hitType: "event",
                        eventCategory: (0, a.default)(o),
                        eventAction: (0, a.default)(n)
                    };
                    i && (c.eventLabel = (0, a.default)(i)), void 0 !== s && ("number" != typeof s ? console.warn("Expected `args.value` arg to be a Number.") : c.eventValue = s), void 0 !== l && ("boolean" != typeof l ? console.warn("`args.nonInteraction` must be a boolean.") : c.nonInteraction = l), void 0 !== u && ("string" != typeof u ? console.warn("`args.transport` must be a string.") : (-1 === ["beacon", "xhr", "image"].indexOf(u) && console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"), c.transport = u)), e._gaCommand("send", c)
                }
            }), h(this, "send", function(t) {
                e._gaCommand("send", t)
            }), this.reset()
        }
        return e = [{
                key: "gtag",
                value: function() {
                    this._gtag.apply(this, arguments)
                }
            }],
            function(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, b(n.key), n)
                }
            }(t.prototype, e), Object.defineProperty(t, "prototype", {
                writable: !1
            }), t
    }();
    r.GA4 = y, r.default = new y
}, 68817, (e, t, r) => {
    "use strict";

    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.default = r.ReactGAImplementation = void 0;
    var a = function(e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== n(e) && "function" != typeof e) return {
            default: e
        };
        var t = o(void 0);
        if (t && t.has(e)) return t.get(e);
        var r = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
            if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                var s = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                s && (s.get || s.set) ? Object.defineProperty(r, i, s) : r[i] = e[i]
            }
        return r.default = e, t && t.set(e, r), r
    }(e.r(149868));

    function o(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
            r = new WeakMap;
        return (o = function(e) {
            return e ? r : t
        })(e)
    }
    r.ReactGAImplementation = a.GA4, r.default = a.default
}, 375679, 657916, e => {
    "use strict";
    var t = e.i(68817);
    let r = "igcse-mcq-cookie-consent";

    function n(e) {
        let t = localStorage.getItem(r);
        if (!t) return !1;
        try {
            let r = JSON.parse(t);
            if (! function(e) {
                    if ("object" != typeof e || null === e) return !1;
                    let t = e.preferences;
                    return void 0 === t || "object" == typeof t
                }(r)) return !1;
            return r.preferences ? .[e] ? ? !1
        } catch {
            return !1
        }
    }
    e.s(["STORAGE_KEY", 0, r, "shouldTrack", 0, n], 657916);
    let a = !1;

    function o(e, r) {
        a && n("analytics") && t.default.event(e, r)
    }
    e.s(["initAnalytics", 0, function() {
        !a && n("analytics") && (t.default.initialize("G-SRDCQPNSQ2"), a = !0)
    }, "trackAttemptSubmit", 0, function(e, t, r) {
        o("attempt_submit", {
            subject_code: e,
            score: t,
            total_questions: r,
            percentage: Math.round(t / r * 100)
        })
    }, "trackEvent", 0, o, "trackPaperLoad", 0, function(e, t) {
        o("paper_load", {
            subject_code: e,
            paper_id: t
        })
    }], 375679)
}, 991918, e => {
    "use strict";
    var t = e.i(271645),
        r = e.i(820783),
        n = e.i(843476),
        a = Symbol.for("react.lazy"),
        o = t[" use ".trim().toString()];

    function i(e) {
        var t;
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === a && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t
    }

    function s(e) {
        var a;
        let s, l = (a = e, (s = t.forwardRef((e, n) => {
                let {
                    children: a,
                    ...s
                } = e;
                if (i(a) && "function" == typeof o && (a = o(a._payload)), t.isValidElement(a)) {
                    var l;
                    let e, o, i = (l = a, (o = (e = Object.getOwnPropertyDescriptor(l.props, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning) ? l.ref : (o = (e = Object.getOwnPropertyDescriptor(l, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning) ? l.props.ref : l.props.ref || l.ref),
                        u = function(e, t) {
                            let r = { ...t
                            };
                            for (let n in t) {
                                let a = e[n],
                                    o = t[n];
                                /^on[A-Z]/.test(n) ? a && o ? r[n] = (...e) => {
                                    let t = o(...e);
                                    return a(...e), t
                                } : a && (r[n] = a) : "style" === n ? r[n] = { ...a,
                                    ...o
                                } : "className" === n && (r[n] = [a, o].filter(Boolean).join(" "))
                            }
                            return { ...e,
                                ...r
                            }
                        }(s, a.props);
                    return a.type !== t.Fragment && (u.ref = n ? (0, r.composeRefs)(n, i) : i), t.cloneElement(a, u)
                }
                return t.Children.count(a) > 1 ? t.Children.only(null) : null
            })).displayName = `${a}.SlotClone`, s),
            u = t.forwardRef((e, r) => {
                let {
                    children: a,
                    ...s
                } = e;
                i(a) && "function" == typeof o && (a = o(a._payload));
                let u = t.Children.toArray(a),
                    d = u.find(c);
                if (d) {
                    let e = d.props.children,
                        a = u.map(r => r !== d ? r : t.Children.count(e) > 1 ? t.Children.only(null) : t.isValidElement(e) ? e.props.children : null);
                    return (0, n.jsx)(l, { ...s,
                        ref: r,
                        children: t.isValidElement(e) ? t.cloneElement(e, void 0, a) : null
                    })
                }
                return (0, n.jsx)(l, { ...s,
                    ref: r,
                    children: a
                })
            });
        return u.displayName = `${e}.Slot`, u
    }
    var l = s("Slot"),
        u = Symbol("radix.slottable");

    function c(e) {
        return t.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === u
    }
    e.s(["Slot", 0, l, "createSlot", 0, s])
}, 519455, e => {
    "use strict";
    let t, r;
    var n = e.i(843476),
        a = e.i(271645),
        o = e.i(991918),
        i = e.i(207670);
    let s = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
        l = i.clsx;
    var u = e.i(975157);
    let c = (t = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-black ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-boutique-sage focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-dark-bg dark:focus-visible:ring-boutique-sage", r = {
            variants: {
                variant: {
                    default: "bg-white dark:bg-dark-elevated border-2 border-boutique-ink dark:border-transparent text-boutique-ink dark:text-boutique-cream shadow-[4px_4px_0px_0px_#1a1a1a] dark:shadow-[0px_2px_8px_rgba(0,0,0,0.4)] hover:shadow-none dark:hover:shadow-[0px_1px_4px_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] active:scale-95",
                    destructive: "bg-boutique-coral border-2 border-boutique-ink dark:border-transparent text-boutique-ink shadow-[4px_4px_0px_0px_#1a1a1a] dark:shadow-[0px_2px_8px_rgba(246,168,158,0.3)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]",
                    outline: "border-2 border-boutique-ink/20 dark:border-transparent bg-transparent dark:bg-white/5 hover:bg-boutique-sage/10 dark:hover:bg-white/8 text-boutique-ink dark:text-boutique-cream",
                    secondary: "bg-boutique-sage/20 dark:bg-boutique-sage/10 border-2 border-boutique-sage/30 dark:border-transparent text-boutique-ink dark:text-boutique-cream hover:bg-boutique-sage/30 dark:hover:bg-boutique-sage/15",
                    ghost: "hover:bg-boutique-sage/10 dark:hover:bg-white/8 text-boutique-ink dark:text-boutique-cream",
                    link: "text-boutique-ink dark:text-boutique-cream underline-offset-4 hover:underline"
                },
                size: {
                    default: "h-11 px-6 py-2",
                    sm: "h-9 px-4 text-xs",
                    lg: "h-12 px-8",
                    icon: "h-10 w-10"
                }
            },
            defaultVariants: {
                variant: "default",
                size: "default"
            }
        }, e => {
            var n;
            if ((null == r ? void 0 : r.variants) == null) return l(t, null == e ? void 0 : e.class, null == e ? void 0 : e.className);
            let {
                variants: a,
                defaultVariants: o
            } = r, i = Object.keys(a).map(t => {
                let r = null == e ? void 0 : e[t],
                    n = null == o ? void 0 : o[t];
                if (null === r) return null;
                let i = s(r) || s(n);
                return a[t][i]
            }), u = e && Object.entries(e).reduce((e, t) => {
                let [r, n] = t;
                return void 0 === n || (e[r] = n), e
            }, {});
            return l(t, i, null == r || null == (n = r.compoundVariants) ? void 0 : n.reduce((e, t) => {
                let {
                    class: r,
                    className: n,
                    ...a
                } = t;
                return Object.entries(a).every(e => {
                    let [t, r] = e;
                    return Array.isArray(r) ? r.includes({ ...o,
                        ...u
                    }[t]) : ({ ...o,
                        ...u
                    })[t] === r
                }) ? [...e, r, n] : e
            }, []), null == e ? void 0 : e.class, null == e ? void 0 : e.className)
        }),
        d = a.forwardRef(({
            className: e,
            variant: t,
            size: r,
            asChild: a = !1,
            ...i
        }, s) => {
            let l = a ? o.Slot : "button";
            return (0, n.jsx)(l, {
                className: (0, u.cn)(c({
                    variant: t,
                    size: r,
                    className: e
                })),
                ref: s,
                ...i
            })
        });
    d.displayName = "Button", e.s(["Button", 0, d], 519455)
}, 292721, e => {
    "use strict";
    var t = e.i(768834);
    let r = new Set(["auto", "light", "dark"]),
        n = new Set(["inline", "button-grid"]);

    function a(e, t, r) {
        if ("u" < typeof localStorage) return r;
        try {
            let n = localStorage.getItem(e);
            return n && t.has(n) ? n : r
        } catch {
            return r
        }
    }

    function o(e, t = !1) {
        if ("u" < typeof localStorage) return t;
        try {
            let r = localStorage.getItem(e);
            if ("true" === r) return !0;
            if ("false" === r) return !1;
            return t
        } catch {
            return t
        }
    }

    function i(e, t) {
        if ("u" > typeof localStorage) try {
            localStorage.setItem(e, t)
        } catch {}
    }
    let s = (0, t.create)(e => ({
        theme: "light",
        isMobileMenuOpen: !1,
        showStatistics: !1,
        showProfile: !1,
        showLeaderboard: !1,
        showAchievements: !1,
        showSettings: !1,
        showRankedAdmin: !1,
        showRanked: !1,
        questionColorMode: a("questionColorMode", r, "auto"),
        questionInteractionMode: a("questionInteractionMode", n, "inline"),
        flashRevealEnabled: o("flashRevealEnabled"),
        zenModeEnabled: !1,
        wakeLockEnabled: o("wakeLockEnabled"),
        setTheme: t => {
            e({
                theme: t
            }), i("theme", t);
            let r = document.documentElement;
            "dark" === t ? r.classList.add("dark") : r.classList.remove("dark")
        },
        toggleMobileMenu: t => e(e => ({
            isMobileMenuOpen: "boolean" == typeof t ? t : !e.isMobileMenuOpen
        })),
        setShowStatistics: t => e({
            showStatistics: t
        }),
        setShowProfile: t => e({
            showProfile: t
        }),
        setShowLeaderboard: t => e({
            showLeaderboard: t
        }),
        setShowAchievements: t => e({
            showAchievements: t
        }),
        setShowSettings: t => e({
            showSettings: t
        }),
        setShowRankedAdmin: t => e({
            showRankedAdmin: t
        }),
        setShowRanked: t => e({
            showRanked: t
        }),
        setQuestionColorMode: t => {
            i("questionColorMode", t), e({
                questionColorMode: t
            })
        },
        setQuestionInteractionMode: t => {
            i("questionInteractionMode", t), e({
                questionInteractionMode: t
            })
        },
        setFlashRevealEnabled: t => {
            i("flashRevealEnabled", String(t)), e({
                flashRevealEnabled: t
            })
        },
        setWakeLockEnabled: t => {
            i("wakeLockEnabled", String(t)), e({
                wakeLockEnabled: t
            })
        },
        toggleZenMode: () => e(e => ({
            zenModeEnabled: !e.zenModeEnabled
        })),
        setZenModeEnabled: t => {
            e({
                zenModeEnabled: t
            })
        }
    }));
    e.s(["useUIStore", 0, s])
}, 287978, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(846932),
        n = e.i(271645);
    let a = {
            rest: {
                x: 0,
                y: 0
            },
            hover: {
                x: 4,
                y: 4
            },
            tap: {
                x: 4,
                y: 4
            }
        },
        o = {
            rest: {
                x: 0
            },
            hover: {
                x: 6
            },
            tap: {
                x: 8
            }
        },
        i = n.default.forwardRef(({
            children: e,
            arrow: n,
            className: i = "",
            fullWidth: s = !1,
            justify: l = "center",
            ...u
        }, c) => {
            let {
                disabled: d,
                onClick: f,
                ...p
            } = u, g = d ? "opacity-60 cursor-not-allowed pointer-events-none" : "";
            return (0, t.jsx)(r.motion.button, {
                ref: c,
                ...p,
                onClick: d ? void 0 : f,
                disabled: d,
                "aria-disabled": d,
                className: `${i} ${g}`,
                variants: a,
                initial: "rest",
                whileHover: d ? void 0 : "hover",
                whileTap: d ? void 0 : "tap",
                transition: {
                    duration: .15,
                    ease: "easeOut"
                },
                children: (0, t.jsxs)("span", {
                    className: `${s?"flex w-full":"inline-flex w-full"} items-center gap-3 min-w-0 ${{start:"justify-start",center:"justify-center",end:"justify-end",between:"justify-between"}[l]}`,
                    children: [e, n && (0, t.jsx)(r.motion.svg, {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: 3,
                        className: "w-5 h-5 sm:w-6 sm:h-6",
                        variants: o,
                        transition: {
                            type: "spring",
                            stiffness: 200,
                            damping: 16
                        },
                        children: (0, t.jsx)("path", {
                            d: "M5 12h14M12 5l7 7-7 7"
                        })
                    })]
                })
            })
        });
    i.displayName = "AnimatedButton", e.s(["default", 0, i])
}, 570044, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(776639),
        n = e.i(287978);
    e.s(["SessionGuardModal", 0, function({
        open: e,
        onConfirm: a,
        onCancel: o,
        title: i = "Replace Active Session?",
        description: s = "You have an active session in progress. Starting a new one will end it and all your current answers will be lost.",
        confirmLabel: l = "Start Anyway"
    }) {
        return (0, t.jsx)(r.Dialog, {
            open: e,
            onOpenChange: e => !e && o(),
            children: (0, t.jsx)(r.DialogContent, {
                className: "max-w-md w-full p-8 border-4 border-boutique-ink dark:border-transparent rounded-[32px] shadow-[8px_8px_0px_0px_#1a1a1a] dark:shadow-[0px_8px_40px_rgba(0,0,0,0.6)] [&>button:last-child]:hidden z-[501]",
                children: (0, t.jsxs)("div", {
                    className: "flex items-start gap-4",
                    children: [(0, t.jsx)("div", {
                        className: "flex-shrink-0 w-12 h-12 bg-boutique-coral border-2 border-boutique-ink dark:border-transparent rounded-2xl flex items-center justify-center shadow-[2px_2px_0px_0px_#1a1a1a]",
                        children: (0, t.jsxs)("svg", {
                            className: "w-7 h-7 text-boutique-ink",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [(0, t.jsx)("path", {
                                d: "M12 3L2 20h20L12 3z"
                            }), (0, t.jsx)("line", {
                                x1: "12",
                                y1: "9",
                                x2: "12",
                                y2: "13"
                            }), (0, t.jsx)("circle", {
                                cx: "12",
                                cy: "16.5",
                                r: "0.9"
                            })]
                        })
                    }), (0, t.jsxs)("div", {
                        className: "flex-1",
                        children: [(0, t.jsxs)(r.DialogHeader, {
                            className: "text-left space-y-0 mb-4",
                            children: [(0, t.jsx)(r.DialogTitle, {
                                className: "text-2xl font-black text-boutique-ink dark:text-boutique-cream tracking-tight",
                                children: i
                            }), (0, t.jsx)(r.DialogDescription, {
                                className: "text-sm font-medium text-boutique-ink/60 dark:text-boutique-cream/60 pt-2 block",
                                children: s
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "flex gap-3",
                            children: [(0, t.jsx)("button", {
                                onClick: o,
                                className: "flex-1 px-4 py-3 bg-white dark:bg-dark-surface border-2 border-boutique-ink dark:border-transparent text-boutique-ink dark:text-boutique-cream text-sm font-black rounded-xl hover:bg-boutique-sage/10 transition-all font-display",
                                children: "Cancel"
                            }), (0, t.jsx)(n.default, {
                                onClick: a,
                                className: "flex-1 sticker-button py-3 text-sm",
                                children: l
                            })]
                        })]
                    })]
                })
            })
        })
    }])
}, 354606, e => {
    "use strict";
    var t = e.i(843476);

    function r({
        className: e = "w-4 h-4"
    }) {
        return (0, t.jsxs)("svg", {
            className: e,
            viewBox: "0 0 24 24",
            fill: "none",
            "aria-hidden": "true",
            children: [(0, t.jsx)("rect", {
                x: "3.5",
                y: "3.5",
                width: "17",
                height: "17",
                rx: "5",
                stroke: "currentColor",
                strokeWidth: "2"
            }), (0, t.jsx)("circle", {
                cx: "12",
                cy: "12",
                r: "4",
                stroke: "currentColor",
                strokeWidth: "2"
            }), (0, t.jsx)("circle", {
                cx: "17.5",
                cy: "6.5",
                r: "1.25",
                fill: "currentColor"
            })]
        })
    }
    e.s(["InstagramFollowLink", 0, function({
        label: e = "Follow @quickmark.co",
        className: n = ""
    }) {
        return (0, t.jsxs)("a", {
            href: "https://instagram.com/quickmark.co",
            target: "_blank",
            rel: "noopener noreferrer",
            className: `inline-flex items-center justify-center gap-2 rounded-xl border-2 border-boutique-coral/25 bg-white/70 px-4 py-2.5 text-xs font-black text-boutique-ink transition-colors hover:bg-boutique-coral/12 dark:border-boutique-coral/20 dark:bg-dark-surface/70 dark:text-boutique-cream dark:hover:bg-boutique-coral/10 ${n}`,
            children: [(0, t.jsx)(r, {}), (0, t.jsx)("span", {
                children: e
            })]
        })
    }])
}, 920919, 669242, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(174080);
    let n = "donate_modal_opened";

    function a() {
        localStorage.setItem(n, "true")
    }
    e.s(["hasDonateModalBeenSeen", 0, function() {
        return "true" === localStorage.getItem(n)
    }, "markDonateModalSeen", 0, a], 669242);
    var o = e.i(354606);
    e.s(["DonateModal", 0, function({
        isOpen: e,
        onClose: n
    }) {
        if (!e) return null;
        let i = () => {
            a(), n()
        };
        return (0, r.createPortal)((0, t.jsxs)("div", {
            className: "fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": "Support QuickMark",
            children: [(0, t.jsx)("div", {
                className: "absolute inset-0 bg-boutique-ink/50 backdrop-blur-sm",
                onClick: i
            }), (0, t.jsxs)("div", {
                className: "relative w-full sm:max-w-xl max-h-[95vh] sm:max-h-[90vh] flex flex-col bg-boutique-cream dark:bg-dark-elevated border-4 border-boutique-ink dark:border-transparent rounded-[32px] shadow-[8px_8px_0px_0px_#1a1a1a] dark:shadow-[0px_8px_40px_rgba(0,0,0,0.6)] overflow-hidden",
                children: [(0, t.jsxs)("div", {
                    className: "relative bg-boutique-coral/20 dark:bg-boutique-coral/10 px-6 pt-6 pb-4 border-b-2 border-boutique-ink/5 dark:border-white/5 flex flex-col items-center text-center",
                    children: [(0, t.jsx)("button", {
                        onClick: i,
                        className: "absolute top-3 right-3 w-8 h-8 rounded-full border-2 border-boutique-ink/15 dark:border-white/15 flex items-center justify-center text-boutique-ink/50 dark:text-boutique-cream/50 hover:bg-boutique-ink/5 dark:hover:bg-white/5 hover:text-boutique-ink dark:hover:text-boutique-cream transition-colors",
                        "aria-label": "Close",
                        children: (0, t.jsx)("svg", {
                            className: "w-3.5 h-3.5",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: (0, t.jsx)("path", {
                                d: "M18 6 6 18M6 6l12 12"
                            })
                        })
                    }), (0, t.jsx)("div", {
                        className: "w-12 h-12 bg-boutique-coral border-4 border-boutique-ink dark:border-transparent rounded-[14px] shadow-[3px_3px_0px_0px_#1a1a1a] dark:shadow-none flex items-center justify-center mb-3",
                        children: (0, t.jsx)("svg", {
                            className: "w-6 h-6 text-white",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            stroke: "none",
                            children: (0, t.jsx)("path", {
                                d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                            })
                        })
                    }), (0, t.jsx)("div", {
                        className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-boutique-ink/5 dark:bg-white/5 border border-boutique-ink/10 dark:border-white/10 mb-2",
                        children: (0, t.jsx)("span", {
                            className: "text-[9px] font-black uppercase tracking-[0.15em] text-boutique-ink/50 dark:text-boutique-cream/50",
                            children: "A message from the QuickMark team"
                        })
                    }), (0, t.jsx)("h2", {
                        className: "text-xl sm:text-2xl font-black text-boutique-ink dark:text-boutique-cream leading-tight",
                        children: "We Need Your Help"
                    })]
                }), (0, t.jsxs)("div", {
                    className: "px-6 py-4 space-y-3 overflow-y-auto max-h-[35vh] sm:max-h-[40vh] custom-scrollbar",
                    children: [(0, t.jsx)("p", {
                        className: "text-xs leading-relaxed text-boutique-ink/80 dark:text-boutique-cream/80 font-medium",
                        children: "Hey there,"
                    }), (0, t.jsx)("p", {
                        className: "text-xs leading-relaxed text-boutique-ink/80 dark:text-boutique-cream/80",
                        children: "QuickMark was built to solve a simple problem: most revision tools for IGCSE students are clunky, outdated, or hidden behind steep paywalls. We want to make practice faster, clearer, and genuinely useful when it matters most."
                    }), (0, t.jsxs)("p", {
                        className: "text-xs leading-relaxed text-boutique-ink/80 dark:text-boutique-cream/80",
                        children: ["Countless hours go into extracting papers, improving the ranking system, and making sure everything ", (0, t.jsx)("em", {
                            children: "just works"
                        }), " on your phone during those late-night study sessions."]
                    }), (0, t.jsx)("p", {
                        className: "text-xs leading-relaxed text-boutique-ink/80 dark:text-boutique-cream/80",
                        children: "Running and improving a platform like this comes with real costs. If QuickMark has helped you, a small donation helps keep the servers running and supports new features for you and other students using the platform."
                    }), (0, t.jsx)("p", {
                        className: "text-xs leading-relaxed text-boutique-ink/80 dark:text-boutique-cream/80",
                        children: "No pressure at all. Every contribution goes back into making QuickMark more reliable, more useful, and more accessible for the students who depend on it."
                    }), (0, t.jsx)("p", {
                        className: "text-xs font-black text-boutique-ink dark:text-boutique-cream pt-1",
                        children: "- The QuickMark Team"
                    })]
                }), (0, t.jsx)("div", {
                    className: "px-6 pb-6 pt-3 border-t-2 border-boutique-ink/5 dark:border-white/5 bg-white/30 dark:bg-white/5",
                    children: (0, t.jsxs)("div", {
                        className: "flex flex-row items-center justify-center gap-6",
                        children: [(0, t.jsx)("div", {
                            className: "p-2 bg-white rounded-xl border-2 border-boutique-ink/10 shadow-[4px_4px_0px_0px_#1a1a1a] dark:shadow-none flex-shrink-0",
                            children: (0, t.jsx)("img", {
                                src: "/upi.png",
                                alt: "UPI QR code to support QuickMark",
                                className: "w-24 h-24 object-contain"
                            })
                        }), (0, t.jsxs)("div", {
                            className: "flex flex-col gap-3 flex-1 min-w-0",
                            children: [(0, t.jsxs)("p", {
                                className: "text-[10px] font-black uppercase tracking-wider text-boutique-ink/40 dark:text-boutique-cream/40 leading-tight",
                                children: ["Scan to support ", (0, t.jsx)("br", {}), " via UPI"]
                            }), (0, t.jsx)("button", {
                                onClick: i,
                                className: "w-full px-4 py-2.5 rounded-xl font-black text-[11px] uppercase tracking-wide bg-boutique-coral text-white shadow-[2px_2px_0px_0px_#1a1a1a] hover:shadow-none hover:bg-boutique-coral/90 transition-all",
                                children: "Support Now"
                            }), (0, t.jsx)("button", {
                                onClick: i,
                                className: "w-full px-4 py-1 text-[10px] font-black uppercase tracking-wide text-boutique-ink/40 dark:text-boutique-cream/40 hover:text-boutique-ink dark:hover:text-boutique-cream transition-colors",
                                children: "Maybe later"
                            }), (0, t.jsx)(o.InstagramFollowLink, {
                                label: "Follow on Instagram",
                                className: "w-full justify-center"
                            })]
                        })]
                    })
                })]
            })]
        }), document.body)
    }], 920919)
}]);