// Selecionando os botões
const btnBoa = document.getElementById('btnBoa');
const btnSorte = document.getElementById('btnSorte');
const message = document.getElementById('message');

// Função para teleportar o botão "Pq sou boa"
btnBoa.addEventListener('click', () => {
    // Gerando uma posição aleatória na tela
    const randomX = Math.floor(Math.random() * (window.innerWidth - btnBoa.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - btnBoa.offsetHeight));
    btnBoa.style.position = 'absolute';
    btnBoa.style.left = `${randomX}px`;
    btnBoa.style.top = `${randomY}px`;
});

// Função para exibir a mensagem ao clicar no botão "Foi apenas sorte msm"
btnSorte.addEventListener('click', () => {
    message.classList.remove('hidden');
});
