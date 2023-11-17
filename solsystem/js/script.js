document.addEventListener('DOMContentLoaded', function () {
        
    // Hämta referenser till HTML-element

    const planetsContainer = document.getElementById('planets-container');
    const overlay = document.getElementById('overlay');
    const overlayContent = document.getElementById('overlay-content');
    const planetNameElement = document.getElementById('planet-name');
    const planetInfoElement = document.getElementById('planet-info');

    // Funktion för att hämta API-nyckel (ersätt med faktisk logik)

    function getAPIKey() {
        
    // Ersätt detta med faktisk logik för att hämta API-nyckeln

        return Promise.resolve({ apiKey: 'DIN_API_NYCKEL_HAR' });
    }

    // Funktion för att hämta planetinformation från API:et

    async function fetchPlanetInfo(planetName) {
        const apiKey = await getAPIKey();
        const apiUrl = `https://api.le-systeme-solaire.net/rest/bodies/${planetName}?apiKey=${apiKey.apiKey}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching planet information:', error);
        }
    }

    // Funktion för att visa planetinformation baserat på hämtade data

    function displayPlanetInfo(planetInfo) {
        planetNameElement.textContent = planetInfo.englishName;

    // Anpassa detta avsnitt för att inkludera ytterligare information för varje planet

        switch (planetInfo.englishName) {
            case 'Sun':

                // Visa information för solen

                planetInfoElement.innerHTML = `
                    <p id="latin">Solis</p>
                    <p>Solen är vår stjärna och centrum i solsystemet. Den är en G-dvärg som genererar energi genom termonukleära fusioner av väte i dess kärna. Solen består främst av väte och helium och strålar ut ljus och värme. Den påverkar jorden genom gravitation och strålning, och dess energi stöder livet genom fotosyntesen. Solen genomgår en 11-årig solcykel med varierande aktivitet på dess yta, synlig som solfläckar och solfakler. Studier av solen ger insikter om stjärnors beteende och utveckling. </p>
                    <p id="omkrets"><strong>Omkrets:</strong> 696,340 km</p>
                    <p id="max"><strong>Max Temperatur:</strong> 5,500°C</p>
                    <p id="km"><strong>Km från solen:</strong> 0 km</p>
                    <p id="min"><strong>Min Temperatur:</strong> 3,500°C</p>
                `;
               break;
               case 'Mercury':

                // Visa information för Merkurius

                planetInfoElement.innerHTML = `
                <p id="latin">Mercurius</p>
                <p>Merkur är den minsta och innersta planeten i solsystemet. Den saknar en atmosfär i traditionell mening och har extrema temperaturvariationer mellan dess extrema hetta på dagtid och kyla på natten. Ytan är täckt av kratrar och har få geologiska aktiviteter jämfört med jorden. </p>
                <p id="omkrets"><strong>Omkrets:</strong> 4,880 km</p>
                <p id="max"><strong>Max Temperatur:</strong> 430°C</p>
                <p id="km"><strong>Km från solen:</strong> 57,9 miljoner km</p>
                <p id="min"><strong>Min Temperatur:</strong> -180°C</p>
                `;
                break;
                case 'Venus':

                // Visa information för Venus

                    planetInfoElement.innerHTML = `
                    <p id="latin">Wenos</p>
                    <p>Venus är nästan identisk i storlek och massa som jorden och är den hetaste planeten i solsystemet på grund av dess tjocka atmosfär som fångar och håller värmen. Atmosfären består främst av koldioxid och moln av svavelsyra. Ytan präglas av vulkaniska formationer och stora slätter. </p>
                    <p id="omkrets"><strong>Omkrets:</strong> 12,104 km</p>
                    <p id="max"><strong>Max Temperatur:</strong> 465°C</p>
                    <p id="km"><strong>Km från solen:</strong> 108 miljoner km</p>
                    <p id="min"><strong>Min Temperatur:</strong> -200°C</p>
                    `;
                break;
                case 'Earth':

                // Visa information för Jorden 

                planetInfoElement.innerHTML = `
                <p id="latin">Tellus</p>
                <p>Jorden har allt som behövs för att liv ska kunna finnas. Det är faktiskt bara på vår planet som vi känner till att det finns liv överhuvudtaget. Detta beror på att jorden ligger på lagom avstånd från solen, vår närmaste stjärna. Det är därför inte för varmt eller för kallt som på de andra planeterna i vårt solsystem. Här finns luft och vatten för växter, djur och människor. </p>
                <p id="omkrets"><strong>Omkrets:</strong> 40,075 km</p>
                <p id="max"><strong>Max Temperatur:</strong> 56.7°C</p>
                <p id="km"><strong>Km från solen:</strong> 149.6 miljoner km</p>
                <p id="min"><strong>Min Temperatur:</strong> --89.2°C</p>
                `;
                break;
                case 'Mars':

                // Visa information för Mars

                planetInfoElement.innerHTML = `
                <p id="latin">Martius</p>
                <p>Mars är känd som den röda planeten på grund av dess järnoxidrika yta. Den har en tunn atmosfär som huvudsakligen består av koldioxid och har vissa geologiska drag, inklusive den största vulkanen och den djupaste ravinen i solsystemet. Mars har också polkappar av fruset vatten. </p>
                <p id="omkrets"><strong>Omkrets:</strong> 21,344 km</p>
                <p id="max"><strong>Max Temperatur:</strong> 20°C</p>
                <p id="km"><strong>Km från solen:</strong> 227.9 miljoner km</p>
                <p id="min"><strong>Min Temperatur:</strong> -125°C</p>
                `;
                break;
                case 'Jupiter':

                // Visa information för Jupiter

                planetInfoElement.innerHTML = `
                <p id="latin">Luppiter</p>
                <p>Jupiter är den största planeten och har ingen fast yta, bara ett tjockt molnskikt. Den är känd för sitt starka magnetfält och har över 70 kända månar, inklusive de fyra största, kända som Galileiska månarna: Io, Europa, Ganymedes och Callisto. </p>
                <p id="omkrets"><strong>Omkrets:</strong> 4,880 km</p>
                <p id="max"><strong>Max Temperatur:</strong> -145°C</p>
                <p id="km"><strong>Km från solen:</strong> 57,9 miljoner km</p>
                <p id="min"><strong>Min Temperatur:</strong> ju längre ner i planetens atmosfär man går?°C</p>
                `;
                break;
                case 'Saturn':

                // Visa information för Saturn

                planetInfoElement.innerHTML = `
                <p id="latin">Saturnus</p>
                <p>Saturnus är känd för sina spektakulära ringar, som huvudsakligen består av ispartiklar och sten. Planeten har en låg densitet och består huvudsakligen av vätgas och helium. Saturnus har över 80 månar, inklusive Titan, den största av dem, som har en tjock atmosfär och sjöar av flytande metan och etan på ytan. </p>
                <p id="omkrets"><strong>Omkrets:</strong> 365,882 km</p>
                <p id="max"><strong>Max Temperatur:</strong> -178°C</p>
                <p id="km"><strong>Km från solen:</strong> 1.4 miljarder km</p>
                <p id="min"><strong>Min Temperatur:</strong> ju längre ner i planetens atmosfär man går?°C</p>
                `;
                break;
                case 'Uranus':

                // Visa information för Uranus

                planetInfoElement.innerHTML = `
                <p id="latin">Uranus</p>
                <p>Uranus ligger på sin sida i solsystemet och roterar nästan parallellt med sitt omlopp. Den har en atmosfär av vätgas, helium och metan och uppvisar några unika drag, inklusive extrem lutning och retrograd rotation. </p>
                <p id="omkrets"><strong>Omkrets:</strong>  160,592 km</p>
                <p id="max"><strong>Max Temperatur:</strong> -224°C</p>
                <p id="km"><strong>Km från solen:</strong> 2.9 miljarder km</p>
                <p id="min"><strong>Min Temperatur:</strong> ju längre ner i planetens atmosfär man går?°C</p>
                `;
                break;
                case 'Neptune':

                // Visa information för Neptun

                planetInfoElement.innerHTML = `
                <p id="latin">Neptunus</p>
                <p>Neptunus är den yttre planeten och har en blåaktig färg på grund av metan i dess atmosfär. Den har starka vindar och stormar och är känd för sin största måne, Triton, som roterar i en retrograd riktning och förmodas vara en infångad dvärgplanet. </p>
                <p id="omkrets"><strong>Omkrets:</strong> 155,600 km</p>
                <p id="max"><strong>Max Temperatur:</strong> 218°C</p>
                <p id="km"><strong>Km från solen:</strong> 4,5 miljader km</p>
                <p id="min"><strong>Min Temperatur:</strong> ju längre ner i planetens atmosfär man går?°C</p>
                `;
                break;

                

            default:

        // Visa ett standardmeddelande om planeten inte känns igen

                planetInfoElement.innerHTML = `
                    <p>Additional information for ${planetInfo.englishName}</p>
                `;
        }
    }

        // Funktion för att skapa ett planetelement och ställa in klickhändelse

    function createPlanetElement(planetName) {
        const planetElement = document.createElement('div');
        planetElement.className = 'planet';
        planetElement.id = planetName.toLowerCase();

        planetElement.addEventListener('click', async function () {
            const planetInfo = await fetchPlanetInfo(planetName.toLowerCase());
            displayOverlay();
            displayPlanetInfo(planetInfo);
        });

        planetsContainer.appendChild(planetElement);
    }

        // Funktion för att visa överlagret

    function displayOverlay() {
        overlay.style.display = 'block';
    }

        // Funktion för att stänga överlagret

    function closeOverlay() {
        overlay.style.display = 'none';
    }

    // Skapa planetelement för varje planet i solsystemet
    const planets = ['Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

    planets.forEach(planet => {
        createPlanetElement(planet);
    });

        // Exponera funktionen closeOverlay till det globala omfånget

    window.closeOverlay = closeOverlay;
});
