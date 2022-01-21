<template>

  <div class="container top-buffer">
    <div class="row">
      <div class="col-4">
        <img class="img-fluid" src="http://placekitten.com/300/300">
      </div>
      <div class="col">
        <div class="card">
          <img class="card-img-top" src="..." alt="">
          <div class="card-body">
            <h5 class="card-title">HSB IoT User Group</h5>
            <p class="card-text">Most of us find IoT interesting, but none of us talk to each other about it. We want to change that at the Bremen University of Applied Sciences, lets meet together! Join our Discord now!</p>
            <a href="https://discord.gg/6J5ThEqMNR" class="btn btn-primary">Join Discord</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
img {
  border-radius: 50%;
}
.top-buffer { margin-top:5%; }
</style>