function calculateTax() {
  const income = parseFloat(document.getElementById('income').value);
  const extraIncome = parseFloat(document.getElementById('extraIncome').value);
  const age = parseInt(document.getElementById('age').value);
  const deductions = parseFloat(document.getElementById('deductions').value);
  
  let taxableIncome = income + extraIncome - deductions - 800000;
  let tax = 0;
  let incomeAfterTax = income + extraIncome - deductions;

  if (taxableIncome <= 0) {
    tax = 0;
  } else {
    
    if (age < 40) {
      tax = taxableIncome * 0.3;
      incomeAfterTax = income + extraIncome - deductions - tax;
    } else if (age >= 40 && age < 60) {
      tax = taxableIncome * 0.4;
      incomeAfterTax = income + extraIncome - deductions - tax;
    } else {
      tax = taxableIncome * 0.1;
      incomeAfterTax = income + extraIncome - deductions - tax;
    }
    
  }

  const popup = document.getElementById('popup');
  const taxResult = document.getElementById('taxResult');
  taxResult.textContent = `₹${incomeAfterTax.toFixed(2)}, Tax Amount: ₹${tax.toFixed(2)}`;
  popup.style.display = 'block';  
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
  document.getElementById('taxForm').reset();
}

const questionIcon2 = document.getElementById("question-icon2");
const popup2 = document.getElementById("popup2");
questionIcon2.addEventListener("mouseover", function() {
    popup2.style.display = "block";
});
questionIcon2.addEventListener("mouseout", function() {
    popup2.style.display = "none";
});

const inputField2 = document.getElementById("income");
const exclamationIcon2 = document.getElementById("exclamation-icon2");
inputField2.addEventListener("input", function() {
    if (/[^\d]/.test(this.value)) {
        exclamationIcon2.style.display = "inline-block";
    } else {
        exclamationIcon2.style.display = "none";
    }
});

const icon3 = document.getElementById("exclamation-icon3");
const popup_3 = document.getElementById("popup_3");
icon3.addEventListener("mouseover", function() {
    popup_3.style.display = "block";
});

icon3.addEventListener("mouseout", function() {
    popup_3.style.display = "none";
});

const questionIcon3 = document.getElementById("question-icon3");
const popup3 = document.getElementById("popup3");
questionIcon3.addEventListener("mouseover", function() {
    popup3.style.display = "block";
});
questionIcon3.addEventListener("mouseout", function() {
    popup3.style.display = "none";
});

const inputField3 = document.getElementById("extraIncome");
const exclamationIcon3 = document.getElementById("exclamation-icon3");
inputField3.addEventListener("input", function() {
    if (/[^\d]/.test(this.value)) {
        exclamationIcon3.style.display = "inline-block";
    } else {
        exclamationIcon3.style.display = "none";
    }
});

const icon2 = document.getElementById("exclamation-icon2");
const popup_2 = document.getElementById("popup_2");
icon2.addEventListener("mouseover", function() {
    popup_2.style.display = "block";
});

icon2.addEventListener("mouseout", function() {
    popup_2.style.display = "none";
});

const questionIcon4 = document.getElementById("question-icon4");
const popup4 = document.getElementById("popup4");
questionIcon4.addEventListener("mouseover", function() {
    popup4.style.display = "block";
});
questionIcon4.addEventListener("mouseout", function() {
    popup4.style.display = "none";
});

const questionIcon5 = document.getElementById("question-icon5");
const popup5 = document.getElementById("popup5");
questionIcon5.addEventListener("mouseover", function() {
    popup5.style.display = "block";
});
questionIcon5.addEventListener("mouseout", function() {
    popup5.style.display = "none";
});

const inputField4 = document.getElementById("deductions");
const exclamationIcon4 = document.getElementById("exclamation-icon5");
inputField4.addEventListener("input", function() {
    if (/[^\d]/.test(this.value)) {
        exclamationIcon4.style.display = "inline-block";
    } else {
        exclamationIcon4.style.display = "none";
    }
});

const icon4 = document.getElementById("exclamation-icon5");
const popup_4 = document.getElementById("popup_5");
icon4.addEventListener("mouseover", function() {
    popup_4.style.display = "block";
});

icon4.addEventListener("mouseout", function() {
    popup_4.style.display = "none";
});
