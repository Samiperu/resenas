/**
 * Codigo que se usa en pruebas locales.
 * Esta version usa .env en lugar del serverless.yaml
 * 
 * Para correr en lambda, usar `index.js`.
 */
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = require("./src/app")
const port = process.env.PORT;

app.listen(port, () => { 
    ("Running on port", port);
    ("Environment", process.env.NODE_ENV);
});