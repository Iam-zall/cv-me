function toggleProfil() {
 
    let profil = document.getElementById("profil");
 
    if (profil.style.display === "none") {
        profil.style.display = "block";
    } else {
        profil.style.display = "none";
    }
}

let nama = "Nazala Shayla Maulidia";
let umur = 19;
let programStudi = "Sains Data";

console.log("Halo, nama saya " + nama);
console.log("Umur saya " + umur);
console.log("Program Studi " + programStudi);

function ubahTema() {
    document.body.classList.toggle("dark-mode");
}

function cetakCV() {
    window.print();
}

let tahunSekarang = new Date () .getFullYear();

document.getElementById("tahun") .textContent = tahunSekarang;

function pesanKontak() {
    alert("Silakan menghubungi saya melalui email atau media sosial.");
}