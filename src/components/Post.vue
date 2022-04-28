<template>
  <div class="row">
    <div class="col-12 border-2">{{ post.body }}</div>
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
</style>