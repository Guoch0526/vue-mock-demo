<template>
  <h1>
    {{text}}
  </h1>
</template>

<script>
import apiUrls from '../api-urls'

export default {
  data () {
    return {
      text: ''
    }
  },
  created () {
    this.getRapData()
  },
  methods: {
    getRapData () {
      this.axios.post(apiUrls.getRapData.path)
        .then(res => {
          let ret = res.data
          if (ret.error && ret.error.message) {
            console.log(ret.error.message)
            return
          } else {
            this.text = ret.result.text
          }
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style lang="less" scoped>
  h1 {
    margin: 50px 0;
    font-size: 60px;
    color: #0081ff;
  }
</style>
