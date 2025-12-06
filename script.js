document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('exploreBtn');
  const title = document.querySelector('h1 span');

  btn.addEventListener('click', () => {
    // Feedback visual ao clicar
    btn.innerHTML =
      '<span class="relative z-10 flex items-center gap-2"><i class="fa-solid fa-check"></i> Carregado</span>';
    btn.classList.add('bg-indigo-500', 'text-white', 'border-none');
    btn.classList.remove('bg-white', 'text-black');

    // Alterar o texto principal para mostrar interatividade
    title.style.opacity = '0';
    setTimeout(() => {
      title.textContent = 'Bem-vindo';
      title.classList.remove(
        'from-indigo-400',
        'via-purple-400',
        'to-pink-400'
      );
      title.classList.add('text-white');
      title.style.transition = 'opacity 0.5s ease';
      title.style.opacity = '1';
    }, 300);
  });
});
