<template>
  <div>
    <component :is="componentBody"></component>
  </div>
</template>

<script lang="babel">
import { markRaw } from 'vue'
export default {
  name: 'dynamic-page',
  components: {

  },
  data () {
    return {
      componentBody:null
    }
  },
  watch: {
    $route() {
      this.showpage()
    }
  },
  created(){
    this.showpage()
  },
  methods:{
    showpage(){
        let reg_com_name = this.$route.name
        this.$mybus.emit('dynamic-page', {'component_name':reg_com_name,'path':this.$route.path,'cb':(_componentBody) => {
            this.componentBody = markRaw(_componentBody)
        }});
    }
  }
};
</script>
<style>
</style>
