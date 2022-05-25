import ListView from './ListView.vue'
import bus from "../utils/bus";

export default function CreateListView(name) {
    return {
      //재사용할 인스턴트 옵션들이 들어갈 자리
      name,
      created() {
          bus.$emit("start:MainSpinner");
          this.$store.dispatch("FETCH_LIST",this.$route.name)
            .then(() => {
              console.log("fetched");
              bus.$emit("end:MainSpinner");
            })
            .catch((error) => {
              console.log(error);
            });
      },
      render(createElement) {
        return createElement(ListView);
      },
    };   
}
