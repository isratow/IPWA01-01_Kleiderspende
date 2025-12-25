document.addEventListener('DOMContentLoaded', () => {
    // Elemente abrufen
    const plzInput = document.getElementById('plz');
    const plzFeedback = document.getElementById('plzFeedback');

    function plzValidieren(plz) {
        const trimmedPlz = plz.trim();
        
        if (trimmedPlz.length < 2) {
            return true;
        }

        // Die ersten beiden Zeichen auslesen und miteinander vergleichen
        const ersteZahl = trimmedPlz.charAt(0);
        const zweiteZahl = trimmedPlz.charAt(1);
        return ersteZahl == zweiteZahl; 
    }

    
    function updateDisplay() {
        const plzWert = plzInput.value;
        const istValide = plzValidieren(plzWert);
        
        // Entfernt vorherige Validierungs-Klassen
        plzInput.classList.remove('is-invalid', 'is-valid');

        if (plzWert.length === 0) {
            // Wenn das Feld leer ist, keine Validierung anzeigen
            plzFeedback.textContent = 'Bitte PLZ eingeben.';
            return;
        }

        if (istValide) {
            plzInput.classList.add('is-valid');
        } else {
            plzInput.classList.add('is-invalid');
            plzFeedback.textContent = 'PLZ ist ungültig.';
        }
    }

    // Event Listener für sofortige Validierung bei Eingabe
    plzInput.addEventListener('input', updateDisplay);

    // Aufruf, falls das Feld bei Seitenaufruf bereits gefüllt ist
    updateDisplay(); 
});