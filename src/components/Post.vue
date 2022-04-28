<template>
  <div class="row">
    <div class="col-8 mx-5">
      <div class="card shadow-sm">
        <span class="d-flex mx-3 my-2 justify-content-between">
          <img
            :src="post.creator.picture"
            v-if="post.creator.picture"
            class="rounded-pill"
          />
          <h6 class="mx-4 pt-3">{{ post.creator.name }}</h6>
          <i
            class="mdi mdi-delete-outline mdi-36px btn"
            @click="deletePost()"
          ></i>
        </span>
        <h5 class="text-center">{{ post.body }}</h5>
        <img :src="post.imgUrl" v-if="post.imgUrl" class="img-fluid" />
      </div>
      <br />
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return {
      async deletePost() {
        try {
          if (await Pop.confirm()) await postsService.deletePost(props.post.id);
        } catch (error) {
          console.error("[DELETE_POST_ERROR]", error.message);
          Pop.toast(error.message, "error");
        }
      },
      account: computed(() => AppState.account),
    };
  },
};
</script>


<style lang="scss" scoped>
.rounded-pill {
  max-height: 10%;
  max-width: 10%;
}
</style>