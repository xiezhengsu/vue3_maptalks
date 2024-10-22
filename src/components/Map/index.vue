<template>
  <div ref="mapRef" class="mapContainer"></div>
</template>

<script setup>
import useMapTools from "@/hooks/map.utils";
import { nextTick, onMounted, ref } from "vue";
const { initMap } = useMapTools();
const mapRef = ref(null);
onMounted(() => {
  nextTick(() => {
    initMap(mapRef.value);
  });
});
</script>

<style lang="scss" scoped>
.mapContainer {
  width: 100vw;
  height: 100vh;
  background-color: #ccc;
  position: relative;
}
</style>
