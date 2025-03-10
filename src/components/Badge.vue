<template>
  <div class="px-2.5 py-0.5 text-xs font-semibold bg-blue-600 text-white rounded-full">{{ text }}</div>
</template>

<script setup>
defineProps([
    'text'
]);
</script>
