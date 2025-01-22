<template>
    <div class="card" draggable="true">
      {{ card.title }}
    </div>
  </template>
  
  <script>
  export default {
    props: ['card'],
  };
  </script>
  