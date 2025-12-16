document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project-window').forEach(windowEl => {
    const closeBtn = windowEl.querySelector('.close');
    const card = windowEl.querySelector('.project-card');

    if (!closeBtn || !card) return;

    closeBtn.addEventListener('click', () => {
      const isCollapsed = windowEl.classList.toggle('collapsed');

      if (isCollapsed) {
        card.style.height = card.scrollHeight + 'px';
        requestAnimationFrame(() => {
          card.style.height = '0px';
        });
      } else {
        card.style.height = card.scrollHeight + 'px';
        card.addEventListener(
          'transitionend',
          () => {
            card.style.height = 'auto';
          },
          { once: true }
        );
      }
    });
  });
});