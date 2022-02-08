const petitionCharacters = async () => {
    try {
        const apiUrl = `https://rickandmortyapi.com/api/character`;
        const resp = await fetch( apiUrl );
            if ( !resp.ok ) throw `No se encontro la peticion a: ${ apiUrl }`;
        return await resp.json();
    } catch (err) {
        throw err;
    }
}


export {
    petitionCharacters
}