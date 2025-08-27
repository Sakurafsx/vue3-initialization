<template>
    <component :is="h(ElInput, { ...$attrs, ref: changeRef }, $slots)"></component>
</template>

<script setup lang="ts">
/**
 * 封装组件，ts仅支持vscode 
 */
import { ElInput } from 'element-plus'; // 替换为需要的组件
import type { ComponentInstance } from "vue"
import { h, ComponentInternalInstance } from 'vue'

const VM = getCurrentInstance() as ComponentInternalInstance
function changeRef(exposed: Record<string, any> | null) {
    VM.exposed = exposed
}
defineExpose({} as ComponentInstance<typeof ElInput>)
</script>

<style scoped lang="scss"></style>
