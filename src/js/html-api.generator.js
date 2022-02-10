import { petitionCharacters} from "./api/petitions.api";

let cont = 1;

const generatorApiCharacterHTML = ( data ) => {
    const aside = document.querySelector( "aside" );
    const div = document.createElement( "div" );

    div.classList.add("container-cards");
    aside.innerHTML = "";
    div.innerHTML = `<div class="containerB">
                        <button class="prevB"><span>Prev</span></button>
                        <button class="nextB"><span>Next</span></button>
                    </div>`;
    for ( const value of data.results ) {
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
    }
    aside.append( div );

    eventosButtonPrevNext();
}

const eventosButtonPrevNext = () => {
    const prev = document.querySelector(".prevB");
    const next = document.querySelector(".nextB");

    prev.addEventListener( ( "click" ), () => {
        
        if ( cont !== 1 ) {
            cont--;
        petitionCharacters( cont )
            .then( (data) => generatorApiCharacterHTML( data ) );
        }
            
    } )
    next.addEventListener( ( "click" ), () => {
        
        if ( cont !== 42 ) {
            cont++;
        petitionCharacters( cont )
            .then( (data) => generatorApiCharacterHTML( data ) );
        }
        
    } )
}




const resetCont = () => {
    cont=1;
}


export {
    generatorApiCharacterHTML,
    resetCont
}