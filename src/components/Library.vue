<template>
  <Book>
    <div>
      <!-- <h1>{{ props.bookTitle }} gg</h1> -->
      <h2>{{libraryName}}</h2>
    </div>
    <h3>Reprehenderit ipsum adipisicing incididunt aliqua magna id reprehenderit id voluptate proident. Aliqua cillum qui dolore est veniam proident cillum ut quis. Tempor dolore exercitation magna qui labore enim id magna pariatur laborum. Occaecat ex ut cillum tempor dolor excepteur magna cupidatat eu esse id. Adipisicing et tempor duis cupidatat tempor aliquip culpa tempor.</h3>
  </Book>
</template>

<script>
import Book from "./Book.vue";

export default {
  name: "Library",
  components: {
    Book,
  },
  data() {
    return {
        libraryName: "La biblioteca de Alejandria"
    };
  },
};
</script>

<style></style>
