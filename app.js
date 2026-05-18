/* ==========================================================================
   KAİ Motors - Premium Web App Interactive Logic
   Handles: Catalog, Filters, Favorites, Comparison, Configurator, 
            AI Valuator, Test Drive Multi-step Wizard & LocalStorage state.
   ========================================================================== */

// --- 1. Premium Car Database ---
const CARS_DATA = [
  {
    id: "spectre",
    name: "KAİ Spectre",
    type: "Elektrikli Super Kupe",
    category: "electric",
    price: 212500,
    hp: 750,
    accel: 2.1,
    range: 650,
    year: 2026,
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800"
    ],
    highlights: ["Ultra-Aero Karbon Gövdə", "KAI Pilot V4 Avtopilot", "350kW Ultra DC Şarj Dəstəyi (10 dəq - 80%)", "Active Sports Səs Simulyasiyası"]
  },
  {
    id: "phantom",
    name: "KAİ Phantom",
    type: "Premium Lüks SUV",
    category: "suv",
    price: 238000,
    hp: 800,
    accel: 2.8,
    range: 700,
    year: 2026,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=800"
    ],
    highlights: ["Aktiv Pnevmatik Asqı", "Arxa Oturacaq VIP Masaj Sistemi", "32 düymlük 8K KAI Cinemaview Ekranı", "Maksimal Səssiz Kabin (Double Glass)"]
  },
  {
    id: "apex",
    name: "KAİ Apex",
    type: "Hibrid Hyperkar",
    category: "hybrid",
    price: 493000,
    hp: 1100,
    accel: 1.8,
    range: 900,
    year: 2026,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800"
    ],
    highlights: ["F1-dən Törəmiş Hibrid Güc Qurğusu", "Monokok Karbon Şassi", "Aktiv Aerodinamik Spoiler", "Məhdud Sayda İstehsal (Cəmi 99 ədəd)"]
  },
  {
    id: "horizon",
    name: "KAİ Horizon",
    type: "Elektrikli Crossover",
    category: "electric",
    price: 144500,
    hp: 450,
    accel: 4.2,
    range: 580,
    year: 2026,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800"
    ],
    highlights: ["Panoramik Ağıllı Şüşə Tavan", "3D Ətraf Görünüş Sistemi", "Geniş Ailə Baqajı", "V2L Ev Enerji Paylama Dəstəyi"]
  },
  {
    id: "aero",
    name: "KAİ Aero",
    type: "İntellektual Sedan",
    category: "electric",
    price: 161500,
    hp: 530,
    accel: 3.5,
    range: 600,
    year: 2026,
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800"
    ],
    highlights: ["KAI OS İntellektual Əməliyyat Sistemi", "FaceID Giriş və Sürücü Tanıma", "18 Dinamikli Dolby Atmos Səs Sistemi", "Yüksək Sürət Şassi Stabilizatoru"]
  }
];

// --- 2. Application State (LocalStorage & Runtime) ---
let favorites = JSON.parse(localStorage.getItem("kai_favorites")) || [];
let bookings = JSON.parse(localStorage.getItem("kai_bookings")) || [];
let compareList = [];

// --- 3. DOM Elements Cache ---
const header = document.getElementById("header");
const navMenu = document.getElementById("navMenu");
const hamburger = document.getElementById("hamburger");
const backdrop = document.getElementById("backdrop");

// Catalog Elements
const catalogGrid = document.getElementById("catalogGrid");
const catalogSearch = document.getElementById("catalogSearch");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");

// Slide-out drawers
const favoritesPanel = document.getElementById("favoritesPanel");
const favoritesToggleBtn = document.getElementById("favoritesToggleBtn");
const favoritesCloseBtn = document.getElementById("favoritesCloseBtn");
const favoritesBadge = document.getElementById("favoritesBadge");
const favoritesPanelContent = document.getElementById("favoritesPanelContent");
const bookAllFavoritesBtn = document.getElementById("bookAllFavoritesBtn");

const bookingsPanel = document.getElementById("bookingsPanel");
const bookingsToggleBtn = document.getElementById("bookingsToggleBtn");
const bookingsCloseBtn = document.getElementById("bookingsCloseBtn");
const bookingsBadge = document.getElementById("bookingsBadge");
const bookingsPanelContent = document.getElementById("bookingsPanelContent");

// Compare Elements
const compareBar = document.getElementById("compareBar");
const compareCount = document.getElementById("compareCount");
const compareTray = document.getElementById("compareTray");
const compareNowBtn = document.getElementById("compareNowBtn");
const clearCompareBtn = document.getElementById("clearCompareBtn");
const compareResultsModal = document.getElementById("compareResultsModal");
const compareModalCloseBtn = document.getElementById("compareModalCloseBtn");
const compareResultsGrid = document.getElementById("compareResultsGrid");

// Configurator Elements
const cfgPaint = document.getElementById("cfg-body-paint");
const cfgUnderglow = document.getElementById("cfg-underglow");
const cfgHeadlightBeam = document.getElementById("cfg-headlight-beam");
const cfgTaillightBeam = document.getElementById("cfg-taillight-beam");
const cfgFrontRim = document.getElementById("cfg-front-rim");
const cfgRearRim = document.getElementById("cfg-rear-rim");
const cfgFrontWheel = document.getElementById("cfg-front-wheel");
const cfgRearWheel = document.getElementById("cfg-rear-wheel");

const configuratorTotalPrice = document.getElementById("configuratorTotalPrice");
const colorNameLabel = document.getElementById("colorName");
const underglowSwitch = document.getElementById("neonUnderglowSwitch");
const ledBeamSwitch = document.getElementById("ledBeamSwitch");
const orderConfiguredCarBtn = document.getElementById("orderConfiguredCarBtn");

