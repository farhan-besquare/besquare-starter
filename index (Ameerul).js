var min = 0;
var sec = 0;
var start = true;
let startTime;

function timer() {
  if (start == false) {
    let currTime = 0;

    const id = setInterval(() => {
      const time_id = document.getElementById("timer");
      time_id.textContent = formatTime(currTime);
      currTime++;
      if (start == true) {
        clearInterval(id);
        document.getElementById("timer").innerHTML = "00:00";
      }
    }, 1000);
  }
}

function startTimer(duration) {
  let currTime = 0;

  const id = setInterval(() => {
    const time_id = document.getElementById("timer");
    time_id.textContent = formatTime(currTime);
    currTime++;
    if (currTime > duration) {
      clearInterval(id);
    }
  }, 1000);
}

function formatTime(time) {
  min = ("0" + Math.floor(time / 60)).substr(-2);
  sec = ("0" + Math.floor(time % 60)).substr(-2);
  return `${min}:${sec}`;
}

function countDown() {
  if (start == false) {
    var time = document.getElementById("timer").innerHTML;

    sec = parseInt(sec);

    sec = sec - 1;

    if (sec < 10 || sec == 0) {
      sec = "0" + sec;
    }

    document.getElementById("timer").innerHTML = "0" + min + ":" + sec;

    setTimeout("countDown()", 1000);

    console.log(sec);
  }
}

function reset() {
  start = true;
  clearTimeout(startTime);
  document.getElementById("timer").innerHTML = "00:00";
  sec = 0;
  min = 0;
}

function freePlay() {
  buttonName = document.getElementById("free").innerHTML;

  document.addEventListener(
    "click",
    function () {
      if (buttonName == "Free Play") {
        document.getElementById("free").innerHTML = "End Play";
        start = false;
        timer();
      }
      if (buttonName == "End Play") {
        document.getElementById("free").innerHTML = "Free Play";
        start = true;
        reset();
      }
    },
    false
  );
}

function startGame() {
  buttonName = document.getElementById("start").innerHTML;

  document.addEventListener(
    "click",
    function () {
      if (buttonName == "Start Game") {
        document.getElementById("start").innerHTML = "End Game";
        sec = 59;
        start = false;
        countDown();
      }
      if (buttonName == "End Game") {
        document.getElementById("start").innerHTML = "Start Game";
        start = true;
        reset();
      }
    },
    false
  );
}

function play(sound) {
  // play function
  var audio = new Audio("/sounds/" + sound + ".wav");
  audio.loop = false;
  audio.play();
}

function clearTarget() {
  const target_box = document.querySelector(".target-box");
  target_box.querySelectorAll("*").forEach((e) => e.remove());
}

const target_card_data = [
  {
    key: "d",
    status: "",
  },
  {
    key: "j",
    status: "",
  },
  {
    key: "d",
    status: "",
  },
  {
    key: "j",
    status: "",
  },
  {
    key: "d",
    status: "",
  },
  {
    key: "j",
    status: "",
  },
  {
    key: "d",
    status: "",
  },
  {
    key: "j",
    status: "",
  },
  {
    key: "d",
    status: "",
  },
  {
    key: "j",
    status: "",
  },
  {
    key: "d",
    status: "",
  },
  {
    key: "j",
    status: "",
  },
];

const card_history = [];

function updateTarget() {
  // target_card_data[0].status = "active";
  target_card_data.forEach((t) => {
    const target_card = document.createElement("div");
    target_card.classList.add("target-card");

    if (t.status !== "") {
      target_card.classList.add(t.status);
    }

    target_card.textContent = t.key;

    const target_box = document.querySelector(".target-box");
    target_box.appendChild(target_card);
  });

  // card_history.forEach((t) => {
  //   const target_card = document.createElement("div");
  //   target_card.classList.add("target-card");

  //   if (t.status !== "") {
  //     target_card.classList.add(t.status);
  //   }

  //   target_card.textContent = t.key;

  //   const target_box = document.querySelector(".target-box");
  //   target_box.appendChild(target_card);
  // });
}

let currPos = 0;

document.addEventListener("keypress", (event) => {
  var name = event.key;

  function playCard() {
    card_history.push(target_card_data[currPos]);

    if (target_card_data[currPos].key === name) {
      target_card_data[currPos].status = "correct";
      currPos++;

      console.log(target_card_data[currPos]);
      console.log(card_history);

      clearTarget();
      updateTarget();
    } else {
      target_card_data[currPos].status = "wrong";
      console.log(target_card_data[currPos].status);
      currPos++;

      console.log(target_card_data[currPos]);
      console.log(card_history);

      clearTarget();
      updateTarget();
    }
  }

  playCard();
});

document.addEventListener(
  "keypress",
  (event) => {
    var name = event.key;

    switch (name) {
      case "a":
        play("clap");
        break;
      case "s":
        play("hi_hat");
        break;
      case "d":
        play("kick");
        break;
      case "f":
        play("open_hat");
        break;
      case "g":
        play("boom");
        break;
      case "h":
        play("ride");
        break;
      case "j":
        play("snare");
        break;
      case "k":
        play("tom");
        break;
      case "l":
        play("tink");
        break;
      default:
        alert("Invalid Key");
    }
  },
  false
);

clearTarget();
updateTarget();
