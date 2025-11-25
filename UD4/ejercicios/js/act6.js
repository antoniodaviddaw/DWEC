//a cada parrafo se le añade el evento de click y de dobleclick
    document.querySelectorAll("#parrafos p").forEach(p=>{
        p.addEventListener("click",(event)=>{
        console.log(p)
        p.style.display="none"
        })
        p.addEventListener("dblclick",(event)=>{
        console.log(p)
        p.remove()
        })

    })


    document.getElementById("boton").addEventListener("click",(event)=>{
       document.querySelectorAll("#parrafos p").forEach(p=>{
        p.style.display="block"
       })
    })