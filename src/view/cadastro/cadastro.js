const form = document.querySelector(".form");

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const nome = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  try {
    const response = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, senha })
    });

    if (!response.ok) {
      const erro = await response.json();
      alert(erro.mensagem || 'Erro ao fazer cadastro');
      return;
    }

    window.location.href = '../login email/email-login.html';

  } catch (err) {
    alert("erro ao cadastrar!");
  }

})

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function moveSlide(direction) {
  slides[currentSlide].classList.remove('active');
  currentSlide += direction;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  if (currentSlide >= slides.length) currentSlide = 0;
  slides[currentSlide].classList.add('active');
}

