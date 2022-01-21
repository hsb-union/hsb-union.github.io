<template>

  <div class="container">
    <div class="row top-buffer" >
      <div class="col-4">
        <img class="img-fluid" src="http://placekitten.com/300/300">
      </div>
      <div class="col">
        <div class="card bg-warning">
          <img class="card-img-top" src="..." alt="">
          <div class="card-body">
            <h5 class="card-title">HSB IoT User Group</h5>
            <p class="card-text">Most of us find IoT interesting, but none of us talk to each other about it. We want to change that at the Bremen University of Applied Sciences, lets meet together! Join our Discord now!</p>
            <a href="https://discord.gg/6J5ThEqMNR" class="btn btn-primary">Join Discord</a>
          </div>
        </div>
      </div>
    </div>
    <div class="jumbotron top-buffer">
      <h1 class="display-4">But what is IoT!?!</h1>
      <p class="lead">You really want an answer, arent you? Its nether complicated...</p>
      <hr class="my-4">
      <div class="card">
        <div class="card-header">
          IoT
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>The Internet of things (IoT) describes physical objects (or groups of such objects) that are embedded with sensors, processing ability, software, and other technologies that connect and exchange data with other devices and systems over the Internet or other communications networks.</p>
            <footer class="blockquote-footer">Wikipedia: <cite title="Source Title">Internet_of_things</cite></footer>
          </blockquote>
        </div>
      </div>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="https://en.wikipedia.org/wiki/Internet_of_things" role="button">Learn more</a>
      </p>
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