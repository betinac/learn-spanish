/* Expand and collapse FAQs */
function toggleFAQ(element) {
    if (!element) return;

    let answer = element.nextElementSibling;

    if (!answer) return;

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

document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll(".faq-questio span");
  
    faqQuestions.forEach(question => {
        question.addEventListener("click", function () {
        toggleFAQ(this);
        });
    });
});
  