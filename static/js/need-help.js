// Get the anchor link with the class `learn-more`.
const learnMoreLink = document.querySelector('.learn-more');

// Get the paragraph tag with the class `hidden`.
const hiddenParagraph = document.querySelector('.hidden');

// Add an event listener to the anchor link.
learnMoreLink.addEventListener('click', function() {
  // Display the paragraph and hide the link.
    hiddenParagraph.style.display = 'block';
    this.style.display = 'none';
});