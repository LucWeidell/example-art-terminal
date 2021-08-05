<template>
  <div class="thread">
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
