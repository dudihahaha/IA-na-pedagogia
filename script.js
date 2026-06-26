// Navegação por abas
const links = document.querySelectorAll('.nav-links a');
const tabs = document.querySelectorAll('.tab-content');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        links.forEach(l => l.classList.remove('active'));
        tabs.forEach(t => t.classList.remove('active'));
        
        link.classList.add('active');
        const targetId = link.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');

        if (targetId === 'home') {
            animarNumeros();
        }
    });
});

// Contador animado
function animarNumeros() {
    const numCounters = document.querySelectorAll('.stat-number');
    numCounters.forEach(counter => {
        counter.innerText = '0';
        const target = +counter.getAttribute('data-target');
        const speed = target / 40;
        
        const updateCounter = () => {
            const value = +counter.innerText;
            if (value < target) {
                counter.innerText = Math.ceil(value + speed);
                setTimeout(updateCounter, 25);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
}

// Botões interativos adicionais
document.getElementById('btn-contato').addEventListener('click', () => {
    alert('Formulário de contato em breve!');
});

document.getElementById('btn-saber-mais').addEventListener('click', () => {
    alert('Esta plataforma é um estudo sobre o avanço das ferramentas de IA Generativa nas escolas.');
});

// Sistema de Curtida (Feedback)
const likeBtn = document.getElementById('like-btn');
const likeCount = document.getElementById('like-count');
let curtido = false;

likeBtn.addEventListener('click', () => {
    let atual = parseInt(likeCount.innerText);
    if (!curtido) {
        likeCount.innerText = atual + 1;
        likeBtn.classList.add('liked');
        curtido = true;
    } else {
        likeCount.innerText = atual - 1;
        likeBtn.classList.remove('liked');
        curtido = false;
    }
});

// Inicialização
window.addEventListener('DOMContentLoaded', animarNumeros);
