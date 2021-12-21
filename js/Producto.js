export class Producto{
    nombre = "";
    precio = 0;
    /**
     * 
     * @param {string} n - Nombre del producto
     * @param {number} p - Precio del producto en euros, se admiten decimales
     */
    constructor(n='Desconocido',p){
        this.nombre = n;
        this.precio = p;
    }
    /**
     * 
     * @returns {string} Retorna los campos/propiedades de la clase
     */
    toString(){
        return `
            <div class="to-string">
                <div class="campo">Nombre: ${this.nombre}</div>
                <div class="campo">Precio: ${this.precio}€</div>
            </div>
        `;
    }

    /**
     * 
     * @returns {number} El precio del producto
     */
    calcularPrecio(){
        return this.precio;
    }
}

export class Perecedero extends Producto{
    diasACaducar = 0;

    //setter
    /**
     * 
     * @param {number} dias - Días que faltan para que el producto caduque
     */
    meterDias(dias){
        this.diasACaducar=dias;
    }

     /**
     * 
     * @returns {string} Retorna los campos/propiedades de la clase
     */
      toString(){
        return `
            <div class="to-string">
                <div class="campo">Nombre: ${this.nombre}</div>
                <div class="campo">Precio: ${this.precio}€</div>
                <div class="campo">Precio descuento: ${this.calcularPrecio()}€</div>
                <div class="campo">Días a caducar: ${this.diasACaducar}</div>
            </div>
        `;
    }

    /**
     * 
     * @returns {number} El precio del producto
     */
      calcularPrecio(){
        //return this.precio;
        if(this.diasACaducar==1){//falta un día para caducar
            return this.precio/4;
        }
        if(this.diasACaducar==2){//falta un día para caducar
            return this.precio/3;
        }
        if(this.diasACaducar==3){//falta un día para caducar
            return this.precio/2;
        }

        return this.precio;

    }
}

export class NoPerecedero extends Producto{
    tipo = "Sin tipo";

    //setter
    /**
     * 
     * @param {string} t - Meter el tipo de producto perecedero 
     */
    meterTipo(t){
        this.tipo = t;
    }

     /**
     * 
     * @returns {string} Retorna los campos/propiedades de la clase
     */
      toString(){
        return `
            <div class="to-string">
                <div class="campo">Nombre: ${this.nombre}</div>
                <div class="campo">Precio: ${this.precio}€</div>
                <div class="campo">Tipo: ${this.tipo}</div>
            </div>
        `;
    }
    
}