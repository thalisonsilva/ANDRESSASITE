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
