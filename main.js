const parralax = document.getElementById('parallax');

window.addEventListener('scroll', offsetScroll);

function offsetScroll(){
    let offset = window.pageYOffset;
    parralax.style.backgroundPositionY = offset * 0.2 + 'px';
}