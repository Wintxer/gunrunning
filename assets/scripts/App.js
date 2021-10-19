
// Minuteur
const departMinutes = 30;
let temps = departMinutes * 60;

const timerElement = document.getElementById("timer");

setInterval(() => {
  let minutes = parseInt(temps / 60, 10);
  let secondes = parseInt(temps % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  secondes = secondes < 10 ? "0" + secondes : secondes;

  timerElement.innerText = `${minutes}:${secondes}`;
  temps = temps <= 0 ? 0 : temps - 1;
  if (temps == 0) {
    FinDuJeu();
  }
}, 1000);


// Inventaire
let inventory = {
    key: false,
    airsoft: false,
    book: false
};


// Fonction lors du clic sur les éléments du décor : clé et pistolet
let FoundSmthing = (e) => {
  if (e.classList.contains("guntofind")) {
    setTimeout(() => {
      e.classList.add("close");
      document.querySelector(".airsoft-static img").classList.add("open");
    }, 1000);
    inventory.airsoft = true;
  }
  else {
    e.classList.add("close");
    document.querySelector(".key-static img").classList.add("open");
    inventory.key = true;
    document.querySelector(".casier-static").classList.add("open");
  };
};

// Fonction pour le clic sur le casier
let Casier = () => {
  document.querySelector(".casier").classList.toggle("open");
  document.querySelector(".casier-static").classList.toggle("close");
  if (inventory.book == false) {
    setTimeout(() => {
      console.log("salut")
      let audio = document.querySelector(".audio-book");
      audio.play();
    }, 2500);
    setTimeout(() => {
      document.querySelector(".livre-static img").classList.add("open");
    }, 3200)
  }
  inventory.book = true;
  if (document.querySelector(".livre").classList.contains("open")) {
    document.querySelector(".livre").classList.toggle("open");
  };
  if (document.querySelector(".airsoft").classList.contains("open")) {
    document.querySelector(".airsoft").classList.toggle("open");
  };
  if (document.querySelector(".cadenas").classList.contains("open")) {
    document.querySelector(".cadenas").classList.toggle("open");
  };
  if (document.querySelector(".key").classList.contains("open")) {
    document.querySelector(".key").classList.toggle("open");
  };
};

// Fonction pour le clic sur la clé dans l'inventaire
let Key = () => {
  if (inventory.key == true) {
    document.querySelector(".key").classList.toggle("open");
    if (document.querySelector(".casier").classList.contains("open")) {
      document.querySelector(".casier").classList.toggle("open");
    };
    if (document.querySelector(".airsoft").classList.contains("open")) {
      document.querySelector(".airsoft").classList.toggle("open");
    };
    if (document.querySelector(".cadenas").classList.contains("open")) {
      document.querySelector(".cadenas").classList.toggle("open");
    };
    if (document.querySelector(".livre").classList.contains("open")) {
      document.querySelector(".livre").classList.toggle("open");
    };
  };
};

// Fonction pour le clic sur le pistolet dans l'inventaire
let Airsoft = () => {
  if (inventory.airsoft == true) {
    document.querySelector(".airsoft").classList.toggle("open");
    if (document.querySelector(".casier").classList.contains("open")) {
      document.querySelector(".casier").classList.toggle("open");
    };
    if (document.querySelector(".livre").classList.contains("open")) {
      document.querySelector(".livre").classList.toggle("open");
    };
    if (document.querySelector(".cadenas").classList.contains("open")) {
      document.querySelector(".cadenas").classList.toggle("open");
    };
    if (document.querySelector(".key").classList.contains("open")) {
      document.querySelector(".key").classList.toggle("open");
    };
  };
};

// Fonction pour le clic sur le livre dans l'inventaire
let Livre = () => {
  if (inventory.book == true) {
    document.querySelector(".livre").classList.toggle("open");  
    if (document.querySelector(".casier").classList.contains("open")) {
      document.querySelector(".casier").classList.toggle("open");
    };
    if (document.querySelector(".airsoft").classList.contains("open")) {
      document.querySelector(".airsoft").classList.toggle("open");
    };
    if (document.querySelector(".cadenas").classList.contains("open")) {
      document.querySelector(".cadenas").classList.toggle("open");
    };
    if (document.querySelector(".key").classList.contains("open")) {
      document.querySelector(".key").classList.toggle("open");
    };
  };
};

// Fonction pour le clic sur le cadenas de la porte
let Cadenas = () => {
  document.querySelector(".cadenas").classList.toggle("open");
  if (document.querySelector(".casier").classList.contains("open")) {
    document.querySelector(".casier").classList.toggle("open");
  };
  if (document.querySelector(".airsoft").classList.contains("open")) {
    document.querySelector(".airsoft").classList.toggle("open");
  };
  if (document.querySelector(".livre").classList.contains("open")) {
    document.querySelector(".livre").classList.toggle("open");
  };
  if (document.querySelector(".key").classList.contains("open")) {
    document.querySelector(".key").classList.toggle("open");
  };
};

let ControleCode = () => {
  let code1 = document.getElementById("code1").value;
  let code2 = document.getElementById("code2").value;
  let code3 = document.getElementById("code3").value;
  let code4 = document.getElementById("code4").value;
  console.log(code1+code2+code3+code4);
  if (code1+code2+code3+code4 == "1283840690" && inventory.key == true && inventory.airsoft == true && inventory.book == true) {
    setTimeout(() => {
      document.location.href="win.html";
    }, 2000);
  }
  else {
    alert("Ce n'est pas le bon code !");
  };
};

// Fonction pour la fin du jeu
let FinDuJeu = () => {
  document.location.href="lose.html";
};

let AmbientSound = document.querySelector(".ambientsound");
AmbientSound.volume = .5;
AmbientSound.addEventListener("canplay", function() {
  setTimeout(function() {
    AmbientSound.play();
  }, 2000);
});

let Audio = (e) => {
  document.querySelector("#"+e+" audio").play();
  //return myAudio.paused ? myAudio.play() : myAudio.pause();
}