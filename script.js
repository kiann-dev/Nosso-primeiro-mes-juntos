/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        }, 1000);

    }, 2500);

});

/* ==========================================
   BOTÃO COMEÇAR
========================================== */

const startButton = document.getElementById("startButton");

if(startButton){

    startButton.addEventListener("click", () => {

        window.scrollTo({

            top: window.innerHeight,

            behavior: "smooth"

        });

    });

}

/* ==========================================
   CONTADOR
========================================== */

const namoro = new Date("2026-07-04T00:00:00");

function atualizarContador(){

    const agora = new Date();

    let diff = agora - namoro;

    if(diff < 0){

        diff = 0;

    }

    const segundos = Math.floor(diff / 1000);

    const minutos = Math.floor(segundos / 60);

    const horas = Math.floor(minutos / 60);

    const dias = Math.floor(horas / 24);

    const meses = Math.floor(dias / 30);

    document.getElementById("months").textContent = meses;

    document.getElementById("days").textContent = dias;

    document.getElementById("hours").textContent = horas;

    document.getElementById("minutes").textContent = minutos;

    document.getElementById("seconds").textContent = segundos;

}

setInterval(atualizarContador,1000);

atualizarContador();

/* ==========================================
   BOTÃO DA MÚSICA
========================================== */

const music = document.getElementById("music");

const musicButton = document.getElementById("musicButton");

let tocando = false;

musicButton.addEventListener("click",()=>{

    if(!tocando){

        music.play();

        tocando = true;

        musicButton.innerHTML = '<i class="fa-solid fa-pause"></i>';

    }else{

        music.pause();

        tocando = false;

        musicButton.innerHTML = '<i class="fa-solid fa-music"></i>';

    }

});

/* ==========================================
   BOTÃO VOLTAR AO TOPO
========================================== */

const topButton = document.getElementById("topButton");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 600){

        topButton.style.display = "block";

    }else{

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ==========================================
   LIGHTBOX DA GALERIA
========================================== */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".photo img").forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImage.src=img.src;

    });

});

closeLightbox.addEventListener("click",()=>{

    lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});

/* ==========================================
   MODO BOBA™
========================================== */

const funButton=document.getElementById("funButton");

const funBox=document.getElementById("funBox");

funButton.addEventListener("click",()=>{

    if(funBox.style.display==="block"){

        funBox.style.display="none";

        funButton.innerHTML="🤫 Não clique aqui...";

    }else{

        funBox.style.display="block";

        funButton.innerHTML="😂 Você clicou!";

        criarCoracoes(25);

    }

});

/* ==========================================
   CAIXA DE PRESENTE
========================================== */

const giftBox=document.getElementById("giftBox");

const giftMessage=document.getElementById("giftMessage");

giftBox.addEventListener("click",()=>{

    giftBox.style.transform="scale(1.2) rotate(10deg)";

    giftBox.innerHTML="❤️";

    giftMessage.style.display="block";

    criarCoracoes(60);

});

/* ==========================================
   CHUVA DE CORAÇÕES
========================================== */

const heartContainer=document.getElementById("heartContainer");

function criarCoracoes(qtd){

    for(let i=0;i<qtd;i++){

        const heart=document.createElement("span");

        heart.innerHTML="❤️";

        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top="-30px";

        heart.style.fontSize=(18+Math.random()*30)+"px";

        heart.style.opacity=Math.random();

        heart.style.pointerEvents="none";

        heart.style.zIndex="9999";

        heart.style.transition="transform 6s linear, opacity 6s";

        heartContainer.appendChild(heart);

        setTimeout(()=>{

            heart.style.transform=`translateY(${window.innerHeight+200}px) rotate(${Math.random()*720}deg)`;

            heart.style.opacity="0";

        },100);

        setTimeout(()=>{

            heart.remove();

        },6200);

    }

}

/* ==========================================
   ESTRELAS INTERATIVAS
========================================== */

document.querySelectorAll(".star").forEach(star=>{

    star.addEventListener("click",()=>{

        star.style.background="#ff2d55";

        star.style.transform="scale(1.1)";

        criarCoracoes(10);

        setTimeout(()=>{

            star.style.transform="scale(1)";

        },300);

    });

});

