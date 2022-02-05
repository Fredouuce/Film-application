<template>
  <div class="filmpage_container">
    <div v-if="isLoading">
      <h1>ça charge</h1>
    </div>

    <div class="film-info" v-else>
      <!--Les élement de la banniere du film-->
      <div class="film_banner">
        <div class="banner_info">
          <div class="top_column">
            <h2 @click="$router.back()" class="back_btn">
              <span class="chevron"><i class="fas fa-chevron-left"></i></span
              >{{ " " + film.title }}
            </h2>
            <a :href="film.homepage" v-if="film.homepage" class="web_btn"
              >Site web</a
            >
          </div>

          <div class="bottom_column">
            <p>
              <span class="film_note">{{ note + "% " }}</span>
              <span><small>De nos utilisateurs recommande ce film</small></span>
            </p>
            <button class="trailer_btn">
              <span class="play_btn"><i class="fas fa-play"></i></span>
              <span>TRAILER</span>
            </button>
            <p>
              {{ film.popularity + "  " }}
              <small>Personnes ont consulté ce film</small>
            </p>
          </div>
        </div>

        <img
          class="film_banner_img"
          :src="`https://image.tmdb.org/t/p/original${film.backdrop_path}`"
          alt=""
        />
        <div class="shadow_banner"></div>
      </div>

      <!-- Les informations du film synopsis etc -->
      <div class="film_info_container">
        <img
          class="film_img"
          :src="`https://image.tmdb.org/t/p/w780/${film.poster_path}`"
          alt=""
        />

        <div class="film-info-text">
          <h1>{{ film.title }}</h1>
          <!--Genres -->
          <div class="film-genres">
            <span v-for="genre in film.genres" :key="genre.id">
              <router-link :to="`/genre/${genre.id}`" class="genre_btn">{{
                genre.name + " "
              }}</router-link>
            </span>
            <p>{{ film.release_date + " (US)" }}</p>
            <p>{{ movieTime(film.runtime) }}</p>
          </div>
          <p>{{ film.overview ?? "Pas de synopsis" }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FilmPage",
  components: {},
  data() {
    return {
      film: [],
      isLoading: true,
      note: null,
    };
  },
  methods: {
    movieTime(minute) {
      console.log(minute);
      var num = minute;
      var hours = num / 60;
      var rhours = Math.floor(hours);
      var minutes = (hours - rhours) * 60;
      var rminutes = Math.round(minutes);
      return rhours + "h " + rminutes;
    },
  },
  mounted() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.filmId}?api_key=68e6fe20044408329e01bb72c56233d4&language=fr-FR`
      )
      .then((response) => {
        this.film = response.data;
        this.note = Math.floor((this.film.vote_average / 10) * 100);
        this.isLoading = false;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
.filmpage_container {
}

.film_banner {
  position: relative;
  .film_banner_img {
    width: 100%;
    height: 500px;

    object-fit: cover;
    object-position: center 15%;
    filter: opacity(0.6);
  }

  overflow: hidden;
  // .shadow_banner {
  //   width: 100%;
  //   height: 150px;
  //   background: rgb(24, 24, 24);
  //   background: linear-gradient(
  //     0deg,
  //     rgba(24, 24, 24, 1) 0%,
  //     rgba(0, 0, 0, 0) 100%
  //   );
  //   position: absolute;
  //   bottom: 0;
  // }
}
.film_info_container {
  position: relative;
  padding: 3em 5em;
  display: flex;
  .film_img {
    width: 200px;
  }
}
.film-info {
  display: flex;
  flex-direction: column;

  .film-info-text {
    h1 {
      letter-spacing: 1px;
      font-size: 2.5em;
    }
    padding: 1em;

    .film-genres {
      margin-top: 0.5em;
    }
  }
}

.banner_info {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 2em 2em 2.5em 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  .chevron {
    margin-right: 0.5em;
  }
  .top_column {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .bottom_column {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .web_btn {
    background: rgba(59, 58, 87, 0.336);
    padding: 0.8em 1.58 em;
    border-radius: 50px;
    &:hover {
      background: rgba(59, 58, 87, 0.678);
    }
  }

  .trailer_btn {
    padding: 1em 2em;
    border: none;
    border-radius: 50px;
    background: none;
    color: white;
    background: rgba(0, 0, 0, 0.219);
    border: 1px solid #776fc285;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    letter-spacing: 2px;
    cursor: pointer;
    transition: 300ms ease-in-out;
    &:hover {
      background: rgba(0, 0, 0, 0.589);
    }
    .play_btn {
      margin-right: 1em;
      color: #4b3dce;
    }
  }
}

.back_btn {
  cursor: pointer;
}

.genre_btn {
  display: inline-block;
  margin-bottom: 1em;
  margin-right: 0.5em;
  border-radius: 50px;
  text-transform: uppercase;
  color: #776fc2;
  border: 1px solid #776fc2;
  font-size: 0.8em;
  padding: 0.5em 1em;
  &:hover {
    background: #776fc2;
    color: white;
  }
}
</style>
