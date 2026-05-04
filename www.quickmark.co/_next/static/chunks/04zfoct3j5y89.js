(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 820783, e => {
    "use strict";
    var r = e.i(271645);

    function o(e, r) {
        if ("function" == typeof e) return e(r);
        null != e && (e.current = r)
    }

    function t(...e) {
        return r => {
            let t = !1,
                l = e.map(e => {
                    let l = o(e, r);
                    return t || "function" != typeof l || (t = !0), l
                });
            if (t) return () => {
                for (let r = 0; r < l.length; r++) {
                    let t = l[r];
                    "function" == typeof t ? t() : o(e[r], null)
                }
            }
        }
    }
    e.s(["composeRefs", 0, t, "useComposedRefs", 0, function(...e) {
        return r.useCallback(t(...e), e)
    }])
}, 934620, e => {
    "use strict";
    var r = e.i(271645),
        o = globalThis ? .document ? r.useLayoutEffect : () => {};
    e.s(["useLayoutEffect", 0, o])
}, 30207, e => {
    "use strict";
    var r = e.i(271645);
    e.s(["useCallbackRef", 0, function(e) {
        let o = r.useRef(e);
        return r.useEffect(() => {
            o.current = e
        }), r.useMemo(() => (...e) => o.current ? .(...e), [])
    }])
}, 975157, e => {
    "use strict";
    let r, o, t, l, a;
    var n, s = e.i(207670);
    let i = (e = new Map, r = null, o) => ({
            nextPart: e,
            validators: r,
            classGroupId: o
        }),
        d = [],
        c = (e, r, o) => {
            if (0 == e.length - r) return o.classGroupId;
            let t = e[r],
                l = o.nextPart.get(t);
            if (l) {
                let o = c(e, r + 1, l);
                if (o) return o
            }
            let a = o.validators;
            if (null === a) return;
            let n = 0 === r ? e.join("-") : e.slice(r).join("-"),
                s = a.length;
            for (let e = 0; e < s; e++) {
                let r = a[e];
                if (r.validator(n)) return r.classGroupId
            }
        },
        m = (e, r) => {
            let o = i();
            for (let t in e) p(e[t], o, t, r);
            return o
        },
        p = (e, r, o, t) => {
            let l = e.length;
            for (let a = 0; a < l; a++) u(e[a], r, o, t)
        },
        u = (e, r, o, t) => {
            "string" == typeof e ? b(e, r, o) : "function" == typeof e ? f(e, r, o, t) : g(e, r, o, t)
        },
        b = (e, r, o) => {
            ("" === e ? r : h(r, e)).classGroupId = o
        },
        f = (e, r, o, t) => {
            k(e) ? p(e(t), r, o, t) : (null === r.validators && (r.validators = []), r.validators.push({
                classGroupId: o,
                validator: e
            }))
        },
        g = (e, r, o, t) => {
            let l = Object.entries(e),
                a = l.length;
            for (let e = 0; e < a; e++) {
                let [a, n] = l[e];
                p(n, h(r, a), o, t)
            }
        },
        h = (e, r) => {
            let o = e,
                t = r.split("-"),
                l = t.length;
            for (let e = 0; e < l; e++) {
                let r = t[e],
                    l = o.nextPart.get(r);
                l || (l = i(), o.nextPart.set(r, l)), o = l
            }
            return o
        },
        k = e => "isThemeGetter" in e && !0 === e.isThemeGetter,
        x = [],
        w = (e, r, o, t, l) => ({
            modifiers: e,
            hasImportantModifier: r,
            baseClassName: o,
            maybePostfixModifierPosition: t,
            isExternal: l
        }),
        y = /\s+/,
        v = e => {
            let r;
            if ("string" == typeof e) return e;
            let o = "";
            for (let t = 0; t < e.length; t++) e[t] && (r = v(e[t])) && (o && (o += " "), o += r);
            return o
        },
        z = [],
        j = e => {
            let r = r => r[e] || z;
            return r.isThemeGetter = !0, r
        },
        C = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
        G = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
        O = /^\d+\/\d+$/,
        N = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        T = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        I = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
        M = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        $ = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        R = e => O.test(e),
        W = e => !!e && !Number.isNaN(Number(e)),
        P = e => !!e && Number.isInteger(Number(e)),
        S = e => e.endsWith("%") && W(e.slice(0, -1)),
        E = e => N.test(e),
        A = () => !0,
        q = e => T.test(e) && !I.test(e),
        B = () => !1,
        K = e => M.test(e),
        L = e => $.test(e),
        U = e => !D(e) && !X(e),
        _ = e => el(e, ei, B),
        D = e => C.test(e),
        F = e => el(e, ed, q),
        H = e => el(e, ec, W),
        J = e => el(e, en, B),
        Q = e => el(e, es, L),
        V = e => el(e, ep, K),
        X = e => G.test(e),
        Y = e => ea(e, ed),
        Z = e => ea(e, em),
        ee = e => ea(e, en),
        er = e => ea(e, ei),
        eo = e => ea(e, es),
        et = e => ea(e, ep, !0),
        el = (e, r, o) => {
            let t = C.exec(e);
            return !!t && (t[1] ? r(t[1]) : o(t[2]))
        },
        ea = (e, r, o = !1) => {
            let t = G.exec(e);
            return !!t && (t[1] ? r(t[1]) : o)
        },
        en = e => "position" === e || "percentage" === e,
        es = e => "image" === e || "url" === e,
        ei = e => "length" === e || "size" === e || "bg-size" === e,
        ed = e => "length" === e,
        ec = e => "number" === e,
        em = e => "family-name" === e,
        ep = e => "shadow" === e,
        eu = (n = () => {
            let e = j("color"),
                r = j("font"),
                o = j("text"),
                t = j("font-weight"),
                l = j("tracking"),
                a = j("leading"),
                n = j("breakpoint"),
                s = j("container"),
                i = j("spacing"),
                d = j("radius"),
                c = j("shadow"),
                m = j("inset-shadow"),
                p = j("text-shadow"),
                u = j("drop-shadow"),
                b = j("blur"),
                f = j("perspective"),
                g = j("aspect"),
                h = j("ease"),
                k = j("animate"),
                x = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                w = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
                y = () => [...w(), X, D],
                v = () => ["auto", "hidden", "clip", "visible", "scroll"],
                z = () => ["auto", "contain", "none"],
                C = () => [X, D, i],
                G = () => [R, "full", "auto", ...C()],
                O = () => [P, "none", "subgrid", X, D],
                N = () => ["auto", {
                    span: ["full", P, X, D]
                }, P, X, D],
                T = () => [P, "auto", X, D],
                I = () => ["auto", "min", "max", "fr", X, D],
                M = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
                $ = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
                q = () => ["auto", ...C()],
                B = () => [R, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...C()],
                K = () => [e, X, D],
                L = () => [...w(), ee, J, {
                    position: [X, D]
                }],
                el = () => ["no-repeat", {
                    repeat: ["", "x", "y", "space", "round"]
                }],
                ea = () => ["auto", "cover", "contain", er, _, {
                    size: [X, D]
                }],
                en = () => [S, Y, F],
                es = () => ["", "none", "full", d, X, D],
                ei = () => ["", W, Y, F],
                ed = () => ["solid", "dashed", "dotted", "double"],
                ec = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
                em = () => [W, S, ee, J],
                ep = () => ["", "none", b, X, D],
                eu = () => ["none", W, X, D],
                eb = () => ["none", W, X, D],
                ef = () => [W, X, D],
                eg = () => [R, "full", ...C()];
            return {
                cacheSize: 500,
                theme: {
                    animate: ["spin", "ping", "pulse", "bounce"],
                    aspect: ["video"],
                    blur: [E],
                    breakpoint: [E],
                    color: [A],
                    container: [E],
                    "drop-shadow": [E],
                    ease: ["in", "out", "in-out"],
                    font: [U],
                    "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                    "inset-shadow": [E],
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                    perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                    radius: [E],
                    shadow: [E],
                    spacing: ["px", W],
                    text: [E],
                    "text-shadow": [E],
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
                },
                classGroups: {
                    aspect: [{
                        aspect: ["auto", "square", R, D, X, g]
                    }],
                    container: ["container"],
                    columns: [{
                        columns: [W, D, X, s]
                    }],
                    "break-after": [{
                        "break-after": x()
                    }],
                    "break-before": [{
                        "break-before": x()
                    }],
                    "break-inside": [{
                        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                    }],
                    "box-decoration": [{
                        "box-decoration": ["slice", "clone"]
                    }],
                    box: [{
                        box: ["border", "content"]
                    }],
                    display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                    sr: ["sr-only", "not-sr-only"],
                    float: [{
                        float: ["right", "left", "none", "start", "end"]
                    }],
                    clear: [{
                        clear: ["left", "right", "both", "none", "start", "end"]
                    }],
                    isolation: ["isolate", "isolation-auto"],
                    "object-fit": [{
                        object: ["contain", "cover", "fill", "none", "scale-down"]
                    }],
                    "object-position": [{
                        object: y()
                    }],
                    overflow: [{
                        overflow: v()
                    }],
                    "overflow-x": [{
                        "overflow-x": v()
                    }],
                    "overflow-y": [{
                        "overflow-y": v()
                    }],
                    overscroll: [{
                        overscroll: z()
                    }],
                    "overscroll-x": [{
                        "overscroll-x": z()
                    }],
                    "overscroll-y": [{
                        "overscroll-y": z()
                    }],
                    position: ["static", "fixed", "absolute", "relative", "sticky"],
                    inset: [{
                        inset: G()
                    }],
                    "inset-x": [{
                        "inset-x": G()
                    }],
                    "inset-y": [{
                        "inset-y": G()
                    }],
                    start: [{
                        start: G()
                    }],
                    end: [{
                        end: G()
                    }],
                    top: [{
                        top: G()
                    }],
                    right: [{
                        right: G()
                    }],
                    bottom: [{
                        bottom: G()
                    }],
                    left: [{
                        left: G()
                    }],
                    visibility: ["visible", "invisible", "collapse"],
                    z: [{
                        z: [P, "auto", X, D]
                    }],
                    basis: [{
                        basis: [R, "full", "auto", s, ...C()]
                    }],
                    "flex-direction": [{
                        flex: ["row", "row-reverse", "col", "col-reverse"]
                    }],
                    "flex-wrap": [{
                        flex: ["nowrap", "wrap", "wrap-reverse"]
                    }],
                    flex: [{
                        flex: [W, R, "auto", "initial", "none", D]
                    }],
                    grow: [{
                        grow: ["", W, X, D]
                    }],
                    shrink: [{
                        shrink: ["", W, X, D]
                    }],
                    order: [{
                        order: [P, "first", "last", "none", X, D]
                    }],
                    "grid-cols": [{
                        "grid-cols": O()
                    }],
                    "col-start-end": [{
                        col: N()
                    }],
                    "col-start": [{
                        "col-start": T()
                    }],
                    "col-end": [{
                        "col-end": T()
                    }],
                    "grid-rows": [{
                        "grid-rows": O()
                    }],
                    "row-start-end": [{
                        row: N()
                    }],
                    "row-start": [{
                        "row-start": T()
                    }],
                    "row-end": [{
                        "row-end": T()
                    }],
                    "grid-flow": [{
                        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                    }],
                    "auto-cols": [{
                        "auto-cols": I()
                    }],
                    "auto-rows": [{
                        "auto-rows": I()
                    }],
                    gap: [{
                        gap: C()
                    }],
                    "gap-x": [{
                        "gap-x": C()
                    }],
                    "gap-y": [{
                        "gap-y": C()
                    }],
                    "justify-content": [{
                        justify: [...M(), "normal"]
                    }],
                    "justify-items": [{
                        "justify-items": [...$(), "normal"]
                    }],
                    "justify-self": [{
                        "justify-self": ["auto", ...$()]
                    }],
                    "align-content": [{
                        content: ["normal", ...M()]
                    }],
                    "align-items": [{
                        items: [...$(), {
                            baseline: ["", "last"]
                        }]
                    }],
                    "align-self": [{
                        self: ["auto", ...$(), {
                            baseline: ["", "last"]
                        }]
                    }],
                    "place-content": [{
                        "place-content": M()
                    }],
                    "place-items": [{
                        "place-items": [...$(), "baseline"]
                    }],
                    "place-self": [{
                        "place-self": ["auto", ...$()]
                    }],
                    p: [{
                        p: C()
                    }],
                    px: [{
                        px: C()
                    }],
                    py: [{
                        py: C()
                    }],
                    ps: [{
                        ps: C()
                    }],
                    pe: [{
                        pe: C()
                    }],
                    pt: [{
                        pt: C()
                    }],
                    pr: [{
                        pr: C()
                    }],
                    pb: [{
                        pb: C()
                    }],
                    pl: [{
                        pl: C()
                    }],
                    m: [{
                        m: q()
                    }],
                    mx: [{
                        mx: q()
                    }],
                    my: [{
                        my: q()
                    }],
                    ms: [{
                        ms: q()
                    }],
                    me: [{
                        me: q()
                    }],
                    mt: [{
                        mt: q()
                    }],
                    mr: [{
                        mr: q()
                    }],
                    mb: [{
                        mb: q()
                    }],
                    ml: [{
                        ml: q()
                    }],
                    "space-x": [{
                        "space-x": C()
                    }],
                    "space-x-reverse": ["space-x-reverse"],
                    "space-y": [{
                        "space-y": C()
                    }],
                    "space-y-reverse": ["space-y-reverse"],
                    size: [{
                        size: B()
                    }],
                    w: [{
                        w: [s, "screen", ...B()]
                    }],
                    "min-w": [{
                        "min-w": [s, "screen", "none", ...B()]
                    }],
                    "max-w": [{
                        "max-w": [s, "screen", "none", "prose", {
                            screen: [n]
                        }, ...B()]
                    }],
                    h: [{
                        h: ["screen", "lh", ...B()]
                    }],
                    "min-h": [{
                        "min-h": ["screen", "lh", "none", ...B()]
                    }],
                    "max-h": [{
                        "max-h": ["screen", "lh", ...B()]
                    }],
                    "font-size": [{
                        text: ["base", o, Y, F]
                    }],
                    "font-smoothing": ["antialiased", "subpixel-antialiased"],
                    "font-style": ["italic", "not-italic"],
                    "font-weight": [{
                        font: [t, X, H]
                    }],
                    "font-stretch": [{
                        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", S, D]
                    }],
                    "font-family": [{
                        font: [Z, D, r]
                    }],
                    "fvn-normal": ["normal-nums"],
                    "fvn-ordinal": ["ordinal"],
                    "fvn-slashed-zero": ["slashed-zero"],
                    "fvn-figure": ["lining-nums", "oldstyle-nums"],
                    "fvn-spacing": ["proportional-nums", "tabular-nums"],
                    "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                    tracking: [{
                        tracking: [l, X, D]
                    }],
                    "line-clamp": [{
                        "line-clamp": [W, "none", X, H]
                    }],
                    leading: [{
                        leading: [a, ...C()]
                    }],
                    "list-image": [{
                        "list-image": ["none", X, D]
                    }],
                    "list-style-position": [{
                        list: ["inside", "outside"]
                    }],
                    "list-style-type": [{
                        list: ["disc", "decimal", "none", X, D]
                    }],
                    "text-alignment": [{
                        text: ["left", "center", "right", "justify", "start", "end"]
                    }],
                    "placeholder-color": [{
                        placeholder: K()
                    }],
                    "text-color": [{
                        text: K()
                    }],
                    "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                    "text-decoration-style": [{
                        decoration: [...ed(), "wavy"]
                    }],
                    "text-decoration-thickness": [{
                        decoration: [W, "from-font", "auto", X, F]
                    }],
                    "text-decoration-color": [{
                        decoration: K()
                    }],
                    "underline-offset": [{
                        "underline-offset": [W, "auto", X, D]
                    }],
                    "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                    "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                    "text-wrap": [{
                        text: ["wrap", "nowrap", "balance", "pretty"]
                    }],
                    indent: [{
                        indent: C()
                    }],
                    "vertical-align": [{
                        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", X, D]
                    }],
                    whitespace: [{
                        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                    }],
                    break: [{
                        break: ["normal", "words", "all", "keep"]
                    }],
                    wrap: [{
                        wrap: ["break-word", "anywhere", "normal"]
                    }],
                    hyphens: [{
                        hyphens: ["none", "manual", "auto"]
                    }],
                    content: [{
                        content: ["none", X, D]
                    }],
                    "bg-attachment": [{
                        bg: ["fixed", "local", "scroll"]
                    }],
                    "bg-clip": [{
                        "bg-clip": ["border", "padding", "content", "text"]
                    }],
                    "bg-origin": [{
                        "bg-origin": ["border", "padding", "content"]
                    }],
                    "bg-position": [{
                        bg: L()
                    }],
                    "bg-repeat": [{
                        bg: el()
                    }],
                    "bg-size": [{
                        bg: ea()
                    }],
                    "bg-image": [{
                        bg: ["none", {
                            linear: [{
                                to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                            }, P, X, D],
                            radial: ["", X, D],
                            conic: [P, X, D]
                        }, eo, Q]
                    }],
                    "bg-color": [{
                        bg: K()
                    }],
                    "gradient-from-pos": [{
                        from: en()
                    }],
                    "gradient-via-pos": [{
                        via: en()
                    }],
                    "gradient-to-pos": [{
                        to: en()
                    }],
                    "gradient-from": [{
                        from: K()
                    }],
                    "gradient-via": [{
                        via: K()
                    }],
                    "gradient-to": [{
                        to: K()
                    }],
                    rounded: [{
                        rounded: es()
                    }],
                    "rounded-s": [{
                        "rounded-s": es()
                    }],
                    "rounded-e": [{
                        "rounded-e": es()
                    }],
                    "rounded-t": [{
                        "rounded-t": es()
                    }],
                    "rounded-r": [{
                        "rounded-r": es()
                    }],
                    "rounded-b": [{
                        "rounded-b": es()
                    }],
                    "rounded-l": [{
                        "rounded-l": es()
                    }],
                    "rounded-ss": [{
                        "rounded-ss": es()
                    }],
                    "rounded-se": [{
                        "rounded-se": es()
                    }],
                    "rounded-ee": [{
                        "rounded-ee": es()
                    }],
                    "rounded-es": [{
                        "rounded-es": es()
                    }],
                    "rounded-tl": [{
                        "rounded-tl": es()
                    }],
                    "rounded-tr": [{
                        "rounded-tr": es()
                    }],
                    "rounded-br": [{
                        "rounded-br": es()
                    }],
                    "rounded-bl": [{
                        "rounded-bl": es()
                    }],
                    "border-w": [{
                        border: ei()
                    }],
                    "border-w-x": [{
                        "border-x": ei()
                    }],
                    "border-w-y": [{
                        "border-y": ei()
                    }],
                    "border-w-s": [{
                        "border-s": ei()
                    }],
                    "border-w-e": [{
                        "border-e": ei()
                    }],
                    "border-w-t": [{
                        "border-t": ei()
                    }],
                    "border-w-r": [{
                        "border-r": ei()
                    }],
                    "border-w-b": [{
                        "border-b": ei()
                    }],
                    "border-w-l": [{
                        "border-l": ei()
                    }],
                    "divide-x": [{
                        "divide-x": ei()
                    }],
                    "divide-x-reverse": ["divide-x-reverse"],
                    "divide-y": [{
                        "divide-y": ei()
                    }],
                    "divide-y-reverse": ["divide-y-reverse"],
                    "border-style": [{
                        border: [...ed(), "hidden", "none"]
                    }],
                    "divide-style": [{
                        divide: [...ed(), "hidden", "none"]
                    }],
                    "border-color": [{
                        border: K()
                    }],
                    "border-color-x": [{
                        "border-x": K()
                    }],
                    "border-color-y": [{
                        "border-y": K()
                    }],
                    "border-color-s": [{
                        "border-s": K()
                    }],
                    "border-color-e": [{
                        "border-e": K()
                    }],
                    "border-color-t": [{
                        "border-t": K()
                    }],
                    "border-color-r": [{
                        "border-r": K()
                    }],
                    "border-color-b": [{
                        "border-b": K()
                    }],
                    "border-color-l": [{
                        "border-l": K()
                    }],
                    "divide-color": [{
                        divide: K()
                    }],
                    "outline-style": [{
                        outline: [...ed(), "none", "hidden"]
                    }],
                    "outline-offset": [{
                        "outline-offset": [W, X, D]
                    }],
                    "outline-w": [{
                        outline: ["", W, Y, F]
                    }],
                    "outline-color": [{
                        outline: K()
                    }],
                    shadow: [{
                        shadow: ["", "none", c, et, V]
                    }],
                    "shadow-color": [{
                        shadow: K()
                    }],
                    "inset-shadow": [{
                        "inset-shadow": ["none", m, et, V]
                    }],
                    "inset-shadow-color": [{
                        "inset-shadow": K()
                    }],
                    "ring-w": [{
                        ring: ei()
                    }],
                    "ring-w-inset": ["ring-inset"],
                    "ring-color": [{
                        ring: K()
                    }],
                    "ring-offset-w": [{
                        "ring-offset": [W, F]
                    }],
                    "ring-offset-color": [{
                        "ring-offset": K()
                    }],
                    "inset-ring-w": [{
                        "inset-ring": ei()
                    }],
                    "inset-ring-color": [{
                        "inset-ring": K()
                    }],
                    "text-shadow": [{
                        "text-shadow": ["none", p, et, V]
                    }],
                    "text-shadow-color": [{
                        "text-shadow": K()
                    }],
                    opacity: [{
                        opacity: [W, X, D]
                    }],
                    "mix-blend": [{
                        "mix-blend": [...ec(), "plus-darker", "plus-lighter"]
                    }],
                    "bg-blend": [{
                        "bg-blend": ec()
                    }],
                    "mask-clip": [{
                        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                    }, "mask-no-clip"],
                    "mask-composite": [{
                        mask: ["add", "subtract", "intersect", "exclude"]
                    }],
                    "mask-image-linear-pos": [{
                        "mask-linear": [W]
                    }],
                    "mask-image-linear-from-pos": [{
                        "mask-linear-from": em()
                    }],
                    "mask-image-linear-to-pos": [{
                        "mask-linear-to": em()
                    }],
                    "mask-image-linear-from-color": [{
                        "mask-linear-from": K()
                    }],
                    "mask-image-linear-to-color": [{
                        "mask-linear-to": K()
                    }],
                    "mask-image-t-from-pos": [{
                        "mask-t-from": em()
                    }],
                    "mask-image-t-to-pos": [{
                        "mask-t-to": em()
                    }],
                    "mask-image-t-from-color": [{
                        "mask-t-from": K()
                    }],
                    "mask-image-t-to-color": [{
                        "mask-t-to": K()
                    }],
                    "mask-image-r-from-pos": [{
                        "mask-r-from": em()
                    }],
                    "mask-image-r-to-pos": [{
                        "mask-r-to": em()
                    }],
                    "mask-image-r-from-color": [{
                        "mask-r-from": K()
                    }],
                    "mask-image-r-to-color": [{
                        "mask-r-to": K()
                    }],
                    "mask-image-b-from-pos": [{
                        "mask-b-from": em()
                    }],
                    "mask-image-b-to-pos": [{
                        "mask-b-to": em()
                    }],
                    "mask-image-b-from-color": [{
                        "mask-b-from": K()
                    }],
                    "mask-image-b-to-color": [{
                        "mask-b-to": K()
                    }],
                    "mask-image-l-from-pos": [{
                        "mask-l-from": em()
                    }],
                    "mask-image-l-to-pos": [{
                        "mask-l-to": em()
                    }],
                    "mask-image-l-from-color": [{
                        "mask-l-from": K()
                    }],
                    "mask-image-l-to-color": [{
                        "mask-l-to": K()
                    }],
                    "mask-image-x-from-pos": [{
                        "mask-x-from": em()
                    }],
                    "mask-image-x-to-pos": [{
                        "mask-x-to": em()
                    }],
                    "mask-image-x-from-color": [{
                        "mask-x-from": K()
                    }],
                    "mask-image-x-to-color": [{
                        "mask-x-to": K()
                    }],
                    "mask-image-y-from-pos": [{
                        "mask-y-from": em()
                    }],
                    "mask-image-y-to-pos": [{
                        "mask-y-to": em()
                    }],
                    "mask-image-y-from-color": [{
                        "mask-y-from": K()
                    }],
                    "mask-image-y-to-color": [{
                        "mask-y-to": K()
                    }],
                    "mask-image-radial": [{
                        "mask-radial": [X, D]
                    }],
                    "mask-image-radial-from-pos": [{
                        "mask-radial-from": em()
                    }],
                    "mask-image-radial-to-pos": [{
                        "mask-radial-to": em()
                    }],
                    "mask-image-radial-from-color": [{
                        "mask-radial-from": K()
                    }],
                    "mask-image-radial-to-color": [{
                        "mask-radial-to": K()
                    }],
                    "mask-image-radial-shape": [{
                        "mask-radial": ["circle", "ellipse"]
                    }],
                    "mask-image-radial-size": [{
                        "mask-radial": [{
                            closest: ["side", "corner"],
                            farthest: ["side", "corner"]
                        }]
                    }],
                    "mask-image-radial-pos": [{
                        "mask-radial-at": w()
                    }],
                    "mask-image-conic-pos": [{
                        "mask-conic": [W]
                    }],
                    "mask-image-conic-from-pos": [{
                        "mask-conic-from": em()
                    }],
                    "mask-image-conic-to-pos": [{
                        "mask-conic-to": em()
                    }],
                    "mask-image-conic-from-color": [{
                        "mask-conic-from": K()
                    }],
                    "mask-image-conic-to-color": [{
                        "mask-conic-to": K()
                    }],
                    "mask-mode": [{
                        mask: ["alpha", "luminance", "match"]
                    }],
                    "mask-origin": [{
                        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                    }],
                    "mask-position": [{
                        mask: L()
                    }],
                    "mask-repeat": [{
                        mask: el()
                    }],
                    "mask-size": [{
                        mask: ea()
                    }],
                    "mask-type": [{
                        "mask-type": ["alpha", "luminance"]
                    }],
                    "mask-image": [{
                        mask: ["none", X, D]
                    }],
                    filter: [{
                        filter: ["", "none", X, D]
                    }],
                    blur: [{
                        blur: ep()
                    }],
                    brightness: [{
                        brightness: [W, X, D]
                    }],
                    contrast: [{
                        contrast: [W, X, D]
                    }],
                    "drop-shadow": [{
                        "drop-shadow": ["", "none", u, et, V]
                    }],
                    "drop-shadow-color": [{
                        "drop-shadow": K()
                    }],
                    grayscale: [{
                        grayscale: ["", W, X, D]
                    }],
                    "hue-rotate": [{
                        "hue-rotate": [W, X, D]
                    }],
                    invert: [{
                        invert: ["", W, X, D]
                    }],
                    saturate: [{
                        saturate: [W, X, D]
                    }],
                    sepia: [{
                        sepia: ["", W, X, D]
                    }],
                    "backdrop-filter": [{
                        "backdrop-filter": ["", "none", X, D]
                    }],
                    "backdrop-blur": [{
                        "backdrop-blur": ep()
                    }],
                    "backdrop-brightness": [{
                        "backdrop-brightness": [W, X, D]
                    }],
                    "backdrop-contrast": [{
                        "backdrop-contrast": [W, X, D]
                    }],
                    "backdrop-grayscale": [{
                        "backdrop-grayscale": ["", W, X, D]
                    }],
                    "backdrop-hue-rotate": [{
                        "backdrop-hue-rotate": [W, X, D]
                    }],
                    "backdrop-invert": [{
                        "backdrop-invert": ["", W, X, D]
                    }],
                    "backdrop-opacity": [{
                        "backdrop-opacity": [W, X, D]
                    }],
                    "backdrop-saturate": [{
                        "backdrop-saturate": [W, X, D]
                    }],
                    "backdrop-sepia": [{
                        "backdrop-sepia": ["", W, X, D]
                    }],
                    "border-collapse": [{
                        border: ["collapse", "separate"]
                    }],
                    "border-spacing": [{
                        "border-spacing": C()
                    }],
                    "border-spacing-x": [{
                        "border-spacing-x": C()
                    }],
                    "border-spacing-y": [{
                        "border-spacing-y": C()
                    }],
                    "table-layout": [{
                        table: ["auto", "fixed"]
                    }],
                    caption: [{
                        caption: ["top", "bottom"]
                    }],
                    transition: [{
                        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", X, D]
                    }],
                    "transition-behavior": [{
                        transition: ["normal", "discrete"]
                    }],
                    duration: [{
                        duration: [W, "initial", X, D]
                    }],
                    ease: [{
                        ease: ["linear", "initial", h, X, D]
                    }],
                    delay: [{
                        delay: [W, X, D]
                    }],
                    animate: [{
                        animate: ["none", k, X, D]
                    }],
                    backface: [{
                        backface: ["hidden", "visible"]
                    }],
                    perspective: [{
                        perspective: [f, X, D]
                    }],
                    "perspective-origin": [{
                        "perspective-origin": y()
                    }],
                    rotate: [{
                        rotate: eu()
                    }],
                    "rotate-x": [{
                        "rotate-x": eu()
                    }],
                    "rotate-y": [{
                        "rotate-y": eu()
                    }],
                    "rotate-z": [{
                        "rotate-z": eu()
                    }],
                    scale: [{
                        scale: eb()
                    }],
                    "scale-x": [{
                        "scale-x": eb()
                    }],
                    "scale-y": [{
                        "scale-y": eb()
                    }],
                    "scale-z": [{
                        "scale-z": eb()
                    }],
                    "scale-3d": ["scale-3d"],
                    skew: [{
                        skew: ef()
                    }],
                    "skew-x": [{
                        "skew-x": ef()
                    }],
                    "skew-y": [{
                        "skew-y": ef()
                    }],
                    transform: [{
                        transform: [X, D, "", "none", "gpu", "cpu"]
                    }],
                    "transform-origin": [{
                        origin: y()
                    }],
                    "transform-style": [{
                        transform: ["3d", "flat"]
                    }],
                    translate: [{
                        translate: eg()
                    }],
                    "translate-x": [{
                        "translate-x": eg()
                    }],
                    "translate-y": [{
                        "translate-y": eg()
                    }],
                    "translate-z": [{
                        "translate-z": eg()
                    }],
                    "translate-none": ["translate-none"],
                    accent: [{
                        accent: K()
                    }],
                    appearance: [{
                        appearance: ["none", "auto"]
                    }],
                    "caret-color": [{
                        caret: K()
                    }],
                    "color-scheme": [{
                        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                    }],
                    cursor: [{
                        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", X, D]
                    }],
                    "field-sizing": [{
                        "field-sizing": ["fixed", "content"]
                    }],
                    "pointer-events": [{
                        "pointer-events": ["auto", "none"]
                    }],
                    resize: [{
                        resize: ["none", "", "y", "x"]
                    }],
                    "scroll-behavior": [{
                        scroll: ["auto", "smooth"]
                    }],
                    "scroll-m": [{
                        "scroll-m": C()
                    }],
                    "scroll-mx": [{
                        "scroll-mx": C()
                    }],
                    "scroll-my": [{
                        "scroll-my": C()
                    }],
                    "scroll-ms": [{
                        "scroll-ms": C()
                    }],
                    "scroll-me": [{
                        "scroll-me": C()
                    }],
                    "scroll-mt": [{
                        "scroll-mt": C()
                    }],
                    "scroll-mr": [{
                        "scroll-mr": C()
                    }],
                    "scroll-mb": [{
                        "scroll-mb": C()
                    }],
                    "scroll-ml": [{
                        "scroll-ml": C()
                    }],
                    "scroll-p": [{
                        "scroll-p": C()
                    }],
                    "scroll-px": [{
                        "scroll-px": C()
                    }],
                    "scroll-py": [{
                        "scroll-py": C()
                    }],
                    "scroll-ps": [{
                        "scroll-ps": C()
                    }],
                    "scroll-pe": [{
                        "scroll-pe": C()
                    }],
                    "scroll-pt": [{
                        "scroll-pt": C()
                    }],
                    "scroll-pr": [{
                        "scroll-pr": C()
                    }],
                    "scroll-pb": [{
                        "scroll-pb": C()
                    }],
                    "scroll-pl": [{
                        "scroll-pl": C()
                    }],
                    "snap-align": [{
                        snap: ["start", "end", "center", "align-none"]
                    }],
                    "snap-stop": [{
                        snap: ["normal", "always"]
                    }],
                    "snap-type": [{
                        snap: ["none", "x", "y", "both"]
                    }],
                    "snap-strictness": [{
                        snap: ["mandatory", "proximity"]
                    }],
                    touch: [{
                        touch: ["auto", "none", "manipulation"]
                    }],
                    "touch-x": [{
                        "touch-pan": ["x", "left", "right"]
                    }],
                    "touch-y": [{
                        "touch-pan": ["y", "up", "down"]
                    }],
                    "touch-pz": ["touch-pinch-zoom"],
                    select: [{
                        select: ["none", "text", "all", "auto"]
                    }],
                    "will-change": [{
                        "will-change": ["auto", "scroll", "contents", "transform", X, D]
                    }],
                    fill: [{
                        fill: ["none", ...K()]
                    }],
                    "stroke-w": [{
                        stroke: [W, Y, F, H]
                    }],
                    stroke: [{
                        stroke: ["none", ...K()]
                    }],
                    "forced-color-adjust": [{
                        "forced-color-adjust": ["auto", "none"]
                    }]
                },
                conflictingClassGroups: {
                    overflow: ["overflow-x", "overflow-y"],
                    overscroll: ["overscroll-x", "overscroll-y"],
                    inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                    "inset-x": ["right", "left"],
                    "inset-y": ["top", "bottom"],
                    flex: ["basis", "grow", "shrink"],
                    gap: ["gap-x", "gap-y"],
                    p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                    px: ["pr", "pl"],
                    py: ["pt", "pb"],
                    m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                    mx: ["mr", "ml"],
                    my: ["mt", "mb"],
                    size: ["w", "h"],
                    "font-size": ["leading"],
                    "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                    "fvn-ordinal": ["fvn-normal"],
                    "fvn-slashed-zero": ["fvn-normal"],
                    "fvn-figure": ["fvn-normal"],
                    "fvn-spacing": ["fvn-normal"],
                    "fvn-fraction": ["fvn-normal"],
                    "line-clamp": ["display", "overflow"],
                    rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                    "rounded-s": ["rounded-ss", "rounded-es"],
                    "rounded-e": ["rounded-se", "rounded-ee"],
                    "rounded-t": ["rounded-tl", "rounded-tr"],
                    "rounded-r": ["rounded-tr", "rounded-br"],
                    "rounded-b": ["rounded-br", "rounded-bl"],
                    "rounded-l": ["rounded-tl", "rounded-bl"],
                    "border-spacing": ["border-spacing-x", "border-spacing-y"],
                    "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                    "border-w-x": ["border-w-r", "border-w-l"],
                    "border-w-y": ["border-w-t", "border-w-b"],
                    "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                    "border-color-x": ["border-color-r", "border-color-l"],
                    "border-color-y": ["border-color-t", "border-color-b"],
                    translate: ["translate-x", "translate-y", "translate-none"],
                    "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                    "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                    "scroll-mx": ["scroll-mr", "scroll-ml"],
                    "scroll-my": ["scroll-mt", "scroll-mb"],
                    "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                    "scroll-px": ["scroll-pr", "scroll-pl"],
                    "scroll-py": ["scroll-pt", "scroll-pb"],
                    touch: ["touch-x", "touch-y", "touch-pz"],
                    "touch-x": ["touch"],
                    "touch-y": ["touch"],
                    "touch-pz": ["touch"]
                },
                conflictingClassGroupModifiers: {
                    "font-size": ["leading"]
                },
                orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
            }
        }, a = e => {
            let l = o(e);
            if (l) return l;
            let a = ((e, r) => {
                let {
                    parseClassName: o,
                    getClassGroupId: t,
                    getConflictingClassGroupIds: l,
                    sortModifiers: a
                } = r, n = [], s = e.trim().split(y), i = "";
                for (let e = s.length - 1; e >= 0; e -= 1) {
                    let r = s[e],
                        {
                            isExternal: d,
                            modifiers: c,
                            hasImportantModifier: m,
                            baseClassName: p,
                            maybePostfixModifierPosition: u
                        } = o(r);
                    if (d) {
                        i = r + (i.length > 0 ? " " + i : i);
                        continue
                    }
                    let b = !!u,
                        f = t(b ? p.substring(0, u) : p);
                    if (!f) {
                        if (!b || !(f = t(p))) {
                            i = r + (i.length > 0 ? " " + i : i);
                            continue
                        }
                        b = !1
                    }
                    let g = 0 === c.length ? "" : 1 === c.length ? c[0] : a(c).join(":"),
                        h = m ? g + "!" : g,
                        k = h + f;
                    if (n.indexOf(k) > -1) continue;
                    n.push(k);
                    let x = l(f, b);
                    for (let e = 0; e < x.length; ++e) {
                        let r = x[e];
                        n.push(h + r)
                    }
                    i = r + (i.length > 0 ? " " + i : i)
                }
                return i
            })(e, r);
            return t(e, a), a
        }, l = e => {
            var s;
            let i;
            return o = (r = {
                cache: (e => {
                    if (e < 1) return {
                        get: () => void 0,
                        set: () => {}
                    };
                    let r = 0,
                        o = Object.create(null),
                        t = Object.create(null),
                        l = (l, a) => {
                            o[l] = a, ++r > e && (r = 0, t = o, o = Object.create(null))
                        };
                    return {
                        get(e) {
                            let r = o[e];
                            return void 0 !== r ? r : void 0 !== (r = t[e]) ? (l(e, r), r) : void 0
                        },
                        set(e, r) {
                            e in o ? o[e] = r : l(e, r)
                        }
                    }
                })((s = [].reduce((e, r) => r(e), n())).cacheSize),
                parseClassName: (e => {
                    let {
                        prefix: r,
                        experimentalParseClassName: o
                    } = e, t = e => {
                        let r, o = [],
                            t = 0,
                            l = 0,
                            a = 0,
                            n = e.length;
                        for (let s = 0; s < n; s++) {
                            let n = e[s];
                            if (0 === t && 0 === l) {
                                if (":" === n) {
                                    o.push(e.slice(a, s)), a = s + 1;
                                    continue
                                }
                                if ("/" === n) {
                                    r = s;
                                    continue
                                }
                            }
                            "[" === n ? t++ : "]" === n ? t-- : "(" === n ? l++ : ")" === n && l--
                        }
                        let s = 0 === o.length ? e : e.slice(a),
                            i = s,
                            d = !1;
                        return s.endsWith("!") ? (i = s.slice(0, -1), d = !0) : s.startsWith("!") && (i = s.slice(1), d = !0), w(o, d, i, r && r > a ? r - a : void 0)
                    };
                    if (r) {
                        let e = r + ":",
                            o = t;
                        t = r => r.startsWith(e) ? o(r.slice(e.length)) : w(x, !1, r, void 0, !0)
                    }
                    if (o) {
                        let e = t;
                        t = r => o({
                            className: r,
                            parseClassName: e
                        })
                    }
                    return t
                })(s),
                sortModifiers: (i = new Map, s.orderSensitiveModifiers.forEach((e, r) => {
                    i.set(e, 1e6 + r)
                }), e => {
                    let r = [],
                        o = [];
                    for (let t = 0; t < e.length; t++) {
                        let l = e[t],
                            a = "[" === l[0],
                            n = i.has(l);
                        a || n ? (o.length > 0 && (o.sort(), r.push(...o), o = []), r.push(l)) : o.push(l)
                    }
                    return o.length > 0 && (o.sort(), r.push(...o)), r
                }),
                ...(e => {
                    let r = (e => {
                            let {
                                theme: r,
                                classGroups: o
                            } = e;
                            return m(o, r)
                        })(e),
                        {
                            conflictingClassGroups: o,
                            conflictingClassGroupModifiers: t
                        } = e;
                    return {
                        getClassGroupId: e => {
                            if (e.startsWith("[") && e.endsWith("]")) {
                                var o;
                                let r, t, l;
                                return -1 === (o = e).slice(1, -1).indexOf(":") ? void 0 : (t = (r = o.slice(1, -1)).indexOf(":"), (l = r.slice(0, t)) ? "arbitrary.." + l : void 0)
                            }
                            let t = e.split("-"),
                                l = +("" === t[0] && t.length > 1);
                            return c(t, l, r)
                        },
                        getConflictingClassGroupIds: (e, r) => {
                            if (r) {
                                let r = t[e],
                                    l = o[e];
                                if (r) {
                                    if (l) {
                                        let e = Array(l.length + r.length);
                                        for (let r = 0; r < l.length; r++) e[r] = l[r];
                                        for (let o = 0; o < r.length; o++) e[l.length + o] = r[o];
                                        return e
                                    }
                                    return r
                                }
                                return l || d
                            }
                            return o[e] || d
                        }
                    }
                })(s)
            }).cache.get, t = r.cache.set, l = a, a(e)
        }, (...e) => l(((...e) => {
            let r, o, t = 0,
                l = "";
            for (; t < e.length;)(r = e[t++]) && (o = v(r)) && (l && (l += " "), l += o);
            return l
        })(...e)));
    e.s(["cn", 0, function(...e) {
        return eu((0, s.clsx)(e))
    }], 975157)
}]);