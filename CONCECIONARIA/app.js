let autos = require("./autos")

let concesionaria = {
   autos: autos,
 
   buscarAuto: function(str){
        let auto = autos.find(auto => auto.patente == str)
        if(auto){
           return auto
        }else{
           return null
        }
   },

   venderAuto: function(str){
      let auto = this.buscarAuto(str)
      auto.vendido = true
      return auto
   },

   autosParaLaVenta: function(){
    return autos.filter(auto => auto.vendido == false) 
   },

   autosNuevos: function(){
    let autos0KM = this.autosParaLaVenta()
    return autos0KM.filter(auto => auto.km < 100)
   },
   
   listaDeVentas: function(){
      let preciosVendidos = []
      for(let i = 0; i < autos.length; i++){
         if(autos[i].vendido == true){
            preciosVendidos.push(autos[i].precio)
         }else{
            null
         }
      }
      return preciosVendidos
   },

   totalDeVentas: function(){
      lista = this.listaDeVentas()
      if(lista == 0){
         return 0
      }else{
         return lista.reduce((acum, num) => acum + num)
      }
   },

   puedeComprar: function(auto, persona){
      if(persona.capacidadDePagoEnCuotas * auto.cuotas >= auto.precio && persona.capacidadDePagoTotal > auto.precio){
         return true
      }else{
         return false
      }
   },

   autosQuePuedeComprar: function(persona){
      return this.autosParaLaVenta().filter(auto => {
         if(persona.capacidadDePagoEnCuotas * auto.cuotas >= auto.precio && persona.capacidadDePagoTotal > auto.precio){
            return auto
         }
      })
   }

}

