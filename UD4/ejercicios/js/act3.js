let numeros=[]
    let numero;
    lista=document.getElementById("lista")
    let escribir=()=>{
        lista.innerHTML=""
        numeros.forEach(n=>{
            lista.innerHTML+=`<li>${n}</li>`
        })

    }

document.getElementById("boton").addEventListener("click",(event)=>{
    
    numero=Math.floor((Math.random()*100)+1)
    numeros.push(numero)
    escribir()


})

document.getElementById("borrar").addEventListener("click",(event)=>{
    
    
    numeros.pop()
    escribir()


})