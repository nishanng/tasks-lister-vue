<template>
  <div id="app">
    <AppHeader v-if="user" />
    <Login v-if="!user" />
    <ToDoList v-if="user" />
  </div>
</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";
import { auth } from "./firebase";
import AppHeader from "./components/Appheader.vue";
import Login from "./components/Login.vue";
import ToDoList from "./components/ToDoList.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    Login,
    ToDoList,
  },
  setup() {
    const user = ref(null);

    onAuthStateChanged(auth, (currentUser) => {
      user.value = currentUser;
    });

    return { user };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #d8d8d8; /* Add this line for the subtle grey background */
}
</style>
