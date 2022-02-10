import { petitionCharacters, petitionLocations, petitionLocationsCharacter } from "./api/petitions.api";
import { generatorApiCharacterHTML, resetCont } from "./html-api.generator";
import { generatorApiCharacterHTMLLocations, generatorHtmlLocations, resetContLocation } from "./html-form.generator";

const htmlCreate = () => {
    const body = document.querySelector('body');
    const aside = document.createElement("aside");
    const h2 = document.createElement('h2');
    const div = document.createElement("div");

    h2.innerText = `Hola, por favor, elige una de las tres opciones del menu para poder interactuar con estos, espero te guste, muchas gracias.`;
    div.classList.add( "divDOM" );

    div.append( h2 );
    aside.append( div );
    body.append( aside );
}



const eventos = () => {

    const characters = document.querySelector(".characters");

    characters.addEventListener( "click", () => {
        resetCont();
        petitionCharacters()
            .then( ( data ) => {
                generatorApiCharacterHTML(data );
            } );
    });

    const locations = document.querySelector(".locations");

    locations.addEventListener( "click", () => {
        petitionLocations( resetContLocation() )
            .then( ( data ) => {
                generatorHtmlLocations( data );
                for (const value of data.residents) {
                    petitionLocationsCharacter(value)
                        .then( ( data ) => {
                            generatorApiCharacterHTMLLocations( data );
                        })
                }
            } ) 
    });

    const episodes = document.querySelector(".episodes");
    episodes.addEventListener( "click", () => {
        console.log("Click episodes");
    });

}

const init = () => {
    htmlCreate();
    eventos();
}


export {
    init
}