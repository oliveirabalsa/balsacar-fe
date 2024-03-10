<script setup lang="ts">
type ButtonProps = {
  type?: 'submit' | 'button' | 'reset'
  variant?: 'transparent' | 'primary' | 'rounded'
}

const { type, variant } = defineProps<ButtonProps>()

const classes: Record<string, string> = {
  transparent: 'text-white border border-primary rounded-lg px-5 py-2 hover:bg-primary',
  primary: 'text-white rounded-lg px-5 py-2 bg-primary hover:opacity-90',
  rounded: 'text-white px-5 py-2 bg-primary hover:opacity-90 rounded-full'
}
</script>
<template>
  <button
    :type="type || 'submit'"
    :class="classes[(variant as ButtonProps['variant']) || 'primary']"
  >
    <slot />
  </button>
</template>
