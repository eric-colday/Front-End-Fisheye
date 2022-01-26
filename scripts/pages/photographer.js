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


// button sort popularity/title/date
function displaySortImages() {
  const SortButtonSection = document.querySelector(".select-dropdown");
  const buttonSort = sortImagesDOM();
  SortButtonSection.appendChild(buttonSort);
  console.log(SortButtonSection);
}

// display images by photographer
function displayMediaData(mediasphotographer, filterBy) {
  const MediaSection = document.querySelector(".photograph-catalog-cards");

  let mediasphotographerFiltered = null;

  //  filter medias by type
  mediasphotographerFiltered = mediasphotographer.sort((a, b) => {
    return a.likes - b.likes;
  });

  if (filterBy === "popularity") {
    mediasphotographerFiltered = mediasphotographer.sort((a, b) => {
      return a.likes - b.likes;
    });
  }
  if (filterBy === "title") {
    mediasphotographerFiltered = mediasphotographer.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  }
  if (filterBy === "date") {
    mediasphotographerFiltered.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  }

  // create mediaSection
  MediaSection.innerHTML = "";
  mediasphotographerFiltered.forEach((media) => {
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

    //show button sort by
    displaySortImages();

    // display sort images for photographer
      // get info sort by button
    displayMediaData(ShowMediaphototgrapher, "popularity");

    const sortByType = document.getElementById("select_images");

    //change orientation arrow buttom sort by popularity/date/title
    sortByType.addEventListener("click", () => {
      const arrowUpDown = document.querySelector(".arrow-down");
      arrowUpDown.classList.toggle("rotated");
    });

    sortByType.addEventListener("change", (e) => {
      if (e.target.value === "popularity") {
        displayMediaData(ShowMediaphototgrapher, "popularity");
      }
      if (e.target.value === "date") {
        displayMediaData(ShowMediaphototgrapher, "date");
      }
      if (e.target.value === "title") {
        displayMediaData(ShowMediaphototgrapher, "title");
      }
      AddClickHeart();
      lightboxShow();
    });
    
  })
}
initPhotographer();

