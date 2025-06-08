<template>
    <h1>
        关于
    </h1>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.query);

</script>