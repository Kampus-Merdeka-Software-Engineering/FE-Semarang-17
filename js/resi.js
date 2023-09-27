// js/resi.js
document.addEventListener("DOMContentLoaded", function () {
  const trackButton = document.getElementById("track-button");
  const resiInput = document.getElementById("resi-input");
  const trackingTable = document.getElementById("tracking-table");
  const trackingData = document.getElementById("tracking-data");

  trackButton.addEventListener("click", function (e) {
    e.preventDefault(); // Hindari pengiriman formulir (karena ini hanya contoh simulasi)

    // Pastikan ada nomor resi sebelum menampilkan tabel
    if (resiInput.value.trim() !== "") {
      // Data simulasi
      const searchData = {
        nomorResi: "12345",
        layanan: "Gercep",
        asal: "Kota A",
        tujuan: "Kota B",
        penerima: "John Doe",
        tanggalDiterima: "2023-09-27",
        penerimaPaket: "Jane Doe",
        status: "Diterima",
      };

      // Tampilkan data dalam tabel
      trackingData.innerHTML = `
                <tr>
                    <td>${searchData.nomorResi}</td>
                    <td>${searchData.layanan}</td>
                    <td>${searchData.asal}</td>
                    <td>${searchData.tujuan}</td>
                    <td>${searchData.penerima}</td>
                    <td>${searchData.tanggalDiterima}</td>
                    <td>${searchData.penerimaPaket}</td>
                    <td>${searchData.status}</td>
                </tr>
            `;

      // Tampilkan tabel
      trackingTable.style.display = "table";
    }
  });
});

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
