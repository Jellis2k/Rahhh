var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.querySelector(".close");

var backdrop = document.getElementById("modalBackdrop");

btn.onclick = function () {
    if (modal.style.display === "block") {
        closeModal();
    } else {
        modal.style.display = "block";
        backdrop.style.display = "block";
    }
}

span.onclick = closeModal;
window.onclick = function (event) {
    if (event.target == backdrop) {
        closeModal();
    }
}

function closeModal() {
    modal.style.display = "none";
    backdrop.style.display = "none";
}

// Sound stuff
const soundButton = document.getElementById('soundBtn');
const audioElements = [
    document.getElementById('audio1'),
    document.getElementById('audio2'),
    document.getElementById('audio3'),
    document.getElementById('audio4'),
    document.getElementById('audio5'),
    document.getElementById('audio6'),
    document.getElementById('audio7'),
    document.getElementById('audio8')
];

soundButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * audioElements.length);
    const selectedAudio = audioElements[randomIndex];

    const newAudio = new Audio(selectedAudio.src);
    newAudio.play();
});

// Initialization
modal.style.display = "none";
backdrop.style.display = "none";
