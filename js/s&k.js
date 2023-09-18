// burger
const burger=document.querySelector(".burger");
const listNavbar=document.querySelector(".list-navbar");

burger.addEventListener("click", ()=>{
  burger.classList.toggle("active");
  listNavbar.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=>{
  burger.classList.remove("active");
  listNavbar.classList.remove("active");
}))