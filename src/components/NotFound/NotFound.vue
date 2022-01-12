<template>
  <div class="notfound">
    <h1>ERROR 404</h1>
    <h2>
      Désolé nous n'avons pas pu charger votre page essayer plus tard ....
    </h2>
    <router-link to="/"
      ><span class="home">Retour page d'accueil..</span></router-link
    >
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.notfound {
  align-items: center;
  text-align: center;
  line-height: 50px;
}

.home {
  color: #4b3dce;
  text-decoration: underline;
}
</style>
