document.querySelector('#menu-icon').addEventListener('click', () => {
    document.querySelector('.navbar .navbar-nav').classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!document.querySelector('#menu-icon').contains(e.target) && !document.querySelector('.navbar .navbar-nav').contains(e.target)) {
        document.querySelector('.navbar .navbar-nav').classList.remove('active');
    }
});
