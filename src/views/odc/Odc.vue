<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div @click="goPage">goPage</div>
  </div>
</template>

<script>
// import config from '@/config/gateway.config'
// import { initAsyn } from '@/utils/loadJs'
// import $ from 'zepto'
// console.log($)
// console.log(config)

import { listPage } from "@/api/pages/home/home";

// 工具函数
import { pushPage } from "@/utils/index.js";

export default {
  name: "Odc",
  components: {},
  data() {
    return {};
  },
  created() {
    // initAsyn(['moment' 'eruda'], () => {
    //   console.log(moment)
    //   console.log(456)
    // })
    // console.log(123)
    //
    // console.log($)
    // listPage().then((data) => {
    //   console.log(data)
    // })
  },
  methods: {
    goPage() {
      pushPage(this, {
        name: "activity2-3",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.about {
}
</style>
