document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const carCards = document.querySelectorAll('.car-card');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que la página recargue
            
            const marcaSeleccionada = e.target.textContent.toLowerCase();

            carCards.forEach(card => {
                const marcaCard = card.getAttribute('data-marca');
                
                if (marcaCard === marcaSeleccionada || marcaSeleccionada === 'concesionario') {
                    card.style.display = 'flex'; // Muestra
                } else {
                    card.style.display = 'none'; // Oculta
                }
            });
        });
    });
});