const keys = document.querySelectorAll('.key');
const enter = document.querySelector('.enter_key');
const backSpace = document.querySelector('.back_space');
const caps = document.querySelector('.caps_key');
const space = document.querySelector('.space_key')
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
            currentInput.value += this.textContent;
        }
        else {
            currentInput.value += this.textContent.toLowerCase();
        }
    }
}

//enter

enter.onclick = function () {
    currentInput.value += '\n';
};

//caps lock

caps.onclick = function () {
    if (capsState) capsState = false;
    else capsState = true;
}

//space

space.onclick = function () {
    currentInput.value += ' ';
}

//backspace

backSpace.onclick = () => {
    currentInput.value = currentInput.value.slice(0, currentInput.value.length - 1)
}