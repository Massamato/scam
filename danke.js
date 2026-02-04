const container = document.getElementById("hearts-container");const container = document.getElementById("hearts-container");

// Emoji-Verteilung: 60% Herz, 20% 6, 20% 7
const emojis = [
    "💖","💖","💖","💖","💖","💖",  // 60% Herz
    "6️⃣","6️⃣",                      // 20% 6
    "7️⃣","7️⃣"                       // 20% 7
];

function createEmoji() {
    const emoji = document.createElement("div");
    emoji.classList.add("heart");

    // Zufälliges Emoji aus dem Array
    const randomIndex = Math.floor(Math.random() * emojis.length);
    emoji.innerText = emojis[randomIndex];

    // Zufällige horizontale Position
    emoji.style.left = Math.random() * window.innerWidth + "px";

    // Zufällige Größe
    const size = Math.random() * 20 + 20; // 20px - 40px
    emoji.style.fontSize = size + "px";

    // Zufällige Dauer der Fallanimation
    emoji.style.animationDuration = (Math.random() * 3 + 2) + "s";

    container.appendChild(emoji);

    // Emoji nach Animation entfernen
    setTimeout(() => {
        emoji.remove();
    }, parseFloat(emoji.style.animationDuration) * 1000);
}

// Alle 200ms ein neues Emoji
setInterval(createEmoji, 200);
const content = document.getElementById("content-container");

// 1️⃣ Liebesbrief
document.getElementById("love-letter").addEventListener("click", () => {
    content.innerHTML = `
        <div style="padding:20px; background:#fff0f5; border-radius:10px;">
            <h2>Für Mira 67</h2>
            <p>Du bist das beste was mir jemals passiert ist, Danke und hab dich lieb.</p>
        </div>
    `;
});

document.getElementById("fruit-video").addEventListener("click", () => {
    content.innerHTML = `
        <div style="display:flex; justify-content:center; margin-top:20px;">
            <iframe 
                src="https://www.tiktok.com/embed/7465902983457410334" 
                width="480" 
                height="720" 
                frameborder="0" 
                allow="autoplay; fullscreen" 
                allowfullscreen>
            </iframe>
        </div>
    `;
});


document.getElementById("flower-game").addEventListener("click", () => {
    content.innerHTML = `<canvas id="flower-canvas" width="600" height="400" style="background:#fff0f5; border-radius:10px;"></canvas>
                         <p id="instructions" style="color:#d6006c; font-weight:600; margin-top:10px;">
                             <span style="color:pink;">Blumen= Pink</span><span style="color:black;">Bomben= Schwarz</span>!
                         </p>`;

    const canvas = document.getElementById("flower-canvas");
    const ctx = canvas.getContext("2d");

    let score = 0;
    let flowers = [];
    let bombs = [];
    let mouse = {x: 300, y: 350};

    // Mausbewegung
    canvas.addEventListener("mousemove", e => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    // Objekte erstellen
    function createObjects() {
        // Blumen (pink)
        flowers.push({x: Math.random()*580, y:0, size:20, color:"pink"});
        // Bomben (schwarz)
        if(Math.random()<0.3) bombs.push({x: Math.random()*580, y:0, size:20, color:"black"});
    }

    // Zeichnen & Game Loop
    function draw() {
        ctx.clearRect(0,0,600,400);

        // Maus als Korb
        ctx.fillStyle = "#ff5f7e";
        ctx.fillRect(mouse.x-25, mouse.y-10, 50, 20);

        // Blumen zeichnen
        flowers.forEach((f,i)=> {
            f.y += 2;
            ctx.fillStyle = f.color;
            ctx.beginPath();
            ctx.arc(f.x,f.y,f.size,0,Math.PI*2);
            ctx.fill();

            // Fangen
            if(f.y+f.size > mouse.y-10 && f.y-f.size < mouse.y+10 &&
               f.x > mouse.x-25 && f.x < mouse.x+25){
                score++;
                flowers.splice(i,1);
            }
        });

        // Bomben zeichnen
        bombs.forEach((b,i)=>{
            b.y +=2;
            ctx.fillStyle = b.color;
            ctx.beginPath();
            ctx.arc(b.x,b.y,b.size,0,Math.PI*2);
            ctx.fill();

            // Berührt Maus → Game Over
            if(b.y+b.size > mouse.y-10 && b.y-b.size < mouse.y+10 &&
               b.x > mouse.x-25 && b.x < mouse.x+25){
                alert("Boom! Game Over! Score: "+score);
                flowers = [];
                bombs = [];
                score = 0;
            }
        });

        // Score anzeigen
        ctx.fillStyle = "#d6006c";
        ctx.font = "20px Poppins, sans-serif";
        ctx.fillText("Score: "+score, 10, 25);

        requestAnimationFrame(draw);
    }

    setInterval(createObjects, 1000);
    draw();
});


// 4️⃣ Überraschung: Ein Regen aus Herzchen
document.getElementById("surprise").addEventListener("click", () => {
    content.innerHTML = `<div id="surprise-container" style="position:relative; width:100%; height:400px;"></div>`;
    const container = document.getElementById("surprise-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.innerText = "💖";
        heart.style.position = "absolute";
        heart.style.left = Math.random()*container.clientWidth + "px";
        heart.style.top = "-50px";
        heart.style.fontSize = (Math.random()*30+20) + "px";
        heart.style.transition = "top 2s linear";
        container.appendChild(heart);
        setTimeout(()=>{ heart.style.top = container.clientHeight + "px"; }, 50);
        setTimeout(()=>{ heart.remove(); }, 2050);
    }

    setInterval(createHeart, 200);
});
document.getElementById("sixtyseven").addEventListener("click", () => {
    function create67() {
        const el = document.createElement("div");
        el.classList.add("heart");
        el.innerText = Math.random() < 0.6 ? "💖" : (Math.random() < 0.5 ? "6️⃣" : "7️⃣");
        el.style.left = Math.random() * 100 + "vw";
        el.style.fontSize = (Math.random() * 20 + 25) + "px";
        el.style.animationDuration = (Math.random() * 2 + 3) + "s";
        document.body.appendChild(el);

        setTimeout(() => el.remove(), 5000);
    }

    setInterval(create67, 120);
});
document.getElementById("mini-brief").addEventListener("click", () => {
    const text = document.getElementById("mini-text");
    text.style.display = text.style.display === "none" ? "block" : "none";
});
document.getElementById("sixtyseven").addEventListener("click", () => {
    content.innerHTML = "";

    function create67() {
        const el = document.createElement("div");

        const rand = Math.random();
        el.textContent = rand < 0.6 ? "6️⃣" : "7️⃣";

        el.classList.add("heart"); // gleiche Animation wie Herzen
        el.style.left = Math.random() * window.innerWidth + "px";
        el.style.fontSize = Math.random() * 30 + 20 + "px";
        el.style.animationDuration = Math.random() * 2 + 3 + "s";

        document.body.appendChild(el);

        setTimeout(() => el.remove(), 6000);
    }

    setInterval(create67, 150);
});
document.getElementById("note2").addEventListener("click", () => {
    content.innerHTML = `
        <div>
            <h2>Hi bebi</h2>
            <p>
                Du bist der GOAT,<br>
                Danke das du so lieb und fürsorglich immer zu mir bist,<br>
            </p>
        </div>
    `;
});


