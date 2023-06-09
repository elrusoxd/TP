function validarayuda(){
    var nom1= document.getElementById("n1").value;
    var edad1= document.getElementById("e1").valueAsNumber;
    var pais= document.getElementsByName("pais")[0];
    var valor = pais.value;
    var mensaje;

    if(edad1 < 18) {
        mensaje= nom1+ ",no podemos brindar servicios a menores de edad";
    }
    else{
        mensaje= nom1+", edad validada";
    }
    if(valor == 1 || valor == 2){
        mensaje2= nom1+ ",no podemos brindar servicios fuera de latinoamerica"
    }
    else{
        mensaje2= nom1+ ",podemos brindar servicios en tu pais"
    }

    
    document.getElementById("resultado").innerHTML=mensaje;
    document.getElementById("resultado2").innerHTML=mensaje2;
}
function borrar(){
    document.getElementById("n1").value="";
    document.getElementById("e1").value="";
    document.getElementById("resultado").innerHTML="";
}