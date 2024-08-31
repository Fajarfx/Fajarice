let clicked = false;

document.getElementById('startButton').addEventListener('mouseover', function() {
    if (!clicked) {
        this.classList.add('moved');
    }
});

document.getElementById('startButton').addEventListener('mouseout', function() {
    if (!clicked) {
        this.classList.remove('moved');
    }
});

document.getElementById('startButton').addEventListener('click', function() {
    if (!clicked) {
        clicked = true;
        this.innerText = "Eh, Serius? 😜";
        this.classList.add('tricked');
        setTimeout(() => {
            alert("Hahaha, ketipu! 😆 Sekarang baru benar-benar mulai belajar yuk, Mufa! 🚀");
            this.innerText = "Oke, Sekarang Mulai Serius!";
            this.classList.remove('tricked');
            clicked = false;
        }, 2000);
    }
});
