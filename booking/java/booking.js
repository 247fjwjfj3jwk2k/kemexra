
let totalPrice = 0;
let priceState = {
  hotel: 0,
  activities: 0,
  extras: 0
};

const travelData = {
  "sharm": {
    hotels: [
      { name: "Rixos Sharm El Sheikh", stars: 5, price: 350 },
      { name: "Steigenberger Alcazar", stars: 5, price: 320 },
      { name: "Savoy Sharm", stars: 5, price: 280 },
      { name: "Jaz Belvedere", stars: 4, price: 180 },
      { name: "Xperience Sea Breeze", stars: 4, price: 150 },
      { name: "Naama Bay Hotel", stars: 4, price: 120 }
    ],
    activities: [
      { name: "Diving in Ras Mohammed", price: 80 },
      { name: "Desert Safari by ATV", price: 60 },
      { name: "Boat Trip to Tiran Island", price: 70 },
      { name: "Snorkeling Adventure", price: 50 },
      { name: "Bedouin Dinner Night", price: 40 },
      { name: "Glass Boat Tour", price: 45 }
    ]
  },

  "cairo": {
    hotels: [
      { name: "Four Seasons Nile Plaza", stars: 5, price: 400 },
      { name: "Kempinski Nile Hotel", stars: 5, price: 350 },
      { name: "Sofitel Cairo Nile El Gezirah", stars: 5, price: 300 },
      { name: "Steigenberger Hotel El Tahrir", stars: 4, price: 180 },
      { name: "Novotel Cairo El Borg", stars: 4, price: 150 },
      { name: "Barceló Cairo Pyramids", stars: 4, price: 130 }
    ],
    activities: [
      { name: "Pyramids of Giza Tour", price: 70 },
      { name: "Sphinx Visit", price: 40 },
      { name: "Nile Dinner Cruise", price: 60 },
      { name: "Egyptian Museum Tour", price: 30 },
      { name: "Old Cairo Walking Tour", price: 25 },
      { name: "Sound & Light Show", price: 50 }
    ]
  },

  "hurghada": {
    hotels: [
      { name: "Steigenberger Aldau Beach", stars: 5, price: 320 },
      { name: "SUNRISE Crystal Bay", stars: 5, price: 280 },
      { name: "Jaz Aquamarine", stars: 5, price: 260 },
      { name: "Meraki Resort", stars: 4, price: 180 },
      { name: "Albatros Palace Resort", stars: 4, price: 160 },
      { name: "Bella Vista Resort", stars: 4, price: 120 }
    ],
    activities: [
      { name: "Red Sea Diving", price: 75 },
      { name: "Giftun Island Trip", price: 65 },
      { name: "Parasailing", price: 50 },
      { name: "Desert Safari", price: 55 },
      { name: "Submarine Tour", price: 60 },
      { name: "Snorkeling Trip", price: 45 }
    ]
  },

  "luxor": {
    hotels: [
      { name: "Sofitel Winter Palace", stars: 5, price: 300 },
      { name: "Steigenberger Nile Palace", stars: 5, price: 250 },
      { name: "Sonesta St. George", stars: 5, price: 220 },
      { name: "Iberotel Luxor", stars: 4, price: 160 },
      { name: "Aracan Eatabe Luxor", stars: 4, price: 120 },
      { name: "Pavillon Winter Luxor", stars: 4, price: 140 }
    ],
    activities: [
      { name: "Valley of the Kings Tour", price: 70 },
      { name: "Karnak Temple Visit", price: 50 },
      { name: "Luxor Temple Night Visit", price: 40 },
      { name: "Hot Air Balloon Ride", price: 120 },
      { name: "Nile Felucca Ride", price: 30 },
      { name: "Hatshepsut Temple Tour", price: 45 }
    ]
  },

  "aswan": {
    hotels: [
      { name: "Sofitel Legend Old Cataract", stars: 5, price: 380 },
      { name: "Mövenpick Aswan", stars: 5, price: 300 },
      { name: "Tolip Aswan Hotel", stars: 4, price: 160 },
      { name: "Basma Hotel", stars: 4, price: 140 },
      { name: "Philae Hotel", stars: 4, price: 120 },
      { name: "Citymax Aswan", stars: 4, price: 100 }
    ],
    activities: [
      { name: "Philae Temple Visit", price: 40 },
      { name: "Nile Felucca Sunset Ride", price: 35 },
      { name: "Abu Simbel Tour", price: 90 },
      { name: "Nubian Village Visit", price: 50 },
      { name: "Elephantine Island Trip", price: 30 },
      { name: "Aswan Dam Tour", price: 25 }
    ]
  },

  "alamein": {
    hotels: [
      { name: "Rixos Alamein", stars: 5, price: 300 },
      { name: "Tolip Resort Alamein", stars: 5, price: 250 },
      { name: "Porto Marina Resort", stars: 4, price: 180 },
      { name: "Address Marassi Resort", stars: 5, price: 350 },
      { name: "Lagoon View Hotel", stars: 4, price: 140 },
      { name: "Marina Gardens Hotel", stars: 4, price: 120 }
    ],
    activities: [
      { name: "Beach Relaxation Day", price: 20 },
      { name: "Jet Ski Experience", price: 60 },
      { name: "Yacht Cruise", price: 90 },
      { name: "Marina Walk Tour", price: 15 },
      { name: "Sunset Beach Dinner", price: 70 },
      { name: "Swimming & Water Sports", price: 50 }
    ]
  }
};
/****************************************** */
let steps = document.querySelectorAll(".booking-container .steps .step");
let navItems = document.querySelectorAll(".multi-step li");

