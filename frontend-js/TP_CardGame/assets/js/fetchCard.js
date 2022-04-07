const db_cardGame = async function(url) {
    try {
        let response = await fetch(url);
        if (response.ok) {
            let cards = await response.json();
            return cards;
    } else {
        console.error('Retour du serveur : ', response.status);
    }
    } catch (error) {
        console.log(error);
    }
}


export {db_cardGame}