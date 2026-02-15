// 1. Budget Interaction
const slider = document.getElementById("budgetSlider");
const valText = document.getElementById("budgetValue");
slider.addEventListener("input", (e) => { valText.innerText = "₹" + e.target.value; });

// 2. Date Logic
const dateInput = document.getElementById("tripDate");
dateInput.setAttribute('min', new Date().toISOString().split('T')[0]);

// 3. Login Logic
function handleLogin() {
    const email = document.getElementById("userEmail").value;
    if(email) {
        bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
        document.getElementById("navLoginBtn").innerText = "Hi, " + email.split('@')[0];
        alert("Login Successful! 👑");
    }
}

// 4. Dynamic Packages Logic
function showPackages() {
    const to = document.getElementById("toLoc").value;
    if(!to) return alert("Select destination!");

    const packageSection = document.getElementById("packages");
    const list = document.getElementById("packageList");
    
    // Changing packages based on destination
    let type = (to === "Goa") ? "Beach Party" : (to === "Manali") ? "Mountain Escape" : "City Heritage";
    
    list.innerHTML = `
        <div class="col-md-4"><div class="card p-3 shadow-sm"><h5>Luxury ${to} Trip</h5><h4 class="text-primary">₹45,000</h4><button class="btn btn-dark" onclick="alert('Booking confirmed!')">Book Now</button></div></div>
        <div class="col-md-4"><div class="card p-3 shadow-sm"><h5>Solo ${type}</h5><h4 class="text-primary">₹12,000</h4><button class="btn btn-dark" onclick="alert('Redirecting to Payment...')">Book Now</button></div></div>
        <div class="col-md-4"><div class="card p-3 shadow-sm"><h5>Family Vibe</h5><h4 class="text-primary">₹25,000</h4><button class="btn btn-dark" onclick="alert('Processing...')">Book Now</button></div></div>
    `;

    packageSection.classList.remove("d-none");
    packageSection.scrollIntoView({ behavior: 'smooth' });
}

function confirmBooking() {
    alert("Checking all " + document.getElementById("toLoc").value + " packages for you... ✈️");
}
