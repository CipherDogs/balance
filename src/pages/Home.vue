<template>
    <div class="chains">
        <div class="address">
            <span>
                EVM:
                <input v-model="ethAddress" />
            </span>
        </div>
        <h2>EVM-based network</h2>
        <EVM v-if="ethAddress" :address="ethAddress"></EVM>
    </div>
</template>

<script>
import EVM from '../components/EVM.vue';

export default {
    name: "Home",
    data() {
        return {
            ethAddress: "",
        };
    },
    components: { EVM },
    mounted() {
        this.ethAddress = window.localStorage.getItem("ethAddress");
    },
    watch: {
        ethAddress: function (val) {
            window.localStorage.setItem("ethAddress", val);
        }
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
