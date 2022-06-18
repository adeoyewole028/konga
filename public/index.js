let dropRight = document.querySelectorAll(".drop-right");
let rightContent = document.querySelector(".drop-right-content");

// dropRight.addEventListener("mouseover", function () {
//   rightContent.classList.toggle("hidden");
// });

let drops = [...Array(dropRight.length)].map((_, i) => {
  dropRight[i].addEventListener("mouseenter", function (e) {
    console.log(e);
    rightContent.classList.remove("hidden");
  });
});

let dropss = ""

drops.forEach(function (drop) {
  console.log(drop);
});
