<template>
  <div class="book">
    <slot > </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookTitle: "Los mal aventurados no lloran",
    };
  },
};
</script>

<style></style>
