// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 25.782612, lng: -80.134079 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map')
  , {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map:
  map });
}

$('#navigation a, .button').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 65
      },
      800
    );
  }
});