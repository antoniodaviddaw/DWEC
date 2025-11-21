nombretext=document.getElementById("nombre")
    descripciontext=document.getElementById("texto")
    /*BOTONES
    Soy consciente de mi falta de optimizacion, trataré de mejorarlo creando métodos*/
    //BOTON FAMILIA
    document.getElementById("familia").addEventListener("click",()=>{
        todos=document.querySelectorAll(".pers")
        todos=Array.from(todos)
        todos.forEach(p=>{p.style.filter="brightness(0.15)";
            p.style.transform="scale(0.9)"
        })

        nombretext.innerText="Familia Simpson"
        descripciontext.innerText="Todos los miembros de la familia Simpson"

        elementos=document.getElementsByClassName("familia")
        personajes=Array.from(elementos)
        console.log(personajes)
        personajes.forEach(p => {
            p.style.filter='none';
            p.style.transform="scale(1.1)"
        })
    })

    //BOTON ESCUELA
    document.getElementById("escuela").addEventListener("click",()=>{
        todos=document.querySelectorAll(".pers")
        todos=Array.from(todos)
        todos.forEach(p=>{p.style.filter="brightness(0.15)"
            p.style.transform="scale(0.9)"}
        )

        nombretext.innerText="Escuela de Springfield"
        descripciontext.innerText="Todos los miembros de la escuela de Springfield"

        elementos=document.getElementsByClassName("escuela")
        personajes=Array.from(elementos)
        console.log(personajes)
        personajes.forEach(p => {
            p.style.filter='none'
            p.style.transform="scale(1.1)"
        })
    })

    //BOTON CENTRAL NUCLEAR
    document.getElementById("central").addEventListener("click",()=>{
        todos=document.querySelectorAll(".pers")
        todos=Array.from(todos)
        todos.forEach(p=>{p.style.filter="brightness(0.15)";
            p.style.transform="scale(0.9)"}
        )

        nombretext.innerText="Central nuclear"
        descripciontext.innerText="Todos los trabajadores de la central nuclear de Springfield"

        elementos=document.getElementsByClassName("central")
        personajes=Array.from(elementos)
        console.log(personajes)
        personajes.forEach(p => {
            p.style.filter='none'
            p.style.transform="scale(1.1)"
        })
    })

    let oscurecer=()=>{
        //funcion para oscurecer todos los personajes cuando el raton esta sobre uno
        document.querySelectorAll(".pers").forEach(p=>{
            p.style.filter="brightness(0.15)";
            p.style.transform="scale(0.9)"
        })
    }

    //MOSTRAR LOS DATASETS POR PERSONAJE AL PASAR EL RATON POR ENCIMA
    document.querySelectorAll(".pers").forEach(p=>{
        p.addEventListener("mouseover",()=>{
            oscurecer()
            p.style.filter='none'
            p.style.transform="scale(1.1)"

            /*La opcion de dataset si tuve que buscarlo porque no sabia cómo hacerlo*/
            nombretext.innerText=p.dataset.nombre
            descripciontext.innerText=p.dataset.descripcion
        })
    })