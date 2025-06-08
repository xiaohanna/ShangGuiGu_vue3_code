<script setup>


import {onMounted} from "vue";
import {useRouter} from "vue-router";


const router = useRouter();

function openAbout() {
    router.push({
        name: 'about',
        query: {
            id: 1,
            age: 18,
            name: '张三'
        },
    })
}


function openNews() {
    router.push({
        name: 'news',
        params: {
            id: 2,
            age: 19,
            name: '王五',
        }
    })
}


function openHome() {
    router.push({
        name: 'home'
    })
}


onMounted(() => {
    // 传递 query 参数

})

</script>

<template>
  <!-- 组件之间参数传递 -->
    <div class="nav">
        <div class="item" @click="openAbout">关于</div>
        <div class="item" @click="openNews">新闻</div>
        <div class="item" @click="openHome">主页</div>
    </div>

    <div class="views">
        <router-view></router-view>
    </div>
</template>

<style scoped>
.views {
    border-bottom: 1px solid #000;
}

.nav .item:hover {
    cursor: pointer;
    color: skyblue;
    transition: 0.3s all;
}

</style>
