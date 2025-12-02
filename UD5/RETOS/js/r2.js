let apiKey="5a0140ae"
    let page=1
    let totalResults;
    let peliculas=[]
    let listadoPeliculas=document.getElementById("peliculas")

    let listaPeliculas= async ()=>{
        try{
            let response=await fetch(`https://www.omdbapi.com/?s=movie&y=2025&page=${page}&apikey=${apiKey}`)
            let data=await response.json()
            
            totalResults=data.totalResults
            let totalPages=Math.ceil(totalResults/10)

            if(!response.ok){
                throw new Error("API error "+"respuesta no encontrada")
            }

            for(let i=1;i<=totalPages;i++){
                response=await fetch(`https://www.omdbapi.com/?s=movie&y=2025&page=${i}&apikey=${apiKey}`)
                data=await response.json()
                peliculas.push(...data.Search)
            }
            console.log(peliculas)
            escribirPeliculas(peliculas)
        } catch (error) {
            console.error("Error general:", error);
        }
    }
    listaPeliculas()

    /*
    
Poster
: 
"https://m.media-amazon.com/images/M/MV5BYjY2NDZhN2EtZmYwNS00NDU2LThiODAtNmY4OWY2ODNmZWRmXkEyXkFqcGc@._V1_SX300.jpg"
Title
: 
"The Garfield Movie"
Type
: 
"movie"
Year
: 
"2024"
imdbID
: 
"tt5779228"
    */

    let escribirPeliculas=(array)=>{
        listadoPeliculas.innerHTML=""
        array.forEach(p=>{
            let card=document.createElement("div")
            let imagen=document.createElement("img")
            imagen.src=p.Poster

            let titulo=document.createElement("h3")
            titulo.textContent=p.Title

            let ano=document.createElement("p")
            ano.innerHTML=`Fecha de estreno: ${p.Year}`

            let enlace=document.createElement("a")
            enlace.href=`https://www.imdb.com/es-es/title/${p.imdbID}`
            enlace.innerHTML="Enlace a IMDb"


            let texto=document.createElement("div")

            texto.appendChild(titulo)
            texto.appendChild(ano)
            texto.appendChild(enlace)

            card.appendChild(imagen)
            card.appendChild(texto)
            card.classList="card"
            listadoPeliculas.appendChild(card)

        })
    }

    document.getElementById("peli").addEventListener("input",()=>{
        listadoPeliculas.innerHTML=""
        let input=document.getElementById("peli").value

        if (input === "") {
            escribirPeliculas(peliculas);
            return;
        }

        let pelisFiltradas=peliculas.filter(p=>
            p.Title.toLowerCase().includes(input.toLowerCase()))
        console.log(pelisFiltradas)
        escribirPeliculas(pelisFiltradas)
    })

    

