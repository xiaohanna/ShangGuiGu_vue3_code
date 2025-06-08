<template>
    <h1 ref="title">hello world Person</h1>
    <button @click="showTag">点我 显示 h1 的输出 </button>

    <h2>组件数据传递：（app 向 Person传递数据）</h2>
    <div class="box">
        <ul v-if="list">
            <li v-for="item in list" :key="item.id">
                姓名：{{ item.username }} <br>
                年龄：{{ item.age }} <br>
                uid：{{ item.id }} <br>
            </li>
        </ul>
        <div v-else>
            获取数据失败
        </div>
    </div>

</template>

<script setup >
import {ref} from "vue";

// 接收数据
defineProps(['list'])



const personA = 1;
const personB = 2;
const title = ref()

function showTag() {
    console.log(title.value)
}

defineExpose({personA,personB})

</script>

<style scoped>

</style>