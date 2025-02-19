document.querySelector('#menu-icon').addEventListener('click', () => {
    document.querySelector('.navbar .navbar-nav').classList.toggle('active');
    if (document.querySelector('#search-form').classList.contains('active')) {
        document.querySelector('#search-form').classList.remove('active');
    }
});

document.addEventListener('click', (e) => {
    if (!document.querySelector('#menu-icon').contains(e.target) && !document.querySelector('.navbar .navbar-nav').contains(e.target)) {
        document.querySelector('.navbar .navbar-nav').classList.remove('active');
    }
});

document.querySelector('#search').addEventListener('click', () => {
    document.querySelector('#search-form').classList.toggle('active');
    document.querySelector('#search-box').focus();
});
