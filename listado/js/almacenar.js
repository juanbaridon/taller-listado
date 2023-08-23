 let item = document.getElementById("item");
 let agregarBoton = document.getElementById("agregar");
 let limpiarBoton = document.getElementById("limpiar");
 let contenedor = document.getElementById("contenedor");
 let listaItems = JSON.parse(localStorage.getItem("itemList")) || [];

 document.addEventListener('DOMContentLoaded', function() {
    
     listaItems.forEach(element => {
        contenedor.innerHTML += `<li>${element}</li>`;
 });
 });
 

 agregarBoton.addEventListener("click", function() {
    if (item.value.trim() !== "") {
        listaItems.push(item.value);
        localStorage.setItem('itemList', JSON.stringify(listaItems)); 
        contenedor.innerHTML += `<li>${item.value}</li>`;
        item.value = '';
    }
});


 limpiarBoton.addEventListener("click", function() {
     localStorage.clear()
     contenedor.innerHTML = ""
     listaItems = []
 });

 
