async function getAnime() {
    try{
        const response = await fetch('https://api.jikan.moe/v4/top/anime')
        const data = await response.json()
        console.log(response)

        if (response.status == 200) {
            console.log('Succesful Fetch',data)
            data.data.forEach( anime => {
            document.getElementById("content").innerHTML += 
            `
            <div id="card" class=" shadow-md rounded-lg flex h-40 w-96 overflow-hidden">
                <img src="${anime.images.jpg.image_url}" id="img"  alt="" bg-red-400 w-full object-cover">
                <div class="p-2 w-1/2" id="name">
                <p>${anime.title}</p>
                <p>${anime.genres[0].name} | ${anime.genres[1].name}</p>
                <p>${anime.episodes} Episodes</p>
                </div>
            </div>
            `
            })
     
        }
        else {
            console.log('Unuccesful Fetch', data)
        } 
    }
    catch(error){
        console.log("Fetch Error:", error)
    }
}

getAnime();