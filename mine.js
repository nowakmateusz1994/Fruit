const arrowDown = document.querySelector('.fa-arrow-down');
const nav = document.querySelector('nav');
const navBtn = document.querySelector('span#btn');

const navFunc = () => {
    arrowDown.classList.toggle('active');
    nav.classList.toggle('active');
    //navBtn.classList.toggle('active');

}

navBtn.addEventListener('click', navFunc);


//   RWD imgBannerTruskawka 

const imgBannerTruskawka = document.querySelector('.imgTruskawka');

if (window.innerWidth >= 720) {
    imgBannerTruskawka.style.top = `${window.innerHeight - 15 - imgBannerTruskawka.offsetHeight }px`
};

// zmiana wyglądu navigacji podczas scrollowania

const navTopBorder = nav.offsetTop;

document.addEventListener('scroll', () => {

    let yScrollPosition = scrollY;
    if (yScrollPosition >= (navTopBorder - 32)) {
        nav.classList.add('scrollDown');
    }
    if (yScrollPosition <= (navTopBorder - 32)) {
        nav.classList.remove('scrollDown');
    }
})