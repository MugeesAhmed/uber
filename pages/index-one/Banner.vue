<template>
    <section class="hero-section pt-100 background-img banner-1-bg" id="inicio">
            
        <div class="container">
            <div class="row align-items-center justify-content-between py-5">
                <div class="col-md-7 col-lg-6">
                    <div class="hero-content-left text-white">
                        <h1 class="text-white">
                            <span>Seguro enfocado a conductores de Uber</span>
                        </h1>
                        <h2 class="text-white">
                            <span>Gari-ERT</span>
                        </h2>
                        <ul>
                            <li>. Paga lo justo</li>
                            <li>. Protección sin importar si estas en la plataforma o uso personal</li>
                            <li>. Simple de comprar y usar</li>
                        </ul>
                    </div>
                </div>
                <div class=" site-form col-md-6 col-lg-6">

                    <div class="  main1">
                      <h2> Cotización con cuenta de Uber <br> (recomendado) </h2>
                      <div class="row row1">
                            <div class="col-sm-4">
                               <img
                                        src="../../assets/img/uberlogo.png"
                                        alt="icon image"
                                        class="img-fluid"
                                    />
                            </div>
                            <div class="col-sm-8">
                                <form>
                                     <div class="form-group">
                                          <label for="exampleInputPassword1">Correo electrónico</label>
                                          <input type="text" class="input_use"  placeholder="" v-model="driver_id">
                                    </div>
                                     <div class="form-group">
                                          <label for="exampleInputPassword1">Contraseña</label>
                                          <input type="text" class="input_use"  placeholder="" v-model="driver_id">
                                    </div>
                                    <button class="form-button" type="button" v-on:click="get_driver()">  <a href="#" type="button">Cotizer</a> </button>
                                   
                                </form>
                            </div>
                        </div>

                    </div>
                    <div class="container main2">
                        <h2> Cotización manual </h2>
                        <p>pore favor ingresa los datos de tu vehiculo</p>
                        
                             <div class="container">
                                    <div class="row">
                                      <div class="col-sm">


                                    <label for="exampleInputPassword1">Afio</label>
                                    <input type="text" class="input_use"  placeholder="" size="" maxlength="5">

                                          
                                      

                                      </div>
                                      <div class="col-sm">
                                         <label for="exampleInputPassword1">Marca</label>
                                         <input type="text" class="input_use"  placeholder="" size="0" maxlength="5">

                                      </div>
                                      <div class="col-sm">
                                         
                                          <label for="exampleInputPassword1">Modelo</label>
                                          <input type="text" class="input_use"  placeholder="" size="5" maxlength="15">

                                      </div>
                                    </div>
                              </div>

                              

                             <div class="container secondory">
                                 <div class="row">
                                            <div class="col-sm">
                                               <label for="exampleInputPassword1">Modelo</label>
                                               <input type="text" class="input_use"  placeholder="" size="5" maxlength="15">
                                                  
                                            </div>
                                            <div class="col-sm second-1">
                                             
                                               <div> ¿Estacionamiento privado? 
                                               </div> 
                                                   <div class="radio">
                                                       <label for=""> Si  <input type="radio"></label>
                                                        <label for=""> No  <input type="radio"></label>
                                                     
                                                      
                                                   </div>
                                             

                                          </div>
                                 </div>
                               </div>  

                               <div class="container">
                                   <button class="btn-last"><a href=""> Siguiente </a></button>
                                   </div>      

                    </div>
                    

                   
                    

                    
                </div>
            </div>
        </div>
        <div class="bottom-img-absolute">
            <img
                src="../../assets/img/hero-bg-shape-1.svg"
                alt="wave shape"
                class="img-fluid"
            />
        </div>
        <YTModal
            url="https://www.youtube.com/watch?v=1APwq1df6Mw"
            v-if="showModal"
            @close="showModal = false"
        >
            This is my first modal
        </YTModal>
    </section>
</template>

<script>
import YTModal from "./YTModal";
export default {
    name: "Banner",
    components: { YTModal },
    data: function () {
        return {
            showModal: false,
            driver_id: "",
            counter: 0,
        };
    },
    methods: {
        showYouTubeModal: function (e) {
            e.preventDefault();
            this.showModal = true;
        },
        get_driver: async function() {
            const axios = require('axios')
            axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

            axios.get('https://www.palenca.com/uber/get-user/' + this.driver_id, {
                headers: { 
                    'x-api-key': 'sandbox_5ad4b782-387d-4fc8-b037-64c58696b2ab', 
                    'Content-Type': 'application/json',
                }
            }).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err.response);
            });

            // const config = {
            //     method: 'get',
            //     url: 'https://www.palenca.com/uber/get-user/' + this.driver_id,
            //     headers: { 
            //         'x-api-key': 'sandbox_5ad4b782-387d-4fc8-b037-64c58696b2ab', 
            //         'Content-Type': 'application/json'
            //     }
            // }
            
            // try {
            //     const { response } = await axios(config)
            //     console.log(response);
            //     console.log(JSON.stringify(response.data))
            // } catch (error) {
            //     console.log(error)
            // }
        }
    },
};
</script>

<style>
.banner-1-bg {
    background: url("../../assets/img/app-hero-bg.jpg") no-repeat center center /
        cover !important;
}
</style>