<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

type SelectProps = {
  placeholder: string
  options: {
    label: string
    value: string
  }[]
}

const props = defineProps<SelectProps>()
</script>
<template>
  <Select>
    <SelectTrigger>
      <SelectValue :placeholder="props.placeholder" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup v-for="(option, key) in props.options" :key="key">
        <SelectItem :value="option.value">
          {{ option.label }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
