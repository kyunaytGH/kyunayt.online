// JavaScript for modal functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get the modal element
  var modal = document.getElementById('modal');

  // Get all images with class "photo"
  var photos = document.querySelectorAll('.photo');

  // Get the <img> element inside the modal
  var modalImg = document.getElementById('fullImage');

  // Function to resize modal image based on its natural size
  function resizeModalImage(img) {
    if (img.naturalWidth < window.innerWidth * 0.8) {
      modalImg.style.maxWidth = '80%'; // Set max width to 80% of viewport width
      modalImg.style.maxHeight = '80%'; // Set max height to 80% of viewport height
    } else {
      modalImg.style.maxWidth = '100%'; // Otherwise, set max width to 100%
      modalImg.style.maxHeight = '100%'; // Set max height to 100%
    }
  }

  // Loop through each photo and add click event listener
  photos.forEach(function(photo) {
    photo.addEventListener('click', function() {
      modal.style.display = 'block'; // Display the modal
      modalImg.src = this.src; // Set the src attribute of the modal image to the clicked image src

      // Reset styles to default before resizing
      modalImg.style.maxWidth = 'none';
      modalImg.style.maxHeight = 'none';
      modalImg.style.width = 'auto';
      modalImg.style.height = 'auto';

      // Call resize function after a short delay to ensure image dimensions are updated
      setTimeout(function() {
        resizeModalImage(modalImg);
      }, 100); // Adjust this delay as needed based on performance
    });
  });

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName('close')[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = 'none';
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  // Resize modal image on window resize
  window.addEventListener('resize', function() {
    if (modal.style.display === 'block') {
      resizeModalImage(modalImg);
    }
  });
});
