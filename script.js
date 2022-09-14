<<<<<<< HEAD
const btnAlerta = document.getElementById("btn-alerta");
const emailHeader = document.getElementById("email");
const senhaHeader = document.getElementById("senha");

btnAlerta.addEventListener("click", () => {
=======
const btnAlerta = document.getElementById('btn-alerta');
const emailHeader = document.getElementById('email');
const senhaHeader = document.getElementById('senha');
btnAlerta.addEventListener('click', () => {
>>>>>>> e605b4af758df681b6f8e1ea33935bdd418223d9
  if (emailHeader.value === 'tryber@teste.com' && senhaHeader.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});