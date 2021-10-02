<template>
<div class="container_form ">
  <form class="row ms-5 ps-5 justify-content-center container pt-5" @submit.prevent="ValidarFormAdd">
    <div class="mb-3 col-3">
      <label for="exampleInputEmail1" class="form-label">Nombre:</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        
      />
    </div>
    <div class="mb-3 col-3">
      <label for="exampleInputPassword1" class="form-label">Apellido:</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputPassword1"
       
      />
    </div>
    <div class="mb-3 col-3">
      <label for="exampleInputPassword1" class="form-label">Edad:</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputPassword1"
        
      />
    </div>
    <div class="mb-3 col-3">
      <label for="exampleInputPassword1" class="form-label">Prevision:</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputPassword1"
        
      />
    </div>
    <button type="submit" class="btn btn-dark col-md-2 ">Agregar nuevo paciente</button>
  </form>
</div>
</template>

<script>
// import Firebase from 'firebase';
// import axios from 'axios';

export default {
  name: "Form",
  data: () => ({
  }),
  // methods:{
  //   ValidarFormAdd(){ 
  //   }
  // },
  // mounted(){
  //   Firebase.firestore()
  //   .collection("pacientes")
  //   .get()
  //   .then((collection) => {
  //     collection.forEach((document) => {
  //       this.pacientes.push({ id: document.id, ...document.data()})
  //     })
  //   })
  // }
 
};
</script>

<style>
html, body{
  margin: 0;
}
.container_form{
  height: 200px;
  background-color:  rgb(89, 139, 185);
}
.form-label{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: white;
}

</style>
