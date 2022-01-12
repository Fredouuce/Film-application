<template>
  <div class="pageInfo">
    <h1>{{ titre }}</h1>
    <div class="th">
      <button><i class="fas fa-th-large"></i></button>
      <button><i class="fas fa-th-list"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: ["titre"],
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
