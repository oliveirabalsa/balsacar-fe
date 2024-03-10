<script setup lang="ts">
import ButtonComponent from '@/components/atoms/ButtonComponent.vue'
import SearchComponent from '@/components/molecules/SearchComponent.vue'
import { ref } from 'vue'

const refState = ref('')
const emit = defineEmits()

const redirect = () => {
  emit('redirect')
}

const submitHandler = () => {
  refState.value = 'Working'

  console.log(refState.value)
}
</script>

<template>
  <main class="bg-black h-70s relative">
    <div class="max-w-screen-2xl m-auto w-11/12">
      <header class="w-full flex items-center justify-center py-3">
        <img class="w-20 h-8 relative z-10" src="@/assets/logo.svg" alt="logo" />
      </header>
      <section class="mt-40 z-10 relative">
        <h1 class="text-primary text-5xl font-bold">
          Dê vida aos seus sonhos <br />
          sobre rodas.
        </h1>
        <div class="text-white mt-2 text-lg">
          <p>
            Escolha entre uma ampla variedade de carros que se adaptam <br />
            ao seu estilo e orçamento.
          </p>
          <p>
            Experimente a liberdade da estrada com eficiência e <br />
            segurança.
          </p>
        </div>

        <ButtonComponent @click="redirect" class="mt-20" variant="transparent"
          >Fale com nossos especialistas</ButtonComponent
        >
        <SearchComponent />
      </section>

      <img
        class="w-3/5 absolute right-0 bottom-0 hidden sm:block max-w-6xl"
        src="@/assets/car.svg"
        alt="car"
      />
    </div>
  </main>
</template>
