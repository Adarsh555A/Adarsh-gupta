window.addEventListener("scroll",myscroll);
myscroll()
let services = document.querySelector('.services');
let food = document.querySelector('.food');
var header = document.querySelector('.header').clientHeight;

let hero = document.getElementById('hero').clientHeight;
var body = document.body.offsetHeight;

var height = hero;

var foodH = hero + header + services.clientHeight;

function myscroll() {
var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
 
console.log(Math.floor(scrollpercent))

var draw = body * scrollpercent;
var scrolling_px = Math.floor(body - draw);

var services_Height = body - (height + header);
var Food_Height = body - foodH;

// console.log(cl2)
   if (services_Height > scrolling_px) {
console.log('first')
    services.classList.add('show')
    
   }else if(services_Height < scrolling_px){
    services.classList.remove('show')
    food.classList.remove('show')
console.log('second')
   }
   
    if(Food_Height > scrolling_px){
      food.classList.add('show')
      services.classList.remove('show')

    }else if(services_Height < scrolling_px){
      food.classList.remove('show')
  
     }
}



