const surpriseBtn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");

surpriseBtn.addEventListener("click", function () {
  surprise.classList.remove("hidden");

  surpriseBtn.style.display = "none";

  createConfetti();
});

function createConfetti() {
  const emojis = ["🎉", "🎊", "🪻", "🤗", "✨", "🎈", "🥳"];

  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");

    confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    confetti.style.position = "fixed";

    confetti.style.left = Math.random() * 100 + "vw";

    confetti.style.top = "-30px";

    confetti.style.fontSize = Math.random() * 20 + 15 + "px";

    confetti.style.zIndex = "9999";

    confetti.style.pointerEvents = "none";

    document.body.appendChild(confetti);

    const duration = Math.random() * 3 + 3;

    confetti.animate(
      [
        {
          transform: "translateY(0) rotate(0deg)",
          opacity: 1,
        },

        {
          transform: `translateY(110vh) rotate(720deg)`,
          opacity: 0,
        },
      ],
      {
        duration: duration * 1000,
        easing: "linear",
      }
    );

    setTimeout(() => {
      confetti.remove();
    }, duration * 1000);
  }
}
