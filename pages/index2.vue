<template>
    <div>
      <Navbar />
      <Billboard />
      <Video />
      <Custom />
      <GeneralSeguros />
      <Faq />
      <Footer />
    </div>
</template>
<router>
{
  alias: '/front_alias'
}
</router>
<script>
import NavBar from '../components/Navbar'
import HowItWorks from '../components/HowItWorks'
import Video from '../components/Video'
import Custom from '../components/Custom'
import Faq from '../components/Faq'
import GeneralSeguros from '../components/GeneralSeguros'
import Billboard from '../components/Billboard'
import Footer from '../components/Footer'
export default {
  layout: 'front_layout',
  components: { NavBar, Video, HowItWorks, Custom, Faq, GeneralSeguros, Billboard, Footer }
}
</script>

<style>
</style>
