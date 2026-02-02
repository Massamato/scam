const noBtn = document.getElementById("ne");
const yesBtn = document.getElementById("ja");
let tries = 0;
let maxTries = 8;

// Start-Skala für den Ja-Button
let yesScale = 1;

noBtn.style.position = "absolute";
noBtn.style.transition = "all 0.2s ease";
yesBtn.style.transition = "transform 0.2s ease"; // damit das Skalieren smooth ist

function moveButton() {
    if (tries >= maxTries) return; // Stop, wenn Nein zu Ja wird

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    tries++;

    // Ja-Button drastisch größer machen
    yesScale *= 1.3; // jedes Mal 30% größer
    yesBtn.style.transform = `scale(${yesScale})`;

    // Nach maxTries wird Nein zu Ja
    if (tries >= maxTries) {
        noBtn.innerText = "Ja ";

        // Jetzt klick auf Nein auch zur Danke-Seite
        noBtn.addEventListener("click", () => {
            window.location.href = "danke.html";
        });
    }
}

// Maus- und Touch-Ereignisse
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

// Original Ja-Button klick → Danke-Seite
yesBtn.addEventListener("click", () => {
    window.location.href = "danke.html";
});
