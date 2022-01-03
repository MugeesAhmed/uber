<template>
    <div class="faq-section" id="faqs">
        <div class="container-fluid text-center">
            <img src="~/assets/img/responsive-contact.png" class="bg-mv" alt="">
            <div class="row">
                <div class="col-md-6">
                    <img src="~/assets/img/faqs-desktop.png" class="img-general-desk mt-5 img-fluid" alt="">
                    <img src="~/assets/img/faqs-movil.png" class="img-general-mov mt-5 img-fluid" alt="">
                </div>
                <div class="col-md-5 text-left">
                    <div class="section-title">
                        Preguntas frecuentes
                    </div>
                    <div class="items-collapse">
                        <details class="collapse-item"  v-for="faq in faqs" :key="faq.id">
                            <summary class="title">{{faq.title}}</summary>
                            <p class="description">
                                {{faq.text}}
                            </p>
                        </details>
                    </div>
                    <b-btn variant="primary-outline" to="preguntas-frecuentes" pill>
                        Ver todas las preguntas
                    </b-btn>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            faqs: [
                {
                    id: '1',
                    title: '¿Que ventajas tengo con Gari que no tengo con un seguro tradicional?',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: '2',
                    title: '¿Qué tipo de vehículos aseguran? ¿Puedo asegurar mi motocicleta?',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: '3',
                    title: '¿Cómo cotizo en Gari?',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
            ]
        }
    }
}
</script>
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
    details summary {
	 list-style: inside none;
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
        font-family: Jost;
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