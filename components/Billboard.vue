<template>
    <div class="billboard-section text-center">
        <div class="billboard-title" v-animate.repeat="'fade-in-right'">
            Un seguro justo y divertido
        </div>
        <div class="billboard-tag" v-animate.repeat="'fade-in-left'">Seguro basado en cuanto y como conduces.</div>
        
        <a href="https://cotizador.gari.mx/" target="_blank" class="btn btn-primary btn-round" v-animate.repeat="'fade-in-up'">Cotizar ahora</a>
    </div>
</template>
<style scoped>
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