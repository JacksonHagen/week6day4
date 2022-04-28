<template>
  <form @submit.prevent="handleSubmit()">
    <div class="form-group">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder="Post Title..."
          v-model="editable.title"
        />
      </div>
      <div class="mb-3">
        <label for="body" class="form-label">Post body</label>
        <input
          type="text"
          class="form-control"
          id="body"
          placeholder="What's on your mind?"
          v-model="editable.body"
        />
      </div>
      <div class="mb-3">
        <label for="imgUrl" class="form-label">Image URL:</label>
        <input
          type="text"
          class="form-control"
          id="imgUrl"
          placeholder="Image URL..."
          v-model="editable.imgUrl"
        />
      </div>
    </div>
    <button type="submit" class="btn btn-success" data-bs-dismiss="modal">
      Create Post
    </button>
  </form>
</template>


<script>
import { ref } from "@vue/reactivity";
import Pop from "../utils/Pop.js";
import { postsService } from "../services/PostsService.js";
export default {
  setup() {
    const editable = ref({});
    return {
      editable,
      async handleSubmit() {
        try {
          await postsService.createPost(editable.value);
        } catch (error) {
          console.error("[CREATE_POST_ERROR]", error.message);
          Pop.toast(error.message, "error");
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>