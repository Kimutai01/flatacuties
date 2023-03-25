// Your code here
const namesDiv = document.querySelector("#character-bar");
const characterDiv = document.querySelector(".characterInfo");
const paragraph = document.querySelector("p");
paragraph.id = "name";
const image = document.querySelector("img");
image.id = "image";
const h4 = document.createElement("h4");
h4.id = "votes";
const form = document.createElement("form");
form.id = "votes-form";
const input = document.createElement("input");
input.id = "votes-input";
input.type = "number";
input.name = "votes";

const submit = document.createElement("input");
submit.type = "submit";
submit.value = "Vote";
submit.id = "submit";
form.appendChild(input);
form.appendChild(submit);
characterDiv.appendChild(form);

fetch("http://localhost:3000/characters")
  .then((response) => response.json())
  .then((characters) => {
    characters.forEach((character) => {
      const span = document.createElement("span");
      span.classList.add("spa");
      span.innerHTML += character.name;
      namesDiv.appendChild(span);
      paragraph.innerHTML = `${character.name}`;
      image.src = character.image;
      image.alt = character.name;
      h4.innerHTML = `Total Votes: ${character.votes}`;
      characterDiv.appendChild(h4);

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const votes = parseInt(input.value);
        h4.innerHTML = `Total Votes: ${character.votes + votes}`;
      });

      span.addEventListener("click", () => {
        paragraph.innerHTML = character.name;
        image.src = character.image;
        image.alt = character.name;
        h4.innerHTML = `Total Votes: ${character.votes}`;
      });
    });
  });
const nameInput = document.querySelector("#inname");
console.log(nameInput.value);
const imageInput = document.querySelector("#image-url");
const addButt = document.querySelector("#addChar");

addButt.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(nameInput.value);
  console.log(imageInput.value);
  const newChar = {
    name: nameInput.value,
    image: imageInput.value,
    votes: 0,
  };
  fetch("http://localhost:3000/characters", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newChar),
  })
    .then((response) => response.json())
    .then((newChar) => {
      const span = document.createElement("span");
      span.classList.add("spa");
      span.innerHTML += newChar.name;
      namesDiv.appendChild(span);
      paragraph.innerHTML = `${newChar.name}`;
      image.src = newChar.image;
      image.alt = newChar.name;
      h4.innerHTML = `Total Votes: ${newChar.votes}`;
      characterDiv.appendChild(h4);
    });
});
