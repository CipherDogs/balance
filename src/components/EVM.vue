<template>
    <div class="block">
        <div class="head">
            <span>Chain</span>
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
import { ethers } from "ethers";

import { getPrice } from "../helpers/coingecko";

export default {
    name: "EVM",
    data() {
        return {
            networks: [
                {
                    name: "Ethereum",
                    ticker: "ETH",
                    url: "https://main-light.eth.linkpool.io",
                    id: "ethereum",
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
                    id: "moonbeam",
                },
                {
                    name: "Moonriver",
                    ticker: "MOVR",
                    url: "https://moonriver.public.blastapi.io",
                    id: "moonriver",
                },
                {
                    name: "Polygon",
                    ticker: "MATIC",
                    url: "https://polygon-rpc.com/",
                    id: "matic-network",
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
                    id: "binancecoin",
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
                    id: "evmos",
                },
                {
                    name: "Astar Network",
                    ticker: "ASTR",
                    url: "https://evm.astar.network",
                    id: "astar",
                },
            ],
            balances: [],
        };
    },
    props: ["address"],
    async mounted() {
        this.networks.forEach((item) => {
            this.getBalance(
                this.address,
                item.name,
                item.url,
                item.ticker,
                item.id
            );
        });
    },
    methods: {
        async getBalance(address, name, url, ticker, id) {
            const provider = ethers.getDefaultProvider(url);

            provider.getBalance(address).then(async (balanceInWei) => {
                const balance = ethers.utils.formatEther(balanceInWei); // wei to ether

                let price = 0;

                if (id) {
                    const result = await getPrice(id);
                    price = result[id].usd;
                }

                if ((+balance).toFixed(4) != "0.0000") {
                    this.balances.push({
                        name,
                        balance: (+balance).toFixed(4),
                        ticker,
                        price,
                    });
                }
            });
        },
    },
};
</script>

<style scoped>
@import "../assets/styles/block.css";
</style>
