<template>
  <div class="">
    <div class="pb-10 flex w-full">
      <ClassRoomCharts :option="option" title="功率折线图" />
      <ClassRoomCharts :option="option2" title="人数折线图" />
    </div>
    <hr class="mb-10" />
    <div class="grid grid-cols-3 gap-10">
      <template v-for="(item, index) in allClassRoomData" :key="item.id">
        <ClassRoomItem
          :class="
            index === 1 || index === 5
              ? 'col-span-2 bg-purple-700'
              : ' bg-purple-500'
          "
          :classroom="item"
          @click="navigateToClassDetail(item.classroom)"
        ></ClassRoomItem>
      </template>
    </div>
    <hr class="mt-10" />
  </div>
</template>

<script setup>
import { inject, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import ClassRoomItem from "./ClassRoomItem/ClassRoomItem.vue";
import ClassRoomCharts from "./ClassRoomCharts/ClassRoomCharts.vue";
import { allClassRoomSymbol } from "@/views/Home.vue";

const allClassRoomData = inject(allClassRoomSymbol);

const router = useRouter();

const navigateToClassDetail = (id) => {
  router.push({ path: `/exactclassroom/${id}`, params: { id } });
};

const allWeek = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
function getOption() {
  const week = new Date().getDay();
  //const curWeek = [];

  const a = allWeek.slice(0, week);
  const b = allWeek.slice(week);
  console.log(a);
  console.log(b);
  const curWeek = [...b, ...a];
  console.log(curWeek);
  return curWeek;
}
const option = reactive({
  xAxis: {
    type: "category",
    data: ["A", "B", "C"],
  },
  yAxis: {
    type: "value",
    data: ["A", "B", "C"],
  },
  series: [
    {
      data: [10, 30, 40, 50, 60, 70, 80],
      type: "line",
    },
  ],
});

const option2 = reactive({
  xAxis: {
    type: "category",
    data: ["A", "B", "C"],
  },
  yAxis: {
    type: "value",
    data: ["A", "B", "C"],
  },
  series: [
    {
      data: [10, 20, 30, 40, 10, 20, 30],
      type: "line",
    },
  ],
});

onMounted(() => {
  const week = getOption();
  option.xAxis.data = week;
  option2.xAxis.data = week;
});
</script>

<style lang="scss" scoped></style>
