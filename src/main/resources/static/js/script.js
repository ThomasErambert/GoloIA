document.addEventListener("DOMContentLoaded", function () {

    // FORMULAIRE DE CONNEXION
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            document.getElementById("loginStatus").textContent =
                "Connexion non disponible pour le moment.";
        });
    }

    // ÉLÉMENTS DE L'ACCUEIL
    const hall = document.getElementById("hall");
    const office = document.getElementById("office");
    const knock = document.getElementById("knock");
    const backHall = document.getElementById("backHall");

    if (!hall || !office) {
        return;
    }

    // ENTRER DANS LA BIBLIOTHÈQUE
    knock.addEventListener("click", function () {

        const status = document.getElementById("doorStatus");

        status.textContent = "Toc... toc... toc...";

        setTimeout(function () {
            hall.classList.add("hidden");
            office.classList.remove("hidden");
            backHall.hidden = false;
        }, 1000);

    });

    // RETOUR AU HALL
    backHall.addEventListener("click", function () {
        office.classList.add("hidden");
        hall.classList.remove("hidden");
        backHall.hidden = true;
    });

    // CHATBOT DE DÉMONSTRATION
    const messages = document.getElementById("messages");
    const chatForm = document.getElementById("chatForm");
    const chatInput = document.getElementById("chatInput");
    const resetChat = document.getElementById("resetChat");

    function ajouterMessage(texte, type) {

        const message = document.createElement("div");

        message.classList.add("bubble", type);
        message.textContent = texte;

        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
    }

    function initialiserChat() {
        messages.innerHTML = "";

        ajouterMessage(
            "Bonjour ! 🎩 Je suis GOLO. Comment puis-je vous aider ?",
            "bot"
        );
    }

    function envoyerMessage(texte) {

        if (!texte.trim()) {
            return;
        }

        ajouterMessage(texte, "user");

        setTimeout(function () {

            ajouterMessage(
                "Je suis encore en développement ! " +
                "Mes réponses sont simulées pour le moment.",
                "bot"
            );

        }, 500);
    }

    chatForm.addEventListener("submit", function (event) {

        event.preventDefault();

        envoyerMessage(chatInput.value);
        chatInput.value = "";

    });

    document.querySelectorAll("[data-prompt]").forEach(function (bouton) {

        bouton.addEventListener("click", function () {
            envoyerMessage(bouton.dataset.prompt);
        });

    });

    resetChat.addEventListener("click", initialiserChat);

    initialiserChat();

});