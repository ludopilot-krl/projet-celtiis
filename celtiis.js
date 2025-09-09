const nav = document.querySelector('nav');
const searchInputNav = nav ? nav.querySelector('input') : null;
const searchButton = nav ? nav.querySelector('.btn-loupe') : null;
const buttonMenu = nav ? nav.querySelector('.btn-menu') : null;
const menuAcceuil = document.querySelector('.acceuil');
// const sousMenu = menuAcceuil ? ('sous-menu') : null;
let sousMenu = document.querySelectorAll('#sous-menu')
sousMenu = Array.from(sousMenu)
let divSousMenu = menuAcceuil.querySelectorAll('.div-sous-elements')
divSousMenu = Array.from(divSousMenu)
let lien = document.querySelectorAll('.lien')
lien = Array.from(lien)
let hr = document.getElementsByTagName('hr')
hr = Array.from(hr)
console.log(lien)
let sousMenuElements = document.querySelectorAll('.elements')
sousMenuElements = Array.from(sousMenuElements)
// console.log(sousMenuElements)

const divSlider2 = document.querySelector('.container-slider2');
const divImage2 = divSlider2 ? divSlider2.querySelector('.div-image2') : null;
const divSpan = divSlider2 ? divSlider2.querySelector('.span') : null;
let span = divSpan ? divSpan.querySelectorAll('#span-element') : null;
span = Array.from(span);
let count = 1;
let countMoins = count--;
console.log(span[countMoins]);

console.log(span.length - 1);
let translation = 0;
let animSpan = setInterval(() => {

    let element = span[count];//prend l'element 0 avec la couleur gris
    let precedent = element.previousElementSibling ? element.previousElementSibling : null;
    if (count === 0) {
        precedent = span[span.length - 1]
    }
    element.classList.remove('color-gray')//Et retire le fond gris
    element.classList.add('color-blue')//ajoute un fond bleu

    divImage2.style.transform = `translateX(${translation}%)`
    divImage2.classList.add('transition')
    translation -= 12.5;
    count++;//passe à l'element suivant
    precedent.classList.remove('color-blue');
    precedent.classList.add('color-gray');
    if ((translation === -75)) {//si le count est egal a la taille du tableau alors il est reinitialiser
        count = 0;
        // divImage2.style.transform = `translateX(0%)`;
        divImage2.classList.remove('transition')
        divImage2.style.transform = `translateX(0%)`
        translation = 0;
    }


}, 2340);




if (searchButton && buttonMenu && searchInputNav) {
    searchButton.addEventListener('click', () => { //Au click sur la loupe l'input de recherche apparaît
        searchInputNav.classList.toggle('hide');
    })
    buttonMenu.addEventListener('click', () => {//Au click sur le menu ambeurgeur, le menu d'acceuil apparait
        let next = menuAcceuil.nextElementSibling;
        let fin = document.querySelector('.fin');
        while (next !== fin) { //Chaque elements après le menu acceuil se cachent
            next.classList.toggle('hide');
            next = next.nextElementSibling;
            console.log(next);

        }
        menuAcceuil.classList.toggle('hide');
        divSousMenu.forEach(element => { //Chaque elements des sous menus se cachent
            element.classList.toggle('hide');

        });


    });


}
sousMenu.forEach(element => {

    element.addEventListener('click', (e) => {
        e.stopPropagation(); //Pour empecher la propagation de l'event au parent
        e.preventDefault(); // Empêche le rechargement
        let div = element.querySelector('.div-sous-elements');
        if (div) {
            div.classList.toggle('hide');
            return null
        }


    })
})


