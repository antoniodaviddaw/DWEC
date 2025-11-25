window.addEventListener("dblclick",(event)=>{
        //Los tonos van de 0 a 255 en rgb
        let rgb1=Math.random()*255
        let rgb2=Math.random()*255
        let rgb3=Math.random()*255

        main=document.querySelector("main")

        console.log(main)
        main.style.backgroundColor=`rgb(${rgb1},${rgb2},${rgb3})`
        
    })