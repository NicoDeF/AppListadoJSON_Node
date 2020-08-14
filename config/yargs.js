const argv = require('yargs')
    //1° arg nombre del comando, 2° arg descrp del commando 3° objeto a recibir obligatorio o no
    .command('actualizar', 'Actualiza el estado completado de una tarea',{
    descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion Actualizar'
        },
    completado: {
                     alias: 'c',
                     default: true,
                     desc: 'Marca como completado o pendiente la tarea'
    }
}
    )
    .command('crear', 'Guarda en archivo la tarea correspondiente', {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de Crear',
     }
    })

    .command('borrar','Borra la tarea correspondiente en la BBDD',{
         descripcion: {
         demand: true,
         alias: 'b',
         desc: 'Borrar tarea',
         }
         })
    .help()
    .argv;

module.exports = {
    argv
}

