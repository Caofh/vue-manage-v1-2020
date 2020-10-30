<template>
  <div class="home">
    home

    <router-view />

  </div>
</template>

<script>

// import config from '@/config/gateway.config'
// import { initAsyn } from '@/utils/loadJs'
// import $ from 'zepto'
// console.log($)
// console.log(config)

import { listPage } from '@/api/pages/home/home'

export default {
  name: 'Home',
  components: {

  },
  data () {
    return {

    }
  },
  created () {
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
  }
}
</script>

<style lang="scss" scoped>
  .home {

  }


</style>
