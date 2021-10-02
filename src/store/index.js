import Vue from "vue";
import Vuex from "vuex";
import Firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pacientes: [],
  },
  mutations: {
    SET_PACIENTES(state, nuevosPacientes) {
      state.pacientes = nuevosPacientes;
    },
    AGREGAR_PACIENTE(state, nuevoPacienteAgregado) {
      state.pacientes = nuevoPacienteAgregado;
    },
  },
  actions: {
    TraerTodosLosPacientes(context) {
      Firebase.firestore()
        .collection("pacientes")
        .get()
        .then((collection) => {
          const pacientes = [];

          collection.forEach((document) => {
            this.pacientes.push({ id: document.id, ...document.data() });
          });

          context.commit("SET_PACIENTES", pacientes);
        });
    },
    AgregarNuevoPaciente(context) {
      Firebase.firestore()
        .collection("pacientes")
        .get()
        .then((collection) => {
          let pacienteNuevo = {
            nombre: this.paciente.nombre,
            apellido: this.paciente.apellido,
            edad: this.paciente.edad,
            prevision: this.paciente.prevision,
          };

          collection.forEach((document) => {
            this.pacienteNuevo.push({ id: document.id, ...document.data() });
          });

          context.commit("AGREGAR_PACIENTE", pacienteNuevo);
        });
    },
  },
  modules: {},
});
