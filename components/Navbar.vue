<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-toggle target="nav-collapse">
                <img src="~/assets/img/hamburger.svg" class="img-fluid" alt="">
            </b-navbar-toggle>
            <b-navbar-brand href="#">
                <img src="~/assets/img/Gari-Logo.svg"  alt="">
            </b-navbar-brand>

            <a href="https://cotizador.gari.mx/" target="_blank" class="btn btn-primary btn-round cot-head" >Cotizar</a>
        
            <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto nv">
                <b-navbar-nav>
                    <b-nav-item href="/">Inicio</b-nav-item>
                    <b-nav-item href="/#como-funciona">¿Cómo funciona?</b-nav-item>
                    <b-nav-item href="/#faqs">Preguntas frecuentes</b-nav-item>
                    <b-nav-item class="color-red" href="#">Iniciar sesión</b-nav-item>
                    
                    <a href="https://cotizador.gari.mx/" target="_blank" class="btn btn-primary btn-round cot-mi-seguro" >Cotizar mi seguro</a>
                    
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
    .navbar-dark .navbar-nav .nav-link,.navbar-dark .navbar-nav .nav-link:hover{
        color: #282828;
        font-weight: 500;
        font-size: 16px;
    }
    .color-red a {
        color: #F20C49 !important;
    }
    .btn-primary{
        width: 206px;
        height: 44px;
    }
    .cot-head{
        width: 100px;
        display: none;
    }
    .cot-mi-seguro{
        display: inline;
    }
    .nav-item{
        margin-right: 10px;
    }
    @media (max-width: 768px) {
        .navbar-brand img{
            margin-left: -140px;
        }
        .cot-head{
            display: inline;
        }
        .cot-mi-seguro{
            display: none;
        }
     }
</style>
