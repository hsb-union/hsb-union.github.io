<template>
  <div class="container top-buffer">
    <div v-for="item in getPartners['items']" :key="item.name" class="row top-buffer">
      <div class="col">
        <div class="card bg-body">
          <img class="card-img-top" src="" alt="">
          <div class="card-body">
            <div v-if="item.onlylogo == false">
              <h3 class="card-title">{{ item.name }}</h3>
            </div>
            <div class="row">
              <div v-if="item.logo !== 'undefined' && item.logo != ''">
                <div class="col-5">
                  <img class="img-fluid top img-rounded" :src="item.logo">
                </div>
              </div>
              <div v-if="item.text !== 'undefined' && item.text != ''">
                <div class="col-8">
                  <p class="card-text top-buffer float-left">{{ item.text }}</p>
                </div>
              </div>
            </div>
            <div class="row top-buffer">
              <div class="col">
                <a :href="item.link" class="btn btn-primary">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import partners from "./partners.json";

export default {
  name: "Partners",
  computed: {
    getPartners() {
      return partners
    }
  }
}
</script>

<style scoped>
.top-buffer { margin-top:5%; }
</style>