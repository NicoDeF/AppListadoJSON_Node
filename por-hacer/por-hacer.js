const fs = require ('fs');

const { error } = require('console');

let listadoPorHacer =[];

const guardarEnDB = () => {
    let data =  JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json',data, (err) => {
    if (err) throw new Error('No se pudo grabar')
    });
}

//serialzia archivo
const cargarEnDB = () => {
    try{
    listadoPorHacer = require('../db/data.json');

} catch (error) {
    listadoPorHacer = [];
}
}

const crear = (descripcion) => {
cargarEnDB();
    let porHacer = {
    descripcion,
    completado : false    
};

listadoPorHacer.push(porHacer);
guardarEnDB();
return porHacer;
}

//Llama al cargarEnDB ya que la funcion es para el comando LISTAR
let getListado =() => {
    cargarEnDB();
    return listadoPorHacer
}

const actualizar = (descripcion,completado = true) => {
    cargarEnDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0 ){
        listadoPorHacer[index].completado = completado;
        guardarEnDB();
        return true;
    }else{
        return false;
    }
    }

const borrar =(descripcion) =>{
    cargarEnDB();
    
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)
    if (listadoPorHacer.length === nuevoListado.length) {
        return false   
    } else {
        listadoPorHacer = nuevoListado;
        guardarEnDB();
        return true;
    }
    }

module.exports= {
    crear,
    getListado,
    actualizar,
    borrar
}