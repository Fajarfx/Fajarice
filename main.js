document.querySelector('button').addEventListener('click', function() {
    document.querySelector('.invitation').scrollIntoView({ behavior: 'smooth' });
});

function scrollToInvitation() {
    document.querySelector('.invitation').scrollIntoView({ behavior: 'smooth' });
}

function updateCountdown() {
    // Menentukan tanggal dan waktu pernikahan secara eksplisit
    const weddingDate = new Date('2024-05-09T15:00:00'); // Format: YYYY-MM-DDTHH:mm:ss

    // Mengambil tanggal dan waktu saat ini dari sistem pengguna
    const now = new Date();

    // Menghitung waktu yang tersisa hingga pernikahan
    const timeLeft = weddingDate.getTime() - now.getTime();

    // Menghitung hari, jam, menit, dan detik
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Menampilkan countdown
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    // Jika waktu telah habis
    if (timeLeft < 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdownTimer').innerHTML = "Hari bahagia telah tiba!";
    }
}

// Memulai countdown
const countdownTimer = setInterval(updateCountdown, 1000);
