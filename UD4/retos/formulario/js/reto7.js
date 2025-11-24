 document.getElementById("analizar").addEventListener("click", function () {
      const form = document.getElementById("formulario");
      const elementos = form.childNodes; //childNodes Incluye comentarios y texto
      const salida = document.getElementById("resultado");
      salida.textContent = "";

      //Contador para poner los indices 
      let contador = 1;

      elementos.forEach(e => {
        //He tenido que buscar que para que te recoga elementos se debe poner nodeType 1, mientras que comentarios serán
        //del tipo 8
        if (e.nodeType === 1) { 
          const nombreTag = e.tagName.toLowerCase();

          //Ignoramos fieldset, datalist, keygen, output etcetera
          if (["fieldset", "datalist", "keygen", "output"].includes(nombreTag)) return;

          if (nombreTag === "input") {
            salida.textContent += `${contador}. INPUT. Tipo: ${e.type}. Nombre: ${e.name || "no tiene"}. Clase: ${e.className || "no tiene"}. Id: ${e.id || "no tiene"}. Valor: ${e.value || ""}` + "\n";
          }

          else if (nombreTag === "textarea" || nombreTag === "button") {
            salida.textContent += `${contador}. ${nombreTag.toUpperCase()}. Nombre: ${e.name || "no tiene"}. Clase: ${e.className || "no tiene"}. Id: ${e.id || "no tiene"}. Valor: ${e.value || e.textContent}` + "\n";
          }

          else if (nombreTag === "label") {
            salida.textContent += `${contador}. LABEL. Nombre: ${e.name || "no tiene"}. Clase: ${e.className || "no tiene"}. Id: ${e.id || "no tiene"}. For: ${e.htmlFor || "no tiene"}` + "\n";
          }

          else if (nombreTag === "select") {
            let texto = `${contador}. SELECT. Nombre: ${e.name || "no tiene"}. Clase: ${e.className || "no tiene"}. Id: ${e.id || "no tiene"}. Options: `;
            /*Convertir los elementos a array asi [...e.options]*/
            const opciones = [...e.options].map(op => op.value).join(", ");
            texto += opciones + "\n";
            salida.textContent += texto;
          }

          contador++;
        }

        // Comentarios
        else if (e.nodeType === 8) {
          salida.textContent += `${contador}. COMENTARIO. Valor: ${e.nodeValue.trim()}` + "\n";
          contador++;
        }
      });
    });