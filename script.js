const submitButton = document.querySelector('.rating-btn');
const thankYou = document.querySelector('.thankyou-container');
const ratingForm = document.querySelector('.rating-form');
const selectedNumber = document.querySelector('.thankyou-num--chosen');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const selectedInput = document.querySelector('input[name="number"]:checked');
  const selectedValue = selectedInput.value;

  selectedNumber.textContent = `You selected ${selectedValue} out of 5`;

  ratingForm.style.display = 'none';
  thankYou.style.display = 'block';
});
