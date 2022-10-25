// **MILESTONE 2:**
// Stampare le stesse informazioni su DOM sotto forma di stringhe


const row = document.querySelector(".row")


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
    <img src="${member.immagine}" alt="">
    <img src="${member.immagine}" alt="">
    <img src="${member.immagine}" alt="">
    <img src="${member.immagine}" alt="">
    <img src="${member.immagine}" alt="">
    <img src="${member.immagine}" alt=""> 
  `
}
