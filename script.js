document.addEventListener('DOMContentLoaded', function() {
  const colors = [
    '#fff',
    '#f0f7ff',
    '#fff5f5',
    '#f7fff0',
    '#fff0f7'
  ];

  let currentColorIndex = 0;

  document.getElementById('colorChangeButton').addEventListener('click', function() {
    const containers = document.querySelectorAll('.container');
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    containers.forEach(container => {
      container.style.backgroundColor = colors[currentColorIndex];
    });
  });
});