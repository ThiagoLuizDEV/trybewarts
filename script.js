const btnAlerta = document.getElementById("btnAlerta");
const emailHeader = document.getElementById("email");
const senhaHeader = document.getElementById("senha");

btnAlerta.addEventListener('click', () => {
if (emailHeader.value === 'tryber@teste.com' && senhaHeader.value === '123456') {
alert('Olá, Tryber!');
} else {
alert('Email ou senha inválidos.');
}
});