import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProjectService {
  async getAll() {
    const res = await api.get('api/projects')
    logger.log(res.data)
    // AppState.projects = res.data.map(p=> p)
  }
}

export const projectsService = new ProjectService()
