document.querySelector('#hamburger-menu').addEventListener('click', () => {
    document.querySelector('.navbar .navbar-nav').classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!document.querySelector('#hamburger-menu').contains(e.target) && !document.querySelector('.navbar > .navbar-nav').contains(e.target)) {
        document.querySelector('.navbar .navbar-nav').classList.remove('active');
    }
});
