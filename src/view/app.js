const database = require('../database');

database.serialize(function() {
    database.run("CREATE TABLE clientes (info TEXT)");
  
    var stmt = database.prepare("INSERT INTO clientes VALUES (?)");
    for (var i = 0; i < 20; i++) {
        stmt.run("Cliente " + i);
    }
    stmt.finalize();
  
    database.each("SELECT * FROM clientes", function(err, row) {
        console.log(row.id + ": " + row.info);
    });
  });
  
  database.close();