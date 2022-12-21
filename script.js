
const button = document.querySelector('.btn1');

if(localStorage.getItem('theme') == 'dark'){
    darkMode();
}


function darkMode(){
    let isDark = document.body.classList.toggle('dark');

    if(isDark){
        button.innerHTML = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        button.innerHTML = '🌚';
        localStorage.removeItem('theme', '');
    }
}


const i = 0;
const close = document.querySelectorAll('.overlay');
close.forEach(function(e){
    e.addEventListener('click', function(x){
        let url = window.location.href.substring(0, window.location.href.indexOf('#'));
        window.location.href = url;
        e.target.stopDefault();
    });
});

const contactClose = document.querySelector('.contact-body');
contactClose.addEventListener('click', function(){
    let url = window.location.href.substring(0, window.location.href.indexOf('#'));
    window.location.href = url;
})