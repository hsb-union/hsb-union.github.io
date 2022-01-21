<template>
  <div class="container">
  <table class="table table-striped table-dark">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in getGlossary.items" :key="item.name">
      <th scope="row">1</th>
      <td>{{ item.name }}</td>
      <td>{{ item.text }}</td>
      <td>{{ item.source }}</td>
    </tr>
    </tbody>
  </table>
  </div>

</template>

<script>
import glossary from './glossary.json'
export default {
  name: "Glossary",
  computed: {
    getGlossary() {
      return glossary
    }
  }
}
</script>

<style scoped>

</style>