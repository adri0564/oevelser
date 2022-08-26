// const alkoholfri = document.querySelector(".cola");
// const alkoholfri1 = document.querySelector(".fanta");

// alkoholfri.addEventListener("click", funktionAlkoholfriKlik);
// alkoholfri1.addEventListener("click", funktionAlkoholfriKlik);
// function funktionAlkoholfriKlik() {
//   console.log("alkoholfri");
// }

// const alkohol = document.querySelector(".oel");
// const alkohol1 = document.querySelector(".snaps");

// alkohol.addEventListener("click", funktionAlkoholKlik);
// alkohol1.addEventListener("click", funktionAlkoholKlik);
// function funktionAlkoholKlik() {
//   console.log("indeholder alkohol");
// }

/* TEST */

document.querySelector(".snaps").addEventListener("click", tjek);
document.querySelector(".oel").addEventListener("click", tjek);
document.querySelector(".cola").addEventListener("click", tjek);
document.querySelector(".fanta").addEventListener("click", tjek);

function tjek() {
  console.log(this.alt);
  if (this.alt == "øl" || this.alt == "snaps") {
    console.log("indeholder alkohol");
  } else {
    console.log("alkoholfri");
  }
}
