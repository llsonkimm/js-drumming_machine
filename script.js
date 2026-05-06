const display = document.getElementById("display");
const buttons = document.querySelectorAll(".drum-pad");
const audioElements = document.querySelectorAll("audio");
const sounds = {
    'Q': 'Heater 1',
    'W': 'Heater 2',
    'E': 'Heater 3',
    'A': 'Heater 4',
    'S': 'Clap',
    'D': 'Open-HH',
    'Z': 'Kick-n-Hat',
    'X': 'Kick',
    'C': 'Closed-HH'
};


const playSound = (sound) => {
    sound.currentTime = 0;
    const playPromise = sound.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(error => console.log(error));
    }
  
  
  display.textContent = sounds[sound.id] || sound.id;
  
  
  const button = sound.parentElement;
  button.classList.add("active");
  
  setTimeout(() => {
    button.classList.remove("active")
  }, 100)
}

document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  const audio = document.getElementById(key);
  
if (audio && audio.classList.contains('clip')) {
        playSound(audio);
    }
  })
   

buttons.forEach(button => button.addEventListener("click", () => {
  const audio = button.querySelector(".clip");
  playSound(audio);
}))