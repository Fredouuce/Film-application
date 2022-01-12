<template>
  <div class="pageInfo">
    <h1>{{ titre }}</h1>
    <div class="th">
      <button @click="styleSquare(true)">
        <i class="fas fa-th-large"></i>
      </button>
      <button @click="styleSquare(false)">
        <i class="fas fa-th-list"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: ["titre"],
  emits: ["is-square"],
  methods: {
    styleSquare(bool) {
      this.$emit("is-square", bool);
    },
  },
};
</script>

<style lang="scss" scoped>
.pageInfo {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .th {
    button {
      background: none;
      border: none;
      margin-right: 1em;
      i {
        font-size: 25px;
        color: white;
      }
    }
  }
}
</style>
