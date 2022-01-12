<template>
  <router-link :to="type == 'movie' ? `/film/${media.id}` : `/tv/${media.id}`">
    <div class="card square">
      <div class="info-square">
        <h3>
          {{ type == "movie" ? media.title : media.name }}
        </h3>
      </div>

      <img
        :src="`https://image.tmdb.org/t/p/w185${media.poster_path}`"
        :alt="type == 'movie' ? media.title : media.name"
      />
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: ["type", "media"],
};
</script>

<style lang="scss">
.card {
  margin-top: 1.5em;
}
.square {
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  margin-right: 1em;
  margin-bottom: 1em;
  height: 278px;
  .info-square {
    position: absolute;
    z-index: 1;
    bottom: 0;
    min-height: 50px;
    width: 100%;
    background: rgba(34, 34, 34, 0.712);
    padding: 0.5em;
    h3 {
      font-weight: 400;
    }
  }
  img {
    position: relative;
    widows: 185px;
    height: 278px;
    object-fit: cover;
  }
}
</style>
