<template>
  <div class="container">
    <div class="row top-buffer" >
      <div class="col-4">
        <img class="img-fluid" src="http://placekitten.com/300/300">
      </div>
      <div class="col">
        <div class="card bg-body">
          <img class="card-img-top" src="" alt="">
          <div class="card-body">
            <h5 class="card-title">Project X</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <a href="" class="btn btn-primary">Some Link</a>
            <div class = "top-buffer">
            <vue-plyr class ="top-buffer">
              <div class="plyr__video-embed">
                <iframe
                    src="https://www.youtube.com/watch?v=-l5Pyg_pSYw?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
                    allowfullscreen
                    allowtransparency
                    allow="autoplay"
                ></iframe>
              </div>
            </vue-plyr></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects"
}
</script>

<style scoped>
img {
  border-radius: 50%;
}
.top-buffer { margin-top:5%; }
</style>