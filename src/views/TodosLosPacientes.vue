<template>
  <div>
    <ul>
      <li v-for="paciente in $store.state.pacientes" :key="paciente.id">
        {{ paciente.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
