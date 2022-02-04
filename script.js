
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/
 
var inputTexto = document.getElementById("input-texto");
var msg = document.getElementById("msg");

var btnCripto = document.getElementById("btn-cripto");
var btnDescripto = document.getElementById("btn-descripto");

function criptografar() { 
    return (msg.value = inputTexto.value
     .replaceAll("e", "enter")
     .replaceAll("i", "imes")
     .replaceAll("a", "ai")
     .replaceAll("o", "ober")
     .replaceAll("u", "ufat"));
}

function descriptografar() { 
    return (inputTexto.value = inputTexto.value
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u"));
}

function verificar(palavra) { 
        var testar = /^[a-z ,.!?;:()]+$/g;
    var resultado = testar.test(palavra);
    return resultado;
}

btnCripto.addEventListener("click", function  (e) { 
    e.preventDefault();

    if (!verificar(inputTexto.value)) { 
        console.log("errado");
    } else { 
      criptografar();
      inputTexto.value = "";
    }
 });


 btnDescripto.addEventListener("click", function  (e) { 
    e.preventDefault();

    if (!verificar(inputTexto.value)) { 
        console.log("errado");
    } else { 
      descriptografar();
      
    }
 });