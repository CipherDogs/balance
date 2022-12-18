import axios from "axios";

async function isValidAddress(nodeURL, address) {
    let result = false;
    await axios
        .get(
            `${nodeURL}/addresses/validate/${address}`
        )
        .then((res) => {
            result = res.data.valid;
        })
        .catch((err) => {
            console.error(err);
        });

    return result;
}

async function getAddressByAlias(nodeURL, alias) {
    let result = undefined;
    await axios
        .get(
            `${nodeURL}/alias/by-alias/${alias}`
        )
        .then((res) => {
            result = res.data.address;
        })
        .catch((err) => {
            console.error(err);
        });

    return result;
}

async function getAddress(nodeURL, value) {
    const isValid = await isValidAddress(nodeURL, value);
    if (isValid) {
        return value;
    } else {
        let address = await getAddressByAlias(nodeURL, value);
        return address;
    }
}

export { getAddress }