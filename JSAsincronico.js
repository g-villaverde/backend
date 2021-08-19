
// Entrega de Javascript Asincronico

function bilardoTextAnalyzer (texto, callback, tiempo) {
    const word = texto.split(' ');
    let i = 0;
    let idWord = setInterval(() => {
        console.log(word[i++]);
        if (i == word.length) {
            console.log(word[i])
            clearInterval(idWord);
            callback();
            console.log("Cantidad de palabras en el texto:" + word.length);
        }
        
    }, tiempo ?? 1000);
}

const completo = () => console.log('proceso completo');  // Funcion Callback



setTimeout(() => {bilardoTextAnalyzer("Si se la siguen dando", completo, 2500);}, 1000);
setTimeout(() => {bilardoTextAnalyzer("Perdemos seguro", completo);}, 25000);
setTimeout(() => {bilardoTextAnalyzer("CUANDO MARADONA MARCÓ EL SEGUNDO GOL A LOS INGLESES NO LO CELEBRÉ. estaba pendiente de cómo habíamos quedado posicionados", completo)}, 50000);

  
/* setTimeout(() =>bilardoTextAnalyzer("Si se la siguen dando a los de amarillo (brasil), perdemos seguro", completo, 2500), 10); */
/* setTimeout(() =>bilardoTextAnalyzer("CUANDO MARADONA MARCÓ EL SEGUNDO GOL A LOS INGLESES NO LO CELEBRÉ. estaba pendiente de cómo habíamos quedado posicionados", completo), 3500);
setTimeout(() => bilardoTextAnalyzer("Yo nunca festejé demasiado. Debo tener un trauma desde chico. Incluso después de la final del Mundial me encerré en mi habitación. Estaba preocupado porque nos habían hecho dos goles de cabeza", completo, 800), 5000);  */