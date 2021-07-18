const body = document.body;
let selectedCard;

// data for each element to be shown
// require only text and image

const data = [
    {
        text:'text1',
        src:'derek-lee-AVLUPF0ezPU-unsplash.jpg'
    },
    {
        text:'text2',
        src:'erik-mclean-a8pYbjofZk0-unsplash.jpg'
    },
    {
        text:'text3',
        src:'kristin-wilson-z3htkdHUh5w-unsplash.jpg'
    },
    {
        text:'text4',
        src:'markus-spiske-ROWTOqLH5Mg-unsplash.jpg'
    },
    {
        text:'text5',
        src:'roman-kirienko-KzKRGrJ_xyo-unsplash.jpg'
    }
]

// create divs and assign data with them
let divTag;
let srcTag;
let pElement;
for(let i = 0; i < data.length; i++) {
    // create div
    divTag = document.createElement('div');
    divTag.classList.toggle('card');
    divTag.style.cssText += 'background-image: url(images/' + data[i].src + ');';

    // create text
    pElement = document.createElement('p');
    pElement.classList.toggle('overlay-text');
    pElement.textContent = data[i].text;

    if(i === 0) {
        divTag.classList.toggle('selected-card');
        selectedCard = divTag;
    }

    divTag.dataset.number = i;
    divTag.addEventListener('click', e => expandDiv(e, i));
    divTag.appendChild(pElement);
    body.appendChild(divTag);
}

function expandDiv(e, number) {
    e.currentTarget.classList.toggle('selected-card');
    shrinkDiv();
    selectedCard = e.currentTarget;
}

function shrinkDiv() {
    selectedCard.classList.toggle('selected-card');
    //document.querySelector(`[data-number='${selectedCard}']`).classList.toggle('selected-card');
}