
localStorage.setItem('https://wp-s.ru/wallpapers/5/18/289291145046987/evropejskaya-koshka-dikij-vzglyad.jpg', 'cat')
localStorage.setItem('https://static.carthrottle.com/workspace/uploads/posts/2018/05/bb9c5d7d217fce90e7b92867cbccef95.jpg', 'car')
localStorage.setItem('https://allstateshomeimprovement.com/wp-content/uploads/2018/08/bigstock-Luxury-Home-3993846.jpg', 'home')
localStorage.setItem('https://www.vsekastingi.ru/storage/2021/06/23/casting_444742.jpg','boy')
localStorage.setItem('https://turismoalia.com/sites/default/files/2020-04/sala%20uno%20roble.jpg','tree')
localStorage.setItem('https://profpogruzka.ru/wa-data/public/shop/products/79/08/879/images/1236/1236.650.jpg','box')
localStorage.setItem('https://upload.wikimedia.org/wikipedia/commons/7/73/Opened_book_lying_on_stone_ledge.jpg','book')

const btnGame = document.querySelector('.btn-game');
const btnList = document.querySelector('.btn-list')
const btnAuthor = document.querySelector('.btn-author')

btnGame.addEventListener('click', () => {
    window.location.href = '../game-page/game-page.html'
})

btnList.addEventListener('click', () => {
    window.location.href = '../list-page/list-page.html'
})

btnAuthor.addEventListener('click', () => {
    window.location.href = 'https://github.com/A-Diachenko5'
}) 