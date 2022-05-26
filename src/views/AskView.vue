<template>
<div>
   <list-item></list-item>
</div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
/* import bus from '../utils/bus' */
import ListMixin from "../mixins/ListMixin";


export default {
  components:{
    ListItem,
  },
 /*  mounted(){
    bus.$emit('end:MainSpinner');
  } */
 mixins:[ListMixin]
}
</script>

<style>

</style>