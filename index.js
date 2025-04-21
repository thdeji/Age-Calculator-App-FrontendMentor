document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    //declaring variables
    const labelDay = document.querySelector(".label-day");
    const labelMonth = document.querySelector(".label-month");
    const labelYear = document.querySelector(".label-year");
    const dayInputBox = document.getElementById("day");
    const monthInputBox = document.getElementById("month");
    const yearInputBox = document.getElementById("year");
    const errorInvalidYear = document.querySelector(".error-invalid-year");
    const errorInvalidMonth = document.querySelector(".error-invalid-month");
    const errorInvalidDay = document.querySelector(".error-invalid-day");
    const errorMessageDay = document.querySelector(".error-message-day");
    const errorMessageMonth = document.querySelector(".error-message-month");
    const errorMessageYear = document.querySelector(".error-message-year");

    //get input values
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    //validates inputs
    if (day > 31) {
      errorInvalidDay.classList.add("show");
      labelDay.classList.add("error");
      dayInputBox.classList.add("error");
    } else {
      errorInvalidDay.classList.remove("show");
      labelDay.classList.remove("error");
      dayInputBox.classList.remove("error");
    }
    if (month > 12) {
      errorInvalidMonth.classList.add("show");
      labelMonth.classList.add("error");
      monthInputBox.classList.add("error");
    } else {
      errorInvalidMonth.classList.remove("show");
      labelMonth.classList.remove("error");
      monthInputBox.classList.remove("error");
      console.log("when man go buy BUMBLE B"); // to debug
    }
    if (year > new Date().getFullYear()) {
      errorInvalidYear.classList.add("show");
      labelYear.classList.add("error");
      yearInputBox.classList.add("error");
    } else {
      errorInvalidYear.classList.remove("show");
      labelYear.classList.remove("error");
      yearInputBox.classList.remove("error");
    }
    if (isNaN(day)) {
      errorMessageDay.classList.add("show");
      labelDay.classList.add("error");
      dayInputBox.classList.add("error");
    } else {
      errorMessageDay.classList.remove("show");
      labelDay.classList.remove("error");
      dayInputBox.classList.remove("error");
    }
    if (isNaN(month)) {
      errorMessageMonth.classList.add("show");
      labelMonth.classList.add("error");
      monthInputBox.classList.add("error");
    } else {
      errorMessageMonth.classList.remove("show");
      labelMonth.classList.remove("error");
      monthInputBox.classList.remove("error");
    }
    if (isNaN(year)) {
      errorMessageYear.classList.add("show");
      labelYear.classList.add("error");
      yearInputBox.classList.add("error");
    } else {
      errorMessageYear.classList.remove("show");
      labelYear.classList.remove("error");
      yearInputBox.classList.remove("error");
    }
    // To calculate age
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      ageDays += lastMonth.getDate();
    }

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    //display result
    document.getElementById("yearsOutput").textContent = ageYears;
    document.getElementById("monthsOutput").textcontent = ageMonths;
    document.getElementById("daysOutput").textContent = ageDays;

    if (isNaN(ageYears)) {
      document.getElementById("yearsOutput").textContent = 0;
    }
    if (isNaN(ageMonths)) {
      document.getElementById("monthsOutput").textcontent = 0;
    }
    if (isNaN(ageDays)) {
      document.getElementById("daysOutput").textContent = 0;
    }
    //END by dejiXv
  });
});
