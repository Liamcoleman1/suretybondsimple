// =============================================
// CONFIGURATION
// =============================================
const GOOGLE_SHEET_API_URL = 'https://script.google.com/macros/s/AKfycbxJlYcGEjAMB5wr_EGjDGC9VBITP94Guc9ALW5_s4Ai4BOZDGZZr8nCewo9-M36tFbW/exec'; // Your real Apps Script URL

// =============================================
// GLOBAL DATA
// =============================================
let bondRequirements = {};
let leadNotificationSent = false;

const TOTAL_STEPS = 6;

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","District of Columbia","Florida","Georgia","Hawaii","Idaho","Illinois",
  "Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts",
  "Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada",
  "New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota",
  "Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
  "South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington",
  "West Virginia","Wisconsin","Wyoming"
];

const VALID_AREA_CODES = [
  201,202,203,205,206,207,208,209,210,212,213,214,215,216,217,218,219,220,
  223,224,225,228,229,231,234,239,240,248,251,252,253,254,256,260,262,267,
  269,270,272,274,276,278,281,283,301,302,303,304,305,307,308,309,310,312,
  313,314,315,316,317,318,319,320,321,323,325,326,327,330,331,332,334,336,
  337,339,340,341,346,347,351,352,360,361,364,369,380,385,386,401,402,404,
  405,406,407,408,409,410,412,413,414,415,417,419,423,424,425,430,432,434,
  435,440,442,443,445,447,448,458,463,464,469,470,475,478,479,480,484,501,
  502,503,504,505,507,508,509,510,512,513,515,516,517,518,520,530,531,534,
  539,540,541,551,557,559,561,562,563,564,567,570,571,572,573,574,575,580,
  585,586,601,602,603,605,606,607,608,609,610,612,614,615,616,617,618,619,
  620,623,626,628,629,630,631,636,640,641,646,650,651,657,659,660,661,662,
  667,669,670,671,678,680,681,682,684,689,701,702,703,704,706,707,708,712,
  713,714,715,716,717,718,719,720,724,725,726,727,730,731,732,734,737,740,
  743,747,754,757,760,762,763,764,765,769,770,772,773,774,775,779,781,785,
  786,787,801,802,803,804,805,806,808,810,812,813,814,815,816,817,818,820,
  828,830,831,832,835,838,839,840,843,845,847,848,850,854,856,857,858,859,
  860,862,863,864,865,870,872,878,901,903,904,906,907,908,909,910,912,913,
  914,915,916,917,918,919,920,925,928,929,930,931,934,936,937,938,940,941,
  943,945,947,948,949,951,952,954,956,959,970,971,972,973,975,978,979,980,
  984,985,986,989
];

const VALID_EMAIL_DOMAINS = [
  'gmail.com','yahoo.com','hotmail.com','outlook.com','aol.com','icloud.com',
  'mail.com','protonmail.com','zoho.com','yandex.com','gmx.com','live.com',
  'msn.com','comcast.net','att.net','verizon.net','cox.net','charter.net',
  'earthlink.net','me.com','mac.com'
];

const SUB_TYPE_LABELS = {
  'Motor Vehicle Dealer Bond': 'Dealer Type',
  'Notary Bond': 'Notary Type',
  'Contractor License Bond': 'Contractor Classification',
  'Mortgage Broker Bond': 'Broker Type',
  'Tax Preparer Bond': 'Preparer Type'
};

const GENERIC_BOND_TYPES = [
  'Other / Not Sure',
  'License & Permit Bond',
  'Court Bond',
  'ERISA / Fidelity Bond',
  'Title Bond',
  'Wage and Welfare Bond'
];

// =============================================
// LOAD BOND REQUIREMENTS JSON
// =============================================
async function loadBondRequirements() {
  try {
    const res = await fetch('data/bond-requirements.json');
    bondRequirements = await res.json();
    console.log('✅ Bond requirements loaded successfully');
  } catch (err) {
    console.warn('⚠️ Could not load bond requirements — manual entry will be used.', err);
    bondRequirements = {};
  }
}

