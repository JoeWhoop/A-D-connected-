// JavaScript to handle button click and dropdown options
document.getElementById("goButton").addEventListener("click", function () {
    var selectedLinia = document.getElementById("liniaDropdown").value;

    // Object to store available options for Stacja and Znajdz siebie based on Linia
    var availableOptions = {
        "A": {
            stations: ["A1", "A2", "A3", "A4", "A5", "A6"],
            mechanics: ["A_Mechanic1", "A_Mechanic2", "A_Mechanic3"]
        },
        "D": {
            stations: ["D0", "D1", "D2", "D3", "D4"],
            mechanics: ["D_Mechanic1", "D_Mechanic2", "D_Mechanic3"]
        }
    };

    // Function to update dropdown options
    function updateDropdown(dropdownId, options) {
        var dropdown = document.getElementById(dropdownId);
        dropdown.innerHTML = ""; // Clear current options

        options.forEach(function (option) {
            var optionElement = document.createElement("option");
            optionElement.value = option;
            optionElement.text = option;
            dropdown.appendChild(optionElement);
        });
    }

    // Update Stacja and Znajdz siebie dropdowns based on selected Linia
    updateDropdown("stationDropdown", availableOptions[selectedLinia].stations);
    updateDropdown("mechanicDropdown", availableOptions[selectedLinia].mechanics);
});
