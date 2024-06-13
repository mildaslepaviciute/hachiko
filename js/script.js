// Get the current year for the copyright 

$('#year').text(new Date().getFullYear());

// Lightbox

// $(document).on('click', '[data-toggle="lightbox"]', function(event) {
//     event.preventDefault()
//     $(this).ekkoLightbox({
//         alwaysShowClose: true,
//     })
// })

// CAROUSEL TIMING

// $(".carousel").carousel({
//     interval: 3500,
//     keyboard: true,
//     pause: "hover",
//   });

// Simple onclick event

// $("#.classOrId").click(function(){
//     $(".classOrId").removeClass("class");
//     $(".classOrId").addClass("class");
// });


// AOS animations

// AOS.init({
//   // Global settings:
//   disable: false,
//   startEvent: 'DOMContentLoaded',
//   initClassName: 'aos-init',
//   animatedClassName: 'aos-animate',
//   useClassNames: false,
//   disableMutationObserver: false,
//   debounceDelay: 50,
//   throttleDelay: 99,

//   // Can be overridden by `data-aos-*` attributes:
//   offset: 120,
//   delay: 0,
//   duration: 500,
//   easing: 'ease',
//   once: false,
//   mirror: false,
//   anchorPlacement: 'top-bottom',
// });

function initMap() {
  var geocoder = new google.maps.Geocoder();
  var address = "„UNA“ prekybos centras, Dangeručio g. 1, Vilnius, 08410 Vilniaus m. sav.";
  
  geocoder.geocode({ 'address': address }, function(results, status) {
      if (status === 'OK') {
          var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 15,
              center: results[0].geometry.location,
              styles: [
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        { "visibility": "simplified" },
                        { "lightness": 50 }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        { "visibility": "simplified" },
                        { "lightness": 30 }
                    ]
                }
            ]
          });

          var customMarker = {
            url: './img/illustrations/map-marker.png', 
            scaledSize: new google.maps.Size(50, 70) 
          };
          var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location,
              icon: customMarker,
              title: address
          });

          var infowindow = new google.maps.InfoWindow({
              content: '<h3>„UNA“ prekybos centras</h3><p>Dangeručio g. 1, Vilnius, 08410 Vilniaus m. sav.</p>'
          });

          marker.addListener('click', function() {
              infowindow.open(map, marker);
          });
      } else {
          console.log('Geocode was not successful for the following reason: ' + status)
      }
  });
}

initMap()