console.log("bruh");

//presssing keys for sounds
function playsound(key) {
  let audio;
  if (key === "a") {
    audio = new Audio("./sounds/clap.wav");
  } else if (key === "s") {
    audio = new Audio("./sounds/hi_hat.wav");
  } else if (key === "d") {
    audio = new Audio("./sounds/kick.wav");
  } else if (key === "f") {
    audio = new Audio("./sounds/open_hat.wav");
  } else if (key === "g") {
    audio = new Audio("./sounds/boom.wav");
  } else if (key === "h") {
    audio = new Audio("./sounds/ride.wav");
  } else if (key === "j") {
    audio = new Audio("./sounds/snare.wav");
  } else if (key === "k") {
    audio = new Audio("./sounds/tom.wav");
  } else if (key === "l") {
    audio = new Audio("./sounds/tink.wav");
  }
  audio.play();
}

function checkkeys(event) {
  console.log(event.key);
  playsound(event.key);
}
document.addEventListener("keydown", checkkeys);

//query selector
// clears the current display content based of html
function clearTarget() {
  const target_box = document.querySelector(".target-box");
  target_box.querySelectorAll("*").forEach((item) => item.remove());
}

//target array
const target_card_data = [
  {
    key: "A",
    status: "",
  },
  {
    key: "G",
    status: "",
  },
  {
    key: "G",
    status: "",
  },
  {
    key: "",
    status: "active",
  },
  {
    key: "",
    status: "correct",
  },
  {
    key: "",
    status: "wrong",
  },
  {
    key: "",
    status: "timeout",
  },
];

const card_history = [];

function updateTarget() {
  target_card_data.forEach((item) => {
    // <div></div>
    const target_card = document.createElement("div");
    // <div class="target-card"></div>
    target_card.classList.add("target-card");
    if (item.status !== "") {
      // <div class="target-card active"></div>
      target_card.classList.add(item.status);
    }

    // <div class="target-card active">A</div>
    target_card.textContent = item.key;

    // <div class="target-box">
    //    <div class="target-card active">A</div>
    // </div>
    const target_box = document.querySelector(".target-box");
    target_box.appendChild(target_card);
  });
}

function startTimer(duration) {
  let current_time = 1;

  const interval_id = setInterval(() => {
    const timer_id = document.getElementById("timer");
    timer_id.textContent = formatTime(current_time);
    current_time++;
    if (current_time > duration) {
      clearInterval(interval_id);
    }
  }, 1000);
}

// time - seconds 00:00
function formatTime(time) {
  minutes = ("0" + Math.floor(time / 60)).substr(-2);
  seconds = ("0" + Math.floor(time % 60)).substr(-2);
  return `${minutes}:${seconds}`;
}

clearTarget();
updateTarget();
startTimer();
