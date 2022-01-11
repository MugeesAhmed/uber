<template>
    <header class="header">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">

        <!--start navbar-->
        <nav
            class="navbar navbar-expand-lg fixed-top"
            v-bind:class="{
                affix: hasAffix,
                'custom-nav': coloredLogo,
                'bg-transparent': !coloredLogo,
                'white-bg': coloredLogo,
            }"
        >
            <div class="container">
                <a class="navbar-brand" href="/"
                    >
                    <img 
                         src="https://drive.google.com/uc?export=view&id=1yKAcF4MMqaqpSuVOt0emTXvPjzXUj7O3"
                        width="120"
                        alt="asas"
                        class="img-fluid"
                    />
                </a>

                <button
                    class="navbar-toggler"
                    type="button"
                    @click="mobileNavClicked"
                    v-bind:class="{ collapsed: collapsed }"
                >
                    <span class="ti-menu"></span>
                </button>

                <div
                    class="collapse navbar-collapse main-menu h-auto"
                    v-bind:class="{ show: !collapsed }"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown">
                            <router-link to="#inicio" v-scroll-to="'#inicio'"
                                >Inicio</router-link
                            >
                            
                        </li>
                        <li class="nav-item nav-link page-scroll">
                            <router-link to="#about" v-scroll-to="'#about'"
                                >¿Por qué nosotros?</router-link
                            >
                        </li>

                        <li class="nav-item">
                            <router-link
                                class="nav-link page-scroll"
                                to="#pricing"
                                v-scroll-to="'#pricing'"
                                >Precios</router-link
                            >
                        </li>

                        <li class="nav-item">
                            <!-- <router-link
                                class="nav-link page-scroll"
                                to="#screenshots"
                                v-scroll-to="'#screenshots'"
                                >Preguntas</router-link
                            > -->
                            <router-link to="#faqs" v-scroll-to="'#faqs'"
                                >Preguntas</router-link
                            >
                        </li>

                        
                        <li class="nav-item">
                            <router-link
                                class="nav-link page-scroll"
                                to="#contact"
                                v-scroll-to="'#contact'"
                                >Contacte con</router-link
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!--end navbar-->
    </header>
</template>

<script>

export default {
    
    props: {
        coloredLogo: {
            type: Boolean,
            default: false,
        },
    },
    data: function () {
        return {
            windowTop: 0,
            collapsed: true,
        };
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll);
    },
    methods: {
        onScroll: function () {
            this.windowTop = window.top.scrollY;
        },
        mobileNavClicked: function () {
            this.collapsed = !this.collapsed;
        },
    },
    computed: {
        hasAffix: function () {
            return this.windowTop > 0;
        },
    },
};
</script>

