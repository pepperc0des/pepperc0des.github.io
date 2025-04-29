// Pop-up script made with the help of Claude AI
document.addEventListener('DOMContentLoaded', function() {
  const thumbnails = document.querySelectorAll('.polaroid img');
  const popup = document.getElementById('imagePopup');
  const popupImage = document.getElementById('popupImage');
  const closeButton = document.getElementById('closePopup');

  // Function to open popup
  function openPopup(imgSrc) {
      popupImage.src = imgSrc;
      popup.style.display = 'flex';
      
      // Add slight fade-in animation
      popup.style.opacity = 0;
      setTimeout(() => {
          popup.style.transition = 'opacity 0.3s ease';
          popup.style.opacity = 1;
      }, 10);
  }

  // Function to close popup
  function closePopup() {
      popup.style.opacity = 0;
      setTimeout(() => {
          popup.style.display = 'none';
          popup.style.transition = '';
      }, 300);
  }

  // Add click event to all thumbnails
  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
          openPopup(this.src);
      });
  });

  // Close popup when clicking the close button
  closeButton.addEventListener('click', closePopup);

  // Close popup when clicking outside the image
  popup.addEventListener('click', function(event) {
      if (event.target === popup) {
          closePopup();
      }
  });

  // Close popup when pressing ESC key
  document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && popup.style.display === 'flex') {
          closePopup();
      }
  });
});