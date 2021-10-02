function validateSubmission (event) {
    let windRatingInput = document.querySelectorAll("input[name=windRating]");
    let testNameInput = document.getElementById("testName");
    let testDateInput = document.getElementById("testDate");
    let rocketTypeInput = document.getElementById("rocketType");
    let boosterCountInput = document.getElementById("boosterCount");
    let validStatus = false;
    
    for (let j = 0; j < windRatingInput.length; j++) {
        if (windRatingInput[j].checked === true) {
            validStatus = true;
        }
    }

    if (testNameInput.value === '' || testNameInput.value == null) {
        validStatus = false;
    } else if (testDateInput.value === '' || testDateInput.value == null) {
        validStatus = false;
    } else if (rocketTypeInput.value === '' || rocketTypeInput.value == null) {
        validStatus = false;
    } else if (boosterCountInput === '' || boosterCountInput.value == null) {
        validStatus = false;
    }

    if (validStatus === false) {
        alert("All fields are required!");
        event.preventDefault();
    }
}

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", validateSubmission);
});