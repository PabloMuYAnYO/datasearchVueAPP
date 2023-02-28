<template>
  <div class="search">
    <search-form></search-form>
  </div>
</template>

<script>
import SearchForm from '../components/SearchForm.vue'

export default {
  name: 'SearchView',
  components: {
    SearchForm
  }
}
</script>