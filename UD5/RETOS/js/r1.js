//CREO UN ARRAY PARA IR GUARDANDO LOS PAISES
    let todosPaises=[];
    async function paises() {
        const respuesta = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,population");
        const datos= await respuesta.json();
        todosPaises=datos;
        escribirPaises(todosPaises);
        return datos;
    }
    //LA EJECUTO PARA QUE CARGUE YA CON TODOS LOS PAISES
    paises()


    //UN EVENTO PARA QUE AL CAMBIAR EL INPUT SE BUSQUE EN LOS DATOS CUALES INCLUYE EL INPUT
    document.getElementById("pais").addEventListener("input", () => {
        const paisBuscado = document.getElementById("pais").value;

        if (paisBuscado === "") {
            escribirPaises(todosPaises);
            return;
        }

        paises().then((datos) => {
            const paisesFiltrados = datos.filter(p =>
                p.name.common.toLowerCase().includes(paisBuscado.toLowerCase())
            );
            console.log(paisesFiltrados);
            escribirPaises(paisesFiltrados);
        });
    });

    //FUNCION PARA ESCRIBIR UNA LISTA EN EL DIV CON LOS PAISES QUE SE LE INDIQUE
    let escribirPaises=(paises)=>{
        const table=document.getElementById("lista-paises");
        table.innerHTML="";
        table.innerHTML=`<th>PAÍS</th><th>CAPITAL</th><th>REGIÓN</th><th>POBLACIÓN</th>`
        paises.forEach(pais=>{
            const tr=document.createElement("tr");
            tr.innerHTML=`<td>${pais.name.common}</td><td>${pais.capital}</td><td>${pais.region}</td><td>${pais.population}</td>`;
            table.appendChild(tr);
        });
    }
    //AQUI DEJO COMENTADA UNA TONTERÍA QUE INTENTE PARA VER SI ASI SE ESCRIBÍA SIEMPRE LA LISTA
    /* document.getElementById("lista-paises").addEventListener("change", () => {
        if(document.getElementById("lista-paises").innerHTML===""){
            paises().then((datos) => {
                EscribirPiases(datos);
            });
        }
    }); */