// (function() {
//     try {
//         var saved = localStorage.getItem('theme');
//         var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
//         var theme = saved || (prefersLight ? 'light' : 'dark');
//         document.documentElement.setAttribute('data-theme', theme);
//     } catch (e) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//     }
// })();

// const themeToggle = document.getElementById('themeToggle');
// const root = document.documentElement;

// themeToggle.addEventListener('click', () => {
//     const current = root.getAttribute('data-theme');
//     const next = current === 'light' ? 'dark' : 'light';
//     root.setAttribute('data-theme', next);
//     try {
//         localStorage.setItem('theme', next);
//     } catch (e) {
//         // localStorage may be blocked — fail silently
//     }
// });

// /* ---------------------------------------------------------
//    MOBILE NAV TOGGLE
// --------------------------------------------------------- */
// const navToggle = document.getElementById('navToggle');
// const navLinks = document.getElementById('navLinks');

// navToggle.addEventListener('click', () => {
//     navToggle.classList.toggle('open');
//     navLinks.classList.toggle('open');
// });

// document.querySelectorAll('.nav-link').forEach(link => {
//     link.addEventListener('click', () => {
//         navToggle.classList.remove('open');
//         navLinks.classList.remove('open');
//     });
// });

// /* ---------------------------------------------------------
//    NAVBAR SCROLL EFFECT
// --------------------------------------------------------- */
// const navbar = document.getElementById('navbar');
// window.addEventListener('scroll', () => {
//     if (window.scrollY > 20) navbar.classList.add('scrolled');
//     else navbar.classList.remove('scrolled');
// });

// /* ---------------------------------------------------------
//    SCROLLSPY
// --------------------------------------------------------- */
// const sections = document.querySelectorAll('section[id]');
// const links = document.querySelectorAll('.nav-link');

// window.addEventListener('scroll', () => {
//     let current = '';
//     sections.forEach(section => {
//         const top = section.offsetTop - 120;
//         if (window.scrollY >= top) current = section.id;
//     });

//     links.forEach(link => {
//         link.classList.remove('active');
//         if (link.getAttribute('href') === '#' + current) {
//             link.classList.add('active');
//         }
//     });
// });

// /* ---------------------------------------------------------
//    SYNC THEME ACROSS TABS (bonus)
// --------------------------------------------------------- */
// window.addEventListener('storage', (e) => {
//     if (e.key === 'theme' && e.newValue) {
//         root.setAttribute('data-theme', e.newValue);
//     }
// });