<template>
    <div class="main">
        <my-input v-model="inputValue" ref="inputRef" placeholder="请输入内容" />
        <el-input v-model="inputValue" ref="inputRef2"></el-input>
        <p>输入的内容: {{ inputValue }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MyInput from '@/components/MyInput.vue'

const inputValue = ref('123454')
const inputRef = useTemplateRef("inputRef")
</script>

<style scoped lang="scss">
.main {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 400px;
    margin: 0 auto;
}
</style>
