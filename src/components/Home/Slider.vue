<template>
  <div class="slider-container">
    <div class="slider-info">
      <h1 class="slider-title">{{ sliderTitle }}</h1>
      <router-link to="film/trending">Voir plus</router-link>
    </div>
    <div class="card-container">
      <div v-for="media in medias" :key="media.id">
        <Card :type="type" :media="media" :styleSquare="styleSquare" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../Card.vue";
export default {
  props: ["sliderTitle", "type", "medias", "loading", "styleSquare"],
  name: "Slider",
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
.slider-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.slider-title {
  font-size: 1.5rem;
}
.card-container {
  display: flex;

  flex-wrap: wrap;
}
</style>
