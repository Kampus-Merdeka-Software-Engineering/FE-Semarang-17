// function showPopup() {
//   // Mendapatkan nilai yang dimasukkan oleh pengguna (misalnya, pilihan layanan)
//   var Layanan_dipilih = document.querySelector('input[name="layanan"]:checked'); //DOM

//   // Mendapatkan nilai layanan yang dipilih
//   var layanan = Layanan_dipilih
//     ? Layanan_dipilih.value
//     : "Layanan tidak dipilih"; // Default jika tidak ada yang dipilih

//   // Mendapatkan nilai dari input teks
//   var asal = document.getElementById("asal").value; //DOM
//   var tujuan = document.getElementById("tujuan").value; //DOM
//   var pengirim = document.getElementById("pengirim").value; //DOM
//   var penerima = document.getElementById("penerima").value; //DOM
//   var tanggal = document.getElementById("tanggal").value; //DOM

//   // Memformat tanggal menjadi dd/mm/yyyy
//   var tanggalParts = tanggal.split("-"); // Memisahkan tanggal, bulan, dan tahun
//   var tanggalFormatted =
//     tanggalParts[2] + "/" + tanggalParts[1] + "/" + tanggalParts[0];

//   // Membuat nomor resi acak
//   var no_resi = Math.floor(Math.random() * 1000000);

//   // menampilkan pesan
//   var message =
//     "<strong>Selamat, data pengiriman Anda telah berhasil diproses!</strong>" +
//     "<br>" +
//     "<br>";
//   message +=
//     "<strong>Layanan                         :</strong> " + layanan + "<br>";
//   message +=
//     "<strong>Asal                                       :</strong> " +
//     asal +
//     "<br>";
//   message +=
//     "<strong>Tujuan                             :</strong> " + tujuan + "<br>";
//   message +=
//     "<strong>Pengirim                       :</strong> " + pengirim + "<br>";
//   message +=
//     "<strong>Penerima                    :</strong> " + penerima + "<br>";
//   message += "<strong>Tgl Pengiriman  :</strong> " + tanggalFormatted + "<br>";
//   message += "<strong>No Resi                         :</strong> " + no_resi;

//   // Menampilkan pesan dalam popup box
//   // alert(message);
//   document.getElementById("popup-content").innerHTML = message; //DOM
//   document.getElementById("popup").style.display = "block"; //DOM

//   // Tampilkan overlay saat popup muncul
//   document.getElementById("overlay").style.display = "block";

//   // Tambahkan kelas popup-active pada elemen body jadi tdk bisa scroll kalau pop up muncul
//   document.body.classList.add("popup-active");

//   // Kembalikan false untuk mencegah formulir mengirimkan data
//   return false;
// }

// function resetForm() {
//   //agar inputan hilang setelah pop up ditutup
//   document.querySelector('input[name="layanan"]:checked').checked = false;
//   document.getElementById("asal").value = "";
//   document.getElementById("tujuan").value = "";
//   document.getElementById("pengirim").value = "";
//   document.getElementById("penerima").value = "";
//   document.getElementById("tanggal").value = "";
// }

// function closePopup() {
//   document.getElementById("popup").style.display = "none"; //DOM
//   document.getElementById("overlay").style.display = "none";
//   resetForm();

//   // Hapus kelas popup-active dari elemen body
//   document.body.classList.remove("popup-active");
// }

function showConfirmationPopup() {
  // Tampilkan pop-up konfirmasi
  document.getElementById("confirmation-popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
  document.body.classList.add("popup-active");
}

function closeConfirmationPopup() {
  // Tutup pop-up konfirmasi
  document.getElementById("confirmation-popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  document.body.classList.remove("popup-active");
}

function showDetailPopup() {
  // Tutup pop-up konfirmasi
  closeConfirmationPopup();

  // Dapatkan nilai input dari pengguna
  var Layanan_dipilih = document.querySelector('input[name="layanan"]:checked');
  var layanan = Layanan_dipilih
    ? Layanan_dipilih.value
    : "Layanan tidak dipilih";
  var asal = document.getElementById("asal").value;
  var tujuan = document.getElementById("tujuan").value;
  var pengirim = document.getElementById("pengirim").value;
  var penerima = document.getElementById("penerima").value;
  var tanggal = document.getElementById("tanggal").value;

  // Memformat tanggal menjadi dd/mm/yyyy
  var tanggalParts = tanggal.split("-");
  var tanggalFormatted =
    tanggalParts[2] + "/" + tanggalParts[1] + "/" + tanggalParts[0];

  // Membuat nomor resi acak
  var no_resi = Math.floor(Math.random() * 1000000);

  // menampilkan pesan detail pengiriman
  var message =
    "<strong>Selamat, data pengiriman Anda telah berhasil diproses!</strong>" +
    "<br>" +
    "<br>";
  message +=
    "<strong>--------------------------------------</strong> " + "<br>";
  message +=
    "<strong>Layanan                         :</strong> " + layanan + "<br>";
  message +=
    "<strong>Asal                                       :</strong> " +
    asal +
    "<br>";
  message +=
    "<strong>Tujuan                             :</strong> " + tujuan + "<br>";
  message +=
    "<strong>Pengirim                       :</strong> " + pengirim + "<br>";
  message +=
    "<strong>Penerima                    :</strong> " + penerima + "<br>";
  message += "<strong>Tgl Pengiriman  :</strong> " + tanggalFormatted + "<br>";
  message +=
    "<strong>No Resi                         :</strong> " + no_resi + "<br>";
  message += "<strong>--------------------------------------</strong> ";

  // Menampilkan pesan dalam pop-up detail pengiriman
  document.getElementById("popup-content").innerHTML = message;
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
  document.body.classList.add("popup-active");
}

function resetForm() {
  //agar inputan hilang setelah pop up ditutup
  document.querySelector('input[name="layanan"]:checked').checked = false;
  document.getElementById("asal").value = "";
  document.getElementById("tujuan").value = "";
  document.getElementById("pengirim").value = "";
  document.getElementById("penerima").value = "";
  document.getElementById("tanggal").value = "";
}

function closePopup() {
  document.getElementById("popup").style.display = "none"; //DOM
  document.getElementById("overlay").style.display = "none";
  resetForm();

  // Hapus kelas popup-active dari elemen body
  document.body.classList.remove("popup-active");
}

// Perubahan pada fungsi showPopup() untuk menambahkan konfirmasi
function showPopup() {
  // Tampilkan pop-up konfirmasi
  showConfirmationPopup();

  return false;
}

// burger
const burger = document.querySelector(".burger");
const listNavbar = document.querySelector(".list-navbar");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  listNavbar.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    burger.classList.remove("active");
    listNavbar.classList.remove("active");
  })
);
