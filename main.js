const computadoras = [{id:1, tipo:"notebook", precio:1000},
{id:2, tipo:"mesa", precio:2000},
{id:3, tipo:"gamer", precio:3000},
{id:4, tipo:"mac", precio:4000},];

const perifericos = [{id:1, tipo:"auriculares", precio:500},
{id:2, tipo:"mouse", precio:250},
{id:3, tipo:"teclado", precio:300},
{id:4, tipo:"camara", precio:4000},];

const monitores = [{id:1, tipo:'18"', precio:1000},
{id:2, tipo:'20"', precio:2000},
{id:3, tipo:'22"', precio:3000},
{id:4, tipo:'24"', precio:4000},]


const producto = () =>{
    let prod;
    do{
        prod = prompt("Que desea comprar \n -Computadoras \n -Perifericos \n -Monitores").toLowerCase();
    }while(prod != "monitores" && prod != "computadoras" && prod != "perifericos"); 
    return prod;
}

const compra = (prod) =>{
    let n;
    let precio;
    if (prod == "computadoras"){
            console.log("Cual es de estos desea comprar")
            computadoras.forEach((el) => {
                console.log(`-${el.id} ${el.tipo} -precio: ${el.precio}`)
            });
            do{
                n = prompt("ingrese el numero del producto que desea")
            }while(n>4 || n<=0);
            precio = computadoras.find(el=>{
                el.id===n;
                return precio=el.precio;
            });
    }
    if(prod == "monitores"){
        console.log("Cual es de estos desea comprar")
        monitores.forEach((el) => {
            console.log(`-${el.id} ${el.tipo} -precio: ${el.precio}`)
        });
        do{
            n = prompt("ingrese el numero del producto que desea")
        }while(n>4 || n<=0);
        precio = monitores.find(el=>{
            el.id===n;
            return precio=el.precio;
        })
    }if(prod == "perifericos"){
        console.log("Cual es de estos desea comprar")
        perifericos.forEach((el) => {
            console.log(`-${el.id} ${el.tipo} -precio: ${el.precio}`)
        });
        do{
            n = prompt("ingrese el numero del producto que desea")
        }while(n>4 || n<=0);
        precio = perifericos.find(el=>{
            el.id===n;
            return precio=el.precio;
        })
        
    }
    return precio.precio;
}



const continuar = () =>{
    let desi = confirm("Desea comprar algo?");
    return desi;
}

const descuento = (num) =>{
        if(num>4000){
            console.log(`Tiene un descuento del 20% el precio a pagar es : ${num*0.80}`);
        }
        if(num>=2000){
            console.log(`Tiene un descuento del 10% el precio a pagar es : ${num*0.90}`);
        }
        if (num>=1000){
            console.log(`no tiene descuento el precio a pagar es: ${num}`);
        }
            
    }






let eleccion;
let comprar;
let acum=0;
let pregunta = continuar();
while(pregunta == true){
    eleccion = producto();
    elementos = compra(eleccion);
    acum += elementos;
    pregunta = continuar();
}
descuento(acum);


        





