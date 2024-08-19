const entrada = document.getElementById("entrada")
const btn = document.getElementById("btn")
const texto = document.getElementById("texto")

entrada.addEventListener("input",(evento)=>{
    numero = evento.target.value
    console.log(numero)
})

btn.addEventListener("click", ()=>{
    if (numero%2===0){
        let hijo = document.createElement("h3")
        hijo.innerHTML = "es par"
        texto.appendChild(hijo)
    }else{
        let hijo = document.createElement("h3")
        hijo.innerHTML = "es impar"
        texto.appendChild(hijo)
    }
})