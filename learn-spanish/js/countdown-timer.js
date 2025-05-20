const newDeadline = new Date("May 30, 2025 23:59:59").getTime();

function startCountdownTo(newDeadline) {
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    function updateDisplay(unitEl, newVal) {
        const top = unitEl.querySelector(".top");
        const bottom = unitEl.querySelector(".bottom");

        if (top.textContent !== newVal) {
            bottom.textContent = newVal;
            top.style.transform = "rotateX(90deg)";

            setTimeout(() => {
                top.textContent = newVal;
                top.style.transform = "rotateX(0deg)";
            }, 250);
        }
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = Math.max(0, Math.floor((newDeadline - now) / 1000)); // In seconds

    const days = String(Math.floor(distance / (3600 * 24))).padStart(2, '0');
    const hours = String(Math.floor((distance % (3600 * 24)) / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((distance % 3600) / 60)).padStart(2, '0');
    const seconds = String(distance % 60).padStart(2, '0');

    updateDisplay(daysEl, days);
    updateDisplay(hoursEl, hours);
    updateDisplay(minutesEl, minutes);
    updateDisplay(secondsEl, seconds);

    if (distance <= 0) {
        clearInterval(timerInterval);
        // Optional: Display a message or hide the timer
    }
}

updateCountdown(); // Initial call
    const timerInterval = setInterval(updateCountdown, 1000);
}

// Start the countdown
startCountdownTo(newDeadline);