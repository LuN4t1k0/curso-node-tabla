const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
  })
  .option("l", {
    alias: "Listar",
    type: "boolean",
    default: false,
    describe: 'Muestra la tabla de la base solicitada'
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 12,
    describe: 'fija el limite de la multiplcacion'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser un numero";
    }
    return true;
  }).argv;


  module.exports = argv;
  