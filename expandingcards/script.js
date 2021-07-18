const body = document.body;
const container = document.createElement('div');
container.classList.toggle('container');

// data for each element to be shown
// require only text and image

const data = [
    {
        text:'text1',
        src:'photo-1480796927426-f609979314bd.jpg'
    },
    {
        text:'text2',
        src:'photo-1504109586057-7a2ae83d1338.jpg'
    },
    {
        text:'text3',
        src:'photo-1528360983277-13d401cdc186.jpg'
    },
    {
        text:'text4',
        src:'photo-1626374292195-09d1f06d6ced.jpg'
    },
    {
        text:'text5',
        src:'photo-1626539233615-3aab72e67b46.jpg'
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
    pElement = document.createElement('h3');
    pElement.textContent = data[i].text;

    if(i === 0) {
        divTag.classList.toggle('selected-card');
    }

    divTag.addEventListener('click', e => {
        shrinkLastActiveDiv();
        expandDiv(e, i);
    });
    divTag.appendChild(pElement);
    container.appendChild(divTag);
}
body.appendChild(container);


const cards = document.querySelectorAll('.card');

function expandDiv(e, number) {
    e.currentTarget.classList.toggle('selected-card');
}

function shrinkLastActiveDiv() {
    cards.forEach(card => card.classList.remove('selected-card'));
    
}