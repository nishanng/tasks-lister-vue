<template>
    <div class="login-container">
      <h1>Login</h1>
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button @click="login">Login</button>
      <button @click="register">Register</button>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { auth } from "../firebase";
  
  export default {
    setup() {
      const email = ref("");
      const password = ref("");
  
      const login = async () => {
        try {
          await auth.signInWithEmailAndPassword(email.value, password.value);
        } catch (error) {
          console.error(error);
        }
      };
  
      const register = async () => {
        try {
          await auth.createUserWithEmailAndPassword(email.value, password.value);
        } catch (error) {
          console.error(error);
        }
      };
  
      return { email, password, login, register };
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
  }
  
  input {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.5rem;
  }
  
  button {
    display: inline-block;
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #1e90ff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #1c86ee;
  }
  </style>
  