function songToPlayer(id){
    console.log(`id = ${id}`);
    let preparedSongStruct = {
        title: list[id-1].nameSong,
        artist: list[id-1].singer,
        image: getImage(list[id-1].id),
        audio: `music/music/${list[id-1].id}.mp3`
    }
    loadSong(preparedSongStruct);
}

function renderQuickPicksList(){
    let quickPicksList = document.querySelector('.quickpicks');
    quickPicksList.innerHTML = '';
    for(let i = 0; i < list.length; i++){
        let quickPickSong = document.createElement('div');
        let buff = [`music-card`,`text-white`,`d-flex`,`song${list[i].id}`,`album${list[i].albumId}`];
        for(let o = 0; o < buff.length; o++){
            quickPickSong.classList.add(buff[o]);
        }
        quickPickSong.addEventListener('click', ()=>{
            songToPlayer(list[i].id);
        })
        quickPicksList.appendChild(quickPickSong);
        quickPickSong.innerHTML = `
        <img src="${getImage(list[i].id)}" alt="" width="100px" height="100px">
        <div class="music-main">
            <h4 class="music-card-title">${list[i].nameSong}</h4>
            <div class="music-card-description">
                <p class="music-card-performer">${list[i].singer}</p>
                <p class="music-card-duration">${list[i].duration}</p>
            </div>
        </div>
        `;
    }
}

function renderAlbumList(){
    let albumsList = document.querySelector(`.albums`);
    albumsList.innerHTML = '';
    for(let i = 0; i < list.length; i++){
        let album = document.createElement('div');
        let buff = [`music-card`,`text-white`,`d-flex`,`song${list[i].id}`,`album${list[i].albumId}`];
        for(let o = 0; o < buff.length; o++){
            album.classList.add(buff[o]);
        }
        album.addEventListener('click', ()=>{
            openAlbum(albumList[i].id);
        })
        albumsList.appendChild(album);
        album.innerHTML = `
        <img src="${getAlbumImage(albumList[i].id)}" alt="" width="100px" height="100px">
        <div class="music-main">
            <h4 class="music-card-title">${albumList[i].title}</h4>
            <div class="music-card-description">
                <p class="music-card-performer">${list[i].singer}</p>
                <p class="music-card-duration">${list[i].description}</p>
            </div>
        </div>
        `;
    }
}


/*          <div class="music-card text-white d-flex songID albumID">
              <img src="IMG" alt="" width="100px" height="100px">
              <div class="music-main">
                <h4 class="music-card-title">Title</h4>
                <div class="music-card-description">
                  <p class="music-card-performer">Artist</p>
                  <p class="music-card-duration">0:00</p>
                </div>
              </div>
            </div>
             */


function current1Time (){
    const clientDate = new Date();
    console.log(clientDate.getHours());
    return clientDate.getHours();
}

function what(hours){
    if(hours <= 4) return `Доброй ночи`; else if(hours <= 11) return `Доброго утра`; else if(hours <= 17) return `Доброго дня`; else if(hours <= 23) return `Доброго вечера`; else return `Привет`;
}

function aboba(text){
    document.querySelector(`.bigScreen`).innerHTML = `${text}, Пользователь`
}

function openAlbum(id){
    let albumFrame = document.querySelector(`.albumFrame`);
    albumFrame.src = `album.html?albumid=${id}`;
    window.location.hash = `albumFrame`
}

document.addEventListener(`DOMContentLoaded`, aboba(what(current1Time())));
document.addEventListener(`DOMContentLoaded`, renderQuickPicksList());
document.addEventListener(`DOMContentLoaded`, renderAlbumList());
document.addEventListener(`DOMContentLoaded`, songToPlayer(1));

window.addEventListener('message', function (event) {
    const data = event.data;
    songToPlayer(parseInt(data.songIdd) - 1);
});
