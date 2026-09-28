/* =========================================
   INKJETIC-SCRIPT.JS
   ========================================= */

/* =========================================
   PRODUCT DATA
   ========================================= */

const products = [
  {id: 1, name: "Patch 1", category: "patches", img: "images/product-skull-crown.jpeg"},
  {id: 2, name: "Patch 2", category: "patches", img: "images/product-dark-emblem.jpeg"},
  {id: 3, name: "Patch 3", category: "patches", img: "images/product-chaos-logo.jpeg"},
  {id: 4, name: "Patch 4", category: "patches", img: "images/product-horns-skull.jpeg"},
  {id: 5, name: "Patch 5", category: "patches", img: "images/product-pentagram.jpeg"},
  {id: 6, name: "Patch 6", category: "patches", img: "images/product-sychnaut.jpeg"},
  {id: 7, name: "Patch 7", category: "patches", img: "images/product-raven-crest.jpeg"},
  {id: 8, name: "Cap 1", category: "caps", img: "images/product-classic-cap.jpeg"},
  {id: 9, name: "Cap 2", category: "caps", img: "images/product-snapback.jpeg"},
  {id: 10, name: "T-Shirt 1", category: "tshirts", img: "images/product-oversized-tee.jpeg"},
  {id: 11, name: "T-Shirt 2", category: "tshirts", img: "images/product-graphic-tee.jpeg"},
  {id: 12, name: "Ribbed Beanie", category: "beanies", img: "images/product-ribbed-beanie.jpeg"},
  {id: 13, name: "Skull Beanie", category: "beanies", img: "images/product-skull-beanie.jpeg"},
  {id: 14, name: "Keychain 1", category: "keychains", img: "images/product-keychain1.jpeg"},
  {id: 15, name: "Keychain 2", category: "keychains", img: "images/product-keychain2.jpeg"},
  {id: 16, name: "Patch 8", category: "patches", img: "images/product-new-patch-1.jpeg"},
  {id: 17, name: "Patch 9", category: "patches", img: "images/product-new-patch2.jpeg"},
  {id: 18, name: "Beanie 1", category: "beanies", img: "images/product-beanie-1.jpeg"},
  {id: 19,  name: "Beanie 2", category: "beanies", img: "images/product-beanie-2.jpeg"},
  { id: 20, name: "Beanie 3", category: "beanies", img: "images/product-beanie-3.jpeg"},
  {id: 21, name: "Beanie 4", category: "beanies", img: "images/product-beanie-4.jpeg"},
  {id: 22, name: "Beanie 5", category: "beanies", img: "images/product-beanie-5.jpeg"},
  {id: 23, name: "Beanie 6", category: "beanies", img: "images/product-beanie-6.jpeg"},
  {id: 24, name: "Cap 3", category: "caps", img: "images/product-cap.jpeg"},
  {id: 25, name: "Cap 4", category: "caps", img: "images/product-cap4.jpeg"},
  {id: 26, name: "Cap 5", category: "caps", img: "images/product-cap5.jpeg"},
  {id: 27, name: "Cap 6", category: "caps", img: "images/product-cap6.jpeg"},
  {id: 28, name: "Cap 7", category: "caps", img: "images/product-cap7.jpeg"},
  {id: 29, name: "T-Shirt 3", category: "tshirts", img: "images/product-t-shirt3.jpeg"},
  {id: 30, name: "T-Shirt 4", category: "tshirts", img: "images/product-t-shirt4.jpeg"},
  {id: 31, name: "T-Shirt 5", category: "tshirts", img: "images/product-t-shirt5.jpeg"},
  {id: 32, name: "T-Shirt 6", category: "tshirts", img: "images/product-t-shirt6.jpeg"},
  {id: 33, name: "Keychain 3", category: "keychains", img: "images/product-keychain3.jpeg"},
  {id: 34, name: "Keychain 4", category: "keychains", img: "images/product-keychain4.jpg"},
  {id: 35, name: "Keychain 5", category: "keychains",img: "images/product-keychain5.png"}
];
/* === STATE === */

let currentFilter = "patches";
let showAll = false;

const INITIAL_PRODUCT_COUNT = 6;


/*=== DOM READY === */

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  setupHeader();
  setupFilters();
  setupViewAll();
  setupCategoryAndFooterLinks();
});


/*=== HEADER / MOBILE MENU === */

function setupHeader() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");

  if (!hamburger || !mobileMenu || !overlay) {
    return;
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("open");
    overlay.classList.remove("open");
  }

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("open");
    overlay.classList.toggle("open");
  });

  overlay.addEventListener("click", closeMenu);

  mobileMenu.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      closeMenu();

      const filter = link.getAttribute("data-filter");

      if (filter) {
        applyFilter(filter);
      }
    });
  });
}


/*=== FILTERS === */

function setupFilters() {

  /* Category Explore Buttons */

  document.querySelectorAll(".btn-explore").forEach(btn => {
    btn.addEventListener("click", () => {

      const filter = btn.getAttribute("data-filter");

      applyFilter(filter);

      const shop = document.getElementById("shop");

      if (shop) {
        shop.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });


  /* Shop Filter Buttons */

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {

      const filter = btn.getAttribute("data-filter");

      applyFilter(filter);
    });
  });


  /* Header Category Links */

  document.querySelectorAll(".nav-link[data-filter]").forEach(link => {
    link.addEventListener("click", () => {

      const filter = link.getAttribute("data-filter");

      applyFilter(filter);
    });
  });
}


/*=== FOOTER CATEGORY LINKS === */

function setupCategoryAndFooterLinks() {

  document
    .querySelectorAll(".footer-col a[data-filter]")
    .forEach(link => {

      link.addEventListener("click", () => {

        const filter = link.getAttribute("data-filter");

        applyFilter(filter);
      });
    });
}


/*=== APPLY FILTER === */

function applyFilter(filter) {

  currentFilter = filter;
  showAll = true;

  document.querySelectorAll(".filter-btn").forEach(btn => {

    btn.classList.toggle(
      "active",
      btn.getAttribute("data-filter") === filter
    );
  });

  renderProducts();
}


/*=== RENDER PRODUCTS === */

function renderProducts() {

  const grid = document.getElementById("productsGrid");
  const noResults = document.getElementById("noResults");
  const viewAllBtn = document.getElementById("viewAllBtn");

  if (!grid || !noResults || !viewAllBtn) {
    return;
  }

  let list = products.filter(
    product =>
      currentFilter === "all" ||
      product.category === currentFilter
  );

  const fullLength = list.length;

  if (!showAll) {
    list = list.slice(0, INITIAL_PRODUCT_COUNT);
  }

  viewAllBtn.style.display =
    !showAll && fullLength > INITIAL_PRODUCT_COUNT
      ? "inline-block"
      : "none";

  grid.innerHTML = "";

  noResults.hidden = list.length !== 0;

  list.forEach(product => {

    const card = document.createElement("div");

    card.className = "product-card";

    card.innerHTML = `
      <div class="product-img-wrap">
        <img
          src="${product.img}"
          alt="${product.name}"
        >
      </div>
    `;

    grid.appendChild(card);
  });
}


/*=== VIEW ALL PRODUCTS === */

function setupViewAll() {

  const viewAllBtn = document.getElementById("viewAllBtn");

  if (!viewAllBtn) {
    return;
  }

  viewAllBtn.addEventListener("click", () => {

    showAll = true;

    renderProducts();

    const shop = document.getElementById("shop");

    if (shop) {
      shop.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
}