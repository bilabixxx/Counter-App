// parametri plus and minus 

const plusBtnElem = document.getElementById("plus-btn");
const minusBtnElem = document.getElementById("minus-btn");


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

plusBtnElem.addEventListener("click", () => addNumberToCounter("plus"));
minusBtnElem.addEventListener("click", () => addNumberToCounter("minus"));
console.log("Script loaded!");