 /*CREO UN ARRAY PARA GUARDAR LOS INPUTS Y SUS SPAN*/
    let inputs=[]
    let form = document.getElementsByTagName("form")[0]
/*________________________________________________________________________________________________________________________*/
/*________________________________________________________________________________________________________________________*/
/*RETO 4: DECLARAMOS LOS FORFAITS Y SOCIOS E INICIAMOS: SI SON NULL ES QUE NO SE HA INICIALIZADO, LO INICIAMOS A 0*/
    let forfaits=document.getElementById("forfaits")
    let socios=document.getElementById("socios")
    if(isNaN(localStorage.forfaits)){
        localStorage.forfaits=0
    }
    if(isNaN(localStorage.socios)){
        localStorage.socios=0
    }
    /*LO MOSTRAMOS EN EL CONTADOR*/
    forfaits.innerText=""
    forfaits.innerText=localStorage.forfaits
    socios.innerText=""
    socios.innerText=localStorage.socios
/*________________________________________________________________________________________________________________________*/
/*________________________________________________________________________________________________________________________*/

    /*CREO LOS INPUTS, LES AÑADO SUS PATTERNS Y LOS AÑADO AL ARRAY*/
    let id=document.getElementById("id");
        id.setAttribute('pattern','^[a-zA-Z][0-9]{8}[a-zA-Z]$' )
        let idError=document.querySelector("#id + span.error")
        inputs.push({input:id,error:idError})

        let nombre=document.getElementById("nombre")
        let nombreError=document.querySelector("#nombre + span.error")
        inputs.push({input:nombre,error:nombreError})

        let fecha=document.getElementById("fecha")
        fecha.setAttribute('pattern','^[0-3][0-9]/[0-1][0-9]/[1-2][0-9]{3}$')
        let fechaError=document.querySelector("#fecha + span.error")
        inputs.push({input:fecha,error:fechaError})

        let email=document.getElementById("email")
        let emailError=document.querySelector("#email + span.error")
        inputs.push({input:email,error:emailError})

        let telefono=document.getElementById("telefono")
        telefono.setAttribute('pattern','[6-9][0-9]{8}')
        let telefonoError=document.querySelector("#telefono + span.error")
        inputs.push({input:telefono,error:telefonoError})

        let edad=document.getElementById("edad")
        let edadError=document.querySelector("#edad + span.error")
        inputs.push({input:edad,error:edadError})

        let ski=document.getElementById("ski")
        let exp=document.getElementById("exp")
        /*AÑADO UN EVENTO PARA QUE AL CLICKAR SE ACTIVE EL TEXTAREA(ESTE LO HE TENIDO QUE CONSULTAR)*/
        ski.addEventListener("change",()=>{
            exp.disabled= !ski.checked
        })

        /*FUNCION PARA VALIDAR UN CAMPO Y LANZAR EL MENSAJE DE ERROR*/
    function validarCampo(input, spanError) {

        if (input.checkValidity()) {
            spanError.textContent = '';
            input.style.border = '';
            return true;
        }
        /*TRAS VER QUE NO SEA VALIDO, COMPROBAMOS QUE NO ESTE VACIO Y DESPUES QUE CUMPLA CON EL PATRON*/

        if (input.validity.valueMissing) {
            spanError.textContent = 'Este campo es obligatorio';
        }
        /*PATRON SEGUN EL CAMPO*/
        else if (input.validity.patternMismatch) {
            if (input.id === "id") spanError.textContent = "Formato: 1 letra, 8 números, 1 letra";
            if (input.id === "fecha") spanError.textContent = "Formato correcto: dd/mm/yyyy";
            if (input.id === "telefono") spanError.textContent = "Ejemplo: +612345678";
        }

        input.style.border = '2px solid red';
        spanError.style.color="red"
        return false;
    }


    form.addEventListener('submit', (event) => {
        /*AQUI RECORRO TODO EL ARRAY DE INPUTS APLICANDO LA FUNCION DE VALIDAR
        TRAS CADA VALUDACION, SE HACE UN CHECK DE TRUE O FALSE , QUE SE ACUMULA GRACIAS AL &&
        (ESTO HE TENIDO QUE CONSULTARLO) LA SECUENCIA COMIENZA EN TRUE*/
        let todoCorrecto = inputs.reduce((acc, i) => {
        return validarCampo(i.input, i.error) && acc;
        }, true);
        /*________________________________________________________________________________________________________________________*/
        /*RETO 4: SI EL FORM ES VÁLIDO SE SUMA FORFAITS Y SI ESTA CHECKED CLUB, AUMENTA SOCIO ADEMÁS DE FORFAITS*/ 
        localStorage.forfaits++
        forfaits.innerText=localStorage.forfaits
        console.log(document.getElementById("ski").checked)
        if(document.getElementById("ski").checked){
            localStorage.socios++
            socios.innerText=localStorage.socios
        }
        /*________________________________________________________________________________________________________________________*/

        /*SI ALGO NO E STRUE, SE PREVIENE EL ENVIO*/
        if (!todoCorrecto) {
            event.preventDefault();
        }
        });
/*________________________________________________________________________________________________________________________*/
/*RETO 4: SE RESETEA EL LOCALSTORAGE Y SE MUESTRA A 0 DE NUEVO*/ 
    document.getElementById("reset").addEventListener("click",()=>{
        localStorage.forfaits=0;
        localStorage.socios=0;
        forfaits.innerText=localStorage.forfaits
        socios.innerText=localStorage.socios
    })
/*________________________________________________________________________________________________________________________*/