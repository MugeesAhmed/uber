<template>
   
    <section
        class="client-section ptb-100"
        v-bind:class="isGray ? 'gray-light-bg' : ''"
    >

        <div class="container">
            
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="section-heading text-center mb-5">
                        <p class="lead">
                            Nuestros seguros están respaldados por una de las mejores aseguradoras de México y han sido aprobados por la Comisión Nacional de Seguros y Fianzas
                        </p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-4">
                    <img
                        src="../../assets/img/airbnb.png"
                        alt="client logo"
                        class="client-img"
                        style="width: 50%;
                            float: right;"
                    />
                </div>
                <div class="col-md-4">
                   <img
                        src="../../assets/img/amazon.png"
                        alt="client logo"
                        class="client-img"
                        style="width: 36%;"
                    />
                </div>
                <div class="col-md-6">
                    <carousel
                        :items="1"
                        :nav="false"
                        :autoplay="false"
                        :dots="false"
                        :loop="false"
                        :margin="15"
                        slideTransition="linear"
                        :autoplaySpeed="false"
                        :smartSpeed="6000"
                        :responsive="{
                            0: { items: 2 },
                            500: { items: 3 },
                            600: { items: 4 },
                            800: { items: 5 },
                            1200: { items: 6 },
                        }"
                        class="owl-theme clients-carousel dot-indicator owl-loaded owl-drag"
                    >
                        <div class="item single-client">
                            
                        </div>
                        <div class="item single-client">
                            
                        </div>
                        
                       
                     
                       
                    
                    </carousel>
                </div>
            </div>
           
            <p class="lead text-center mt-5">
                Tenemos una alianza con Seguros El Águila. Ellos nos ayudan a darte el mejor servicio posible en caso de que tengas un siniestro. Nos apoyamos en su red de más de XXX ajustadores en la república y trabajamos con más de XXX talleres y agencias.

            </p>
        </div>
        <div class="faq-section mt-5 pt-5" id="faqs">
            <div class="container-fluid text-center">
                <img src="../../assets/img/responsive-contact.png" class="bg-mv" alt="">
                <div class="row">
                    <div class="col-md-6">
                        <img src="../../assets/img/faqs-desktop.png" class="img-general-desk mt-5 img-fluid" alt="">
                        <img src="../../assets/img/faqs-movil.png" class="img-general-mov mt-5 img-fluid" alt="">
                    </div>
                    <div class="col-md-5 text-left" data-v-67d141ea="">
                        <div class="section-title" data-v-67d141ea="">
                            <font style="vertical-align: inherit;">
                                <!-- <font >
                                    Preguntas
                                </font> -->
                                <div class="section-heading mb-5">
                                    <h2> Preguntas </h2>
                                </div>
                            </font>
                    </div> 
                    <div class="items-collapse" data-v-67d141ea="">
                        <details class="collapse-item" data-v-67d141ea="">
                            <summary class="title" data-v-67d141ea="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        ¿Qué son las coberturas ERT?
                                    </font>
                                </font>
                            </summary>
                            <p class="description" data-v-67d141ea="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        Lorem ipsum pain sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor et pain magna aliqua. 
                                    </font>
                                </font>
                            </p>
                        </details>
                        <details class="collapse-item" data-v-67d141ea="">
                            <summary class="title" data-v-67d141ea="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        ¿Qué sucede si contrato un seguro de auto particular, sin cobertura ERT, y utilizo el vehículo para Uber o DiDi?
                                    </font>
                                </font>
                            </summary>
                            <p class="description" data-v-67d141ea="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        Lorem ipsum pain sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor et pain magna aliqua. 
                                    </font>
                                </font>
                            </p>
                        </details>
                        <details class="collapse-item" data-v-67d141ea="">
                            <summary class="title" data-v-67d141ea="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        ¿Por qué son más caros los seguros ERT normalmente?
                                    </font>
                                </font>
                            </summary>
                            <p class="description" data-v-67d141ea="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        Lorem ipsum pain sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor et pain magna aliqua. 
                                    </font>
                                </font>
                            </p>
                        </details>
                        <details class="collapse-item" data-v-67d141ea="">
                            <summary class="title" data-v-67d141ea="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        ¿Por qué el diseño de Gari-ERT tiene precios más bajos que los otros seguros para Uber?
                                    </font>
                                </font>
                            </summary>
                            <p class="description" data-v-67d141ea="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        Lorem ipsum pain sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor et pain magna aliqua. 
                                    </font>
                                </font>
                            </p>
                        </details>
                        <details class="collapse-item" data-v-67d141ea="">
                            <summary class="title" data-v-67d141ea="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        ¿Cómo funciona el seguro complementario de Gari-ERT en conjunto con el que ya te ofrece Uber?
                                    </font>
                                </font>
                            </summary>
                            <p class="description" data-v-67d141ea="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        Lorem ipsum pain sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor et pain magna aliqua. 
                                    </font>
                                </font>
                            </p>
                        </details>
                        <details class="collapse-item" data-v-67d141ea="">
                            <summary class="title" data-v-67d141ea="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        ¿Cual es el proceso para contratar Gari-ERT?
                                    </font>
                                </font>
                            </summary>
                            <p class="description" data-v-67d141ea="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        Lorem ipsum pain sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor et pain magna aliqua. 
                                    </font>
                                </font>
                            </p>
                        </details>
                        <details class="collapse-item" data-v-67d141ea="">
                            <summary class="title" data-v-67d141ea="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        ¿Qué opciones de pago tengo con Gari?
                                    </font>
                                </font>
                            </summary>
                            <p class="description" data-v-67d141ea="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        Lorem ipsum pain sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor et pain magna aliqua. 
                                    </font>
                                </font>
                            </p>
                        </details>
                        <details class="collapse-item" data-v-67d141ea="">
                            <summary class="title" data-v-67d141ea="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        ¿Qué hago en caso de tener un siniestro?
                                    </font>
                                </font>
                            </summary>
                            <p class="description" data-v-67d141ea="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        Lorem ipsum pain sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor et pain magna aliqua. 
                                    </font>
                                </font>
                            </p>
                        </details>
                        <details class="collapse-item" data-v-67d141ea="">
                            <summary class="title" data-v-67d141ea="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        ¿Cómo funciona el seguro complementario de Gari-ERT en conjunto con el que ya te ofrece Uber?
                                    </font>
                                </font>
                            </summary>
                            <p class="description" data-v-67d141ea="">
                                <img
                                    src="../../assets/img/Capture.PNG"
                                    alt="client logo"
                                    height="200px"
                                    class="client-img"
                                />
                            </p>
                        </details>
                        
                        </div> 
                            <a href="/preguntas-frecuentes" target="_self" class="btn btn-primary-outline rounded-pill" data-v-67d141ea="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        See all questions
                                    </font>
                                </font>
                            </a>
                        </div>
                    </div>
            </div>
        </div>
    </section>
    

    
