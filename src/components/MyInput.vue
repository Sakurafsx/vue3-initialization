<script setup lang="ts">
import type { ComponentInstance, ComponentInternalInstance } from "vue"
/**
 * 封装组件，ts仅支持vscode
 */
import { ElInput } from "element-plus" // 替换为需要的组件
import { h } from "vue"

const VM = getCurrentInstance() as ComponentInternalInstance
function changeRef(exposed: Record<string, any> | null) {
  VM.exposed = exposed
}
defineExpose({} as ComponentInstance<typeof ElInput>)
</script>

<template>
  <component :is="h(ElInput, { ...$attrs, ref: changeRef }, $slots)" />
</template>

<style scoped lang="scss"></style>
