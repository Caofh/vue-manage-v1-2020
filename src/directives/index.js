
export default {
  /*
    用法：
    <div v-auth="123"></div>
  */
  auth: {
    inserted: function (el, binding) {
      console.log(el)
      console.log(el.parentNode)
      console.log(binding)

      // 删掉自己
      el.parentNode.removeChild(el)

    }

  }
}
