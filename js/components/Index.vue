<template>
  <div>
    <h1>INDEX</h1>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.f1().then(this.f2().then(this.f3()))
    },

    methods: {
      f1() {
        return new Promise(function(resolve){
          setTimeout(function(){
            // console.log("OKE F1")	
            resolve()
          }, 1000)	
        })
      },

      f2() {
        return new Promise(function(resolve){
          setTimeout(function(){
            // console.log("OKE F2")	
            resolve()
          }, 2000)	
        })
      },

      f3() {
        return new Promise(function(resolve){
          setTimeout(function(){
            // console.log("OKE F3")	
            resolve()
          }, 2000)	
        })
      },
    }
  }
</script>
