<template>
  <div class="home">sub-app-1-test
    <button @click="goLink">go home</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    goLink () {
      this.$router.push({
        path: '/sub-app-1'
      })
    }
  }
}
</script>

<style>
</style>
