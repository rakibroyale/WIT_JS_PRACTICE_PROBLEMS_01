let productsPerDay = 200;
let machines = 6;
let additionalMachines = 2;
let totalMachines = machines + additionalMachines;

let grossOutput = productsPerDay * totalMachines;

let unsoldProducts = 3;
let remainingProducts = grossOutput - unsoldProducts;

console.log("Gross Output: " + grossOutput + " products");
console.log("Remaining Products: " + remainingProducts + " products");
