function counterSum() {
    let elem = document.getElementById('show-result');
    let result = elem.innerText; 
    let counter = document.getElementById('counter').value;
    let checkText = checkInputField(counter);

    if(checkText) {
        if(!(counter == "")) {
            let sum = parseInt(result) + parseInt(counter);
            elem.textContent= sum;
        } else {
            alert('You have not entered any values!');
        }
    } else {
        alert('Warning! You have entered a character or symbol!');
    }
};

function counterSub() {
    let elem = document.getElementById('show-result');
    let result = elem.innerText; 
    let counter = document.getElementById('counter').value;
    let checkText = checkInputField(counter);

    if(checkText) {
        let sub = parseInt(result) - parseInt(counter);
        elem.textContent= sub;
    } else {
        alert('Warning! You have entered a character or symbol!');
    }
};


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

console.log("Script loaded!");