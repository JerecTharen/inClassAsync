
let ourPromise = async ()=>{
    return new Promise((resolve,reject)=>{
        $ajax({
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