const colorOptions = document.querySelectorAll(".color-option");
const rimOptions = document.querySelectorAll(".rim-option");

// AI Valuator Elements
const valuatorForm = document.getElementById("valuatorForm");
const valuatorPlaceholder = document.getElementById("valuatorPlaceholder");
const valuatorResults = document.getElementById("valuatorResults");
const valuationAmount = document.getElementById("valuationAmount");
const valMarketAvg = document.getElementById("valMarketAvg");
const valConditionAdjust = document.getElementById("valConditionAdjust");
const valFinalOffer = document.getElementById("valFinalOffer");
const tradeInApplyBtn = document.getElementById("tradeInApplyBtn");

// Details Modal Elements
const detailsModal = document.getElementById("detailsModal");
const detailsModalCloseBtn = document.getElementById("detailsModalCloseBtn");
const detailsMainImg = document.getElementById("detailsMainImg");
const detailsThumbGrid = document.getElementById("detailsThumbGrid");
const detailsName = document.getElementById("detailsName");
const detailsPrice = document.getElementById("detailsPrice");
const detailsType = document.getElementById("detailsType");
const detailsAccel = document.getElementById("detailsAccel");
const detailsPower = document.getElementById("detailsPower");
const detailsRange = document.getElementById("detailsRange");
const detailsYear = document.getElementById("detailsYear");
const detailsBookBtn = document.getElementById("detailsBookBtn");
const detailsFavoriteBtn = document.getElementById("detailsFavoriteBtn");

// Booking Wizard Elements
const bookingWizardModal = document.getElementById("bookingWizardModal");
const bookingWizardCloseBtn = document.getElementById("bookingWizardCloseBtn");
const wizardProgress = document.getElementById("wizardProgress");
const wizardSteps = document.querySelectorAll(".wizard-step");
const wizardPanels = document.querySelectorAll(".booking-step-panel");
const wizardPrevBtn = document.getElementById("wizardPrevBtn");
const wizardNextBtn = document.getElementById("wizardNextBtn");
const bookingCarPickerGrid = document.getElementById("bookingCarPickerGrid");
const bookingWizardForm = document.getElementById("bookingWizardForm");
const bookingTicket = document.getElementById("bookingTicket");


// ==========================================
// 4. CORE INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  lucide.createIcons();

  // Scroll Header Effect
  window.addEventListener("scroll", handleHeaderScroll);
  handleHeaderScroll();

  // Drawers and Modals Toggle Handlers
  setupDrawerAndModalEvents();

  // Setup mobile menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navMenu.classList.toggle("open");
  });

  // Setup Catalog Filter Listeners
  if (catalogSearch) catalogSearch.addEventListener("input", filterAndRenderCatalog);
  if (categoryFilter) categoryFilter.addEventListener("change", filterAndRenderCatalog);
  if (sortFilter) sortFilter.addEventListener("change", filterAndRenderCatalog);
  if (resetFiltersBtn) resetFiltersBtn.addEventListener("click", resetFilters);

  // Setup Configurator
  setupConfiguratorEvents();

  // Setup AI Valuator Form
  if (valuatorForm) valuatorForm.addEventListener("submit", handleCarValuation);

  // Setup Booking Wizard
  setupBookingWizardEvents();

  // Initialize view
  filterAndRenderCatalog();
  updateBadges();
  renderFavoritesDrawer();
  renderBookingsDrawer();
  
  // Interactive mock map tooltip setup
  const mapPin = document.getElementById("mapPin");
  const mapTooltip = document.getElementById("mapTooltip");
  if (mapPin && mapTooltip) {
    mapPin.addEventListener("mouseenter", () => {
      mapTooltip.style.opacity = "1";
      mapTooltip.style.visibility = "visible";
    });
    mapPin.addEventListener("mouseleave", () => {
      mapTooltip.style.opacity = "0";
      mapTooltip.style.visibility = "hidden";
    });
  }

  // Smooth click scroll links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      hamburger.classList.remove("open");
      navMenu.classList.remove("open");
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});

// --- Scroll Header ---
function handleHeaderScroll() {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

// --- Toggle Panels Backdrop ---
function toggleBackdrop(show) {
  if (show) {
    backdrop.classList.add("active");
    document.body.classList.add("modal-open");
  } else {
    backdrop.classList.remove("active");
    document.body.classList.remove("modal-open");
  }
}

// --- Close all Open Modals or Drawers ---
function closeAllPanels() {
  document.querySelectorAll(".side-panel.open, .modal.open").forEach(panel => {
    panel.classList.remove("open");
  });
  toggleBackdrop(false);
}

// --- Setup Modals & Drawers events ---
function setupDrawerAndModalEvents() {
  // Favorites drawer toggling
  favoritesToggleBtn.addEventListener("click", () => {
    favoritesPanel.classList.add("open");
    toggleBackdrop(true);
  });
  favoritesCloseBtn.addEventListener("click", closeAllPanels);

  // Bookings drawer toggling
  bookingsToggleBtn.addEventListener("click", () => {
    bookingsPanel.classList.add("open");
    toggleBackdrop(true);
  });
  bookingsCloseBtn.addEventListener("click", closeAllPanels);

  // Backdrop overlay click to close
  backdrop.addEventListener("click", closeAllPanels);

  // Keyboard Escape key to close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAllPanels();
  });

  // Details Modal close
  detailsModalCloseBtn.addEventListener("click", closeAllPanels);
  
  // Wizard Modal close
  bookingWizardCloseBtn.addEventListener("click", closeAllPanels);

  // Comparison Results Close
  compareModalCloseBtn.addEventListener("click", closeAllPanels);
}


// ==========================================
// 5. CAR CATALOG & FILTERING ENGINE
// ==========================================

