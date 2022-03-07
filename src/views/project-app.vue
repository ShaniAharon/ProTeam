<template>
  <main class="main-content">
    <h1>Welcome to ProTeam</h1>
    <h2>Build your dream team now</h2>
    <button @click="addProject">Add Project</button>
  </main>
  <section class="container-center">
    <project-list
      @removed="removeProject"
      v-if="projects"
      :projects="projectsToShow"
    />
  </section>
</template>

<script>
  import projectList from '../components/project-list.cmp.vue';
  import {projectService} from '../services/project.service.js';
  import projectEdit from '../views/project-edit.vue';

  export default {
    name: 'ProjectApp',
    components: {
      projectList,
      projectEdit,
    },
    data() {
      return {
        projects: null,
      };
    },
    created() {
      this.loadProjects();
    },
    methods: {
      loadProjects() {
        projectService.query().then((projs) => {
          console.log(projs);
          this.projects = projs;
        });
      },
      addProject() {
        this.$router.push('/edit');
      },
      removeProject(projectId) {
        projectService.remove(projectId).then((projs) => {
          this.projects = projs;
        });
      },
    },
    computed: {
      projectsToShow() {
        return this.projects;
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
