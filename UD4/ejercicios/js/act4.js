//Genero un array con los casiPrimos para luego comparar
    let casiPrimos=[]
    let tabla=document.getElementById("tabla")
    let textotabla="<tr>"
   let casiPrimosGenerator=()=>{
    for(let i=1;i<=10000;i++){
        let contador=0;
        for(let j=1;j<=i;j++){
            if(i%j==0){
                contador++
            }
        }
        if (contador==3){
            casiPrimos.push(i)
        }
    }
   }
   casiPrimosGenerator()
   console.log(casiPrimos)

   //hacer tabla
for(let i=1;i<=10000;i++){
    /* console.log(textotabla) */
    textotabla+=`<td>${i}</td>`
    if(i%100==0){
        textotabla+="</tr>"
        tabla.innerHTML=textotabla
    }
    
    if (i%100==0){
        textotabla+="</tr><tr>"
    }

}

document.getElementById("boton").addEventListener("click",(event)=>{
    //buscar todos los casiprimos
let todostds=document.querySelectorAll("#tabla,td")
console.log(todostds)
todostds.forEach(td=>{
    if(casiPrimos.includes(parseInt(td.textContent))){
        td.style.backgroundColor="coral"
    }
})

})

document.getElementById("borrar").addEventListener("click",(event)=>{
    //buscar todos los casiprimos
let todostds=document.querySelectorAll("#tabla,td")
console.log(todostds)
todostds.forEach(td=>{
    if(casiPrimos.includes(parseInt(td.textContent))){
        td.style.backgroundColor="lightblue"
    }
})

})