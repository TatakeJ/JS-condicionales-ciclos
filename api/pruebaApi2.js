import fetch from 'node-fetch';
const URL = 'https://api.coronavirus.data.gov.uk/v1/data'
    // fetch(URL)
    // .then(res=>res.json())
    // .then(data=> {
    //     let vec = Object.values(data);
    //     vec.forEach(element => {
    //         console.log(element);
    //     })
    // });
fetch(URL)
    .then(res => res.json())
    .then(data => {
        let vec = Object.values(data);
        let muertes = [];
        let muertesNew = [];
        let confirmadas = [];
        for (let i = 0; i < vec.length; i++) {
            for (let j = 0; j < vec[3].length; j++) {
                console.log('*')
                console.log('Fecha: ', vec[3][j].date);
                console.log('Muertes:', vec[3][j].death);
                console.log('Nuevas muertes:', vec[3][j].deathNew);
                console.log('Muertes confirmadas: ', vec[3][j].confirmed)
                muertes.push(vec[3][j].death)
                muertesNew.push(vec[3][j].deathNew)
                confirmadas.push(vec[3][j].confirmed)
            }
        }

        console.log('------------------------------------------🤔')

        let suma = 0;
        let prom = 0;
            
        for (let i = 0; i < muertes.length; i++) {
            suma += muertes[i];
            prom = suma / muertes.length;
            var ult = muertes.pop()
        }
        
        console.log(`Promedio fallecidos: ${prom} `)

        function promedio2() {
            let suma2 = 0;
            let prom2 = 0;
            for (let i = 0; i < muertesNew.length; i++) {
                suma2 += muertesNew[i];
                prom2 = suma2 / muertesNew.length;
            }
            console.log(prom2)
        }
        console.log('Promedio nuevos fallecidos: ')
        promedio2()

        var suma3 = 0;

        for (let i = 0; i < confirmadas.length; i++) {
            suma3 += confirmadas[i];
            var prom3 = suma3 / confirmadas.length;
            var ultC = confirmadas.pop();
        }

        console.log(`Promedio contagiados: ${prom3}`)

        console.log('Porcentaje de mortalidad: ' + (ult/ultC) * 100 + " %")
    });