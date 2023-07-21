const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

const IMG_PATH = `/Apps/movie-app/vithoba.jpg`
const title = "Panduranga Vittal"
const overview = "HareKrishna HareRama HariOm"


// // Get initial movies
// getMovies(search.value)

// async function getMovies(url) {
//     const res = await url
//     // const data = await res.json()

//     showMovies(res.results)
// }

// function showMovies(movies) {
main.innerHTML = ''
    for(i=0;i<=100;i++){
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH}" alt="${title}">
            <div class="movie-info">
                <h3>${title} ${i}</h3>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `
        main.appendChild(movieEl)
    }
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const searchTerm = search.value

//     if(searchTerm && searchTerm !== '') {
//         getMovies(searchTerm)
//         search.value = ''
//     } else {
//         window.location.reload()
//     }
// })
