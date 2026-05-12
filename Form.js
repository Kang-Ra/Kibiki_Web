let kontenutama = document.getElementById("kontenutama")
let video = document.getElementById("kamera");
let canvas = document.getElementById("canvas");
let hasil = document.getElementById("hasil");
let buttonfoto = document.getElementById("btnfoto");
let inputnama = document.getElementById("inputnama");
let inputnamavalue = inputnama.value;
let hasilfoto = document.getElementById("hasilfoto");
let sudahfoto = false
let btnmohon = document.getElementById("btnmohon")
let loading = document.getElementById("loading");
let form = document.getElementById("formuser");
let cara = document.getElementById("cara");
let tutup = document.getElementById("close");
let papancara = document.getElementById("papancara");
let overlay = document.getElementById("overlay");
let permohonan = document.getElementById("inputpermohonan")

navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => {
  video.srcObject = stream;

  // penting!
  video.onloadedmetadata = () => {
    video.play();
  };
})
.catch(err => {
  alert("Kamera tidak bisa dibuka");
  console.log(err);
});

// ambil foto
function ambilfoto() {

  // cek biar gak hitam
  if (video.videoWidth === 0) {
    alert("Kamera belum siap");
    return;
  }

  const ctx = canvas.getContext("2d");

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  ctx.drawImage(video, 0, 0);
  hasil.src = canvas.toDataURL("image/png");
  sudahfoto = true
}

buttonfoto.addEventListener("click", function() {
hasil.style.display = "block";
hasilfoto.style.display = "block"
});

form.addEventListener("submit", function(e) {
  e.preventDefault();

if (!sudahfoto) {
    alert("Ambil foto dulu sebelum kirim!");
    return; // blokir form
}

if(!form.checkValidity()){
  form.reportValidity();
  return true;
};

  kontenutama.style.display = "none";
  cara.style.display = "none";
  loading.style.display = "block";

setTimeout (() => {
  form.submit(); 
    window.location.href = "timer.html";
},2000)
});

cara.addEventListener("click", function(event){
event.preventDefault()
overlay.style.display = "block"
papancara.style.display = "block";
});

tutup.addEventListener("click", function(){
papancara.style.display = "none";
overlay.style.display = "none";
});

permohonan.addEventListener("keydown", function(e){
if(e.key === "Enter"){
  permohonan.value += " AKU MOHON AKU MOHON AKU MOHON AKU MOHON KABULKANLAH";
}
});

permohonan.addEventListener("blur", function(){
 permohonan.value += " AKU MOHON AKU MOHON AKU MOHON AKU MOHON KABULKANLAH";
})
