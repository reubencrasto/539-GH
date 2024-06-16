


document.addEventListener('DOMContentLoaded', (event) => {

    const figures = document.getElementsByTagName('figure');

    for (let i = 0; i < figures.length; i++) {
        figures[i].classList.add('one-third');
    }




});




const footer_elem = document.getElementsByTagName('footer')[0];

footer_elem.addEventListener('click', removeFooter)
function removeFooter() {

    footer_elem.style.display = 'none';
}


const figure_5 = document.getElementsByTagName('figure')[4];

figure_5.addEventListener('click', removeFigure5)
function removeFigure5() {

    figure_5.style.visibility = 'hidden';
}

const figure_1 = document.getElementsByTagName('figure')[0].childNodes[2]; //should it be on figre or text??

figure_1.setAttribute('tabindex', '0');

figure_1.addEventListener('mouseenter', makeItalic)
figure_1.addEventListener('mouseleave', makeNormal)
figure_1.addEventListener('focus', makeItalic)
figure_1.addEventListener('blur', makeNormal)

function makeItalic() {

    figure_1.style.fontStyle = 'italic';
}
function makeNormal() {

    figure_1.style.fontStyle = '';
}
