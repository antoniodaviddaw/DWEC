let checkboxes=[]
    lista=document.getElementById("lista")
    let escribir=()=>{
        lista.innerHTML=""
        for(let i=0;i<100;i++){
            let checkbox=document.createElement("input")
            checkbox.type="checkbox"
            let label=document.createElement("label")
            let number=Math.floor(Math.random()*100)
            label.innerHTML=number
            label.id=number
            checkbox.id=number
            let li=document.createElement("li")
            li.appendChild(checkbox)
            li.appendChild(label)
            lista.appendChild(li)

        }
            

    }
    escribir()

    document.getElementById("boton").addEventListener("click",(event)=>{
        checkboxes=document.querySelectorAll("input[type=checkbox]")
        checkboxes.forEach(c=>c.checked=true)
    })

    document.getElementById("borrar").addEventListener("click",(event)=>{
        checkboxes=document.querySelectorAll("input[type=checkbox]")
        checkboxes.forEach(c=>c.checked=false)
    })