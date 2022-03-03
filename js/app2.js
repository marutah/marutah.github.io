window.onload = function(){
  const k = 25;
    const card = document.getElementById("ex1-layer");
const container = document.getElementById("ex1");
//Items

//

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  //let xAxis = (window.innerWidth / 2 - e.pageX) / k;
  //let yAxis = (window.innerHeight / 2 - e.pageY) /k; 
  let xp = card.x;
let yp = card.y;
//console.log(xp,yp,e.pageX,e.pageY)
  let xAxis = (xp - e.pageX) / k;
  let yAxis = (yp - e.pageY) /k;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "all 0.1s";
  //Popout
  
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(3deg) rotateX(0deg)`;
  //Popback
 
});





// hamburger

// Can be used with JavaScript
// -----------------------------
//const icnMenu = document.querySelector('.menu-icon');
//const nr = document.querySelector('#nav-wrapper');
//icnMenu.addEventListener('click', () => {
//	icnMenu.classList.toggle('active');
//	nr.classList.toggle('active');
// });
const icnMenu = document.querySelector('.menu-icon');
const nr = document.querySelector('#nav-wrapper');
const nrtext = document.querySelector('#menu-text');
const ml = document.getElementsByClassName('menu-link');
icnMenu.addEventListener('click', () => {
  icnMenu.classList.toggle("active");
  	nr.classList.toggle("active-navbg");
    nrtext.classList.toggle("active-navtext");
   });
  // console.log(nrtext);
  console.log(ml);

  for (let i = 0; i < ml.length; i++) {
    ml[i].addEventListener('click', () => {
      icnMenu.classList.toggle("active");
        nr.classList.toggle("active-navbg");
        nrtext.classList.toggle("active-navtext");

       });
  
  }


  
}