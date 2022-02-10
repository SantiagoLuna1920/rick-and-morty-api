import { petitionLocations, petitionLocationsCharacter } from "./api/petitions.api";

let cont = 0;

    

const generatorEpisodesForm = () => {
    
}

const generatorHtmlLocations = ( data ) => {
    const aside = document.querySelector("aside");
    const div = document.createElement("div");
    
    aside.innerHTML = "";
    div.classList.add("container-cards");
    div.innerHTML = `<div class="containerB">
                        <button class="prevBL"><span>Prev</span></button>
                        <button class="nextBL"><span>Next</span></button>
                        <h1 style="color: #d1d1d1;"> ${ data.name } </h1>
                    </div>`;

    aside.append(div);
    eventosPrevNextLocation();
}

const resetContLocation = () => {
    cont = 1;

    return 1;
}

const generatorApiCharacterHTMLLocations = ( value ) => {
    const aside = document.querySelector( "aside" );
    const div = document.querySelector( ".container-cards" );

        div.innerHTML += `<div class="cards">
                            <img src="${ value.image }">
                            <div style="text-align: center; padding-bottom: 1rem; padding-top: 1rem;">
                                <h2>${ value.name }</h2>
                                <div style="display: flex; justify-content: center; align-items: center;">
                                <div style="background-color: ${ ( value.status === "Alive" ) ? "green" :
                                ( value.status === "Dead" ) ? "red" : "#e0e0e0" }; border-radius: 50%; width: 1.2rem; height: 1.2rem;"></div>
                                </div>
                                <h3> ${ value.status } - ${ value.species } </h3>
                                <h3 style="color: #978c8c;">Last know location:</h3>
                                <h2>${ value.location.name }</h2>
                                <h3 style="color: #978c8c;">Gender:</h3>
                                <h2> ${ value.gender } </h2>
                                <h3 style="color: #978c8c;">Type:</h3>
                                <h2> ${ ( value.type === "" ) ? "Unknown" : value.type } </h2>
                            </div>
                        </div>`;
    aside.append( div );
    eventosPrevNextLocation();
}

const eventosPrevNextLocation = () => {

    const prev = document.querySelector(".prevBL");
    const next = document.querySelector(".nextBL");

    prev.addEventListener("click", () => {
        if ( cont !== 1 ) {
            cont--;
        petitionLocations( cont )
            .then( ( data ) => {
                generatorHtmlLocations( data );
                
                for (const value of data.residents) {
                    petitionLocationsCharacter(value)
                        .then( ( data ) => {
                            generatorApiCharacterHTMLLocations( data );
                        })
                }
            } ) 
        }
    });

    next.addEventListener("click", () => {
        if ( cont !== 126 ) {
            cont++;
            console.log(cont)
            petitionLocations( cont )
            .then( ( data ) => {
                generatorHtmlLocations( data );
                
                for (const value of data.residents) {
                    petitionLocationsCharacter(value)
                        .then( ( data ) => {
                            generatorApiCharacterHTMLLocations( data );
                        })
                }
            } ) 

        }
    });


}



export {
    generatorEpisodesForm,
    generatorHtmlLocations,
    resetContLocation,
    generatorApiCharacterHTMLLocations
}