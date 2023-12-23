export const myGetFetchReq = async (url) => {
    try{
    const response = await fetch(`https://site-scrapper.p.rapidapi.com/fetchsitetitle?url=${url}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1c9ac87996msh3590e694769a0c8p13368djsn83f7c9f2294b',
            'X-RapidAPI-Host': 'site-scrapper.p.rapidapi.com'
        }
    });
    const myData = await response.text();

    return myData;
    }catch(error){
        console.error(error);
    }
}

export const myPostFetchReq = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    const myData = await response.json();

    return myData;
}

export const myPutFetchReq = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    const myData = await response.json();

    return myData;
}