<template>
  <section>
    <h2>{{ formTitle }}</h2>
    <form @submit.prevent="save">
      <input type="text" v-model="projectToEdit.name" placeholder="title" />
      <input type="number" v-model="projectToEdit.price" placeholder="price" />
      <button>Save</button>
    </form>
  </section>
</template>

<script>
  import {projectService} from '../services/project.service.js';

  export default {
    name: 'ProjectEdit',
    components: {},
    data() {
      return {
        projectToEdit: projectService.getEmptyProject(),
      };
    },
    created() {
      const projectId = this.projectId;
      if (projectId) {
        projectService
          .getById(projectId)
          .then((project) => (this.projectToEdit = project));
      }
    },
    methods: {
      save() {
        projectService.save(this.projectToEdit).then((project) => {
          this.$router.push('/app');
        });
      },
    },
    computed: {
      formTitle() {
        return this.projectId ? 'Edit project' : 'Add project';
      },
      projectId() {
        return this.$route.params.projectId;
      },
    },
    unmounted() {},
  };
</script>

<style>
  .main-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    /* margin: 0 auto; */
  }
</style>
