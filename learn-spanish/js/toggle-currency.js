/* Toggle currency */
function updatePrices(currency) {
    document.querySelectorAll(".regular-price").forEach((price) => {
        let amount = currency === "CAD" ? price.dataset.cad : price.dataset.usd;
        let symbol = currency === "CAD" ? "CAD" : "USD";
        price.innerHTML = `$${amount} ${symbol}`;
    });

    document.querySelectorAll(".discounted-price").forEach((price) => {
        let amount = currency === "CAD" ? price.dataset.cad : price.dataset.usd;
        let symbol = currency === "CAD" ? "CAD" : "USD";
        price.innerHTML = `$${amount} ${symbol}`;
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const cadBtn = document.getElementById("cad-btn");
    const usdBtn = document.getElementById("usd-btn");

    /* Default to CAD on page load */
    updatePrices("CAD");
    cadBtn.classList.add("active");

    cadBtn.addEventListener("click", function () {
        updatePrices("CAD");
        this.classList.add("active");
        usdBtn.classList.remove("active");
    });

    usdBtn.addEventListener("click", function () {
        updatePrices("USD");
        this.classList.add("active");
        cadBtn.classList.remove("active");
    });
    
    /* Toggle disclaimer visibility */
    document.querySelector('.toggle-disclaimer').addEventListener('click', function() {
        const disclaimer = document.querySelector('.disclaimer-content');
        disclaimer.style.display = disclaimer.style.display === 'none' ? 'block' : 'none';
    });
});
