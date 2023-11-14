// Créer un événement au scroll
let playOnce = true;
window.addEventListener('scroll', (e)=> {
  // Navbar effect
  if (window.scrollY > 50) {
    navbar.style.height = '45px';
  } else {
    
    navbar.style.height = '90px';
  }

  // Cree une variable pour obtemir  pourcentage du body
  let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  // Image
  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = 'none';
  }

  // Popup
  if (scrollValue > 0.85  && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = 'none';
  }

  closeBtn.addEventListener('click', ()=> {
    popup.style.opacity = 0;
    popup.style.transform = 'translateY(100%)'
    playOnce = false;
  })
});

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
