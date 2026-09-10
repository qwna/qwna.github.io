document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("flowerForm");
    const message = document.getElementById("formMessage");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const answer = document.querySelector(
                'input[name="loveFlowers"]:checked'
            );

            const reason = document.getElementById("reason").value;

            if (!answer) {
                message.textContent = "Пожалуйста, выберите вариант ответа.";
                return;
            }

            message.textContent =
                "Спасибо за ваш ответ! 🌸";

            console.log("Любите ли цветочки:", answer.value);
            console.log("Почему:", reason);

            form.reset();

        });

    }

});