function lookupBondRequirement(bondType, state) {
  const bondData = bondRequirements[bondType];
  if (!bondData) return null;
  if (bondData[state]) return bondData[state];
  if (bondData['_default']) return bondData['_default'];
  return null;
}

function isGenericBondType(bondType) {
  return GENERIC_BOND_TYPES.includes(bondType);
}

// =============================================
// BOND AMOUNT / SUB-TYPE LOGIC
// =============================================
function updateBondAmount() {
  const bondType = document.getElementById('bondType').value;
  const state = document.getElementById('state').value;
  const subTypeGroup = document.getElementById('bondSubTypeGroup');
  const subTypeSelect = document.getElementById('bondSubType');
  const subTypeLabel = document.getElementById('bondSubTypeLabel');
  const amountGroup = document.getElementById('bondAmountGroup');
  const obligeeGroup = document.getElementById('bondObligeeGroup');
  const descGroup = document.getElementById('bondDescGroup');

  subTypeGroup.style.display = 'none';
  subTypeSelect.innerHTML = '<option value="">— Select —</option>';
  clearError('bondSubType', 'subtype-error');
  obligeeGroup.style.display = 'none';
  descGroup.style.display = 'none';

  if (!bondType) {
    amountGroup.style.display = 'none';
    return;
  }

  if (isGenericBondType(bondType)) {
    obligeeGroup.style.display = 'block';
    descGroup.style.display = 'block';
  }

  const requirement = lookupBondRequirement(bondType, state);

  if (requirement && requirement.options && requirement.options.length > 1) {
    const label = SUB_TYPE_LABELS[bondType] || 'Bond Sub-Type';
    subTypeLabel.innerHTML = label + ' <span class="required">*</span>';
    requirement.options.forEach((opt, idx) => {
      const option = document.createElement('option');
      option.value = idx;
      option.textContent = opt.label + ' — $' + opt.amount.toLocaleString('en-US');
      subTypeSelect.appendChild(option);
    });
    subTypeGroup.style.display = 'block';
    amountGroup.style.display = 'none';
    return;
  }

  showAmountForRequirement(requirement, state);
}

function onSubTypeChange() {
  const bondType = document.getElementById('bondType').value;
  const state = document.getElementById('state').value;
  const subTypeSelect = document.getElementById('bondSubType');
  const selectedIdx = subTypeSelect.value;
  clearError('bondSubType', 'subtype-error');
  if (selectedIdx === '') {
    document.getElementById('bondAmountGroup').style.display = 'none';
    return;
  }
  const requirement = lookupBondRequirement(bondType, state);
  if (requirement && requirement.options) {
    const selected = requirement.options[parseInt(selectedIdx)];
    const simpleReq = {
      amount: selected.amount,
      note: '$' + selected.amount.toLocaleString('en-US') + ' (' + selected.label + ')'
    };
    showAmountForRequirement(simpleReq, state);
  }
}

