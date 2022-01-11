<template>
    <section
        id="contact"
        class="contact-us ptb-100"
        v-bind:class="isGray ? 'gray-light-bg' : ''"
    >
        <div class="container">
            <div class="row">
                <div
                    class="col-12 pb-3 message-box d-done"
                    v-bind:class="{
                        'd-none': !isSuccess && !hasError,
                        'd-block': isSuccess || hasError,
                    }"
                >
                    <div
                        class="alert"
                        v-bind:class="{
                            'alert-danger': hasError,
                            'alert-success': isSuccess,
                        }"
                    >
                        {{ alertText }}
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="section-heading">
                        <h3>¡Contáctanos!</h3>
                        <p>
                            Es muy fácil entrar en contacto con nosotros. Solo llena esta forma y te atenderemos de inmediato.

                        </p>
                    </div>
                    <div class="footer-address">
                        <h6><strong>Oficina Gari:</strong></h6>
                        <p>Bosque de Ciruelos 186 P11, Bosques de las Lomas, Miguel Hidalgo, CP 11700, CDMX</p>
                        <ul>
                            <li><span>Teléfono: +5215534622248</span></li>
                            <li>
                                <span
                                    >E-mail :
                                    <a href="mailto:contacto@gari.mx"
                                        >contacto@gari.mx</a
                                    ></span
                                >
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-7">
                    <form
                        v-on:submit="submit"
                        id="contactForm"
                        class="contact-us-form"
                    >
                        <h5>Comuníquese con nosotros rápidamente</h5>
                        <div class="row">
                            <div class="col-sm-6 col-12">
                                <div class="form-group">
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="name"
                                        v-model="name"
                                        placeholder="Ingrese su nombre"
                                        required="required"
                                    />
                                </div>
                            </div>
                            <div class="col-sm-6 col-12">
                                <div class="form-group">
                                    <input
                                        type="email"
                                        class="form-control"
                                        name="email"
                                        v-model="email"
                                        placeholder="Ingrese correo electrónico"
                                        required="required"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 col-12">
                                <div class="form-group">
                                    <input
                                        type="text"
                                        name="phone"
                                        value=""
                                        class="form-control"
                                        v-model="phone"
                                        placeholder="Su teléfono"
                                        required="required"
                                    />
                                </div>
                            </div>
                            <div class="col-sm-6 col-12">
                                <div class="form-group">
                                    <input
                                        type="text"
                                        name="company"
                                        value=""
                                        size="40"
                                        class="form-control"
                                        v-model="company"
                                        placeholder="Tu compañía"
                                        required="required"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <textarea
                                        name="message"
                                        v-model="message"
                                        class="form-control"
                                        rows="7"
                                        cols="25"
                                        placeholder="Mensaje"
                                        required="required"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 mt-3">
                                <button
                                    type="submit"
                                    class="btn-last"
                                    id="btnContactUs"
                                    style="pointer-events: all; cursor: pointer;color: white;"
                                >
                                    Enviar mensaje
                                </button>
                            </div>
                        </div>
                    </form>
                    <p class="form-message"></p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Contact",
    props: {
        isGray: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            email: "",
            message: "",
            name: "",
            phone: "",
            company: "",
            alertText: "",
            hasError: false,
            isSuccess: false,
        };
    },
    methods: {
        submit: function (e) {
            e.preventDefault();

            let formData = new FormData();
            formData.append("name", this.name);
            formData.append("message", this.message);
            formData.append("email", this.email);
            formData.append("phone",this.phone);
            formData.append("company",this.company);

            fetch("/php/contact-form-process.php", {
                body: formData,
                method: "POST",
            })
                .then((response) => {
                    if (response.status === 200) {
                        this.name = "";
                        this.message = "";
                        this.email = "";
                        this.phone = "";
                        this.company = "";
                        this.alertText = "Form submitted successfully";
                        this.hasError = false;
                        this.isSuccess = true;
                    } else {
                        this.alertText =
                            "Found error in the form.Please check again.";
                        this.isSuccess = false;
                        this.hasError = true;
                    }
                })
                .catch((error) => {
                    console.log(error);
                    this.alertText =
                        "Found error in the form. Please check again.";
                    this.isSuccess = false;
                    this.hasError = true;
                });
        },
        mounted() {
            this.alertText = "";
            this.hasError = false;
            this.isSuccess = false;
        },
    },
};
</script>

<style>
</style>