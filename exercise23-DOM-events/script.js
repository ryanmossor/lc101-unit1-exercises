function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener("click", () =>  {
        paragraph.innerHTML = "Houston, we have liftoff!";
    });

    missionAbort.addEventListener("mouseover", () => {
        missionAbort.style.backgroundColor = "red";
        missionAbort.style.color = "white";
    });

    missionAbort.addEventListener("mouseout", () => {
        missionAbort.style.backgroundColor = "";
        missionAbort.style.color = "";

    });

    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "green";
        button.style.color = "white";
    });

    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "";
        button.style.color = "";

    });

    missionAbort.addEventListener("click", () => {
        let response = confirm("Are you sure you want to abort the mission?");
        if (response === true) {
            paragraph.innerHTML = "Mission aborted! Space shuttle returning home.";
        }
    });
}

window.addEventListener("load", init);