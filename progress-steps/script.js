let bars = document.getElementsByClassName('bar');
let steps = document.getElementsByClassName('step');

let currentStep = 0;
let maxSteps = 4;

let prevBtn = document.getElementById("prev-btn");
prevBtn.addEventListener('click', () => goBack());
let nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', () => goForward());

function goBack() {
    if(currentStep === 3) {
        nextBtn.classList.toggle('disabled');
    }
    if(currentStep === 0) {
        return;
    }
    currentStep--;
    for(let i = 3; i > 0; i--) {
        bars[i - 1].classList.remove('completed-bar');
        steps[i].classList.remove('completed-step');
        if(i - 1 === currentStep) {
            break;
        }
    }

    if(currentStep === 0) {
        prevBtn.classList.toggle('disabled');
    }
}

function goForward() {
    if(currentStep === 0) {
        prevBtn.classList.toggle('disabled');
    }
    if(currentStep === 3) {
        return;
    }

    currentStep++;
    for(let i = 0; i < maxSteps; i++) {
        if(i > 0) {
            bars[i - 1].classList.add('completed-bar');
        }
        steps[i].classList.add('completed-step');
        if(i === currentStep) {
            break;
        }
    }
    if(currentStep === 3) {
        nextBtn.classList.toggle('disabled');
    }
}