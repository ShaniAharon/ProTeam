<template>
  <section class="project-list">
    <div
      v-for="project in projects"
      :key="project._id"
      class="project-preview-container"
    >
      <project-preview :project="project" />
      <div class="btns-container">
        <button @click="remove(project._id)">X</button>
        <!-- <router-link :to="'/project/'+project._id">Details</router-link>
                <router-link :to="'/project/edit/'+project._id">Edit</router-link> -->
      </div>
    </div>
  </section>
</template>
<script>
  import projectPreview from '../components/project-preview.cmp.vue';

  export default {
    name: 'ProjectList',
    props: ['projects'],
    components: {
      projectPreview,
    },
    data() {
      return {};
    },
    created() {},
    methods: {},
    computed: {},
    unmounted() {},
  };
</script>
<style></style>
