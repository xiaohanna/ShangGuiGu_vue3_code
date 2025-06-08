<template>
    <div class="setPerson">
        <h1>
            <div class="text">姓名：</div>
            <div class="text">{{ person.username }}</div>
            <button @click="setUsername">修改姓名</button>
        </h1>
        <h1>
            <div class="text">年龄：</div>
            <div class="text">{{ person.age }}</div>
            <button @click="setAge">修改年龄</button>
        </h1>
        <h1>
            <button @click="setPersonEvent">修改整个员工</button>
        </h1>
    </div>

    <div class="setPersonRef">
        <h2>
            解构 reactive 成 ref
        </h2>

        <h1>
            <div class="text">姓名：</div>
            <div class="text">{{ username }}</div>
            <button @click="setUsernameRef">Ref修改姓名</button>
        </h1>
        <h1>
            <div class="text">年龄：</div>
            <div class="text">{{ age }}</div>
            <button @click="setAgeRef">Ref修改年龄</button>
        </h1>

    </div>


    <div class="showPerson">
        <div class="title">
            <h2>员工展示</h2>
            <button @click="nextEvent">下一页</button>
        </div>

        <div class="item" v-for="(item,index) in personList">
            <h1>
                <div class="text">序号：</div>
                <div class="text">{{ index }}</div>
            </h1>
            <h1>
                <div class="text">姓名：</div>
                <div class="text">{{ item.username }}</div>
            </h1>
            <h1>
                <div class="text">年龄：</div>
                <div class="text">{{ item.age }}</div>
            </h1>
        </div>
    </div>


</template>

<script setup>
import {reactive, toRef, toRefs} from "vue";


let personList = reactive([
    {
        username: "张三",
        age: 18,
    }, {
        username: "李四",
        age: 19,
    }, {
        username: "王五",
        age: 20,
    }
])


function nextEvent() {
    // 清空数组
    personList.length = 0;

    Object.assign(personList, [
        {
            username: "赵六",
            age: 21,
        }, {
            username: "小丽",
            age: 22,
        }, {
            username: "小王",
            age: 23,
        }
    ])

}


let person = reactive({
    username: "张三",
    age: 18,
})


// 解构赋值成 toRefs
let {username, age} = toRefs(person);
// 解析单个值
let age2 = toRef(person,"age");


function setUsernameRef() {
    username.value = username1 + intCount
}


function setAgeRef() {
    age.value++
}


function setAge() {
    person.age++;
}

let intCount = 0

let username1 = person.username;

function setUsername() {
    intCount++
    person.username = username1 + intCount
}

function setPersonEvent() {

    Object.keys(person).forEach(key => delete person[key]) // 清空对象（按需清空）
    Object.assign(person, {username: "李四", age: 20})

}


function showAge() {
    setInterval(function () {
        console.log("-----------------------------------")
        console.log("reactive中的 age: " + person.age)
        console.log("toRefs中的 age: " + age.value)
        console.log("toRef中的 age：" + age2.value )
    }, 100)


}

showAge()


</script>

<style scoped>

.setPersonRef {
    border-bottom: 1px solid #999;
}

.title {
    display: flex;
    align-items: center;
}

.title h2,
.title button {
    width: 100px;
}

.setPerson {
    border-bottom: 1px solid #999;
}


.showPerson .item {
    border-bottom: 1px dotted #ccc;

}

h1 {
    display: flex;
    font-size: 21px;
}

h1 .text {
    width: 100px;
}

</style>

