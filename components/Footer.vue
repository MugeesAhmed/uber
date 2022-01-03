<template>
    <div class="footer-section">
        <footer>
            <div class="row">
                <div class="col-6 col-md-2">
                    <img src="~/assets/img/Gari-Logo-Blanco.svg" alt="" style="max-width:130px">
                </div>
                <div class="col-12 col-md-5 row order-12 order-md-1">
                    <div class="col-md-4">
                        <div class="title-footer">
                            Legales
                        </div>
                        <div class="text-footer">Pólitica de privacidad</div>
                        <div class="text-footer">Términos y condiciones</div>
                    </div>
                    <div class="col-md-4">
                        <div class="title-footer">
                            Centro de ayuda
                        </div>
                        <div class="text-footer">Contáctanos</div>
                        <div class="text-footer">Preguntas frecuentes</div>
                    </div>
                    <div class="col-md-4">
                        <div class="title-footer">
                            Accesos
                        </div>
                        <div class="text-footer">Iniciar sesión</div>
                        <div class="text-footer">Registrarse</div>
                    </div>
                </div>
                <div class="col-6 col-md-2 offset-md-3 order-1 order-md-12">
                    <div class="title-footer rs">
                            Redes sociales
                        </div>
                        <img class="rrss" src="~/assets/img/linkedin.svg" alt="">
                        <img class="rrss" src="~/assets/img/facebook.svg" alt="">
                        <img class="rrss" src="~/assets/img/instagram.svg" alt="">

                </div>
            </div>
        </footer>
    </div>
</template>
<style scoped>
.footer-section{
    background-color:#4A25AA ;
    bottom: 0px;
    min-height: 210px;
    color: white;
    width: 100%;
}
    footer{
        padding-left: 90px;
        padding-right: 90px;
        padding-top: 55px;
    }
    .title-footer{
        font-family: Jost;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;

        color: #F6F6F6;
    }

    .text-footer{
        font-family: Jost;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;

        /* Background */

        color: #F6F6F6;
        margin-top: 10px;
    }
    .rrss{
        width: 16px;
        margin-top: 10px;
        margin-right: 10px;
    }
    @media (max-width: 768px) {
        footer{
            padding-left: 30px;
            padding-right: 30px;
            padding-top: 40px;
        }
        .title-footer{
            margin-top: 10px;
        }
        .rrss{
            width: 25px;
        }
        .rs{
            display: none;
        }
     }
</style>