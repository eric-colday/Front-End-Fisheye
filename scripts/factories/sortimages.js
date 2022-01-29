function sortImagesDOM() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("sort_medias");

    let buttonSortImages = "";

    buttonSortImages = `
      <label for="select_images" id="sort" tabindex="0">Trier par</label>
        <select id="select_images" data-trigger="select" tabindex="0" >
            <option value="popularity">Popularité</option>
            <option value="date">Date</option>
            <option value="title">Titre</option>
        </select>
      <i class="fas fa-chevron-down arrow-down"></i>
      
    `;
  
    $wrapper.innerHTML = buttonSortImages;
    return $wrapper;
}