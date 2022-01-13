<template>
  <div id="nav">
    <Nav />
  </div>
  <div class="aside-middle">
    <router-view />
  </div>

  <div class="aside-right"></div>
</template>

<script>
import Nav from "@/components/Templates/Nav.vue";
export default {
  components: {
    Nav,
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;1,700&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Be Vietnam Pro", sans-serif;
  background: #181818;
  color: white;
}

a {
  color: white;
  text-decoration: none;
  transition: 300ms ease;
}
a:hover {
  color: #4b3dce;
}
html {
  scroll-behavior: smooth;
}
#nav {
  width: 13%;
  height: 100vh;
  background: #121212;
}
#app {
  display: flex;
}
.aside-middle {
  padding: 2em 1em;
  width: 77%;
  height: 100vh;
  overflow: scroll;
}
.aside-right {
  height: 100vh;
  width: 10%;
  background: #121212;
}

.showmore-btn-container {
  width: 250px;

  position: relative;
  left: 50%;
  height: 50px;
  bottom: 0;
  transform: translateX(-50%);
  align-items: center;
  .showmore-btn {
    width: 100%;
    height: 100%;
    border: none;
    background: #4b3dce;
    cursor: pointer;
    color: white;
    font-size: 1.3em;
    text-align: center;
    transition: 300ms ease;
    &:hover {
      background: #3022b4;
    }
  }

  border-radius: 50px;
  overflow: hidden;
}
</style>
