document.addEventListener('DOMContentLoaded', () => {
    // Abruf der Formulare
    const form1 = document.getElementById('formAbholung');
    const form2 = document.getElementById('formAbgabe');

    function speichernWeiterleiten(event) {
        event.preventDefault();
        

        // Daten aus dem Forumlar ziehen und im sessionStorarge speichern
        const formData = new FormData(event.target); 
        const data = Object.fromEntries(formData.entries());

        // Kennung geben 
        data.formType = event.target.id; 
        sessionStorage.setItem('checkoutData', JSON.stringify(data));
        window.location.href = 'checkout.html'; // weiterleiten zum Checkout
        
    }

    // Listener für Formular 1
    form1.addEventListener('submit', speichernWeiterleiten);

    // Listener für Formular 2
    form2.addEventListener('submit', speichernWeiterleiten);
});