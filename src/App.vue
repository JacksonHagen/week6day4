<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <div class="bg-secondary text-warning text-center p-4">
      Made with 🔫 by Da Boyz
    </div>
  </footer>
  <Modal id="create-post-modal">
    <template #title>Create Post</template>
    <template #body> <PostForm /> </template>
  </Modal>
</template>

<script>
import { computed } from "vue";
import { AppState } from "./AppState";
export default {
  name: "App",
  setup() {
    return {
      appState: computed(() => AppState),
    };
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
