<template>
  <div class="h-40 flex justify-center rounded-3xl">
    <div
      class="h-full w-full flex items-center justify-center text-blue-200 text-3xl transition-all font-mono hover:text-black hover:bg-white hover:text-5xl"
    >
      {{ props.classroom.classroom }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  classroom: Object,
});
</script>

<style lang="scss" scoped></style>
