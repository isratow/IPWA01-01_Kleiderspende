document.addEventListener('DOMContentLoaded', function() {
    const formular1 = document.getElementById('formular1');
    const formular2 = document.getElementById('formular2');
    const btnForm1 = document.getElementById('btnForm1');
    const btnForm2 = document.getElementById('btnForm2');

    function zeigeFormular(dasFormular) {
        // Alle Formulare verstecken
        formular1.classList.add('d-none');
        formular2.classList.add('d-none');
        
        // Das gewünschte Formular anzeigen
        dasFormular.classList.remove('d-none');
    }

    // Event-Listener für Button 1
    btnForm1.addEventListener('click', function() {
        zeigeFormular(formular1);
    });

    // Event-Listener für Button 2
    btnForm2.addEventListener('click', function() {
        zeigeFormular(formular2);
    });

    //Beim Laden der Seite Formular 1 anzeigen
    zeigeFormular(formular1);
});