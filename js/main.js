

let element = document.getElementById("totalPrecio");
element.innerHTML="Total precio";

let txtNombre = document.getElementById("Name");
// txtNombre.value="Leche";
// console.log(txtNombre.value);
let txtNumber = document.getElementById("Number")
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

let agregar = document.getElementById("btnAgregar");
agregar.addEventListener("click", (event)=>{
 let precio= Math.random() * 50;  
 let tmp= `<tr>
<th scope="row">1</th>
<td>${txtNombre.value}</td>
<td>${txtNumber.value}</td>
<td>$ ${precio}</td>
</tr> `;
console.log(tmp);
cuerpoTabla[0].innerHTML += tmp;
}); //agregar .onclick =