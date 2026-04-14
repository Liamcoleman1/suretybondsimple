// =============================================
// BOND COST CALCULATOR
// =============================================

const RATE_TABLE = {
  excellent: { low: 0.01,  high: 0.015, label: '1%–1.5%' },
  good:      { low: 0.015, high: 0.03,  label: '1.5%–3%' },
  fair:      { low: 0.03,  high: 0.05,  label: '3%–5%' },
  average:   { low: 0.05,  high: 0.08,  label: '5%–8%' },
  poor:      { low: 0.08,  high: 0.12,  label: '8%–12%' },
  bad:       { low: 0.10,  high: 0.15,  label: '10%–15%' }
};

// Format currency input
document.getElementById('calcBondAmount').addEventListener('input', function(e) {
  let val = e.target.value.replace(/\D/g, '');
  val = val.replace(/^0+/, '');
  if (val) {
    val = parseInt(val).toLocaleString('en-US');
  }
  e.target.value = val;
});

function calculateCost() {
  const amountRaw = document.getElementById('calcBondAmount').value.replace(/\D/g, '');
  const creditTier = document.getElementById('calcCreditScore').value;
  const resultsDiv = document.getElementById('calcResults');

  // Validation
  if (!amountRaw || parseInt(amountRaw) < 100) {
    alert('Please enter a valid bond amount (at least $100).');
    return;
  }
  if (!creditTier) {
    alert('Please select your credit score range.');
    return;
  }

  const bondAmount = parseInt(amountRaw);
  const rates = RATE_TABLE[creditTier];

  const premiumLow = Math.round(bondAmount * rates.low);
  const premiumHigh = Math.round(bondAmount * rates.high);
  const premiumMid = Math.round((premiumLow + premiumHigh) / 2);
  const monthlyMid = Math.round(premiumMid / 12);

  // Display results
  document.getElementById('calcPremium').textContent =
    '$' + premiumLow.toLocaleString('en-US') + ' – $' + premiumHigh.toLocaleString('en-US');

  document.getElementById('calcBondDisplay').textContent =
    '$' + bondAmount.toLocaleString('en-US');

  document.getElementById('calcRateDisplay').textContent = rates.label;

  document.getElementById('calcMonthly').textContent =
    '~$' + monthlyMid.toLocaleString('en-US');

  document.getElementById('calcRange').innerHTML =
    'Based on <strong>' + creditTier.charAt(0).toUpperCase() + creditTier.slice(1) +
    '</strong> credit with a <strong>$' + bondAmount.toLocaleString('en-US') +
    '</strong> bond. Actual rates may vary — <a href="quote.html">get an exact quote</a>.';

  // Show results with animation
  resultsDiv.style.display = 'block';
  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}