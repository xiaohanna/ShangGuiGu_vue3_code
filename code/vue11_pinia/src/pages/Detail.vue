<template>
    <h1>新闻详情</h1>
    <h1>{{ getContent() }}</h1>

</template>

<script setup>
import {useRoute} from 'vue-router';
import data from '@/hooks/data.js'
const route = useRoute();

function getContent() {
    const result = data.filter(item => route.query.id === item.id);
    if (result && result.length > 0) {
        return result[0].content
    }
    return "404"
}


</script>