<template>
  <div class="thread">
    <Project v-for="project in projects" :key="project.id" :project="project">
    </project>
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  name: 'Thread',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
