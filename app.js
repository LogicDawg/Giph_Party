console.log("Let's get this party started!");
const submit =document.querySelector('#searchgiphy');
const searchText = document.querySelector('#searchtext');
const imgHolder = document.querySelector('#imgholder');
const bttnRmv = document.querySelector('#removeimgs');
let gifSelector = 0;

bttnRmv.addEventListener('click',function(e){
    e.preventDefault()
    removeGifs();
})
    
submit.addEventListener('click', function(e){
        e.preventDefault();
        getGiph(searchText.value);
        searchText.value='';
    });


async function getGiph(search){
    try{
        let res =  await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=HQn7Ew2HTqlibY7nsKPspBdSYj6Sa3CR&q=${search}
        &limit=25&offset=0&rating=g&lang=en`)
        console.log(res.data.data[0].images.downsized_medium.url);
        let gifs = res.data.data;
        let img = document.createElement('IMG');
        img.classList.add('createdgifs');
        img.src=gifs[gifSelector].images.downsized_medium.url;
        imgHolder.append(img);
        gifSelector++;
        
    }
    catch(e){
        alert("NO gyph found with that name")
    }
}

function removeGifs(){
    let currentGifs = document.querySelectorAll('.createdgifs');
    for(gif of currentGifs){
        gif.remove();
    }
    gifSelector = 0;

}