 // Confetti Library load करो
const confettiScript = document.createElement("script");
confettiScript.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
document.head.appendChild(confettiScript);

// Festival List

const festivals = [
  { 
    name: "🎉 Happy New Year 🎆", 
    date: "01-01", 
    message: "Wishing you a wonderful New Year full of happiness and success!" 
  },
  { 
    name: "🌸 Happy Holi 🌈", 
    date: "14-03", 
    message: "Celebrate colors, joy, and togetherness this Holi!" 
  },
  {
    name:"Dr BR Ambedkar Jayanti" , 
    date:"14-04" , 
    message:"**Wishing You All Happy Ambedkar Jayanti**"
  }, 
  { 
    name: "👩‍🏫 Happy Teacher's Day 👨‍🏫", 
    date: "05-09", 
    message: "Wishing all teachers a very Happy Teacher's Day! "
  }, 
    
{
   name: "* Guru Ghasidas  Jayanti *",
   date: "18-12",
   message: "Happy GURU GHASIDAS  Jayanti"
}, 

  { 
    name: "🎄 Merry Christmas 🎅", 
    date: "25-12", 
    message: "May Christmas bring peace, love, and happiness to your home!" 
  } , 
  
];
// आज की Date dd-mm format में
const today = new Date();
const todayStr = ("0" + today.getDate()).slice(-2) + "-" + ("0" + (today.getMonth() + 1)).slice(-2);

// Festival Match
const festival = festivals.find(f => f.date === todayStr);

// अगर आज festival है तो wishing text + confetti show करो
if (festival) {
  const wishBox = document.getElementById("festivalWish");
  wishBox.innerText = festival.name + "\n" + festival.message;
  wishBox.style.display = "block";

  // बार-बार confetti चलाओ
  setInterval(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, 2000);
