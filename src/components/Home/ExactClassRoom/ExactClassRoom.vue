<template>
  <div class="">
    <div
      class="h-40 flex justify-center items-center mb-10 divide-y border-b-4"
    >
      <p class="text-4xl tracking-widest">{{ id + "教室" }}</p>
    </div>
    <suspense>
      <div v-if="roomState.Error || deviceStatus.Error">
        <el-empty description="这个教室没有进行配置噢" />
      </div>
      <template v-else>
        <template class="pb-10 flex w-full">
          <ClassRoomChart title="口罩人数" :option="mask" />
          <ClassRoomChart title="专注人数" :option="concert" />
        </template>
        <ClassRoomStatus :roomState="roomState" />
        <ClassRoomController
          @update="update"
          :roomState="roomState"
          :deviceStatus="deviceStatus"
          :classroom="id"
        />
        <hr />
        <ClassRoomImage
          :cameraStatus="roomState.camera"
          v-if="roomState.camera"
        />
      </template>
    </suspense>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";
import { ElLoading } from "element-plus";
import {
  getExactClassRoomData,
  getExactClassRoomStateData,
  getExactClassDeviceStateData,
} from "../../../service/main/classroom";
import { useRoute } from "vue-router";
import ClassRoomStatus from "./ClassRoomStatus/ClassRoomStatus.vue";
import ClassRoomController from "./ClassRoomController/ClassRoomController.vue";
import ClassRoomImage from "./ClassRoomImage/ClassRoomImage.vue";
import ClassRoomChart from "./ClassRoomChart/ClassRoomChart.vue";
const roomState = ref({});
const deviceStatus = ref({});
const classRoomData = ref({});

const route = useRoute();
const { id } = route.params;
const getExactClassRoomDataAction = async (id) => {
  let el = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
  });
  // 获取所有的信息
  classRoomData.value = await getExactClassRoomData(id);
  roomState.value = await getExactClassRoomStateData(id);
  deviceStatus.value = await getExactClassDeviceStateData(id);
  el.close();
};

setInterval(() => {
  async function fn() {
    const result = await getExactClassRoomStateData(id);
    deviceStatus.value = await getExactClassDeviceStateData(id);
    console.log(result);
    roomState.value = result;
  }
  fn();
}, 6000);

// ********************
// 饼图信息不需要

const concert = reactive({
  series: [
    {
      type: "pie",
      data: [
        {
          value: 335,
          name: "专注人数",
        },
        {
          value: 234,
          name: "不专注人数",
        },
      ],
    },
  ],
});

const mask = reactive({
  series: [
    {
      type: "pie",
      data: [
        {
          value: 335,
          name: "戴了口罩",
        },
        {
          value: 234,
          name: "不戴口罩",
        },
      ],
    },
  ],
});

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function getRandom() {
  const maskRandom = getRndInteger(90, 99);
  const concertRandom = getRndInteger(65, 70);

  return [maskRandom, concertRandom];
}

onMounted(() => {
  getExactClassRoomDataAction(id);

  const [maskRandom, concertRandom] = getRandom();
  console.log(maskRandom, concertRandom);
  console.log(mask);
  mask.series[0].data[0].value = maskRandom;
  mask.series[0].data[1].value = 100 - maskRandom;
  concert.series[0].data[0].value = concertRandom;
  concert.series[0].data[1].value = 100 - concertRandom;
});
//******************************************* */
const update = async () => {
  // 在控制按钮后，重新获取设备信息
  const result = await getExactClassDeviceStateData(id);
  deviceStatus.value = result;
};
</script>

<style lang="scss" scoped></style>
