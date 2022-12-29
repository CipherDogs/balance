<template>
    <div class="block">
        <div class="head">
            <span>Token</span>
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

import { getPrice } from "../helpers/coingecko";

export default {
    name: "EOS",
    data() {
        return {
            nodeURL: "https://api.eosn.io",
            balances: [],
        };
    },
    props: ["address"],
    async mounted() {
        await axios
            .post(`${this.nodeURL}/v1/chain/get_account`, {
                account_name: this.address,
            })
            .then(async (res) => {
                let price = await getPrice("eos");

                this.balances.push({
                    name: "EOS",
                    balance: res.data.core_liquid_balance,
                    ticker: "",
                    price: price.eos.usd,
                });
            })
            .catch((err) => {
                console.error(err);
            });
    },
};
</script>

<style scoped>
@import "../assets/styles/block.css";
</style>
