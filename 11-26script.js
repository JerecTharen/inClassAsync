let deckId;



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

let cardPromise = (deckID)=>{
    return new Promise((resolve,reject)=>{
        $.ajax({
            url: `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`,
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
    ourPromise().then((data) => {
        deckId = data.deck_id;
    });
    await cardPromise().then((data) => {
        document.getElementById('first').innerHTML =  `<img src='${data.image}'>`;
    })
}

getCardId();