<template>
  <div class="sensor">
    <b class="title">传感器</b>

    <el-card class="image">

    </el-card>

    <div class="sensor-data">
      <el-card class="sensor-card" v-for="(value, index) in data" :key="index">
        <img :src="value.icon" alt="">
        <p>{{value.text}}: {{value.sensor}}</p>
      </el-card>
    </div>
  </div>

</template>

<script>
export default {
  name: "DefaultData",
  data() {
    return {
      data: [
        {icon: require("@/assets/svg/light.svg"), text: "光照", sensor: 1},
        {icon: require("@/assets/svg/light.svg"), text: "光照", sensor: 1},
        {icon: require("@/assets/svg/light.svg"), text: "光照", sensor: 1},
        {icon: require("@/assets/svg/light.svg"), text: "光照", sensor: 1},
        {icon: require("@/assets/svg/light.svg"), text: "光照", sensor: 1},
        {icon: require("@/assets/svg/light.svg"), text: "光照", sensor: 1},
        {icon: require("@/assets/svg/light.svg"), text: "光照", sensor: 1},
        {icon: require("@/assets/svg/light.svg"), text: "光照", sensor: 1},
        {icon: require("@/assets/svg/light.svg"), text: "光照", sensor: 1},
        {icon: require("@/assets/svg/light.svg"), text: "光照", sensor: 1},
        {icon: require("@/assets/svg/light.svg"), text: "光照", sensor: 1},
        {icon: require("@/assets/svg/light.svg"), text: "光照", sensor: 1},
        {icon: require("@/assets/svg/light.svg"), text: "光照", sensor: 1},
        {icon: require("@/assets/svg/light.svg"), text: "光照", sensor: 1},
        {icon: require("@/assets/svg/light.svg"), text: "光照", sensor: 1},
      ]
    }
  }
}
</script>

<style scoped lang="less">
@import "src/assets/css/base";

.sensor {
  padding: 10px;
}

.image {
  position: relative;
  left: 5px;
  width: calc(94% + 20px);
  height: 300px;
  border: 1px solid red;
}

.sensor-data {
  position: relative;
  top: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
}

.sensor-card {
  position: relative;
  margin: 5px;
  width: 47%;
  height: var(card-height);
  overflow: hidden;
  border: 1px solid red;
}

.sensor-card img {
  position: relative;
  width: 40%;
  height: 40%;
}

.sensor-card p {
  text-align: center;
}
</style>
