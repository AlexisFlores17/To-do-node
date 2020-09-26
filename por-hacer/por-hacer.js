
const fs = require('fs');


let listadoPorHacer =[];


const guardarDB = () =>{

    let data = JSON.stringify(listadoPorHacer);

    
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) reject(err)
    }); 
}

const cargarDB= () =>{

    try {
        listadoPorHacer = require('../db/data.json'); 
    } catch (error) {
        listadoPorHacer=[];
    }
    
    
}

const getListado = ()=>{

    cargarDB();

    return listadoPorHacer;
}

const actualizar = ( description , completado = true) =>{
    cargarDB();

    let index =  listadoPorHacer.findIndex( tarea =>{
        return tarea.description === description;
    });

    if (index >=0) {
        listadoPorHacer[index].completado=completado;
        guardarDB();
        return true;
    }else{
        return false;
    }


}

const borrar = ( description) =>{
    cargarDB();

    let nuevoListado =  listadoPorHacer.filter( tarea =>{
        return tarea.description !== description;
    });

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    }else{
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }


}


const crear = ( description) =>{


    cargarDB();

    let porHacer = {
        description,
        completado:false

    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

module.exports={
    crear,
    getListado,
    actualizar,
    borrar
}