// fungsi dipanggil ketika tombol diklik
function redirectToHalamanLain() {
  window.location.href = "pengiriman.html";
}

// Mengaitkan fungsi dengan tombol, pada js gabisa klo hanya menggunakan satu class saja
//yaitu btn-click karena nanti yg dibaca hanya kelas pertama [DOM]
document
  .getElementById("btn-click1")
  .addEventListener("click", redirectToHalamanLain); //DOM
document
  .getElementById("btn-click2")
  .addEventListener("click", redirectToHalamanLain); //DOM
document
  .getElementById("btn-click3")
  .addEventListener("click", redirectToHalamanLain); //DOM

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