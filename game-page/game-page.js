const btnGo = document.querySelector('.btn-go');
const btnStart = document.querySelector('.btn-start');
const imgOut = document.querySelector('.imgOut');
const input = document.querySelector('.input');
const statusBar = document.querySelector('.status');
const frame = document.querySelector('.container');
const btnMenu = document.querySelector('.btn-menu');

let pastDataKey=['https://steelline39.ru/upload/resize_cache/iblock/722/660_496_1/7221ea4d466d59c1c2b771919d3980bf.jpg'];
score = 0;
row = 0;

game()
btnGo.addEventListener('click', comparison)
btnMenu.addEventListener('click', () => {
    window.location.href = '/start-page/start-page.html'
})


function game() {
    score=0

    renderImage()
}


function renderImage () {   
    const keys = Object.keys(localStorage)
    const key = keys[Math.floor(Math.random()*keys.length)]
    bool = in_array(key, pastDataKey)
    
    if (bool == true) {
    } else {
        imgOut.innerHTML = `<img src="${key}" alt="" data-key="${key}">`
        pastDataKey.push(key)
    }
        
    const image = document.querySelector('[data-key]')
}


function in_array (value, array) {
        for(var i=0; i<array.length; i++){
            if(value == array[i]) return true;
        }
        return false;
    }


function comparison () {

    if (row < localStorage.length) {   

        const image = document.querySelector('[data-key]')
        let value = input.value;
        let dataAtribute = image.getAttribute('data-key');
        
        if (value == localStorage[dataAtribute]) {  // Добавляем или убираем очки
            score += 1;
        } else {
            score += 0;
        }

        row++
        input.value = ""
        renderImage()
        
        } else {    // Конец игры
                frame.classList.add('hidden');
                statusBar.classList.remove('hidden');
                btnMenu.classList.remove('hidden');
                input.value = ""
                statusBar.innerHTML = `<h2>${score} из ${localStorage.length}</h2>`
                row=0
            
    }
}