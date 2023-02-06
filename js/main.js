const items = document.querySelectorAll(".price");
const total = document.querySelector("#total");

// let sum = 0;
// // for (let i = 0; i < items.length; i++) {}
// for (const item of items) {
//   sum = sum + Number(item.textContent);
// }

// total.textContent = Math.round((sum * 100) / 100);

const val = Array.from(items).reduce(sum, 0);
total.textContent = Math.round(val * 100) / 100;

function sum(accum, ele) {
  const eleVal = Number(ele.textContent) || 0;
  return accum + eleVal;
}
