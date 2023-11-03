// Get the anchor link with the class `learn-more`.
const learnMoreLink = document.querySelector('.learn-more');

// Get the paragraph tag with the class `hidden`.
const hiddenParagraph = document.querySelector('.learn-more-hidden');

// Add an event listener to the anchor link.
learnMoreLink.addEventListener('click', function() {
  // Display the paragraph and hide the link.
    hiddenParagraph.style.display = 'block';
    this.style.display = 'none';
});

const radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', () => {
    if (radioButton.checked) {
      radioButtons.forEach(otherRadioButton => {
        if (otherRadioButton !== radioButton) {
          otherRadioButton.checked = false;
        }
      });
    }
  });
});

const emailRadio = document.getElementById('email_radio');
const phoneRadio = document.getElementById('text_message_radio');
const emailElements = document.querySelectorAll('.email');
const hiddenElements = document.querySelectorAll('.hidden');
const formButton = document.querySelector('.form-button');

// Set the default radio button to be checked
emailRadio.checked = true;

// Hide the hidden elements by default
hiddenElements.forEach(element => {
  element.style.display = 'none';
});

// Update the form button text based on the selected radio button
formButton.textContent = emailRadio.checked ? 'Email Me' : 'Text Me';

// Add a change listener to the radio buttons
emailRadio.addEventListener('change', () => {
  // If the email radio button is checked, show the email elements and hide the hidden elements
  if (emailRadio.checked) {
    emailElements.forEach(element => {
      element.style.display = 'block';
    });

    hiddenElements.forEach(element => {
      element.style.display = 'none';
    });

    // Update the form button text
    formButton.textContent = 'Email Me';
  }
});

phoneRadio.addEventListener('change', () => {
  // If the phone radio button is checked, hide the email elements and show the hidden elements
  if (phoneRadio.checked) {
    emailElements.forEach(element => {
      element.style.display = 'none';
    });

    hiddenElements.forEach(element => {
      element.style.display = 'block';
    });

    // Update the form button text
    formButton.textContent = 'Text Me';
  }
});