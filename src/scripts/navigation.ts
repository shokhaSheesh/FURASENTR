const root = document.documentElement;
const bar = document.querySelector<HTMLElement>('.bm')!;
const list = bar.querySelector<HTMLElement>('.bm__list')!;
const sentinel = document.querySelector<HTMLElement>('.bm-sentinel')!;
const cards = [...bar.querySelectorAll<HTMLAnchorElement>('a[data-spy]')];
const sections = cards.map((c) => document.getElementById(c.dataset.spy!)!);
const motion = matchMedia('(prefers-reduced-motion: reduce)');
const behavior = (): ScrollBehavior => (motion.matches ? 'auto' : 'smooth');
const barOffset = () => parseFloat(getComputedStyle(root).getPropertyValue('--bm-hc')) || 60;

let activeId: string | null = null;
let lockedId: string | null = null;
let idle = 0;

function keepInView(card: HTMLElement) {
  if (list.scrollWidth <= list.clientWidth) return;
  const left = card.offsetLeft - (list.clientWidth - card.offsetWidth) / 2;
  list.scrollTo({ left: Math.max(0, left), behavior: behavior() });
}

/** `inSection` is false on the first screen, where Marketplace is only the featured card. */
function setActive(id: string | null, inSection = true) {
  const key = `${id}:${inSection}`;
  if (key === activeId) return;
  activeId = key;
  cards.forEach((card) => {
    const on = card.dataset.spy === id;
    card.classList.toggle('is-active', on);
    if (on && inSection) card.setAttribute('aria-current', 'location');
    else card.removeAttribute('aria-current');
    if (on) keepInView(card);
  });
}

function spy() {
  if (lockedId) return;
  const line = scrollY + barOffset() + innerHeight * 0.3;
  const first = sections[0].getBoundingClientRect().top + scrollY;
  if (line < first) return setActive('marketplace', false);
  const last = sections[sections.length - 1];
  if (line >= last.getBoundingClientRect().bottom + scrollY) return setActive(null);
  let current = sections[0];
  for (const s of sections) if (s.getBoundingClientRect().top + scrollY <= line) current = s;
  setActive(current.id);
}

function unlock() {
  lockedId = null;
  spy();
}

let frame = 0;
addEventListener('scroll', () => {
  if (lockedId) {
    clearTimeout(idle);
    idle = window.setTimeout(unlock, 140);
  }
  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(spy);
}, { passive: true });
addEventListener('resize', spy, { passive: true });
['wheel', 'touchstart'].forEach((type) => addEventListener(type, () => { if (lockedId) unlock(); }, { passive: true }));

new IntersectionObserver(([entry]) => bar.classList.toggle('is-compact', !entry.isIntersecting)).observe(sentinel);

function goTo(id: string, push = true) {
  const target = id === 'top' ? document.body : document.getElementById(id);
  if (!target) return;
  const y = id === 'top' ? 0 : target.getBoundingClientRect().top + scrollY - barOffset();
  const destination = Math.min(Math.max(0, y), root.scrollHeight - innerHeight);
  const spyCard = cards.find((c) => c.dataset.spy === id);
  if (spyCard) {
    lockedId = id;
    setActive(id);
    clearTimeout(idle);
    idle = window.setTimeout(unlock, Math.abs(destination - scrollY) < 2 ? 60 : 1600);
  }
  scrollTo({ top: destination, behavior: behavior() });
  if (id !== 'top') target.focus({ preventScroll: true });
  if (push) history.pushState(null, '', id === 'top' ? location.pathname : `#${id}`);
}

const burger = document.querySelector<HTMLButtonElement>('.burger')!;
const header = document.querySelector<HTMLElement>('.site-header')!;
function setMenu(open: boolean) {
  header.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', (open ? burger.dataset.close : burger.dataset.open)!);
}
burger.addEventListener('click', () => setMenu(!header.classList.contains('is-open')));
addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && header.classList.contains('is-open')) { setMenu(false); burger.focus(); }
});
document.addEventListener('click', (e) => {
  if (header.classList.contains('is-open') && !header.contains(e.target as Node)) setMenu(false);
});

document.addEventListener('click', (e) => {
  if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
  const link = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
  if (!link) return;
  const id = link.getAttribute('href')!.slice(1);
  if (id === 'main') return;
  e.preventDefault();
  setMenu(false);
  goTo(id);
});

document.querySelectorAll<HTMLAnchorElement>('.lang a').forEach((link) => {
  link.addEventListener('click', () => { link.href = link.pathname + location.hash; });
});

addEventListener('popstate', () => goTo(location.hash.slice(1) || 'top', false));

if (location.hash) requestAnimationFrame(() => goTo(location.hash.slice(1), false));
spy();
