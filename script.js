// Function to show packages after search
function showPackages() {
    const from = document.getElementById("fromLoc").value;
    const to = document.getElementById("toLoc").value;

    if (from && to) {
        // Pop up message
        alert("Searching for the best vibes from " + from + " to " + to + "... ✈️");
        
        // Remove the 'd-none' class to show the section
        setTimeout(() => {
            const pkgSection = document.getElementById("packages");
            pkgSection.classList.remove("d-none");
            
            // Scroll to the packages smoothly
            pkgSection.scrollIntoView({ behavior: 'smooth' });
        }, 1000);
    } else {
        alert("Please select your locations first! 📍");
    }
}

// Function to handle login (fake)
function closeLogin() {
    const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    modal.hide();
    alert("Login Successful! Welcome, Vaishnavi. 👑");
}
