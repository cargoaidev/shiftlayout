


function myFunction(imgs) {
   console.log(imgs);
   var expandImg = document.getElementById(imgs.id);
   if (expandImg.style.width === "100%") {
      expandImg.style.width = "200%";
   } 
   
   else {
      expandImg.style.width = "100%";
   }
   
}


function myOnload() {
   alert("SELECCIONE EL LAYOUT QUE DESEA VER Y GIRE EL CELULAR \n PARA UN MEJOR ACERCAMIENTO \uD83D\uDE00");
 }
 