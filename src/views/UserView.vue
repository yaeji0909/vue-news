<template>
  <div>
    <user-profile :info="userInfo">
    <div slot="username">{{userInfo.id}}</div>
    <span slot="time">{{'Joined ' + userInfo.created}}, </span>
    <span slot="karma"> {{ userInfo.karma }}</span>
    </user-profile>
    <!--     <p>name: {{ userInfo.id }}</p>
    <p>karma: {{ userInfo.karma }}</p>
    <p>created: {{ userInfo.created }}</p> -->
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
export default {
    computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userName);
  },
  components: {
    UserProfile,
  },
};
</script>

<style></style>
