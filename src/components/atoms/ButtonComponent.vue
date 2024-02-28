<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  type: {
    type: String,
    default: 'submit'
  }
})
</script>
<template>
  <button :type="type" class="text-white border border-primary rounded-lg px-5 py-2">
    <slot />
  </button>
</template>
