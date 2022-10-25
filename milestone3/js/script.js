// **MILESTONE 3:**
// Stampare delle card formattate contenete immagini e testo (La grafica fornita è solo un esempio ma sentitevi liberi di “graficare” come preferite)

const row = document.querySelector(".row");
const namePerson = document.getElementById("name");
const rolePerson = document.getElementById("role");

const team = [
  {
    name:`Wayne Barnet`,
    role: `Founder & CEO`,
    immagine : `img/wayne-barnett-founder-ceo.jpg"`
  },
  {
    name:`Angela Caroll`,
    role: `Chief Editor`,
    immagine : `img/angela-caroll-chief-editor.jpg"`
  },
  {
    name:`Walter Gordon`,
    role: `Office Manager`,
    immagine : `img/walter-gordon-office-manager.jpg"`
  },
  {
    name:`Angela Lopez`,
    role: `Social Media Manager`,
    immagine : `img/angela-lopez-social-media-manager.jpg"`,
  },
  {
    name:`Scott Estrada`,
    role: `Developer`,
    immagine : `img/scott-estrada-developer.jpg"`
  },
  {
    name:`Barbara Ramos`,
    role: `Graphic Designer`,
    immagine: `img/barbara-ramos-graphic-designer.jpg"`
  },
];


for(let member of team){
  console.log(member);
  let card = `
  <div class="col-4">
    <div class="card" style="width: 18rem;">
      <img src="${member.immagine}" alt="">
      <div class="card-body">
        <h2 id="name">${member.name}</h2>
        <p id="role">${member.role}</p>
      </div>
    </div>
  </div>
  `
  row.innerHTML += card
};

