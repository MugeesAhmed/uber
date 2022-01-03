<template>
    <div class="general-section mt-5">
        <div class="container-fluid">
            <img src="~/assets/img/left.png" class="img-left" alt="">
            <img src="~/assets/img/right.png" class="img-right" alt="">
            <div class="row info-container">
                <div class="col-md-4 img-shield">
                    <img src="~/assets/img/shield.svg" class="img-fluid" v-animate.repeat="'fade-in-up'" alt="">        
                </div>
                <div class="col-md-8 text-section">
                    <div class="general-title " v-animate.repeat="'fade-in-right'">
                        ¡Gari está respaldado por una de las mejores aseguradoras del país!
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.info-container{
    padding-top: 100px;
    margin-bottom: 150px;
    margin-top: 50px;
}
.container-fluid{
    padding-left: 0px;
}
    .img-left{
        position: absolute;
        margin-top: -80px;
    }
    .img-right{
        position: absolute;
        right: 0px;
        margin-top: -80px;
    }
    .wrap{
        position: relative;
        right: -1200px;
    }
    .general-title{
        font-family: Jost;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 20px;
        /* identical to box height, or 100% */

        color: #282828;
    }
    .text-section p{
        margin-top: 30px;
        font-family: Jost;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 23px;

        /* Text dark */

        color: #282828;
    }
    .img-shield{
        text-align: right;
    }
    .img-shield img{
        margin-top: -40px;
    }

    @media (max-width: 576px) { 
        
    }


    @media (max-width: 768px) {
        .img-left, .img-right {
            display: none;
        }
        .img-general{
            left: 15%;
        }
        .text-section{
            margin-top: 20px;
        }
        .container-fluid{
            padding-left: 15px;
        }
        .info-container{
            padding-top: 200px !important;
            padding-bottom: 400px;
        }
        .img-shield{
            text-align: center;
        }
        .img-shield img{
            margin-top: 00px;
        }
        .general-title{
            font-family: Jost;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 29px;
            text-align: center;

            /* Text / Dark */

            color: #282828;
        }
        .general-section{
            background-color: #F6F6F6;
        }
     }

    @media only screen and (min-width: 770px) and (max-width: 1400px){
        .general-section{
            margin-top: -330px !important;
        }
    }
</style>