jQuery(document).ready(function($){
  const modal = document.getElementById("myModal");

  const openButton = document.getElementById("modal-open-button");

  const closeButton = document.getElementsByClassName("close")[0];

  $(".modal-open-button").on("click", function (event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    openModal();
  });

  openButton.onclick = function () {
    openModal();
  };

  closeButton.onclick = function () {
    closeModal();
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      closeModal();
    }
  };

  const nameInput = document.getElementById("sign-up-name-input");
  const emailInput = document.getElementById("sign-up-email-input");

  let checkValidity = false;

  function openModal() {
    modal.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
    checkValidity = false;
    nameInput.value = "";
    emailInput.value = "";
    nameInput.classList.remove("check-validity");
    emailInput.classList.remove("check-validity");
  }

  $(".sign-up-submit-button").on("click", function () {
    nameInput.classList.add("check-validity");
    emailInput.classList.add("check-validity");
    const name = nameInput.value;
    const email = emailInput.value;

    const data = {
      name,
      email,
      type: 1,
    };

    $.post("sign-up.php", data, function (d) {
      // closeModal();
    });
  });
});