/* ==========================================
   ANIMAÇÃO AO ROLAR A PÁGINA
========================================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
            entry.target.style.transition="all .8s ease";

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
".photo,.letter,.reason,.timeline-item,.star,.f1-card,.counter .box"
).forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(50px)";

    observer.observe(item);

});

/* ==========================================
   EFEITO PARALLAX
========================================== */

window.addEventListener("scroll",()=>{

    const scroll = window.pageYOffset;

    document.body.style.backgroundPositionY = scroll * .3 + "px";

});

/* ==========================================
   CURSOR DE BRILHO
========================================== */

document.addEventListener("mousemove",(e)=>{

    let brilho=document.createElement("div");

    brilho.className="spark";

    brilho.style.left=e.clientX+"px";
    brilho.style.top=e.clientY+"px";

    document.body.appendChild(brilho);

    setTimeout(()=>{

        brilho.remove();

    },700);

});

/* ==========================================
   DIGITAÇÃO AUTOMÁTICA
========================================== */

const finalTitulo=document.querySelector(".final-section h1");

if(finalTitulo){

    const textoOriginal=finalTitulo.innerText;

    finalTitulo.innerHTML="";

    let i=0;

    function escrever(){

        if(i<textoOriginal.length){

            finalTitulo.innerHTML+=textoOriginal.charAt(i);

            i++;

            setTimeout(escrever,120);

        }

    }

    setTimeout(escrever,800);

}

/* ==========================================
   EFEITO NAS FOTOS
========================================== */

document.querySelectorAll(".photo").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.transform=
        `perspective(1000px)
        rotateY(${(x-rect.width/2)/20}deg)
        rotateX(${-(y-rect.height/2)/20}deg)
        scale(1.03)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

    });

});

/* ==========================================
   FRASES ALEATÓRIAS
========================================== */

const frases=[

"❤️ Você é meu lugar favorito.",

"🏎️ Minha melhor corrida começou com você.",

"✨ Obrigado por existir.",

"❤️ Cada dia ao seu lado vale a pena.",

"🌹 Eu escolheria você todas as vezes."

];

setInterval(()=>{

    const frase=frases[Math.floor(Math.random()*frases.length)];

    console.log(frase);

},7000);

/* ==========================================
   FOGOS DE ARTIFÍCIO
========================================== */

const fireCanvas = document.getElementById("fireworks");

if(fireCanvas){

    const ctx = fireCanvas.getContext("2d");

    fireCanvas.width = window.innerWidth;
    fireCanvas.height = window.innerHeight;

    window.addEventListener("resize",()=>{

        fireCanvas.width = window.innerWidth;
        fireCanvas.height = window.innerHeight;

    });

    let particles=[];

    function firework(){

        const x=Math.random()*fireCanvas.width;
        const y=Math.random()*fireCanvas.height/2;

        for(let i=0;i<45;i++){

            particles.push({

                x:x,
                y:y,

                dx:(Math.random()-0.5)*8,
                dy:(Math.random()-0.5)*8,

                life:100

            });

        }

    }

    function animateFireworks(){

        ctx.clearRect(0,0,fireCanvas.width,fireCanvas.height);

        particles.forEach((p,index)=>{

            p.x+=p.dx;
            p.y+=p.dy;

            p.life--;

            ctx.beginPath();

            ctx.arc(p.x,p.y,2,0,Math.PI*2);

            ctx.fillStyle=`rgba(255,${Math.random()*100},${Math.random()*120},${p.life/100})`;

            ctx.fill();

            if(p.life<=0){

                particles.splice(index,1);

            }

        });

        requestAnimationFrame(animateFireworks);

    }

    animateFireworks();

    setInterval(firework,5000);

}

/* ==========================================
   CHUVA AUTOMÁTICA DE CORAÇÕES
========================================== */

setInterval(()=>{

    criarCoracoes(6);

},3500);

/* ==========================================
   MENSAGEM FINAL
========================================== */

setTimeout(()=>{

    console.log("❤️ Feliz 1 mês, Isabela ❤️");

},10000);

/* ==========================================
   SITE PRONTO
========================================== */

console.log("%c❤️ Projeto criado com amor ❤️",
"color:#ff2d55;font-size:20px;font-weight:bold;");

