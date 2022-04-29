<template>
  <div class="row justify-content-center">
    <div class="col-6 p-2 mx-5">
      <div class="card d-flex">
        <div class="row">
        <div class="col-6">
          <span class="d-flex">
          <img
            :src="post.creator.picture"
            v-if="post.creator.picture" 
            class="rounded-pill"
          />
          <p class="pt-4">{{ post.creator.name }}</p>
          </span >
          <h3 class="m-5">{{ post.body }}</h3>
          <div class="trash">
          <i
            class="mdi mdi-delete-outline mdi-36px btn"
            @click="deletePost()"
          ></i>
          </div>
        </div>
        <div class="col-6 p-5">
          <img :src="post.imgUrl" v-if="post.imgUrl" class="img-fluid" />
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

img{
  border: black 3px solid;
}

.card{
  border: rgb(0, 0, 0) 3px solid;
  box-shadow: 7px 7px 1px rgb(0, 0, 0);
}





</style>