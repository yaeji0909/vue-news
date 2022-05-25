<template>
  <div id="app">
  <tool-bar></tool-bar>
  <transition name="fade">
    <router-view></router-view>
  </transition>
  <MainSpinner :loading="loadingStatus"></MainSpinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import MainSpinner from './components/MainSpinner.vue'
import bus from './utils/bus'

export default {
  data(){
    return{
      loadingStatus:false,
    }
  },
  methods:{
  startSpinner(){
    this.loadingStatus = true;
  },
  endSpinner(){
    this.loadingStatus =false;
  }
  },
  created(){
    bus.$on('start:MainSpinner', this.startSpinner);
    bus.$on('end:MainSpinner',this.endSpinner);
  },
  beforeDestroy(){
    bus.$off('start:MainSpinner', this.startSpinner);
    bus.$off('end:MainSpinner',this.endSpinner);
  },
  components: { ToolBar, MainSpinner }
}
</script>

<style>

body{
  padding: 0;
  margin: 0;
}

a{
  color: #34495e;
  text-decoration: none;
}
a:hover{
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active{
  text-decoration: underline;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
