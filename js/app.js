let divContainer = document.createElement('div');
divContainer.id = 'root';
divContainer.className = 'vh-100 d-flex align-items-center justify-content-center flex-column';
document.body.appendChild(divContainer);

let titleCounter = document.createElement('h1');
titleCounter.innerHTML = 'Counter';

let showResult = document.createElement('h3');
showResult.id = 'show-result';
showResult.innerHTML = '0';

let formContainer = document.createElement('form');
formContainer.id = 'mobile-display';
formContainer.className = 'd-flex';

let inputCounter = document.createElement('input');
inputCounter.type = 'text';
inputCounter.id= 'counter';
inputCounter.value = '1';
inputCounter.className = "text-center py-2";
inputCounter.setAttribute('name', 'counter');

let buttonPlus = document.createElement('button');
buttonPlus.id = 'plus-btn';
buttonPlus.type = 'button';
buttonPlus.className = 'btn btn-dark';

let buttonMinus = document.createElement('button');
buttonMinus.id = 'minus-btn';
buttonMinus.type = 'button';
buttonMinus.className = 'btn btn-dark';

let iconPlus = document.createElement('i');
iconPlus.className = 'fas fa-plus';

let iconMinus = document.createElement('i');
iconMinus.className = 'fas fa-minus';

let errorDiv = document.createElement('div');
errorDiv.id = 'error';
errorDiv.className = 'mx-auto my-3 p-3 form-control is-invalid';

buttonPlus.appendChild(iconPlus);
buttonMinus.appendChild(iconMinus);
formContainer.append(inputCounter, buttonPlus, buttonMinus);
divContainer.append(titleCounter, showResult, formContainer, errorDiv);

const addNumberToCounter = (symbol) => {
    let elem = document.getElementById('show-result');
    let result = parseInt(document.getElementById('show-result').innerHTML);
    let counterText = document.getElementById('counter').value;
    let counter = parseInt(counterText);
    let checkText = checkInputField(counterText);
    if(checkText) {
        if(counterText != "") {
            switch (symbol) {
                case "plus":
                    result+= counter;
                    break;
                case "minus":
                        result-= counter;
                    break;
            }
            elem.innerHTML=  result;
        } else {
            alert('You have not entered any values!');
        }
    } else {
        alert('Warning! You have entered a character or symbol!');
    }
}

function checkInputField(checkString) {
    let result = true;
    let errorDiv = document.getElementById('error');
    let counter = document.getElementById('counter');

    checkString = checkString.replace(/ /g, '');

    for(let i =0; i <= checkString.length-1; i++ ) {
        if(!(Number.isInteger(parseInt(checkString[i]))))  {
            result = false;
            checkString ="";
            errorDiv.style.display = "block";
            errorDiv.innerHTML = 'Warning! You have entered a character or symbol!';
            counter.classList.add('form-control');
            counter.classList.add('is-invalid');
            break;
        } else {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
            counter.classList.remove('form-control');
            counter.classList.remove('is-invalid');
        }
    }
    return result;
}
inputCounter.addEventListener("input", () => checkInputField(document.getElementById('counter').value));

const plusBtnElem = document.getElementById("plus-btn");
const minusBtnElem = document.getElementById("minus-btn");

plusBtnElem.addEventListener("click", () => addNumberToCounter("plus"));
minusBtnElem.addEventListener("click", () => addNumberToCounter("minus"));
console.log("Script loaded!");