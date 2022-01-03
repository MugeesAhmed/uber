<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">
                <img src="~/assets/img/Gari-Logo.svg" alt="">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto nv">
                <b-navbar-nav>
                    <b-nav-item href="#beneficios">Inicio</b-nav-item>
                    <b-nav-item href="#planes">¿Cómo funciona?</b-nav-item>
                    <b-nav-item href="#">Preguntas frecuentes</b-nav-item>
                    <b-nav-item class="color-red" href="#">Iniciar sesión</b-nav-item>
                    
                        <b-button variant="primary" pill @click="login = !login">Iniciar sesión</b-button>
                    
                </b-navbar-nav>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<style scoped>
    .bg-info{
        background-color: rgba(255, 255, 255, 0.95) !important;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    }
    .navbar-brand {
        padding-left: 90px;
    }
    .navbar-collapse {
        padding-right: 90px;
    }
</style>
