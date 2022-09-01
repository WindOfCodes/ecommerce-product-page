const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");
const productName = document.querySelector(".productName");
const price = document.querySelector(".price");
const basket = document.querySelector(".basket");
const emptyCart = document.querySelector(".CartContentEmpty");
const add = document.querySelector(".plus");
const substract = document.querySelector(".minus");
let quantity = document.querySelector(".number");
const addToBasket = document.querySelector(".add_btn");
const cart = document.querySelector(".cartBox");
const inBasket = document.querySelector(".inBasket");
const checkout = document.querySelector(".checkoutBtn");
const bigPhoto = document.querySelector(".photoBig");
const bigPhotoModal = document.querySelector(".b_p_modal");
const smallPhotos = document.querySelectorAll(".photo_small");
const smallPhotosModal = document.querySelectorAll(".photo_small_modal");
const smallImg = document.querySelectorAll(".photoImg");
const smallImgModal = document.querySelectorAll(".photoImgModal");
const img1 = document.querySelector(".photo1");
const modalImg1 = document.querySelector(".p1m");
const img2 = document.querySelector(".photo2");
const modalImg2 = document.querySelector(".p2m");
const img3 = document.querySelector(".photo3");
const modalImg3 = document.querySelector(".p3m");
const img4 = document.querySelector(".photo4");
const modalImg4 = document.querySelector(".p4m");
const modal = document.querySelector(".modal_section");
const closeModal = document.querySelector(".modal_close");
const prevBtn = document.querySelectorAll(".prev_btn");
const nextBtn = document.querySelectorAll(".next_btn");

let currentImgId = 1;
let currentMiniatureId = 1;
let productQuantity = 0;

prevBtn.forEach((pBtns) => {
  pBtns.addEventListener("click", function () {
    currentImgId--;
    currentMiniatureId--;
    if (currentImgId === 0 && currentMiniatureId === 0) {
      currentImgId = 4;
      currentMiniatureId = 4;
    }
    bigPhoto.src = `/images/image-product-${currentImgId}.jpg`;
    bigPhotoModal.src = `/images/image-product-${currentImgId}.jpg`;
    smallPhotos.forEach((phtS) => phtS.classList.remove("borderActive"));
    smallImg.forEach((images) => images.classList.remove("opacityActive"));
    smallPhotosModal[currentImgId - 1].classList.add("borderActive");
    smallPhotosModal[currentImgId - 1].style.background-color="w";
    smallImgModal[currentImgId - 1].classList.add("opacityActive");
  });
});

nextBtn.forEach((nBtns) => {
  nBtns.addEventListener("click", function () {
    currentImgId++;
    currentMiniatureId++;
    if (currentImgId === 5 && currentMiniatureId === 5) {
      currentImgId = 1;
      currentMiniatureId = 1;
    }
    bigPhoto.src = `/images/image-product-${currentImgId}.jpg`;
    bigPhotoModal.src = `/images/image-product-${currentImgId}.jpg`;
    smallPhotos.forEach((phtS) => phtS.classList.remove("borderActive"));
    smallImg.forEach((images) => images.classList.remove("opacityActive"));
    smallPhotosModal[currentImgId - 1].classList.add("borderActive");
    smallImgModal[currentImgId - 1].classList.add("opacityActive");
  });
});

smallPhotos.forEach((photoS) => {
  photoS.addEventListener("click", function () {
    smallPhotos.forEach((phtS) => phtS.classList.remove("borderActive"));
    this.classList.add("borderActive");
  });
});

smallImg.forEach((imgS) => {
  imgS.addEventListener("click", function () {
    smallImg.forEach((images) => images.classList.remove("opacityActive"));
    this.classList.add("opacityActive");
  });
});

img1.addEventListener("click", function () {
  bigPhoto.src = "/images/image-product-1.jpg";
  currentImgId = 1;
  currentMiniatureId = 1;
});
modalImg1.addEventListener("click", function () {
  bigPhotoModal.src = "/images/image-product-1.jpg";
  currentImgId = 1;
  currentMiniatureId = 1;
});

img2.addEventListener("click", function () {
  bigPhoto.src = "/images/image-product-2.jpg";
  currentImgId = 2;
  currentMiniatureId = 2;
});
modalImg2.addEventListener("click", function () {
  bigPhotoModal.src = "/images/image-product-2.jpg";
  currentImgId = 2;
  currentMiniatureId = 2;
});

