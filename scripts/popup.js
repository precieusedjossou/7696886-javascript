
function afficherPopup()  
    let popupBackground = document.querySelector(".popupBackground")
    // La popup est masquée par défaut (display:none), ajout de la classe "active"
    // va changer son display et la rendre visible. 
    popupBackground.classList.add("active")
}

function cacherPopup() {
    let popupBackground = document.querySelector(".popupBackground")
    //  supprimer la classe "active"
    // va rétablir cet affichage par défaut. 
    popupBackground.classList.remove("active")
}
function initAddEventListenerPopup() {
    // On écoute le click sur le bouton "partager"
    btnPartage = document.querySelector(".zonePartage button")
    let popupBackground = document.querySelector(".popupBackground")
    btnPartage.addEventListener("click", () => {
        // Quand on a cliqué sur le bouton partagé, on affiche la popup
        afficherPopup()
    })

    // On écoute le click sur la div "popupBackground"
    popupBackground.addEventListener("click", (event) => {
        // Si on a cliqué précisément sur la popupBackground 
        // (et pas un autre élément qui se trouve dedant)
        if (event.target === popupBackground) {
            // Alors on cache la popup
            cacherPopup()
        }
    })
}