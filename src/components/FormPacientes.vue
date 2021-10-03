<template>
  <div class="container_form">
    <form
      class="row ms-5 ps-5 justify-content-center container pt-5"
      @submit.prevent="ValidarFormAdd"
    >
      <div class="mb-3 col-3">
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="Nombre"
        />
      </div>
      <div class="mb-3 col-3">
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Apellido"
        />
      </div>
      <div class="mb-3 col-3">
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Edad"
        />
      </div>
      <div class="mb-3 col-3">
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Prevision"
        />
      </div>
      <button type="submit" class="btn btn-dark col-md-2">
        Agregar nuevo paciente
      </button>
    </form>
  </div>
</template>

<script>
import Firebase from "firebase";

export default {
  name: "Form",
  data: () => ({}),
  methods: {
    ValidarFormAdd() {},
  },
  mounted() {
    Firebase.firestore()
      .collection("pacientes")
      .get()
      .then((collection) => {
        collection.forEach((document) => {
          this.pacientes.push({ id: document.id, ...document.data() });
        });
      });
  },
};
</script>

<style>
html,
body {
  margin: 0;
}
.container_form {
  height: 200px;
  background-color: rgb(89, 139, 185);
}
.form-label {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
}
</style>
