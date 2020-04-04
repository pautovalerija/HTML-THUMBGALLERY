const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

//set first img opacity
imgs[0].style.opacity = opacity;

//const [current, imgs] = [document.querySelector('#current'),document.querySelectorAll('.imgs img')]

/*imgs.forEach(img => 
    img.addEventListener('click', e => (current.src = e.target.src))
);*/

imgs.forEach(img => 
    img.addEventListener('click', imgClick)
);

function imgClick(e){
    //reset the opacity
    imgs.forEach(img => (img.style.opacity = 1))
    //change current image to src of clicked image
    current.src = e.target.src;

    //add fade in class
    current.classList.add('fade-in');

    //remove fade-in class after 5 seconds
    setTimeout(() => current.classList.remove('fade-in'),500);
    //change the opacity to opacity var
    e.target.style.opacity = opacity;
}

