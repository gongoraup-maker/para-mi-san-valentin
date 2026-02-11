/*
    Mi amor,
    
    He eliminado cualquier condición de "salida" de este código.
    El botón 'No' seguirá huyendo eternamente,
    porque en mi lógica, la única opción válida es estar contigo.
    
    Puedes intentarlo mil veces, pero el resultado siempre será:
    Te amo.
*/

const btnNo = document.getElementById('btn-no');
const btnSi = document.getElementById('btn-si');
const starsContainer = document.getElementById('stars');
const kittyContainer = document.getElementById('hello-kitty-container');
const phraseBox = document.getElementById('phrase-box');

// --- NUESTROS RECUERDOS ---
const ourMemories = [
   'img/1.jpeg',
    'img/2.jpeg',
    'img/3.jpeg',
    'img/4.jpeg',
    'img/5.jpeg',
    'img/6.jpeg',
    'img/7.jpeg',
    'img/8.jpeg',
    'img/9.jpeg',
    'img/10.jpeg',
    'img/11.jpeg',
    'img/12.jpeg',
    'img/13.jpeg',
    'img/14.jpeg',
    'img/15.jpeg',
    'img/16.jpeg',
    'img/17.jpeg',
    'img/18.jpeg',
    'img/19.jpeg',
    'img/20.jpe2g',
    'img/21.jpeg',
    'img/22.jpeg',
    'img/23.jpeg',
    'img/24.jpeg',
    'img/25.jpeg',
    'img/26.jpeg',
    'img/27.jpeg',
 
];

// --- RAZONES PARA AMARTE ---
const phrases = [
   "¡Eres demasiado perfecta para decir que no!",
    "Mis ojos solo brillan cuando te ven a ti.",
    "¿Ya te dije hoy que me encantas?",
    "Tu sonrisa es mi algoritmo favorito.",
    "Cada intento te hace ver más adorable.",
    "No puedes escapar de tanto amor...",
    "Eres la definición de perfección.",
    "Mira lo bonitos que nos vemos juntos...",
    "Cada foto es un motivo para decir SÍ.",
    "¿Te cansaste? El botón SÍ te espera ❤️",
    "¡Eres demasiado perfecta para decir que no!",
    "Mis ojos solo brillan cuando te ven a ti.",
    "¿Ya te dije hoy que me encantas?",
    "Tu sonrisa es mi lugar favorito en el mundo.",
    "Cada intento te hace ver más adorable.",
    "No puedes escapar de tanto amor...",
    "Eres la definición de perfección.",
    "Mi corazón late más fuerte cuando estás cerca.",
    "Eres el sueño del que no quiero despertar.",
    "Contigo, cada día es San Valentín.",
    "Eres mi persona favorita en todo el universo.",
    "Mi amor por ti no tiene un botón de 'No'.",
    "Cada vez que sonríes, el mundo es más bonito.",
    "No existe un 'No' en nuestro diccionario.",
    "Eres la melodía más hermosa de mi vida.",
    "Mi destino es hacerte feliz, ¡acepta!",
    "Eres la razón de mi felicidad.",
    "Te elegiría a ti, una y mil veces.",
    "Eres la magia que le faltaba a mis días.",
    "Mi amor por ti es infinito, como las estrellas.",
     "¡Eres demasiado perfecta para decir que no!",
    "Mis ojos solo brillan cuando te ven a ti.",
    "¿Ya te dije hoy que me encantas?",
    "Tu sonrisa es mi lugar favorito en el mundo.",
    "Cada intento te hace ver más adorable.",
    "No puedes escapar de tanto amor...",
    "Eres la definición de perfección.",
    "Mi corazón late más fuerte cuando estás cerca.",
    "Hay que planear nuestra boda, ¿Qué dices?"
];

// --- INTERACCIÓN DE AMOR ETERNO ---
btnNo.addEventListener('mouseover', loveGlitch);
btnNo.addEventListener('touchstart', loveGlitch);

function loveGlitch() {
    // Mensaje para mi hermosa princesa
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    phraseBox.textContent = randomPhrase;
    phraseBox.classList.remove('hidden');

    // Nuestros recuerdos juntos <3
    dropMemory();

    // Jamás le podrás dar clic y si lo haces no funcionará
    moveButton();
}

