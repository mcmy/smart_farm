<template>
  <div class="div">
    <a class="a" @click="goto('dataShow')">首页<br/>进入展示页面</a>
  </div>
</template>

<script>
export default {
  name: "Index",
  methods:{
    goto(page){
      this.$router.push({
        name:page
      })
    }
  }
}
</script>

<style scoped>
.div {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
}

.a {
  width: 100%;
  text-align: center;
}
</style>