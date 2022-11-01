// Defino valor de ticket
const valorTicket = 200;

// Defino porcentajes de descuento según categoría
let descuentoEstudiante = 0.80;
let descuentoTrainee    = 0.50;
let descuentoJunior     = 0.15;

// Elementos en variables
let nombre          = document.getElementById("nombre");
let apellido        = document.getElementById("apellido");
let correo          = document.getElementById("correo");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria       = document.getElementById("ope");




function total_a_pagar()
{
    quitarClaseError();

    if(nombre.value==="")
    {
        alert("Ingresar nombre...");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return ;
    }

    if(apellido.value==="")
    {
        alert("Ingresar apellido...");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return ;
    }

    if(correo.value==="")
    {
        alert("Ingresar correo...");
        correo.classList.add("is-invalid");
        correo.focus();
        return ;
    }

     // Para determinar si el correo electrónico es válido o no
     const emailValido = correo => 
     {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
     }

     if(!emailValido(correo.value))
     {
        alert("Ingresar un correo válido...");
        correo.classList.add("is-invalid");
        correo.focus();
        return ;
     }

   
    if(categoria.value==="selected")
    {
        alert("Elegir una categoría...");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return ;
    }


    //multiplico total * entradas

       
    let totalValorTickets=(cantidadTickets.value)*valorTicket;

    
    switch(categoria.value=parseInt(categoria.value))
    
    {

        
    case 0:
         totalValorTickets=totalValorTickets;
        break;
    case 1:
        totalValorTickets-=totalValorTickets*descuentoEstudiante;
        break;
    case 2: 
        totalValorTickets-=totalValorTickets*descuentoTrainee;
        break;
    case 3:
         totalValorTickets-=totalValorTickets*descuentoJunior;
        break;
        

    }

    demo.innerHTML= totalValorTickets;
    

    
}

  
function quitarClaseError()
{
    let x=document.querySelectorAll(".form-control,.form-select");
    let i;
    for(i=0;i<x.length;i++)
    {
        x[i].classList.remove("is-invalid");
    }
}


function reset()
{
    quitarClaseError();
    
    demo.innerHTML="";
    nombre.value="";
    apellido.value="";
    correo.value="";
    cantidadTickets.value="";
    categoria.value="selected";
}

//boton resumen.
btnResumen.addEventListener("click",total_a_pagar);
//boton borrar.
btnBorrar.addEventListener("click",reset);