const buttons = document.querySelectorAll('.contact-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert("Për porosi ose më shumë info, na kontaktoni");
  });
});