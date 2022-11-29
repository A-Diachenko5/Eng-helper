const btnGame = document.querySelector('.btn-game');
const btnList = document.querySelector('.btn-list')
const btnAuthor = document.querySelector('.btn-author')

btnGame.addEventListener('click', () => {
    window.location.href = '/game-page/game-page.html'
})

btnList.addEventListener('click', () => {
    window.location.href = '/list-page/list-page.html'
})

btnAuthor.addEventListener('click', () => {
    window.location.href = '/author-page/author-page.html'
})