let search = new URLSearchParams(window.location.search);
let singerId = search.get(`singerid`);
let songsNode = document.querySelector(`.songs`);
console.log(singeId);
let album = albumList[albumId-1];


function sendDataToPlayer(id){
    console.log(id);
    window.parent.postMessage({
        songIdd: id,
    }, '*');
}




function renderAlbum(){
    songsNode.innerHTML = '';
    console.log('start...');

        for(let o = 0; o < album.songsId.length; o++){
            console.log(`o = ${o}`);
            let song = list[album.songsId[o]-1];
            let finalSong = document.createElement('div');
            let buff = [`music-card`,`text-white`,`d-flex`,`song${song.id}`,`album${album.id}`];
            for(let i = 0; i < buff.length; i++){
                finalSong.classList.add(buff[i]);
            }
            finalSong.addEventListener('click', ()=>{
                sendDataToPlayer(song.id+1);
            })
            songsNode.appendChild(finalSong);

            finalSong.innerHTML = `
            <img class="songImage" src="${getAlbumImage(albumId)}" alt="" height="80px" width="80px">
            <div class="song-info">
              <h5 class="song-name">${song.nameSong}</h5>
              <p class="song-artist">${song.singer}</p>
              <p class="song-duration">${song.duration}</p>
            </div>`

            /*songsNode.innerHTML += `
            <div class="song d-flex">
            <img class="songImage" src="${getAlbumImage(albumId)}" alt="" height="80px" width="80px">
            <div class="song-info">
              <h5 class="song-name">${song.nameSong}</h5>
              <p class="song-artist">${song.singer}</p>
              <p class="song-duration">${song.duration}</p>
            </div>
            </div>`;*/
    }
    console.log('completed...');
}


document.addEventListener(`DOMContentLoaded`, renderAlbum());