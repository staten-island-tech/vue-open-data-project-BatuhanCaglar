<template>
    <div>
      <h1>Residential or Commerical Chart</h1> 
      <button @click="$router.push('/')">Back to Home</button>
      <ChartRescom />
     
    </div>
  </template>
  
  <script setup>
  import ChartRescom from '@/components/ChartRescom.vue';
  </script>
  
  <style scoped>
  button {
    margin-top: 20px;
    padding: 10px;
    background: red;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>