// https://calculator.swiftutors.com/compressibility-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const bulkModulusRadio = document.getElementById('bulkModulusRadio');
const compressibilityRadio = document.getElementById('compressibilityRadio');

let bulkModulus;
let compressibility = v1;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

bulkModulusRadio.addEventListener('click', function() {
  variable1.textContent = '(K) Compressibility (m²/N)';
  compressibility = v1;
  result.textContent = '';
});

compressibilityRadio.addEventListener('click', function() {
  variable1.textContent = '(B) Bulk Modulus (P)';
  bulkModulus = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(bulkModulusRadio.checked)
    result.textContent = `Compressibility = ${computeBulkModulus().toFixed(5)} m²/N`;

  else if(compressibilityRadio.checked)
    result.textContent = `Bulk Modulus = ${computeCompressibility().toFixed(5)} P`;
})

// calculation


function computeBulkModulus() {
  return 1 / Number(compressibility.value);
}

function computeCompressibility() {
  return 1 / Number(bulkModulus.value);
}
