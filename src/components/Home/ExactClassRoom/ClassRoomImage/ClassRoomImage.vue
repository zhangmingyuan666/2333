<template>
  <div class="demo-image__placeholder" v-if="props.cameraStatus">
    <div class="block">
      <span class="demonstration">Default</span>
      <el-image :src="firstImage" @load="(e) => load($event)" fit="cover" />
    </div>
    <div class="block">
      <span class="demonstration">Default</span>
      <el-image :src="secondImage" fit="cover">
        <template #placeholder>
          <el-image :src="preImage" fit="cover"></el-image> </template
      ></el-image>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  cameraStatus: Boolean,
});

const baseURL1 = "http://192.168.123.98:8000/output_0.jpg";
const baseURL2 = "http://192.168.123.98:8000/output_1.jpg";

const firstImage = ref(baseURL1);
const secondImage = ref(baseURL2);
const preImage = ref(baseURL2);

const load = (e) => {
  console.log(e);
};

setInterval(() => {
  preImage.value = secondImage.value;
  const diff = "?" + Math.floor(Math.random() * 1000) + 1;
  firstImage.value = baseURL1 + diff;
  secondImage.value = baseURL2 + diff;
}, 5000);
</script>

<style lang="scss" scoped>
.demo-image__placeholder .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 49%;
  box-sizing: border-box;
  vertical-align: top;
  height: 500px;
  width: 500px;
}
.demo-image__placeholder .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
.demo-image__placeholder .el-image {
  padding: 0 5px;
  width: 100%;
  height: 500px;
  max-width: 500px;
  max-height: 600px;
}

.demo-image__placeholder.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 14px;
}
.demo-image__placeholder .dot {
  animation: dot 2s infinite steps(3, start);
  overflow: hidden;
}
</style>
