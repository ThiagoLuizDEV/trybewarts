const btnAlerta = document.getElementById('btnAlerta');
const emailHeader = document.getElementById('email');
const senhaHeader = document.getElementById('senha');
const agreement = document.getElementById('agreement');
const btnEnviar = document.getElementById('submit-btn');

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
