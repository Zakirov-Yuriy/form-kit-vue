<template>
  <div>
    <h1>Результат отправки</h1>
    <div v-if="resultStore.requestId">
      <p><strong>Request ID:</strong> {{ resultStore.requestId }}</p>
      <p><strong>Classifier:</strong> {{ resultStore.classifier }}</p>
    </div>
    <div v-else>
      <p>Нет данных для отображения. Пожалуйста, отправьте одну из форм.</p>
    </div>
    <router-link to="/" class="home-button">Главный экран</router-link>
  </div>
</template>

<style scoped>
.home-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1em;
}
.home-button:hover {
  background-color: #0056b3;
}
</style>

<script setup lang="ts">
import { useResultStore } from '@/store/result.store'

const resultStore = useResultStore()
</script>
