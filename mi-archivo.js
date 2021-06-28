//clase 1
//variable*/
//const miNombre = "Cristian";
//const apellido = "Malagon";
//const numero = 16790;
//const espacio = " ";
//const edad = parseInt(prompt("Ingrese su edad"));
//alert("Eres muy joven " + edad);

//suma*/
//const concatenacion = miNombre +" " + apellido +" " + numero +" " + edad;

//validar en consola*/
//console.log(concatenacion);

//saludo*/
//const nombre = prompt("ingrese su nombre");
//alert("¡Hola!, te deseamos lo mejor " + nombre);

//clase 2

//const car = "carne";
//const poll = "pollo";
//const cer = "cerdo"
//const nombre = prompt("ingresa el sabor de tu lasaña; carne, pollo, cerdo");
 //if(nombre == car){
   //alert("tu lasaña de carne ya se esta preparando")}
//else if(nombre == poll){
  // alert("tu lasaña de pollo ya se esta preparando");}
//else if(nombre == cer){
  //  alert("tu lasaña de cerdo ya se esta preparando")}

//const numero = parseInt(prompt("ingrese un numero mayor o menor de 100") );
//if (numero >= 100){
  // alert("numero ingresado es correcto");
//}
//else if (numero <=100){
 //  console.log("el numero es correcto"); }


//clase 3

//let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición 
//for (let i = 1; i <= 10; i++) 
//{let resultado = ingresarNumero * i ;console.log(ingresarNumero +" x "+ i +" = "+ resultado);}


for (let i = 1; i <= 5; i++) {
   // En cada repetición solicitamos un nombre.
   let ingresarNombre = prompt("Ingresar nombre");
   // Informamos el turno asignado usando el número de repetición (i).
   console.log(" Turno  N° "+i+" Nombre: "+ingresarNombre);
     if (ingresarNombre == ""){
      alert("No ingreso nombre"); }
   else if( ingresarNombre){
      alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);
   }
}















