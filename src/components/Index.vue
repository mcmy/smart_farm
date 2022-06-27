<template>
  <b>智慧农场</b>
  <el-card class="top">

  </el-card>
  <div class="body">
    <div v-for="(value,index) in farm" :key="value" class="farm">
      <el-card class="li">
        {{ value }} - {{ index }}
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      farm: [
        {
          name: 'plum',
          bg: require('@/assets/img/plum/bg.png')
        },
        {
          name: 'plum'
        },
        {
          name: 'plum'
        },
        {
          name: 'plum'
        }
      ]
    }
  },
  methods: {
    goto(page) {
      this.$router.push({
        name: page
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import "src/assets/css/base";

.top {
  width: calc(100% - 20px);
  margin-left: 10px;
  height: 200px;
}

.body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
}

.farm {
  width: calc(50% - 15px);
  height: @card-height;
  margin-top: 10px;

  & .li {
    width: 100%;
    height: 200px;
  }
}
</style>