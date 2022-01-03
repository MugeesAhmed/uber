
<template>
  <header class="main-menu">
    <nav class="main-menu__content">
      <div class="menu">
        <div class="menu__left-items">
          <img src="~/assets/img/Gari-Logo.svg" alt="">
          <div class="spacer" />
        </div>
        <!-- <div class="menu__right-items links">
          <NuxtLink
            v-for="(item, i) in menuItems"
            :key="i"
            :to="item.url"
            class="links__item hidden-sm-and-down"
            v-text="item.name"
          >
          </NuxtLink>
          <NuxtLink
            to="#"
            class="links__button main_button"
          >
          <span class="hidden-md-and-down">Cotizar mi seguro</span>
          <span class="hidden-lg-and-up">Cotizar</span>
          </NuxtLink>
        </div> -->
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data: () => ({
    menuItems: [{ name: 'Inicio', url: '#'},
      { name: '¿Cómo Funciona?', url: '#'},
      { name: 'Preguntas Frecuentes', url: '#'},
      { name: 'Iniciar sesión', url: '#'},
      ]
  }),
  methods: {
    openSidebar() {
      this.$nuxt.$emit('toggleSidebar')
    }
  }
}
</script>
<style lang="scss" scoped>
.main-menu {
  height: 79px;
  width: 100%;
  display: grid;
  position: fixed;
  background: #fff;
  z-index: 200;
  display: grid;
  @media screen and (max-width: 420px) {
    height: 50px;
  }
}
.menu {
  width: 100%;
  display: flex;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  align-items: center;
  height: 79px;
  padding: 0px 100px;
  background-color: rgba(255, 255, 255, 0.95);
  @media screen and (max-width: 420px) {
    height: calc( 80px - 30px);
  }
  @media screen and (max-width: 768px) {
    padding: 0px 23px;
  }
  &__right-items, &__left-items {
    color:$secondary-color;
    display: flex;
    height: 100%;
    align-items: center;

    @media screen and (max-width: 420px) {
      min-width: unset;
    }

    i {
      padding: 0px 20px;
      cursor: pointer;
    }
  }
  &__left-items {
    
  }
  &__right-items {
    min-width: 114px;
    margin-left: auto;
  }
}
.links {
  &__item {
    margin: 15px 15.5px;
    font-family: Jost;
    font-size: 1rem;
    color: #282828;
    white-space: nowrap;
    text-decoration: none;
  }
  &__button {
    // width: 206px;
    // height: 44px;
    white-space: nowrap;
    font-size: 1rem;
    @media screen and (max-width: 768px) {
      padding: 5px 25px;
    }
  }
}
</style>