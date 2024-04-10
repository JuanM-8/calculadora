const txtop1 = document.getElementById("1")
const txtop2 = document.getElementById("2")
const txtop3 = document.getElementById("3")
const btncalcular = document.getElementById("calcular")
const presultado = document.getElementById("resultado")
const togle = document.getElementById("mode")
const contenedor = document.getElementById("contenedor")

btncalcular.onclick=calcular

togle.addEventListener("click",cambiar)

function cambiar(){
    togle.classList.toggle("active")
    contenedor.classList.toggle("active")
}




function calcular(){
    const operacion = txtop2.value
    const valor1 = parseFloat(txtop1.value)
    const valor2 = parseFloat(txtop3.value)
    if((operacion == "+" || operacion == "/" || operacion == "-" || operacion == "*") && !isNaN(valor1) && !isNaN(valor2)){
        
        let resultado;
        switch(operacion){
            case "+":
                resultado = valor1 + valor2

                break;
            case "-":
                resultado = valor1 - valor2
                break;
            case "*":
                resultado = valor1 * valor2
                break;
            case "/":
                resultado = valor1 / valor2
                break;

        }
        presultado.innerText =resultado;


    }else{
        presultado.innerText = "Calculo imposible"

    }
     

}