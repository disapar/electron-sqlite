const database = require("../database");

const nombre = document.querySelector("#nombre"),
  tel = document.querySelector("#telefono"),
  dir = document.querySelector("#direccion"),
  enviar = document.querySelector("#enviar");

enviar.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(nombre.value);
  console.log(tel.value);
  console.log(dir.value);

  // cargar informacion a la tabla
  var stmt = database.prepare(
    "INSERT INTO clientes(nombre, tel, dir) VALUES (?,?,?)"
  );

  stmt.run([nombre.value, tel.value, dir.value]);

  const data = database.each("SELECT * FROM clientes", (err, row) => {
    console.log(row);
  });
  stmt.finalize();
});