function showAmountForRequirement(requirement, state) {
  const amountGroup = document.getElementById('bondAmountGroup');
  const amountInput = document.getElementById('bondAmount');
  const amountNote = document.getElementById('bondAmountNote');
  const amountLabel = document.getElementById('bondAmountLabel');
  amountGroup.style.display = 'block';

  if (requirement && requirement.amount > 0) {
    amountInput.value = requirement.amount.toLocaleString('en-US');
    amountInput.readOnly = true;
    amountInput.classList.add('prefilled');
    amountLabel.innerHTML = 'Bond Amount (Based on ' + state + ' Requirements) <span class="required">*</span>';
    amountNote.innerHTML = '✅ <strong>' + requirement.note + '</strong> — Standard requirement. <a href="#" class="override-link" onclick="enableManualAmount(event)">Need a different amount?</a>';
    amountNote.className = 'field-hint field-hint-success';
  } else if (requirement && requirement.amount === 0 && requirement.note && requirement.note.toLowerCase().includes('no ')) {
    amountInput.value = '';
    amountInput.readOnly = false;
    amountInput.classList.remove('prefilled');
    amountLabel.innerHTML = 'Bond Amount <span class="required">*</span>';
    amountNote.innerHTML = '⚠️ ' + requirement.note + ' — If you still need this bond, enter the amount below.';
    amountNote.className = 'field-hint field-hint-warning';
  } else if (requirement && requirement.note) {
    amountInput.value = '';
    amountInput.readOnly = false;
    amountInput.classList.remove('prefilled');
    amountLabel.innerHTML = 'Bond Amount <span class="required">*</span>';
    amountNote.innerHTML = 'ℹ️ ' + requirement.note;
    amountNote.className = 'field-hint field-hint-info';
  } else {
    amountInput.value = '';
    amountInput.readOnly = false;
    amountInput.classList.remove('prefilled');
    amountLabel.innerHTML = 'Bond Amount <span class="required">*</span>';
    amountNote.innerHTML = 'Enter the total bond amount required.';
    amountNote.className = 'field-hint';
  }
}

function enableManualAmount(e) {
  e.preventDefault();
  const amountInput = document.getElementById('bondAmount');
  const amountNote = document.getElementById('bondAmountNote');
  amountInput.readOnly = false;
  amountInput.classList.remove('prefilled');
  amountInput.focus();
  amountInput.select();
  amountNote.innerHTML = 'Enter your required bond amount.';
  amountNote.className = 'field-hint';
}

// =============================================
// PRINCIPAL TYPE TOGGLE
// =============================================
function onPrincipalTypeChange() {
  const type = document.querySelector('input[name="principalType"]:checked');
  const companyGroup = document.getElementById('companyNameGroup');
  const nameGroup = document.getElementById('principalNameGroup');
  const nameLabel = document.getElementById('principalNameLabel');
  const nameHint = document.getElementById('principalNameHint');
  const addressSection = document.getElementById('principalAddressSection');

  clearError('principalType', 'principalType-error');

  if (!type) {
    companyGroup.style.display = 'none';
    nameGroup.style.display = 'none';
    addressSection.style.display = 'none';
    return;
  }

  nameGroup.style.display = 'block';
  addressSection.style.display = 'block';

  if (type.value === 'Company') {
    companyGroup.style.display = 'block';
    nameLabel.innerHTML = 'Owner / Authorized Signer Name <span class="required">*</span>';
    nameHint.textContent = 'Full legal name of the business owner or authorized signer.';
  } else {
    companyGroup.style.display = 'none';
    nameLabel.innerHTML = 'Full Legal Name on Bond <span class="required">*</span>';
    nameHint.textContent = 'Enter your full legal name as it should appear on the bond.';
  }
}

// =============================================
// INIT ON PAGE LOAD
// =============================================
document.addEventListener('DOMContentLoaded', async () => {
  await loadBondRequirements();

  // Populate both state dropdowns
  const stateSelect = document.getElementById('state');
  const principalStateSelect = document.getElementById('principalState');
  US_STATES.forEach(s => {
    const opt1 = document.createElement('option');
    opt1.value = s;
    opt1.textContent = s;
    stateSelect.appendChild(opt1);

    const opt2 = document.createElement('option');
    opt2.value = s;
    opt2.textContent = s;
    principalStateSelect.appendChild(opt2);
  });

  // Set min date to today
  const dateInput = document.getElementById('effectiveDate');
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);

  // Event listeners
  document.getElementById('phone').addEventListener('input', formatPhone);
  document.getElementById('bondType').addEventListener('change', updateBondAmount);
  document.getElementById('bondSubType').addEventListener('change', onSubTypeChange);
  document.getElementById('bondAmount').addEventListener('input', function(e) {
    if (!this.readOnly) formatCurrency(e);
  });

  // Principal type radio buttons
  document.querySelectorAll('input[name="principalType"]').forEach(radio => {
    radio.addEventListener('change', onPrincipalTypeChange);
  });

  // ZIP code formatting
  document.getElementById('principalZip').addEventListener('input', function(e) {
    let val = e.target.value.replace(/[^\d-]/g, '');
    if (val.length > 10) val = val.slice(0, 10);
    e.target.value = val;
  });
});

