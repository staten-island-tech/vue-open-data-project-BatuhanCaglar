<template>
  <div class="data-container">
    <h1 class="web-title">Evictions Extravaganza</h1>
    <button class="start-button">Analyze</button>
  </div>
</template>

<script setup></script>

<style>
.game-container {
  background: rgba(75, 86, 144, 0.7);
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  width: 60%;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.game-title {
  font-family: 'Handjet', sans-serif;
  font-optical-sizing: auto;
  font-size: 3rem;
  margin-bottom: 30px;
}
.start-button {
  background-color: orange;
  padding: 20px 40px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 2rem;
  display: block;
  margin: 0 auto;
  font-family: 'Handjet', sans-serif;
  font-optical-sizing: auto;
}
</style>
