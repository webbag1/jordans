let peter = document.getElementById("peter");
let underline = document.getElementById("underline");
let underline2 = document.getElementById("underline2");
let underline3 = document.getElementById("underline3");
let peterImg = document.getElementById("peterImg");
console.log(peter.offsetTop, "dsd")
window.addEventListener("scroll", () => {
    if(window.scrollY > peter.offsetTop + 1769){
        peterImg.classList.add("swing-in-bottom-fwd");
        underline.classList.add("underani");
        underline2.classList.add("underani");
        underline3.classList.add("underani");
    } else {
        peterImg.classList.remove("swing-in-bottom-fwd");        
        underline.classList.remove("underani");
        underline2.classList.remove("underani");
        underline3.classList.remove("underani");
    }
})