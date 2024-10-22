<template>
  <div class="mainContainer">
    <Map></Map>
    <map-toolbar></map-toolbar>
  </div>
</template>

<script setup>
import Map from "@/components/Map/index.vue";
import MapToolbar from "@/components/Map/map.toolbar.vue";
</script>

<style lang="scss">
.mainContainer {
  position: relative;
}
</style>
