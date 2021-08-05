<template>
  <div class="profile-page">
    <h1>Hello Profile</h1>
    <ProjectThread
      <
      div
    >
    </projectthread>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import Pop from '../utils/Notifier'
import { useRoute } from 'vue-router'
import { projectsService } from '../services/ProjectsService'
import { AppState } from '../AppState'

export default {
  name: 'ProfilePage',
  setup() {
    const router = useRoute()
    onMounted(async() => {
      try {
        await projectsService.getByProfileId({ creatorId: router.params.id })
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

<style lang="scss" scoped>

</style>
