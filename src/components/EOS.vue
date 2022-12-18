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

export default {
    name: "Waves",
    data() {
        return {
            nodeURL: "http://api.eosn.io",
            balances: [],
        };
    },
    props: ["address"],
    async mounted() {
        await axios
            .post(`${this.nodeURL}/v1/chain/get_account`, {
                account_name: this.address,
            })
            .then((res) => {
                this.balances.push({
                    name: "EOS",
                    balance: res.data.core_liquid_balance,
                    ticker: "",
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
