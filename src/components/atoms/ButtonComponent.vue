<script setup lang="ts">
type ButtonProps = {
  type?: 'submit' | 'button' | 'reset'
  variant?: 'transparent' | 'primary' | 'rounded'
}

const { type = 'submit', variant = 'primary' } = defineProps<ButtonProps>()

console.log(variant)

const classes: Record<typeof variant, string> = {
  transparent: 'text-white border border-primary rounded-lg px-5 py-2 hover:bg-primary',
  primary: 'text-white rounded-lg px-5 py-2 bg-primary hover:opacity-90',
  rounded: 'text-white px-5 py-2 bg-primary hover:opacity-90 rounded-full'
}

const currentClass = classes[variant] + ' cursor-pointer'
</script>
<template>
  <button :type="type" :class="currentClass">
    <slot />
  </button>
</template>
