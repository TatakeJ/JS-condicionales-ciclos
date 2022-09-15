//.then
import fetch from 'node-fetch';
const URL ='https://pokeapi.co/api/v2/pokemon'
fetch(URL)
.then(res=>res.json())
.then(data=>{
    let vec = Object.values(data);
//cuenta solo los elementos exteriores
    vec.forEach(element => {
        console.log(element);
    });
//nos permite mirar la posicion y datos especificos
//     for (let i = 0; i < vec.length; i++) {
//         for (let j = 0; j < vec[3].length; j++) {
//             console.log(vec[3][j]);
//         }
//     }
});

// async function loader(){
//     const res = await fetch(URL);
//     const data =await res.json();
//     console.log(data);
// }
// loader();