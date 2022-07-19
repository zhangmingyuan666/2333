<template>
  <div class="h-full w-full bg-gray-200 shadow-lg flex items-center">
    <el-icon :size="30" class="ml-10">
      <Back @click="navigateBack"></Back>
    </el-icon>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navigateBack = () => {
  router.go(-1);
};
</script>

<style lang="scss" scoped></style>
