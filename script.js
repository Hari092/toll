const showFilter = document.getElementById("filter-elments");
const filter = document.getElementById("filter-btn");
const addTollBtn = document.getElementById("new-toll");
const addVehicle = document.querySelector(".addvehilce-container");
const addVehilceBtn = document.getElementById("vehicle-entry");
const tollListBtn = document.getElementById("all-toll");

/*filter*/
filter.addEventListener("click", () => {
  showFilter.classList.toggle("visible");
});
/*display-add-tolls*/
addTollBtn.addEventListener("click", (e) => {
  const modalToll = document.querySelector(".Addnewtoll");
  if (e.target === addTollBtn) {
    modalToll.style.display = "flex";
  }
});
window.addEventListener("click", (e) => {
  const modalToll = document.querySelector(".Addnewtoll");
  if (e.target === modalToll || e.target === addVehicle) {
    modalToll.style.display = "none";
    addVehicle.style.display = "none";
  }
});
/*display add vehicle */

addVehilceBtn.addEventListener("click", (e) => {
    if (e.target === addVehilceBtn) {
        addVehicle.style.display = "flex";
    }
});

/*display view tolls */

const passengerDetail = document.querySelectorAll(".detail");

tollListBtn.addEventListener("click", () => {
  const head = document.querySelector("#changeHead");
  head.innerHTML = "Tollgate List";
  for (const i of passengerDetail) {
    i.style.display = "none";
    i.innerHTML = "";
  }
         
  const getdetailHead = document.createElement('ul'); 
  getdetailHead.classList.add("vehicle-header");
  getdetailHead.innerHTML = `
      <li>TOLL NAME</li>
      <li>CAR/JEEP/VAN</li>
      <li>LCV</li>
      <li>TRUCK/BUS</li>
      <li>HEAVY VEHICLE</li>`;
  const passengerDetails = document.querySelector(".passenger-details");
  passengerDetails.appendChild(getdetailHead);
  const vehicleHeader = document.querySelector(".vehicle-header");

  if (vehicleHeader) {
    vehicleHeader.style.display = "flex";
  }

  const vehicleDet = document.querySelectorAll(".vehicle-detail");
  vehicleDet.forEach((element) => {
    element.style.display = "flex";
  })
 
});

document.addEventListener("DOMContentLoaded", function () {
  const newTollForm = document.getElementById("newTollForm");
  const passenger = document.querySelector(".passenger-details");

  newTollForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const tollName = document.getElementById("gettoll").value;
    const vehicleFareDetails = document.querySelectorAll(".gettollfare");
    const vehicleDetail = document.createElement("ul");
    vehicleDetail.classList.add("vehicle-detail");

    vehicleDetail.innerHTML = `<li>${tollName}</li>`;

    vehicleFareDetails.forEach((fareDetail) => {
      const vehicleType = fareDetail.querySelector(".dropdown-menu").value;
      const singleJourney = fareDetail.querySelector(".single").value;
      const returnJourney = fareDetail.querySelector(".return").value;

      vehicleDetail.innerHTML += `<li>${singleJourney}/${returnJourney}</li>`;
    });
    const existingHeader = passenger.querySelector(".vehicle-header");
    if (existingHeader) {
      passenger.appendChild(vehicleDetail);
    } else {
      passenger.appendChild(vehicleDetail);
    }
    newTollForm.reset();
  });
});
