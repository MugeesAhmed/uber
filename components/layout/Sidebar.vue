<template>
  <section>
    <aside class="sidebar-menu" :class="{active: active }">
      <ul>
        <li>
          MENÚ <i class="mdi mdi-close" @click="close"></i>
        </li>
        <NuxtLink v-for="(item, i) in items" :key="i" :to="item.url" tag="li">{{ item.name }}</NuxtLink>  
      </ul>
    </aside>
    <div class="bg-drawer" :class="{active: bgactive }" @click="close"/>
  </section>
</template>
<script>
export default {
  data: () => ({
    items: [
      {name: 'Inicio', url: '/mi-perfil' },
      // {name: 'Solicitudes', url: '/solicitudes'},
      {name: '¿Cómo funciona?', url:'/cuenta/mensajes' },
      {name: 'Preguntas frecuentes', url:'/cuenta/tramites' },
      {name: 'Iniciar Sesión', url:'/cuenta/asesorias' },
    ],
    active: false,
    bgactive: false,
  }),
  mounted() {
    this.$nuxt.$on('toggleSidebar', () => {
      this.open()
    })
  },
  watch: {
    '$route.path'() {
      this.close()
    }
  },
  methods: {
    open() {
      this.bgactive = true
      setTimeout(() => {
        this.active = true
      }, 300);
    },
    close() {
      this.active = false
      setTimeout(() => {
        this.bgactive = false
      }, 300);
    }
  }
}
</script>
<style lang="scss" scoped>
.bg-drawer {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #d5a7b3 0% 0% no-repeat padding-box;
  top: 0;
  z-index: 200;
  transition: all 0.5 ease;
  opacity: 0;
  display: none;

  &.active {
    display: block;
    opacity: 0.7;
  }
}
.sidebar-menu {
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 10px 0px 6px #00000029;
  position: fixed;
  z-index: 250;
  left: 0;
  top: 0;
  width: 0;
  height: 100%;
  overflow: hidden;
  transition: all 0.35s ease;
  &.active {
    display: block;
    width: 440px;

    @media screen and (max-width: 480px) {
      width: 280px;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    li {
      padding: 28px 24px;
      font-weight: 500;
      text-align: left;
      font: normal normal medium 20px/24px Roboto;
      letter-spacing: 0px;
      color: #000000DE;
      box-shadow: 0px 3px 5px #7129BA1A;
      white-space: nowrap;
      transition: all 0.65s ease;
      .mdi-close {
        color: $secondary-color;
        float: right;
        font-size: 20px;
        text-align: right;
        cursor: pointer;
      }
      &:not(:first-of-type) {
        cursor: pointer;
        &:hover {
          background-color: $hover-secondary-color;
          color: #FFFFFF;
        }
      }
    }
  }
}
</style>