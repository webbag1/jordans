let line_info = document.querySelectorAll(".line-info")
let jorImg = document.querySelectorAll(".jorImg")


window.addEventListener('scroll', ()=>{
    line_info.forEach((line)=>{
        line.classList.remove("text-active")
        if(window.scrollY >= line.offsetTop+745 && window.scrollY <= line.offsetTop+826){
            line.classList.add("text-active");
            if(line.id == "span3"){
                jorImg.forEach(Jordan => {
                    Jordan.classList.add("zoom-to-foot")
                })
            }
            if(line.id == "span1"){
                jorImg.forEach(Jordan => {
                    Jordan.classList.remove("zoom-to-foot")
                })
            }
        } 
    })
})