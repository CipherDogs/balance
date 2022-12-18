<template>
    <div class="chains">
        <div class="address">
            <span>
                EVM:
                <input v-model="ethAddress" />
            </span>
            <span>
                EOS:
                <input v-model="eosAddress" />
            </span>
            <span>
                Waves:
                <input v-model="wavesAddress" />
            </span>
        </div>
        <h2>EVM-based network</h2>
        <EVM v-if="ethAddress" :address="ethAddress"></EVM>
        <h2>EOS</h2>
        <EOS v-if="eosAddress" :address="eosAddress"></EOS>
        <h2>Waves</h2>
        <Waves v-if="wavesAddress" :address="wavesAddress"></Waves>
    </div>
</template>

<script>
import EVM from '../components/EVM.vue';
import EOS from '../components/EOS.vue';
import Waves from '../components/Waves.vue';

export default {
    name: "Home",
    data() {
        return {
            ethAddress: "",
            eosAddress: "",
            wavesAddress: "",
        };
    },
    components: { EVM, EOS, Waves },
    mounted() {
        this.ethAddress = window.localStorage.getItem("ethAddress");
        this.eosAddress = window.localStorage.getItem("eosAddress");
        this.wavesAddress = window.localStorage.getItem("wavesAddress");
    },
    watch: {
        ethAddress: function (val) {
            window.localStorage.setItem("ethAddress", val);
        },
        eosAddress: function (val) {
            window.localStorage.setItem("eosAddress", val);
        },
        wavesAddress: function (val) {
            window.localStorage.setItem("wavesAddress", val);
        },
    }
};
</script>

<style scoped>
.chains {
    max-width: 500px;
    margin: auto;
    margin-top: 10px;
}

.address span {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.address input {
    width: 80%;
}
</style>
