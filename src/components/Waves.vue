<template>
    <div class="block">
        <div class="head">
            <span>Asset</span>
            <span>Balance</span>
        </div>
        <div class="item" v-for="balance in balances" v-bind:key="balance.name">
            <span>{{ balance.name }}</span>
            <span>{{ balance.balance }} {{ balance.ticker }}</span>
        </div>
    </div>
</template>

<script>
import axios from "axios";

import { getAddress } from "../helpers/wavesAddress";

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
                .then((res) => {
                    this.balances.push({
                        name: "Waves",
                        balance: res.data.balance / this.wavesDecimals,
                        ticker: "WAVES",
                    });
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        async getAssets(address) {
            await axios
                .get(`${this.nodeURL}/assets/balance/${this.address}`)
                .then((res) => {
                    const balances = res.data.balances;

                    for (let i = 0; i < balances.length; i++) {
                        const decimals =
                            10 ** balances[i].issueTransaction.decimals;

                        this.balances.push({
                            name: balances[i].issueTransaction.name,
                            balance: balances[i].balance / decimals,
                            ticker: balances[i].issueTransaction.name,
                        });
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
