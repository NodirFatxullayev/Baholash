let stars = document.querySelectorAll(".star");
let smile = document.querySelector(".smilek");



stars[0].addEventListener("click", ()=>{
    
    smile.innerHTML = "<img src='./img/5.png'>";
    stars[0].classList.add("g");
    stars[1].classList.remove("g");
    stars[2].classList.remove("g");
    stars[3].classList.remove("g");
    stars[4].classList.remove("g");
});

stars[1].addEventListener("click", ()=>{
    smile.innerHTML = "<img src='./img/4.png'>";
    stars[0].classList.add("g");
    stars[1].classList.add("g");
    stars[2].classList.remove("g");
    stars[3].classList.remove("g");
    stars[4].classList.remove("g");
});

stars[2].addEventListener("click", ()=>{
    smile.innerHTML = "<img src='./img/3.png'>";
    stars[0].classList.add("g");
    stars[1].classList.add("g");
    stars[2].classList.add("g");
    stars[3].classList.remove("g");
    stars[4].classList.remove("g");
});

stars[3].addEventListener("click", ()=>{
    smile.innerHTML = "<img src='./img/2.png'>";
    stars[0].classList.add("g");
    stars[1].classList.add("g");
    stars[2].classList.add("g");
    stars[3].classList.add("g");
    stars[4].classList.remove("g");
});

stars[4].addEventListener("click", ()=>{
    smile.innerHTML = "<img src='./img/1.png'>";
    stars[0].classList.add("g");
    stars[1].classList.add("g");
    stars[2].classList.add("g");
    stars[3].classList.add("g");
    stars[4].classList.add("g");
});
document.addEventListener("dblclick", ()=> {
    smile.innerHTML = "";
    stars[0].classList.remove("g");
    stars[1].classList.remove("g");
    stars[2].classList.remove("g");
    stars[3].classList.remove("g");
    stars[4].classList.remove("g");
})