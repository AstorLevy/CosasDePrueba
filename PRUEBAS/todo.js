let dia = "Viernes";
let clima = "Nublado";

if (dia == "Domingo" && clima == "LLuvioso"){
    console.log("Me quedo jugando war thunder");
}
else if (dia == "Lunes" && clima == "Lluvioso"){
    console.log("Me quedo a estudiar");
}
else if (dia == "Viernes" && clima == "Fresco"){
    console.log("Hoy se sale perri");
}
else {
    console.log("No hago nada");
}



//======================================================================



var caacArray = [2,4,6,8]

function contiene(num){
    if(caacArray.indexOf(num) == -1){
        return false
    }else{
        return true
    }   
}

var info = contiene(5)

console.log(info)



//======================================================================



function contiene(array, numero){
    if(array.indexOf(numero)!=-1){ 
        return true;
    }else{ 
        return false}
}
    

//=======================================================================



var puestos = ["Nada", "Oro", "Plata", "Bronce"]

function medallaSegunPuesto(lugar){
    lugar > 0 
    if(lugar > 3){
        return "Seguí participando"
    }else{
        return puestos[lugar]
    }
}


var info = medallaSegunPuesto(1)

console.log(info)



//=======================================================================


function sumar5MonedasDe25Centavos(cantidadDeMonedas){
    let  moneda = 0
    
    for(i=0; i <cantidadDeMonedas; i++){
        moneda = moneda + 0.25
    }
    return moneda
}

var info = sumar5MonedasDe25Centavos(50)

console.log(info)


//======================================================================

function sumaDeLosParesDel0Al(x){
    let total = 0
    let calorias = 5
    for(i=1; i<=x; i++){
        if(x%1==0){
            total = total + i
        }
    }
    return calorias * total
}

var info = sumaDeLosParesDel0Al(1)

console.log(info)


//======================================================================

var espadas = ["1 de espadas", "2 de espadas", "3 de espadas", "4 de espadas", "5 de espada", "6 de espadas", "7 de espadas", "8 de espadas", "9 de espadas", "10 de espadas", "11 de espadas", "12 de espadas"]

function naipes(palos){
  let array = []
  nombre0 = palos[9]
  nombre1 = palos[10]
  nombre2 = palos[11]
  for(i = 0; i <= 4; i++){
      palos.pop()
  }
  for(i = 0; i <= palos.length; i++){
    if(palos.length)palos.push(nombre0)
    palos.push(nombre1)
    palos.push(nombre2)  
    array.push(palos)
    return array
}
}


var info = naipes(espadas)

console.log(info)

//================================================================================

function masMenos(array){
    let positivos = 0;
    let negativos = 0;
    let ceros = 0
    let arrayVacio = [];
    for (let i = 0; i < array.length ;i++) {
      let num = array[i]
      if(num > 0){
        positivos = positivos + 1
      }else if(num < 0){
        negativos = negativos + 1
      }else{
        ceros = ceros + 1
      }
  
    }
    positivos = positivos/array.length
    negativos = negativos/array.length 
    ceros = ceros/array.length
    arrayVacio.push(positivos, ceros, negativos)
    return arrayVacio;
  }
  
  var info = masMenos([1, 2, 0, -1])
  
  console.log(info) 

//===============================================================

function agregarHttp(url){
    return "http://" + url
}

function procesar(urls ,callback){
   let urlCompletas= []
   for(let i = 0; i < urls.length; i++){
       urlCompletas.push(callback(urls[i]))
   }
   return urlCompletas
}


console.log(procesar(["www.google.com","www.yahoo.com"],agregarHttp))

//===============================================================

let autos = require("./autos")

let concesionaria = {
    buscarAuto: function(str){
        let coso = autos.find(auto => auto.patente == str)
        if(coso){
           return coso
        }else{
           return null
        }
     },
    autos: autos,
 }

 console.log(concesionaria.buscarAuto("APL123"));

//===============================================================

