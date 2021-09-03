class Producto {
    constructor(id, categoria, nombre, img, materiales) {
        this.id = id;
        this.categoria = categoria;
        this.nombre = nombre;
        this.img = img;
        this.materiales = materiales;
    }
}

function productos(data) {
    $.getJSON(data,
        function (productos) {

            const listaMates = [];
            const listaBombillas = [];

            for (const producto of productos) {
              if (producto.categoria === "mate"){
                listaMates.push(new Producto(producto.id, producto.categoria, producto.nombre, producto.img, producto.materiales));
              }
              else if (producto.categoria === "bombilla") {
                listaBombillas.push(new Producto(producto.id, producto.categoria, producto.nombre, producto.img, producto.materiales));
              }
            }
            
            renderMates(listaMates);
            renderBombillas(listaBombillas);
        }
    );
}

function renderMates(listado) {
    for (const producto of listado) {
        $("#productosMates").append(`
        <div class="card productos__card--hover">
          <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modal${producto.id}">
            <img src=${producto.img} class="card-img-top" alt=${producto.nombre}>      
          </button>
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>    
          </div>
       </div>
       <div class="modal fade" id="modal${producto.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <h5 class="modal-title" id="${producto.id}ModalLabel">${producto.nombre}</h5>
            </div>
            <div class="modal-body-mate">
               <div>
                  <img src="${producto.img}" class="img-fluid" width="350">
                  <p><strong>Materiales: </strong>${producto.materiales}</p>
               </div>
           </div>
         </div>
       </div>
     </div>
`);

    }
}

function renderBombillas(listado) {
  for (const producto of listado) {
      $("#productosBombillas").append(`
      <div class="card productos__card--hover">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modal${producto.id}">
          <img src=${producto.img} class="card-img-top" alt=${producto.nombre}>      
        </button>
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>    
        </div>
     </div>
     <div class="modal fade" id="modal${producto.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <h5 class="modal-title" id="${producto.id}ModalLabel">${producto.nombre}</h5>
          </div>
          <div class="modal-body-bombilla">
             <div>
                <img src="${producto.img}" class="img-fluid" width="300">
             </div>
         </div>
       </div>
     </div>
   </div>
`);

  }
}

productos("./data/data.json");