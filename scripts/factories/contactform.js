function contactFormFactory(data) {
    const { name, id } = data;

    function contactFormDOM() {
        const $wrapper = document.createElement("div");
        $wrapper.classList.add("modal");
        $wrapper.setAttribute("aria-label", "image closeup view");
    
        let cardForm = "";
    
        cardForm += `
            <div class="modal-title" tabindex="0">
                <h2>Contactez-moi</h2>
                <h2 class="modal_name">${name}</h2>
            </div>
          
            <form id="contact_Photograph" role="form" action="" method="">
           
                <div role="group" aria-labelledby="coordonnees">
                    <label for="first_name" tabindex="0">Prénom</label>
                    <input type="text" name="first_name" id="first_name" aria-required="true" minlength="2" tabindex="0"/>
                    <p class="firstName_error error_msn"></p>
                    <label for="last_name" tabindex="0">Nom</label>
                    <input type="text" name="last_name" id="last_name" aria-required="true" minlength="2" tabindex="0"/>
                    <p class="lastName_error error_msn hide"></p>
                    <label for="email" tabindex="0">Email</label>
                    <input type="email" name="email" id="email" aria-required="true" tabindex="0"/>
                    <p class="email_error error_msn"></p>
                    <label for="your_message" tabindex="0">Votre message</label>
                    <textarea id="your_message" name="your_message" aria-required="true" tabindex="0"></textarea>
                    <p class="your_message_error error_msn hide"></p>
                </div>
                <button class="contact_form_button contact_button" type="submit" tabindex="0">Envoyer</button>
            </form>
            <a href="#" aria-label="Close" class="close_form" tabindex="0" >
                <img src="./assets/icons/close.svg" />
            </a> 
        `;

        console.log($wrapper);
    
        $wrapper.innerHTML = cardForm;
        return $wrapper;
    }
    return { name, id, contactFormDOM };

}