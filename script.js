const nein = document.getElementById("ne");
const ja = document.getElementById("ja");

let scale = 1;

nein.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    nein.style.position = "absolute";
    nein.style.left = x + "px";
    nein.style.top = y + "px";

    scale += 0.2;
    ja.style.transform = `scale(${scale})`;
});

ja.addEventListener("click", () => {
    window.location.href = "danke.html";
});
