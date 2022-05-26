import bus from "../utils/bus";

export default {
  mounted() {
    bus.$emit("end:MainSpinner");
  }
  /*  created() {
    bus.$emit("start:MainSpinner");
    this.$store
      .dispatch("FETCH_LIST", this.$route.name)
      .then(() => {
        console.log("fetched");
        bus.$emit("end:MainSpinner");
      })
      .catch((error) => {
        console.log(error);
      });
  }, */
};
