document.querySelectorAll(".select").forEach((select) => {
  const trigger = select.querySelector(".select__trigger");
  const options = select.querySelectorAll(".select__option");

  trigger.addEventListener("click", () => {
    select.classList.toggle("select--open");
  });

  const initialValue = trigger.value;
  if (initialValue) {
    const selectedOption = Array.from(options).find(
      (option) => option.getAttribute("data-value") === initialValue
    );

    if (selectedOption) {
      selectedOption.classList.add("select__option--selected");
    }
  }

  options.forEach((option) => {
    option.addEventListener("click", () => {
      select.querySelectorAll(".select__option--selected").forEach((item) => {
        item.classList.remove("select__option--selected");
      });

      const value = option.getAttribute("data-value");
      trigger.value = value;

      option.classList.add("select__option--selected");
      select.classList.remove("select--open");
    });
  });
});

window.addEventListener("click", (e) => {
  document.querySelectorAll(".select").forEach((select) => {
    if (!select.contains(e.target)) {
      select.classList.remove("select--open");
    }
  });
});
