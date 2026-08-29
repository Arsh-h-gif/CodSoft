const prevDisplay = document.getElementById('prevDisplay');
const currentDisplay = document.getElementById('currentDisplay');
 
let currentValue = '0';
let previousValue = null;
let operator = null;
let shouldResetCurrent = false;
 
function updateDisplay() {
  currentDisplay.textContent = formatNumber(currentValue);
  prevDisplay.textContent = previousValue !== null && operator
    ? `${formatNumber(previousValue)} ${operator}`
    : '';
}
 
function formatNumber(numStr) {
  if (numStr === '' || numStr === '-') return numStr || '0';
  const [intPart, decPart] = numStr.toString().split('.');
  const formattedInt = new Intl.NumberFormat('en-US').format(Number(intPart));
  return decPart !== undefined ? `${formattedInt}.${decPart}` : formattedInt;
}