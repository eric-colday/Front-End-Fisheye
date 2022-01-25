// header for each photographer

function displayPhotographerData(photograph) {
    const PhotographerSection = document.querySelector(
        ".photograph_header_section"
    );

    photograph.filter((person) => {
        const PhotographerPageModel = photographerPageFactory(person);
        const PhotographerDOM = PhotographerPageModel.PhotographerHeaderDOM();
        PhotographerSection.appendChild(PhotographerDOM);
    });
}

// display images by photographer
function displayMediaData(mediasphotographer) {
    const MediaSection = document.querySelector(".photograph-catalog-cards");

    

    // create mediaSection
  MediaSection.innerHTML = "";
  mediasphotographer.forEach((media) => {
    const MediaModel = MediaPageFactory(media);
    const MediaDOM = MediaModel.MediaDOM();
    MediaSection.appendChild(MediaDOM);
  });
}

function initPhotographer(){
    // Récupère les datas des photographes
  fetch("./data/photographers.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    //Récupère id photographe du URL
    const IDphotographer = new URLSearchParams(
        document.location.search.substring(1)
    );

    const idURL = IDphotographer.get("id");

    const { photographers } = data;
    const { media } = data;

    //filtre photographe avec id
    const Showphotographer = photographers.filter(
        (photographer) => photographer.id == idURL
    );

    // show header photographer
    displayPhotographerData(Showphotographer);

     //filtre media avec id
     const ShowMediaphototgrapher = media.filter(
        (media) => media.photographerId == idURL
    );

    // display sort images for photographer
      // get info sort by button
    displayMediaData(ShowMediaphototgrapher);
    
  })
}
initPhotographer();