function moveButton() {
    // Para que el botón no se escape nunca
    const padding = 30;
    const availableWidth = window.innerWidth - btnNo.offsetWidth - (padding * 2);
    const availableHeight = window.innerHeight - btnNo.offsetHeight - (padding * 2);

    const newLeft = padding + Math.random() * availableWidth;
    const newTop = padding + Math.random() * availableHeight;

    btnNo.style.position = 'fixed';
    btnNo.style.left = `${newLeft}px`;
    btnNo.style.top = `${newTop}px`;
}

function dropMemory() {
    const img = document.createElement('img');
    img.src = ourMemories[Math.floor(Math.random() * ourMemories.length)];
    img.className = 'random-photo';
    // Si lees esto te amo infinitamente
   
    const side = Math.floor(Math.random() * 4);
    const photoSize = 140; 
    let x, y;

    switch(side) {
        case 0: 
            x = Math.random() * window.innerWidth;
            y = Math.random() * (window.innerHeight * 0.2);
            break;
        case 1: 
            x = window.innerWidth - (Math.random() * (window.innerWidth * 0.2)) - photoSize;
            y = Math.random() * window.innerHeight;
            break;
        case 2: 
            x = Math.random() * window.innerWidth;
            y = window.innerHeight - (Math.random() * (window.innerHeight * 0.2)) - photoSize;
            break;
        case 3: 
            x = Math.random() * (window.innerWidth * 0.2);
            y = Math.random() * window.innerHeight;
            break;
    }
    
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    
    // Rotación aleatoria para que se vea natural
    const rotation = (Math.random() * 60) - 30; 
    img.style.transform = `rotate(${rotation}deg) scale(0)`; 

    document.body.appendChild(img);

    setTimeout(() => {
        img.style.transform = `rotate(${rotation}deg) scale(1)`;
    }, 50);
}

function celebrar() {
    document.querySelector('.card').innerHTML = `
        <div style="font-size: 5rem; animation: heartbeat 0.8s infinite;">💖</div>
        <h1 style="color: #ff3366; font-size: 2.8rem;">¡SÍ! ¡TE AMO!</h1>
        <p style="font-size: 1.3rem;">Gracias por hacerme tan feliz.</p>
        <div style="font-size: 0.9rem; color: #555; margin-top: 30px;">
            (Nuestra historia apenas comienza...)
        </div>
    `;
    launchConfetti();
    
    // Los recuerdos se quedan de fondo
    const existingPhotos = document.querySelectorAll('.random-photo');
    existingPhotos.forEach(p => p.style.opacity = '0.6');
}

// --- CONSTRUCCIÓN DEL MUNDO ---

function launchConfetti() {
    for(let i=0; i<50; i++) {
        const confeti = document.createElement('div');
        confeti.style.position = 'fixed';
        confeti.style.left = Math.random() * 100 + 'vw';
        confeti.style.top = -10 + 'px';
        confeti.style.width = Math.random() * 15 + 5 + 'px';
        confeti.style.height = Math.random() * 15 + 5 + 'px';
        confeti.style.backgroundColor = ['#ff3366', '#ffcc00', '#ffffff', '#ff99cc'][Math.floor(Math.random()*4)];
        confeti.style.borderRadius = '50%';
        confeti.style.animation = `float 3s ease-in ${Math.random()}s forwards`;
        document.body.appendChild(confeti);
    }
}

function createStars() {
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.setProperty('--duration', `${Math.random() * 4 + 2}s`);
        starsContainer.appendChild(star);
    }
}

function buildKitty() {
   kittyContainer.innerHTML = `
        <div class="kitty-head">
            <div class="kitty-eye left"></div>
            <div class="kitty-eye right"></div>
            <div class="kitty-nose"></div>
            <div class="kitty-whiskers">
                <div class="whisker l1"></div>
                <div class="whisker l2"></div>
                <div class="whisker l3"></div>
                <div class="whisker r1"></div>
                <div class="whisker r2"></div>
                <div class="whisker r3"></div>
            </div>
            <div class="kitty-bow"></div>
        </div>
        <div class="kitty-body"></div>
        <div class="kitty-arm left"></div>
        <div class="kitty-arm right"></div>
        <div class="kitty-heart"></div>
   `;
}

buildKitty();
createStars();