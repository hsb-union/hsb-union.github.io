<template>
  <div class="container top-buffer">
  <table class="table table-striped table-dark">
    <thead>
    <tr>
      <th scope="col">Term</th>
      <th scope="col">Description</th>
      <th scope="col">Source</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in getGlossary.items" :key="item.name">
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
.top-buffer { margin-top:5%; }
</style>