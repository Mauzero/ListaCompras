
let contador = 0;
let costoTotal = 0;
let totalEnproductos = 0;
let element = document.getElementById("totalPrecio");
element.innerHTML="Total precio";

let txtNombre = document.getElementById("Name");
// txtNombre.value="Leche";
// console.log(txtNombre.value);
let txtNumber = document.getElementById("Number")
let total = document.getElementById("precioTotal");

// txtNombre.value="Leche";
// console.log(txtNumber.value);
// let campos = document.getElementsByClassName("campos")
// console.log(campos);
// campos[0].value = "Leche deslactosada"
// console.log(campos[0].value);

// for(let i=0; i< campos.length; i++){
//     campos[i].style.border="red thin  solid";
// }//for

// let spans = document.getElementsByTagName("span");
// for (let i=0; i<spans.length; i++){
//     console.log(spans[i].textContent);
// }

let tabla= document.getElementById("tableListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");

// cuerpoTabla[0].innerHTML = `
// <tr>
// <th scope="row">1</th>
// <td>leche deslactosada</td>
// <td>1</td>
// <td>$ 23.00</td>
// </tr> `;

function validarNombre(){
if (txtNombre.value.length <3) 
    {
    return false;
}//if
return true;
}
function validarCantidad(){
    if(txtNumber.value.length==0) {
        return false;
    }// if
     if (isNaN(txtNumber.value)){
        return false;
     }//if

     if (parseFloat(txtNumber.value)<=0) {
        return false;
     }//if
     return true;
}// validarCantidad



let agregar = document.getElementById("btnAgregar");
agregar.addEventListener("click", (event)=>{
    event.preventDefault();
    let lista="";
    if(!validarNombre()){
        txtNombre.style.border="red thin solid";
        lista+="<li>Se debe escribir un nombre válido</li>";
    }
    if(!validarCantidad()){
        txtNumber.style.border="red thin solid";
        lista+="<li>Se debe escribir una cantidad válida</li>";
    }
    if ((! validarNombre()) || (! validarCantidad()) ){
        document.getElementById("alertValidacionesTexto").innerHTML= 
        `!!!Los campos deben ser llenados correctamente!!!;
        <ul>${lista}</ul>`;
        document.getElementById("alertValidaciones").style.display="block";
      
        setTimeout(function(){
            document.getElementById("alertValidaciones").style.display="none";
        },
        5000
        );
        return false;
    }
    txtNumber.style.border="";
    txtNombre.style.border="";
    document.getElementById("alertValidaciones").style.display="none";
    contador++;
 let productos = document.getElementById("contadorProductos").innerHTML = contador;   
 window.localStorage.setItem("contadorProductos",contador);
 let precio= (Math.floor((Math.random() * 50)*100))/100;  
 let cantidad = parseFloat(txtNumber.value);
    totalEnproductos += (cantidad<1)?Math.ceil(cantidad):parseInt(cantidad);
    document.getElementById("productosTotal").innerHTML=totalEnproductos;
    window.localStorage.setItem("productosTotal",totalEnproductos);
costoTotal += (precio * cantidad);
window.localStorage.setItem("precioTotal",costoTotal.toFixed(2));
total.innerHTML=`$ ${costoTotal.toFixed(2)}`
 let tmp= `<tr>
<th scope="row">${contador}</th>
<td>${txtNombre.value}</td>
<td>${txtNumber.value}</td>
<td>$ ${precio}</td>
</tr> `;
console.log(tmp);
cuerpoTabla[0].innerHTML += tmp;
txtNumber.value="";
txtNombre.value="";
txtNombre.focus();

}); //agregar .onclick =


txtNombre.addEventListener("blur", (event)=>{
    event.target.value = event.target.value.trim();
}
);

txtNumber.addEventListener("blur", (event)=>{
    event.target.value = event.target.value.trim();
}
);

window.addEventListener("load", function(){
   if(localStorage.getItem(contadorProductos)!=null){
    contador = parseInt(localStorage.getItem("contadorProductos"));
    document.getElementById("contadorProductos").innerHTML=contador;

   } // if de contadorProductos
   if(localStorage.getItem("productosTotal")!=null){
    totalEnproductos = parseInt(localStorage.getItem("productosTotal"));
    document.getElementById("productosTotal").innerHTML=totalEnproductos;

   } //if productosTotal
   if(localStorage.getItem("precioTotal")!=null){
    costoTotal = parseFloat(localStorage.getItem("precioTotal"));
    total.innerHTML = costoTotal;

   } // if precioTotal

   
}
);
