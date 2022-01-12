<template>
  <div class="pageInfo">
    <h1>{{ titre }}</h1>
    <div class="th">
      <button
        @click="styleSquare(true)"
        :class="cardStyleSquare === true ? 'btn active' : 'btn'"
      >
        <i class="fas fa-th-large"></i>
      </button>
      <button
        @click="styleSquare(false)"
        :class="cardStyleSquare === false ? ' btn active' : 'btn'"
      >
        <i class="fas fa-th-list"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: ["titre", "cardStyleSquare"],
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
    .btn {
      background: none;
      border: none;
      margin-right: 1em;
      cursor: pointer;
      color: white;
      transition: 600ms ease;
      i {
        font-size: 25px;
      }
    }
  }
}
.active {
  color: #4b3dce !important;
}
</style>
