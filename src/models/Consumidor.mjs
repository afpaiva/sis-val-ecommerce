/*
  todas as ações do CRUD do Model do Ator **Consumidor**
  importando configurações de settings da pasta **database**
*/

export class Consumidor {
  constructor(props) {
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
  }

  getConsumidor() {
    const consumidor = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    return consumidor;
  }
}
