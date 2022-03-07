<template>
  <h1>Project Details</h1>
  <section v-if="project">
    <h3>See the project details here:</h3>
    <h2>{{ project._id }}</h2>
    <h2>{{ project.name }}</h2>
    <h2>{{ project.price }}</h2>
  </section>
</template>

<script>
  import {projectService} from '../services/project.service.js';

  export default {
    name: 'ProjectDetails',
    components: {},
    data() {
      return {
        project: null,
      };
    },
    created() {
      console.log('created');
      // this.loadProject(); // opt1 , opt2 is to use the watch for the project load
    },
    methods: {
      loadProject() {
        if (!this.projectId) return; // prevent the run of the watcher when change route
        //opt1
        //   const {projectId} = this.$route.params; // projectId like the name in the routes file :projectId
        projectService
          .getById(this.projectId)
          .then((project) => (this.project = project)); //opt2 run the projectId computed
      },
    },
    computed: {
      //opt 2 use computed for the projectId
      projectId() {
        return this.$route.params.projectId;
      },
    },
    //opt1 use the param specf as the func
    //   watch: {
    //     '$route.params.projectId'(id) {
    //       console.log('Changed to', id);
    //       this.loadProject();
    //     },
    //   },
    //opt 2
    watch: {
      // when the computed projectId run the watch handler also run
      projectId: {
        handler() {
          this.loadProject();
        },
        immediate: true, //to also run the watch on the start / run eagerly
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
