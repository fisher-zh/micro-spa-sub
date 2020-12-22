<template>
  <div class="home">sub-app-1-home
    <button @click="goLink">go test</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    goLink () {
      this.$router.push({
        path: '/sub-app-1/test'
      })
    }
  }
}
</script>

<style>
</style>
