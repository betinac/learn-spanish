/* Expand and collapse FAQs */
function toggleFAQ(element) {
    let answer = element.nextElementSibling;
    let allAnswers = document.querySelectorAll(".faq-answer");
    let allQuestions = document.querySelectorAll(".faq-question span");
    
    allAnswers.forEach(ans => {
        if (ans !== answer) ans.style.display = "none";
    });
    allQuestions.forEach(icon => icon.innerHTML = "+");
    
    if (answer.style.display === "block") {
        answer.style.display = "none";
        element.querySelector("span").innerHTML = "+";
    } else {
        answer.style.display = "block";
        element.querySelector("span").innerHTML = "-";
    }
}
document.addEventListener("DOMContentLoaded", toggleFAQ )
