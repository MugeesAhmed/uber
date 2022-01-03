<template>
    <footer class="footer">
      <div class="footer-section">
        <div class="footer-section__row">
            <img src="~/assets/img/Gari-Logo-Blanco.svg" alt="" width="129">
            <ul class="hidden-sm-and-up">
              <li class="title-footer">
                Legales
              </li>
              <li class="text-footer">Pólitica de privacidad</li>
              <li class="text-footer">Términos y condiciones</li>
            </ul>
            <ul class="hidden-sm-and-up">
              <li class="title-footer">
                  Centro de ayuda
              </li>
              <li class="text-footer">Contáctanos</li>
              <li class="text-footer">Preguntas frecuentes</li>
            </ul>
        </div>
        <div class="footer-section__row d-sm-none">
            <ul>
                <li class="title-footer">
                  Legales
                </li>
                <li class="text-footer">Pólitica de privacidad</li>
                <li class="text-footer">Términos y condiciones</li>
            </ul>
        </div>
        <div class="footer-section__row d-sm-none">
            <ul>
              <li class="title-footer">
                  Centro de ayuda
              </li>
              <li class="text-footer">Contáctanos</li>
              <li class="text-footer">Preguntas frecuentes</li>
            </ul>
        </div>
        <div class="footer-section__row d-sm-none">
            <ul>
              <li class="title-footer">
                  Accesos
              </li>
              <li class="text-footer">Iniciar sesión</li>
              <li class="text-footer">Registrarse</li>
            </ul>
        </div>
        <div class="footer-section__row">
            <ul>
              <li class="title-footer d-sm-none">
                Redes sociales
              </li>
              <li class="flex-icons">
                <img class="rrss" src="~/assets/img/linkedin.svg" alt="">
                <img class="rrss" src="~/assets/img/facebook.svg" alt="">
                <img class="rrss" src="~/assets/img/instagram.svg" alt="">
              </li>
            </ul>
        </div>
      </div>
    </footer>
</template>
<style lang="scss" scoped>
.footer{
    background-color:#4A25AA ;
    bottom: 0px;
    min-height: 210px;
    color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 14px;
    padding: 57px 10px 0px;

    @media screen and (max-width: 768px) {
      padding: 25px 30px 0px;
    }
}
.footer-section {
    width: 100%;
    max-width: 1140px;
    // display: flex;
    // justify-content: center;
    display: grid;
    grid-template-columns: repeat(3, minmax(160px, 210px)) minmax(120px, 210px) minmax(120px, 1fr);

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, minmax(120px, 1fr));
    }
    &__row {
      // margin-right: 34px;
      width: 210px;
      &:last-child {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      }
    }
}
ul {
  list-style-type: none;
  padding-left: unset;

  li {
    &:last-child {
      margin-bottom: 10px;
    }
    &.title-footer {
      margin-bottom: 20px;
      font-weight: 600;
    }
    &.flex-icons {
      display: flex;
      justify-content: space-between;
      min-width: 100px;
      
      @media screen and (max-width: 768px) {
        img {
          height: 26px;
        }
      }
    }
  }
}

</style>