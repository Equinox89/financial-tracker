

<template>
  <section class="flex items-center justify-between mb-10">
    <h1 class="text-4xl font-extrabold">Summary</h1>
    <div>
      <USelectMenu v-model="selectedView" :options="transactionViewOption" />
    </div>
  </section>
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-16 mb-10">
    <Trend color="green" title="Income" :amount="4000" :last-amount="3000" :loading="false" />
    <Trend color="red" title="Income" :amount="4000" :last-amount="3000" :loading="false" />
    <Trend color="green" title="Income" :amount="4000" :last-amount="3000" :loading="false" />
    <Trend color="red" title="Income" :amount="4000" :last-amount="3000" :loading="true" />
  </section>
</template>

<script setup lang="ts">
import {transactionViewOption} from "~/constans";

const selectedView = ref(transactionViewOption[1])
</script>

<style scoped>

</style>