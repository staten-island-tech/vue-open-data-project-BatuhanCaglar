<template>
    <div class="card">
      <h2>Marshal: {{ eviction.marshal_last_name }}</h2>
      <p><strong>Address:</strong> {{ eviction.eviction_address }}</p>
      <p><strong>Borough:</strong> {{ eviction.borough }}</p>
      <p><strong>Neighborhood:</strong> {{ eviction.nta }}</p>
      <p><strong>Type Of: </strong>{{ eviction.residential_commercial_ind }}</p>
    </div>
  </template>
  
  <script setup>

  defineProps({eviction: Object});

  </script>
  
<style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 15px;
    width: 250px;
    background: #f9f9f9;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  }

  h2{
    color: black;
  }

    p{
        color: black;
    }

  </style>