<template>
  <table class="table">
    <thead class="text-center">
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Edad</th>
        <th scope="col">Prevision</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody v-for="paciente in $store.state.pacientes" :key="paciente.id">
      <tr>
        <td>{{ paciente.nombre }}</td>
        <td>{{ paciente.apellido }}</td>
        <td>{{ paciente.edad }}</td>
        <td>{{ paciente.prevision }}</td>
        <td class="text-center">
          <button class="btn btn-outline-info m-1">Eliminar</button>
          <button class="btn btn-outline-info m-1">Editar</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Firebase from "firebase";
export default {
  name: "ListaPacientes",
  data: () => ({
    pacientes: [],
  }),
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

<style></style>
