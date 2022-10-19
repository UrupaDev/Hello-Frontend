let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.15955289057786, lng: -8.629507309056512 },
    zoom: 14,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#523735"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#c9b2a6"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#dcd2be"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ae9e90"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#93817c"
          }
        ]
      },
      {
        "featureType": "poi.attraction",
        "stylers": [
          {
            "saturation": 90
          },
          {
            "weight": 3
          }
        ]
      },
      {
        "featureType": "poi.attraction",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#366935"
          },
          {
            "saturation": -5
          }
        ]
      },
      {
        "featureType": "poi.attraction",
        "elementType": "labels.icon",
        "stylers": [
          {
            "saturation": -55
          }
        ]
      },
      {
        "featureType": "poi.attraction",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#366935"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.medical",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#a5b076"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#447530"
          }
        ]
      },
      {
        "featureType": "poi.place_of_worship",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.school",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.sports_complex",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "stylers": [
          {
            "saturation": 50
          },
          {
            "lightness": 60
          },
          {
            "weight": 1.5
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f1e6"
          },
          {
            "saturation": 35
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#fdfcf8"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#696969"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "stylers": [
          {
            "saturation": 75
          },
          {
            "lightness": 35
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f8c967"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#e9bc62"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e98d58"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#db8555"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#806b63"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8f7d77"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "stylers": [
          {
            "color": "#aaa8a1"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#b9d3c2"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#92998d"
          }
        ]
      }
    ]
  });

  let locations = [
    {
      name: 'Farolim de Felgueiras', 
      lat: 41.14754539697113, 
      long: -8.677228223291262, 
      src: 'img/farol-felgueiras-teaser.webp', 
      about: 'O Farolim de Felgueiras, também conhecido como Farol de Felgueiras, Farolim do Molhe de Felgueiras ou Farolim Cabeça de Molhe, é um farol português, na margem direita do Rio Douro, que se localiza na ponta do molhe de mesmo nome, na freguesia da Foz do Douro, Cidade do Porto.'
    },
    {
      name: 'Luís I Bridge', 
      lat: 41.140265041277864, 
      long: -8.60952631478294, 
      src: 'img/Luís_Bridge.webp', 
      about: 'Luís I Bridge is an arch bridge that crosses the River Douro in Porto, Portugal. The bridge was designed by Téophile Seyrig who previously worked for Gustave Eiffel. Gustave Eiffel designed Maria Pia bridge which is also in Porto.'
    },
    {
      name: 'Sé do Porto', 
      lat: 41.14330301312273, 
      long: -8.611071267229788, 
      src: 'img/catedral-da-s.webp', 
      about: 'O início da sua construção data da primeira metade do século XII, e prolongou-se até ao princípio do século XIII. Esse primeiro edifício, em estilo românico, sofreu muitas alterações ao longo dos séculos. Da época românica datam o carácter geral da fachada com as torres e a bela rosácea, além do corpo da igreja de três naves coberto por abóbada de canhão. A abóbada da nave central é sustentada por arcobotantes, sendo a Sé do Porto um dos primeiros edifícios portugueses em que se utilizou esse elemento arquitectónico.'
    },
    {
      name: 'Casa da Música',
      lat: 41.15961012342106, 
      long: -8.630910412691026, 
      src: 'img/casadamusica.webp', 
      about: 'Casa da Música é a principal sala de concertos localizada na Avenida da Boavista, no Porto, em Portugal.Foi projetada pelo arquitecto holandês Rem Koolhaas, como parte do evento Porto Capital Europeia da Cultura em 2001 (Porto 2001), no entanto, a construção só ficou concluída em 2005, transformando-se imediatamente num ícone da cidade.'
    },
    {
      name: 'Livraria Lello',
      lat: 41.14753678584078, 
      long: -8.614831491894737, 
      src: 'img/LivrariaLello.webp', 
      about: 'A Livraria Lello situa-se no número 144 da Rua das Carmelitas, no Centro Histórico da cidade do Porto, em Portugal. Classificada como Monumento de Interesse Público, e em vias de se tornar Monumento Nacional, a Livraria Lello preserva a beleza original do seu edifício. A fachada neogótica, a icónica escadaria vermelha, o emblemático vitral e as estantes repletas de livros das mais diversas épocas e em diferentes idiomas têm atraído milhares de visitantes.'
    },
    {
      name: 'Jardins do Palácio de Cristal', 
      lat: 41.14910012564562, 
      long: -8.625344632306232, 
      src: 'img/jardim.webp', 
      about: 'Os Jardins do Palácio de Cristal são um aprazível espaço verde localizado na freguesia de Massarelos, na cidade do Porto, Portugal, a partir do qual se desfrutam deslumbrantes panorâmicas do rio Douro e do mar.'
    }
  ];
  
  var infoWindow = new google.maps.InfoWindow();
  // change markers regarding coordinates of each markers
  var marker, i;

  for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i].lat, locations[i].long),
      map: map,
      icon: 'img/location_icon.webp'
    });
    
    // open window with info when click marker
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        // marker on the centre
        map.panTo(marker.getPosition());
        // add content to the window
        infoWindow.setContent("<h2>" + locations[i].name + "</h2>" + "<img src=" + locations[i].src + " >" + "<p>" + locations[i].about + "</p>");
        infoWindow.open(map, marker);
      }
    })(marker, i));
  }
}
window.initMap = initMap;


