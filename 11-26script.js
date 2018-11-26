let deckId;
let drawCards;


let ourPromise = ()=>{
    return new Promise((resolve,reject)=>{
        $.ajax({
            url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
            type: "GET",
            success: (response, status)=>{
                resolve(response);
            },
            error: (error)=>{
                reject(error);
            }
        });
    })
};

let cardPromise = (deckId)=>{
    return new Promise((resolve,reject)=>{
        $.ajax({
            url: `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`,
            type: "GET",
            success: (response,status)=>{
                resolve(response);
            },
            error: (error)=>{
                reject(error);
            }
        });
    })
};


async function getCardId() {
    let createDeck =  await ourPromise();
 
    drawCards = await cardPromise(createDeck.deck_id);
    document.getElementById('first').innerHTML =  `<img src = '${drawCards.cards[0].image}'>`;

    return drawCards;

}

//
// let cardId = getCardId();
//
// function showCard() {
//     cardId.then(data => {
//         document.getElementById('first').innerHTML =  `<img src = '${data.image}'>`;
//     })
// }



