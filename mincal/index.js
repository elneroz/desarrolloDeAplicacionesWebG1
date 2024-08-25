const pantalla = document.querySelector("#pantalla")
const botones = document.querySelectorAll("#btn")


botones.forEach(botonApretado =>{
    botonApretado.addEventListener("click", ()=>{
        if ( botonApretado.textContent == "AC" ){
            pantalla.textContent = "0"
        }else if( botonApretado.textContent == "del" ){
            if ( pantalla.textContent.length == 1 ){
                pantalla.textContent = "0"
            } else {
                pantalla.textContent = pantalla.textContent.slice(0,-1)
            }
        }else if ( botonApretado.textContent == "=" ){
            try {
                pantalla.textContent = eval(pantalla.textContent)
            } catch ( error ) {
                pantalla.textContent = "error"
            }
        }else{
            if ( pantalla.textContent == "0"){
                pantalla.textContent = botonApretado.textContent
            }else if(pantalla.textContent == "error"){
                pantalla.textContent = botonApretado.textContent
            } else {
                pantalla.textContent += botonApretado.textContent
            }
        }
    })
})