<template>
  <nav class="nav-cmp">
    <div class="logo"><h1>Moviez</h1></div>
    <div class="nav-link">
      <div class="first-row column">
        <router-link to="/"><i class="fas fa-home"></i>Accueil</router-link>
        <router-link to="/film"><i class="fas fa-video"></i> Film</router-link>
        <router-link to="/tv"> <i class="fas fa-tv"></i> Séries</router-link>
        <router-link to="/naviguer"
          ><i class="fas fa-search"></i>Naviguer</router-link
        >
        <router-link to="/about"
          ><i class="fas fa-info-circle"></i>A propos</router-link
        >
      </div>

      <div class="second-row column">
        <router-link to="/upcoming/movie">Les films à venir</router-link>
        <router-link to="/upcoming/tv">Les séries TV à venir</router-link>
        <router-link to="trending/actor">Les acteurs de la semaine</router-link>
      </div>
    </div>
    <footer></footer>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      isActive: null,
      searchActive: false,
    };
  },
  methods: {},

  mounted() {},
};
</script>

<style lang="scss" scoped>
.nav-cmp {
  height: 100%;
  padding: 2em;
  .nav-link {
    position: relative;
    top: 10%;
    .column {
      display: flex;
      flex-direction: column;
    }

    .second-row {
      margin-top: 5em;
    }
    a:not(:last-child) {
      margin-bottom: 1em;
    }
    a {
      font-size: 1.3em;
      &:hover {
        margin-left: 0.6em;
      }
      i {
        margin-right: 0.3em;
        width: 25px;
      }
    }
  }
}
.router-link-active {
  color: #4b3dce;
  margin-left: 0.6em;
}
</style>
