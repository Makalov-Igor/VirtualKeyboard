
const engLarge = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '/', '&larr;'],
    ['@', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']'],
    ['Caps Lock', 'A', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '&lt;', '&gt;', '?', '/'],
    ['Space']
]

const rows = ['.row_one', '.row_two', '.row_three', '.row_four', '.row_five'];


function init(size) {

    for (let i = 0; i < engLarge.length; i++) {

        let row = document.querySelector(rows[i]);
        row.innerHTML = '';

        engLarge[i].map(item => {

            let elem = document.createElement('div');

            if (item == '&larr;') elem.classList.add('back_space');
            else if (item == 'Caps Lock') elem.classList.add('caps_key');
            else if (item == 'Enter') elem.classList.add('enter_key');
            else if (item == 'Space') elem.classList.add('space_key');
            else if (item == '&larr;') elem.classList.add('back_space');

            elem.classList.add('key');
            if (size == 'lower') {
                elem.innerHTML = item.toLowerCase();
            }
            else elem.innerHTML = item;
            row.append(elem);
        })
    }



}
init();


const keys = document.querySelectorAll('.key');
const enter = document.querySelector('.enter_key');
const backSpace = document.querySelector('.back_space');
const caps = document.querySelector('.caps_key');
const space = document.querySelector('.space_key')
const allInputs = document.querySelectorAll('.inp');
let currentInput = '';
let capsState = true;


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
    if (capsState) {
        init('lower');
        capsState = false;
    }
    else {
        init();
        capsState = true;
    }
}

//space

space.onclick = function () {
    currentInput.value += ' ';
}

//backspace

backSpace.onclick = () => {
    currentInput.value = currentInput.value.slice(0, currentInput.value.length - 1)
}