// =============================================
// FORMATTING
// =============================================
function formatPhone(e) {
  let val = e.target.value.replace(/\D/g, '');
  if (val.length > 10) val = val.slice(0, 10);
  if (val.length >= 7) val = `(${val.slice(0,3)}) ${val.slice(3,6)}-${val.slice(6)}`;
  else if (val.length >= 4) val = `(${val.slice(0,3)}) ${val.slice(3)}`;
  else if (val.length >= 1) val = `(${val}`;
  e.target.value = val;
}

function formatCurrency(e) {
  let val = e.target.value.replace(/\D/g, '').replace(/^0+/, '');
  if (val) val = parseInt(val).toLocaleString('en-US');
  e.target.value = val;
}

function getRawAmount(formatted) {
  return parseInt(formatted.replace(/\D/g, '')) || 0;
}

function formatDateDisplay(dateStr) {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-');
  return `${m}/${d}/${y}`;
}

// =============================================
// NAVIGATION
// =============================================
let currentStep = 1;

function showStep(step) {
  document.querySelectorAll('.form-step').forEach(el => el.classList.remove('active'));
  const target = document.getElementById(step <= TOTAL_STEPS ? `step-${step}` : 'step-success');
  target.classList.add('active');

  document.querySelectorAll('.progress-step').forEach(el => {
    const s = parseInt(el.dataset.step);
    el.classList.remove('active', 'done');
    if (s === step) el.classList.add('active');
    else if (s < step) el.classList.add('done');
  });

  currentStep = step;

  // Auto-fill principal state from bond state
  if (step === 5) {
    const bondState = document.getElementById('state').value;
    const principalState = document.getElementById('principalState');
    if (!principalState.value && bondState) {
      principalState.value = bondState;
    }
  }

  // Build review page
  if (step === 6) {
    buildReview();
  }
}

function goToStep(step) {
  showStep(step);
}

function nextStep(from) {
  if (!validateStep(from)) return;

  // After step 4 (contact), send lead notification
  if (from === 4 && !leadNotificationSent) {
    sendLeadNotification();
  }

  if (from === 1) {
    const bondType = document.getElementById('bondType').value;
    if (bondType) updateBondAmount();
  }

  showStep(from + 1);
}

function prevStep(from) {
  showStep(from - 1);
}

// =============================================
// SEND LEAD NOTIFICATION (after step 4)
// =============================================
async function sendLeadNotification() {
  const leadData = {
    type: 'lead_notification',
    state:      document.getElementById('state').value,
    bondType:   document.getElementById('bondType').value,
    bondAmount: '$' + getRawAmount(document.getElementById('bondAmount').value).toLocaleString('en-US'),
    firstName:  document.getElementById('firstName').value.trim(),
    lastName:   document.getElementById('lastName').value.trim(),
    phone:      document.getElementById('phone').value,
    email:      document.getElementById('email').value.trim().toLowerCase(),
    capturedAt: new Date().toISOString()
  };

  try {
    await fetch(GOOGLE_SHEET_API_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadData)
    });
    leadNotificationSent = true;
    console.log('📧 Lead notification sent:', leadData);
  } catch (err) {
    console.warn('⚠️ Lead notification failed (will retry on final submit):', err);
  }
}

