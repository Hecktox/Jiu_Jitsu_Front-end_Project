// Function to adjust the font size and button container based on window width
function adjustFontSize() {
    var windowWidth = window.innerWidth;
    var buttons = document.getElementsByClassName('button');
    var buttonsContainer = document.querySelector('.buttons-container');

    // If the window width is less than or equal to 45% of the screen width
    if (windowWidth <= 0.70 * window.screen.width) {
        // Set the font size of all buttons to 27px
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.fontSize = '27px';
        }

        // Change the button container to wrap buttons to the next line
        buttonsContainer.style.flexWrap = 'wrap';
    } else {
        // Reset the font size of all buttons
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.fontSize = '';
        }

        // Reset the button container
        buttonsContainer.style.flexWrap = '';
    }
}

// Call the adjustFontSize function when the window is resized
window.addEventListener('resize', adjustFontSize);

// Call the adjustFontSize function on page load
window.addEventListener('load', adjustFontSize);


//info-container adjustments
function adjustImageContainer() {
    const infoContainers = document.querySelectorAll('.info-container');

    infoContainers.forEach((infoContainer) => {
        const textContainer = infoContainer.querySelector('.text-container');
        const imageContainer = infoContainer.querySelector('.image-container');

        // Set the height of image-container to match the height of text-container
        imageContainer.style.height = `${textContainer.offsetHeight}px`;

        // Check window width and adjust flex-direction of info-container
        const windowWidth = window.innerWidth;
        const fullScreenWidth = window.screen.width;
        const threshold = fullScreenWidth * 0.70;

        if (windowWidth < threshold) {
            // Check if image-container is before text-container in the DOM
            if (imageContainer.previousElementSibling === textContainer) {
                infoContainer.style.flexDirection = 'column'; // Regular columns
            } else {
                infoContainer.style.flexDirection = 'column-reverse'; // Reverse columns
            }
            infoContainer.style.alignItems = 'stretch'; // Stretch items vertically
            imageContainer.style.height = 'auto'; // Reset height to auto
        } else {
            infoContainer.style.flexDirection = 'row'; // Rows
            imageContainer.style.height = `${textContainer.offsetHeight}px`; // Match text container height
        }
    });
}

// Initial adjustment when the page loads
window.addEventListener('load', adjustImageContainer);

// Adjust the height and flex-direction when the window is resized
window.addEventListener('resize', adjustImageContainer);


// Smooth scrolling to info-containers when buttons are clicked
document.addEventListener('load', function () {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = button.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});


// Slider


