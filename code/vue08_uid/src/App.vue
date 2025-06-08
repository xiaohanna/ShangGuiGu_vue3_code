<template>

  <!--
  ref 设置的字符串，就是 script 中的 局部变量名，直接引用即可
  -->
    <h1 ref="title">hello world App</h1>
    <button @click="showTag">点我显示 Person 和 h1 的输出</button>
    <div class="bd"></div>


  <!--
  将 list 数据传递给 Person 组件
  <Person :list="list"/>    App.vue
  defineProps(['list'])     Person.vue
  -->
  <!--
  获取 Person 里面数据
  <Person  ref="person"/>   App.vue
  defineExpose({personA, personB})  Person.vue
  -->

    <Person :list="list" ref="person"/>

  <!--
  ref如果作用于标签中，就变成这个标签的唯一标识符，
  在使用 vue 项目时，更推荐 ref 替代 id 获取元素
    -->
</template>


<style scoped>
.bd {
    margin: 10px 0px;
    border-bottom: 1px solid #ccc;
}
</style>

<script setup>
import {reactive, ref} from "vue";
import Person from "@/components/Person.vue"

const AppA = 0
const list = reactive([
    {
        username: "李四",
        age: 18,
        id: "qwerty01",
    },
    {
        username: "王五",
        age: 19,
        id: "qwerty02",
    },
    {
        username: "赵六",
        age: 20,
        id: "qwerty03",
    }
])
const AppB = 1
const AppC = 2
let title = ref()
let person = ref();

function showTag() {
    console.log(title.value)
    console.log(person.value)
}

</script>

