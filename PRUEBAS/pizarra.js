let palabra = "fooziman".replace("oo", "00")

function darVuelta(palabra){
    return palabra.split("").reverse().join("")
}

console.log(darVuelta(palabra));