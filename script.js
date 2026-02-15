// 1. Budget UI
const slider = document.getElementById("budgetSlider");
slider.addEventListener("input", (e) => { 
    document.getElementById("budgetValue").innerText = "₹" + e.target.value; 
});

// 2. Login Logic with Name Support
function handleLogin() {
    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;
    
    if(!email.includes('@') || email.length < 5) {
        return alert("Please enter a valid email address! 📧");
    }

    const displayName = name ? name : email.split('@')[0];
    bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
    document.getElementById("navLoginBtn").innerText = "Hi, " + displayName;
    alert("Vibe check passed! Welcome, " + displayName + " ✨");
}

// 3. Dynamic Packages with Vibe
function showPackages() {
    const to = document.getElementById("toLoc").value;
    if(!to) return alert("Where are we going? Select a destination! 📍");

    const list = document.getElementById("packageList");
    document.getElementById("packages").classList.remove("d-none");

    const pkgs = [
        { title: `Royal ${to} Heritage`, price: "₹34,999", class: "badge-luxury", label: "LUXURY" },
        { title: `Solo ${to} Explorer`, price: "₹14,499", class: "badge-solo", label: "SOLO" },
        { title: `${to} Family Vibe`, price: "₹24,999", class: "badge-family", label: "FAMILY" }
    ];

    list.innerHTML = pkgs.map(p => `
        <div class="col-md-4">
            <div class="card pkg-card p-4">
                <span class="badge ${p.class} w-50 mb-3">${p.label}</span>
                <h5 class="fw-bold">${p.title}</h5>
                <p class="price-tag mt-2">${p.price}</p>
                <button class="btn btn-dark w-100 rounded-pill mt-3" onclick="triggerPayment()">Book Now</button>
            </div>
        </div>
    `).join('');

    window.scrollTo({ top: document.getElementById("packages").offsetTop - 100, behavior: 'smooth' });
}

function triggerPayment() {
    const payModal = new bootstrap.Modal(document.getElementById('paymentModal'));
    payModal.show();
}

function finalPay(method) {
    alert(`Processing payment via ${method}... Please do not refresh. ⏳`);
    setTimeout(() => {
        alert("Payment Successful! Your ticket to adventure is booked. Check your email! ✈️🎫");
        bootstrap.Modal.getInstance(document.getElementById('paymentModal')).hide();
    }, 2000);
}

function confirmBooking() {
    const to = document.getElementById("toLoc").value;
    alert(`Checking the best ${to || 'travel'} vibes for your budget... 🚀`);
}
