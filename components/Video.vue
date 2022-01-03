<template>
    <div class="video-section">
        <div class="text-center" style="display:none">
            <div class="video-container">
                <img src="~/assets/img/video.svg" alt="">
            </div>
        </div>
        <div class="how-works-section" id="como-funciona">
        <div class="container text-center">
                <div class="section-title" v-animate.repeat="'fade-in-left'">
                    ¿Cómo funciona?
                </div>
                <div class="row steps">
                    <div id="parent" class="col-md-3 text-left top-steps" v-animate.repeat="'fade-in-up'" v-for="how in data" :key="how.title">
                        <div class="row">
                            <div class="col-2 col-md-12">
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
    </div>
</template>
<script>
export default {
    data () {
        return {
            data : [
                {
                    title: 'Digital e inmediato',
                    text: 'Cotiza y contrata de manera inmediata en nuestro sitio web. Tu seguro comienza en ese instante.',
                    img: 'contrata.svg',
                    img_hover: 'contrata-hov.svg'
                },
                {
                    title: 'Descarga el app de Gari',
                    text: 'Al contratar tu póliza, deberás descargar el app de Gari en tu teléfono.',
                    img: 'descarga.svg',
                    img_hover: 'descarga-hov.svg'
                },
                {
                    title: '¡Listo, ya estás cubierto!',
                    text: 'Mientras conduces, el app de Gari analiza tus patrones de manejo.',
                    img: 'maneja.svg',
                    img_hover: 'maneja-hov.svg'
                },
                {
                    title: 'Pagos automáticos',
                    text: 'Cada mes, se calculará tu tarifa con base en los kms. recorridos y obtendrás descuentos por buen manejo.',
                    img: 'pagos.svg',
                    img_hover: 'pagos-hov.svg'
                }
            ]
        }
    }
}
</script>
<style scoped>
    .video-section{
        min-height: 600px;
       /* background: conic-gradient(from 189.41deg at 56.22% 28.4%, rgba(8, 191, 217, 0) -41.05deg, rgba(131, 236, 195, 0) 23.2deg, rgba(153, 206, 213, 0.5) 36.74deg, rgba(175, 175, 232, 0.7) 89.55deg, #AFAFE8 200.48deg, rgba(175, 175, 232, 0.7) 240.14deg, rgba(8, 191, 217, 0) 318.95deg, rgba(131, 236, 195, 0) 383.2deg) no-repeat; */
        background-size:auto 90%;
        padding-top: 110px;
        padding-bottom: 1px;
    }
    .video-container{
        width: 70%;
        height: 470px;
        background: #F6F6F6;
        border-radius: 25px;
        margin-left: 15%;
    }
    .video-container img{
        vertical-align: middle;
        margin-top: 200px;
    }
    @media (max-width: 576px) { 
        .video-container{
            width: 70%;
            height: 20%;
            background: #F6F6F6;
            border-radius: 25px;
            margin-left: 20%;
        }
        .video-container img{
            vertical-align: middle;
            margin-top: 20%;
            padding-bottom: 20%;
        }
        .video-section{
            min-height: 400px;
            padding-top: 0px;
        }
    }

    @media (max-width: 768px) {
        .video-container{
            width: 70%;
            height: 20%;
            background: #F6F6F6;
            border-radius: 25px;
            margin-left: 20%;
        }
        .video-container img{
            vertical-align: middle;
            margin-top: 20%;
            padding-bottom: 20%;
        }
        .video-section{
            min-height: 400px;
        }    
    }


    @media (min-width: 992px) {

     }

    .how-works-section{
       /* margin-top: 200px;
        margin-bottom: 200px; */
    }
    .section-title{
        font-family: Jost;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 40px;
        color: #4A25AA;

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
        .top-steps{
            margin-top: 20px;
        }
        .step-text{
            margin-top: 5px;
        }
        .steps{
            margin-top: 20px;
        }
    }


    @media (max-width: 768px) {
        .how-works-section{
            margin-bottom: 0px;
            margin-top: 80px;
        }
     }
</style>