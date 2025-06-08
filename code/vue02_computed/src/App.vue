<template>

    <div class="setName">
        <div class="item">
            <div>姓：</div>
            <input type="text" class="xin" placeholder="请输入姓氏" v-model="xing">
        </div>

        <div class="item">
            <div>名：</div>
            <input type="text" class="ming" placeholder="请输入名字" v-model="ming">
        </div>
        <div class="item">
            <button @click="setName">将全名改成 li - si</button>
        </div>
    </div>


    <div class="showName">
        {{ name }}
    </div>

</template>

<script setup>
import {computed, ref} from "vue";

const xing = ref("张")


const ming = ref("三")

let name = computed({
    get: () => {
        const xingFormat = xing.value[0].toUpperCase() + xing.value.slice(1)
        return `${xingFormat} - ${ming.value}`
    },
    set: (setName) => {
        const [str1, str2] = setName.split(" - ")
        xing.value = str1
        ming.value = str2

    }
})

function setName() {
    name.value = "li - si"
}


</script>

<style scoped>
.setName .item {
    display: flex;
}

.setName .item div {
    width: 50px;
}

.setName .item input {
    width: 150px;
}
</style>

