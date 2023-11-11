document.getElementById("goButton").addEventListener("click", function () {
    var selectedMechanic = document.getElementById("mechanicDropdown").value;
    var selectedStation = document.getElementById("stationDropdown").value;
    var selectedLinia = document.getElementById("liniaDropdown").value;

    selectedMechanic = selectedMechanic.toUpperCase().replace(" ", "_");
    selectedStation = selectedStation.toUpperCase().replace(" ", "_");

    var baseRedirectURL = "";

    if (selectedLinia === "A") {
        baseRedirectURL = "https://web.miniextensions.com/c9PrY0xXNNhsDJQQeLCL?preffill_Mechanic=" + selectedMechanic;
    } else if (selectedLinia === "D") {
        baseRedirectURL = "https://web.miniextensions.com/Bwk6PtCv1a4zbRONadUU?prefill_Mechanic=" + selectedMechanic;
    }

    var redirectionURLs = {
        "A1": baseRedirectURL + "&prefill_Station=A1",
        "A2": baseRedirectURL + "&prefill_Station=A2",
        "A3": baseRedirectURL + "&prefill_Station=A3",
        "A4": baseRedirectURL + "&prefill_Station=A4",
        "A5": baseRedirectURL + "&prefill_Station=A5",
        "A6": baseRedirectURL + "&prefill_Station=A6",
        "D0": baseRedirectURL + "&prefill_Station=D0",
        "D1": baseRedirectURL + "&prefill_Station=D1",
        "D2": baseRedirectURL + "&prefill_Station=D2",
        "D3": baseRedirectURL + "&prefill_Station=D3",
        "D4": baseRedirectURL + "&prefill_Station=D4"
    };

    var selectedRedirectionURL = redirectionURLs[selectedLinia + selectedStation];

    if (selectedRedirectionURL) {
        window.location.href = selectedRedirectionURL;
    } else {
        alert("Please select both a mechanic, a line, and a station before clicking Go.");
    }
});
