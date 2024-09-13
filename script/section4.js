let num = document.getElementById("counter");
let count = 0;
let target = 126;
let section4 = document.getElementById("section4");
let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");
let cover = document.getElementById("cover");



window.addEventListener("scroll", () => {
  if(window.scrollY >= section4.offsetTop - 700){
    count = 0
    function updateCounter() {
      if (count <= target) {
        num.textContent = count.toString().padStart(3, '0');
        count++;
        requestAnimationFrame(updateCounter);
      }
    }
    line1.classList.add("slide-in-right")
    line2.classList.add("slide-in-left")
    line3.classList.add("slide-in-right")
    setTimeout(() => {
      updateCounter(); 
      cover.classList.add("scale-out-hor-right")
    }, 3000);  
  } else {
    // cover.classList.remove("scale-out-hor-right")
    line1.classList.remove("slide-in-right")
    line2.classList.remove("slide-in-left")
    line3.classList.remove("slide-in-right")
}
})
console.log(section4.offsetTop)