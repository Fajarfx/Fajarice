document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('welcome-container').classList.add('hidden');
    document.getElementById('trick-container').classList.remove('hidden');
});

// Mengambil semua tombol slider
const buttons = document.querySelectorAll('.slider-button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (this.classList.contains('correct')) {
            document.getElementById('trick-container').classList.add('hidden');
            document.getElementById('main-container').classList.remove('hidden');
            alert("Selamat! Kamu berhasil menemukan tombol yang benar! 🚀 Sekarang, ayo mulai belajar!");
        } else {
            alert("Haha, salah!😜 Coba cari tombol yang benar! ");
        }
    });
});