function filterAndRenderCatalog() {
  let searchVal = catalogSearch.value.trim().toLowerCase();
  let categoryVal = categoryFilter.value;
  let sortVal = sortFilter.value;

  let filtered = CARS_DATA.filter(car => {
    let matchesSearch = car.name.toLowerCase().includes(searchVal) || car.type.toLowerCase().includes(searchVal);
    let matchesCategory = (categoryVal === "all") || (car.category === categoryVal);
    return matchesSearch && matchesCategory;
  });

  // Sorting logic
  if (sortVal === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortVal === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortVal === "hp-desc") {
    filtered.sort((a, b) => b.hp - a.hp);
  }

  renderCatalogGrid(filtered);
}

function resetFilters() {
  catalogSearch.value = "";
  categoryFilter.value = "all";
  sortFilter.value = "default";
  filterAndRenderCatalog();
}

function renderCatalogGrid(cars) {
  catalogGrid.innerHTML = "";

  if (cars.length === 0) {
    catalogGrid.innerHTML = `
      <div class="panel-empty-state" style="grid-column: 1 / -1; padding: 60px 0;">
        <i data-lucide="compass"></i>
        <h3>Axtarışa uyğun avtomobil tapılmadı.</h3>
        <p>Axtarış meyarlarınızı dəyişməyi yoxlayın.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  cars.forEach(car => {
    const isFav = favorites.includes(car.id);
    const isCompared = compareList.includes(car.id);

    const card = document.createElement("div");
    card.className = "car-card";
    card.setAttribute("data-id", car.id);

    card.innerHTML = `
      <span class="car-card-badge">${car.category === "electric" ? "Elektrikli" : car.category === "hybrid" ? "Hibrid" : "SUV"}</span>
      <button class="car-card-favorite-btn ${isFav ? "active" : ""}" onclick="toggleFavorite('${car.id}', event)">
        <i data-lucide="heart"></i>
      </button>

      <div class="car-image-wrapper">
        <img class="car-card-image" src="${car.image}" alt="${car.name}">
      </div>

      <div class="car-card-body">
        <div class="car-card-meta">
          <span class="car-type">${car.type}</span>
          <span class="car-year">${car.year}</span>
        </div>
        <h3 class="car-name">${car.name}</h3>

        <div class="car-specs">
          <div class="spec-item">
            <i data-lucide="zap"></i>
            <span class="spec-value">${car.hp} a.g.</span>
            <span class="spec-label">Güc</span>
          </div>
          <div class="spec-item">
            <i data-lucide="gauge"></i>
            <span class="spec-value">${car.accel}s</span>
            <span class="spec-label">0-100</span>
          </div>
          <div class="spec-item">
            <i data-lucide="battery-charging"></i>
            <span class="spec-value">${car.range} km</span>
            <span class="spec-label">Məsafə</span>
          </div>
        </div>

        <div class="car-card-footer">
          <div class="car-price-block">
            <span class="price-label">Qiymət</span>
            <span class="car-price">${car.price.toLocaleString("az-AZ")} ₼</span>
          </div>
          <div class="car-card-actions">
            <button class="btn-icon ${isCompared ? "active" : ""}" onclick="toggleCompare('${car.id}', event)" title="Müqayisə et">
              <i data-lucide="git-compare"></i>
            </button>
            <button class="btn btn-secondary" onclick="openDetailsModal('${car.id}')" style="padding: 10px 18px; font-size: 13px;">Ətraflı</button>
          </div>
        </div>
      </div>
    `;

    catalogGrid.appendChild(card);
  });

  lucide.createIcons();
}


// ==========================================
// 6. DETAILED MODAL VIEWER
// ==========================================
let currentDetailCarId = "";

window.openDetailsModal = function(carId) {
  const car = CARS_DATA.find(c => c.id === carId);
  if (!car) return;

  currentDetailCarId = carId;
  detailsName.innerText = car.name;
  detailsPrice.innerText = car.price.toLocaleString("az-AZ") + " ₼";
  detailsType.innerText = car.type;
  detailsAccel.innerText = car.accel + " san";
  detailsPower.innerText = car.hp + " at gücü";
  detailsRange.innerText = car.range + " km";
  detailsYear.innerText = car.year;

  // Render gallery
  detailsMainImg.src = car.images[0];
  detailsThumbGrid.innerHTML = "";

  car.images.forEach((imgUrl, idx) => {
    const thumb = document.createElement("div");
    thumb.className = `details-thumb ${idx === 0 ? "active" : ""}`;
    thumb.innerHTML = `<img src="${imgUrl}" alt="${car.name} detail">`;
    thumb.addEventListener("click", () => {
      document.querySelectorAll(".details-thumb").forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
      detailsMainImg.src = imgUrl;
    });
    detailsThumbGrid.appendChild(thumb);
  });

  // Setup Details Favorite button state
  const isFav = favorites.includes(car.id);
  detailsFavoriteBtn.className = `btn-icon ${isFav ? "active" : ""}`;
  
  // Remove old event listeners and create clean triggers
  const newFavBtn = detailsFavoriteBtn.cloneNode(true);
  detailsFavoriteBtn.replaceWith(newFavBtn);
  newFavBtn.addEventListener("click", (e) => {
    toggleFavorite(car.id, e);
    const updatedFav = favorites.includes(car.id);
    newFavBtn.className = `btn-icon ${updatedFav ? "active" : ""}`;
  });

  const newBookBtn = detailsBookBtn.cloneNode(true);
  detailsBookBtn.replaceWith(newBookBtn);
  newBookBtn.addEventListener("click", () => {
    closeAllPanels();
    openBookingWizard(car.id);
  });

  detailsModal.classList.add("open");
  toggleBackdrop(true);
  lucide.createIcons();
};


// ==========================================
// 7. FAVORITES STATE & PANEL
// ==========================================

window.toggleFavorite = function(carId, event) {
  if (event) event.stopPropagation();

  const index = favorites.indexOf(carId);
  if (index === -1) {
    favorites.push(carId);
  } else {
    favorites.splice(index, 1);
  }

  localStorage.setItem("kai_favorites", JSON.stringify(favorites));
  updateBadges();
  renderFavoritesDrawer();
  
  // Re-render catalog grid cards to match updated favorite state
  const cards = document.querySelectorAll(".car-card");
  cards.forEach(card => {
    if (card.getAttribute("data-id") === carId) {
      const favBtn = card.querySelector(".car-card-favorite-btn");
      if (favBtn) favBtn.classList.toggle("active");
    }
  });
};

function updateBadges() {
  favoritesBadge.innerText = favorites.length;
  bookingsBadge.innerText = bookings.length;
}

function renderFavoritesDrawer() {
  favoritesPanelContent.innerHTML = "";

  if (favorites.length === 0) {
    favoritesPanelContent.innerHTML = `
      <div class="panel-empty-state">
        <i data-lucide="heart"></i>
        <h3>Sevimliləriniz boşdur</h3>
        <p>Bəyəndiyiniz maşınları kataloqdan ürək düyməsinə klikləyərək bura əlavə edə bilərsiniz.</p>
      </div>
    `;
    bookAllFavoritesBtn.style.display = "none";
    lucide.createIcons();
    return;
  }

  bookAllFavoritesBtn.style.display = "inline-flex";

  const list = document.createElement("div");
  list.className = "panel-car-list";

  favorites.forEach(carId => {
    const car = CARS_DATA.find(c => c.id === carId);
    if (!car) return;

    const item = document.createElement("div");
    item.className = "panel-car-item";

    item.innerHTML = `
      <img class="panel-car-img" src="${car.image}" alt="${car.name}">
      <div class="panel-car-info">
        <h4>${car.name}</h4>
        <p>${car.price.toLocaleString("az-AZ")} ₼</p>
      </div>
      <button class="panel-car-item-remove" onclick="toggleFavorite('${car.id}', event)">
        <i data-lucide="trash-2"></i>
      </button>
    `;
    list.appendChild(item);
  });

  favoritesPanelContent.appendChild(list);
  lucide.createIcons();
}

bookAllFavoritesBtn.addEventListener("click", () => {
  closeAllPanels();
  // Open wizard with first favorited car selected
  if (favorites.length > 0) openBookingWizard(favorites[0]);
});


// ==========================================
// 8. COMPARISON SYSTEMS
// ==========================================

window.toggleCompare = function(carId, event) {
  if (event) event.stopPropagation();

  const idx = compareList.indexOf(carId);
  if (idx === -1) {
    if (compareList.length >= 3) {
      alert("Maksimum 3 avtomobili eyni anda müqayisə edə bilərsiniz.");
      return;
    }
    compareList.push(carId);
  } else {
    compareList.splice(idx, 1);
  }

  updateCompareStickyBar();
  
  // Re-render specific catalog buttons to match state
  const cards = document.querySelectorAll(".car-card");
  cards.forEach(card => {
    if (card.getAttribute("data-id") === carId) {
      const cmpBtn = card.querySelector(".btn-icon");
      if (cmpBtn) cmpBtn.classList.toggle("active");
    }
  });
};

function updateCompareStickyBar() {
  compareCount.innerText = compareList.length;
  compareTray.innerHTML = "";

  if (compareList.length > 0) {
    compareBar.classList.add("active");
  } else {
    compareBar.classList.remove("active");
  }

  // Populate tray slots
  for (let i = 0; i < 3; i++) {
    const slot = document.createElement("div");
    slot.className = "compare-slot";

    if (compareList[i]) {
      const car = CARS_DATA.find(c => c.id === compareList[i]);
      if (car) {
        slot.classList.add("filled");
        slot.innerHTML = `
          <img src="${car.image}" alt="${car.name}">
          <div class="compare-slot-remove" onclick="toggleCompare('${car.id}', event)">
            <i data-lucide="x" style="width: 16px; height: 16px;"></i>
          </div>
        `;
      }
    } else {
      slot.innerHTML = `<i data-lucide="plus" style="width: 16px; height: 16px;"></i>`;
    }
    compareTray.appendChild(slot);
  }
  lucide.createIcons();
}

clearCompareBtn.addEventListener("click", () => {
  const oldCompare = [...compareList];
  compareList = [];
  updateCompareStickyBar();
  
  // Reset all catalog compare button classes
  document.querySelectorAll(".car-card .btn-icon.active").forEach(btn => {
    btn.classList.remove("active");
  });
});

compareNowBtn.addEventListener("click", () => {
  if (compareList.length < 2) {
    alert("Müqayisə etmək üçün ən azı 2 avtomobil seçməlisiniz.");
    return;
  }
  
  renderComparisonTable();
  compareResultsModal.classList.add("open");
  toggleBackdrop(true);
});

function renderComparisonTable() {
  compareResultsGrid.innerHTML = "";

  // 1. Label Column Creation
  const labelCol = document.createElement("div");
  labelCol.className = "compare-column compare-label-column";
  labelCol.innerHTML = `
    <div class="compare-cell-header">KAI MOTORS</div>
    <div class="compare-cell">Sinf / Kateqoriya</div>
    <div class="compare-cell">Buraxılış İli</div>
    <div class="compare-cell">Güc (At Gücü)</div>
    <div class="compare-cell">0-100 km/s Sürətlənmə</div>
    <div class="compare-cell">Yürüş Məsafəsi</div>
    <div class="compare-cell">Qiymət</div>
    <div class="compare-cell">Fəaliyyət</div>
  `;
  compareResultsGrid.appendChild(labelCol);

  // Set grid template configuration dynamically depending on comparing list size
  compareResultsGrid.style.gridTemplateColumns = `240px repeat(${compareList.length}, 1fr)`;

  // 2. Car Columns Creation
  compareList.forEach(carId => {
    const car = CARS_DATA.find(c => c.id === carId);
    if (!car) return;

    // Calculate dynamic rating percentages for progress bars
    const hpPercent = Math.min(100, (car.hp / 1200) * 100);
    const accelPercent = Math.max(10, 100 - ((car.accel - 1.5) / 4) * 100); // 1.8s is premium, 6.0s is lower rating
    const rangePercent = Math.min(100, (car.range / 1000) * 100);

    const carCol = document.createElement("div");
    carCol.className = "compare-column";
    carCol.innerHTML = `
      <div class="compare-cell-header">
        <img src="${car.image}" alt="${car.name}">
        <h4>${car.name}</h4>
        <span class="price">${car.price.toLocaleString("az-AZ")} ₼</span>
      </div>
      <div class="compare-cell">${car.type}</div>
      <div class="compare-cell">${car.year}</div>
      
      <!-- Power HP Metre -->
      <div class="compare-cell">
        <div class="compare-meter-wrapper">
          <div class="compare-meter-label">
            <span>${car.hp} a.g.</span>
          </div>
          <div class="compare-meter-bg">
            <div class="compare-meter-fill" style="width: ${hpPercent}%;"></div>
          </div>
        </div>
      </div>

      <!-- Acceleration 0-100 Metre -->
      <div class="compare-cell">
        <div class="compare-meter-wrapper">
          <div class="compare-meter-label">
            <span>${car.accel} san</span>
          </div>
          <div class="compare-meter-bg">
            <div class="compare-meter-fill" style="width: ${accelPercent}%; background: var(--gradient-sport);"></div>
          </div>
        </div>
      </div>

      <!-- Fuel Range Metre -->
      <div class="compare-cell">
        <div class="compare-meter-wrapper">
          <div class="compare-meter-label">
            <span>${car.range} km</span>
          </div>
          <div class="compare-meter-bg">
            <div class="compare-meter-fill" style="width: ${rangePercent}%; background: linear-gradient(90deg, #00e676, #00e5ff);"></div>
          </div>
        </div>
      </div>

      <div class="compare-cell" style="font-weight: 800; color: var(--accent-primary);">${car.price.toLocaleString("az-AZ")} ₼</div>
      
      <div class="compare-cell">
        <button class="btn btn-primary" onclick="closeAllPanels(); openBookingWizard('${car.id}');" style="width: 100%; padding: 8px 12px; font-size: 11px;">Rezerv Et</button>
      </div>
    `;
    compareResultsGrid.appendChild(carCol);
  });
}


// ==========================================
// 9. DYNAMIC CAR CONFIGURATOR ENGINE
// ==========================================
let configColorPrice = 0;
let configRimsPrice = 0;
let configUnderglowPrice = 0;
let configLedPrice = 0;
const BASE_SPECTRE_PRICE = 212500;

function setupConfiguratorEvents() {
  if (!underglowSwitch || !ledBeamSwitch || !orderConfiguredCarBtn) return;

  // 1. Color Picker
  colorOptions.forEach(opt => {
    opt.addEventListener("click", () => {
      colorOptions.forEach(o => o.classList.remove("active"));
      opt.classList.add("active");

      const hexColor = opt.getAttribute("data-color");
      const name = opt.getAttribute("data-name");
      const price = parseInt(opt.getAttribute("data-price"));

      // Apply SVG paint swap
      if (cfgPaint) cfgPaint.setAttribute("fill", hexColor);
      
      // If neon underglow is active, matching underglow accent looks extremely premium!
      const neonActive = underglowSwitch.classList.contains("active");
      if (neonActive && cfgUnderglow) {
        cfgUnderglow.setAttribute("fill", hexColor);
      }

      // Rotate wheels briefly on color click for cool tactile feedback
      const currentRot = Math.random() * 360;
      if (cfgFrontWheel) cfgFrontWheel.style.transform = `rotate(${currentRot}deg)`;
      if (cfgRearWheel) cfgRearWheel.style.transform = `rotate(${currentRot}deg)`;

      colorNameLabel.innerText = name;
      configColorPrice = price;
      updateConfiguratorPrice();
    });
  });

  // 2. Rims Picker
  rimOptions.forEach(opt => {
    opt.addEventListener("click", () => {
      rimOptions.forEach(o => o.classList.remove("active"));
      opt.classList.add("active");

      const rimType = opt.getAttribute("data-rim");
      const price = parseInt(opt.getAttribute("data-price"));

      // Swap SVG strokes/looks for forged rims
      if (rimType === "forged") {
        if (cfgFrontRim) cfgFrontRim.setAttribute("stroke", "#d4af37"); // Forged Gold styling
        if (cfgRearRim) cfgRearRim.setAttribute("stroke", "#d4af37");
      } else {
        if (cfgFrontRim) cfgFrontRim.setAttribute("stroke", "url(#chromeGrad)"); // Original chrome
        if (cfgRearRim) cfgRearRim.setAttribute("stroke", "url(#chromeGrad)");
      }

      configRimsPrice = price;
      updateConfiguratorPrice();
    });
  });

  // 3. Neon underglow switch
  underglowSwitch.addEventListener("click", () => {
    underglowSwitch.classList.toggle("active");
    const active = underglowSwitch.classList.contains("active");
    
    if (active) {
      const activeColor = document.querySelector(".color-option.active").getAttribute("data-color");
      cfgUnderglow.setAttribute("fill", activeColor);
      cfgUnderglow.style.opacity = "0.75";
      configUnderglowPrice = 1500;
    } else {
      cfgUnderglow.style.opacity = "0";
      configUnderglowPrice = 0;
    }
    updateConfiguratorPrice();
  });

  // 4. Lazer beam switch
  ledBeamSwitch.addEventListener("click", () => {
    ledBeamSwitch.classList.toggle("active");
    const active = ledBeamSwitch.classList.contains("active");
    
    if (active) {
      cfgHeadlightBeam.style.opacity = "0.45";
      cfgTaillightBeam.style.opacity = "0.4";
      configLedPrice = 2800;
    } else {
      cfgHeadlightBeam.style.opacity = "0";
      cfgTaillightBeam.style.opacity = "0";
      configLedPrice = 0;
    }
    updateConfiguratorPrice();
  });

  // 5. Configurator Order Trigger
  orderConfiguredCarBtn.addEventListener("click", () => {
    const activeColorName = document.querySelector(".color-option.active").getAttribute("data-name");
    const activeRimName = document.querySelector(".rim-option.active h5").innerText;
    
    const notes = `Özəlləşdirilmiş KAI Spectre (Rəng: ${activeColorName}, Disk: ${activeRimName}, Neon: ${underglowSwitch.classList.contains("active") ? "Hə" : "Yox"}, Lazer: ${ledBeamSwitch.classList.contains("active") ? "Hə" : "Yox"}) - Cəmi: ${configuratorTotalPrice.innerText}`;
    
    openBookingWizard("spectre", notes);
  });
}

function updateConfiguratorPrice() {
  const total = BASE_SPECTRE_PRICE + configColorPrice + configRimsPrice + configUnderglowPrice + configLedPrice;
  
  // Rolling number counter animation for premium feel
  animatePriceRolling(configuratorTotalPrice, total);
}

function animatePriceRolling(element, finalValue) {
  const currentStr = element.innerText.replace(/[^0-9]/g, "");
  const startValue = parseInt(currentStr) || BASE_SPECTRE_PRICE;
  const duration = 500; // ms
  const startTime = performance.now();

  function updateCount(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // EaseOutCubic
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const currVal = Math.floor(startValue + (finalValue - startValue) * easeProgress);

    element.innerText = currVal.toLocaleString("az-AZ") + " ₼";

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    }
  }
  requestAnimationFrame(updateCount);
}


// ==========================================
// 10. USED CAR VALUATOR (AI PRICE MOCK)
// ==========================================

function handleCarValuation(e) {
  e.preventDefault();

  const brand = document.getElementById("valBrand").value.trim();
  const model = document.getElementById("valModel").value.trim();
  const year = parseInt(document.getElementById("valYear").value);
  const mileage = parseInt(document.getElementById("valMileage").value);
  const condition = document.getElementById("valCondition").value;

  // Show live scanner delay
  valuatorPlaceholder.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; gap: 24px;">
      <i data-lucide="cpu" class="neon-glow" style="width: 55px; height: 55px; color: var(--accent-primary); animation: rotateGlow 2s infinite linear;"></i>
      <h3>Süni İntellekt Qiymətləndirir...</h3>
      <p style="max-width: 320px;">Avtomobilinizin bazar amortizasiyası və qəza databazası araşdırılır. Zəhmət olmasa gözləyin.</p>
      <div style="width: 200px; height: 6px; background: var(--bg-tertiary); border-radius: var(--radius-full); overflow: hidden; border: 1px solid var(--border-light);">
        <div style="width: 100%; height: 100%; background: var(--gradient-accent); animation: valScanning 1.5s infinite ease-in-out;"></div>
      </div>
    </div>
  `;
  
  // Custom scanner animation CSS injection
  if (!document.getElementById("val-scan-style")) {
    const style = document.createElement("style");
    style.id = "val-scan-style";
    style.innerHTML = `
      @keyframes rotateGlow { 100% { transform: rotate(360deg); } }
      @keyframes valScanning { 
        0% { transform: translateX(-100%); } 
        50% { transform: translateX(100%); } 
        100% { transform: translateX(-100%); } 
      }
    `;
    document.head.appendChild(style);
  }

  lucide.createIcons();

  setTimeout(() => {
    // Valuation algorithm logic
    let basePrice = 60000; // Mock standard baseline
    
    // Brand/Year weight
    const currentYear = 2026;
    const age = Math.max(0, currentYear - year);
    
    // Basic deprecation model: -8% value per year
    let yearDeprec = basePrice * (1 - Math.pow(0.92, age));
    let marketAvgValue = Math.max(10000, basePrice - yearDeprec);

    // Mileage deduction: -0.05 ₼ per km
    let mileageDeduction = mileage * 0.08;
    marketAvgValue = Math.max(8000, marketAvgValue - mileageDeduction);

    // Condition adjustment
    let conditionDeductRate = 0;
    if (condition === "good") conditionDeductRate = 0.08;
    if (condition === "fair") conditionDeductRate = 0.22;
    if (condition === "damaged") conditionDeductRate = 0.45;

    const conditionLoss = marketAvgValue * conditionDeductRate;
    const finalValuation = Math.floor(Math.max(4000, marketAvgValue - conditionLoss));

    // Fill results in DOM
    valuationAmount.innerText = finalValuation.toLocaleString("az-AZ") + " ₼";
    valMarketAvg.innerText = Math.floor(marketAvgValue).toLocaleString("az-AZ") + " ₼";
    valConditionAdjust.innerText = conditionLoss > 0 ? `-${Math.floor(conditionLoss).toLocaleString("az-AZ")} ₼` : "0 ₼";
    valFinalOffer.innerText = finalValuation.toLocaleString("az-AZ") + " ₼";

    // Setup action
    tradeInApplyBtn.onclick = () => {
      closeAllPanels();
      const barterNotes = `Barter Təklifi: Satılan avtomobil: ${year} ${brand} ${model} (${mileage} km, Vəziyyət: ${condition}) - Dəyəri: ${finalValuation.toLocaleString("az-AZ")} ₼`;
      openBookingWizard("spectre", barterNotes);
    };

    // Swap view
    valuatorPlaceholder.style.display = "none";
    valuatorResults.style.display = "flex";
  }, 1800);
}


// ==========================================
// 11. MULTI-STEP TEST DRIVE BOOKING WIZARD
// ==========================================
let wizardStepIndex = 1;
let selectedWizardCarId = "";
let customWizardNotes = "";

window.openBookingWizard = function(carId, notes = "") {
  selectedWizardCarId = carId || CARS_DATA[0].id;
  customWizardNotes = notes;
  
  wizardStepIndex = 1;
  updateWizardUI();

  // Populate Step 1 Car selection list
  bookingCarPickerGrid.innerHTML = "";
  CARS_DATA.forEach(car => {
    const isSelected = car.id === selectedWizardCarId;
    const card = document.createElement("div");
    card.className = `booking-car-card ${isSelected ? "selected" : ""}`;
    card.addEventListener("click", () => {
      document.querySelectorAll(".booking-car-card").forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      selectedWizardCarId = car.id;
    });

    card.innerHTML = `
      <img class="booking-car-img" src="${car.image}" alt="${car.name}">
      <div class="booking-car-name">
        <h4>${car.name}</h4>
        <p>${car.price.toLocaleString("az-AZ")} ₼-dan</p>
      </div>
    `;
    bookingCarPickerGrid.appendChild(card);
  });

  // Prefill dates with tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateInput = document.getElementById("bookDate");
  if (dateInput) {
    dateInput.min = tomorrow.toISOString().split("T")[0];
    dateInput.value = tomorrow.toISOString().split("T")[0];
  }

  bookingWizardModal.classList.add("open");
  toggleBackdrop(true);
};

function updateWizardUI() {
  // Update wizard progress indicators
  wizardProgress.style.width = ((wizardStepIndex - 1) / 2) * 100 + "%";

  wizardSteps.forEach((step, idx) => {
    const sNum = idx + 1;
    step.className = "wizard-step";
    if (sNum < wizardStepIndex) {
      step.classList.add("completed");
    } else if (sNum === wizardStepIndex) {
      step.classList.add("active");
    }
  });

  // Switch panels visibility
  wizardPanels.forEach((panel, idx) => {
    const pNum = idx + 1;
    if (pNum === wizardStepIndex) {
      panel.classList.add("active");
    } else {
      panel.classList.remove("active");
    }
  });

  // Adjust Navigation Buttons
  if (wizardStepIndex === 1) {
    wizardPrevBtn.style.visibility = "hidden";
    wizardNextBtn.innerHTML = `İrəli <i data-lucide="arrow-right"></i>`;
  } else if (wizardStepIndex === 2) {
    wizardPrevBtn.style.visibility = "visible";
    wizardNextBtn.innerHTML = `Bileti Al <i data-lucide="ticket"></i>`;
  } else if (wizardStepIndex === 3) {
    wizardPrevBtn.style.visibility = "hidden";
    wizardNextBtn.innerHTML = `Bağla <i data-lucide="check"></i>`;
  }

  lucide.createIcons();
}

function setupBookingWizardEvents() {
  wizardPrevBtn.addEventListener("click", () => {
    if (wizardStepIndex > 1) {
      wizardStepIndex--;
      updateWizardUI();
    }
  });

  wizardNextBtn.addEventListener("click", () => {
    if (wizardStepIndex === 1) {
      if (!selectedWizardCarId) {
        alert("Zəhmət olmasa, avtomobil seçin.");
        return;
      }
      wizardStepIndex++;
      updateWizardUI();
    } else if (wizardStepIndex === 2) {
      // Validate inputs
      const name = document.getElementById("bookName").value.trim();
      const phone = document.getElementById("bookPhone").value.trim();
      const date = document.getElementById("bookDate").value;
      const time = document.getElementById("bookTime").value;

      if (!name || !phone || !date) {
        alert("Zəhmət olmasa bütün sahələri doldurun.");
        return;
      }

      // Generate success reservation booking ticket
      const ticketRef = `KAI-${Math.floor(1000 + Math.random() * 9000)}-${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`;
      const car = CARS_DATA.find(c => c.id === selectedWizardCarId);
      
      // Save booking in state and storage
      const newBooking = {
        ref: ticketRef,
        carId: selectedWizardCarId,
        carName: car.name,
        carImg: car.image,
        name: name,
        phone: phone,
        date: date,
        time: time,
        notes: customWizardNotes
      };

      bookings.push(newBooking);
      localStorage.setItem("kai_bookings", JSON.stringify(bookings));
      updateBadges();
      renderBookingsDrawer();

      // Render Virtual Pass Ticket SVG & Details
      bookingTicket.innerHTML = `
        <div class="ticket-header">
          <!-- Small ticket logo -->
          <svg class="ticket-logo" viewBox="0 0 500 500" style="color: var(--accent-primary);">
            <g fill="currentColor">
              <path d="M 60 120 L 110 120 L 110 290 L 60 290 Z" />
              <path d="M 110 205 L 210 120 L 275 120 L 160 215 L 110 205 Z" />
              <path d="M 150 205 L 265 290 L 200 290 L 110 220 L 110 205 Z" />
              <path d="M 270 120 L 335 120 L 400 290 L 345 290 L 302.5 175 L 260 290 L 210 290 L 270 120 Z" />
              <path d="M 410 120 L 460 120 L 460 290 L 410 290 Z" />
            </g>
          </svg>
          <h3>TEST SÜRÜŞÜ BİLETİ</h3>
        </div>

        <div class="ticket-details">
          <div class="ticket-row">
            <span class="ticket-label">Müştəri:</span>
            <span class="ticket-value">${name}</span>
          </div>
          <div class="ticket-row">
            <span class="ticket-label">Avtomobil:</span>
            <span class="ticket-value" style="color: var(--accent-primary);">${car.name}</span>
          </div>
          <div class="ticket-row">
            <span class="ticket-label">Tarix:</span>
            <span class="ticket-value">${date}</span>
          </div>
          <div class="ticket-row">
            <span class="ticket-label">Saat:</span>
            <span class="ticket-value">${time}</span>
          </div>
          ${customWizardNotes ? `
          <div class="ticket-row" style="flex-direction: column; gap: 4px; padding-top: 8px; border-top: 1px solid var(--border-light);">
            <span class="ticket-label">Qeyd/İstəklər:</span>
            <span class="ticket-value" style="font-size: 11px; color: var(--text-muted); font-weight: 500;">${customWizardNotes}</span>
          </div>
          ` : ""}
        </div>

        <div class="ticket-footer">
          <!-- Cyberpunk Mock QR Vector code representation -->
          <div class="ticket-qr">
            <svg viewBox="0 0 100 100" style="width: 100%; height: 100%;">
              <rect x="0" y="0" width="100" height="100" fill="#fff"/>
              <rect x="10" y="10" width="20" height="20" fill="#000"/>
              <rect x="15" y="15" width="10" height="10" fill="#fff"/>
              <rect x="70" y="10" width="20" height="20" fill="#000"/>
              <rect x="75" y="15" width="10" height="10" fill="#fff"/>
              <rect x="10" y="70" width="20" height="20" fill="#000"/>
              <rect x="15" y="75" width="10" height="10" fill="#fff"/>
              <rect x="40" y="40" width="20" height="20" fill="#000"/>
              <rect x="45" y="45" width="10" height="10" fill="#fff"/>
              <!-- Custom messy bit clusters -->
              <rect x="40" y="10" width="10" height="10" fill="#000"/>
              <rect x="50" y="25" width="10" height="15" fill="#000"/>
              <rect x="15" y="45" width="15" height="10" fill="#000"/>
              <rect x="75" y="40" width="15" height="15" fill="#000"/>
              <rect x="45" y="75" width="20" height="10" fill="#000"/>
              <rect x="75" y="75" width="10" height="15" fill="#000"/>
            </svg>
          </div>
          <div class="ticket-status-block">
            <div class="ticket-ref">${ticketRef}</div>
            <div class="ticket-status">Təsdiqləndi</div>
          </div>
        </div>
      `;

      wizardStepIndex++;
      updateWizardUI();
    } else if (wizardStepIndex === 3) {
      // Final wizard close
      closeAllPanels();
      
      // Clean form fields
      document.getElementById("bookName").value = "";
      document.getElementById("bookPhone").value = "";
      customWizardNotes = "";
    }
  });
}

function renderBookingsDrawer() {
  bookingsPanelContent.innerHTML = "";

  if (bookings.length === 0) {
    bookingsPanelContent.innerHTML = `
      <div class="panel-empty-state">
        <i data-lucide="calendar"></i>
        <h3>Aktiv Rezervasiyanız Yoxdur</h3>
        <p>Hər hansı bir premium modeli yoxlamaq üçün test sürüşü biletini kataloqdan rezervasiya edin.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  const list = document.createElement("div");
  list.className = "panel-car-list";

  bookings.forEach((bk, idx) => {
    const item = document.createElement("div");
    item.className = "panel-car-item";
    item.innerHTML = `
      <img class="panel-car-img" src="${bk.carImg}" alt="${bk.carName}">
      <div class="panel-car-info">
        <h4>${bk.carName}</h4>
        <p style="color: var(--text-main); font-size: 13px; font-weight: 500;"><i data-lucide="clock" style="width: 12px; height: 12px; display: inline; vertical-align: middle; margin-right: 4px;"></i> ${bk.date} | ${bk.time}</p>
        <span style="font-size: 10px; color: var(--accent-green); font-weight: 800; text-transform: uppercase;">Kod: ${bk.ref}</span>
      </div>
      <button class="panel-car-item-remove" onclick="removeBooking(${idx}, event)" title="İmtina et">
        <i data-lucide="x-circle"></i>
      </button>
    `;
    list.appendChild(item);
  });

  bookingsPanelContent.appendChild(list);
  lucide.createIcons();
}

window.removeBooking = function(index, event) {
  if (event) event.stopPropagation();

  if (confirm("Bu test sürüşü rezervasiyasından imtina etmək istədiyinizə əminsiniz?")) {
    bookings.splice(index, 1);
    localStorage.setItem("kai_bookings", JSON.stringify(bookings));
    updateBadges();
    renderBookingsDrawer();
  }
};


// ==========================================
// 12. FAQ SMOOTH ACCORDION TRANSITION
// ==========================================
const faqHeaders = document.querySelectorAll(".faq-header");
faqHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const body = item.querySelector(".faq-body");
    const isActive = item.classList.contains("active");

    // Close all other FAQ items first
    document.querySelectorAll(".faq-item.active").forEach(activeItem => {
      if (activeItem !== item) {
        activeItem.classList.remove("active");
        activeItem.querySelector(".faq-body").style.maxHeight = "0";
      }
    });

    item.classList.toggle("active");

    if (!isActive) {
      body.style.maxHeight = body.scrollHeight + "px";
    } else {
      body.style.maxHeight = "0";
    }
  });
});
