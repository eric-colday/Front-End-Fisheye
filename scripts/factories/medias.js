function MediaPageFactory(data) {
  const { id, photographerId, video, title, image, likes, date, price, alt } =
    data;

  const catalog = `./assets/photographers/${photographerId}/${image}`;

  //list media selon id
  function MediaDOM() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("photograph-catalog-card");

    let cardmedias = "";
    cardmedias += `<a href="#" class="media_link" data-mediaid="${id}" role="button" aria-label="${alt}" tabindex="0">
    `;
    if (video !== undefined) {
      cardmedias += `<video class="card_video medias_all" aria-label="${alt}" controls>
      <source src="./assets/photographers/${photographerId}/${video}" type="video/mp4">
      </video>`;
    } else {
      cardmedias += `<img class="card_image medias_all" src="${catalog}" alt="${alt}">`;
    }
    cardmedias += `
    </a>
    <div class="photograph-catalog-info">
       <div class="photograph-catalog-txt" tabindex="0">
          <h3>${title}</h3>
       </div>
        <div class="photograph-catalog-icon" tabindex="0" >
            <h3 class="photograph-catalog-like" >${likes}</h3>
            <i class="fas fa-heart like_img" tabindex="0" aria-label="likes" role="button"></i>
         </div>
       </div>
    `;

    $wrapper.innerHTML = cardmedias;
    return $wrapper;
  }
  return {
    id,
    photographerId,
    video,
    title,
    image,
    likes,
    date,
    price,
    alt,
    MediaDOM,
  };

}