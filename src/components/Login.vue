<template>
    <div class="login-container">
      <h1>Login/Register</h1>
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button @click="login">Login</button>
      <button @click="register">Register</button>
      <p>OR</p>
      <button @click="signInWithGoogle">Sign In with Google</button>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { auth, signInWithGoogle } from "../firebase";
  
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
          const result = await auth.createUserWithEmailAndPassword(email.value, password.value);
          await result.user.sendEmailVerification();
          alert("Verification email sent. Please check your inbox and verify your email address.");
        } catch (error) {
          console.error(error);
        }
      };
  
      return { email, password, login, register, signInWithGoogle };
    },
  };
  </script>
  
  <!-- Add your existing scoped styles here -->
  