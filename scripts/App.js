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