<script setup lang="ts">
defineProps({
  type: {
    type: String as () => 'submit' | 'button' | 'reset',
    default: 'submit'
  }
})
</script>
<template>
  <button
    :type="type"
    class="text-white border border-primary rounded-lg px-5 py-2 hover:bg-primary"
  >
    <slot />
  </button>
</template>
