
document.addEventListener('DOMContentLoaded', function() {
    displayCheckoutData();
});

function displayCheckoutData() {
    //Container für Datenausgabe
    const outputContainer = document.getElementById('checkout-output');

    //Daten aus dem Storage holen
    const savedString = sessionStorage.getItem('checkoutData');
    const data = mapDatenFlexibel(savedString);


    //kurzer Sicherheitscheck
    if (!data.Vorname) {
        outputContainer.innerHTML = '<li class="list-group-item text-danger">Keine Daten gefunden. Bitte fülle das Formular erneut aus.</li>';
        return; 
    }

    
    Object.entries(data).forEach(([key, value]) => {
        
        //Ersten Buchstaben hervorheben
        const label = key.charAt(0).toUpperCase() + key.slice(1);

        // Liste zusammenbauen
        const listItemHTML = `
            <li class="list-group-item">
                <div class="row">
                    <div class="col-4 fw-bold">${label}:</div>
                    <div class="col-8">${value}</div>
                </div>
            </li>
        `;

        // Ins HTML einfügen
        outputContainer.innerHTML += listItemHTML;
    });

    const datum = new Date();
    const datumFormat = datum.toLocaleString('de-DE');
    const datumDiv = document.getElementById('anzeiger')
    
    datumDiv.innerText =  datumFormat;
}


function mapDatenFlexibel(wert) {
    const rohDaten = wert;
    if (!rohDaten) return null;
    const rohObjekt = JSON.parse(rohDaten);

    //Zuweisung alter und neuer Key
    const keyMap = {
        "firstName1": "Vorname",
        "firstName2": "Vorname",
        "lastName1": "Nachname",
        "lastName2": "Nachname",
        "email1": "Email",
        "email2": "Email",
        "artDerKleidung1": "Art der Kleidung",
        "artDerKleidung2": "Art der Kleidung",
        "krisengebiet1": "Krisengebiet",
        "krisengebiet2": "Krisengebiet",
        "adress": "Adresse",
        "plz": "PLZ"
    };

    const neuesObjekt = {};

    //Gehen durch die Map und holen die Daten aus dem Quell-Objekt
    for (const [keyAlt, keyNeu] of Object.entries(keyMap)) {
        if (rohObjekt[keyAlt] !== undefined) {
            neuesObjekt[keyNeu] = rohObjekt[keyAlt];
        }
    }

    return neuesObjekt;
}