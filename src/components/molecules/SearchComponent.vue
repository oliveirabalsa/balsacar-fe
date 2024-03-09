<script setup lang="ts">
import SelectComponent from '@/components/atoms/SelectComponent.vue'
import ButtonComponent from '@/components/atoms/ButtonComponent.vue'

const options = [
  {
    label: 'Maverick',
    value: 'maverick'
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
</script>

<template>
  <main
    class="mx-auto top-24 p-6 w-11/12 h-36 bg-gray-50 relative rounded-xl shadow-lg flex items-end justify-between gap-4"
  >
    <section class="w-full">
      <h4 class="mb-2">Tipo de carro</h4>
      <SelectComponent class="w-52" placeholder="Buscar..." :options="options" />
    </section>
    <section class="w-full">
      <h4 class="mb-2">Localização</h4>
      <SelectComponent class="w-52" placeholder="Buscar..." :options="options" />
    </section>
    <section class="w-full">
      <h4 class="mb-2">Buscar</h4>
      <SelectComponent class="w-52" placeholder="Buscar..." :options="options" />
    </section>
    <section class="w-full">
      <h4 class="mb-2">De</h4>
      <SelectComponent class="w-52" placeholder="Buscar..." :options="options" />
    </section>
    <section class="w-full">
      <h4 class="mb-2">Até</h4>
      <SelectComponent class="w-52" placeholder="Buscar..." :options="options" />
    </section>
    <ButtonComponent variant="rounded">Buscar</ButtonComponent>
  </main>
</template>
