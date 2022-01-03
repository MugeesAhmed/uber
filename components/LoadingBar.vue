<template>
  <transition name="component-fade" mode="out-in">
    <div v-if="loading" class="loading-page">
      <div class="loading"></div>
      <h6>{{ message }}</h6>
    </div>
  </transition>
</template>
<script>
  export default {
    data: () => ({
      loading: false,
      message: 'Cargando, espere por favor...'
    }),
    methods: {
      start(message) {
        this.message = message ||'Cargando, espere por favor...' 
        this.loading = true
      },
      finish() {
        this.loading = false
      },
    },
  }
</script>
<style lang="scss" scoped>
  .loading-page {
    position: fixed;
    inset: auto ;
    z-index: 1000;
    width: 100%;
    height: 100%;
    padding: 1rem;
    text-align: center;
    font-size: 3rem;
    background-color: rgba(255, 255, 255, 0.75);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .loading {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border: 5px solid rgba($color: $hover-primary-color, $alpha: 0.705);
    border-radius: 50%;
    border-top-color: $primary-color;
    animation: spin 1s ease-in-out infinite;
  }
  h6 {
    font-size: 1.2rem;
    font-weight: 400;
    color: #565656;
  }
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
</style>
