<template>
  <router-link :to="type == 'movie' ? `/film/${media.id}` : `/tv/${media.id}`">
    <div :class="styleSquare === true ? 'card square' : 'card list'">
      <div class="info">
        <h3 class="media-title">
          {{ type == "movie" ? media.title : media.name }}
        </h3>

        <div class="movie-info">
          <p class="date-info">
            {{
              type == "movie"
                ? media.release_date.slice(0, 4)
                : media.first_air_date.slice(0, 4)
            }}
          </p>
          <p class="note-info">Recommandé à {{ note }}%</p>
          <p class="synopsis-info">
            Synopsis:
            {{ media.overview.substring(0, 200) + "..." }}
            <router-link
              :to="type == 'movie' ? `/film/${media.id}` : `/tv/${media.id}`"
            >
              <span class="more"> En savoir plus</span>
            </router-link>
          </p>
        </div>
      </div>
      <img
        :src="`https://image.tmdb.org/t/p/w342${media.poster_path}`"
        :alt="type == 'movie' ? media.title : media.name"
      />
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: ["type", "media", "styleSquare"],
  data() {
    return {
      note: null,
    };
  },
  mounted() {
    this.note = Math.floor((this.media.vote_average / 10) * 100);
    console.log(this.note);
  },
};
</script>

<style lang="scss">
.note-info {
  color: #46d369;
}
.list {
  display: flex;
  flex-direction: row-reverse;
  max-height: 280px;
  overflow: hidden;
  width: 600px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 2;
  margin-right: 1em;
  background: #121212;
  transition: 200ms ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  .more {
    color: #4b3dce;
    &:hover {
      text-decoration: underline;
    }
  }

  .info {
    padding: 1em 1em;
  }
  img {
    width: 186px;
    height: 280px;
    object-fit: cover;
  }
}
a:hover {
  color: white;
}
.card {
  margin-top: 1.5em;
}
.square {
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  margin-right: 1em;
  margin-bottom: 1em;
  transition: 300ms ease;
  .info {
    position: absolute;
    z-index: 1;
    bottom: -380px;
    min-height: 50px;
    width: 100%;
    background: rgba(34, 34, 34, 0.842);
    padding: 0.5em;
    transition: 300ms ease-in-out;
    .media-title {
      font-size: 1.5em;
      font-weight: 700;
    }
    h3 {
      font-weight: 400;
    }
  }
  &:hover {
    .info {
      bottom: 0px;
    }
  }
  img {
    position: relative;
    width: 250px;
    height: 375px;
    object-fit: cover;
  }

  .more {
    color: #4b3dce;
    &:hover {
      text-decoration: underline;
    }
  }

  .movie-info,
  .date-info,
  .synopsis-info,
  .note-info {
    margin-top: 0.5em;
  }
}
</style>
