const lista = [];

class Producto {
    constructor(id, nombre, img, medidas, materiales) {
        this.id = id;
        this.nombre = nombre;
        this.img = img;
        this.medidads = medidas;
        this.materiales = materiales;
    }
}

function productos() {
    $.getJSON("./data/data.json",
        function (productos) {
            for (const producto of productos) {
                lista.push(new Producto(producto.id, producto.nombre, producto.img, producto.medidas, producto.materiales));
            }
            renderCard(lista)
        }
    );
}

function renderCard(listado) {
    for (const producto of listado) {
        $("#productos").append(`
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
            <div class="modal-body">
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

productos();