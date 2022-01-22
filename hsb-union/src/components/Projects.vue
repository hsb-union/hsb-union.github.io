<template>
  <div class="container">
    <div v-for="item in getProjects['items:']" :key="item.name" class="row top-buffer">


      <div class="col-8">
        <div class="card bg-body">
          <img class="card-img-top" src="" alt="">
          <div class="card-body">
            <h3 class="card-title">{{ item.name }}</h3>
            <div v-if="item.roundImage !== 'undefined' && item.roundImage != ''">
              <div class="col-4">
                <img class="img-fluid top img-rounded" :src="item.roundImage">
              </div>
            </div>

            <p class="card-text top-buffer float-left">{{ item.text }}</p>
            <a :href="item.link" class="btn btn-primary">Read more</a>
            <div v-if="item.video !== 'undefined' && item.video != ''" class="top-buffer">
              <vue-plyr class="top-buffer">
                <div class="plyr__video-embed">
                  <iframe
                      :src="item.video"
                      allowfullscreen
                      allowtransparency
                      allow="autoplay"
                  ></iframe>
                </div>
              </vue-plyr>
            </div>
            <div v-if="item.image !== 'undefined' && item.image != ''" class="top-buffer">
              <img :src="item.image" class="img-fluid">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projects from "./projects.json";

export default {
  name: "Projects",
  computed: {
    getProjects() {
      return projects
    }
  }
}
</script>

<style scoped>
.img-rounded {
  border-radius: 50%;
}
.top-buffer {
  margin-top: 5%;
}
</style>