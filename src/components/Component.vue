<!-- 组件传递通用封装 -->
<script setup lang="ts">
import { ElInput } from "element-plus" // 替换为需要的组件
import { h } from "vue"
</script>

<template>
  <component :is="h(ElInput, $attrs, $slots)" />
</template>

<style scoped lang="scss"></style>
