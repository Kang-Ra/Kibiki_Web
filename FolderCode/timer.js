var tombolclose = document.querySelector(".tombolclose");
var notifcontainer = document.querySelector(".notifcontainer");
var kotakwaktu = document.querySelector("#kotakwaktu");

const DURATION = 1440 * 60; // 24 jam dalam saat
let interval;

// 2. Fungsi untuk menampilkan waktu ke layar
function updateDisplay(seconds) {
    if (seconds < 0) seconds = 0;
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const formattedTime = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    document.getElementById('waktu').innerText = formattedTime;
}

// 3. Fungsi inti timer yang dimodifikasi
function jalankanTimerOtomatis() {
    // Ambil waktu tamat dari storage
    let endTime = localStorage.getItem('timerEndTime');

    // Jika belum ada waktu tamat (klik pertama kali), buat baru
    if (!endTime) {
        endTime = Date.now() + (DURATION * 1000);
        localStorage.setItem('timerEndTime', endTime);
    }

    // Elakkan interval bertindih
    if (interval) clearInterval(interval);

    interval = setInterval(() => {
        const now = Date.now();
        const timeLeft = Math.round((endTime - now) / 1000);

        if (timeLeft <= 0) {
            clearInterval(interval);
            localStorage.removeItem('timerEndTime'); // Padam data jika habis
            document.getElementById('waktu').innerText = "Waktu Habis!";
            // tampilkanNotifikasiAsli(); 
        } else {
            updateDisplay(timeLeft);
        }
    }, 1000);
}

// Logik untuk menutup notif dan tunjuk timer
function tunjukkanTimerUI() {
    notifcontainer.style.display = "none";
    kotakwaktu.style.display = "flex";
}

// 4. JALANKAN AUTOMATIK JIKA SUDAH ADA DATA
window.onload = function() {
    if (localStorage.getItem('timerEndTime')) {
        tunjukkanTimerUI();
        jalankanTimerOtomatis();
    }
};

// Klik butang mula
tombolclose.addEventListener("click", function(){
    tunjukkanTimerUI();
    jalankanTimerOtomatis();
});