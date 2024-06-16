const stationsSaguenay = [
    {
        tuning: "92,5",
        name: "MA RADIO D'ICI Saguenay-Lac-St-Jean (CKAJ-FM)",
        pays: "Canada - Québec (Saguenay)",
        url: "https://stream.statsradio.com/8060/stream",
        logo: "https://radioenlignefrance.com/storage/radios/4349/4985/conversions/2BMxa2niq0Fot95GbiICRLE1I4yu9R-metaY2thai1mbS5wbmc=--lg.webp"
    },
    {
        tuning: "93,7",
        name: "ICI Radio-Canada Première Saguenay–Lac-Saint-Jean",
        pays: "Canada - Québec (Saguenay)",
        url: " https://playerservices.streamtheworld.com/api/livestream-redirect/CBJFM_SRC.mp3",
        logo: "https://cdn.onlineradiobox.com/img/l/1/16561.v10.png"
    },
    {
        tuning: "94,5",
        name: "Energie Saguenay-Lac-St-Jean (CJAB-FM)",
        pays: "Canada - Québec (Saguenay)",
        url: "https://playerservices.streamtheworld.com/api/livestream-redirect/CJABFM_ADP.aac",
        logo: "https://top-radio.org/wp-content/uploads/logo/id/22626.png"
    },
    {
        tuning: "95,7",
        name: "KYK - Saguenay (CKYK-FM)",
        pays: "Canada - Québec (Saguenay)",
        url: "https://playerservices.streamtheworld.com/api/livestream-redirect/CKYKFM.mp3",
        logo: "https://cdn.onlineradiobox.com/img/l/4/12304.v9.png"
    },
    {
        tuning: "96,9",
        name: "Rouge FM Saguenay-Lac-St-Jean (CFIX-FM)",
        pays: "Canada - Québec (Saguenay)",
        url: "https://playerservices.streamtheworld.com/api/livestream-redirect/CFIXFM_ADP.aac",
        logo: "https://cdn.onlineradiobox.com/img/l/4/11624.v14.png"
    },
    {
        tuning: "98,3",
        name: "Rythme FM Saguenay (CILM-FM)",
        pays: "Canada - Québec (Saguenay)",
        url: "https://playerservices.streamtheworld.com/api/livestream-redirect/CILMFM.mp3",
        logo: "https://cdn.onlineradiobox.com/img/l/5/80625.v7.png"
    },
    {
        tuning: "100,9",
        name: "Ici Musique Saguenay",
        pays: "Canada - Québec (Saguenay)",
        url: "https://playerservices.streamtheworld.com/api/livestream-redirect/CBJXFM_SRC.mp3",
        logo: "https://cdn.onlineradiobox.com/img/l/2/19352.v6.png"
    },
    {
        tuning: "106,7",
        name: "Galilée Saguenay",
        pays: "Canada - Québec (Saguenay)",
        url: "https://cast1.asurahosting.com/proxy/fondatio/stream2",
        logo: "https://cdn.onlineradiobox.com/img/l/7/22837.v4.png"
    }
];
const stationsMontreal = [

    {
        tuning: "96,9",
        name: "Rouge FM",
        url: "https://playerservices.streamtheworld.com/api/livestream-redirect/CITEFM.mp3",
        logo: "https://cdn.onlineradiobox.com/img/l/9/11619.v8.png"
    },
    {
        tuning: "97,7",
        name: "CHOM 97.7 Montréal",
        url: "https://playerservices.streamtheworld.com/api/livestream-redirect/CHOMFMAAC.aac",
        logo: "https://cdn.onlineradiobox.com/img/l/6/10906.v9.png"
    },
    {
        tuning: "99,5",
        name: "Radio Classique",
        url: " https://listen.radioking.com/radio/228241/stream/271810",
        logo: "https://cdn.onlineradiobox.com/img/l/5/10905.v10.png"
    },
    {
        tuning: "105,7",
        name: "Rythme FM",
        url: " https://playerservices.streamtheworld.com/api/livestream-redirect/CFGLFM.mp3",
        logo: "https://cdn.onlineradiobox.com/img/l/0/16960.v12.png"
    }
];
const stationsQuebec = [

    {
        tuning: "98,9",
        name: "Energie Québec (CHIK-FM)",
        url: " https://playerservices.streamtheworld.com/api/livestream-redirect/CHIKFM_ADP.aac",
        logo: "https://www.radioenergie.ca/content/dam/audio/iheart-stations-logos/logo-nrj-quebec.svg"
    },
    {
        tuning: "102,9",
        name: "Rythme FM Québec (CFOM-FM)",
        url: "https://playerservices.streamtheworld.com/api/livestream-redirect/CFOMFM_SC.aac",
        logo: "https://cdn.cogecolive.com/websites-public/logo_rythme_quebec_color_ripple.svg"
    }
];

