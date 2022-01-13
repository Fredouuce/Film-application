<template>
  <page-title
    titre="Nos films"
    @is-square="onIsSquare"
    :cardStyleSquare="cardStyleSquare"
  />

  <div class="tv-cpm">
    <div v-for="tv in tvs" :key="tv.id">
      <Card :media="tv" type="tv" :styleSquare="cardStyleSquare" />
    </div>
  </div>
  <div class="showmore-btn-container">
    <button @click="moreTvs" class="showmore-btn">Voir plus de séries</button>
  </div>
</template>

<script>
import axios from "axios";
import PageTitle from "../components/PageTitle.vue";
import Card from "../components/Card.vue";
export default {
  name: "Tv",
  components: {
    PageTitle,
    Card,
  },
  data() {
    return {
      cardStyleSquare: true,
      tvs: [],
      page: 2,
    };
  },
  methods: {
    onIsSquare(bool) {
      this.cardStyleSquare = bool;
    },
    moreTvs() {
      this.page += 1;
      axios
        .get(
          `https://api.themoviedb.org/3/trending/tv/week?api_key=68e6fe20044408329e01bb72c56233d4&language=fr&page=${this.page}`
        )
        .then((response) => {
          this.tvs.push(...response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/tv/week?api_key=68e6fe20044408329e01bb72c56233d4&language=fr&page=2`
      )
      .then((response) => {
        this.tvs = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
.tv-cpm {
  display: flex;
  flex-wrap: wrap;
}
</style>
