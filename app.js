// PASO 1 Conectar express
const express = require('express');
// PASO 2 Levantar aplicación con express
const app = express();

//  PASO 4 Crear la ruta que apunte a carpeta views, y dirigir a ella cada que encuentre x cosa que pertenezca a ella
app.set('views', `${__dirname}/views`);

// PASO 7 Crear la ruta que apunte a los archivos en public
app.use(express.static('public'));

// PASO 5 Setear pug como el motor para interpretar vistas
app.set('view engine', 'pug');

// PASO 6 Llamar a la carpeta public y poder leer los recursos en ella
app.use(express.static('public'));

// --------------- AQUÍ TODAS MIS RUTAS ------------------- // 
// Primer ruta default -- index
app.get('/', (req, res, next) => {
  let data = {
    name: "Ironhacker",
    bootcamp: "Web Dev Pt July",
    lastname: "De la mora"
  };
  res.render('index', data);
});

// Ruta de jugadores
app.get('/players', (req,res,next) => {
  res.render('players');
})

// Ruta de equipos
app.get('/teams', (req,res,next) => {
  res.render('teams');
})

// --------------- AQUÍ TODAS MIS RUTAS ------------------- // 

// PASO 3 poder correr el localhost en el puerto 3000
app.listen(3000, () => {
  console.log('Server running successfully! Congrats Nan')
});