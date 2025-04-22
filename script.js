// Liste des produits
const produits = [
  {
    nom: "Parfum",
    image: "images/parfum.jpg",
    description: "Huile de parfum de qualité. Disponible immédiatement.",
    categorie: "produit vestimentaire",
    whatsapp: "https://wa.me/22996704876?text=Je suis intéressé par le parfum"
  },
      
                // Catégorie CUISINE
  {
    nom: "Thémos",
    image: "images/Thémos.jpg",
    description: "Disponible immédiatement.",
    categorie: "Cuisine",
    whatsapp: "https://wa.me/22996704876?text=Je suis intéressé par le Thémos"
  },

  {
    nom: "Moulinesse",
    image: "images/moulinesse.jpg",
    description: "Fufumix RAF de capacité 3L immédiatement disponible pour vous Prix TTC 10000.",
    categorie: "cuisine",
    whatsapp: "https://wa.me/22996704876?text=Je suis intéressé par le moulinesse"
  },

  {
    nom: "Casseroles",
    image: "images/casserole.jpg",
    description: "Casserole de table lot de 13 pièces Immédiatement disponible .",
    categorie: "Cuisine",
    whatsapp: "https://wa.me/22996704876?text=Je suis intéressé par la casserole"
  },

  {
    nom: "verres",
    image: "images/verre.jpg",
    description: "Verre à eau lisse Immédiatement disponible à 5000.",
    categorie: "Cuisine",
    whatsapp: "https://wa.me/22996704876?text=Je veux ces verres"
  },

  {
    nom: "ventilateur",
    image: "images/ventilateur.jpg",
    description: "Grand ventilateur de chambre, bureau, boutique,salon etc🥳🥳🥳 À liquider à 15500 ",
    categorie: "Refroidisseur",
    whatsapp: "https://wa.me/22996704876?text=Je veux ce ventilateur"
  },

  {
    nom: "Valise",
    image: "images/valise.jpg",
    description: "Valise de haute qualité.",
    categorie: "valise",
    whatsapp: "https://wa.me/22996704876?text=Je veux cette valise"
  }
];

// Sélectionner le conteneur où les produits seront affichés
const conteneur = document.querySelector('.produits');

// Fonction pour afficher les produits
function afficherProduits(categorie) {
  conteneur.innerHTML = ''; // Vider le conteneur à chaque appel
  const produitsFiltres = categorie === 'tous' ? produits : produits.filter(p => p.categorie === categorie);

  produitsFiltres.forEach(p => {
    conteneur.innerHTML += `
      <div class="produit">
        <img src="${p.image}" alt="${p.nom}">
        <h3>${p.nom}</h3>
        <p>${p.description}</p>
        <a href="${p.whatsapp}" target="_blank">Commander sur WhatsApp</a>
      </div>
    `;
  });
}

// Afficher tous les produits au début
afficherProduits('tous');

// Gestion des filtres par catégorie
const boutons = document.querySelectorAll('.categories button');
boutons.forEach(b => {
  b.addEventListener('click', () => {
    afficherProduits(b.dataset.categorie);
  });
});

// Recherche en temps réel
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const recherche = searchInput.value.toLowerCase();
  const produitsFiltres = produits.filter(p =>
    p.nom.toLowerCase().includes(recherche) ||
    p.description.toLowerCase().includes(recherche)
  );
  conteneur.innerHTML = '';
  produitsFiltres.forEach(p => {
    conteneur.innerHTML += `
      <div class="produit">
        <img src="${p.image}" alt="${p.nom}">
        <h3>${p.nom}</h3>
        <p>${p.description}</p>
        <a href="${p.whatsapp}" target="_blank">Commander sur WhatsApp</a>
      </div>
    `;
  });
});


function toggleMenu() {
  const nav = document.getElementById('nav-links');
  nav.classList.toggle('hidden');
}