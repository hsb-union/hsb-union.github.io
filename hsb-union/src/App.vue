<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      HSB IoT User Group
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/home">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/glossary">Glossary</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/projects">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/partners">Partners</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">
            Community
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="https://discord.gg/6J5ThEqMNR">Discord Server</a>
            <a class="dropdown-item" href="https://github.com/hsb-union">Github Organization</a>
            <router-link class="dropdown-item" to="/rules">Rules</router-link>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Contact</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>

  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
}
</script>
<style>

</style>
