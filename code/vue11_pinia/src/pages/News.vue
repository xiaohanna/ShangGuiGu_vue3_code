<template>
    <h1>
        新闻
    </h1>

    <div class="box">
        <div class="item" v-for="item in dataTitle" :key="item.id">
            <div class="findButton" @click="findButton(item.id)">查看详情</div>
            <div class="title">{{ item.title }}</div>
        </div>
    </div>

    <div class="detail">
        <router-view></router-view>
    </div>


</template>

<style scoped>
.item {
    display: flex;
    margin-bottom: 10px;
}

.item > div {
    margin-right: 10px;

}
.findButton {
    border-radius: 7px;
    background: skyblue;
    padding:3px 8px;

}

.findButton:hover{
    cursor: pointer;
    background-color: orange;
    transition: .3s all;
    color: #fff;
}


</style>


<script setup>
import dataTitle from "@/hooks/dataTitle.js"
import {useRouter} from "vue-router";

var router = useRouter();


function findButton(id){
    router.push({
        name:"detail",
        query:{
            id
        }
    })
}



</script>