img3.addEventListener("click", function () {
  bigPhoto.src = "/images/image-product-3.jpg";
  currentImgId = 3;
  currentMiniatureId = 3;
});
modalImg3.addEventListener("click", function () {
  bigPhotoModal.src = "/images/image-product-3.jpg";
  currentImgId = 3;
  currentMiniatureId = 3;
});

img4.addEventListener("click", function () {
  bigPhoto.src = "/images/image-product-4.jpg";
  currentImgId = 4;
  currentMiniatureId = 4;
});
modalImg4.addEventListener("click", function () {
  bigPhotoModal.src = "/images/image-product-4.jpg";
  currentImgId = 4;
  currentMiniatureId = 4;
});

bigPhoto.addEventListener("click", function () {
  bigPhotoModal.src = `./images/image-product-${currentImgId}.jpg`;
  modal.classList.add("visible");
});

closeModal.addEventListener("click", function () {
  modal.classList.remove("visible");
});

add.addEventListener("click", () => {
  quantity.innerHTML = ++productQuantity;
});

substract.addEventListener("click", () => {
  if (productQuantity == 0) {
    return;
  } else quantity.innerHTML = --productQuantity;
});

const addToCart = () => {
  if (quantity.innerHTML != 0 && cart.childNodes.length > 7) {
    return;
  }
  if (quantity.innerHTML != 0) {
    emptyCart.style.display = "none";
    checkout.style.display = "flex";

    const productInBasket = document.createElement("div");
    productInBasket.setAttribute("class", "itemInBasket");

    let itemImg = new Image();
    itemImg.src = "../images/image-product-1-thumbnail.jpg";
    productInBasket.appendChild(itemImg);
    itemImg.setAttribute("class", "itemImg");

    let itemInfo = document.createElement("div");
    productInBasket.appendChild(itemInfo);
    itemInfo.setAttribute("class", "itemInfo");

    let itemName = document.createElement("span");
    itemName.innerHTML = productName.textContent;
    itemName.setAttribute("class", "itemName");
    itemInfo.appendChild(itemName);

    let itemPrice = document.createElement("span");
    itemPrice.innerHTML = price.textContent;
    itemPrice.setAttribute("class", "productCash");
    itemInfo.appendChild(itemPrice);

    let multiplicationSymbol = document.createElement("span");
    multiplicationSymbol.textContent = "x";
    multiplicationSymbol.setAttribute("class", "productCash");
    itemInfo.appendChild(multiplicationSymbol);

    let itemsQuantity = document.createElement("span");
    itemsQuantity.innerHTML = quantity.textContent;
    itemsQuantity.setAttribute("class", "productCash");
    itemInfo.appendChild(itemsQuantity);

    let fullPrice = document.createElement("span");
    fullPrice.innerHTML =
      "$" + itemPrice.innerHTML.substring(1) * itemsQuantity.innerHTML;
    itemInfo.appendChild(fullPrice);
    fullPrice.setAttribute("class", "fullPrice");

    let binBtn = new Image();
    binBtn.src = "../images/icon-delete.svg";
    binBtn.setAttribute("class", "binButton");
    productInBasket.appendChild(binBtn);

    let btn = document.querySelector(".checkoutBtn");
    let parentDiv = btn.parentNode;
    parentDiv.insertBefore(productInBasket, btn);

    inBasket.innerHTML = quantity.innerHTML;
    inBasket.style.display = "block";
  }
  return;
};

addToBasket.addEventListener("click", addToCart);

cart.addEventListener("click", function (e) {
  const product = document.querySelector(".itemInBasket");
  const numberOfProducts = document.querySelectorAll(".itemInBasket").length;
  if (e.target.classList.contains("binButton") && numberOfProducts > 1) {
    product.parentNode.removeChild(product);
  }
  if (e.target.classList.contains("binButton")) {
    product.parentNode.removeChild(product);
    checkout.style.display = "none";
    emptyCart.style.display = "block";
    inBasket.style.display = "none";
  }
});

basket.addEventListener("click", function () {
  const cart = document.querySelector(".cartBox");
  if (cart.classList.contains("visible")) {
    cart.classList.remove("visible");
  } else cart.classList.add("visible");
});

const handleClick = () => {
  hamburger.classList.toggle("hamburger--active");
  nav.classList.toggle("navigation--active");
};

hamburger.addEventListener("click", handleClick);

// scroll disabled na nav--active w mobile
