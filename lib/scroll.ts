export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.lenis) {
    window.lenis.scrollTo(el, { offset: -72, duration: 1.5 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
