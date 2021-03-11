
const engLarge = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '/', '&larr;'],
    ['@', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
    ['Caps Lock', 'a', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', '&lt;', '&gt;', '?', '/'],
    ['Space']
]

const rows = ['.row_one', '.row_two', '.row_three', '.row_four', '.row_five'];

// генерация клавиш

function init(size) {

    for (let i = 0; i < engLarge.length; i++) {

        let row = document.querySelector(rows[i]);
        row.innerHTML = '';

        engLarge[i].map(item => {

            let elem = document.createElement('div');

            elem.classList.add('key');

            if (item == '&larr;') elem.classList.add('back_space');
            else if (item == 'Caps Lock') elem.classList.add('caps_key');
            else if (item == 'Enter') elem.classList.add('enter_key');
            else if (item == 'Space') elem.classList.add('space_key');
            else if (item == '&larr;') elem.classList.add('back_space');


            elem.innerHTML = item;

            row.append(elem);
        });
    }



}
init('large');

//получаем элементы

const keys = document.querySelectorAll('.key');
const enter = document.querySelector('.enter_key');
const backSpace = document.querySelector('.back_space');
const caps = document.querySelector('.caps_key');
const space = document.querySelector('.space_key')
const closeBtn = document.querySelector('.close');
const allInputs = document.querySelectorAll('.inp');
const keyboardModal = document.querySelector('.kbd-modal')

let currentInput = '';



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
            currentInput.value += this.textContent.toUpperCase();
        }
        else {
            currentInput.value += this.textContent;
        }
    }
}

//enter

enter.onclick = function () {
    currentInput.value += '\n';
};

//caps lock

let capsState = false;

caps.onclick = function () {
    if (capsState) {
        capsState = false;
        document.querySelector('.caps_key').classList.remove('active');
    }
    else capsState = true, document.querySelector('.caps_key').classList.add('active');
}


//space

space.onclick = function () {
    currentInput.value += ' ';
}

//backspace

backSpace.onclick = () => {
    currentInput.value = currentInput.value.slice(0, currentInput.value.length - 1)
}

//close

closeBtn.onclick = () => {
    document.querySelector('.kbd-modal').classList.add('kbd-hidden');
};

document.querySelector('.img-keyboard').onclick = function () {
    keyboardModal.classList.remove('kbd-hidden');
}