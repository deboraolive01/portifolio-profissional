// Inicializar EmailJS
(function() {
    emailjs.init("YJ8QOOiGQdHlfsiEd"); // Sua PUBLIC KEY
})();

// Enviar formulário
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_doihfnx", "template_anypqxf", this)
        .then(function() {
            alert("Mensagem enviada com sucesso!");
        }, function(error) {
            alert("Erro ao enviar mensagem. Tente novamente.");
            console.log(error);
        });
});



