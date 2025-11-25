let mousex=0;
    let mousey=0;
    window.addEventListener("mousemove",(event)=>{
        mousex=event.clientX;
        mousey=event.clientY;
        inputx=document.getElementById("x")
        inputx.value=mousex

        inputy=document.getElementById("y")

        inputy.value=mousey



    })
    window.addEventListener("keypress",(event)=>{
        console.log(event.key)
        if(event.key=="Enter"){
            div=document.getElementById("coordenadas-guardadas")
            div.innerHTML+=`<p>Coordenadas x:${mousex}, y:${mousey}</p>`
        }
    })