const stationsSherbrooke = [

    {
        tuning: "98,1",
        name: "Rythme FM Sherbrooke (CFGE-FM)",

        url: "https://playerservices.streamtheworld.com/api/livestream-redirect/CFGEFM_SC.aac",
        logo: "https://cdn.cogecolive.com/websites-public/logo_rythme_estrie_color_ripple.svg"
    }
];
const stationsAlma = [

    
];
const stationList = document.getElementById('stationList');
const frequencyTicks = document.getElementById('frequencyTicks');
const audioPlayer = document.getElementById('audioPlayer');
const frequencyRange = document.getElementById('frequencyRange');
const frequencyDisplay = document.getElementById('frequencyDisplay');
const regionSelector = document.getElementById('regionSelector');
let currentActive = null;
let stations = [];

// Fonction pour charger les stations en fonction de la région sélectionnée
function loadStations(region) {
    // Effacer les éléments existants
    stationList.innerHTML = '';
    frequencyTicks.innerHTML = '';

    // Charger les stations en fonction de la région sélectionnée
    switch(region) {
        case 'Saguenay':
            stations = stationsSaguenay;
            break;
        case 'Montreal':
            stations = stationsMontreal;
            break;
        case 'Quebec':
            stations = stationsQuebec;
            break;
        case 'Sherbrooke':
            stations = stationsSherbrooke;
            break;
        // Add other cases for other regions
        default:
            stations = [];
    }

    // Ajouter les stations à la liste
    stations.forEach((station, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<div class="station-tuning">${station.tuning}</div>
                      <span>
                        <figure class="station__logo">
                            <img class="station-logo" src="${station.logo}" alt="${station.name}" title="${station.name}">
                        </figure>
                      </span>
                      <div class="station-name">${station.name}</div>`;
        listItem.addEventListener('click', () => {
            setActiveStation(index);
        });
        stationList.appendChild(listItem);

        // Ajouter les ticks de fréquence
        const tickItem = document.createElement('div');
        tickItem.classList.add('frequency-tick');
        tickItem.textContent = station.tuning;
        frequencyTicks.appendChild(tickItem);
    });

    // Configurer la roulette de fréquence
    frequencyRange.max = stations.length - 1;

    // Mettre à jour l'affichage de la station active
    setActiveStation(0);
}

// Mettre à jour la station active lorsque la roulette de fréquence change
frequencyRange.addEventListener('input', (event) => {
    setActiveStation(event.target.value);
});

// Fonction pour mettre à jour la station active
function setActiveStation(index) {
    if (currentActive) {
        currentActive.classList.remove('station-active');
    }
    const listItem = stationList.children[index];
    listItem.classList.add('station-active');
    currentActive = listItem;

    // Changer la source de l'audio et jouer
    audioPlayer.src = stations[index].url;
    audioPlayer.play();

    // Mettre à jour l'affichage de la fréquence
    frequencyDisplay.textContent = `Fréquence: ${stations[index].tuning} MHz`;
    frequencyRange.value = index;
}

// Écouter les changements de sélection dans le menu déroulant
regionSelector.addEventListener('change', (event) => {
    const selectedRegion = event.target.value;
    loadStations(selectedRegion);
});

// Charger les stations pour la région par défaut (Saguenay)
loadStations('Saguenay');

// Ajouter les événements pour les boutons
document.getElementById('stopButton').addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
});

document.getElementById('prev').addEventListener('click', () => {
    let currentIndex = parseInt(frequencyRange.value, 10);
    if (currentIndex > 0) {
        setActiveStation(currentIndex - 1);
    }
});

document.getElementById('next').addEventListener('click', () => {
    let currentIndex = parseInt(frequencyRange.value, 10);
    if (currentIndex < stations.length - 1) {
        setActiveStation(currentIndex + 1);
    }
});

var map = L.map('map').setView([50, -90], 3);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var regions = [
    {name: "Saguenay", coords: [48.4168, -71.0653]},
    {name: "Montreal", coords: [45.5017, -73.5673]},
    {name: "Saint-Hyacinthe", coords: [45.6308, -72.9567]},
    {name: "Saint-Jean-sur-Richelieu", coords: [45.3070, -73.2623]},
    {name: "Drummondville", coords: [45.8833, -72.4854]},
    {name: "Est-du-Quebec", coords: [48.3581, -68.5811]},
    {name: "Estrie", coords: [45.4103, -71.8820]},
    {name: "Gatineau-Ottawa", coords: [45.4765, -75.7013]},
    {name: "Mauricie", coords: [46.6090, -72.2081]},
    {name: "Quebec", coords: [46.8139, -71.2082]},
    {name: "Rouyn-Noranda", coords: [48.2324, -79.0283]},
    {name: "Val-d'Or", coords: [48.0972, -77.7974]},
    {name: "Amqui", coords: [48.4634, -67.4349]},
    {name: "Rimouski", coords: [48.4333, -68.5230]},
    {name: "Alma", coords: [48.5500, -71.6500]},
    {name: "Chibougamau", coords: [49.9133, -74.3683]},
    {name: "Dolbeau-Mistassini", coords: [48.8836, -72.2256]},
    {name: "Roberval", coords: [48.5209, -72.2227]},
    {name: "Trois-Rivieres", coords: [46.3430, -72.5467]},
    {name: "Sherbrooke", coords: [45.4042, -71.8929]},
    {name: "Saint-Jerome", coords: [45.7807, -74.0036]},
    {name: "Mont-Tremblant", coords: [46.1184, -74.5962]},
    {name: "Lachute", coords: [45.6526, -74.3252]},
    {name: "Hawkesbury", coords: [45.6070, -74.6044]},
    {name: "La-Pocatiere", coords: [47.3641, -70.0347]},
    {name: "Riviere-du-Loup", coords: [47.8361, -69.5333]},
    {name: "Montmagny", coords: [46.9794, -70.5500]},
    {name: "Saint-Georges-de-Beauce", coords: [46.1214, -70.6690]},
    {name: "Baie-Comeau", coords: [49.2167, -68.1500]},
    {name: "Cote-Nord", coords: [50.0000, -66.6667]},
    {name: "Gaspesie-Iles-de-la-Madeleine", coords: [48.7743, -64.4810]},
    {name: "Grand-Nord", coords: [51.8918, -76.0513]},
    {name: "Ile-du-Prince-Edouard", coords: [46.2500, -63.0000]},
    {name: "Nord-de-l'Ontario", coords: [49.7592, -84.3631]},
    {name: "Ottawa", coords: [45.4215, -75.6972]},
    {name: "Toronto", coords: [43.651070, -79.347015]},
    {name: "Windsor", coords: [42.3149, -83.0364]},
    {name: "Manitoba", coords: [49.8951, -97.1384]},
    {name: "Saskatchewan", coords: [52.9399, -106.4509]},
    {name: "Nouveau-Brunswick", coords: [45.9636, -66.6431]},
    {name: "Nouvelle-Ecosse", coords: [44.6820, -63.7443]},
    {name: "Terre-Neuve-et-Labrador", coords: [53.1355, -57.6604]}
];

// Boucle forEach pour ajouter les marqueurs sur la carte
regions.forEach(function(region) {
    // Ajouter un marqueur pour cette région
    L.marker(region.coords).addTo(map)
    .bindPopup(region.name)
    .on('click', function() {
        // Mettre à jour la valeur du sélecteur de région
        document.getElementById('regionSelector').value = region.name;
        // Charger les stations pour la région sélectionnée
        loadStations(region.name);
    });
});


document.getElementById('regionSelector').addEventListener('change', function() {
    var selectedRegion = this.value;
    var region = regions.find(r => r.name === selectedRegion);
    if (region) {
        map.setView(region.coords, 7);

        L.popup()
        .setLatLng(region.coords)
        .setContent(region.name)
        .openOn(map);


    }
});

document.querySelectorAll('#regionSelector option').forEach(function(option) {
    option.addEventListener('mouseenter', function() {
        var selectedRegion = this.value;
        var region = regions.find(r => r.name === selectedRegion);
        if (region) {
            map.setView(region.coords, 7);
            L.popup()
             .setLatLng(region.coords)
             .setContent(region.name)
             .openOn(map);
        }
    });
});

// Création d'un contrôle personnalisé pour recentrer la carte
var recenterControl = L.Control.extend({
    options: {
        position: 'topright' // Choisir la position du bouton
    },

    onAdd: function (map) {
        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom map-button');

        container.innerHTML = 'Recentrer';
        container.style.backgroundColor = 'white';
        container.style.color = 'black';
        container.style.width = 'auto';
        container.style.height = 'auto';
        container.style.cursor = 'pointer';
        container.style.padding = '10px';

        container.onclick = function(){
            map.setView([50, -90], 3);
        }

        return container;
    }
});

map.addControl(new recenterControl());
