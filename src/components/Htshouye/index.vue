<template>
  <div class="htshouye">
       首页
  </div>
</template>

<script>


export default {
  name: 'Htshouye',
  components:{
      
  },
  data () {
     return  {
          songList:''
     }
  },
  created:function(){
                this.getParams();
            },
      methods: {
            getParams:function(){

      },

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
