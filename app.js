var typed = new Typed(".text", {
	strings: ["Elegance.", "Execution.", "Excellence."],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 1000,
	loop: true
});


document.querySelectorAll('a.nav-link[data-scroll]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // keep URL clean (no hash), so refresh won't jump down
    history.replaceState(null, '', location.pathname + location.search);
  });
});