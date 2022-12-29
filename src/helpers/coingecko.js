import axios from "axios";

async function getPrice(id) {
    let result = undefined;
    await axios
        .get(
            `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`
        )
        .then((res) => {
            result = res.data;
        })
        .catch((err) => {
            console.error(err);
        });

    return result;
}

export { getPrice }