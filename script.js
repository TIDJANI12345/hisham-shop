// Liste des produits
const produits = [
  {
    nom: "Parfum",
    image: "images/parfum.jpg",
    description: "Huile de parfum de qualité. Disponible immédiatement.",
    categorie: "produit vestimentaire",
    lien: "https://www.lien-affiliation.com/parfum"
  },
  {
    nom: "Thémos",
    image: "images/Thémos.jpg",
    description: "Disponible immédiatement.",
    categorie: "Cuisine",
    lien: "https://www.lien-affiliation.com/themos"
  },
  {
    nom: "Moulinesse",
    image: "images/moulinesse.jpg",
    description: "Fufumix RAF de capacité 3L immédiatement disponible pour vous Prix TTC 10000.",
    categorie: "Cuisine",
    lien: "https://www.lien-affiliation.com/moulinesse"
  },
  {
    nom: "Casseroles",
    image: "images/casserole.jpg",
    description: "Casserole de table lot de 13 pièces Immédiatement disponible.",
    categorie: "Cuisine",
    lien: "https://www.lien-affiliation.com/casserole"
  },
  {
    nom: "Verres",
    image: "images/verre.jpg",
    description: "Verre à eau lisse Immédiatement disponible à 5000.",
    categorie: "Cuisine",
    lien: "https://www.lien-affiliation.com/verres"
  },
  {
    nom: "Ventilateur",
    image: "images/ventilateur.jpg",
    description: "Grand ventilateur de chambre, bureau, boutique, salon, etc. À liquider à 15500.",
    categorie: "Refroidisseur",
    lien: "https://www.lien-affiliation.com/ventilateur"
  },
  {
    nom: "Valise",
    image: "images/valise.jpg",
    description: "Valise de haute qualité.",
    categorie: "valise",
    lien: "https://www.lien-affiliation.com/valise"
  }
];

// Sélectionner le conteneur où les produits seront affichés
const conteneur = document.querySelector('.produits');

// Fonction pour afficher les produits
function afficherProduits(categorie) {
  conteneur.innerHTML = ''; // Vider le conteneur à chaque appel
  const produitsFiltres = categorie === 'tous' ? produits : produits.filter(p => p.categorie.toLowerCase() === categorie.toLowerCase());

  produitsFiltres.forEach(p => {
    conteneur.innerHTML += `
      <div class="produit">
        <img src="${p.image}" alt="${p.nom}">
        <h3>${p.nom}</h3>
        <p>${p.description}</p>
        <a href="${p.lien}" target="_blank" class="bouton-produit">Voir le produit</a>
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
        <a href="${p.lien}" target="_blank" class="bouton-produit">Voir le produit</a>
      </div>
    `;
  });
});

// Menu responsive
function toggleMenu() {
  const nav = document.getElementById('nav-links');
  nav.classList.toggle('hidden');
}
