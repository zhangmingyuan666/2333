<template>
  <div class="w-full flex flex-col">
    <div class="h-20 w-full">
      <HomeHeader></HomeHeader>
    </div>
    <div class="flex-1 p-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "../components/Home/HomeHeader/HomeHeader.vue";
import { getAllClassRoomData } from "@/service/main/classroom.js";
import { onMounted, provide, ref } from "vue";

export const allClassRoomSymbol = Symbol("allClassRoom");
const classRoomData = ref("");

export default {
  name: "Home",
  components: {
    HomeHeader,
  },
  setup() {
    provide(allClassRoomSymbol, classRoomData);

    async function getAllClassRoomAction() {
      const { result } = await getAllClassRoomData("/getClassRoom");

      if (result) {
        classRoomData.value = result;
        console.log(classRoomData.value);
      }
    }

    onMounted(() => {
      getAllClassRoomAction();
    });
  },
};
</script>
