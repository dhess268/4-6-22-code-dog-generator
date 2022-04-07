
const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'

const select = document.querySelector('.breeds')

fetch(BREEDS_URL)
    .then(res => {
        return res.json();
    })
    .then(data => {
        const breedsObject = data.message
        const breedsArray = Object.keys(breedsObject)
        for(let i = 0; i < breedsArray.length; i++){
            const option = document.createElement('option') // Creates a new element with the option tag
            option.value = breedsArray[i] // <option value = 'breed'>
            option.innerText = breedsArray[i]
            select.appendChild(option)
        }
    })


    select.addEventListener('change', event => {
        let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
        getDoggoImg(url)
        // 
    })


    let dogPic = document.querySelector('.dog-img')

    const getDoggoImg = url => {
        fetch(url) // go to api url above
            .then(res =>{
                return res.json() //get JSON message back
            })
            .then(data => {
                dogPic.src = data.message //extract message from JSON and attach to img tag as new source
            })
    }