// =============================================
// BUILD REVIEW PAGE
// =============================================
function buildReview() {
  // State
  document.getElementById('reviewState').textContent = document.getElementById('state').value;

  // Bond
  document.getElementById('reviewBondType').textContent = document.getElementById('bondType').value;

  // Sub-type
  const subTypeGroup = document.getElementById('bondSubTypeGroup');
  const reviewSubTypeRow = document.getElementById('reviewSubTypeRow');
  if (subTypeGroup.style.display !== 'none') {
    const sel = document.getElementById('bondSubType');
    document.getElementById('reviewSubType').textContent = sel.options[sel.selectedIndex].textContent;
    reviewSubTypeRow.style.display = 'flex';
  } else {
    reviewSubTypeRow.style.display = 'none';
  }

  // Obligee
  const obligeeGroup = document.getElementById('bondObligeeGroup');
  const reviewObligeeRow = document.getElementById('reviewObligeeRow');
  const reviewDescRow = document.getElementById('reviewDescRow');
  if (obligeeGroup.style.display !== 'none') {
    const obligee = document.getElementById('bondObligee').value.trim();
    const desc = document.getElementById('bondDesc').value.trim();
    if (obligee) {
      document.getElementById('reviewObligee').textContent = obligee;
      reviewObligeeRow.style.display = 'flex';
    } else {
      reviewObligeeRow.style.display = 'none';
    }
    if (desc) {
      document.getElementById('reviewDesc').textContent = desc;
      reviewDescRow.style.display = 'flex';
    } else {
      reviewDescRow.style.display = 'none';
    }
  } else {
    reviewObligeeRow.style.display = 'none';
    reviewDescRow.style.display = 'none';
  }

  // Amount
  const rawAmt = getRawAmount(document.getElementById('bondAmount').value);
  document.getElementById('reviewAmount').textContent = '$' + rawAmt.toLocaleString('en-US');

  // Date
  document.getElementById('reviewDate').textContent = formatDateDisplay(document.getElementById('effectiveDate').value);

  // Contact
  const fname = document.getElementById('firstName').value.trim();
  const lname = document.getElementById('lastName').value.trim();
  document.getElementById('reviewContactName').textContent = fname + ' ' + lname;
  document.getElementById('reviewPhone').textContent = document.getElementById('phone').value;
  document.getElementById('reviewEmail').textContent = document.getElementById('email').value.trim().toLowerCase();

  // Principal
  const principalType = document.querySelector('input[name="principalType"]:checked');
  document.getElementById('reviewPrincipalType').textContent = principalType ? principalType.value : '';

  const reviewCompanyRow = document.getElementById('reviewCompanyRow');
  if (principalType && principalType.value === 'Company') {
    document.getElementById('reviewCompanyName').textContent = document.getElementById('companyName').value.trim();
    reviewCompanyRow.style.display = 'flex';
  } else {
    reviewCompanyRow.style.display = 'none';
  }

  document.getElementById('reviewPrincipalName').textContent = document.getElementById('principalName').value.trim();

  const addr = document.getElementById('principalAddress').value.trim();
  const city = document.getElementById('principalCity').value.trim();
  const pstate = document.getElementById('principalState').value;
  const zip = document.getElementById('principalZip').value.trim();
  document.getElementById('reviewAddress').textContent = addr + ', ' + city + ', ' + pstate + ' ' + zip;
}

// =============================================
// VALIDATION
// =============================================
function clearError(fieldId, errorId) {
  const field = document.getElementById(fieldId);
  if (field) field.classList.remove('error');
  const err = document.getElementById(errorId);
  if (err) err.textContent = '';
}

function setError(fieldId, errorId, msg) {
  const field = document.getElementById(fieldId);
  if (field) field.classList.add('error');
  document.getElementById(errorId).textContent = msg;
}

