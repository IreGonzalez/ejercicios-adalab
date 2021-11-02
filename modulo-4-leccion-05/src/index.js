// importar el módulo better-sqlite3
const Database = require("better-sqlite3");

// indicar qué base de datos vamos a usar con la ruta relativa a la raíz del proyecto
const db = new Database("./src/database.db", {
    // con verbose le decimos que todas las queries que se ejecuten las muestre en la consola
    verbose: console.log,
    // así podemos comprobar qué queries estamos haciendo en todo momento
});

// preparamos la query
const query = db.prepare('SELECT * FROM users');
// ejecutamos la query
const users = query.all();

// creamos el endpoint /users de tipo GET
app.get("/users", (req, res) => {
    // preparamos y ejecutamos la query
    const query = db.prepare('SELECT * FROM users');
    const users = query.all();
    // respondemos a la petición con los datos que ha devuelto la base de datos
    res.json(users);
});

// preparo la query
const query = db.prepare('SELECT * FROM users');
// ejecuto la query para obtener todos los registros en un array
const users = query.all();
// ejecuto la query para obtener el primer registro en un objeto
const user = query.get();

// preparo la query
const query = db.prepare('SELECT * FROM users WHERE id >= ?');
// la ejecuta indicando: WHERE id >= 2
const users = query.all(2);

// preparo la query
const query = db.prepare('SELECT * FROM users WHERE email = ? AND password = ?');
// la ejecuta indicando: SELECT * FROM users  WHERE email = 'lucia@hotmail.com' AND password = 'qwertyui'
const users = query.get("lucia@hotmail.com", "qwertyui");