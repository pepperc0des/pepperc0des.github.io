// Done with the help of Claude AI

//Navigation Animation
function displayNavigationWord() {
  const word = sessionStorage.getItem('navigationWord');
  
  // Special case for home page
  const isHomePage = window.location.pathname.includes('/Midterm/home/portfolio.html');
  
  // Only show animation if we have a word from navigation
  // OR if it's the first-time visit to the home page
  if (word || (isHomePage && !sessionStorage.getItem('visitedHome'))) {
    
    // Disables scrolling
    document.body.style.overflow = 'hidden';

    // Create the floating text element
    const floating = document.createElement("div");
    floating.className = "floating-text";
    
    // Use the navigation word if available, otherwise show "Welcome" for first home visit
    floating.textContent = word || "Welcome to My Portfolio";
    
    document.body.appendChild(floating);
    
    // Clear the session storage
    sessionStorage.removeItem('navigationWord');
    sessionStorage.setItem('visitedHome', 'true');
    
    // Remove element after animation
    setTimeout(() => {
        floating.remove();
    }, 2000);

    // Re-enable scrolling after the animation
    setTimeout(() => {
        document.body.style.overflow = 'auto';
    }, 2000);
  }
}
// End of Navigation Animation

// Hide content initially and show the navigation word animation
document.addEventListener('DOMContentLoaded', function() {
  const pageContent = document.querySelector('body');
  if (pageContent) {
      pageContent.style.opacity = 0;
      
      // Add animation class after a slight delay
      setTimeout(() => {
          pageContent.style.opacity = null;
      }, 100);
  }
  
  // Display the navigation word if available
  displayNavigationWord();
});
//End of Navigation Animation

