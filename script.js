// 1. Budget Label Fix
const slider = document.getElementById("budgetSlider");
slider.addEventListener("input", (e) => { 
    document.getElementById("budgetValue").innerText = "₹" + e.target.value; 
});

// 2. Login Logic
function handleLogin() {
    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;
    if(!email.includes('@')) return alert("Enter a valid Gmail/Email! 📧");

    bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
    document.getElementById("navLoginBtn").innerText = "Hi, " + (name || email.split('@')[0]);
}

// 3. Distance & Price Logic (Realistic)
function showPackages() {
    const from = document.getElementById("fromLoc").value;
    const to = document.getElementById("toLoc").value;

    if(!to || !from) return alert("Select both locations!");
    if(from === to) return alert("Source and Destination cannot be the same! ❌");

    // Realistic pricing based on distance (Simplified for demo)
    let basePrice = (from === "Mumbai" && to === "Delhi") ? 45000 : 25000;
    if (to === "Goa" && from !== "Goa") basePrice += 10000;

    const list = document.getElementById("packageList");
    document.getElementById("packages").classList.remove("d-none");

    list.innerHTML = `
        <div class="col-md-4">
            <div class="card pkg-card p-4">
                <span class="badge badge-gold w-50 mb-3">LUXURY</span>
                <h5 class="fw-bold">Premium ${to} Stay</h5>
                <h3 class="text-primary fw-bold">₹${basePrice}</h3>
                <button class="btn btn-dark w-100 rounded-pill mt-3" onclick="openPaymentSelection()">Book Slot</button>
            </div>
        </div>
    `;
    window.scrollTo({ top: document.getElementById("packages").offsetTop - 80, behavior: 'smooth' });
}

// 4. Detailed Payment Flow (The Real Deal)
function openPaymentSelection() {
    new bootstrap.Modal(document.getElementById('paymentModal')).show();
}

function showDetailsForm(type) {
    bootstrap.Modal.getInstance(document.getElementById('paymentModal')).hide();
    const detailModal = new bootstrap.Modal(document.getElementById('paymentDetailsModal'));
    const formContainer = document.getElementById("detailsForm");
    
    if(type === 'UPI') {
        document.getElementById("paymentTitle").innerText = "Enter UPI ID";
        formContainer.innerHTML = `<input type="text" class="form-control" placeholder="username@okhdfcbank">`;
    } else {
        document.getElementById("paymentTitle").innerText = "Card Details";
        formContainer.innerHTML = `
            <input type="text" class="form-control mb-2" placeholder="16 Digit Card Number">
            <div class="d-flex gap-2">
                <input type="text" class="form-control" placeholder="MM/YY">
                <input type="password" class="form-control" placeholder="CVV">
            </div>`;
    }
    detailModal.show();
}

function processFinalAnimation() {
    alert("Authenticating Transaction... Please do not close the window. 🛡️");
    setTimeout(() => {
        alert("Payment Verified! Your adventure is confirmed. 🎫 Check your email!");
        bootstrap.Modal.getInstance(document.getElementById('paymentDetailsModal')).hide();
    }, 2000);
}

function confirmAvailability() {
    alert(`Checking real-time slots for ${document.getElementById("toLoc").value}... 🚀`);
}