</template>

<style scoped>
    .img-general-desk{
        display: inherit;
    }
    .img-general-mov{
        display: none;
    }
    .faq-section{
        margin-bottom: 100px;
    }
    .section-title{
        font-family: Jost;
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;
        /* identical to box height, or 125% */

        color: #4A25AA;
        margin-bottom: 65px;
    }
    .btn-primary-outline{
        /* Primary color */
        width: 245px;
        height: 45px;
        border: 1px solid #F20C49;
        box-sizing: border-box;
        border-radius: 34px;
        margin-top: 20px;
        color: #F20C49;
    }
    .items-collapse .collapse-item {
        --sp-sm: 1.8rem;
        --sp-md: 25px;
         width: 100%;
        
        margin: 0 auto;
        border-radius: 4px;
        background: rgba(192, 190, 240, 0.2);
        transition: box-shadow 250ms;
        will-change: box-shadow;
        overflow: hidden;
        margin-bottom: 20px;
        /* font-family: Jost; */
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        font-weight: 500;
    }
    .items-collapse .collapse-item .title {
        position: relative;
        padding: var(--sp-md);
        font-weight: 500;
        font-size: 16px;
        line-height: 23px;
        user-select: none;
        cursor: pointer;
    }
    .items-collapse .collapse-item .title::after {
        content: "→";
        position: absolute;
        right: var(--sp-md);
        top: 50%;
        transform: translateY(-50%);
    }
    .items-collapse .collapse-item[open] .title::after {
        content: "↓";
    }
    .items-collapse .collapse-item .description {
        padding: var(--sp-md);
        margin: 0;
        font-size: 14px;
        line-height: 20px;
        background-color: #FFFFFF;
        border: 0.1rem solid #fafafa;
    }
    .items-collapse .collapse-item .description:not(:first-of-type) {
        padding-top: 0;
    }
    .bg-mv{
        display: none;
    }
    @media (max-width: 576px) { 
        .bg-mv{
            display: initial;
            position: absolute;
            margin-top: -225px;
            right: 0px;
        }
        .faq-section{
            margin-top: -270px;
        }
    }

</style>

<script>
// import carousel from "vue-owl-carousel";
export default {
    name: "Customer",
    props: {
        isGray: {
            type: Boolean,
            default: false,
        },
        paddingTop: {
            type: Boolean,
            default: true,
        },
        paddingBottom: {
            type: Boolean,
            default: true,
        },
    },
};
</script>





<style>
</style>


