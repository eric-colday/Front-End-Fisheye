    function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        // console.log(photographersSection);

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    function init() {
        // Récupère les datas des photographes
        fetch("./data/photographers.json")
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
        const { photographers } = data;
        displayData(photographers);
        });

    }
    
    init();
    