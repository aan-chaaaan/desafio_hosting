<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src

import HelloWorld from "@/components/HelloWorld.vue";
import Firebase from "firebase";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data: () => ({
    pacientes: []
  }),
  mounted(){
    Firebase.firestore()
    .collection("pacientes")
    .get()
    .then((collection) => {
      collection.forEach((document) => {
        this.pacientes.push({ id: document.id, ...document.data()})
      })
    })
  }
};
</script>
