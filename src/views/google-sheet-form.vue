<template>
  <section>
    <h1>Google Sheet form page</h1>
    <input
      type="text"
      v-model="formData.name"
      placeholder="Enter project name"
    />
    <input type="text" v-model="formData.price" placeholder="Enter price" />
    <button @click="onAdd">Add</button>
  </section>
</template>

<script>
  import {googleService} from '../services/google.service.js';

  export default {
    name: 'ProjectEdit',
    components: {},
    data() {
      return {
        formData: {
          name: '',
          price: '',
        },
      };
    },
    created() {},
    methods: {
      onAdd() {
        // console.log(this.formData);
        googleService.save({...this.formData}).then(() => {
          this.formData = googleService.getEmptyFormData();
          console.log('test');
        });
      },
    },
    computed: {},
    unmounted() {},
  };
</script>

<style></style>
