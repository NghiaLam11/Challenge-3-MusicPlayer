const audio = document.querySelector(".audio");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const nameMusic = document.querySelector(".name");
const musics = [
  {
    name: "Sweater Weather",
    url: "/audios/The_Neighbourhood_Sweater_Weather_Lyrics_.mp3",
  },
  {
    name: "Get Low",
    url: "/audios/Dillon_Francis_DJ_Snake_Get_Low_Official_Music.mp3",
  },
];
let musicLimitedPrev = musics.length - 1;
let musicLimitedNext = 0;
let musicPresent = 0;
// Previous music
const onPrev = () => {
  if (musicPresent !== 0) {
    let musicPrevious = musicPresent - 1;
    audio.src = musics[musicPrevious].url;
    nameMusic.innerHTML = musics[musicPrevious].name;
    musicPresent = -1;
    console.log("Prev");
  } else if (musicPresent === 0) {
    musicPresent = musicLimitedPrev;
    audio.src = musics[musicLimitedPrev].url;
    nameMusic.innerHTML = musics[musicLimitedPrev].name;
    console.log("Turn to last music");
  }
  audio.load();
  audio.play();
};
prev.addEventListener("click", onPrev);
// Next music
const onNext = () => {
  if (musicPresent !== musicLimitedPrev) {
    let musicNext = musicPresent + 1;
    audio.src = musics[musicNext].url;
    nameMusic.innerHTML = musics[musicNext].name;
    console.log("Next");
    musicPresent = +1;
  } else if (musicPresent === musicLimitedPrev) {
    musicPresent = musicLimitedNext;
    audio.src = musics[musicLimitedNext].url;
    nameMusic.innerHTML = musics[musicLimitedNext].name;
    console.log("Turn to first music");
  }
  audio.load();
  audio.play();
};
next.addEventListener("click", onNext);
// When mounted (rendered DOM element)
window.addEventListener("load", () => {
  audio.src = musics[musicPresent].url;
  nameMusic.innerHTML = musics[musicPresent].name;
  console.log("Loaded");
});
