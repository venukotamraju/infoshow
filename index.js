const form = document.querySelector('#search_form');
const input = document.querySelector('input')

const imgContainer = document.querySelector("#imgContainer")
const showName = document.querySelector("#showName")
const  type = document.querySelector("#type")
const lang = document.querySelector("#languages")
const genre = document.querySelector("#genres")
const summary = document.querySelector("#summary")
const rating = document.querySelector("#rating")

const info = document.querySelector('#info')
const preInfo = document.querySelector('#preInfo')
info.classList.toggle('display')
// preInfo.classList.remove('visibility')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const searchTerm = input.value
    const getShowDetails = async function(){
        const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
        const data = await res.json()
        console.log(data[0])
        
        info.classList.toggle('display')
        preInfo.classList.toggle('display')
        
        imgContainer.style.backgroundImage = `url("${data[0].show.image.original}")`
        showName.innerText = data[0].show.name
        type.innerText = `Type: ${(data[0].show['type'])}`
        lang.innerText = `Languages: ${(data[0].show['language'])}`
        genre.innerText = `Genres: ${(data[0].show['genres'])}`
        rating.innerText = `Rating - Average: ${(data[0].show.rating.average)}`
        summary.innerHTML =data[0].show.summary 
        
    }
    getShowDetails()

})



