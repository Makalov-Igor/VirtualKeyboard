const keys = document.querySelectorAll('.key');
const enter = document.querySelector('.enter_key');
const caps = document.querySelector('.caps_key');
const allInputs = document.querySelectorAll('.inp');
let currentInput = '';
let capsState = false;


//активируем необходимый input

for (item in allInputs) {
    allInputs[item].onclick = function () {
        currentInput = this;
    }
}

//выводим символ кликом

for (item in keys) {
    keys[item].onclick = function () {
        if (capsState) {
            currentInput.innerHTML += this.textContent;
            currentInput.value += this.textContent;
        }
        else {
            currentInput.innerHTML += this.textContent.toLowerCase();
            currentInput.value += this.textContent.toLowerCase();
        }
    }
}

//enter

enter.onclick = function () {

}

//caps lock

caps.onclick = function () {
    if (capsState) capsState = false;
    else capsState = true;
}

