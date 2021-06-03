<template>
  <h4>brandon:</h4>

  <!-- <base-button><h4>holaa</h4></base-button> -->
  <!-- <div id="nav">
    <router-link :to="{ name: 'EventList' }">Events</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |  
    <router-link :to="{ name: 'Prueba' }">Prueba</router-link> 

  </div>
  <router-view /> -->
  <!-- <Prueba>
    <template v-slot:header>
      <h3>hola desde header</h3>
    </template>
    <template v-slot:default>
      <h3>hola desde nada</h3>
    </template>
    <template v-slot:footer>
      <p>estoy en footer</p>
    </template>
  </Prueba> -->
  <library></library>
</template>

<script>
// import BaseButton from '@/components/BaseButton.vue';
// import BaseButton from "./components/BaseButton.vue";
import Library from "./components/Library.vue";
// import Prueba from "./components/Prueba.vue";
export default {
  components: {
    // BaseButton,
    // Prueba,
    Library,
    // BaseButton
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
h4 {
  font-size: 20px;
}
</style>
