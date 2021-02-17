const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const homeEl = document.querySelector('.home');
const menuEl = document.querySelector('.menu');
const aboutEl = document.querySelector('.about');
const contactEl = document.querySelector('.contact');
const titlEl = document.querySelector('.titl');
const pagenameEl = document.querySelector('.pagename');
const paraEl = document.querySelector('.para');
const ourpdcEl = document.querySelector('.ourpdc');
const prdcatEl = document.querySelector('.prdcat');
const yrcarteEl = document.querySelector('.yrcarte');



link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        homeEl.textContent = data[attr].home;
        menuEl.textContent = data[attr].menu;
        aboutEl.textContent = data[attr].about;
        contactEl.textContent = data[attr].contact;
        titlEl.textContent = data[attr].titl;
        pagenameEl.textContent = data[attr].pagename;
        paraEl.textContent = data[attr].para;
        ourpdcEl.textContent = data[attr].ourpdc;
        prdcatEl.textContent = data[attr].prdcat;
        yrcarteEl.textContent = data[attr].yrcarte;

    });
});

var data = {
    "english": {
        "home": `Home`,
        "menu": 'Menu',
        "about": 'About',
        "contact": 'Contact',
        "Panier": 'Cart',
        "titl": 'Welcome To Snack',
        "pagename": 'Délice',
        "para": 'Our Key Features',
        "ourpdc": 'Our Product',
        "prdcat": 'Product Category',
        "yrcarte": 'Your carte'
    },
    "Arabic": {
        "home": `الصفحة الرئيسية`,
        "menu": 'قائمة طعام',
        "about": 'حول',
        "contact": 'اتصل',
        "Panier": 'سلة',
        "titl": 'مرحبا بكم في سناك',
        "pagename": 'بهجة',
        "para": 'الميزات الرئيسية لدينا',
        "ourpdc": 'منتوجاتنا',
        "prdcat": 'أقسام المنتوجات',
        "yrcarte": 'سلة المشتريات'
    }
}