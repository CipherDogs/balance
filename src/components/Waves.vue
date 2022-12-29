<template>
    <div class="block">
        <div class="head">
            <span>Asset</span>
            <span>Balance</span>
            <span>Price</span>
        </div>
        <div class="item" v-for="balance in balances" v-bind:key="balance.name">
            <span>{{ balance.name }}</span>
            <span>{{ balance.balance }} {{ balance.ticker }}</span>
            <span>${{ balance.price }}</span>
        </div>
    </div>
</template>

<script>
import axios from "axios";

import assets from "../helpers/wavesAssets.json";

import { getAddress } from "../helpers/wavesAddress";
import { getPrice } from "../helpers/coingecko";

export default {
    name: "Waves",
    data() {
        return {
            nodeURL: "https://nodes.wavesnodes.com",
            wavesDecimals: 10 ** 8,
            balances: [],
        };
    },
    props: ["address"],
    async mounted() {
        let result = await getAddress(this.nodeURL, this.address);

        await this.getWavesBalance(result);

        await this.getAssets(result);
    },
    methods: {
        async getWavesBalance(address) {
            await axios
                .get(`${this.nodeURL}/addresses/balance/${address}`)
                .then(async (res) => {
                    let price = await getPrice("waves");

                    this.balances.push({
                        name: "Waves",
                        balance: (res.data.balance / this.wavesDecimals).toFixed(4),
                        ticker: "WAVES",
                        price: price.waves.usd,
                    });
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        async getAssets(address) {
            await axios
                .get(`${this.nodeURL}/assets/balance/${address}`)
                .then(async (res) => {
                    const balances = res.data.balances;

                    for (let i = 0; i < balances.length; i++) {
                        const asset = assets[balances[i].assetId];

                        if (asset) {
                            const price = await getPrice(asset.id);

                            const decimals =
                                10 ** balances[i].issueTransaction.decimals;

                            this.balances.push({
                                name: asset.name,
                                balance: (balances[i].balance / decimals).toFixed(4),
                                ticker: asset.ticker,
                                price: price[asset.id].usd,
                            });
                        }
                    }
                })
                .catch((err) => {
                    console.error(err);
                });
        },
    },
};
</script>

<style scoped>
@import "../assets/styles/block.css";
</style>
