<template>
  <page-title
    titre="Nos films"
    @is-square="onIsSquare"
    :cardStyleSquare="cardStyleSquare"
  />
  <div class="film-cpm">
    <div v-for="movie in movies" :key="movie.id">
      <Card :media="movie" type="movie" :styleSquare="cardStyleSquare" />
    </div>
  </div>
  <div class="showmore-btn-container">
    <button @click="moreMovies" class="showmore-btn">Voir plus de film</button>
  </div>
</template>

<script>
import axios from "axios";
import Card from "../components/Card.vue";
import PageTitle from "../components/PageTitle.vue";
export default {
  name: "Film",
  components: {
    PageTitle,
    Card,
  },
  data() {
    return {
      movies: [],
      page: 2,
      isLoading: true,
      cardStyleSquare: true,
    };
  },
  mounted() {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=68e6fe20044408329e01bb72c56233d4&language=fr&page=2`
      )
      .then((response) => {
        this.isLoading = false;
        this.movies = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    onIsSquare(bool) {
      this.cardStyleSquare = bool;
    },

    moreMovies() {
      this.page += 1;
      axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=68e6fe20044408329e01bb72c56233d4&language=fr&page=${this.page}`
        )
        .then((response) => {
          this.movies.push(...response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.film-cpm {
  display: flex;
  flex-wrap: wrap;
}
</style>
