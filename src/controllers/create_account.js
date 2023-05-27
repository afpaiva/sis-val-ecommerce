/*
  pega os dados do form e envia para o banco de dados
  importando o Model do Ator **Consumidor**
*/

import { Consumidor } from "../models/Consumidor.mjs";

const form = document.querySelector("#create-account-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const consumidor = new Consumidor({
    name: e.target.name.value,
    email: e.target.email.value,
    password: e.target.password.value,
  });
  await consumidor.saveConsumidor();
  window.location.replace("../website/account_created.html");
});
