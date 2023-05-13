const openFormBtn = document.getElementById('openFormBtn');
const formPopup = document.getElementById('formPopup');
const closeFormBtn = document.getElementById('closeFormBtn');

openFormBtn.addEventListener('click', () => {
    formPopup.style.display = 'block';
});

closeFormBtn.addEventListener('click', () => {
    formPopup.style.display = 'none';
});