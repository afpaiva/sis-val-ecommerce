/*
  todas as ações do CRUD do Model do Ator **Consumidor**
  importando configurações de settings da pasta **database**
*/
import { HTTP } from "../database/http.mjs";

export class Consumidor {
  constructor(props) {
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
  }

  getConsumidorInMemory() {
    const consumidor = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    return consumidor;
  }

  async saveConsumidor() {
    const payload = {
      fields: {
        name: {
          stringValue: this.name,
        },
        email: {
          stringValue: this.email,
        },
        password: {
          stringValue: this.password,
        },
      },
    };
    const database = new HTTP();
    const result = await database.post("/consumidores", payload);
    return result;
  }
}
