<template>
  <div class="row">
    <div class="col-12 p-2 m-3">
      <div class="card shadow-sm d-flex">
        <div class="row">
        <div class="col-5">
          <span class="d-flex">
          <img
            :src="post.creator.picture"
            v-if="post.creator.picture" 
            class="rounded-pill"
          />
          <p class="pt-4">{{ post.creator.name }}</p>
          </span >
          <h3 class="m-5">{{ post.body }}</h3>
          <i
            class="mdi mdi-delete-outline mdi-36px btn ms-5 pt-5 pe-5 mt-auto"
            @click="deletePost()"
          ></i>
        </div>
        <div class="col-2">
      
        </div>
        <div class="col-5">
        
          <img :src="post.imgUrl" v-if="post.imgUrl" class="img-fluid p-3" />
        </div>
      </div>
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
  margin: 5%;
}

</style>