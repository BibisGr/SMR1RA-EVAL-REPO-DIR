const products = [
    "Impact Whey Protein",
    "Botella Hydrate",
    "Guantes gimnasio",
    "Straps",
    "Cinturón Levantamiento de Pesas",
    "Pack Impact Diet",
    "Proteina Dragon Ball",
    "Producto 4"
];

function showSuggestions(value) {
    const suggestionsContainer = document.getElementById('suggestions');
    suggestionsContainer.innerHTML = ''; 
    if (value) {
        const filteredProducts = products.filter(product => product.toLowerCase().includes(value.toLowerCase()));
        filteredProducts.forEach(product => {
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.textContent = product;
            suggestionItem.addEventListener('click', () => {
                document.getElementById('search-input').value = product;
                suggestionsContainer.innerHTML = ''; 
            });
            suggestionsContainer.appendChild(suggestionItem);
        });
        suggestionsContainer.style.display = 'block'; 
    } else {
        suggestionsContainer.style.display = 'none'; 
    }
}


document.addEventListener('click', function(event) {
    const searchContainer = document.querySelector('.search-container');
    if (!searchContainer.contains(event.target)) {
        document.getElementById('suggestions').style.display = 'none';
    }
});
document.getElementById("search-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
     
        const searchValue = document.getElementById("search-input").value;
        window.location.href = "/pag/articulo.html?buscar=" + searchValue;
    }
});
const articleUrls = {
    "Impact Whey Protein": "/pag/products/impact-whey-protein.html",
    "Botella Hydrate": "/pag/products/botella-hydrate.html",
    "Pack Impact Diet": "/pag/products/pack-impact-bottle.html",
    
};


document.getElementById("search-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        // Obtiene el valor del campo de búsqueda
        const searchValue = document.getElementById("search-input").value.trim();

        // Verifica si hay una URL asignada para el término de búsqueda
        if (articleUrls[searchValue]) {
            // Redirige a la URL correspondiente
            window.location.href = articleUrls[searchValue];
        } else {
            // Manejo de caso donde no se encuentra la URL
            alert("No se encontró el artículo. Por favor, verifica tu búsqueda.");
        }
    }
});
