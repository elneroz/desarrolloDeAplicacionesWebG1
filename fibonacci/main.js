const entrada = document.getElementById("entrada")
const btn = document.getElementById("btn")
const texto = document.getElementById("texto")

entrada.addEventListener("input",(evento)=>{
    console.log(evento)
    numero = evento.target.value
    console.log(numero)
})
btn.addEventListener("click",()=>{
    let hijo = document.createElement("h3")
    hijo.innerHTML = fibonacci(entrada.value)
    texto.appendChild(hijo)
})

function fibonacci(numero){
    salida = [0,1]
    if (numero === 0){
        salida = [0]
    }else if (numero === 2){
        salida = [0,1]
    }else{
        for(let i = 2 ;i <= numero ; i++){
            suma = salida[i-1] + salida[i-2]
            salida.push(suma)
            console.log(salida)
        }
    }
    return salida;
}