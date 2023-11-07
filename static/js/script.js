// Get the divs with the correct ids and div-info ids.
const faq1Div = document.getElementById('faq-1');
const faq1InfoDiv = document.getElementById('faq-1-info');

const faq2Div = document.getElementById('faq-2');
const faq2InfoDiv = document.getElementById('faq-2-info');

const faq3Div = document.getElementById('faq-3');
const faq3InfoDiv = document.getElementById('faq-3-info');

const faq4Div = document.getElementById('faq-4');
const faq4InfoDiv = document.getElementById('faq-4-info');

const faq5Div = document.getElementById('faq-5');
const faq5InfoDiv = document.getElementById('faq-5-info');

const faq6Div = document.getElementById('faq-6');
const faq6InfoDiv = document.getElementById('faq-6-info');

// Add an event listener to the `faq-1` div to listen for click events.
faq1Div.addEventListener('click', function() {
  // Toggle the `display` property of the `faq-1-info` div.
    faq1InfoDiv.style.display = faq1InfoDiv.style.display === 'none' ? 'block' : 'none';
});

// Add an event listener to the `faq-2` div to listen for click events.
faq2Div.addEventListener('click', function() {
  // Toggle the `display` property of the `faq-2-info` div.
    faq2InfoDiv.style.display = faq2InfoDiv.style.display === 'none' ? 'block' : 'none';
});

// Add an event listener to the `faq-3` div to listen for click events.
faq3Div.addEventListener('click', function() {
  // Toggle the `display` property of the `faq-3-info` div.
    faq3InfoDiv.style.display = faq3InfoDiv.style.display === 'none' ? 'block' : 'none';
});

// Add an event listener to the `faq-4` div to listen for click events.
faq4Div.addEventListener('click', function() {
  // Toggle the `display` property of the `faq-4-info` div.
    faq4InfoDiv.style.display = faq4InfoDiv.style.display === 'none' ? 'block' : 'none';
});

// Add an event listener to the `faq-5` div to listen for click events.
faq5Div.addEventListener('click', function() {
  // Toggle the `display` property of the `faq-5-info` div.
    faq5InfoDiv.style.display = faq5InfoDiv.style.display === 'none' ? 'block' : 'none';
});

// Add an event listener to the `faq-6` div to listen for click events.
faq6Div.addEventListener('click', function() {
  // Toggle the `display` property of the `faq-6-info` div.
    faq6InfoDiv.style.display = faq6InfoDiv.style.display === 'none' ? 'block' : 'none';
});

// const faq1Divplus = document.getElementById('faq-1');
// const plusElement = faq1Div.querySelector('.plus');

// faq1Div.addEventListener('click', function() {
//   plusElement.style.transform = plusElement.style.transform === 'rotate(45deg)' ? 'rotate(0deg)' : 'rotate(45deg)';
// });

// To rotate the plus signs on click
const faqElements = document.querySelectorAll('.gray.mb-2.p-3.flex-column');

faqElements.forEach(faqElement => {
    const plusH3 = faqElement.querySelector('h3[id^=plus]');
    const faqInfoElement = faqElement.querySelector('.faq-info');

    faqElement.addEventListener('click', () => {
        if (plusH3.style.transform === 'rotate(-45deg)') {
            plusH3.style.transform = 'rotate(0deg)';
            faqInfoElement.classList.add('hidden');
        } else {
            plusH3.style.transform = 'rotate(-45deg)';
            faqInfoElement.classList.remove('hidden');
        }
    });
});