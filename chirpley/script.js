var intro = document.getElementById('intro_pc');
var intro_mo = document.getElementById('intro_mo');

let main = document.querySelector('main');
let head = document.querySelector('.head');
var body = document.body.offsetHeight;
let img = document.querySelectorAll('.photos img');
window.addEventListener("scroll",myscroll);
var conter = 1;
function myscroll(){
  var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  var draw = body * scrollpercent;
  // console.log(draw)
  let range = Math.floor((draw*100)/body);
  // if (range > 73) {
  //   conter += 4;
  //   console.log(conter)
    
  //   img[2].style.rotate = parseInt(img[2].style.rotate) > 360||parseInt(img[2].style.rotate) > 303?'360deg':`${(303 + conter)}deg`;
  //   img[0].style.rotate = parseInt(img[0].style.rotate) < 0||parseInt(img[2].style.rotate) > 57?'0deg':`${(57 - conter)}deg`;

  // }
  // if (range < 73) {
  //   conter += 1;
  //   console.log(conter)
    
  //   img[2].style.rotate = parseInt(img[2].style.rotate) < 303?`${(303 + conter)}deg`:`${(360 - conter)}deg`;
  //   // img[0].style.rotate = parseInt(img[0].style.rotate) < 0||parseInt(img[2].style.rotate) > 57?'0deg':`${(57 - conter)}deg`;

  // }

}
if (window.matchMedia("(max-width:800px)").matches) {
    /* a viewport tem pelo menos 800 pixels de largura */
    console.log('a viewport tem pelo menos 800 pixels de largura');
    intro_pc.style.display = "none";
var videotime = setTimeout(()=>{
    /* a viewport tem pelo menos 800 pixels de largura */
    head.style.display="block";
    main.style.display = "block";
    intro_mo.classList.remove('intro_pc');
    intro_mo.src = "./video/chirpley-intro-loop-mobile.mp4";
    intro_mo.classList.add("loop_mo");


},6000)
  } else {
    /* a viewport menos que 800 pixels de largura */
    console.log('a viewport menos que 800 pixels de largura')
    intro_mo.style.display = "none";
var videotime = setTimeout(()=>{
        /* a viewport tem pelo menos 800 pixels de largura */
        head.style.display="block";
        main.style.display = "block";
        intro.classList.remove('intro_pc');
        intro.src = "./video/chirpley-intro-loop.mp4";
        intro.classList.add("loop_pc");
  
},6000)
  }

  gsap.from("video",{
    scale:1,
    duration:3,
    delay:2
})

gsap.to("#img1",{
    scrollTrigger:{
        trigger:".gallery",
        scroller:"body",

        scrub:2
    },
    rotate:0,
    duration:3
})
gsap.to("#img2",{
  scrollTrigger:{
      trigger:".gallery",
      scroller:"body",

      scrub:2
  },
  rotate:0,
  top:10,
  duration:3
})
gsap.to("#img3",{
  scrollTrigger:{
      trigger:".gallery",
      scroller:"body",

      scrub:2
  },
  rotate:0,
  duration:3
})

gsap.to(".easter",{
  scrollTrigger:{
      trigger:".easter",
      scroller:"body",

      scrub:2
  },
  scaleY:1.9,
  duration:3
})


gsap.to("#egg",{
  scrollTrigger:{
      trigger:".easter",
      scroller:"body",

      scrub:2
  },
  scale:1.5,
  duration:3
})
