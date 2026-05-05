const display = document.getElementById("display");
const buttons = document.querySelectorAll(".drum-pad");
const audioElements = document.querySelectorAll("audio");

const audio = new Audio();

const playSound = (sound) => {
    audio.src = sound;
    audio?.play();
}

const playKey = (key) => {
  const button = document.getElementById(key).parentElement;
  
  button.classList.add("active");
  
  setTimeout(() => {
    button.classList.remove("active")
  }, 100)
} 



window.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  const audio = document.getElementById(key);
  
  if(audio) {
    audio?.play();
    audio.currentTime = 0;
    display.textContent = audio.src.split("/")[5].replace(".mp3", "").split("_").join(" ")
    playKey(key)
  }
  })
   

buttons.forEach(button => button.addEventListener("click", () => {
  const audioFile = button.firstElementChild;
  const audioSrc = audioFile.src;
  const audioTitle = audioSrc.split("/")[5].replace(".mp3", "").split("_").join(" ")
  display.textContent = audioTitle;
  playSound(audioSrc)
}))