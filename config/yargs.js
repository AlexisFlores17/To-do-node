const description ={
    demand:true,
    alias:'d',
    desc:'Descripcion de la tarea por hacer'
};

const completado ={
    alias:'c',
    default:true,
    desc:'Marca com completado o pendiente la tarea'
}  


const argv = require('yargs')
                    .command('crear','Crea un  elemento para hacer',{
                        description
                    })
                    .command('actualizar','Actualiza el estado de un a tarea',{
                        description,
                        completado 
                    })

                    .command('borrar','Borrar una tarea',{
                        description
                    })
                    .help()
                    .argv;


module.exports={
    argv
}