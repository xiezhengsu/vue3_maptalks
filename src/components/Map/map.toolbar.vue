<template>
  <div class="toolbar">
    <div
      :class="['item', active === item.name ? 'active' : '']"
      v-for="(item, inx) in buttonList"
      :key="inx"
      @click="clickCurrent(item.name)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useMapToolBars from "@/hooks/map.toolbars";
const { activeMapRangingTool, activeMapAreaTool, activeDrawPolygonTool } =
  useMapToolBars(window.viewer);
const active = ref(null);
const buttonList = ref([
  {
    name: "删除",
    icon: "delete",
  },
  {
    name: "测距",
    icon: "Ranging",
  },
  {
    name: "测面",
    icon: "SurfaceMeasurement",
  },
  {
    name: "标绘",
    icon: "plotting",
  },
  {
    name: "复位",
    icon: "reposition",
  },
  {
    name: "定位",
    icon: "positioning",
  },
  {
    name: "收起",
    icon: "positioning",
  },
]);
const right = ref("330px");
const clickCurrent = (name) => {
  if (name === active.value) {
    active.value = null;
  } else {
    active.value = name;
  }
  if (name === "收起") {
    existApi(name);
    if (right.value === "30px") {
      right.value = "30px";
    } else {
      right.value = "30px";
    }
    return;
  }
  const objItem = {
    删除: "",
    测距: activeMapRangingTool,
    测面: activeMapAreaTool,
    标绘: activeDrawPolygonTool,
    复位: "",
    定位: "",
  };

  if (objItem[name]) {
    objItem[name](name === active.value);
  } else {
    console.log(name);
  }
};
</script>

<style lang="scss" scoped>
.toolbar {
  position: absolute;
  top: 20px;
  right: v-bind(right);
  transition: 0.8s;
  .item {
    background: rgb(237, 209, 214);
    border-radius: 3px;
    box-shadow: 2px 2px 5px #999;
    cursor: pointer;
    margin: 10px 0;
    padding: 5px;
  }
  .active {
    background: #f00;
    color: #fff;
  }
}
</style>
