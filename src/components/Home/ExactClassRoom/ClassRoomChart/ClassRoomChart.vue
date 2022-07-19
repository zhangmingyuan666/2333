<template>
  <div class="flex flex-1 flex-col">
    <div ref="myRef" class="w-full" :style="{ height: '300px' }"></div>
    <p class="text-xl">
      {{ title }}
    </p>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
export default {
  props: {
    title: String,
    option: Object,
  },
  setup(props) {
    const myRef = ref(null);

    onMounted(() => {
      setTimeout(() => {
        drawChart();
      }, 20);
    });

    // 绘制折线图
    const drawChart = () => {
      // 初始化echarts实例
      const Chart = echarts.init(myRef.value);
      // 父组件传来的实例参数
      Chart.setOption(props.option);
      window.addEventListener("resize", () => {
        //页面大小变化后Echarts也更改大小
        Chart.resize();
      });
    };
    return {
      myRef,
      drawChart,
    };
  },
};
</script>

<style lang="scss" scoped></style>
