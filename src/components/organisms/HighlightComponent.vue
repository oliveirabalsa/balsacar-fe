<script setup lang="ts">
import moneyIcon from '@/assets/money.svg'
import calendarCheckIcon from '@/assets/calendar-check.svg'
import heartIcon from '@/assets/heart.svg'

const buyReasons = [
  {
    title: '1º motivo: Custo benefício',
    description:
      'Começo pelo motivo mais óbvio, custo benefício, é mais barato ter um carro antigo ou um carro novo, no caso um Fusca.',
    icon: moneyIcon
  },
  {
    title: '2º motivo: ser reconhecido',
    description:
      'Às vezes não é um beneficio, mas ter um Fusca bem inteiro, reluzente e que chama atenção facilita ser reconhecido, eu mesmo toda semana encontro alguém que me viu em um determinado lugar, graças ao carro. ',
    icon: calendarCheckIcon
  },
  {
    title: '3º motivo: Teste de namorada e amigos',
    description:
      'Esse benefício é um tanto incomum, mas veja bem. Se você for um fusqueiro solteiro provavelmente quando começar um relacionamento será colocado à prova, piadinhas e insinuações viram a respeito do Fusca.',
    icon: heartIcon
  }
]
</script>
<template>
  <main class="h-screen">
    <section class="mt-36">
      <div class="text-center">
        <h1 class="font-bold text-4xl">Destaque do dia!</h1>
        <div class="mt-4 font-medium text-lg">
          <p>é relíquia que você quer?</p>
          <p>3 motivos para adquirir esse lindo Fusca:</p>
        </div>
      </div>
    </section>
    <section class="flex items-center w-11/12 max-w-screen-2xl mx-auto box-border mt-20 relative">
      <article class="w-2/4">
        <div
          class="max-w-full bg-white flex items-center border border-gray-100 p-5 rounded-xl mt-3 z-10"
          v-for="(value, index) in buyReasons"
          :key="index"
        >
          <div class="mx-3 bg-gray-50 flex items-center justify-center h-32 rounded-xl">
            <img class="max-w-fit px-2" :src="value.icon" alt="reason_icon" />
          </div>
          <div>
            <h1 class="text-primary text-xl font-bold">{{ value.title }}</h1>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </article>
      <article
        class="w-2/4 bg-gray-50 py-36 absolute z-0 right-0 pl-24 mr-[5%] flex justify-end rounded-xl z-[-1]"
      >
        <img src="@/assets/fusca.svg" alt="" />
      </article>
    </section>
  </main>
</template>
