import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostsService {
  async getAllPosts() {
    const res = await api.get('api/blogs')
    logger.log(res.data)
    AppState.posts = [...res.data]
    
  }
  async createPost(formData) {
    const res = await api.post('api/blogs/', formData)
    this.getAllPosts()
    return res.data
  }
  async deletePost(id) {
    const res = await api.delete('api/blogs/' + id)
    logger.log('success')
    AppState.posts = AppState.posts.filter(p => p.id !== id)
  }
}

export const postsService = new PostsService()