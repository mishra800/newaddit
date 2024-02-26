// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get all the card elements
  const cards = document.querySelectorAll('.cards-icon-inner');

  // Loop through each card
  cards.forEach(card => {
    // Add event listener for mouseenter (hover)
    card.addEventListener('mouseenter', function() {
      // Add the 'hover' class to the card
      this.classList.add('hover');
    });

    // Add event listener for mouseleave (hover out)
    card.addEventListener('mouseleave', function() {
      // Remove the 'hover' class from the card
      this.classList.remove('hover');
    });
  });
});


 // JavaScript code here page 6*
 const contentBoxes = document.querySelectorAll('.content');

 contentBoxes.forEach(box => {
   box.addEventListener('click', () => {
     box.classList.toggle('active');
   });
 });