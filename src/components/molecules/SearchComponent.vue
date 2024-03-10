<script setup lang="ts">
import SelectComponent from '@/components/atoms/SelectComponent.vue'
import ButtonComponent from '@/components/atoms/ButtonComponent.vue'
import Input from '@/components/ui/input/Input.vue'
import type { Filters } from './types'
import { MapPinIcon } from 'lucide-vue-next'
import { reactive } from 'vue'

const options = [
  {
    label: 'Suv',
    value: 'suv'
  },
  {
    label: 'Porshe',
    value: 'porshe'
  },
  {
    label: 'Gol',
    value: 'gol'
  }
]

const filters = reactive<Filters>({
  type: '',
  city: '',
  model: '',
  year_from: '',
  year_to: ''
})

const handleSearch = () => {
  console.log({ ...filters })
}
</script>

<template>
  <main
    class="mx-auto top-24 p-6 w-11/12 h-36 bg-gray-50 relative rounded-xl shadow-lg flex items-end justify-between gap-4"
  >
    <section class="w-full">
      <h4 class="mb-2">Tipo de carro</h4>
      <SelectComponent
        class="w-52"
        placeholder="Buscar..."
        :options="options"
        v-model="filters.type"
      />
    </section>
    <section class="w-full">
      <h4 class="mb-2">Localização</h4>
      <div class="relative w-full max-w-sm items-center">
        <Input
          id="search"
          type="text"
          placeholder="Digite aqui..."
          class="pl-10"
          v-model="filters.city"
        />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
          <MapPinIcon class="size-5 text-black" />
        </span>
      </div>
    </section>
    <section class="w-full">
      <h4 class="mb-2">Buscar</h4>
      <Input placeholder="Ex: Onix Turbo" v-model="filters.model" />
    </section>
    <section class="w-full">
      <h4 class="mb-2">De</h4>
      <Input placeholder="2010" v-model="filters.year_from" />
    </section>
    <section class="w-full">
      <h4 class="mb-2">Até</h4>
      <Input placeholder="2022" v-model="filters.year_to" />
    </section>
    <ButtonComponent @click="handleSearch" variant="rounded">Buscar</ButtonComponent>
  </main>
</template>
