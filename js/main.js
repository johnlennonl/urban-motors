function displayVehicles(filteredVehicles) {
  const vehicleList = document.getElementById("vehicle-list");
  vehicleList.innerHTML = "";

  filteredVehicles.forEach((vehicle) => {
    const vehicleCard = document.createElement("div");
    vehicleCard.classList.add("col-md-12", "mb-4"); // Tarjeta en toda la fila

    vehicleCard.innerHTML = `
            <div class="card h-100 cardVehicle">
                <div class="row g-0">
                    <!-- Columna de la imagen -->
                    <div class="col-md-4 ">
                        <img src="${vehicle.images[0]}" class="img-fluid  " alt="${vehicle.name}">
                        <div class="card-body p-2 text-center containerLocated text-white">
                            <p>${vehicle.ubication}</p>
                        </div>
                        <div class="card-body p-4 text-start ">
                          <p> Are you interested and want to call our advisor? </p>
                        <p> Call: <span> 720-439-5555 </span> </p>
                        <p> Or email us: <span> asel4738@llcompany.com </span> </p>
                        </div>
                    </div>
                    <!-- Columna de descripción -->
                    <div class="col-md-8">
                        <div class="card-body ">
                            <h5 class="card-title">${vehicle.name} - Tastefully Modified</h5>
                            <p class="card-text">VIN: ${vehicle.vin} Stock: ${vehicle.stock}</p>
                            <p class="card-text">Engine: <span>${vehicle.engine}</span></p>
                            <p class="card-text">Transmission: <span>${vehicle.transmission}</span></p>
                            <p class="card-text">DriveTrain: <span>${vehicle.driveTrain}</span></p>
                            <p class="card-text">Exterior: <span>${vehicle.exterior}</span></p>
                            <p class="card-text">Interior: <span>${vehicle.interior}</span></p>
                            <p class="card-text">Mileage: <span>${vehicle.mileage}</span></p>
                            <h4 class="text-primary">No Hassle Price: $${vehicle.price}</h4>
                            <p class="card-text">${vehicle.description}</p>
                            <div class="d-flex justify-content-start mt-4">
                                
                                <button onclick="showDetails(${vehicle.id})"  class="buttonVer w-100 me-2 ">
                                           <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none" class="svg-icon"><g stroke-width="2" stroke-linecap="round" stroke="#fff" fill-rule="evenodd" clip-rule="evenodd"><path d="m4 9c0-1.10457.89543-2 2-2h2l.44721-.89443c.33879-.67757 1.03131-1.10557 1.78889-1.10557h3.5278c.7576 0 1.4501.428 1.7889 1.10557l.4472.89443h2c1.1046 0 2 .89543 2 2v8c0 1.1046-.8954 2-2 2h-12c-1.10457 0-2-.8954-2-2z"></path><path d="m15 13c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3z"></path></g></svg>
                                           <span class="lable">Images</span>
                                         </button>
                                  <button " class="btn btnContact w-100 me-2">Contact Advisor</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

    vehicleList.appendChild(vehicleCard);
  });
}





function showDetails(id) {
    const vehicle = vehicles.find((v) => v.id === id);
    let imageSlides = vehicle.images
      .map((img) => `<div class="swiper-slide"><img src="${img}" style="width: 100%; height: auto;" /></div>`)
      .join("");
  
    Swal.fire({
      title: vehicle.name,
      customClass: {
        confirmButton: "btn btnSweetAlertContact",
        cancelButton: "btn btnSweetAlert",
        popup: 'custom-swal-popup',
        htmlContainer: 'custom-container',
        footer: 'custom-footer'
      },
      confirmButtonText: `Contact Advisor`,
      showCancelButton: "false",
      html: `
        <div class="swiper-container">
          <div class="swiper-wrapper">
            ${imageSlides}
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          
        </div>
      `,
      didOpen: () => {
        const swiper = new Swiper('.swiper-container', {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          
          loop: true,             // Habilita el bucle de las imágenes
          slidesPerView: 1,       // Muestra solo una imagen a la vez
          spaceBetween: 10,        // Sin espacio entre las imágenes
          allowTouchMove: true,   // Permite el desplazamiento táctil en móviles
        });
        swiper.update(); // Asegura que el Swiper se actualice al abrir el modal
      },
      width: 800
    });
  }
  




function applyFilters() {
  const make = document.getElementById("makeFilter").value.toLowerCase();
  const year = document.getElementById("yearFilter").value;
  const color = document.getElementById("colorFilter").value.toLowerCase();

  const filteredVehicles = vehicles.filter((vehicle) => {
    return (
      (!make || vehicle.name.toLowerCase().includes(make)) &&
      (!year || vehicle.year == year) &&
      (!color || vehicle.exterior.toLowerCase().includes(color))
    );
  });

  displayVehicles(filteredVehicles);
}

// Inicializar lista de vehículos
displayVehicles(vehicles);



