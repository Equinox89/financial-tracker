

<template>
  <section class="flex items-center justify-between mb-10">
    <h1 class="text-4xl font-extrabold">Summary</h1>
    <div>
      <USelectMenu v-model="selectedView" :options="transactionViewOption" />
    </div>
  </section>
</template>

<script setup lang="ts">
import {transactionViewOption} from "~/constans";

const selectedView = ref(transactionViewOption[1])
</script>

<style scoped>

</style>