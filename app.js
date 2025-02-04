let loader = document.querySelector(".loader");
let header = document.querySelector("header");
let li = document.querySelectorAll(".links");
let root = document.getElementById("root");
let spinner = document.querySelector(".loader");
let projectImages = document.querySelectorAll(".project-img");
let HomeHeading = document.querySelector(".homeHeading");
let aboutHeading = document.querySelector(".aboutHeading");
// Initially hide the header and show the loader
//header.style.display = "none";
//// root.style.display="none";
 //spinner.style.display = "block";

// Add event listener for when the page is completely loaded
//window.addEventListener("load", function () {
//    // Hide the loader and show the header after the page is fully loaded
//    spinner.style.display = "none";
//    //header.style.display = "flex";
//    //root.style.display="block";
//});
//window.addEventListener("loadstart",()=>{
//    spinner.style.display="flex";
//})
// Navbar after Toggle #1F2937 body #111827
// Toggle Logic
projectImages.forEach((item,index)=>{
  item.addEventListener("click",()=>{
   // alert("clicked on Scale")
     item.style.transform = 'scale(200%)';
  })
  item.addEventListener("mouseleave",()=>{
    item.style.transform="scale(100%)";
  })
})
let flag = 0;
toggle.addEventListener("click",()=>{
    if(flag==0){
    header.style.background="#1F2937";
    header.style.borderRadius="0px";
    HomeHeading.style.color="white";

    root.style.background="#111827";
    aboutHeading.style.color="white";
    TestimonialHeading.style.color="white";
    root.style.color="white";
    aboutPara.style.color="#D4E9EF";
    li.forEach((link,index)=>{
        link.style.color="white";
    })
    flag = 1;
} else{
    header.style.background="#fff";
    header.style.borderRadius="30%"
    HomeHeading.style.color="black";
    root.style.background="#fff";
    aboutHeading.style.color="black";
    TestimonialHeading.style.color="black";
    aboutPara.style.color="black";
    li.forEach((link,index)=>{
        link.style.color="black";
    })
    flag = 0;
}
})
/*document.addEventListener('DOMContentLoaded', function () {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });*/
    /*scroll.update();
  });*/
  var typed = new Typed('#element', {
    strings: ['Frontend Developer.', 'Web Designer.','Web Developer.'],
    typeSpeed: 50,     // Speed of typing (milliseconds per character)
    backSpeed: 30,    // Speed of backspacing (milliseconds per character)
    backDelay: 1000,  // Delay before starting to backspace (in ms)
    startDelay: 500,  // Delay before typing starts (in ms)
    loop: true,       // Whether to loop the typing effect
    showCursor: true,  // Whether to show the blinking cursor
    cursorChar: "|",  
  });

  /*var typed = new Typed('#title', {
    strings: ['Passionate','Expert','Experienced'],
    typeSpeed: 50,     // Speed of typing (milliseconds per character) 
    backSpeed: 30,
    startDelay: 500,
    backDelay: 1000,
    loop:true,
    showCursor:true,
    cursorChar:"|",

  });*/
  let preloader = document.getElementById("preloader");
  window.addEventListener("load",function(e){
    preloader.style.display="none";
  })

gsap.to(".sideImg", {duration: 4, rotation: 360});
//
//  gsap.to(".Home", {
//    scrollTrigger: ".Home", 
//    x: 50,
//    duration: 2
//  });
//
//  gsap.to(".skill", {duration: 2, strokeDashoffset: 0});
/*window.addEventListener("keydown",(e)=>{
    switch(e.key){
      case "ArrowDown":
        header.style.display="none";
        break;
        case "ArrowUp":
      let Home = document.querySelector(".Home");
      Home.addEventListener("mouseenter",(e)=>{
        header.style.display="flex";
      })
          default: 
            break;
    }
})*/
function submitAction(){
  alert("Working")
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");
   name.innerHTML="";
   email.innerHTML="";
   message.innerHTML="";
}


    /*window.addEventListener('load', function() {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true
        });
    });*/
