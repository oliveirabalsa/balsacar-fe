<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import axios from '@/services/axios/axios'

const route = useRoute()

onMounted(async () => {
  try {
    const url = new URL('http://localhost:8080/api/advertisements/all')

    Object.keys(route.query).forEach((key) => {
      const value = route.query[key]
      if (value) {
        url.searchParams.append(key, value)
      }
    })
    const response = await axios.get(url.toString())

    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
})
</script>
<template>Cars vue with filters: {{ route.query }}</template>
