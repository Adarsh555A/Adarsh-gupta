const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove",(e)=>{
let x = e.pageX;
let y = e.pageY;

cursor.style.top = y + "px";
cursor.style.left = x + "px";


})
// document.querySelector("nav").addEventListener("mouseover",()=>{
//     cursor.style.zIndex = 1;
// });

// document.querySelector("nav").addEventListener("mouseout",()=>{
//     cursor.style.zIndex = 0;
// });



// document.querySelector('.course').addEventListener("click",()=>{
//     document.querySelector(".show").classList.add("hide");
// })




const dynamicText = document.querySelector(".hi span");
const words = ["Computer Education", "Spoken English", "BCA Tuition", "Stock Market Training"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();









// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");
document.querySelectorAll('.course')[0].addEventListener("click",(el)=>{
    // document.querySelector(".show").classList.add("hide");
    modal.style.display = "block";
})

document.querySelectorAll('.course')[1].addEventListener("click",(el)=>{
    // document.querySelector(".show").classList.add("hide");
    modal.style.display = "block";
})

document.querySelectorAll('.course')[2].addEventListener("click",(el)=>{
    // document.querySelector(".show").classList.add("hide");
    modal.style.display = "block";
})

document.querySelectorAll('.course')[3].addEventListener("click",(el)=>{
    // document.querySelector(".show").classList.add("hide");
    modal.style.display = "block";
})

document.querySelectorAll('.course')[4].addEventListener("click",(el)=>{
    // document.querySelector(".show").classList.add("hide");
    modal.style.display = "block";
})

document.querySelectorAll('.course')[5].addEventListener("click",(el)=>{
    // document.querySelector(".show").classList.add("hide");
    modal.style.display = "block";
})

document.querySelectorAll('.course')[6].addEventListener("click",(el)=>{
    // document.querySelector(".show").classList.add("hide");
    modal.style.display = "block";
})

document.querySelectorAll('.course')[7].addEventListener("click",(el)=>{
    // document.querySelector(".show").classList.add("hide");
    modal.style.display = "block";
})

document.querySelectorAll('.course')[8].addEventListener("click",(el)=>{
    // document.querySelector(".show").classList.add("hide");
    modal.style.display = "block";
})

document.querySelectorAll('.course')[9].addEventListener("click",(el)=>{
    // document.querySelector(".show").classList.add("hide");
    modal.style.display = "block";
})

document.querySelectorAll('.course')[10].addEventListener("click",(el)=>{
    // document.querySelector(".show").classList.add("hide");
    modal.style.display = "block";
})


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}