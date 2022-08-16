
//funcion que captura el texto
function encriptar(){
    let frace=document.getElementById("frace").value;
    document.getElementById("frace").focus();
    console.log(frace);
    document.getElementById("frace").value="";
    document.getElementById("frace").focus();
    console.log("------------------");
    let enc=textoencriptado(frace);
    
    console.log(enc);
    document.getElementById("imgder").style.display="none";
    document.getElementById("texto").style.display="none";
    document.getElementById("texto2").innerHTML=enc;
    document.getElementById("btn_copiar").style.display="show";
    document.getElementById("btn_copiar").style.display="inherit";

}
//funcion encripta el texto
function textoencriptado(frace){
            let resultado="";
            let fracevector=[];
            for(let i=0; i<frace.length; i++){

                fracevector[i]=frace[i];
                
            }

            for(let i= 1; i<fracevector.length;i++){                
            
                if(fracevector[i]=='a'){

                    console.log("son iguales"+i);
                    fracevector[i]='ai';
                } 
                
                if(fracevector[i]=='e'){
               
                    console.log("son iguales"+i);
                    fracevector[i]='enter';
                }  
                
                if(fracevector[i]=='i'){

                    console.log("son iguales"+i);
                    fracevector[i]='imes';
                }  
                
                if(fracevector[i]=='o'){

                    console.log("son iguales"+i);
                    fracevector[i]='ober';
        
                }  
                
                if(fracevector[i]=='u'){

                    console.log("son iguales"+i);
                    fracevector[i]='ufat';
            
                }                 
                
            }
            for(let i=0; i<frace.length; i++){

               resultado=resultado+fracevector[i];

            }
        return resultado;

}
//funcion desencriptar texto
        
function textorestaurado(nuevafrace){
    fracerestaurada=nuevafrace
    .replaceAll("ai","a")
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");
    return fracerestaurada;        

} 
function desencriptar(){
    let nuevafrace=document.getElementById("frace").value;
    console.log(nuevafrace);
    document.getElementById("frace").value="";
   
    console.log("------------------");
    let des=textorestaurado(nuevafrace);
    console.log(des);
    document.getElementById("imgder").style.display="none";
    document.getElementById("texto").style.display="none";
    document.getElementById("texto2").style.display="show";
    document.getElementById("texto2").style.display="inherit";
    document.getElementById("texto2").innerHTML=des;
    document.getElementById("btn_copiar").style.display="show";
    document.getElementById("btn_copiar").style.display="inherit";       
}
function copiar(){
    var copyText = document.getElementById('texto2')
    copyText.select();
    document.execCommand('copy')   
    document.getElementById("btn_copiar").style.display="none";
    document.getElementById("texto2").style.display="none";
    document.getElementById("imgder").style.display="show";
    document.getElementById("imgder").style.display="inherit";
    document.getElementById("texto2").style.display="none";
    document.getElementById("texto2").style.display="inherit";
    document.getElementById("texto2").innerHTML="Texto copiado!!";       
    document.getElementById("texto").style.display="show"; 
    document.getElementById("texto").style.display="inherit"; 
    document.getElementById("frace").focus();


    console.log('Copied Text')

}
