class Producto {
    constructor(id, nombre, img, materiales) {
        this.id = id;
        this.nombre = nombre;
        this.img = img;
        this.materiales = materiales;
    }
}

function productos(data) {
    $.getJSON(data,
        function (productos) {
            const lista = [];
            for (const producto of productos) {
                lista.push(new Producto(producto.id, producto.nombre, producto.img, producto.materiales));
            }
            if (lista[0].id <= 100){
              renderMates(lista)
            }else{
              renderBombillas(lista)
            }
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
    console.log(listado);
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
  console.log(listado);
}

productos("./data/dataMates.json");
productos("./data/dataBombillas.json");