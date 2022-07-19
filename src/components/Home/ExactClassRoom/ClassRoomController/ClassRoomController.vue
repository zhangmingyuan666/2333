<template>
  <el-row>
    <el-col
      :sm="12"
      :lg="6"
      v-for="(value, key, index) of deviceStatus"
      :key="key"
    >
      <el-result
        :icon="+value ? 'success' : 'error'"
        :title="'电器' + (index + 1)"
      >
        <template #extra>
          <el-switch
            :value="+value ? true : false"
            size="large"
            @click="click(key, +value)"
          />
        </template>
      </el-result>
    </el-col>
  </el-row>
</template>

<script setup>
import { ElMessage } from "element-plus";
import { defineProps, onMounted, defineEmits } from "vue";
import { postClassDeviceController } from "../../../../service/main/classroom";

const props = defineProps({
  roomState: Object,
  deviceStatus: Object,
  classroom: String,
});
const emit = defineEmits(["update"]);
onMounted(() => {
  console.log(props);
  console.log("123");
});

const click = async (device, status) => {
  const result = await postClassDeviceController(
    props.classroom,
    device,
    status == 0 ? true : false
  );
  console.log("-------------------------");
  console.log(result);
  console.log("------------------------");
  if (result.Error) {
    ElMessage({
      message: "现在暂时不允许开闭",
      type: "warning",
    });
  }

  emit("update");
};
</script>

<style lang="scss" scoped></style>
