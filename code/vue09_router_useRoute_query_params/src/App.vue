<script setup>


</script>

<template>
    <!-- 组件之间参数传递 -->
    <div class="nav">
        <div class="item">
            <!-- 传递 query 参数 -->
            <router-link :to="{
                name: 'about',
                query: {
                    id: 1,
                    age: 18,
                    name: '张三'
                },

            }">关于</router-link>
        </div>
        <div class="item">
            <!-- 
            传递 params 参数
            -->
            <router-link :to="{
                name: 'news',
                params: {
                    id: 2,
                    age: 19,
                    name: '王五',
                }
            }">新闻</router-link>
        </div>
        <div class="item">
            <router-link to="/home">主页</router-link>
        </div>
    </div>

    <div class="views">
        <router-view></router-view>
    </div>
</template>

<style scoped>
.views {
    border-bottom: 1px solid #000;
}
</style>
