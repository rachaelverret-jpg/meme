let form = document.querySelector("form");
let container = document.querySelector(".container");

form.addEventListener("submit", handleSubmit);
container.addEventListener("click", handleRemove);

function handleSubmit(e) {
  e.preventDefault();

  // grab values from form
  let imageUrl = e.target.image.value;
  let textAbove = e.target.text_above.value;
  let textBelow = e.target.text_below.value;

  // add new card for meme
  addMeme(imageUrl, textAbove, textBelow);

  // reset our form
  e.target.reset();
}

function addMeme(imageUrl, textAbove, textBelow) {
  let memeRow = document.querySelector(".container > .row");

  let memeWrapper = document.createElement("div");
  memeWrapper.classList.add("col-md-6", "col-12");

  let newMeme = document.createElement("div");
  newMeme.classList.add("meme");
  memeWrapper.appendChild(newMeme);

  let overlay = document.createElement("div");
  overlay.classList.add("overlay");
  newMeme.appendChild(overlay);

  let x = document.createElement("span");
  x.classList.add("oi", "oi-x");
  overlay.appendChild(x);

  let pAbove = document.createElement("p");
  pAbove.innerText = textAbove;
  newMeme.appendChild(pAbove);

  let img = document.createElement("img");
  img.src = imageUrl;
  newMeme.appendChild(img);

  let pBelow = document.createElement("p");
  pBelow.innerText = textBelow;
  newMeme.appendChild(pBelow);

  memeRow.appendChild(memeWrapper);
}

function handleRemove(e) {
  if (e.target.classList.contains("overlay")) {
    e.target.parentElement.parentElement.remove();
  }
}
