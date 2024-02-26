 // JavaScript functionality
 document.getElementById('toggleOfferBtn').addEventListener('click', function() {
  var offerSection = document.getElementById('offerSection');
  if (offerSection.style.display === 'none') {
    offerSection.style.display = 'block';
  } else {
    offerSection.style.display = 'none';
  }
});