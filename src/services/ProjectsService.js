import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { convertToQuery } from '../utils/Query'
import { api } from './AxiosService'

class ProjectService {
  async getAll(query = {}) {
    const res = await api.get('api/projects' + convertToQuery(query))
    // logger.log(res.data)
    AppState.projects = res.data
  }

  // async getProjectsById(id) {
  //   const res = await api.get('api/projects' + id)
  //   // logger.log(res.data)
  //   AppState.projects = res.data
  // }
}

export const projectsService = new ProjectService()
