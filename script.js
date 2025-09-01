const btnPesan = document.getElementById("btnPesan");
const hasilPesan = document.getElementById("hasilPesan");

const pesanDamai = [
    "Dengan berdialog, kita bisa memahami satu sama lain.",
    "Damai itu indah, belajar jadi lebih tenang.",
    "Solusi terbaik lahir dari hati yang terbuka.",
    "Masa depan cerah dimulai dari belajar tanpa demo.",
    "Kedamaian membuat ilmu lebih bermanfaat."
];

btnPesan.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * pesanDamai.length);
    hasilPesan.textContent = pesanDamai[randomIndex];
});
