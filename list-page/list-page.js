const inputURL = document.querySelector('.input-URL')
const inputWord = document.querySelector('.input-word')
const btnAdd = document.querySelector('.btnAdd')
const inputDelete = document.querySelector('.input-word-delete')
const btnDelete = document.querySelector('.btnDelete')
const btnMenu = document.querySelector('.btn-menu')
const wordList = document.querySelector('.word-list')
const total = document.querySelector('.total')


renderCard()

btnAdd.addEventListener('click', addImage)
btnDelete.addEventListener('click', deleteImage)
btnMenu.addEventListener('click', () => { window.location.href = '../start-page/start-page.html' })
wordList.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON'){
        console.log(event.target)
        return
    }  
    
    const id = event.target.dataset.key;
    deleteImage(id)
    
})

//  Добавление картинки
function addImage() {
    let valueURL = inputURL.value;
    let valueWord = inputWord.value;
    if (valueURL  === "") {
        console.log('error')
    } else {
    localStorage[valueURL] = valueWord
    inputURL.value = ""
    inputWord.value = ""
    renderCard()
    }
    
}

// Удаление картинки
function deleteImage(id) {
    let valueDelete = inputDelete.value;
    localStorage.removeItem(valueDelete);
    localStorage.removeItem(id);
    inputDelete.value = ""
    renderCard()
}

function renderCard () {
    wordList.innerHTML = ""

    const wordArr = Object.keys(localStorage)

    total.innerHTML = `<h1>Всего: ${localStorage.length}</h1>`

    for (i=0; i<localStorage.length;i++) {
        wordList.innerHTML += ` <div class="card ${wordArr[i]}">
                                    <div class="imgOut">
                                        <img src="${wordArr[i]}" alt="">
                                    </div>
                                    <div class="content">
                                        <h1>${localStorage.getItem(localStorage.key(i))}</h1>
                                        <button data-key="${wordArr[i]}">УДАЛИТЬ</button>
                                    </div>
                                </div>`
    }
}