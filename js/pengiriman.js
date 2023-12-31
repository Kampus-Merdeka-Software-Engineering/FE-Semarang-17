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
  const layanan_dipilih = document.querySelector('input[name="layanan"]:checked');
  const layanan = layanan_dipilih
    ? layanan_dipilih.value
    : "layanan tidak dipilih";
  const asal = document.getElementById("asal").value;
  const tujuan = document.getElementById("tujuan").value;
  const pengirim = document.getElementById("pengirim").value;
  const penerima = document.getElementById("penerima").value;
  const tanggal = document.getElementById("tanggal").value;
  const baseUrl = "https://be-semarang-17-production.up.railway.app";

  // Memformat tanggal menjadi dd/mm/yyyy
  var tanggalParts = tanggal.split("-");
  var tanggalFormatted =
    tanggalParts[2] + "/" + tanggalParts[1] + "/" + tanggalParts[0];

  // POST
  fetch(`${baseUrl}/api/pengiriman`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // no_resi: no_resi,
      layanan: layanan,
      asal: asal,
      tujuan: tujuan,
      pengirim: pengirim,
      penerima: penerima,
      tanggal: tanggal,
    }),
  })
    .then((res) => {
      if (res.ok) {
        // Menampilkan pesan dalam pop-up detail pengiriman
        document.getElementById("popup-content").innerHTML = "Berhasil menambahkan data!";
        document.getElementById("popup").style.display = "block";
        document.getElementById("overlay").style.display = "block";
        document.body.classList.add("popup-active");

        // Setelah berhasil POST, kita dapat mengambil data terakhir dari database
        fetch(`${baseUrl}/api/pengirimans/terakhir`, {
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
            const {
              no_resi,
              layanan,
              asal,
              tujuan,
              pengirim,
              penerima,
              tanggal,
            } = data;
            // menampilkan pesan detail pengiriman
            var message =
              "<strong>Selamat, data pengiriman Anda telah berhasil diproses!</strong>" +
              "<br>" +
              "<br>";
            message += "<strong>---------------------------------</strong> " + "<br>";
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
            message += "<strong>---------------------------------</strong> ";
            document.getElementById("popup-content").innerHTML = message;
          });
      } else {
        alert("Gagal menambahkan data!");
      }
      console.log(res);
    })
    .catch((error) => {
      alert(`Error messages: ${error.message}`);
    });
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

