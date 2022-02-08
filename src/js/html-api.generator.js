

const generatorApiCharacterHTML = ( data ) => {
    const aside = document.querySelector( "aside" );
    const div = document.createElement( "div" );

    div.classList.add("container-cards");
    aside.innerHTML = "";
    
    for ( const value of data ) {
        div.innerHTML += `<div class="cards">
                            <img src="${ value.image }">
                            <div style="text-align: center;">
                                <h2>Nombre</h2>
                            </div>
                        </div>`;
    }

    aside.append( div );

    console.log( aside );
    console.log( data );
}



export {
    generatorApiCharacterHTML
}