    function getPhotographers() {
        // 1- Ajout de fetch dans la fonction getPhotographers 
        // pour récupérer les datas, et faire un console.log de ces datas

        fetch("./data/photographers.json")
          .then((res) => res.json())
          .then((res) => res.data)

          .catch((error) => console.log("Il y a un error:" + error));    
    }

    // lance l'aplication
    getPhotographers(); 

    function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

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
    