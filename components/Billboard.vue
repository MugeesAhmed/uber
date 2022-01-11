<template>
<div>
    <section class="hero-section pt-100 background-img banner-1-bg">
        <div class="container">
            <div class="row align-items-center justify-content-between py-5">
                <div class="col-md-7 col-lg-6">
                    <div class="hero-content-left text-white">
                        <h1 class="text-white">
                            <span>Brainstorming for desired perfect Usability</span>
                            </h1><p class="lead"> Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work! </p>
                            <form action="#" method="post" class="subscribe-form">
                                <div class="d-flex align-items-center">
                                    <input type="text" id="email" name="email" placeholder="info@yourdomain.com" class="form-control input">
                                    <input type="submit" id="submit" value="Subscribe" class="button btn solid-btn">
                                    </div>
                                    </form>
                                    <div class="video-promo-content py-4 d-flex align-items-center">
                                        <a href="#" class="popup-youtube video-play-icon-without-bip video-play-icon mr-3">
                                            <span class="ti-control-play"></span>
                                            </a> Watch Video Overview </div>
                                            </div>
                                            </div>
                                            <div class="col-md-5 col-lg-5">
                                                <div class="hero-animation-img">
                                                    <img :src="require('assets/img/app-product.png')" alt="app" class="img-fluid">
                                                    </div>
                                                    </div>
            </div>
        </div>
        <div class="bottom-img-absolute">
            <!-- <img src="" alt="wave shape" class="img-fluid"> -->
            <img :src="require('assets/img/hero-bg-shape-1.png')" alt="app" class="img-fluid">
         
             <!-- <img 
          class="car-image"
          :src="require('assets/img/hero-bg-shape-1.svg')"
          alt="city_cotizador_desktop"
        > -->
        </div><!---->
    </section>
</div>
    <!-- <div class="billboard-section text-center"> -->
        <!-- <div class="billboard-title" v-animate.repeat="'fade-in-right'"> -->
            <!-- Un seguro justo y divertido -->
        <!-- </div> -->
        <!-- <div class="billboard-tag" v-animate.repeat="'fade-in-left'">Seguro basado en cuanto y como conduces.</div> -->
        
        <!-- <a href="https://cotizador.gari.mx/" target="_blank" class="btn btn-primary btn-round" v-animate.repeat="'fade-in-up'">Cotizar ahora</a> -->
    <!-- </div> -->
</template>
<style scoped>

@media (min-width: 992px){
    .navbar {
        border-bottom: 1px solid rgba(0, 0, 0, 0);
        background: transparent;
        transition: border-bottom .3s ease-in-out, background .3s ease-in-out, padding .3s ease-in-out;
        -webkit-backface-visibility: hidden;
    }
}
    .billboard-section{
        background-image: url('~/assets/img/billboard.png');
        background-repeat: no-repeat;
        background-size: contain;
        height: max-content;
        background-position: bottom;

    }
    .billboard-title{
        font-family: Jost;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 69px;
        color: #4A25AA;
        padding-top: 130px;
    }
    .billboard-tag{
        font-family: Jost;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;
        color: #282828;
        margin-top: 16px;
    }
    .btn-primary{
        width: 188px;
        height: 44px;
        background: #F20C49;
        border-radius: 30px;
        margin-top: 70px;
        margin-bottom: 250px;
    }

    @media (max-width: 576px) { 
       .billboard-section{
            background-image: url('~/assets/img/billboard.png');
            background-repeat: no-repeat;
            background-size:contain;
            height: max-content;
        }
        .btn-primary{
            width: 150px;
            height: 35px;
            padding-top: 5px;
            margin-top: 20px;
            margin-bottom: 30px;
        }
    }

    @media (max-width: 768px) {
        .billboard-title{
            font-weight: 500;
            font-size: 32px;
            line-height: 40px;
            padding-top: 40px;
        }
        .billboard-tag{
            font-weight: 500;
            font-size: 16px;
            line-height: 40px;
        }
        
    }

    @media (min-width: 1650px) {
        .billboard-section{
            min-height: 800px;
        }
    }

</style>