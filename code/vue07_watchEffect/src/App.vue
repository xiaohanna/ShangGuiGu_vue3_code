<template>
    <div class="box">
        <div class="item">
            <div class="temp key">
                水温
            </div>
            <div class="tempNumber value">
                {{ Water.temp }}℃
            </div>
            <div class="changeTempNumber buttonBox">
                <button @click="changeTempNumber">修改水温</button>
            </div>
        </div>


        <div class="item">
            <div class="level key">
                水位
            </div>
            <div class="levelNumber value">
                {{ Water.level }}CM
            </div>
            <div class="changeTempNumber buttonBox">
                <button @click="changeLevelNumber">修改水位</button>
            </div>
        </div>

    </div>
</template>

<script setup>
import {reactive, watchEffect} from "vue";

const Water = reactive({
    temp: 10,
    level: 10
})


watchEffect(() => {
    console.log("Water.temp：" + Water.temp)
    console.log("Water.level：" + Water.level)
    if (Water.temp >= 60 || Water.level >= 30) {
        console.log("条件成立，自动发起请求")
    }
})


function changeTempNumber() {
    Water.temp += 10
}

function changeLevelNumber() {
    Water.level += 10
}

</script>


<style scoped>
.box .item {
    display: flex;
    margin-bottom: 10px;
}

.box .item .key {
    width: 50px;
}

.box .item .value {
    width: 70px;
}

.box .item .buttonBox button {
    width: 80px;
}
</style>

