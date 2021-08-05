<template>
  <div class="home container">
    <div class="row">
      <Thread :projects="projects" />
    </div>
    {{ projects }}
  </div>
</template>

<script>
import { onMounted, computed } from '@vue/runtime-core'
import Pop from '../utils/Notifier'
import { projectsService } from '../services/ProjectsService.js'
import { AppState } from '../AppState'

export default {

  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await projectsService.getAll()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      projects: computed(() => AppState.projects)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
