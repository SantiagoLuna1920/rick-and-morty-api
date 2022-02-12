const petitionCharacters = async ( page ) => {
    try {
        const apiUrl = `https://rickandmortyapi.com/api/character?page=${ page }`;
        const resp = await fetch( apiUrl );
            if ( !resp.ok ) throw `No se encontro la peticion a: ${ apiUrl }`;
        return await resp.json();
    } catch (err) {
        throw err;
    }
}

const petitionLocations = async (page ) => {
    try {
        const apiUrl = `https://rickandmortyapi.com/api/location/${page}`;
        const resp = await fetch( apiUrl );
            if ( !resp.ok ) throw `No se encontro la peticion a: ${ apiUrl }`;
        return await resp.json();
    } catch (err) {
        throw err;
    }
}

const petitionLocationsCharacter = async ( data ) => {
    const resp = await fetch( data );
    return await resp.json();
}

const petitionEpisodes = async (page ) => {
    try {
        const apiUrl = `https://rickandmortyapi.com/api/episode/${page}`;
        const resp = await fetch( apiUrl );
            if ( !resp.ok ) throw `No se encontro la peticion a: ${ apiUrl }`;
        return await resp.json();
    } catch (err) {
        throw err;
    }
}

const petitionEpisodesCharacter = async ( data ) => {
    const resp = await fetch( data );
    return await resp.json();
}

export {
    petitionCharacters,
    petitionLocations,
    petitionLocationsCharacter,
    petitionEpisodesCharacter,
    petitionEpisodes
}