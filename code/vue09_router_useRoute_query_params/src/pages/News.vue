<template>
    <h1>
        新闻
    </h1>
    <h2 class="title">
        <router-link :to="{
            name: 'detail',
            query: {
                id: 1,
                title: '新闻标题',
                content:'新闻内容'
            }
        }">点击查看新闻详情</router-link>
    </h2>

    <router-view>

    </router-view>
    

</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
console.log(route.params);

</script>