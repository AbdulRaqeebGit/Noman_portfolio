/* ---------- Carousel ---------- */
document.querySelectorAll('.carousel').forEach(carousel => {
    const inner = carousel.querySelector('.carouselTrackInner');
    const items = carousel.querySelectorAll('.carouselItem');
    let index = 0;

    function update() {
        inner.style.transform = `translateX(-${index * 100}%)`;
    }

    const id = carousel.id;

    document.querySelectorAll(`.carouselArrow[data-target="${id}"]`).forEach(btn => {
        btn.addEventListener('click', () => {
            const dir = Number(btn.dataset.dir);
            index = (index + dir + items.length) % items.length;
            update();
        });
    });
});

/* ---------- Hamburger Menu ---------- */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');

if (hamburger && navLinks && navOverlay) {
    hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        navOverlay.classList.toggle('show');
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    navOverlay.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navOverlay.classList.remove('show');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', false);
    });

    // link click par bhi menu close ho jaye
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navOverlay.classList.remove('show');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', false);
        });
    });
} 