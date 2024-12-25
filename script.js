const count = document.querySelector('.count');
const minusBtn = document.querySelector('.minus-btn');
const plusBtn = document.querySelector('.plus-btn');
const incDec = document.querySelector('.inc-dec-val');
const resetBtn = document.querySelector('.reset-btn');

// const countVal = parseInt(count.innerText)
count.innerText = count.innerText || '0';

minusBtn.addEventListener('click', () => {
    const countVal = parseInt(count.innerText) || 0;
    const incDecVal = parseInt(incDec.value) || 1;

    count.innerText = countVal - incDecVal;
})

plusBtn.addEventListener('click', () => {
    const countVal = parseInt(count.innerText) || 0;
    const incDecVal = parseInt(incDec.value) || 1;

    count.innerText = countVal + incDecVal;
})

// Reset button functionality
resetBtn.addEventListener('click', () => {
    count.innerText = '0'; // Reset counter to 0
    incDecInput.value = '1'; // Reset increment/decrement input to 1
  });