let nextBtns = document.querySelectorAll(".booking-container .next");
let backBtns = document.querySelectorAll(".booking-container .back");

// Next button
nextBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let currentStep = btn.closest(".step");
    let index = Array.from(steps).indexOf(currentStep);
    if (currentStep.id === "step-6") {
      if (!checkUserInfo()) {
        return;
      }
    }
    if (currentStep.id === "step-2") {
      if (!selectedPlace) {
        alert("please, You must choose Any place you want");
        return;
      }
      renderTravelData(selectedPlace);
    }
    if (currentStep.id === "step-1") {
      saveDataOfTrip();
      if (!userData.start || !userData.end) {
        alert("please, you must choose date");
        return;
      }
      let start = new Date(userData.start);
      let end = new Date(userData.end);
      if (end <= start) {
        alert(" Date of Check-out must be after Date of check-in");
        return;
      }
    }
    if (index < steps.length - 1) {
      currentStep.classList.remove("active");
      steps[index + 1].classList.add("active");

      navItems[index].classList.remove("active1");
      navItems[index + 1].classList.add("active1");
    }
  });
}
);
/**************************************************** */
// Back
backBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let currentStep = btn.closest(".step");
    let index = Array.from(steps).indexOf(currentStep);
    if (index > 0) {
      currentStep.classList.remove("active");
      steps[index - 1].classList.add("active");

      navItems[index].classList.remove("active1");
      navItems[index - 1].classList.add("active1");
    }
  }
  );
});
/**************************************************** */
let selectedPlace = "";
function selectPlace(n, place) {
  selectedPlace = place;

  document.querySelectorAll(".place-booking").forEach(m => m.classList.remove("active"));
  n.classList.add("active");

}
function renderTravelData(place) {
  const data = travelData[place];
  const hotelCards = document.querySelectorAll(".booking-hotels .hotel-card");
  hotelCards.forEach((card, i) => {
    if (data.hotels[i]) {
      const hotel = data.hotels[i];
      card.querySelector("h5").textContent = hotel.name;
      card.querySelector("p").textContent =
        `⭐ ${hotel.stars} | 💰 ${hotel.price}$`;
      let input = card.querySelector("input");
      input.value = hotel.price;
      input.onchange = function () {
        priceState.hotel = this.checked ? hotel.price : 0;
        updateTotalPrice();
      };
    }
  });


  const activitiesCards = document.querySelectorAll(".booking-activities .activity-card");
  activitiesCards.forEach((card, i) => {
    if (data.activities[i]) {
      const activity = data.activities[i];
      card.querySelector("h5").textContent = activity.name;
      card.querySelector("p").textContent =
        ` 💰 ${activity.price}$`;
      let input = card.querySelector("input");
      
      input.value = activity.price;//******************************** */
      input.onchange = function () {
        if (this.checked) {
          priceState.activities += activity.price;
        } else {
          priceState.activities -= activity.price;
        }
        saveActivities();/******************** */
        updateTotalPrice();
      };
    }
  });
  document.querySelector("#step-3").style.display = "block";
}

/************************************************ */
function saveAllData() {
  localStorage.setItem("bookingData", JSON.stringify(userData));
}
let userData = {};
function saveDataOfTrip() {
  userData.start = document.getElementById("start-date").value;
  userData.end = document.getElementById("end-date").value;
  userData.adults = document.getElementById("no-adults").value;
  userData.children = document.getElementById("no-children").value;
  userData.type = document.getElementById("trip-type").value;

  localStorage.setItem("bookingData", JSON.stringify(userData));//to save user data not removed when he close website

  console.log(userData);
}
function saveplaces() {
  userData.place = document.querySelector('input[name="place"]:checked')?.value;
  saveAllData();
  console.log(userData);
}
function savehotels() {
  let selected = document.querySelector('input[name="hotel"]:checked');

  if (selected) {
    let hotelName =
      selected.closest("label").querySelector("h5").textContent;

    userData.hotel = hotelName;
  }
  saveAllData();
  console.log(userData);
  updateTotalPrice();
}

console.log(userData);

function saveActivities() {
  let activities = [];

  document.querySelectorAll('.activity-card input[type="checkbox"]:checked')
    .forEach(box => {
      let name = box.closest("label").querySelector("h5").textContent;
      activities.push(name);

    });

  userData.activities = activities;
  saveAllData();
  console.log(userData);
  updateTotalPrice();
}

