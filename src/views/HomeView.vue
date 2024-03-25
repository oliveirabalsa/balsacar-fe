<script setup lang="ts">
import axios from 'axios'
import HeroComponent from '@/components/organisms/HeroComponent.vue'
import HighlightComponent from '@/components/organisms/HighlightComponent.vue'
import { onMounted, ref } from 'vue'

const redirectUrl = ref('')

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/advertisements/all')

    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}

const redirectToWhatspp = () => {
  window.open(redirectUrl.value, '_blank')
}

onMounted(() => {
  redirectUrl.value = import.meta.env.VITE_REDIRECT_WPP_LINK
  fetchData()
})
</script>

<template>
  <main>
    <HeroComponent @redirect="redirectToWhatspp" />
    <HighlightComponent />
  </main>
</template>
