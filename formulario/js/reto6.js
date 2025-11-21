 //Un solo evento de boton que recoge los datos del formulario y crea el nuevo elemento tarjeta
    document.getElementById("boton").addEventListener("click",()=>{
        //prevenimos el envio de formulario por posibles errores
        event.preventDefault();
        nombre=document.getElementById("nombreform").value
        descripcion=document.getElementById("desform").value
        url=document.getElementById("urlform").value

        contenedor=document.querySelector(".contenedor-personajes")
        console.log(contenedor)

        card=document.createElement("div")
        card.classList.add("card")

        div=document.createElement("div")

        imagen=document.createElement("img")
        imagen.src=url
        imagen.classList.add("pers")
        div.appendChild(imagen)

        h1=document.createElement("h1")
        h1.innerText=nombre
        div.appendChild(h1)

        p=document.createElement("p")
        p.innerText=descripcion
        div.appendChild(p)

        card.appendChild(div)
        contenedor.appendChild(card)

    })
    