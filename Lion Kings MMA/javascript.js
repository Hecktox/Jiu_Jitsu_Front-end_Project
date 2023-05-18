const openFormBtn = document.getElementById('openFormBtn');
const formPopup = document.getElementById('formPopup');
const closeFormBtn = document.getElementById('closeFormBtn');

openFormBtn.addEventListener('click', () => {
  formPopup.style.display = 'block';
});

closeFormBtn.addEventListener('click', () => {
  formPopup.style.display = 'none';
});

const addToCartBtn = document.getElementById('addToCartBtn');
addToCartBtn.addEventListener('click', () => {
  const selectedClass = document.querySelector('input[name="class"]:checked').value;
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(selectedClass);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Class added to cart!');
});


