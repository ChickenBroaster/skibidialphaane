function revealMessage() {
    const message = document.getElementById("special-message");
    message.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
    const achievement = document.getElementById("achievement");
    
    // Mostrar el logro con un pequeño retraso
    setTimeout(() => {
        achievement.classList.add("show");
    }, 1000);

    // Ocultar el logro después de unos segundos
    setTimeout(() => {
        achievement.classList.remove("show");
    }, 5000);
});
