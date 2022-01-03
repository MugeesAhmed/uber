<template>
    <div class="how-works-section" id="como-funciona">
       <div class="container text-center">
            <div class="section-title" v-animate.repeat="'fade-in-right'">
                ¿Cómo funciona?
            </div>
            <div class="row steps">
                <div id="parent" class="col-md-3 text-left" v-for="how in data" :key="how.title">
                    <div class="row">
                        <div class="col-2 col-md-12" v-animate.repeat="'fade-in-left'">
                            <img id="img-desk" class="mb-4" :src="require(`~/assets/img/${ how.img }`)" alt="">
                            <img id="img-hover" class="mb-4" :src="require(`~/assets/img/${ how.img_hover }`)" alt="">        
                        </div>
                        <div class="col-10 col-md-12">
                            <div class="step-title">{{how.title}}</div>
                            <div class="step-text">{{how.text}}</div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
       
    </div>
</template>
<script>
export default {
    data () {
        return {
            data : [
                {
                    title: 'Contrata y asegúrate de forma digital e inmediata',
                    text: 'Cotiza y contrata de manera inmediata en nuestro sitio web. Tu seguro comienza a operar en ese instante',
                    img: 'contrata.svg',
                    img_hover: 'contrata-hov.svg'
                },
                {
                    title: 'Descarga el app de Gari',
                    text: 'Al contratar tu póliza, deberás descargar el app de Gari en tu teléfono',
                    img: 'descarga.svg',
                    img_hover: 'descarga-hov.svg'
                },
                {
                    title: 'Maneja normalmente',
                    text: 'Mientras conduces, el app de Gari analiza tus patrones de manejo',
                    img: 'maneja.svg',
                    img_hover: 'maneja-hov.svg'
                },
                {
                    title: 'Pagos automáticos',
                    text: 'Cada mes, se calculará la tarifa dependiendo de los kms. recorridos y obtendrás descuentos si tienes una buena calificación de manejo',
                    img: 'pagos.svg',
                    img_hover: 'pagos-hov.svg'
                }
            ]
        }
    }
}
</script>
<style scoped>
.how-works-section{
    margin-top: 200px;
    margin-bottom: 200px;
}
    .section-title{
        font-family: Jost;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 40px;
        color: #4A25AA;

        margin-top: 70px;
    }
    .steps{
        margin-top: 95px;
    }
    #parent:hover #hover-content, #parent:hover #img-hover {
        display: inline;
        transition: .5s all;
    }

    #parent:hover #img-desk {
        display: none;
    }
    #hover-content, #img-hover {
        display:none;
    }
    .step-title{
        
        font-family: Jost;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 20px;
        /* or 100% */
        color: #4A25AA;
    }
    .step-text{
        font-family: Jost;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 23px;

        /* Text dark */

        color: #282828;
        margin-top: 18px;
    }

    @media (max-width: 576px) { 
        
    }


    @media (max-width: 768px) {
        .how-works-section{
            margin-bottom: 0px;
            margin-top: 80px;
        }
     }
</style>