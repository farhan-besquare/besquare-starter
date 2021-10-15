document.addEventListener(
  "keypress",
  (event) => {
    var name = event.key;

    switch (name) {
      case "a":
        var sound1 = new Audio("sounds/clap.wav");
        sound1.loop = false;
        sound1.play();
        break;
      case "s":
        var sound1 = new Audio("sounds/hi_hat.wav");
        sound1.loop = false;
        sound1.play();
        break;
      case "d":
        var sound1 = new Audio("sounds/kick.wav");
        sound1.loop = false;
        sound1.play();
        break;
      case "f":
        var sound1 = new Audio("sounds/open_hat.wav");
        sound1.loop = false;
        sound1.play();
        break;
      case "g":
        var sound1 = new Audio("sounds/boom.wav");
        sound1.loop = false;
        sound1.play();
        break;
      case "h":
        var sound1 = new Audio("sounds/ride.wav");
        sound1.loop = false;
        sound1.play();
        break;
      case "j":
        var sound1 = new Audio("sounds/snare.wav");
        sound1.loop = false;
        sound1.play();
        break;
      case "k":
        var sound1 = new Audio("sounds/tom.wav");
        sound1.loop = false;
        sound1.play();
        break;
      case "l":
        var sound1 = new Audio("sounds/tink.wav");
        sound1.loop = false;
        sound1.play();
        break;
    }
  },
  false
);

console.log("hi");
