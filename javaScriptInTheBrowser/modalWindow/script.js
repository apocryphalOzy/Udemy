"use strict";

//select modal class
const modal = document.querySelector(".modal");

//select overlay class
const overlay = document.querySelector(".overlay");

//select close modal class
const btnCloseModal = document.querySelector(".close-modal");

//select open modal class
const btnsOpenModal = document.querySelectorAll(".show-modal");

const toggleModal = function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

//for loop to show text content of show-modal class
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", toggleModal);
}

btnCloseModal.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    toggleModal();
  }
});
