window.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.querySelector('.card-container');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    let scrollPosition = 0;

    prevButton.addEventListener('click', function() {
      scrollPosition -= cardContainer.offsetWidth;
      cardContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });

      updateButtonVisibility();
    });

    nextButton.addEventListener('click', function() {
      scrollPosition += cardContainer.offsetWidth;
      cardContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });

      updateButtonVisibility();
    });

    cardContainer.addEventListener('scroll', function() {
      scrollPosition = cardContainer.scrollLeft;
      updateButtonVisibility();
    });

    function updateButtonVisibility() {
      prevButton.style.display = scrollPosition > 0 ? 'block' : 'none';
      nextButton.style.display = scrollPosition < cardContainer.scrollWidth - cardContainer.offsetWidth ? 'block' : 'none';
    }
  });