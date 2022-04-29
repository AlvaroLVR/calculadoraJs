document.write('clase n°: 3 / fecha: 28-4 / alumno: Alvaro Valencia');
//hacer una iteracion o ciclo con While o for 
let num1 = '';
let num2 = '';
let tOpera = '';
let door = '';
let resultado = 0;
do {
    if (door != 'y') {alert('| CALCULADORA |. A continuacion ingrese los numeros con los cuales desea operar y el tipo de operacion.');}
    
    num1 = prompt('Ingrese el primer numero'); 
    tOpera = prompt('Ingrese el tipo de operación: (+) SUMA; (-) RESTA; (*) MULTIPLICACION; (/) DIVISION');
    num2 = prompt('Ingrese el segundo numero'); 
    //agregar validacion de entrada de datos
    if(tOpera == '+'){
       resultado =  (parseInt (num1) + parseInt (num2));
    }
    if(tOpera == '-'){
        resultado = (parseInt (num1) -  parseInt (num2));
    }
    if(tOpera == '*'){
        resultado = (parseInt (num1) *  parseInt (num2));
    }
    if(tOpera == '/'){
        resultado = (parseInt (num1) /  parseInt (num2));
    }
    alert('El resultado de la operacion es: '+ resultado);
    door = prompt  ('Desea continuar operando? Ingrese (Y) para continuar ó (N) para finalizar el proceso');
} while (door == 'y' || door == 'Y');
alert('Proceso Finalizado.')