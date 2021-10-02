<template>
  <div>
    <Form></Form>
    <ListaPacientes></ListaPacientes>
  </div>
</template>

<script>
import Form from "../components/FormPacientes.vue"
import ListaPacientes from "../components/ListaPacientes.vue"
import Firebase from "firebase";

export default {
  components: {
    Form, ListaPacientes
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
