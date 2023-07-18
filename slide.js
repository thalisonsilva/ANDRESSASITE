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

  window.addEventListener('DOMContentLoaded', function() {
    // Obtenha a referência da div onde o tour será exibido
    var divTour = document.getElementById('tour-360');
    
    // Crie um elemento iframe
    var iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '70%';
    iframe.src = 'https://studiodayanavlasack.mmstourvirtual360.com/';
    iframe.allow = 'autoplay; fullscreen; gyroscope; accelerometer';
    
    // Adicione o iframe à div
    divTour.appendChild(iframe);
  });

  window.addEventListener('DOMContentLoaded', function() {
    // Obtenha a referência da div onde o tour será exibido
    var divTour = document.getElementById('tour-360-2');
    
    // Crie um elemento iframe
    var iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '70%';
    iframe.src = 'https://casabenaventes.mmstourvirtual360.com/';
    iframe.allow = 'autoplay; fullscreen; gyroscope; accelerometer';
    
    // Adicione o iframe à div
    divTour.appendChild(iframe);
  });
