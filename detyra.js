const bgImageEl = document.getElementById("bg-image")

window.addEventListener("scroll", ()=>{
    updateImage()

})

function updateImage(){
    bgImageEl.style.opacity = 1 - window.pageYOffset / 900
    console.log(1 - window.pageYOffset / 900);
    bgImageEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%"
}


const containerEl = document.querySelector(".container-fluid");

const careers = ["Designer", "Web Developer", "Freelancer"];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
    <h1>Unë jam ${careers[careerIndex].slice(0, 1) === "Unë" ? "jam" : "një"} ${careers[
    careerIndex
  ].slice(0, characterIndex)}</h1>
    `;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400);
}

//Butoni

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) => {
  const x = event.pageX - btnEl.offsetLeft;
  const y = event.pageY - btnEl.offsetTop;

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});




//Heart Over
const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});


//Reviews

const testimonials = [
    {
        name: "Client 1",
        photoUrl: "https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis architecto minimtenetur itatibus ratione minima perferendis explicabo modi!"
    },
    {
        name: "Client 2",
        photoUrl: "https://i.etsystatic.com/19129085/r/il/5801ca/2731491057/il_570xN.2731491057_ff7b.jpg",
        text: "Mira Gashi Aziri, i gjithë problemi bazohet se për çfarë arsye përdoren këto rrjete"
    },
    {
        name: "Client 3",
        photoUrl: "https://pbs.twimg.com/media/FSXn9kkWYAA_gc2?format=jpg&name=360x360",
        text: "Jo rrallë, është trajtuar çështja nëse këto rrjete janë me të vërtetë sociale apo asociale"
    },
];

const imgEl = document.querySelector("img.use");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 10000);
}
