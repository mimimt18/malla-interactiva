document.querySelectorAll('.ramo').forEach(ramo => {
  const id = ramo.dataset.id;

  // Restaurar estado desde localStorage
  if (localStorage.getItem(id) === 'true') {
    ramo.classList.add('aprobado');
  }

  ramo.addEventListener('click', () => {
    ramo.classList.toggle('aprobado');
    localStorage.setItem(id, ramo.classList.contains('aprobado'));
  });
});
