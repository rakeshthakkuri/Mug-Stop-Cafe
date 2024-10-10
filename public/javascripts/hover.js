// JavaScript to handle hover effect for badges


document.addEventListener('DOMContentLoaded', function() {
    const badges = document.querySelectorAll('.badge-item');
    const hoverImage = document.querySelector('.hover-image-preview');
  
    badges.forEach(badge => {
      badge.addEventListener('mouseenter', function(event) {
        const imageUrl = badge.getAttribute('data-image');
        hoverImage.style.backgroundImage = `url(${imageUrl})`;
        hoverImage.style.display = 'block';
        hoverImage.style.top = `${event.pageY + 15}px`; // Position below the cursor
        hoverImage.style.left = `${event.pageX + 15}px`; // Position to the right of the cursor
      });
  
      badge.addEventListener('mousemove', function(event) {
        hoverImage.style.top = `${event.pageY + 15}px`; // Update position as cursor moves
        hoverImage.style.left = `${event.pageX + 15}px`;
      });
  
      badge.addEventListener('mouseleave', function() {
        hoverImage.style.display = 'none'; // Hide the image when not hovering
      });
    });
  });
  