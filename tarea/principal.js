const datos = require('./infoCursos');
const fs= require('fs');
const express = require('express')
const app = express()

//**************************FUNCION PARA MOSTRAR INFORMACION DE CURSOS*****************************************//
let info=(i,callback)=>{
    let curso1 = datos.cursos.find(idCurso => idCurso.id == i);
    setTimeout(function(){
        let resultado= 'El curso se llama ' + curso1.nombre + ' tiene un id='+ curso1.id + ' tiene una duracion de ' + curso1.duracion + ' y un valor de ' + curso1.valor;
        callback(resultado);
    },2000);    
}

//**************************************REQUIRE EXTERNO*************************************/
const opciones={
    id:{
        demand:true,
        alias:'i'
    },
    nombre:{
        demand:true,
        alias:'n'
    },
    cedula:{
        demand:true,
        alias:'x'
    }
}

const argv = require('yargs')
            .command ('inscribir','Inscribirme en un curso',opciones)
            .argv


//*************MOSTRAR CURSOS, INSCRIBIR ESTUDIANTE O MOSTRAR MENSAJE DE ALERTA SI EL ID NO EXISTE**********/
if(argv.id==undefined){
    info(1,function(resultado){
        console.log(resultado);
        info(2,function(resultado){
            console.log(resultado);
            info(3,function(resultado){
                console.log(resultado);
            })
        })
    })
}
else if(argv.id=='1' || argv.id=='2'|| argv.id=='3'){
    let curso1 = datos.cursos.find(idCurso => idCurso.id == argv.i);
    texto = 'El estudiante ' + argv.nombre + '\n' + ' con cedula ' + argv.cedula + '\n'+ 
            ' se ha mariculado en el curso llamado ' + curso1.nombre + ' tiene una duracion de ' + curso1.duracion + ' y un valor de ' + curso1.valor;
    app.get('/', function (req, res) {
        res.send(texto)
    })
    app.listen(3000)
}else{
    console.log('El id ingresado no corresponde a un curso en oferta');
}

