<template>
  <div class="row">
    <div class="col-8 mx-5">
      <div class="card shadow-sm">
        <span class="d-flex mx-3 my-2">
          <img :src="post.creator.picture" v-if="post.creator.picture" class="rounded-pill"/>
          <h6 class="mx-4 pt-3">{{post.creator.name}}</h6>
          </span>
        <h5 class="text-center">{{post.body}}</h5>
        <img :src="post.imgUrl" v-if="post.imgUrl" class="img-fluid"/>
      </div>
      <br>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
.rounded-pill{
  max-height: 10%;
  max-width: 10%;
}

</style>