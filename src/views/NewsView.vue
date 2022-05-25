<template>
  <list-item></list-item>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import bus from "../utils/bus";
export default {
  components: {
    ListItem,
  },
  created() {
    bus.$emit("start:MainSpinner");
    setTimeout(() => {
      this.$store
        .dispatch("FETCH_NEWS")
        .then(() => {
          console.log("fetched");
          bus.$emit("end:MainSpinner");
        })
        .catch((error) => {
          console.log(error);
        });
    }, 3000);
  },
};
</script>

<style scoped></style>
