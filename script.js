const generateBtn = document.querySelector(".generateBtn");
const memeTitle = document.querySelector(".memeTitle");
const memeImage = document.querySelector(".memeImage");
const authorName = document.querySelector(".author");

function getMeme() {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res) => res.json())
    .then((data) => {
      const { author, title, url } = data;
      memeTitle.innerText = title;
      memeImage.src = url;
      authorName.innerText = `Meme By: ${author}`;
      console.log(author, title, url);
    });
}

getMeme();
generateBtn.addEventListener("click", () => {
  getMeme();
});
