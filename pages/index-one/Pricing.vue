<template>
    <div class="overflow-hidden">
        <section
            id="pricing"
            class="package-section background-shape-right ptb-100"
        >
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="section-heading text-center mb-5">
                            <h2>
                                Elige el paquete que mejor se adapte a tus necesidades

                            </h2>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md">
                        <div
                            class="card popular-price text-center single-pricing-pack"
                        >
                            <div class="pt-4"><h5>Básico</h5></div>
                            <p>Seguro con el mejor precio</p>
                            <div class="pricing-img">
                                <img 
                                    src="https://drive.google.com/uc?export=view&id=1eP2otFawKkwbpEmSybpeKQwkfMa0LzRS"
                                    width="120"
                                    alt="asas"
                                    class="img-fluid"
                                />

                            </div>
                            <div
                                class="card-header py-4 border-0 pricing-header"
                            >
                                <div class="h1 text-center mb-0">
                                    $<span class="price font-weight-bolder"
                                        >149</span
                                    >
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="font-weight-bold">Deducibles</p>
                                <ul
                                    class="list-unstyled text-sm mb-4 pricing-feature-list"
                                >
                                    <li>Daños materiales 15% (VC)</li>
                                    <li>Robo total 15% (VC)</li>
                                </ul>
                                <p class="font-weight-bold">Sumas aseguradas</p>
                                <ul
                                    class="list-unstyled text-sm mb-4 pricing-feature-list"
                                >
                                    <li>Responsabilidad Civil (te cubrimos hasta 1M)</li>
                                    <li>Gastos médicos (te cubrimos hasta 40k)</li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md">
                        <div class="card text-center single-pricing-pack">
                            <div class="pt-4"><h5>Premium</h5></div>
                            <div class="pricing-img mt-4">
                                <img 
                                    src="https://drive.google.com/uc?export=view&id=1IrqwhcNwSfPWNMxGZgNtgvjmB31iDjBl"
                                    width="120"
                                    alt="asas"
                                    class="img-fluid"
                                />
                            </div>
                            <div
                                class="card-header py-4 border-0 pricing-header"
                            >
                                <div class="h1 text-center mb-0">
                                    $<span class="price font-weight-bolder"
                                        >39</span
                                    >
                                </div>
                            </div>
                                                        <div class="card-body">
                                <p class="font-weight-bold">Deducibles</p>
                                <ul
                                    class="list-unstyled text-sm mb-4 pricing-feature-list"
                                >
                                    <li>Daños materiales 15% (VC)</li>
                                    <li>Robo total 15% (VC)</li>
                                </ul>
                                <p class="font-weight-bold">Sumas aseguradas</p>
                                <ul
                                    class="list-unstyled text-sm mb-4 pricing-feature-list"
                                >
                                    <li>Responsabilidad Civil (te cubrimos hasta 1.5M)</li>
                                    <li>Gastos médicos (te cubrimos hasta 80k) Cobertura celular?</li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="mt-5 text-center">
                    <p class="mb-2">
                        If you need custom services or Need more?
                        <a href="#" class="color-secondary"> Contact us </a>
                    </p>
                </div> -->
                <!--pricing faq start-->
                <!-- <div class="row mt-5">
                    <div class="col-lg-6">
                        <accordian id="accordion-1" :contents="contents" />
                    </div>
                    <div class="col-lg-6">
                        <accordian id="accordion-2" :contents="contents1" />
                    </div>
                </div> -->
                <!--pricing faq end-->
            </div>
        </section>
    </div>
</template>

<script>
// import Accordian from "../../components/Accordian";
export default {
    name: "Pricing",
    isGray: {
        type: Boolean,
        default: false,
    },
    isPrimary: {
        type: Boolean,
        default: false,
    },
    components: {
        // Accordian,
    },
    data: function () {
        return {
            contents: [
            ],
            contents1: [
            ],
        };
    },
};
</script>

<style>
</style>