<template>
    <div class="block">
        <div class="head">
            <span>Chain</span>
            <span>Balance</span>
        </div>
        <div class="item" v-for="balance in balances" v-bind:key="balance.name">
            <span>{{ balance.name }}</span>
            <span>{{ balance.balance }} {{ balance.ticker }}</span>
        </div>
    </div>
</template>

<script>
import { ethers } from "ethers";

export default {
    name: "EVM",
    data() {
        return {
            networks: [
                {
                    name: "Ethereum",
                    ticker: "ETH",
                    url: "https://main-light.eth.linkpool.io",
                },
                {
                    name: "Rinkeby",
                    ticker: "ETH",
                    url: "https://rinkeby-light.eth.linkpool.io",
                },
                {
                    name: "Goerli",
                    ticker: "ETH",
                    url: "https://goerli-light.eth.linkpool.io",
                },
                {
                    name: "Moonbeam",
                    ticker: "GLMR",
                    url: "https://rpc.ankr.com/moonbeam",
                },
                {
                    name: "Moonriver",
                    ticker: "MOVR",
                    url: "https://moonriver.public.blastapi.io",
                },
                {
                    name: "Polygon",
                    ticker: "MATIC",
                    url: "https://polygon-rpc.com/",
                },
                {
                    name: "Polygon Mumbai Testnet",
                    ticker: "MATIC",
                    url: "https://rpc-mumbai.matic.today",
                },
                {
                    name: "Binance Smart Chain",
                    ticker: "BNB",
                    url: "https://bsc-dataseed.binance.org/",
                },
                {
                    name: "Binance Smart Chain Testnet",
                    ticker: "BNB",
                    url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
                },
                {
                    name: "Evmos Mainnet",
                    ticker: "EVMOS",
                    url: "https://eth.bd.evmos.org:8545",
                },
                {
                    name: "Astar Network",
                    ticker: "ASTR",
                    url: "https://evm.astar.network",
                },
            ],
            balances: [],
        };
    },
    props: ["address"],
    async mounted() {
        this.networks.forEach((item) => {
            this.getBalance(this.address, item.name, item.url, item.ticker);
        });
    },
    methods: {
        async getBalance(address, name, url, ticker) {
            const provider = ethers.getDefaultProvider(url);

            provider.getBalance(address).then((balanceInWei) => {
                const balance = ethers.utils.formatEther(balanceInWei); // wei to ether
                this.balances.push({
                    name,
                    balance,
                    ticker,
                });
            });
        },
    },
};
</script>

<style scoped>
@import "../assets/styles/block.css";
</style>
