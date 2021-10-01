if (!localStorage.getItem("tablas")) {
  const database = require("../database");
  database.serialize(() => {
    database.run(`CREATE TABLE clientes (
            id	INTEGER,
            nombre	TEXT,
            tel	TEXT,
            dir	TEXT,
            PRIMARY KEY(id AUTOINCREMENT)
        );`);

    localStorage.setItem("tablas", "1");
  });
}

if (localStorage.getItem("tablas")) {
  const data = database.each("SELECT * FROM clientes", (err, row) => {
    console.log(row.nombre);
  });
}


