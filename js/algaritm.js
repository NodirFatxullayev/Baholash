let stars = document.querySelectorAll(".star");



stars[0].addEventListener("click", ()=>{
    stars[0].classList.add("g");
    stars[1].classList.remove("g");
    stars[2].classList.remove("g");
    stars[3].classList.remove("g");
    stars[4].classList.remove("g");
});

stars[1].addEventListener("click", ()=>{
    stars[0].classList.add("g");
    stars[1].classList.add("g");
    stars[2].classList.remove("g");
    stars[3].classList.remove("g");
    stars[4].classList.remove("g");
});

stars[2].addEventListener("click", ()=>{
    stars[0].classList.add("g");
    stars[1].classList.add("g");
    stars[2].classList.add("g");
    stars[3].classList.remove("g");
    stars[4].classList.remove("g");
});

stars[3].addEventListener("click", ()=>{
    stars[0].classList.add("g");
    stars[1].classList.add("g");
    stars[2].classList.add("g");
    stars[3].classList.add("g");
    stars[4].classList.remove("g");
});

stars[4].addEventListener("click", ()=>{
    stars[0].classList.add("g");
    stars[1].classList.add("g");
    stars[2].classList.add("g");
    stars[3].classList.add("g");
    stars[4].classList.add("g");
});
document.addEventListener("dblclick", ()=> {
    stars[0].classList.remove("g");
    stars[1].classList.remove("g");
    stars[2].classList.remove("g");
    stars[3].classList.remove("g");
    stars[4].classList.remove("g");
})