<template>
  <div class="project-card row bg-dark">
    <div class="col-md-11">
      <img :src="project.imgUrl.default" alt="project">
      <h4>{{ project.title }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  prop: {
    project: {
      type: Object,
      required: true
    }
  },
  name: 'ProjectCard',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
