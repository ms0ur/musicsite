let albumList = [
    {
        id: 1,
        title:"As It Was",
        description:"Описание:)))",
        songsId: [1],
        singer: "Harry Styles"
    },
    {
        id: 2,
        title:"Fine Line",
        description:"Описание:)))",
        songsId: [2, 3],
        singer: "Harry Styles"
    }
]

let list = [
    {
        id: 1,
        albumId: 1,
        nameSong: `As It Was`,
        singer: `Harry Styles`,
        duration: `2:48`
    },
    {
        id: 2,
        albumId: 2,
        nameSong: `Watermelon Sugar`,
        singer: `Harry Styles`,
        duration: `2:54`
    },
    {
        id: 3,
        albumId: 2,
        nameSong: `Adore You`,
        singer: `Harry Styles`,
        duration: `3:27`
    }
]

document.addEventListener(`DOMContentLoaded`, () => {
    window.location.hash = `picks`;
});

function getImage(id){
    return `/music/albumCover/${list[id-1].albumId}.png`
}
function getAlbumImage(id){
    return `/music/albumCover/${id}.png`
}