function validateStep(step) {
  switch (step) {
    case 1: {
      const val = document.getElementById('state').value;
      clearError('state', 'state-error');
      if (!val) { setError('state', 'state-error', 'Please select a state.'); return false; }
      return true;
    }
    case 2: {
      let valid = true;
      const bondVal = document.getElementById('bondType').value;
      clearError('bondType', 'bond-error');
      if (!bondVal) { setError('bondType', 'bond-error', 'Please select a bond type.'); return false; }

      const subTypeGroup = document.getElementById('bondSubTypeGroup');
      if (subTypeGroup.style.display !== 'none') {
        clearError('bondSubType', 'subtype-error');
        if (document.getElementById('bondSubType').value === '') {
          setError('bondSubType', 'subtype-error', 'Please select a specific type.');
          return false;
        }
      }

      const obligeeGroup = document.getElementById('bondObligeeGroup');
      if (obligeeGroup.style.display !== 'none') {
        clearError('bondObligee', 'obligee-error');
        if (!document.getElementById('bondObligee').value.trim()) {
          setError('bondObligee', 'obligee-error', 'Please enter who is requiring this bond.');
          valid = false;
        }
      }

      const amountGroup = document.getElementById('bondAmountGroup');
      if (amountGroup.style.display === 'none') {
        if (subTypeGroup.style.display !== 'none') {
          setError('bondSubType', 'subtype-error', 'Please select a specific type.');
        }
        return false;
      }

      const amountInput = document.getElementById('bondAmount');
      const rawAmount = getRawAmount(amountInput.value);
      clearError('bondAmount', 'amount-error');
      if (amountInput.readOnly && rawAmount > 0) return valid;
      if (!amountInput.value) { setError('bondAmount', 'amount-error', 'Please enter the bond amount.'); valid = false; }
      else if (rawAmount < 500) { setError('bondAmount', 'amount-error', 'Bond amount must be at least $500.'); valid = false; }
      else if (rawAmount > 50000000) { setError('bondAmount', 'amount-error', 'Bond amount cannot exceed $50,000,000.'); valid = false; }
      return valid;
    }
    case 3: {
      clearError('effectiveDate', 'date-error');
      if (!document.getElementById('effectiveDate').value) {
        setError('effectiveDate', 'date-error', 'Please select a date.'); return false;
      }
      return true;
    }
    case 4:
      return validateContact();
    case 5:
      return validatePrincipal();
    case 6:
      return validateReview();
    default:
      return true;
  }
}

function validateContact() {
  let valid = true;

  clearError('firstName', 'fname-error');
  if (!document.getElementById('firstName').value.trim()) {
    setError('firstName', 'fname-error', 'First name is required.'); valid = false;
  }

  clearError('lastName', 'lname-error');
  if (!document.getElementById('lastName').value.trim()) {
    setError('lastName', 'lname-error', 'Last name is required.'); valid = false;
  }

  const phoneRaw = document.getElementById('phone').value.replace(/\D/g, '');
  clearError('phone', 'phone-error');
  if (phoneRaw.length !== 10) {
    setError('phone', 'phone-error', 'Enter a valid 10-digit US phone number.'); valid = false;
  } else {
    const areaCode = parseInt(phoneRaw.slice(0, 3));
    if (!VALID_AREA_CODES.includes(areaCode)) {
      setError('phone', 'phone-error', 'That area code doesn\'t exist.'); valid = false;
    }
  }

  const email = document.getElementById('email').value.trim().toLowerCase();
  clearError('email', 'email-error');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) { setError('email', 'email-error', 'Email address is required.'); valid = false; }
  else if (!emailRegex.test(email)) { setError('email', 'email-error', 'Enter a valid email address.'); valid = false; }
  else {
    const domain = email.split('@')[1];
    if (!VALID_EMAIL_DOMAINS.includes(domain)) {
      setError('email', 'email-error', 'Please use a common email provider (Gmail, Yahoo, Outlook, etc.).'); valid = false;
    }
  }
  return valid;
}

