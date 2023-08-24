const showButton = document.getElementById("soundBtn");
const hiddenDiv = document.getElementById("hiddenDiv");

showButton.addEventListener("click", () => {
    const image = document.createElement("img");
    image.src = "/src/rakiscary.png";
    image.style.position = "absolute";
    image.style.zIndex = "-1";
    image.className ="hiddenImage";

    const randomX = Math.random() * (window.innerWidth - image.width);
    const randomY = Math.random() * (window.innerHeight - image.height);

    image.style.left = randomX + "px";
    image.style.top = randomY + "px";

    document.body.appendChild(image);

    const shakeInterval = setInterval(() => {
        const shakeX = (Math.random() - 0.5) * 10; // Small random movement along the X-axis
        const shakeY = (Math.random() - 0.5) * 10; // Small random movement along the Y-axis
        const randomRotation = (Math.random() - 0.5) * 10; // Random rotation between -10 and 10 degrees

        image.style.transform = `translate(${shakeX}px, ${shakeY}px) rotate(${randomRotation}deg)`;
    }, 25);

    setTimeout(() => {
        clearInterval(shakeInterval); // Stop shaking
        document.body.removeChild(image);
    }, 1000);
});
