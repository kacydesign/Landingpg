const seeMoreEl = document.querySelector("#seeMore");
// var nextbtn = document.getElementById("nextBtn");
// var backbtn = document.getElementById("backBtn");
// let scrollcontainer = document.getElementById("slider");

// scrollcontainer.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollcontainer.scrollLeft += evt.deltaY;
//     scrollcontainer.style.scrollBehavior = "smooth";
// });

// nextbtn.addEventListener("click", ()=> {
//     scrollcontainer.style.scrollBehavior = "smooth";
//     scrollcontainer.scrollLeft += 900;
// });

// backbtn.addEventListener("click", ()=> {
//     scrollcontainer.style.scrollBehavior = "smooth";
//     scrollcontainer.scrollLeft -= 900;
// });



seeMoreEl.addEventListener("mouseover", (event) => {
  const x = (event.pageX - seeMoreEl.offsetLeft);
  const y = (event.pageY - seeMoreEl.offsetTop);

  seeMoreEl.style.setProperty("--xPos", x + "px");
  seeMoreEl.style.setProperty("--yPos", y + "px");
});





$(function(){
    $('.carousel').carousel({
        interval : 3000
    });
    $('.carousel').hover(function(){
        $(this).carousel('pause');
    },function(){
        $(this).carousel('cycle');
    })
});