function validatePrincipal() {
  let valid = true;

  // Principal type
  const principalType = document.querySelector('input[name="principalType"]:checked');
  clearError('principalType', 'principalType-error');
  if (!principalType) {
    document.getElementById('principalType-error').textContent = 'Please select Individual or Company.';
    return false;
  }

  // Company name (if Company)
  if (principalType.value === 'Company') {
    clearError('companyName', 'company-error');
    if (!document.getElementById('companyName').value.trim()) {
      setError('companyName', 'company-error', 'Company name is required.'); valid = false;
    }
  }

  // Principal name
  clearError('principalName', 'principalName-error');
  if (!document.getElementById('principalName').value.trim()) {
    setError('principalName', 'principalName-error', 'Full legal name is required.'); valid = false;
  }

  // Address
  clearError('principalAddress', 'address-error');
  if (!document.getElementById('principalAddress').value.trim()) {
    setError('principalAddress', 'address-error', 'Street address is required.'); valid = false;
  }

  clearError('principalCity', 'city-error');
  if (!document.getElementById('principalCity').value.trim()) {
    setError('principalCity', 'city-error', 'City is required.'); valid = false;
  }

  clearError('principalState', 'pstate-error');
  if (!document.getElementById('principalState').value) {
    setError('principalState', 'pstate-error', 'State is required.'); valid = false;
  }

  clearError('principalZip', 'zip-error');
  const zip = document.getElementById('principalZip').value.trim();
  if (!zip) {
    setError('principalZip', 'zip-error', 'ZIP code is required.'); valid = false;
  } else if (!/^\d{5}(-\d{4})?$/.test(zip)) {
    setError('principalZip', 'zip-error', 'Enter a valid ZIP code (e.g. 90001 or 90001-1234).'); valid = false;
  }

  return valid;
}

function validateReview() {
  clearError('agreeTerms', 'agree-error');
  if (!document.getElementById('agreeTerms').checked) {
    document.getElementById('agree-error').textContent = 'You must confirm the information is accurate before submitting.';
    return false;
  }
  return true;
}

// =============================================
// SUBMIT FULL APPLICATION
// =============================================
async function submitQuote() {
  if (!validateReview()) return;

  const submitBtn = document.getElementById('submitBtn');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting...';

  const bondAmountRaw = getRawAmount(document.getElementById('bondAmount').value);

  let bondSubType = '';
  const subTypeGroup = document.getElementById('bondSubTypeGroup');
  if (subTypeGroup.style.display !== 'none') {
    const sel = document.getElementById('bondSubType');
    bondSubType = sel.options[sel.selectedIndex].textContent;
  }

  let bondObligee = '';
  let bondDescription = '';
  if (document.getElementById('bondObligeeGroup').style.display !== 'none') {
    bondObligee = document.getElementById('bondObligee').value.trim();
    bondDescription = document.getElementById('bondDesc').value.trim();
  }

  const principalType = document.querySelector('input[name="principalType"]:checked');

  const data = {
    type:              'full_application',
    state:             document.getElementById('state').value,
    bondType:          document.getElementById('bondType').value,
    bondSubType:       bondSubType,
    bondObligee:       bondObligee,
    bondDescription:   bondDescription,
    bondAmount:        '$' + bondAmountRaw.toLocaleString('en-US'),
    effectiveDate:     document.getElementById('effectiveDate').value,
    firstName:         document.getElementById('firstName').value.trim(),
    lastName:          document.getElementById('lastName').value.trim(),
    phone:             document.getElementById('phone').value,
    email:             document.getElementById('email').value.trim().toLowerCase(),
    principalType:     principalType ? principalType.value : '',
    companyName:       document.getElementById('companyName').value.trim(),
    principalName:     document.getElementById('principalName').value.trim(),
    principalAddress:  document.getElementById('principalAddress').value.trim(),
    principalCity:     document.getElementById('principalCity').value.trim(),
    principalState:    document.getElementById('principalState').value,
    principalZip:      document.getElementById('principalZip').value.trim(),
    submittedAt:       new Date().toISOString()
  };

  try {
    await fetch(GOOGLE_SHEET_API_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    console.log('✅ Full application submitted:', data);
    showStep(TOTAL_STEPS + 1);

  } catch (err) {
    console.error('Submission error:', err);
    alert('Something went wrong. Please try again.');
    submitBtn.disabled = false;
    submitBtn.textContent = 'Submit Application';
  }
}