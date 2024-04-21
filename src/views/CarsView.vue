<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import axios from '@/services/axios/axios'
import SearchComponent from '@/components/molecules/SearchComponent.vue'

const route = useRoute()
const data = ref(null)

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
    data.value = response.data

    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
})
</script>
<template>
  <SearchComponent />
  <section>
    Cars vue with filters: {{ route.query }}
    Result {{ data }}
  </section>
</template>
