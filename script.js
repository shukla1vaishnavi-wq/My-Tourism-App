// 1. Budget Slider Interaction
const budgetSlider = document.getElementById("budgetSlider");
const budgetValueText = document.getElementById("budgetValue");

budgetSlider.addEventListener("input", (e) => {
    budgetValueText.innerText = "₹" + e.target.value;
});

// 2. Login Button Alert
document.getElementById("loginBtn").onclick = function() {
    alert("Hi Vaishnavi! Opening the Login portal... 🔐");
};

// 3. Search Package Logic
function searchTrip() {
    const from = document.getElementById("fromLoc").value;
    const to = document.getElementById("toLoc").value;

    if (from === "" || to === "") {
        alert("Please select both 'From' and 'To' locations! 📍");
    } else {
        alert("Yay! Searching for the best vibes from " + from + " to " + to + "... ✈️");
    }
}

// 4. Date Logic: Disable Past Dates
const dateInput = document.getElementById("tripDate");
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

// 5. Check Availability Logic
function confirmBooking() {
    const selectedDate = dateInput.value;
    const currentBudget = budgetSlider.value;

    if (!selectedDate) {
        alert("Please pick a date for your adventure! 📅");
        return;
    }

    alert("Checking availability for " + selectedDate + " within ₹" + currentBudget + "...");
    
    // Fake loading effect
    setTimeout(() => {
        alert("Success! We found 3 Exclusive Packages for you. Check your Profile! 👑");
    }, 1500);
}

// 6. Navigation Active Effect
const navLinks = document.querySelectorAll('.nav-item');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});