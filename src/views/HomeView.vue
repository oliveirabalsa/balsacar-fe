<script setup lang="ts">
import axios from 'axios'
import HeroComponent from '@/components/organisms/HeroComponent.vue'
import { onMounted } from 'vue'

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:8081/api/advertisements/all')

    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}

onMounted(fetchData)
</script>

<template>
  <main>
    <HeroComponent />
  </main>
</template>
