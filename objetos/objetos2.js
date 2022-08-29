var coleccion = [{
            nombre: 'Cien años de soledad',
            autor: 'Gabriel Garcia Marquez',
            obras: [{ nombre: 'El amor en tiempos de cólera' },
                { editorial: 'La Oveja Negra Ltda' },
                { año: 1985 }
            ]
        },
        {
            nombre: 'Pedro Paramo',
            autor: 'Juan Rulfo',
            obras: [{ nombre: 'El amor en tiempos de cólera' },
                { editorial: 'La Oveja Negra Ltda' },
                { año: 1985 }
            ]
        },
        {
            nombre: 'Siervi sin letra',
            autor: 'Eduardo Caballero Calderón',
            obras: [{ nombre: 'El amor en tiempos de cólera' },
                { editorial: 'La Oveja Negra Ltda' },
                { año: 1985 }
            ]
        }
    ]
    //console.log(coleccion)
    //console.log(coleccion[0].obras);
console.log('--------------------------------------------')
coleccion.forEach(function(c) {
    console.log(c.obras[1]);
})