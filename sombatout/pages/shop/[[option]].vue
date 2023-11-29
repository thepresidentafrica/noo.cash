

<template>
<div class="min-h-screen h-screen flex justify-center">
    {{ $route.params.option?$route.params.option:'shop' }}
</div>
</template>

<script setup lang="ts">
    // const route = useRoute();
</script>