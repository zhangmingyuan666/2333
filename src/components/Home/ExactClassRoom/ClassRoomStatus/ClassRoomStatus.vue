<template>
  <el-row>
    <el-col :sm="12" :lg="6">
      <el-result
        :icon="roomState.Relay ? 'success' : 'error'"
        title="继电器"
        :sub-title="roomState.Relay ? '已经开启' : '需要等待物联网设备开启'"
      >
      </el-result>
    </el-col>
    <el-col :sm="12" :lg="6">
      <el-result
        :icon="roomState.camera ? 'success' : 'error'"
        title="相机"
        :sub-title="roomState.camera ? '已经开启' : '需要等待物联网设备开启'"
      >
      </el-result>
    </el-col>
  </el-row>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  roomState: Object,
});

console.log(props);
</script>

<style lang="scss" scoped></style>
