import environement from "../../env.mjs";
const { databaseURL } = environement;

// conexão com o Firebase
// criação dos métodos GET e POST

export class HTTP {
  constructor() {}

  async get(route) {
    const result = fetch(`${databaseURL}${route}`)
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
      });
    return result;
  }

  async post(route, payload) {
    const result = fetch(`${databaseURL}${route}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
      });
    return result;
  }
}
