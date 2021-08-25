const firstPromise = new Promise((resolve, reject)=> {
    const random = Math.round(Math.random() * 100);
    function decideStatus() {
        (random > 20) ? resolve("ok") : reject("error");
      }
    setTimeout(() => {
        decideStatus();
    }, 3000);
})
const secondPromise = new Promise((resolve, reject)=> {
    const random = Math.round(Math.random() * 100);
    function decideStatus() {
        (random > 20) ? resolve("ok") : reject("error");
      }
    setTimeout(() => {
        decideStatus();
    }, 2000);
})
const thirdPromise = new Promise((resolve, reject)=> {
    const random = Math.round(Math.random() * 100);
    function decideStatus() {
        (random > 20) ? resolve("ok") : reject("error");
      }
    setTimeout(() => {
        decideStatus();
    }, 5000);
})
const fourthPromise = new Promise((resolve, reject)=> {
    const random = Math.round(Math.random() * 100);
    function decideStatus() {
        (random > 20) ? resolve("ok") : reject("error");
      }
    setTimeout(() => {
        decideStatus();
    }, 1000);
})
const fifthPromise = new Promise((resolve, reject)=> {
    const random = Math.round(Math.random() * 100);
    function decideStatus() {
        (random > 20) ? resolve("ok") : reject("error");
      }
    setTimeout(() => {
        decideStatus();
    }, 4000);
})

console.log('iniciando ...');

// Random 25 numeros con generadores

function *numerosRandom() {
    let counter = 0;
    while (counter < 25) {
        yield {
            contador: counter++,
            numero: Math.floor((Math.random() * 1000))
        }
    }

}

for (i of numerosRandom()) {
    if (i < 25) {
        break
    }
    console.log(numerosRandom().next().value.numero)
}


// Devolucion de accesos

firstPromise
    .then(resultado => console.log('Completo', resultado))
    .catch(error => console.log('Error:', error))
    .finally(() => {
        console.log(numerosRandom().next().value.numero)
    })
secondPromise
    .then(resultado => console.log('Completo', resultado))
    .catch(error => console.log('Error:', error))
    .finally(() => {
        console.log(numerosRandom().next().value.numero)
    })
thirdPromise
    .then(resultado => console.log('Completo', resultado))
    .catch(error => console.log('Error:', error))
    .finally(() => {
        console.log(numerosRandom().next().value.numero)
    })
fourthPromise
    .then(resultado => console.log('Completo', resultado))
    .catch(error => console.log('Error:', error))
    .finally(() => {
        console.log(numerosRandom().next().value.numero)
    })
fifthPromise
    .then(resultado => console.log('Completo', resultado))
    .catch(error => console.log('Error:', error))
    .finally(() => {
        console.log(numerosRandom().next().value.numero)
    })
console.log('finalizando');