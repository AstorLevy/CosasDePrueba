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