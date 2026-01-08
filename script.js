// Inicializa o EmailJS
(function () {
  emailjs.init("YJ8QOOiGQdHlfsiEd");
})();

// Captura o formulário e envia pelo EmailJS
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_doihfnx", "template_anypqxf", this)
    .then(function () {
      alert("Mensagem enviada com sucesso! 😊");
      document.getElementById("contact-form").reset();
    })
    .catch(function (error) {
      alert("Erro ao enviar mensagem. Tente novamente.");
      console.error("EmailJS error:", error);
    });
});

