window.addEventListener('load', function() {
    const header = document.querySelector('header');
    const big_title = document.querySelector('.big_title');
    const middle_title = document.querySelector('.middle_title');
    const contact2 = document.querySelector('.contact2');
    const hero_section = document.querySelector('.hero_section');

    // Ajoute la classe 'visible' à la navbar dès que la page est chargée
    header.classList.add('visible');
    hero_section.classList.add('fadein');
    
    // Ajoute un délai pour l'animation du titre après la navbar
    setTimeout(function() {
        big_title.classList.add('zoomin');  // Ajoute l'animation au titre après un délai
     }, 1000); // Délai de 1 seconde avant de lancer l'animation du titre

    setTimeout(function() {
        middle_title.classList.add('slidein');  // Ajoute l'animation au titre après un délai
    }, 1500); // Délai de 1 seconde avant de lancer l'animation du titre
   
    setTimeout(function() {
        contact2.classList.add('moveup');  // Ajoute l'animation au titre après un délai
    }, 1800); // Délai de 1 seconde avant de lancer l'animation du titre

});


// Sélectionner toutes les sections
const sections = document.querySelectorAll("section");

// Créer un observer pour détecter quand une section entre dans le viewport
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Ajouter la classe "visible" pour activer l'animation
        entry.target.classList.add("visible2");

        // Si l'on souhaite observer une seule fois :
        observer.unobserve(entry.target); // Stoppe l'observation
      }
    });
  },
  {
    threshold: 0.3 // Déclenche quand 20% de la section est visible
  }
);

// Appliquer l'observer à chaque section
sections.forEach(section => {
  observer.observe(section);
});


