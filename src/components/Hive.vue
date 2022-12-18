<template>
    <div class="block">
        <div class="head">
            <span>Token</span>
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
    name: "Hive",
    data() {
        return {
            nodeURL: "https://api.openhive.network",
            balances: [],
        };
    },
    props: ["address"],
    async mounted() {
        await axios
            .post(`${this.nodeURL}`, {
                jsonrpc: "2.0",
                method: "condenser_api.get_accounts",
                params: [[this.address]],
                id: 1,
            })
            .then((res) => {
                console.log(res.data);
                this.balances.push({
                    name: "Hive",
                    balance: res.data.result[0].balance,
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
