function Tt(t) {
  return typeof t == 'number';
}
function Et(t) {
  return typeof t == 'string';
}
function gt(t) {
  return typeof t == 'boolean';
}
function zt(t) {
  return Object.prototype.toString.call(t) === '[object Object]';
}
function P(t) {
  return Math.abs(t);
}
function Dt(t) {
  return Math.sign(t);
}
function ft(t, n) {
  return P(t - n);
}
function Yt(t, n) {
  if (t === 0 || n === 0 || P(t) <= P(n)) return 0;
  const r = ft(P(t), P(n));
  return P(r / t);
}
function at(t) {
  return lt(t).map(Number);
}
function k(t) {
  return t[pt(t)];
}
function pt(t) {
  return Math.max(0, t.length - 1);
}
function vt(t, n) {
  return n === pt(t);
}
function Bt(t, n = 0) {
  return Array.from(Array(t), (r, s) => n + s);
}
function lt(t) {
  return Object.keys(t);
}
function kt(t, n) {
  return [t, n].reduce(
    (r, s) => (
      lt(s).forEach((c) => {
        const o = r[c],
          e = s[c],
          f = zt(o) && zt(e);
        r[c] = f ? kt(o, e) : e;
      }),
      r
    ),
    {},
  );
}
function It(t, n) {
  return typeof n.MouseEvent < 'u' && t instanceof n.MouseEvent;
}
function _t(t, n) {
  const r = { start: s, center: c, end: o };
  function s() {
    return 0;
  }
  function c(i) {
    return o(i) / 2;
  }
  function o(i) {
    return n - i;
  }
  function e(i, u) {
    return Et(t) ? r[t](i) : t(n, i, u);
  }
  return { measure: e };
}
function dt() {
  let t = [];
  function n(c, o, e, f = { passive: !0 }) {
    let i;
    if ('addEventListener' in c)
      c.addEventListener(o, e, f), (i = () => c.removeEventListener(o, e, f));
    else {
      const u = c;
      u.addListener(e), (i = () => u.removeListener(e));
    }
    return t.push(i), s;
  }
  function r() {
    t = t.filter((c) => c());
  }
  const s = { add: n, clear: r };
  return s;
}
function Jt(t, n, r, s) {
  const c = dt(),
    o = 1e3 / 60;
  let e = null,
    f = 0,
    i = 0;
  function u() {
    c.add(t, 'visibilitychange', () => {
      t.hidden && d();
    });
  }
  function S() {
    x(), c.clear();
  }
  function l(g) {
    if (!i) return;
    e || (e = g);
    const a = g - e;
    for (e = g, f += a; f >= o; ) r(o), (f -= o);
    const h = f / o;
    s(h), i && n.requestAnimationFrame(l);
  }
  function m() {
    i || (i = n.requestAnimationFrame(l));
  }
  function x() {
    n.cancelAnimationFrame(i), (e = null), (f = 0), (i = 0);
  }
  function d() {
    (e = null), (f = 0);
  }
  return {
    init: u,
    destroy: S,
    start: m,
    stop: x,
    update: () => r(o),
    render: s,
  };
}
function Zt(t, n) {
  const r = n === 'rtl',
    s = t === 'y',
    c = s ? 'y' : 'x',
    o = s ? 'x' : 'y',
    e = !s && r ? -1 : 1,
    f = S(),
    i = l();
  function u(d) {
    const { height: p, width: g } = d;
    return s ? p : g;
  }
  function S() {
    return s ? 'top' : r ? 'right' : 'left';
  }
  function l() {
    return s ? 'bottom' : r ? 'left' : 'right';
  }
  function m(d) {
    return d * e;
  }
  return {
    scroll: c,
    cross: o,
    startEdge: f,
    endEdge: i,
    measureSize: u,
    direction: m,
  };
}
function nt(t = 0, n = 0) {
  const r = P(t - n);
  function s(u) {
    return u < t;
  }
  function c(u) {
    return u > n;
  }
  function o(u) {
    return s(u) || c(u);
  }
  function e(u) {
    return o(u) ? (s(u) ? t : n) : u;
  }
  function f(u) {
    return r ? u - r * Math.ceil((u - n) / r) : u;
  }
  return {
    length: r,
    max: n,
    min: t,
    constrain: e,
    reachedAny: o,
    reachedMax: c,
    reachedMin: s,
    removeOffset: f,
  };
}
function Gt(t, n, r) {
  const { constrain: s } = nt(0, t),
    c = t + 1;
  let o = e(n);
  function e(m) {
    return r ? P((c + m) % c) : s(m);
  }
  function f() {
    return o;
  }
  function i(m) {
    return (o = e(m)), l;
  }
  function u(m) {
    return S().set(f() + m);
  }
  function S() {
    return Gt(t, f(), r);
  }
  const l = { get: f, set: i, add: u, clone: S };
  return l;
}
function Wt(t, n, r, s, c, o, e, f, i, u, S, l, m, x, d, p, g, a, h) {
  const { cross: b, direction: D } = t,
    M = ['INPUT', 'SELECT', 'TEXTAREA'],
    v = { passive: !1 },
    L = dt(),
    E = dt(),
    I = nt(50, 225).constrain(x.measure(20)),
    C = { mouse: 300, touch: 400 },
    T = { mouse: 500, touch: 600 },
    V = d ? 43 : 25;
  let G = !1,
    H = 0,
    j = 0,
    W = !1,
    Y = !1,
    U = !1,
    $ = !1;
  function st(y) {
    if (!h) return;
    function A(N) {
      (gt(h) || h(y, N)) && it(N);
    }
    const O = n;
    L.add(O, 'dragstart', (N) => N.preventDefault(), v)
      .add(O, 'touchmove', () => {}, v)
      .add(O, 'touchend', () => {})
      .add(O, 'touchstart', A)
      .add(O, 'mousedown', A)
      .add(O, 'touchcancel', w)
      .add(O, 'contextmenu', w)
      .add(O, 'click', K, !0);
  }
  function R() {
    L.clear(), E.clear();
  }
  function et() {
    const y = $ ? r : n;
    E.add(y, 'touchmove', z, v)
      .add(y, 'touchend', w)
      .add(y, 'mousemove', z, v)
      .add(y, 'mouseup', w);
  }
  function ot(y) {
    const A = y.nodeName || '';
    return M.includes(A);
  }
  function Q() {
    return (d ? T : C)[$ ? 'mouse' : 'touch'];
  }
  function rt(y, A) {
    const O = l.add(Dt(y) * -1),
      N = S.byDistance(y, !d).distance;
    return d || P(y) < I
      ? N
      : g && A
      ? N * 0.5
      : S.byIndex(O.get(), 0).distance;
  }
  function it(y) {
    const A = It(y, s);
    ($ = A),
      (U = d && A && !y.buttons && G),
      (G = ft(c.get(), e.get()) >= 2),
      !(A && y.button !== 0) &&
        (ot(y.target) ||
          ((W = !0),
          o.pointerDown(y),
          u.useFriction(0).useDuration(0),
          c.set(e),
          et(),
          (H = o.readPoint(y)),
          (j = o.readPoint(y, b)),
          m.emit('pointerDown')));
  }
  function z(y) {
    if (!It(y, s) && y.touches.length >= 2) return w(y);
    const O = o.readPoint(y),
      N = o.readPoint(y, b),
      q = ft(O, H),
      X = ft(N, j);
    if (!Y && !$ && (!y.cancelable || ((Y = q > X), !Y))) return w(y);
    const _ = o.pointerMove(y);
    q > p && (U = !0),
      u.useFriction(0.3).useDuration(0.75),
      f.start(),
      c.add(D(_)),
      y.preventDefault();
  }
  function w(y) {
    const O = S.byDistance(0, !1).index !== l.get(),
      N = o.pointerUp(y) * Q(),
      q = rt(D(N), O),
      X = Yt(N, q),
      _ = V - 10 * X,
      J = a + X / 50;
    (Y = !1),
      (W = !1),
      E.clear(),
      u.useDuration(_).useFriction(J),
      i.distance(q, !d),
      ($ = !1),
      m.emit('pointerUp');
  }
  function K(y) {
    U && (y.stopPropagation(), y.preventDefault(), (U = !1));
  }
  function B() {
    return W;
  }
  return { init: st, destroy: R, pointerDown: B };
}
function tn(t, n) {
  let s, c;
  function o(l) {
    return l.timeStamp;
  }
  function e(l, m) {
    const d = `client${(m || t.scroll) === 'x' ? 'X' : 'Y'}`;
    return (It(l, n) ? l : l.touches[0])[d];
  }
  function f(l) {
    return (s = l), (c = l), e(l);
  }
  function i(l) {
    const m = e(l) - e(c),
      x = o(l) - o(s) > 170;
    return (c = l), x && (s = l), m;
  }
  function u(l) {
    if (!s || !c) return 0;
    const m = e(c) - e(s),
      x = o(l) - o(s),
      d = o(l) - o(c) > 170,
      p = m / x;
    return x && !d && P(p) > 0.1 ? p : 0;
  }
  return { pointerDown: f, pointerMove: i, pointerUp: u, readPoint: e };
}
function nn() {
  function t(r) {
    const { offsetTop: s, offsetLeft: c, offsetWidth: o, offsetHeight: e } = r;
    return {
      top: s,
      right: c + o,
      bottom: s + e,
      left: c,
      width: o,
      height: e,
    };
  }
  return { measure: t };
}
function en(t) {
  function n(s) {
    return t * (s / 100);
  }
  return { measure: n };
}
function on(t, n, r, s, c, o, e) {
  const f = [t].concat(s);
  let i,
    u,
    S = [],
    l = !1;
  function m(g) {
    return c.measureSize(e.measure(g));
  }
  function x(g) {
    if (!o) return;
    (u = m(t)), (S = s.map(m));
    function a(h) {
      for (const b of h) {
        if (l) return;
        const D = b.target === t,
          M = s.indexOf(b.target),
          v = D ? u : S[M],
          L = m(D ? t : s[M]);
        if (P(L - v) >= 0.5) {
          g.reInit(), n.emit('resize');
          break;
        }
      }
    }
    (i = new ResizeObserver((h) => {
      (gt(o) || o(g, h)) && a(h);
    })),
      r.requestAnimationFrame(() => {
        f.forEach((h) => i.observe(h));
      });
  }
  function d() {
    (l = !0), i && i.disconnect();
  }
  return { init: x, destroy: d };
}
function sn(t, n, r, s, c, o) {
  let e = 0,
    f = 0,
    i = c,
    u = o,
    S = t.get(),
    l = 0;
  function m(v) {
    const L = v / 1e3,
      E = i * L,
      I = s.get() - t.get(),
      C = !i;
    let T = 0;
    return (
      C
        ? ((e = 0), r.set(s), t.set(s), (T = I))
        : (r.set(t),
          (e += I / E),
          (e *= u),
          (S += e),
          t.add(e * L),
          (T = S - l)),
      (f = Dt(T)),
      (l = S),
      M
    );
  }
  function x() {
    const v = s.get() - n.get();
    return P(v) < 0.001;
  }
  function d() {
    return i;
  }
  function p() {
    return f;
  }
  function g() {
    return e;
  }
  function a() {
    return b(c);
  }
  function h() {
    return D(o);
  }
  function b(v) {
    return (i = v), M;
  }
  function D(v) {
    return (u = v), M;
  }
  const M = {
    direction: p,
    duration: d,
    velocity: g,
    seek: m,
    settled: x,
    useBaseFriction: h,
    useBaseDuration: a,
    useFriction: D,
    useDuration: b,
  };
  return M;
}
function rn(t, n, r, s, c) {
  const o = c.measure(10),
    e = c.measure(50),
    f = nt(0.1, 0.99);
  let i = !1;
  function u() {
    return !(i || !t.reachedAny(r.get()) || !t.reachedAny(n.get()));
  }
  function S(x) {
    if (!u()) return;
    const d = t.reachedMin(n.get()) ? 'min' : 'max',
      p = P(t[d] - n.get()),
      g = r.get() - n.get(),
      a = f.constrain(p / e);
    r.subtract(g * a),
      !x &&
        P(g) < o &&
        (r.set(t.constrain(r.get())), s.useDuration(25).useBaseFriction());
  }
  function l(x) {
    i = !x;
  }
  return { shouldConstrain: u, constrain: S, toggleActive: l };
}
function cn(t, n, r, s, c) {
  const o = nt(-n + t, 0),
    e = l(),
    f = S(),
    i = m();
  function u(d, p) {
    return ft(d, p) < 1;
  }
  function S() {
    const d = e[0],
      p = k(e),
      g = e.lastIndexOf(d),
      a = e.indexOf(p) + 1;
    return nt(g, a);
  }
  function l() {
    return r
      .map((d, p) => {
        const { min: g, max: a } = o,
          h = o.constrain(d),
          b = !p,
          D = vt(r, p);
        return b ? a : D || u(g, h) ? g : u(a, h) ? a : h;
      })
      .map((d) => parseFloat(d.toFixed(3)));
  }
  function m() {
    if (n <= t + c) return [o.max];
    if (s === 'keepSnaps') return e;
    const { min: d, max: p } = f;
    return e.slice(d, p);
  }
  return { snapsContained: i, scrollContainLimit: f };
}
function un(t, n, r) {
  const s = n[0],
    c = r ? s - t : k(n);
  return { limit: nt(c, s) };
}
function fn(t, n, r, s) {
  const o = n.min + 0.1,
    e = n.max + 0.1,
    { reachedMin: f, reachedMax: i } = nt(o, e);
  function u(m) {
    return m === 1 ? i(r.get()) : m === -1 ? f(r.get()) : !1;
  }
  function S(m) {
    if (!u(m)) return;
    const x = t * (m * -1);
    s.forEach((d) => d.add(x));
  }
  return { loop: S };
}
function an(t) {
  const { max: n, length: r } = t;
  function s(o) {
    const e = o - n;
    return r ? e / -r : 0;
  }
  return { get: s };
}
function ln(t, n, r, s, c) {
  const { startEdge: o, endEdge: e } = t,
    { groupSlides: f } = c,
    i = l().map(n.measure),
    u = m(),
    S = x();
  function l() {
    return f(s)
      .map((p) => k(p)[e] - p[0][o])
      .map(P);
  }
  function m() {
    return s.map((p) => r[o] - p[o]).map((p) => -P(p));
  }
  function x() {
    return f(u)
      .map((p) => p[0])
      .map((p, g) => p + i[g]);
  }
  return { snaps: u, snapsAligned: S };
}
function dn(t, n, r, s, c, o) {
  const { groupSlides: e } = c,
    { min: f, max: i } = s,
    u = S();
  function S() {
    const m = e(o),
      x = !t || n === 'keepSnaps';
    return r.length === 1
      ? [o]
      : x
      ? m
      : m.slice(f, i).map((d, p, g) => {
          const a = !p,
            h = vt(g, p);
          if (a) {
            const b = k(g[0]) + 1;
            return Bt(b);
          }
          if (h) {
            const b = pt(o) - k(g)[0] + 1;
            return Bt(b, k(g)[0]);
          }
          return d;
        });
  }
  return { slideRegistry: u };
}
function pn(t, n, r, s, c) {
  const { reachedAny: o, removeOffset: e, constrain: f } = s;
  function i(d) {
    return d.concat().sort((p, g) => P(p) - P(g))[0];
  }
  function u(d) {
    const p = t ? e(d) : f(d),
      g = n
        .map((h, b) => ({ diff: S(h - p, 0), index: b }))
        .sort((h, b) => P(h.diff) - P(b.diff)),
      { index: a } = g[0];
    return { index: a, distance: p };
  }
  function S(d, p) {
    const g = [d, d + r, d - r];
    if (!t) return d;
    if (!p) return i(g);
    const a = g.filter((h) => Dt(h) === p);
    return a.length ? i(a) : k(g) - r;
  }
  function l(d, p) {
    const g = n[d] - c.get(),
      a = S(g, p);
    return { index: d, distance: a };
  }
  function m(d, p) {
    const g = c.get() + d,
      { index: a, distance: h } = u(g),
      b = !t && o(g);
    if (!p || b) return { index: a, distance: d };
    const D = n[a] - h,
      M = d + S(D, 0);
    return { index: a, distance: M };
  }
  return { byDistance: m, byIndex: l, shortcut: S };
}
function mn(t, n, r, s, c, o, e) {
  function f(l) {
    const m = l.distance,
      x = l.index !== n.get();
    o.add(m),
      m && (s.duration() ? t.start() : (t.update(), t.render(1), t.update())),
      x && (r.set(n.get()), n.set(l.index), e.emit('select'));
  }
  function i(l, m) {
    const x = c.byDistance(l, m);
    f(x);
  }
  function u(l, m) {
    const x = n.clone().set(l),
      d = c.byIndex(x.get(), m);
    f(d);
  }
  return { distance: i, index: u };
}
function gn(t, n, r, s, c, o, e, f) {
  const i = { passive: !0, capture: !0 };
  let u = 0;
  function S(x) {
    if (!f) return;
    function d(p) {
      if (new Date().getTime() - u > 10) return;
      e.emit('slideFocusStart'), (t.scrollLeft = 0);
      const h = r.findIndex((b) => b.includes(p));
      Tt(h) && (c.useDuration(0), s.index(h, 0), e.emit('slideFocus'));
    }
    o.add(document, 'keydown', l, !1),
      n.forEach((p, g) => {
        o.add(
          p,
          'focus',
          (a) => {
            (gt(f) || f(x, a)) && d(g);
          },
          i,
        );
      });
  }
  function l(x) {
    x.code === 'Tab' && (u = new Date().getTime());
  }
  return { init: S };
}
function ut(t) {
  let n = t;
  function r() {
    return n;
  }
  function s(i) {
    n = e(i);
  }
  function c(i) {
    n += e(i);
  }
  function o(i) {
    n -= e(i);
  }
  function e(i) {
    return Tt(i) ? i : i.get();
  }
  return { get: r, set: s, add: c, subtract: o };
}
function Ht(t, n) {
  const r = t.scroll === 'x' ? o : e,
    s = n.style;
  let c = !1;
  function o(l) {
    return `translate3d(${l}px,0px,0px)`;
  }
  function e(l) {
    return `translate3d(0px,${l}px,0px)`;
  }
  function f(l) {
    c || (s.transform = r(t.direction(l)));
  }
  function i(l) {
    c = !l;
  }
  function u() {
    c ||
      ((s.transform = ''),
      n.getAttribute('style') || n.removeAttribute('style'));
  }
  return { clear: u, to: f, toggleActive: i };
}
function hn(t, n, r, s, c, o, e, f, i) {
  const S = at(c),
    l = at(c).reverse(),
    m = a().concat(h());
  function x(L, E) {
    return L.reduce((I, C) => I - c[C], E);
  }
  function d(L, E) {
    return L.reduce((I, C) => (x(I, E) > 0 ? I.concat([C]) : I), []);
  }
  function p(L) {
    return o.map((E, I) => ({
      start: E - s[I] + 0.5 + L,
      end: E + n - 0.5 + L,
    }));
  }
  function g(L, E, I) {
    const C = p(E);
    return L.map((T) => {
      const V = I ? 0 : -r,
        G = I ? r : 0,
        H = I ? 'end' : 'start',
        j = C[T][H];
      return {
        index: T,
        loopPoint: j,
        slideLocation: ut(-1),
        translate: Ht(t, i[T]),
        target: () => (f.get() > j ? V : G),
      };
    });
  }
  function a() {
    const L = e[0],
      E = d(l, L);
    return g(E, r, !1);
  }
  function h() {
    const L = n - e[0] - 1,
      E = d(S, L);
    return g(E, -r, !0);
  }
  function b() {
    return m.every(({ index: L }) => {
      const E = S.filter((I) => I !== L);
      return x(E, n) <= 0.1;
    });
  }
  function D() {
    m.forEach((L) => {
      const { target: E, translate: I, slideLocation: C } = L,
        T = E();
      T !== C.get() && (I.to(T), C.set(T));
    });
  }
  function M() {
    m.forEach((L) => L.translate.clear());
  }
  return { canLoop: b, clear: M, loop: D, loopPoints: m };
}
function Sn(t, n, r) {
  let s,
    c = !1;
  function o(i) {
    if (!r) return;
    function u(S) {
      for (const l of S)
        if (l.type === 'childList') {
          i.reInit(), n.emit('slidesChanged');
          break;
        }
    }
    (s = new MutationObserver((S) => {
      c || ((gt(r) || r(i, S)) && u(S));
    })),
      s.observe(t, { childList: !0 });
  }
  function e() {
    s && s.disconnect(), (c = !0);
  }
  return { init: o, destroy: e };
}
function yn(t, n, r, s) {
  const c = {};
  let o = null,
    e = null,
    f,
    i = !1;
  function u() {
    (f = new IntersectionObserver(
      (d) => {
        i ||
          (d.forEach((p) => {
            const g = n.indexOf(p.target);
            c[g] = p;
          }),
          (o = null),
          (e = null),
          r.emit('slidesInView'));
      },
      { root: t.parentElement, threshold: s },
    )),
      n.forEach((d) => f.observe(d));
  }
  function S() {
    f && f.disconnect(), (i = !0);
  }
  function l(d) {
    return lt(c).reduce((p, g) => {
      const a = parseInt(g),
        { isIntersecting: h } = c[a];
      return ((d && h) || (!d && !h)) && p.push(a), p;
    }, []);
  }
  function m(d = !0) {
    if (d && o) return o;
    if (!d && e) return e;
    const p = l(d);
    return d && (o = p), d || (e = p), p;
  }
  return { init: u, destroy: S, get: m };
}
function bn(t, n, r, s, c, o) {
  const { measureSize: e, startEdge: f, endEdge: i } = t,
    u = r[0] && c,
    S = d(),
    l = p(),
    m = r.map(e),
    x = g();
  function d() {
    if (!u) return 0;
    const h = r[0];
    return P(n[f] - h[f]);
  }
  function p() {
    if (!u) return 0;
    const h = o.getComputedStyle(k(s));
    return parseFloat(h.getPropertyValue(`margin-${i}`));
  }
  function g() {
    return r
      .map((h, b, D) => {
        const M = !b,
          v = vt(D, b);
        return M ? m[b] + S : v ? m[b] + l : D[b + 1][f] - h[f];
      })
      .map(P);
  }
  return { slideSizes: m, slideSizesWithGaps: x, startGap: S, endGap: l };
}
function xn(t, n, r, s, c, o, e, f, i) {
  const { startEdge: u, endEdge: S, direction: l } = t,
    m = Tt(r);
  function x(a, h) {
    return at(a)
      .filter((b) => b % h === 0)
      .map((b) => a.slice(b, b + h));
  }
  function d(a) {
    return a.length
      ? at(a)
          .reduce((h, b, D) => {
            const M = k(h) || 0,
              v = M === 0,
              L = b === pt(a),
              E = c[u] - o[M][u],
              I = c[u] - o[b][S],
              C = !s && v ? l(e) : 0,
              T = !s && L ? l(f) : 0,
              V = P(I - T - (E + C));
            return D && V > n + i && h.push(b), L && h.push(a.length), h;
          }, [])
          .map((h, b, D) => {
            const M = Math.max(D[b - 1] || 0);
            return a.slice(M, h);
          })
      : [];
  }
  function p(a) {
    return m ? x(a, r) : d(a);
  }
  return { groupSlides: p };
}
function Ln(t, n, r, s, c, o, e) {
  const {
      align: f,
      axis: i,
      direction: u,
      startIndex: S,
      loop: l,
      duration: m,
      dragFree: x,
      dragThreshold: d,
      inViewThreshold: p,
      slidesToScroll: g,
      skipSnaps: a,
      containScroll: h,
      watchResize: b,
      watchSlides: D,
      watchDrag: M,
      watchFocus: v,
    } = o,
    L = 2,
    E = nn(),
    I = E.measure(n),
    C = r.map(E.measure),
    T = Zt(i, u),
    V = T.measureSize(I),
    G = en(V),
    H = _t(f, V),
    j = !l && !!h,
    W = l || !!h,
    {
      slideSizes: Y,
      slideSizesWithGaps: U,
      startGap: $,
      endGap: st,
    } = bn(T, I, C, r, W, c),
    R = xn(T, V, g, l, I, C, $, st, L),
    { snaps: et, snapsAligned: ot } = ln(T, H, I, C, R),
    Q = -k(et) + k(U),
    { snapsContained: rt, scrollContainLimit: it } = cn(V, Q, ot, h, L),
    z = j ? rt : ot,
    { limit: w } = un(Q, z, l),
    K = Gt(pt(z), S, l),
    B = K.clone(),
    F = at(r),
    y = (
      {
        dragHandler: Z,
        scrollBody: bt,
        scrollBounds: xt,
        options: { loop: mt },
      },
      Lt,
    ) => {
      mt || xt.constrain(Z.pointerDown()), bt.seek(Lt);
    },
    A = (
      {
        scrollBody: Z,
        translate: bt,
        location: xt,
        offsetLocation: mt,
        scrollLooper: Lt,
        slideLooper: qt,
        dragHandler: Ut,
        animation: $t,
        eventHandler: Ct,
        scrollBounds: Qt,
        options: { loop: Ot },
      },
      wt,
    ) => {
      const Nt = Z.settled(),
        Kt = !Qt.shouldConstrain(),
        Vt = Ot ? Nt : Nt && Kt;
      Vt && !Ut.pointerDown() && ($t.stop(), Ct.emit('settle')),
        Vt || Ct.emit('scroll');
      const Xt = xt.get() * wt + _.get() * (1 - wt);
      mt.set(Xt), Ot && (Lt.loop(Z.direction()), qt.loop()), bt.to(mt.get());
    },
    O = Jt(
      s,
      c,
      (Z) => y(yt, Z),
      (Z) => A(yt, Z),
    ),
    N = 0.68,
    q = z[K.get()],
    X = ut(q),
    _ = ut(q),
    J = ut(q),
    tt = ut(q),
    ct = sn(X, J, _, tt, m, N),
    ht = pn(l, z, Q, w, tt),
    St = mn(O, K, B, ct, ht, tt, e),
    Mt = an(w),
    Ft = dt(),
    jt = yn(n, r, e, p),
    { slideRegistry: Pt } = dn(j, h, z, it, R, F),
    Rt = gn(t, r, Pt, St, ct, Ft, e, v),
    yt = {
      ownerDocument: s,
      ownerWindow: c,
      eventHandler: e,
      containerRect: I,
      slideRects: C,
      animation: O,
      axis: T,
      dragHandler: Wt(
        T,
        t,
        s,
        c,
        tt,
        tn(T, c),
        X,
        O,
        St,
        ct,
        ht,
        K,
        e,
        G,
        x,
        d,
        a,
        N,
        M,
      ),
      eventStore: Ft,
      percentOfView: G,
      index: K,
      indexPrevious: B,
      limit: w,
      location: X,
      offsetLocation: J,
      previousLocation: _,
      options: o,
      resizeHandler: on(n, e, c, r, T, b, E),
      scrollBody: ct,
      scrollBounds: rn(w, J, tt, ct, G),
      scrollLooper: fn(Q, w, J, [X, J, _, tt]),
      scrollProgress: Mt,
      scrollSnapList: z.map(Mt.get),
      scrollSnaps: z,
      scrollTarget: ht,
      scrollTo: St,
      slideLooper: hn(T, V, Q, Y, U, et, z, J, r),
      slideFocus: Rt,
      slidesHandler: Sn(n, e, D),
      slidesInView: jt,
      slideIndexes: F,
      slideRegistry: Pt,
      slidesToScroll: R,
      target: tt,
      translate: Ht(T, n),
    };
  return yt;
}
function En() {
  let t = {},
    n;
  function r(u) {
    n = u;
  }
  function s(u) {
    return t[u] || [];
  }
  function c(u) {
    return s(u).forEach((S) => S(n, u)), i;
  }
  function o(u, S) {
    return (t[u] = s(u).concat([S])), i;
  }
  function e(u, S) {
    return (t[u] = s(u).filter((l) => l !== S)), i;
  }
  function f() {
    t = {};
  }
  const i = { init: r, emit: c, off: e, on: o, clear: f };
  return i;
}
const In = {
  align: 'center',
  axis: 'x',
  container: null,
  slides: null,
  containScroll: 'trimSnaps',
  direction: 'ltr',
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0,
};
function Tn(t) {
  function n(o, e) {
    return kt(o, e || {});
  }
  function r(o) {
    const e = o.breakpoints || {},
      f = lt(e)
        .filter((i) => t.matchMedia(i).matches)
        .map((i) => e[i])
        .reduce((i, u) => n(i, u), {});
    return n(o, f);
  }
  function s(o) {
    return o
      .map((e) => lt(e.breakpoints || {}))
      .reduce((e, f) => e.concat(f), [])
      .map(t.matchMedia);
  }
  return { mergeOptions: n, optionsAtMedia: r, optionsMediaQueries: s };
}
function Dn(t) {
  let n = [];
  function r(o, e) {
    return (
      (n = e.filter(({ options: f }) => t.optionsAtMedia(f).active !== !1)),
      n.forEach((f) => f.init(o, t)),
      e.reduce((f, i) => Object.assign(f, { [i.name]: i }), {})
    );
  }
  function s() {
    n = n.filter((o) => o.destroy());
  }
  return { init: r, destroy: s };
}
function At(t, n, r) {
  const s = t.ownerDocument,
    c = s.defaultView,
    o = Tn(c),
    e = Dn(o),
    f = dt(),
    i = En(),
    { mergeOptions: u, optionsAtMedia: S, optionsMediaQueries: l } = o,
    { on: m, off: x, emit: d } = i,
    p = T;
  let g = !1,
    a,
    h = u(In, At.globalOptions),
    b = u(h),
    D = [],
    M,
    v,
    L;
  function E() {
    const { container: F, slides: y } = b;
    v = (Et(F) ? t.querySelector(F) : F) || t.children[0];
    const O = Et(y) ? v.querySelectorAll(y) : y;
    L = [].slice.call(O || v.children);
  }
  function I(F) {
    const y = Ln(t, v, L, s, c, F, i);
    if (F.loop && !y.slideLooper.canLoop()) {
      const A = Object.assign({}, F, { loop: !1 });
      return I(A);
    }
    return y;
  }
  function C(F, y) {
    g ||
      ((h = u(h, F)),
      (b = S(h)),
      (D = y || D),
      E(),
      (a = I(b)),
      l([h, ...D.map(({ options: A }) => A)]).forEach((A) =>
        f.add(A, 'change', T),
      ),
      b.active &&
        (a.translate.to(a.location.get()),
        a.animation.init(),
        a.slidesInView.init(),
        a.slideFocus.init(B),
        a.eventHandler.init(B),
        a.resizeHandler.init(B),
        a.slidesHandler.init(B),
        a.options.loop && a.slideLooper.loop(),
        v.offsetParent && L.length && a.dragHandler.init(B),
        (M = e.init(B, D))));
  }
  function T(F, y) {
    const A = R();
    V(), C(u({ startIndex: A }, F), y), i.emit('reInit');
  }
  function V() {
    a.dragHandler.destroy(),
      a.eventStore.clear(),
      a.translate.clear(),
      a.slideLooper.clear(),
      a.resizeHandler.destroy(),
      a.slidesHandler.destroy(),
      a.slidesInView.destroy(),
      a.animation.destroy(),
      e.destroy(),
      f.clear();
  }
  function G() {
    g || ((g = !0), f.clear(), V(), i.emit('destroy'), i.clear());
  }
  function H(F, y, A) {
    !b.active ||
      g ||
      (a.scrollBody.useBaseFriction().useDuration(y === !0 ? 0 : b.duration),
      a.scrollTo.index(F, A || 0));
  }
  function j(F) {
    const y = a.index.add(1).get();
    H(y, F, -1);
  }
  function W(F) {
    const y = a.index.add(-1).get();
    H(y, F, 1);
  }
  function Y() {
    return a.index.add(1).get() !== R();
  }
  function U() {
    return a.index.add(-1).get() !== R();
  }
  function $() {
    return a.scrollSnapList;
  }
  function st() {
    return a.scrollProgress.get(a.location.get());
  }
  function R() {
    return a.index.get();
  }
  function et() {
    return a.indexPrevious.get();
  }
  function ot() {
    return a.slidesInView.get();
  }
  function Q() {
    return a.slidesInView.get(!1);
  }
  function rt() {
    return M;
  }
  function it() {
    return a;
  }
  function z() {
    return t;
  }
  function w() {
    return v;
  }
  function K() {
    return L;
  }
  const B = {
    canScrollNext: Y,
    canScrollPrev: U,
    containerNode: w,
    internalEngine: it,
    destroy: G,
    off: x,
    on: m,
    emit: d,
    plugins: rt,
    previousScrollSnap: et,
    reInit: p,
    rootNode: z,
    scrollNext: j,
    scrollPrev: W,
    scrollProgress: st,
    scrollSnapList: $,
    scrollTo: H,
    selectedScrollSnap: R,
    slideNodes: K,
    slidesInView: ot,
    slidesNotInView: Q,
  };
  return C(n, r), setTimeout(() => i.emit('init'), 0), B;
}
At.globalOptions = void 0;
const vn = document.querySelectorAll('.embla');
vn.forEach((t) => {
  At(t, { loop: !1, align: 'center' });
});
