const form = document.querySelector("#form-formulario");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("form enviado");
})