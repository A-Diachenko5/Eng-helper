const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const imgOut = document.querySelector('.imgOut')
const inputURL = document.querySelector('.input-URL')
const inputWord = document.querySelector('.input-word')
const btnAdd = document.querySelector('.btnAdd')
const btnDelete = document.querySelector('.btnDelete')
const inputDelete = document.querySelector('.input-word-delete')
const statusBar = document.querySelector('.status')



localStorage.setItem('https://wp-s.ru/wallpapers/5/18/289291145046987/evropejskaya-koshka-dikij-vzglyad.jpg', 'cat')
localStorage.setItem('https://static.carthrottle.com/workspace/uploads/posts/2018/05/bb9c5d7d217fce90e7b92867cbccef95.jpg', 'car')
localStorage.setItem('https://allstateshomeimprovement.com/wp-content/uploads/2018/08/bigstock-Luxury-Home-3993846.jpg', 'home')

renderImage ()
btn.addEventListener('click', comparison)
btnAdd.addEventListener('click', addImage)
btnDelete.addEventListener('click', deleteImage)


function renderImage () {
    const keys = Object.keys(localStorage)
    const key = keys[Math.floor(Math.random()*keys.length)]
    imgOut.innerHTML = `<img src="${key}" alt="" data-key="${key}">`
}

function comparison () {
    const image = document.querySelector('[data-key]')
    let value = input.value;
    const images = Object.keys(localStorage)
    let dataAtribute = image.getAttribute('data-key');
    
    if (value == localStorage[dataAtribute]) {
        statusBar.innerHTML = '<h2>right!</h2>'
    } else {
        statusBar.innerHTML = '<h2>wrong:(</h2>'
    }
    renderImage()
    input.value = ""
}

function addImage() {
    let valueURL = inputURL.value;
    let valueWord = inputWord.value;

    localStorage[valueURL] = valueWord
    inputURL.value = ""
    inputWord.value = ""
}

function deleteImage() {
    let valueDelete = inputDelete.value;
    localStorage.removeItem(valueDelete);
    inputDelete.value = ""
}

