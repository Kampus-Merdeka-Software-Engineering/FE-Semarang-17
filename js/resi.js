document.addEventListener("DOMContentLoaded", function () {
  const trackButton = document.getElementById("track-button");
  const resiInput = document.getElementById("resi-input");
  const trackingTable = document.getElementById("tracking-table");
  const trackingData = document.getElementById("tracking-data");

  trackButton.addEventListener("click", function (e) {
    e.preventDefault();

    if (resiInput.value.trim() !== "") {
      fetch(`http://localhost:3000/api/cek-resi/${resiInput.value}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json(); // Mengambil data JSON dari respons HTTP
          } else {
            alert("Gagal mendapatkan data");
            throw new Error("Gagal mendapatkan data");
          }
        })
        .then((data) => {
          // Menampilkan data dalam tabel
          const { no_resi, layanan, asal, tujuan, pengirim, penerima, tanggal } = data;
          trackingData.innerHTML = `
            <tr>
                <td>${no_resi}</td>
                <td>${layanan}</td>
                <td>${asal}</td>
                <td>${tujuan}</td>
                <td>${pengirim}</td>
                <td>${penerima}</td>
                <td>${tanggal}</td>
            </tr>
          `;

          // Tampilkan tabel
          trackingTable.style.display = "table";
        })
        .catch((error) => {
          alert(`Error messages: ${error.message}`);
        });
    }
  });
});

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
