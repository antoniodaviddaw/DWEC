let resultado=document.getElementById("resultado")
    let items=[]

    let url=()=>{
        let error=document.querySelector("span.error")
        let pattern=/^\d{1,2}$/
        let tipo=document.getElementById("tipo").value

        let id=document.getElementById("id").value.trim()
        if(id!==""){
            if(pattern.test(id)){
                return `https://www.swapi.tech/api/${tipo}/${id}/`
            }
            error.innerHTML="Error, escribir ID de dos digitos"
                id=""
        }
        return `https://www.swapi.tech/api/${tipo}/`
    }

    let obtenerItems=async()=>{
        try{
            items=[]
            let tipo=document.getElementById("tipo").value
            let response=await fetch(url())
            let data=await response.json()

            if(data.total_pages){
                for(let i=0;i<data.total_pages;i++){
                    try{
                        let response=await fetch(`https://www.swapi.tech/api/${tipo}?page=${i}`)
                        let data= await response.json()
                        items.push(...data.results)
                    }catch(error){
                        console.log("Error en la obtención de items")
                    }
                }
                console.log(items)
                escribirItems(items)
                return items;
            }
            let item=data.result
            console.log(item)
            escribirItem(item)
            return item;
        }catch(error){
            console.log("Error en la obtención de items") 
        }
    }

    //metodos para obtener propiedades de los items
    function getNombre(item) {
    return (
        item.name || 
        item.properties?.title || 
        item.properties?.name || 
        "Sin nombre"
    );
    }

    function getUID(item) {
    return item.uid || item.properties?.uid || "No UID";
    }

    function getURL(item) {
    return item.url || item.properties?.url || "No URL";
    }

    let escribirItems=(array)=>{
        resultado.innerHTML=""
        array.forEach(item => {
            let card=document.createElement("div")
            card.classList.add("card")
            addHover(card)

            let itemName = getNombre(item);
            let itemUID = getUID(item);
            let itemURL = getURL(item);

            card.innerHTML=`
                <h2>${item.name}</h2>
                <p>id: ${itemUID}
                    nombre: ${itemName}
                    Link: <a href='${itemURL}'>Acceso</a>
                </p>
            `
            resultado.appendChild(card)
        });

    }

    let escribirItem=(item)=>{
        resultado.innerHTML=""
        let card=document.createElement("div")
            card.classList.add("card")
            addHover(card)

            let itemName = getNombre(item);
            let itemUID = getUID(item);
            let itemURL = getURL(item);

            card.innerHTML=`
                <h2>${itemName}</h2>
                <p>id: ${itemUID}
                    nombre: ${itemName}
                    Link: <a href='${itemURL}'>Acceso</a>
                </p>
            `
            resultado.appendChild(card)
    }

    document.getElementById("boton").addEventListener("click",(event)=>{
        event.preventDefault();
        obtenerItems();
    })

    //AÑADIR LOS HOVER:
    function addHover(card) {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.08)";
        card.style.transition = "0.2s";
        card.style.boxShadow = "8px 8px 15px rgba(0,0,0,0.4)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "5px 5px 0px black";
    });
}

    let listar