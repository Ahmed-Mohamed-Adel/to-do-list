const button = document.querySelector("button");
const input = document.querySelector("input");
const section = document.querySelector("#sec");
const trash = document.querySelector("icon-trash");
const para = document.querySelectorAll("p");

section.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    case "icon-trash icon":
      eo.target.parentElement.parentElement.remove();

      break;

    case "icon-angry2 icon":
      eo.target.classList.add("dn");
      const heart = `<span class="icon-heart"></span>`;

      eo.target.parentElement.parentElement
        .getElementsByClassName("tast-text")[0]
        .classList.add("finish");

      eo.target.parentElement.innerHTML += heart;

      break;

    case "icon-heart":
      eo.target.parentElement.parentElement
        .getElementsByClassName("tast-text")[0]
        .classList.remove("finish");
      eo.target.classList.add("dn");

      const span = `<span class="icon-angry2 icon"></span>`;

      eo.target.parentElement.innerHTML += span;
      break;

    case "icon-star icon":
      eo.target.classList.add("orange");
      section.prepend(eo.target.parentElement);
      break;

    case "icon-star icon orange":
      eo.target.classList.remove("orange");
      break;
  }
});

button.addEventListener("click", (eo) => {
  eo.preventDefault();

  const task = `  <div class="task">
        <span class="icon-star icon"></span>
        <p lang="ar" class="tast-text">${input.value}</p>
        <div>
          <span class="icon-trash icon"></span>
          <span class="icon-angry2 icon"></span>
        </div>
        <!-- <span class="icon-heart"></span> -->
      </div>`;

  section.innerHTML += task;

  input.value = "";
});

trash.addEventListener("click", (eo) => {});
