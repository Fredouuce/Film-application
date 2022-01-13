<template>
  <div v-if="isLoading">ça charge</div>
  <div v-else>
    <!--AVEC TITRE ET TH -->
    <page-title
      titre="Accueil"
      @is-square="onIsSquare"
      :cardStyleSquare="cardStyleSquare"
    ></page-title>
    <div class="trending">
      <div>
        <Slider
          :sliderTitle="'Les films de la semaine'"
          type="movie"
          :medias="trendingMovies"
          :loading="isLoading"
          :styleSquare="cardStyleSquare"
        />
      </div>
      <div>
        <Slider
          :sliderTitle="'Les séries TV de la semaine '"
          type="TV"
          :loading="isLoading"
          :medias="trendingSeries"
          :styleSquare="cardStyleSquare"
        />
      </div>

      <div>
        <Slider
          :sliderTitle="'Nos films les mieux notés'"
          type="movie"
          :loading="isLoading"
          :medias="topRatedMovie"
          :styleSquare="cardStyleSquare"
        />
      </div>
      <div>
        <Slider
          :sliderTitle="'Les séries TV les mieux notés'"
          type="tv"
          :loading="isLoading"
          :medias="topRatedTv"
          :styleSquare="cardStyleSquare"
        />
      </div>
      <button @click="increment">Click pour incrementer</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PageTitle from "@/components/PageTitle.vue";
import Slider from "../components/Home/Slider.vue";

export default {
  name: "Home",
  components: { PageTitle, Slider },
  data() {
    return {
      firstTrendingMovie: null,
      trendingMovies: [],
      isLoading: true,
      trendingSeries: [],
      topRatedMovie: [],
      topRatedTv: [],
      cardStyleSquare: true,
      page: 1,
    };
  },
  methods: {
    onIsSquare(bool) {
      this.cardStyleSquare = bool;
    },

    increment() {
      this.page += 1;
      console.log(this.page);
    },
  },
  mounted() {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=68e6fe20044408329e01bb72c56233d4&language=fr-FR`
      )
      .then((response) => {
        /**SEARCHING FOR MOVIE TRENDS */
        this.trendingMovies = response.data.results;
        axios
          .get(
            `https://api.themoviedb.org/3/trending/tv/week?api_key=68e6fe20044408329e01bb72c56233d4&language=fr-FR`
          )
          .then((response) => {
            /**SEARCHING FOR TV TRENDS */

            this.trendingSeries = response.data.results;
            axios
              .get(
                `https://api.themoviedb.org/3/movie/top_rated?api_key=68e6fe20044408329e01bb72c56233d4&language=fr&page=1`
              )
              .then((response) => {
                this.topRatedMovie = response.data.results;
                axios
                  .get(
                    `https://api.themoviedb.org/3/tv/top_rated?api_key=68e6fe20044408329e01bb72c56233d4&language=fr&page=1`
                  )
                  .then((response) => {
                    this.topRatedTv = response.data.results;
                    this.isLoading = false;
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
.trending {
  margin-top: 2em;
  .trending-title {
    font-size: calc(12px + 1vw);
  }
}
</style>
