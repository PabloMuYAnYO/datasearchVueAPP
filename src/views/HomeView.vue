<template>
  <div class="home">
    <InsertForm></InsertForm>
  </div>
</template>

<script>
// @ is an alias to /src
import InsertForm from '@/components/InsertForm.vue'

export default {
  name: 'HomeView',
  components: {
    InsertForm
  }
}
</script>