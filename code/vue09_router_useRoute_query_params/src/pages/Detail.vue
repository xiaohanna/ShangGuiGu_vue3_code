<template>
    <h1>新闻详情。。。。</h1>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.query);

</script>