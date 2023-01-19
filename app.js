const btn = document.querySelector('.btn')
const input = document.querySelector('.anime')
const foto = document.querySelector('.foto')

btn.addEventListener('click',  () => {
   const nomeDoAnime = input.value;
    if(nomeDoAnime === '') {
        alert('digite o nome de um anime')
        return
    } 
    fetchAnime(nomeDoAnime)
})






const fetchAnime = async anime => {
    const url = `https://api.jikan.moe/v4/anime?q=${anime}&sfw`

    const response = await fetch(url)
    await response.json()
    .then(anime => {

        const gerarCardDoAnime = () => {
            let cards = [];

           anime.data.map(item => {
             cards.push( `<div class="card-anime" data-url=${item.url}>
                <img class="anime-foto" src=${item.images.jpg.image_url}></img>
                <span class="nome-anime">${item.title}</span>
              </div>`)
                
              foto.innerHTML = cards.join('')
              

              const linksDosAnimes = document.querySelectorAll('.card-anime');

              linksDosAnimes.forEach(card => {
                card.addEventListener('click', e => {
                    const url = e.currentTarget.getAttribute('data-url')
                    window.open(url, '_blank')
                })
              })
            })
            
        }

        gerarCardDoAnime()
    })
}

