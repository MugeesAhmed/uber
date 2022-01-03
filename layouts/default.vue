<template>
  <div class="h-100">
    <Header />
    <main class="main-body">
      <Nuxt />
    </main>
    <Sidebar />
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
export default {
  components: { Footer, Header, Sidebar },
}
</script>
<style>
</style>
