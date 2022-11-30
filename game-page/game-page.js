const btnGo = document.querySelector('.btn-go');
const btnStart = document.querySelector('.btn-start');
const imgOut = document.querySelector('.imgOut');
const input = document.querySelector('.input');
const statusBar = document.querySelector('.status');
const frame = document.querySelector('.container');
const btnMenu = document.querySelector('.btn-menu');
const result = document.querySelector('.result')

let pastDataKey = [];
score = 0;
row = 0;

game()
btnGo.addEventListener('click', comparison)
btnMenu.addEventListener('click', () => {
    window.location.href = '/start-page/start-page.html'
})


function game() {
    score=0
    key = createKey();
    imgOut.innerHTML = `<img src="${key}" alt="" data-key="${key}">`
    
    renderImage()
}

function createKey() {
    const keys = Object.keys(localStorage)
    const key = keys[Math.floor(Math.random()*keys.length)]
    return key
}



function renderImage () {   
    if (pastDataKey.length-1 == localStorage.length) {
        row = localStorage.length
        comparison()
    } else {
    }
    key = createKey();
    bool = in_array(key, pastDataKey)
    while (bool == true) {
        key = createKey();
        bool = in_array(key, pastDataKey)
    } 
    imgOut.innerHTML = `<img src="${key}" alt="" data-key="${key}">`
    pastDataKey.push(key)
    row++
    const image = document.querySelector('[data-key]')
}


function in_array (value, array) {
        for(var i=0; i<array.length; i++){
            if(value == array[i]) return true;
        }
        return false;
    }
 

function comparison () {
    const image = document.querySelector('[data-key]')
    let value = input.value;
    let dataAtribute = image.getAttribute('data-key');

    if (value == localStorage[dataAtribute]) {  // Добавляем или убираем очки
        score += 1;
    } else {
        score += 0;
    }

    if (row < localStorage.length) {   
        input.value = ""
        renderImage()
        
        } else {    // Конец игры
                frame.classList.add('hidden');
                result.classList.remove('hidden')
                statusBar.classList.remove('hidden');
                btnMenu.classList.remove('hidden');
                input.value = ""
                statusBar.innerHTML = `<h2>Правильных ответов: ${score} из ${localStorage.length}</h2>`
                row=0
            
    }
}