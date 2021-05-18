///////////  Current Bitcoin price request

// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("Current Bitcoin Price:")
//         console.log(`=>`, res.data.ticker.price)
//     })
//     .catch(err => {
//         console.log("ERROR!!!", err)
//     })

//////////////////////////////////
const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    const img = document.createElement('IMG');
    img.src = res.data[0].show.image.medium;
    document.body.append(img)
})



