const display = document.getElementById("display");
const buttons = document.querySelectorAll(".drum-pad");
const audioElements = document.querySelectorAll("audio");

const audio = new Audio();

const playSound = (sound) => {
    audio.currentTime = 0;
    audio.src = sound;
    audio.play().catch(error => console.log(error));
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
    audio.currentTime = 0;
    audio.play().catch(error => console.log(error));
    display.textContent = audio.innerText
    playKey(key)
  }
  })
   

buttons.forEach(button => button.addEventListener("click", () => {
  const audioFile = button.firstElementChild;
  const audioSrc = audioFile.src;
  display.textContent = audioFile.innerText;
  playSound(audioSrc)
}))