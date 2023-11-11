document.getElementById("liniaDropdown").addEventListener("change", function () {
    var selectedLine = document.getElementById("liniaDropdown").value;
    var mechanicDropdown = document.getElementById("mechanicDropdown");

    // Clear existing options
    mechanicDropdown.innerHTML = "";

    // Mechanics for A line
    var mechanicsA = ["Adam Radzikowski", "Anton Pratasau", "Bartosz Płoszaj", "Dominik Chojnowski", "Maciej Chwil", "Szymon Niezgoda", "Szymon Staniszewski", "Wiktor Kaczkowski"];

    // Mechanics for D line
    var mechanicsD = ["Aleks Czarnecki", "Bartosz Kędra", "Hubert Jakubowski", "Kacper Wydra", "Łukasz Chojecki", "Mateusz Wiatr", "Stanislav Tymchenko", "Weronika Szałowska", "Sebastian Widuliński", "Łukasz Markowski", "Kacper Maciejczuk", "Maciej Stępniak"];

    // Populate mechanic dropdown based on the selected line
    var mechanics = (selectedLine === "A") ? mechanicsA : mechanicsD;

    mechanics.forEach(function (mechanic) {
        var option = document.createElement("option");
        option.value = mechanic.replace(" ", "_").toUpperCase();
        option.label = mechanic;
        mechanicDropdown.appendChild(option);
    });
});

document.getElementById("goButton").addEventListener("click", function () {
    var selectedMechanic = document.getElementById("mechanicDropdown").value;
    var selectedStation = document.getElementById("stationDropdown").value;

    selectedMechanic = selectedMechanic.toUpperCase().replace(" ", "_");
    selectedStation = selectedStation.toUpperCase().replace(" ", "_");

    var baseRedirectURL = (document.getElementById("liniaDropdown").value === "A")
        ? "https://web.miniextensions.com/c9PrY0xXNNhsDJQQeLCL?preffill_Mechanic="
        : "https://web.miniextensions.com/Bwk6PtCv1a4zbRONadUU?prefill_Mechanic=";

    var redirectionURL = baseRedirectURL + selectedMechanic + "&prefill_Station=" + selectedStation;

    if (selectedMechanic && selectedStation) {
        window.location.href = redirectionURL;
    } else {
        alert("Please select both a mechanic and a station before clicking Go.");
    }
});

// Function to populate "Znajdz siebie" dropdown based on the selected line
function populateMechanicDropdown(selectedLine) {
    var mechanicDropdown = document.getElementById("mechanicDropdown");
    var mechanics = [];

    // Mechanics for A line
    if (selectedLine === "A") {
        mechanics = ["Adam Radzikowski", "Anton Pratasau", "Bartosz Płoszaj", "Dominik Chojnowski", "Maciej Chwil", "Szymon Niezgoda", "Szymon Staniszewski", "Wiktor Kaczkowski"];
    }
    // Mechanics for D line
    else if (selectedLine === "D") {
        mechanics = ["Aleks Czarnecki", "Bartosz Kędra", "Hubert Jakubowski", "Kacper Wydra", "Łukasz Chojecki", "Mateusz Wiatr", "Stanislav Tymchenko", "Weronika Szałowska", "Sebastian Widuliński", "Łukasz Markowski", "Kacper Maciejczuk", "Maciej Stępniak"];
    }

    // Clear existing options
    mechanicDropdown.innerHTML = "";

    // Populate mechanic dropdown
    mechanics.forEach(function (mechanic) {
        var option = document.createElement("option");
        option.value = mechanic.replace(" ", "_").toUpperCase();
        option.label = mechanic;
        mechanicDropdown.appendChild(option);
    });
}

// Initial population of "Znajdz siebie" dropdown
populateMechanicDropdown(document.getElementById("liniaDropdown").value);

// Update the "Znajdz siebie" dropdown when the line changes
document.getElementById("liniaDropdown").addEventListener("change", function () {
    populateMechanicDropdown(document.getElementById("liniaDropdown").value);
});
