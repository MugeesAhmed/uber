<template>
    <div>
        <nav-bar />
        <div class="main">
            <banner />
            <promo />
            <about />
            <features />
            <download />
            <pricing  />
            <testimonial />
            <screenshots />
            <team :is-gray="true" />
            <latestNews />
            <clients />
            <!-- <subscribe /> -->
            <contact :is-gray="true" />
            <site-footer />
        </div>
    </div>
</template>

<script>
import NavBar from "../commons/NavBar";
import Banner from "./Banner";
import Promo from "./Promo";
import About from "./About";
import Features from "./Features";
import Download from "./Download";
import Pricing from "./Pricing";
import Testimonial from "../commons/Testimonial";
import Screenshots from "../commons/Screenshots";
import Team from "../commons/Team";
import LatestNews from "../commons/LatestNews";
import Clients from "../commons/Clients";
// import Subscribe from "../commons/Subscribe";
import Contact from "../commons/Contact";
import SiteFooter from "../commons/SiteFooter";

export default {
    name: "IndexOne",
    components: {
        NavBar,
        Banner,
        Promo,
        About,
        Features,
        Download,
        Pricing,
        Testimonial,
        Screenshots,
        Team,
        LatestNews,
        Contact,
        Clients,
        // Subscribe,
        SiteFooter,
    },
};
</script>