import express from 'express';
import * as fs from 'fs';


const app = express();
const PORT = 8080;
let item = 0;
let itemsVisitas = 0;

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error=>console.log('Error en el servidor', error));
const array = fs.readFileSync('archivos/producto.txt', 'utf-8', (error, contenido) => {
    if(error) {
        console.log("error de lectura");
    } else {
       return JSON.parse(contenido);
    }
})


// Devuelve todos los items en producto.txt

app.get('/items', (req, res)=>{
    let logVisistas = ++itemsVisitas; // suma la cantidad de veces que se visita la ruta

    const cantidadArray = array.length;     //determina la cantidad de objetos que hay en el array
    const resultado = {
        items: array,
        cantidad: cantidadArray
    }
    res.send(resultado)
});


// Devuelve un item random

app.get('/item-random',  (req, res)=> {
    let logVisitas = ++item;
    let arrayLargo = array.length;

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

    let numeroRandom = getRandomInt(0, arrayLargo);
    console.log(numeroRandom);

    res.send(numeroRandom);
})


// Devuelve la cantidad de veces que se visito cada ruta

app.get('/visitas', (req,res)=> {

    const resultado = {
        visitas: {
            item: item,
            items: itemsVisitas,
        }
    }

    res.send(resultado)
})