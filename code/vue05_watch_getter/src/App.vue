<template>
    <div class="box">
        <div class="item">
            <div class="key">名字：</div>
            <div class="value">{{ data.name }}</div>
            <button class="set" @click="setName">修改</button>
        </div>
        <div class="item">
            <div class="key">年龄：</div>
            <div class="value">{{ data.age }}</div>
            <button class="set" @click="setAge">修改</button>
        </div>
        <div class="item">
            <div class="key">第一台车：</div>
            <div class="value">{{ data.car.c1 }}</div>
            <button class="set" @click="setC1">修改</button>
        </div>

        <div class="item">
            <div class="key">第二台车：</div>
            <div class="value">{{ data.car.c2 }}</div>
            <button class="set" @click="setC2">修改</button>
        </div>

        <div class="item">
            <div class="key">全部车</div>
            <button class="set" @click="setCar">修改</button>
        </div>


        <div class="item">
            <div class="key">全部</div>
            <button class="set" @click="setAll">修改</button>
        </div>

    </div>


</template>

<script setup>

import {reactive, watch} from "vue";

const data = reactive({
        name: "张三",
        age: 20,
        car: {
            c1: "奔驰",
            c2: "宝马"
        }
    }
)

function setName() {
    data.name += "~"
}

function setAge() {
    data.age++
}

function setC1() {
    data.car.c1 = "雅迪"
}

function setC2() {
    data.car.c2 = "艾玛"

}


function setCar() {
    data.car = {
        c1: "‌五菱",
        c2: "大众"
    }
}


//
function setAll() {
    Object.assign(data,{
        name: "小丽",
        age: 99,
        car: {
            c1: "绿源",
            c2: "新日"
        }
    })

}



// 3：监视reactive中的某个数据，例如 data 中 的 age
// （如果是ref对象，也只是 .value 有无的差别）
// 使用函数返回这个数据即可
watch(()=> data.age, (newValue, oldValue) => {
    console.log("-------------")
    console.log("age新数据：")
    console.log(newValue)
    console.log("age旧数据：")
    console.log(oldValue)
},{deep: true})






</script>

<style scoped>
.box .item {
    display: flex;
}


.box .item .key {
    width: 80px;
}

.box .item .value {
    width: 120px;
}


.box .item button {
    width: 60px;
}

</style>

