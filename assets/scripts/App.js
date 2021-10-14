const departMinutes = 20
let temps = departMinutes * 60

const timerElement = document.getElementById("timer")

setInterval(() => {
  let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)

  minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement.innerText = `${minutes}:${secondes}`
  temps = temps <= 0 ? 0 : temps - 1
  if (temps == 0) {
    FinDuJeu()
  }
}, 1000)



let inventory = {
    key: false,
    airsoft: false,
    notepad: false
}

let FinDuJeu = () => {
    if (inventory.key == true && inventory.airsoft == true && inventory.notepad == true) {
        document.location.href="win.html";
    }
    else {
        document.location.href="lose.html";
    }
}

console.log(FinDuJeu)
