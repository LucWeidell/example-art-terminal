<template>
  <div class="project-card row shadow border border-light bg-dark" data-toggle="modal" :data-target="'#project-' + project.id">
    <div class="col-md-11">
      <img :src="project.imgUrl.default" alt="project">
      <h4>{{ project.title }}</h4>
      <router-link :to="{ name: 'ProfilePages', params:{id: 'project.creator.id'}}" @click.stop>
        <div>
          <h4>{{ project.creator.name }}</h4>
          <img :src="project.creator.picture" alt="">
        </div>
      </router-link>
    </div>
  </div>
  <ProjectModal : project="project" />
</template>

<script>
export default {
  props: {
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
.secondImg{
  height:
}
</style>
