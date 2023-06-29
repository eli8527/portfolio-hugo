(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn2, res) => function __init() {
    return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // ns-hugo:/src/assets/scripts/vue.esm-browser.prod.js
  var vue_esm_browser_prod_exports = {};
  __export(vue_esm_browser_prod_exports, {
    BaseTransition: () => oo,
    Comment: () => Hr,
    EffectScope: () => ne,
    Fragment: () => Ur,
    KeepAlive: () => go,
    ReactiveEffect: () => ge,
    Static: () => Wr,
    Suspense: () => Bn,
    Teleport: () => jr,
    Text: () => Dr,
    Transition: () => Ti,
    TransitionGroup: () => Wi,
    VueElement: () => Si,
    callWithAsyncErrorHandling: () => Qt,
    callWithErrorHandling: () => Yt,
    camelize: () => z,
    capitalize: () => q,
    cloneVNode: () => as,
    compatUtils: () => oi,
    compile: () => Qu,
    computed: () => Is,
    createApp: () => Sl,
    createBlock: () => Xr,
    createCommentVNode: () => fs,
    createElementBlock: () => Qr,
    createElementVNode: () => is,
    createHydrationRenderer: () => Fr,
    createPropsRestProxy: () => Ks,
    createRenderer: () => Rr,
    createSSRApp: () => xl,
    createSlots: () => zo,
    createStaticVNode: () => ps,
    createTextVNode: () => us,
    createVNode: () => ls,
    customRef: () => Ut,
    defineAsyncComponent: () => fo,
    defineComponent: () => uo,
    defineCustomElement: () => yi,
    defineEmits: () => Ls,
    defineExpose: () => js,
    defineProps: () => Bs,
    defineSSRCustomElement: () => _i,
    devtools: () => _n,
    effect: () => ye,
    effectScope: () => oe,
    getCurrentInstance: () => Ss,
    getCurrentScope: () => se,
    getTransitionRawChildren: () => ao,
    guardReactiveProps: () => cs,
    h: () => qs,
    handleError: () => Xt,
    hydrate: () => bl,
    initCustomFormatter: () => Ys,
    initDirectivesForSSR: () => kl,
    inject: () => zn,
    isMemoSame: () => Xs,
    isProxy: () => kt,
    isReactive: () => St,
    isReadonly: () => xt,
    isRef: () => Rt,
    isRuntimeOnly: () => Os,
    isShallow: () => Ct,
    isVNode: () => es,
    markRaw: () => Tt,
    mergeDefaults: () => zs,
    mergeProps: () => gs,
    nextTick: () => un,
    normalizeClass: () => c,
    normalizeProps: () => a,
    normalizeStyle: () => r,
    onActivated: () => yo,
    onBeforeMount: () => To,
    onBeforeUnmount: () => Oo,
    onBeforeUpdate: () => Eo,
    onDeactivated: () => _o,
    onErrorCaptured: () => Mo,
    onMounted: () => No,
    onRenderTracked: () => Po,
    onRenderTriggered: () => Ao,
    onScopeDispose: () => ie,
    onServerPrefetch: () => Fo,
    onUnmounted: () => Ro,
    onUpdated: () => $o,
    openBlock: () => Gr,
    popScopeId: () => $n,
    provide: () => Wn,
    proxyRefs: () => Lt,
    pushScopeId: () => En,
    queuePostFlushCb: () => dn,
    reactive: () => gt,
    readonly: () => yt,
    ref: () => Ft,
    registerRuntimeCompiler: () => $s,
    render: () => _l,
    renderList: () => Wo,
    renderSlot: () => Ko,
    resolveComponent: () => Bo,
    resolveDirective: () => Uo,
    resolveDynamicComponent: () => jo,
    resolveFilter: () => ni,
    resolveTransitionHooks: () => so,
    setBlockTracking: () => Zr,
    setDevtoolsHook: () => Sn,
    setTransitionHooks: () => co,
    shallowReactive: () => vt,
    shallowReadonly: () => _t,
    shallowRef: () => At,
    ssrContextKey: () => Js,
    ssrUtils: () => ti,
    stop: () => _e,
    toDisplayString: () => m,
    toHandlerKey: () => J,
    toHandlers: () => qo,
    toRaw: () => wt,
    toRef: () => Wt,
    toRefs: () => Dt,
    transformVNodeArgs: () => ns,
    triggerRef: () => Vt,
    unref: () => It,
    useAttrs: () => Hs,
    useCssModule: () => xi,
    useCssVars: () => Ci,
    useSSRContext: () => Zs,
    useSlots: () => Ds,
    useTransitionState: () => to,
    vModelCheckbox: () => Qi,
    vModelDynamic: () => sl,
    vModelRadio: () => el,
    vModelSelect: () => tl,
    vModelText: () => Yi,
    vShow: () => fl,
    version: () => ei,
    warn: () => qt,
    watch: () => Zn,
    watchEffect: () => Kn,
    watchPostEffect: () => Gn,
    watchSyncEffect: () => qn,
    withAsyncContext: () => Gs,
    withCtx: () => Rn,
    withDefaults: () => Us,
    withDirectives: () => Vo,
    withKeys: () => pl,
    withMemo: () => Qs,
    withModifiers: () => al,
    withScopeId: () => On
  });
  function e(e2, t2) {
    const n2 = /* @__PURE__ */ Object.create(null), o2 = e2.split(",");
    for (let r2 = 0; r2 < o2.length; r2++)
      n2[o2[r2]] = true;
    return t2 ? (e3) => !!n2[e3.toLowerCase()] : (e3) => !!n2[e3];
  }
  function o(e2) {
    return !!e2 || "" === e2;
  }
  function r(e2) {
    if (E(e2)) {
      const t2 = {};
      for (let n2 = 0; n2 < e2.length; n2++) {
        const o2 = e2[n2], s2 = A(o2) ? l(o2) : r(o2);
        if (s2)
          for (const e3 in s2)
            t2[e3] = s2[e3];
      }
      return t2;
    }
    return A(e2) || M(e2) ? e2 : void 0;
  }
  function l(e2) {
    const t2 = {};
    return e2.split(s).forEach((e3) => {
      if (e3) {
        const n2 = e3.split(i);
        n2.length > 1 && (t2[n2[0].trim()] = n2[1].trim());
      }
    }), t2;
  }
  function c(e2) {
    let t2 = "";
    if (A(e2))
      t2 = e2;
    else if (E(e2))
      for (let n2 = 0; n2 < e2.length; n2++) {
        const o2 = c(e2[n2]);
        o2 && (t2 += o2 + " ");
      }
    else if (M(e2))
      for (const n2 in e2)
        e2[n2] && (t2 += n2 + " ");
    return t2.trim();
  }
  function a(e2) {
    if (!e2)
      return null;
    let { class: t2, style: n2 } = e2;
    return t2 && !A(t2) && (e2.class = c(t2)), n2 && (e2.style = r(n2)), e2;
  }
  function d(e2, t2) {
    if (e2 === t2)
      return true;
    let n2 = R(e2), o2 = R(t2);
    if (n2 || o2)
      return !(!n2 || !o2) && e2.getTime() === t2.getTime();
    if (n2 = P(e2), o2 = P(t2), n2 || o2)
      return e2 === t2;
    if (n2 = E(e2), o2 = E(t2), n2 || o2)
      return !(!n2 || !o2) && function(e3, t3) {
        if (e3.length !== t3.length)
          return false;
        let n3 = true;
        for (let o3 = 0; n3 && o3 < e3.length; o3++)
          n3 = d(e3[o3], t3[o3]);
        return n3;
      }(e2, t2);
    if (n2 = M(e2), o2 = M(t2), n2 || o2) {
      if (!n2 || !o2)
        return false;
      if (Object.keys(e2).length !== Object.keys(t2).length)
        return false;
      for (const n3 in e2) {
        const o3 = e2.hasOwnProperty(n3), r2 = t2.hasOwnProperty(n3);
        if (o3 && !r2 || !o3 && r2 || !d(e2[n3], t2[n3]))
          return false;
      }
    }
    return String(e2) === String(t2);
  }
  function h(e2, t2) {
    return e2.findIndex((e3) => d(e3, t2));
  }
  function oe(e2) {
    return new ne(e2);
  }
  function re(e2, t2 = te) {
    t2 && t2.active && t2.effects.push(e2);
  }
  function se() {
    return te;
  }
  function ie(e2) {
    te && te.cleanups.push(e2);
  }
  function ve(e2) {
    const { deps: t2 } = e2;
    if (t2.length) {
      for (let n2 = 0; n2 < t2.length; n2++)
        t2[n2].delete(e2);
      t2.length = 0;
    }
  }
  function ye(e2, t2) {
    e2.effect && (e2 = e2.effect.fn);
    const n2 = new ge(e2);
    t2 && (k(n2, t2), t2.scope && re(n2, t2.scope)), t2 && t2.lazy || n2.run();
    const o2 = n2.run.bind(n2);
    return o2.effect = n2, o2;
  }
  function _e(e2) {
    e2.effect.stop();
  }
  function xe() {
    Se.push(be), be = false;
  }
  function Ce() {
    const e2 = Se.pop();
    be = void 0 === e2 || e2;
  }
  function ke(e2, t2, n2) {
    if (be && de) {
      let t3 = ue.get(e2);
      t3 || ue.set(e2, t3 = /* @__PURE__ */ new Map());
      let o2 = t3.get(n2);
      o2 || t3.set(n2, o2 = le()), we(o2);
    }
  }
  function we(e2, t2) {
    let n2 = false;
    pe <= 30 ? ae(e2) || (e2.n |= fe, n2 = !ce(e2)) : n2 = !e2.has(de), n2 && (e2.add(de), de.deps.push(e2));
  }
  function Te(e2, t2, n2, o2, r2, s2) {
    const i2 = ue.get(e2);
    if (!i2)
      return;
    let l2 = [];
    if ("clear" === t2)
      l2 = [...i2.values()];
    else if ("length" === n2 && E(e2))
      i2.forEach((e3, t3) => {
        ("length" === t3 || t3 >= o2) && l2.push(e3);
      });
    else
      switch (void 0 !== n2 && l2.push(i2.get(n2)), t2) {
        case "add":
          E(e2) ? j(n2) && l2.push(i2.get("length")) : (l2.push(i2.get(he)), $(e2) && l2.push(i2.get(me)));
          break;
        case "delete":
          E(e2) || (l2.push(i2.get(he)), $(e2) && l2.push(i2.get(me)));
          break;
        case "set":
          $(e2) && l2.push(i2.get(he));
      }
    if (1 === l2.length)
      l2[0] && Ne(l2[0]);
    else {
      const e3 = [];
      for (const t3 of l2)
        t3 && e3.push(...t3);
      Ne(le(e3));
    }
  }
  function Ne(e2, t2) {
    const n2 = E(e2) ? e2 : [...e2];
    for (const o2 of n2)
      o2.computed && Ee(o2);
    for (const o2 of n2)
      o2.computed || Ee(o2);
  }
  function Ee(e2, t2) {
    (e2 !== de || e2.allowRecurse) && (e2.scheduler ? e2.scheduler() : e2.run());
  }
  function Ve() {
    const e2 = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach((t2) => {
      e2[t2] = function(...e3) {
        const n2 = wt(this);
        for (let t3 = 0, r2 = this.length; t3 < r2; t3++)
          ke(n2, 0, t3 + "");
        const o2 = n2[t2](...e3);
        return -1 === o2 || false === o2 ? n2[t2](...e3.map(wt)) : o2;
      };
    }), ["push", "pop", "shift", "unshift", "splice"].forEach((t2) => {
      e2[t2] = function(...e3) {
        xe();
        const n2 = wt(this)[t2].apply(this, e3);
        return Ce(), n2;
      };
    }), e2;
  }
  function Ie(e2 = false, t2 = false) {
    return function(n2, o2, r2) {
      if ("__v_isReactive" === o2)
        return !e2;
      if ("__v_isReadonly" === o2)
        return e2;
      if ("__v_isShallow" === o2)
        return t2;
      if ("__v_raw" === o2 && r2 === (e2 ? t2 ? ht : dt : t2 ? ft : pt).get(n2))
        return n2;
      const s2 = E(n2);
      if (!e2 && s2 && N(Me, o2))
        return Reflect.get(Me, o2, r2);
      const i2 = Reflect.get(n2, o2, r2);
      return (P(o2) ? Oe.has(o2) : $e(o2)) ? i2 : (e2 || ke(n2, 0, o2), t2 ? i2 : Rt(i2) ? s2 && j(o2) ? i2 : i2.value : M(i2) ? e2 ? yt(i2) : gt(i2) : i2);
    };
  }
  function Be(e2 = false) {
    return function(t2, n2, o2, r2) {
      let s2 = t2[n2];
      if (xt(s2) && Rt(s2) && !Rt(o2))
        return false;
      if (!e2 && (Ct(o2) || xt(o2) || (s2 = wt(s2), o2 = wt(o2)), !E(t2) && Rt(s2) && !Rt(o2)))
        return s2.value = o2, true;
      const i2 = E(t2) && j(n2) ? Number(n2) < t2.length : N(t2, n2), l2 = Reflect.set(t2, n2, o2, r2);
      return t2 === wt(r2) && (i2 ? Z(o2, s2) && Te(t2, "set", n2, o2) : Te(t2, "add", n2, o2)), l2;
    };
  }
  function ze(e2, t2, n2 = false, o2 = false) {
    const r2 = wt(e2 = e2.__v_raw), s2 = wt(t2);
    n2 || (t2 !== s2 && ke(r2, 0, t2), ke(r2, 0, s2));
    const { has: i2 } = We(r2), l2 = o2 ? He : n2 ? Et : Nt;
    return i2.call(r2, t2) ? l2(e2.get(t2)) : i2.call(r2, s2) ? l2(e2.get(s2)) : void (e2 !== r2 && e2.get(t2));
  }
  function Ke(e2, t2 = false) {
    const n2 = this.__v_raw, o2 = wt(n2), r2 = wt(e2);
    return t2 || (e2 !== r2 && ke(o2, 0, e2), ke(o2, 0, r2)), e2 === r2 ? n2.has(e2) : n2.has(e2) || n2.has(r2);
  }
  function Ge(e2, t2 = false) {
    return e2 = e2.__v_raw, !t2 && ke(wt(e2), 0, he), Reflect.get(e2, "size", e2);
  }
  function qe(e2) {
    e2 = wt(e2);
    const t2 = wt(this);
    return We(t2).has.call(t2, e2) || (t2.add(e2), Te(t2, "add", e2, e2)), this;
  }
  function Je(e2, t2) {
    t2 = wt(t2);
    const n2 = wt(this), { has: o2, get: r2 } = We(n2);
    let s2 = o2.call(n2, e2);
    s2 || (e2 = wt(e2), s2 = o2.call(n2, e2));
    const i2 = r2.call(n2, e2);
    return n2.set(e2, t2), s2 ? Z(t2, i2) && Te(n2, "set", e2, t2) : Te(n2, "add", e2, t2), this;
  }
  function Ze(e2) {
    const t2 = wt(this), { has: n2, get: o2 } = We(t2);
    let r2 = n2.call(t2, e2);
    r2 || (e2 = wt(e2), r2 = n2.call(t2, e2)), o2 && o2.call(t2, e2);
    const s2 = t2.delete(e2);
    return r2 && Te(t2, "delete", e2, void 0), s2;
  }
  function Ye() {
    const e2 = wt(this), t2 = 0 !== e2.size, n2 = e2.clear();
    return t2 && Te(e2, "clear", void 0, void 0), n2;
  }
  function Qe(e2, t2) {
    return function(n2, o2) {
      const r2 = this, s2 = r2.__v_raw, i2 = wt(s2), l2 = t2 ? He : e2 ? Et : Nt;
      return !e2 && ke(i2, 0, he), s2.forEach((e3, t3) => n2.call(o2, l2(e3), l2(t3), r2));
    };
  }
  function Xe(e2, t2, n2) {
    return function(...o2) {
      const r2 = this.__v_raw, s2 = wt(r2), i2 = $(s2), l2 = "entries" === e2 || e2 === Symbol.iterator && i2, c2 = "keys" === e2 && i2, a2 = r2[e2](...o2), u2 = n2 ? He : t2 ? Et : Nt;
      return !t2 && ke(s2, 0, c2 ? me : he), { next() {
        const { value: e3, done: t3 } = a2.next();
        return t3 ? { value: e3, done: t3 } : { value: l2 ? [u2(e3[0]), u2(e3[1])] : u2(e3), done: t3 };
      }, [Symbol.iterator]() {
        return this;
      } };
    };
  }
  function et(e2) {
    return function(...t2) {
      return "delete" !== e2 && this;
    };
  }
  function tt() {
    const e2 = { get(e3) {
      return ze(this, e3);
    }, get size() {
      return Ge(this);
    }, has: Ke, add: qe, set: Je, delete: Ze, clear: Ye, forEach: Qe(false, false) }, t2 = { get(e3) {
      return ze(this, e3, false, true);
    }, get size() {
      return Ge(this);
    }, has: Ke, add: qe, set: Je, delete: Ze, clear: Ye, forEach: Qe(false, true) }, n2 = { get(e3) {
      return ze(this, e3, true);
    }, get size() {
      return Ge(this, true);
    }, has(e3) {
      return Ke.call(this, e3, true);
    }, add: et("add"), set: et("set"), delete: et("delete"), clear: et("clear"), forEach: Qe(true, false) }, o2 = { get(e3) {
      return ze(this, e3, true, true);
    }, get size() {
      return Ge(this, true);
    }, has(e3) {
      return Ke.call(this, e3, true);
    }, add: et("add"), set: et("set"), delete: et("delete"), clear: et("clear"), forEach: Qe(true, true) };
    return ["keys", "values", "entries", Symbol.iterator].forEach((r2) => {
      e2[r2] = Xe(r2, false, false), n2[r2] = Xe(r2, true, false), t2[r2] = Xe(r2, false, true), o2[r2] = Xe(r2, true, true);
    }), [e2, n2, t2, o2];
  }
  function it(e2, t2) {
    const n2 = t2 ? e2 ? st : rt : e2 ? ot : nt;
    return (t3, o2, r2) => "__v_isReactive" === o2 ? !e2 : "__v_isReadonly" === o2 ? e2 : "__v_raw" === o2 ? t3 : Reflect.get(N(n2, o2) && o2 in t3 ? n2 : t3, o2, r2);
  }
  function mt(e2) {
    return e2.__v_skip || !Object.isExtensible(e2) ? 0 : function(e3) {
      switch (e3) {
        case "Object":
        case "Array":
          return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
          return 2;
        default:
          return 0;
      }
    }(((e3) => B(e3).slice(8, -1))(e2));
  }
  function gt(e2) {
    return xt(e2) ? e2 : bt(e2, false, Le, lt, pt);
  }
  function vt(e2) {
    return bt(e2, false, Ue, ct, ft);
  }
  function yt(e2) {
    return bt(e2, true, je, at, dt);
  }
  function _t(e2) {
    return bt(e2, true, De, ut, ht);
  }
  function bt(e2, t2, n2, o2, r2) {
    if (!M(e2))
      return e2;
    if (e2.__v_raw && (!t2 || !e2.__v_isReactive))
      return e2;
    const s2 = r2.get(e2);
    if (s2)
      return s2;
    const i2 = mt(e2);
    if (0 === i2)
      return e2;
    const l2 = new Proxy(e2, 2 === i2 ? o2 : n2);
    return r2.set(e2, l2), l2;
  }
  function St(e2) {
    return xt(e2) ? St(e2.__v_raw) : !(!e2 || !e2.__v_isReactive);
  }
  function xt(e2) {
    return !(!e2 || !e2.__v_isReadonly);
  }
  function Ct(e2) {
    return !(!e2 || !e2.__v_isShallow);
  }
  function kt(e2) {
    return St(e2) || xt(e2);
  }
  function wt(e2) {
    const t2 = e2 && e2.__v_raw;
    return t2 ? wt(t2) : e2;
  }
  function Tt(e2) {
    return Q(e2, "__v_skip", true), e2;
  }
  function $t(e2) {
    be && de && we((e2 = wt(e2)).dep || (e2.dep = le()));
  }
  function Ot(e2, t2) {
    (e2 = wt(e2)).dep && Ne(e2.dep);
  }
  function Rt(e2) {
    return !(!e2 || true !== e2.__v_isRef);
  }
  function Ft(e2) {
    return Pt(e2, false);
  }
  function At(e2) {
    return Pt(e2, true);
  }
  function Pt(e2, t2) {
    return Rt(e2) ? e2 : new Mt(e2, t2);
  }
  function Vt(e2) {
    Ot(e2);
  }
  function It(e2) {
    return Rt(e2) ? e2.value : e2;
  }
  function Lt(e2) {
    return St(e2) ? e2 : new Proxy(e2, Bt);
  }
  function Ut(e2) {
    return new jt(e2);
  }
  function Dt(e2) {
    const t2 = E(e2) ? new Array(e2.length) : {};
    for (const n2 in e2)
      t2[n2] = Wt(e2, n2);
    return t2;
  }
  function Wt(e2, t2, n2) {
    const o2 = e2[t2];
    return Rt(o2) ? o2 : new Ht(e2, t2, n2);
  }
  function qt(e2, ...t2) {
    xe();
    const n2 = Gt.length ? Gt[Gt.length - 1].component : null, o2 = n2 && n2.appContext.config.warnHandler, r2 = function() {
      let e3 = Gt[Gt.length - 1];
      if (!e3)
        return [];
      const t3 = [];
      for (; e3; ) {
        const n3 = t3[0];
        n3 && n3.vnode === e3 ? n3.recurseCount++ : t3.push({ vnode: e3, recurseCount: 0 });
        const o3 = e3.component && e3.component.parent;
        e3 = o3 && o3.vnode;
      }
      return t3;
    }();
    if (o2)
      Yt(o2, n2, 11, [e2 + t2.join(""), n2 && n2.proxy, r2.map(({ vnode: e3 }) => `at <${Vs(n2, e3.type)}>`).join("\n"), r2]);
    else {
      const n3 = [`[Vue warn]: ${e2}`, ...t2];
      r2.length && n3.push("\n", ...function(e3) {
        const t3 = [];
        return e3.forEach((e4, n4) => {
          t3.push(...0 === n4 ? [] : ["\n"], ...function({ vnode: e5, recurseCount: t4 }) {
            const n5 = t4 > 0 ? `... (${t4} recursive calls)` : "", o3 = ` at <${Vs(e5.component, e5.type, !!e5.component && null == e5.component.parent)}`, r3 = ">" + n5;
            return e5.props ? [o3, ...Jt(e5.props), r3] : [o3 + r3];
          }(e4));
        }), t3;
      }(r2)), console.warn(...n3);
    }
    Ce();
  }
  function Jt(e2) {
    const t2 = [], n2 = Object.keys(e2);
    return n2.slice(0, 3).forEach((n3) => {
      t2.push(...Zt(n3, e2[n3]));
    }), n2.length > 3 && t2.push(" ..."), t2;
  }
  function Zt(e2, t2, n2) {
    return A(t2) ? (t2 = JSON.stringify(t2), n2 ? t2 : [`${e2}=${t2}`]) : "number" == typeof t2 || "boolean" == typeof t2 || null == t2 ? n2 ? t2 : [`${e2}=${t2}`] : Rt(t2) ? (t2 = Zt(e2, wt(t2.value), true), n2 ? t2 : [`${e2}=Ref<`, t2, ">"]) : F(t2) ? [`${e2}=fn${t2.name ? `<${t2.name}>` : ""}`] : (t2 = wt(t2), n2 ? t2 : [`${e2}=`, t2]);
  }
  function Yt(e2, t2, n2, o2) {
    let r2;
    try {
      r2 = o2 ? e2(...o2) : e2();
    } catch (s2) {
      Xt(s2, t2, n2);
    }
    return r2;
  }
  function Qt(e2, t2, n2, o2) {
    if (F(e2)) {
      const r3 = Yt(e2, t2, n2, o2);
      return r3 && V(r3) && r3.catch((e3) => {
        Xt(e3, t2, n2);
      }), r3;
    }
    const r2 = [];
    for (let s2 = 0; s2 < e2.length; s2++)
      r2.push(Qt(e2[s2], t2, n2, o2));
    return r2;
  }
  function Xt(e2, t2, n2, o2 = true) {
    if (t2) {
      let o3 = t2.parent;
      const r2 = t2.proxy, s2 = n2;
      for (; o3; ) {
        const t3 = o3.ec;
        if (t3) {
          for (let n3 = 0; n3 < t3.length; n3++)
            if (false === t3[n3](e2, r2, s2))
              return;
        }
        o3 = o3.parent;
      }
      const i2 = t2.appContext.config.errorHandler;
      if (i2)
        return void Yt(i2, null, 10, [e2, r2, s2]);
    }
    !function(e3, t3, n3, o3 = true) {
      console.error(e3);
    }(e2, 0, 0, o2);
  }
  function un(e2) {
    const t2 = an || cn;
    return e2 ? t2.then(this ? e2.bind(this) : e2) : t2;
  }
  function pn(e2) {
    nn.length && nn.includes(e2, en && e2.allowRecurse ? on + 1 : on) || (null == e2.id ? nn.push(e2) : nn.splice(function(e3) {
      let t2 = on + 1, n2 = nn.length;
      for (; t2 < n2; ) {
        const o2 = t2 + n2 >>> 1;
        gn(nn[o2]) < e3 ? t2 = o2 + 1 : n2 = o2;
      }
      return t2;
    }(e2.id), 0, e2), fn());
  }
  function fn() {
    en || tn || (tn = true, an = cn.then(yn));
  }
  function dn(e2) {
    E(e2) ? rn.push(...e2) : sn && sn.includes(e2, e2.allowRecurse ? ln + 1 : ln) || rn.push(e2), fn();
  }
  function hn(e2, t2 = en ? on + 1 : 0) {
    for (; t2 < nn.length; t2++) {
      const e3 = nn[t2];
      e3 && e3.pre && (nn.splice(t2, 1), t2--, e3());
    }
  }
  function mn(e2) {
    if (rn.length) {
      const e3 = [...new Set(rn)];
      if (rn.length = 0, sn)
        return void sn.push(...e3);
      for (sn = e3, sn.sort((e4, t2) => gn(e4) - gn(t2)), ln = 0; ln < sn.length; ln++)
        sn[ln]();
      sn = null, ln = 0;
    }
  }
  function yn(e2) {
    tn = false, en = true, nn.sort(vn);
    try {
      for (on = 0; on < nn.length; on++) {
        const e3 = nn[on];
        e3 && false !== e3.active && Yt(e3, null, 14);
      }
    } finally {
      on = 0, nn.length = 0, mn(), en = false, an = null, (nn.length || rn.length) && yn();
    }
  }
  function Sn(e2, t2) {
    var n2, o2;
    if (_n = e2, _n)
      _n.enabled = true, bn.forEach(({ event: e3, args: t3 }) => _n.emit(e3, ...t3)), bn = [];
    else if ("undefined" != typeof window && window.HTMLElement && !(null === (o2 = null === (n2 = window.navigator) || void 0 === n2 ? void 0 : n2.userAgent) || void 0 === o2 ? void 0 : o2.includes("jsdom"))) {
      (t2.__VUE_DEVTOOLS_HOOK_REPLAY__ = t2.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((e3) => {
        Sn(e3, t2);
      }), setTimeout(() => {
        _n || (t2.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, bn = []);
      }, 3e3);
    } else
      bn = [];
  }
  function xn(e2, t2, ...n2) {
    if (e2.isUnmounted)
      return;
    const o2 = e2.vnode.props || v;
    let r2 = n2;
    const s2 = t2.startsWith("update:"), i2 = s2 && t2.slice(7);
    if (i2 && i2 in o2) {
      const e3 = `${"modelValue" === i2 ? "model" : i2}Modifiers`, { number: t3, trim: s3 } = o2[e3] || v;
      s3 && (r2 = n2.map((e4) => e4.trim())), t3 && (r2 = n2.map(X));
    }
    let l2, c2 = o2[l2 = J(t2)] || o2[l2 = J(z(t2))];
    !c2 && s2 && (c2 = o2[l2 = J(G(t2))]), c2 && Qt(c2, e2, 6, r2);
    const a2 = o2[l2 + "Once"];
    if (a2) {
      if (e2.emitted) {
        if (e2.emitted[l2])
          return;
      } else
        e2.emitted = {};
      e2.emitted[l2] = true, Qt(a2, e2, 6, r2);
    }
  }
  function Cn(e2, t2, n2 = false) {
    const o2 = t2.emitsCache, r2 = o2.get(e2);
    if (void 0 !== r2)
      return r2;
    const s2 = e2.emits;
    let i2 = {}, l2 = false;
    if (!F(e2)) {
      const o3 = (e3) => {
        const n3 = Cn(e3, t2, true);
        n3 && (l2 = true, k(i2, n3));
      };
      !n2 && t2.mixins.length && t2.mixins.forEach(o3), e2.extends && o3(e2.extends), e2.mixins && e2.mixins.forEach(o3);
    }
    return s2 || l2 ? (E(s2) ? s2.forEach((e3) => i2[e3] = null) : k(i2, s2), M(e2) && o2.set(e2, i2), i2) : (M(e2) && o2.set(e2, null), null);
  }
  function kn(e2, t2) {
    return !(!e2 || !x(t2)) && (t2 = t2.slice(2).replace(/Once$/, ""), N(e2, t2[0].toLowerCase() + t2.slice(1)) || N(e2, G(t2)) || N(e2, t2));
  }
  function Nn(e2) {
    const t2 = wn;
    return wn = e2, Tn = e2 && e2.type.__scopeId || null, t2;
  }
  function En(e2) {
    Tn = e2;
  }
  function $n() {
    Tn = null;
  }
  function Rn(e2, t2 = wn, n2) {
    if (!t2)
      return e2;
    if (e2._n)
      return e2;
    const o2 = (...n3) => {
      o2._d && Zr(-1);
      const r2 = Nn(t2);
      let s2;
      try {
        s2 = e2(...n3);
      } finally {
        Nn(r2), o2._d && Zr(1);
      }
      return s2;
    };
    return o2._n = true, o2._c = true, o2._d = true, o2;
  }
  function Fn(e2) {
    const { type: t2, vnode: n2, proxy: o2, withProxy: r2, props: s2, propsOptions: [i2], slots: l2, attrs: c2, emit: a2, render: u2, renderCache: p3, data: f2, setupState: d2, ctx: h3, inheritAttrs: m2 } = e2;
    let g2, v2;
    const y2 = Nn(e2);
    try {
      if (4 & n2.shapeFlag) {
        const e3 = r2 || o2;
        g2 = ds(u2.call(e3, e3, p3, s2, d2, f2, h3)), v2 = c2;
      } else {
        const e3 = t2;
        0, g2 = ds(e3(s2, e3.length > 1 ? { attrs: c2, slots: l2, emit: a2 } : null)), v2 = t2.props ? c2 : An(c2);
      }
    } catch (b2) {
      zr.length = 0, Xt(b2, e2, 1), g2 = ls(Hr);
    }
    let _2 = g2;
    if (v2 && false !== m2) {
      const e3 = Object.keys(v2), { shapeFlag: t3 } = _2;
      e3.length && 7 & t3 && (i2 && e3.some(C) && (v2 = Pn(v2, i2)), _2 = as(_2, v2));
    }
    return n2.dirs && (_2 = as(_2), _2.dirs = _2.dirs ? _2.dirs.concat(n2.dirs) : n2.dirs), n2.transition && (_2.transition = n2.transition), g2 = _2, Nn(y2), g2;
  }
  function Mn(e2, t2, n2) {
    const o2 = Object.keys(t2);
    if (o2.length !== Object.keys(e2).length)
      return true;
    for (let r2 = 0; r2 < o2.length; r2++) {
      const s2 = o2[r2];
      if (t2[s2] !== e2[s2] && !kn(n2, s2))
        return true;
    }
    return false;
  }
  function Vn({ vnode: e2, parent: t2 }, n2) {
    for (; t2 && t2.subTree === e2; )
      (e2 = t2.vnode).el = n2, t2 = t2.parent;
  }
  function Ln(e2, t2) {
    const n2 = e2.props && e2.props[t2];
    F(n2) && n2();
  }
  function jn(e2, t2, n2, o2, r2, s2, i2, l2, c2, a2, u2 = false) {
    const { p: p3, m: f2, um: d2, n: h3, o: { parentNode: m2, remove: g2 } } = a2, v2 = X(e2.props && e2.props.timeout), y2 = { vnode: e2, parent: t2, parentComponent: n2, isSVG: i2, container: o2, hiddenContainer: r2, anchor: s2, deps: 0, pendingId: 0, timeout: "number" == typeof v2 ? v2 : -1, activeBranch: null, pendingBranch: null, isInFallback: true, isHydrating: u2, isUnmounted: false, effects: [], resolve(e3 = false) {
      const { vnode: t3, activeBranch: n3, pendingBranch: o3, pendingId: r3, effects: s3, parentComponent: i3, container: l3 } = y2;
      if (y2.isHydrating)
        y2.isHydrating = false;
      else if (!e3) {
        const e4 = n3 && o3.transition && "out-in" === o3.transition.mode;
        e4 && (n3.transition.afterLeave = () => {
          r3 === y2.pendingId && f2(o3, l3, t4, 0);
        });
        let { anchor: t4 } = y2;
        n3 && (t4 = h3(n3), d2(n3, i3, y2, true)), e4 || f2(o3, l3, t4, 0);
      }
      Hn(y2, o3), y2.pendingBranch = null, y2.isInFallback = false;
      let c3 = y2.parent, a3 = false;
      for (; c3; ) {
        if (c3.pendingBranch) {
          c3.effects.push(...s3), a3 = true;
          break;
        }
        c3 = c3.parent;
      }
      a3 || dn(s3), y2.effects = [], Ln(t3, "onResolve");
    }, fallback(e3) {
      if (!y2.pendingBranch)
        return;
      const { vnode: t3, activeBranch: n3, parentComponent: o3, container: r3, isSVG: s3 } = y2;
      Ln(t3, "onFallback");
      const i3 = h3(n3), a3 = () => {
        y2.isInFallback && (p3(null, e3, r3, i3, o3, null, s3, l2, c2), Hn(y2, e3));
      }, u3 = e3.transition && "out-in" === e3.transition.mode;
      u3 && (n3.transition.afterLeave = a3), y2.isInFallback = true, d2(n3, o3, null, true), u3 || a3();
    }, move(e3, t3, n3) {
      y2.activeBranch && f2(y2.activeBranch, e3, t3, n3), y2.container = e3;
    }, next: () => y2.activeBranch && h3(y2.activeBranch), registerDep(e3, t3) {
      const n3 = !!y2.pendingBranch;
      n3 && y2.deps++;
      const o3 = e3.vnode.el;
      e3.asyncDep.catch((t4) => {
        Xt(t4, e3, 0);
      }).then((r3) => {
        if (e3.isUnmounted || y2.isUnmounted || y2.pendingId !== e3.suspenseId)
          return;
        e3.asyncResolved = true;
        const { vnode: s3 } = e3;
        Es(e3, r3, false), o3 && (s3.el = o3);
        const l3 = !o3 && e3.subTree.el;
        t3(e3, s3, m2(o3 || e3.subTree.el), o3 ? null : h3(e3.subTree), y2, i2, c2), l3 && g2(l3), Vn(e3, s3.el), n3 && 0 == --y2.deps && y2.resolve();
      });
    }, unmount(e3, t3) {
      y2.isUnmounted = true, y2.activeBranch && d2(y2.activeBranch, n2, e3, t3), y2.pendingBranch && d2(y2.pendingBranch, n2, e3, t3);
    } };
    return y2;
  }
  function Un(e2) {
    let t2;
    if (F(e2)) {
      const n2 = Jr && e2._c;
      n2 && (e2._d = false, Gr()), e2 = e2(), n2 && (e2._d = true, t2 = Kr, qr());
    }
    if (E(e2)) {
      const t3 = function(e3) {
        let t4;
        for (let n2 = 0; n2 < e3.length; n2++) {
          const o2 = e3[n2];
          if (!es(o2))
            return;
          if (o2.type !== Hr || "v-if" === o2.children) {
            if (t4)
              return;
            t4 = o2;
          }
        }
        return t4;
      }(e2);
      e2 = t3;
    }
    return e2 = ds(e2), t2 && !e2.dynamicChildren && (e2.dynamicChildren = t2.filter((t3) => t3 !== e2)), e2;
  }
  function Dn(e2, t2) {
    t2 && t2.pendingBranch ? E(e2) ? t2.effects.push(...e2) : t2.effects.push(e2) : dn(e2);
  }
  function Hn(e2, t2) {
    e2.activeBranch = t2;
    const { vnode: n2, parentComponent: o2 } = e2, r2 = n2.el = t2.el;
    o2 && o2.subTree === n2 && (o2.vnode.el = r2, Vn(o2, r2));
  }
  function Wn(e2, t2) {
    if (bs) {
      let n2 = bs.provides;
      const o2 = bs.parent && bs.parent.provides;
      o2 === n2 && (n2 = bs.provides = Object.create(o2)), n2[e2] = t2;
    } else
      ;
  }
  function zn(e2, t2, n2 = false) {
    const o2 = bs || wn;
    if (o2) {
      const r2 = null == o2.parent ? o2.vnode.appContext && o2.vnode.appContext.provides : o2.parent.provides;
      if (r2 && e2 in r2)
        return r2[e2];
      if (arguments.length > 1)
        return n2 && F(t2) ? t2.call(o2.proxy) : t2;
    }
  }
  function Kn(e2, t2) {
    return Yn(e2, null, t2);
  }
  function Gn(e2, t2) {
    return Yn(e2, null, { flush: "post" });
  }
  function qn(e2, t2) {
    return Yn(e2, null, { flush: "sync" });
  }
  function Zn(e2, t2, n2) {
    return Yn(e2, t2, n2);
  }
  function Yn(e2, t2, { immediate: n2, deep: o2, flush: r2 } = v) {
    const s2 = bs;
    let i2, l2, c2 = false, a2 = false;
    if (Rt(e2) ? (i2 = () => e2.value, c2 = Ct(e2)) : St(e2) ? (i2 = () => e2, o2 = true) : E(e2) ? (a2 = true, c2 = e2.some((e3) => St(e3) || Ct(e3)), i2 = () => e2.map((e3) => Rt(e3) ? e3.value : St(e3) ? eo(e3) : F(e3) ? Yt(e3, s2, 2) : void 0)) : i2 = F(e2) ? t2 ? () => Yt(e2, s2, 2) : () => {
      if (!s2 || !s2.isUnmounted)
        return l2 && l2(), Qt(e2, s2, 3, [u2]);
    } : _, t2 && o2) {
      const e3 = i2;
      i2 = () => eo(e3());
    }
    let u2 = (e3) => {
      l2 = h3.onStop = () => {
        Yt(e3, s2, 4);
      };
    }, p3 = a2 ? [] : Jn;
    const f2 = () => {
      if (h3.active)
        if (t2) {
          const e3 = h3.run();
          (o2 || c2 || (a2 ? e3.some((e4, t3) => Z(e4, p3[t3])) : Z(e3, p3))) && (l2 && l2(), Qt(t2, s2, 3, [e3, p3 === Jn ? void 0 : p3, u2]), p3 = e3);
        } else
          h3.run();
    };
    let d2;
    f2.allowRecurse = !!t2, "sync" === r2 ? d2 = f2 : "post" === r2 ? d2 = () => Or(f2, s2 && s2.suspense) : (f2.pre = true, s2 && (f2.id = s2.uid), d2 = () => pn(f2));
    const h3 = new ge(i2, d2);
    return t2 ? n2 ? f2() : p3 = h3.run() : "post" === r2 ? Or(h3.run.bind(h3), s2 && s2.suspense) : h3.run(), () => {
      h3.stop(), s2 && s2.scope && w(s2.scope.effects, h3);
    };
  }
  function Qn(e2, t2, n2) {
    const o2 = this.proxy, r2 = A(e2) ? e2.includes(".") ? Xn(o2, e2) : () => o2[e2] : e2.bind(o2, o2);
    let s2;
    F(t2) ? s2 = t2 : (s2 = t2.handler, n2 = t2);
    const i2 = bs;
    xs(this);
    const l2 = Yn(r2, s2.bind(o2), n2);
    return i2 ? xs(i2) : Cs(), l2;
  }
  function Xn(e2, t2) {
    const n2 = t2.split(".");
    return () => {
      let t3 = e2;
      for (let e3 = 0; e3 < n2.length && t3; e3++)
        t3 = t3[n2[e3]];
      return t3;
    };
  }
  function eo(e2, t2) {
    if (!M(e2) || e2.__v_skip)
      return e2;
    if ((t2 = t2 || /* @__PURE__ */ new Set()).has(e2))
      return e2;
    if (t2.add(e2), Rt(e2))
      eo(e2.value, t2);
    else if (E(e2))
      for (let n2 = 0; n2 < e2.length; n2++)
        eo(e2[n2], t2);
    else if (O(e2) || $(e2))
      e2.forEach((e3) => {
        eo(e3, t2);
      });
    else if (L(e2))
      for (const n2 in e2)
        eo(e2[n2], t2);
    return e2;
  }
  function to() {
    const e2 = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
    return No(() => {
      e2.isMounted = true;
    }), Oo(() => {
      e2.isUnmounting = true;
    }), e2;
  }
  function ro(e2, t2) {
    const { leavingVNodes: n2 } = e2;
    let o2 = n2.get(t2.type);
    return o2 || (o2 = /* @__PURE__ */ Object.create(null), n2.set(t2.type, o2)), o2;
  }
  function so(e2, t2, n2, o2) {
    const { appear: r2, mode: s2, persisted: i2 = false, onBeforeEnter: l2, onEnter: c2, onAfterEnter: a2, onEnterCancelled: u2, onBeforeLeave: p3, onLeave: f2, onAfterLeave: d2, onLeaveCancelled: h3, onBeforeAppear: m2, onAppear: g2, onAfterAppear: v2, onAppearCancelled: y2 } = t2, _2 = String(e2.key), b2 = ro(n2, e2), S2 = (e3, t3) => {
      e3 && Qt(e3, o2, 9, t3);
    }, x2 = (e3, t3) => {
      const n3 = t3[1];
      S2(e3, t3), E(e3) ? e3.every((e4) => e4.length <= 1) && n3() : e3.length <= 1 && n3();
    }, C2 = { mode: s2, persisted: i2, beforeEnter(t3) {
      let o3 = l2;
      if (!n2.isMounted) {
        if (!r2)
          return;
        o3 = m2 || l2;
      }
      t3._leaveCb && t3._leaveCb(true);
      const s3 = b2[_2];
      s3 && ts(e2, s3) && s3.el._leaveCb && s3.el._leaveCb(), S2(o3, [t3]);
    }, enter(e3) {
      let t3 = c2, o3 = a2, s3 = u2;
      if (!n2.isMounted) {
        if (!r2)
          return;
        t3 = g2 || c2, o3 = v2 || a2, s3 = y2 || u2;
      }
      let i3 = false;
      const l3 = e3._enterCb = (t4) => {
        i3 || (i3 = true, S2(t4 ? s3 : o3, [e3]), C2.delayedLeave && C2.delayedLeave(), e3._enterCb = void 0);
      };
      t3 ? x2(t3, [e3, l3]) : l3();
    }, leave(t3, o3) {
      const r3 = String(e2.key);
      if (t3._enterCb && t3._enterCb(true), n2.isUnmounting)
        return o3();
      S2(p3, [t3]);
      let s3 = false;
      const i3 = t3._leaveCb = (n3) => {
        s3 || (s3 = true, o3(), S2(n3 ? h3 : d2, [t3]), t3._leaveCb = void 0, b2[r3] === e2 && delete b2[r3]);
      };
      b2[r3] = e2, f2 ? x2(f2, [t3, i3]) : i3();
    }, clone: (e3) => so(e3, t2, n2, o2) };
    return C2;
  }
  function io(e2) {
    if (mo(e2))
      return (e2 = as(e2)).children = null, e2;
  }
  function lo(e2) {
    return mo(e2) ? e2.children ? e2.children[0] : void 0 : e2;
  }
  function co(e2, t2) {
    6 & e2.shapeFlag && e2.component ? co(e2.component.subTree, t2) : 128 & e2.shapeFlag ? (e2.ssContent.transition = t2.clone(e2.ssContent), e2.ssFallback.transition = t2.clone(e2.ssFallback)) : e2.transition = t2;
  }
  function ao(e2, t2 = false, n2) {
    let o2 = [], r2 = 0;
    for (let s2 = 0; s2 < e2.length; s2++) {
      let i2 = e2[s2];
      const l2 = null == n2 ? i2.key : String(n2) + String(null != i2.key ? i2.key : s2);
      i2.type === Ur ? (128 & i2.patchFlag && r2++, o2 = o2.concat(ao(i2.children, t2, l2))) : (t2 || i2.type !== Hr) && o2.push(null != l2 ? as(i2, { key: l2 }) : i2);
    }
    if (r2 > 1)
      for (let s2 = 0; s2 < o2.length; s2++)
        o2[s2].patchFlag = -2;
    return o2;
  }
  function uo(e2) {
    return F(e2) ? { setup: e2, name: e2.name } : e2;
  }
  function fo(e2) {
    F(e2) && (e2 = { loader: e2 });
    const { loader: t2, loadingComponent: n2, errorComponent: o2, delay: r2 = 200, timeout: s2, suspensible: i2 = true, onError: l2 } = e2;
    let c2, a2 = null, u2 = 0;
    const p3 = () => {
      let e3;
      return a2 || (e3 = a2 = t2().catch((e4) => {
        if (e4 = e4 instanceof Error ? e4 : new Error(String(e4)), l2)
          return new Promise((t3, n3) => {
            l2(e4, () => t3((u2++, a2 = null, p3())), () => n3(e4), u2 + 1);
          });
        throw e4;
      }).then((t3) => e3 !== a2 && a2 ? a2 : (t3 && (t3.__esModule || "Module" === t3[Symbol.toStringTag]) && (t3 = t3.default), c2 = t3, t3)));
    };
    return uo({ name: "AsyncComponentWrapper", __asyncLoader: p3, get __asyncResolved() {
      return c2;
    }, setup() {
      const e3 = bs;
      if (c2)
        return () => ho(c2, e3);
      const t3 = (t4) => {
        a2 = null, Xt(t4, e3, 13, !o2);
      };
      if (i2 && e3.suspense)
        return p3().then((t4) => () => ho(t4, e3)).catch((e4) => (t3(e4), () => o2 ? ls(o2, { error: e4 }) : null));
      const l3 = Ft(false), u3 = Ft(), f2 = Ft(!!r2);
      return r2 && setTimeout(() => {
        f2.value = false;
      }, r2), null != s2 && setTimeout(() => {
        if (!l3.value && !u3.value) {
          const e4 = new Error(`Async component timed out after ${s2}ms.`);
          t3(e4), u3.value = e4;
        }
      }, s2), p3().then(() => {
        l3.value = true, e3.parent && mo(e3.parent.vnode) && pn(e3.parent.update);
      }).catch((e4) => {
        t3(e4), u3.value = e4;
      }), () => l3.value && c2 ? ho(c2, e3) : u3.value && o2 ? ls(o2, { error: u3.value }) : n2 && !f2.value ? ls(n2) : void 0;
    } });
  }
  function ho(e2, { vnode: { ref: t2, props: n2, children: o2 } }) {
    const r2 = ls(e2, n2, o2);
    return r2.ref = t2, r2;
  }
  function vo(e2, t2) {
    return E(e2) ? e2.some((e3) => vo(e3, t2)) : A(e2) ? e2.split(",").includes(t2) : !!e2.test && e2.test(t2);
  }
  function yo(e2, t2) {
    bo(e2, "a", t2);
  }
  function _o(e2, t2) {
    bo(e2, "da", t2);
  }
  function bo(e2, t2, n2 = bs) {
    const o2 = e2.__wdc || (e2.__wdc = () => {
      let t3 = n2;
      for (; t3; ) {
        if (t3.isDeactivated)
          return;
        t3 = t3.parent;
      }
      return e2();
    });
    if (ko(t2, o2, n2), n2) {
      let e3 = n2.parent;
      for (; e3 && e3.parent; )
        mo(e3.parent.vnode) && So(o2, t2, n2, e3), e3 = e3.parent;
    }
  }
  function So(e2, t2, n2, o2) {
    const r2 = ko(t2, e2, o2, true);
    Ro(() => {
      w(o2[t2], r2);
    }, n2);
  }
  function xo(e2) {
    let t2 = e2.shapeFlag;
    256 & t2 && (t2 -= 256), 512 & t2 && (t2 -= 512), e2.shapeFlag = t2;
  }
  function Co(e2) {
    return 128 & e2.shapeFlag ? e2.ssContent : e2;
  }
  function ko(e2, t2, n2 = bs, o2 = false) {
    if (n2) {
      const r2 = n2[e2] || (n2[e2] = []), s2 = t2.__weh || (t2.__weh = (...o3) => {
        if (n2.isUnmounted)
          return;
        xe(), xs(n2);
        const r3 = Qt(t2, n2, e2, o3);
        return Cs(), Ce(), r3;
      });
      return o2 ? r2.unshift(s2) : r2.push(s2), s2;
    }
  }
  function Mo(e2, t2 = bs) {
    ko("ec", e2, t2);
  }
  function Vo(e2, t2) {
    const n2 = wn;
    if (null === n2)
      return e2;
    const o2 = As(n2) || n2.proxy, r2 = e2.dirs || (e2.dirs = []);
    for (let s2 = 0; s2 < t2.length; s2++) {
      let [e3, n3, i2, l2 = v] = t2[s2];
      F(e3) && (e3 = { mounted: e3, updated: e3 }), e3.deep && eo(n3), r2.push({ dir: e3, instance: o2, value: n3, oldValue: void 0, arg: i2, modifiers: l2 });
    }
    return e2;
  }
  function Io(e2, t2, n2, o2) {
    const r2 = e2.dirs, s2 = t2 && t2.dirs;
    for (let i2 = 0; i2 < r2.length; i2++) {
      const l2 = r2[i2];
      s2 && (l2.oldValue = s2[i2].value);
      let c2 = l2.dir[o2];
      c2 && (xe(), Qt(c2, n2, 8, [e2.el, l2, e2, t2]), Ce());
    }
  }
  function Bo(e2, t2) {
    return Do("components", e2, true, t2) || e2;
  }
  function jo(e2) {
    return A(e2) ? Do("components", e2, false) || e2 : e2 || Lo;
  }
  function Uo(e2) {
    return Do("directives", e2);
  }
  function Do(e2, t2, n2 = true, o2 = false) {
    const r2 = wn || bs;
    if (r2) {
      const n3 = r2.type;
      if ("components" === e2) {
        const e3 = Ms(n3, false);
        if (e3 && (e3 === t2 || e3 === z(t2) || e3 === q(z(t2))))
          return n3;
      }
      const s2 = Ho(r2[e2] || n3[e2], t2) || Ho(r2.appContext[e2], t2);
      return !s2 && o2 ? n3 : s2;
    }
  }
  function Ho(e2, t2) {
    return e2 && (e2[t2] || e2[z(t2)] || e2[q(z(t2))]);
  }
  function Wo(e2, t2, n2, o2) {
    let r2;
    const s2 = n2 && n2[o2];
    if (E(e2) || A(e2)) {
      r2 = new Array(e2.length);
      for (let n3 = 0, o3 = e2.length; n3 < o3; n3++)
        r2[n3] = t2(e2[n3], n3, void 0, s2 && s2[n3]);
    } else if ("number" == typeof e2) {
      r2 = new Array(e2);
      for (let n3 = 0; n3 < e2; n3++)
        r2[n3] = t2(n3 + 1, n3, void 0, s2 && s2[n3]);
    } else if (M(e2))
      if (e2[Symbol.iterator])
        r2 = Array.from(e2, (e3, n3) => t2(e3, n3, void 0, s2 && s2[n3]));
      else {
        const n3 = Object.keys(e2);
        r2 = new Array(n3.length);
        for (let o3 = 0, i2 = n3.length; o3 < i2; o3++) {
          const i3 = n3[o3];
          r2[o3] = t2(e2[i3], i3, o3, s2 && s2[o3]);
        }
      }
    else
      r2 = [];
    return n2 && (n2[o2] = r2), r2;
  }
  function zo(e2, t2) {
    for (let n2 = 0; n2 < t2.length; n2++) {
      const o2 = t2[n2];
      if (E(o2))
        for (let t3 = 0; t3 < o2.length; t3++)
          e2[o2[t3].name] = o2[t3].fn;
      else
        o2 && (e2[o2.name] = o2.key ? (...e3) => {
          const t3 = o2.fn(...e3);
          return t3 && (t3.key = o2.key), t3;
        } : o2.fn);
    }
    return e2;
  }
  function Ko(e2, t2, n2 = {}, o2, r2) {
    if (wn.isCE || wn.parent && po(wn.parent) && wn.parent.isCE)
      return ls("slot", "default" === t2 ? null : { name: t2 }, o2 && o2());
    let s2 = e2[t2];
    s2 && s2._c && (s2._d = false), Gr();
    const i2 = s2 && Go(s2(n2)), l2 = Xr(Ur, { key: n2.key || i2 && i2.key || `_${t2}` }, i2 || (o2 ? o2() : []), i2 && 1 === e2._ ? 64 : -2);
    return !r2 && l2.scopeId && (l2.slotScopeIds = [l2.scopeId + "-s"]), s2 && s2._c && (s2._d = true), l2;
  }
  function Go(e2) {
    return e2.some((e3) => !es(e3) || e3.type !== Hr && !(e3.type === Ur && !Go(e3.children))) ? e2 : null;
  }
  function qo(e2, t2) {
    const n2 = {};
    for (const o2 in e2)
      n2[t2 && /[A-Z]/.test(o2) ? `on:${o2}` : J(o2)] = e2[o2];
    return n2;
  }
  function er(e2) {
    const t2 = or(e2), n2 = e2.proxy, o2 = e2.ctx;
    Xo = false, t2.beforeCreate && tr(t2.beforeCreate, e2, "bc");
    const { data: r2, computed: s2, methods: i2, watch: l2, provide: c2, inject: a2, created: u2, beforeMount: p3, mounted: f2, beforeUpdate: d2, updated: h3, activated: m2, deactivated: g2, beforeUnmount: v2, unmounted: y2, render: b2, renderTracked: S2, renderTriggered: x2, errorCaptured: C2, serverPrefetch: k2, expose: w2, inheritAttrs: T2, components: N2, directives: $2 } = t2;
    if (a2 && function(e3, t3, n3 = _, o3 = false) {
      E(e3) && (e3 = lr(e3));
      for (const r3 in e3) {
        const n4 = e3[r3];
        let s3;
        s3 = M(n4) ? "default" in n4 ? zn(n4.from || r3, n4.default, true) : zn(n4.from || r3) : zn(n4), Rt(s3) && o3 ? Object.defineProperty(t3, r3, { enumerable: true, configurable: true, get: () => s3.value, set: (e4) => s3.value = e4 }) : t3[r3] = s3;
      }
    }(a2, o2, null, e2.appContext.config.unwrapInjectedRef), i2)
      for (const _2 in i2) {
        const e3 = i2[_2];
        F(e3) && (o2[_2] = e3.bind(n2));
      }
    if (r2) {
      const t3 = r2.call(n2, n2);
      M(t3) && (e2.data = gt(t3));
    }
    if (Xo = true, s2)
      for (const E2 in s2) {
        const e3 = s2[E2], t3 = F(e3) ? e3.bind(n2, n2) : F(e3.get) ? e3.get.bind(n2, n2) : _, r3 = !F(e3) && F(e3.set) ? e3.set.bind(n2) : _, i3 = Is({ get: t3, set: r3 });
        Object.defineProperty(o2, E2, { enumerable: true, configurable: true, get: () => i3.value, set: (e4) => i3.value = e4 });
      }
    if (l2)
      for (const _2 in l2)
        nr(l2[_2], o2, n2, _2);
    if (c2) {
      const e3 = F(c2) ? c2.call(n2) : c2;
      Reflect.ownKeys(e3).forEach((t3) => {
        Wn(t3, e3[t3]);
      });
    }
    function O2(e3, t3) {
      E(t3) ? t3.forEach((t4) => e3(t4.bind(n2))) : t3 && e3(t3.bind(n2));
    }
    if (u2 && tr(u2, e2, "c"), O2(To, p3), O2(No, f2), O2(Eo, d2), O2($o, h3), O2(yo, m2), O2(_o, g2), O2(Mo, C2), O2(Po, S2), O2(Ao, x2), O2(Oo, v2), O2(Ro, y2), O2(Fo, k2), E(w2))
      if (w2.length) {
        const t3 = e2.exposed || (e2.exposed = {});
        w2.forEach((e3) => {
          Object.defineProperty(t3, e3, { get: () => n2[e3], set: (t4) => n2[e3] = t4 });
        });
      } else
        e2.exposed || (e2.exposed = {});
    b2 && e2.render === _ && (e2.render = b2), null != T2 && (e2.inheritAttrs = T2), N2 && (e2.components = N2), $2 && (e2.directives = $2);
  }
  function tr(e2, t2, n2) {
    Qt(E(e2) ? e2.map((e3) => e3.bind(t2.proxy)) : e2.bind(t2.proxy), t2, n2);
  }
  function nr(e2, t2, n2, o2) {
    const r2 = o2.includes(".") ? Xn(n2, o2) : () => n2[o2];
    if (A(e2)) {
      const n3 = t2[e2];
      F(n3) && Zn(r2, n3);
    } else if (F(e2))
      Zn(r2, e2.bind(n2));
    else if (M(e2))
      if (E(e2))
        e2.forEach((e3) => nr(e3, t2, n2, o2));
      else {
        const o3 = F(e2.handler) ? e2.handler.bind(n2) : t2[e2.handler];
        F(o3) && Zn(r2, o3, e2);
      }
  }
  function or(e2) {
    const t2 = e2.type, { mixins: n2, extends: o2 } = t2, { mixins: r2, optionsCache: s2, config: { optionMergeStrategies: i2 } } = e2.appContext, l2 = s2.get(t2);
    let c2;
    return l2 ? c2 = l2 : r2.length || n2 || o2 ? (c2 = {}, r2.length && r2.forEach((e3) => rr(c2, e3, i2, true)), rr(c2, t2, i2)) : c2 = t2, M(t2) && s2.set(t2, c2), c2;
  }
  function rr(e2, t2, n2, o2 = false) {
    const { mixins: r2, extends: s2 } = t2;
    s2 && rr(e2, s2, n2, true), r2 && r2.forEach((t3) => rr(e2, t3, n2, true));
    for (const i2 in t2)
      if (o2 && "expose" === i2)
        ;
      else {
        const o3 = sr[i2] || n2 && n2[i2];
        e2[i2] = o3 ? o3(e2[i2], t2[i2]) : t2[i2];
      }
    return e2;
  }
  function ir(e2, t2) {
    return t2 ? e2 ? function() {
      return k(F(e2) ? e2.call(this, this) : e2, F(t2) ? t2.call(this, this) : t2);
    } : t2 : e2;
  }
  function lr(e2) {
    if (E(e2)) {
      const t2 = {};
      for (let n2 = 0; n2 < e2.length; n2++)
        t2[e2[n2]] = e2[n2];
      return t2;
    }
    return e2;
  }
  function cr(e2, t2) {
    return e2 ? [...new Set([].concat(e2, t2))] : t2;
  }
  function ar(e2, t2) {
    return e2 ? k(k(/* @__PURE__ */ Object.create(null), e2), t2) : t2;
  }
  function ur(e2, t2, n2, o2) {
    const [r2, s2] = e2.propsOptions;
    let i2, l2 = false;
    if (t2)
      for (let c2 in t2) {
        if (U(c2))
          continue;
        const a2 = t2[c2];
        let u2;
        r2 && N(r2, u2 = z(c2)) ? s2 && s2.includes(u2) ? (i2 || (i2 = {}))[u2] = a2 : n2[u2] = a2 : kn(e2.emitsOptions, c2) || c2 in o2 && a2 === o2[c2] || (o2[c2] = a2, l2 = true);
      }
    if (s2) {
      const t3 = wt(n2), o3 = i2 || v;
      for (let i3 = 0; i3 < s2.length; i3++) {
        const l3 = s2[i3];
        n2[l3] = pr(r2, t3, l3, o3[l3], e2, !N(o3, l3));
      }
    }
    return l2;
  }
  function pr(e2, t2, n2, o2, r2, s2) {
    const i2 = e2[n2];
    if (null != i2) {
      const e3 = N(i2, "default");
      if (e3 && void 0 === o2) {
        const e4 = i2.default;
        if (i2.type !== Function && F(e4)) {
          const { propsDefaults: s3 } = r2;
          n2 in s3 ? o2 = s3[n2] : (xs(r2), o2 = s3[n2] = e4.call(null, t2), Cs());
        } else
          o2 = e4;
      }
      i2[0] && (s2 && !e3 ? o2 = false : !i2[1] || "" !== o2 && o2 !== G(n2) || (o2 = true));
    }
    return o2;
  }
  function fr(e2, t2, n2 = false) {
    const o2 = t2.propsCache, r2 = o2.get(e2);
    if (r2)
      return r2;
    const s2 = e2.props, i2 = {}, l2 = [];
    let c2 = false;
    if (!F(e2)) {
      const o3 = (e3) => {
        c2 = true;
        const [n3, o4] = fr(e3, t2, true);
        k(i2, n3), o4 && l2.push(...o4);
      };
      !n2 && t2.mixins.length && t2.mixins.forEach(o3), e2.extends && o3(e2.extends), e2.mixins && e2.mixins.forEach(o3);
    }
    if (!s2 && !c2)
      return M(e2) && o2.set(e2, y), y;
    if (E(s2))
      for (let u2 = 0; u2 < s2.length; u2++) {
        const e3 = z(s2[u2]);
        dr(e3) && (i2[e3] = v);
      }
    else if (s2)
      for (const u2 in s2) {
        const e3 = z(u2);
        if (dr(e3)) {
          const t3 = s2[u2], n3 = i2[e3] = E(t3) || F(t3) ? { type: t3 } : t3;
          if (n3) {
            const t4 = gr(Boolean, n3.type), o3 = gr(String, n3.type);
            n3[0] = t4 > -1, n3[1] = o3 < 0 || t4 < o3, (t4 > -1 || N(n3, "default")) && l2.push(e3);
          }
        }
      }
    const a2 = [i2, l2];
    return M(e2) && o2.set(e2, a2), a2;
  }
  function dr(e2) {
    return "$" !== e2[0];
  }
  function hr(e2) {
    const t2 = e2 && e2.toString().match(/^\s*function (\w+)/);
    return t2 ? t2[1] : null === e2 ? "null" : "";
  }
  function mr(e2, t2) {
    return hr(e2) === hr(t2);
  }
  function gr(e2, t2) {
    return E(t2) ? t2.findIndex((t3) => mr(t3, e2)) : F(t2) && mr(t2, e2) ? 0 : -1;
  }
  function xr() {
    return { app: null, config: { isNativeTag: b, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
  }
  function kr(e2, t2) {
    return function(n2, o2 = null) {
      F(n2) || (n2 = Object.assign({}, n2)), null == o2 || M(o2) || (o2 = null);
      const r2 = xr(), s2 = /* @__PURE__ */ new Set();
      let i2 = false;
      const l2 = r2.app = { _uid: Cr++, _component: n2, _props: o2, _container: null, _context: r2, _instance: null, version: ei, get config() {
        return r2.config;
      }, set config(e3) {
      }, use: (e3, ...t3) => (s2.has(e3) || (e3 && F(e3.install) ? (s2.add(e3), e3.install(l2, ...t3)) : F(e3) && (s2.add(e3), e3(l2, ...t3))), l2), mixin: (e3) => (r2.mixins.includes(e3) || r2.mixins.push(e3), l2), component: (e3, t3) => t3 ? (r2.components[e3] = t3, l2) : r2.components[e3], directive: (e3, t3) => t3 ? (r2.directives[e3] = t3, l2) : r2.directives[e3], mount(s3, c2, a2) {
        if (!i2) {
          const u2 = ls(n2, o2);
          return u2.appContext = r2, c2 && t2 ? t2(u2, s3) : e2(u2, s3, a2), i2 = true, l2._container = s3, s3.__vue_app__ = l2, As(u2.component) || u2.component.proxy;
        }
      }, unmount() {
        i2 && (e2(null, l2._container), delete l2._container.__vue_app__);
      }, provide: (e3, t3) => (r2.provides[e3] = t3, l2) };
      return l2;
    };
  }
  function wr(e2, t2, n2, o2, r2 = false) {
    if (E(e2))
      return void e2.forEach((e3, s3) => wr(e3, t2 && (E(t2) ? t2[s3] : t2), n2, o2, r2));
    if (po(o2) && !r2)
      return;
    const s2 = 4 & o2.shapeFlag ? As(o2.component) || o2.component.proxy : o2.el, i2 = r2 ? null : s2, { i: l2, r: c2 } = e2, a2 = t2 && t2.r, u2 = l2.refs === v ? l2.refs = {} : l2.refs, p3 = l2.setupState;
    if (null != a2 && a2 !== c2 && (A(a2) ? (u2[a2] = null, N(p3, a2) && (p3[a2] = null)) : Rt(a2) && (a2.value = null)), F(c2))
      Yt(c2, l2, 12, [i2, u2]);
    else {
      const t3 = A(c2), o3 = Rt(c2);
      if (t3 || o3) {
        const l3 = () => {
          if (e2.f) {
            const n3 = t3 ? N(p3, c2) ? p3[c2] : u2[c2] : c2.value;
            r2 ? E(n3) && w(n3, s2) : E(n3) ? n3.includes(s2) || n3.push(s2) : t3 ? (u2[c2] = [s2], N(p3, c2) && (p3[c2] = u2[c2])) : (c2.value = [s2], e2.k && (u2[e2.k] = c2.value));
          } else
            t3 ? (u2[c2] = i2, N(p3, c2) && (p3[c2] = i2)) : o3 && (c2.value = i2, e2.k && (u2[e2.k] = i2));
        };
        i2 ? (l3.id = -1, Or(l3, n2)) : l3();
      }
    }
  }
  function $r(e2) {
    const { mt: t2, p: n2, o: { patchProp: o2, createText: r2, nextSibling: s2, parentNode: i2, remove: l2, insert: c2, createComment: a2 } } = e2, u2 = (n3, o3, l3, a3, g2, v2 = false) => {
      const y2 = Er(n3) && "[" === n3.data, _2 = () => h3(n3, o3, l3, a3, g2, y2), { type: b2, ref: S2, shapeFlag: x2, patchFlag: C2 } = o3;
      let k2 = n3.nodeType;
      o3.el = n3, -2 === C2 && (v2 = false, o3.dynamicChildren = null);
      let w2 = null;
      switch (b2) {
        case Dr:
          3 !== k2 ? "" === o3.children ? (c2(o3.el = r2(""), i2(n3), n3), w2 = n3) : w2 = _2() : (n3.data !== o3.children && (Tr = true, n3.data = o3.children), w2 = s2(n3));
          break;
        case Hr:
          w2 = 8 !== k2 || y2 ? _2() : s2(n3);
          break;
        case Wr:
          if (y2 && (k2 = (n3 = s2(n3)).nodeType), 1 === k2 || 3 === k2) {
            w2 = n3;
            const e3 = !o3.children.length;
            for (let t3 = 0; t3 < o3.staticCount; t3++)
              e3 && (o3.children += 1 === w2.nodeType ? w2.outerHTML : w2.data), t3 === o3.staticCount - 1 && (o3.anchor = w2), w2 = s2(w2);
            return y2 ? s2(w2) : w2;
          }
          _2();
          break;
        case Ur:
          w2 = y2 ? d2(n3, o3, l3, a3, g2, v2) : _2();
          break;
        default:
          if (1 & x2)
            w2 = 1 !== k2 || o3.type.toLowerCase() !== n3.tagName.toLowerCase() ? _2() : p3(n3, o3, l3, a3, g2, v2);
          else if (6 & x2) {
            o3.slotScopeIds = g2;
            const e3 = i2(n3);
            if (t2(o3, e3, null, l3, a3, Nr(e3), v2), w2 = y2 ? m2(n3) : s2(n3), w2 && Er(w2) && "teleport end" === w2.data && (w2 = s2(w2)), po(o3)) {
              let t3;
              y2 ? (t3 = ls(Ur), t3.anchor = w2 ? w2.previousSibling : e3.lastChild) : t3 = 3 === n3.nodeType ? us("") : ls("div"), t3.el = n3, o3.component.subTree = t3;
            }
          } else
            64 & x2 ? w2 = 8 !== k2 ? _2() : o3.type.hydrate(n3, o3, l3, a3, g2, v2, e2, f2) : 128 & x2 && (w2 = o3.type.hydrate(n3, o3, l3, a3, Nr(i2(n3)), g2, v2, e2, u2));
      }
      return null != S2 && wr(S2, null, a3, o3), w2;
    }, p3 = (e3, t3, n3, r3, s3, i3) => {
      i3 = i3 || !!t3.dynamicChildren;
      const { type: c3, props: a3, patchFlag: u3, shapeFlag: p4, dirs: d3 } = t3, h4 = "input" === c3 && d3 || "option" === c3;
      if (h4 || -1 !== u3) {
        if (d3 && Io(t3, null, n3, "created"), a3)
          if (h4 || !i3 || 48 & u3)
            for (const t4 in a3)
              (h4 && t4.endsWith("value") || x(t4) && !U(t4)) && o2(e3, t4, null, a3[t4], false, void 0, n3);
          else
            a3.onClick && o2(e3, "onClick", null, a3.onClick, false, void 0, n3);
        let c4;
        if ((c4 = a3 && a3.onVnodeBeforeMount) && vs(c4, n3, t3), d3 && Io(t3, null, n3, "beforeMount"), ((c4 = a3 && a3.onVnodeMounted) || d3) && Dn(() => {
          c4 && vs(c4, n3, t3), d3 && Io(t3, null, n3, "mounted");
        }, r3), 16 & p4 && (!a3 || !a3.innerHTML && !a3.textContent)) {
          let o3 = f2(e3.firstChild, t3, e3, n3, r3, s3, i3);
          for (; o3; ) {
            Tr = true;
            const e4 = o3;
            o3 = o3.nextSibling, l2(e4);
          }
        } else
          8 & p4 && e3.textContent !== t3.children && (Tr = true, e3.textContent = t3.children);
      }
      return e3.nextSibling;
    }, f2 = (e3, t3, o3, r3, s3, i3, l3) => {
      l3 = l3 || !!t3.dynamicChildren;
      const c3 = t3.children, a3 = c3.length;
      for (let p4 = 0; p4 < a3; p4++) {
        const t4 = l3 ? c3[p4] : c3[p4] = ds(c3[p4]);
        if (e3)
          e3 = u2(e3, t4, r3, s3, i3, l3);
        else {
          if (t4.type === Dr && !t4.children)
            continue;
          Tr = true, n2(null, t4, o3, null, r3, s3, Nr(o3), i3);
        }
      }
      return e3;
    }, d2 = (e3, t3, n3, o3, r3, l3) => {
      const { slotScopeIds: u3 } = t3;
      u3 && (r3 = r3 ? r3.concat(u3) : u3);
      const p4 = i2(e3), d3 = f2(s2(e3), t3, p4, n3, o3, r3, l3);
      return d3 && Er(d3) && "]" === d3.data ? s2(t3.anchor = d3) : (Tr = true, c2(t3.anchor = a2("]"), p4, d3), d3);
    }, h3 = (e3, t3, o3, r3, c3, a3) => {
      if (Tr = true, t3.el = null, a3) {
        const t4 = m2(e3);
        for (; ; ) {
          const n3 = s2(e3);
          if (!n3 || n3 === t4)
            break;
          l2(n3);
        }
      }
      const u3 = s2(e3), p4 = i2(e3);
      return l2(e3), n2(null, t3, p4, u3, o3, r3, Nr(p4), c3), u3;
    }, m2 = (e3) => {
      let t3 = 0;
      for (; e3; )
        if ((e3 = s2(e3)) && Er(e3) && ("[" === e3.data && t3++, "]" === e3.data)) {
          if (0 === t3)
            return s2(e3);
          t3--;
        }
      return e3;
    };
    return [(e3, t3) => {
      if (!t3.hasChildNodes())
        return n2(null, e3, t3), mn(), void (t3._vnode = e3);
      Tr = false, u2(t3.firstChild, e3, null, null, null), mn(), t3._vnode = e3, Tr && console.error("Hydration completed but contains mismatches.");
    }, u2];
  }
  function Rr(e2) {
    return Ar(e2);
  }
  function Fr(e2) {
    return Ar(e2, $r);
  }
  function Ar(e2, t2) {
    (ee || (ee = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})).__VUE__ = true;
    const { insert: n2, remove: o2, patchProp: r2, createElement: s2, createText: i2, createComment: l2, setText: c2, setElementText: a2, parentNode: u2, nextSibling: p3, setScopeId: f2 = _, insertStaticContent: d2 } = e2, h3 = (e3, t3, n3, o3 = null, r3 = null, s3 = null, i3 = false, l3 = null, c3 = !!t3.dynamicChildren) => {
      if (e3 === t3)
        return;
      e3 && !ts(e3, t3) && (o3 = J2(e3), D2(e3, r3, s3, true), e3 = null), -2 === t3.patchFlag && (c3 = false, t3.dynamicChildren = null);
      const { type: a3, ref: u3, shapeFlag: p4 } = t3;
      switch (a3) {
        case Dr:
          m2(e3, t3, n3, o3);
          break;
        case Hr:
          g2(e3, t3, n3, o3);
          break;
        case Wr:
          null == e3 && b2(t3, n3, o3, i3);
          break;
        case Ur:
          O2(e3, t3, n3, o3, r3, s3, i3, l3, c3);
          break;
        default:
          1 & p4 ? S2(e3, t3, n3, o3, r3, s3, i3, l3, c3) : 6 & p4 ? R2(e3, t3, n3, o3, r3, s3, i3, l3, c3) : (64 & p4 || 128 & p4) && a3.process(e3, t3, n3, o3, r3, s3, i3, l3, c3, X2);
      }
      null != u3 && r3 && wr(u3, e3 && e3.ref, s3, t3 || e3, !t3);
    }, m2 = (e3, t3, o3, r3) => {
      if (null == e3)
        n2(t3.el = i2(t3.children), o3, r3);
      else {
        const n3 = t3.el = e3.el;
        t3.children !== e3.children && c2(n3, t3.children);
      }
    }, g2 = (e3, t3, o3, r3) => {
      null == e3 ? n2(t3.el = l2(t3.children || ""), o3, r3) : t3.el = e3.el;
    }, b2 = (e3, t3, n3, o3) => {
      [e3.el, e3.anchor] = d2(e3.children, t3, n3, o3, e3.el, e3.anchor);
    }, S2 = (e3, t3, n3, o3, r3, s3, i3, l3, c3) => {
      i3 = i3 || "svg" === t3.type, null == e3 ? x2(t3, n3, o3, r3, s3, i3, l3, c3) : T2(e3, t3, r3, s3, i3, l3, c3);
    }, x2 = (e3, t3, o3, i3, l3, c3, u3, p4) => {
      let f3, d3;
      const { type: h4, props: m3, shapeFlag: g3, transition: v2, dirs: y2 } = e3;
      if (f3 = e3.el = s2(e3.type, c3, m3 && m3.is, m3), 8 & g3 ? a2(f3, e3.children) : 16 & g3 && w2(e3.children, f3, null, i3, l3, c3 && "foreignObject" !== h4, u3, p4), y2 && Io(e3, null, i3, "created"), m3) {
        for (const t4 in m3)
          "value" === t4 || U(t4) || r2(f3, t4, null, m3[t4], c3, e3.children, i3, l3, q2);
        "value" in m3 && r2(f3, "value", null, m3.value), (d3 = m3.onVnodeBeforeMount) && vs(d3, i3, e3);
      }
      C2(f3, e3, e3.scopeId, u3, i3), y2 && Io(e3, null, i3, "beforeMount");
      const _2 = (!l3 || l3 && !l3.pendingBranch) && v2 && !v2.persisted;
      _2 && v2.beforeEnter(f3), n2(f3, t3, o3), ((d3 = m3 && m3.onVnodeMounted) || _2 || y2) && Or(() => {
        d3 && vs(d3, i3, e3), _2 && v2.enter(f3), y2 && Io(e3, null, i3, "mounted");
      }, l3);
    }, C2 = (e3, t3, n3, o3, r3) => {
      if (n3 && f2(e3, n3), o3)
        for (let s3 = 0; s3 < o3.length; s3++)
          f2(e3, o3[s3]);
      if (r3) {
        if (t3 === r3.subTree) {
          const t4 = r3.vnode;
          C2(e3, t4, t4.scopeId, t4.slotScopeIds, r3.parent);
        }
      }
    }, w2 = (e3, t3, n3, o3, r3, s3, i3, l3, c3 = 0) => {
      for (let a3 = c3; a3 < e3.length; a3++) {
        const c4 = e3[a3] = l3 ? hs(e3[a3]) : ds(e3[a3]);
        h3(null, c4, t3, n3, o3, r3, s3, i3, l3);
      }
    }, T2 = (e3, t3, n3, o3, s3, i3, l3) => {
      const c3 = t3.el = e3.el;
      let { patchFlag: u3, dynamicChildren: p4, dirs: f3 } = t3;
      u3 |= 16 & e3.patchFlag;
      const d3 = e3.props || v, h4 = t3.props || v;
      let m3;
      n3 && Pr(n3, false), (m3 = h4.onVnodeBeforeUpdate) && vs(m3, n3, t3, e3), f3 && Io(t3, e3, n3, "beforeUpdate"), n3 && Pr(n3, true);
      const g3 = s3 && "foreignObject" !== t3.type;
      if (p4 ? E2(e3.dynamicChildren, p4, c3, n3, o3, g3, i3) : l3 || I2(e3, t3, c3, null, n3, o3, g3, i3, false), u3 > 0) {
        if (16 & u3)
          $2(c3, t3, d3, h4, n3, o3, s3);
        else if (2 & u3 && d3.class !== h4.class && r2(c3, "class", null, h4.class, s3), 4 & u3 && r2(c3, "style", d3.style, h4.style, s3), 8 & u3) {
          const i4 = t3.dynamicProps;
          for (let t4 = 0; t4 < i4.length; t4++) {
            const l4 = i4[t4], a3 = d3[l4], u4 = h4[l4];
            u4 === a3 && "value" !== l4 || r2(c3, l4, a3, u4, s3, e3.children, n3, o3, q2);
          }
        }
        1 & u3 && e3.children !== t3.children && a2(c3, t3.children);
      } else
        l3 || null != p4 || $2(c3, t3, d3, h4, n3, o3, s3);
      ((m3 = h4.onVnodeUpdated) || f3) && Or(() => {
        m3 && vs(m3, n3, t3, e3), f3 && Io(t3, e3, n3, "updated");
      }, o3);
    }, E2 = (e3, t3, n3, o3, r3, s3, i3) => {
      for (let l3 = 0; l3 < t3.length; l3++) {
        const c3 = e3[l3], a3 = t3[l3], p4 = c3.el && (c3.type === Ur || !ts(c3, a3) || 70 & c3.shapeFlag) ? u2(c3.el) : n3;
        h3(c3, a3, p4, null, o3, r3, s3, i3, true);
      }
    }, $2 = (e3, t3, n3, o3, s3, i3, l3) => {
      if (n3 !== o3) {
        if (n3 !== v)
          for (const c3 in n3)
            U(c3) || c3 in o3 || r2(e3, c3, n3[c3], null, l3, t3.children, s3, i3, q2);
        for (const c3 in o3) {
          if (U(c3))
            continue;
          const a3 = o3[c3], u3 = n3[c3];
          a3 !== u3 && "value" !== c3 && r2(e3, c3, u3, a3, l3, t3.children, s3, i3, q2);
        }
        "value" in o3 && r2(e3, "value", n3.value, o3.value);
      }
    }, O2 = (e3, t3, o3, r3, s3, l3, c3, a3, u3) => {
      const p4 = t3.el = e3 ? e3.el : i2(""), f3 = t3.anchor = e3 ? e3.anchor : i2("");
      let { patchFlag: d3, dynamicChildren: h4, slotScopeIds: m3 } = t3;
      m3 && (a3 = a3 ? a3.concat(m3) : m3), null == e3 ? (n2(p4, o3, r3), n2(f3, o3, r3), w2(t3.children, o3, f3, s3, l3, c3, a3, u3)) : d3 > 0 && 64 & d3 && h4 && e3.dynamicChildren ? (E2(e3.dynamicChildren, h4, o3, s3, l3, c3, a3), (null != t3.key || s3 && t3 === s3.subTree) && Mr(e3, t3, true)) : I2(e3, t3, o3, f3, s3, l3, c3, a3, u3);
    }, R2 = (e3, t3, n3, o3, r3, s3, i3, l3, c3) => {
      t3.slotScopeIds = l3, null == e3 ? 512 & t3.shapeFlag ? r3.ctx.activate(t3, n3, o3, i3, c3) : F2(t3, n3, o3, r3, s3, i3, c3) : A2(e3, t3, c3);
    }, F2 = (e3, t3, n3, o3, r3, s3, i3) => {
      const l3 = e3.component = function(e4, t4, n4) {
        const o4 = e4.type, r4 = (t4 ? t4.appContext : e4.appContext) || ys, s4 = { uid: _s++, vnode: e4, type: o4, parent: t4, appContext: r4, root: null, next: null, subTree: null, effect: null, update: null, scope: new ne(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t4 ? t4.provides : Object.create(r4.provides), accessCache: null, renderCache: [], components: null, directives: null, propsOptions: fr(o4, r4), emitsOptions: Cn(o4, r4), emit: null, emitted: null, propsDefaults: v, inheritAttrs: o4.inheritAttrs, ctx: v, data: v, props: v, attrs: v, slots: v, refs: v, setupState: v, setupContext: null, suspense: n4, suspenseId: n4 ? n4.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
        s4.ctx = { _: s4 }, s4.root = t4 ? t4.root : s4, s4.emit = xn.bind(null, s4), e4.ce && e4.ce(s4);
        return s4;
      }(e3, o3, r3);
      if (mo(e3) && (l3.ctx.renderer = X2), function(e4, t4 = false) {
        Ns = t4;
        const { props: n4, children: o4 } = e4.vnode, r4 = ks(e4);
        (function(e5, t5, n5, o5 = false) {
          const r5 = {}, s5 = {};
          Q(s5, os, 1), e5.propsDefaults = /* @__PURE__ */ Object.create(null), ur(e5, t5, r5, s5);
          for (const i4 in e5.propsOptions[0])
            i4 in r5 || (r5[i4] = void 0);
          e5.props = n5 ? o5 ? r5 : vt(r5) : e5.type.props ? r5 : s5, e5.attrs = s5;
        })(e4, n4, r4, t4), ((e5, t5) => {
          if (32 & e5.vnode.shapeFlag) {
            const n5 = t5._;
            n5 ? (e5.slots = wt(t5), Q(t5, "_", n5)) : br(t5, e5.slots = {});
          } else
            e5.slots = {}, t5 && Sr(e5, t5);
          Q(e5.slots, os, 1);
        })(e4, o4);
        const s4 = r4 ? function(e5, t5) {
          const n5 = e5.type;
          e5.accessCache = /* @__PURE__ */ Object.create(null), e5.proxy = Tt(new Proxy(e5.ctx, Yo));
          const { setup: o5 } = n5;
          if (o5) {
            const n6 = e5.setupContext = o5.length > 1 ? Fs(e5) : null;
            xs(e5), xe();
            const r5 = Yt(o5, e5, 0, [e5.props, n6]);
            if (Ce(), Cs(), V(r5)) {
              if (r5.then(Cs, Cs), t5)
                return r5.then((n7) => {
                  Es(e5, n7, t5);
                }).catch((t6) => {
                  Xt(t6, e5, 0);
                });
              e5.asyncDep = r5;
            } else
              Es(e5, r5, t5);
          } else
            Rs(e5, t5);
        }(e4, t4) : void 0;
        Ns = false;
      }(l3), l3.asyncDep) {
        if (r3 && r3.registerDep(l3, P2), !e3.el) {
          const e4 = l3.subTree = ls(Hr);
          g2(null, e4, t3, n3);
        }
      } else
        P2(l3, e3, t3, n3, r3, s3, i3);
    }, A2 = (e3, t3, n3) => {
      const o3 = t3.component = e3.component;
      if (function(e4, t4, n4) {
        const { props: o4, children: r3, component: s3 } = e4, { props: i3, children: l3, patchFlag: c3 } = t4, a3 = s3.emitsOptions;
        if (t4.dirs || t4.transition)
          return true;
        if (!(n4 && c3 >= 0))
          return !(!r3 && !l3 || l3 && l3.$stable) || o4 !== i3 && (o4 ? !i3 || Mn(o4, i3, a3) : !!i3);
        if (1024 & c3)
          return true;
        if (16 & c3)
          return o4 ? Mn(o4, i3, a3) : !!i3;
        if (8 & c3) {
          const e5 = t4.dynamicProps;
          for (let t5 = 0; t5 < e5.length; t5++) {
            const n5 = e5[t5];
            if (i3[n5] !== o4[n5] && !kn(a3, n5))
              return true;
          }
        }
        return false;
      }(e3, t3, n3)) {
        if (o3.asyncDep && !o3.asyncResolved)
          return void M2(o3, t3, n3);
        o3.next = t3, function(e4) {
          const t4 = nn.indexOf(e4);
          t4 > on && nn.splice(t4, 1);
        }(o3.update), o3.update();
      } else
        t3.el = e3.el, o3.vnode = t3;
    }, P2 = (e3, t3, n3, o3, r3, s3, i3) => {
      const l3 = e3.effect = new ge(() => {
        if (e3.isMounted) {
          let t4, { next: n4, bu: o4, u: l4, parent: c4, vnode: a3 } = e3, p4 = n4;
          Pr(e3, false), n4 ? (n4.el = a3.el, M2(e3, n4, i3)) : n4 = a3, o4 && Y(o4), (t4 = n4.props && n4.props.onVnodeBeforeUpdate) && vs(t4, c4, n4, a3), Pr(e3, true);
          const f3 = Fn(e3), d3 = e3.subTree;
          e3.subTree = f3, h3(d3, f3, u2(d3.el), J2(d3), e3, r3, s3), n4.el = f3.el, null === p4 && Vn(e3, f3.el), l4 && Or(l4, r3), (t4 = n4.props && n4.props.onVnodeUpdated) && Or(() => vs(t4, c4, n4, a3), r3);
        } else {
          let i4;
          const { el: l4, props: c4 } = t3, { bm: a3, m: u3, parent: p4 } = e3, f3 = po(t3);
          if (Pr(e3, false), a3 && Y(a3), !f3 && (i4 = c4 && c4.onVnodeBeforeMount) && vs(i4, p4, t3), Pr(e3, true), l4 && oe2) {
            const n4 = () => {
              e3.subTree = Fn(e3), oe2(l4, e3.subTree, e3, r3, null);
            };
            f3 ? t3.type.__asyncLoader().then(() => !e3.isUnmounted && n4()) : n4();
          } else {
            const i5 = e3.subTree = Fn(e3);
            h3(null, i5, n3, o3, e3, r3, s3), t3.el = i5.el;
          }
          if (u3 && Or(u3, r3), !f3 && (i4 = c4 && c4.onVnodeMounted)) {
            const e4 = t3;
            Or(() => vs(i4, p4, e4), r3);
          }
          (256 & t3.shapeFlag || p4 && po(p4.vnode) && 256 & p4.vnode.shapeFlag) && e3.a && Or(e3.a, r3), e3.isMounted = true, t3 = n3 = o3 = null;
        }
      }, () => pn(c3), e3.scope), c3 = e3.update = () => l3.run();
      c3.id = e3.uid, Pr(e3, true), c3();
    }, M2 = (e3, t3, n3) => {
      t3.component = e3;
      const o3 = e3.vnode.props;
      e3.vnode = t3, e3.next = null, function(e4, t4, n4, o4) {
        const { props: r3, attrs: s3, vnode: { patchFlag: i3 } } = e4, l3 = wt(r3), [c3] = e4.propsOptions;
        let a3 = false;
        if (!(o4 || i3 > 0) || 16 & i3) {
          let o5;
          ur(e4, t4, r3, s3) && (a3 = true);
          for (const s4 in l3)
            t4 && (N(t4, s4) || (o5 = G(s4)) !== s4 && N(t4, o5)) || (c3 ? !n4 || void 0 === n4[s4] && void 0 === n4[o5] || (r3[s4] = pr(c3, l3, s4, void 0, e4, true)) : delete r3[s4]);
          if (s3 !== l3)
            for (const e5 in s3)
              t4 && N(t4, e5) || (delete s3[e5], a3 = true);
        } else if (8 & i3) {
          const n5 = e4.vnode.dynamicProps;
          for (let o5 = 0; o5 < n5.length; o5++) {
            let i4 = n5[o5];
            if (kn(e4.emitsOptions, i4))
              continue;
            const u3 = t4[i4];
            if (c3)
              if (N(s3, i4))
                u3 !== s3[i4] && (s3[i4] = u3, a3 = true);
              else {
                const t5 = z(i4);
                r3[t5] = pr(c3, l3, t5, u3, e4, false);
              }
            else
              u3 !== s3[i4] && (s3[i4] = u3, a3 = true);
          }
        }
        a3 && Te(e4, "set", "$attrs");
      }(e3, t3.props, o3, n3), ((e4, t4, n4) => {
        const { vnode: o4, slots: r3 } = e4;
        let s3 = true, i3 = v;
        if (32 & o4.shapeFlag) {
          const e5 = t4._;
          e5 ? n4 && 1 === e5 ? s3 = false : (k(r3, t4), n4 || 1 !== e5 || delete r3._) : (s3 = !t4.$stable, br(t4, r3)), i3 = t4;
        } else
          t4 && (Sr(e4, t4), i3 = { default: 1 });
        if (s3)
          for (const l3 in r3)
            vr(l3) || l3 in i3 || delete r3[l3];
      })(e3, t3.children, n3), xe(), hn(), Ce();
    }, I2 = (e3, t3, n3, o3, r3, s3, i3, l3, c3 = false) => {
      const u3 = e3 && e3.children, p4 = e3 ? e3.shapeFlag : 0, f3 = t3.children, { patchFlag: d3, shapeFlag: h4 } = t3;
      if (d3 > 0) {
        if (128 & d3)
          return void L2(u3, f3, n3, o3, r3, s3, i3, l3, c3);
        if (256 & d3)
          return void B2(u3, f3, n3, o3, r3, s3, i3, l3, c3);
      }
      8 & h4 ? (16 & p4 && q2(u3, r3, s3), f3 !== u3 && a2(n3, f3)) : 16 & p4 ? 16 & h4 ? L2(u3, f3, n3, o3, r3, s3, i3, l3, c3) : q2(u3, r3, s3, true) : (8 & p4 && a2(n3, ""), 16 & h4 && w2(f3, n3, o3, r3, s3, i3, l3, c3));
    }, B2 = (e3, t3, n3, o3, r3, s3, i3, l3, c3) => {
      const a3 = (e3 = e3 || y).length, u3 = (t3 = t3 || y).length, p4 = Math.min(a3, u3);
      let f3;
      for (f3 = 0; f3 < p4; f3++) {
        const o4 = t3[f3] = c3 ? hs(t3[f3]) : ds(t3[f3]);
        h3(e3[f3], o4, n3, null, r3, s3, i3, l3, c3);
      }
      a3 > u3 ? q2(e3, r3, s3, true, false, p4) : w2(t3, n3, o3, r3, s3, i3, l3, c3, p4);
    }, L2 = (e3, t3, n3, o3, r3, s3, i3, l3, c3) => {
      let a3 = 0;
      const u3 = t3.length;
      let p4 = e3.length - 1, f3 = u3 - 1;
      for (; a3 <= p4 && a3 <= f3; ) {
        const o4 = e3[a3], u4 = t3[a3] = c3 ? hs(t3[a3]) : ds(t3[a3]);
        if (!ts(o4, u4))
          break;
        h3(o4, u4, n3, null, r3, s3, i3, l3, c3), a3++;
      }
      for (; a3 <= p4 && a3 <= f3; ) {
        const o4 = e3[p4], a4 = t3[f3] = c3 ? hs(t3[f3]) : ds(t3[f3]);
        if (!ts(o4, a4))
          break;
        h3(o4, a4, n3, null, r3, s3, i3, l3, c3), p4--, f3--;
      }
      if (a3 > p4) {
        if (a3 <= f3) {
          const e4 = f3 + 1, p5 = e4 < u3 ? t3[e4].el : o3;
          for (; a3 <= f3; )
            h3(null, t3[a3] = c3 ? hs(t3[a3]) : ds(t3[a3]), n3, p5, r3, s3, i3, l3, c3), a3++;
        }
      } else if (a3 > f3)
        for (; a3 <= p4; )
          D2(e3[a3], r3, s3, true), a3++;
      else {
        const d3 = a3, m3 = a3, g3 = /* @__PURE__ */ new Map();
        for (a3 = m3; a3 <= f3; a3++) {
          const e4 = t3[a3] = c3 ? hs(t3[a3]) : ds(t3[a3]);
          null != e4.key && g3.set(e4.key, a3);
        }
        let v2, _2 = 0;
        const b3 = f3 - m3 + 1;
        let S3 = false, x3 = 0;
        const C3 = new Array(b3);
        for (a3 = 0; a3 < b3; a3++)
          C3[a3] = 0;
        for (a3 = d3; a3 <= p4; a3++) {
          const o4 = e3[a3];
          if (_2 >= b3) {
            D2(o4, r3, s3, true);
            continue;
          }
          let u4;
          if (null != o4.key)
            u4 = g3.get(o4.key);
          else
            for (v2 = m3; v2 <= f3; v2++)
              if (0 === C3[v2 - m3] && ts(o4, t3[v2])) {
                u4 = v2;
                break;
              }
          void 0 === u4 ? D2(o4, r3, s3, true) : (C3[u4 - m3] = a3 + 1, u4 >= x3 ? x3 = u4 : S3 = true, h3(o4, t3[u4], n3, null, r3, s3, i3, l3, c3), _2++);
        }
        const k2 = S3 ? function(e4) {
          const t4 = e4.slice(), n4 = [0];
          let o4, r4, s4, i4, l4;
          const c4 = e4.length;
          for (o4 = 0; o4 < c4; o4++) {
            const c5 = e4[o4];
            if (0 !== c5) {
              if (r4 = n4[n4.length - 1], e4[r4] < c5) {
                t4[o4] = r4, n4.push(o4);
                continue;
              }
              for (s4 = 0, i4 = n4.length - 1; s4 < i4; )
                l4 = s4 + i4 >> 1, e4[n4[l4]] < c5 ? s4 = l4 + 1 : i4 = l4;
              c5 < e4[n4[s4]] && (s4 > 0 && (t4[o4] = n4[s4 - 1]), n4[s4] = o4);
            }
          }
          s4 = n4.length, i4 = n4[s4 - 1];
          for (; s4-- > 0; )
            n4[s4] = i4, i4 = t4[i4];
          return n4;
        }(C3) : y;
        for (v2 = k2.length - 1, a3 = b3 - 1; a3 >= 0; a3--) {
          const e4 = m3 + a3, p5 = t3[e4], f4 = e4 + 1 < u3 ? t3[e4 + 1].el : o3;
          0 === C3[a3] ? h3(null, p5, n3, f4, r3, s3, i3, l3, c3) : S3 && (v2 < 0 || a3 !== k2[v2] ? j2(p5, n3, f4, 2) : v2--);
        }
      }
    }, j2 = (e3, t3, o3, r3, s3 = null) => {
      const { el: i3, type: l3, transition: c3, children: a3, shapeFlag: u3 } = e3;
      if (6 & u3)
        return void j2(e3.component.subTree, t3, o3, r3);
      if (128 & u3)
        return void e3.suspense.move(t3, o3, r3);
      if (64 & u3)
        return void l3.move(e3, t3, o3, X2);
      if (l3 === Ur) {
        n2(i3, t3, o3);
        for (let e4 = 0; e4 < a3.length; e4++)
          j2(a3[e4], t3, o3, r3);
        return void n2(e3.anchor, t3, o3);
      }
      if (l3 === Wr)
        return void (({ el: e4, anchor: t4 }, o4, r4) => {
          let s4;
          for (; e4 && e4 !== t4; )
            s4 = p3(e4), n2(e4, o4, r4), e4 = s4;
          n2(t4, o4, r4);
        })(e3, t3, o3);
      if (2 !== r3 && 1 & u3 && c3)
        if (0 === r3)
          c3.beforeEnter(i3), n2(i3, t3, o3), Or(() => c3.enter(i3), s3);
        else {
          const { leave: e4, delayLeave: r4, afterLeave: s4 } = c3, l4 = () => n2(i3, t3, o3), a4 = () => {
            e4(i3, () => {
              l4(), s4 && s4();
            });
          };
          r4 ? r4(i3, l4, a4) : a4();
        }
      else
        n2(i3, t3, o3);
    }, D2 = (e3, t3, n3, o3 = false, r3 = false) => {
      const { type: s3, props: i3, ref: l3, children: c3, dynamicChildren: a3, shapeFlag: u3, patchFlag: p4, dirs: f3 } = e3;
      if (null != l3 && wr(l3, null, n3, e3, true), 256 & u3)
        return void t3.ctx.deactivate(e3);
      const d3 = 1 & u3 && f3, h4 = !po(e3);
      let m3;
      if (h4 && (m3 = i3 && i3.onVnodeBeforeUnmount) && vs(m3, t3, e3), 6 & u3)
        K2(e3.component, n3, o3);
      else {
        if (128 & u3)
          return void e3.suspense.unmount(n3, o3);
        d3 && Io(e3, null, t3, "beforeUnmount"), 64 & u3 ? e3.type.remove(e3, t3, n3, r3, X2, o3) : a3 && (s3 !== Ur || p4 > 0 && 64 & p4) ? q2(a3, t3, n3, false, true) : (s3 === Ur && 384 & p4 || !r3 && 16 & u3) && q2(c3, t3, n3), o3 && H2(e3);
      }
      (h4 && (m3 = i3 && i3.onVnodeUnmounted) || d3) && Or(() => {
        m3 && vs(m3, t3, e3), d3 && Io(e3, null, t3, "unmounted");
      }, n3);
    }, H2 = (e3) => {
      const { type: t3, el: n3, anchor: r3, transition: s3 } = e3;
      if (t3 === Ur)
        return void W2(n3, r3);
      if (t3 === Wr)
        return void (({ el: e4, anchor: t4 }) => {
          let n4;
          for (; e4 && e4 !== t4; )
            n4 = p3(e4), o2(e4), e4 = n4;
          o2(t4);
        })(e3);
      const i3 = () => {
        o2(n3), s3 && !s3.persisted && s3.afterLeave && s3.afterLeave();
      };
      if (1 & e3.shapeFlag && s3 && !s3.persisted) {
        const { leave: t4, delayLeave: o3 } = s3, r4 = () => t4(n3, i3);
        o3 ? o3(e3.el, i3, r4) : r4();
      } else
        i3();
    }, W2 = (e3, t3) => {
      let n3;
      for (; e3 !== t3; )
        n3 = p3(e3), o2(e3), e3 = n3;
      o2(t3);
    }, K2 = (e3, t3, n3) => {
      const { bum: o3, scope: r3, update: s3, subTree: i3, um: l3 } = e3;
      o3 && Y(o3), r3.stop(), s3 && (s3.active = false, D2(i3, e3, t3, n3)), l3 && Or(l3, t3), Or(() => {
        e3.isUnmounted = true;
      }, t3), t3 && t3.pendingBranch && !t3.isUnmounted && e3.asyncDep && !e3.asyncResolved && e3.suspenseId === t3.pendingId && (t3.deps--, 0 === t3.deps && t3.resolve());
    }, q2 = (e3, t3, n3, o3 = false, r3 = false, s3 = 0) => {
      for (let i3 = s3; i3 < e3.length; i3++)
        D2(e3[i3], t3, n3, o3, r3);
    }, J2 = (e3) => 6 & e3.shapeFlag ? J2(e3.component.subTree) : 128 & e3.shapeFlag ? e3.suspense.next() : p3(e3.anchor || e3.el), Z2 = (e3, t3, n3) => {
      null == e3 ? t3._vnode && D2(t3._vnode, null, null, true) : h3(t3._vnode || null, e3, t3, null, null, null, n3), hn(), mn(), t3._vnode = e3;
    }, X2 = { p: h3, um: D2, m: j2, r: H2, mt: F2, mc: w2, pc: I2, pbc: E2, n: J2, o: e2 };
    let te2, oe2;
    return t2 && ([te2, oe2] = t2(X2)), { render: Z2, hydrate: te2, createApp: kr(Z2, te2) };
  }
  function Pr({ effect: e2, update: t2 }, n2) {
    e2.allowRecurse = t2.allowRecurse = n2;
  }
  function Mr(e2, t2, n2 = false) {
    const o2 = e2.children, r2 = t2.children;
    if (E(o2) && E(r2))
      for (let s2 = 0; s2 < o2.length; s2++) {
        const e3 = o2[s2];
        let t3 = r2[s2];
        1 & t3.shapeFlag && !t3.dynamicChildren && ((t3.patchFlag <= 0 || 32 === t3.patchFlag) && (t3 = r2[s2] = hs(r2[s2]), t3.el = e3.el), n2 || Mr(e3, t3));
      }
  }
  function Lr(e2, t2, n2, { o: { insert: o2 }, m: r2 }, s2 = 2) {
    0 === s2 && o2(e2.targetAnchor, t2, n2);
    const { el: i2, anchor: l2, shapeFlag: c2, children: a2, props: u2 } = e2, p3 = 2 === s2;
    if (p3 && o2(i2, t2, n2), (!p3 || Vr(u2)) && 16 & c2)
      for (let f2 = 0; f2 < a2.length; f2++)
        r2(a2[f2], t2, n2, 2);
    p3 && o2(l2, t2, n2);
  }
  function Gr(e2 = false) {
    zr.push(Kr = e2 ? null : []);
  }
  function qr() {
    zr.pop(), Kr = zr[zr.length - 1] || null;
  }
  function Zr(e2) {
    Jr += e2;
  }
  function Yr(e2) {
    return e2.dynamicChildren = Jr > 0 ? Kr || y : null, qr(), Jr > 0 && Kr && Kr.push(e2), e2;
  }
  function Qr(e2, t2, n2, o2, r2, s2) {
    return Yr(is(e2, t2, n2, o2, r2, s2, true));
  }
  function Xr(e2, t2, n2, o2, r2) {
    return Yr(ls(e2, t2, n2, o2, r2, true));
  }
  function es(e2) {
    return !!e2 && true === e2.__v_isVNode;
  }
  function ts(e2, t2) {
    return e2.type === t2.type && e2.key === t2.key;
  }
  function ns(e2) {
  }
  function is(e2, t2 = null, n2 = null, o2 = 0, r2 = null, s2 = e2 === Ur ? 0 : 1, i2 = false, l2 = false) {
    const c2 = { __v_isVNode: true, __v_skip: true, type: e2, props: t2, key: t2 && rs(t2), ref: t2 && ss(t2), scopeId: Tn, slotScopeIds: null, children: n2, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetAnchor: null, staticCount: 0, shapeFlag: s2, patchFlag: o2, dynamicProps: r2, dynamicChildren: null, appContext: null };
    return l2 ? (ms(c2, n2), 128 & s2 && e2.normalize(c2)) : n2 && (c2.shapeFlag |= A(n2) ? 8 : 16), Jr > 0 && !i2 && Kr && (c2.patchFlag > 0 || 6 & s2) && 32 !== c2.patchFlag && Kr.push(c2), c2;
  }
  function cs(e2) {
    return e2 ? kt(e2) || os in e2 ? k({}, e2) : e2 : null;
  }
  function as(e2, t2, n2 = false) {
    const { props: o2, ref: r2, patchFlag: s2, children: i2 } = e2, l2 = t2 ? gs(o2 || {}, t2) : o2;
    return { __v_isVNode: true, __v_skip: true, type: e2.type, props: l2, key: l2 && rs(l2), ref: t2 && t2.ref ? n2 && r2 ? E(r2) ? r2.concat(ss(t2)) : [r2, ss(t2)] : ss(t2) : r2, scopeId: e2.scopeId, slotScopeIds: e2.slotScopeIds, children: i2, target: e2.target, targetAnchor: e2.targetAnchor, staticCount: e2.staticCount, shapeFlag: e2.shapeFlag, patchFlag: t2 && e2.type !== Ur ? -1 === s2 ? 16 : 16 | s2 : s2, dynamicProps: e2.dynamicProps, dynamicChildren: e2.dynamicChildren, appContext: e2.appContext, dirs: e2.dirs, transition: e2.transition, component: e2.component, suspense: e2.suspense, ssContent: e2.ssContent && as(e2.ssContent), ssFallback: e2.ssFallback && as(e2.ssFallback), el: e2.el, anchor: e2.anchor };
  }
  function us(e2 = " ", t2 = 0) {
    return ls(Dr, null, e2, t2);
  }
  function ps(e2, t2) {
    const n2 = ls(Wr, null, e2);
    return n2.staticCount = t2, n2;
  }
  function fs(e2 = "", t2 = false) {
    return t2 ? (Gr(), Xr(Hr, null, e2)) : ls(Hr, null, e2);
  }
  function ds(e2) {
    return null == e2 || "boolean" == typeof e2 ? ls(Hr) : E(e2) ? ls(Ur, null, e2.slice()) : "object" == typeof e2 ? hs(e2) : ls(Dr, null, String(e2));
  }
  function hs(e2) {
    return null === e2.el && -1 !== e2.patchFlag || e2.memo ? e2 : as(e2);
  }
  function ms(e2, t2) {
    let n2 = 0;
    const { shapeFlag: o2 } = e2;
    if (null == t2)
      t2 = null;
    else if (E(t2))
      n2 = 16;
    else if ("object" == typeof t2) {
      if (65 & o2) {
        const n3 = t2.default;
        return void (n3 && (n3._c && (n3._d = false), ms(e2, n3()), n3._c && (n3._d = true)));
      }
      {
        n2 = 32;
        const o3 = t2._;
        o3 || os in t2 ? 3 === o3 && wn && (1 === wn.slots._ ? t2._ = 1 : (t2._ = 2, e2.patchFlag |= 1024)) : t2._ctx = wn;
      }
    } else
      F(t2) ? (t2 = { default: t2, _ctx: wn }, n2 = 32) : (t2 = String(t2), 64 & o2 ? (n2 = 16, t2 = [us(t2)]) : n2 = 8);
    e2.children = t2, e2.shapeFlag |= n2;
  }
  function gs(...e2) {
    const t2 = {};
    for (let n2 = 0; n2 < e2.length; n2++) {
      const o2 = e2[n2];
      for (const e3 in o2)
        if ("class" === e3)
          t2.class !== o2.class && (t2.class = c([t2.class, o2.class]));
        else if ("style" === e3)
          t2.style = r([t2.style, o2.style]);
        else if (x(e3)) {
          const n3 = t2[e3], r2 = o2[e3];
          !r2 || n3 === r2 || E(n3) && n3.includes(r2) || (t2[e3] = n3 ? [].concat(n3, r2) : r2);
        } else
          "" !== e3 && (t2[e3] = o2[e3]);
    }
    return t2;
  }
  function vs(e2, t2, n2, o2 = null) {
    Qt(e2, t2, 7, [n2, o2]);
  }
  function ks(e2) {
    return 4 & e2.vnode.shapeFlag;
  }
  function Es(e2, t2, n2) {
    F(t2) ? e2.render = t2 : M(t2) && (e2.setupState = Lt(t2)), Rs(e2, n2);
  }
  function $s(e2) {
    ws = e2, Ts = (e3) => {
      e3.render._rc && (e3.withProxy = new Proxy(e3.ctx, Qo));
    };
  }
  function Rs(e2, t2, n2) {
    const o2 = e2.type;
    if (!e2.render) {
      if (!t2 && ws && !o2.render) {
        const t3 = o2.template || or(e2).template;
        if (t3) {
          const { isCustomElement: n3, compilerOptions: r2 } = e2.appContext.config, { delimiters: s2, compilerOptions: i2 } = o2, l2 = k(k({ isCustomElement: n3, delimiters: s2 }, r2), i2);
          o2.render = ws(t3, l2);
        }
      }
      e2.render = o2.render || _, Ts && Ts(e2);
    }
    xs(e2), xe(), er(e2), Ce(), Cs();
  }
  function Fs(e2) {
    const t2 = (t3) => {
      e2.exposed = t3 || {};
    };
    let n2;
    return { get attrs() {
      return n2 || (n2 = function(e3) {
        return new Proxy(e3.attrs, { get: (t3, n3) => (ke(e3, 0, "$attrs"), t3[n3]) });
      }(e2));
    }, slots: e2.slots, emit: e2.emit, expose: t2 };
  }
  function As(e2) {
    if (e2.exposed)
      return e2.exposeProxy || (e2.exposeProxy = new Proxy(Lt(Tt(e2.exposed)), { get: (t2, n2) => n2 in t2 ? t2[n2] : n2 in Zo ? Zo[n2](e2) : void 0 }));
  }
  function Ms(e2, t2 = true) {
    return F(e2) ? e2.displayName || e2.name : e2.name || t2 && e2.__name;
  }
  function Vs(e2, t2, n2 = false) {
    let o2 = Ms(t2);
    if (!o2 && t2.__file) {
      const e3 = t2.__file.match(/([^/\\]+)\.\w+$/);
      e3 && (o2 = e3[1]);
    }
    if (!o2 && e2 && e2.parent) {
      const n3 = (e3) => {
        for (const n4 in e3)
          if (e3[n4] === t2)
            return n4;
      };
      o2 = n3(e2.components || e2.parent.type.components) || n3(e2.appContext.components);
    }
    return o2 ? o2.replace(Ps, (e3) => e3.toUpperCase()).replace(/[-_]/g, "") : n2 ? "App" : "Anonymous";
  }
  function Bs() {
    return null;
  }
  function Ls() {
    return null;
  }
  function js(e2) {
  }
  function Us(e2, t2) {
    return null;
  }
  function Ds() {
    return Ws().slots;
  }
  function Hs() {
    return Ws().attrs;
  }
  function Ws() {
    const e2 = Ss();
    return e2.setupContext || (e2.setupContext = Fs(e2));
  }
  function zs(e2, t2) {
    const n2 = E(e2) ? e2.reduce((e3, t3) => (e3[t3] = {}, e3), {}) : e2;
    for (const o2 in t2) {
      const e3 = n2[o2];
      e3 ? E(e3) || F(e3) ? n2[o2] = { type: e3, default: t2[o2] } : e3.default = t2[o2] : null === e3 && (n2[o2] = { default: t2[o2] });
    }
    return n2;
  }
  function Ks(e2, t2) {
    const n2 = {};
    for (const o2 in e2)
      t2.includes(o2) || Object.defineProperty(n2, o2, { enumerable: true, get: () => e2[o2] });
    return n2;
  }
  function Gs(e2) {
    const t2 = Ss();
    let n2 = e2();
    return Cs(), V(n2) && (n2 = n2.catch((e3) => {
      throw xs(t2), e3;
    })), [n2, () => xs(t2)];
  }
  function qs(e2, t2, n2) {
    const o2 = arguments.length;
    return 2 === o2 ? M(t2) && !E(t2) ? es(t2) ? ls(e2, null, [t2]) : ls(e2, t2) : ls(e2, null, t2) : (o2 > 3 ? n2 = Array.prototype.slice.call(arguments, 2) : 3 === o2 && es(n2) && (n2 = [n2]), ls(e2, t2, n2));
  }
  function Ys() {
  }
  function Qs(e2, t2, n2, o2) {
    const r2 = n2[o2];
    if (r2 && Xs(r2, e2))
      return r2;
    const s2 = t2();
    return s2.memo = e2.slice(), n2[o2] = s2;
  }
  function Xs(e2, t2) {
    const n2 = e2.memo;
    if (n2.length != t2.length)
      return false;
    for (let o2 = 0; o2 < n2.length; o2++)
      if (Z(n2[o2], t2[o2]))
        return false;
    return Jr > 0 && Kr && Kr.push(e2), true;
  }
  function ci(e2, t2, n2) {
    if (E(n2))
      n2.forEach((n3) => ci(e2, t2, n3));
    else if (null == n2 && (n2 = ""), t2.startsWith("--"))
      e2.setProperty(t2, n2);
    else {
      const o2 = function(e3, t3) {
        const n3 = ui[t3];
        if (n3)
          return n3;
        let o3 = z(t3);
        if ("filter" !== o3 && o3 in e3)
          return ui[t3] = o3;
        o3 = q(o3);
        for (let r2 = 0; r2 < ai.length; r2++) {
          const n4 = ai[r2] + o3;
          if (n4 in e3)
            return ui[t3] = n4;
        }
        return t3;
      }(e2, t2);
      li.test(n2) ? e2.setProperty(G(o2), n2.replace(li, ""), "important") : e2[o2] = n2;
    }
  }
  function fi(e2, t2, n2, o2) {
    e2.addEventListener(t2, n2, o2);
  }
  function di(e2, t2, n2, o2, r2 = null) {
    const s2 = e2._vei || (e2._vei = {}), i2 = s2[t2];
    if (o2 && i2)
      i2.value = o2;
    else {
      const [n3, l2] = function(e3) {
        let t3;
        if (hi.test(e3)) {
          let n4;
          for (t3 = {}; n4 = e3.match(hi); )
            e3 = e3.slice(0, e3.length - n4[0].length), t3[n4[0].toLowerCase()] = true;
        }
        return [":" === e3[2] ? e3.slice(3) : G(e3.slice(2)), t3];
      }(t2);
      if (o2) {
        const i3 = s2[t2] = function(e3, t3) {
          const n4 = (e4) => {
            if (e4._vts) {
              if (e4._vts <= n4.attached)
                return;
            } else
              e4._vts = Date.now();
            Qt(function(e5, t4) {
              if (E(t4)) {
                const n5 = e5.stopImmediatePropagation;
                return e5.stopImmediatePropagation = () => {
                  n5.call(e5), e5._stopped = true;
                }, t4.map((e6) => (t5) => !t5._stopped && e6 && e6(t5));
              }
              return t4;
            }(e4, n4.value), t3, 5, [e4]);
          };
          return n4.value = e3, n4.attached = (() => mi || (gi.then(() => mi = 0), mi = Date.now()))(), n4;
        }(o2, r2);
        fi(e2, n3, i3, l2);
      } else
        i2 && (!function(e3, t3, n4, o3) {
          e3.removeEventListener(t3, n4, o3);
        }(e2, n3, i2, l2), s2[t2] = void 0);
    }
  }
  function yi(e2, t2) {
    const n2 = uo(e2);
    class o2 extends Si {
      constructor(e3) {
        super(n2, e3, t2);
      }
    }
    return o2.def = n2, o2;
  }
  function xi(e2 = "$style") {
    {
      const t2 = Ss();
      if (!t2)
        return v;
      const n2 = t2.type.__cssModules;
      if (!n2)
        return v;
      const o2 = n2[e2];
      return o2 || v;
    }
  }
  function Ci(e2) {
    const t2 = Ss();
    if (!t2)
      return;
    const n2 = () => ki(t2.subTree, e2(t2.proxy));
    Gn(n2), No(() => {
      const e3 = new MutationObserver(n2);
      e3.observe(t2.subTree.el.parentNode, { childList: true }), Ro(() => e3.disconnect());
    });
  }
  function ki(e2, t2) {
    if (128 & e2.shapeFlag) {
      const n2 = e2.suspense;
      e2 = n2.activeBranch, n2.pendingBranch && !n2.isHydrating && n2.effects.push(() => {
        ki(n2.activeBranch, t2);
      });
    }
    for (; e2.component; )
      e2 = e2.component.subTree;
    if (1 & e2.shapeFlag && e2.el)
      wi(e2.el, t2);
    else if (e2.type === Ur)
      e2.children.forEach((e3) => ki(e3, t2));
    else if (e2.type === Wr) {
      let { el: n2, anchor: o2 } = e2;
      for (; n2 && (wi(n2, t2), n2 !== o2); )
        n2 = n2.nextSibling;
    }
  }
  function wi(e2, t2) {
    if (1 === e2.nodeType) {
      const n2 = e2.style;
      for (const e3 in t2)
        n2.setProperty(`--${e3}`, t2[e3]);
    }
  }
  function Ri(e2) {
    const t2 = {};
    for (const k2 in e2)
      k2 in Ni || (t2[k2] = e2[k2]);
    if (false === e2.css)
      return t2;
    const { name: n2 = "v", type: o2, duration: r2, enterFromClass: s2 = `${n2}-enter-from`, enterActiveClass: i2 = `${n2}-enter-active`, enterToClass: l2 = `${n2}-enter-to`, appearFromClass: c2 = s2, appearActiveClass: a2 = i2, appearToClass: u2 = l2, leaveFromClass: p3 = `${n2}-leave-from`, leaveActiveClass: f2 = `${n2}-leave-active`, leaveToClass: d2 = `${n2}-leave-to` } = e2, h3 = function(e3) {
      if (null == e3)
        return null;
      if (M(e3))
        return [Fi(e3.enter), Fi(e3.leave)];
      {
        const t3 = Fi(e3);
        return [t3, t3];
      }
    }(r2), m2 = h3 && h3[0], g2 = h3 && h3[1], { onBeforeEnter: v2, onEnter: y2, onEnterCancelled: _2, onLeave: b2, onLeaveCancelled: S2, onBeforeAppear: x2 = v2, onAppear: C2 = y2, onAppearCancelled: w2 = _2 } = t2, T2 = (e3, t3, n3) => {
      Pi(e3, t3 ? u2 : l2), Pi(e3, t3 ? a2 : i2), n3 && n3();
    }, N2 = (e3, t3) => {
      e3._isLeaving = false, Pi(e3, p3), Pi(e3, d2), Pi(e3, f2), t3 && t3();
    }, E2 = (e3) => (t3, n3) => {
      const r3 = e3 ? C2 : y2, i3 = () => T2(t3, e3, n3);
      $i(r3, [t3, i3]), Mi(() => {
        Pi(t3, e3 ? c2 : s2), Ai(t3, e3 ? u2 : l2), Oi(r3) || Ii(t3, o2, m2, i3);
      });
    };
    return k(t2, { onBeforeEnter(e3) {
      $i(v2, [e3]), Ai(e3, s2), Ai(e3, i2);
    }, onBeforeAppear(e3) {
      $i(x2, [e3]), Ai(e3, c2), Ai(e3, a2);
    }, onEnter: E2(false), onAppear: E2(true), onLeave(e3, t3) {
      e3._isLeaving = true;
      const n3 = () => N2(e3, t3);
      Ai(e3, p3), Ui(), Ai(e3, f2), Mi(() => {
        e3._isLeaving && (Pi(e3, p3), Ai(e3, d2), Oi(b2) || Ii(e3, o2, g2, n3));
      }), $i(b2, [e3, n3]);
    }, onEnterCancelled(e3) {
      T2(e3, false), $i(_2, [e3]);
    }, onAppearCancelled(e3) {
      T2(e3, true), $i(w2, [e3]);
    }, onLeaveCancelled(e3) {
      N2(e3), $i(S2, [e3]);
    } });
  }
  function Fi(e2) {
    return X(e2);
  }
  function Ai(e2, t2) {
    t2.split(/\s+/).forEach((t3) => t3 && e2.classList.add(t3)), (e2._vtc || (e2._vtc = /* @__PURE__ */ new Set())).add(t2);
  }
  function Pi(e2, t2) {
    t2.split(/\s+/).forEach((t3) => t3 && e2.classList.remove(t3));
    const { _vtc: n2 } = e2;
    n2 && (n2.delete(t2), n2.size || (e2._vtc = void 0));
  }
  function Mi(e2) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e2);
    });
  }
  function Ii(e2, t2, n2, o2) {
    const r2 = e2._endId = ++Vi, s2 = () => {
      r2 === e2._endId && o2();
    };
    if (n2)
      return setTimeout(s2, n2);
    const { type: i2, timeout: l2, propCount: c2 } = Bi(e2, t2);
    if (!i2)
      return o2();
    const a2 = i2 + "end";
    let u2 = 0;
    const p3 = () => {
      e2.removeEventListener(a2, f2), s2();
    }, f2 = (t3) => {
      t3.target === e2 && ++u2 >= c2 && p3();
    };
    setTimeout(() => {
      u2 < c2 && p3();
    }, l2 + 1), e2.addEventListener(a2, f2);
  }
  function Bi(e2, t2) {
    const n2 = window.getComputedStyle(e2), o2 = (e3) => (n2[e3] || "").split(", "), r2 = o2("transitionDelay"), s2 = o2("transitionDuration"), i2 = Li(r2, s2), l2 = o2("animationDelay"), c2 = o2("animationDuration"), a2 = Li(l2, c2);
    let u2 = null, p3 = 0, f2 = 0;
    "transition" === t2 ? i2 > 0 && (u2 = "transition", p3 = i2, f2 = s2.length) : "animation" === t2 ? a2 > 0 && (u2 = "animation", p3 = a2, f2 = c2.length) : (p3 = Math.max(i2, a2), u2 = p3 > 0 ? i2 > a2 ? "transition" : "animation" : null, f2 = u2 ? "transition" === u2 ? s2.length : c2.length : 0);
    return { type: u2, timeout: p3, propCount: f2, hasTransform: "transition" === u2 && /\b(transform|all)(,|$)/.test(n2.transitionProperty) };
  }
  function Li(e2, t2) {
    for (; e2.length < t2.length; )
      e2 = e2.concat(e2);
    return Math.max(...t2.map((t3, n2) => ji(t3) + ji(e2[n2])));
  }
  function ji(e2) {
    return 1e3 * Number(e2.slice(0, -1).replace(",", "."));
  }
  function Ui() {
    return document.body.offsetHeight;
  }
  function zi(e2) {
    const t2 = e2.el;
    t2._moveCb && t2._moveCb(), t2._enterCb && t2._enterCb();
  }
  function Ki(e2) {
    Hi.set(e2, e2.el.getBoundingClientRect());
  }
  function Gi(e2) {
    const t2 = Di.get(e2), n2 = Hi.get(e2), o2 = t2.left - n2.left, r2 = t2.top - n2.top;
    if (o2 || r2) {
      const t3 = e2.el.style;
      return t3.transform = t3.webkitTransform = `translate(${o2}px,${r2}px)`, t3.transitionDuration = "0s", e2;
    }
  }
  function Ji(e2) {
    e2.target.composing = true;
  }
  function Zi(e2) {
    const t2 = e2.target;
    t2.composing && (t2.composing = false, t2.dispatchEvent(new Event("input")));
  }
  function Xi(e2, { value: t2, oldValue: n2 }, o2) {
    e2._modelValue = t2, E(t2) ? e2.checked = h(t2, o2.props.value) > -1 : O(t2) ? e2.checked = t2.has(o2.props.value) : t2 !== n2 && (e2.checked = d(t2, rl(e2, true)));
  }
  function nl(e2, t2) {
    const n2 = e2.multiple;
    if (!n2 || E(t2) || O(t2)) {
      for (let o2 = 0, r2 = e2.options.length; o2 < r2; o2++) {
        const r3 = e2.options[o2], s2 = ol(r3);
        if (n2)
          r3.selected = E(t2) ? h(t2, s2) > -1 : t2.has(s2);
        else if (d(ol(r3), t2))
          return void (e2.selectedIndex !== o2 && (e2.selectedIndex = o2));
      }
      n2 || -1 === e2.selectedIndex || (e2.selectedIndex = -1);
    }
  }
  function ol(e2) {
    return "_value" in e2 ? e2._value : e2.value;
  }
  function rl(e2, t2) {
    const n2 = t2 ? "_trueValue" : "_falseValue";
    return n2 in e2 ? e2[n2] : t2;
  }
  function il(e2, t2, n2, o2, r2) {
    const s2 = function(e3, t3) {
      switch (e3) {
        case "SELECT":
          return tl;
        case "TEXTAREA":
          return Yi;
        default:
          switch (t3) {
            case "checkbox":
              return Qi;
            case "radio":
              return el;
            default:
              return Yi;
          }
      }
    }(e2.tagName, n2.props && n2.props.type)[r2];
    s2 && s2(e2, t2, n2, o2);
  }
  function dl(e2, t2) {
    e2.style.display = t2 ? e2._vod : "none";
  }
  function vl() {
    return ml || (ml = Rr(hl));
  }
  function yl() {
    return ml = gl ? ml : Fr(hl), gl = true, ml;
  }
  function Cl(e2) {
    if (A(e2)) {
      return document.querySelector(e2);
    }
    return e2;
  }
  function Tl(e2) {
    throw e2;
  }
  function Nl(e2) {
  }
  function El(e2, t2, n2, o2) {
    const r2 = new SyntaxError(String(e2));
    return r2.code = e2, r2.loc = t2, r2;
  }
  function gc(e2, t2, n2, o2, r2, s2, i2, l2 = false, c2 = false, a2 = false, u2 = mc) {
    return e2 && (l2 ? (e2.helper(Pl), e2.helper(zc(e2.inSSR, a2))) : e2.helper(Wc(e2.inSSR, a2)), i2 && e2.helper(Kl)), { type: 13, tag: t2, props: n2, children: o2, patchFlag: r2, dynamicProps: s2, directives: i2, isBlock: l2, disableTracking: c2, isComponent: a2, loc: u2 };
  }
  function vc(e2, t2 = mc) {
    return { type: 17, loc: t2, elements: e2 };
  }
  function yc(e2, t2 = mc) {
    return { type: 15, loc: t2, properties: e2 };
  }
  function _c(e2, t2) {
    return { type: 16, loc: mc, key: A(e2) ? bc(e2, true) : e2, value: t2 };
  }
  function bc(e2, t2 = false, n2 = mc, o2 = 0) {
    return { type: 4, loc: n2, content: e2, isStatic: t2, constType: t2 ? 3 : o2 };
  }
  function Sc(e2, t2 = mc) {
    return { type: 8, loc: t2, children: e2 };
  }
  function xc(e2, t2 = [], n2 = mc) {
    return { type: 14, loc: n2, callee: e2, arguments: t2 };
  }
  function Cc(e2, t2, n2 = false, o2 = false, r2 = mc) {
    return { type: 18, params: e2, returns: t2, newline: n2, isSlot: o2, loc: r2 };
  }
  function kc(e2, t2, n2, o2 = true) {
    return { type: 19, test: e2, consequent: t2, alternate: n2, newline: o2, loc: mc };
  }
  function Nc(e2) {
    return Tc(e2, "Teleport") ? Ol : Tc(e2, "Suspense") ? Rl : Tc(e2, "KeepAlive") ? Fl : Tc(e2, "BaseTransition") ? Al : void 0;
  }
  function Pc(e2, t2, n2) {
    const o2 = { source: e2.source.slice(t2, t2 + n2), start: Mc(e2.start, e2.source, t2), end: e2.end };
    return null != n2 && (o2.end = Mc(e2.start, e2.source, t2 + n2)), o2;
  }
  function Mc(e2, t2, n2 = t2.length) {
    return Vc(k({}, e2), t2, n2);
  }
  function Vc(e2, t2, n2 = t2.length) {
    let o2 = 0, r2 = -1;
    for (let s2 = 0; s2 < n2; s2++)
      10 === t2.charCodeAt(s2) && (o2++, r2 = s2);
    return e2.offset += n2, e2.line += o2, e2.column = -1 === r2 ? e2.column + n2 : n2 - r2, e2;
  }
  function Ic(e2, t2, n2 = false) {
    for (let o2 = 0; o2 < e2.props.length; o2++) {
      const r2 = e2.props[o2];
      if (7 === r2.type && (n2 || r2.exp) && (A(t2) ? r2.name === t2 : t2.test(r2.name)))
        return r2;
    }
  }
  function Bc(e2, t2, n2 = false, o2 = false) {
    for (let r2 = 0; r2 < e2.props.length; r2++) {
      const s2 = e2.props[r2];
      if (6 === s2.type) {
        if (n2)
          continue;
        if (s2.name === t2 && (s2.value || o2))
          return s2;
      } else if ("bind" === s2.name && (s2.exp || o2) && Lc(s2.arg, t2))
        return s2;
    }
  }
  function Lc(e2, t2) {
    return !(!e2 || !wc(e2) || e2.content !== t2);
  }
  function jc(e2) {
    return 5 === e2.type || 2 === e2.type;
  }
  function Uc(e2) {
    return 7 === e2.type && "slot" === e2.name;
  }
  function Dc(e2) {
    return 1 === e2.type && 3 === e2.tagType;
  }
  function Hc(e2) {
    return 1 === e2.type && 2 === e2.tagType;
  }
  function Wc(e2, t2) {
    return e2 || t2 ? Il : Bl;
  }
  function zc(e2, t2) {
    return e2 || t2 ? Ml : Vl;
  }
  function Gc(e2, t2 = []) {
    if (e2 && !A(e2) && 14 === e2.type) {
      const n2 = e2.callee;
      if (!A(n2) && Kc.has(n2))
        return Gc(e2.arguments[0], t2.concat(e2));
    }
    return [e2, t2];
  }
  function qc(e2, t2, n2) {
    let o2, r2, s2 = 13 === e2.type ? e2.props : e2.arguments[2], i2 = [];
    if (s2 && !A(s2) && 14 === s2.type) {
      const e3 = Gc(s2);
      s2 = e3[0], i2 = e3[1], r2 = i2[i2.length - 1];
    }
    if (null == s2 || A(s2))
      o2 = yc([t2]);
    else if (14 === s2.type) {
      const e3 = s2.arguments[0];
      A(e3) || 15 !== e3.type ? s2.callee === nc ? o2 = xc(n2.helper(Yl), [yc([t2]), s2]) : s2.arguments.unshift(yc([t2])) : e3.properties.unshift(t2), !o2 && (o2 = s2);
    } else if (15 === s2.type) {
      let e3 = false;
      if (4 === t2.key.type) {
        const n3 = t2.key.content;
        e3 = s2.properties.some((e4) => 4 === e4.key.type && e4.key.content === n3);
      }
      e3 || s2.properties.unshift(t2), o2 = s2;
    } else
      o2 = xc(n2.helper(Yl), [yc([t2]), s2]), r2 && r2.callee === tc && (r2 = i2[i2.length - 2]);
    13 === e2.type ? r2 ? r2.arguments[0] = o2 : e2.props = o2 : r2 ? r2.arguments[0] = o2 : e2.arguments[2] = o2;
  }
  function Jc(e2, t2) {
    return `_${t2}_${e2.replace(/[^\w]/g, (t3, n2) => "-" === t3 ? "_" : e2.charCodeAt(n2).toString())}`;
  }
  function Zc(e2, { helper: t2, removeHelper: n2, inSSR: o2 }) {
    e2.isBlock || (e2.isBlock = true, n2(Wc(o2, e2.isComponent)), t2(Pl), t2(zc(o2, e2.isComponent)));
  }
  function ea(e2, t2 = {}) {
    const n2 = function(e3, t3) {
      const n3 = k({}, Xc);
      let o3;
      for (o3 in t3)
        n3[o3] = void 0 === t3[o3] ? Xc[o3] : t3[o3];
      return { options: n3, column: 1, line: 1, offset: 0, originalSource: e3, source: e3, inPre: false, inVPre: false, onWarn: n3.onWarn };
    }(e2, t2), o2 = ha(n2);
    return function(e3, t3 = mc) {
      return { type: 0, children: e3, helpers: [], components: [], directives: [], hoists: [], imports: [], cached: 0, temps: 0, codegenNode: void 0, loc: t3 };
    }(ta(n2, 0, []), ma(n2, o2));
  }
  function ta(e2, t2, n2) {
    const o2 = ga(n2), r2 = o2 ? o2.ns : 0, s2 = [];
    for (; !Sa(e2, t2, n2); ) {
      const i3 = e2.source;
      let l2;
      if (0 === t2 || 1 === t2) {
        if (!e2.inVPre && va(i3, e2.options.delimiters[0]))
          l2 = pa(e2, t2);
        else if (0 === t2 && "<" === i3[0])
          if (1 === i3.length)
            ;
          else if ("!" === i3[1])
            l2 = va(i3, "<!--") ? ra(e2) : va(i3, "<!DOCTYPE") ? sa(e2) : va(i3, "<![CDATA[") && 0 !== r2 ? oa(e2, n2) : sa(e2);
          else if ("/" === i3[1])
            if (2 === i3.length)
              ;
            else {
              if (">" === i3[2]) {
                ya(e2, 3);
                continue;
              }
              if (/[a-z]/i.test(i3[2])) {
                ca(e2, 1, o2);
                continue;
              }
              l2 = sa(e2);
            }
          else
            /[a-z]/i.test(i3[1]) ? l2 = ia(e2, n2) : "?" === i3[1] && (l2 = sa(e2));
      }
      if (l2 || (l2 = fa(e2, t2)), E(l2))
        for (let e3 = 0; e3 < l2.length; e3++)
          na(s2, l2[e3]);
      else
        na(s2, l2);
    }
    let i2 = false;
    if (2 !== t2 && 1 !== t2) {
      const t3 = "preserve" !== e2.options.whitespace;
      for (let n3 = 0; n3 < s2.length; n3++) {
        const o3 = s2[n3];
        if (2 === o3.type)
          if (e2.inPre)
            o3.content = o3.content.replace(/\r\n/g, "\n");
          else if (/[^\t\r\n\f ]/.test(o3.content))
            t3 && (o3.content = o3.content.replace(/[\t\r\n\f ]+/g, " "));
          else {
            const e3 = s2[n3 - 1], r3 = s2[n3 + 1];
            !e3 || !r3 || t3 && (3 === e3.type || 3 === r3.type || 1 === e3.type && 1 === r3.type && /[\r\n]/.test(o3.content)) ? (i2 = true, s2[n3] = null) : o3.content = " ";
          }
        else
          3 !== o3.type || e2.options.comments || (i2 = true, s2[n3] = null);
      }
      if (e2.inPre && o2 && e2.options.isPreTag(o2.tag)) {
        const e3 = s2[0];
        e3 && 2 === e3.type && (e3.content = e3.content.replace(/^\r?\n/, ""));
      }
    }
    return i2 ? s2.filter(Boolean) : s2;
  }
  function na(e2, t2) {
    if (2 === t2.type) {
      const n2 = ga(e2);
      if (n2 && 2 === n2.type && n2.loc.end.offset === t2.loc.start.offset)
        return n2.content += t2.content, n2.loc.end = t2.loc.end, void (n2.loc.source += t2.loc.source);
    }
    e2.push(t2);
  }
  function oa(e2, t2) {
    ya(e2, 9);
    const n2 = ta(e2, 3, t2);
    return 0 === e2.source.length || ya(e2, 3), n2;
  }
  function ra(e2) {
    const t2 = ha(e2);
    let n2;
    const o2 = /--(\!)?>/.exec(e2.source);
    if (o2) {
      n2 = e2.source.slice(4, o2.index);
      const t3 = e2.source.slice(0, o2.index);
      let r2 = 1, s2 = 0;
      for (; -1 !== (s2 = t3.indexOf("<!--", r2)); )
        ya(e2, s2 - r2 + 1), r2 = s2 + 1;
      ya(e2, o2.index + o2[0].length - r2 + 1);
    } else
      n2 = e2.source.slice(4), ya(e2, e2.source.length);
    return { type: 3, content: n2, loc: ma(e2, t2) };
  }
  function sa(e2) {
    const t2 = ha(e2), n2 = "?" === e2.source[1] ? 1 : 2;
    let o2;
    const r2 = e2.source.indexOf(">");
    return -1 === r2 ? (o2 = e2.source.slice(n2), ya(e2, e2.source.length)) : (o2 = e2.source.slice(n2, r2), ya(e2, r2 + 1)), { type: 3, content: o2, loc: ma(e2, t2) };
  }
  function ia(e2, t2) {
    const n2 = e2.inPre, o2 = e2.inVPre, r2 = ga(t2), s2 = ca(e2, 0, r2), i2 = e2.inPre && !n2, l2 = e2.inVPre && !o2;
    if (s2.isSelfClosing || e2.options.isVoidTag(s2.tag))
      return i2 && (e2.inPre = false), l2 && (e2.inVPre = false), s2;
    t2.push(s2);
    const c2 = e2.options.getTextMode(s2, r2), a2 = ta(e2, c2, t2);
    if (t2.pop(), s2.children = a2, xa(e2.source, s2.tag))
      ca(e2, 1, r2);
    else if (0 === e2.source.length && "script" === s2.tag.toLowerCase()) {
      const e3 = a2[0];
      e3 && va(e3.loc.source, "<!--");
    }
    return s2.loc = ma(e2, s2.loc.start), i2 && (e2.inPre = false), l2 && (e2.inVPre = false), s2;
  }
  function ca(e2, t2, n2) {
    const o2 = ha(e2), r2 = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(e2.source), s2 = r2[1], i2 = e2.options.getNamespace(s2, n2);
    ya(e2, r2[0].length), _a(e2);
    const l2 = ha(e2), c2 = e2.source;
    e2.options.isPreTag(s2) && (e2.inPre = true);
    let a2 = aa(e2, t2);
    0 === t2 && !e2.inVPre && a2.some((e3) => 7 === e3.type && "pre" === e3.name) && (e2.inVPre = true, k(e2, l2), e2.source = c2, a2 = aa(e2, t2).filter((e3) => "v-pre" !== e3.name));
    let u2 = false;
    if (0 === e2.source.length || (u2 = va(e2.source, "/>"), ya(e2, u2 ? 2 : 1)), 1 === t2)
      return;
    let p3 = 0;
    return e2.inVPre || ("slot" === s2 ? p3 = 2 : "template" === s2 ? a2.some((e3) => 7 === e3.type && la(e3.name)) && (p3 = 3) : function(e3, t3, n3) {
      const o3 = n3.options;
      if (o3.isCustomElement(e3))
        return false;
      if ("component" === e3 || /^[A-Z]/.test(e3) || Nc(e3) || o3.isBuiltInComponent && o3.isBuiltInComponent(e3) || o3.isNativeTag && !o3.isNativeTag(e3))
        return true;
      for (let r3 = 0; r3 < t3.length; r3++) {
        const e4 = t3[r3];
        if (6 === e4.type) {
          if ("is" === e4.name && e4.value && e4.value.content.startsWith("vue:"))
            return true;
        } else {
          if ("is" === e4.name)
            return true;
          "bind" === e4.name && Lc(e4.arg, "is");
        }
      }
    }(s2, a2, e2) && (p3 = 1)), { type: 1, ns: i2, tag: s2, tagType: p3, props: a2, isSelfClosing: u2, children: [], loc: ma(e2, o2), codegenNode: void 0 };
  }
  function aa(e2, t2) {
    const n2 = [], o2 = /* @__PURE__ */ new Set();
    for (; e2.source.length > 0 && !va(e2.source, ">") && !va(e2.source, "/>"); ) {
      if (va(e2.source, "/")) {
        ya(e2, 1), _a(e2);
        continue;
      }
      const r2 = ua(e2, o2);
      6 === r2.type && r2.value && "class" === r2.name && (r2.value.content = r2.value.content.replace(/\s+/g, " ").trim()), 0 === t2 && n2.push(r2), /^[^\t\r\n\f />]/.test(e2.source), _a(e2);
    }
    return n2;
  }
  function ua(e2, t2) {
    const n2 = ha(e2), o2 = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(e2.source)[0];
    t2.has(o2), t2.add(o2);
    {
      const e3 = /["'<]/g;
      let t3;
      for (; t3 = e3.exec(o2); )
        ;
    }
    let r2;
    ya(e2, o2.length), /^[\t\r\n\f ]*=/.test(e2.source) && (_a(e2), ya(e2, 1), _a(e2), r2 = function(e3) {
      const t3 = ha(e3);
      let n3;
      const o3 = e3.source[0], r3 = '"' === o3 || "'" === o3;
      if (r3) {
        ya(e3, 1);
        const t4 = e3.source.indexOf(o3);
        -1 === t4 ? n3 = da(e3, e3.source.length, 4) : (n3 = da(e3, t4, 4), ya(e3, 1));
      } else {
        const t4 = /^[^\t\r\n\f >]+/.exec(e3.source);
        if (!t4)
          return;
        const o4 = /["'<=`]/g;
        let r4;
        for (; r4 = o4.exec(t4[0]); )
          ;
        n3 = da(e3, t4[0].length, 4);
      }
      return { content: n3, isQuoted: r3, loc: ma(e3, t3) };
    }(e2));
    const s2 = ma(e2, n2);
    if (!e2.inVPre && /^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(o2)) {
      const t3 = /(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(o2);
      let i2, l2 = va(o2, "."), c2 = t3[1] || (l2 || va(o2, ":") ? "bind" : va(o2, "@") ? "on" : "slot");
      if (t3[2]) {
        const r3 = "slot" === c2, s3 = o2.lastIndexOf(t3[2]), l3 = ma(e2, ba(e2, n2, s3), ba(e2, n2, s3 + t3[2].length + (r3 && t3[3] || "").length));
        let a3 = t3[2], u2 = true;
        a3.startsWith("[") ? (u2 = false, a3 = a3.endsWith("]") ? a3.slice(1, a3.length - 1) : a3.slice(1)) : r3 && (a3 += t3[3] || ""), i2 = { type: 4, content: a3, isStatic: u2, constType: u2 ? 3 : 0, loc: l3 };
      }
      if (r2 && r2.isQuoted) {
        const e3 = r2.loc;
        e3.start.offset++, e3.start.column++, e3.end = Mc(e3.start, r2.content), e3.source = e3.source.slice(1, -1);
      }
      const a2 = t3[3] ? t3[3].slice(1).split(".") : [];
      return l2 && a2.push("prop"), { type: 7, name: c2, exp: r2 && { type: 4, content: r2.content, isStatic: false, constType: 0, loc: r2.loc }, arg: i2, modifiers: a2, loc: s2 };
    }
    return !e2.inVPre && va(o2, "v-"), { type: 6, name: o2, value: r2 && { type: 2, content: r2.content, loc: r2.loc }, loc: s2 };
  }
  function pa(e2, t2) {
    const [n2, o2] = e2.options.delimiters, r2 = e2.source.indexOf(o2, n2.length);
    if (-1 === r2)
      return;
    const s2 = ha(e2);
    ya(e2, n2.length);
    const i2 = ha(e2), l2 = ha(e2), c2 = r2 - n2.length, a2 = e2.source.slice(0, c2), u2 = da(e2, c2, t2), p3 = u2.trim(), f2 = u2.indexOf(p3);
    f2 > 0 && Vc(i2, a2, f2);
    return Vc(l2, a2, c2 - (u2.length - p3.length - f2)), ya(e2, o2.length), { type: 5, content: { type: 4, isStatic: false, constType: 0, content: p3, loc: ma(e2, i2, l2) }, loc: ma(e2, s2) };
  }
  function fa(e2, t2) {
    const n2 = 3 === t2 ? ["]]>"] : ["<", e2.options.delimiters[0]];
    let o2 = e2.source.length;
    for (let s2 = 0; s2 < n2.length; s2++) {
      const t3 = e2.source.indexOf(n2[s2], 1);
      -1 !== t3 && o2 > t3 && (o2 = t3);
    }
    const r2 = ha(e2);
    return { type: 2, content: da(e2, o2, t2), loc: ma(e2, r2) };
  }
  function da(e2, t2, n2) {
    const o2 = e2.source.slice(0, t2);
    return ya(e2, t2), 2 !== n2 && 3 !== n2 && o2.includes("&") ? e2.options.decodeEntities(o2, 4 === n2) : o2;
  }
  function ha(e2) {
    const { column: t2, line: n2, offset: o2 } = e2;
    return { column: t2, line: n2, offset: o2 };
  }
  function ma(e2, t2, n2) {
    return { start: t2, end: n2 = n2 || ha(e2), source: e2.originalSource.slice(t2.offset, n2.offset) };
  }
  function ga(e2) {
    return e2[e2.length - 1];
  }
  function va(e2, t2) {
    return e2.startsWith(t2);
  }
  function ya(e2, t2) {
    const { source: n2 } = e2;
    Vc(e2, n2, t2), e2.source = n2.slice(t2);
  }
  function _a(e2) {
    const t2 = /^[\t\r\n\f ]+/.exec(e2.source);
    t2 && ya(e2, t2[0].length);
  }
  function ba(e2, t2, n2) {
    return Mc(t2, e2.originalSource.slice(t2.offset, n2), n2);
  }
  function Sa(e2, t2, n2) {
    const o2 = e2.source;
    switch (t2) {
      case 0:
        if (va(o2, "</")) {
          for (let e3 = n2.length - 1; e3 >= 0; --e3)
            if (xa(o2, n2[e3].tag))
              return true;
        }
        break;
      case 1:
      case 2: {
        const e3 = ga(n2);
        if (e3 && xa(o2, e3.tag))
          return true;
        break;
      }
      case 3:
        if (va(o2, "]]>"))
          return true;
    }
    return !o2;
  }
  function xa(e2, t2) {
    return va(e2, "</") && e2.slice(2, 2 + t2.length).toLowerCase() === t2.toLowerCase() && /[\t\r\n\f />]/.test(e2[2 + t2.length] || ">");
  }
  function Ca(e2, t2) {
    wa(e2, t2, ka(e2, e2.children[0]));
  }
  function ka(e2, t2) {
    const { children: n2 } = e2;
    return 1 === n2.length && 1 === t2.type && !Hc(t2);
  }
  function wa(e2, t2, n2 = false) {
    const { children: o2 } = e2, r2 = o2.length;
    let s2 = 0;
    for (let i2 = 0; i2 < o2.length; i2++) {
      const e3 = o2[i2];
      if (1 === e3.type && 0 === e3.tagType) {
        const o3 = n2 ? 0 : Ta(e3, t2);
        if (o3 > 0) {
          if (o3 >= 2) {
            e3.codegenNode.patchFlag = "-1", e3.codegenNode = t2.hoist(e3.codegenNode), s2++;
            continue;
          }
        } else {
          const n3 = e3.codegenNode;
          if (13 === n3.type) {
            const o4 = Ra(n3);
            if ((!o4 || 512 === o4 || 1 === o4) && $a(e3, t2) >= 2) {
              const o5 = Oa(e3);
              o5 && (n3.props = t2.hoist(o5));
            }
            n3.dynamicProps && (n3.dynamicProps = t2.hoist(n3.dynamicProps));
          }
        }
      }
      if (1 === e3.type) {
        const n3 = 1 === e3.tagType;
        n3 && t2.scopes.vSlot++, wa(e3, t2), n3 && t2.scopes.vSlot--;
      } else if (11 === e3.type)
        wa(e3, t2, 1 === e3.children.length);
      else if (9 === e3.type)
        for (let n3 = 0; n3 < e3.branches.length; n3++)
          wa(e3.branches[n3], t2, 1 === e3.branches[n3].children.length);
    }
    s2 && t2.transformHoist && t2.transformHoist(o2, t2, e2), s2 && s2 === r2 && 1 === e2.type && 0 === e2.tagType && e2.codegenNode && 13 === e2.codegenNode.type && E(e2.codegenNode.children) && (e2.codegenNode.children = t2.hoist(vc(e2.codegenNode.children)));
  }
  function Ta(e2, t2) {
    const { constantCache: n2 } = t2;
    switch (e2.type) {
      case 1:
        if (0 !== e2.tagType)
          return 0;
        const o2 = n2.get(e2);
        if (void 0 !== o2)
          return o2;
        const r2 = e2.codegenNode;
        if (13 !== r2.type)
          return 0;
        if (r2.isBlock && "svg" !== e2.tag && "foreignObject" !== e2.tag)
          return 0;
        if (Ra(r2))
          return n2.set(e2, 0), 0;
        {
          let o3 = 3;
          const s3 = $a(e2, t2);
          if (0 === s3)
            return n2.set(e2, 0), 0;
          s3 < o3 && (o3 = s3);
          for (let r3 = 0; r3 < e2.children.length; r3++) {
            const s4 = Ta(e2.children[r3], t2);
            if (0 === s4)
              return n2.set(e2, 0), 0;
            s4 < o3 && (o3 = s4);
          }
          if (o3 > 1)
            for (let r3 = 0; r3 < e2.props.length; r3++) {
              const s4 = e2.props[r3];
              if (7 === s4.type && "bind" === s4.name && s4.exp) {
                const r4 = Ta(s4.exp, t2);
                if (0 === r4)
                  return n2.set(e2, 0), 0;
                r4 < o3 && (o3 = r4);
              }
            }
          if (r2.isBlock) {
            for (let t3 = 0; t3 < e2.props.length; t3++) {
              if (7 === e2.props[t3].type)
                return n2.set(e2, 0), 0;
            }
            t2.removeHelper(Pl), t2.removeHelper(zc(t2.inSSR, r2.isComponent)), r2.isBlock = false, t2.helper(Wc(t2.inSSR, r2.isComponent));
          }
          return n2.set(e2, o3), o3;
        }
      case 2:
      case 3:
        return 3;
      case 9:
      case 11:
      case 10:
      default:
        return 0;
      case 5:
      case 12:
        return Ta(e2.content, t2);
      case 4:
        return e2.constType;
      case 8:
        let s2 = 3;
        for (let n3 = 0; n3 < e2.children.length; n3++) {
          const o3 = e2.children[n3];
          if (A(o3) || P(o3))
            continue;
          const r3 = Ta(o3, t2);
          if (0 === r3)
            return 0;
          r3 < s2 && (s2 = r3);
        }
        return s2;
    }
  }
  function Ea(e2, t2) {
    if (14 === e2.type && !A(e2.callee) && Na.has(e2.callee)) {
      const n2 = e2.arguments[0];
      if (4 === n2.type)
        return Ta(n2, t2);
      if (14 === n2.type)
        return Ea(n2, t2);
    }
    return 0;
  }
  function $a(e2, t2) {
    let n2 = 3;
    const o2 = Oa(e2);
    if (o2 && 15 === o2.type) {
      const { properties: e3 } = o2;
      for (let o3 = 0; o3 < e3.length; o3++) {
        const { key: r2, value: s2 } = e3[o3], i2 = Ta(r2, t2);
        if (0 === i2)
          return i2;
        let l2;
        if (i2 < n2 && (n2 = i2), l2 = 4 === s2.type ? Ta(s2, t2) : 14 === s2.type ? Ea(s2, t2) : 0, 0 === l2)
          return l2;
        l2 < n2 && (n2 = l2);
      }
    }
    return n2;
  }
  function Oa(e2) {
    const t2 = e2.codegenNode;
    if (13 === t2.type)
      return t2.props;
  }
  function Ra(e2) {
    const t2 = e2.patchFlag;
    return t2 ? parseInt(t2, 10) : void 0;
  }
  function Fa(e2, { filename: t2 = "", prefixIdentifiers: n2 = false, hoistStatic: o2 = false, cacheHandlers: r2 = false, nodeTransforms: s2 = [], directiveTransforms: i2 = {}, transformHoist: l2 = null, isBuiltInComponent: c2 = _, isCustomElement: a2 = _, expressionPlugins: u2 = [], scopeId: p3 = null, slotted: f2 = true, ssr: d2 = false, inSSR: h3 = false, ssrCssVars: m2 = "", bindingMetadata: g2 = v, inline: y2 = false, isTS: b2 = false, onError: S2 = Tl, onWarn: x2 = Nl, compatConfig: C2 }) {
    const k2 = t2.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), w2 = { selfName: k2 && q(z(k2[1])), prefixIdentifiers: n2, hoistStatic: o2, cacheHandlers: r2, nodeTransforms: s2, directiveTransforms: i2, transformHoist: l2, isBuiltInComponent: c2, isCustomElement: a2, expressionPlugins: u2, scopeId: p3, slotted: f2, ssr: d2, inSSR: h3, ssrCssVars: m2, bindingMetadata: g2, inline: y2, isTS: b2, onError: S2, onWarn: x2, compatConfig: C2, root: e2, helpers: /* @__PURE__ */ new Map(), components: /* @__PURE__ */ new Set(), directives: /* @__PURE__ */ new Set(), hoists: [], imports: [], constantCache: /* @__PURE__ */ new Map(), temps: 0, cached: 0, identifiers: /* @__PURE__ */ Object.create(null), scopes: { vFor: 0, vSlot: 0, vPre: 0, vOnce: 0 }, parent: null, currentNode: e2, childIndex: 0, inVOnce: false, helper(e3) {
      const t3 = w2.helpers.get(e3) || 0;
      return w2.helpers.set(e3, t3 + 1), e3;
    }, removeHelper(e3) {
      const t3 = w2.helpers.get(e3);
      if (t3) {
        const n3 = t3 - 1;
        n3 ? w2.helpers.set(e3, n3) : w2.helpers.delete(e3);
      }
    }, helperString: (e3) => `_${hc[w2.helper(e3)]}`, replaceNode(e3) {
      w2.parent.children[w2.childIndex] = w2.currentNode = e3;
    }, removeNode(e3) {
      const t3 = e3 ? w2.parent.children.indexOf(e3) : w2.currentNode ? w2.childIndex : -1;
      e3 && e3 !== w2.currentNode ? w2.childIndex > t3 && (w2.childIndex--, w2.onNodeRemoved()) : (w2.currentNode = null, w2.onNodeRemoved()), w2.parent.children.splice(t3, 1);
    }, onNodeRemoved: () => {
    }, addIdentifiers(e3) {
    }, removeIdentifiers(e3) {
    }, hoist(e3) {
      A(e3) && (e3 = bc(e3)), w2.hoists.push(e3);
      const t3 = bc(`_hoisted_${w2.hoists.length}`, false, e3.loc, 2);
      return t3.hoisted = e3, t3;
    }, cache: (e3, t3 = false) => function(e4, t4, n3 = false) {
      return { type: 20, index: e4, value: t4, isVNode: n3, loc: mc };
    }(w2.cached++, e3, t3) };
    return w2;
  }
  function Aa(e2, t2) {
    const n2 = Fa(e2, t2);
    Pa(e2, n2), t2.hoistStatic && Ca(e2, n2), t2.ssr || function(e3, t3) {
      const { helper: n3 } = t3, { children: o2 } = e3;
      if (1 === o2.length) {
        const n4 = o2[0];
        if (ka(e3, n4) && n4.codegenNode) {
          const o3 = n4.codegenNode;
          13 === o3.type && Zc(o3, t3), e3.codegenNode = o3;
        } else
          e3.codegenNode = n4;
      } else if (o2.length > 1) {
        let o3 = 64;
        e3.codegenNode = gc(t3, n3($l), void 0, e3.children, o3 + "", void 0, void 0, true, void 0, false);
      }
    }(e2, n2), e2.helpers = [...n2.helpers.keys()], e2.components = [...n2.components], e2.directives = [...n2.directives], e2.imports = n2.imports, e2.hoists = n2.hoists, e2.temps = n2.temps, e2.cached = n2.cached;
  }
  function Pa(e2, t2) {
    t2.currentNode = e2;
    const { nodeTransforms: n2 } = t2, o2 = [];
    for (let s2 = 0; s2 < n2.length; s2++) {
      const r3 = n2[s2](e2, t2);
      if (r3 && (E(r3) ? o2.push(...r3) : o2.push(r3)), !t2.currentNode)
        return;
      e2 = t2.currentNode;
    }
    switch (e2.type) {
      case 3:
        t2.ssr || t2.helper(Ll);
        break;
      case 5:
        t2.ssr || t2.helper(Zl);
        break;
      case 9:
        for (let n3 = 0; n3 < e2.branches.length; n3++)
          Pa(e2.branches[n3], t2);
        break;
      case 10:
      case 11:
      case 1:
      case 0:
        !function(e3, t3) {
          let n3 = 0;
          const o3 = () => {
            n3--;
          };
          for (; n3 < e3.children.length; n3++) {
            const r3 = e3.children[n3];
            A(r3) || (t3.parent = e3, t3.childIndex = n3, t3.onNodeRemoved = o3, Pa(r3, t3));
          }
        }(e2, t2);
    }
    t2.currentNode = e2;
    let r2 = o2.length;
    for (; r2--; )
      o2[r2]();
  }
  function Ma(e2, t2) {
    const n2 = A(e2) ? (t3) => t3 === e2 : (t3) => e2.test(t3);
    return (e3, o2) => {
      if (1 === e3.type) {
        const { props: r2 } = e3;
        if (3 === e3.tagType && r2.some(Uc))
          return;
        const s2 = [];
        for (let i2 = 0; i2 < r2.length; i2++) {
          const l2 = r2[i2];
          if (7 === l2.type && n2(l2.name)) {
            r2.splice(i2, 1), i2--;
            const n3 = t2(e3, l2, o2);
            n3 && s2.push(n3);
          }
        }
        return s2;
      }
    };
  }
  function Ia(e2, t2 = {}) {
    const n2 = function(e3, { mode: t3 = "function", prefixIdentifiers: n3 = "module" === t3, sourceMap: o3 = false, filename: r3 = "template.vue.html", scopeId: s3 = null, optimizeImports: i3 = false, runtimeGlobalName: l3 = "Vue", runtimeModuleName: c3 = "vue", ssrRuntimeModuleName: a3 = "vue/server-renderer", ssr: u3 = false, isTS: p4 = false, inSSR: f2 = false }) {
      const d2 = { mode: t3, prefixIdentifiers: n3, sourceMap: o3, filename: r3, scopeId: s3, optimizeImports: i3, runtimeGlobalName: l3, runtimeModuleName: c3, ssrRuntimeModuleName: a3, ssr: u3, isTS: p4, inSSR: f2, source: e3.loc.source, code: "", column: 1, line: 1, offset: 0, indentLevel: 0, pure: false, map: void 0, helper: (e4) => `_${hc[e4]}`, push(e4, t4) {
        d2.code += e4;
      }, indent() {
        h3(++d2.indentLevel);
      }, deindent(e4 = false) {
        e4 ? --d2.indentLevel : h3(--d2.indentLevel);
      }, newline() {
        h3(d2.indentLevel);
      } };
      function h3(e4) {
        d2.push("\n" + "  ".repeat(e4));
      }
      return d2;
    }(e2, t2);
    t2.onContextCreated && t2.onContextCreated(n2);
    const { mode: o2, push: r2, prefixIdentifiers: s2, indent: i2, deindent: l2, newline: c2, ssr: a2 } = n2, u2 = e2.helpers.length > 0, p3 = !s2 && "module" !== o2;
    !function(e3, t3) {
      const { push: n3, newline: o3, runtimeGlobalName: r3 } = t3, s3 = r3;
      if (e3.helpers.length > 0 && (n3(`const _Vue = ${s3}
`), e3.hoists.length)) {
        n3(`const { ${[Il, Bl, Ll, jl, Ul].filter((t4) => e3.helpers.includes(t4)).map(Va).join(", ")} } = _Vue
`);
      }
      (function(e4, t4) {
        if (!e4.length)
          return;
        t4.pure = true;
        const { push: n4, newline: o4 } = t4;
        o4();
        for (let r4 = 0; r4 < e4.length; r4++) {
          const s4 = e4[r4];
          s4 && (n4(`const _hoisted_${r4 + 1} = `), Ua(s4, t4), o4());
        }
        t4.pure = false;
      })(e3.hoists, t3), o3(), n3("return ");
    }(e2, n2);
    if (r2(`function ${a2 ? "ssrRender" : "render"}(${(a2 ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ")}) {`), i2(), p3 && (r2("with (_ctx) {"), i2(), u2 && (r2(`const { ${e2.helpers.map(Va).join(", ")} } = _Vue`), r2("\n"), c2())), e2.components.length && (Ba(e2.components, "component", n2), (e2.directives.length || e2.temps > 0) && c2()), e2.directives.length && (Ba(e2.directives, "directive", n2), e2.temps > 0 && c2()), e2.temps > 0) {
      r2("let ");
      for (let t3 = 0; t3 < e2.temps; t3++)
        r2(`${t3 > 0 ? ", " : ""}_temp${t3}`);
    }
    return (e2.components.length || e2.directives.length || e2.temps) && (r2("\n"), c2()), a2 || r2("return "), e2.codegenNode ? Ua(e2.codegenNode, n2) : r2("null"), p3 && (l2(), r2("}")), l2(), r2("}"), { ast: e2, code: n2.code, preamble: "", map: n2.map ? n2.map.toJSON() : void 0 };
  }
  function Ba(e2, t2, { helper: n2, push: o2, newline: r2, isTS: s2 }) {
    const i2 = n2("component" === t2 ? Dl : Wl);
    for (let l2 = 0; l2 < e2.length; l2++) {
      let n3 = e2[l2];
      const c2 = n3.endsWith("__self");
      c2 && (n3 = n3.slice(0, -6)), o2(`const ${Jc(n3, t2)} = ${i2}(${JSON.stringify(n3)}${c2 ? ", true" : ""})${s2 ? "!" : ""}`), l2 < e2.length - 1 && r2();
    }
  }
  function La(e2, t2) {
    const n2 = e2.length > 3 || false;
    t2.push("["), n2 && t2.indent(), ja(e2, t2, n2), n2 && t2.deindent(), t2.push("]");
  }
  function ja(e2, t2, n2 = false, o2 = true) {
    const { push: r2, newline: s2 } = t2;
    for (let i2 = 0; i2 < e2.length; i2++) {
      const l2 = e2[i2];
      A(l2) ? r2(l2) : E(l2) ? La(l2, t2) : Ua(l2, t2), i2 < e2.length - 1 && (n2 ? (o2 && r2(","), s2()) : o2 && r2(", "));
    }
  }
  function Ua(e2, t2) {
    if (A(e2))
      t2.push(e2);
    else if (P(e2))
      t2.push(t2.helper(e2));
    else
      switch (e2.type) {
        case 1:
        case 9:
        case 11:
        case 12:
          Ua(e2.codegenNode, t2);
          break;
        case 2:
          !function(e3, t3) {
            t3.push(JSON.stringify(e3.content), e3);
          }(e2, t2);
          break;
        case 4:
          Da(e2, t2);
          break;
        case 5:
          !function(e3, t3) {
            const { push: n2, helper: o2, pure: r2 } = t3;
            r2 && n2("/*#__PURE__*/");
            n2(`${o2(Zl)}(`), Ua(e3.content, t3), n2(")");
          }(e2, t2);
          break;
        case 8:
          Ha(e2, t2);
          break;
        case 3:
          !function(e3, t3) {
            const { push: n2, helper: o2, pure: r2 } = t3;
            r2 && n2("/*#__PURE__*/");
            n2(`${o2(Ll)}(${JSON.stringify(e3.content)})`, e3);
          }(e2, t2);
          break;
        case 13:
          !function(e3, t3) {
            const { push: n2, helper: o2, pure: r2 } = t3, { tag: s2, props: i2, children: l2, patchFlag: c2, dynamicProps: a2, directives: u2, isBlock: p3, disableTracking: f2, isComponent: d2 } = e3;
            u2 && n2(o2(Kl) + "(");
            p3 && n2(`(${o2(Pl)}(${f2 ? "true" : ""}), `);
            r2 && n2("/*#__PURE__*/");
            const h3 = p3 ? zc(t3.inSSR, d2) : Wc(t3.inSSR, d2);
            n2(o2(h3) + "(", e3), ja(function(e4) {
              let t4 = e4.length;
              for (; t4-- && null == e4[t4]; )
                ;
              return e4.slice(0, t4 + 1).map((e5) => e5 || "null");
            }([s2, i2, l2, c2, a2]), t3), n2(")"), p3 && n2(")");
            u2 && (n2(", "), Ua(u2, t3), n2(")"));
          }(e2, t2);
          break;
        case 14:
          !function(e3, t3) {
            const { push: n2, helper: o2, pure: r2 } = t3, s2 = A(e3.callee) ? e3.callee : o2(e3.callee);
            r2 && n2("/*#__PURE__*/");
            n2(s2 + "(", e3), ja(e3.arguments, t3), n2(")");
          }(e2, t2);
          break;
        case 15:
          !function(e3, t3) {
            const { push: n2, indent: o2, deindent: r2, newline: s2 } = t3, { properties: i2 } = e3;
            if (!i2.length)
              return void n2("{}", e3);
            const l2 = i2.length > 1 || false;
            n2(l2 ? "{" : "{ "), l2 && o2();
            for (let c2 = 0; c2 < i2.length; c2++) {
              const { key: e4, value: o3 } = i2[c2];
              Wa(e4, t3), n2(": "), Ua(o3, t3), c2 < i2.length - 1 && (n2(","), s2());
            }
            l2 && r2(), n2(l2 ? "}" : " }");
          }(e2, t2);
          break;
        case 17:
          !function(e3, t3) {
            La(e3.elements, t3);
          }(e2, t2);
          break;
        case 18:
          !function(e3, t3) {
            const { push: n2, indent: o2, deindent: r2 } = t3, { params: s2, returns: i2, body: l2, newline: c2, isSlot: a2 } = e3;
            a2 && n2(`_${hc[ac]}(`);
            n2("(", e3), E(s2) ? ja(s2, t3) : s2 && Ua(s2, t3);
            n2(") => "), (c2 || l2) && (n2("{"), o2());
            i2 ? (c2 && n2("return "), E(i2) ? La(i2, t3) : Ua(i2, t3)) : l2 && Ua(l2, t3);
            (c2 || l2) && (r2(), n2("}"));
            a2 && n2(")");
          }(e2, t2);
          break;
        case 19:
          !function(e3, t3) {
            const { test: n2, consequent: o2, alternate: r2, newline: s2 } = e3, { push: i2, indent: l2, deindent: c2, newline: a2 } = t3;
            if (4 === n2.type) {
              const e4 = !$c(n2.content);
              e4 && i2("("), Da(n2, t3), e4 && i2(")");
            } else
              i2("("), Ua(n2, t3), i2(")");
            s2 && l2(), t3.indentLevel++, s2 || i2(" "), i2("? "), Ua(o2, t3), t3.indentLevel--, s2 && a2(), s2 || i2(" "), i2(": ");
            const u2 = 19 === r2.type;
            u2 || t3.indentLevel++;
            Ua(r2, t3), u2 || t3.indentLevel--;
            s2 && c2(true);
          }(e2, t2);
          break;
        case 20:
          !function(e3, t3) {
            const { push: n2, helper: o2, indent: r2, deindent: s2, newline: i2 } = t3;
            n2(`_cache[${e3.index}] || (`), e3.isVNode && (r2(), n2(`${o2(ic)}(-1),`), i2());
            n2(`_cache[${e3.index}] = `), Ua(e3.value, t3), e3.isVNode && (n2(","), i2(), n2(`${o2(ic)}(1),`), i2(), n2(`_cache[${e3.index}]`), s2());
            n2(")");
          }(e2, t2);
          break;
        case 21:
          ja(e2.body, t2, true, false);
      }
  }
  function Da(e2, t2) {
    const { content: n2, isStatic: o2 } = e2;
    t2.push(o2 ? JSON.stringify(n2) : n2, e2);
  }
  function Ha(e2, t2) {
    for (let n2 = 0; n2 < e2.children.length; n2++) {
      const o2 = e2.children[n2];
      A(o2) ? t2.push(o2) : Ua(o2, t2);
    }
  }
  function Wa(e2, t2) {
    const { push: n2 } = t2;
    if (8 === e2.type)
      n2("["), Ha(e2, t2), n2("]");
    else if (e2.isStatic) {
      n2($c(e2.content) ? e2.content : JSON.stringify(e2.content), e2);
    } else
      n2(`[${e2.content}]`, e2);
  }
  function Ka(e2, t2) {
    const n2 = 3 === e2.tagType;
    return { type: 10, loc: e2.loc, condition: "else" === t2.name ? void 0 : t2.exp, children: n2 && !Ic(e2, "for") ? e2.children : [e2], userKey: Bc(e2, "key"), isTemplateIf: n2 };
  }
  function Ga(e2, t2, n2) {
    return e2.condition ? kc(e2.condition, qa(e2, t2, n2), xc(n2.helper(Ll), ['""', "true"])) : qa(e2, t2, n2);
  }
  function qa(e2, t2, n2) {
    const { helper: o2 } = n2, r2 = _c("key", bc(`${t2}`, false, mc, 2)), { children: s2 } = e2, i2 = s2[0];
    if (1 !== s2.length || 1 !== i2.type) {
      if (1 === s2.length && 11 === i2.type) {
        const e3 = i2.codegenNode;
        return qc(e3, r2, n2), e3;
      }
      {
        let t3 = 64;
        return gc(n2, o2($l), yc([r2]), s2, t3 + "", void 0, void 0, true, false, false, e2.loc);
      }
    }
    {
      const e3 = i2.codegenNode, t3 = 14 === (l2 = e3).type && l2.callee === fc ? l2.arguments[1].returns : l2;
      return 13 === t3.type && Zc(t3, n2), qc(t3, r2, n2), e3;
    }
    var l2;
  }
  function Xa(e2, t2) {
    const n2 = e2.loc, o2 = e2.content, r2 = o2.match(Za);
    if (!r2)
      return;
    const [, s2, i2] = r2, l2 = { source: eu(n2, i2.trim(), o2.indexOf(i2, s2.length)), value: void 0, key: void 0, index: void 0 };
    let c2 = s2.trim().replace(Qa, "").trim();
    const a2 = s2.indexOf(c2), u2 = c2.match(Ya);
    if (u2) {
      c2 = c2.replace(Ya, "").trim();
      const e3 = u2[1].trim();
      let t3;
      if (e3 && (t3 = o2.indexOf(e3, a2 + c2.length), l2.key = eu(n2, e3, t3)), u2[2]) {
        const r3 = u2[2].trim();
        r3 && (l2.index = eu(n2, r3, o2.indexOf(r3, l2.key ? t3 + e3.length : a2 + c2.length)));
      }
    }
    return c2 && (l2.value = eu(n2, c2, a2)), l2;
  }
  function eu(e2, t2, n2) {
    return bc(t2, false, Pc(e2, n2, t2.length));
  }
  function tu({ value: e2, key: t2, index: n2 }, o2 = []) {
    return function(e3) {
      let t3 = e3.length;
      for (; t3-- && !e3[t3]; )
        ;
      return e3.slice(0, t3 + 1).map((e4, t4) => e4 || bc("_".repeat(t4 + 1), false));
    }([e2, t2, n2, ...o2]);
  }
  function su(e2, t2, n2 = ru) {
    t2.helper(ac);
    const { children: o2, loc: r2 } = e2, s2 = [], i2 = [];
    let l2 = t2.scopes.vSlot > 0 || t2.scopes.vFor > 0;
    const c2 = Ic(e2, "slot", true);
    if (c2) {
      const { arg: e3, exp: t3 } = c2;
      e3 && !wc(e3) && (l2 = true), s2.push(_c(e3 || bc("default", true), n2(t3, o2, r2)));
    }
    let a2 = false, u2 = false;
    const p3 = [], f2 = /* @__PURE__ */ new Set();
    let d2 = 0;
    for (let g2 = 0; g2 < o2.length; g2++) {
      const e3 = o2[g2];
      let r3;
      if (!Dc(e3) || !(r3 = Ic(e3, "slot", true))) {
        3 !== e3.type && p3.push(e3);
        continue;
      }
      if (c2)
        break;
      a2 = true;
      const { children: h4, loc: m3 } = e3, { arg: v2 = bc("default", true), exp: y2 } = r3;
      let _2;
      wc(v2) ? _2 = v2 ? v2.content : "default" : l2 = true;
      const b2 = n2(y2, h4, m3);
      let S2, x2, C2;
      if (S2 = Ic(e3, "if"))
        l2 = true, i2.push(kc(S2.exp, iu(v2, b2, d2++), nu));
      else if (x2 = Ic(e3, /^else(-if)?$/, true)) {
        let e4, t3 = g2;
        for (; t3-- && (e4 = o2[t3], 3 === e4.type); )
          ;
        if (e4 && Dc(e4) && Ic(e4, "if")) {
          o2.splice(g2, 1), g2--;
          let e5 = i2[i2.length - 1];
          for (; 19 === e5.alternate.type; )
            e5 = e5.alternate;
          e5.alternate = x2.exp ? kc(x2.exp, iu(v2, b2, d2++), nu) : iu(v2, b2, d2++);
        }
      } else if (C2 = Ic(e3, "for")) {
        l2 = true;
        const e4 = C2.parseResult || Xa(C2.exp);
        e4 && i2.push(xc(t2.helper(Gl), [e4.source, Cc(tu(e4), iu(v2, b2), true)]));
      } else {
        if (_2) {
          if (f2.has(_2))
            continue;
          f2.add(_2), "default" === _2 && (u2 = true);
        }
        s2.push(_c(v2, b2));
      }
    }
    if (!c2) {
      const e3 = (e4, t3) => _c("default", n2(e4, t3, r2));
      a2 ? p3.length && p3.some((e4) => cu(e4)) && (u2 || s2.push(e3(void 0, p3))) : s2.push(e3(void 0, o2));
    }
    const h3 = l2 ? 2 : lu(e2.children) ? 3 : 1;
    let m2 = yc(s2.concat(_c("_", bc(h3 + "", false))), r2);
    return i2.length && (m2 = xc(t2.helper(Jl), [m2, vc(i2)])), { slots: m2, hasDynamicSlots: l2 };
  }
  function iu(e2, t2, n2) {
    const o2 = [_c("name", e2), _c("fn", t2)];
    return null != n2 && o2.push(_c("key", bc(String(n2), true))), yc(o2);
  }
  function lu(e2) {
    for (let t2 = 0; t2 < e2.length; t2++) {
      const n2 = e2[t2];
      switch (n2.type) {
        case 1:
          if (2 === n2.tagType || lu(n2.children))
            return true;
          break;
        case 9:
          if (lu(n2.branches))
            return true;
          break;
        case 10:
        case 11:
          if (lu(n2.children))
            return true;
      }
    }
    return false;
  }
  function cu(e2) {
    return 2 !== e2.type && 12 !== e2.type || (2 === e2.type ? !!e2.content.trim() : cu(e2.content));
  }
  function pu(e2, t2, n2 = e2.props, o2, r2, s2 = false) {
    const { tag: i2, loc: l2, children: c2 } = e2;
    let a2 = [];
    const u2 = [], p3 = [], f2 = c2.length > 0;
    let d2 = false, h3 = 0, m2 = false, g2 = false, v2 = false, y2 = false, _2 = false, b2 = false;
    const S2 = [], C2 = (e3) => {
      a2.length && (u2.push(yc(fu(a2), l2)), a2 = []), e3 && u2.push(e3);
    }, k2 = ({ key: e3, value: n3 }) => {
      if (wc(e3)) {
        const s3 = e3.content, i3 = x(s3);
        if (!i3 || o2 && !r2 || "onclick" === s3.toLowerCase() || "onUpdate:modelValue" === s3 || U(s3) || (y2 = true), i3 && U(s3) && (b2 = true), 20 === n3.type || (4 === n3.type || 8 === n3.type) && Ta(n3, t2) > 0)
          return;
        "ref" === s3 ? m2 = true : "class" === s3 ? g2 = true : "style" === s3 ? v2 = true : "key" === s3 || S2.includes(s3) || S2.push(s3), !o2 || "class" !== s3 && "style" !== s3 || S2.includes(s3) || S2.push(s3);
      } else
        _2 = true;
    };
    for (let x2 = 0; x2 < n2.length; x2++) {
      const r3 = n2[x2];
      if (6 === r3.type) {
        const { loc: e3, name: n3, value: o3 } = r3;
        let s3 = true;
        if ("ref" === n3 && (m2 = true, t2.scopes.vFor > 0 && a2.push(_c(bc("ref_for", true), bc("true")))), "is" === n3 && (hu(i2) || o3 && o3.content.startsWith("vue:")))
          continue;
        a2.push(_c(bc(n3, true, Pc(e3, 0, n3.length)), bc(o3 ? o3.content : "", s3, o3 ? o3.loc : e3)));
      } else {
        const { name: n3, arg: c3, exp: h4, loc: m3 } = r3, g3 = "bind" === n3, v3 = "on" === n3;
        if ("slot" === n3)
          continue;
        if ("once" === n3 || "memo" === n3)
          continue;
        if ("is" === n3 || g3 && Lc(c3, "is") && hu(i2))
          continue;
        if (v3 && s2)
          continue;
        if ((g3 && Lc(c3, "key") || v3 && f2 && Lc(c3, "vue:before-update")) && (d2 = true), g3 && Lc(c3, "ref") && t2.scopes.vFor > 0 && a2.push(_c(bc("ref_for", true), bc("true"))), !c3 && (g3 || v3)) {
          _2 = true, h4 && (g3 ? (C2(), u2.push(h4)) : C2({ type: 14, loc: m3, callee: t2.helper(nc), arguments: o2 ? [h4] : [h4, "true"] }));
          continue;
        }
        const y3 = t2.directiveTransforms[n3];
        if (y3) {
          const { props: n4, needRuntime: o3 } = y3(r3, e2, t2);
          !s2 && n4.forEach(k2), v3 && c3 && !wc(c3) ? C2(yc(n4, l2)) : a2.push(...n4), o3 && (p3.push(r3), P(o3) && au.set(r3, o3));
        } else
          D(n3) || (p3.push(r3), f2 && (d2 = true));
      }
    }
    let w2;
    if (u2.length ? (C2(), w2 = u2.length > 1 ? xc(t2.helper(Yl), u2, l2) : u2[0]) : a2.length && (w2 = yc(fu(a2), l2)), _2 ? h3 |= 16 : (g2 && !o2 && (h3 |= 2), v2 && !o2 && (h3 |= 4), S2.length && (h3 |= 8), y2 && (h3 |= 32)), d2 || 0 !== h3 && 32 !== h3 || !(m2 || b2 || p3.length > 0) || (h3 |= 512), !t2.inSSR && w2)
      switch (w2.type) {
        case 15:
          let e3 = -1, n3 = -1, o3 = false;
          for (let t3 = 0; t3 < w2.properties.length; t3++) {
            const r4 = w2.properties[t3].key;
            wc(r4) ? "class" === r4.content ? e3 = t3 : "style" === r4.content && (n3 = t3) : r4.isHandlerKey || (o3 = true);
          }
          const r3 = w2.properties[e3], s3 = w2.properties[n3];
          o3 ? w2 = xc(t2.helper(ec), [w2]) : (r3 && !wc(r3.value) && (r3.value = xc(t2.helper(Ql), [r3.value])), s3 && (v2 || 4 === s3.value.type && "[" === s3.value.content.trim()[0] || 17 === s3.value.type) && (s3.value = xc(t2.helper(Xl), [s3.value])));
          break;
        case 14:
          break;
        default:
          w2 = xc(t2.helper(ec), [xc(t2.helper(tc), [w2])]);
      }
    return { props: w2, directives: p3, patchFlag: h3, dynamicPropNames: S2, shouldUseBlock: d2 };
  }
  function fu(e2) {
    const t2 = /* @__PURE__ */ new Map(), n2 = [];
    for (let o2 = 0; o2 < e2.length; o2++) {
      const r2 = e2[o2];
      if (8 === r2.key.type || !r2.key.isStatic) {
        n2.push(r2);
        continue;
      }
      const s2 = r2.key.content, i2 = t2.get(s2);
      i2 ? ("style" === s2 || "class" === s2 || x(s2)) && du(i2, r2) : (t2.set(s2, r2), n2.push(r2));
    }
    return n2;
  }
  function du(e2, t2) {
    17 === e2.value.type ? e2.value.elements.push(t2.value) : e2.value = vc([e2.value, t2.value], e2.loc);
  }
  function hu(e2) {
    return "component" === e2 || "Component" === e2;
  }
  function ku(e2 = []) {
    return { props: e2 };
  }
  function Nu(e2, t2 = {}) {
    const n2 = t2.onError || Tl, o2 = "module" === t2.mode;
    true === t2.prefixIdentifiers ? n2(El(46)) : o2 && n2(El(47));
    t2.cacheHandlers && n2(El(48)), t2.scopeId && !o2 && n2(El(49));
    const r2 = A(e2) ? ea(e2, t2) : e2, [s2, i2] = [[xu, za, Tu, Ja, mu, uu, ou, bu], { on: vu, bind: yu, model: Cu }];
    return Aa(r2, k({}, t2, { prefixIdentifiers: false, nodeTransforms: [...s2, ...t2.nodeTransforms || []], directiveTransforms: k({}, i2, t2.directiveTransforms || {}) })), Ia(r2, k({}, t2, { prefixIdentifiers: false }));
  }
  function Qu(e2, t2) {
    if (!A(e2)) {
      if (!e2.nodeType)
        return _;
      e2 = e2.innerHTML;
    }
    const n2 = e2, o2 = Yu[n2];
    if (o2)
      return o2;
    if ("#" === e2[0]) {
      const t3 = document.querySelector(e2);
      e2 = t3 ? t3.innerHTML : "";
    }
    const r2 = k({ hoistStatic: true, onError: void 0, onWarn: _ }, t2);
    r2.isCustomElement || "undefined" == typeof customElements || (r2.isCustomElement = (e3) => !!customElements.get(e3));
    const { code: s2 } = function(e3, t3 = {}) {
      return Nu(e3, k({}, Uu, t3, { nodeTransforms: [qu, ...Ju, ...t3.nodeTransforms || []], directiveTransforms: k({}, Zu, t3.directiveTransforms || {}), transformHoist: null }));
    }(e2, r2), i2 = new Function("Vue", s2)(wl);
    return i2._rc = true, Yu[n2] = i2;
  }
  var t, n, s, i, u, p, f, m, g, v, y, _, b, S, x, C, k, w, T, N, E, $, O, R, F, A, P, M, V, I, B, L, j, U, D, H, W, z, K, G, q, J, Z, Y, Q, X, ee, te, ne, le, ce, ae, ue, pe, fe, de, he, me, ge, be, Se, $e, Oe, Re, Fe, Ae, Pe, Me, Le, je, Ue, De, He, We, nt, ot, rt, st, lt, ct, at, ut, pt, ft, dt, ht, Nt, Et, Mt, Bt, jt, Ht, zt, Kt, Gt, en, tn, nn, on, rn, sn, ln, cn, an, gn, vn, _n, bn, wn, Tn, On, An, Pn, In, Bn, Jn, no, oo, po, mo, go, wo, To, No, Eo, $o, Oo, Ro, Fo, Ao, Po, Lo, Jo, Zo, Yo, Qo, Xo, sr, vr, yr, _r, br, Sr, Cr, Tr, Nr, Er, Or, Vr, Ir, Br, jr, Ur, Dr, Hr, Wr, zr, Kr, Jr, os, rs, ss, ls, ys, _s, bs, Ss, xs, Cs, ws, Ts, Ns, Os, Ps, Is, Js, Zs, ei, ti, ni, oi, ri, si, ii, li, ai, ui, pi, hi, mi, gi, vi, _i, bi, Si, Ti, Ni, Ei, $i, Oi, Vi, Di, Hi, Wi, qi, Yi, Qi, el, tl, sl, ll, cl, al, ul, pl, fl, hl, ml, gl, _l, bl, Sl, xl, kl, wl, $l, Ol, Rl, Fl, Al, Pl, Ml, Vl, Il, Bl, Ll, jl, Ul, Dl, Hl, Wl, zl, Kl, Gl, ql, Jl, Zl, Yl, Ql, Xl, ec, tc, nc, oc, rc, sc, ic, lc, cc, ac, uc, pc, fc, dc, hc, mc, wc, Tc, Ec, $c, Oc, Rc, Fc, Ac, Kc, Yc, Qc, Xc, la, Na, Va, za, Ja, Za, Ya, Qa, nu, ou, ru, au, uu, mu, gu, vu, yu, _u, bu, Su, xu, Cu, wu, Tu, Eu, $u, Ou, Ru, Fu, Au, Pu, Mu, Vu, Iu, Bu, Lu, ju, Uu, Du, Hu, Wu, zu, Ku, Gu, qu, Ju, Zu, Yu;
  var init_vue_esm_browser_prod = __esm({
    "ns-hugo:/src/assets/scripts/vue.esm-browser.prod.js"() {
      t = e("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt");
      n = e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
      s = /;(?![^(]*\))/g;
      i = /:(.+)/;
      u = e("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot");
      p = e("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view");
      f = e("area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr");
      m = (e2) => A(e2) ? e2 : null == e2 ? "" : E(e2) || M(e2) && (e2.toString === I || !F(e2.toString)) ? JSON.stringify(e2, g, 2) : String(e2);
      g = (e2, t2) => t2 && t2.__v_isRef ? g(e2, t2.value) : $(t2) ? { [`Map(${t2.size})`]: [...t2.entries()].reduce((e3, [t3, n2]) => (e3[`${t3} =>`] = n2, e3), {}) } : O(t2) ? { [`Set(${t2.size})`]: [...t2.values()] } : !M(t2) || E(t2) || L(t2) ? t2 : String(t2);
      v = {};
      y = [];
      _ = () => {
      };
      b = () => false;
      S = /^on[^a-z]/;
      x = (e2) => S.test(e2);
      C = (e2) => e2.startsWith("onUpdate:");
      k = Object.assign;
      w = (e2, t2) => {
        const n2 = e2.indexOf(t2);
        n2 > -1 && e2.splice(n2, 1);
      };
      T = Object.prototype.hasOwnProperty;
      N = (e2, t2) => T.call(e2, t2);
      E = Array.isArray;
      $ = (e2) => "[object Map]" === B(e2);
      O = (e2) => "[object Set]" === B(e2);
      R = (e2) => "[object Date]" === B(e2);
      F = (e2) => "function" == typeof e2;
      A = (e2) => "string" == typeof e2;
      P = (e2) => "symbol" == typeof e2;
      M = (e2) => null !== e2 && "object" == typeof e2;
      V = (e2) => M(e2) && F(e2.then) && F(e2.catch);
      I = Object.prototype.toString;
      B = (e2) => I.call(e2);
      L = (e2) => "[object Object]" === B(e2);
      j = (e2) => A(e2) && "NaN" !== e2 && "-" !== e2[0] && "" + parseInt(e2, 10) === e2;
      U = e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
      D = e("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
      H = (e2) => {
        const t2 = /* @__PURE__ */ Object.create(null);
        return (n2) => t2[n2] || (t2[n2] = e2(n2));
      };
      W = /-(\w)/g;
      z = H((e2) => e2.replace(W, (e3, t2) => t2 ? t2.toUpperCase() : ""));
      K = /\B([A-Z])/g;
      G = H((e2) => e2.replace(K, "-$1").toLowerCase());
      q = H((e2) => e2.charAt(0).toUpperCase() + e2.slice(1));
      J = H((e2) => e2 ? `on${q(e2)}` : "");
      Z = (e2, t2) => !Object.is(e2, t2);
      Y = (e2, t2) => {
        for (let n2 = 0; n2 < e2.length; n2++)
          e2[n2](t2);
      };
      Q = (e2, t2, n2) => {
        Object.defineProperty(e2, t2, { configurable: true, enumerable: false, value: n2 });
      };
      X = (e2) => {
        const t2 = parseFloat(e2);
        return isNaN(t2) ? e2 : t2;
      };
      ne = class {
        constructor(e2 = false) {
          this.detached = e2, this.active = true, this.effects = [], this.cleanups = [], this.parent = te, !e2 && te && (this.index = (te.scopes || (te.scopes = [])).push(this) - 1);
        }
        run(e2) {
          if (this.active) {
            const t2 = te;
            try {
              return te = this, e2();
            } finally {
              te = t2;
            }
          }
        }
        on() {
          te = this;
        }
        off() {
          te = this.parent;
        }
        stop(e2) {
          if (this.active) {
            let t2, n2;
            for (t2 = 0, n2 = this.effects.length; t2 < n2; t2++)
              this.effects[t2].stop();
            for (t2 = 0, n2 = this.cleanups.length; t2 < n2; t2++)
              this.cleanups[t2]();
            if (this.scopes)
              for (t2 = 0, n2 = this.scopes.length; t2 < n2; t2++)
                this.scopes[t2].stop(true);
            if (!this.detached && this.parent && !e2) {
              const e3 = this.parent.scopes.pop();
              e3 && e3 !== this && (this.parent.scopes[this.index] = e3, e3.index = this.index);
            }
            this.parent = void 0, this.active = false;
          }
        }
      };
      le = (e2) => {
        const t2 = new Set(e2);
        return t2.w = 0, t2.n = 0, t2;
      };
      ce = (e2) => (e2.w & fe) > 0;
      ae = (e2) => (e2.n & fe) > 0;
      ue = /* @__PURE__ */ new WeakMap();
      pe = 0;
      fe = 1;
      he = Symbol("");
      me = Symbol("");
      ge = class {
        constructor(e2, t2 = null, n2) {
          this.fn = e2, this.scheduler = t2, this.active = true, this.deps = [], this.parent = void 0, re(this, n2);
        }
        run() {
          if (!this.active)
            return this.fn();
          let e2 = de, t2 = be;
          for (; e2; ) {
            if (e2 === this)
              return;
            e2 = e2.parent;
          }
          try {
            return this.parent = de, de = this, be = true, fe = 1 << ++pe, pe <= 30 ? (({ deps: e3 }) => {
              if (e3.length)
                for (let t3 = 0; t3 < e3.length; t3++)
                  e3[t3].w |= fe;
            })(this) : ve(this), this.fn();
          } finally {
            pe <= 30 && ((e3) => {
              const { deps: t3 } = e3;
              if (t3.length) {
                let n2 = 0;
                for (let o2 = 0; o2 < t3.length; o2++) {
                  const r2 = t3[o2];
                  ce(r2) && !ae(r2) ? r2.delete(e3) : t3[n2++] = r2, r2.w &= ~fe, r2.n &= ~fe;
                }
                t3.length = n2;
              }
            })(this), fe = 1 << --pe, de = this.parent, be = t2, this.parent = void 0, this.deferStop && this.stop();
          }
        }
        stop() {
          de === this ? this.deferStop = true : this.active && (ve(this), this.onStop && this.onStop(), this.active = false);
        }
      };
      be = true;
      Se = [];
      $e = e("__proto__,__v_isRef,__isVue");
      Oe = new Set(Object.getOwnPropertyNames(Symbol).filter((e2) => "arguments" !== e2 && "caller" !== e2).map((e2) => Symbol[e2]).filter(P));
      Re = Ie();
      Fe = Ie(false, true);
      Ae = Ie(true);
      Pe = Ie(true, true);
      Me = Ve();
      Le = { get: Re, set: Be(), deleteProperty: function(e2, t2) {
        const n2 = N(e2, t2), o2 = Reflect.deleteProperty(e2, t2);
        return o2 && n2 && Te(e2, "delete", t2, void 0), o2;
      }, has: function(e2, t2) {
        const n2 = Reflect.has(e2, t2);
        return P(t2) && Oe.has(t2) || ke(e2, 0, t2), n2;
      }, ownKeys: function(e2) {
        return ke(e2, 0, E(e2) ? "length" : he), Reflect.ownKeys(e2);
      } };
      je = { get: Ae, set: (e2, t2) => true, deleteProperty: (e2, t2) => true };
      Ue = k({}, Le, { get: Fe, set: Be(true) });
      De = k({}, je, { get: Pe });
      He = (e2) => e2;
      We = (e2) => Reflect.getPrototypeOf(e2);
      [nt, ot, rt, st] = tt();
      lt = { get: it(false, false) };
      ct = { get: it(false, true) };
      at = { get: it(true, false) };
      ut = { get: it(true, true) };
      pt = /* @__PURE__ */ new WeakMap();
      ft = /* @__PURE__ */ new WeakMap();
      dt = /* @__PURE__ */ new WeakMap();
      ht = /* @__PURE__ */ new WeakMap();
      Nt = (e2) => M(e2) ? gt(e2) : e2;
      Et = (e2) => M(e2) ? yt(e2) : e2;
      Mt = class {
        constructor(e2, t2) {
          this.__v_isShallow = t2, this.dep = void 0, this.__v_isRef = true, this._rawValue = t2 ? e2 : wt(e2), this._value = t2 ? e2 : Nt(e2);
        }
        get value() {
          return $t(this), this._value;
        }
        set value(e2) {
          const t2 = this.__v_isShallow || Ct(e2) || xt(e2);
          e2 = t2 ? e2 : wt(e2), Z(e2, this._rawValue) && (this._rawValue = e2, this._value = t2 ? e2 : Nt(e2), Ot(this));
        }
      };
      Bt = { get: (e2, t2, n2) => It(Reflect.get(e2, t2, n2)), set: (e2, t2, n2, o2) => {
        const r2 = e2[t2];
        return Rt(r2) && !Rt(n2) ? (r2.value = n2, true) : Reflect.set(e2, t2, n2, o2);
      } };
      jt = class {
        constructor(e2) {
          this.dep = void 0, this.__v_isRef = true;
          const { get: t2, set: n2 } = e2(() => $t(this), () => Ot(this));
          this._get = t2, this._set = n2;
        }
        get value() {
          return this._get();
        }
        set value(e2) {
          this._set(e2);
        }
      };
      Ht = class {
        constructor(e2, t2, n2) {
          this._object = e2, this._key = t2, this._defaultValue = n2, this.__v_isRef = true;
        }
        get value() {
          const e2 = this._object[this._key];
          return void 0 === e2 ? this._defaultValue : e2;
        }
        set value(e2) {
          this._object[this._key] = e2;
        }
      };
      Kt = class {
        constructor(e2, t2, n2, o2) {
          this._setter = t2, this.dep = void 0, this.__v_isRef = true, this[zt] = false, this._dirty = true, this.effect = new ge(e2, () => {
            this._dirty || (this._dirty = true, Ot(this));
          }), this.effect.computed = this, this.effect.active = this._cacheable = !o2, this.__v_isReadonly = n2;
        }
        get value() {
          const e2 = wt(this);
          return $t(e2), !e2._dirty && e2._cacheable || (e2._dirty = false, e2._value = e2.effect.run()), e2._value;
        }
        set value(e2) {
          this._setter(e2);
        }
      };
      zt = "__v_isReadonly";
      Gt = [];
      en = false;
      tn = false;
      nn = [];
      on = 0;
      rn = [];
      sn = null;
      ln = 0;
      cn = Promise.resolve();
      an = null;
      gn = (e2) => null == e2.id ? 1 / 0 : e2.id;
      vn = (e2, t2) => {
        const n2 = gn(e2) - gn(t2);
        if (0 === n2) {
          if (e2.pre && !t2.pre)
            return -1;
          if (t2.pre && !e2.pre)
            return 1;
        }
        return n2;
      };
      bn = [];
      wn = null;
      Tn = null;
      On = (e2) => Rn;
      An = (e2) => {
        let t2;
        for (const n2 in e2)
          ("class" === n2 || "style" === n2 || x(n2)) && ((t2 || (t2 = {}))[n2] = e2[n2]);
        return t2;
      };
      Pn = (e2, t2) => {
        const n2 = {};
        for (const o2 in e2)
          C(o2) && o2.slice(9) in t2 || (n2[o2] = e2[o2]);
        return n2;
      };
      In = (e2) => e2.__isSuspense;
      Bn = { name: "Suspense", __isSuspense: true, process(e2, t2, n2, o2, r2, s2, i2, l2, c2, a2) {
        null == e2 ? function(e3, t3, n3, o3, r3, s3, i3, l3, c3) {
          const { p: a3, o: { createElement: u2 } } = c3, p3 = u2("div"), f2 = e3.suspense = jn(e3, r3, o3, t3, p3, n3, s3, i3, l3, c3);
          a3(null, f2.pendingBranch = e3.ssContent, p3, null, o3, f2, s3, i3), f2.deps > 0 ? (Ln(e3, "onPending"), Ln(e3, "onFallback"), a3(null, e3.ssFallback, t3, n3, o3, null, s3, i3), Hn(f2, e3.ssFallback)) : f2.resolve();
        }(t2, n2, o2, r2, s2, i2, l2, c2, a2) : function(e3, t3, n3, o3, r3, s3, i3, l3, { p: c3, um: a3, o: { createElement: u2 } }) {
          const p3 = t3.suspense = e3.suspense;
          p3.vnode = t3, t3.el = e3.el;
          const f2 = t3.ssContent, d2 = t3.ssFallback, { activeBranch: h3, pendingBranch: m2, isInFallback: g2, isHydrating: v2 } = p3;
          if (m2)
            p3.pendingBranch = f2, ts(f2, m2) ? (c3(m2, f2, p3.hiddenContainer, null, r3, p3, s3, i3, l3), p3.deps <= 0 ? p3.resolve() : g2 && (c3(h3, d2, n3, o3, r3, null, s3, i3, l3), Hn(p3, d2))) : (p3.pendingId++, v2 ? (p3.isHydrating = false, p3.activeBranch = m2) : a3(m2, r3, p3), p3.deps = 0, p3.effects.length = 0, p3.hiddenContainer = u2("div"), g2 ? (c3(null, f2, p3.hiddenContainer, null, r3, p3, s3, i3, l3), p3.deps <= 0 ? p3.resolve() : (c3(h3, d2, n3, o3, r3, null, s3, i3, l3), Hn(p3, d2))) : h3 && ts(f2, h3) ? (c3(h3, f2, n3, o3, r3, p3, s3, i3, l3), p3.resolve(true)) : (c3(null, f2, p3.hiddenContainer, null, r3, p3, s3, i3, l3), p3.deps <= 0 && p3.resolve()));
          else if (h3 && ts(f2, h3))
            c3(h3, f2, n3, o3, r3, p3, s3, i3, l3), Hn(p3, f2);
          else if (Ln(t3, "onPending"), p3.pendingBranch = f2, p3.pendingId++, c3(null, f2, p3.hiddenContainer, null, r3, p3, s3, i3, l3), p3.deps <= 0)
            p3.resolve();
          else {
            const { timeout: e4, pendingId: t4 } = p3;
            e4 > 0 ? setTimeout(() => {
              p3.pendingId === t4 && p3.fallback(d2);
            }, e4) : 0 === e4 && p3.fallback(d2);
          }
        }(e2, t2, n2, o2, r2, i2, l2, c2, a2);
      }, hydrate: function(e2, t2, n2, o2, r2, s2, i2, l2, c2) {
        const a2 = t2.suspense = jn(t2, o2, n2, e2.parentNode, document.createElement("div"), null, r2, s2, i2, l2, true), u2 = c2(e2, a2.pendingBranch = t2.ssContent, n2, a2, s2, i2);
        0 === a2.deps && a2.resolve();
        return u2;
      }, create: jn, normalize: function(e2) {
        const { shapeFlag: t2, children: n2 } = e2, o2 = 32 & t2;
        e2.ssContent = Un(o2 ? n2.default : n2), e2.ssFallback = o2 ? Un(n2.fallback) : ls(Hr);
      } };
      Jn = {};
      no = [Function, Array];
      oo = { name: "BaseTransition", props: { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: no, onEnter: no, onAfterEnter: no, onEnterCancelled: no, onBeforeLeave: no, onLeave: no, onAfterLeave: no, onLeaveCancelled: no, onBeforeAppear: no, onAppear: no, onAfterAppear: no, onAppearCancelled: no }, setup(e2, { slots: t2 }) {
        const n2 = Ss(), o2 = to();
        let r2;
        return () => {
          const s2 = t2.default && ao(t2.default(), true);
          if (!s2 || !s2.length)
            return;
          let i2 = s2[0];
          if (s2.length > 1) {
            for (const e3 of s2)
              if (e3.type !== Hr) {
                i2 = e3;
                break;
              }
          }
          const l2 = wt(e2), { mode: c2 } = l2;
          if (o2.isLeaving)
            return io(i2);
          const a2 = lo(i2);
          if (!a2)
            return io(i2);
          const u2 = so(a2, l2, o2, n2);
          co(a2, u2);
          const p3 = n2.subTree, f2 = p3 && lo(p3);
          let d2 = false;
          const { getTransitionKey: h3 } = a2.type;
          if (h3) {
            const e3 = h3();
            void 0 === r2 ? r2 = e3 : e3 !== r2 && (r2 = e3, d2 = true);
          }
          if (f2 && f2.type !== Hr && (!ts(a2, f2) || d2)) {
            const e3 = so(f2, l2, o2, n2);
            if (co(f2, e3), "out-in" === c2)
              return o2.isLeaving = true, e3.afterLeave = () => {
                o2.isLeaving = false, n2.update();
              }, io(i2);
            "in-out" === c2 && a2.type !== Hr && (e3.delayLeave = (e4, t3, n3) => {
              ro(o2, f2)[String(f2.key)] = f2, e4._leaveCb = () => {
                t3(), e4._leaveCb = void 0, delete u2.delayedLeave;
              }, u2.delayedLeave = n3;
            });
          }
          return i2;
        };
      } };
      po = (e2) => !!e2.type.__asyncLoader;
      mo = (e2) => e2.type.__isKeepAlive;
      go = { name: "KeepAlive", __isKeepAlive: true, props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] }, setup(e2, { slots: t2 }) {
        const n2 = Ss(), o2 = n2.ctx, r2 = /* @__PURE__ */ new Map(), s2 = /* @__PURE__ */ new Set();
        let i2 = null;
        const l2 = n2.suspense, { renderer: { p: c2, m: a2, um: u2, o: { createElement: p3 } } } = o2, f2 = p3("div");
        function d2(e3) {
          xo(e3), u2(e3, n2, l2, true);
        }
        function h3(e3) {
          r2.forEach((t3, n3) => {
            const o3 = Ms(t3.type);
            !o3 || e3 && e3(o3) || m2(n3);
          });
        }
        function m2(e3) {
          const t3 = r2.get(e3);
          i2 && t3.type === i2.type ? i2 && xo(i2) : d2(t3), r2.delete(e3), s2.delete(e3);
        }
        o2.activate = (e3, t3, n3, o3, r3) => {
          const s3 = e3.component;
          a2(e3, t3, n3, 0, l2), c2(s3.vnode, e3, t3, n3, s3, l2, o3, e3.slotScopeIds, r3), Or(() => {
            s3.isDeactivated = false, s3.a && Y(s3.a);
            const t4 = e3.props && e3.props.onVnodeMounted;
            t4 && vs(t4, s3.parent, e3);
          }, l2);
        }, o2.deactivate = (e3) => {
          const t3 = e3.component;
          a2(e3, f2, null, 1, l2), Or(() => {
            t3.da && Y(t3.da);
            const n3 = e3.props && e3.props.onVnodeUnmounted;
            n3 && vs(n3, t3.parent, e3), t3.isDeactivated = true;
          }, l2);
        }, Zn(() => [e2.include, e2.exclude], ([e3, t3]) => {
          e3 && h3((t4) => vo(e3, t4)), t3 && h3((e4) => !vo(t3, e4));
        }, { flush: "post", deep: true });
        let g2 = null;
        const v2 = () => {
          null != g2 && r2.set(g2, Co(n2.subTree));
        };
        return No(v2), $o(v2), Oo(() => {
          r2.forEach((e3) => {
            const { subTree: t3, suspense: o3 } = n2, r3 = Co(t3);
            if (e3.type !== r3.type)
              d2(e3);
            else {
              xo(r3);
              const e4 = r3.component.da;
              e4 && Or(e4, o3);
            }
          });
        }), () => {
          if (g2 = null, !t2.default)
            return null;
          const n3 = t2.default(), o3 = n3[0];
          if (n3.length > 1)
            return i2 = null, n3;
          if (!(es(o3) && (4 & o3.shapeFlag || 128 & o3.shapeFlag)))
            return i2 = null, o3;
          let l3 = Co(o3);
          const c3 = l3.type, a3 = Ms(po(l3) ? l3.type.__asyncResolved || {} : c3), { include: u3, exclude: p4, max: f3 } = e2;
          if (u3 && (!a3 || !vo(u3, a3)) || p4 && a3 && vo(p4, a3))
            return i2 = l3, o3;
          const d3 = null == l3.key ? c3 : l3.key, h4 = r2.get(d3);
          return l3.el && (l3 = as(l3), 128 & o3.shapeFlag && (o3.ssContent = l3)), g2 = d3, h4 ? (l3.el = h4.el, l3.component = h4.component, l3.transition && co(l3, l3.transition), l3.shapeFlag |= 512, s2.delete(d3), s2.add(d3)) : (s2.add(d3), f3 && s2.size > parseInt(f3, 10) && m2(s2.values().next().value)), l3.shapeFlag |= 256, i2 = l3, In(o3.type) ? o3 : l3;
        };
      } };
      wo = (e2) => (t2, n2 = bs) => (!Ns || "sp" === e2) && ko(e2, (...e3) => t2(...e3), n2);
      To = wo("bm");
      No = wo("m");
      Eo = wo("bu");
      $o = wo("u");
      Oo = wo("bum");
      Ro = wo("um");
      Fo = wo("sp");
      Ao = wo("rtg");
      Po = wo("rtc");
      Lo = Symbol();
      Jo = (e2) => e2 ? ks(e2) ? As(e2) || e2.proxy : Jo(e2.parent) : null;
      Zo = k(/* @__PURE__ */ Object.create(null), { $: (e2) => e2, $el: (e2) => e2.vnode.el, $data: (e2) => e2.data, $props: (e2) => e2.props, $attrs: (e2) => e2.attrs, $slots: (e2) => e2.slots, $refs: (e2) => e2.refs, $parent: (e2) => Jo(e2.parent), $root: (e2) => Jo(e2.root), $emit: (e2) => e2.emit, $options: (e2) => or(e2), $forceUpdate: (e2) => e2.f || (e2.f = () => pn(e2.update)), $nextTick: (e2) => e2.n || (e2.n = un.bind(e2.proxy)), $watch: (e2) => Qn.bind(e2) });
      Yo = { get({ _: e2 }, t2) {
        const { ctx: n2, setupState: o2, data: r2, props: s2, accessCache: i2, type: l2, appContext: c2 } = e2;
        let a2;
        if ("$" !== t2[0]) {
          const l3 = i2[t2];
          if (void 0 !== l3)
            switch (l3) {
              case 1:
                return o2[t2];
              case 2:
                return r2[t2];
              case 4:
                return n2[t2];
              case 3:
                return s2[t2];
            }
          else {
            if (o2 !== v && N(o2, t2))
              return i2[t2] = 1, o2[t2];
            if (r2 !== v && N(r2, t2))
              return i2[t2] = 2, r2[t2];
            if ((a2 = e2.propsOptions[0]) && N(a2, t2))
              return i2[t2] = 3, s2[t2];
            if (n2 !== v && N(n2, t2))
              return i2[t2] = 4, n2[t2];
            Xo && (i2[t2] = 0);
          }
        }
        const u2 = Zo[t2];
        let p3, f2;
        return u2 ? ("$attrs" === t2 && ke(e2, 0, t2), u2(e2)) : (p3 = l2.__cssModules) && (p3 = p3[t2]) ? p3 : n2 !== v && N(n2, t2) ? (i2[t2] = 4, n2[t2]) : (f2 = c2.config.globalProperties, N(f2, t2) ? f2[t2] : void 0);
      }, set({ _: e2 }, t2, n2) {
        const { data: o2, setupState: r2, ctx: s2 } = e2;
        return r2 !== v && N(r2, t2) ? (r2[t2] = n2, true) : o2 !== v && N(o2, t2) ? (o2[t2] = n2, true) : !N(e2.props, t2) && (("$" !== t2[0] || !(t2.slice(1) in e2)) && (s2[t2] = n2, true));
      }, has({ _: { data: e2, setupState: t2, accessCache: n2, ctx: o2, appContext: r2, propsOptions: s2 } }, i2) {
        let l2;
        return !!n2[i2] || e2 !== v && N(e2, i2) || t2 !== v && N(t2, i2) || (l2 = s2[0]) && N(l2, i2) || N(o2, i2) || N(Zo, i2) || N(r2.config.globalProperties, i2);
      }, defineProperty(e2, t2, n2) {
        return null != n2.get ? e2._.accessCache[t2] = 0 : N(n2, "value") && this.set(e2, t2, n2.value, null), Reflect.defineProperty(e2, t2, n2);
      } };
      Qo = k({}, Yo, { get(e2, t2) {
        if (t2 !== Symbol.unscopables)
          return Yo.get(e2, t2, e2);
      }, has: (e2, n2) => "_" !== n2[0] && !t(n2) });
      Xo = true;
      sr = { data: ir, props: ar, emits: ar, methods: ar, computed: ar, beforeCreate: cr, created: cr, beforeMount: cr, mounted: cr, beforeUpdate: cr, updated: cr, beforeDestroy: cr, beforeUnmount: cr, destroyed: cr, unmounted: cr, activated: cr, deactivated: cr, errorCaptured: cr, serverPrefetch: cr, components: ar, directives: ar, watch: function(e2, t2) {
        if (!e2)
          return t2;
        if (!t2)
          return e2;
        const n2 = k(/* @__PURE__ */ Object.create(null), e2);
        for (const o2 in t2)
          n2[o2] = cr(e2[o2], t2[o2]);
        return n2;
      }, provide: ir, inject: function(e2, t2) {
        return ar(lr(e2), lr(t2));
      } };
      vr = (e2) => "_" === e2[0] || "$stable" === e2;
      yr = (e2) => E(e2) ? e2.map(ds) : [ds(e2)];
      _r = (e2, t2, n2) => {
        if (t2._n)
          return t2;
        const o2 = Rn((...e3) => yr(t2(...e3)), n2);
        return o2._c = false, o2;
      };
      br = (e2, t2, n2) => {
        const o2 = e2._ctx;
        for (const r2 in e2) {
          if (vr(r2))
            continue;
          const n3 = e2[r2];
          if (F(n3))
            t2[r2] = _r(0, n3, o2);
          else if (null != n3) {
            const e3 = yr(n3);
            t2[r2] = () => e3;
          }
        }
      };
      Sr = (e2, t2) => {
        const n2 = yr(t2);
        e2.slots.default = () => n2;
      };
      Cr = 0;
      Tr = false;
      Nr = (e2) => /svg/.test(e2.namespaceURI) && "foreignObject" !== e2.tagName;
      Er = (e2) => 8 === e2.nodeType;
      Or = Dn;
      Vr = (e2) => e2 && (e2.disabled || "" === e2.disabled);
      Ir = (e2) => "undefined" != typeof SVGElement && e2 instanceof SVGElement;
      Br = (e2, t2) => {
        const n2 = e2 && e2.to;
        if (A(n2)) {
          if (t2) {
            return t2(n2);
          }
          return null;
        }
        return n2;
      };
      jr = { __isTeleport: true, process(e2, t2, n2, o2, r2, s2, i2, l2, c2, a2) {
        const { mc: u2, pc: p3, pbc: f2, o: { insert: d2, querySelector: h3, createText: m2 } } = a2, g2 = Vr(t2.props);
        let { shapeFlag: v2, children: y2, dynamicChildren: _2 } = t2;
        if (null == e2) {
          const e3 = t2.el = m2(""), a3 = t2.anchor = m2("");
          d2(e3, n2, o2), d2(a3, n2, o2);
          const p4 = t2.target = Br(t2.props, h3), f3 = t2.targetAnchor = m2("");
          p4 && (d2(f3, p4), i2 = i2 || Ir(p4));
          const _3 = (e4, t3) => {
            16 & v2 && u2(y2, e4, t3, r2, s2, i2, l2, c2);
          };
          g2 ? _3(n2, a3) : p4 && _3(p4, f3);
        } else {
          t2.el = e2.el;
          const o3 = t2.anchor = e2.anchor, u3 = t2.target = e2.target, d3 = t2.targetAnchor = e2.targetAnchor, m3 = Vr(e2.props), v3 = m3 ? n2 : u3, y3 = m3 ? o3 : d3;
          if (i2 = i2 || Ir(u3), _2 ? (f2(e2.dynamicChildren, _2, v3, r2, s2, i2, l2), Mr(e2, t2, true)) : c2 || p3(e2, t2, v3, y3, r2, s2, i2, l2, false), g2)
            m3 || Lr(t2, n2, o3, a2, 1);
          else if ((t2.props && t2.props.to) !== (e2.props && e2.props.to)) {
            const e3 = t2.target = Br(t2.props, h3);
            e3 && Lr(t2, e3, null, a2, 0);
          } else
            m3 && Lr(t2, u3, d3, a2, 1);
        }
      }, remove(e2, t2, n2, o2, { um: r2, o: { remove: s2 } }, i2) {
        const { shapeFlag: l2, children: c2, anchor: a2, targetAnchor: u2, target: p3, props: f2 } = e2;
        if (p3 && s2(u2), (i2 || !Vr(f2)) && (s2(a2), 16 & l2))
          for (let d2 = 0; d2 < c2.length; d2++) {
            const e3 = c2[d2];
            r2(e3, t2, n2, true, !!e3.dynamicChildren);
          }
      }, move: Lr, hydrate: function(e2, t2, n2, o2, r2, s2, { o: { nextSibling: i2, parentNode: l2, querySelector: c2 } }, a2) {
        const u2 = t2.target = Br(t2.props, c2);
        if (u2) {
          const c3 = u2._lpa || u2.firstChild;
          if (16 & t2.shapeFlag)
            if (Vr(t2.props))
              t2.anchor = a2(i2(e2), t2, l2(e2), n2, o2, r2, s2), t2.targetAnchor = c3;
            else {
              t2.anchor = i2(e2);
              let l3 = c3;
              for (; l3; )
                if (l3 = i2(l3), l3 && 8 === l3.nodeType && "teleport anchor" === l3.data) {
                  t2.targetAnchor = l3, u2._lpa = t2.targetAnchor && i2(t2.targetAnchor);
                  break;
                }
              a2(c3, t2, u2, n2, o2, r2, s2);
            }
        }
        return t2.anchor && i2(t2.anchor);
      } };
      Ur = Symbol(void 0);
      Dr = Symbol(void 0);
      Hr = Symbol(void 0);
      Wr = Symbol(void 0);
      zr = [];
      Kr = null;
      Jr = 1;
      os = "__vInternal";
      rs = ({ key: e2 }) => null != e2 ? e2 : null;
      ss = ({ ref: e2, ref_key: t2, ref_for: n2 }) => null != e2 ? A(e2) || Rt(e2) || F(e2) ? { i: wn, r: e2, k: t2, f: !!n2 } : e2 : null;
      ls = function(e2, t2 = null, n2 = null, o2 = 0, s2 = null, i2 = false) {
        e2 && e2 !== Lo || (e2 = Hr);
        if (es(e2)) {
          const o3 = as(e2, t2, true);
          return n2 && ms(o3, n2), Jr > 0 && !i2 && Kr && (6 & o3.shapeFlag ? Kr[Kr.indexOf(e2)] = o3 : Kr.push(o3)), o3.patchFlag |= -2, o3;
        }
        l2 = e2, F(l2) && "__vccOpts" in l2 && (e2 = e2.__vccOpts);
        var l2;
        if (t2) {
          t2 = cs(t2);
          let { class: e3, style: n3 } = t2;
          e3 && !A(e3) && (t2.class = c(e3)), M(n3) && (kt(n3) && !E(n3) && (n3 = k({}, n3)), t2.style = r(n3));
        }
        const a2 = A(e2) ? 1 : In(e2) ? 128 : ((e3) => e3.__isTeleport)(e2) ? 64 : M(e2) ? 4 : F(e2) ? 2 : 0;
        return is(e2, t2, n2, o2, s2, a2, i2, true);
      };
      ys = xr();
      _s = 0;
      bs = null;
      Ss = () => bs || wn;
      xs = (e2) => {
        bs = e2, e2.scope.on();
      };
      Cs = () => {
        bs && bs.scope.off(), bs = null;
      };
      Ns = false;
      Os = () => !ws;
      Ps = /(?:^|[-_])(\w)/g;
      Is = (e2, t2) => function(e3, t3, n2 = false) {
        let o2, r2;
        const s2 = F(e3);
        return s2 ? (o2 = e3, r2 = _) : (o2 = e3.get, r2 = e3.set), new Kt(o2, r2, s2 || !r2, n2);
      }(e2, 0, Ns);
      Js = Symbol("");
      Zs = () => {
        {
          const e2 = zn(Js);
          return e2 || qt("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e2;
        }
      };
      ei = "3.2.41";
      ti = null;
      ni = null;
      oi = null;
      ri = "undefined" != typeof document ? document : null;
      si = ri && ri.createElement("template");
      ii = { insert: (e2, t2, n2) => {
        t2.insertBefore(e2, n2 || null);
      }, remove: (e2) => {
        const t2 = e2.parentNode;
        t2 && t2.removeChild(e2);
      }, createElement: (e2, t2, n2, o2) => {
        const r2 = t2 ? ri.createElementNS("http://www.w3.org/2000/svg", e2) : ri.createElement(e2, n2 ? { is: n2 } : void 0);
        return "select" === e2 && o2 && null != o2.multiple && r2.setAttribute("multiple", o2.multiple), r2;
      }, createText: (e2) => ri.createTextNode(e2), createComment: (e2) => ri.createComment(e2), setText: (e2, t2) => {
        e2.nodeValue = t2;
      }, setElementText: (e2, t2) => {
        e2.textContent = t2;
      }, parentNode: (e2) => e2.parentNode, nextSibling: (e2) => e2.nextSibling, querySelector: (e2) => ri.querySelector(e2), setScopeId(e2, t2) {
        e2.setAttribute(t2, "");
      }, insertStaticContent(e2, t2, n2, o2, r2, s2) {
        const i2 = n2 ? n2.previousSibling : t2.lastChild;
        if (r2 && (r2 === s2 || r2.nextSibling))
          for (; t2.insertBefore(r2.cloneNode(true), n2), r2 !== s2 && (r2 = r2.nextSibling); )
            ;
        else {
          si.innerHTML = o2 ? `<svg>${e2}</svg>` : e2;
          const r3 = si.content;
          if (o2) {
            const e3 = r3.firstChild;
            for (; e3.firstChild; )
              r3.appendChild(e3.firstChild);
            r3.removeChild(e3);
          }
          t2.insertBefore(r3, n2);
        }
        return [i2 ? i2.nextSibling : t2.firstChild, n2 ? n2.previousSibling : t2.lastChild];
      } };
      li = /\s*!important$/;
      ai = ["Webkit", "Moz", "ms"];
      ui = {};
      pi = "http://www.w3.org/1999/xlink";
      hi = /(?:Once|Passive|Capture)$/;
      mi = 0;
      gi = Promise.resolve();
      vi = /^on[a-z]/;
      _i = (e2) => yi(e2, bl);
      bi = "undefined" != typeof HTMLElement ? HTMLElement : class {
      };
      Si = class extends bi {
        constructor(e2, t2 = {}, n2) {
          super(), this._def = e2, this._props = t2, this._instance = null, this._connected = false, this._resolved = false, this._numberProps = null, this.shadowRoot && n2 ? n2(this._createVNode(), this.shadowRoot) : this.attachShadow({ mode: "open" });
        }
        connectedCallback() {
          this._connected = true, this._instance || this._resolveDef();
        }
        disconnectedCallback() {
          this._connected = false, un(() => {
            this._connected || (_l(null, this.shadowRoot), this._instance = null);
          });
        }
        _resolveDef() {
          if (this._resolved)
            return;
          this._resolved = true;
          for (let n2 = 0; n2 < this.attributes.length; n2++)
            this._setAttr(this.attributes[n2].name);
          new MutationObserver((e3) => {
            for (const t3 of e3)
              this._setAttr(t3.attributeName);
          }).observe(this, { attributes: true });
          const e2 = (e3) => {
            const { props: t3, styles: n2 } = e3, o2 = !E(t3), r2 = t3 ? o2 ? Object.keys(t3) : t3 : [];
            let s2;
            if (o2)
              for (const i2 in this._props) {
                const e4 = t3[i2];
                (e4 === Number || e4 && e4.type === Number) && (this._props[i2] = X(this._props[i2]), (s2 || (s2 = /* @__PURE__ */ Object.create(null)))[i2] = true);
              }
            this._numberProps = s2;
            for (const i2 of Object.keys(this))
              "_" !== i2[0] && this._setProp(i2, this[i2], true, false);
            for (const i2 of r2.map(z))
              Object.defineProperty(this, i2, { get() {
                return this._getProp(i2);
              }, set(e4) {
                this._setProp(i2, e4);
              } });
            this._applyStyles(n2), this._update();
          }, t2 = this._def.__asyncLoader;
          t2 ? t2().then(e2) : e2(this._def);
        }
        _setAttr(e2) {
          let t2 = this.getAttribute(e2);
          this._numberProps && this._numberProps[e2] && (t2 = X(t2)), this._setProp(z(e2), t2, false);
        }
        _getProp(e2) {
          return this._props[e2];
        }
        _setProp(e2, t2, n2 = true, o2 = true) {
          t2 !== this._props[e2] && (this._props[e2] = t2, o2 && this._instance && this._update(), n2 && (true === t2 ? this.setAttribute(G(e2), "") : "string" == typeof t2 || "number" == typeof t2 ? this.setAttribute(G(e2), t2 + "") : t2 || this.removeAttribute(G(e2))));
        }
        _update() {
          _l(this._createVNode(), this.shadowRoot);
        }
        _createVNode() {
          const e2 = ls(this._def, k({}, this._props));
          return this._instance || (e2.ce = (e3) => {
            this._instance = e3, e3.isCE = true, e3.emit = (e4, ...t3) => {
              this.dispatchEvent(new CustomEvent(e4, { detail: t3 }));
            };
            let t2 = this;
            for (; t2 = t2 && (t2.parentNode || t2.host); )
              if (t2 instanceof Si) {
                e3.parent = t2._instance;
                break;
              }
          }), e2;
        }
        _applyStyles(e2) {
          e2 && e2.forEach((e3) => {
            const t2 = document.createElement("style");
            t2.textContent = e3, this.shadowRoot.appendChild(t2);
          });
        }
      };
      Ti = (e2, { slots: t2 }) => qs(oo, Ri(e2), t2);
      Ti.displayName = "Transition";
      Ni = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String };
      Ei = Ti.props = k({}, oo.props, Ni);
      $i = (e2, t2 = []) => {
        E(e2) ? e2.forEach((e3) => e3(...t2)) : e2 && e2(...t2);
      };
      Oi = (e2) => !!e2 && (E(e2) ? e2.some((e3) => e3.length > 1) : e2.length > 1);
      Vi = 0;
      Di = /* @__PURE__ */ new WeakMap();
      Hi = /* @__PURE__ */ new WeakMap();
      Wi = { name: "TransitionGroup", props: k({}, Ei, { tag: String, moveClass: String }), setup(e2, { slots: t2 }) {
        const n2 = Ss(), o2 = to();
        let r2, s2;
        return $o(() => {
          if (!r2.length)
            return;
          const t3 = e2.moveClass || `${e2.name || "v"}-move`;
          if (!function(e3, t4, n3) {
            const o4 = e3.cloneNode();
            e3._vtc && e3._vtc.forEach((e4) => {
              e4.split(/\s+/).forEach((e5) => e5 && o4.classList.remove(e5));
            });
            n3.split(/\s+/).forEach((e4) => e4 && o4.classList.add(e4)), o4.style.display = "none";
            const r3 = 1 === t4.nodeType ? t4 : t4.parentNode;
            r3.appendChild(o4);
            const { hasTransform: s3 } = Bi(o4);
            return r3.removeChild(o4), s3;
          }(r2[0].el, n2.vnode.el, t3))
            return;
          r2.forEach(zi), r2.forEach(Ki);
          const o3 = r2.filter(Gi);
          Ui(), o3.forEach((e3) => {
            const n3 = e3.el, o4 = n3.style;
            Ai(n3, t3), o4.transform = o4.webkitTransform = o4.transitionDuration = "";
            const r3 = n3._moveCb = (e4) => {
              e4 && e4.target !== n3 || e4 && !/transform$/.test(e4.propertyName) || (n3.removeEventListener("transitionend", r3), n3._moveCb = null, Pi(n3, t3));
            };
            n3.addEventListener("transitionend", r3);
          });
        }), () => {
          const i2 = wt(e2), l2 = Ri(i2);
          let c2 = i2.tag || Ur;
          r2 = s2, s2 = t2.default ? ao(t2.default()) : [];
          for (let e3 = 0; e3 < s2.length; e3++) {
            const t3 = s2[e3];
            null != t3.key && co(t3, so(t3, l2, o2, n2));
          }
          if (r2)
            for (let e3 = 0; e3 < r2.length; e3++) {
              const t3 = r2[e3];
              co(t3, so(t3, l2, o2, n2)), Di.set(t3, t3.el.getBoundingClientRect());
            }
          return ls(c2, null, s2);
        };
      } };
      qi = (e2) => {
        const t2 = e2.props["onUpdate:modelValue"] || false;
        return E(t2) ? (e3) => Y(t2, e3) : t2;
      };
      Yi = { created(e2, { modifiers: { lazy: t2, trim: n2, number: o2 } }, r2) {
        e2._assign = qi(r2);
        const s2 = o2 || r2.props && "number" === r2.props.type;
        fi(e2, t2 ? "change" : "input", (t3) => {
          if (t3.target.composing)
            return;
          let o3 = e2.value;
          n2 && (o3 = o3.trim()), s2 && (o3 = X(o3)), e2._assign(o3);
        }), n2 && fi(e2, "change", () => {
          e2.value = e2.value.trim();
        }), t2 || (fi(e2, "compositionstart", Ji), fi(e2, "compositionend", Zi), fi(e2, "change", Zi));
      }, mounted(e2, { value: t2 }) {
        e2.value = null == t2 ? "" : t2;
      }, beforeUpdate(e2, { value: t2, modifiers: { lazy: n2, trim: o2, number: r2 } }, s2) {
        if (e2._assign = qi(s2), e2.composing)
          return;
        if (document.activeElement === e2 && "range" !== e2.type) {
          if (n2)
            return;
          if (o2 && e2.value.trim() === t2)
            return;
          if ((r2 || "number" === e2.type) && X(e2.value) === t2)
            return;
        }
        const i2 = null == t2 ? "" : t2;
        e2.value !== i2 && (e2.value = i2);
      } };
      Qi = { deep: true, created(e2, t2, n2) {
        e2._assign = qi(n2), fi(e2, "change", () => {
          const t3 = e2._modelValue, n3 = ol(e2), o2 = e2.checked, r2 = e2._assign;
          if (E(t3)) {
            const e3 = h(t3, n3), s2 = -1 !== e3;
            if (o2 && !s2)
              r2(t3.concat(n3));
            else if (!o2 && s2) {
              const n4 = [...t3];
              n4.splice(e3, 1), r2(n4);
            }
          } else if (O(t3)) {
            const e3 = new Set(t3);
            o2 ? e3.add(n3) : e3.delete(n3), r2(e3);
          } else
            r2(rl(e2, o2));
        });
      }, mounted: Xi, beforeUpdate(e2, t2, n2) {
        e2._assign = qi(n2), Xi(e2, t2, n2);
      } };
      el = { created(e2, { value: t2 }, n2) {
        e2.checked = d(t2, n2.props.value), e2._assign = qi(n2), fi(e2, "change", () => {
          e2._assign(ol(e2));
        });
      }, beforeUpdate(e2, { value: t2, oldValue: n2 }, o2) {
        e2._assign = qi(o2), t2 !== n2 && (e2.checked = d(t2, o2.props.value));
      } };
      tl = { deep: true, created(e2, { value: t2, modifiers: { number: n2 } }, o2) {
        const r2 = O(t2);
        fi(e2, "change", () => {
          const t3 = Array.prototype.filter.call(e2.options, (e3) => e3.selected).map((e3) => n2 ? X(ol(e3)) : ol(e3));
          e2._assign(e2.multiple ? r2 ? new Set(t3) : t3 : t3[0]);
        }), e2._assign = qi(o2);
      }, mounted(e2, { value: t2 }) {
        nl(e2, t2);
      }, beforeUpdate(e2, t2, n2) {
        e2._assign = qi(n2);
      }, updated(e2, { value: t2 }) {
        nl(e2, t2);
      } };
      sl = { created(e2, t2, n2) {
        il(e2, t2, n2, null, "created");
      }, mounted(e2, t2, n2) {
        il(e2, t2, n2, null, "mounted");
      }, beforeUpdate(e2, t2, n2, o2) {
        il(e2, t2, n2, o2, "beforeUpdate");
      }, updated(e2, t2, n2, o2) {
        il(e2, t2, n2, o2, "updated");
      } };
      ll = ["ctrl", "shift", "alt", "meta"];
      cl = { stop: (e2) => e2.stopPropagation(), prevent: (e2) => e2.preventDefault(), self: (e2) => e2.target !== e2.currentTarget, ctrl: (e2) => !e2.ctrlKey, shift: (e2) => !e2.shiftKey, alt: (e2) => !e2.altKey, meta: (e2) => !e2.metaKey, left: (e2) => "button" in e2 && 0 !== e2.button, middle: (e2) => "button" in e2 && 1 !== e2.button, right: (e2) => "button" in e2 && 2 !== e2.button, exact: (e2, t2) => ll.some((n2) => e2[`${n2}Key`] && !t2.includes(n2)) };
      al = (e2, t2) => (n2, ...o2) => {
        for (let e3 = 0; e3 < t2.length; e3++) {
          const o3 = cl[t2[e3]];
          if (o3 && o3(n2, t2))
            return;
        }
        return e2(n2, ...o2);
      };
      ul = { esc: "escape", space: " ", up: "arrow-up", left: "arrow-left", right: "arrow-right", down: "arrow-down", delete: "backspace" };
      pl = (e2, t2) => (n2) => {
        if (!("key" in n2))
          return;
        const o2 = G(n2.key);
        return t2.some((e3) => e3 === o2 || ul[e3] === o2) ? e2(n2) : void 0;
      };
      fl = { beforeMount(e2, { value: t2 }, { transition: n2 }) {
        e2._vod = "none" === e2.style.display ? "" : e2.style.display, n2 && t2 ? n2.beforeEnter(e2) : dl(e2, t2);
      }, mounted(e2, { value: t2 }, { transition: n2 }) {
        n2 && t2 && n2.enter(e2);
      }, updated(e2, { value: t2, oldValue: n2 }, { transition: o2 }) {
        !t2 != !n2 && (o2 ? t2 ? (o2.beforeEnter(e2), dl(e2, true), o2.enter(e2)) : o2.leave(e2, () => {
          dl(e2, false);
        }) : dl(e2, t2));
      }, beforeUnmount(e2, { value: t2 }) {
        dl(e2, t2);
      } };
      hl = k({ patchProp: (e2, t2, r2, s2, i2 = false, l2, c2, a2, u2) => {
        "class" === t2 ? function(e3, t3, n2) {
          const o2 = e3._vtc;
          o2 && (t3 = (t3 ? [t3, ...o2] : [...o2]).join(" ")), null == t3 ? e3.removeAttribute("class") : n2 ? e3.setAttribute("class", t3) : e3.className = t3;
        }(e2, s2, i2) : "style" === t2 ? function(e3, t3, n2) {
          const o2 = e3.style, r3 = A(n2);
          if (n2 && !r3) {
            for (const e4 in n2)
              ci(o2, e4, n2[e4]);
            if (t3 && !A(t3))
              for (const e4 in t3)
                null == n2[e4] && ci(o2, e4, "");
          } else {
            const s3 = o2.display;
            r3 ? t3 !== n2 && (o2.cssText = n2) : t3 && e3.removeAttribute("style"), "_vod" in e3 && (o2.display = s3);
          }
        }(e2, r2, s2) : x(t2) ? C(t2) || di(e2, t2, 0, s2, c2) : ("." === t2[0] ? (t2 = t2.slice(1), 1) : "^" === t2[0] ? (t2 = t2.slice(1), 0) : function(e3, t3, n2, o2) {
          if (o2)
            return "innerHTML" === t3 || "textContent" === t3 || !!(t3 in e3 && vi.test(t3) && F(n2));
          if ("spellcheck" === t3 || "draggable" === t3 || "translate" === t3)
            return false;
          if ("form" === t3)
            return false;
          if ("list" === t3 && "INPUT" === e3.tagName)
            return false;
          if ("type" === t3 && "TEXTAREA" === e3.tagName)
            return false;
          if (vi.test(t3) && A(n2))
            return false;
          return t3 in e3;
        }(e2, t2, s2, i2)) ? function(e3, t3, n2, r3, s3, i3, l3) {
          if ("innerHTML" === t3 || "textContent" === t3)
            return r3 && l3(r3, s3, i3), void (e3[t3] = null == n2 ? "" : n2);
          if ("value" === t3 && "PROGRESS" !== e3.tagName && !e3.tagName.includes("-")) {
            e3._value = n2;
            const o2 = null == n2 ? "" : n2;
            return e3.value === o2 && "OPTION" !== e3.tagName || (e3.value = o2), void (null == n2 && e3.removeAttribute(t3));
          }
          let c3 = false;
          if ("" === n2 || null == n2) {
            const r4 = typeof e3[t3];
            "boolean" === r4 ? n2 = o(n2) : null == n2 && "string" === r4 ? (n2 = "", c3 = true) : "number" === r4 && (n2 = 0, c3 = true);
          }
          try {
            e3[t3] = n2;
          } catch (a3) {
          }
          c3 && e3.removeAttribute(t3);
        }(e2, t2, s2, l2, c2, a2, u2) : ("true-value" === t2 ? e2._trueValue = s2 : "false-value" === t2 && (e2._falseValue = s2), function(e3, t3, r3, s3, i3) {
          if (s3 && t3.startsWith("xlink:"))
            null == r3 ? e3.removeAttributeNS(pi, t3.slice(6, t3.length)) : e3.setAttributeNS(pi, t3, r3);
          else {
            const s4 = n(t3);
            null == r3 || s4 && !o(r3) ? e3.removeAttribute(t3) : e3.setAttribute(t3, s4 ? "" : r3);
          }
        }(e2, t2, s2, i2));
      } }, ii);
      gl = false;
      _l = (...e2) => {
        vl().render(...e2);
      };
      bl = (...e2) => {
        yl().hydrate(...e2);
      };
      Sl = (...e2) => {
        const t2 = vl().createApp(...e2), { mount: n2 } = t2;
        return t2.mount = (e3) => {
          const o2 = Cl(e3);
          if (!o2)
            return;
          const r2 = t2._component;
          F(r2) || r2.render || r2.template || (r2.template = o2.innerHTML), o2.innerHTML = "";
          const s2 = n2(o2, false, o2 instanceof SVGElement);
          return o2 instanceof Element && (o2.removeAttribute("v-cloak"), o2.setAttribute("data-v-app", "")), s2;
        }, t2;
      };
      xl = (...e2) => {
        const t2 = yl().createApp(...e2), { mount: n2 } = t2;
        return t2.mount = (e3) => {
          const t3 = Cl(e3);
          if (t3)
            return n2(t3, true, t3 instanceof SVGElement);
        }, t2;
      };
      kl = _;
      wl = Object.freeze({ __proto__: null, render: _l, hydrate: bl, createApp: Sl, createSSRApp: xl, initDirectivesForSSR: kl, defineCustomElement: yi, defineSSRCustomElement: _i, VueElement: Si, useCssModule: xi, useCssVars: Ci, Transition: Ti, TransitionGroup: Wi, vModelText: Yi, vModelCheckbox: Qi, vModelRadio: el, vModelSelect: tl, vModelDynamic: sl, withModifiers: al, withKeys: pl, vShow: fl, reactive: gt, ref: Ft, readonly: yt, unref: It, proxyRefs: Lt, isRef: Rt, toRef: Wt, toRefs: Dt, isProxy: kt, isReactive: St, isReadonly: xt, isShallow: Ct, customRef: Ut, triggerRef: Vt, shallowRef: At, shallowReactive: vt, shallowReadonly: _t, markRaw: Tt, toRaw: wt, effect: ye, stop: _e, ReactiveEffect: ge, effectScope: oe, EffectScope: ne, getCurrentScope: se, onScopeDispose: ie, computed: Is, watch: Zn, watchEffect: Kn, watchPostEffect: Gn, watchSyncEffect: qn, onBeforeMount: To, onMounted: No, onBeforeUpdate: Eo, onUpdated: $o, onBeforeUnmount: Oo, onUnmounted: Ro, onActivated: yo, onDeactivated: _o, onRenderTracked: Po, onRenderTriggered: Ao, onErrorCaptured: Mo, onServerPrefetch: Fo, provide: Wn, inject: zn, nextTick: un, defineComponent: uo, defineAsyncComponent: fo, useAttrs: Hs, useSlots: Ds, defineProps: Bs, defineEmits: Ls, defineExpose: js, withDefaults: Us, mergeDefaults: zs, createPropsRestProxy: Ks, withAsyncContext: Gs, getCurrentInstance: Ss, h: qs, createVNode: ls, cloneVNode: as, mergeProps: gs, isVNode: es, Fragment: Ur, Text: Dr, Comment: Hr, Static: Wr, Teleport: jr, Suspense: Bn, KeepAlive: go, BaseTransition: oo, withDirectives: Vo, useSSRContext: Zs, ssrContextKey: Js, createRenderer: Rr, createHydrationRenderer: Fr, queuePostFlushCb: dn, warn: qt, handleError: Xt, callWithErrorHandling: Yt, callWithAsyncErrorHandling: Qt, resolveComponent: Bo, resolveDirective: Uo, resolveDynamicComponent: jo, registerRuntimeCompiler: $s, isRuntimeOnly: Os, useTransitionState: to, resolveTransitionHooks: so, setTransitionHooks: co, getTransitionRawChildren: ao, initCustomFormatter: Ys, get devtools() {
        return _n;
      }, setDevtoolsHook: Sn, withCtx: Rn, pushScopeId: En, popScopeId: $n, withScopeId: On, renderList: Wo, toHandlers: qo, renderSlot: Ko, createSlots: zo, withMemo: Qs, isMemoSame: Xs, openBlock: Gr, createBlock: Xr, setBlockTracking: Zr, createTextVNode: us, createCommentVNode: fs, createStaticVNode: ps, createElementVNode: is, createElementBlock: Qr, guardReactiveProps: cs, toDisplayString: m, camelize: z, capitalize: q, toHandlerKey: J, normalizeProps: a, normalizeClass: c, normalizeStyle: r, transformVNodeArgs: ns, version: ei, ssrUtils: null, resolveFilter: null, compatUtils: null });
      $l = Symbol("");
      Ol = Symbol("");
      Rl = Symbol("");
      Fl = Symbol("");
      Al = Symbol("");
      Pl = Symbol("");
      Ml = Symbol("");
      Vl = Symbol("");
      Il = Symbol("");
      Bl = Symbol("");
      Ll = Symbol("");
      jl = Symbol("");
      Ul = Symbol("");
      Dl = Symbol("");
      Hl = Symbol("");
      Wl = Symbol("");
      zl = Symbol("");
      Kl = Symbol("");
      Gl = Symbol("");
      ql = Symbol("");
      Jl = Symbol("");
      Zl = Symbol("");
      Yl = Symbol("");
      Ql = Symbol("");
      Xl = Symbol("");
      ec = Symbol("");
      tc = Symbol("");
      nc = Symbol("");
      oc = Symbol("");
      rc = Symbol("");
      sc = Symbol("");
      ic = Symbol("");
      lc = Symbol("");
      cc = Symbol("");
      ac = Symbol("");
      uc = Symbol("");
      pc = Symbol("");
      fc = Symbol("");
      dc = Symbol("");
      hc = { [$l]: "Fragment", [Ol]: "Teleport", [Rl]: "Suspense", [Fl]: "KeepAlive", [Al]: "BaseTransition", [Pl]: "openBlock", [Ml]: "createBlock", [Vl]: "createElementBlock", [Il]: "createVNode", [Bl]: "createElementVNode", [Ll]: "createCommentVNode", [jl]: "createTextVNode", [Ul]: "createStaticVNode", [Dl]: "resolveComponent", [Hl]: "resolveDynamicComponent", [Wl]: "resolveDirective", [zl]: "resolveFilter", [Kl]: "withDirectives", [Gl]: "renderList", [ql]: "renderSlot", [Jl]: "createSlots", [Zl]: "toDisplayString", [Yl]: "mergeProps", [Ql]: "normalizeClass", [Xl]: "normalizeStyle", [ec]: "normalizeProps", [tc]: "guardReactiveProps", [nc]: "toHandlers", [oc]: "camelize", [rc]: "capitalize", [sc]: "toHandlerKey", [ic]: "setBlockTracking", [lc]: "pushScopeId", [cc]: "popScopeId", [ac]: "withCtx", [uc]: "unref", [pc]: "isRef", [fc]: "withMemo", [dc]: "isMemoSame" };
      mc = { source: "", start: { line: 1, column: 1, offset: 0 }, end: { line: 1, column: 1, offset: 0 } };
      wc = (e2) => 4 === e2.type && e2.isStatic;
      Tc = (e2, t2) => e2 === t2 || e2 === G(t2);
      Ec = /^\d|[^\$\w]/;
      $c = (e2) => !Ec.test(e2);
      Oc = /[A-Za-z_$\xA0-\uFFFF]/;
      Rc = /[\.\?\w$\xA0-\uFFFF]/;
      Fc = /\s+[.[]\s*|\s*[.[]\s+/g;
      Ac = (e2) => {
        e2 = e2.trim().replace(Fc, (e3) => e3.trim());
        let t2 = 0, n2 = [], o2 = 0, r2 = 0, s2 = null;
        for (let i2 = 0; i2 < e2.length; i2++) {
          const l2 = e2.charAt(i2);
          switch (t2) {
            case 0:
              if ("[" === l2)
                n2.push(t2), t2 = 1, o2++;
              else if ("(" === l2)
                n2.push(t2), t2 = 2, r2++;
              else if (!(0 === i2 ? Oc : Rc).test(l2))
                return false;
              break;
            case 1:
              "'" === l2 || '"' === l2 || "`" === l2 ? (n2.push(t2), t2 = 3, s2 = l2) : "[" === l2 ? o2++ : "]" === l2 && (--o2 || (t2 = n2.pop()));
              break;
            case 2:
              if ("'" === l2 || '"' === l2 || "`" === l2)
                n2.push(t2), t2 = 3, s2 = l2;
              else if ("(" === l2)
                r2++;
              else if (")" === l2) {
                if (i2 === e2.length - 1)
                  return false;
                --r2 || (t2 = n2.pop());
              }
              break;
            case 3:
              l2 === s2 && (t2 = n2.pop(), s2 = null);
          }
        }
        return !o2 && !r2;
      };
      Kc = /* @__PURE__ */ new Set([ec, tc]);
      Yc = /&(gt|lt|amp|apos|quot);/g;
      Qc = { gt: ">", lt: "<", amp: "&", apos: "'", quot: '"' };
      Xc = { delimiters: ["{{", "}}"], getNamespace: () => 0, getTextMode: () => 0, isVoidTag: b, isPreTag: b, isCustomElement: b, decodeEntities: (e2) => e2.replace(Yc, (e3, t2) => Qc[t2]), onError: Tl, onWarn: Nl, comments: false };
      la = e("if,else,else-if,for,slot");
      Na = /* @__PURE__ */ new Set([Ql, Xl, ec, tc]);
      Va = (e2) => `${hc[e2]}: _${hc[e2]}`;
      za = Ma(/^(if|else|else-if)$/, (e2, t2, n2) => function(e3, t3, n3, o2) {
        if (!("else" === t3.name || t3.exp && t3.exp.content.trim())) {
          t3.exp = bc("true", false, t3.exp ? t3.exp.loc : e3.loc);
        }
        if ("if" === t3.name) {
          const r2 = Ka(e3, t3), s2 = { type: 9, loc: e3.loc, branches: [r2] };
          if (n3.replaceNode(s2), o2)
            return o2(s2, r2, true);
        } else {
          const r2 = n3.parent.children;
          let s2 = r2.indexOf(e3);
          for (; s2-- >= -1; ) {
            const i2 = r2[s2];
            if (!i2 || 2 !== i2.type || i2.content.trim().length) {
              if (i2 && 9 === i2.type) {
                n3.removeNode();
                const r3 = Ka(e3, t3);
                i2.branches.push(r3);
                const s3 = o2 && o2(i2, r3, false);
                Pa(r3, n3), s3 && s3(), n3.currentNode = null;
              }
              break;
            }
            n3.removeNode(i2);
          }
        }
      }(e2, t2, n2, (e3, t3, o2) => {
        const r2 = n2.parent.children;
        let s2 = r2.indexOf(e3), i2 = 0;
        for (; s2-- >= 0; ) {
          const e4 = r2[s2];
          e4 && 9 === e4.type && (i2 += e4.branches.length);
        }
        return () => {
          if (o2)
            e3.codegenNode = Ga(t3, i2, n2);
          else {
            const o3 = function(e4) {
              for (; ; )
                if (19 === e4.type) {
                  if (19 !== e4.alternate.type)
                    return e4;
                  e4 = e4.alternate;
                } else
                  20 === e4.type && (e4 = e4.value);
            }(e3.codegenNode);
            o3.alternate = Ga(t3, i2 + e3.branches.length - 1, n2);
          }
        };
      }));
      Ja = Ma("for", (e2, t2, n2) => {
        const { helper: o2, removeHelper: r2 } = n2;
        return function(e3, t3, n3, o3) {
          if (!t3.exp)
            return;
          const r3 = Xa(t3.exp);
          if (!r3)
            return;
          const { scopes: s2 } = n3, { source: i2, value: l2, key: c2, index: a2 } = r3, u2 = { type: 11, loc: t3.loc, source: i2, valueAlias: l2, keyAlias: c2, objectIndexAlias: a2, parseResult: r3, children: Dc(e3) ? e3.children : [e3] };
          n3.replaceNode(u2), s2.vFor++;
          const p3 = o3 && o3(u2);
          return () => {
            s2.vFor--, p3 && p3();
          };
        }(e2, t2, n2, (t3) => {
          const s2 = xc(o2(Gl), [t3.source]), i2 = Dc(e2), l2 = Ic(e2, "memo"), c2 = Bc(e2, "key"), a2 = c2 && (6 === c2.type ? bc(c2.value.content, true) : c2.exp), u2 = c2 ? _c("key", a2) : null, p3 = 4 === t3.source.type && t3.source.constType > 0, f2 = p3 ? 64 : c2 ? 128 : 256;
          return t3.codegenNode = gc(n2, o2($l), void 0, s2, f2 + "", void 0, void 0, true, !p3, false, e2.loc), () => {
            let c3;
            const { children: f3 } = t3, d2 = 1 !== f3.length || 1 !== f3[0].type, h3 = Hc(e2) ? e2 : i2 && 1 === e2.children.length && Hc(e2.children[0]) ? e2.children[0] : null;
            if (h3 ? (c3 = h3.codegenNode, i2 && u2 && qc(c3, u2, n2)) : d2 ? c3 = gc(n2, o2($l), u2 ? yc([u2]) : void 0, e2.children, "64", void 0, void 0, true, void 0, false) : (c3 = f3[0].codegenNode, i2 && u2 && qc(c3, u2, n2), c3.isBlock !== !p3 && (c3.isBlock ? (r2(Pl), r2(zc(n2.inSSR, c3.isComponent))) : r2(Wc(n2.inSSR, c3.isComponent))), c3.isBlock = !p3, c3.isBlock ? (o2(Pl), o2(zc(n2.inSSR, c3.isComponent))) : o2(Wc(n2.inSSR, c3.isComponent))), l2) {
              const e3 = Cc(tu(t3.parseResult, [bc("_cached")]));
              e3.body = { type: 21, body: [Sc(["const _memo = (", l2.exp, ")"]), Sc(["if (_cached", ...a2 ? [" && _cached.key === ", a2] : [], ` && ${n2.helperString(dc)}(_cached, _memo)) return _cached`]), Sc(["const _item = ", c3]), bc("_item.memo = _memo"), bc("return _item")], loc: mc }, s2.arguments.push(e3, bc("_cache"), bc(String(n2.cached++)));
            } else
              s2.arguments.push(Cc(tu(t3.parseResult), c3, true));
          };
        });
      });
      Za = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
      Ya = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
      Qa = /^\(|\)$/g;
      nu = bc("undefined", false);
      ou = (e2, t2) => {
        if (1 === e2.type && (1 === e2.tagType || 3 === e2.tagType)) {
          const n2 = Ic(e2, "slot");
          if (n2)
            return t2.scopes.vSlot++, () => {
              t2.scopes.vSlot--;
            };
        }
      };
      ru = (e2, t2, n2) => Cc(e2, t2, false, true, t2.length ? t2[0].loc : n2);
      au = /* @__PURE__ */ new WeakMap();
      uu = (e2, t2) => function() {
        if (1 !== (e2 = t2.currentNode).type || 0 !== e2.tagType && 1 !== e2.tagType)
          return;
        const { tag: n2, props: o2 } = e2, r2 = 1 === e2.tagType;
        let s2 = r2 ? function(e3, t3, n3 = false) {
          let { tag: o3 } = e3;
          const r3 = hu(o3), s3 = Bc(e3, "is");
          if (s3)
            if (r3) {
              const e4 = 6 === s3.type ? s3.value && bc(s3.value.content, true) : s3.exp;
              if (e4)
                return xc(t3.helper(Hl), [e4]);
            } else
              6 === s3.type && s3.value.content.startsWith("vue:") && (o3 = s3.value.content.slice(4));
          const i3 = !r3 && Ic(e3, "is");
          if (i3 && i3.exp)
            return xc(t3.helper(Hl), [i3.exp]);
          const l3 = Nc(o3) || t3.isBuiltInComponent(o3);
          if (l3)
            return n3 || t3.helper(l3), l3;
          return t3.helper(Dl), t3.components.add(o3), Jc(o3, "component");
        }(e2, t2) : `"${n2}"`;
        const i2 = M(s2) && s2.callee === Hl;
        let l2, c2, a2, u2, p3, f2, d2 = 0, h3 = i2 || s2 === Ol || s2 === Rl || !r2 && ("svg" === n2 || "foreignObject" === n2);
        if (o2.length > 0) {
          const n3 = pu(e2, t2, void 0, r2, i2);
          l2 = n3.props, d2 = n3.patchFlag, p3 = n3.dynamicPropNames;
          const o3 = n3.directives;
          f2 = o3 && o3.length ? vc(o3.map((e3) => function(e4, t3) {
            const n4 = [], o4 = au.get(e4);
            o4 ? n4.push(t3.helperString(o4)) : (t3.helper(Wl), t3.directives.add(e4.name), n4.push(Jc(e4.name, "directive")));
            const { loc: r3 } = e4;
            e4.exp && n4.push(e4.exp);
            e4.arg && (e4.exp || n4.push("void 0"), n4.push(e4.arg));
            if (Object.keys(e4.modifiers).length) {
              e4.arg || (e4.exp || n4.push("void 0"), n4.push("void 0"));
              const t4 = bc("true", false, r3);
              n4.push(yc(e4.modifiers.map((e5) => _c(e5, t4)), r3));
            }
            return vc(n4, e4.loc);
          }(e3, t2))) : void 0, n3.shouldUseBlock && (h3 = true);
        }
        if (e2.children.length > 0) {
          s2 === Fl && (h3 = true, d2 |= 1024);
          if (r2 && s2 !== Ol && s2 !== Fl) {
            const { slots: n3, hasDynamicSlots: o3 } = su(e2, t2);
            c2 = n3, o3 && (d2 |= 1024);
          } else if (1 === e2.children.length && s2 !== Ol) {
            const n3 = e2.children[0], o3 = n3.type, r3 = 5 === o3 || 8 === o3;
            r3 && 0 === Ta(n3, t2) && (d2 |= 1), c2 = r3 || 2 === o3 ? n3 : e2.children;
          } else
            c2 = e2.children;
        }
        0 !== d2 && (a2 = String(d2), p3 && p3.length && (u2 = function(e3) {
          let t3 = "[";
          for (let n3 = 0, o3 = e3.length; n3 < o3; n3++)
            t3 += JSON.stringify(e3[n3]), n3 < o3 - 1 && (t3 += ", ");
          return t3 + "]";
        }(p3))), e2.codegenNode = gc(t2, s2, l2, c2, a2, u2, f2, !!h3, false, r2, e2.loc);
      };
      mu = (e2, t2) => {
        if (Hc(e2)) {
          const { children: n2, loc: o2 } = e2, { slotName: r2, slotProps: s2 } = function(e3, t3) {
            let n3, o3 = '"default"';
            const r3 = [];
            for (let s3 = 0; s3 < e3.props.length; s3++) {
              const t4 = e3.props[s3];
              6 === t4.type ? t4.value && ("name" === t4.name ? o3 = JSON.stringify(t4.value.content) : (t4.name = z(t4.name), r3.push(t4))) : "bind" === t4.name && Lc(t4.arg, "name") ? t4.exp && (o3 = t4.exp) : ("bind" === t4.name && t4.arg && wc(t4.arg) && (t4.arg.content = z(t4.arg.content)), r3.push(t4));
            }
            if (r3.length > 0) {
              const { props: o4, directives: s3 } = pu(e3, t3, r3, false, false);
              n3 = o4;
            }
            return { slotName: o3, slotProps: n3 };
          }(e2, t2), i2 = [t2.prefixIdentifiers ? "_ctx.$slots" : "$slots", r2, "{}", "undefined", "true"];
          let l2 = 2;
          s2 && (i2[2] = s2, l2 = 3), n2.length && (i2[3] = Cc([], n2, false, false, o2), l2 = 4), t2.scopeId && !t2.slotted && (l2 = 5), i2.splice(l2), e2.codegenNode = xc(t2.helper(ql), i2, o2);
        }
      };
      gu = /^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/;
      vu = (e2, t2, n2, o2) => {
        const { loc: r2, modifiers: s2, arg: i2 } = e2;
        let l2;
        if (4 === i2.type)
          if (i2.isStatic) {
            let e3 = i2.content;
            e3.startsWith("vue:") && (e3 = `vnode-${e3.slice(4)}`);
            l2 = bc(1 === t2.tagType || e3.startsWith("vnode") || !/[A-Z]/.test(e3) ? J(z(e3)) : `on:${e3}`, true, i2.loc);
          } else
            l2 = Sc([`${n2.helperString(sc)}(`, i2, ")"]);
        else
          l2 = i2, l2.children.unshift(`${n2.helperString(sc)}(`), l2.children.push(")");
        let c2 = e2.exp;
        c2 && !c2.content.trim() && (c2 = void 0);
        let a2 = n2.cacheHandlers && !c2 && !n2.inVOnce;
        if (c2) {
          const e3 = Ac(c2.content), t3 = !(e3 || gu.test(c2.content)), n3 = c2.content.includes(";");
          (t3 || a2 && e3) && (c2 = Sc([`${t3 ? "$event" : "(...args)"} => ${n3 ? "{" : "("}`, c2, n3 ? "}" : ")"]));
        }
        let u2 = { props: [_c(l2, c2 || bc("() => {}", false, r2))] };
        return o2 && (u2 = o2(u2)), a2 && (u2.props[0].value = n2.cache(u2.props[0].value)), u2.props.forEach((e3) => e3.key.isHandlerKey = true), u2;
      };
      yu = (e2, t2, n2) => {
        const { exp: o2, modifiers: r2, loc: s2 } = e2, i2 = e2.arg;
        return 4 !== i2.type ? (i2.children.unshift("("), i2.children.push(') || ""')) : i2.isStatic || (i2.content = `${i2.content} || ""`), r2.includes("camel") && (4 === i2.type ? i2.content = i2.isStatic ? z(i2.content) : `${n2.helperString(oc)}(${i2.content})` : (i2.children.unshift(`${n2.helperString(oc)}(`), i2.children.push(")"))), n2.inSSR || (r2.includes("prop") && _u(i2, "."), r2.includes("attr") && _u(i2, "^")), !o2 || 4 === o2.type && !o2.content.trim() ? { props: [_c(i2, bc("", true, s2))] } : { props: [_c(i2, o2)] };
      };
      _u = (e2, t2) => {
        4 === e2.type ? e2.content = e2.isStatic ? t2 + e2.content : `\`${t2}\${${e2.content}}\`` : (e2.children.unshift(`'${t2}' + (`), e2.children.push(")"));
      };
      bu = (e2, t2) => {
        if (0 === e2.type || 1 === e2.type || 11 === e2.type || 10 === e2.type)
          return () => {
            const n2 = e2.children;
            let o2, r2 = false;
            for (let e3 = 0; e3 < n2.length; e3++) {
              const t3 = n2[e3];
              if (jc(t3)) {
                r2 = true;
                for (let r3 = e3 + 1; r3 < n2.length; r3++) {
                  const s2 = n2[r3];
                  if (!jc(s2)) {
                    o2 = void 0;
                    break;
                  }
                  o2 || (o2 = n2[e3] = Sc([t3], t3.loc)), o2.children.push(" + ", s2), n2.splice(r3, 1), r3--;
                }
              }
            }
            if (r2 && (1 !== n2.length || 0 !== e2.type && (1 !== e2.type || 0 !== e2.tagType || e2.props.find((e3) => 7 === e3.type && !t2.directiveTransforms[e3.name]))))
              for (let e3 = 0; e3 < n2.length; e3++) {
                const o3 = n2[e3];
                if (jc(o3) || 8 === o3.type) {
                  const r3 = [];
                  2 === o3.type && " " === o3.content || r3.push(o3), t2.ssr || 0 !== Ta(o3, t2) || r3.push("1"), n2[e3] = { type: 12, content: o3, loc: o3.loc, codegenNode: xc(t2.helper(jl), r3) };
                }
              }
          };
      };
      Su = /* @__PURE__ */ new WeakSet();
      xu = (e2, t2) => {
        if (1 === e2.type && Ic(e2, "once", true)) {
          if (Su.has(e2) || t2.inVOnce)
            return;
          return Su.add(e2), t2.inVOnce = true, t2.helper(ic), () => {
            t2.inVOnce = false;
            const e3 = t2.currentNode;
            e3.codegenNode && (e3.codegenNode = t2.cache(e3.codegenNode, true));
          };
        }
      };
      Cu = (e2, t2, n2) => {
        const { exp: o2, arg: r2 } = e2;
        if (!o2)
          return ku();
        const s2 = o2.loc.source, i2 = 4 === o2.type ? o2.content : s2;
        if (!i2.trim() || !Ac(i2))
          return ku();
        const l2 = r2 || bc("modelValue", true), c2 = r2 ? wc(r2) ? `onUpdate:${r2.content}` : Sc(['"onUpdate:" + ', r2]) : "onUpdate:modelValue";
        let a2;
        a2 = Sc([`${n2.isTS ? "($event: any)" : "$event"} => ((`, o2, ") = $event)"]);
        const u2 = [_c(l2, e2.exp), _c(c2, a2)];
        if (e2.modifiers.length && 1 === t2.tagType) {
          const t3 = e2.modifiers.map((e3) => ($c(e3) ? e3 : JSON.stringify(e3)) + ": true").join(", "), n3 = r2 ? wc(r2) ? `${r2.content}Modifiers` : Sc([r2, ' + "Modifiers"']) : "modelModifiers";
          u2.push(_c(n3, bc(`{ ${t3} }`, false, e2.loc, 2)));
        }
        return ku(u2);
      };
      wu = /* @__PURE__ */ new WeakSet();
      Tu = (e2, t2) => {
        if (1 === e2.type) {
          const n2 = Ic(e2, "memo");
          if (!n2 || wu.has(e2))
            return;
          return wu.add(e2), () => {
            const o2 = e2.codegenNode || t2.currentNode.codegenNode;
            o2 && 13 === o2.type && (1 !== e2.tagType && Zc(o2, t2), e2.codegenNode = xc(t2.helper(fc), [n2.exp, Cc(void 0, o2), "_cache", String(t2.cached++)]));
          };
        }
      };
      Eu = Symbol("");
      $u = Symbol("");
      Ou = Symbol("");
      Ru = Symbol("");
      Fu = Symbol("");
      Au = Symbol("");
      Pu = Symbol("");
      Mu = Symbol("");
      Vu = Symbol("");
      Iu = Symbol("");
      Bu = { [Eu]: "vModelRadio", [$u]: "vModelCheckbox", [Ou]: "vModelText", [Ru]: "vModelSelect", [Fu]: "vModelDynamic", [Au]: "withModifiers", [Pu]: "withKeys", [Mu]: "vShow", [Vu]: "Transition", [Iu]: "TransitionGroup" }, Object.getOwnPropertySymbols(Bu).forEach((e2) => {
        hc[e2] = Bu[e2];
      });
      ju = e("style,iframe,script,noscript", true);
      Uu = { isVoidTag: f, isNativeTag: (e2) => u(e2) || p(e2), isPreTag: (e2) => "pre" === e2, decodeEntities: function(e2, t2 = false) {
        return Lu || (Lu = document.createElement("div")), t2 ? (Lu.innerHTML = `<div foo="${e2.replace(/"/g, "&quot;")}">`, Lu.children[0].getAttribute("foo")) : (Lu.innerHTML = e2, Lu.textContent);
      }, isBuiltInComponent: (e2) => Tc(e2, "Transition") ? Vu : Tc(e2, "TransitionGroup") ? Iu : void 0, getNamespace(e2, t2) {
        let n2 = t2 ? t2.ns : 0;
        if (t2 && 2 === n2)
          if ("annotation-xml" === t2.tag) {
            if ("svg" === e2)
              return 1;
            t2.props.some((e3) => 6 === e3.type && "encoding" === e3.name && null != e3.value && ("text/html" === e3.value.content || "application/xhtml+xml" === e3.value.content)) && (n2 = 0);
          } else
            /^m(?:[ions]|text)$/.test(t2.tag) && "mglyph" !== e2 && "malignmark" !== e2 && (n2 = 0);
        else
          t2 && 1 === n2 && ("foreignObject" !== t2.tag && "desc" !== t2.tag && "title" !== t2.tag || (n2 = 0));
        if (0 === n2) {
          if ("svg" === e2)
            return 1;
          if ("math" === e2)
            return 2;
        }
        return n2;
      }, getTextMode({ tag: e2, ns: t2 }) {
        if (0 === t2) {
          if ("textarea" === e2 || "title" === e2)
            return 1;
          if (ju(e2))
            return 2;
        }
        return 0;
      } };
      Du = (e2, t2) => {
        const n2 = l(e2);
        return bc(JSON.stringify(n2), false, t2, 3);
      };
      Hu = e("passive,once,capture");
      Wu = e("stop,prevent,self,ctrl,shift,alt,meta,exact,middle");
      zu = e("left,right");
      Ku = e("onkeyup,onkeydown,onkeypress", true);
      Gu = (e2, t2) => wc(e2) && "onclick" === e2.content.toLowerCase() ? bc(t2, true) : 4 !== e2.type ? Sc(["(", e2, `) === "onClick" ? "${t2}" : (`, e2, ")"]) : e2;
      qu = (e2, t2) => {
        1 !== e2.type || 0 !== e2.tagType || "script" !== e2.tag && "style" !== e2.tag || t2.removeNode();
      };
      Ju = [(e2) => {
        1 === e2.type && e2.props.forEach((t2, n2) => {
          6 === t2.type && "style" === t2.name && t2.value && (e2.props[n2] = { type: 7, name: "bind", arg: bc("style", true, t2.loc), exp: Du(t2.value.content, t2.loc), modifiers: [], loc: t2.loc });
        });
      }];
      Zu = { cloak: () => ({ props: [] }), html: (e2, t2, n2) => {
        const { exp: o2, loc: r2 } = e2;
        return t2.children.length && (t2.children.length = 0), { props: [_c(bc("innerHTML", true, r2), o2 || bc("", true))] };
      }, text: (e2, t2, n2) => {
        const { exp: o2, loc: r2 } = e2;
        return t2.children.length && (t2.children.length = 0), { props: [_c(bc("textContent", true), o2 ? Ta(o2, n2) > 0 ? o2 : xc(n2.helperString(Zl), [o2], r2) : bc("", true))] };
      }, model: (e2, t2, n2) => {
        const o2 = Cu(e2, t2, n2);
        if (!o2.props.length || 1 === t2.tagType)
          return o2;
        const { tag: r2 } = t2, s2 = n2.isCustomElement(r2);
        if ("input" === r2 || "textarea" === r2 || "select" === r2 || s2) {
          let e3 = Ou, i2 = false;
          if ("input" === r2 || s2) {
            const n3 = Bc(t2, "type");
            if (n3) {
              if (7 === n3.type)
                e3 = Fu;
              else if (n3.value)
                switch (n3.value.content) {
                  case "radio":
                    e3 = Eu;
                    break;
                  case "checkbox":
                    e3 = $u;
                    break;
                  case "file":
                    i2 = true;
                }
            } else
              (function(e4) {
                return e4.props.some((e5) => !(7 !== e5.type || "bind" !== e5.name || e5.arg && 4 === e5.arg.type && e5.arg.isStatic));
              })(t2) && (e3 = Fu);
          } else
            "select" === r2 && (e3 = Ru);
          i2 || (o2.needRuntime = n2.helper(e3));
        }
        return o2.props = o2.props.filter((e3) => !(4 === e3.key.type && "modelValue" === e3.key.content)), o2;
      }, on: (e2, t2, n2) => vu(e2, t2, n2, (t3) => {
        const { modifiers: o2 } = e2;
        if (!o2.length)
          return t3;
        let { key: r2, value: s2 } = t3.props[0];
        const { keyModifiers: i2, nonKeyModifiers: l2, eventOptionModifiers: c2 } = ((e3, t4, n3, o3) => {
          const r3 = [], s3 = [], i3 = [];
          for (let l3 = 0; l3 < t4.length; l3++) {
            const n4 = t4[l3];
            Hu(n4) ? i3.push(n4) : zu(n4) ? wc(e3) ? Ku(e3.content) ? r3.push(n4) : s3.push(n4) : (r3.push(n4), s3.push(n4)) : Wu(n4) ? s3.push(n4) : r3.push(n4);
          }
          return { keyModifiers: r3, nonKeyModifiers: s3, eventOptionModifiers: i3 };
        })(r2, o2);
        if (l2.includes("right") && (r2 = Gu(r2, "onContextmenu")), l2.includes("middle") && (r2 = Gu(r2, "onMouseup")), l2.length && (s2 = xc(n2.helper(Au), [s2, JSON.stringify(l2)])), !i2.length || wc(r2) && !Ku(r2.content) || (s2 = xc(n2.helper(Pu), [s2, JSON.stringify(i2)])), c2.length) {
          const e3 = c2.map(q).join("");
          r2 = wc(r2) ? bc(`${r2.content}${e3}`, true) : Sc(["(", r2, `) + "${e3}"`]);
        }
        return { props: [_c(r2, s2)] };
      }), show: (e2, t2, n2) => ({ props: [], needRuntime: n2.helper(Mu) }) };
      Yu = /* @__PURE__ */ Object.create(null);
      $s(Qu);
    }
  });

  // ns-hugo:/src/assets/scripts/vue.esm-browser.js
  var vue_esm_browser_exports = {};
  __export(vue_esm_browser_exports, {
    BaseTransition: () => BaseTransition,
    Comment: () => Comment,
    EffectScope: () => EffectScope,
    Fragment: () => Fragment,
    KeepAlive: () => KeepAlive,
    ReactiveEffect: () => ReactiveEffect,
    Static: () => Static,
    Suspense: () => Suspense,
    Teleport: () => Teleport,
    Text: () => Text,
    Transition: () => Transition,
    TransitionGroup: () => TransitionGroup,
    VueElement: () => VueElement,
    callWithAsyncErrorHandling: () => callWithAsyncErrorHandling,
    callWithErrorHandling: () => callWithErrorHandling,
    camelize: () => camelize,
    capitalize: () => capitalize,
    cloneVNode: () => cloneVNode,
    compatUtils: () => compatUtils,
    compile: () => compileToFunction,
    computed: () => computed$1,
    createApp: () => createApp,
    createBlock: () => createBlock,
    createCommentVNode: () => createCommentVNode,
    createElementBlock: () => createElementBlock,
    createElementVNode: () => createBaseVNode,
    createHydrationRenderer: () => createHydrationRenderer,
    createPropsRestProxy: () => createPropsRestProxy,
    createRenderer: () => createRenderer,
    createSSRApp: () => createSSRApp,
    createSlots: () => createSlots,
    createStaticVNode: () => createStaticVNode,
    createTextVNode: () => createTextVNode,
    createVNode: () => createVNode,
    customRef: () => customRef,
    defineAsyncComponent: () => defineAsyncComponent,
    defineComponent: () => defineComponent,
    defineCustomElement: () => defineCustomElement,
    defineEmits: () => defineEmits,
    defineExpose: () => defineExpose,
    defineProps: () => defineProps,
    defineSSRCustomElement: () => defineSSRCustomElement,
    devtools: () => devtools,
    effect: () => effect,
    effectScope: () => effectScope,
    getCurrentInstance: () => getCurrentInstance,
    getCurrentScope: () => getCurrentScope,
    getTransitionRawChildren: () => getTransitionRawChildren,
    guardReactiveProps: () => guardReactiveProps,
    h: () => h2,
    handleError: () => handleError,
    hydrate: () => hydrate,
    initCustomFormatter: () => initCustomFormatter,
    initDirectivesForSSR: () => initDirectivesForSSR,
    inject: () => inject,
    isMemoSame: () => isMemoSame,
    isProxy: () => isProxy,
    isReactive: () => isReactive,
    isReadonly: () => isReadonly,
    isRef: () => isRef,
    isRuntimeOnly: () => isRuntimeOnly,
    isShallow: () => isShallow,
    isVNode: () => isVNode,
    markRaw: () => markRaw,
    mergeDefaults: () => mergeDefaults,
    mergeProps: () => mergeProps,
    nextTick: () => nextTick,
    normalizeClass: () => normalizeClass,
    normalizeProps: () => normalizeProps,
    normalizeStyle: () => normalizeStyle,
    onActivated: () => onActivated,
    onBeforeMount: () => onBeforeMount,
    onBeforeUnmount: () => onBeforeUnmount,
    onBeforeUpdate: () => onBeforeUpdate,
    onDeactivated: () => onDeactivated,
    onErrorCaptured: () => onErrorCaptured,
    onMounted: () => onMounted,
    onRenderTracked: () => onRenderTracked,
    onRenderTriggered: () => onRenderTriggered,
    onScopeDispose: () => onScopeDispose,
    onServerPrefetch: () => onServerPrefetch,
    onUnmounted: () => onUnmounted,
    onUpdated: () => onUpdated,
    openBlock: () => openBlock,
    popScopeId: () => popScopeId,
    provide: () => provide,
    proxyRefs: () => proxyRefs,
    pushScopeId: () => pushScopeId,
    queuePostFlushCb: () => queuePostFlushCb,
    reactive: () => reactive,
    readonly: () => readonly,
    ref: () => ref,
    registerRuntimeCompiler: () => registerRuntimeCompiler,
    render: () => render,
    renderList: () => renderList,
    renderSlot: () => renderSlot,
    resolveComponent: () => resolveComponent,
    resolveDirective: () => resolveDirective,
    resolveDynamicComponent: () => resolveDynamicComponent,
    resolveFilter: () => resolveFilter,
    resolveTransitionHooks: () => resolveTransitionHooks,
    setBlockTracking: () => setBlockTracking,
    setDevtoolsHook: () => setDevtoolsHook,
    setTransitionHooks: () => setTransitionHooks,
    shallowReactive: () => shallowReactive,
    shallowReadonly: () => shallowReadonly,
    shallowRef: () => shallowRef,
    ssrContextKey: () => ssrContextKey,
    ssrUtils: () => ssrUtils,
    stop: () => stop,
    toDisplayString: () => toDisplayString,
    toHandlerKey: () => toHandlerKey,
    toHandlers: () => toHandlers,
    toRaw: () => toRaw,
    toRef: () => toRef,
    toRefs: () => toRefs,
    transformVNodeArgs: () => transformVNodeArgs,
    triggerRef: () => triggerRef,
    unref: () => unref,
    useAttrs: () => useAttrs,
    useCssModule: () => useCssModule,
    useCssVars: () => useCssVars,
    useSSRContext: () => useSSRContext,
    useSlots: () => useSlots,
    useTransitionState: () => useTransitionState,
    vModelCheckbox: () => vModelCheckbox,
    vModelDynamic: () => vModelDynamic,
    vModelRadio: () => vModelRadio,
    vModelSelect: () => vModelSelect,
    vModelText: () => vModelText,
    vShow: () => vShow,
    version: () => version,
    warn: () => warn$1,
    watch: () => watch,
    watchEffect: () => watchEffect,
    watchPostEffect: () => watchPostEffect,
    watchSyncEffect: () => watchSyncEffect,
    withAsyncContext: () => withAsyncContext,
    withCtx: () => withCtx,
    withDefaults: () => withDefaults,
    withDirectives: () => withDirectives,
    withKeys: () => withKeys,
    withMemo: () => withMemo,
    withModifiers: () => withModifiers,
    withScopeId: () => withScopeId
  });
  function makeMap(str, expectsLowerCase) {
    const map2 = /* @__PURE__ */ Object.create(null);
    const list = str.split(",");
    for (let i2 = 0; i2 < list.length; i2++) {
      map2[list[i2]] = true;
    }
    return expectsLowerCase ? (val) => !!map2[val.toLowerCase()] : (val) => !!map2[val];
  }
  function generateCodeFrame(source, start = 0, end = source.length) {
    let lines = source.split(/(\r?\n)/);
    const newlineSequences = lines.filter((_2, idx) => idx % 2 === 1);
    lines = lines.filter((_2, idx) => idx % 2 === 0);
    let count = 0;
    const res = [];
    for (let i2 = 0; i2 < lines.length; i2++) {
      count += lines[i2].length + (newlineSequences[i2] && newlineSequences[i2].length || 0);
      if (count >= start) {
        for (let j2 = i2 - range; j2 <= i2 + range || end > count; j2++) {
          if (j2 < 0 || j2 >= lines.length)
            continue;
          const line = j2 + 1;
          res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j2]}`);
          const lineLength = lines[j2].length;
          const newLineSeqLength = newlineSequences[j2] && newlineSequences[j2].length || 0;
          if (j2 === i2) {
            const pad = start - (count - (lineLength + newLineSeqLength));
            const length = Math.max(1, end > count ? lineLength - pad : end - start);
            res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
          } else if (j2 > i2) {
            if (end > count) {
              const length = Math.max(Math.min(end - count, lineLength), 1);
              res.push(`   |  ` + "^".repeat(length));
            }
            count += lineLength + newLineSeqLength;
          }
        }
        break;
      }
    }
    return res.join("\n");
  }
  function includeBooleanAttr(value) {
    return !!value || value === "";
  }
  function normalizeStyle(value) {
    if (isArray(value)) {
      const res = {};
      for (let i2 = 0; i2 < value.length; i2++) {
        const item = value[i2];
        const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
        if (normalized) {
          for (const key in normalized) {
            res[key] = normalized[key];
          }
        }
      }
      return res;
    } else if (isString(value)) {
      return value;
    } else if (isObject(value)) {
      return value;
    }
  }
  function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach((item) => {
      if (item) {
        const tmp = item.split(propertyDelimiterRE);
        tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return ret;
  }
  function normalizeClass(value) {
    let res = "";
    if (isString(value)) {
      res = value;
    } else if (isArray(value)) {
      for (let i2 = 0; i2 < value.length; i2++) {
        const normalized = normalizeClass(value[i2]);
        if (normalized) {
          res += normalized + " ";
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          res += name + " ";
        }
      }
    }
    return res.trim();
  }
  function normalizeProps(props) {
    if (!props)
      return null;
    let { class: klass, style } = props;
    if (klass && !isString(klass)) {
      props.class = normalizeClass(klass);
    }
    if (style) {
      props.style = normalizeStyle(style);
    }
    return props;
  }
  function looseCompareArrays(a2, b2) {
    if (a2.length !== b2.length)
      return false;
    let equal = true;
    for (let i2 = 0; equal && i2 < a2.length; i2++) {
      equal = looseEqual(a2[i2], b2[i2]);
    }
    return equal;
  }
  function looseEqual(a2, b2) {
    if (a2 === b2)
      return true;
    let aValidType = isDate(a2);
    let bValidType = isDate(b2);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? a2.getTime() === b2.getTime() : false;
    }
    aValidType = isSymbol(a2);
    bValidType = isSymbol(b2);
    if (aValidType || bValidType) {
      return a2 === b2;
    }
    aValidType = isArray(a2);
    bValidType = isArray(b2);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? looseCompareArrays(a2, b2) : false;
    }
    aValidType = isObject(a2);
    bValidType = isObject(b2);
    if (aValidType || bValidType) {
      if (!aValidType || !bValidType) {
        return false;
      }
      const aKeysCount = Object.keys(a2).length;
      const bKeysCount = Object.keys(b2).length;
      if (aKeysCount !== bKeysCount) {
        return false;
      }
      for (const key in a2) {
        const aHasKey = a2.hasOwnProperty(key);
        const bHasKey = b2.hasOwnProperty(key);
        if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a2[key], b2[key])) {
          return false;
        }
      }
    }
    return String(a2) === String(b2);
  }
  function looseIndexOf(arr, val) {
    return arr.findIndex((item) => looseEqual(item, val));
  }
  function warn(msg, ...args) {
    console.warn(`[Vue warn] ${msg}`, ...args);
  }
  function effectScope(detached) {
    return new EffectScope(detached);
  }
  function recordEffectScope(effect2, scope = activeEffectScope) {
    if (scope && scope.active) {
      scope.effects.push(effect2);
    }
  }
  function getCurrentScope() {
    return activeEffectScope;
  }
  function onScopeDispose(fn2) {
    if (activeEffectScope) {
      activeEffectScope.cleanups.push(fn2);
    } else {
      warn(`onScopeDispose() is called when there is no active effect scope to be associated with.`);
    }
  }
  function cleanupEffect(effect2) {
    const { deps } = effect2;
    if (deps.length) {
      for (let i2 = 0; i2 < deps.length; i2++) {
        deps[i2].delete(effect2);
      }
      deps.length = 0;
    }
  }
  function effect(fn2, options) {
    if (fn2.effect) {
      fn2 = fn2.effect.fn;
    }
    const _effect = new ReactiveEffect(fn2);
    if (options) {
      extend(_effect, options);
      if (options.scope)
        recordEffectScope(_effect, options.scope);
    }
    if (!options || !options.lazy) {
      _effect.run();
    }
    const runner = _effect.run.bind(_effect);
    runner.effect = _effect;
    return runner;
  }
  function stop(runner) {
    runner.effect.stop();
  }
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function resetTracking() {
    const last2 = trackStack.pop();
    shouldTrack = last2 === void 0 ? true : last2;
  }
  function track(target, type, key) {
    if (shouldTrack && activeEffect) {
      let depsMap = targetMap.get(target);
      if (!depsMap) {
        targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
      }
      let dep = depsMap.get(key);
      if (!dep) {
        depsMap.set(key, dep = createDep());
      }
      const eventInfo = { effect: activeEffect, target, type, key };
      trackEffects(dep, eventInfo);
    }
  }
  function trackEffects(dep, debuggerEventExtraInfo) {
    let shouldTrack2 = false;
    if (effectTrackDepth <= maxMarkerBits) {
      if (!newTracked(dep)) {
        dep.n |= trackOpBit;
        shouldTrack2 = !wasTracked(dep);
      }
    } else {
      shouldTrack2 = !dep.has(activeEffect);
    }
    if (shouldTrack2) {
      dep.add(activeEffect);
      activeEffect.deps.push(dep);
      if (activeEffect.onTrack) {
        activeEffect.onTrack(Object.assign({ effect: activeEffect }, debuggerEventExtraInfo));
      }
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      return;
    }
    let deps = [];
    if (type === "clear") {
      deps = [...depsMap.values()];
    } else if (key === "length" && isArray(target)) {
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 >= newValue) {
          deps.push(dep);
        }
      });
    } else {
      if (key !== void 0) {
        deps.push(depsMap.get(key));
      }
      switch (type) {
        case "add":
          if (!isArray(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isIntegerKey(key)) {
            deps.push(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!isArray(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
    const eventInfo = { target, type, key, newValue, oldValue, oldTarget };
    if (deps.length === 1) {
      if (deps[0]) {
        {
          triggerEffects(deps[0], eventInfo);
        }
      }
    } else {
      const effects = [];
      for (const dep of deps) {
        if (dep) {
          effects.push(...dep);
        }
      }
      {
        triggerEffects(createDep(effects), eventInfo);
      }
    }
  }
  function triggerEffects(dep, debuggerEventExtraInfo) {
    const effects = isArray(dep) ? dep : [...dep];
    for (const effect2 of effects) {
      if (effect2.computed) {
        triggerEffect(effect2, debuggerEventExtraInfo);
      }
    }
    for (const effect2 of effects) {
      if (!effect2.computed) {
        triggerEffect(effect2, debuggerEventExtraInfo);
      }
    }
  }
  function triggerEffect(effect2, debuggerEventExtraInfo) {
    if (effect2 !== activeEffect || effect2.allowRecurse) {
      if (effect2.onTrigger) {
        effect2.onTrigger(extend({ effect: effect2 }, debuggerEventExtraInfo));
      }
      if (effect2.scheduler) {
        effect2.scheduler();
      } else {
        effect2.run();
      }
    }
  }
  function createArrayInstrumentations() {
    const instrumentations = {};
    ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
      instrumentations[key] = function(...args) {
        const arr = toRaw(this);
        for (let i2 = 0, l2 = this.length; i2 < l2; i2++) {
          track(arr, "get", i2 + "");
        }
        const res = arr[key](...args);
        if (res === -1 || res === false) {
          return arr[key](...args.map(toRaw));
        } else {
          return res;
        }
      };
    });
    ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
      instrumentations[key] = function(...args) {
        pauseTracking();
        const res = toRaw(this)[key].apply(this, args);
        resetTracking();
        return res;
      };
    });
    return instrumentations;
  }
  function createGetter(isReadonly2 = false, shallow = false) {
    return function get2(target, key, receiver) {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_isShallow") {
        return shallow;
      } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
        return target;
      }
      const targetIsArray = isArray(target);
      if (!isReadonly2 && targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      const res = Reflect.get(target, key, receiver);
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly2) {
        track(target, "get", key);
      }
      if (shallow) {
        return res;
      }
      if (isRef(res)) {
        return targetIsArray && isIntegerKey(key) ? res : res.value;
      }
      if (isObject(res)) {
        return isReadonly2 ? readonly(res) : reactive(res);
      }
      return res;
    };
  }
  function createSetter(shallow = false) {
    return function set2(target, key, value, receiver) {
      let oldValue = target[key];
      if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
        return false;
      }
      if (!shallow) {
        if (!isShallow(value) && !isReadonly(value)) {
          oldValue = toRaw(oldValue);
          value = toRaw(value);
        }
        if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        }
      }
      const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);
      if (target === toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
      }
      return result;
    };
  }
  function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  function ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
  function get$1(target, key, isReadonly2 = false, isShallow2 = false) {
    target = target[
      "__v_raw"
      /* ReactiveFlags.RAW */
    ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly2) {
      if (key !== rawKey) {
        track(rawTarget, "get", key);
      }
      track(rawTarget, "get", rawKey);
    }
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
      target.get(key);
    }
  }
  function has$1(key, isReadonly2 = false) {
    const target = this[
      "__v_raw"
      /* ReactiveFlags.RAW */
    ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly2) {
      if (key !== rawKey) {
        track(rawTarget, "has", key);
      }
      track(rawTarget, "has", rawKey);
    }
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly2 = false) {
    target = target[
      "__v_raw"
      /* ReactiveFlags.RAW */
    ];
    !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }
  function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
      target.add(value);
      trigger(target, "add", value, value);
    }
    return this;
  }
  function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get2 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get2.call(target, key);
    target.set(key, value);
    if (!hadKey) {
      trigger(target, "add", key, value);
    } else if (hasChanged(value, oldValue)) {
      trigger(target, "set", key, value, oldValue);
    }
    return this;
  }
  function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get2 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get2 ? get2.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = isMap(target) ? new Map(target) : new Set(target);
    const result = target.clear();
    if (hadItems) {
      trigger(target, "clear", void 0, void 0, oldTarget);
    }
    return result;
  }
  function createForEach(isReadonly2, isShallow2) {
    return function forEach(callback, thisArg) {
      const observed = this;
      const target = observed[
        "__v_raw"
        /* ReactiveFlags.RAW */
      ];
      const rawTarget = toRaw(target);
      const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }
  function createIterableMethod(method, isReadonly2, isShallow2) {
    return function(...args) {
      const target = this[
        "__v_raw"
        /* ReactiveFlags.RAW */
      ];
      const rawTarget = toRaw(target);
      const targetIsMap = isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
      return {
        // iterator protocol
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        // iterable protocol
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      {
        const key = args[0] ? `on key "${args[0]}" ` : ``;
        console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
      }
      return type === "delete" ? false : this;
    };
  }
  function createInstrumentations() {
    const mutableInstrumentations2 = {
      get(key) {
        return get$1(this, key);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, false)
    };
    const shallowInstrumentations2 = {
      get(key) {
        return get$1(this, key, false, true);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
      get(key) {
        return get$1(this, key, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod(
        "add"
        /* TriggerOpTypes.ADD */
      ),
      set: createReadonlyMethod(
        "set"
        /* TriggerOpTypes.SET */
      ),
      delete: createReadonlyMethod(
        "delete"
        /* TriggerOpTypes.DELETE */
      ),
      clear: createReadonlyMethod(
        "clear"
        /* TriggerOpTypes.CLEAR */
      ),
      forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
      get(key) {
        return get$1(this, key, true, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod(
        "add"
        /* TriggerOpTypes.ADD */
      ),
      set: createReadonlyMethod(
        "set"
        /* TriggerOpTypes.SET */
      ),
      delete: createReadonlyMethod(
        "delete"
        /* TriggerOpTypes.DELETE */
      ),
      clear: createReadonlyMethod(
        "clear"
        /* TriggerOpTypes.CLEAR */
      ),
      forEach: createForEach(true, true)
    };
    const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
    iteratorMethods.forEach((method) => {
      mutableInstrumentations2[method] = createIterableMethod(method, false, false);
      readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
      shallowInstrumentations2[method] = createIterableMethod(method, false, true);
      shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
    });
    return [
      mutableInstrumentations2,
      readonlyInstrumentations2,
      shallowInstrumentations2,
      shallowReadonlyInstrumentations2
    ];
  }
  function createInstrumentationGetter(isReadonly2, shallow) {
    const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
  }
  function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
      const type = toRawType(target);
      console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
  }
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value[
      "__v_skip"
      /* ReactiveFlags.SKIP */
    ] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
  }
  function reactive(target) {
    if (isReadonly(target)) {
      return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  }
  function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
  }
  function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
  }
  function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
  }
  function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
      {
        console.warn(`value cannot be made reactive: ${String(target)}`);
      }
      return target;
    }
    if (target[
      "__v_raw"
      /* ReactiveFlags.RAW */
    ] && !(isReadonly2 && target[
      "__v_isReactive"
      /* ReactiveFlags.IS_REACTIVE */
    ])) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
  }
  function isReactive(value) {
    if (isReadonly(value)) {
      return isReactive(value[
        "__v_raw"
        /* ReactiveFlags.RAW */
      ]);
    }
    return !!(value && value[
      "__v_isReactive"
      /* ReactiveFlags.IS_REACTIVE */
    ]);
  }
  function isReadonly(value) {
    return !!(value && value[
      "__v_isReadonly"
      /* ReactiveFlags.IS_READONLY */
    ]);
  }
  function isShallow(value) {
    return !!(value && value[
      "__v_isShallow"
      /* ReactiveFlags.IS_SHALLOW */
    ]);
  }
  function isProxy(value) {
    return isReactive(value) || isReadonly(value);
  }
  function toRaw(observed) {
    const raw = observed && observed[
      "__v_raw"
      /* ReactiveFlags.RAW */
    ];
    return raw ? toRaw(raw) : observed;
  }
  function markRaw(value) {
    def(value, "__v_skip", true);
    return value;
  }
  function trackRefValue(ref2) {
    if (shouldTrack && activeEffect) {
      ref2 = toRaw(ref2);
      {
        trackEffects(ref2.dep || (ref2.dep = createDep()), {
          target: ref2,
          type: "get",
          key: "value"
        });
      }
    }
  }
  function triggerRefValue(ref2, newVal) {
    ref2 = toRaw(ref2);
    if (ref2.dep) {
      {
        triggerEffects(ref2.dep, {
          target: ref2,
          type: "set",
          key: "value",
          newValue: newVal
        });
      }
    }
  }
  function isRef(r2) {
    return !!(r2 && r2.__v_isRef === true);
  }
  function ref(value) {
    return createRef(value, false);
  }
  function shallowRef(value) {
    return createRef(value, true);
  }
  function createRef(rawValue, shallow) {
    if (isRef(rawValue)) {
      return rawValue;
    }
    return new RefImpl(rawValue, shallow);
  }
  function triggerRef(ref2) {
    triggerRefValue(ref2, ref2.value);
  }
  function unref(ref2) {
    return isRef(ref2) ? ref2.value : ref2;
  }
  function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
  }
  function customRef(factory) {
    return new CustomRefImpl(factory);
  }
  function toRefs(object) {
    if (!isProxy(object)) {
      console.warn(`toRefs() expects a reactive object but received a plain one.`);
    }
    const ret = isArray(object) ? new Array(object.length) : {};
    for (const key in object) {
      ret[key] = toRef(object, key);
    }
    return ret;
  }
  function toRef(object, key, defaultValue) {
    const val = object[key];
    return isRef(val) ? val : new ObjectRefImpl(object, key, defaultValue);
  }
  function computed(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    const onlyGetter = isFunction(getterOrOptions);
    if (onlyGetter) {
      getter = getterOrOptions;
      setter = () => {
        console.warn("Write operation failed: computed value is readonly");
      };
    } else {
      getter = getterOrOptions.get;
      setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
    if (debugOptions && !isSSR) {
      cRef.effect.onTrack = debugOptions.onTrack;
      cRef.effect.onTrigger = debugOptions.onTrigger;
    }
    return cRef;
  }
  function pushWarningContext(vnode) {
    stack.push(vnode);
  }
  function popWarningContext() {
    stack.pop();
  }
  function warn$1(msg, ...args) {
    pauseTracking();
    const instance = stack.length ? stack[stack.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) {
      callWithErrorHandling(appWarnHandler, instance, 11, [
        msg + args.join(""),
        instance && instance.proxy,
        trace.map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`).join("\n"),
        trace
      ]);
    } else {
      const warnArgs = [`[Vue warn]: ${msg}`, ...args];
      if (trace.length && // avoid spamming console during tests
      true) {
        warnArgs.push(`
`, ...formatTrace(trace));
      }
      console.warn(...warnArgs);
    }
    resetTracking();
  }
  function getComponentTrace() {
    let currentVNode = stack[stack.length - 1];
    if (!currentVNode) {
      return [];
    }
    const normalizedStack = [];
    while (currentVNode) {
      const last2 = normalizedStack[0];
      if (last2 && last2.vnode === currentVNode) {
        last2.recurseCount++;
      } else {
        normalizedStack.push({
          vnode: currentVNode,
          recurseCount: 0
        });
      }
      const parentInstance = currentVNode.component && currentVNode.component.parent;
      currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
  }
  function formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i2) => {
      logs.push(...i2 === 0 ? [] : [`
`], ...formatTraceEntry(entry));
    });
    return logs;
  }
  function formatTraceEntry({ vnode, recurseCount }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
    const close = `>` + postfix;
    return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
  }
  function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach((key) => {
      res.push(...formatProp(key, props[key]));
    });
    if (keys.length > 3) {
      res.push(` ...`);
    }
    return res;
  }
  function formatProp(key, value, raw) {
    if (isString(value)) {
      value = JSON.stringify(value);
      return raw ? value : [`${key}=${value}`];
    } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
      return raw ? value : [`${key}=${value}`];
    } else if (isRef(value)) {
      value = formatProp(key, toRaw(value.value), true);
      return raw ? value : [`${key}=Ref<`, value, `>`];
    } else if (isFunction(value)) {
      return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
    } else {
      value = toRaw(value);
      return raw ? value : [`${key}=`, value];
    }
  }
  function callWithErrorHandling(fn2, instance, type, args) {
    let res;
    try {
      res = args ? fn2(...args) : fn2();
    } catch (err) {
      handleError(err, instance, type);
    }
    return res;
  }
  function callWithAsyncErrorHandling(fn2, instance, type, args) {
    if (isFunction(fn2)) {
      const res = callWithErrorHandling(fn2, instance, type, args);
      if (res && isPromise(res)) {
        res.catch((err) => {
          handleError(err, instance, type);
        });
      }
      return res;
    }
    const values = [];
    for (let i2 = 0; i2 < fn2.length; i2++) {
      values.push(callWithAsyncErrorHandling(fn2[i2], instance, type, args));
    }
    return values;
  }
  function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
      let cur = instance.parent;
      const exposedInstance = instance.proxy;
      const errorInfo = ErrorTypeStrings[type];
      while (cur) {
        const errorCapturedHooks = cur.ec;
        if (errorCapturedHooks) {
          for (let i2 = 0; i2 < errorCapturedHooks.length; i2++) {
            if (errorCapturedHooks[i2](err, exposedInstance, errorInfo) === false) {
              return;
            }
          }
        }
        cur = cur.parent;
      }
      const appErrorHandler = instance.appContext.config.errorHandler;
      if (appErrorHandler) {
        callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
        return;
      }
    }
    logError(err, type, contextVNode, throwInDev);
  }
  function logError(err, type, contextVNode, throwInDev = true) {
    {
      const info = ErrorTypeStrings[type];
      if (contextVNode) {
        pushWarningContext(contextVNode);
      }
      warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
      if (contextVNode) {
        popWarningContext();
      }
      if (throwInDev) {
        throw err;
      } else {
        console.error(err);
      }
    }
  }
  function nextTick(fn2) {
    const p3 = currentFlushPromise || resolvedPromise;
    return fn2 ? p3.then(this ? fn2.bind(this) : fn2) : p3;
  }
  function findInsertionIndex(id) {
    let start = flushIndex + 1;
    let end = queue.length;
    while (start < end) {
      const middle = start + end >>> 1;
      const middleJobId = getId(queue[middle]);
      middleJobId < id ? start = middle + 1 : end = middle;
    }
    return start;
  }
  function queueJob(job) {
    if (!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) {
      if (job.id == null) {
        queue.push(job);
      } else {
        queue.splice(findInsertionIndex(job.id), 0, job);
      }
      queueFlush();
    }
  }
  function queueFlush() {
    if (!isFlushing && !isFlushPending) {
      isFlushPending = true;
      currentFlushPromise = resolvedPromise.then(flushJobs);
    }
  }
  function invalidateJob(job) {
    const i2 = queue.indexOf(job);
    if (i2 > flushIndex) {
      queue.splice(i2, 1);
    }
  }
  function queuePostFlushCb(cb) {
    if (!isArray(cb)) {
      if (!activePostFlushCbs || !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) {
        pendingPostFlushCbs.push(cb);
      }
    } else {
      pendingPostFlushCbs.push(...cb);
    }
    queueFlush();
  }
  function flushPreFlushCbs(seen2, i2 = isFlushing ? flushIndex + 1 : 0) {
    {
      seen2 = seen2 || /* @__PURE__ */ new Map();
    }
    for (; i2 < queue.length; i2++) {
      const cb = queue[i2];
      if (cb && cb.pre) {
        if (checkRecursiveUpdates(seen2, cb)) {
          continue;
        }
        queue.splice(i2, 1);
        i2--;
        cb();
      }
    }
  }
  function flushPostFlushCbs(seen2) {
    if (pendingPostFlushCbs.length) {
      const deduped = [...new Set(pendingPostFlushCbs)];
      pendingPostFlushCbs.length = 0;
      if (activePostFlushCbs) {
        activePostFlushCbs.push(...deduped);
        return;
      }
      activePostFlushCbs = deduped;
      {
        seen2 = seen2 || /* @__PURE__ */ new Map();
      }
      activePostFlushCbs.sort((a2, b2) => getId(a2) - getId(b2));
      for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
        if (checkRecursiveUpdates(seen2, activePostFlushCbs[postFlushIndex])) {
          continue;
        }
        activePostFlushCbs[postFlushIndex]();
      }
      activePostFlushCbs = null;
      postFlushIndex = 0;
    }
  }
  function flushJobs(seen2) {
    isFlushPending = false;
    isFlushing = true;
    {
      seen2 = seen2 || /* @__PURE__ */ new Map();
    }
    queue.sort(comparator);
    const check = (job) => checkRecursiveUpdates(seen2, job);
    try {
      for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
        const job = queue[flushIndex];
        if (job && job.active !== false) {
          if (check(job)) {
            continue;
          }
          callWithErrorHandling(
            job,
            null,
            14
            /* ErrorCodes.SCHEDULER */
          );
        }
      }
    } finally {
      flushIndex = 0;
      queue.length = 0;
      flushPostFlushCbs(seen2);
      isFlushing = false;
      currentFlushPromise = null;
      if (queue.length || pendingPostFlushCbs.length) {
        flushJobs(seen2);
      }
    }
  }
  function checkRecursiveUpdates(seen2, fn2) {
    if (!seen2.has(fn2)) {
      seen2.set(fn2, 1);
    } else {
      const count = seen2.get(fn2);
      if (count > RECURSION_LIMIT) {
        const instance = fn2.ownerInstance;
        const componentName = instance && getComponentName(instance.type);
        warn$1(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`);
        return true;
      } else {
        seen2.set(fn2, count + 1);
      }
    }
  }
  function registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = map.get(id);
    if (!record) {
      createRecord(id, instance.type);
      record = map.get(id);
    }
    record.instances.add(instance);
  }
  function unregisterHMR(instance) {
    map.get(instance.type.__hmrId).instances.delete(instance);
  }
  function createRecord(id, initialDef) {
    if (map.has(id)) {
      return false;
    }
    map.set(id, {
      initialDef: normalizeClassComponent(initialDef),
      instances: /* @__PURE__ */ new Set()
    });
    return true;
  }
  function normalizeClassComponent(component) {
    return isClassComponent(component) ? component.__vccOpts : component;
  }
  function rerender(id, newRender) {
    const record = map.get(id);
    if (!record) {
      return;
    }
    record.initialDef.render = newRender;
    [...record.instances].forEach((instance) => {
      if (newRender) {
        instance.render = newRender;
        normalizeClassComponent(instance.type).render = newRender;
      }
      instance.renderCache = [];
      isHmrUpdating = true;
      instance.update();
      isHmrUpdating = false;
    });
  }
  function reload(id, newComp) {
    const record = map.get(id);
    if (!record)
      return;
    newComp = normalizeClassComponent(newComp);
    updateComponentDef(record.initialDef, newComp);
    const instances = [...record.instances];
    for (const instance of instances) {
      const oldComp = normalizeClassComponent(instance.type);
      if (!hmrDirtyComponents.has(oldComp)) {
        if (oldComp !== record.initialDef) {
          updateComponentDef(oldComp, newComp);
        }
        hmrDirtyComponents.add(oldComp);
      }
      instance.appContext.optionsCache.delete(instance.type);
      if (instance.ceReload) {
        hmrDirtyComponents.add(oldComp);
        instance.ceReload(newComp.styles);
        hmrDirtyComponents.delete(oldComp);
      } else if (instance.parent) {
        queueJob(instance.parent.update);
        if (instance.parent.type.__asyncLoader && instance.parent.ceReload) {
          instance.parent.ceReload(newComp.styles);
        }
      } else if (instance.appContext.reload) {
        instance.appContext.reload();
      } else if (typeof window !== "undefined") {
        window.location.reload();
      } else {
        console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
      }
    }
    queuePostFlushCb(() => {
      for (const instance of instances) {
        hmrDirtyComponents.delete(normalizeClassComponent(instance.type));
      }
    });
  }
  function updateComponentDef(oldComp, newComp) {
    extend(oldComp, newComp);
    for (const key in oldComp) {
      if (key !== "__file" && !(key in newComp)) {
        delete oldComp[key];
      }
    }
  }
  function tryWrap(fn2) {
    return (id, arg) => {
      try {
        return fn2(id, arg);
      } catch (e2) {
        console.error(e2);
        console.warn(`[HMR] Something went wrong during Vue component hot-reload. Full reload required.`);
      }
    };
  }
  function emit(event, ...args) {
    if (devtools) {
      devtools.emit(event, ...args);
    } else if (!devtoolsNotInstalled) {
      buffer.push({ event, args });
    }
  }
  function setDevtoolsHook(hook, target) {
    var _a3, _b;
    devtools = hook;
    if (devtools) {
      devtools.enabled = true;
      buffer.forEach(({ event, args }) => devtools.emit(event, ...args));
      buffer = [];
    } else if (
      // handle late devtools injection - only do this if we are in an actual
      // browser environment to avoid the timer handle stalling test runner exit
      // (#4815)
      typeof window !== "undefined" && // some envs mock window but not fully
      window.HTMLElement && // also exclude jsdom
      !((_b = (_a3 = window.navigator) === null || _a3 === void 0 ? void 0 : _a3.userAgent) === null || _b === void 0 ? void 0 : _b.includes("jsdom"))
    ) {
      const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
      replay.push((newHook) => {
        setDevtoolsHook(newHook, target);
      });
      setTimeout(() => {
        if (!devtools) {
          target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
          devtoolsNotInstalled = true;
          buffer = [];
        }
      }, 3e3);
    } else {
      devtoolsNotInstalled = true;
      buffer = [];
    }
  }
  function devtoolsInitApp(app, version2) {
    emit("app:init", app, version2, {
      Fragment,
      Text,
      Comment,
      Static
    });
  }
  function devtoolsUnmountApp(app) {
    emit("app:unmount", app);
  }
  function createDevtoolsComponentHook(hook) {
    return (component) => {
      emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : void 0, component);
    };
  }
  function createDevtoolsPerformanceHook(hook) {
    return (component, type, time) => {
      emit(hook, component.appContext.app, component.uid, component, type, time);
    };
  }
  function devtoolsComponentEmit(component, event, params) {
    emit("component:emit", component.appContext.app, component, event, params);
  }
  function emit$1(instance, event, ...rawArgs) {
    if (instance.isUnmounted)
      return;
    const props = instance.vnode.props || EMPTY_OBJ;
    {
      const { emitsOptions, propsOptions: [propsOptions] } = instance;
      if (emitsOptions) {
        if (!(event in emitsOptions) && true) {
          if (!propsOptions || !(toHandlerKey(event) in propsOptions)) {
            warn$1(`Component emitted event "${event}" but it is neither declared in the emits option nor as an "${toHandlerKey(event)}" prop.`);
          }
        } else {
          const validator = emitsOptions[event];
          if (isFunction(validator)) {
            const isValid = validator(...rawArgs);
            if (!isValid) {
              warn$1(`Invalid event arguments: event validation failed for event "${event}".`);
            }
          }
        }
      }
    }
    let args = rawArgs;
    const isModelListener2 = event.startsWith("update:");
    const modelArg = isModelListener2 && event.slice(7);
    if (modelArg && modelArg in props) {
      const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
      const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
      if (trim) {
        args = rawArgs.map((a2) => a2.trim());
      }
      if (number) {
        args = rawArgs.map(toNumber);
      }
    }
    {
      devtoolsComponentEmit(instance, event, args);
    }
    {
      const lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
        warn$1(`Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate(event)}" instead of "${event}".`);
      }
    }
    let handlerName;
    let handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
    props[handlerName = toHandlerKey(camelize(event))];
    if (!handler && isModelListener2) {
      handler = props[handlerName = toHandlerKey(hyphenate(event))];
    }
    if (handler) {
      callWithAsyncErrorHandling(handler, instance, 6, args);
    }
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
      if (!instance.emitted) {
        instance.emitted = {};
      } else if (instance.emitted[handlerName]) {
        return;
      }
      instance.emitted[handlerName] = true;
      callWithAsyncErrorHandling(onceHandler, instance, 6, args);
    }
  }
  function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== void 0) {
      return cached;
    }
    const raw = comp.emits;
    let normalized = {};
    let hasExtends = false;
    if (!isFunction(comp)) {
      const extendEmits = (raw2) => {
        const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
        if (normalizedFromExtend) {
          hasExtends = true;
          extend(normalized, normalizedFromExtend);
        }
      };
      if (!asMixin && appContext.mixins.length) {
        appContext.mixins.forEach(extendEmits);
      }
      if (comp.extends) {
        extendEmits(comp.extends);
      }
      if (comp.mixins) {
        comp.mixins.forEach(extendEmits);
      }
    }
    if (!raw && !hasExtends) {
      if (isObject(comp)) {
        cache.set(comp, null);
      }
      return null;
    }
    if (isArray(raw)) {
      raw.forEach((key) => normalized[key] = null);
    } else {
      extend(normalized, raw);
    }
    if (isObject(comp)) {
      cache.set(comp, normalized);
    }
    return normalized;
  }
  function isEmitListener(options, key) {
    if (!options || !isOn(key)) {
      return false;
    }
    key = key.slice(2).replace(/Once$/, "");
    return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
  }
  function setCurrentRenderingInstance(instance) {
    const prev = currentRenderingInstance;
    currentRenderingInstance = instance;
    currentScopeId = instance && instance.type.__scopeId || null;
    return prev;
  }
  function pushScopeId(id) {
    currentScopeId = id;
  }
  function popScopeId() {
    currentScopeId = null;
  }
  function withCtx(fn2, ctx = currentRenderingInstance, isNonScopedSlot) {
    if (!ctx)
      return fn2;
    if (fn2._n) {
      return fn2;
    }
    const renderFnWithContext = (...args) => {
      if (renderFnWithContext._d) {
        setBlockTracking(-1);
      }
      const prevInstance = setCurrentRenderingInstance(ctx);
      let res;
      try {
        res = fn2(...args);
      } finally {
        setCurrentRenderingInstance(prevInstance);
        if (renderFnWithContext._d) {
          setBlockTracking(1);
        }
      }
      {
        devtoolsComponentUpdated(ctx);
      }
      return res;
    };
    renderFnWithContext._n = true;
    renderFnWithContext._c = true;
    renderFnWithContext._d = true;
    return renderFnWithContext;
  }
  function markAttrsAccessed() {
    accessedAttrs = true;
  }
  function renderComponentRoot(instance) {
    const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit: emit2, render: render2, renderCache, data, setupState, ctx, inheritAttrs } = instance;
    let result;
    let fallthroughAttrs;
    const prev = setCurrentRenderingInstance(instance);
    {
      accessedAttrs = false;
    }
    try {
      if (vnode.shapeFlag & 4) {
        const proxyToUse = withProxy || proxy;
        result = normalizeVNode(render2.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
        fallthroughAttrs = attrs;
      } else {
        const render3 = Component;
        if (attrs === props) {
          markAttrsAccessed();
        }
        result = normalizeVNode(render3.length > 1 ? render3(props, true ? {
          get attrs() {
            markAttrsAccessed();
            return attrs;
          },
          slots,
          emit: emit2
        } : { attrs, slots, emit: emit2 }) : render3(
          props,
          null
          /* we know it doesn't need it */
        ));
        fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
      }
    } catch (err) {
      blockStack.length = 0;
      handleError(
        err,
        instance,
        1
        /* ErrorCodes.RENDER_FUNCTION */
      );
      result = createVNode(Comment);
    }
    let root = result;
    let setRoot = void 0;
    if (result.patchFlag > 0 && result.patchFlag & 2048) {
      [root, setRoot] = getChildRoot(result);
    }
    if (fallthroughAttrs && inheritAttrs !== false) {
      const keys = Object.keys(fallthroughAttrs);
      const { shapeFlag } = root;
      if (keys.length) {
        if (shapeFlag & (1 | 6)) {
          if (propsOptions && keys.some(isModelListener)) {
            fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
          }
          root = cloneVNode(root, fallthroughAttrs);
        } else if (!accessedAttrs && root.type !== Comment) {
          const allAttrs = Object.keys(attrs);
          const eventAttrs = [];
          const extraAttrs = [];
          for (let i2 = 0, l2 = allAttrs.length; i2 < l2; i2++) {
            const key = allAttrs[i2];
            if (isOn(key)) {
              if (!isModelListener(key)) {
                eventAttrs.push(key[2].toLowerCase() + key.slice(3));
              }
            } else {
              extraAttrs.push(key);
            }
          }
          if (extraAttrs.length) {
            warn$1(`Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`);
          }
          if (eventAttrs.length) {
            warn$1(`Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
          }
        }
      }
    }
    if (vnode.dirs) {
      if (!isElementRoot(root)) {
        warn$1(`Runtime directive used on component with non-element root node. The directives will not function as intended.`);
      }
      root = cloneVNode(root);
      root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    }
    if (vnode.transition) {
      if (!isElementRoot(root)) {
        warn$1(`Component inside <Transition> renders non-element root node that cannot be animated.`);
      }
      root.transition = vnode.transition;
    }
    if (setRoot) {
      setRoot(root);
    } else {
      result = root;
    }
    setCurrentRenderingInstance(prev);
    return result;
  }
  function filterSingleRoot(children) {
    let singleRoot;
    for (let i2 = 0; i2 < children.length; i2++) {
      const child = children[i2];
      if (isVNode(child)) {
        if (child.type !== Comment || child.children === "v-if") {
          if (singleRoot) {
            return;
          } else {
            singleRoot = child;
          }
        }
      } else {
        return;
      }
    }
    return singleRoot;
  }
  function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    if ((prevChildren || nextChildren) && isHmrUpdating) {
      return true;
    }
    if (nextVNode.dirs || nextVNode.transition) {
      return true;
    }
    if (optimized && patchFlag >= 0) {
      if (patchFlag & 1024) {
        return true;
      }
      if (patchFlag & 16) {
        if (!prevProps) {
          return !!nextProps;
        }
        return hasPropsChanged(prevProps, nextProps, emits);
      } else if (patchFlag & 8) {
        const dynamicProps = nextVNode.dynamicProps;
        for (let i2 = 0; i2 < dynamicProps.length; i2++) {
          const key = dynamicProps[i2];
          if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
            return true;
          }
        }
      }
    } else {
      if (prevChildren || nextChildren) {
        if (!nextChildren || !nextChildren.$stable) {
          return true;
        }
      }
      if (prevProps === nextProps) {
        return false;
      }
      if (!prevProps) {
        return !!nextProps;
      }
      if (!nextProps) {
        return true;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
  }
  function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) {
      return true;
    }
    for (let i2 = 0; i2 < nextKeys.length; i2++) {
      const key = nextKeys[i2];
      if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
        return true;
      }
    }
    return false;
  }
  function updateHOCHostEl({ vnode, parent }, el2) {
    while (parent && parent.subTree === vnode) {
      (vnode = parent.vnode).el = el2;
      parent = parent.parent;
    }
  }
  function triggerEvent(vnode, name) {
    const eventListener = vnode.props && vnode.props[name];
    if (isFunction(eventListener)) {
      eventListener();
    }
  }
  function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
    const { p: patch, o: { createElement } } = rendererInternals;
    const hiddenContainer = createElement("div");
    const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals);
    patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds);
    if (suspense.deps > 0) {
      triggerEvent(vnode, "onPending");
      triggerEvent(vnode, "onFallback");
      patch(
        null,
        vnode.ssFallback,
        container,
        anchor,
        parentComponent,
        null,
        // fallback tree will not have suspense context
        isSVG,
        slotScopeIds
      );
      setActiveBranch(suspense, vnode.ssFallback);
    } else {
      suspense.resolve();
    }
  }
  function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, { p: patch, um: unmount, o: { createElement } }) {
    const suspense = n2.suspense = n1.suspense;
    suspense.vnode = n2;
    n2.el = n1.el;
    const newBranch = n2.ssContent;
    const newFallback = n2.ssFallback;
    const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
    if (pendingBranch) {
      suspense.pendingBranch = newBranch;
      if (isSameVNodeType(newBranch, pendingBranch)) {
        patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
        if (suspense.deps <= 0) {
          suspense.resolve();
        } else if (isInFallback) {
          patch(
            activeBranch,
            newFallback,
            container,
            anchor,
            parentComponent,
            null,
            // fallback tree will not have suspense context
            isSVG,
            slotScopeIds,
            optimized
          );
          setActiveBranch(suspense, newFallback);
        }
      } else {
        suspense.pendingId++;
        if (isHydrating) {
          suspense.isHydrating = false;
          suspense.activeBranch = pendingBranch;
        } else {
          unmount(pendingBranch, parentComponent, suspense);
        }
        suspense.deps = 0;
        suspense.effects.length = 0;
        suspense.hiddenContainer = createElement("div");
        if (isInFallback) {
          patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
          if (suspense.deps <= 0) {
            suspense.resolve();
          } else {
            patch(
              activeBranch,
              newFallback,
              container,
              anchor,
              parentComponent,
              null,
              // fallback tree will not have suspense context
              isSVG,
              slotScopeIds,
              optimized
            );
            setActiveBranch(suspense, newFallback);
          }
        } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
          patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
          suspense.resolve(true);
        } else {
          patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
          if (suspense.deps <= 0) {
            suspense.resolve();
          }
        }
      }
    } else {
      if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
        setActiveBranch(suspense, newBranch);
      } else {
        triggerEvent(n2, "onPending");
        suspense.pendingBranch = newBranch;
        suspense.pendingId++;
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
        if (suspense.deps <= 0) {
          suspense.resolve();
        } else {
          const { timeout, pendingId } = suspense;
          if (timeout > 0) {
            setTimeout(() => {
              if (suspense.pendingId === pendingId) {
                suspense.fallback(newFallback);
              }
            }, timeout);
          } else if (timeout === 0) {
            suspense.fallback(newFallback);
          }
        }
      }
    }
  }
  function createSuspenseBoundary(vnode, parent, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
    if (!hasWarned) {
      hasWarned = true;
      console[console.info ? "info" : "log"](`<Suspense> is an experimental feature and its API will likely change.`);
    }
    const { p: patch, m: move, um: unmount, n: next, o: { parentNode, remove: remove2 } } = rendererInternals;
    const timeout = toNumber(vnode.props && vnode.props.timeout);
    const suspense = {
      vnode,
      parent,
      parentComponent,
      isSVG,
      container,
      hiddenContainer,
      anchor,
      deps: 0,
      pendingId: 0,
      timeout: typeof timeout === "number" ? timeout : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: true,
      isHydrating,
      isUnmounted: false,
      effects: [],
      resolve(resume = false) {
        {
          if (!resume && !suspense.pendingBranch) {
            throw new Error(`suspense.resolve() is called without a pending branch.`);
          }
          if (suspense.isUnmounted) {
            throw new Error(`suspense.resolve() is called on an already unmounted suspense boundary.`);
          }
        }
        const { vnode: vnode2, activeBranch, pendingBranch, pendingId, effects, parentComponent: parentComponent2, container: container2 } = suspense;
        if (suspense.isHydrating) {
          suspense.isHydrating = false;
        } else if (!resume) {
          const delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
          if (delayEnter) {
            activeBranch.transition.afterLeave = () => {
              if (pendingId === suspense.pendingId) {
                move(
                  pendingBranch,
                  container2,
                  anchor2,
                  0
                  /* MoveType.ENTER */
                );
              }
            };
          }
          let { anchor: anchor2 } = suspense;
          if (activeBranch) {
            anchor2 = next(activeBranch);
            unmount(activeBranch, parentComponent2, suspense, true);
          }
          if (!delayEnter) {
            move(
              pendingBranch,
              container2,
              anchor2,
              0
              /* MoveType.ENTER */
            );
          }
        }
        setActiveBranch(suspense, pendingBranch);
        suspense.pendingBranch = null;
        suspense.isInFallback = false;
        let parent2 = suspense.parent;
        let hasUnresolvedAncestor = false;
        while (parent2) {
          if (parent2.pendingBranch) {
            parent2.effects.push(...effects);
            hasUnresolvedAncestor = true;
            break;
          }
          parent2 = parent2.parent;
        }
        if (!hasUnresolvedAncestor) {
          queuePostFlushCb(effects);
        }
        suspense.effects = [];
        triggerEvent(vnode2, "onResolve");
      },
      fallback(fallbackVNode) {
        if (!suspense.pendingBranch) {
          return;
        }
        const { vnode: vnode2, activeBranch, parentComponent: parentComponent2, container: container2, isSVG: isSVG2 } = suspense;
        triggerEvent(vnode2, "onFallback");
        const anchor2 = next(activeBranch);
        const mountFallback = () => {
          if (!suspense.isInFallback) {
            return;
          }
          patch(
            null,
            fallbackVNode,
            container2,
            anchor2,
            parentComponent2,
            null,
            // fallback tree will not have suspense context
            isSVG2,
            slotScopeIds,
            optimized
          );
          setActiveBranch(suspense, fallbackVNode);
        };
        const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === "out-in";
        if (delayEnter) {
          activeBranch.transition.afterLeave = mountFallback;
        }
        suspense.isInFallback = true;
        unmount(
          activeBranch,
          parentComponent2,
          null,
          // no suspense so unmount hooks fire now
          true
          // shouldRemove
        );
        if (!delayEnter) {
          mountFallback();
        }
      },
      move(container2, anchor2, type) {
        suspense.activeBranch && move(suspense.activeBranch, container2, anchor2, type);
        suspense.container = container2;
      },
      next() {
        return suspense.activeBranch && next(suspense.activeBranch);
      },
      registerDep(instance, setupRenderEffect) {
        const isInPendingSuspense = !!suspense.pendingBranch;
        if (isInPendingSuspense) {
          suspense.deps++;
        }
        const hydratedEl = instance.vnode.el;
        instance.asyncDep.catch((err) => {
          handleError(
            err,
            instance,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        }).then((asyncSetupResult) => {
          if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) {
            return;
          }
          instance.asyncResolved = true;
          const { vnode: vnode2 } = instance;
          {
            pushWarningContext(vnode2);
          }
          handleSetupResult(instance, asyncSetupResult, false);
          if (hydratedEl) {
            vnode2.el = hydratedEl;
          }
          const placeholder = !hydratedEl && instance.subTree.el;
          setupRenderEffect(
            instance,
            vnode2,
            // component may have been moved before resolve.
            // if this is not a hydration, instance.subTree will be the comment
            // placeholder.
            parentNode(hydratedEl || instance.subTree.el),
            // anchor will not be used if this is hydration, so only need to
            // consider the comment placeholder case.
            hydratedEl ? null : next(instance.subTree),
            suspense,
            isSVG,
            optimized
          );
          if (placeholder) {
            remove2(placeholder);
          }
          updateHOCHostEl(instance, vnode2.el);
          {
            popWarningContext();
          }
          if (isInPendingSuspense && --suspense.deps === 0) {
            suspense.resolve();
          }
        });
      },
      unmount(parentSuspense, doRemove) {
        suspense.isUnmounted = true;
        if (suspense.activeBranch) {
          unmount(suspense.activeBranch, parentComponent, parentSuspense, doRemove);
        }
        if (suspense.pendingBranch) {
          unmount(suspense.pendingBranch, parentComponent, parentSuspense, doRemove);
        }
      }
    };
    return suspense;
  }
  function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals, hydrateNode) {
    const suspense = vnode.suspense = createSuspenseBoundary(
      vnode,
      parentSuspense,
      parentComponent,
      node.parentNode,
      document.createElement("div"),
      null,
      isSVG,
      slotScopeIds,
      optimized,
      rendererInternals,
      true
      /* hydrating */
    );
    const result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, slotScopeIds, optimized);
    if (suspense.deps === 0) {
      suspense.resolve();
    }
    return result;
  }
  function normalizeSuspenseChildren(vnode) {
    const { shapeFlag, children } = vnode;
    const isSlotChildren = shapeFlag & 32;
    vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children.default : children);
    vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
  }
  function normalizeSuspenseSlot(s2) {
    let block;
    if (isFunction(s2)) {
      const trackBlock = isBlockTreeEnabled && s2._c;
      if (trackBlock) {
        s2._d = false;
        openBlock();
      }
      s2 = s2();
      if (trackBlock) {
        s2._d = true;
        block = currentBlock;
        closeBlock();
      }
    }
    if (isArray(s2)) {
      const singleChild = filterSingleRoot(s2);
      if (!singleChild) {
        warn$1(`<Suspense> slots expect a single root node.`);
      }
      s2 = singleChild;
    }
    s2 = normalizeVNode(s2);
    if (block && !s2.dynamicChildren) {
      s2.dynamicChildren = block.filter((c2) => c2 !== s2);
    }
    return s2;
  }
  function queueEffectWithSuspense(fn2, suspense) {
    if (suspense && suspense.pendingBranch) {
      if (isArray(fn2)) {
        suspense.effects.push(...fn2);
      } else {
        suspense.effects.push(fn2);
      }
    } else {
      queuePostFlushCb(fn2);
    }
  }
  function setActiveBranch(suspense, branch) {
    suspense.activeBranch = branch;
    const { vnode, parentComponent } = suspense;
    const el2 = vnode.el = branch.el;
    if (parentComponent && parentComponent.subTree === vnode) {
      parentComponent.vnode.el = el2;
      updateHOCHostEl(parentComponent, el2);
    }
  }
  function provide(key, value) {
    if (!currentInstance) {
      {
        warn$1(`provide() can only be used inside setup().`);
      }
    } else {
      let provides = currentInstance.provides;
      const parentProvides = currentInstance.parent && currentInstance.parent.provides;
      if (parentProvides === provides) {
        provides = currentInstance.provides = Object.create(parentProvides);
      }
      provides[key] = value;
    }
  }
  function inject(key, defaultValue, treatDefaultAsFactory = false) {
    const instance = currentInstance || currentRenderingInstance;
    if (instance) {
      const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
      if (provides && key in provides) {
        return provides[key];
      } else if (arguments.length > 1) {
        return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
      } else {
        warn$1(`injection "${String(key)}" not found.`);
      }
    } else {
      warn$1(`inject() can only be used inside setup() or functional components.`);
    }
  }
  function watchEffect(effect2, options) {
    return doWatch(effect2, null, options);
  }
  function watchPostEffect(effect2, options) {
    return doWatch(effect2, null, Object.assign(Object.assign({}, options), { flush: "post" }));
  }
  function watchSyncEffect(effect2, options) {
    return doWatch(effect2, null, Object.assign(Object.assign({}, options), { flush: "sync" }));
  }
  function watch(source, cb, options) {
    if (!isFunction(cb)) {
      warn$1(`\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`);
    }
    return doWatch(source, cb, options);
  }
  function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
    if (!cb) {
      if (immediate !== void 0) {
        warn$1(`watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`);
      }
      if (deep !== void 0) {
        warn$1(`watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`);
      }
    }
    const warnInvalidSource = (s2) => {
      warn$1(`Invalid watch source: `, s2, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
    };
    const instance = currentInstance;
    let getter;
    let forceTrigger = false;
    let isMultiSource = false;
    if (isRef(source)) {
      getter = () => source.value;
      forceTrigger = isShallow(source);
    } else if (isReactive(source)) {
      getter = () => source;
      deep = true;
    } else if (isArray(source)) {
      isMultiSource = true;
      forceTrigger = source.some((s2) => isReactive(s2) || isShallow(s2));
      getter = () => source.map((s2) => {
        if (isRef(s2)) {
          return s2.value;
        } else if (isReactive(s2)) {
          return traverse(s2);
        } else if (isFunction(s2)) {
          return callWithErrorHandling(
            s2,
            instance,
            2
            /* ErrorCodes.WATCH_GETTER */
          );
        } else {
          warnInvalidSource(s2);
        }
      });
    } else if (isFunction(source)) {
      if (cb) {
        getter = () => callWithErrorHandling(
          source,
          instance,
          2
          /* ErrorCodes.WATCH_GETTER */
        );
      } else {
        getter = () => {
          if (instance && instance.isUnmounted) {
            return;
          }
          if (cleanup) {
            cleanup();
          }
          return callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
        };
      }
    } else {
      getter = NOOP;
      warnInvalidSource(source);
    }
    if (cb && deep) {
      const baseGetter = getter;
      getter = () => traverse(baseGetter());
    }
    let cleanup;
    let onCleanup = (fn2) => {
      cleanup = effect2.onStop = () => {
        callWithErrorHandling(
          fn2,
          instance,
          4
          /* ErrorCodes.WATCH_CLEANUP */
        );
      };
    };
    let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
    const job = () => {
      if (!effect2.active) {
        return;
      }
      if (cb) {
        const newValue = effect2.run();
        if (deep || forceTrigger || (isMultiSource ? newValue.some((v2, i2) => hasChanged(v2, oldValue[i2])) : hasChanged(newValue, oldValue)) || false) {
          if (cleanup) {
            cleanup();
          }
          callWithAsyncErrorHandling(cb, instance, 3, [
            newValue,
            // pass undefined as the old value when it's changed for the first time
            oldValue === INITIAL_WATCHER_VALUE ? void 0 : oldValue,
            onCleanup
          ]);
          oldValue = newValue;
        }
      } else {
        effect2.run();
      }
    };
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === "sync") {
      scheduler = job;
    } else if (flush === "post") {
      scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
    } else {
      job.pre = true;
      if (instance)
        job.id = instance.uid;
      scheduler = () => queueJob(job);
    }
    const effect2 = new ReactiveEffect(getter, scheduler);
    {
      effect2.onTrack = onTrack;
      effect2.onTrigger = onTrigger;
    }
    if (cb) {
      if (immediate) {
        job();
      } else {
        oldValue = effect2.run();
      }
    } else if (flush === "post") {
      queuePostRenderEffect(effect2.run.bind(effect2), instance && instance.suspense);
    } else {
      effect2.run();
    }
    return () => {
      effect2.stop();
      if (instance && instance.scope) {
        remove(instance.scope.effects, effect2);
      }
    };
  }
  function instanceWatch(source, value, options) {
    const publicThis = this.proxy;
    const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
    let cb;
    if (isFunction(value)) {
      cb = value;
    } else {
      cb = value.handler;
      options = value;
    }
    const cur = currentInstance;
    setCurrentInstance(this);
    const res = doWatch(getter, cb.bind(publicThis), options);
    if (cur) {
      setCurrentInstance(cur);
    } else {
      unsetCurrentInstance();
    }
    return res;
  }
  function createPathGetter(ctx, path) {
    const segments = path.split(".");
    return () => {
      let cur = ctx;
      for (let i2 = 0; i2 < segments.length && cur; i2++) {
        cur = cur[segments[i2]];
      }
      return cur;
    };
  }
  function traverse(value, seen2) {
    if (!isObject(value) || value[
      "__v_skip"
      /* ReactiveFlags.SKIP */
    ]) {
      return value;
    }
    seen2 = seen2 || /* @__PURE__ */ new Set();
    if (seen2.has(value)) {
      return value;
    }
    seen2.add(value);
    if (isRef(value)) {
      traverse(value.value, seen2);
    } else if (isArray(value)) {
      for (let i2 = 0; i2 < value.length; i2++) {
        traverse(value[i2], seen2);
      }
    } else if (isSet(value) || isMap(value)) {
      value.forEach((v2) => {
        traverse(v2, seen2);
      });
    } else if (isPlainObject(value)) {
      for (const key in value) {
        traverse(value[key], seen2);
      }
    }
    return value;
  }
  function useTransitionState() {
    const state = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    onMounted(() => {
      state.isMounted = true;
    });
    onBeforeUnmount(() => {
      state.isUnmounting = true;
    });
    return state;
  }
  function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
      leavingVNodesCache = /* @__PURE__ */ Object.create(null);
      leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
  }
  function resolveTransitionHooks(vnode, props, state, instance) {
    const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
    const key = String(vnode.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode);
    const callHook2 = (hook, args) => {
      hook && callWithAsyncErrorHandling(hook, instance, 9, args);
    };
    const callAsyncHook = (hook, args) => {
      const done = args[1];
      callHook2(hook, args);
      if (isArray(hook)) {
        if (hook.every((hook2) => hook2.length <= 1))
          done();
      } else if (hook.length <= 1) {
        done();
      }
    };
    const hooks = {
      mode,
      persisted,
      beforeEnter(el2) {
        let hook = onBeforeEnter;
        if (!state.isMounted) {
          if (appear) {
            hook = onBeforeAppear || onBeforeEnter;
          } else {
            return;
          }
        }
        if (el2._leaveCb) {
          el2._leaveCb(
            true
            /* cancelled */
          );
        }
        const leavingVNode = leavingVNodesCache[key];
        if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
          leavingVNode.el._leaveCb();
        }
        callHook2(hook, [el2]);
      },
      enter(el2) {
        let hook = onEnter;
        let afterHook = onAfterEnter;
        let cancelHook = onEnterCancelled;
        if (!state.isMounted) {
          if (appear) {
            hook = onAppear || onEnter;
            afterHook = onAfterAppear || onAfterEnter;
            cancelHook = onAppearCancelled || onEnterCancelled;
          } else {
            return;
          }
        }
        let called = false;
        const done = el2._enterCb = (cancelled) => {
          if (called)
            return;
          called = true;
          if (cancelled) {
            callHook2(cancelHook, [el2]);
          } else {
            callHook2(afterHook, [el2]);
          }
          if (hooks.delayedLeave) {
            hooks.delayedLeave();
          }
          el2._enterCb = void 0;
        };
        if (hook) {
          callAsyncHook(hook, [el2, done]);
        } else {
          done();
        }
      },
      leave(el2, remove2) {
        const key2 = String(vnode.key);
        if (el2._enterCb) {
          el2._enterCb(
            true
            /* cancelled */
          );
        }
        if (state.isUnmounting) {
          return remove2();
        }
        callHook2(onBeforeLeave, [el2]);
        let called = false;
        const done = el2._leaveCb = (cancelled) => {
          if (called)
            return;
          called = true;
          remove2();
          if (cancelled) {
            callHook2(onLeaveCancelled, [el2]);
          } else {
            callHook2(onAfterLeave, [el2]);
          }
          el2._leaveCb = void 0;
          if (leavingVNodesCache[key2] === vnode) {
            delete leavingVNodesCache[key2];
          }
        };
        leavingVNodesCache[key2] = vnode;
        if (onLeave) {
          callAsyncHook(onLeave, [el2, done]);
        } else {
          done();
        }
      },
      clone(vnode2) {
        return resolveTransitionHooks(vnode2, props, state, instance);
      }
    };
    return hooks;
  }
  function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
      vnode = cloneVNode(vnode);
      vnode.children = null;
      return vnode;
    }
  }
  function getKeepAliveChild(vnode) {
    return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : void 0 : vnode;
  }
  function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 && vnode.component) {
      setTransitionHooks(vnode.component.subTree, hooks);
    } else if (vnode.shapeFlag & 128) {
      vnode.ssContent.transition = hooks.clone(vnode.ssContent);
      vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    } else {
      vnode.transition = hooks;
    }
  }
  function getTransitionRawChildren(children, keepComment = false, parentKey) {
    let ret = [];
    let keyedFragmentCount = 0;
    for (let i2 = 0; i2 < children.length; i2++) {
      let child = children[i2];
      const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i2);
      if (child.type === Fragment) {
        if (child.patchFlag & 128)
          keyedFragmentCount++;
        ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
      } else if (keepComment || child.type !== Comment) {
        ret.push(key != null ? cloneVNode(child, { key }) : child);
      }
    }
    if (keyedFragmentCount > 1) {
      for (let i2 = 0; i2 < ret.length; i2++) {
        ret[i2].patchFlag = -2;
      }
    }
    return ret;
  }
  function defineComponent(options) {
    return isFunction(options) ? { setup: options, name: options.name } : options;
  }
  function defineAsyncComponent(source) {
    if (isFunction(source)) {
      source = { loader: source };
    }
    const {
      loader,
      loadingComponent,
      errorComponent,
      delay = 200,
      timeout,
      // undefined = never times out
      suspensible = true,
      onError: userOnError
    } = source;
    let pendingRequest = null;
    let resolvedComp;
    let retries = 0;
    const retry = () => {
      retries++;
      pendingRequest = null;
      return load();
    };
    const load = () => {
      let thisRequest;
      return pendingRequest || (thisRequest = pendingRequest = loader().catch((err) => {
        err = err instanceof Error ? err : new Error(String(err));
        if (userOnError) {
          return new Promise((resolve2, reject) => {
            const userRetry = () => resolve2(retry());
            const userFail = () => reject(err);
            userOnError(err, userRetry, userFail, retries + 1);
          });
        } else {
          throw err;
        }
      }).then((comp) => {
        if (thisRequest !== pendingRequest && pendingRequest) {
          return pendingRequest;
        }
        if (!comp) {
          warn$1(`Async component loader resolved to undefined. If you are using retry(), make sure to return its return value.`);
        }
        if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
          comp = comp.default;
        }
        if (comp && !isObject(comp) && !isFunction(comp)) {
          throw new Error(`Invalid async component load result: ${comp}`);
        }
        resolvedComp = comp;
        return comp;
      }));
    };
    return defineComponent({
      name: "AsyncComponentWrapper",
      __asyncLoader: load,
      get __asyncResolved() {
        return resolvedComp;
      },
      setup() {
        const instance = currentInstance;
        if (resolvedComp) {
          return () => createInnerComp(resolvedComp, instance);
        }
        const onError = (err) => {
          pendingRequest = null;
          handleError(
            err,
            instance,
            13,
            !errorComponent
            /* do not throw in dev if user provided error component */
          );
        };
        if (suspensible && instance.suspense || false) {
          return load().then((comp) => {
            return () => createInnerComp(comp, instance);
          }).catch((err) => {
            onError(err);
            return () => errorComponent ? createVNode(errorComponent, {
              error: err
            }) : null;
          });
        }
        const loaded = ref(false);
        const error = ref();
        const delayed = ref(!!delay);
        if (delay) {
          setTimeout(() => {
            delayed.value = false;
          }, delay);
        }
        if (timeout != null) {
          setTimeout(() => {
            if (!loaded.value && !error.value) {
              const err = new Error(`Async component timed out after ${timeout}ms.`);
              onError(err);
              error.value = err;
            }
          }, timeout);
        }
        load().then(() => {
          loaded.value = true;
          if (instance.parent && isKeepAlive(instance.parent.vnode)) {
            queueJob(instance.parent.update);
          }
        }).catch((err) => {
          onError(err);
          error.value = err;
        });
        return () => {
          if (loaded.value && resolvedComp) {
            return createInnerComp(resolvedComp, instance);
          } else if (error.value && errorComponent) {
            return createVNode(errorComponent, {
              error: error.value
            });
          } else if (loadingComponent && !delayed.value) {
            return createVNode(loadingComponent);
          }
        };
      }
    });
  }
  function createInnerComp(comp, { vnode: { ref: ref2, props, children, shapeFlag }, parent }) {
    const vnode = createVNode(comp, props, children);
    vnode.ref = ref2;
    return vnode;
  }
  function matches(pattern, name) {
    if (isArray(pattern)) {
      return pattern.some((p3) => matches(p3, name));
    } else if (isString(pattern)) {
      return pattern.split(",").includes(name);
    } else if (pattern.test) {
      return pattern.test(name);
    }
    return false;
  }
  function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a", target);
  }
  function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da", target);
  }
  function registerKeepAliveHook(hook, type, target = currentInstance) {
    const wrappedHook = hook.__wdc || (hook.__wdc = () => {
      let current = target;
      while (current) {
        if (current.isDeactivated) {
          return;
        }
        current = current.parent;
      }
      return hook();
    });
    injectHook(type, wrappedHook, target);
    if (target) {
      let current = target.parent;
      while (current && current.parent) {
        if (isKeepAlive(current.parent.vnode)) {
          injectToKeepAliveRoot(wrappedHook, type, target, current);
        }
        current = current.parent;
      }
    }
  }
  function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    const injected = injectHook(
      type,
      hook,
      keepAliveRoot,
      true
      /* prepend */
    );
    onUnmounted(() => {
      remove(keepAliveRoot[type], injected);
    }, target);
  }
  function resetShapeFlag(vnode) {
    let shapeFlag = vnode.shapeFlag;
    if (shapeFlag & 256) {
      shapeFlag -= 256;
    }
    if (shapeFlag & 512) {
      shapeFlag -= 512;
    }
    vnode.shapeFlag = shapeFlag;
  }
  function getInnerChild(vnode) {
    return vnode.shapeFlag & 128 ? vnode.ssContent : vnode;
  }
  function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
      const hooks = target[type] || (target[type] = []);
      const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
        if (target.isUnmounted) {
          return;
        }
        pauseTracking();
        setCurrentInstance(target);
        const res = callWithAsyncErrorHandling(hook, target, type, args);
        unsetCurrentInstance();
        resetTracking();
        return res;
      });
      if (prepend) {
        hooks.unshift(wrappedHook);
      } else {
        hooks.push(wrappedHook);
      }
      return wrappedHook;
    } else {
      const apiName = toHandlerKey(ErrorTypeStrings[type].replace(/ hook$/, ""));
      warn$1(`${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
    }
  }
  function onErrorCaptured(hook, target = currentInstance) {
    injectHook("ec", hook, target);
  }
  function validateDirectiveName(name) {
    if (isBuiltInDirective(name)) {
      warn$1("Do not use built-in directive ids as custom directive id: " + name);
    }
  }
  function withDirectives(vnode, directives) {
    const internalInstance = currentRenderingInstance;
    if (internalInstance === null) {
      warn$1(`withDirectives can only be used inside render functions.`);
      return vnode;
    }
    const instance = getExposeProxy(internalInstance) || internalInstance.proxy;
    const bindings = vnode.dirs || (vnode.dirs = []);
    for (let i2 = 0; i2 < directives.length; i2++) {
      let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i2];
      if (isFunction(dir)) {
        dir = {
          mounted: dir,
          updated: dir
        };
      }
      if (dir.deep) {
        traverse(value);
      }
      bindings.push({
        dir,
        instance,
        value,
        oldValue: void 0,
        arg,
        modifiers
      });
    }
    return vnode;
  }
  function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for (let i2 = 0; i2 < bindings.length; i2++) {
      const binding = bindings[i2];
      if (oldBindings) {
        binding.oldValue = oldBindings[i2].value;
      }
      let hook = binding.dir[name];
      if (hook) {
        pauseTracking();
        callWithAsyncErrorHandling(hook, instance, 8, [
          vnode.el,
          binding,
          vnode,
          prevVNode
        ]);
        resetTracking();
      }
    }
  }
  function resolveComponent(name, maybeSelfReference) {
    return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
  }
  function resolveDynamicComponent(component) {
    if (isString(component)) {
      return resolveAsset(COMPONENTS, component, false) || component;
    } else {
      return component || NULL_DYNAMIC_COMPONENT;
    }
  }
  function resolveDirective(name) {
    return resolveAsset(DIRECTIVES, name);
  }
  function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
    const instance = currentRenderingInstance || currentInstance;
    if (instance) {
      const Component = instance.type;
      if (type === COMPONENTS) {
        const selfName = getComponentName(
          Component,
          false
          /* do not include inferred name to avoid breaking existing code */
        );
        if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
          return Component;
        }
      }
      const res = (
        // local registration
        // check instance[type] first which is resolved for options API
        resolve(instance[type] || Component[type], name) || // global registration
        resolve(instance.appContext[type], name)
      );
      if (!res && maybeSelfReference) {
        return Component;
      }
      if (warnMissing && !res) {
        const extra = type === COMPONENTS ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : ``;
        warn$1(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
      }
      return res;
    } else {
      warn$1(`resolve${capitalize(type.slice(0, -1))} can only be used in render() or setup().`);
    }
  }
  function resolve(registry, name) {
    return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
  }
  function renderList(source, renderItem, cache, index) {
    let ret;
    const cached = cache && cache[index];
    if (isArray(source) || isString(source)) {
      ret = new Array(source.length);
      for (let i2 = 0, l2 = source.length; i2 < l2; i2++) {
        ret[i2] = renderItem(source[i2], i2, void 0, cached && cached[i2]);
      }
    } else if (typeof source === "number") {
      if (!Number.isInteger(source)) {
        warn$1(`The v-for range expect an integer value but got ${source}.`);
      }
      ret = new Array(source);
      for (let i2 = 0; i2 < source; i2++) {
        ret[i2] = renderItem(i2 + 1, i2, void 0, cached && cached[i2]);
      }
    } else if (isObject(source)) {
      if (source[Symbol.iterator]) {
        ret = Array.from(source, (item, i2) => renderItem(item, i2, void 0, cached && cached[i2]));
      } else {
        const keys = Object.keys(source);
        ret = new Array(keys.length);
        for (let i2 = 0, l2 = keys.length; i2 < l2; i2++) {
          const key = keys[i2];
          ret[i2] = renderItem(source[key], key, i2, cached && cached[i2]);
        }
      }
    } else {
      ret = [];
    }
    if (cache) {
      cache[index] = ret;
    }
    return ret;
  }
  function createSlots(slots, dynamicSlots) {
    for (let i2 = 0; i2 < dynamicSlots.length; i2++) {
      const slot = dynamicSlots[i2];
      if (isArray(slot)) {
        for (let j2 = 0; j2 < slot.length; j2++) {
          slots[slot[j2].name] = slot[j2].fn;
        }
      } else if (slot) {
        slots[slot.name] = slot.key ? (...args) => {
          const res = slot.fn(...args);
          if (res)
            res.key = slot.key;
          return res;
        } : slot.fn;
      }
    }
    return slots;
  }
  function renderSlot(slots, name, props = {}, fallback, noSlotted) {
    if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
      return createVNode("slot", name === "default" ? null : { name }, fallback && fallback());
    }
    let slot = slots[name];
    if (slot && slot.length > 1) {
      warn$1(`SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template.`);
      slot = () => [];
    }
    if (slot && slot._c) {
      slot._d = false;
    }
    openBlock();
    const validSlotContent = slot && ensureValidVNode(slot(props));
    const rendered = createBlock(
      Fragment,
      {
        key: props.key || // slot content array of a dynamic conditional slot may have a branch
        // key attached in the `createSlots` helper, respect that
        validSlotContent && validSlotContent.key || `_${name}`
      },
      validSlotContent || (fallback ? fallback() : []),
      validSlotContent && slots._ === 1 ? 64 : -2
      /* PatchFlags.BAIL */
    );
    if (!noSlotted && rendered.scopeId) {
      rendered.slotScopeIds = [rendered.scopeId + "-s"];
    }
    if (slot && slot._c) {
      slot._d = true;
    }
    return rendered;
  }
  function ensureValidVNode(vnodes) {
    return vnodes.some((child) => {
      if (!isVNode(child))
        return true;
      if (child.type === Comment)
        return false;
      if (child.type === Fragment && !ensureValidVNode(child.children))
        return false;
      return true;
    }) ? vnodes : null;
  }
  function toHandlers(obj, preserveCaseIfNecessary) {
    const ret = {};
    if (!isObject(obj)) {
      warn$1(`v-on with no argument expects an object value.`);
      return ret;
    }
    for (const key in obj) {
      ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? `on:${key}` : toHandlerKey(key)] = obj[key];
    }
    return ret;
  }
  function createDevRenderContext(instance) {
    const target = {};
    Object.defineProperty(target, `_`, {
      configurable: true,
      enumerable: false,
      get: () => instance
    });
    Object.keys(publicPropertiesMap).forEach((key) => {
      Object.defineProperty(target, key, {
        configurable: true,
        enumerable: false,
        get: () => publicPropertiesMap[key](instance),
        // intercepted by the proxy so no need for implementation,
        // but needed to prevent set errors
        set: NOOP
      });
    });
    return target;
  }
  function exposePropsOnRenderContext(instance) {
    const { ctx, propsOptions: [propsOptions] } = instance;
    if (propsOptions) {
      Object.keys(propsOptions).forEach((key) => {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => instance.props[key],
          set: NOOP
        });
      });
    }
  }
  function exposeSetupStateOnRenderContext(instance) {
    const { ctx, setupState } = instance;
    Object.keys(toRaw(setupState)).forEach((key) => {
      if (!setupState.__isScriptSetup) {
        if (isReservedPrefix(key[0])) {
          warn$1(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
          return;
        }
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => setupState[key],
          set: NOOP
        });
      }
    });
  }
  function createDuplicateChecker() {
    const cache = /* @__PURE__ */ Object.create(null);
    return (type, key) => {
      if (cache[key]) {
        warn$1(`${type} property "${key}" is already defined in ${cache[key]}.`);
      } else {
        cache[key] = type;
      }
    };
  }
  function applyOptions(instance) {
    const options = resolveMergedOptions(instance);
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    shouldCacheAccess = false;
    if (options.beforeCreate) {
      callHook(
        options.beforeCreate,
        instance,
        "bc"
        /* LifecycleHooks.BEFORE_CREATE */
      );
    }
    const {
      // state
      data: dataOptions,
      computed: computedOptions,
      methods,
      watch: watchOptions,
      provide: provideOptions,
      inject: injectOptions,
      // lifecycle
      created,
      beforeMount,
      mounted,
      beforeUpdate,
      updated,
      activated,
      deactivated,
      beforeDestroy,
      beforeUnmount,
      destroyed,
      unmounted,
      render: render2,
      renderTracked,
      renderTriggered,
      errorCaptured,
      serverPrefetch,
      // public API
      expose,
      inheritAttrs,
      // assets
      components,
      directives,
      filters
    } = options;
    const checkDuplicateProperties = createDuplicateChecker();
    {
      const [propsOptions] = instance.propsOptions;
      if (propsOptions) {
        for (const key in propsOptions) {
          checkDuplicateProperties("Props", key);
        }
      }
    }
    if (injectOptions) {
      resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
    }
    if (methods) {
      for (const key in methods) {
        const methodHandler = methods[key];
        if (isFunction(methodHandler)) {
          {
            Object.defineProperty(ctx, key, {
              value: methodHandler.bind(publicThis),
              configurable: true,
              enumerable: true,
              writable: true
            });
          }
          {
            checkDuplicateProperties("Methods", key);
          }
        } else {
          warn$1(`Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`);
        }
      }
    }
    if (dataOptions) {
      if (!isFunction(dataOptions)) {
        warn$1(`The data option must be a function. Plain object usage is no longer supported.`);
      }
      const data = dataOptions.call(publicThis, publicThis);
      if (isPromise(data)) {
        warn$1(`data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`);
      }
      if (!isObject(data)) {
        warn$1(`data() should return an object.`);
      } else {
        instance.data = reactive(data);
        {
          for (const key in data) {
            checkDuplicateProperties("Data", key);
            if (!isReservedPrefix(key[0])) {
              Object.defineProperty(ctx, key, {
                configurable: true,
                enumerable: true,
                get: () => data[key],
                set: NOOP
              });
            }
          }
        }
      }
    }
    shouldCacheAccess = true;
    if (computedOptions) {
      for (const key in computedOptions) {
        const opt = computedOptions[key];
        const get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
        if (get2 === NOOP) {
          warn$1(`Computed property "${key}" has no getter.`);
        }
        const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : () => {
          warn$1(`Write operation failed: computed property "${key}" is readonly.`);
        };
        const c2 = computed$1({
          get: get2,
          set: set2
        });
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => c2.value,
          set: (v2) => c2.value = v2
        });
        {
          checkDuplicateProperties("Computed", key);
        }
      }
    }
    if (watchOptions) {
      for (const key in watchOptions) {
        createWatcher(watchOptions[key], ctx, publicThis, key);
      }
    }
    if (provideOptions) {
      const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
      Reflect.ownKeys(provides).forEach((key) => {
        provide(key, provides[key]);
      });
    }
    if (created) {
      callHook(
        created,
        instance,
        "c"
        /* LifecycleHooks.CREATED */
      );
    }
    function registerLifecycleHook(register, hook) {
      if (isArray(hook)) {
        hook.forEach((_hook) => register(_hook.bind(publicThis)));
      } else if (hook) {
        register(hook.bind(publicThis));
      }
    }
    registerLifecycleHook(onBeforeMount, beforeMount);
    registerLifecycleHook(onMounted, mounted);
    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
    registerLifecycleHook(onUpdated, updated);
    registerLifecycleHook(onActivated, activated);
    registerLifecycleHook(onDeactivated, deactivated);
    registerLifecycleHook(onErrorCaptured, errorCaptured);
    registerLifecycleHook(onRenderTracked, renderTracked);
    registerLifecycleHook(onRenderTriggered, renderTriggered);
    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
    registerLifecycleHook(onUnmounted, unmounted);
    registerLifecycleHook(onServerPrefetch, serverPrefetch);
    if (isArray(expose)) {
      if (expose.length) {
        const exposed = instance.exposed || (instance.exposed = {});
        expose.forEach((key) => {
          Object.defineProperty(exposed, key, {
            get: () => publicThis[key],
            set: (val) => publicThis[key] = val
          });
        });
      } else if (!instance.exposed) {
        instance.exposed = {};
      }
    }
    if (render2 && instance.render === NOOP) {
      instance.render = render2;
    }
    if (inheritAttrs != null) {
      instance.inheritAttrs = inheritAttrs;
    }
    if (components)
      instance.components = components;
    if (directives)
      instance.directives = directives;
  }
  function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
    if (isArray(injectOptions)) {
      injectOptions = normalizeInject(injectOptions);
    }
    for (const key in injectOptions) {
      const opt = injectOptions[key];
      let injected;
      if (isObject(opt)) {
        if ("default" in opt) {
          injected = inject(
            opt.from || key,
            opt.default,
            true
            /* treat default function as factory */
          );
        } else {
          injected = inject(opt.from || key);
        }
      } else {
        injected = inject(opt);
      }
      if (isRef(injected)) {
        if (unwrapRef) {
          Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: () => injected.value,
            set: (v2) => injected.value = v2
          });
        } else {
          {
            warn$1(`injected property "${key}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`);
          }
          ctx[key] = injected;
        }
      } else {
        ctx[key] = injected;
      }
      {
        checkDuplicateProperties("Inject", key);
      }
    }
  }
  function callHook(hook, instance, type) {
    callWithAsyncErrorHandling(isArray(hook) ? hook.map((h3) => h3.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
  }
  function createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
    if (isString(raw)) {
      const handler = ctx[raw];
      if (isFunction(handler)) {
        watch(getter, handler);
      } else {
        warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
      }
    } else if (isFunction(raw)) {
      watch(getter, raw.bind(publicThis));
    } else if (isObject(raw)) {
      if (isArray(raw)) {
        raw.forEach((r2) => createWatcher(r2, ctx, publicThis, key));
      } else {
        const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
        if (isFunction(handler)) {
          watch(getter, handler, raw);
        } else {
          warn$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
        }
      }
    } else {
      warn$1(`Invalid watch option: "${key}"`, raw);
    }
  }
  function resolveMergedOptions(instance) {
    const base = instance.type;
    const { mixins, extends: extendsOptions } = base;
    const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
    const cached = cache.get(base);
    let resolved;
    if (cached) {
      resolved = cached;
    } else if (!globalMixins.length && !mixins && !extendsOptions) {
      {
        resolved = base;
      }
    } else {
      resolved = {};
      if (globalMixins.length) {
        globalMixins.forEach((m2) => mergeOptions(resolved, m2, optionMergeStrategies, true));
      }
      mergeOptions(resolved, base, optionMergeStrategies);
    }
    if (isObject(base)) {
      cache.set(base, resolved);
    }
    return resolved;
  }
  function mergeOptions(to2, from, strats, asMixin = false) {
    const { mixins, extends: extendsOptions } = from;
    if (extendsOptions) {
      mergeOptions(to2, extendsOptions, strats, true);
    }
    if (mixins) {
      mixins.forEach((m2) => mergeOptions(to2, m2, strats, true));
    }
    for (const key in from) {
      if (asMixin && key === "expose") {
        warn$1(`"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`);
      } else {
        const strat = internalOptionMergeStrats[key] || strats && strats[key];
        to2[key] = strat ? strat(to2[key], from[key]) : from[key];
      }
    }
    return to2;
  }
  function mergeDataFn(to2, from) {
    if (!from) {
      return to2;
    }
    if (!to2) {
      return from;
    }
    return function mergedDataFn() {
      return extend(isFunction(to2) ? to2.call(this, this) : to2, isFunction(from) ? from.call(this, this) : from);
    };
  }
  function mergeInject(to2, from) {
    return mergeObjectOptions(normalizeInject(to2), normalizeInject(from));
  }
  function normalizeInject(raw) {
    if (isArray(raw)) {
      const res = {};
      for (let i2 = 0; i2 < raw.length; i2++) {
        res[raw[i2]] = raw[i2];
      }
      return res;
    }
    return raw;
  }
  function mergeAsArray(to2, from) {
    return to2 ? [...new Set([].concat(to2, from))] : from;
  }
  function mergeObjectOptions(to2, from) {
    return to2 ? extend(extend(/* @__PURE__ */ Object.create(null), to2), from) : from;
  }
  function mergeWatchOptions(to2, from) {
    if (!to2)
      return from;
    if (!from)
      return to2;
    const merged = extend(/* @__PURE__ */ Object.create(null), to2);
    for (const key in from) {
      merged[key] = mergeAsArray(to2[key], from[key]);
    }
    return merged;
  }
  function initProps(instance, rawProps, isStateful, isSSR = false) {
    const props = {};
    const attrs = {};
    def(attrs, InternalObjectKey, 1);
    instance.propsDefaults = /* @__PURE__ */ Object.create(null);
    setFullProps(instance, rawProps, props, attrs);
    for (const key in instance.propsOptions[0]) {
      if (!(key in props)) {
        props[key] = void 0;
      }
    }
    {
      validateProps(rawProps || {}, props, instance);
    }
    if (isStateful) {
      instance.props = isSSR ? props : shallowReactive(props);
    } else {
      if (!instance.type.props) {
        instance.props = attrs;
      } else {
        instance.props = props;
      }
    }
    instance.attrs = attrs;
  }
  function isInHmrContext(instance) {
    while (instance) {
      if (instance.type.__hmrId)
        return true;
      instance = instance.parent;
    }
  }
  function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props, attrs, vnode: { patchFlag } } = instance;
    const rawCurrentProps = toRaw(props);
    const [options] = instance.propsOptions;
    let hasAttrsChanged = false;
    if (
      // always force full diff in dev
      // - #1942 if hmr is enabled with sfc component
      // - vite#872 non-sfc component used by sfc component
      !isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)
    ) {
      if (patchFlag & 8) {
        const propsToUpdate = instance.vnode.dynamicProps;
        for (let i2 = 0; i2 < propsToUpdate.length; i2++) {
          let key = propsToUpdate[i2];
          if (isEmitListener(instance.emitsOptions, key)) {
            continue;
          }
          const value = rawProps[key];
          if (options) {
            if (hasOwn(attrs, key)) {
              if (value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
              }
            } else {
              const camelizedKey = camelize(key);
              props[camelizedKey] = resolvePropValue(
                options,
                rawCurrentProps,
                camelizedKey,
                value,
                instance,
                false
                /* isAbsent */
              );
            }
          } else {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          }
        }
      }
    } else {
      if (setFullProps(instance, rawProps, props, attrs)) {
        hasAttrsChanged = true;
      }
      let kebabKey;
      for (const key in rawCurrentProps) {
        if (!rawProps || // for camelCase
        !hasOwn(rawProps, key) && // it's possible the original props was passed in as kebab-case
        // and converted to camelCase (#955)
        ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
          if (options) {
            if (rawPrevProps && // for camelCase
            (rawPrevProps[key] !== void 0 || // for kebab-case
            rawPrevProps[kebabKey] !== void 0)) {
              props[key] = resolvePropValue(
                options,
                rawCurrentProps,
                key,
                void 0,
                instance,
                true
                /* isAbsent */
              );
            }
          } else {
            delete props[key];
          }
        }
      }
      if (attrs !== rawCurrentProps) {
        for (const key in attrs) {
          if (!rawProps || !hasOwn(rawProps, key) && true) {
            delete attrs[key];
            hasAttrsChanged = true;
          }
        }
      }
    }
    if (hasAttrsChanged) {
      trigger(instance, "set", "$attrs");
    }
    {
      validateProps(rawProps || {}, props, instance);
    }
  }
  function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) {
      for (let key in rawProps) {
        if (isReservedProp(key)) {
          continue;
        }
        const value = rawProps[key];
        let camelKey;
        if (options && hasOwn(options, camelKey = camelize(key))) {
          if (!needCastKeys || !needCastKeys.includes(camelKey)) {
            props[camelKey] = value;
          } else {
            (rawCastValues || (rawCastValues = {}))[camelKey] = value;
          }
        } else if (!isEmitListener(instance.emitsOptions, key)) {
          if (!(key in attrs) || value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
    if (needCastKeys) {
      const rawCurrentProps = toRaw(props);
      const castValues = rawCastValues || EMPTY_OBJ;
      for (let i2 = 0; i2 < needCastKeys.length; i2++) {
        const key = needCastKeys[i2];
        props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
      }
    }
    return hasAttrsChanged;
  }
  function resolvePropValue(options, props, key, value, instance, isAbsent) {
    const opt = options[key];
    if (opt != null) {
      const hasDefault = hasOwn(opt, "default");
      if (hasDefault && value === void 0) {
        const defaultValue = opt.default;
        if (opt.type !== Function && isFunction(defaultValue)) {
          const { propsDefaults } = instance;
          if (key in propsDefaults) {
            value = propsDefaults[key];
          } else {
            setCurrentInstance(instance);
            value = propsDefaults[key] = defaultValue.call(null, props);
            unsetCurrentInstance();
          }
        } else {
          value = defaultValue;
        }
      }
      if (opt[
        0
        /* BooleanFlags.shouldCast */
      ]) {
        if (isAbsent && !hasDefault) {
          value = false;
        } else if (opt[
          1
          /* BooleanFlags.shouldCastTrue */
        ] && (value === "" || value === hyphenate(key))) {
          value = true;
        }
      }
    }
    return value;
  }
  function normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) {
      return cached;
    }
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    let hasExtends = false;
    if (!isFunction(comp)) {
      const extendProps = (raw2) => {
        hasExtends = true;
        const [props, keys] = normalizePropsOptions(raw2, appContext, true);
        extend(normalized, props);
        if (keys)
          needCastKeys.push(...keys);
      };
      if (!asMixin && appContext.mixins.length) {
        appContext.mixins.forEach(extendProps);
      }
      if (comp.extends) {
        extendProps(comp.extends);
      }
      if (comp.mixins) {
        comp.mixins.forEach(extendProps);
      }
    }
    if (!raw && !hasExtends) {
      if (isObject(comp)) {
        cache.set(comp, EMPTY_ARR);
      }
      return EMPTY_ARR;
    }
    if (isArray(raw)) {
      for (let i2 = 0; i2 < raw.length; i2++) {
        if (!isString(raw[i2])) {
          warn$1(`props must be strings when using array syntax.`, raw[i2]);
        }
        const normalizedKey = camelize(raw[i2]);
        if (validatePropName(normalizedKey)) {
          normalized[normalizedKey] = EMPTY_OBJ;
        }
      }
    } else if (raw) {
      if (!isObject(raw)) {
        warn$1(`invalid props options`, raw);
      }
      for (const key in raw) {
        const normalizedKey = camelize(key);
        if (validatePropName(normalizedKey)) {
          const opt = raw[key];
          const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : opt;
          if (prop) {
            const booleanIndex = getTypeIndex(Boolean, prop.type);
            const stringIndex = getTypeIndex(String, prop.type);
            prop[
              0
              /* BooleanFlags.shouldCast */
            ] = booleanIndex > -1;
            prop[
              1
              /* BooleanFlags.shouldCastTrue */
            ] = stringIndex < 0 || booleanIndex < stringIndex;
            if (booleanIndex > -1 || hasOwn(prop, "default")) {
              needCastKeys.push(normalizedKey);
            }
          }
        }
      }
    }
    const res = [normalized, needCastKeys];
    if (isObject(comp)) {
      cache.set(comp, res);
    }
    return res;
  }
  function validatePropName(key) {
    if (key[0] !== "$") {
      return true;
    } else {
      warn$1(`Invalid prop name: "${key}" is a reserved property.`);
    }
    return false;
  }
  function getType(ctor) {
    const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ctor === null ? "null" : "";
  }
  function isSameType(a2, b2) {
    return getType(a2) === getType(b2);
  }
  function getTypeIndex(type, expectedTypes) {
    if (isArray(expectedTypes)) {
      return expectedTypes.findIndex((t2) => isSameType(t2, type));
    } else if (isFunction(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1;
    }
    return -1;
  }
  function validateProps(rawProps, props, instance) {
    const resolvedValues = toRaw(props);
    const options = instance.propsOptions[0];
    for (const key in options) {
      let opt = options[key];
      if (opt == null)
        continue;
      validateProp(key, resolvedValues[key], opt, !hasOwn(rawProps, key) && !hasOwn(rawProps, hyphenate(key)));
    }
  }
  function validateProp(name, value, prop, isAbsent) {
    const { type, required, validator } = prop;
    if (required && isAbsent) {
      warn$1('Missing required prop: "' + name + '"');
      return;
    }
    if (value == null && !prop.required) {
      return;
    }
    if (type != null && type !== true) {
      let isValid = false;
      const types = isArray(type) ? type : [type];
      const expectedTypes = [];
      for (let i2 = 0; i2 < types.length && !isValid; i2++) {
        const { valid, expectedType } = assertType(value, types[i2]);
        expectedTypes.push(expectedType || "");
        isValid = valid;
      }
      if (!isValid) {
        warn$1(getInvalidTypeMessage(name, value, expectedTypes));
        return;
      }
    }
    if (validator && !validator(value)) {
      warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
    }
  }
  function assertType(value, type) {
    let valid;
    const expectedType = getType(type);
    if (isSimpleType(expectedType)) {
      const t2 = typeof value;
      valid = t2 === expectedType.toLowerCase();
      if (!valid && t2 === "object") {
        valid = value instanceof type;
      }
    } else if (expectedType === "Object") {
      valid = isObject(value);
    } else if (expectedType === "Array") {
      valid = isArray(value);
    } else if (expectedType === "null") {
      valid = value === null;
    } else {
      valid = value instanceof type;
    }
    return {
      valid,
      expectedType
    };
  }
  function getInvalidTypeMessage(name, value, expectedTypes) {
    let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(capitalize).join(" | ")}`;
    const expectedType = expectedTypes[0];
    const receivedType = toRawType(value);
    const expectedValue = styleValue(value, expectedType);
    const receivedValue = styleValue(value, receivedType);
    if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
      message += ` with value ${expectedValue}`;
    }
    message += `, got ${receivedType} `;
    if (isExplicable(receivedType)) {
      message += `with value ${receivedValue}.`;
    }
    return message;
  }
  function styleValue(value, type) {
    if (type === "String") {
      return `"${value}"`;
    } else if (type === "Number") {
      return `${Number(value)}`;
    } else {
      return `${value}`;
    }
  }
  function isExplicable(type) {
    const explicitTypes = ["string", "number", "boolean"];
    return explicitTypes.some((elem) => type.toLowerCase() === elem);
  }
  function isBoolean(...args) {
    return args.some((elem) => elem.toLowerCase() === "boolean");
  }
  function createAppContext() {
    return {
      app: null,
      config: {
        isNativeTag: NO,
        performance: false,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {}
      },
      mixins: [],
      components: {},
      directives: {},
      provides: /* @__PURE__ */ Object.create(null),
      optionsCache: /* @__PURE__ */ new WeakMap(),
      propsCache: /* @__PURE__ */ new WeakMap(),
      emitsCache: /* @__PURE__ */ new WeakMap()
    };
  }
  function createAppAPI(render2, hydrate2) {
    return function createApp2(rootComponent, rootProps = null) {
      if (!isFunction(rootComponent)) {
        rootComponent = Object.assign({}, rootComponent);
      }
      if (rootProps != null && !isObject(rootProps)) {
        warn$1(`root props passed to app.mount() must be an object.`);
        rootProps = null;
      }
      const context = createAppContext();
      const installedPlugins = /* @__PURE__ */ new Set();
      let isMounted = false;
      const app = context.app = {
        _uid: uid++,
        _component: rootComponent,
        _props: rootProps,
        _container: null,
        _context: context,
        _instance: null,
        version,
        get config() {
          return context.config;
        },
        set config(v2) {
          {
            warn$1(`app.config cannot be replaced. Modify individual options instead.`);
          }
        },
        use(plugin, ...options) {
          if (installedPlugins.has(plugin)) {
            warn$1(`Plugin has already been applied to target app.`);
          } else if (plugin && isFunction(plugin.install)) {
            installedPlugins.add(plugin);
            plugin.install(app, ...options);
          } else if (isFunction(plugin)) {
            installedPlugins.add(plugin);
            plugin(app, ...options);
          } else {
            warn$1(`A plugin must either be a function or an object with an "install" function.`);
          }
          return app;
        },
        mixin(mixin) {
          {
            if (!context.mixins.includes(mixin)) {
              context.mixins.push(mixin);
            } else {
              warn$1("Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : ""));
            }
          }
          return app;
        },
        component(name, component) {
          {
            validateComponentName(name, context.config);
          }
          if (!component) {
            return context.components[name];
          }
          if (context.components[name]) {
            warn$1(`Component "${name}" has already been registered in target app.`);
          }
          context.components[name] = component;
          return app;
        },
        directive(name, directive) {
          {
            validateDirectiveName(name);
          }
          if (!directive) {
            return context.directives[name];
          }
          if (context.directives[name]) {
            warn$1(`Directive "${name}" has already been registered in target app.`);
          }
          context.directives[name] = directive;
          return app;
        },
        mount(rootContainer, isHydrate, isSVG) {
          if (!isMounted) {
            if (rootContainer.__vue_app__) {
              warn$1(`There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`);
            }
            const vnode = createVNode(rootComponent, rootProps);
            vnode.appContext = context;
            {
              context.reload = () => {
                render2(cloneVNode(vnode), rootContainer, isSVG);
              };
            }
            if (isHydrate && hydrate2) {
              hydrate2(vnode, rootContainer);
            } else {
              render2(vnode, rootContainer, isSVG);
            }
            isMounted = true;
            app._container = rootContainer;
            rootContainer.__vue_app__ = app;
            {
              app._instance = vnode.component;
              devtoolsInitApp(app, version);
            }
            return getExposeProxy(vnode.component) || vnode.component.proxy;
          } else {
            warn$1(`App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``);
          }
        },
        unmount() {
          if (isMounted) {
            render2(null, app._container);
            {
              app._instance = null;
              devtoolsUnmountApp(app);
            }
            delete app._container.__vue_app__;
          } else {
            warn$1(`Cannot unmount an app that is not mounted.`);
          }
        },
        provide(key, value) {
          if (key in context.provides) {
            warn$1(`App already provides property with key "${String(key)}". It will be overwritten with the new value.`);
          }
          context.provides[key] = value;
          return app;
        }
      };
      return app;
    };
  }
  function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if (isArray(rawRef)) {
      rawRef.forEach((r2, i2) => setRef(r2, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i2] : oldRawRef), parentSuspense, vnode, isUnmount));
      return;
    }
    if (isAsyncWrapper(vnode) && !isUnmount) {
      return;
    }
    const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner, r: ref2 } = rawRef;
    if (!owner) {
      warn$1(`Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`);
      return;
    }
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
    const setupState = owner.setupState;
    if (oldRef != null && oldRef !== ref2) {
      if (isString(oldRef)) {
        refs[oldRef] = null;
        if (hasOwn(setupState, oldRef)) {
          setupState[oldRef] = null;
        }
      } else if (isRef(oldRef)) {
        oldRef.value = null;
      }
    }
    if (isFunction(ref2)) {
      callWithErrorHandling(ref2, owner, 12, [value, refs]);
    } else {
      const _isString = isString(ref2);
      const _isRef = isRef(ref2);
      if (_isString || _isRef) {
        const doSet = () => {
          if (rawRef.f) {
            const existing = _isString ? hasOwn(setupState, ref2) ? setupState[ref2] : refs[ref2] : ref2.value;
            if (isUnmount) {
              isArray(existing) && remove(existing, refValue);
            } else {
              if (!isArray(existing)) {
                if (_isString) {
                  refs[ref2] = [refValue];
                  if (hasOwn(setupState, ref2)) {
                    setupState[ref2] = refs[ref2];
                  }
                } else {
                  ref2.value = [refValue];
                  if (rawRef.k)
                    refs[rawRef.k] = ref2.value;
                }
              } else if (!existing.includes(refValue)) {
                existing.push(refValue);
              }
            }
          } else if (_isString) {
            refs[ref2] = value;
            if (hasOwn(setupState, ref2)) {
              setupState[ref2] = value;
            }
          } else if (_isRef) {
            ref2.value = value;
            if (rawRef.k)
              refs[rawRef.k] = value;
          } else {
            warn$1("Invalid template ref type:", ref2, `(${typeof ref2})`);
          }
        };
        if (value) {
          doSet.id = -1;
          queuePostRenderEffect(doSet, parentSuspense);
        } else {
          doSet();
        }
      } else {
        warn$1("Invalid template ref type:", ref2, `(${typeof ref2})`);
      }
    }
  }
  function createHydrationFunctions(rendererInternals) {
    const { mt: mountComponent, p: patch, o: { patchProp: patchProp2, createText, nextSibling, parentNode, remove: remove2, insert, createComment } } = rendererInternals;
    const hydrate2 = (vnode, container) => {
      if (!container.hasChildNodes()) {
        warn$1(`Attempting to hydrate existing markup but container is empty. Performing full mount instead.`);
        patch(null, vnode, container);
        flushPostFlushCbs();
        container._vnode = vnode;
        return;
      }
      hasMismatch = false;
      hydrateNode(container.firstChild, vnode, null, null, null);
      flushPostFlushCbs();
      container._vnode = vnode;
      if (hasMismatch && true) {
        console.error(`Hydration completed but contains mismatches.`);
      }
    };
    const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
      const isFragmentStart = isComment(node) && node.data === "[";
      const onMismatch = () => handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
      const { type, ref: ref2, shapeFlag, patchFlag } = vnode;
      let domType = node.nodeType;
      vnode.el = node;
      if (patchFlag === -2) {
        optimized = false;
        vnode.dynamicChildren = null;
      }
      let nextNode = null;
      switch (type) {
        case Text:
          if (domType !== 3) {
            if (vnode.children === "") {
              insert(vnode.el = createText(""), parentNode(node), node);
              nextNode = node;
            } else {
              nextNode = onMismatch();
            }
          } else {
            if (node.data !== vnode.children) {
              hasMismatch = true;
              warn$1(`Hydration text mismatch:
- Client: ${JSON.stringify(node.data)}
- Server: ${JSON.stringify(vnode.children)}`);
              node.data = vnode.children;
            }
            nextNode = nextSibling(node);
          }
          break;
        case Comment:
          if (domType !== 8 || isFragmentStart) {
            nextNode = onMismatch();
          } else {
            nextNode = nextSibling(node);
          }
          break;
        case Static:
          if (isFragmentStart) {
            node = nextSibling(node);
            domType = node.nodeType;
          }
          if (domType === 1 || domType === 3) {
            nextNode = node;
            const needToAdoptContent = !vnode.children.length;
            for (let i2 = 0; i2 < vnode.staticCount; i2++) {
              if (needToAdoptContent)
                vnode.children += nextNode.nodeType === 1 ? nextNode.outerHTML : nextNode.data;
              if (i2 === vnode.staticCount - 1) {
                vnode.anchor = nextNode;
              }
              nextNode = nextSibling(nextNode);
            }
            return isFragmentStart ? nextSibling(nextNode) : nextNode;
          } else {
            onMismatch();
          }
          break;
        case Fragment:
          if (!isFragmentStart) {
            nextNode = onMismatch();
          } else {
            nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
          }
          break;
        default:
          if (shapeFlag & 1) {
            if (domType !== 1 || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) {
              nextNode = onMismatch();
            } else {
              nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
            }
          } else if (shapeFlag & 6) {
            vnode.slotScopeIds = slotScopeIds;
            const container = parentNode(node);
            mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized);
            nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node);
            if (nextNode && isComment(nextNode) && nextNode.data === "teleport end") {
              nextNode = nextSibling(nextNode);
            }
            if (isAsyncWrapper(vnode)) {
              let subTree;
              if (isFragmentStart) {
                subTree = createVNode(Fragment);
                subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
              } else {
                subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
              }
              subTree.el = node;
              vnode.component.subTree = subTree;
            }
          } else if (shapeFlag & 64) {
            if (domType !== 8) {
              nextNode = onMismatch();
            } else {
              nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
            }
          } else if (shapeFlag & 128) {
            nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
          } else {
            warn$1("Invalid HostVNode type:", type, `(${typeof type})`);
          }
      }
      if (ref2 != null) {
        setRef(ref2, null, parentSuspense, vnode);
      }
      return nextNode;
    };
    const hydrateElement = (el2, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
      optimized = optimized || !!vnode.dynamicChildren;
      const { type, props, patchFlag, shapeFlag, dirs } = vnode;
      const forcePatchValue = type === "input" && dirs || type === "option";
      {
        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "created");
        }
        if (props) {
          if (forcePatchValue || !optimized || patchFlag & (16 | 32)) {
            for (const key in props) {
              if (forcePatchValue && key.endsWith("value") || isOn(key) && !isReservedProp(key)) {
                patchProp2(el2, key, null, props[key], false, void 0, parentComponent);
              }
            }
          } else if (props.onClick) {
            patchProp2(el2, "onClick", null, props.onClick, false, void 0, parentComponent);
          }
        }
        let vnodeHooks;
        if (vnodeHooks = props && props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHooks, parentComponent, vnode);
        }
        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
        }
        if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
          queueEffectWithSuspense(() => {
            vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
          }, parentSuspense);
        }
        if (shapeFlag & 16 && // skip if element has innerHTML / textContent
        !(props && (props.innerHTML || props.textContent))) {
          let next = hydrateChildren(el2.firstChild, vnode, el2, parentComponent, parentSuspense, slotScopeIds, optimized);
          let hasWarned2 = false;
          while (next) {
            hasMismatch = true;
            if (!hasWarned2) {
              warn$1(`Hydration children mismatch in <${vnode.type}>: server rendered element contains more child nodes than client vdom.`);
              hasWarned2 = true;
            }
            const cur = next;
            next = next.nextSibling;
            remove2(cur);
          }
        } else if (shapeFlag & 8) {
          if (el2.textContent !== vnode.children) {
            hasMismatch = true;
            warn$1(`Hydration text content mismatch in <${vnode.type}>:
- Client: ${el2.textContent}
- Server: ${vnode.children}`);
            el2.textContent = vnode.children;
          }
        }
      }
      return el2.nextSibling;
    };
    const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
      optimized = optimized || !!parentVNode.dynamicChildren;
      const children = parentVNode.children;
      const l2 = children.length;
      let hasWarned2 = false;
      for (let i2 = 0; i2 < l2; i2++) {
        const vnode = optimized ? children[i2] : children[i2] = normalizeVNode(children[i2]);
        if (node) {
          node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
        } else if (vnode.type === Text && !vnode.children) {
          continue;
        } else {
          hasMismatch = true;
          if (!hasWarned2) {
            warn$1(`Hydration children mismatch in <${container.tagName.toLowerCase()}>: server rendered element contains fewer child nodes than client vdom.`);
            hasWarned2 = true;
          }
          patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
        }
      }
      return node;
    };
    const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
      const { slotScopeIds: fragmentSlotScopeIds } = vnode;
      if (fragmentSlotScopeIds) {
        slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
      }
      const container = parentNode(node);
      const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
      if (next && isComment(next) && next.data === "]") {
        return nextSibling(vnode.anchor = next);
      } else {
        hasMismatch = true;
        insert(vnode.anchor = createComment(`]`), container, next);
        return next;
      }
    };
    const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
      hasMismatch = true;
      warn$1(`Hydration node mismatch:
- Client vnode:`, vnode.type, `
- Server rendered DOM:`, node, node.nodeType === 3 ? `(text)` : isComment(node) && node.data === "[" ? `(start of fragment)` : ``);
      vnode.el = null;
      if (isFragment) {
        const end = locateClosingAsyncAnchor(node);
        while (true) {
          const next2 = nextSibling(node);
          if (next2 && next2 !== end) {
            remove2(next2);
          } else {
            break;
          }
        }
      }
      const next = nextSibling(node);
      const container = parentNode(node);
      remove2(node);
      patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
      return next;
    };
    const locateClosingAsyncAnchor = (node) => {
      let match = 0;
      while (node) {
        node = nextSibling(node);
        if (node && isComment(node)) {
          if (node.data === "[")
            match++;
          if (node.data === "]") {
            if (match === 0) {
              return nextSibling(node);
            } else {
              match--;
            }
          }
        }
      }
      return node;
    };
    return [hydrate2, hydrateNode];
  }
  function startMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
      perf.mark(`vue-${type}-${instance.uid}`);
    }
    {
      devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
    }
  }
  function endMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
      const startTag = `vue-${type}-${instance.uid}`;
      const endTag = startTag + `:end`;
      perf.mark(endTag);
      perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
    }
    {
      devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
    }
  }
  function isSupported() {
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function createRenderer(options) {
    return baseCreateRenderer(options);
  }
  function createHydrationRenderer(options) {
    return baseCreateRenderer(options, createHydrationFunctions);
  }
  function baseCreateRenderer(options, createHydrationFns) {
    const target = getGlobalThis();
    target.__VUE__ = true;
    {
      setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
    }
    const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, insertStaticContent: hostInsertStaticContent } = options;
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren) => {
      if (n1 === n2) {
        return;
      }
      if (n1 && !isSameVNodeType(n1, n2)) {
        anchor = getNextHostNode(n1);
        unmount(n1, parentComponent, parentSuspense, true);
        n1 = null;
      }
      if (n2.patchFlag === -2) {
        optimized = false;
        n2.dynamicChildren = null;
      }
      const { type, ref: ref2, shapeFlag } = n2;
      switch (type) {
        case Text:
          processText(n1, n2, container, anchor);
          break;
        case Comment:
          processCommentNode(n1, n2, container, anchor);
          break;
        case Static:
          if (n1 == null) {
            mountStaticNode(n2, container, anchor, isSVG);
          } else {
            patchStaticNode(n1, n2, container, isSVG);
          }
          break;
        case Fragment:
          processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          break;
        default:
          if (shapeFlag & 1) {
            processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (shapeFlag & 6) {
            processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (shapeFlag & 64) {
            type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
          } else if (shapeFlag & 128) {
            type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
          } else {
            warn$1("Invalid VNode type:", type, `(${typeof type})`);
          }
      }
      if (ref2 != null && parentComponent) {
        setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
      }
    };
    const processText = (n1, n2, container, anchor) => {
      if (n1 == null) {
        hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
      } else {
        const el2 = n2.el = n1.el;
        if (n2.children !== n1.children) {
          hostSetText(el2, n2.children);
        }
      }
    };
    const processCommentNode = (n1, n2, container, anchor) => {
      if (n1 == null) {
        hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
      } else {
        n2.el = n1.el;
      }
    };
    const mountStaticNode = (n2, container, anchor, isSVG) => {
      [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
    };
    const patchStaticNode = (n1, n2, container, isSVG) => {
      if (n2.children !== n1.children) {
        const anchor = hostNextSibling(n1.anchor);
        removeStaticNode(n1);
        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
      } else {
        n2.el = n1.el;
        n2.anchor = n1.anchor;
      }
    };
    const moveStaticNode = ({ el: el2, anchor }, container, nextSibling) => {
      let next;
      while (el2 && el2 !== anchor) {
        next = hostNextSibling(el2);
        hostInsert(el2, container, nextSibling);
        el2 = next;
      }
      hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el: el2, anchor }) => {
      let next;
      while (el2 && el2 !== anchor) {
        next = hostNextSibling(el2);
        hostRemove(el2);
        el2 = next;
      }
      hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      isSVG = isSVG || n2.type === "svg";
      if (n1 == null) {
        mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      let el2;
      let vnodeHook;
      const { type, props, shapeFlag, transition, dirs } = vnode;
      el2 = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
      if (shapeFlag & 8) {
        hostSetElementText(el2, vnode.children);
      } else if (shapeFlag & 16) {
        mountChildren(vnode.children, el2, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", slotScopeIds, optimized);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      if (props) {
        for (const key in props) {
          if (key !== "value" && !isReservedProp(key)) {
            hostPatchProp(el2, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
        if ("value" in props) {
          hostPatchProp(el2, "value", null, props.value);
        }
        if (vnodeHook = props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
      }
      setScopeId(el2, vnode, vnode.scopeId, slotScopeIds, parentComponent);
      {
        Object.defineProperty(el2, "__vnode", {
          value: vnode,
          enumerable: false
        });
        Object.defineProperty(el2, "__vueParentComponent", {
          value: parentComponent,
          enumerable: false
        });
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
      if (needCallTransitionHooks) {
        transition.beforeEnter(el2);
      }
      hostInsert(el2, container, anchor);
      if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
          needCallTransitionHooks && transition.enter(el2);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
      }
    };
    const setScopeId = (el2, vnode, scopeId, slotScopeIds, parentComponent) => {
      if (scopeId) {
        hostSetScopeId(el2, scopeId);
      }
      if (slotScopeIds) {
        for (let i2 = 0; i2 < slotScopeIds.length; i2++) {
          hostSetScopeId(el2, slotScopeIds[i2]);
        }
      }
      if (parentComponent) {
        let subTree = parentComponent.subTree;
        if (subTree.patchFlag > 0 && subTree.patchFlag & 2048) {
          subTree = filterSingleRoot(subTree.children) || subTree;
        }
        if (vnode === subTree) {
          const parentVNode = parentComponent.vnode;
          setScopeId(el2, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
        }
      }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
      for (let i2 = start; i2 < children.length; i2++) {
        const child = children[i2] = optimized ? cloneIfMounted(children[i2]) : normalizeVNode(children[i2]);
        patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      const el2 = n2.el = n1.el;
      let { patchFlag, dynamicChildren, dirs } = n2;
      patchFlag |= n1.patchFlag & 16;
      const oldProps = n1.props || EMPTY_OBJ;
      const newProps = n2.props || EMPTY_OBJ;
      let vnodeHook;
      parentComponent && toggleRecurse(parentComponent, false);
      if (vnodeHook = newProps.onVnodeBeforeUpdate) {
        invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
      }
      if (dirs) {
        invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
      }
      parentComponent && toggleRecurse(parentComponent, true);
      if (isHmrUpdating) {
        patchFlag = 0;
        optimized = false;
        dynamicChildren = null;
      }
      const areChildrenSVG = isSVG && n2.type !== "foreignObject";
      if (dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, el2, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
        if (parentComponent && parentComponent.type.__hmrId) {
          traverseStaticChildren(n1, n2);
        }
      } else if (!optimized) {
        patchChildren(n1, n2, el2, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
      }
      if (patchFlag > 0) {
        if (patchFlag & 16) {
          patchProps(el2, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        } else {
          if (patchFlag & 2) {
            if (oldProps.class !== newProps.class) {
              hostPatchProp(el2, "class", null, newProps.class, isSVG);
            }
          }
          if (patchFlag & 4) {
            hostPatchProp(el2, "style", oldProps.style, newProps.style, isSVG);
          }
          if (patchFlag & 8) {
            const propsToUpdate = n2.dynamicProps;
            for (let i2 = 0; i2 < propsToUpdate.length; i2++) {
              const key = propsToUpdate[i2];
              const prev = oldProps[key];
              const next = newProps[key];
              if (next !== prev || key === "value") {
                hostPatchProp(el2, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
              }
            }
          }
        }
        if (patchFlag & 1) {
          if (n1.children !== n2.children) {
            hostSetElementText(el2, n2.children);
          }
        }
      } else if (!optimized && dynamicChildren == null) {
        patchProps(el2, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      }
      if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
          dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
        }, parentSuspense);
      }
    };
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
      for (let i2 = 0; i2 < newChildren.length; i2++) {
        const oldVNode = oldChildren[i2];
        const newVNode = newChildren[i2];
        const container = (
          // oldVNode may be an errored async setup() component inside Suspense
          // which will not have a mounted element
          oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
          // of the Fragment itself so it can move its children.
          (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
          // which also requires the correct parent container
          !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
          oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : (
            // In other cases, the parent container is not actually used so we
            // just pass the block element here to avoid a DOM parentNode call.
            fallbackContainer
          )
        );
        patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
      }
    };
    const patchProps = (el2, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
      if (oldProps !== newProps) {
        if (oldProps !== EMPTY_OBJ) {
          for (const key in oldProps) {
            if (!isReservedProp(key) && !(key in newProps)) {
              hostPatchProp(el2, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
        }
        for (const key in newProps) {
          if (isReservedProp(key))
            continue;
          const next = newProps[key];
          const prev = oldProps[key];
          if (next !== prev && key !== "value") {
            hostPatchProp(el2, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
        if ("value" in newProps) {
          hostPatchProp(el2, "value", oldProps.value, newProps.value);
        }
      }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
      const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
      let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
      if (
        // #5523 dev root fragment may inherit directives
        isHmrUpdating || patchFlag & 2048
      ) {
        patchFlag = 0;
        optimized = false;
        dynamicChildren = null;
      }
      if (fragmentSlotScopeIds) {
        slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
      }
      if (n1 == null) {
        hostInsert(fragmentStartAnchor, container, anchor);
        hostInsert(fragmentEndAnchor, container, anchor);
        mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
        // of renderSlot() with no valid children
        n1.dynamicChildren) {
          patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
          if (parentComponent && parentComponent.type.__hmrId) {
            traverseStaticChildren(n1, n2);
          } else if (
            // #2080 if the stable fragment has a key, it's a <template v-for> that may
            //  get moved around. Make sure all root level vnodes inherit el.
            // #2134 or if it's a component root, it may also get moved around
            // as the component is being moved.
            n2.key != null || parentComponent && n2 === parentComponent.subTree
          ) {
            traverseStaticChildren(
              n1,
              n2,
              true
              /* shallow */
            );
          }
        } else {
          patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      }
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      n2.slotScopeIds = slotScopeIds;
      if (n1 == null) {
        if (n2.shapeFlag & 512) {
          parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
        } else {
          mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        }
      } else {
        updateComponent(n1, n2, optimized);
      }
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
      const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
      if (instance.type.__hmrId) {
        registerHMR(instance);
      }
      {
        pushWarningContext(initialVNode);
        startMeasure(instance, `mount`);
      }
      if (isKeepAlive(initialVNode)) {
        instance.ctx.renderer = internals;
      }
      {
        {
          startMeasure(instance, `init`);
        }
        setupComponent(instance);
        {
          endMeasure(instance, `init`);
        }
      }
      if (instance.asyncDep) {
        parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
        if (!initialVNode.el) {
          const placeholder = instance.subTree = createVNode(Comment);
          processCommentNode(null, placeholder, container, anchor);
        }
        return;
      }
      setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
      {
        popWarningContext();
        endMeasure(instance, `mount`);
      }
    };
    const updateComponent = (n1, n2, optimized) => {
      const instance = n2.component = n1.component;
      if (shouldUpdateComponent(n1, n2, optimized)) {
        if (instance.asyncDep && !instance.asyncResolved) {
          {
            pushWarningContext(n2);
          }
          updateComponentPreRender(instance, n2, optimized);
          {
            popWarningContext();
          }
          return;
        } else {
          instance.next = n2;
          invalidateJob(instance.update);
          instance.update();
        }
      } else {
        n2.el = n1.el;
        instance.vnode = n2;
      }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
      const componentUpdateFn = () => {
        if (!instance.isMounted) {
          let vnodeHook;
          const { el: el2, props } = initialVNode;
          const { bm, m: m2, parent } = instance;
          const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
          toggleRecurse(instance, false);
          if (bm) {
            invokeArrayFns(bm);
          }
          if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
            invokeVNodeHook(vnodeHook, parent, initialVNode);
          }
          toggleRecurse(instance, true);
          if (el2 && hydrateNode) {
            const hydrateSubTree = () => {
              {
                startMeasure(instance, `render`);
              }
              instance.subTree = renderComponentRoot(instance);
              {
                endMeasure(instance, `render`);
              }
              {
                startMeasure(instance, `hydrate`);
              }
              hydrateNode(el2, instance.subTree, instance, parentSuspense, null);
              {
                endMeasure(instance, `hydrate`);
              }
            };
            if (isAsyncWrapperVNode) {
              initialVNode.type.__asyncLoader().then(
                // note: we are moving the render call into an async callback,
                // which means it won't track dependencies - but it's ok because
                // a server-rendered async wrapper is already in resolved state
                // and it will never need to change.
                () => !instance.isUnmounted && hydrateSubTree()
              );
            } else {
              hydrateSubTree();
            }
          } else {
            {
              startMeasure(instance, `render`);
            }
            const subTree = instance.subTree = renderComponentRoot(instance);
            {
              endMeasure(instance, `render`);
            }
            {
              startMeasure(instance, `patch`);
            }
            patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
            {
              endMeasure(instance, `patch`);
            }
            initialVNode.el = subTree.el;
          }
          if (m2) {
            queuePostRenderEffect(m2, parentSuspense);
          }
          if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
            const scopedInitialVNode = initialVNode;
            queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
          }
          if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
            instance.a && queuePostRenderEffect(instance.a, parentSuspense);
          }
          instance.isMounted = true;
          {
            devtoolsComponentAdded(instance);
          }
          initialVNode = container = anchor = null;
        } else {
          let { next, bu: bu2, u: u2, parent, vnode } = instance;
          let originNext = next;
          let vnodeHook;
          {
            pushWarningContext(next || instance.vnode);
          }
          toggleRecurse(instance, false);
          if (next) {
            next.el = vnode.el;
            updateComponentPreRender(instance, next, optimized);
          } else {
            next = vnode;
          }
          if (bu2) {
            invokeArrayFns(bu2);
          }
          if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
            invokeVNodeHook(vnodeHook, parent, next, vnode);
          }
          toggleRecurse(instance, true);
          {
            startMeasure(instance, `render`);
          }
          const nextTree = renderComponentRoot(instance);
          {
            endMeasure(instance, `render`);
          }
          const prevTree = instance.subTree;
          instance.subTree = nextTree;
          {
            startMeasure(instance, `patch`);
          }
          patch(
            prevTree,
            nextTree,
            // parent may have changed if it's in a teleport
            hostParentNode(prevTree.el),
            // anchor may have changed if it's in a fragment
            getNextHostNode(prevTree),
            instance,
            parentSuspense,
            isSVG
          );
          {
            endMeasure(instance, `patch`);
          }
          next.el = nextTree.el;
          if (originNext === null) {
            updateHOCHostEl(instance, nextTree.el);
          }
          if (u2) {
            queuePostRenderEffect(u2, parentSuspense);
          }
          if (vnodeHook = next.props && next.props.onVnodeUpdated) {
            queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
          }
          {
            devtoolsComponentUpdated(instance);
          }
          {
            popWarningContext();
          }
        }
      };
      const effect2 = instance.effect = new ReactiveEffect(
        componentUpdateFn,
        () => queueJob(update),
        instance.scope
        // track it in component's effect scope
      );
      const update = instance.update = () => effect2.run();
      update.id = instance.uid;
      toggleRecurse(instance, true);
      {
        effect2.onTrack = instance.rtc ? (e2) => invokeArrayFns(instance.rtc, e2) : void 0;
        effect2.onTrigger = instance.rtg ? (e2) => invokeArrayFns(instance.rtg, e2) : void 0;
        update.ownerInstance = instance;
      }
      update();
    };
    const updateComponentPreRender = (instance, nextVNode, optimized) => {
      nextVNode.component = instance;
      const prevProps = instance.vnode.props;
      instance.vnode = nextVNode;
      instance.next = null;
      updateProps(instance, nextVNode.props, prevProps, optimized);
      updateSlots(instance, nextVNode.children, optimized);
      pauseTracking();
      flushPreFlushCbs();
      resetTracking();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
      const c1 = n1 && n1.children;
      const prevShapeFlag = n1 ? n1.shapeFlag : 0;
      const c2 = n2.children;
      const { patchFlag, shapeFlag } = n2;
      if (patchFlag > 0) {
        if (patchFlag & 128) {
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          return;
        } else if (patchFlag & 256) {
          patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          return;
        }
      }
      if (shapeFlag & 8) {
        if (prevShapeFlag & 16) {
          unmountChildren(c1, parentComponent, parentSuspense);
        }
        if (c2 !== c1) {
          hostSetElementText(container, c2);
        }
      } else {
        if (prevShapeFlag & 16) {
          if (shapeFlag & 16) {
            patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else {
            unmountChildren(c1, parentComponent, parentSuspense, true);
          }
        } else {
          if (prevShapeFlag & 8) {
            hostSetElementText(container, "");
          }
          if (shapeFlag & 16) {
            mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          }
        }
      }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      c1 = c1 || EMPTY_ARR;
      c2 = c2 || EMPTY_ARR;
      const oldLength = c1.length;
      const newLength = c2.length;
      const commonLength = Math.min(oldLength, newLength);
      let i2;
      for (i2 = 0; i2 < commonLength; i2++) {
        const nextChild = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
        patch(c1[i2], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
      if (oldLength > newLength) {
        unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
      } else {
        mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
      }
    };
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      let i2 = 0;
      const l2 = c2.length;
      let e1 = c1.length - 1;
      let e2 = l2 - 1;
      while (i2 <= e1 && i2 <= e2) {
        const n1 = c1[i2];
        const n2 = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
        if (isSameVNodeType(n1, n2)) {
          patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          break;
        }
        i2++;
      }
      while (i2 <= e1 && i2 <= e2) {
        const n1 = c1[e1];
        const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
        if (isSameVNodeType(n1, n2)) {
          patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          break;
        }
        e1--;
        e2--;
      }
      if (i2 > e1) {
        if (i2 <= e2) {
          const nextPos = e2 + 1;
          const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
          while (i2 <= e2) {
            patch(null, c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            i2++;
          }
        }
      } else if (i2 > e2) {
        while (i2 <= e1) {
          unmount(c1[i2], parentComponent, parentSuspense, true);
          i2++;
        }
      } else {
        const s1 = i2;
        const s2 = i2;
        const keyToNewIndexMap = /* @__PURE__ */ new Map();
        for (i2 = s2; i2 <= e2; i2++) {
          const nextChild = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
          if (nextChild.key != null) {
            if (keyToNewIndexMap.has(nextChild.key)) {
              warn$1(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
            }
            keyToNewIndexMap.set(nextChild.key, i2);
          }
        }
        let j2;
        let patched = 0;
        const toBePatched = e2 - s2 + 1;
        let moved = false;
        let maxNewIndexSoFar = 0;
        const newIndexToOldIndexMap = new Array(toBePatched);
        for (i2 = 0; i2 < toBePatched; i2++)
          newIndexToOldIndexMap[i2] = 0;
        for (i2 = s1; i2 <= e1; i2++) {
          const prevChild = c1[i2];
          if (patched >= toBePatched) {
            unmount(prevChild, parentComponent, parentSuspense, true);
            continue;
          }
          let newIndex;
          if (prevChild.key != null) {
            newIndex = keyToNewIndexMap.get(prevChild.key);
          } else {
            for (j2 = s2; j2 <= e2; j2++) {
              if (newIndexToOldIndexMap[j2 - s2] === 0 && isSameVNodeType(prevChild, c2[j2])) {
                newIndex = j2;
                break;
              }
            }
          }
          if (newIndex === void 0) {
            unmount(prevChild, parentComponent, parentSuspense, true);
          } else {
            newIndexToOldIndexMap[newIndex - s2] = i2 + 1;
            if (newIndex >= maxNewIndexSoFar) {
              maxNewIndexSoFar = newIndex;
            } else {
              moved = true;
            }
            patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            patched++;
          }
        }
        const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
        j2 = increasingNewIndexSequence.length - 1;
        for (i2 = toBePatched - 1; i2 >= 0; i2--) {
          const nextIndex = s2 + i2;
          const nextChild = c2[nextIndex];
          const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
          if (newIndexToOldIndexMap[i2] === 0) {
            patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (moved) {
            if (j2 < 0 || i2 !== increasingNewIndexSequence[j2]) {
              move(
                nextChild,
                container,
                anchor,
                2
                /* MoveType.REORDER */
              );
            } else {
              j2--;
            }
          }
        }
      }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
      const { el: el2, type, transition, children, shapeFlag } = vnode;
      if (shapeFlag & 6) {
        move(vnode.component.subTree, container, anchor, moveType);
        return;
      }
      if (shapeFlag & 128) {
        vnode.suspense.move(container, anchor, moveType);
        return;
      }
      if (shapeFlag & 64) {
        type.move(vnode, container, anchor, internals);
        return;
      }
      if (type === Fragment) {
        hostInsert(el2, container, anchor);
        for (let i2 = 0; i2 < children.length; i2++) {
          move(children[i2], container, anchor, moveType);
        }
        hostInsert(vnode.anchor, container, anchor);
        return;
      }
      if (type === Static) {
        moveStaticNode(vnode, container, anchor);
        return;
      }
      const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
      if (needTransition) {
        if (moveType === 0) {
          transition.beforeEnter(el2);
          hostInsert(el2, container, anchor);
          queuePostRenderEffect(() => transition.enter(el2), parentSuspense);
        } else {
          const { leave, delayLeave, afterLeave } = transition;
          const remove3 = () => hostInsert(el2, container, anchor);
          const performLeave = () => {
            leave(el2, () => {
              remove3();
              afterLeave && afterLeave();
            });
          };
          if (delayLeave) {
            delayLeave(el2, remove3, performLeave);
          } else {
            performLeave();
          }
        }
      } else {
        hostInsert(el2, container, anchor);
      }
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
      const { type, props, ref: ref2, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
      if (ref2 != null) {
        setRef(ref2, null, parentSuspense, vnode, true);
      }
      if (shapeFlag & 256) {
        parentComponent.ctx.deactivate(vnode);
        return;
      }
      const shouldInvokeDirs = shapeFlag & 1 && dirs;
      const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
      let vnodeHook;
      if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
      if (shapeFlag & 6) {
        unmountComponent(vnode.component, parentSuspense, doRemove);
      } else {
        if (shapeFlag & 128) {
          vnode.suspense.unmount(parentSuspense, doRemove);
          return;
        }
        if (shouldInvokeDirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
        }
        if (shapeFlag & 64) {
          vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
        } else if (dynamicChildren && // #1153: fast path should not be taken for non-stable (v-for) fragments
        (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
          unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
        } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
          unmountChildren(children, parentComponent, parentSuspense);
        }
        if (doRemove) {
          remove2(vnode);
        }
      }
      if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
          shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
        }, parentSuspense);
      }
    };
    const remove2 = (vnode) => {
      const { type, el: el2, anchor, transition } = vnode;
      if (type === Fragment) {
        if (vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) {
          vnode.children.forEach((child) => {
            if (child.type === Comment) {
              hostRemove(child.el);
            } else {
              remove2(child);
            }
          });
        } else {
          removeFragment(el2, anchor);
        }
        return;
      }
      if (type === Static) {
        removeStaticNode(vnode);
        return;
      }
      const performRemove = () => {
        hostRemove(el2);
        if (transition && !transition.persisted && transition.afterLeave) {
          transition.afterLeave();
        }
      };
      if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
        const { leave, delayLeave } = transition;
        const performLeave = () => leave(el2, performRemove);
        if (delayLeave) {
          delayLeave(vnode.el, performRemove, performLeave);
        } else {
          performLeave();
        }
      } else {
        performRemove();
      }
    };
    const removeFragment = (cur, end) => {
      let next;
      while (cur !== end) {
        next = hostNextSibling(cur);
        hostRemove(cur);
        cur = next;
      }
      hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove) => {
      if (instance.type.__hmrId) {
        unregisterHMR(instance);
      }
      const { bum, scope, update, subTree, um } = instance;
      if (bum) {
        invokeArrayFns(bum);
      }
      scope.stop();
      if (update) {
        update.active = false;
        unmount(subTree, instance, parentSuspense, doRemove);
      }
      if (um) {
        queuePostRenderEffect(um, parentSuspense);
      }
      queuePostRenderEffect(() => {
        instance.isUnmounted = true;
      }, parentSuspense);
      if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
        parentSuspense.deps--;
        if (parentSuspense.deps === 0) {
          parentSuspense.resolve();
        }
      }
      {
        devtoolsComponentRemoved(instance);
      }
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
      for (let i2 = start; i2 < children.length; i2++) {
        unmount(children[i2], parentComponent, parentSuspense, doRemove, optimized);
      }
    };
    const getNextHostNode = (vnode) => {
      if (vnode.shapeFlag & 6) {
        return getNextHostNode(vnode.component.subTree);
      }
      if (vnode.shapeFlag & 128) {
        return vnode.suspense.next();
      }
      return hostNextSibling(vnode.anchor || vnode.el);
    };
    const render2 = (vnode, container, isSVG) => {
      if (vnode == null) {
        if (container._vnode) {
          unmount(container._vnode, null, null, true);
        }
      } else {
        patch(container._vnode || null, vnode, container, null, null, null, isSVG);
      }
      flushPreFlushCbs();
      flushPostFlushCbs();
      container._vnode = vnode;
    };
    const internals = {
      p: patch,
      um: unmount,
      m: move,
      r: remove2,
      mt: mountComponent,
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      n: getNextHostNode,
      o: options
    };
    let hydrate2;
    let hydrateNode;
    if (createHydrationFns) {
      [hydrate2, hydrateNode] = createHydrationFns(internals);
    }
    return {
      render: render2,
      hydrate: hydrate2,
      createApp: createAppAPI(render2, hydrate2)
    };
  }
  function toggleRecurse({ effect: effect2, update }, allowed) {
    effect2.allowRecurse = update.allowRecurse = allowed;
  }
  function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if (isArray(ch1) && isArray(ch2)) {
      for (let i2 = 0; i2 < ch1.length; i2++) {
        const c1 = ch1[i2];
        let c2 = ch2[i2];
        if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
          if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
            c2 = ch2[i2] = cloneIfMounted(ch2[i2]);
            c2.el = c1.el;
          }
          if (!shallow)
            traverseStaticChildren(c1, c2);
        }
        if (c2.type === Comment && !c2.el) {
          c2.el = c1.el;
        }
      }
    }
  }
  function getSequence(arr) {
    const p3 = arr.slice();
    const result = [0];
    let i2, j2, u2, v2, c2;
    const len = arr.length;
    for (i2 = 0; i2 < len; i2++) {
      const arrI = arr[i2];
      if (arrI !== 0) {
        j2 = result[result.length - 1];
        if (arr[j2] < arrI) {
          p3[i2] = j2;
          result.push(i2);
          continue;
        }
        u2 = 0;
        v2 = result.length - 1;
        while (u2 < v2) {
          c2 = u2 + v2 >> 1;
          if (arr[result[c2]] < arrI) {
            u2 = c2 + 1;
          } else {
            v2 = c2;
          }
        }
        if (arrI < arr[result[u2]]) {
          if (u2 > 0) {
            p3[i2] = result[u2 - 1];
          }
          result[u2] = i2;
        }
      }
    }
    u2 = result.length;
    v2 = result[u2 - 1];
    while (u2-- > 0) {
      result[u2] = v2;
      v2 = p3[v2];
    }
    return result;
  }
  function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
    if (moveType === 0) {
      insert(vnode.targetAnchor, container, parentAnchor);
    }
    const { el: el2, anchor, shapeFlag, children, props } = vnode;
    const isReorder = moveType === 2;
    if (isReorder) {
      insert(el2, container, parentAnchor);
    }
    if (!isReorder || isTeleportDisabled(props)) {
      if (shapeFlag & 16) {
        for (let i2 = 0; i2 < children.length; i2++) {
          move(
            children[i2],
            container,
            parentAnchor,
            2
            /* MoveType.REORDER */
          );
        }
      }
    }
    if (isReorder) {
      insert(anchor, container, parentAnchor);
    }
  }
  function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling, parentNode, querySelector } }, hydrateChildren) {
    const target = vnode.target = resolveTarget(vnode.props, querySelector);
    if (target) {
      const targetNode = target._lpa || target.firstChild;
      if (vnode.shapeFlag & 16) {
        if (isTeleportDisabled(vnode.props)) {
          vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
          vnode.targetAnchor = targetNode;
        } else {
          vnode.anchor = nextSibling(node);
          let targetAnchor = targetNode;
          while (targetAnchor) {
            targetAnchor = nextSibling(targetAnchor);
            if (targetAnchor && targetAnchor.nodeType === 8 && targetAnchor.data === "teleport anchor") {
              vnode.targetAnchor = targetAnchor;
              target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
              break;
            }
          }
          hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
        }
      }
    }
    return vnode.anchor && nextSibling(vnode.anchor);
  }
  function openBlock(disableTracking = false) {
    blockStack.push(currentBlock = disableTracking ? null : []);
  }
  function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
  }
  function setBlockTracking(value) {
    isBlockTreeEnabled += value;
  }
  function setupBlock(vnode) {
    vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
    closeBlock();
    if (isBlockTreeEnabled > 0 && currentBlock) {
      currentBlock.push(vnode);
    }
    return vnode;
  }
  function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
    return setupBlock(createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      true
      /* isBlock */
    ));
  }
  function createBlock(type, props, children, patchFlag, dynamicProps) {
    return setupBlock(createVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      true
      /* isBlock: prevent a block from tracking itself */
    ));
  }
  function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
  }
  function isSameVNodeType(n1, n2) {
    if (n2.shapeFlag & 6 && hmrDirtyComponents.has(n2.type)) {
      return false;
    }
    return n1.type === n2.type && n1.key === n2.key;
  }
  function transformVNodeArgs(transformer) {
    vnodeArgsTransformer = transformer;
  }
  function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
      __v_isVNode: true,
      __v_skip: true,
      type,
      props,
      key: props && normalizeKey(props),
      ref: props && normalizeRef(props),
      scopeId: currentScopeId,
      slotScopeIds: null,
      children,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag,
      patchFlag,
      dynamicProps,
      dynamicChildren: null,
      appContext: null
    };
    if (needFullChildrenNormalization) {
      normalizeChildren(vnode, children);
      if (shapeFlag & 128) {
        type.normalize(vnode);
      }
    } else if (children) {
      vnode.shapeFlag |= isString(children) ? 8 : 16;
    }
    if (vnode.key !== vnode.key) {
      warn$1(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
    }
    if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
    !isBlockNode && // has current parent block
    currentBlock && // presence of a patch flag indicates this node needs patching on updates.
    // component nodes also should always be patched, because even if the
    // component doesn't need to update, it needs to persist the instance on to
    // the next vnode so that it can be properly unmounted later.
    (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
    // vnode should not be considered dynamic due to handler caching.
    vnode.patchFlag !== 32) {
      currentBlock.push(vnode);
    }
    return vnode;
  }
  function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
      if (!type) {
        warn$1(`Invalid vnode type when creating vnode: ${type}.`);
      }
      type = Comment;
    }
    if (isVNode(type)) {
      const cloned = cloneVNode(
        type,
        props,
        true
        /* mergeRef: true */
      );
      if (children) {
        normalizeChildren(cloned, children);
      }
      if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
        if (cloned.shapeFlag & 6) {
          currentBlock[currentBlock.indexOf(type)] = cloned;
        } else {
          currentBlock.push(cloned);
        }
      }
      cloned.patchFlag |= -2;
      return cloned;
    }
    if (isClassComponent(type)) {
      type = type.__vccOpts;
    }
    if (props) {
      props = guardReactiveProps(props);
      let { class: klass, style } = props;
      if (klass && !isString(klass)) {
        props.class = normalizeClass(klass);
      }
      if (isObject(style)) {
        if (isProxy(style) && !isArray(style)) {
          style = extend({}, style);
        }
        props.style = normalizeStyle(style);
      }
    }
    const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
    if (shapeFlag & 4 && isProxy(type)) {
      type = toRaw(type);
      warn$1(`Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`, `
Component that was made reactive: `, type);
    }
    return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
  }
  function guardReactiveProps(props) {
    if (!props)
      return null;
    return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
  }
  function cloneVNode(vnode, extraProps, mergeRef = false) {
    const { props, ref: ref2, patchFlag, children } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    const cloned = {
      __v_isVNode: true,
      __v_skip: true,
      type: vnode.type,
      props: mergedProps,
      key: mergedProps && normalizeKey(mergedProps),
      ref: extraProps && extraProps.ref ? (
        // #2078 in the case of <component :is="vnode" ref="extra"/>
        // if the vnode itself already has a ref, cloneVNode will need to merge
        // the refs so the single vnode can be set on multiple refs
        mergeRef && ref2 ? isArray(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps)
      ) : ref2,
      scopeId: vnode.scopeId,
      slotScopeIds: vnode.slotScopeIds,
      children: patchFlag === -1 && isArray(children) ? children.map(deepCloneVNode) : children,
      target: vnode.target,
      targetAnchor: vnode.targetAnchor,
      staticCount: vnode.staticCount,
      shapeFlag: vnode.shapeFlag,
      // if the vnode is cloned with extra props, we can no longer assume its
      // existing patch flag to be reliable and need to add the FULL_PROPS flag.
      // note: preserve flag for fragments since they use the flag for children
      // fast paths only.
      patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
      dynamicProps: vnode.dynamicProps,
      dynamicChildren: vnode.dynamicChildren,
      appContext: vnode.appContext,
      dirs: vnode.dirs,
      transition: vnode.transition,
      // These should technically only be non-null on mounted VNodes. However,
      // they *should* be copied for kept-alive vnodes. So we just always copy
      // them since them being non-null during a mount doesn't affect the logic as
      // they will simply be overwritten.
      component: vnode.component,
      suspense: vnode.suspense,
      ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
      ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
      el: vnode.el,
      anchor: vnode.anchor
    };
    return cloned;
  }
  function deepCloneVNode(vnode) {
    const cloned = cloneVNode(vnode);
    if (isArray(vnode.children)) {
      cloned.children = vnode.children.map(deepCloneVNode);
    }
    return cloned;
  }
  function createTextVNode(text = " ", flag = 0) {
    return createVNode(Text, null, text, flag);
  }
  function createStaticVNode(content, numberOfNodes) {
    const vnode = createVNode(Static, null, content);
    vnode.staticCount = numberOfNodes;
    return vnode;
  }
  function createCommentVNode(text = "", asBlock = false) {
    return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
  }
  function normalizeVNode(child) {
    if (child == null || typeof child === "boolean") {
      return createVNode(Comment);
    } else if (isArray(child)) {
      return createVNode(
        Fragment,
        null,
        // #3666, avoid reference pollution when reusing vnode
        child.slice()
      );
    } else if (typeof child === "object") {
      return cloneIfMounted(child);
    } else {
      return createVNode(Text, null, String(child));
    }
  }
  function cloneIfMounted(child) {
    return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
  }
  function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children == null) {
      children = null;
    } else if (isArray(children)) {
      type = 16;
    } else if (typeof children === "object") {
      if (shapeFlag & (1 | 64)) {
        const slot = children.default;
        if (slot) {
          slot._c && (slot._d = false);
          normalizeChildren(vnode, slot());
          slot._c && (slot._d = true);
        }
        return;
      } else {
        type = 32;
        const slotFlag = children._;
        if (!slotFlag && !(InternalObjectKey in children)) {
          children._ctx = currentRenderingInstance;
        } else if (slotFlag === 3 && currentRenderingInstance) {
          if (currentRenderingInstance.slots._ === 1) {
            children._ = 1;
          } else {
            children._ = 2;
            vnode.patchFlag |= 1024;
          }
        }
      }
    } else if (isFunction(children)) {
      children = { default: children, _ctx: currentRenderingInstance };
      type = 32;
    } else {
      children = String(children);
      if (shapeFlag & 64) {
        type = 16;
        children = [createTextVNode(children)];
      } else {
        type = 8;
      }
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
  }
  function mergeProps(...args) {
    const ret = {};
    for (let i2 = 0; i2 < args.length; i2++) {
      const toMerge = args[i2];
      for (const key in toMerge) {
        if (key === "class") {
          if (ret.class !== toMerge.class) {
            ret.class = normalizeClass([ret.class, toMerge.class]);
          }
        } else if (key === "style") {
          ret.style = normalizeStyle([ret.style, toMerge.style]);
        } else if (isOn(key)) {
          const existing = ret[key];
          const incoming = toMerge[key];
          if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
            ret[key] = existing ? [].concat(existing, incoming) : incoming;
          }
        } else if (key !== "") {
          ret[key] = toMerge[key];
        }
      }
    }
    return ret;
  }
  function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7, [
      vnode,
      prevVNode
    ]);
  }
  function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
      uid: uid$1++,
      vnode,
      type,
      parent,
      appContext,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new EffectScope(
        true
        /* detached */
      ),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: parent ? parent.provides : Object.create(appContext.provides),
      accessCache: null,
      renderCache: [],
      // local resolved assets
      components: null,
      directives: null,
      // resolved props and emits options
      propsOptions: normalizePropsOptions(type, appContext),
      emitsOptions: normalizeEmitsOptions(type, appContext),
      // emit
      emit: null,
      emitted: null,
      // props default value
      propsDefaults: EMPTY_OBJ,
      // inheritAttrs
      inheritAttrs: type.inheritAttrs,
      // state
      ctx: EMPTY_OBJ,
      data: EMPTY_OBJ,
      props: EMPTY_OBJ,
      attrs: EMPTY_OBJ,
      slots: EMPTY_OBJ,
      refs: EMPTY_OBJ,
      setupState: EMPTY_OBJ,
      setupContext: null,
      // suspense related
      suspense,
      suspenseId: suspense ? suspense.pendingId : 0,
      asyncDep: null,
      asyncResolved: false,
      // lifecycle hooks
      // not using enums here because it results in computed properties
      isMounted: false,
      isUnmounted: false,
      isDeactivated: false,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
    {
      instance.ctx = createDevRenderContext(instance);
    }
    instance.root = parent ? parent.root : instance;
    instance.emit = emit$1.bind(null, instance);
    if (vnode.ce) {
      vnode.ce(instance);
    }
    return instance;
  }
  function validateComponentName(name, config) {
    const appIsNativeTag = config.isNativeTag || NO;
    if (isBuiltInTag(name) || appIsNativeTag(name)) {
      warn$1("Do not use built-in or reserved HTML elements as component id: " + name);
    }
  }
  function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4;
  }
  function setupComponent(instance, isSSR = false) {
    isInSSRComponentSetup = isSSR;
    const { props, children } = instance.vnode;
    const isStateful = isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children);
    const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
    isInSSRComponentSetup = false;
    return setupResult;
  }
  function setupStatefulComponent(instance, isSSR) {
    var _a3;
    const Component = instance.type;
    {
      if (Component.name) {
        validateComponentName(Component.name, instance.appContext.config);
      }
      if (Component.components) {
        const names = Object.keys(Component.components);
        for (let i2 = 0; i2 < names.length; i2++) {
          validateComponentName(names[i2], instance.appContext.config);
        }
      }
      if (Component.directives) {
        const names = Object.keys(Component.directives);
        for (let i2 = 0; i2 < names.length; i2++) {
          validateDirectiveName(names[i2]);
        }
      }
      if (Component.compilerOptions && isRuntimeOnly()) {
        warn$1(`"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`);
      }
    }
    instance.accessCache = /* @__PURE__ */ Object.create(null);
    instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
    {
      exposePropsOnRenderContext(instance);
    }
    const { setup } = Component;
    if (setup) {
      const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
      setCurrentInstance(instance);
      pauseTracking();
      const setupResult = callWithErrorHandling(setup, instance, 0, [shallowReadonly(instance.props), setupContext]);
      resetTracking();
      unsetCurrentInstance();
      if (isPromise(setupResult)) {
        setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
        if (isSSR) {
          return setupResult.then((resolvedResult) => {
            handleSetupResult(instance, resolvedResult, isSSR);
          }).catch((e2) => {
            handleError(
              e2,
              instance,
              0
              /* ErrorCodes.SETUP_FUNCTION */
            );
          });
        } else {
          instance.asyncDep = setupResult;
          if (!instance.suspense) {
            const name = (_a3 = Component.name) !== null && _a3 !== void 0 ? _a3 : "Anonymous";
            warn$1(`Component <${name}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
          }
        }
      } else {
        handleSetupResult(instance, setupResult, isSSR);
      }
    } else {
      finishComponentSetup(instance, isSSR);
    }
  }
  function handleSetupResult(instance, setupResult, isSSR) {
    if (isFunction(setupResult)) {
      {
        instance.render = setupResult;
      }
    } else if (isObject(setupResult)) {
      if (isVNode(setupResult)) {
        warn$1(`setup() should not return VNodes directly - return a render function instead.`);
      }
      {
        instance.devtoolsRawSetupState = setupResult;
      }
      instance.setupState = proxyRefs(setupResult);
      {
        exposeSetupStateOnRenderContext(instance);
      }
    } else if (setupResult !== void 0) {
      warn$1(`setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`);
    }
    finishComponentSetup(instance, isSSR);
  }
  function registerRuntimeCompiler(_compile) {
    compile = _compile;
    installWithProxy = (i2) => {
      if (i2.render._rc) {
        i2.withProxy = new Proxy(i2.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
      }
    };
  }
  function finishComponentSetup(instance, isSSR, skipOptions) {
    const Component = instance.type;
    if (!instance.render) {
      if (!isSSR && compile && !Component.render) {
        const template = Component.template || resolveMergedOptions(instance).template;
        if (template) {
          {
            startMeasure(instance, `compile`);
          }
          const { isCustomElement, compilerOptions } = instance.appContext.config;
          const { delimiters, compilerOptions: componentCompilerOptions } = Component;
          const finalCompilerOptions = extend(extend({
            isCustomElement,
            delimiters
          }, compilerOptions), componentCompilerOptions);
          Component.render = compile(template, finalCompilerOptions);
          {
            endMeasure(instance, `compile`);
          }
        }
      }
      instance.render = Component.render || NOOP;
      if (installWithProxy) {
        installWithProxy(instance);
      }
    }
    {
      setCurrentInstance(instance);
      pauseTracking();
      applyOptions(instance);
      resetTracking();
      unsetCurrentInstance();
    }
    if (!Component.render && instance.render === NOOP && !isSSR) {
      if (!compile && Component.template) {
        warn$1(
          `Component provided template option but runtime compilation is not supported in this build of Vue. Use "vue.esm-browser.js" instead.`
          /* should not happen */
        );
      } else {
        warn$1(`Component is missing template or render function.`);
      }
    }
  }
  function createAttrsProxy(instance) {
    return new Proxy(
      instance.attrs,
      {
        get(target, key) {
          markAttrsAccessed();
          track(instance, "get", "$attrs");
          return target[key];
        },
        set() {
          warn$1(`setupContext.attrs is readonly.`);
          return false;
        },
        deleteProperty() {
          warn$1(`setupContext.attrs is readonly.`);
          return false;
        }
      }
    );
  }
  function createSetupContext(instance) {
    const expose = (exposed) => {
      if (instance.exposed) {
        warn$1(`expose() should be called only once per setup().`);
      }
      instance.exposed = exposed || {};
    };
    let attrs;
    {
      return Object.freeze({
        get attrs() {
          return attrs || (attrs = createAttrsProxy(instance));
        },
        get slots() {
          return shallowReadonly(instance.slots);
        },
        get emit() {
          return (event, ...args) => instance.emit(event, ...args);
        },
        expose
      });
    }
  }
  function getExposeProxy(instance) {
    if (instance.exposed) {
      return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
        get(target, key) {
          if (key in target) {
            return target[key];
          } else if (key in publicPropertiesMap) {
            return publicPropertiesMap[key](instance);
          }
        }
      }));
    }
  }
  function getComponentName(Component, includeInferred = true) {
    return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
  }
  function formatComponentName(instance, Component, isRoot = false) {
    let name = getComponentName(Component);
    if (!name && Component.__file) {
      const match = Component.__file.match(/([^/\\]+)\.\w+$/);
      if (match) {
        name = match[1];
      }
    }
    if (!name && instance && instance.parent) {
      const inferFromRegistry = (registry) => {
        for (const key in registry) {
          if (registry[key] === Component) {
            return key;
          }
        }
      };
      name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
  }
  function isClassComponent(value) {
    return isFunction(value) && "__vccOpts" in value;
  }
  function defineProps() {
    {
      warnRuntimeUsage(`defineProps`);
    }
    return null;
  }
  function defineEmits() {
    {
      warnRuntimeUsage(`defineEmits`);
    }
    return null;
  }
  function defineExpose(exposed) {
    {
      warnRuntimeUsage(`defineExpose`);
    }
  }
  function withDefaults(props, defaults) {
    {
      warnRuntimeUsage(`withDefaults`);
    }
    return null;
  }
  function useSlots() {
    return getContext().slots;
  }
  function useAttrs() {
    return getContext().attrs;
  }
  function getContext() {
    const i2 = getCurrentInstance();
    if (!i2) {
      warn$1(`useContext() called without active instance.`);
    }
    return i2.setupContext || (i2.setupContext = createSetupContext(i2));
  }
  function mergeDefaults(raw, defaults) {
    const props = isArray(raw) ? raw.reduce((normalized, p3) => (normalized[p3] = {}, normalized), {}) : raw;
    for (const key in defaults) {
      const opt = props[key];
      if (opt) {
        if (isArray(opt) || isFunction(opt)) {
          props[key] = { type: opt, default: defaults[key] };
        } else {
          opt.default = defaults[key];
        }
      } else if (opt === null) {
        props[key] = { default: defaults[key] };
      } else {
        warn$1(`props default key "${key}" has no corresponding declaration.`);
      }
    }
    return props;
  }
  function createPropsRestProxy(props, excludedKeys) {
    const ret = {};
    for (const key in props) {
      if (!excludedKeys.includes(key)) {
        Object.defineProperty(ret, key, {
          enumerable: true,
          get: () => props[key]
        });
      }
    }
    return ret;
  }
  function withAsyncContext(getAwaitable) {
    const ctx = getCurrentInstance();
    if (!ctx) {
      warn$1(`withAsyncContext called without active current instance. This is likely a bug.`);
    }
    let awaitable = getAwaitable();
    unsetCurrentInstance();
    if (isPromise(awaitable)) {
      awaitable = awaitable.catch((e2) => {
        setCurrentInstance(ctx);
        throw e2;
      });
    }
    return [awaitable, () => setCurrentInstance(ctx)];
  }
  function h2(type, propsOrChildren, children) {
    const l2 = arguments.length;
    if (l2 === 2) {
      if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
        if (isVNode(propsOrChildren)) {
          return createVNode(type, null, [propsOrChildren]);
        }
        return createVNode(type, propsOrChildren);
      } else {
        return createVNode(type, null, propsOrChildren);
      }
    } else {
      if (l2 > 3) {
        children = Array.prototype.slice.call(arguments, 2);
      } else if (l2 === 3 && isVNode(children)) {
        children = [children];
      }
      return createVNode(type, propsOrChildren, children);
    }
  }
  function initCustomFormatter() {
    if (typeof window === "undefined") {
      return;
    }
    const vueStyle = { style: "color:#3ba776" };
    const numberStyle = { style: "color:#0b1bc9" };
    const stringStyle = { style: "color:#b62e24" };
    const keywordStyle = { style: "color:#9d288c" };
    const formatter = {
      header(obj) {
        if (!isObject(obj)) {
          return null;
        }
        if (obj.__isVue) {
          return ["div", vueStyle, `VueInstance`];
        } else if (isRef(obj)) {
          return [
            "div",
            {},
            ["span", vueStyle, genRefFlag(obj)],
            "<",
            formatValue(obj.value),
            `>`
          ];
        } else if (isReactive(obj)) {
          return [
            "div",
            {},
            ["span", vueStyle, isShallow(obj) ? "ShallowReactive" : "Reactive"],
            "<",
            formatValue(obj),
            `>${isReadonly(obj) ? ` (readonly)` : ``}`
          ];
        } else if (isReadonly(obj)) {
          return [
            "div",
            {},
            ["span", vueStyle, isShallow(obj) ? "ShallowReadonly" : "Readonly"],
            "<",
            formatValue(obj),
            ">"
          ];
        }
        return null;
      },
      hasBody(obj) {
        return obj && obj.__isVue;
      },
      body(obj) {
        if (obj && obj.__isVue) {
          return [
            "div",
            {},
            ...formatInstance(obj.$)
          ];
        }
      }
    };
    function formatInstance(instance) {
      const blocks = [];
      if (instance.type.props && instance.props) {
        blocks.push(createInstanceBlock("props", toRaw(instance.props)));
      }
      if (instance.setupState !== EMPTY_OBJ) {
        blocks.push(createInstanceBlock("setup", instance.setupState));
      }
      if (instance.data !== EMPTY_OBJ) {
        blocks.push(createInstanceBlock("data", toRaw(instance.data)));
      }
      const computed2 = extractKeys(instance, "computed");
      if (computed2) {
        blocks.push(createInstanceBlock("computed", computed2));
      }
      const injected = extractKeys(instance, "inject");
      if (injected) {
        blocks.push(createInstanceBlock("injected", injected));
      }
      blocks.push([
        "div",
        {},
        [
          "span",
          {
            style: keywordStyle.style + ";opacity:0.66"
          },
          "$ (internal): "
        ],
        ["object", { object: instance }]
      ]);
      return blocks;
    }
    function createInstanceBlock(type, target) {
      target = extend({}, target);
      if (!Object.keys(target).length) {
        return ["span", {}];
      }
      return [
        "div",
        { style: "line-height:1.25em;margin-bottom:0.6em" },
        [
          "div",
          {
            style: "color:#476582"
          },
          type
        ],
        [
          "div",
          {
            style: "padding-left:1.25em"
          },
          ...Object.keys(target).map((key) => {
            return [
              "div",
              {},
              ["span", keywordStyle, key + ": "],
              formatValue(target[key], false)
            ];
          })
        ]
      ];
    }
    function formatValue(v2, asRaw = true) {
      if (typeof v2 === "number") {
        return ["span", numberStyle, v2];
      } else if (typeof v2 === "string") {
        return ["span", stringStyle, JSON.stringify(v2)];
      } else if (typeof v2 === "boolean") {
        return ["span", keywordStyle, v2];
      } else if (isObject(v2)) {
        return ["object", { object: asRaw ? toRaw(v2) : v2 }];
      } else {
        return ["span", stringStyle, String(v2)];
      }
    }
    function extractKeys(instance, type) {
      const Comp = instance.type;
      if (isFunction(Comp)) {
        return;
      }
      const extracted = {};
      for (const key in instance.ctx) {
        if (isKeyOfType(Comp, key, type)) {
          extracted[key] = instance.ctx[key];
        }
      }
      return extracted;
    }
    function isKeyOfType(Comp, key, type) {
      const opts = Comp[type];
      if (isArray(opts) && opts.includes(key) || isObject(opts) && key in opts) {
        return true;
      }
      if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
        return true;
      }
      if (Comp.mixins && Comp.mixins.some((m2) => isKeyOfType(m2, key, type))) {
        return true;
      }
    }
    function genRefFlag(v2) {
      if (isShallow(v2)) {
        return `ShallowRef`;
      }
      if (v2.effect) {
        return `ComputedRef`;
      }
      return `Ref`;
    }
    if (window.devtoolsFormatters) {
      window.devtoolsFormatters.push(formatter);
    } else {
      window.devtoolsFormatters = [formatter];
    }
  }
  function withMemo(memo, render2, cache, index) {
    const cached = cache[index];
    if (cached && isMemoSame(cached, memo)) {
      return cached;
    }
    const ret = render2();
    ret.memo = memo.slice();
    return cache[index] = ret;
  }
  function isMemoSame(cached, memo) {
    const prev = cached.memo;
    if (prev.length != memo.length) {
      return false;
    }
    for (let i2 = 0; i2 < prev.length; i2++) {
      if (hasChanged(prev[i2], memo[i2])) {
        return false;
      }
    }
    if (isBlockTreeEnabled > 0 && currentBlock) {
      currentBlock.push(cached);
    }
    return true;
  }
  function patchClass(el2, value, isSVG) {
    const transitionClasses = el2._vtc;
    if (transitionClasses) {
      value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
    }
    if (value == null) {
      el2.removeAttribute("class");
    } else if (isSVG) {
      el2.setAttribute("class", value);
    } else {
      el2.className = value;
    }
  }
  function patchStyle(el2, prev, next) {
    const style = el2.style;
    const isCssString = isString(next);
    if (next && !isCssString) {
      for (const key in next) {
        setStyle(style, key, next[key]);
      }
      if (prev && !isString(prev)) {
        for (const key in prev) {
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      }
    } else {
      const currentDisplay = style.display;
      if (isCssString) {
        if (prev !== next) {
          style.cssText = next;
        }
      } else if (prev) {
        el2.removeAttribute("style");
      }
      if ("_vod" in el2) {
        style.display = currentDisplay;
      }
    }
  }
  function setStyle(style, name, val) {
    if (isArray(val)) {
      val.forEach((v2) => setStyle(style, name, v2));
    } else {
      if (val == null)
        val = "";
      if (name.startsWith("--")) {
        style.setProperty(name, val);
      } else {
        const prefixed = autoPrefix(style, name);
        if (importantRE.test(val)) {
          style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
        } else {
          style[prefixed] = val;
        }
      }
    }
  }
  function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) {
      return cached;
    }
    let name = camelize(rawName);
    if (name !== "filter" && name in style) {
      return prefixCache[rawName] = name;
    }
    name = capitalize(name);
    for (let i2 = 0; i2 < prefixes.length; i2++) {
      const prefixed = prefixes[i2] + name;
      if (prefixed in style) {
        return prefixCache[rawName] = prefixed;
      }
    }
    return rawName;
  }
  function patchAttr(el2, key, value, isSVG, instance) {
    if (isSVG && key.startsWith("xlink:")) {
      if (value == null) {
        el2.removeAttributeNS(xlinkNS, key.slice(6, key.length));
      } else {
        el2.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      const isBoolean2 = isSpecialBooleanAttr(key);
      if (value == null || isBoolean2 && !includeBooleanAttr(value)) {
        el2.removeAttribute(key);
      } else {
        el2.setAttribute(key, isBoolean2 ? "" : value);
      }
    }
  }
  function patchDOMProp(el2, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === "innerHTML" || key === "textContent") {
      if (prevChildren) {
        unmountChildren(prevChildren, parentComponent, parentSuspense);
      }
      el2[key] = value == null ? "" : value;
      return;
    }
    if (key === "value" && el2.tagName !== "PROGRESS" && // custom elements may use _value internally
    !el2.tagName.includes("-")) {
      el2._value = value;
      const newValue = value == null ? "" : value;
      if (el2.value !== newValue || // #4956: always set for OPTION elements because its value falls back to
      // textContent if no value attribute is present. And setting .value for
      // OPTION has no side effect
      el2.tagName === "OPTION") {
        el2.value = newValue;
      }
      if (value == null) {
        el2.removeAttribute(key);
      }
      return;
    }
    let needRemove = false;
    if (value === "" || value == null) {
      const type = typeof el2[key];
      if (type === "boolean") {
        value = includeBooleanAttr(value);
      } else if (value == null && type === "string") {
        value = "";
        needRemove = true;
      } else if (type === "number") {
        value = 0;
        needRemove = true;
      }
    }
    try {
      el2[key] = value;
    } catch (e2) {
      if (!needRemove) {
        warn$1(`Failed setting prop "${key}" on <${el2.tagName.toLowerCase()}>: value ${value} is invalid.`, e2);
      }
    }
    needRemove && el2.removeAttribute(key);
  }
  function addEventListener(el2, event, handler, options) {
    el2.addEventListener(event, handler, options);
  }
  function removeEventListener(el2, event, handler, options) {
    el2.removeEventListener(event, handler, options);
  }
  function patchEvent(el2, rawName, prevValue, nextValue, instance = null) {
    const invokers = el2._vei || (el2._vei = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) {
      existingInvoker.value = nextValue;
    } else {
      const [name, options] = parseName(rawName);
      if (nextValue) {
        const invoker = invokers[rawName] = createInvoker(nextValue, instance);
        addEventListener(el2, name, invoker, options);
      } else if (existingInvoker) {
        removeEventListener(el2, name, existingInvoker, options);
        invokers[rawName] = void 0;
      }
    }
  }
  function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
      options = {};
      let m2;
      while (m2 = name.match(optionsModifierRE)) {
        name = name.slice(0, name.length - m2[0].length);
        options[m2[0].toLowerCase()] = true;
      }
    }
    const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
    return [event, options];
  }
  function createInvoker(initialValue, instance) {
    const invoker = (e2) => {
      if (!e2._vts) {
        e2._vts = Date.now();
      } else if (e2._vts <= invoker.attached) {
        return;
      }
      callWithAsyncErrorHandling(patchStopImmediatePropagation(e2, invoker.value), instance, 5, [e2]);
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
  }
  function patchStopImmediatePropagation(e2, value) {
    if (isArray(value)) {
      const originalStop = e2.stopImmediatePropagation;
      e2.stopImmediatePropagation = () => {
        originalStop.call(e2);
        e2._stopped = true;
      };
      return value.map((fn2) => (e3) => !e3._stopped && fn2 && fn2(e3));
    } else {
      return value;
    }
  }
  function shouldSetAsProp(el2, key, value, isSVG) {
    if (isSVG) {
      if (key === "innerHTML" || key === "textContent") {
        return true;
      }
      if (key in el2 && nativeOnRE.test(key) && isFunction(value)) {
        return true;
      }
      return false;
    }
    if (key === "spellcheck" || key === "draggable" || key === "translate") {
      return false;
    }
    if (key === "form") {
      return false;
    }
    if (key === "list" && el2.tagName === "INPUT") {
      return false;
    }
    if (key === "type" && el2.tagName === "TEXTAREA") {
      return false;
    }
    if (nativeOnRE.test(key) && isString(value)) {
      return false;
    }
    return key in el2;
  }
  function defineCustomElement(options, hydrate2) {
    const Comp = defineComponent(options);
    class VueCustomElement extends VueElement {
      constructor(initialProps) {
        super(Comp, initialProps, hydrate2);
      }
    }
    VueCustomElement.def = Comp;
    return VueCustomElement;
  }
  function useCssModule(name = "$style") {
    {
      const instance = getCurrentInstance();
      if (!instance) {
        warn$1(`useCssModule must be called inside setup()`);
        return EMPTY_OBJ;
      }
      const modules = instance.type.__cssModules;
      if (!modules) {
        warn$1(`Current instance does not have CSS modules injected.`);
        return EMPTY_OBJ;
      }
      const mod = modules[name];
      if (!mod) {
        warn$1(`Current instance does not have CSS module named "${name}".`);
        return EMPTY_OBJ;
      }
      return mod;
    }
  }
  function useCssVars(getter) {
    const instance = getCurrentInstance();
    if (!instance) {
      warn$1(`useCssVars is called without current active component instance.`);
      return;
    }
    const setVars = () => setVarsOnVNode(instance.subTree, getter(instance.proxy));
    watchPostEffect(setVars);
    onMounted(() => {
      const ob = new MutationObserver(setVars);
      ob.observe(instance.subTree.el.parentNode, { childList: true });
      onUnmounted(() => ob.disconnect());
    });
  }
  function setVarsOnVNode(vnode, vars) {
    if (vnode.shapeFlag & 128) {
      const suspense = vnode.suspense;
      vnode = suspense.activeBranch;
      if (suspense.pendingBranch && !suspense.isHydrating) {
        suspense.effects.push(() => {
          setVarsOnVNode(suspense.activeBranch, vars);
        });
      }
    }
    while (vnode.component) {
      vnode = vnode.component.subTree;
    }
    if (vnode.shapeFlag & 1 && vnode.el) {
      setVarsOnNode(vnode.el, vars);
    } else if (vnode.type === Fragment) {
      vnode.children.forEach((c2) => setVarsOnVNode(c2, vars));
    } else if (vnode.type === Static) {
      let { el: el2, anchor } = vnode;
      while (el2) {
        setVarsOnNode(el2, vars);
        if (el2 === anchor)
          break;
        el2 = el2.nextSibling;
      }
    }
  }
  function setVarsOnNode(el2, vars) {
    if (el2.nodeType === 1) {
      const style = el2.style;
      for (const key in vars) {
        style.setProperty(`--${key}`, vars[key]);
      }
    }
  }
  function resolveTransitionProps(rawProps) {
    const baseProps = {};
    for (const key in rawProps) {
      if (!(key in DOMTransitionPropsValidators)) {
        baseProps[key] = rawProps[key];
      }
    }
    if (rawProps.css === false) {
      return baseProps;
    }
    const { name = "v", type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
    const finishEnter = (el2, isAppear, done) => {
      removeTransitionClass(el2, isAppear ? appearToClass : enterToClass);
      removeTransitionClass(el2, isAppear ? appearActiveClass : enterActiveClass);
      done && done();
    };
    const finishLeave = (el2, done) => {
      el2._isLeaving = false;
      removeTransitionClass(el2, leaveFromClass);
      removeTransitionClass(el2, leaveToClass);
      removeTransitionClass(el2, leaveActiveClass);
      done && done();
    };
    const makeEnterHook = (isAppear) => {
      return (el2, done) => {
        const hook = isAppear ? onAppear : onEnter;
        const resolve2 = () => finishEnter(el2, isAppear, done);
        callHook$1(hook, [el2, resolve2]);
        nextFrame(() => {
          removeTransitionClass(el2, isAppear ? appearFromClass : enterFromClass);
          addTransitionClass(el2, isAppear ? appearToClass : enterToClass);
          if (!hasExplicitCallback(hook)) {
            whenTransitionEnds(el2, type, enterDuration, resolve2);
          }
        });
      };
    };
    return extend(baseProps, {
      onBeforeEnter(el2) {
        callHook$1(onBeforeEnter, [el2]);
        addTransitionClass(el2, enterFromClass);
        addTransitionClass(el2, enterActiveClass);
      },
      onBeforeAppear(el2) {
        callHook$1(onBeforeAppear, [el2]);
        addTransitionClass(el2, appearFromClass);
        addTransitionClass(el2, appearActiveClass);
      },
      onEnter: makeEnterHook(false),
      onAppear: makeEnterHook(true),
      onLeave(el2, done) {
        el2._isLeaving = true;
        const resolve2 = () => finishLeave(el2, done);
        addTransitionClass(el2, leaveFromClass);
        forceReflow();
        addTransitionClass(el2, leaveActiveClass);
        nextFrame(() => {
          if (!el2._isLeaving) {
            return;
          }
          removeTransitionClass(el2, leaveFromClass);
          addTransitionClass(el2, leaveToClass);
          if (!hasExplicitCallback(onLeave)) {
            whenTransitionEnds(el2, type, leaveDuration, resolve2);
          }
        });
        callHook$1(onLeave, [el2, resolve2]);
      },
      onEnterCancelled(el2) {
        finishEnter(el2, false);
        callHook$1(onEnterCancelled, [el2]);
      },
      onAppearCancelled(el2) {
        finishEnter(el2, true);
        callHook$1(onAppearCancelled, [el2]);
      },
      onLeaveCancelled(el2) {
        finishLeave(el2);
        callHook$1(onLeaveCancelled, [el2]);
      }
    });
  }
  function normalizeDuration(duration) {
    if (duration == null) {
      return null;
    } else if (isObject(duration)) {
      return [NumberOf(duration.enter), NumberOf(duration.leave)];
    } else {
      const n2 = NumberOf(duration);
      return [n2, n2];
    }
  }
  function NumberOf(val) {
    const res = toNumber(val);
    validateDuration(res);
    return res;
  }
  function validateDuration(val) {
    if (typeof val !== "number") {
      warn$1(`<transition> explicit duration is not a valid number - got ${JSON.stringify(val)}.`);
    } else if (isNaN(val)) {
      warn$1(`<transition> explicit duration is NaN - the duration expression might be incorrect.`);
    }
  }
  function addTransitionClass(el2, cls) {
    cls.split(/\s+/).forEach((c2) => c2 && el2.classList.add(c2));
    (el2._vtc || (el2._vtc = /* @__PURE__ */ new Set())).add(cls);
  }
  function removeTransitionClass(el2, cls) {
    cls.split(/\s+/).forEach((c2) => c2 && el2.classList.remove(c2));
    const { _vtc } = el2;
    if (_vtc) {
      _vtc.delete(cls);
      if (!_vtc.size) {
        el2._vtc = void 0;
      }
    }
  }
  function nextFrame(cb) {
    requestAnimationFrame(() => {
      requestAnimationFrame(cb);
    });
  }
  function whenTransitionEnds(el2, expectedType, explicitTimeout, resolve2) {
    const id = el2._endId = ++endId;
    const resolveIfNotStale = () => {
      if (id === el2._endId) {
        resolve2();
      }
    };
    if (explicitTimeout) {
      return setTimeout(resolveIfNotStale, explicitTimeout);
    }
    const { type, timeout, propCount } = getTransitionInfo(el2, expectedType);
    if (!type) {
      return resolve2();
    }
    const endEvent = type + "end";
    let ended = 0;
    const end = () => {
      el2.removeEventListener(endEvent, onEnd);
      resolveIfNotStale();
    };
    const onEnd = (e2) => {
      if (e2.target === el2 && ++ended >= propCount) {
        end();
      }
    };
    setTimeout(() => {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el2.addEventListener(endEvent, onEnd);
  }
  function getTransitionInfo(el2, expectedType) {
    const styles = window.getComputedStyle(el2);
    const getStyleProperties = (key) => (styles[key] || "").split(", ");
    const transitionDelays = getStyleProperties(TRANSITION + "Delay");
    const transitionDurations = getStyleProperties(TRANSITION + "Duration");
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(ANIMATION + "Delay");
    const animationDurations = getStyleProperties(ANIMATION + "Duration");
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
      propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }
    const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + "Property"]);
    return {
      type,
      timeout,
      propCount,
      hasTransform
    };
  }
  function getTimeout(delays, durations) {
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }
    return Math.max(...durations.map((d2, i2) => toMs(d2) + toMs(delays[i2])));
  }
  function toMs(s2) {
    return Number(s2.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function forceReflow() {
    return document.body.offsetHeight;
  }
  function callPendingCbs(c2) {
    const el2 = c2.el;
    if (el2._moveCb) {
      el2._moveCb();
    }
    if (el2._enterCb) {
      el2._enterCb();
    }
  }
  function recordPosition(c2) {
    newPositionMap.set(c2, c2.el.getBoundingClientRect());
  }
  function applyTranslation(c2) {
    const oldPos = positionMap.get(c2);
    const newPos = newPositionMap.get(c2);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
      const s2 = c2.el.style;
      s2.transform = s2.webkitTransform = `translate(${dx}px,${dy}px)`;
      s2.transitionDuration = "0s";
      return c2;
    }
  }
  function hasCSSTransform(el2, root, moveClass) {
    const clone = el2.cloneNode();
    if (el2._vtc) {
      el2._vtc.forEach((cls) => {
        cls.split(/\s+/).forEach((c2) => c2 && clone.classList.remove(c2));
      });
    }
    moveClass.split(/\s+/).forEach((c2) => c2 && clone.classList.add(c2));
    clone.style.display = "none";
    const container = root.nodeType === 1 ? root : root.parentNode;
    container.appendChild(clone);
    const { hasTransform } = getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
  }
  function onCompositionStart(e2) {
    e2.target.composing = true;
  }
  function onCompositionEnd(e2) {
    const target = e2.target;
    if (target.composing) {
      target.composing = false;
      target.dispatchEvent(new Event("input"));
    }
  }
  function setChecked(el2, { value, oldValue }, vnode) {
    el2._modelValue = value;
    if (isArray(value)) {
      el2.checked = looseIndexOf(value, vnode.props.value) > -1;
    } else if (isSet(value)) {
      el2.checked = value.has(vnode.props.value);
    } else if (value !== oldValue) {
      el2.checked = looseEqual(value, getCheckboxValue(el2, true));
    }
  }
  function setSelected(el2, value) {
    const isMultiple = el2.multiple;
    if (isMultiple && !isArray(value) && !isSet(value)) {
      warn$1(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(value).slice(8, -1)}.`);
      return;
    }
    for (let i2 = 0, l2 = el2.options.length; i2 < l2; i2++) {
      const option = el2.options[i2];
      const optionValue = getValue(option);
      if (isMultiple) {
        if (isArray(value)) {
          option.selected = looseIndexOf(value, optionValue) > -1;
        } else {
          option.selected = value.has(optionValue);
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el2.selectedIndex !== i2)
            el2.selectedIndex = i2;
          return;
        }
      }
    }
    if (!isMultiple && el2.selectedIndex !== -1) {
      el2.selectedIndex = -1;
    }
  }
  function getValue(el2) {
    return "_value" in el2 ? el2._value : el2.value;
  }
  function getCheckboxValue(el2, checked) {
    const key = checked ? "_trueValue" : "_falseValue";
    return key in el2 ? el2[key] : checked;
  }
  function resolveDynamicModel(tagName, type) {
    switch (tagName) {
      case "SELECT":
        return vModelSelect;
      case "TEXTAREA":
        return vModelText;
      default:
        switch (type) {
          case "checkbox":
            return vModelCheckbox;
          case "radio":
            return vModelRadio;
          default:
            return vModelText;
        }
    }
  }
  function callModelHook(el2, binding, vnode, prevVNode, hook) {
    const modelToUse = resolveDynamicModel(el2.tagName, vnode.props && vnode.props.type);
    const fn2 = modelToUse[hook];
    fn2 && fn2(el2, binding, vnode, prevVNode);
  }
  function setDisplay(el2, value) {
    el2.style.display = value ? el2._vod : "none";
  }
  function ensureRenderer() {
    return renderer || (renderer = createRenderer(rendererOptions));
  }
  function ensureHydrationRenderer() {
    renderer = enabledHydration ? renderer : createHydrationRenderer(rendererOptions);
    enabledHydration = true;
    return renderer;
  }
  function injectNativeTagCheck(app) {
    Object.defineProperty(app.config, "isNativeTag", {
      value: (tag) => isHTMLTag(tag) || isSVGTag(tag),
      writable: false
    });
  }
  function injectCompilerOptionsCheck(app) {
    if (isRuntimeOnly()) {
      const isCustomElement = app.config.isCustomElement;
      Object.defineProperty(app.config, "isCustomElement", {
        get() {
          return isCustomElement;
        },
        set() {
          warn$1(`The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`);
        }
      });
      const compilerOptions = app.config.compilerOptions;
      const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom`;
      Object.defineProperty(app.config, "compilerOptions", {
        get() {
          warn$1(msg);
          return compilerOptions;
        },
        set() {
          warn$1(msg);
        }
      });
    }
  }
  function normalizeContainer(container) {
    if (isString(container)) {
      const res = document.querySelector(container);
      if (!res) {
        warn$1(`Failed to mount app: mount target selector "${container}" returned null.`);
      }
      return res;
    }
    if (window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed") {
      warn$1(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
    }
    return container;
  }
  function initDev() {
    {
      {
        console.info(`You are running a development build of Vue.
Make sure to use the production build (*.prod.js) when deploying for production.`);
      }
      initCustomFormatter();
    }
  }
  function defaultOnError(error) {
    throw error;
  }
  function defaultOnWarn(msg) {
    console.warn(`[Vue warn] ${msg.message}`);
  }
  function createCompilerError(code, loc, messages, additionalMessage) {
    const msg = (messages || errorMessages)[code] + (additionalMessage || ``);
    const error = new SyntaxError(String(msg));
    error.code = code;
    error.loc = loc;
    return error;
  }
  function registerRuntimeHelpers(helpers) {
    Object.getOwnPropertySymbols(helpers).forEach((s2) => {
      helperNameMap[s2] = helpers[s2];
    });
  }
  function createRoot(children, loc = locStub) {
    return {
      type: 0,
      children,
      helpers: [],
      components: [],
      directives: [],
      hoists: [],
      imports: [],
      cached: 0,
      temps: 0,
      codegenNode: void 0,
      loc
    };
  }
  function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives, isBlock = false, disableTracking = false, isComponent2 = false, loc = locStub) {
    if (context) {
      if (isBlock) {
        context.helper(OPEN_BLOCK);
        context.helper(getVNodeBlockHelper(context.inSSR, isComponent2));
      } else {
        context.helper(getVNodeHelper(context.inSSR, isComponent2));
      }
      if (directives) {
        context.helper(WITH_DIRECTIVES);
      }
    }
    return {
      type: 13,
      tag,
      props,
      children,
      patchFlag,
      dynamicProps,
      directives,
      isBlock,
      disableTracking,
      isComponent: isComponent2,
      loc
    };
  }
  function createArrayExpression(elements, loc = locStub) {
    return {
      type: 17,
      loc,
      elements
    };
  }
  function createObjectExpression(properties, loc = locStub) {
    return {
      type: 15,
      loc,
      properties
    };
  }
  function createObjectProperty(key, value) {
    return {
      type: 16,
      loc: locStub,
      key: isString(key) ? createSimpleExpression(key, true) : key,
      value
    };
  }
  function createSimpleExpression(content, isStatic = false, loc = locStub, constType = 0) {
    return {
      type: 4,
      loc,
      content,
      isStatic,
      constType: isStatic ? 3 : constType
    };
  }
  function createCompoundExpression(children, loc = locStub) {
    return {
      type: 8,
      loc,
      children
    };
  }
  function createCallExpression(callee, args = [], loc = locStub) {
    return {
      type: 14,
      loc,
      callee,
      arguments: args
    };
  }
  function createFunctionExpression(params, returns = void 0, newline = false, isSlot = false, loc = locStub) {
    return {
      type: 18,
      params,
      returns,
      newline,
      isSlot,
      loc
    };
  }
  function createConditionalExpression(test, consequent, alternate, newline = true) {
    return {
      type: 19,
      test,
      consequent,
      alternate,
      newline,
      loc: locStub
    };
  }
  function createCacheExpression(index, value, isVNode2 = false) {
    return {
      type: 20,
      index,
      value,
      isVNode: isVNode2,
      loc: locStub
    };
  }
  function createBlockStatement(body) {
    return {
      type: 21,
      body,
      loc: locStub
    };
  }
  function isCoreComponent(tag) {
    if (isBuiltInType(tag, "Teleport")) {
      return TELEPORT;
    } else if (isBuiltInType(tag, "Suspense")) {
      return SUSPENSE;
    } else if (isBuiltInType(tag, "KeepAlive")) {
      return KEEP_ALIVE;
    } else if (isBuiltInType(tag, "BaseTransition")) {
      return BASE_TRANSITION;
    }
  }
  function getInnerRange(loc, offset, length) {
    const source = loc.source.slice(offset, offset + length);
    const newLoc = {
      source,
      start: advancePositionWithClone(loc.start, loc.source, offset),
      end: loc.end
    };
    if (length != null) {
      newLoc.end = advancePositionWithClone(loc.start, loc.source, offset + length);
    }
    return newLoc;
  }
  function advancePositionWithClone(pos, source, numberOfCharacters = source.length) {
    return advancePositionWithMutation(extend({}, pos), source, numberOfCharacters);
  }
  function advancePositionWithMutation(pos, source, numberOfCharacters = source.length) {
    let linesCount = 0;
    let lastNewLinePos = -1;
    for (let i2 = 0; i2 < numberOfCharacters; i2++) {
      if (source.charCodeAt(i2) === 10) {
        linesCount++;
        lastNewLinePos = i2;
      }
    }
    pos.offset += numberOfCharacters;
    pos.line += linesCount;
    pos.column = lastNewLinePos === -1 ? pos.column + numberOfCharacters : numberOfCharacters - lastNewLinePos;
    return pos;
  }
  function assert(condition, msg) {
    if (!condition) {
      throw new Error(msg || `unexpected compiler condition`);
    }
  }
  function findDir(node, name, allowEmpty = false) {
    for (let i2 = 0; i2 < node.props.length; i2++) {
      const p3 = node.props[i2];
      if (p3.type === 7 && (allowEmpty || p3.exp) && (isString(name) ? p3.name === name : name.test(p3.name))) {
        return p3;
      }
    }
  }
  function findProp(node, name, dynamicOnly = false, allowEmpty = false) {
    for (let i2 = 0; i2 < node.props.length; i2++) {
      const p3 = node.props[i2];
      if (p3.type === 6) {
        if (dynamicOnly)
          continue;
        if (p3.name === name && (p3.value || allowEmpty)) {
          return p3;
        }
      } else if (p3.name === "bind" && (p3.exp || allowEmpty) && isStaticArgOf(p3.arg, name)) {
        return p3;
      }
    }
  }
  function isStaticArgOf(arg, name) {
    return !!(arg && isStaticExp(arg) && arg.content === name);
  }
  function hasDynamicKeyVBind(node) {
    return node.props.some(
      (p3) => p3.type === 7 && p3.name === "bind" && (!p3.arg || // v-bind="obj"
      p3.arg.type !== 4 || // v-bind:[_ctx.foo]
      !p3.arg.isStatic)
      // v-bind:[foo]
    );
  }
  function isText(node) {
    return node.type === 5 || node.type === 2;
  }
  function isVSlot(p3) {
    return p3.type === 7 && p3.name === "slot";
  }
  function isTemplateNode(node) {
    return node.type === 1 && node.tagType === 3;
  }
  function isSlotOutlet(node) {
    return node.type === 1 && node.tagType === 2;
  }
  function getVNodeHelper(ssr, isComponent2) {
    return ssr || isComponent2 ? CREATE_VNODE : CREATE_ELEMENT_VNODE;
  }
  function getVNodeBlockHelper(ssr, isComponent2) {
    return ssr || isComponent2 ? CREATE_BLOCK : CREATE_ELEMENT_BLOCK;
  }
  function getUnnormalizedProps(props, callPath = []) {
    if (props && !isString(props) && props.type === 14) {
      const callee = props.callee;
      if (!isString(callee) && propsHelperSet.has(callee)) {
        return getUnnormalizedProps(props.arguments[0], callPath.concat(props));
      }
    }
    return [props, callPath];
  }
  function injectProp(node, prop, context) {
    let propsWithInjection;
    let props = node.type === 13 ? node.props : node.arguments[2];
    let callPath = [];
    let parentCall;
    if (props && !isString(props) && props.type === 14) {
      const ret = getUnnormalizedProps(props);
      props = ret[0];
      callPath = ret[1];
      parentCall = callPath[callPath.length - 1];
    }
    if (props == null || isString(props)) {
      propsWithInjection = createObjectExpression([prop]);
    } else if (props.type === 14) {
      const first = props.arguments[0];
      if (!isString(first) && first.type === 15) {
        first.properties.unshift(prop);
      } else {
        if (props.callee === TO_HANDLERS) {
          propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
            createObjectExpression([prop]),
            props
          ]);
        } else {
          props.arguments.unshift(createObjectExpression([prop]));
        }
      }
      !propsWithInjection && (propsWithInjection = props);
    } else if (props.type === 15) {
      let alreadyExists = false;
      if (prop.key.type === 4) {
        const propKeyName = prop.key.content;
        alreadyExists = props.properties.some((p3) => p3.key.type === 4 && p3.key.content === propKeyName);
      }
      if (!alreadyExists) {
        props.properties.unshift(prop);
      }
      propsWithInjection = props;
    } else {
      propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
        createObjectExpression([prop]),
        props
      ]);
      if (parentCall && parentCall.callee === GUARD_REACTIVE_PROPS) {
        parentCall = callPath[callPath.length - 2];
      }
    }
    if (node.type === 13) {
      if (parentCall) {
        parentCall.arguments[0] = propsWithInjection;
      } else {
        node.props = propsWithInjection;
      }
    } else {
      if (parentCall) {
        parentCall.arguments[0] = propsWithInjection;
      } else {
        node.arguments[2] = propsWithInjection;
      }
    }
  }
  function toValidAssetId(name, type) {
    return `_${type}_${name.replace(/[^\w]/g, (searchValue, replaceValue) => {
      return searchValue === "-" ? "_" : name.charCodeAt(replaceValue).toString();
    })}`;
  }
  function getMemoedVNodeCall(node) {
    if (node.type === 14 && node.callee === WITH_MEMO) {
      return node.arguments[1].returns;
    } else {
      return node;
    }
  }
  function makeBlock(node, { helper, removeHelper, inSSR }) {
    if (!node.isBlock) {
      node.isBlock = true;
      removeHelper(getVNodeHelper(inSSR, node.isComponent));
      helper(OPEN_BLOCK);
      helper(getVNodeBlockHelper(inSSR, node.isComponent));
    }
  }
  function baseParse(content, options = {}) {
    const context = createParserContext(content, options);
    const start = getCursor(context);
    return createRoot(parseChildren(context, 0, []), getSelection(context, start));
  }
  function createParserContext(content, rawOptions) {
    const options = extend({}, defaultParserOptions);
    let key;
    for (key in rawOptions) {
      options[key] = rawOptions[key] === void 0 ? defaultParserOptions[key] : rawOptions[key];
    }
    return {
      options,
      column: 1,
      line: 1,
      offset: 0,
      originalSource: content,
      source: content,
      inPre: false,
      inVPre: false,
      onWarn: options.onWarn
    };
  }
  function parseChildren(context, mode, ancestors) {
    const parent = last(ancestors);
    const ns2 = parent ? parent.ns : 0;
    const nodes = [];
    while (!isEnd(context, mode, ancestors)) {
      const s2 = context.source;
      let node = void 0;
      if (mode === 0 || mode === 1) {
        if (!context.inVPre && startsWith(s2, context.options.delimiters[0])) {
          node = parseInterpolation(context, mode);
        } else if (mode === 0 && s2[0] === "<") {
          if (s2.length === 1) {
            emitError(context, 5, 1);
          } else if (s2[1] === "!") {
            if (startsWith(s2, "<!--")) {
              node = parseComment(context);
            } else if (startsWith(s2, "<!DOCTYPE")) {
              node = parseBogusComment(context);
            } else if (startsWith(s2, "<![CDATA[")) {
              if (ns2 !== 0) {
                node = parseCDATA(context, ancestors);
              } else {
                emitError(
                  context,
                  1
                  /* ErrorCodes.CDATA_IN_HTML_CONTENT */
                );
                node = parseBogusComment(context);
              }
            } else {
              emitError(
                context,
                11
                /* ErrorCodes.INCORRECTLY_OPENED_COMMENT */
              );
              node = parseBogusComment(context);
            }
          } else if (s2[1] === "/") {
            if (s2.length === 2) {
              emitError(context, 5, 2);
            } else if (s2[2] === ">") {
              emitError(context, 14, 2);
              advanceBy(context, 3);
              continue;
            } else if (/[a-z]/i.test(s2[2])) {
              emitError(
                context,
                23
                /* ErrorCodes.X_INVALID_END_TAG */
              );
              parseTag(context, 1, parent);
              continue;
            } else {
              emitError(context, 12, 2);
              node = parseBogusComment(context);
            }
          } else if (/[a-z]/i.test(s2[1])) {
            node = parseElement(context, ancestors);
          } else if (s2[1] === "?") {
            emitError(context, 21, 1);
            node = parseBogusComment(context);
          } else {
            emitError(context, 12, 1);
          }
        }
      }
      if (!node) {
        node = parseText(context, mode);
      }
      if (isArray(node)) {
        for (let i2 = 0; i2 < node.length; i2++) {
          pushNode(nodes, node[i2]);
        }
      } else {
        pushNode(nodes, node);
      }
    }
    let removedWhitespace = false;
    if (mode !== 2 && mode !== 1) {
      const shouldCondense = context.options.whitespace !== "preserve";
      for (let i2 = 0; i2 < nodes.length; i2++) {
        const node = nodes[i2];
        if (node.type === 2) {
          if (!context.inPre) {
            if (!/[^\t\r\n\f ]/.test(node.content)) {
              const prev = nodes[i2 - 1];
              const next = nodes[i2 + 1];
              if (!prev || !next || shouldCondense && (prev.type === 3 || next.type === 3 || prev.type === 1 && next.type === 1 && /[\r\n]/.test(node.content))) {
                removedWhitespace = true;
                nodes[i2] = null;
              } else {
                node.content = " ";
              }
            } else if (shouldCondense) {
              node.content = node.content.replace(/[\t\r\n\f ]+/g, " ");
            }
          } else {
            node.content = node.content.replace(/\r\n/g, "\n");
          }
        } else if (node.type === 3 && !context.options.comments) {
          removedWhitespace = true;
          nodes[i2] = null;
        }
      }
      if (context.inPre && parent && context.options.isPreTag(parent.tag)) {
        const first = nodes[0];
        if (first && first.type === 2) {
          first.content = first.content.replace(/^\r?\n/, "");
        }
      }
    }
    return removedWhitespace ? nodes.filter(Boolean) : nodes;
  }
  function pushNode(nodes, node) {
    if (node.type === 2) {
      const prev = last(nodes);
      if (prev && prev.type === 2 && prev.loc.end.offset === node.loc.start.offset) {
        prev.content += node.content;
        prev.loc.end = node.loc.end;
        prev.loc.source += node.loc.source;
        return;
      }
    }
    nodes.push(node);
  }
  function parseCDATA(context, ancestors) {
    advanceBy(context, 9);
    const nodes = parseChildren(context, 3, ancestors);
    if (context.source.length === 0) {
      emitError(
        context,
        6
        /* ErrorCodes.EOF_IN_CDATA */
      );
    } else {
      advanceBy(context, 3);
    }
    return nodes;
  }
  function parseComment(context) {
    const start = getCursor(context);
    let content;
    const match = /--(\!)?>/.exec(context.source);
    if (!match) {
      content = context.source.slice(4);
      advanceBy(context, context.source.length);
      emitError(
        context,
        7
        /* ErrorCodes.EOF_IN_COMMENT */
      );
    } else {
      if (match.index <= 3) {
        emitError(
          context,
          0
          /* ErrorCodes.ABRUPT_CLOSING_OF_EMPTY_COMMENT */
        );
      }
      if (match[1]) {
        emitError(
          context,
          10
          /* ErrorCodes.INCORRECTLY_CLOSED_COMMENT */
        );
      }
      content = context.source.slice(4, match.index);
      const s2 = context.source.slice(0, match.index);
      let prevIndex = 1, nestedIndex = 0;
      while ((nestedIndex = s2.indexOf("<!--", prevIndex)) !== -1) {
        advanceBy(context, nestedIndex - prevIndex + 1);
        if (nestedIndex + 4 < s2.length) {
          emitError(
            context,
            16
            /* ErrorCodes.NESTED_COMMENT */
          );
        }
        prevIndex = nestedIndex + 1;
      }
      advanceBy(context, match.index + match[0].length - prevIndex + 1);
    }
    return {
      type: 3,
      content,
      loc: getSelection(context, start)
    };
  }
  function parseBogusComment(context) {
    const start = getCursor(context);
    const contentStart = context.source[1] === "?" ? 1 : 2;
    let content;
    const closeIndex = context.source.indexOf(">");
    if (closeIndex === -1) {
      content = context.source.slice(contentStart);
      advanceBy(context, context.source.length);
    } else {
      content = context.source.slice(contentStart, closeIndex);
      advanceBy(context, closeIndex + 1);
    }
    return {
      type: 3,
      content,
      loc: getSelection(context, start)
    };
  }
  function parseElement(context, ancestors) {
    const wasInPre = context.inPre;
    const wasInVPre = context.inVPre;
    const parent = last(ancestors);
    const element = parseTag(context, 0, parent);
    const isPreBoundary = context.inPre && !wasInPre;
    const isVPreBoundary = context.inVPre && !wasInVPre;
    if (element.isSelfClosing || context.options.isVoidTag(element.tag)) {
      if (isPreBoundary) {
        context.inPre = false;
      }
      if (isVPreBoundary) {
        context.inVPre = false;
      }
      return element;
    }
    ancestors.push(element);
    const mode = context.options.getTextMode(element, parent);
    const children = parseChildren(context, mode, ancestors);
    ancestors.pop();
    element.children = children;
    if (startsWithEndTagOpen(context.source, element.tag)) {
      parseTag(context, 1, parent);
    } else {
      emitError(context, 24, 0, element.loc.start);
      if (context.source.length === 0 && element.tag.toLowerCase() === "script") {
        const first = children[0];
        if (first && startsWith(first.loc.source, "<!--")) {
          emitError(
            context,
            8
            /* ErrorCodes.EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT */
          );
        }
      }
    }
    element.loc = getSelection(context, element.loc.start);
    if (isPreBoundary) {
      context.inPre = false;
    }
    if (isVPreBoundary) {
      context.inVPre = false;
    }
    return element;
  }
  function parseTag(context, type, parent) {
    const start = getCursor(context);
    const match = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(context.source);
    const tag = match[1];
    const ns2 = context.options.getNamespace(tag, parent);
    advanceBy(context, match[0].length);
    advanceSpaces(context);
    const cursor = getCursor(context);
    const currentSource = context.source;
    if (context.options.isPreTag(tag)) {
      context.inPre = true;
    }
    let props = parseAttributes(context, type);
    if (type === 0 && !context.inVPre && props.some((p3) => p3.type === 7 && p3.name === "pre")) {
      context.inVPre = true;
      extend(context, cursor);
      context.source = currentSource;
      props = parseAttributes(context, type).filter((p3) => p3.name !== "v-pre");
    }
    let isSelfClosing = false;
    if (context.source.length === 0) {
      emitError(
        context,
        9
        /* ErrorCodes.EOF_IN_TAG */
      );
    } else {
      isSelfClosing = startsWith(context.source, "/>");
      if (type === 1 && isSelfClosing) {
        emitError(
          context,
          4
          /* ErrorCodes.END_TAG_WITH_TRAILING_SOLIDUS */
        );
      }
      advanceBy(context, isSelfClosing ? 2 : 1);
    }
    if (type === 1) {
      return;
    }
    let tagType = 0;
    if (!context.inVPre) {
      if (tag === "slot") {
        tagType = 2;
      } else if (tag === "template") {
        if (props.some((p3) => p3.type === 7 && isSpecialTemplateDirective(p3.name))) {
          tagType = 3;
        }
      } else if (isComponent(tag, props, context)) {
        tagType = 1;
      }
    }
    return {
      type: 1,
      ns: ns2,
      tag,
      tagType,
      props,
      isSelfClosing,
      children: [],
      loc: getSelection(context, start),
      codegenNode: void 0
      // to be created during transform phase
    };
  }
  function isComponent(tag, props, context) {
    const options = context.options;
    if (options.isCustomElement(tag)) {
      return false;
    }
    if (tag === "component" || /^[A-Z]/.test(tag) || isCoreComponent(tag) || options.isBuiltInComponent && options.isBuiltInComponent(tag) || options.isNativeTag && !options.isNativeTag(tag)) {
      return true;
    }
    for (let i2 = 0; i2 < props.length; i2++) {
      const p3 = props[i2];
      if (p3.type === 6) {
        if (p3.name === "is" && p3.value) {
          if (p3.value.content.startsWith("vue:")) {
            return true;
          }
        }
      } else {
        if (p3.name === "is") {
          return true;
        } else if (
          // :is on plain element - only treat as component in compat mode
          p3.name === "bind" && isStaticArgOf(p3.arg, "is") && false
        ) {
          return true;
        }
      }
    }
  }
  function parseAttributes(context, type) {
    const props = [];
    const attributeNames = /* @__PURE__ */ new Set();
    while (context.source.length > 0 && !startsWith(context.source, ">") && !startsWith(context.source, "/>")) {
      if (startsWith(context.source, "/")) {
        emitError(
          context,
          22
          /* ErrorCodes.UNEXPECTED_SOLIDUS_IN_TAG */
        );
        advanceBy(context, 1);
        advanceSpaces(context);
        continue;
      }
      if (type === 1) {
        emitError(
          context,
          3
          /* ErrorCodes.END_TAG_WITH_ATTRIBUTES */
        );
      }
      const attr = parseAttribute(context, attributeNames);
      if (attr.type === 6 && attr.value && attr.name === "class") {
        attr.value.content = attr.value.content.replace(/\s+/g, " ").trim();
      }
      if (type === 0) {
        props.push(attr);
      }
      if (/^[^\t\r\n\f />]/.test(context.source)) {
        emitError(
          context,
          15
          /* ErrorCodes.MISSING_WHITESPACE_BETWEEN_ATTRIBUTES */
        );
      }
      advanceSpaces(context);
    }
    return props;
  }
  function parseAttribute(context, nameSet) {
    const start = getCursor(context);
    const match = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(context.source);
    const name = match[0];
    if (nameSet.has(name)) {
      emitError(
        context,
        2
        /* ErrorCodes.DUPLICATE_ATTRIBUTE */
      );
    }
    nameSet.add(name);
    if (name[0] === "=") {
      emitError(
        context,
        19
        /* ErrorCodes.UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME */
      );
    }
    {
      const pattern = /["'<]/g;
      let m2;
      while (m2 = pattern.exec(name)) {
        emitError(context, 17, m2.index);
      }
    }
    advanceBy(context, name.length);
    let value = void 0;
    if (/^[\t\r\n\f ]*=/.test(context.source)) {
      advanceSpaces(context);
      advanceBy(context, 1);
      advanceSpaces(context);
      value = parseAttributeValue(context);
      if (!value) {
        emitError(
          context,
          13
          /* ErrorCodes.MISSING_ATTRIBUTE_VALUE */
        );
      }
    }
    const loc = getSelection(context, start);
    if (!context.inVPre && /^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(name)) {
      const match2 = /(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(name);
      let isPropShorthand = startsWith(name, ".");
      let dirName = match2[1] || (isPropShorthand || startsWith(name, ":") ? "bind" : startsWith(name, "@") ? "on" : "slot");
      let arg;
      if (match2[2]) {
        const isSlot = dirName === "slot";
        const startOffset = name.lastIndexOf(match2[2]);
        const loc2 = getSelection(context, getNewPosition(context, start, startOffset), getNewPosition(context, start, startOffset + match2[2].length + (isSlot && match2[3] || "").length));
        let content = match2[2];
        let isStatic = true;
        if (content.startsWith("[")) {
          isStatic = false;
          if (!content.endsWith("]")) {
            emitError(
              context,
              27
              /* ErrorCodes.X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END */
            );
            content = content.slice(1);
          } else {
            content = content.slice(1, content.length - 1);
          }
        } else if (isSlot) {
          content += match2[3] || "";
        }
        arg = {
          type: 4,
          content,
          isStatic,
          constType: isStatic ? 3 : 0,
          loc: loc2
        };
      }
      if (value && value.isQuoted) {
        const valueLoc = value.loc;
        valueLoc.start.offset++;
        valueLoc.start.column++;
        valueLoc.end = advancePositionWithClone(valueLoc.start, value.content);
        valueLoc.source = valueLoc.source.slice(1, -1);
      }
      const modifiers = match2[3] ? match2[3].slice(1).split(".") : [];
      if (isPropShorthand)
        modifiers.push("prop");
      return {
        type: 7,
        name: dirName,
        exp: value && {
          type: 4,
          content: value.content,
          isStatic: false,
          // Treat as non-constant by default. This can be potentially set to
          // other values by `transformExpression` to make it eligible for hoisting.
          constType: 0,
          loc: value.loc
        },
        arg,
        modifiers,
        loc
      };
    }
    if (!context.inVPre && startsWith(name, "v-")) {
      emitError(
        context,
        26
        /* ErrorCodes.X_MISSING_DIRECTIVE_NAME */
      );
    }
    return {
      type: 6,
      name,
      value: value && {
        type: 2,
        content: value.content,
        loc: value.loc
      },
      loc
    };
  }
  function parseAttributeValue(context) {
    const start = getCursor(context);
    let content;
    const quote = context.source[0];
    const isQuoted = quote === `"` || quote === `'`;
    if (isQuoted) {
      advanceBy(context, 1);
      const endIndex = context.source.indexOf(quote);
      if (endIndex === -1) {
        content = parseTextData(
          context,
          context.source.length,
          4
          /* TextModes.ATTRIBUTE_VALUE */
        );
      } else {
        content = parseTextData(
          context,
          endIndex,
          4
          /* TextModes.ATTRIBUTE_VALUE */
        );
        advanceBy(context, 1);
      }
    } else {
      const match = /^[^\t\r\n\f >]+/.exec(context.source);
      if (!match) {
        return void 0;
      }
      const unexpectedChars = /["'<=`]/g;
      let m2;
      while (m2 = unexpectedChars.exec(match[0])) {
        emitError(context, 18, m2.index);
      }
      content = parseTextData(
        context,
        match[0].length,
        4
        /* TextModes.ATTRIBUTE_VALUE */
      );
    }
    return { content, isQuoted, loc: getSelection(context, start) };
  }
  function parseInterpolation(context, mode) {
    const [open, close] = context.options.delimiters;
    const closeIndex = context.source.indexOf(close, open.length);
    if (closeIndex === -1) {
      emitError(
        context,
        25
        /* ErrorCodes.X_MISSING_INTERPOLATION_END */
      );
      return void 0;
    }
    const start = getCursor(context);
    advanceBy(context, open.length);
    const innerStart = getCursor(context);
    const innerEnd = getCursor(context);
    const rawContentLength = closeIndex - open.length;
    const rawContent = context.source.slice(0, rawContentLength);
    const preTrimContent = parseTextData(context, rawContentLength, mode);
    const content = preTrimContent.trim();
    const startOffset = preTrimContent.indexOf(content);
    if (startOffset > 0) {
      advancePositionWithMutation(innerStart, rawContent, startOffset);
    }
    const endOffset = rawContentLength - (preTrimContent.length - content.length - startOffset);
    advancePositionWithMutation(innerEnd, rawContent, endOffset);
    advanceBy(context, close.length);
    return {
      type: 5,
      content: {
        type: 4,
        isStatic: false,
        // Set `isConstant` to false by default and will decide in transformExpression
        constType: 0,
        content,
        loc: getSelection(context, innerStart, innerEnd)
      },
      loc: getSelection(context, start)
    };
  }
  function parseText(context, mode) {
    const endTokens = mode === 3 ? ["]]>"] : ["<", context.options.delimiters[0]];
    let endIndex = context.source.length;
    for (let i2 = 0; i2 < endTokens.length; i2++) {
      const index = context.source.indexOf(endTokens[i2], 1);
      if (index !== -1 && endIndex > index) {
        endIndex = index;
      }
    }
    const start = getCursor(context);
    const content = parseTextData(context, endIndex, mode);
    return {
      type: 2,
      content,
      loc: getSelection(context, start)
    };
  }
  function parseTextData(context, length, mode) {
    const rawText = context.source.slice(0, length);
    advanceBy(context, length);
    if (mode === 2 || mode === 3 || !rawText.includes("&")) {
      return rawText;
    } else {
      return context.options.decodeEntities(
        rawText,
        mode === 4
        /* TextModes.ATTRIBUTE_VALUE */
      );
    }
  }
  function getCursor(context) {
    const { column, line, offset } = context;
    return { column, line, offset };
  }
  function getSelection(context, start, end) {
    end = end || getCursor(context);
    return {
      start,
      end,
      source: context.originalSource.slice(start.offset, end.offset)
    };
  }
  function last(xs2) {
    return xs2[xs2.length - 1];
  }
  function startsWith(source, searchString) {
    return source.startsWith(searchString);
  }
  function advanceBy(context, numberOfCharacters) {
    const { source } = context;
    advancePositionWithMutation(context, source, numberOfCharacters);
    context.source = source.slice(numberOfCharacters);
  }
  function advanceSpaces(context) {
    const match = /^[\t\r\n\f ]+/.exec(context.source);
    if (match) {
      advanceBy(context, match[0].length);
    }
  }
  function getNewPosition(context, start, numberOfCharacters) {
    return advancePositionWithClone(start, context.originalSource.slice(start.offset, numberOfCharacters), numberOfCharacters);
  }
  function emitError(context, code, offset, loc = getCursor(context)) {
    if (offset) {
      loc.offset += offset;
      loc.column += offset;
    }
    context.options.onError(createCompilerError(code, {
      start: loc,
      end: loc,
      source: ""
    }));
  }
  function isEnd(context, mode, ancestors) {
    const s2 = context.source;
    switch (mode) {
      case 0:
        if (startsWith(s2, "</")) {
          for (let i2 = ancestors.length - 1; i2 >= 0; --i2) {
            if (startsWithEndTagOpen(s2, ancestors[i2].tag)) {
              return true;
            }
          }
        }
        break;
      case 1:
      case 2: {
        const parent = last(ancestors);
        if (parent && startsWithEndTagOpen(s2, parent.tag)) {
          return true;
        }
        break;
      }
      case 3:
        if (startsWith(s2, "]]>")) {
          return true;
        }
        break;
    }
    return !s2;
  }
  function startsWithEndTagOpen(source, tag) {
    return startsWith(source, "</") && source.slice(2, 2 + tag.length).toLowerCase() === tag.toLowerCase() && /[\t\r\n\f />]/.test(source[2 + tag.length] || ">");
  }
  function hoistStatic(root, context) {
    walk(
      root,
      context,
      // Root node is unfortunately non-hoistable due to potential parent
      // fallthrough attributes.
      isSingleElementRoot(root, root.children[0])
    );
  }
  function isSingleElementRoot(root, child) {
    const { children } = root;
    return children.length === 1 && child.type === 1 && !isSlotOutlet(child);
  }
  function walk(node, context, doNotHoistNode = false) {
    const { children } = node;
    const originalCount = children.length;
    let hoistedCount = 0;
    for (let i2 = 0; i2 < children.length; i2++) {
      const child = children[i2];
      if (child.type === 1 && child.tagType === 0) {
        const constantType = doNotHoistNode ? 0 : getConstantType(child, context);
        if (constantType > 0) {
          if (constantType >= 2) {
            child.codegenNode.patchFlag = -1 + ` /* HOISTED */`;
            child.codegenNode = context.hoist(child.codegenNode);
            hoistedCount++;
            continue;
          }
        } else {
          const codegenNode = child.codegenNode;
          if (codegenNode.type === 13) {
            const flag = getPatchFlag(codegenNode);
            if ((!flag || flag === 512 || flag === 1) && getGeneratedPropsConstantType(child, context) >= 2) {
              const props = getNodeProps(child);
              if (props) {
                codegenNode.props = context.hoist(props);
              }
            }
            if (codegenNode.dynamicProps) {
              codegenNode.dynamicProps = context.hoist(codegenNode.dynamicProps);
            }
          }
        }
      }
      if (child.type === 1) {
        const isComponent2 = child.tagType === 1;
        if (isComponent2) {
          context.scopes.vSlot++;
        }
        walk(child, context);
        if (isComponent2) {
          context.scopes.vSlot--;
        }
      } else if (child.type === 11) {
        walk(child, context, child.children.length === 1);
      } else if (child.type === 9) {
        for (let i3 = 0; i3 < child.branches.length; i3++) {
          walk(child.branches[i3], context, child.branches[i3].children.length === 1);
        }
      }
    }
    if (hoistedCount && context.transformHoist) {
      context.transformHoist(children, context, node);
    }
    if (hoistedCount && hoistedCount === originalCount && node.type === 1 && node.tagType === 0 && node.codegenNode && node.codegenNode.type === 13 && isArray(node.codegenNode.children)) {
      node.codegenNode.children = context.hoist(createArrayExpression(node.codegenNode.children));
    }
  }
  function getConstantType(node, context) {
    const { constantCache } = context;
    switch (node.type) {
      case 1:
        if (node.tagType !== 0) {
          return 0;
        }
        const cached = constantCache.get(node);
        if (cached !== void 0) {
          return cached;
        }
        const codegenNode = node.codegenNode;
        if (codegenNode.type !== 13) {
          return 0;
        }
        if (codegenNode.isBlock && node.tag !== "svg" && node.tag !== "foreignObject") {
          return 0;
        }
        const flag = getPatchFlag(codegenNode);
        if (!flag) {
          let returnType2 = 3;
          const generatedPropsType = getGeneratedPropsConstantType(node, context);
          if (generatedPropsType === 0) {
            constantCache.set(
              node,
              0
              /* ConstantTypes.NOT_CONSTANT */
            );
            return 0;
          }
          if (generatedPropsType < returnType2) {
            returnType2 = generatedPropsType;
          }
          for (let i2 = 0; i2 < node.children.length; i2++) {
            const childType = getConstantType(node.children[i2], context);
            if (childType === 0) {
              constantCache.set(
                node,
                0
                /* ConstantTypes.NOT_CONSTANT */
              );
              return 0;
            }
            if (childType < returnType2) {
              returnType2 = childType;
            }
          }
          if (returnType2 > 1) {
            for (let i2 = 0; i2 < node.props.length; i2++) {
              const p3 = node.props[i2];
              if (p3.type === 7 && p3.name === "bind" && p3.exp) {
                const expType = getConstantType(p3.exp, context);
                if (expType === 0) {
                  constantCache.set(
                    node,
                    0
                    /* ConstantTypes.NOT_CONSTANT */
                  );
                  return 0;
                }
                if (expType < returnType2) {
                  returnType2 = expType;
                }
              }
            }
          }
          if (codegenNode.isBlock) {
            for (let i2 = 0; i2 < node.props.length; i2++) {
              const p3 = node.props[i2];
              if (p3.type === 7) {
                constantCache.set(
                  node,
                  0
                  /* ConstantTypes.NOT_CONSTANT */
                );
                return 0;
              }
            }
            context.removeHelper(OPEN_BLOCK);
            context.removeHelper(getVNodeBlockHelper(context.inSSR, codegenNode.isComponent));
            codegenNode.isBlock = false;
            context.helper(getVNodeHelper(context.inSSR, codegenNode.isComponent));
          }
          constantCache.set(node, returnType2);
          return returnType2;
        } else {
          constantCache.set(
            node,
            0
            /* ConstantTypes.NOT_CONSTANT */
          );
          return 0;
        }
      case 2:
      case 3:
        return 3;
      case 9:
      case 11:
      case 10:
        return 0;
      case 5:
      case 12:
        return getConstantType(node.content, context);
      case 4:
        return node.constType;
      case 8:
        let returnType = 3;
        for (let i2 = 0; i2 < node.children.length; i2++) {
          const child = node.children[i2];
          if (isString(child) || isSymbol(child)) {
            continue;
          }
          const childType = getConstantType(child, context);
          if (childType === 0) {
            return 0;
          } else if (childType < returnType) {
            returnType = childType;
          }
        }
        return returnType;
      default:
        return 0;
    }
  }
  function getConstantTypeOfHelperCall(value, context) {
    if (value.type === 14 && !isString(value.callee) && allowHoistedHelperSet.has(value.callee)) {
      const arg = value.arguments[0];
      if (arg.type === 4) {
        return getConstantType(arg, context);
      } else if (arg.type === 14) {
        return getConstantTypeOfHelperCall(arg, context);
      }
    }
    return 0;
  }
  function getGeneratedPropsConstantType(node, context) {
    let returnType = 3;
    const props = getNodeProps(node);
    if (props && props.type === 15) {
      const { properties } = props;
      for (let i2 = 0; i2 < properties.length; i2++) {
        const { key, value } = properties[i2];
        const keyType = getConstantType(key, context);
        if (keyType === 0) {
          return keyType;
        }
        if (keyType < returnType) {
          returnType = keyType;
        }
        let valueType;
        if (value.type === 4) {
          valueType = getConstantType(value, context);
        } else if (value.type === 14) {
          valueType = getConstantTypeOfHelperCall(value, context);
        } else {
          valueType = 0;
        }
        if (valueType === 0) {
          return valueType;
        }
        if (valueType < returnType) {
          returnType = valueType;
        }
      }
    }
    return returnType;
  }
  function getNodeProps(node) {
    const codegenNode = node.codegenNode;
    if (codegenNode.type === 13) {
      return codegenNode.props;
    }
  }
  function getPatchFlag(node) {
    const flag = node.patchFlag;
    return flag ? parseInt(flag, 10) : void 0;
  }
  function createTransformContext(root, { filename = "", prefixIdentifiers = false, hoistStatic: hoistStatic2 = false, cacheHandlers = false, nodeTransforms = [], directiveTransforms = {}, transformHoist = null, isBuiltInComponent = NOOP, isCustomElement = NOOP, expressionPlugins = [], scopeId = null, slotted = true, ssr = false, inSSR = false, ssrCssVars = ``, bindingMetadata = EMPTY_OBJ, inline = false, isTS = false, onError = defaultOnError, onWarn = defaultOnWarn, compatConfig }) {
    const nameMatch = filename.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/);
    const context = {
      // options
      selfName: nameMatch && capitalize(camelize(nameMatch[1])),
      prefixIdentifiers,
      hoistStatic: hoistStatic2,
      cacheHandlers,
      nodeTransforms,
      directiveTransforms,
      transformHoist,
      isBuiltInComponent,
      isCustomElement,
      expressionPlugins,
      scopeId,
      slotted,
      ssr,
      inSSR,
      ssrCssVars,
      bindingMetadata,
      inline,
      isTS,
      onError,
      onWarn,
      compatConfig,
      // state
      root,
      helpers: /* @__PURE__ */ new Map(),
      components: /* @__PURE__ */ new Set(),
      directives: /* @__PURE__ */ new Set(),
      hoists: [],
      imports: [],
      constantCache: /* @__PURE__ */ new Map(),
      temps: 0,
      cached: 0,
      identifiers: /* @__PURE__ */ Object.create(null),
      scopes: {
        vFor: 0,
        vSlot: 0,
        vPre: 0,
        vOnce: 0
      },
      parent: null,
      currentNode: root,
      childIndex: 0,
      inVOnce: false,
      // methods
      helper(name) {
        const count = context.helpers.get(name) || 0;
        context.helpers.set(name, count + 1);
        return name;
      },
      removeHelper(name) {
        const count = context.helpers.get(name);
        if (count) {
          const currentCount = count - 1;
          if (!currentCount) {
            context.helpers.delete(name);
          } else {
            context.helpers.set(name, currentCount);
          }
        }
      },
      helperString(name) {
        return `_${helperNameMap[context.helper(name)]}`;
      },
      replaceNode(node) {
        {
          if (!context.currentNode) {
            throw new Error(`Node being replaced is already removed.`);
          }
          if (!context.parent) {
            throw new Error(`Cannot replace root node.`);
          }
        }
        context.parent.children[context.childIndex] = context.currentNode = node;
      },
      removeNode(node) {
        if (!context.parent) {
          throw new Error(`Cannot remove root node.`);
        }
        const list = context.parent.children;
        const removalIndex = node ? list.indexOf(node) : context.currentNode ? context.childIndex : -1;
        if (removalIndex < 0) {
          throw new Error(`node being removed is not a child of current parent`);
        }
        if (!node || node === context.currentNode) {
          context.currentNode = null;
          context.onNodeRemoved();
        } else {
          if (context.childIndex > removalIndex) {
            context.childIndex--;
            context.onNodeRemoved();
          }
        }
        context.parent.children.splice(removalIndex, 1);
      },
      onNodeRemoved: () => {
      },
      addIdentifiers(exp) {
      },
      removeIdentifiers(exp) {
      },
      hoist(exp) {
        if (isString(exp))
          exp = createSimpleExpression(exp);
        context.hoists.push(exp);
        const identifier = createSimpleExpression(
          `_hoisted_${context.hoists.length}`,
          false,
          exp.loc,
          2
          /* ConstantTypes.CAN_HOIST */
        );
        identifier.hoisted = exp;
        return identifier;
      },
      cache(exp, isVNode2 = false) {
        return createCacheExpression(context.cached++, exp, isVNode2);
      }
    };
    return context;
  }
  function transform(root, options) {
    const context = createTransformContext(root, options);
    traverseNode(root, context);
    if (options.hoistStatic) {
      hoistStatic(root, context);
    }
    if (!options.ssr) {
      createRootCodegen(root, context);
    }
    root.helpers = [...context.helpers.keys()];
    root.components = [...context.components];
    root.directives = [...context.directives];
    root.imports = context.imports;
    root.hoists = context.hoists;
    root.temps = context.temps;
    root.cached = context.cached;
  }
  function createRootCodegen(root, context) {
    const { helper } = context;
    const { children } = root;
    if (children.length === 1) {
      const child = children[0];
      if (isSingleElementRoot(root, child) && child.codegenNode) {
        const codegenNode = child.codegenNode;
        if (codegenNode.type === 13) {
          makeBlock(codegenNode, context);
        }
        root.codegenNode = codegenNode;
      } else {
        root.codegenNode = child;
      }
    } else if (children.length > 1) {
      let patchFlag = 64;
      let patchFlagText = PatchFlagNames[
        64
        /* PatchFlags.STABLE_FRAGMENT */
      ];
      if (children.filter(
        (c2) => c2.type !== 3
        /* NodeTypes.COMMENT */
      ).length === 1) {
        patchFlag |= 2048;
        patchFlagText += `, ${PatchFlagNames[
          2048
          /* PatchFlags.DEV_ROOT_FRAGMENT */
        ]}`;
      }
      root.codegenNode = createVNodeCall(
        context,
        helper(FRAGMENT),
        void 0,
        root.children,
        patchFlag + ` /* ${patchFlagText} */`,
        void 0,
        void 0,
        true,
        void 0,
        false
        /* isComponent */
      );
    } else
      ;
  }
  function traverseChildren(parent, context) {
    let i2 = 0;
    const nodeRemoved = () => {
      i2--;
    };
    for (; i2 < parent.children.length; i2++) {
      const child = parent.children[i2];
      if (isString(child))
        continue;
      context.parent = parent;
      context.childIndex = i2;
      context.onNodeRemoved = nodeRemoved;
      traverseNode(child, context);
    }
  }
  function traverseNode(node, context) {
    context.currentNode = node;
    const { nodeTransforms } = context;
    const exitFns = [];
    for (let i3 = 0; i3 < nodeTransforms.length; i3++) {
      const onExit = nodeTransforms[i3](node, context);
      if (onExit) {
        if (isArray(onExit)) {
          exitFns.push(...onExit);
        } else {
          exitFns.push(onExit);
        }
      }
      if (!context.currentNode) {
        return;
      } else {
        node = context.currentNode;
      }
    }
    switch (node.type) {
      case 3:
        if (!context.ssr) {
          context.helper(CREATE_COMMENT);
        }
        break;
      case 5:
        if (!context.ssr) {
          context.helper(TO_DISPLAY_STRING);
        }
        break;
      case 9:
        for (let i3 = 0; i3 < node.branches.length; i3++) {
          traverseNode(node.branches[i3], context);
        }
        break;
      case 10:
      case 11:
      case 1:
      case 0:
        traverseChildren(node, context);
        break;
    }
    context.currentNode = node;
    let i2 = exitFns.length;
    while (i2--) {
      exitFns[i2]();
    }
  }
  function createStructuralDirectiveTransform(name, fn2) {
    const matches2 = isString(name) ? (n2) => n2 === name : (n2) => name.test(n2);
    return (node, context) => {
      if (node.type === 1) {
        const { props } = node;
        if (node.tagType === 3 && props.some(isVSlot)) {
          return;
        }
        const exitFns = [];
        for (let i2 = 0; i2 < props.length; i2++) {
          const prop = props[i2];
          if (prop.type === 7 && matches2(prop.name)) {
            props.splice(i2, 1);
            i2--;
            const onExit = fn2(node, prop, context);
            if (onExit)
              exitFns.push(onExit);
          }
        }
        return exitFns;
      }
    };
  }
  function createCodegenContext(ast, { mode = "function", prefixIdentifiers = mode === "module", sourceMap = false, filename = `template.vue.html`, scopeId = null, optimizeImports = false, runtimeGlobalName = `Vue`, runtimeModuleName = `vue`, ssrRuntimeModuleName = "vue/server-renderer", ssr = false, isTS = false, inSSR = false }) {
    const context = {
      mode,
      prefixIdentifiers,
      sourceMap,
      filename,
      scopeId,
      optimizeImports,
      runtimeGlobalName,
      runtimeModuleName,
      ssrRuntimeModuleName,
      ssr,
      isTS,
      inSSR,
      source: ast.loc.source,
      code: ``,
      column: 1,
      line: 1,
      offset: 0,
      indentLevel: 0,
      pure: false,
      map: void 0,
      helper(key) {
        return `_${helperNameMap[key]}`;
      },
      push(code, node) {
        context.code += code;
      },
      indent() {
        newline(++context.indentLevel);
      },
      deindent(withoutNewLine = false) {
        if (withoutNewLine) {
          --context.indentLevel;
        } else {
          newline(--context.indentLevel);
        }
      },
      newline() {
        newline(context.indentLevel);
      }
    };
    function newline(n2) {
      context.push("\n" + `  `.repeat(n2));
    }
    return context;
  }
  function generate(ast, options = {}) {
    const context = createCodegenContext(ast, options);
    if (options.onContextCreated)
      options.onContextCreated(context);
    const { mode, push, prefixIdentifiers, indent, deindent, newline, scopeId, ssr } = context;
    const hasHelpers = ast.helpers.length > 0;
    const useWithBlock = !prefixIdentifiers && mode !== "module";
    const preambleContext = context;
    {
      genFunctionPreamble(ast, preambleContext);
    }
    const functionName = ssr ? `ssrRender` : `render`;
    const args = ssr ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"];
    const signature = args.join(", ");
    {
      push(`function ${functionName}(${signature}) {`);
    }
    indent();
    if (useWithBlock) {
      push(`with (_ctx) {`);
      indent();
      if (hasHelpers) {
        push(`const { ${ast.helpers.map(aliasHelper).join(", ")} } = _Vue`);
        push(`
`);
        newline();
      }
    }
    if (ast.components.length) {
      genAssets(ast.components, "component", context);
      if (ast.directives.length || ast.temps > 0) {
        newline();
      }
    }
    if (ast.directives.length) {
      genAssets(ast.directives, "directive", context);
      if (ast.temps > 0) {
        newline();
      }
    }
    if (ast.temps > 0) {
      push(`let `);
      for (let i2 = 0; i2 < ast.temps; i2++) {
        push(`${i2 > 0 ? `, ` : ``}_temp${i2}`);
      }
    }
    if (ast.components.length || ast.directives.length || ast.temps) {
      push(`
`);
      newline();
    }
    if (!ssr) {
      push(`return `);
    }
    if (ast.codegenNode) {
      genNode(ast.codegenNode, context);
    } else {
      push(`null`);
    }
    if (useWithBlock) {
      deindent();
      push(`}`);
    }
    deindent();
    push(`}`);
    return {
      ast,
      code: context.code,
      preamble: ``,
      // SourceMapGenerator does have toJSON() method but it's not in the types
      map: context.map ? context.map.toJSON() : void 0
    };
  }
  function genFunctionPreamble(ast, context) {
    const { ssr, prefixIdentifiers, push, newline, runtimeModuleName, runtimeGlobalName, ssrRuntimeModuleName } = context;
    const VueBinding = runtimeGlobalName;
    if (ast.helpers.length > 0) {
      {
        push(`const _Vue = ${VueBinding}
`);
        if (ast.hoists.length) {
          const staticHelpers = [
            CREATE_VNODE,
            CREATE_ELEMENT_VNODE,
            CREATE_COMMENT,
            CREATE_TEXT,
            CREATE_STATIC
          ].filter((helper) => ast.helpers.includes(helper)).map(aliasHelper).join(", ");
          push(`const { ${staticHelpers} } = _Vue
`);
        }
      }
    }
    genHoists(ast.hoists, context);
    newline();
    push(`return `);
  }
  function genAssets(assets, type, { helper, push, newline, isTS }) {
    const resolver = helper(type === "component" ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE);
    for (let i2 = 0; i2 < assets.length; i2++) {
      let id = assets[i2];
      const maybeSelfReference = id.endsWith("__self");
      if (maybeSelfReference) {
        id = id.slice(0, -6);
      }
      push(`const ${toValidAssetId(id, type)} = ${resolver}(${JSON.stringify(id)}${maybeSelfReference ? `, true` : ``})${isTS ? `!` : ``}`);
      if (i2 < assets.length - 1) {
        newline();
      }
    }
  }
  function genHoists(hoists, context) {
    if (!hoists.length) {
      return;
    }
    context.pure = true;
    const { push, newline, helper, scopeId, mode } = context;
    newline();
    for (let i2 = 0; i2 < hoists.length; i2++) {
      const exp = hoists[i2];
      if (exp) {
        push(`const _hoisted_${i2 + 1} = ${``}`);
        genNode(exp, context);
        newline();
      }
    }
    context.pure = false;
  }
  function isText$1(n2) {
    return isString(n2) || n2.type === 4 || n2.type === 2 || n2.type === 5 || n2.type === 8;
  }
  function genNodeListAsArray(nodes, context) {
    const multilines = nodes.length > 3 || nodes.some((n2) => isArray(n2) || !isText$1(n2));
    context.push(`[`);
    multilines && context.indent();
    genNodeList(nodes, context, multilines);
    multilines && context.deindent();
    context.push(`]`);
  }
  function genNodeList(nodes, context, multilines = false, comma = true) {
    const { push, newline } = context;
    for (let i2 = 0; i2 < nodes.length; i2++) {
      const node = nodes[i2];
      if (isString(node)) {
        push(node);
      } else if (isArray(node)) {
        genNodeListAsArray(node, context);
      } else {
        genNode(node, context);
      }
      if (i2 < nodes.length - 1) {
        if (multilines) {
          comma && push(",");
          newline();
        } else {
          comma && push(", ");
        }
      }
    }
  }
  function genNode(node, context) {
    if (isString(node)) {
      context.push(node);
      return;
    }
    if (isSymbol(node)) {
      context.push(context.helper(node));
      return;
    }
    switch (node.type) {
      case 1:
      case 9:
      case 11:
        assert(node.codegenNode != null, `Codegen node is missing for element/if/for node. Apply appropriate transforms first.`);
        genNode(node.codegenNode, context);
        break;
      case 2:
        genText(node, context);
        break;
      case 4:
        genExpression(node, context);
        break;
      case 5:
        genInterpolation(node, context);
        break;
      case 12:
        genNode(node.codegenNode, context);
        break;
      case 8:
        genCompoundExpression(node, context);
        break;
      case 3:
        genComment(node, context);
        break;
      case 13:
        genVNodeCall(node, context);
        break;
      case 14:
        genCallExpression(node, context);
        break;
      case 15:
        genObjectExpression(node, context);
        break;
      case 17:
        genArrayExpression(node, context);
        break;
      case 18:
        genFunctionExpression(node, context);
        break;
      case 19:
        genConditionalExpression(node, context);
        break;
      case 20:
        genCacheExpression(node, context);
        break;
      case 21:
        genNodeList(node.body, context, true, false);
        break;
      case 22:
        break;
      case 23:
        break;
      case 24:
        break;
      case 25:
        break;
      case 26:
        break;
      case 10:
        break;
      default: {
        assert(false, `unhandled codegen node type: ${node.type}`);
        const exhaustiveCheck = node;
        return exhaustiveCheck;
      }
    }
  }
  function genText(node, context) {
    context.push(JSON.stringify(node.content), node);
  }
  function genExpression(node, context) {
    const { content, isStatic } = node;
    context.push(isStatic ? JSON.stringify(content) : content, node);
  }
  function genInterpolation(node, context) {
    const { push, helper, pure } = context;
    if (pure)
      push(PURE_ANNOTATION);
    push(`${helper(TO_DISPLAY_STRING)}(`);
    genNode(node.content, context);
    push(`)`);
  }
  function genCompoundExpression(node, context) {
    for (let i2 = 0; i2 < node.children.length; i2++) {
      const child = node.children[i2];
      if (isString(child)) {
        context.push(child);
      } else {
        genNode(child, context);
      }
    }
  }
  function genExpressionAsPropertyKey(node, context) {
    const { push } = context;
    if (node.type === 8) {
      push(`[`);
      genCompoundExpression(node, context);
      push(`]`);
    } else if (node.isStatic) {
      const text = isSimpleIdentifier(node.content) ? node.content : JSON.stringify(node.content);
      push(text, node);
    } else {
      push(`[${node.content}]`, node);
    }
  }
  function genComment(node, context) {
    const { push, helper, pure } = context;
    if (pure) {
      push(PURE_ANNOTATION);
    }
    push(`${helper(CREATE_COMMENT)}(${JSON.stringify(node.content)})`, node);
  }
  function genVNodeCall(node, context) {
    const { push, helper, pure } = context;
    const { tag, props, children, patchFlag, dynamicProps, directives, isBlock, disableTracking, isComponent: isComponent2 } = node;
    if (directives) {
      push(helper(WITH_DIRECTIVES) + `(`);
    }
    if (isBlock) {
      push(`(${helper(OPEN_BLOCK)}(${disableTracking ? `true` : ``}), `);
    }
    if (pure) {
      push(PURE_ANNOTATION);
    }
    const callHelper = isBlock ? getVNodeBlockHelper(context.inSSR, isComponent2) : getVNodeHelper(context.inSSR, isComponent2);
    push(helper(callHelper) + `(`, node);
    genNodeList(genNullableArgs([tag, props, children, patchFlag, dynamicProps]), context);
    push(`)`);
    if (isBlock) {
      push(`)`);
    }
    if (directives) {
      push(`, `);
      genNode(directives, context);
      push(`)`);
    }
  }
  function genNullableArgs(args) {
    let i2 = args.length;
    while (i2--) {
      if (args[i2] != null)
        break;
    }
    return args.slice(0, i2 + 1).map((arg) => arg || `null`);
  }
  function genCallExpression(node, context) {
    const { push, helper, pure } = context;
    const callee = isString(node.callee) ? node.callee : helper(node.callee);
    if (pure) {
      push(PURE_ANNOTATION);
    }
    push(callee + `(`, node);
    genNodeList(node.arguments, context);
    push(`)`);
  }
  function genObjectExpression(node, context) {
    const { push, indent, deindent, newline } = context;
    const { properties } = node;
    if (!properties.length) {
      push(`{}`, node);
      return;
    }
    const multilines = properties.length > 1 || properties.some(
      (p3) => p3.value.type !== 4
      /* NodeTypes.SIMPLE_EXPRESSION */
    );
    push(multilines ? `{` : `{ `);
    multilines && indent();
    for (let i2 = 0; i2 < properties.length; i2++) {
      const { key, value } = properties[i2];
      genExpressionAsPropertyKey(key, context);
      push(`: `);
      genNode(value, context);
      if (i2 < properties.length - 1) {
        push(`,`);
        newline();
      }
    }
    multilines && deindent();
    push(multilines ? `}` : ` }`);
  }
  function genArrayExpression(node, context) {
    genNodeListAsArray(node.elements, context);
  }
  function genFunctionExpression(node, context) {
    const { push, indent, deindent } = context;
    const { params, returns, body, newline, isSlot } = node;
    if (isSlot) {
      push(`_${helperNameMap[WITH_CTX]}(`);
    }
    push(`(`, node);
    if (isArray(params)) {
      genNodeList(params, context);
    } else if (params) {
      genNode(params, context);
    }
    push(`) => `);
    if (newline || body) {
      push(`{`);
      indent();
    }
    if (returns) {
      if (newline) {
        push(`return `);
      }
      if (isArray(returns)) {
        genNodeListAsArray(returns, context);
      } else {
        genNode(returns, context);
      }
    } else if (body) {
      genNode(body, context);
    }
    if (newline || body) {
      deindent();
      push(`}`);
    }
    if (isSlot) {
      push(`)`);
    }
  }
  function genConditionalExpression(node, context) {
    const { test, consequent, alternate, newline: needNewline } = node;
    const { push, indent, deindent, newline } = context;
    if (test.type === 4) {
      const needsParens = !isSimpleIdentifier(test.content);
      needsParens && push(`(`);
      genExpression(test, context);
      needsParens && push(`)`);
    } else {
      push(`(`);
      genNode(test, context);
      push(`)`);
    }
    needNewline && indent();
    context.indentLevel++;
    needNewline || push(` `);
    push(`? `);
    genNode(consequent, context);
    context.indentLevel--;
    needNewline && newline();
    needNewline || push(` `);
    push(`: `);
    const isNested = alternate.type === 19;
    if (!isNested) {
      context.indentLevel++;
    }
    genNode(alternate, context);
    if (!isNested) {
      context.indentLevel--;
    }
    needNewline && deindent(
      true
      /* without newline */
    );
  }
  function genCacheExpression(node, context) {
    const { push, helper, indent, deindent, newline } = context;
    push(`_cache[${node.index}] || (`);
    if (node.isVNode) {
      indent();
      push(`${helper(SET_BLOCK_TRACKING)}(-1),`);
      newline();
    }
    push(`_cache[${node.index}] = `);
    genNode(node.value, context);
    if (node.isVNode) {
      push(`,`);
      newline();
      push(`${helper(SET_BLOCK_TRACKING)}(1),`);
      newline();
      push(`_cache[${node.index}]`);
      deindent();
    }
    push(`)`);
  }
  function validateBrowserExpression(node, context, asParams = false, asRawStatements = false) {
    const exp = node.content;
    if (!exp.trim()) {
      return;
    }
    try {
      new Function(asRawStatements ? ` ${exp} ` : `return ${asParams ? `(${exp}) => {}` : `(${exp})`}`);
    } catch (e2) {
      let message = e2.message;
      const keywordMatch = exp.replace(stripStringRE, "").match(prohibitedKeywordRE);
      if (keywordMatch) {
        message = `avoid using JavaScript keyword as property name: "${keywordMatch[0]}"`;
      }
      context.onError(createCompilerError(44, node.loc, void 0, message));
    }
  }
  function processExpression(node, context, asParams = false, asRawStatements = false, localVars = Object.create(context.identifiers)) {
    {
      {
        validateBrowserExpression(node, context, asParams, asRawStatements);
      }
      return node;
    }
  }
  function processIf(node, dir, context, processCodegen) {
    if (dir.name !== "else" && (!dir.exp || !dir.exp.content.trim())) {
      const loc = dir.exp ? dir.exp.loc : node.loc;
      context.onError(createCompilerError(28, dir.loc));
      dir.exp = createSimpleExpression(`true`, false, loc);
    }
    if (dir.exp) {
      validateBrowserExpression(dir.exp, context);
    }
    if (dir.name === "if") {
      const branch = createIfBranch(node, dir);
      const ifNode = {
        type: 9,
        loc: node.loc,
        branches: [branch]
      };
      context.replaceNode(ifNode);
      if (processCodegen) {
        return processCodegen(ifNode, branch, true);
      }
    } else {
      const siblings = context.parent.children;
      const comments = [];
      let i2 = siblings.indexOf(node);
      while (i2-- >= -1) {
        const sibling = siblings[i2];
        if (sibling && sibling.type === 3) {
          context.removeNode(sibling);
          comments.unshift(sibling);
          continue;
        }
        if (sibling && sibling.type === 2 && !sibling.content.trim().length) {
          context.removeNode(sibling);
          continue;
        }
        if (sibling && sibling.type === 9) {
          if (dir.name === "else-if" && sibling.branches[sibling.branches.length - 1].condition === void 0) {
            context.onError(createCompilerError(30, node.loc));
          }
          context.removeNode();
          const branch = createIfBranch(node, dir);
          if (comments.length && // #3619 ignore comments if the v-if is direct child of <transition>
          !(context.parent && context.parent.type === 1 && isBuiltInType(context.parent.tag, "transition"))) {
            branch.children = [...comments, ...branch.children];
          }
          {
            const key = branch.userKey;
            if (key) {
              sibling.branches.forEach(({ userKey }) => {
                if (isSameKey(userKey, key)) {
                  context.onError(createCompilerError(29, branch.userKey.loc));
                }
              });
            }
          }
          sibling.branches.push(branch);
          const onExit = processCodegen && processCodegen(sibling, branch, false);
          traverseNode(branch, context);
          if (onExit)
            onExit();
          context.currentNode = null;
        } else {
          context.onError(createCompilerError(30, node.loc));
        }
        break;
      }
    }
  }
  function createIfBranch(node, dir) {
    const isTemplateIf = node.tagType === 3;
    return {
      type: 10,
      loc: node.loc,
      condition: dir.name === "else" ? void 0 : dir.exp,
      children: isTemplateIf && !findDir(node, "for") ? node.children : [node],
      userKey: findProp(node, `key`),
      isTemplateIf
    };
  }
  function createCodegenNodeForBranch(branch, keyIndex, context) {
    if (branch.condition) {
      return createConditionalExpression(
        branch.condition,
        createChildrenCodegenNode(branch, keyIndex, context),
        // make sure to pass in asBlock: true so that the comment node call
        // closes the current block.
        createCallExpression(context.helper(CREATE_COMMENT), [
          '"v-if"',
          "true"
        ])
      );
    } else {
      return createChildrenCodegenNode(branch, keyIndex, context);
    }
  }
  function createChildrenCodegenNode(branch, keyIndex, context) {
    const { helper } = context;
    const keyProperty = createObjectProperty(`key`, createSimpleExpression(
      `${keyIndex}`,
      false,
      locStub,
      2
      /* ConstantTypes.CAN_HOIST */
    ));
    const { children } = branch;
    const firstChild = children[0];
    const needFragmentWrapper = children.length !== 1 || firstChild.type !== 1;
    if (needFragmentWrapper) {
      if (children.length === 1 && firstChild.type === 11) {
        const vnodeCall = firstChild.codegenNode;
        injectProp(vnodeCall, keyProperty, context);
        return vnodeCall;
      } else {
        let patchFlag = 64;
        let patchFlagText = PatchFlagNames[
          64
          /* PatchFlags.STABLE_FRAGMENT */
        ];
        if (!branch.isTemplateIf && children.filter(
          (c2) => c2.type !== 3
          /* NodeTypes.COMMENT */
        ).length === 1) {
          patchFlag |= 2048;
          patchFlagText += `, ${PatchFlagNames[
            2048
            /* PatchFlags.DEV_ROOT_FRAGMENT */
          ]}`;
        }
        return createVNodeCall(context, helper(FRAGMENT), createObjectExpression([keyProperty]), children, patchFlag + ` /* ${patchFlagText} */`, void 0, void 0, true, false, false, branch.loc);
      }
    } else {
      const ret = firstChild.codegenNode;
      const vnodeCall = getMemoedVNodeCall(ret);
      if (vnodeCall.type === 13) {
        makeBlock(vnodeCall, context);
      }
      injectProp(vnodeCall, keyProperty, context);
      return ret;
    }
  }
  function isSameKey(a2, b2) {
    if (!a2 || a2.type !== b2.type) {
      return false;
    }
    if (a2.type === 6) {
      if (a2.value.content !== b2.value.content) {
        return false;
      }
    } else {
      const exp = a2.exp;
      const branchExp = b2.exp;
      if (exp.type !== branchExp.type) {
        return false;
      }
      if (exp.type !== 4 || exp.isStatic !== branchExp.isStatic || exp.content !== branchExp.content) {
        return false;
      }
    }
    return true;
  }
  function getParentCondition(node) {
    while (true) {
      if (node.type === 19) {
        if (node.alternate.type === 19) {
          node = node.alternate;
        } else {
          return node;
        }
      } else if (node.type === 20) {
        node = node.value;
      }
    }
  }
  function processFor(node, dir, context, processCodegen) {
    if (!dir.exp) {
      context.onError(createCompilerError(31, dir.loc));
      return;
    }
    const parseResult = parseForExpression(
      // can only be simple expression because vFor transform is applied
      // before expression transform.
      dir.exp,
      context
    );
    if (!parseResult) {
      context.onError(createCompilerError(32, dir.loc));
      return;
    }
    const { addIdentifiers, removeIdentifiers, scopes } = context;
    const { source, value, key, index } = parseResult;
    const forNode = {
      type: 11,
      loc: dir.loc,
      source,
      valueAlias: value,
      keyAlias: key,
      objectIndexAlias: index,
      parseResult,
      children: isTemplateNode(node) ? node.children : [node]
    };
    context.replaceNode(forNode);
    scopes.vFor++;
    const onExit = processCodegen && processCodegen(forNode);
    return () => {
      scopes.vFor--;
      if (onExit)
        onExit();
    };
  }
  function parseForExpression(input, context) {
    const loc = input.loc;
    const exp = input.content;
    const inMatch = exp.match(forAliasRE);
    if (!inMatch)
      return;
    const [, LHS, RHS] = inMatch;
    const result = {
      source: createAliasExpression(loc, RHS.trim(), exp.indexOf(RHS, LHS.length)),
      value: void 0,
      key: void 0,
      index: void 0
    };
    {
      validateBrowserExpression(result.source, context);
    }
    let valueContent = LHS.trim().replace(stripParensRE, "").trim();
    const trimmedOffset = LHS.indexOf(valueContent);
    const iteratorMatch = valueContent.match(forIteratorRE);
    if (iteratorMatch) {
      valueContent = valueContent.replace(forIteratorRE, "").trim();
      const keyContent = iteratorMatch[1].trim();
      let keyOffset;
      if (keyContent) {
        keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
        result.key = createAliasExpression(loc, keyContent, keyOffset);
        {
          validateBrowserExpression(result.key, context, true);
        }
      }
      if (iteratorMatch[2]) {
        const indexContent = iteratorMatch[2].trim();
        if (indexContent) {
          result.index = createAliasExpression(loc, indexContent, exp.indexOf(indexContent, result.key ? keyOffset + keyContent.length : trimmedOffset + valueContent.length));
          {
            validateBrowserExpression(result.index, context, true);
          }
        }
      }
    }
    if (valueContent) {
      result.value = createAliasExpression(loc, valueContent, trimmedOffset);
      {
        validateBrowserExpression(result.value, context, true);
      }
    }
    return result;
  }
  function createAliasExpression(range2, content, offset) {
    return createSimpleExpression(content, false, getInnerRange(range2, offset, content.length));
  }
  function createForLoopParams({ value, key, index }, memoArgs = []) {
    return createParamsList([value, key, index, ...memoArgs]);
  }
  function createParamsList(args) {
    let i2 = args.length;
    while (i2--) {
      if (args[i2])
        break;
    }
    return args.slice(0, i2 + 1).map((arg, i3) => arg || createSimpleExpression(`_`.repeat(i3 + 1), false));
  }
  function buildSlots(node, context, buildSlotFn = buildClientSlotFn) {
    context.helper(WITH_CTX);
    const { children, loc } = node;
    const slotsProperties = [];
    const dynamicSlots = [];
    let hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0;
    const onComponentSlot = findDir(node, "slot", true);
    if (onComponentSlot) {
      const { arg, exp } = onComponentSlot;
      if (arg && !isStaticExp(arg)) {
        hasDynamicSlots = true;
      }
      slotsProperties.push(createObjectProperty(arg || createSimpleExpression("default", true), buildSlotFn(exp, children, loc)));
    }
    let hasTemplateSlots = false;
    let hasNamedDefaultSlot = false;
    const implicitDefaultChildren = [];
    const seenSlotNames = /* @__PURE__ */ new Set();
    let conditionalBranchIndex = 0;
    for (let i2 = 0; i2 < children.length; i2++) {
      const slotElement = children[i2];
      let slotDir;
      if (!isTemplateNode(slotElement) || !(slotDir = findDir(slotElement, "slot", true))) {
        if (slotElement.type !== 3) {
          implicitDefaultChildren.push(slotElement);
        }
        continue;
      }
      if (onComponentSlot) {
        context.onError(createCompilerError(37, slotDir.loc));
        break;
      }
      hasTemplateSlots = true;
      const { children: slotChildren, loc: slotLoc } = slotElement;
      const { arg: slotName = createSimpleExpression(`default`, true), exp: slotProps, loc: dirLoc } = slotDir;
      let staticSlotName;
      if (isStaticExp(slotName)) {
        staticSlotName = slotName ? slotName.content : `default`;
      } else {
        hasDynamicSlots = true;
      }
      const slotFunction = buildSlotFn(slotProps, slotChildren, slotLoc);
      let vIf;
      let vElse;
      let vFor;
      if (vIf = findDir(slotElement, "if")) {
        hasDynamicSlots = true;
        dynamicSlots.push(createConditionalExpression(vIf.exp, buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++), defaultFallback));
      } else if (vElse = findDir(
        slotElement,
        /^else(-if)?$/,
        true
        /* allowEmpty */
      )) {
        let j2 = i2;
        let prev;
        while (j2--) {
          prev = children[j2];
          if (prev.type !== 3) {
            break;
          }
        }
        if (prev && isTemplateNode(prev) && findDir(prev, "if")) {
          children.splice(i2, 1);
          i2--;
          let conditional = dynamicSlots[dynamicSlots.length - 1];
          while (conditional.alternate.type === 19) {
            conditional = conditional.alternate;
          }
          conditional.alternate = vElse.exp ? createConditionalExpression(vElse.exp, buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++), defaultFallback) : buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++);
        } else {
          context.onError(createCompilerError(30, vElse.loc));
        }
      } else if (vFor = findDir(slotElement, "for")) {
        hasDynamicSlots = true;
        const parseResult = vFor.parseResult || parseForExpression(vFor.exp, context);
        if (parseResult) {
          dynamicSlots.push(createCallExpression(context.helper(RENDER_LIST), [
            parseResult.source,
            createFunctionExpression(
              createForLoopParams(parseResult),
              buildDynamicSlot(slotName, slotFunction),
              true
              /* force newline */
            )
          ]));
        } else {
          context.onError(createCompilerError(32, vFor.loc));
        }
      } else {
        if (staticSlotName) {
          if (seenSlotNames.has(staticSlotName)) {
            context.onError(createCompilerError(38, dirLoc));
            continue;
          }
          seenSlotNames.add(staticSlotName);
          if (staticSlotName === "default") {
            hasNamedDefaultSlot = true;
          }
        }
        slotsProperties.push(createObjectProperty(slotName, slotFunction));
      }
    }
    if (!onComponentSlot) {
      const buildDefaultSlotProperty = (props, children2) => {
        const fn2 = buildSlotFn(props, children2, loc);
        return createObjectProperty(`default`, fn2);
      };
      if (!hasTemplateSlots) {
        slotsProperties.push(buildDefaultSlotProperty(void 0, children));
      } else if (implicitDefaultChildren.length && // #3766
      // with whitespace: 'preserve', whitespaces between slots will end up in
      // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
      implicitDefaultChildren.some((node2) => isNonWhitespaceContent(node2))) {
        if (hasNamedDefaultSlot) {
          context.onError(createCompilerError(39, implicitDefaultChildren[0].loc));
        } else {
          slotsProperties.push(buildDefaultSlotProperty(void 0, implicitDefaultChildren));
        }
      }
    }
    const slotFlag = hasDynamicSlots ? 2 : hasForwardedSlots(node.children) ? 3 : 1;
    let slots = createObjectExpression(slotsProperties.concat(createObjectProperty(
      `_`,
      // 2 = compiled but dynamic = can skip normalization, but must run diff
      // 1 = compiled and static = can skip normalization AND diff as optimized
      createSimpleExpression(slotFlag + ` /* ${slotFlagsText[slotFlag]} */`, false)
    )), loc);
    if (dynamicSlots.length) {
      slots = createCallExpression(context.helper(CREATE_SLOTS), [
        slots,
        createArrayExpression(dynamicSlots)
      ]);
    }
    return {
      slots,
      hasDynamicSlots
    };
  }
  function buildDynamicSlot(name, fn2, index) {
    const props = [
      createObjectProperty(`name`, name),
      createObjectProperty(`fn`, fn2)
    ];
    if (index != null) {
      props.push(createObjectProperty(`key`, createSimpleExpression(String(index), true)));
    }
    return createObjectExpression(props);
  }
  function hasForwardedSlots(children) {
    for (let i2 = 0; i2 < children.length; i2++) {
      const child = children[i2];
      switch (child.type) {
        case 1:
          if (child.tagType === 2 || hasForwardedSlots(child.children)) {
            return true;
          }
          break;
        case 9:
          if (hasForwardedSlots(child.branches))
            return true;
          break;
        case 10:
        case 11:
          if (hasForwardedSlots(child.children))
            return true;
          break;
      }
    }
    return false;
  }
  function isNonWhitespaceContent(node) {
    if (node.type !== 2 && node.type !== 12)
      return true;
    return node.type === 2 ? !!node.content.trim() : isNonWhitespaceContent(node.content);
  }
  function resolveComponentType(node, context, ssr = false) {
    let { tag } = node;
    const isExplicitDynamic = isComponentTag(tag);
    const isProp = findProp(node, "is");
    if (isProp) {
      if (isExplicitDynamic || false) {
        const exp = isProp.type === 6 ? isProp.value && createSimpleExpression(isProp.value.content, true) : isProp.exp;
        if (exp) {
          return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [
            exp
          ]);
        }
      } else if (isProp.type === 6 && isProp.value.content.startsWith("vue:")) {
        tag = isProp.value.content.slice(4);
      }
    }
    const isDir = !isExplicitDynamic && findDir(node, "is");
    if (isDir && isDir.exp) {
      return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [
        isDir.exp
      ]);
    }
    const builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);
    if (builtIn) {
      if (!ssr)
        context.helper(builtIn);
      return builtIn;
    }
    context.helper(RESOLVE_COMPONENT);
    context.components.add(tag);
    return toValidAssetId(tag, `component`);
  }
  function buildProps(node, context, props = node.props, isComponent2, isDynamicComponent, ssr = false) {
    const { tag, loc: elementLoc, children } = node;
    let properties = [];
    const mergeArgs = [];
    const runtimeDirectives = [];
    const hasChildren = children.length > 0;
    let shouldUseBlock = false;
    let patchFlag = 0;
    let hasRef = false;
    let hasClassBinding = false;
    let hasStyleBinding = false;
    let hasHydrationEventBinding = false;
    let hasDynamicKeys = false;
    let hasVnodeHook = false;
    const dynamicPropNames = [];
    const pushMergeArg = (arg) => {
      if (properties.length) {
        mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
        properties = [];
      }
      if (arg)
        mergeArgs.push(arg);
    };
    const analyzePatchFlag = ({ key, value }) => {
      if (isStaticExp(key)) {
        const name = key.content;
        const isEventHandler = isOn(name);
        if (isEventHandler && (!isComponent2 || isDynamicComponent) && // omit the flag for click handlers because hydration gives click
        // dedicated fast path.
        name.toLowerCase() !== "onclick" && // omit v-model handlers
        name !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
        !isReservedProp(name)) {
          hasHydrationEventBinding = true;
        }
        if (isEventHandler && isReservedProp(name)) {
          hasVnodeHook = true;
        }
        if (value.type === 20 || (value.type === 4 || value.type === 8) && getConstantType(value, context) > 0) {
          return;
        }
        if (name === "ref") {
          hasRef = true;
        } else if (name === "class") {
          hasClassBinding = true;
        } else if (name === "style") {
          hasStyleBinding = true;
        } else if (name !== "key" && !dynamicPropNames.includes(name)) {
          dynamicPropNames.push(name);
        }
        if (isComponent2 && (name === "class" || name === "style") && !dynamicPropNames.includes(name)) {
          dynamicPropNames.push(name);
        }
      } else {
        hasDynamicKeys = true;
      }
    };
    for (let i2 = 0; i2 < props.length; i2++) {
      const prop = props[i2];
      if (prop.type === 6) {
        const { loc, name, value } = prop;
        let isStatic = true;
        if (name === "ref") {
          hasRef = true;
          if (context.scopes.vFor > 0) {
            properties.push(createObjectProperty(createSimpleExpression("ref_for", true), createSimpleExpression("true")));
          }
        }
        if (name === "is" && (isComponentTag(tag) || value && value.content.startsWith("vue:") || false)) {
          continue;
        }
        properties.push(createObjectProperty(createSimpleExpression(name, true, getInnerRange(loc, 0, name.length)), createSimpleExpression(value ? value.content : "", isStatic, value ? value.loc : loc)));
      } else {
        const { name, arg, exp, loc } = prop;
        const isVBind = name === "bind";
        const isVOn = name === "on";
        if (name === "slot") {
          if (!isComponent2) {
            context.onError(createCompilerError(40, loc));
          }
          continue;
        }
        if (name === "once" || name === "memo") {
          continue;
        }
        if (name === "is" || isVBind && isStaticArgOf(arg, "is") && (isComponentTag(tag) || false)) {
          continue;
        }
        if (isVOn && ssr) {
          continue;
        }
        if (
          // #938: elements with dynamic keys should be forced into blocks
          isVBind && isStaticArgOf(arg, "key") || // inline before-update hooks need to force block so that it is invoked
          // before children
          isVOn && hasChildren && isStaticArgOf(arg, "vue:before-update")
        ) {
          shouldUseBlock = true;
        }
        if (isVBind && isStaticArgOf(arg, "ref") && context.scopes.vFor > 0) {
          properties.push(createObjectProperty(createSimpleExpression("ref_for", true), createSimpleExpression("true")));
        }
        if (!arg && (isVBind || isVOn)) {
          hasDynamicKeys = true;
          if (exp) {
            if (isVBind) {
              pushMergeArg();
              mergeArgs.push(exp);
            } else {
              pushMergeArg({
                type: 14,
                loc,
                callee: context.helper(TO_HANDLERS),
                arguments: isComponent2 ? [exp] : [exp, `true`]
              });
            }
          } else {
            context.onError(createCompilerError(isVBind ? 34 : 35, loc));
          }
          continue;
        }
        const directiveTransform = context.directiveTransforms[name];
        if (directiveTransform) {
          const { props: props2, needRuntime } = directiveTransform(prop, node, context);
          !ssr && props2.forEach(analyzePatchFlag);
          if (isVOn && arg && !isStaticExp(arg)) {
            pushMergeArg(createObjectExpression(props2, elementLoc));
          } else {
            properties.push(...props2);
          }
          if (needRuntime) {
            runtimeDirectives.push(prop);
            if (isSymbol(needRuntime)) {
              directiveImportMap.set(prop, needRuntime);
            }
          }
        } else if (!isBuiltInDirective(name)) {
          runtimeDirectives.push(prop);
          if (hasChildren) {
            shouldUseBlock = true;
          }
        }
      }
    }
    let propsExpression = void 0;
    if (mergeArgs.length) {
      pushMergeArg();
      if (mergeArgs.length > 1) {
        propsExpression = createCallExpression(context.helper(MERGE_PROPS), mergeArgs, elementLoc);
      } else {
        propsExpression = mergeArgs[0];
      }
    } else if (properties.length) {
      propsExpression = createObjectExpression(dedupeProperties(properties), elementLoc);
    }
    if (hasDynamicKeys) {
      patchFlag |= 16;
    } else {
      if (hasClassBinding && !isComponent2) {
        patchFlag |= 2;
      }
      if (hasStyleBinding && !isComponent2) {
        patchFlag |= 4;
      }
      if (dynamicPropNames.length) {
        patchFlag |= 8;
      }
      if (hasHydrationEventBinding) {
        patchFlag |= 32;
      }
    }
    if (!shouldUseBlock && (patchFlag === 0 || patchFlag === 32) && (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) {
      patchFlag |= 512;
    }
    if (!context.inSSR && propsExpression) {
      switch (propsExpression.type) {
        case 15:
          let classKeyIndex = -1;
          let styleKeyIndex = -1;
          let hasDynamicKey = false;
          for (let i2 = 0; i2 < propsExpression.properties.length; i2++) {
            const key = propsExpression.properties[i2].key;
            if (isStaticExp(key)) {
              if (key.content === "class") {
                classKeyIndex = i2;
              } else if (key.content === "style") {
                styleKeyIndex = i2;
              }
            } else if (!key.isHandlerKey) {
              hasDynamicKey = true;
            }
          }
          const classProp = propsExpression.properties[classKeyIndex];
          const styleProp = propsExpression.properties[styleKeyIndex];
          if (!hasDynamicKey) {
            if (classProp && !isStaticExp(classProp.value)) {
              classProp.value = createCallExpression(context.helper(NORMALIZE_CLASS), [classProp.value]);
            }
            if (styleProp && // the static style is compiled into an object,
            // so use `hasStyleBinding` to ensure that it is a dynamic style binding
            (hasStyleBinding || styleProp.value.type === 4 && styleProp.value.content.trim()[0] === `[` || // v-bind:style and style both exist,
            // v-bind:style with static literal object
            styleProp.value.type === 17)) {
              styleProp.value = createCallExpression(context.helper(NORMALIZE_STYLE), [styleProp.value]);
            }
          } else {
            propsExpression = createCallExpression(context.helper(NORMALIZE_PROPS), [propsExpression]);
          }
          break;
        case 14:
          break;
        default:
          propsExpression = createCallExpression(context.helper(NORMALIZE_PROPS), [
            createCallExpression(context.helper(GUARD_REACTIVE_PROPS), [
              propsExpression
            ])
          ]);
          break;
      }
    }
    return {
      props: propsExpression,
      directives: runtimeDirectives,
      patchFlag,
      dynamicPropNames,
      shouldUseBlock
    };
  }
  function dedupeProperties(properties) {
    const knownProps = /* @__PURE__ */ new Map();
    const deduped = [];
    for (let i2 = 0; i2 < properties.length; i2++) {
      const prop = properties[i2];
      if (prop.key.type === 8 || !prop.key.isStatic) {
        deduped.push(prop);
        continue;
      }
      const name = prop.key.content;
      const existing = knownProps.get(name);
      if (existing) {
        if (name === "style" || name === "class" || isOn(name)) {
          mergeAsArray$1(existing, prop);
        }
      } else {
        knownProps.set(name, prop);
        deduped.push(prop);
      }
    }
    return deduped;
  }
  function mergeAsArray$1(existing, incoming) {
    if (existing.value.type === 17) {
      existing.value.elements.push(incoming.value);
    } else {
      existing.value = createArrayExpression([existing.value, incoming.value], existing.loc);
    }
  }
  function buildDirectiveArgs(dir, context) {
    const dirArgs = [];
    const runtime = directiveImportMap.get(dir);
    if (runtime) {
      dirArgs.push(context.helperString(runtime));
    } else {
      {
        context.helper(RESOLVE_DIRECTIVE);
        context.directives.add(dir.name);
        dirArgs.push(toValidAssetId(dir.name, `directive`));
      }
    }
    const { loc } = dir;
    if (dir.exp)
      dirArgs.push(dir.exp);
    if (dir.arg) {
      if (!dir.exp) {
        dirArgs.push(`void 0`);
      }
      dirArgs.push(dir.arg);
    }
    if (Object.keys(dir.modifiers).length) {
      if (!dir.arg) {
        if (!dir.exp) {
          dirArgs.push(`void 0`);
        }
        dirArgs.push(`void 0`);
      }
      const trueExpression = createSimpleExpression(`true`, false, loc);
      dirArgs.push(createObjectExpression(dir.modifiers.map((modifier) => createObjectProperty(modifier, trueExpression)), loc));
    }
    return createArrayExpression(dirArgs, dir.loc);
  }
  function stringifyDynamicPropNames(props) {
    let propsNamesString = `[`;
    for (let i2 = 0, l2 = props.length; i2 < l2; i2++) {
      propsNamesString += JSON.stringify(props[i2]);
      if (i2 < l2 - 1)
        propsNamesString += ", ";
    }
    return propsNamesString + `]`;
  }
  function isComponentTag(tag) {
    return tag === "component" || tag === "Component";
  }
  function processSlotOutlet(node, context) {
    let slotName = `"default"`;
    let slotProps = void 0;
    const nonNameProps = [];
    for (let i2 = 0; i2 < node.props.length; i2++) {
      const p3 = node.props[i2];
      if (p3.type === 6) {
        if (p3.value) {
          if (p3.name === "name") {
            slotName = JSON.stringify(p3.value.content);
          } else {
            p3.name = camelize(p3.name);
            nonNameProps.push(p3);
          }
        }
      } else {
        if (p3.name === "bind" && isStaticArgOf(p3.arg, "name")) {
          if (p3.exp)
            slotName = p3.exp;
        } else {
          if (p3.name === "bind" && p3.arg && isStaticExp(p3.arg)) {
            p3.arg.content = camelize(p3.arg.content);
          }
          nonNameProps.push(p3);
        }
      }
    }
    if (nonNameProps.length > 0) {
      const { props, directives } = buildProps(node, context, nonNameProps, false, false);
      slotProps = props;
      if (directives.length) {
        context.onError(createCompilerError(36, directives[0].loc));
      }
    }
    return {
      slotName,
      slotProps
    };
  }
  function createTransformProps(props = []) {
    return { props };
  }
  function getBaseTransformPreset(prefixIdentifiers) {
    return [
      [
        transformOnce,
        transformIf,
        transformMemo,
        transformFor,
        ...[],
        ...[transformExpression],
        transformSlotOutlet,
        transformElement,
        trackSlotScopes,
        transformText
      ],
      {
        on: transformOn,
        bind: transformBind,
        model: transformModel
      }
    ];
  }
  function baseCompile(template, options = {}) {
    const onError = options.onError || defaultOnError;
    const isModuleMode = options.mode === "module";
    {
      if (options.prefixIdentifiers === true) {
        onError(createCompilerError(
          46
          /* ErrorCodes.X_PREFIX_ID_NOT_SUPPORTED */
        ));
      } else if (isModuleMode) {
        onError(createCompilerError(
          47
          /* ErrorCodes.X_MODULE_MODE_NOT_SUPPORTED */
        ));
      }
    }
    const prefixIdentifiers = false;
    if (options.cacheHandlers) {
      onError(createCompilerError(
        48
        /* ErrorCodes.X_CACHE_HANDLER_NOT_SUPPORTED */
      ));
    }
    if (options.scopeId && !isModuleMode) {
      onError(createCompilerError(
        49
        /* ErrorCodes.X_SCOPE_ID_NOT_SUPPORTED */
      ));
    }
    const ast = isString(template) ? baseParse(template, options) : template;
    const [nodeTransforms, directiveTransforms] = getBaseTransformPreset();
    transform(ast, extend({}, options, {
      prefixIdentifiers,
      nodeTransforms: [
        ...nodeTransforms,
        ...options.nodeTransforms || []
        // user transforms
      ],
      directiveTransforms: extend(
        {},
        directiveTransforms,
        options.directiveTransforms || {}
        // user transforms
      )
    }));
    return generate(ast, extend({}, options, {
      prefixIdentifiers
    }));
  }
  function decodeHtmlBrowser(raw, asAttr = false) {
    if (!decoder) {
      decoder = document.createElement("div");
    }
    if (asAttr) {
      decoder.innerHTML = `<div foo="${raw.replace(/"/g, "&quot;")}">`;
      return decoder.children[0].getAttribute("foo");
    } else {
      decoder.innerHTML = raw;
      return decoder.textContent;
    }
  }
  function createDOMCompilerError(code, loc) {
    return createCompilerError(code, loc, DOMErrorMessages);
  }
  function hasMultipleChildren(node) {
    const children = node.children = node.children.filter((c2) => c2.type !== 3 && !(c2.type === 2 && !c2.content.trim()));
    const child = children[0];
    return children.length !== 1 || child.type === 11 || child.type === 9 && child.branches.some(hasMultipleChildren);
  }
  function compile$1(template, options = {}) {
    return baseCompile(template, extend({}, parserOptions, options, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        ignoreSideEffectTags,
        ...DOMNodeTransforms,
        ...options.nodeTransforms || []
      ],
      directiveTransforms: extend({}, DOMDirectiveTransforms, options.directiveTransforms || {}),
      transformHoist: null
    }));
  }
  function compileToFunction(template, options) {
    if (!isString(template)) {
      if (template.nodeType) {
        template = template.innerHTML;
      } else {
        warn$1(`invalid template option: `, template);
        return NOOP;
      }
    }
    const key = template;
    const cached = compileCache[key];
    if (cached) {
      return cached;
    }
    if (template[0] === "#") {
      const el2 = document.querySelector(template);
      if (!el2) {
        warn$1(`Template element not found or is empty: ${template}`);
      }
      template = el2 ? el2.innerHTML : ``;
    }
    const opts = extend({
      hoistStatic: true,
      onError,
      onWarn: (e2) => onError(e2, true)
    }, options);
    if (!opts.isCustomElement && typeof customElements !== "undefined") {
      opts.isCustomElement = (tag) => !!customElements.get(tag);
    }
    const { code } = compile$1(template, opts);
    function onError(err, asWarning = false) {
      const message = asWarning ? err.message : `Template compilation error: ${err.message}`;
      const codeFrame = err.loc && generateCodeFrame(template, err.loc.start.offset, err.loc.end.offset);
      warn$1(codeFrame ? `${message}
${codeFrame}` : message);
    }
    const render2 = new Function("Vue", code)(runtimeDom);
    render2._rc = true;
    return compileCache[key] = render2;
  }
  var PatchFlagNames, slotFlagsText, GLOBALS_WHITE_LISTED, isGloballyWhitelisted, range, specialBooleanAttrs, isSpecialBooleanAttr, listDelimiterRE, propertyDelimiterRE, HTML_TAGS, SVG_TAGS, VOID_TAGS, isHTMLTag, isSVGTag, isVoidTag, toDisplayString, replacer, EMPTY_OBJ, EMPTY_ARR, NOOP, NO, onRE, isOn, isModelListener, extend, remove, hasOwnProperty, hasOwn, isArray, isMap, isSet, isDate, isFunction, isString, isSymbol, isObject, isPromise, objectToString, toTypeString, toRawType, isPlainObject, isIntegerKey, isReservedProp, isBuiltInDirective, cacheStringFunction, camelizeRE, camelize, hyphenateRE, hyphenate, capitalize, toHandlerKey, hasChanged, invokeArrayFns, def, toNumber, _globalThis, getGlobalThis, activeEffectScope, EffectScope, createDep, wasTracked, newTracked, initDepMarkers, finalizeDepMarkers, targetMap, effectTrackDepth, trackOpBit, maxMarkerBits, activeEffect, ITERATE_KEY, MAP_KEY_ITERATE_KEY, ReactiveEffect, shouldTrack, trackStack, isNonTrackableKeys, builtInSymbols, get, shallowGet, readonlyGet, shallowReadonlyGet, arrayInstrumentations, set, shallowSet, mutableHandlers, readonlyHandlers, shallowReactiveHandlers, shallowReadonlyHandlers, toShallow, getProto, mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations, mutableCollectionHandlers, shallowCollectionHandlers, readonlyCollectionHandlers, shallowReadonlyCollectionHandlers, reactiveMap, shallowReactiveMap, readonlyMap, shallowReadonlyMap, toReactive, toReadonly, RefImpl, shallowUnwrapHandlers, CustomRefImpl, ObjectRefImpl, _a2, ComputedRefImpl, stack, ErrorTypeStrings, isFlushing, isFlushPending, queue, flushIndex, pendingPostFlushCbs, activePostFlushCbs, postFlushIndex, resolvedPromise, currentFlushPromise, RECURSION_LIMIT, getId, comparator, isHmrUpdating, hmrDirtyComponents, map, devtools, buffer, devtoolsNotInstalled, devtoolsComponentAdded, devtoolsComponentUpdated, _devtoolsComponentRemoved, devtoolsComponentRemoved, devtoolsPerfStart, devtoolsPerfEnd, currentRenderingInstance, currentScopeId, withScopeId, accessedAttrs, getChildRoot, getFunctionalFallthrough, filterModelListeners, isElementRoot, isSuspense, SuspenseImpl, Suspense, hasWarned, INITIAL_WATCHER_VALUE, TransitionHookValidator, BaseTransitionImpl, BaseTransition, isAsyncWrapper, isKeepAlive, KeepAliveImpl, KeepAlive, createHook, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onServerPrefetch, onRenderTriggered, onRenderTracked, COMPONENTS, DIRECTIVES, NULL_DYNAMIC_COMPONENT, getPublicInstance, publicPropertiesMap, isReservedPrefix, PublicInstanceProxyHandlers, RuntimeCompiledPublicInstanceProxyHandlers, shouldCacheAccess, internalOptionMergeStrats, isSimpleType, isInternalKey, normalizeSlotValue, normalizeSlot, normalizeObjectSlots, normalizeVNodeSlots, initSlots, updateSlots, uid, hasMismatch, isSVGContainer, isComment, supported, perf, queuePostRenderEffect, isTeleport, isTeleportDisabled, isTargetSVG, resolveTarget, TeleportImpl, Teleport, Fragment, Text, Comment, Static, blockStack, currentBlock, isBlockTreeEnabled, vnodeArgsTransformer, createVNodeWithArgsTransform, InternalObjectKey, normalizeKey, normalizeRef, createVNode, emptyAppContext, uid$1, currentInstance, getCurrentInstance, setCurrentInstance, unsetCurrentInstance, isBuiltInTag, isInSSRComponentSetup, compile, installWithProxy, isRuntimeOnly, classifyRE, classify, computed$1, warnRuntimeUsage, ssrContextKey, useSSRContext, version, ssrUtils, resolveFilter, compatUtils, svgNS, doc, templateContainer, nodeOps, importantRE, prefixes, prefixCache, xlinkNS, optionsModifierRE, cachedNow, p2, getNow, nativeOnRE, patchProp, defineSSRCustomElement, BaseClass, VueElement, TRANSITION, ANIMATION, Transition, DOMTransitionPropsValidators, TransitionPropsValidators, callHook$1, hasExplicitCallback, endId, positionMap, newPositionMap, TransitionGroupImpl, TransitionGroup, getModelAssigner, vModelText, vModelCheckbox, vModelRadio, vModelSelect, vModelDynamic, systemModifiers, modifierGuards, withModifiers, keyNames, withKeys, vShow, rendererOptions, renderer, enabledHydration, render, hydrate, createApp, createSSRApp, initDirectivesForSSR, runtimeDom, errorMessages, FRAGMENT, TELEPORT, SUSPENSE, KEEP_ALIVE, BASE_TRANSITION, OPEN_BLOCK, CREATE_BLOCK, CREATE_ELEMENT_BLOCK, CREATE_VNODE, CREATE_ELEMENT_VNODE, CREATE_COMMENT, CREATE_TEXT, CREATE_STATIC, RESOLVE_COMPONENT, RESOLVE_DYNAMIC_COMPONENT, RESOLVE_DIRECTIVE, RESOLVE_FILTER, WITH_DIRECTIVES, RENDER_LIST, RENDER_SLOT, CREATE_SLOTS, TO_DISPLAY_STRING, MERGE_PROPS, NORMALIZE_CLASS, NORMALIZE_STYLE, NORMALIZE_PROPS, GUARD_REACTIVE_PROPS, TO_HANDLERS, CAMELIZE, CAPITALIZE, TO_HANDLER_KEY, SET_BLOCK_TRACKING, PUSH_SCOPE_ID, POP_SCOPE_ID, WITH_CTX, UNREF, IS_REF, WITH_MEMO, IS_MEMO_SAME, helperNameMap, locStub, isStaticExp, isBuiltInType, nonIdentifierRE, isSimpleIdentifier, validFirstIdentCharRE, validIdentCharRE, whitespaceRE, isMemberExpressionBrowser, isMemberExpression, propsHelperSet, decodeRE, decodeMap, defaultParserOptions, isSpecialTemplateDirective, allowHoistedHelperSet, PURE_ANNOTATION, aliasHelper, prohibitedKeywordRE, stripStringRE, transformExpression, transformIf, transformFor, forAliasRE, forIteratorRE, stripParensRE, defaultFallback, trackSlotScopes, buildClientSlotFn, directiveImportMap, transformElement, transformSlotOutlet, fnExpRE, transformOn, transformBind, injectPrefix, transformText, seen, transformOnce, transformModel, seen$1, transformMemo, noopDirectiveTransform, V_MODEL_RADIO, V_MODEL_CHECKBOX, V_MODEL_TEXT, V_MODEL_SELECT, V_MODEL_DYNAMIC, V_ON_WITH_MODIFIERS, V_ON_WITH_KEYS, V_SHOW, TRANSITION$1, TRANSITION_GROUP, decoder, isRawTextContainer, parserOptions, transformStyle, parseInlineCSS, DOMErrorMessages, transformVHtml, transformVText, transformModel$1, isEventOptionModifier, isNonKeyModifier, maybeKeyModifier, isKeyboardEvent, resolveModifiers, transformClick, transformOn$1, transformShow, transformTransition, ignoreSideEffectTags, DOMNodeTransforms, DOMDirectiveTransforms, compileCache;
  var init_vue_esm_browser = __esm({
    "ns-hugo:/src/assets/scripts/vue.esm-browser.js"() {
      PatchFlagNames = {
        [
          1
          /* PatchFlags.TEXT */
        ]: `TEXT`,
        [
          2
          /* PatchFlags.CLASS */
        ]: `CLASS`,
        [
          4
          /* PatchFlags.STYLE */
        ]: `STYLE`,
        [
          8
          /* PatchFlags.PROPS */
        ]: `PROPS`,
        [
          16
          /* PatchFlags.FULL_PROPS */
        ]: `FULL_PROPS`,
        [
          32
          /* PatchFlags.HYDRATE_EVENTS */
        ]: `HYDRATE_EVENTS`,
        [
          64
          /* PatchFlags.STABLE_FRAGMENT */
        ]: `STABLE_FRAGMENT`,
        [
          128
          /* PatchFlags.KEYED_FRAGMENT */
        ]: `KEYED_FRAGMENT`,
        [
          256
          /* PatchFlags.UNKEYED_FRAGMENT */
        ]: `UNKEYED_FRAGMENT`,
        [
          512
          /* PatchFlags.NEED_PATCH */
        ]: `NEED_PATCH`,
        [
          1024
          /* PatchFlags.DYNAMIC_SLOTS */
        ]: `DYNAMIC_SLOTS`,
        [
          2048
          /* PatchFlags.DEV_ROOT_FRAGMENT */
        ]: `DEV_ROOT_FRAGMENT`,
        [
          -1
          /* PatchFlags.HOISTED */
        ]: `HOISTED`,
        [
          -2
          /* PatchFlags.BAIL */
        ]: `BAIL`
      };
      slotFlagsText = {
        [
          1
          /* SlotFlags.STABLE */
        ]: "STABLE",
        [
          2
          /* SlotFlags.DYNAMIC */
        ]: "DYNAMIC",
        [
          3
          /* SlotFlags.FORWARDED */
        ]: "FORWARDED"
      };
      GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
      isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
      range = 2;
      specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
      isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
      listDelimiterRE = /;(?![^(]*\))/g;
      propertyDelimiterRE = /:(.+)/;
      HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
      SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
      VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
      isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
      isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
      isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
      toDisplayString = (val) => {
        return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
      };
      replacer = (_key, val) => {
        if (val && val.__v_isRef) {
          return replacer(_key, val.value);
        } else if (isMap(val)) {
          return {
            [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
              entries[`${key} =>`] = val2;
              return entries;
            }, {})
          };
        } else if (isSet(val)) {
          return {
            [`Set(${val.size})`]: [...val.values()]
          };
        } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
          return String(val);
        }
        return val;
      };
      EMPTY_OBJ = Object.freeze({});
      EMPTY_ARR = Object.freeze([]);
      NOOP = () => {
      };
      NO = () => false;
      onRE = /^on[^a-z]/;
      isOn = (key) => onRE.test(key);
      isModelListener = (key) => key.startsWith("onUpdate:");
      extend = Object.assign;
      remove = (arr, el2) => {
        const i2 = arr.indexOf(el2);
        if (i2 > -1) {
          arr.splice(i2, 1);
        }
      };
      hasOwnProperty = Object.prototype.hasOwnProperty;
      hasOwn = (val, key) => hasOwnProperty.call(val, key);
      isArray = Array.isArray;
      isMap = (val) => toTypeString(val) === "[object Map]";
      isSet = (val) => toTypeString(val) === "[object Set]";
      isDate = (val) => toTypeString(val) === "[object Date]";
      isFunction = (val) => typeof val === "function";
      isString = (val) => typeof val === "string";
      isSymbol = (val) => typeof val === "symbol";
      isObject = (val) => val !== null && typeof val === "object";
      isPromise = (val) => {
        return isObject(val) && isFunction(val.then) && isFunction(val.catch);
      };
      objectToString = Object.prototype.toString;
      toTypeString = (value) => objectToString.call(value);
      toRawType = (value) => {
        return toTypeString(value).slice(8, -1);
      };
      isPlainObject = (val) => toTypeString(val) === "[object Object]";
      isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
      isReservedProp = /* @__PURE__ */ makeMap(
        // the leading comma is intentional so empty string "" is also included
        ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
      );
      isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
      cacheStringFunction = (fn2) => {
        const cache = /* @__PURE__ */ Object.create(null);
        return (str) => {
          const hit = cache[str];
          return hit || (cache[str] = fn2(str));
        };
      };
      camelizeRE = /-(\w)/g;
      camelize = cacheStringFunction((str) => {
        return str.replace(camelizeRE, (_2, c2) => c2 ? c2.toUpperCase() : "");
      });
      hyphenateRE = /\B([A-Z])/g;
      hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
      capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
      toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
      hasChanged = (value, oldValue) => !Object.is(value, oldValue);
      invokeArrayFns = (fns, arg) => {
        for (let i2 = 0; i2 < fns.length; i2++) {
          fns[i2](arg);
        }
      };
      def = (obj, key, value) => {
        Object.defineProperty(obj, key, {
          configurable: true,
          enumerable: false,
          value
        });
      };
      toNumber = (val) => {
        const n2 = parseFloat(val);
        return isNaN(n2) ? val : n2;
      };
      getGlobalThis = () => {
        return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
      };
      EffectScope = class {
        constructor(detached = false) {
          this.detached = detached;
          this.active = true;
          this.effects = [];
          this.cleanups = [];
          this.parent = activeEffectScope;
          if (!detached && activeEffectScope) {
            this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
          }
        }
        run(fn2) {
          if (this.active) {
            const currentEffectScope = activeEffectScope;
            try {
              activeEffectScope = this;
              return fn2();
            } finally {
              activeEffectScope = currentEffectScope;
            }
          } else {
            warn(`cannot run an inactive effect scope.`);
          }
        }
        /**
         * This should only be called on non-detached scopes
         * @internal
         */
        on() {
          activeEffectScope = this;
        }
        /**
         * This should only be called on non-detached scopes
         * @internal
         */
        off() {
          activeEffectScope = this.parent;
        }
        stop(fromParent) {
          if (this.active) {
            let i2, l2;
            for (i2 = 0, l2 = this.effects.length; i2 < l2; i2++) {
              this.effects[i2].stop();
            }
            for (i2 = 0, l2 = this.cleanups.length; i2 < l2; i2++) {
              this.cleanups[i2]();
            }
            if (this.scopes) {
              for (i2 = 0, l2 = this.scopes.length; i2 < l2; i2++) {
                this.scopes[i2].stop(true);
              }
            }
            if (!this.detached && this.parent && !fromParent) {
              const last2 = this.parent.scopes.pop();
              if (last2 && last2 !== this) {
                this.parent.scopes[this.index] = last2;
                last2.index = this.index;
              }
            }
            this.parent = void 0;
            this.active = false;
          }
        }
      };
      createDep = (effects) => {
        const dep = new Set(effects);
        dep.w = 0;
        dep.n = 0;
        return dep;
      };
      wasTracked = (dep) => (dep.w & trackOpBit) > 0;
      newTracked = (dep) => (dep.n & trackOpBit) > 0;
      initDepMarkers = ({ deps }) => {
        if (deps.length) {
          for (let i2 = 0; i2 < deps.length; i2++) {
            deps[i2].w |= trackOpBit;
          }
        }
      };
      finalizeDepMarkers = (effect2) => {
        const { deps } = effect2;
        if (deps.length) {
          let ptr = 0;
          for (let i2 = 0; i2 < deps.length; i2++) {
            const dep = deps[i2];
            if (wasTracked(dep) && !newTracked(dep)) {
              dep.delete(effect2);
            } else {
              deps[ptr++] = dep;
            }
            dep.w &= ~trackOpBit;
            dep.n &= ~trackOpBit;
          }
          deps.length = ptr;
        }
      };
      targetMap = /* @__PURE__ */ new WeakMap();
      effectTrackDepth = 0;
      trackOpBit = 1;
      maxMarkerBits = 30;
      ITERATE_KEY = Symbol("iterate");
      MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
      ReactiveEffect = class {
        constructor(fn2, scheduler = null, scope) {
          this.fn = fn2;
          this.scheduler = scheduler;
          this.active = true;
          this.deps = [];
          this.parent = void 0;
          recordEffectScope(this, scope);
        }
        run() {
          if (!this.active) {
            return this.fn();
          }
          let parent = activeEffect;
          let lastShouldTrack = shouldTrack;
          while (parent) {
            if (parent === this) {
              return;
            }
            parent = parent.parent;
          }
          try {
            this.parent = activeEffect;
            activeEffect = this;
            shouldTrack = true;
            trackOpBit = 1 << ++effectTrackDepth;
            if (effectTrackDepth <= maxMarkerBits) {
              initDepMarkers(this);
            } else {
              cleanupEffect(this);
            }
            return this.fn();
          } finally {
            if (effectTrackDepth <= maxMarkerBits) {
              finalizeDepMarkers(this);
            }
            trackOpBit = 1 << --effectTrackDepth;
            activeEffect = this.parent;
            shouldTrack = lastShouldTrack;
            this.parent = void 0;
            if (this.deferStop) {
              this.stop();
            }
          }
        }
        stop() {
          if (activeEffect === this) {
            this.deferStop = true;
          } else if (this.active) {
            cleanupEffect(this);
            if (this.onStop) {
              this.onStop();
            }
            this.active = false;
          }
        }
      };
      shouldTrack = true;
      trackStack = [];
      isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
      builtInSymbols = new Set(
        /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
      );
      get = /* @__PURE__ */ createGetter();
      shallowGet = /* @__PURE__ */ createGetter(false, true);
      readonlyGet = /* @__PURE__ */ createGetter(true);
      shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
      arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
      set = /* @__PURE__ */ createSetter();
      shallowSet = /* @__PURE__ */ createSetter(true);
      mutableHandlers = {
        get,
        set,
        deleteProperty,
        has,
        ownKeys
      };
      readonlyHandlers = {
        get: readonlyGet,
        set(target, key) {
          {
            warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
          }
          return true;
        },
        deleteProperty(target, key) {
          {
            warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
          }
          return true;
        }
      };
      shallowReactiveHandlers = /* @__PURE__ */ extend({}, mutableHandlers, {
        get: shallowGet,
        set: shallowSet
      });
      shallowReadonlyHandlers = /* @__PURE__ */ extend({}, readonlyHandlers, {
        get: shallowReadonlyGet
      });
      toShallow = (value) => value;
      getProto = (v2) => Reflect.getPrototypeOf(v2);
      [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
      mutableCollectionHandlers = {
        get: /* @__PURE__ */ createInstrumentationGetter(false, false)
      };
      shallowCollectionHandlers = {
        get: /* @__PURE__ */ createInstrumentationGetter(false, true)
      };
      readonlyCollectionHandlers = {
        get: /* @__PURE__ */ createInstrumentationGetter(true, false)
      };
      shallowReadonlyCollectionHandlers = {
        get: /* @__PURE__ */ createInstrumentationGetter(true, true)
      };
      reactiveMap = /* @__PURE__ */ new WeakMap();
      shallowReactiveMap = /* @__PURE__ */ new WeakMap();
      readonlyMap = /* @__PURE__ */ new WeakMap();
      shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
      toReactive = (value) => isObject(value) ? reactive(value) : value;
      toReadonly = (value) => isObject(value) ? readonly(value) : value;
      RefImpl = class {
        constructor(value, __v_isShallow) {
          this.__v_isShallow = __v_isShallow;
          this.dep = void 0;
          this.__v_isRef = true;
          this._rawValue = __v_isShallow ? value : toRaw(value);
          this._value = __v_isShallow ? value : toReactive(value);
        }
        get value() {
          trackRefValue(this);
          return this._value;
        }
        set value(newVal) {
          const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
          newVal = useDirectValue ? newVal : toRaw(newVal);
          if (hasChanged(newVal, this._rawValue)) {
            this._rawValue = newVal;
            this._value = useDirectValue ? newVal : toReactive(newVal);
            triggerRefValue(this, newVal);
          }
        }
      };
      shallowUnwrapHandlers = {
        get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
        set: (target, key, value, receiver) => {
          const oldValue = target[key];
          if (isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
          } else {
            return Reflect.set(target, key, value, receiver);
          }
        }
      };
      CustomRefImpl = class {
        constructor(factory) {
          this.dep = void 0;
          this.__v_isRef = true;
          const { get: get2, set: set2 } = factory(() => trackRefValue(this), () => triggerRefValue(this));
          this._get = get2;
          this._set = set2;
        }
        get value() {
          return this._get();
        }
        set value(newVal) {
          this._set(newVal);
        }
      };
      ObjectRefImpl = class {
        constructor(_object, _key, _defaultValue) {
          this._object = _object;
          this._key = _key;
          this._defaultValue = _defaultValue;
          this.__v_isRef = true;
        }
        get value() {
          const val = this._object[this._key];
          return val === void 0 ? this._defaultValue : val;
        }
        set value(newVal) {
          this._object[this._key] = newVal;
        }
      };
      ComputedRefImpl = class {
        constructor(getter, _setter, isReadonly2, isSSR) {
          this._setter = _setter;
          this.dep = void 0;
          this.__v_isRef = true;
          this[_a2] = false;
          this._dirty = true;
          this.effect = new ReactiveEffect(getter, () => {
            if (!this._dirty) {
              this._dirty = true;
              triggerRefValue(this);
            }
          });
          this.effect.computed = this;
          this.effect.active = this._cacheable = !isSSR;
          this[
            "__v_isReadonly"
            /* ReactiveFlags.IS_READONLY */
          ] = isReadonly2;
        }
        get value() {
          const self2 = toRaw(this);
          trackRefValue(self2);
          if (self2._dirty || !self2._cacheable) {
            self2._dirty = false;
            self2._value = self2.effect.run();
          }
          return self2._value;
        }
        set value(newValue) {
          this._setter(newValue);
        }
      };
      _a2 = "__v_isReadonly";
      stack = [];
      ErrorTypeStrings = {
        [
          "sp"
          /* LifecycleHooks.SERVER_PREFETCH */
        ]: "serverPrefetch hook",
        [
          "bc"
          /* LifecycleHooks.BEFORE_CREATE */
        ]: "beforeCreate hook",
        [
          "c"
          /* LifecycleHooks.CREATED */
        ]: "created hook",
        [
          "bm"
          /* LifecycleHooks.BEFORE_MOUNT */
        ]: "beforeMount hook",
        [
          "m"
          /* LifecycleHooks.MOUNTED */
        ]: "mounted hook",
        [
          "bu"
          /* LifecycleHooks.BEFORE_UPDATE */
        ]: "beforeUpdate hook",
        [
          "u"
          /* LifecycleHooks.UPDATED */
        ]: "updated",
        [
          "bum"
          /* LifecycleHooks.BEFORE_UNMOUNT */
        ]: "beforeUnmount hook",
        [
          "um"
          /* LifecycleHooks.UNMOUNTED */
        ]: "unmounted hook",
        [
          "a"
          /* LifecycleHooks.ACTIVATED */
        ]: "activated hook",
        [
          "da"
          /* LifecycleHooks.DEACTIVATED */
        ]: "deactivated hook",
        [
          "ec"
          /* LifecycleHooks.ERROR_CAPTURED */
        ]: "errorCaptured hook",
        [
          "rtc"
          /* LifecycleHooks.RENDER_TRACKED */
        ]: "renderTracked hook",
        [
          "rtg"
          /* LifecycleHooks.RENDER_TRIGGERED */
        ]: "renderTriggered hook",
        [
          0
          /* ErrorCodes.SETUP_FUNCTION */
        ]: "setup function",
        [
          1
          /* ErrorCodes.RENDER_FUNCTION */
        ]: "render function",
        [
          2
          /* ErrorCodes.WATCH_GETTER */
        ]: "watcher getter",
        [
          3
          /* ErrorCodes.WATCH_CALLBACK */
        ]: "watcher callback",
        [
          4
          /* ErrorCodes.WATCH_CLEANUP */
        ]: "watcher cleanup function",
        [
          5
          /* ErrorCodes.NATIVE_EVENT_HANDLER */
        ]: "native event handler",
        [
          6
          /* ErrorCodes.COMPONENT_EVENT_HANDLER */
        ]: "component event handler",
        [
          7
          /* ErrorCodes.VNODE_HOOK */
        ]: "vnode hook",
        [
          8
          /* ErrorCodes.DIRECTIVE_HOOK */
        ]: "directive hook",
        [
          9
          /* ErrorCodes.TRANSITION_HOOK */
        ]: "transition hook",
        [
          10
          /* ErrorCodes.APP_ERROR_HANDLER */
        ]: "app errorHandler",
        [
          11
          /* ErrorCodes.APP_WARN_HANDLER */
        ]: "app warnHandler",
        [
          12
          /* ErrorCodes.FUNCTION_REF */
        ]: "ref function",
        [
          13
          /* ErrorCodes.ASYNC_COMPONENT_LOADER */
        ]: "async component loader",
        [
          14
          /* ErrorCodes.SCHEDULER */
        ]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
      };
      isFlushing = false;
      isFlushPending = false;
      queue = [];
      flushIndex = 0;
      pendingPostFlushCbs = [];
      activePostFlushCbs = null;
      postFlushIndex = 0;
      resolvedPromise = /* @__PURE__ */ Promise.resolve();
      currentFlushPromise = null;
      RECURSION_LIMIT = 100;
      getId = (job) => job.id == null ? Infinity : job.id;
      comparator = (a2, b2) => {
        const diff = getId(a2) - getId(b2);
        if (diff === 0) {
          if (a2.pre && !b2.pre)
            return -1;
          if (b2.pre && !a2.pre)
            return 1;
        }
        return diff;
      };
      isHmrUpdating = false;
      hmrDirtyComponents = /* @__PURE__ */ new Set();
      {
        getGlobalThis().__VUE_HMR_RUNTIME__ = {
          createRecord: tryWrap(createRecord),
          rerender: tryWrap(rerender),
          reload: tryWrap(reload)
        };
      }
      map = /* @__PURE__ */ new Map();
      buffer = [];
      devtoolsNotInstalled = false;
      devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook(
        "component:added"
        /* DevtoolsHooks.COMPONENT_ADDED */
      );
      devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook(
        "component:updated"
        /* DevtoolsHooks.COMPONENT_UPDATED */
      );
      _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook(
        "component:removed"
        /* DevtoolsHooks.COMPONENT_REMOVED */
      );
      devtoolsComponentRemoved = (component) => {
        if (devtools && typeof devtools.cleanupBuffer === "function" && // remove the component if it wasn't buffered
        !devtools.cleanupBuffer(component)) {
          _devtoolsComponentRemoved(component);
        }
      };
      devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook(
        "perf:start"
        /* DevtoolsHooks.PERFORMANCE_START */
      );
      devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook(
        "perf:end"
        /* DevtoolsHooks.PERFORMANCE_END */
      );
      currentRenderingInstance = null;
      currentScopeId = null;
      withScopeId = (_id) => withCtx;
      accessedAttrs = false;
      getChildRoot = (vnode) => {
        const rawChildren = vnode.children;
        const dynamicChildren = vnode.dynamicChildren;
        const childRoot = filterSingleRoot(rawChildren);
        if (!childRoot) {
          return [vnode, void 0];
        }
        const index = rawChildren.indexOf(childRoot);
        const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
        const setRoot = (updatedRoot) => {
          rawChildren[index] = updatedRoot;
          if (dynamicChildren) {
            if (dynamicIndex > -1) {
              dynamicChildren[dynamicIndex] = updatedRoot;
            } else if (updatedRoot.patchFlag > 0) {
              vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
            }
          }
        };
        return [normalizeVNode(childRoot), setRoot];
      };
      getFunctionalFallthrough = (attrs) => {
        let res;
        for (const key in attrs) {
          if (key === "class" || key === "style" || isOn(key)) {
            (res || (res = {}))[key] = attrs[key];
          }
        }
        return res;
      };
      filterModelListeners = (attrs, props) => {
        const res = {};
        for (const key in attrs) {
          if (!isModelListener(key) || !(key.slice(9) in props)) {
            res[key] = attrs[key];
          }
        }
        return res;
      };
      isElementRoot = (vnode) => {
        return vnode.shapeFlag & (6 | 1) || vnode.type === Comment;
      };
      isSuspense = (type) => type.__isSuspense;
      SuspenseImpl = {
        name: "Suspense",
        // In order to make Suspense tree-shakable, we need to avoid importing it
        // directly in the renderer. The renderer checks for the __isSuspense flag
        // on a vnode's type and calls the `process` method, passing in renderer
        // internals.
        __isSuspense: true,
        process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
          if (n1 == null) {
            mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals);
          } else {
            patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, rendererInternals);
          }
        },
        hydrate: hydrateSuspense,
        create: createSuspenseBoundary,
        normalize: normalizeSuspenseChildren
      };
      Suspense = SuspenseImpl;
      hasWarned = false;
      INITIAL_WATCHER_VALUE = {};
      TransitionHookValidator = [Function, Array];
      BaseTransitionImpl = {
        name: `BaseTransition`,
        props: {
          mode: String,
          appear: Boolean,
          persisted: Boolean,
          // enter
          onBeforeEnter: TransitionHookValidator,
          onEnter: TransitionHookValidator,
          onAfterEnter: TransitionHookValidator,
          onEnterCancelled: TransitionHookValidator,
          // leave
          onBeforeLeave: TransitionHookValidator,
          onLeave: TransitionHookValidator,
          onAfterLeave: TransitionHookValidator,
          onLeaveCancelled: TransitionHookValidator,
          // appear
          onBeforeAppear: TransitionHookValidator,
          onAppear: TransitionHookValidator,
          onAfterAppear: TransitionHookValidator,
          onAppearCancelled: TransitionHookValidator
        },
        setup(props, { slots }) {
          const instance = getCurrentInstance();
          const state = useTransitionState();
          let prevTransitionKey;
          return () => {
            const children = slots.default && getTransitionRawChildren(slots.default(), true);
            if (!children || !children.length) {
              return;
            }
            let child = children[0];
            if (children.length > 1) {
              let hasFound = false;
              for (const c2 of children) {
                if (c2.type !== Comment) {
                  if (hasFound) {
                    warn$1("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
                    break;
                  }
                  child = c2;
                  hasFound = true;
                }
              }
            }
            const rawProps = toRaw(props);
            const { mode } = rawProps;
            if (mode && mode !== "in-out" && mode !== "out-in" && mode !== "default") {
              warn$1(`invalid <transition> mode: ${mode}`);
            }
            if (state.isLeaving) {
              return emptyPlaceholder(child);
            }
            const innerChild = getKeepAliveChild(child);
            if (!innerChild) {
              return emptyPlaceholder(child);
            }
            const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
            setTransitionHooks(innerChild, enterHooks);
            const oldChild = instance.subTree;
            const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
            let transitionKeyChanged = false;
            const { getTransitionKey } = innerChild.type;
            if (getTransitionKey) {
              const key = getTransitionKey();
              if (prevTransitionKey === void 0) {
                prevTransitionKey = key;
              } else if (key !== prevTransitionKey) {
                prevTransitionKey = key;
                transitionKeyChanged = true;
              }
            }
            if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
              const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
              setTransitionHooks(oldInnerChild, leavingHooks);
              if (mode === "out-in") {
                state.isLeaving = true;
                leavingHooks.afterLeave = () => {
                  state.isLeaving = false;
                  instance.update();
                };
                return emptyPlaceholder(child);
              } else if (mode === "in-out" && innerChild.type !== Comment) {
                leavingHooks.delayLeave = (el2, earlyRemove, delayedLeave) => {
                  const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
                  leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                  el2._leaveCb = () => {
                    earlyRemove();
                    el2._leaveCb = void 0;
                    delete enterHooks.delayedLeave;
                  };
                  enterHooks.delayedLeave = delayedLeave;
                };
              }
            }
            return child;
          };
        }
      };
      BaseTransition = BaseTransitionImpl;
      isAsyncWrapper = (i2) => !!i2.type.__asyncLoader;
      isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
      KeepAliveImpl = {
        name: `KeepAlive`,
        // Marker for special handling inside the renderer. We are not using a ===
        // check directly on KeepAlive in the renderer, because importing it directly
        // would prevent it from being tree-shaken.
        __isKeepAlive: true,
        props: {
          include: [String, RegExp, Array],
          exclude: [String, RegExp, Array],
          max: [String, Number]
        },
        setup(props, { slots }) {
          const instance = getCurrentInstance();
          const sharedContext = instance.ctx;
          const cache = /* @__PURE__ */ new Map();
          const keys = /* @__PURE__ */ new Set();
          let current = null;
          {
            instance.__v_cache = cache;
          }
          const parentSuspense = instance.suspense;
          const { renderer: { p: patch, m: move, um: _unmount, o: { createElement } } } = sharedContext;
          const storageContainer = createElement("div");
          sharedContext.activate = (vnode, container, anchor, isSVG, optimized) => {
            const instance2 = vnode.component;
            move(vnode, container, anchor, 0, parentSuspense);
            patch(instance2.vnode, vnode, container, anchor, instance2, parentSuspense, isSVG, vnode.slotScopeIds, optimized);
            queuePostRenderEffect(() => {
              instance2.isDeactivated = false;
              if (instance2.a) {
                invokeArrayFns(instance2.a);
              }
              const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
              if (vnodeHook) {
                invokeVNodeHook(vnodeHook, instance2.parent, vnode);
              }
            }, parentSuspense);
            {
              devtoolsComponentAdded(instance2);
            }
          };
          sharedContext.deactivate = (vnode) => {
            const instance2 = vnode.component;
            move(vnode, storageContainer, null, 1, parentSuspense);
            queuePostRenderEffect(() => {
              if (instance2.da) {
                invokeArrayFns(instance2.da);
              }
              const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
              if (vnodeHook) {
                invokeVNodeHook(vnodeHook, instance2.parent, vnode);
              }
              instance2.isDeactivated = true;
            }, parentSuspense);
            {
              devtoolsComponentAdded(instance2);
            }
          };
          function unmount(vnode) {
            resetShapeFlag(vnode);
            _unmount(vnode, instance, parentSuspense, true);
          }
          function pruneCache(filter) {
            cache.forEach((vnode, key) => {
              const name = getComponentName(vnode.type);
              if (name && (!filter || !filter(name))) {
                pruneCacheEntry(key);
              }
            });
          }
          function pruneCacheEntry(key) {
            const cached = cache.get(key);
            if (!current || cached.type !== current.type) {
              unmount(cached);
            } else if (current) {
              resetShapeFlag(current);
            }
            cache.delete(key);
            keys.delete(key);
          }
          watch(
            () => [props.include, props.exclude],
            ([include, exclude]) => {
              include && pruneCache((name) => matches(include, name));
              exclude && pruneCache((name) => !matches(exclude, name));
            },
            // prune post-render after `current` has been updated
            { flush: "post", deep: true }
          );
          let pendingCacheKey = null;
          const cacheSubtree = () => {
            if (pendingCacheKey != null) {
              cache.set(pendingCacheKey, getInnerChild(instance.subTree));
            }
          };
          onMounted(cacheSubtree);
          onUpdated(cacheSubtree);
          onBeforeUnmount(() => {
            cache.forEach((cached) => {
              const { subTree, suspense } = instance;
              const vnode = getInnerChild(subTree);
              if (cached.type === vnode.type) {
                resetShapeFlag(vnode);
                const da2 = vnode.component.da;
                da2 && queuePostRenderEffect(da2, suspense);
                return;
              }
              unmount(cached);
            });
          });
          return () => {
            pendingCacheKey = null;
            if (!slots.default) {
              return null;
            }
            const children = slots.default();
            const rawVNode = children[0];
            if (children.length > 1) {
              {
                warn$1(`KeepAlive should contain exactly one component child.`);
              }
              current = null;
              return children;
            } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4) && !(rawVNode.shapeFlag & 128)) {
              current = null;
              return rawVNode;
            }
            let vnode = getInnerChild(rawVNode);
            const comp = vnode.type;
            const name = getComponentName(isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp);
            const { include, exclude, max } = props;
            if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
              current = vnode;
              return rawVNode;
            }
            const key = vnode.key == null ? comp : vnode.key;
            const cachedVNode = cache.get(key);
            if (vnode.el) {
              vnode = cloneVNode(vnode);
              if (rawVNode.shapeFlag & 128) {
                rawVNode.ssContent = vnode;
              }
            }
            pendingCacheKey = key;
            if (cachedVNode) {
              vnode.el = cachedVNode.el;
              vnode.component = cachedVNode.component;
              if (vnode.transition) {
                setTransitionHooks(vnode, vnode.transition);
              }
              vnode.shapeFlag |= 512;
              keys.delete(key);
              keys.add(key);
            } else {
              keys.add(key);
              if (max && keys.size > parseInt(max, 10)) {
                pruneCacheEntry(keys.values().next().value);
              }
            }
            vnode.shapeFlag |= 256;
            current = vnode;
            return isSuspense(rawVNode.type) ? rawVNode : vnode;
          };
        }
      };
      KeepAlive = KeepAliveImpl;
      createHook = (lifecycle) => (hook, target = currentInstance) => (
        // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
        (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args) => hook(...args), target)
      );
      onBeforeMount = createHook(
        "bm"
        /* LifecycleHooks.BEFORE_MOUNT */
      );
      onMounted = createHook(
        "m"
        /* LifecycleHooks.MOUNTED */
      );
      onBeforeUpdate = createHook(
        "bu"
        /* LifecycleHooks.BEFORE_UPDATE */
      );
      onUpdated = createHook(
        "u"
        /* LifecycleHooks.UPDATED */
      );
      onBeforeUnmount = createHook(
        "bum"
        /* LifecycleHooks.BEFORE_UNMOUNT */
      );
      onUnmounted = createHook(
        "um"
        /* LifecycleHooks.UNMOUNTED */
      );
      onServerPrefetch = createHook(
        "sp"
        /* LifecycleHooks.SERVER_PREFETCH */
      );
      onRenderTriggered = createHook(
        "rtg"
        /* LifecycleHooks.RENDER_TRIGGERED */
      );
      onRenderTracked = createHook(
        "rtc"
        /* LifecycleHooks.RENDER_TRACKED */
      );
      COMPONENTS = "components";
      DIRECTIVES = "directives";
      NULL_DYNAMIC_COMPONENT = Symbol();
      getPublicInstance = (i2) => {
        if (!i2)
          return null;
        if (isStatefulComponent(i2))
          return getExposeProxy(i2) || i2.proxy;
        return getPublicInstance(i2.parent);
      };
      publicPropertiesMap = // Move PURE marker to new line to workaround compiler discarding it
      // due to type annotation
      /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
        $: (i2) => i2,
        $el: (i2) => i2.vnode.el,
        $data: (i2) => i2.data,
        $props: (i2) => shallowReadonly(i2.props),
        $attrs: (i2) => shallowReadonly(i2.attrs),
        $slots: (i2) => shallowReadonly(i2.slots),
        $refs: (i2) => shallowReadonly(i2.refs),
        $parent: (i2) => getPublicInstance(i2.parent),
        $root: (i2) => getPublicInstance(i2.root),
        $emit: (i2) => i2.emit,
        $options: (i2) => resolveMergedOptions(i2),
        $forceUpdate: (i2) => i2.f || (i2.f = () => queueJob(i2.update)),
        $nextTick: (i2) => i2.n || (i2.n = nextTick.bind(i2.proxy)),
        $watch: (i2) => instanceWatch.bind(i2)
      });
      isReservedPrefix = (key) => key === "_" || key === "$";
      PublicInstanceProxyHandlers = {
        get({ _: instance }, key) {
          const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
          if (key === "__isVue") {
            return true;
          }
          if (setupState !== EMPTY_OBJ && setupState.__isScriptSetup && hasOwn(setupState, key)) {
            return setupState[key];
          }
          let normalizedProps;
          if (key[0] !== "$") {
            const n2 = accessCache[key];
            if (n2 !== void 0) {
              switch (n2) {
                case 1:
                  return setupState[key];
                case 2:
                  return data[key];
                case 4:
                  return ctx[key];
                case 3:
                  return props[key];
              }
            } else if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
              accessCache[key] = 1;
              return setupState[key];
            } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
              accessCache[key] = 2;
              return data[key];
            } else if (
              // only cache other properties when instance has declared (thus stable)
              // props
              (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)
            ) {
              accessCache[key] = 3;
              return props[key];
            } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
              accessCache[key] = 4;
              return ctx[key];
            } else if (shouldCacheAccess) {
              accessCache[key] = 0;
            }
          }
          const publicGetter = publicPropertiesMap[key];
          let cssModule, globalProperties;
          if (publicGetter) {
            if (key === "$attrs") {
              track(instance, "get", key);
              markAttrsAccessed();
            }
            return publicGetter(instance);
          } else if (
            // css module (injected by vue-loader)
            (cssModule = type.__cssModules) && (cssModule = cssModule[key])
          ) {
            return cssModule;
          } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
            accessCache[key] = 4;
            return ctx[key];
          } else if (
            // global properties
            globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)
          ) {
            {
              return globalProperties[key];
            }
          } else if (currentRenderingInstance && (!isString(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
          // to infinite warning loop
          key.indexOf("__v") !== 0)) {
            if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) {
              warn$1(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`);
            } else if (instance === currentRenderingInstance) {
              warn$1(`Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`);
            }
          }
        },
        set({ _: instance }, key, value) {
          const { data, setupState, ctx } = instance;
          if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
            setupState[key] = value;
            return true;
          } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
            data[key] = value;
            return true;
          } else if (hasOwn(instance.props, key)) {
            warn$1(`Attempting to mutate prop "${key}". Props are readonly.`, instance);
            return false;
          }
          if (key[0] === "$" && key.slice(1) in instance) {
            warn$1(`Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`, instance);
            return false;
          } else {
            if (key in instance.appContext.config.globalProperties) {
              Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                value
              });
            } else {
              ctx[key] = value;
            }
          }
          return true;
        },
        has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
          let normalizedProps;
          return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || setupState !== EMPTY_OBJ && hasOwn(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
        },
        defineProperty(target, key, descriptor) {
          if (descriptor.get != null) {
            target._.accessCache[key] = 0;
          } else if (hasOwn(descriptor, "value")) {
            this.set(target, key, descriptor.value, null);
          }
          return Reflect.defineProperty(target, key, descriptor);
        }
      };
      {
        PublicInstanceProxyHandlers.ownKeys = (target) => {
          warn$1(`Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`);
          return Reflect.ownKeys(target);
        };
      }
      RuntimeCompiledPublicInstanceProxyHandlers = /* @__PURE__ */ extend({}, PublicInstanceProxyHandlers, {
        get(target, key) {
          if (key === Symbol.unscopables) {
            return;
          }
          return PublicInstanceProxyHandlers.get(target, key, target);
        },
        has(_2, key) {
          const has2 = key[0] !== "_" && !isGloballyWhitelisted(key);
          if (!has2 && PublicInstanceProxyHandlers.has(_2, key)) {
            warn$1(`Property ${JSON.stringify(key)} should not start with _ which is a reserved prefix for Vue internals.`);
          }
          return has2;
        }
      });
      shouldCacheAccess = true;
      internalOptionMergeStrats = {
        data: mergeDataFn,
        props: mergeObjectOptions,
        emits: mergeObjectOptions,
        // objects
        methods: mergeObjectOptions,
        computed: mergeObjectOptions,
        // lifecycle
        beforeCreate: mergeAsArray,
        created: mergeAsArray,
        beforeMount: mergeAsArray,
        mounted: mergeAsArray,
        beforeUpdate: mergeAsArray,
        updated: mergeAsArray,
        beforeDestroy: mergeAsArray,
        beforeUnmount: mergeAsArray,
        destroyed: mergeAsArray,
        unmounted: mergeAsArray,
        activated: mergeAsArray,
        deactivated: mergeAsArray,
        errorCaptured: mergeAsArray,
        serverPrefetch: mergeAsArray,
        // assets
        components: mergeObjectOptions,
        directives: mergeObjectOptions,
        // watch
        watch: mergeWatchOptions,
        // provide / inject
        provide: mergeDataFn,
        inject: mergeInject
      };
      isSimpleType = /* @__PURE__ */ makeMap("String,Number,Boolean,Function,Symbol,BigInt");
      isInternalKey = (key) => key[0] === "_" || key === "$stable";
      normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
      normalizeSlot = (key, rawSlot, ctx) => {
        if (rawSlot._n) {
          return rawSlot;
        }
        const normalized = withCtx((...args) => {
          if (currentInstance) {
            warn$1(`Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`);
          }
          return normalizeSlotValue(rawSlot(...args));
        }, ctx);
        normalized._c = false;
        return normalized;
      };
      normalizeObjectSlots = (rawSlots, slots, instance) => {
        const ctx = rawSlots._ctx;
        for (const key in rawSlots) {
          if (isInternalKey(key))
            continue;
          const value = rawSlots[key];
          if (isFunction(value)) {
            slots[key] = normalizeSlot(key, value, ctx);
          } else if (value != null) {
            {
              warn$1(`Non-function value encountered for slot "${key}". Prefer function slots for better performance.`);
            }
            const normalized = normalizeSlotValue(value);
            slots[key] = () => normalized;
          }
        }
      };
      normalizeVNodeSlots = (instance, children) => {
        if (!isKeepAlive(instance.vnode) && true) {
          warn$1(`Non-function value encountered for default slot. Prefer function slots for better performance.`);
        }
        const normalized = normalizeSlotValue(children);
        instance.slots.default = () => normalized;
      };
      initSlots = (instance, children) => {
        if (instance.vnode.shapeFlag & 32) {
          const type = children._;
          if (type) {
            instance.slots = toRaw(children);
            def(children, "_", type);
          } else {
            normalizeObjectSlots(children, instance.slots = {});
          }
        } else {
          instance.slots = {};
          if (children) {
            normalizeVNodeSlots(instance, children);
          }
        }
        def(instance.slots, InternalObjectKey, 1);
      };
      updateSlots = (instance, children, optimized) => {
        const { vnode, slots } = instance;
        let needDeletionCheck = true;
        let deletionComparisonTarget = EMPTY_OBJ;
        if (vnode.shapeFlag & 32) {
          const type = children._;
          if (type) {
            if (isHmrUpdating) {
              extend(slots, children);
            } else if (optimized && type === 1) {
              needDeletionCheck = false;
            } else {
              extend(slots, children);
              if (!optimized && type === 1) {
                delete slots._;
              }
            }
          } else {
            needDeletionCheck = !children.$stable;
            normalizeObjectSlots(children, slots);
          }
          deletionComparisonTarget = children;
        } else if (children) {
          normalizeVNodeSlots(instance, children);
          deletionComparisonTarget = { default: 1 };
        }
        if (needDeletionCheck) {
          for (const key in slots) {
            if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
              delete slots[key];
            }
          }
        }
      };
      uid = 0;
      hasMismatch = false;
      isSVGContainer = (container) => /svg/.test(container.namespaceURI) && container.tagName !== "foreignObject";
      isComment = (node) => node.nodeType === 8;
      queuePostRenderEffect = queueEffectWithSuspense;
      isTeleport = (type) => type.__isTeleport;
      isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
      isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
      resolveTarget = (props, select) => {
        const targetSelector = props && props.to;
        if (isString(targetSelector)) {
          if (!select) {
            warn$1(`Current renderer does not support string target for Teleports. (missing querySelector renderer option)`);
            return null;
          } else {
            const target = select(targetSelector);
            if (!target) {
              warn$1(`Failed to locate Teleport target with selector "${targetSelector}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`);
            }
            return target;
          }
        } else {
          if (!targetSelector && !isTeleportDisabled(props)) {
            warn$1(`Invalid Teleport target: ${targetSelector}`);
          }
          return targetSelector;
        }
      };
      TeleportImpl = {
        __isTeleport: true,
        process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
          const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment } } = internals;
          const disabled = isTeleportDisabled(n2.props);
          let { shapeFlag, children, dynamicChildren } = n2;
          if (isHmrUpdating) {
            optimized = false;
            dynamicChildren = null;
          }
          if (n1 == null) {
            const placeholder = n2.el = createComment("teleport start");
            const mainAnchor = n2.anchor = createComment("teleport end");
            insert(placeholder, container, anchor);
            insert(mainAnchor, container, anchor);
            const target = n2.target = resolveTarget(n2.props, querySelector);
            const targetAnchor = n2.targetAnchor = createText("");
            if (target) {
              insert(targetAnchor, target);
              isSVG = isSVG || isTargetSVG(target);
            } else if (!disabled) {
              warn$1("Invalid Teleport target on mount:", target, `(${typeof target})`);
            }
            const mount = (container2, anchor2) => {
              if (shapeFlag & 16) {
                mountChildren(children, container2, anchor2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              }
            };
            if (disabled) {
              mount(container, mainAnchor);
            } else if (target) {
              mount(target, targetAnchor);
            }
          } else {
            n2.el = n1.el;
            const mainAnchor = n2.anchor = n1.anchor;
            const target = n2.target = n1.target;
            const targetAnchor = n2.targetAnchor = n1.targetAnchor;
            const wasDisabled = isTeleportDisabled(n1.props);
            const currentContainer = wasDisabled ? container : target;
            const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
            isSVG = isSVG || isTargetSVG(target);
            if (dynamicChildren) {
              patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG, slotScopeIds);
              traverseStaticChildren(n1, n2, true);
            } else if (!optimized) {
              patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, false);
            }
            if (disabled) {
              if (!wasDisabled) {
                moveTeleport(
                  n2,
                  container,
                  mainAnchor,
                  internals,
                  1
                  /* TeleportMoveTypes.TOGGLE */
                );
              }
            } else {
              if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                const nextTarget = n2.target = resolveTarget(n2.props, querySelector);
                if (nextTarget) {
                  moveTeleport(
                    n2,
                    nextTarget,
                    null,
                    internals,
                    0
                    /* TeleportMoveTypes.TARGET_CHANGE */
                  );
                } else {
                  warn$1("Invalid Teleport target on update:", target, `(${typeof target})`);
                }
              } else if (wasDisabled) {
                moveTeleport(
                  n2,
                  target,
                  targetAnchor,
                  internals,
                  1
                  /* TeleportMoveTypes.TOGGLE */
                );
              }
            }
          }
        },
        remove(vnode, parentComponent, parentSuspense, optimized, { um: unmount, o: { remove: hostRemove } }, doRemove) {
          const { shapeFlag, children, anchor, targetAnchor, target, props } = vnode;
          if (target) {
            hostRemove(targetAnchor);
          }
          if (doRemove || !isTeleportDisabled(props)) {
            hostRemove(anchor);
            if (shapeFlag & 16) {
              for (let i2 = 0; i2 < children.length; i2++) {
                const child = children[i2];
                unmount(child, parentComponent, parentSuspense, true, !!child.dynamicChildren);
              }
            }
          }
        },
        move: moveTeleport,
        hydrate: hydrateTeleport
      };
      Teleport = TeleportImpl;
      Fragment = Symbol("Fragment");
      Text = Symbol("Text");
      Comment = Symbol("Comment");
      Static = Symbol("Static");
      blockStack = [];
      currentBlock = null;
      isBlockTreeEnabled = 1;
      createVNodeWithArgsTransform = (...args) => {
        return _createVNode(...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args);
      };
      InternalObjectKey = `__vInternal`;
      normalizeKey = ({ key }) => key != null ? key : null;
      normalizeRef = ({ ref: ref2, ref_key, ref_for }) => {
        return ref2 != null ? isString(ref2) || isRef(ref2) || isFunction(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
      };
      createVNode = createVNodeWithArgsTransform;
      emptyAppContext = createAppContext();
      uid$1 = 0;
      currentInstance = null;
      getCurrentInstance = () => currentInstance || currentRenderingInstance;
      setCurrentInstance = (instance) => {
        currentInstance = instance;
        instance.scope.on();
      };
      unsetCurrentInstance = () => {
        currentInstance && currentInstance.scope.off();
        currentInstance = null;
      };
      isBuiltInTag = /* @__PURE__ */ makeMap("slot,component");
      isInSSRComponentSetup = false;
      isRuntimeOnly = () => !compile;
      classifyRE = /(?:^|[-_])(\w)/g;
      classify = (str) => str.replace(classifyRE, (c2) => c2.toUpperCase()).replace(/[-_]/g, "");
      computed$1 = (getterOrOptions, debugOptions) => {
        return computed(getterOrOptions, debugOptions, isInSSRComponentSetup);
      };
      warnRuntimeUsage = (method) => warn$1(`${method}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
      ssrContextKey = Symbol(`ssrContext`);
      useSSRContext = () => {
        {
          const ctx = inject(ssrContextKey);
          if (!ctx) {
            warn$1(`Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.`);
          }
          return ctx;
        }
      };
      version = "3.2.41";
      ssrUtils = null;
      resolveFilter = null;
      compatUtils = null;
      svgNS = "http://www.w3.org/2000/svg";
      doc = typeof document !== "undefined" ? document : null;
      templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
      nodeOps = {
        insert: (child, parent, anchor) => {
          parent.insertBefore(child, anchor || null);
        },
        remove: (child) => {
          const parent = child.parentNode;
          if (parent) {
            parent.removeChild(child);
          }
        },
        createElement: (tag, isSVG, is2, props) => {
          const el2 = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is2 ? { is: is2 } : void 0);
          if (tag === "select" && props && props.multiple != null) {
            el2.setAttribute("multiple", props.multiple);
          }
          return el2;
        },
        createText: (text) => doc.createTextNode(text),
        createComment: (text) => doc.createComment(text),
        setText: (node, text) => {
          node.nodeValue = text;
        },
        setElementText: (el2, text) => {
          el2.textContent = text;
        },
        parentNode: (node) => node.parentNode,
        nextSibling: (node) => node.nextSibling,
        querySelector: (selector) => doc.querySelector(selector),
        setScopeId(el2, id) {
          el2.setAttribute(id, "");
        },
        // __UNSAFE__
        // Reason: innerHTML.
        // Static content here can only come from compiled templates.
        // As long as the user only uses trusted templates, this is safe.
        insertStaticContent(content, parent, anchor, isSVG, start, end) {
          const before = anchor ? anchor.previousSibling : parent.lastChild;
          if (start && (start === end || start.nextSibling)) {
            while (true) {
              parent.insertBefore(start.cloneNode(true), anchor);
              if (start === end || !(start = start.nextSibling))
                break;
            }
          } else {
            templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
            const template = templateContainer.content;
            if (isSVG) {
              const wrapper = template.firstChild;
              while (wrapper.firstChild) {
                template.appendChild(wrapper.firstChild);
              }
              template.removeChild(wrapper);
            }
            parent.insertBefore(template, anchor);
          }
          return [
            // first
            before ? before.nextSibling : parent.firstChild,
            // last
            anchor ? anchor.previousSibling : parent.lastChild
          ];
        }
      };
      importantRE = /\s*!important$/;
      prefixes = ["Webkit", "Moz", "ms"];
      prefixCache = {};
      xlinkNS = "http://www.w3.org/1999/xlink";
      optionsModifierRE = /(?:Once|Passive|Capture)$/;
      cachedNow = 0;
      p2 = /* @__PURE__ */ Promise.resolve();
      getNow = () => cachedNow || (p2.then(() => cachedNow = 0), cachedNow = Date.now());
      nativeOnRE = /^on[a-z]/;
      patchProp = (el2, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
        if (key === "class") {
          patchClass(el2, nextValue, isSVG);
        } else if (key === "style") {
          patchStyle(el2, prevValue, nextValue);
        } else if (isOn(key)) {
          if (!isModelListener(key)) {
            patchEvent(el2, key, prevValue, nextValue, parentComponent);
          }
        } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el2, key, nextValue, isSVG)) {
          patchDOMProp(el2, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
        } else {
          if (key === "true-value") {
            el2._trueValue = nextValue;
          } else if (key === "false-value") {
            el2._falseValue = nextValue;
          }
          patchAttr(el2, key, nextValue, isSVG);
        }
      };
      defineSSRCustomElement = (options) => {
        return defineCustomElement(options, hydrate);
      };
      BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {
      };
      VueElement = class extends BaseClass {
        constructor(_def, _props = {}, hydrate2) {
          super();
          this._def = _def;
          this._props = _props;
          this._instance = null;
          this._connected = false;
          this._resolved = false;
          this._numberProps = null;
          if (this.shadowRoot && hydrate2) {
            hydrate2(this._createVNode(), this.shadowRoot);
          } else {
            if (this.shadowRoot) {
              warn$1(`Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use \`defineSSRCustomElement\`.`);
            }
            this.attachShadow({ mode: "open" });
          }
        }
        connectedCallback() {
          this._connected = true;
          if (!this._instance) {
            this._resolveDef();
          }
        }
        disconnectedCallback() {
          this._connected = false;
          nextTick(() => {
            if (!this._connected) {
              render(null, this.shadowRoot);
              this._instance = null;
            }
          });
        }
        /**
         * resolve inner component definition (handle possible async component)
         */
        _resolveDef() {
          if (this._resolved) {
            return;
          }
          this._resolved = true;
          for (let i2 = 0; i2 < this.attributes.length; i2++) {
            this._setAttr(this.attributes[i2].name);
          }
          new MutationObserver((mutations) => {
            for (const m2 of mutations) {
              this._setAttr(m2.attributeName);
            }
          }).observe(this, { attributes: true });
          const resolve2 = (def2) => {
            const { props, styles } = def2;
            const hasOptions = !isArray(props);
            const rawKeys = props ? hasOptions ? Object.keys(props) : props : [];
            let numberProps;
            if (hasOptions) {
              for (const key in this._props) {
                const opt = props[key];
                if (opt === Number || opt && opt.type === Number) {
                  this._props[key] = toNumber(this._props[key]);
                  (numberProps || (numberProps = /* @__PURE__ */ Object.create(null)))[key] = true;
                }
              }
            }
            this._numberProps = numberProps;
            for (const key of Object.keys(this)) {
              if (key[0] !== "_") {
                this._setProp(key, this[key], true, false);
              }
            }
            for (const key of rawKeys.map(camelize)) {
              Object.defineProperty(this, key, {
                get() {
                  return this._getProp(key);
                },
                set(val) {
                  this._setProp(key, val);
                }
              });
            }
            this._applyStyles(styles);
            this._update();
          };
          const asyncDef = this._def.__asyncLoader;
          if (asyncDef) {
            asyncDef().then(resolve2);
          } else {
            resolve2(this._def);
          }
        }
        _setAttr(key) {
          let value = this.getAttribute(key);
          if (this._numberProps && this._numberProps[key]) {
            value = toNumber(value);
          }
          this._setProp(camelize(key), value, false);
        }
        /**
         * @internal
         */
        _getProp(key) {
          return this._props[key];
        }
        /**
         * @internal
         */
        _setProp(key, val, shouldReflect = true, shouldUpdate = true) {
          if (val !== this._props[key]) {
            this._props[key] = val;
            if (shouldUpdate && this._instance) {
              this._update();
            }
            if (shouldReflect) {
              if (val === true) {
                this.setAttribute(hyphenate(key), "");
              } else if (typeof val === "string" || typeof val === "number") {
                this.setAttribute(hyphenate(key), val + "");
              } else if (!val) {
                this.removeAttribute(hyphenate(key));
              }
            }
          }
        }
        _update() {
          render(this._createVNode(), this.shadowRoot);
        }
        _createVNode() {
          const vnode = createVNode(this._def, extend({}, this._props));
          if (!this._instance) {
            vnode.ce = (instance) => {
              this._instance = instance;
              instance.isCE = true;
              {
                instance.ceReload = (newStyles) => {
                  if (this._styles) {
                    this._styles.forEach((s2) => this.shadowRoot.removeChild(s2));
                    this._styles.length = 0;
                  }
                  this._applyStyles(newStyles);
                  if (!this._def.__asyncLoader) {
                    this._instance = null;
                    this._update();
                  }
                };
              }
              instance.emit = (event, ...args) => {
                this.dispatchEvent(new CustomEvent(event, {
                  detail: args
                }));
              };
              let parent = this;
              while (parent = parent && (parent.parentNode || parent.host)) {
                if (parent instanceof VueElement) {
                  instance.parent = parent._instance;
                  break;
                }
              }
            };
          }
          return vnode;
        }
        _applyStyles(styles) {
          if (styles) {
            styles.forEach((css) => {
              const s2 = document.createElement("style");
              s2.textContent = css;
              this.shadowRoot.appendChild(s2);
              {
                (this._styles || (this._styles = [])).push(s2);
              }
            });
          }
        }
      };
      TRANSITION = "transition";
      ANIMATION = "animation";
      Transition = (props, { slots }) => h2(BaseTransition, resolveTransitionProps(props), slots);
      Transition.displayName = "Transition";
      DOMTransitionPropsValidators = {
        name: String,
        type: String,
        css: {
          type: Boolean,
          default: true
        },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
      };
      TransitionPropsValidators = Transition.props = /* @__PURE__ */ extend({}, BaseTransition.props, DOMTransitionPropsValidators);
      callHook$1 = (hook, args = []) => {
        if (isArray(hook)) {
          hook.forEach((h3) => h3(...args));
        } else if (hook) {
          hook(...args);
        }
      };
      hasExplicitCallback = (hook) => {
        return hook ? isArray(hook) ? hook.some((h3) => h3.length > 1) : hook.length > 1 : false;
      };
      endId = 0;
      positionMap = /* @__PURE__ */ new WeakMap();
      newPositionMap = /* @__PURE__ */ new WeakMap();
      TransitionGroupImpl = {
        name: "TransitionGroup",
        props: /* @__PURE__ */ extend({}, TransitionPropsValidators, {
          tag: String,
          moveClass: String
        }),
        setup(props, { slots }) {
          const instance = getCurrentInstance();
          const state = useTransitionState();
          let prevChildren;
          let children;
          onUpdated(() => {
            if (!prevChildren.length) {
              return;
            }
            const moveClass = props.moveClass || `${props.name || "v"}-move`;
            if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
              return;
            }
            prevChildren.forEach(callPendingCbs);
            prevChildren.forEach(recordPosition);
            const movedChildren = prevChildren.filter(applyTranslation);
            forceReflow();
            movedChildren.forEach((c2) => {
              const el2 = c2.el;
              const style = el2.style;
              addTransitionClass(el2, moveClass);
              style.transform = style.webkitTransform = style.transitionDuration = "";
              const cb = el2._moveCb = (e2) => {
                if (e2 && e2.target !== el2) {
                  return;
                }
                if (!e2 || /transform$/.test(e2.propertyName)) {
                  el2.removeEventListener("transitionend", cb);
                  el2._moveCb = null;
                  removeTransitionClass(el2, moveClass);
                }
              };
              el2.addEventListener("transitionend", cb);
            });
          });
          return () => {
            const rawProps = toRaw(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            let tag = rawProps.tag || Fragment;
            prevChildren = children;
            children = slots.default ? getTransitionRawChildren(slots.default()) : [];
            for (let i2 = 0; i2 < children.length; i2++) {
              const child = children[i2];
              if (child.key != null) {
                setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
              } else {
                warn$1(`<TransitionGroup> children must be keyed.`);
              }
            }
            if (prevChildren) {
              for (let i2 = 0; i2 < prevChildren.length; i2++) {
                const child = prevChildren[i2];
                setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
                positionMap.set(child, child.el.getBoundingClientRect());
              }
            }
            return createVNode(tag, null, children);
          };
        }
      };
      TransitionGroup = TransitionGroupImpl;
      getModelAssigner = (vnode) => {
        const fn2 = vnode.props["onUpdate:modelValue"] || false;
        return isArray(fn2) ? (value) => invokeArrayFns(fn2, value) : fn2;
      };
      vModelText = {
        created(el2, { modifiers: { lazy, trim, number } }, vnode) {
          el2._assign = getModelAssigner(vnode);
          const castToNumber = number || vnode.props && vnode.props.type === "number";
          addEventListener(el2, lazy ? "change" : "input", (e2) => {
            if (e2.target.composing)
              return;
            let domValue = el2.value;
            if (trim) {
              domValue = domValue.trim();
            }
            if (castToNumber) {
              domValue = toNumber(domValue);
            }
            el2._assign(domValue);
          });
          if (trim) {
            addEventListener(el2, "change", () => {
              el2.value = el2.value.trim();
            });
          }
          if (!lazy) {
            addEventListener(el2, "compositionstart", onCompositionStart);
            addEventListener(el2, "compositionend", onCompositionEnd);
            addEventListener(el2, "change", onCompositionEnd);
          }
        },
        // set value on mounted so it's after min/max for type="range"
        mounted(el2, { value }) {
          el2.value = value == null ? "" : value;
        },
        beforeUpdate(el2, { value, modifiers: { lazy, trim, number } }, vnode) {
          el2._assign = getModelAssigner(vnode);
          if (el2.composing)
            return;
          if (document.activeElement === el2 && el2.type !== "range") {
            if (lazy) {
              return;
            }
            if (trim && el2.value.trim() === value) {
              return;
            }
            if ((number || el2.type === "number") && toNumber(el2.value) === value) {
              return;
            }
          }
          const newValue = value == null ? "" : value;
          if (el2.value !== newValue) {
            el2.value = newValue;
          }
        }
      };
      vModelCheckbox = {
        // #4096 array checkboxes need to be deep traversed
        deep: true,
        created(el2, _2, vnode) {
          el2._assign = getModelAssigner(vnode);
          addEventListener(el2, "change", () => {
            const modelValue = el2._modelValue;
            const elementValue = getValue(el2);
            const checked = el2.checked;
            const assign = el2._assign;
            if (isArray(modelValue)) {
              const index = looseIndexOf(modelValue, elementValue);
              const found = index !== -1;
              if (checked && !found) {
                assign(modelValue.concat(elementValue));
              } else if (!checked && found) {
                const filtered = [...modelValue];
                filtered.splice(index, 1);
                assign(filtered);
              }
            } else if (isSet(modelValue)) {
              const cloned = new Set(modelValue);
              if (checked) {
                cloned.add(elementValue);
              } else {
                cloned.delete(elementValue);
              }
              assign(cloned);
            } else {
              assign(getCheckboxValue(el2, checked));
            }
          });
        },
        // set initial checked on mount to wait for true-value/false-value
        mounted: setChecked,
        beforeUpdate(el2, binding, vnode) {
          el2._assign = getModelAssigner(vnode);
          setChecked(el2, binding, vnode);
        }
      };
      vModelRadio = {
        created(el2, { value }, vnode) {
          el2.checked = looseEqual(value, vnode.props.value);
          el2._assign = getModelAssigner(vnode);
          addEventListener(el2, "change", () => {
            el2._assign(getValue(el2));
          });
        },
        beforeUpdate(el2, { value, oldValue }, vnode) {
          el2._assign = getModelAssigner(vnode);
          if (value !== oldValue) {
            el2.checked = looseEqual(value, vnode.props.value);
          }
        }
      };
      vModelSelect = {
        // <select multiple> value need to be deep traversed
        deep: true,
        created(el2, { value, modifiers: { number } }, vnode) {
          const isSetModel = isSet(value);
          addEventListener(el2, "change", () => {
            const selectedVal = Array.prototype.filter.call(el2.options, (o2) => o2.selected).map((o2) => number ? toNumber(getValue(o2)) : getValue(o2));
            el2._assign(el2.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
          });
          el2._assign = getModelAssigner(vnode);
        },
        // set value in mounted & updated because <select> relies on its children
        // <option>s.
        mounted(el2, { value }) {
          setSelected(el2, value);
        },
        beforeUpdate(el2, _binding, vnode) {
          el2._assign = getModelAssigner(vnode);
        },
        updated(el2, { value }) {
          setSelected(el2, value);
        }
      };
      vModelDynamic = {
        created(el2, binding, vnode) {
          callModelHook(el2, binding, vnode, null, "created");
        },
        mounted(el2, binding, vnode) {
          callModelHook(el2, binding, vnode, null, "mounted");
        },
        beforeUpdate(el2, binding, vnode, prevVNode) {
          callModelHook(el2, binding, vnode, prevVNode, "beforeUpdate");
        },
        updated(el2, binding, vnode, prevVNode) {
          callModelHook(el2, binding, vnode, prevVNode, "updated");
        }
      };
      systemModifiers = ["ctrl", "shift", "alt", "meta"];
      modifierGuards = {
        stop: (e2) => e2.stopPropagation(),
        prevent: (e2) => e2.preventDefault(),
        self: (e2) => e2.target !== e2.currentTarget,
        ctrl: (e2) => !e2.ctrlKey,
        shift: (e2) => !e2.shiftKey,
        alt: (e2) => !e2.altKey,
        meta: (e2) => !e2.metaKey,
        left: (e2) => "button" in e2 && e2.button !== 0,
        middle: (e2) => "button" in e2 && e2.button !== 1,
        right: (e2) => "button" in e2 && e2.button !== 2,
        exact: (e2, modifiers) => systemModifiers.some((m2) => e2[`${m2}Key`] && !modifiers.includes(m2))
      };
      withModifiers = (fn2, modifiers) => {
        return (event, ...args) => {
          for (let i2 = 0; i2 < modifiers.length; i2++) {
            const guard = modifierGuards[modifiers[i2]];
            if (guard && guard(event, modifiers))
              return;
          }
          return fn2(event, ...args);
        };
      };
      keyNames = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
      };
      withKeys = (fn2, modifiers) => {
        return (event) => {
          if (!("key" in event)) {
            return;
          }
          const eventKey = hyphenate(event.key);
          if (modifiers.some((k2) => k2 === eventKey || keyNames[k2] === eventKey)) {
            return fn2(event);
          }
        };
      };
      vShow = {
        beforeMount(el2, { value }, { transition }) {
          el2._vod = el2.style.display === "none" ? "" : el2.style.display;
          if (transition && value) {
            transition.beforeEnter(el2);
          } else {
            setDisplay(el2, value);
          }
        },
        mounted(el2, { value }, { transition }) {
          if (transition && value) {
            transition.enter(el2);
          }
        },
        updated(el2, { value, oldValue }, { transition }) {
          if (!value === !oldValue)
            return;
          if (transition) {
            if (value) {
              transition.beforeEnter(el2);
              setDisplay(el2, true);
              transition.enter(el2);
            } else {
              transition.leave(el2, () => {
                setDisplay(el2, false);
              });
            }
          } else {
            setDisplay(el2, value);
          }
        },
        beforeUnmount(el2, { value }) {
          setDisplay(el2, value);
        }
      };
      rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
      enabledHydration = false;
      render = (...args) => {
        ensureRenderer().render(...args);
      };
      hydrate = (...args) => {
        ensureHydrationRenderer().hydrate(...args);
      };
      createApp = (...args) => {
        const app = ensureRenderer().createApp(...args);
        {
          injectNativeTagCheck(app);
          injectCompilerOptionsCheck(app);
        }
        const { mount } = app;
        app.mount = (containerOrSelector) => {
          const container = normalizeContainer(containerOrSelector);
          if (!container)
            return;
          const component = app._component;
          if (!isFunction(component) && !component.render && !component.template) {
            component.template = container.innerHTML;
          }
          container.innerHTML = "";
          const proxy = mount(container, false, container instanceof SVGElement);
          if (container instanceof Element) {
            container.removeAttribute("v-cloak");
            container.setAttribute("data-v-app", "");
          }
          return proxy;
        };
        return app;
      };
      createSSRApp = (...args) => {
        const app = ensureHydrationRenderer().createApp(...args);
        {
          injectNativeTagCheck(app);
          injectCompilerOptionsCheck(app);
        }
        const { mount } = app;
        app.mount = (containerOrSelector) => {
          const container = normalizeContainer(containerOrSelector);
          if (container) {
            return mount(container, true, container instanceof SVGElement);
          }
        };
        return app;
      };
      initDirectivesForSSR = NOOP;
      runtimeDom = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        render,
        hydrate,
        createApp,
        createSSRApp,
        initDirectivesForSSR,
        defineCustomElement,
        defineSSRCustomElement,
        VueElement,
        useCssModule,
        useCssVars,
        Transition,
        TransitionGroup,
        vModelText,
        vModelCheckbox,
        vModelRadio,
        vModelSelect,
        vModelDynamic,
        withModifiers,
        withKeys,
        vShow,
        reactive,
        ref,
        readonly,
        unref,
        proxyRefs,
        isRef,
        toRef,
        toRefs,
        isProxy,
        isReactive,
        isReadonly,
        isShallow,
        customRef,
        triggerRef,
        shallowRef,
        shallowReactive,
        shallowReadonly,
        markRaw,
        toRaw,
        effect,
        stop,
        ReactiveEffect,
        effectScope,
        EffectScope,
        getCurrentScope,
        onScopeDispose,
        computed: computed$1,
        watch,
        watchEffect,
        watchPostEffect,
        watchSyncEffect,
        onBeforeMount,
        onMounted,
        onBeforeUpdate,
        onUpdated,
        onBeforeUnmount,
        onUnmounted,
        onActivated,
        onDeactivated,
        onRenderTracked,
        onRenderTriggered,
        onErrorCaptured,
        onServerPrefetch,
        provide,
        inject,
        nextTick,
        defineComponent,
        defineAsyncComponent,
        useAttrs,
        useSlots,
        defineProps,
        defineEmits,
        defineExpose,
        withDefaults,
        mergeDefaults,
        createPropsRestProxy,
        withAsyncContext,
        getCurrentInstance,
        h: h2,
        createVNode,
        cloneVNode,
        mergeProps,
        isVNode,
        Fragment,
        Text,
        Comment,
        Static,
        Teleport,
        Suspense,
        KeepAlive,
        BaseTransition,
        withDirectives,
        useSSRContext,
        ssrContextKey,
        createRenderer,
        createHydrationRenderer,
        queuePostFlushCb,
        warn: warn$1,
        handleError,
        callWithErrorHandling,
        callWithAsyncErrorHandling,
        resolveComponent,
        resolveDirective,
        resolveDynamicComponent,
        registerRuntimeCompiler,
        isRuntimeOnly,
        useTransitionState,
        resolveTransitionHooks,
        setTransitionHooks,
        getTransitionRawChildren,
        initCustomFormatter,
        get devtools() {
          return devtools;
        },
        setDevtoolsHook,
        withCtx,
        pushScopeId,
        popScopeId,
        withScopeId,
        renderList,
        toHandlers,
        renderSlot,
        createSlots,
        withMemo,
        isMemoSame,
        openBlock,
        createBlock,
        setBlockTracking,
        createTextVNode,
        createCommentVNode,
        createStaticVNode,
        createElementVNode: createBaseVNode,
        createElementBlock,
        guardReactiveProps,
        toDisplayString,
        camelize,
        capitalize,
        toHandlerKey,
        normalizeProps,
        normalizeClass,
        normalizeStyle,
        transformVNodeArgs,
        version,
        ssrUtils,
        resolveFilter,
        compatUtils
      });
      errorMessages = {
        // parse errors
        [
          0
          /* ErrorCodes.ABRUPT_CLOSING_OF_EMPTY_COMMENT */
        ]: "Illegal comment.",
        [
          1
          /* ErrorCodes.CDATA_IN_HTML_CONTENT */
        ]: "CDATA section is allowed only in XML context.",
        [
          2
          /* ErrorCodes.DUPLICATE_ATTRIBUTE */
        ]: "Duplicate attribute.",
        [
          3
          /* ErrorCodes.END_TAG_WITH_ATTRIBUTES */
        ]: "End tag cannot have attributes.",
        [
          4
          /* ErrorCodes.END_TAG_WITH_TRAILING_SOLIDUS */
        ]: "Illegal '/' in tags.",
        [
          5
          /* ErrorCodes.EOF_BEFORE_TAG_NAME */
        ]: "Unexpected EOF in tag.",
        [
          6
          /* ErrorCodes.EOF_IN_CDATA */
        ]: "Unexpected EOF in CDATA section.",
        [
          7
          /* ErrorCodes.EOF_IN_COMMENT */
        ]: "Unexpected EOF in comment.",
        [
          8
          /* ErrorCodes.EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT */
        ]: "Unexpected EOF in script.",
        [
          9
          /* ErrorCodes.EOF_IN_TAG */
        ]: "Unexpected EOF in tag.",
        [
          10
          /* ErrorCodes.INCORRECTLY_CLOSED_COMMENT */
        ]: "Incorrectly closed comment.",
        [
          11
          /* ErrorCodes.INCORRECTLY_OPENED_COMMENT */
        ]: "Incorrectly opened comment.",
        [
          12
          /* ErrorCodes.INVALID_FIRST_CHARACTER_OF_TAG_NAME */
        ]: "Illegal tag name. Use '&lt;' to print '<'.",
        [
          13
          /* ErrorCodes.MISSING_ATTRIBUTE_VALUE */
        ]: "Attribute value was expected.",
        [
          14
          /* ErrorCodes.MISSING_END_TAG_NAME */
        ]: "End tag name was expected.",
        [
          15
          /* ErrorCodes.MISSING_WHITESPACE_BETWEEN_ATTRIBUTES */
        ]: "Whitespace was expected.",
        [
          16
          /* ErrorCodes.NESTED_COMMENT */
        ]: "Unexpected '<!--' in comment.",
        [
          17
          /* ErrorCodes.UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME */
        ]: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
        [
          18
          /* ErrorCodes.UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE */
        ]: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
        [
          19
          /* ErrorCodes.UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME */
        ]: "Attribute name cannot start with '='.",
        [
          21
          /* ErrorCodes.UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME */
        ]: "'<?' is allowed only in XML context.",
        [
          20
          /* ErrorCodes.UNEXPECTED_NULL_CHARACTER */
        ]: `Unexpected null character.`,
        [
          22
          /* ErrorCodes.UNEXPECTED_SOLIDUS_IN_TAG */
        ]: "Illegal '/' in tags.",
        // Vue-specific parse errors
        [
          23
          /* ErrorCodes.X_INVALID_END_TAG */
        ]: "Invalid end tag.",
        [
          24
          /* ErrorCodes.X_MISSING_END_TAG */
        ]: "Element is missing end tag.",
        [
          25
          /* ErrorCodes.X_MISSING_INTERPOLATION_END */
        ]: "Interpolation end sign was not found.",
        [
          27
          /* ErrorCodes.X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END */
        ]: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
        [
          26
          /* ErrorCodes.X_MISSING_DIRECTIVE_NAME */
        ]: "Legal directive name was expected.",
        // transform errors
        [
          28
          /* ErrorCodes.X_V_IF_NO_EXPRESSION */
        ]: `v-if/v-else-if is missing expression.`,
        [
          29
          /* ErrorCodes.X_V_IF_SAME_KEY */
        ]: `v-if/else branches must use unique keys.`,
        [
          30
          /* ErrorCodes.X_V_ELSE_NO_ADJACENT_IF */
        ]: `v-else/v-else-if has no adjacent v-if or v-else-if.`,
        [
          31
          /* ErrorCodes.X_V_FOR_NO_EXPRESSION */
        ]: `v-for is missing expression.`,
        [
          32
          /* ErrorCodes.X_V_FOR_MALFORMED_EXPRESSION */
        ]: `v-for has invalid expression.`,
        [
          33
          /* ErrorCodes.X_V_FOR_TEMPLATE_KEY_PLACEMENT */
        ]: `<template v-for> key should be placed on the <template> tag.`,
        [
          34
          /* ErrorCodes.X_V_BIND_NO_EXPRESSION */
        ]: `v-bind is missing expression.`,
        [
          35
          /* ErrorCodes.X_V_ON_NO_EXPRESSION */
        ]: `v-on is missing expression.`,
        [
          36
          /* ErrorCodes.X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET */
        ]: `Unexpected custom directive on <slot> outlet.`,
        [
          37
          /* ErrorCodes.X_V_SLOT_MIXED_SLOT_USAGE */
        ]: `Mixed v-slot usage on both the component and nested <template>.When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.`,
        [
          38
          /* ErrorCodes.X_V_SLOT_DUPLICATE_SLOT_NAMES */
        ]: `Duplicate slot names found. `,
        [
          39
          /* ErrorCodes.X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN */
        ]: `Extraneous children found when component already has explicitly named default slot. These children will be ignored.`,
        [
          40
          /* ErrorCodes.X_V_SLOT_MISPLACED */
        ]: `v-slot can only be used on components or <template> tags.`,
        [
          41
          /* ErrorCodes.X_V_MODEL_NO_EXPRESSION */
        ]: `v-model is missing expression.`,
        [
          42
          /* ErrorCodes.X_V_MODEL_MALFORMED_EXPRESSION */
        ]: `v-model value must be a valid JavaScript member expression.`,
        [
          43
          /* ErrorCodes.X_V_MODEL_ON_SCOPE_VARIABLE */
        ]: `v-model cannot be used on v-for or v-slot scope variables because they are not writable.`,
        [
          44
          /* ErrorCodes.X_INVALID_EXPRESSION */
        ]: `Error parsing JavaScript expression: `,
        [
          45
          /* ErrorCodes.X_KEEP_ALIVE_INVALID_CHILDREN */
        ]: `<KeepAlive> expects exactly one child component.`,
        // generic errors
        [
          46
          /* ErrorCodes.X_PREFIX_ID_NOT_SUPPORTED */
        ]: `"prefixIdentifiers" option is not supported in this build of compiler.`,
        [
          47
          /* ErrorCodes.X_MODULE_MODE_NOT_SUPPORTED */
        ]: `ES module mode is not supported in this build of compiler.`,
        [
          48
          /* ErrorCodes.X_CACHE_HANDLER_NOT_SUPPORTED */
        ]: `"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.`,
        [
          49
          /* ErrorCodes.X_SCOPE_ID_NOT_SUPPORTED */
        ]: `"scopeId" option is only supported in module mode.`,
        // just to fulfill types
        [
          50
          /* ErrorCodes.__EXTEND_POINT__ */
        ]: ``
      };
      FRAGMENT = Symbol(`Fragment`);
      TELEPORT = Symbol(`Teleport`);
      SUSPENSE = Symbol(`Suspense`);
      KEEP_ALIVE = Symbol(`KeepAlive`);
      BASE_TRANSITION = Symbol(`BaseTransition`);
      OPEN_BLOCK = Symbol(`openBlock`);
      CREATE_BLOCK = Symbol(`createBlock`);
      CREATE_ELEMENT_BLOCK = Symbol(`createElementBlock`);
      CREATE_VNODE = Symbol(`createVNode`);
      CREATE_ELEMENT_VNODE = Symbol(`createElementVNode`);
      CREATE_COMMENT = Symbol(`createCommentVNode`);
      CREATE_TEXT = Symbol(`createTextVNode`);
      CREATE_STATIC = Symbol(`createStaticVNode`);
      RESOLVE_COMPONENT = Symbol(`resolveComponent`);
      RESOLVE_DYNAMIC_COMPONENT = Symbol(`resolveDynamicComponent`);
      RESOLVE_DIRECTIVE = Symbol(`resolveDirective`);
      RESOLVE_FILTER = Symbol(`resolveFilter`);
      WITH_DIRECTIVES = Symbol(`withDirectives`);
      RENDER_LIST = Symbol(`renderList`);
      RENDER_SLOT = Symbol(`renderSlot`);
      CREATE_SLOTS = Symbol(`createSlots`);
      TO_DISPLAY_STRING = Symbol(`toDisplayString`);
      MERGE_PROPS = Symbol(`mergeProps`);
      NORMALIZE_CLASS = Symbol(`normalizeClass`);
      NORMALIZE_STYLE = Symbol(`normalizeStyle`);
      NORMALIZE_PROPS = Symbol(`normalizeProps`);
      GUARD_REACTIVE_PROPS = Symbol(`guardReactiveProps`);
      TO_HANDLERS = Symbol(`toHandlers`);
      CAMELIZE = Symbol(`camelize`);
      CAPITALIZE = Symbol(`capitalize`);
      TO_HANDLER_KEY = Symbol(`toHandlerKey`);
      SET_BLOCK_TRACKING = Symbol(`setBlockTracking`);
      PUSH_SCOPE_ID = Symbol(`pushScopeId`);
      POP_SCOPE_ID = Symbol(`popScopeId`);
      WITH_CTX = Symbol(`withCtx`);
      UNREF = Symbol(`unref`);
      IS_REF = Symbol(`isRef`);
      WITH_MEMO = Symbol(`withMemo`);
      IS_MEMO_SAME = Symbol(`isMemoSame`);
      helperNameMap = {
        [FRAGMENT]: `Fragment`,
        [TELEPORT]: `Teleport`,
        [SUSPENSE]: `Suspense`,
        [KEEP_ALIVE]: `KeepAlive`,
        [BASE_TRANSITION]: `BaseTransition`,
        [OPEN_BLOCK]: `openBlock`,
        [CREATE_BLOCK]: `createBlock`,
        [CREATE_ELEMENT_BLOCK]: `createElementBlock`,
        [CREATE_VNODE]: `createVNode`,
        [CREATE_ELEMENT_VNODE]: `createElementVNode`,
        [CREATE_COMMENT]: `createCommentVNode`,
        [CREATE_TEXT]: `createTextVNode`,
        [CREATE_STATIC]: `createStaticVNode`,
        [RESOLVE_COMPONENT]: `resolveComponent`,
        [RESOLVE_DYNAMIC_COMPONENT]: `resolveDynamicComponent`,
        [RESOLVE_DIRECTIVE]: `resolveDirective`,
        [RESOLVE_FILTER]: `resolveFilter`,
        [WITH_DIRECTIVES]: `withDirectives`,
        [RENDER_LIST]: `renderList`,
        [RENDER_SLOT]: `renderSlot`,
        [CREATE_SLOTS]: `createSlots`,
        [TO_DISPLAY_STRING]: `toDisplayString`,
        [MERGE_PROPS]: `mergeProps`,
        [NORMALIZE_CLASS]: `normalizeClass`,
        [NORMALIZE_STYLE]: `normalizeStyle`,
        [NORMALIZE_PROPS]: `normalizeProps`,
        [GUARD_REACTIVE_PROPS]: `guardReactiveProps`,
        [TO_HANDLERS]: `toHandlers`,
        [CAMELIZE]: `camelize`,
        [CAPITALIZE]: `capitalize`,
        [TO_HANDLER_KEY]: `toHandlerKey`,
        [SET_BLOCK_TRACKING]: `setBlockTracking`,
        [PUSH_SCOPE_ID]: `pushScopeId`,
        [POP_SCOPE_ID]: `popScopeId`,
        [WITH_CTX]: `withCtx`,
        [UNREF]: `unref`,
        [IS_REF]: `isRef`,
        [WITH_MEMO]: `withMemo`,
        [IS_MEMO_SAME]: `isMemoSame`
      };
      locStub = {
        source: "",
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 1, column: 1, offset: 0 }
      };
      isStaticExp = (p3) => p3.type === 4 && p3.isStatic;
      isBuiltInType = (tag, expected) => tag === expected || tag === hyphenate(expected);
      nonIdentifierRE = /^\d|[^\$\w]/;
      isSimpleIdentifier = (name) => !nonIdentifierRE.test(name);
      validFirstIdentCharRE = /[A-Za-z_$\xA0-\uFFFF]/;
      validIdentCharRE = /[\.\?\w$\xA0-\uFFFF]/;
      whitespaceRE = /\s+[.[]\s*|\s*[.[]\s+/g;
      isMemberExpressionBrowser = (path) => {
        path = path.trim().replace(whitespaceRE, (s2) => s2.trim());
        let state = 0;
        let stateStack = [];
        let currentOpenBracketCount = 0;
        let currentOpenParensCount = 0;
        let currentStringType = null;
        for (let i2 = 0; i2 < path.length; i2++) {
          const char = path.charAt(i2);
          switch (state) {
            case 0:
              if (char === "[") {
                stateStack.push(state);
                state = 1;
                currentOpenBracketCount++;
              } else if (char === "(") {
                stateStack.push(state);
                state = 2;
                currentOpenParensCount++;
              } else if (!(i2 === 0 ? validFirstIdentCharRE : validIdentCharRE).test(char)) {
                return false;
              }
              break;
            case 1:
              if (char === `'` || char === `"` || char === "`") {
                stateStack.push(state);
                state = 3;
                currentStringType = char;
              } else if (char === `[`) {
                currentOpenBracketCount++;
              } else if (char === `]`) {
                if (!--currentOpenBracketCount) {
                  state = stateStack.pop();
                }
              }
              break;
            case 2:
              if (char === `'` || char === `"` || char === "`") {
                stateStack.push(state);
                state = 3;
                currentStringType = char;
              } else if (char === `(`) {
                currentOpenParensCount++;
              } else if (char === `)`) {
                if (i2 === path.length - 1) {
                  return false;
                }
                if (!--currentOpenParensCount) {
                  state = stateStack.pop();
                }
              }
              break;
            case 3:
              if (char === currentStringType) {
                state = stateStack.pop();
                currentStringType = null;
              }
              break;
          }
        }
        return !currentOpenBracketCount && !currentOpenParensCount;
      };
      isMemberExpression = isMemberExpressionBrowser;
      propsHelperSet = /* @__PURE__ */ new Set([NORMALIZE_PROPS, GUARD_REACTIVE_PROPS]);
      decodeRE = /&(gt|lt|amp|apos|quot);/g;
      decodeMap = {
        gt: ">",
        lt: "<",
        amp: "&",
        apos: "'",
        quot: '"'
      };
      defaultParserOptions = {
        delimiters: [`{{`, `}}`],
        getNamespace: () => 0,
        getTextMode: () => 0,
        isVoidTag: NO,
        isPreTag: NO,
        isCustomElement: NO,
        decodeEntities: (rawText) => rawText.replace(decodeRE, (_2, p1) => decodeMap[p1]),
        onError: defaultOnError,
        onWarn: defaultOnWarn,
        comments: true
      };
      isSpecialTemplateDirective = /* @__PURE__ */ makeMap(`if,else,else-if,for,slot`);
      allowHoistedHelperSet = /* @__PURE__ */ new Set([
        NORMALIZE_CLASS,
        NORMALIZE_STYLE,
        NORMALIZE_PROPS,
        GUARD_REACTIVE_PROPS
      ]);
      PURE_ANNOTATION = `/*#__PURE__*/`;
      aliasHelper = (s2) => `${helperNameMap[s2]}: _${helperNameMap[s2]}`;
      prohibitedKeywordRE = new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments,typeof,void".split(",").join("\\b|\\b") + "\\b");
      stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
      transformExpression = (node, context) => {
        if (node.type === 5) {
          node.content = processExpression(node.content, context);
        } else if (node.type === 1) {
          for (let i2 = 0; i2 < node.props.length; i2++) {
            const dir = node.props[i2];
            if (dir.type === 7 && dir.name !== "for") {
              const exp = dir.exp;
              const arg = dir.arg;
              if (exp && exp.type === 4 && !(dir.name === "on" && arg)) {
                dir.exp = processExpression(
                  exp,
                  context,
                  // slot args must be processed as function params
                  dir.name === "slot"
                );
              }
              if (arg && arg.type === 4 && !arg.isStatic) {
                dir.arg = processExpression(arg, context);
              }
            }
          }
        }
      };
      transformIf = createStructuralDirectiveTransform(/^(if|else|else-if)$/, (node, dir, context) => {
        return processIf(node, dir, context, (ifNode, branch, isRoot) => {
          const siblings = context.parent.children;
          let i2 = siblings.indexOf(ifNode);
          let key = 0;
          while (i2-- >= 0) {
            const sibling = siblings[i2];
            if (sibling && sibling.type === 9) {
              key += sibling.branches.length;
            }
          }
          return () => {
            if (isRoot) {
              ifNode.codegenNode = createCodegenNodeForBranch(branch, key, context);
            } else {
              const parentCondition = getParentCondition(ifNode.codegenNode);
              parentCondition.alternate = createCodegenNodeForBranch(branch, key + ifNode.branches.length - 1, context);
            }
          };
        });
      });
      transformFor = createStructuralDirectiveTransform("for", (node, dir, context) => {
        const { helper, removeHelper } = context;
        return processFor(node, dir, context, (forNode) => {
          const renderExp = createCallExpression(helper(RENDER_LIST), [
            forNode.source
          ]);
          const isTemplate = isTemplateNode(node);
          const memo = findDir(node, "memo");
          const keyProp = findProp(node, `key`);
          const keyExp = keyProp && (keyProp.type === 6 ? createSimpleExpression(keyProp.value.content, true) : keyProp.exp);
          const keyProperty = keyProp ? createObjectProperty(`key`, keyExp) : null;
          const isStableFragment = forNode.source.type === 4 && forNode.source.constType > 0;
          const fragmentFlag = isStableFragment ? 64 : keyProp ? 128 : 256;
          forNode.codegenNode = createVNodeCall(context, helper(FRAGMENT), void 0, renderExp, fragmentFlag + ` /* ${PatchFlagNames[fragmentFlag]} */`, void 0, void 0, true, !isStableFragment, false, node.loc);
          return () => {
            let childBlock;
            const { children } = forNode;
            if (isTemplate) {
              node.children.some((c2) => {
                if (c2.type === 1) {
                  const key = findProp(c2, "key");
                  if (key) {
                    context.onError(createCompilerError(33, key.loc));
                    return true;
                  }
                }
              });
            }
            const needFragmentWrapper = children.length !== 1 || children[0].type !== 1;
            const slotOutlet = isSlotOutlet(node) ? node : isTemplate && node.children.length === 1 && isSlotOutlet(node.children[0]) ? node.children[0] : null;
            if (slotOutlet) {
              childBlock = slotOutlet.codegenNode;
              if (isTemplate && keyProperty) {
                injectProp(childBlock, keyProperty, context);
              }
            } else if (needFragmentWrapper) {
              childBlock = createVNodeCall(
                context,
                helper(FRAGMENT),
                keyProperty ? createObjectExpression([keyProperty]) : void 0,
                node.children,
                64 + ` /* ${PatchFlagNames[
                  64
                  /* PatchFlags.STABLE_FRAGMENT */
                ]} */`,
                void 0,
                void 0,
                true,
                void 0,
                false
                /* isComponent */
              );
            } else {
              childBlock = children[0].codegenNode;
              if (isTemplate && keyProperty) {
                injectProp(childBlock, keyProperty, context);
              }
              if (childBlock.isBlock !== !isStableFragment) {
                if (childBlock.isBlock) {
                  removeHelper(OPEN_BLOCK);
                  removeHelper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
                } else {
                  removeHelper(getVNodeHelper(context.inSSR, childBlock.isComponent));
                }
              }
              childBlock.isBlock = !isStableFragment;
              if (childBlock.isBlock) {
                helper(OPEN_BLOCK);
                helper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
              } else {
                helper(getVNodeHelper(context.inSSR, childBlock.isComponent));
              }
            }
            if (memo) {
              const loop = createFunctionExpression(createForLoopParams(forNode.parseResult, [
                createSimpleExpression(`_cached`)
              ]));
              loop.body = createBlockStatement([
                createCompoundExpression([`const _memo = (`, memo.exp, `)`]),
                createCompoundExpression([
                  `if (_cached`,
                  ...keyExp ? [` && _cached.key === `, keyExp] : [],
                  ` && ${context.helperString(IS_MEMO_SAME)}(_cached, _memo)) return _cached`
                ]),
                createCompoundExpression([`const _item = `, childBlock]),
                createSimpleExpression(`_item.memo = _memo`),
                createSimpleExpression(`return _item`)
              ]);
              renderExp.arguments.push(loop, createSimpleExpression(`_cache`), createSimpleExpression(String(context.cached++)));
            } else {
              renderExp.arguments.push(createFunctionExpression(
                createForLoopParams(forNode.parseResult),
                childBlock,
                true
                /* force newline */
              ));
            }
          };
        });
      });
      forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
      forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
      stripParensRE = /^\(|\)$/g;
      defaultFallback = createSimpleExpression(`undefined`, false);
      trackSlotScopes = (node, context) => {
        if (node.type === 1 && (node.tagType === 1 || node.tagType === 3)) {
          const vSlot = findDir(node, "slot");
          if (vSlot) {
            vSlot.exp;
            context.scopes.vSlot++;
            return () => {
              context.scopes.vSlot--;
            };
          }
        }
      };
      buildClientSlotFn = (props, children, loc) => createFunctionExpression(props, children, false, true, children.length ? children[0].loc : loc);
      directiveImportMap = /* @__PURE__ */ new WeakMap();
      transformElement = (node, context) => {
        return function postTransformElement() {
          node = context.currentNode;
          if (!(node.type === 1 && (node.tagType === 0 || node.tagType === 1))) {
            return;
          }
          const { tag, props } = node;
          const isComponent2 = node.tagType === 1;
          let vnodeTag = isComponent2 ? resolveComponentType(node, context) : `"${tag}"`;
          const isDynamicComponent = isObject(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
          let vnodeProps;
          let vnodeChildren;
          let vnodePatchFlag;
          let patchFlag = 0;
          let vnodeDynamicProps;
          let dynamicPropNames;
          let vnodeDirectives;
          let shouldUseBlock = (
            // dynamic component may resolve to plain elements
            isDynamicComponent || vnodeTag === TELEPORT || vnodeTag === SUSPENSE || !isComponent2 && // <svg> and <foreignObject> must be forced into blocks so that block
            // updates inside get proper isSVG flag at runtime. (#639, #643)
            // This is technically web-specific, but splitting the logic out of core
            // leads to too much unnecessary complexity.
            (tag === "svg" || tag === "foreignObject")
          );
          if (props.length > 0) {
            const propsBuildResult = buildProps(node, context, void 0, isComponent2, isDynamicComponent);
            vnodeProps = propsBuildResult.props;
            patchFlag = propsBuildResult.patchFlag;
            dynamicPropNames = propsBuildResult.dynamicPropNames;
            const directives = propsBuildResult.directives;
            vnodeDirectives = directives && directives.length ? createArrayExpression(directives.map((dir) => buildDirectiveArgs(dir, context))) : void 0;
            if (propsBuildResult.shouldUseBlock) {
              shouldUseBlock = true;
            }
          }
          if (node.children.length > 0) {
            if (vnodeTag === KEEP_ALIVE) {
              shouldUseBlock = true;
              patchFlag |= 1024;
              if (node.children.length > 1) {
                context.onError(createCompilerError(45, {
                  start: node.children[0].loc.start,
                  end: node.children[node.children.length - 1].loc.end,
                  source: ""
                }));
              }
            }
            const shouldBuildAsSlots = isComponent2 && // Teleport is not a real component and has dedicated runtime handling
            vnodeTag !== TELEPORT && // explained above.
            vnodeTag !== KEEP_ALIVE;
            if (shouldBuildAsSlots) {
              const { slots, hasDynamicSlots } = buildSlots(node, context);
              vnodeChildren = slots;
              if (hasDynamicSlots) {
                patchFlag |= 1024;
              }
            } else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
              const child = node.children[0];
              const type = child.type;
              const hasDynamicTextChild = type === 5 || type === 8;
              if (hasDynamicTextChild && getConstantType(child, context) === 0) {
                patchFlag |= 1;
              }
              if (hasDynamicTextChild || type === 2) {
                vnodeChildren = child;
              } else {
                vnodeChildren = node.children;
              }
            } else {
              vnodeChildren = node.children;
            }
          }
          if (patchFlag !== 0) {
            {
              if (patchFlag < 0) {
                vnodePatchFlag = patchFlag + ` /* ${PatchFlagNames[patchFlag]} */`;
              } else {
                const flagNames = Object.keys(PatchFlagNames).map(Number).filter((n2) => n2 > 0 && patchFlag & n2).map((n2) => PatchFlagNames[n2]).join(`, `);
                vnodePatchFlag = patchFlag + ` /* ${flagNames} */`;
              }
            }
            if (dynamicPropNames && dynamicPropNames.length) {
              vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
            }
          }
          node.codegenNode = createVNodeCall(context, vnodeTag, vnodeProps, vnodeChildren, vnodePatchFlag, vnodeDynamicProps, vnodeDirectives, !!shouldUseBlock, false, isComponent2, node.loc);
        };
      };
      transformSlotOutlet = (node, context) => {
        if (isSlotOutlet(node)) {
          const { children, loc } = node;
          const { slotName, slotProps } = processSlotOutlet(node, context);
          const slotArgs = [
            context.prefixIdentifiers ? `_ctx.$slots` : `$slots`,
            slotName,
            "{}",
            "undefined",
            "true"
          ];
          let expectedLen = 2;
          if (slotProps) {
            slotArgs[2] = slotProps;
            expectedLen = 3;
          }
          if (children.length) {
            slotArgs[3] = createFunctionExpression([], children, false, false, loc);
            expectedLen = 4;
          }
          if (context.scopeId && !context.slotted) {
            expectedLen = 5;
          }
          slotArgs.splice(expectedLen);
          node.codegenNode = createCallExpression(context.helper(RENDER_SLOT), slotArgs, loc);
        }
      };
      fnExpRE = /^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/;
      transformOn = (dir, node, context, augmentor) => {
        const { loc, modifiers, arg } = dir;
        if (!dir.exp && !modifiers.length) {
          context.onError(createCompilerError(35, loc));
        }
        let eventName;
        if (arg.type === 4) {
          if (arg.isStatic) {
            let rawName = arg.content;
            if (rawName.startsWith("vue:")) {
              rawName = `vnode-${rawName.slice(4)}`;
            }
            const eventString = node.tagType === 1 || rawName.startsWith("vnode") || !/[A-Z]/.test(rawName) ? (
              // for component and vnode lifecycle event listeners, auto convert
              // it to camelCase. See issue #2249
              toHandlerKey(camelize(rawName))
            ) : (
              // preserve case for plain element listeners that have uppercase
              // letters, as these may be custom elements' custom events
              `on:${rawName}`
            );
            eventName = createSimpleExpression(eventString, true, arg.loc);
          } else {
            eventName = createCompoundExpression([
              `${context.helperString(TO_HANDLER_KEY)}(`,
              arg,
              `)`
            ]);
          }
        } else {
          eventName = arg;
          eventName.children.unshift(`${context.helperString(TO_HANDLER_KEY)}(`);
          eventName.children.push(`)`);
        }
        let exp = dir.exp;
        if (exp && !exp.content.trim()) {
          exp = void 0;
        }
        let shouldCache = context.cacheHandlers && !exp && !context.inVOnce;
        if (exp) {
          const isMemberExp = isMemberExpression(exp.content);
          const isInlineStatement = !(isMemberExp || fnExpRE.test(exp.content));
          const hasMultipleStatements = exp.content.includes(`;`);
          {
            validateBrowserExpression(exp, context, false, hasMultipleStatements);
          }
          if (isInlineStatement || shouldCache && isMemberExp) {
            exp = createCompoundExpression([
              `${isInlineStatement ? `$event` : `${``}(...args)`} => ${hasMultipleStatements ? `{` : `(`}`,
              exp,
              hasMultipleStatements ? `}` : `)`
            ]);
          }
        }
        let ret = {
          props: [
            createObjectProperty(eventName, exp || createSimpleExpression(`() => {}`, false, loc))
          ]
        };
        if (augmentor) {
          ret = augmentor(ret);
        }
        if (shouldCache) {
          ret.props[0].value = context.cache(ret.props[0].value);
        }
        ret.props.forEach((p3) => p3.key.isHandlerKey = true);
        return ret;
      };
      transformBind = (dir, _node, context) => {
        const { exp, modifiers, loc } = dir;
        const arg = dir.arg;
        if (arg.type !== 4) {
          arg.children.unshift(`(`);
          arg.children.push(`) || ""`);
        } else if (!arg.isStatic) {
          arg.content = `${arg.content} || ""`;
        }
        if (modifiers.includes("camel")) {
          if (arg.type === 4) {
            if (arg.isStatic) {
              arg.content = camelize(arg.content);
            } else {
              arg.content = `${context.helperString(CAMELIZE)}(${arg.content})`;
            }
          } else {
            arg.children.unshift(`${context.helperString(CAMELIZE)}(`);
            arg.children.push(`)`);
          }
        }
        if (!context.inSSR) {
          if (modifiers.includes("prop")) {
            injectPrefix(arg, ".");
          }
          if (modifiers.includes("attr")) {
            injectPrefix(arg, "^");
          }
        }
        if (!exp || exp.type === 4 && !exp.content.trim()) {
          context.onError(createCompilerError(34, loc));
          return {
            props: [createObjectProperty(arg, createSimpleExpression("", true, loc))]
          };
        }
        return {
          props: [createObjectProperty(arg, exp)]
        };
      };
      injectPrefix = (arg, prefix) => {
        if (arg.type === 4) {
          if (arg.isStatic) {
            arg.content = prefix + arg.content;
          } else {
            arg.content = `\`${prefix}\${${arg.content}}\``;
          }
        } else {
          arg.children.unshift(`'${prefix}' + (`);
          arg.children.push(`)`);
        }
      };
      transformText = (node, context) => {
        if (node.type === 0 || node.type === 1 || node.type === 11 || node.type === 10) {
          return () => {
            const children = node.children;
            let currentContainer = void 0;
            let hasText = false;
            for (let i2 = 0; i2 < children.length; i2++) {
              const child = children[i2];
              if (isText(child)) {
                hasText = true;
                for (let j2 = i2 + 1; j2 < children.length; j2++) {
                  const next = children[j2];
                  if (isText(next)) {
                    if (!currentContainer) {
                      currentContainer = children[i2] = createCompoundExpression([child], child.loc);
                    }
                    currentContainer.children.push(` + `, next);
                    children.splice(j2, 1);
                    j2--;
                  } else {
                    currentContainer = void 0;
                    break;
                  }
                }
              }
            }
            if (!hasText || // if this is a plain element with a single text child, leave it
            // as-is since the runtime has dedicated fast path for this by directly
            // setting textContent of the element.
            // for component root it's always normalized anyway.
            children.length === 1 && (node.type === 0 || node.type === 1 && node.tagType === 0 && // #3756
            // custom directives can potentially add DOM elements arbitrarily,
            // we need to avoid setting textContent of the element at runtime
            // to avoid accidentally overwriting the DOM elements added
            // by the user through custom directives.
            !node.props.find((p3) => p3.type === 7 && !context.directiveTransforms[p3.name]) && // in compat mode, <template> tags with no special directives
            // will be rendered as a fragment so its children must be
            // converted into vnodes.
            true)) {
              return;
            }
            for (let i2 = 0; i2 < children.length; i2++) {
              const child = children[i2];
              if (isText(child) || child.type === 8) {
                const callArgs = [];
                if (child.type !== 2 || child.content !== " ") {
                  callArgs.push(child);
                }
                if (!context.ssr && getConstantType(child, context) === 0) {
                  callArgs.push(1 + ` /* ${PatchFlagNames[
                    1
                    /* PatchFlags.TEXT */
                  ]} */`);
                }
                children[i2] = {
                  type: 12,
                  content: child,
                  loc: child.loc,
                  codegenNode: createCallExpression(context.helper(CREATE_TEXT), callArgs)
                };
              }
            }
          };
        }
      };
      seen = /* @__PURE__ */ new WeakSet();
      transformOnce = (node, context) => {
        if (node.type === 1 && findDir(node, "once", true)) {
          if (seen.has(node) || context.inVOnce) {
            return;
          }
          seen.add(node);
          context.inVOnce = true;
          context.helper(SET_BLOCK_TRACKING);
          return () => {
            context.inVOnce = false;
            const cur = context.currentNode;
            if (cur.codegenNode) {
              cur.codegenNode = context.cache(
                cur.codegenNode,
                true
                /* isVNode */
              );
            }
          };
        }
      };
      transformModel = (dir, node, context) => {
        const { exp, arg } = dir;
        if (!exp) {
          context.onError(createCompilerError(41, dir.loc));
          return createTransformProps();
        }
        const rawExp = exp.loc.source;
        const expString = exp.type === 4 ? exp.content : rawExp;
        context.bindingMetadata[rawExp];
        const maybeRef = false;
        if (!expString.trim() || !isMemberExpression(expString) && !maybeRef) {
          context.onError(createCompilerError(42, exp.loc));
          return createTransformProps();
        }
        const propName = arg ? arg : createSimpleExpression("modelValue", true);
        const eventName = arg ? isStaticExp(arg) ? `onUpdate:${arg.content}` : createCompoundExpression(['"onUpdate:" + ', arg]) : `onUpdate:modelValue`;
        let assignmentExp;
        const eventArg = context.isTS ? `($event: any)` : `$event`;
        {
          assignmentExp = createCompoundExpression([
            `${eventArg} => ((`,
            exp,
            `) = $event)`
          ]);
        }
        const props = [
          // modelValue: foo
          createObjectProperty(propName, dir.exp),
          // "onUpdate:modelValue": $event => (foo = $event)
          createObjectProperty(eventName, assignmentExp)
        ];
        if (dir.modifiers.length && node.tagType === 1) {
          const modifiers = dir.modifiers.map((m2) => (isSimpleIdentifier(m2) ? m2 : JSON.stringify(m2)) + `: true`).join(`, `);
          const modifiersKey = arg ? isStaticExp(arg) ? `${arg.content}Modifiers` : createCompoundExpression([arg, ' + "Modifiers"']) : `modelModifiers`;
          props.push(createObjectProperty(modifiersKey, createSimpleExpression(
            `{ ${modifiers} }`,
            false,
            dir.loc,
            2
            /* ConstantTypes.CAN_HOIST */
          )));
        }
        return createTransformProps(props);
      };
      seen$1 = /* @__PURE__ */ new WeakSet();
      transformMemo = (node, context) => {
        if (node.type === 1) {
          const dir = findDir(node, "memo");
          if (!dir || seen$1.has(node)) {
            return;
          }
          seen$1.add(node);
          return () => {
            const codegenNode = node.codegenNode || context.currentNode.codegenNode;
            if (codegenNode && codegenNode.type === 13) {
              if (node.tagType !== 1) {
                makeBlock(codegenNode, context);
              }
              node.codegenNode = createCallExpression(context.helper(WITH_MEMO), [
                dir.exp,
                createFunctionExpression(void 0, codegenNode),
                `_cache`,
                String(context.cached++)
              ]);
            }
          };
        }
      };
      noopDirectiveTransform = () => ({ props: [] });
      V_MODEL_RADIO = Symbol(`vModelRadio`);
      V_MODEL_CHECKBOX = Symbol(`vModelCheckbox`);
      V_MODEL_TEXT = Symbol(`vModelText`);
      V_MODEL_SELECT = Symbol(`vModelSelect`);
      V_MODEL_DYNAMIC = Symbol(`vModelDynamic`);
      V_ON_WITH_MODIFIERS = Symbol(`vOnModifiersGuard`);
      V_ON_WITH_KEYS = Symbol(`vOnKeysGuard`);
      V_SHOW = Symbol(`vShow`);
      TRANSITION$1 = Symbol(`Transition`);
      TRANSITION_GROUP = Symbol(`TransitionGroup`);
      registerRuntimeHelpers({
        [V_MODEL_RADIO]: `vModelRadio`,
        [V_MODEL_CHECKBOX]: `vModelCheckbox`,
        [V_MODEL_TEXT]: `vModelText`,
        [V_MODEL_SELECT]: `vModelSelect`,
        [V_MODEL_DYNAMIC]: `vModelDynamic`,
        [V_ON_WITH_MODIFIERS]: `withModifiers`,
        [V_ON_WITH_KEYS]: `withKeys`,
        [V_SHOW]: `vShow`,
        [TRANSITION$1]: `Transition`,
        [TRANSITION_GROUP]: `TransitionGroup`
      });
      isRawTextContainer = /* @__PURE__ */ makeMap("style,iframe,script,noscript", true);
      parserOptions = {
        isVoidTag,
        isNativeTag: (tag) => isHTMLTag(tag) || isSVGTag(tag),
        isPreTag: (tag) => tag === "pre",
        decodeEntities: decodeHtmlBrowser,
        isBuiltInComponent: (tag) => {
          if (isBuiltInType(tag, `Transition`)) {
            return TRANSITION$1;
          } else if (isBuiltInType(tag, `TransitionGroup`)) {
            return TRANSITION_GROUP;
          }
        },
        // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
        getNamespace(tag, parent) {
          let ns2 = parent ? parent.ns : 0;
          if (parent && ns2 === 2) {
            if (parent.tag === "annotation-xml") {
              if (tag === "svg") {
                return 1;
              }
              if (parent.props.some((a2) => a2.type === 6 && a2.name === "encoding" && a2.value != null && (a2.value.content === "text/html" || a2.value.content === "application/xhtml+xml"))) {
                ns2 = 0;
              }
            } else if (/^m(?:[ions]|text)$/.test(parent.tag) && tag !== "mglyph" && tag !== "malignmark") {
              ns2 = 0;
            }
          } else if (parent && ns2 === 1) {
            if (parent.tag === "foreignObject" || parent.tag === "desc" || parent.tag === "title") {
              ns2 = 0;
            }
          }
          if (ns2 === 0) {
            if (tag === "svg") {
              return 1;
            }
            if (tag === "math") {
              return 2;
            }
          }
          return ns2;
        },
        // https://html.spec.whatwg.org/multipage/parsing.html#parsing-html-fragments
        getTextMode({ tag, ns: ns2 }) {
          if (ns2 === 0) {
            if (tag === "textarea" || tag === "title") {
              return 1;
            }
            if (isRawTextContainer(tag)) {
              return 2;
            }
          }
          return 0;
        }
      };
      transformStyle = (node) => {
        if (node.type === 1) {
          node.props.forEach((p3, i2) => {
            if (p3.type === 6 && p3.name === "style" && p3.value) {
              node.props[i2] = {
                type: 7,
                name: `bind`,
                arg: createSimpleExpression(`style`, true, p3.loc),
                exp: parseInlineCSS(p3.value.content, p3.loc),
                modifiers: [],
                loc: p3.loc
              };
            }
          });
        }
      };
      parseInlineCSS = (cssText, loc) => {
        const normalized = parseStringStyle(cssText);
        return createSimpleExpression(
          JSON.stringify(normalized),
          false,
          loc,
          3
          /* ConstantTypes.CAN_STRINGIFY */
        );
      };
      DOMErrorMessages = {
        [
          50
          /* DOMErrorCodes.X_V_HTML_NO_EXPRESSION */
        ]: `v-html is missing expression.`,
        [
          51
          /* DOMErrorCodes.X_V_HTML_WITH_CHILDREN */
        ]: `v-html will override element children.`,
        [
          52
          /* DOMErrorCodes.X_V_TEXT_NO_EXPRESSION */
        ]: `v-text is missing expression.`,
        [
          53
          /* DOMErrorCodes.X_V_TEXT_WITH_CHILDREN */
        ]: `v-text will override element children.`,
        [
          54
          /* DOMErrorCodes.X_V_MODEL_ON_INVALID_ELEMENT */
        ]: `v-model can only be used on <input>, <textarea> and <select> elements.`,
        [
          55
          /* DOMErrorCodes.X_V_MODEL_ARG_ON_ELEMENT */
        ]: `v-model argument is not supported on plain elements.`,
        [
          56
          /* DOMErrorCodes.X_V_MODEL_ON_FILE_INPUT_ELEMENT */
        ]: `v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.`,
        [
          57
          /* DOMErrorCodes.X_V_MODEL_UNNECESSARY_VALUE */
        ]: `Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.`,
        [
          58
          /* DOMErrorCodes.X_V_SHOW_NO_EXPRESSION */
        ]: `v-show is missing expression.`,
        [
          59
          /* DOMErrorCodes.X_TRANSITION_INVALID_CHILDREN */
        ]: `<Transition> expects exactly one child element or component.`,
        [
          60
          /* DOMErrorCodes.X_IGNORED_SIDE_EFFECT_TAG */
        ]: `Tags with side effect (<script> and <style>) are ignored in client component templates.`
      };
      transformVHtml = (dir, node, context) => {
        const { exp, loc } = dir;
        if (!exp) {
          context.onError(createDOMCompilerError(50, loc));
        }
        if (node.children.length) {
          context.onError(createDOMCompilerError(51, loc));
          node.children.length = 0;
        }
        return {
          props: [
            createObjectProperty(createSimpleExpression(`innerHTML`, true, loc), exp || createSimpleExpression("", true))
          ]
        };
      };
      transformVText = (dir, node, context) => {
        const { exp, loc } = dir;
        if (!exp) {
          context.onError(createDOMCompilerError(52, loc));
        }
        if (node.children.length) {
          context.onError(createDOMCompilerError(53, loc));
          node.children.length = 0;
        }
        return {
          props: [
            createObjectProperty(createSimpleExpression(`textContent`, true), exp ? getConstantType(exp, context) > 0 ? exp : createCallExpression(context.helperString(TO_DISPLAY_STRING), [exp], loc) : createSimpleExpression("", true))
          ]
        };
      };
      transformModel$1 = (dir, node, context) => {
        const baseResult = transformModel(dir, node, context);
        if (!baseResult.props.length || node.tagType === 1) {
          return baseResult;
        }
        if (dir.arg) {
          context.onError(createDOMCompilerError(55, dir.arg.loc));
        }
        function checkDuplicatedValue() {
          const value = findProp(node, "value");
          if (value) {
            context.onError(createDOMCompilerError(57, value.loc));
          }
        }
        const { tag } = node;
        const isCustomElement = context.isCustomElement(tag);
        if (tag === "input" || tag === "textarea" || tag === "select" || isCustomElement) {
          let directiveToUse = V_MODEL_TEXT;
          let isInvalidType = false;
          if (tag === "input" || isCustomElement) {
            const type = findProp(node, `type`);
            if (type) {
              if (type.type === 7) {
                directiveToUse = V_MODEL_DYNAMIC;
              } else if (type.value) {
                switch (type.value.content) {
                  case "radio":
                    directiveToUse = V_MODEL_RADIO;
                    break;
                  case "checkbox":
                    directiveToUse = V_MODEL_CHECKBOX;
                    break;
                  case "file":
                    isInvalidType = true;
                    context.onError(createDOMCompilerError(56, dir.loc));
                    break;
                  default:
                    checkDuplicatedValue();
                    break;
                }
              }
            } else if (hasDynamicKeyVBind(node)) {
              directiveToUse = V_MODEL_DYNAMIC;
            } else {
              checkDuplicatedValue();
            }
          } else if (tag === "select") {
            directiveToUse = V_MODEL_SELECT;
          } else {
            checkDuplicatedValue();
          }
          if (!isInvalidType) {
            baseResult.needRuntime = context.helper(directiveToUse);
          }
        } else {
          context.onError(createDOMCompilerError(54, dir.loc));
        }
        baseResult.props = baseResult.props.filter((p3) => !(p3.key.type === 4 && p3.key.content === "modelValue"));
        return baseResult;
      };
      isEventOptionModifier = /* @__PURE__ */ makeMap(`passive,once,capture`);
      isNonKeyModifier = /* @__PURE__ */ makeMap(
        // event propagation management
        `stop,prevent,self,ctrl,shift,alt,meta,exact,middle`
      );
      maybeKeyModifier = /* @__PURE__ */ makeMap("left,right");
      isKeyboardEvent = /* @__PURE__ */ makeMap(`onkeyup,onkeydown,onkeypress`, true);
      resolveModifiers = (key, modifiers, context, loc) => {
        const keyModifiers = [];
        const nonKeyModifiers = [];
        const eventOptionModifiers = [];
        for (let i2 = 0; i2 < modifiers.length; i2++) {
          const modifier = modifiers[i2];
          if (isEventOptionModifier(modifier)) {
            eventOptionModifiers.push(modifier);
          } else {
            if (maybeKeyModifier(modifier)) {
              if (isStaticExp(key)) {
                if (isKeyboardEvent(key.content)) {
                  keyModifiers.push(modifier);
                } else {
                  nonKeyModifiers.push(modifier);
                }
              } else {
                keyModifiers.push(modifier);
                nonKeyModifiers.push(modifier);
              }
            } else {
              if (isNonKeyModifier(modifier)) {
                nonKeyModifiers.push(modifier);
              } else {
                keyModifiers.push(modifier);
              }
            }
          }
        }
        return {
          keyModifiers,
          nonKeyModifiers,
          eventOptionModifiers
        };
      };
      transformClick = (key, event) => {
        const isStaticClick = isStaticExp(key) && key.content.toLowerCase() === "onclick";
        return isStaticClick ? createSimpleExpression(event, true) : key.type !== 4 ? createCompoundExpression([
          `(`,
          key,
          `) === "onClick" ? "${event}" : (`,
          key,
          `)`
        ]) : key;
      };
      transformOn$1 = (dir, node, context) => {
        return transformOn(dir, node, context, (baseResult) => {
          const { modifiers } = dir;
          if (!modifiers.length)
            return baseResult;
          let { key, value: handlerExp } = baseResult.props[0];
          const { keyModifiers, nonKeyModifiers, eventOptionModifiers } = resolveModifiers(key, modifiers, context, dir.loc);
          if (nonKeyModifiers.includes("right")) {
            key = transformClick(key, `onContextmenu`);
          }
          if (nonKeyModifiers.includes("middle")) {
            key = transformClick(key, `onMouseup`);
          }
          if (nonKeyModifiers.length) {
            handlerExp = createCallExpression(context.helper(V_ON_WITH_MODIFIERS), [
              handlerExp,
              JSON.stringify(nonKeyModifiers)
            ]);
          }
          if (keyModifiers.length && // if event name is dynamic, always wrap with keys guard
          (!isStaticExp(key) || isKeyboardEvent(key.content))) {
            handlerExp = createCallExpression(context.helper(V_ON_WITH_KEYS), [
              handlerExp,
              JSON.stringify(keyModifiers)
            ]);
          }
          if (eventOptionModifiers.length) {
            const modifierPostfix = eventOptionModifiers.map(capitalize).join("");
            key = isStaticExp(key) ? createSimpleExpression(`${key.content}${modifierPostfix}`, true) : createCompoundExpression([`(`, key, `) + "${modifierPostfix}"`]);
          }
          return {
            props: [createObjectProperty(key, handlerExp)]
          };
        });
      };
      transformShow = (dir, node, context) => {
        const { exp, loc } = dir;
        if (!exp) {
          context.onError(createDOMCompilerError(58, loc));
        }
        return {
          props: [],
          needRuntime: context.helper(V_SHOW)
        };
      };
      transformTransition = (node, context) => {
        if (node.type === 1 && node.tagType === 1) {
          const component = context.isBuiltInComponent(node.tag);
          if (component === TRANSITION$1) {
            return () => {
              if (!node.children.length) {
                return;
              }
              if (hasMultipleChildren(node)) {
                context.onError(createDOMCompilerError(59, {
                  start: node.children[0].loc.start,
                  end: node.children[node.children.length - 1].loc.end,
                  source: ""
                }));
              }
              const child = node.children[0];
              if (child.type === 1) {
                for (const p3 of child.props) {
                  if (p3.type === 7 && p3.name === "show") {
                    node.props.push({
                      type: 6,
                      name: "persisted",
                      value: void 0,
                      loc: node.loc
                    });
                  }
                }
              }
            };
          }
        }
      };
      ignoreSideEffectTags = (node, context) => {
        if (node.type === 1 && node.tagType === 0 && (node.tag === "script" || node.tag === "style")) {
          context.onError(createDOMCompilerError(60, node.loc));
          context.removeNode();
        }
      };
      DOMNodeTransforms = [
        transformStyle,
        ...[transformTransition]
      ];
      DOMDirectiveTransforms = {
        cloak: noopDirectiveTransform,
        html: transformVHtml,
        text: transformVText,
        model: transformModel$1,
        on: transformOn$1,
        show: transformShow
      };
      {
        initDev();
      }
      compileCache = /* @__PURE__ */ Object.create(null);
      registerRuntimeCompiler(compileToFunction);
    }
  });

  // ns-hugo:/src/assets/scripts/home.js
  function home_default() {
    const cardColor = getComputedStyle(document.querySelector("header")).backgroundColor;
    const mainColor = getComputedStyle(document.querySelector("main")).backgroundColor;
    const renderThemeColor = () => {
      let themeColor = mainColor;
      if (document.querySelector("main").getBoundingClientRect().top > 0) {
        themeColor = cardColor;
      }
      document.querySelector('meta[name="theme-color"]').setAttribute("content", themeColor);
    };
    const renderPage = () => {
      if (document.querySelector("main").getBoundingClientRect().top > 0) {
        document.querySelector("header").classList.remove("show-footer");
      } else {
        document.querySelector("header").classList.add("show-footer");
      }
    };
    window.addEventListener("scroll", renderThemeColor);
    window.addEventListener("scroll", renderPage);
    renderPage();
    renderThemeColor();
  }

  // ns-hugo:/src/assets/scripts/components/lightbox.js
  var lightbox_default = {
    props: {
      src: String,
      isVideo: Boolean,
      alt: String
    },
    methods: {
      keyHandler(evt) {
        if (evt.key === "Escape") {
          this.$emit("close");
        }
      }
    },
    mounted() {
      document.addEventListener("keydown", this.keyHandler);
      document.body.classList.add("frozen");
    },
    unmounted() {
      document.removeEventListener("keydown", this.keyHandler);
      document.body.classList.remove("frozen");
    },
    template: (
      /* html */
      `
    <div class="lightbox">
      <button class="lightbox__close" @click="$emit('close')">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="sprite--close"
          >
          <line x1="1" y1="1" x2="23" y2="23" vector-effect="non-scaling-stroke" />
          <line x1="1" y1="23" x2="23" y2="1" vector-effect="non-scaling-stroke" />
        </svg>
      </button>
      <slot></slot>
    </div>
  `
    )
  };

  // ns-hugo:/src/assets/scripts/components/image.js
  var image_default = {
    props: {
      isScreenshot: Boolean,
      isVideo: Boolean,
      src: String,
      mat: String,
      alt: { type: String, default: "" },
      height: { type: Number, default: 0 },
      width: { type: Number, default: 0 }
    },
    template: (
      /* html */
      `
    <template v-if="isScreenshot">
      <div class="image-mat" :style="{'--mat-color': mat}">
        <video v-if="isVideo" :src="src" :title="alt" autoplay muted loop playsinline></video>
        <img v-else loading="lazy" :width="width" :height="height" :src="src" :alt="alt"/>
      </div>
    </template>
    <template v-else>
      <video v-if="isVideo" :src="src" :title="alt" autoplay muted loop playsinline></video>
      <img v-else loading="lazy" :width="width" :height="height" :src="src" :alt="alt"/>
    </template>
  `
    )
  };

  // ns-hugo:/src/assets/scripts/components/single-figure.js
  var single_figure_default = {
    props: {
      isVideo: {
        type: String,
        default: "false"
      },
      additionalClasses: {
        type: String,
        default: ""
      },
      isScreenshot: {
        type: String,
        default: "false"
      },
      src: {
        type: String,
        default: ""
      },
      width: {
        type: String,
        default: "0"
      },
      height: {
        type: String,
        default: "0"
      },
      title: {
        type: String,
        default: ""
      },
      caption: {
        type: String,
        default: ""
      },
      mat: {
        type: String,
        default: ""
      },
      disableInteraction: {
        type: String,
        default: "false"
      }
    },
    computed: {
      isScreenshotBool: function() {
        return this.isScreenshot === "true";
      },
      isVideoBool: function() {
        return this.isVideo === "true";
      },
      disableInteractionBool: function() {
        return this.disableInteraction === "true";
      },
      widthNum: function() {
        return parseInt(this.width);
      },
      heightNum: function() {
        return parseInt(this.height);
      }
    },
    components: {
      Lightbox: lightbox_default,
      ImageComponent: image_default
    },
    mounted() {
    },
    data() {
      return {
        showLightbox: false
      };
    },
    template: (
      /* html */
      `
    <figure>
      <button v-if="!disableInteractionBool" @click="showLightbox = true">
        <image-component
          :class="additionalClasses"
          :src="src"
          :mat="mat"
          :height="heightNum"
          :width="widthNum"
          :alt="title"
          :is-screenshot="isScreenshotBool"
          :is-video="isVideoBool"
        />
      </button>
      <image-component
        v-else
        :class="additionalClasses"
        :src="src"
        :mat="mat"
        :height="heightNum"
        :width="widthNum"
        :alt="title"
        :is-screenshot="isScreenshotBool"
        :is-video="isVideoBool"
        />
      <figcaption v-if="caption.length > 0">
        <p v-html="caption" />
      </figcaption>
    </figure>
    <lightbox 
      v-if="showLightbox && !disableInteractionBool"
      @close="showLightbox = false" 
      >
      <image-component
        :class="additionalClasses"
        :src="src"
        :mat="mat"
        :height="heightNum"
        :width="widthNum"
        :alt="title"
        :is-screenshot="isScreenshotBool"
        :is-video="isVideoBool"
      /> 
    </lightbox>
  `
    )
  };

  // <stdin>
  var Vue;
  document.addEventListener("DOMContentLoaded", async () => {
    if (document.body.dataSet?.production === "true") {
      Vue = await Promise.resolve().then(() => (init_vue_esm_browser_prod(), vue_esm_browser_prod_exports));
    } else {
      Vue = await Promise.resolve().then(() => (init_vue_esm_browser(), vue_esm_browser_exports));
    }
    let components = [
      { name: "single-figure", component: single_figure_default }
    ];
    const app = Vue.createApp({});
    app.config.compilerOptions.isCustomElement = (tag) => tag === "nobr";
    components.forEach((c2) => {
      app.component(c2.name, c2.component);
    });
    app.mount("body");
  });
  document.addEventListener("DOMContentLoaded", () => {
    if (document.body.classList.contains("home")) {
      home_default();
    }
  });
})();
