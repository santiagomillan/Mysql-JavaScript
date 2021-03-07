const mysql = require('mysql');
/*
    para que funcione:
    npm init -y
    npm install mysql
    node ./mysql.js
*/
const conection = mysql.createConnection({
    host:'localhost',
    user:'admin',
    password:'lilia98',
    database:'usuarios'
})

conection.connect( (err) =>{
    if(err) throw err
    console.log('La conexion funciona')
})

conection.query('SELECT * from usuarios', (err , rows)=>{
    if(err) throw err
    console.log('Los datos de la tabla son estos: ');
    console.log(rows);
    console.log('Numero de resultados:');
    console.log(rows.length);
    const user1=rows[0];
    console.log(`el nombre del 1 usuario es: ${user1.Nombre} y tiene ${user1.Edad} años`);
})

/*const insertar = "INSERT INTO `usuarios`(`Id-usuario`, `Nombre`, `Genero`, `F.Creacion`, `Documento`, `Edad`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6])"
conection.query(insertar, (err, rows)=>{
    if(err) throw err
})
*/
conection.end();