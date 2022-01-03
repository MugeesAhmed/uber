<template>
    <div class="custom-app-section">
        <div class="custom-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 text-section offset-md-6">
                    <div class="custom-title" v-animate.repeat="'fade-in-right'">Personalizado para ti.</div>
                    <div class="goods" v-animate.repeat="'fade-in-left'">Los buenos conductores ahorran más.</div>
                    <div class="text" v-animate.repeat="'fade-in-left'">Estos son sólo algunos de los muchos conductores que se benefician de Gari. <br> ¡Lo más probable es que tú también lo hagas!</div>

                    <div class="cta-btn" v-animate.repeat="'fade-in-up'">
                        <a href="https://cotizador.gari.mx/" target="_blank" class="btn btn-primary btn-round" >Cotizar ahora</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="app-section">
        <div class="container">
            <div class="row">
                <b-col md="6" order="2" order-md="1">
                    <div class="carousel-container">
                        <div class="slider-holder">
                            <div class="image-holder" :style="{'left':leftProperty + 'px'}">
                            <div class="slider-image">
                                <img src="~/assets/img/mockup-phone1.png" alt="" class="img-fluid">
                            </div>
                            <div class="slider-image" :class="leftProperty == 0 ? 'opacity-active' : ''">
                                <img src="~/assets/img/mockup-phone2.png" alt="" class="img-fluid">
                            </div>
                            <div class="slider-image" :class="leftProperty == -1100 ? 'opacity-active' : ''">
                                <img src="~/assets/img/mockup-phone3.png" alt="" class="img-fluid">
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="spinner-holder">
                        <div class="spinner" style="margin-left:0px" @click="leftProperty = 0"/>
                        <div class="spinner" style="margin-left:40px" @click="leftProperty = -400" />
                        <div class="spinner" style="margin-left:80px"  @click="leftProperty = -800" />
                    </div>
                    <div class="button-holder">
                        <span v-if="leftProperty < 0" @click="setLeft(+400)" class="prev">‹</span>
                        <span v-if="leftProperty > -800" @click="setLeft(-400)" class="next">›</span>
                    </div>
                </b-col>
                <b-col md="6" class="text-left text-container" order="1" order-md="2">
                    <div class="app-title animate__animated" v-animate.repeat="'fade-in-right'">
                        Todo en tu app.
                    </div>
                    <div class="text-special animate__animated" v-animate.repeat="'fade-in-left'">
                        Puedes ver tus viajes, administrar tu póliza
                        y cancelar en cualquier momento.
                    </div>
                    <div class="app-subtitle animate__animated" v-animate.repeat="'fade-in-up'">
                        Prevención.
                    </div>
                    <div class="prev-text animate__animated" v-animate.repeat="'fade-in-up'">
                        Te motivamos a conducir de forma más segura. Recibirás recomendaciones para prevenir accidentes.
                    </div>
                    <div class="app-subtitle animate__animated" v-animate.repeat="'fade-in-up'">
                        Seguro divertido.
                    </div>
                    <div class="prev-text animate__animated" v-animate.repeat="'fade-in-up'">
                        Revisa tus viajes y hábitos de manejo. Compite con otros conductores de Gari y recibe descuentos si eres de los mejores conductores.
                    </div>
                    <div class="app-subtitle animate__animated" v-animate.repeat="'fade-in-up'">
                        Fácil, desde tu app.
                    </div>
                    <div class="prev-text animate__animated" v-animate.repeat="'fade-in-up'">
                        Reporta siniestros, chatea con nuestros representantes o cancela tu póliza desde tu app.
                    </div>
                </b-col>
                
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            leftProperty: 0
        }
    },
    methods: {
        setLeft(value){
        this.leftProperty = this.leftProperty + value
        }
    }
}
</script>
<style scoped>
.slider-holder {
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  text-align: center;
  overflow: hidden;
}

.image-holder {
  width: 3600px;
  background-color: red;
  clear: both;
  position: relative;

  -webkit-transition: left 2s;
  -moz-transition: left 2s;
  -o-transition: left 2s;
  transition: left 2s;
}

.slider-image {
  float: left;
  margin: 0px;
  padding: 0px;
  position: relative;
  width: 405px;
  margin-right: 30px;
  text-align: center;
}

.slider-img img {
  width: 720px;
}
.prev {
  height: 60px;
  width: 65px;
  left: 50px;
  color: #26D07C;
  cursor: pointer;
  font-size: 40px;
  line-height: 36px;
  position: absolute;
  cursor: pointer;
  text-align: center;
  z-index: 10;
  margin-top: -330px;
}
.next {
  height: 60px;
  width: 65px;
  position: absolute;
  right: 50px;
  color: #26D07C;
  cursor: pointer;
  font-size: 40px;
  line-height: 36px;
  cursor: pointer;
  text-align: center;
  z-index: 10;
  margin-top: -330px;
}
.spinner-holder{
    text-align: center;
    width: 100%;
    display: none;
    justify-content: center;
    align-items: center;
}
.spinner{
   position: absolute;
    width: 11px;
    height: 11px;
    background-color: #C4C4C4;
    border-radius: 50%;
}
.custom-app-section{
    background-image: url('~/assets/img/personas-desktop.png');
    background-repeat: no-repeat;
    background-size: 100%;
}
    .text-container{
        margin-bottom: 490px;
    }
    @media (min-width: 1700px) {
        .text-container{
            margin-bottom: 850px;
            margin-top: 0px;
        }
    }
    .custom-title{
        font-family: Jost;
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;
        /* identical to box height, or 125% */

        color: #4A25AA;
    }
    .text-section{
        margin-top: 150px;
        padding-left: 70px;
    }
    .goods{
        font-family: Jost;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 20px;

        color: #282828;
        margin-top: 20px;
    }
    .text{
        /* Label */

        font-family: Jost;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 23px;

        /* Text dark */

        color: #282828;
    }
    .text{
        margin-top: 18px;
        font-family: Jost;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 23px;

        /* Text dark */

        color: #282828;
    }
    .btn-primary{
        margin-top: 65px;
        width: 188px;
        height: 44px;
    }

    .app-section{
        margin-top: 280px;
    }
    .img-background{
        position: absolute;
        left: -190px;
        top: -400px;
        z-index: -1;
        opacity: 0.6;
    }
    .img-app{
        position: relative;
    }
    .app-title{
        font-family: Jost;
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;
        /* identical to box height, or 125% */

        margin-top: 150px;

        color: #4A25AA;
    }
    .container-fluid{
        padding-right: 15px;
    }
    .text-special{
        font-family: Jost;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 20px;

        color: #282828;
        margin-top: 20px;
    }
    .prev-text{
        font-family: Jost;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 23px;

        /* Text dark */

        color: #282828;
    }
    .app-subtitle{
        margin-top: 20px;
        font-weight: 500;
    }
    @media (max-width: 576px) { 
        .custom-app-section{
            background-image: url('~/assets/img/personas-movil.svg');
            background-repeat: no-repeat;
            background-size: 100%;
        }
        .carousel-container{
            margin-top: 50px;
        }
        .slider-image{
            width: 380px;
        }
        .spinner-holder{
            display: flex;
        }
    }


    @media (max-width: 768px) {
        
        .app-title{
            margin-top: 50px;
        }
        .app-section{
            margin-top: 0px;
        }
        .text-section{
            margin-top: 400px;
        }
        .cta-btn{
            text-align: center;
        }
            .text-container{
                margin-bottom: 10px;
            }
            .text-section {
                margin-top: 500px;
            }
     }


    @media (min-width: 992px) {

     }
</style>