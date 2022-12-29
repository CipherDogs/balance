<template>
    <div class="chains">
        <pre>


 ▄▄▄▄    ▄▄▄       ██▓    ▄▄▄       ███▄    █  ▄████▄  ▓█████ 
▓█████▄ ▒████▄    ▓██▒   ▒████▄     ██ ▀█   █ ▒██▀ ▀█  ▓█   ▀ 
▒██▒ ▄██▒██  ▀█▄  ▒██░   ▒██  ▀█▄  ▓██  ▀█ ██▒▒▓█    ▄ ▒███   
▒██░█▀  ░██▄▄▄▄██ ▒██░   ░██▄▄▄▄██ ▓██▒  ▐▌██▒▒▓▓▄ ▄██▒▒▓█  ▄ 
░▓█  ▀█▓ ▓█   ▓██▒░██████▒▓█   ▓██▒▒██░   ▓██░▒ ▓███▀ ░░▒████▒
░▒▓███▀▒ ▒▒   ▓▒█░░ ▒░▓  ░▒▒   ▓▒█░░ ▒░   ▒ ▒ ░ ░▒ ▒  ░░░ ▒░ ░
▒░▒   ░   ▒   ▒▒ ░░ ░ ▒  ░ ▒   ▒▒ ░░ ░░   ░ ▒░  ░  ▒    ░ ░  ░
 ░    ░   ░   ▒     ░ ░    ░   ▒      ░   ░ ░ ░           ░   
 ░            ░  ░    ░  ░     ░  ░         ░ ░ ░         ░  ░
      ░                                       ░               


        </pre>
        <div class="panel">
            <a href="#" v-if="!config" @click="config = true">Config</a>
            <a href="#" v-else @click="config = false">Close</a>
        </div>
        <div v-if="config" class="config">
            <span>
                EVM:
                <input v-model="ethAddress" />
            </span>
            <span>
                EOS:
                <input v-model="eosAddress" />
            </span>
            <span>
                Hive:
                <input v-model="hiveAddress" />
            </span>
            <span>
                Waves:
                <input v-model="wavesAddress" />
            </span>
        </div>
        <div v-if="ethAddress && ethAddress !== 'null'">
            <h2>EVM-based network</h2>
            <EVM :address="ethAddress"></EVM>
        </div>
        <div v-if="eosAddress && eosAddress !== 'null'">
            <h2>EOS</h2>
            <EOS :address="eosAddress"></EOS>
        </div>
        <div v-if="hiveAddress && hiveAddress !== 'null'">
            <h2>Hive</h2>
            <Hive :address="hiveAddress"></Hive>
        </div>
        <div v-if="wavesAddress && wavesAddress !== 'null'">
            <h2>Waves</h2>
            <Waves :address="wavesAddress"></Waves>
        </div>
    </div>
</template>

<script>
import EVM from "../components/EVM.vue";
import EOS from "../components/EOS.vue";
import Hive from "../components/Hive.vue";
import Waves from "../components/Waves.vue";

export default {
    name: "Home",
    data() {
        return {
            config: false,
            ethAddress: "",
            eosAddress: "",
            hiveAddress: "",
            wavesAddress: "",
        };
    },
    components: { EVM, EOS, Hive, Waves },
    mounted() {
        this.ethAddress = window.localStorage.getItem("ethAddress");
        this.eosAddress = window.localStorage.getItem("eosAddress");
        this.hiveAddress = window.localStorage.getItem("hiveAddress");
        this.wavesAddress = window.localStorage.getItem("wavesAddress");
    },
    watch: {
        ethAddress: function (val) {
            window.localStorage.setItem("ethAddress", val);
        },
        eosAddress: function (val) {
            window.localStorage.setItem("eosAddress", val);
        },
        hiveAddress: function (val) {
            window.localStorage.setItem("hiveAddress", val);
        },
        wavesAddress: function (val) {
            window.localStorage.setItem("wavesAddress", val);
        },
    },
};
</script>

<style scoped>
pre {
    font-size: 10px;
    text-align: center;
}
.chains {
    max-width: 500px;
    margin: auto;
    margin-top: 10px;
}

.panel {
    text-align: center;
}

.panel a,
.panel a:hover,
.panel a:active {
    color: black;
    text-decoration: none;
}

.config span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0px;
}

.config input {
    width: 80%;
}
</style>
