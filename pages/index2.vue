<template>
    <div>
      <!-- <nav-bar /> -->
      <div class="main">
          <banner />
          <promo />
          <about />
          <pricing  />
          <clients />
          <subscribe />
          <contact :is-gray="true" />
          <!-- <site-footer /> -->
      </div>
    </div>
</template>
<router>
{
  alias: '/front_alias'
}
</router>
<script>
// import NavBar from "./commons/NavBar";
import Banner from "./index-one/Banner";
import Promo from "./index-one/Promo";
import About from "./index-one/About";
import Pricing from "./index-one/Pricing";
import Clients from "./commons/Clients";
import Subscribe from "./commons/Subscribe";
import Contact from "./commons/Contact";
// import SiteFooter from "./commons/SiteFooter";

export default {
    name: "IndexOne2",
    components: {
        // NavBar,
        Banner,
        Promo,
        About,
        Pricing,
        Contact,
        Clients,
        Subscribe,
        // SiteFooter,
    },
    mounted: function() {
        // if(this.$route.hash != ""){
        //     document.getElementById(this.$route.hash.substring(1)).scrollIntoView({
        //         behavior: "smooth"
        //     });
        // }
    }
};
</script>

<style>
</style>
