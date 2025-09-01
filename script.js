// Pesan damai acak
const btnPesan = document.getElementById("btnPesan");
const quoteText = document.getElementById("quoteText");

const pesanDamai = [
  "Dengan hati yang tenang, ilmu lebih mudah dipahami.",
  "Dialog membangun jembatan, bukan tembok.",
  "Belajar damai melahirkan generasi yang bijak.",
  "Suasana tenang membuat pikiran lebih terang.",
  "Aspirasi yang disampaikan dengan damai lebih didengar."
];

btnPesan.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * pesanDamai.length);
  quoteText.textContent = "“" + pesanDamai[randomIndex] + "”";
});

// Animasi scroll fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
