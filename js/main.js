import { Producto,Perecedero,NoPerecedero } from "./Producto.js";
//Los HTMLElement
const form = document.querySelector(".fields");
const nombreEl = document.querySelector("#nombre");
const precioEl = document.querySelector("#precio");
const outputEl = document.querySelector(".output");
const tipoEl = document.querySelector("#tipo");
const btn2 = document.querySelector(".btn--2");
const valorTipoEl = document.querySelector("#valor-tipo"); //Este valor puede ser un día o un tipo producto

//Variables simples
let productos = []; //Almacenamos los objeto Producto

// let p1 = new Producto("Calcetines",34.5);
// let p2 = new Producto("Calabazas",1.5);

//Funciones
/**
 * Función que carga en un array productos de tipo Producto object
 */
const cargarProducto = () => {
    let precio = Number(precioEl.value);
    let p = null;
    if(tipoEl.value==="1"){//Selección producto perecedero
        p = new Perecedero(nombreEl.value,precio);//instaciar
        let dias = Number(valorTipoEl.value);
        //p.diasACaducar = dias;//modificamos propiedad directamente
        p.meterDias(dias);//modificamos propiedad a través de un método

    }else{//Selección producto NO perecedero
        p = new NoPerecedero(nombreEl.value,precio);
        p.meterTipo(valorTipoEl.value);
    }

    
    productos.push(p);
}

const visualizar = () => {
    outputEl.innerHTML = productos.join("").toString();
     //console.log(productos.join("").toString())
}

//Eventos
//form.addEventListener("submit",e=>{});
form.onsubmit = e => {
    e.preventDefault();
    cargarProducto();    
    visualizar();
}

btn2.onclick = () => {
     //mejor performance --> rendimiento
    let acumulador = 0;
    for(let i=0, tam=productos.length;i<tam;i++){
        acumulador = acumulador + productos[i].calcularPrecio();
    }

    document.querySelector(".total").textContent=acumulador;

    
}


tipoEl.onchange = () => {
    const label = document.querySelector("[for='valor-tipo']");    
    if(tipoEl.value==="1"){//Selección producto perecedero
        label.textContent = "Días para caducar";
    }else{//Selección producto NO perecedero
        label.textContent = "Tipo";
    }
}