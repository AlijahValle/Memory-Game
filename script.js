const img_path = [
  "images/Chicken.svg",
  "images/Dog.svg",
  "images/Elephant.svg",
  "images/Giraffe.svg",
  "images/Lion.svg",
  "images/Otter.svg",
  "images/Penguin.svg",
  "images/Sheep.svg",
  "images/Chicken.svg",
  "images/Dog.svg",
  "images/Elephant.svg",
  "images/Giraffe.svg",
  "images/Lion.svg",
  "images/Otter.svg",
  "images/Penguin.svg",
  "images/Sheep.svg",
];

const animal_imgs = [];

for (var i = 0; i < img_path.length; i++) {
  const animal_img = new Image();
  animal_img.src = img_path[i];
  animal_imgs.push(animal_img);
}

var sortItem = function () {
  var randNum = Math.random();

  if (randNum > 0.5) {
    return 2;
  } else {
    return -1;
  }
};

animal_imgs.sort(sortItem);

for (var i = 0; i < animal_imgs.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.appendChild(animal_imgs[i]);

  box.onclick = function () {
    this.classList.add("boxOpen");
    setTimeout(function () {
      if (document.querySelectorAll(".boxOpen").length > 1) {
        if (
          document.querySelectorAll(".boxOpen")[0].innerHTML ==
          document.querySelectorAll(".boxOpen")[1].innerHTML
        ) {
          document.querySelectorAll(".boxOpen")[0].classList.add("boxMatch");
          document.querySelectorAll(".boxOpen")[1].classList.add("boxMatch");

          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");

          if (
            document.querySelectorAll(".boxMatch").length == animal_imgs.length
          ) {
            alert("win");
          }
        } else {
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
        }
      }
    }, 500);
  };

  document.querySelector(".game").appendChild(box);
}
