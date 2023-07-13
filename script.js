document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.querySelector('.rating-btn');
  const thankYou = document.querySelector('.thankyou-container');
  const ratingForm = document.querySelector('.rating-form');
  const selectedNumber = document.querySelector('.thankyou-num--chosen');

  // posluchač události kliknutí na tlačítko Submit
  submitButton.addEventListener('click', (event) => {
    // zabránění výchozímu chování tlačítka submit
    event.preventDefault();

    // Hodnota vybraného inputu
    const selectedInput = document.querySelector(
      'input[name="number"]:checked',
    );
    const selectedValue = selectedInput.value;

    // Nastavení textu hodnoty
    selectedNumber.textContent = `You selected ${selectedValue} out of 5`;

    // Skrytí formuláře a zobrazení thank you sekce
    ratingForm.style.display = 'none';
    thankYou.style.display = 'block';
  });
});
