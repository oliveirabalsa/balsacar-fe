<script setup lang="ts">
type ButtonProps = {
  type?: 'submit' | 'button' | 'reset'
  variant?: 'transparent' | 'primary' | 'rounded'
}

const { type = 'submit', variant = 'primary' } = defineProps<ButtonProps>()

const classes: Record<typeof variant, string> = {
  transparent: 'text-white border border-primary rounded-lg px-5 py-2 hover:bg-primary',
  primary: 'text-white rounded-lg px-5 py-2 bg-primary hover:opacity-90',
  rounded: 'text-white px-5 py-2 bg-primary hover:opacity-90 rounded-full'
}
</script>
<template>
  <button :type="type" :class="classes[variant] + 'cursor-pointer'">
    <slot />
  </button>
</template>