function saveExtras() {
  let extras = 0;

  let checkboxes = document.querySelectorAll('input[name="extras"]');

  checkboxes.forEach(box => {
    if (box.checked) {
      extras += Number(box.dataset.price);
    }
  });

  priceState.extras = extras;

  userData.extras = Array.from(checkboxes)
    .filter(b => b.checked)
    .map(b => b.value);
  saveAllData();
  updateTotalPrice();

}

function displayData() {
  let container = document.getElementById("output-booking");

  container.innerHTML = `
    <div class="hug-summary">
       <h2>Summary</h2>
      <div class="date-summary">
          <p><span>Start:</span>   ${userData.start}</p>
          <p><span>End:</span>   ${userData.end}</p>
      </div>
      <div class="date-summary"> 
          <p><span>Adults:</span>   ${userData.adults}</p>
          <p><span>children:</span>   ${userData.children}</p>
          <p><span>Type:</span>   ${userData.type}</p>
      </div>
      <div class="date-summary">
          <p><span>Place:</span>   ${userData.place}</p>
          <p><span>Hotel:</span>   ${userData.hotel}</p>
          <p><span>Activities:</span>   ${userData.activities ? userData.activities.join(", ") : ""}</p>
          <p><span>Extras</span>   ${userData.extras ? userData.extras.join(", ") : ""}</p>

      </div>
      <h5>Total Price:<span> ${totalPrice} $ </span> per person</h5>
    </div>
  `;
}
/************************** */
function updateTotalPrice() {
  totalPrice =
    priceState.hotel +
    priceState.activities +
    priceState.extras;

  document.getElementById("total-price").textContent =
    totalPrice + " $";
}

document.addEventListener("change", function () {
  updateTotalPrice();
});
/***********************pay */
function checkUserInfo() {
  let name = document.querySelector('input[placeholder="Enter your name"]').value.trim();
  let phone = document.querySelector('input[type="tel"]').value.trim();
  let emails = document.querySelectorAll('input[type="email"]');

  let email = emails[0].value.trim();

  // name
  if (name === "") {
    alert("Full Name is required");
    return false;
  }

  //email
  if (!email.includes("@") || !email.includes(".")) {
    alert(" Please, Enter valid email");
    return false;
  }

  //phone
  if (!/^\d+$/.test(phone)) {
    alert("Phone must be numbers only");
    return false;
  }

  return true;
}
//card
let paymentRadios = document.querySelectorAll('input[name="payment"]');
let cardDetails = document.querySelector(".card-details");

// to display details of card
function toggleCardDetails() {
  let selected = document.querySelector('input[name="payment"]:checked').value;

  if (selected === "card") {
    cardDetails.style.display = "block";
  } else {
    cardDetails.style.display = "none";
  }
}
paymentRadios.forEach(radio => {
  radio.addEventListener("change", toggleCardDetails);
});

toggleCardDetails();


// save payment and user information

function savePayment() {
  let name = document.querySelector('input[placeholder="Enter your name"]').value.trim();
  let phone = document.querySelector('input[type="tel"]').value.trim();
  let email = document.querySelectorAll('input[type="email"]')[0].value.trim();
  let payment = document.querySelector('input[name="payment"]:checked')?.value;

  userData.name = name;
  userData.phone = phone;
  userData.email = email;
  userData.payment = payment;

  localStorage.setItem("bookingData", JSON.stringify(userData));
}


/**************************** */
window.onload = function () {// return data (stored)
  let data = JSON.parse(localStorage.getItem("bookingData"));

  if (data) {
    userData = data;
    document.getElementById("start-date").value = data.start || "";
    document.getElementById("end-date").value = data.end || "";
    document.getElementById("no-adults").value = data.adults || "";
    document.getElementById("no-children").value = data.children || "";
    document.getElementById("trip-type").value = data.type || "";

    updateTotalPrice();

    if (data.name) {
      document.querySelector('input[placeholder="Enter your name"]').value = data.name;
    }

    if (data.phone) {
      document.querySelector('input[type="tel"]').value = data.phone;
    }

    if (data.email) {
      document.querySelectorAll('input[type="email"]')[0].value = data.email;
    }

    if (data.payment) {
      let paymentInput = document.querySelector(`input[name="payment"][value="${data.payment}"]`);
      if (paymentInput) paymentInput.checked = true;
    }

    toggleCardDetails();
  }

};
// return data after reload

document.querySelectorAll("#step-1 input, #step-1 select")// to save Automatically when user make change 
  .forEach(el => {
    el.addEventListener("change", saveDataOfTrip);
  });

document.querySelectorAll('input[placeholder="Enter your name"], input[type="tel"], input[type="email"], input[name="payment"]').forEach(el => {
  el.addEventListener("change", savePayment);
});
/*************************************** */





