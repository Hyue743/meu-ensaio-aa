// Mostra o botão quando o usuário rola a página
window.onscroll = function() {
    let btn = document.getElementById("scrollTopBtn");
    if (document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Função para voltar ao topo da página suavemente
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}