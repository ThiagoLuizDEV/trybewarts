const btnAlerta = document.getElementById('btnAlerta');
const emailHeader = document.getElementById('email');
const senhaHeader = document.getElementById('senha');
const agreement = document.getElementById('agreement');
const btnEnviar = document.getElementById('submit-btn');
const contador = document.getElementById('counter');
const textarea = document.getElementById('textarea');
const limite = contador.innerText;

btnAlerta.addEventListener('click', () => {
  if (emailHeader.value === 'tryber@teste.com' && senhaHeader.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreement.addEventListener('change', () => {
  btnEnviar.disabled = !agreement.checked;
});

textarea.addEventListener('input', () => {
  const caracteresDigitados = textarea.value.length;
  const caracteresRestantes = limite - caracteresDigitados;
  contador.innerText = caracteresRestantes;
});
