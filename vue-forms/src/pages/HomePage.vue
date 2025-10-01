<template>
  <div>
    <h1>Главная страница</h1>
    <nav>
      <router-link to="/form/a" class="nav-button">Форма A</router-link>
      <router-link to="/form/b" class="nav-button">Форма B</router-link>
      <router-link to="/result" class="nav-button">Результат</router-link>
    </nav>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
nav {
  margin-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
}
.nav-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1em;
  transition: background-color 0.3s ease;
}
.nav-button:hover {
  background-color: #0056b3;
}
</style>
