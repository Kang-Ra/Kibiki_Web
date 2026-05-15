const gambartangan = document.getElementById("gambartangan");
 const loading = document.querySelector(".loading")
  const badan = document.getElementById("body");
   const judul = document.getElementById("logo");
    const footer = document.getElementById("footer");
    const video = document.getElementById("kamera");
     const canvas = document.getElementById("canvas");
      const hasil = document.getElementById("hasil");

function hilangkangambar (){
    gambartangan.style.display = "none";
       loading.style.display = "block";
       loading.style.display = "flex";
        judul.style.display = "none";
         footer.style.display = "none";
}

function jeda(event) {
  event.preventDefault(); 
   setTimeout(() => {
    window.location.href = "Form.html";
     }, 2000);
};

function cekfoto() {
 
  if (kosong) {
    alert("Ambil foto dulu sebelum kirim!");
    return false; // blokir form
  }

  return true; // lanjut kirim form
}