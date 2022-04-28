import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostsService {
  async getAllPosts() {
    const res = await api.get('api/blogs')
    logger.log(res.data)
    AppState.posts = [...res.data]
    
  }
}

export const postsService = new PostsService()