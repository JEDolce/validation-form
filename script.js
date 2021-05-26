const formu = document.querySelector('button');
const inputs = Array.from(document.getElementsByTagName('input'));

function errorLay(i) {
    inputs[i].style.border = '1px solid hsl(0, 100%, 74%)';
    inputs[i].style.background = "url('images/icon-error.svg')no-repeat center right";
}

function normalLay(i) {
    inputs[i].style.border = '1px solid black';
    inputs[i].style.background = 'none';
}

formu.addEventListener('click', (e) => {
    e.preventDefault();

    let errorMsg = Array.from(document.getElementsByName('mensaje'));
    let count = 0;

    for (let i = 0; i < inputs.length; i++) {
        if ( i != 2) {
            if (inputs[i].value.length < 1) {
                errorMsg[i].classList.add('error'); 
                errorLay(i);
                count++; 
                
            } else {
                errorMsg[i].classList.remove('error'); 
                normalLay(i);
            }
        } else {
            if (!inputs[i].value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                errorMsg[i].classList.add('error'); 
                errorLay(i);
                count++;
                
            } else {
                errorMsg[i].classList.remove('error'); 
                normalLay(i);
            };
        }          
    }

    if (count == 0) {
        alert(`Congrats ${inputs[0].value}! Your submission was accepted`)
    };
});
  

