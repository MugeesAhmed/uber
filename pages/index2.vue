<template>
  <div class="w-100">
    <transition name="component-fade" mode="out-in">
      <div key="steps" v-if="!finalStep" class="hidden-xs-only home">
        <div class="stepper-graphic">
          <img class="city-image" :src="cartBackground" alt="city_cotizador_desktop">
          <img 
            class="car-image"
            :src="require('~/assets/svg/carro_cotizador.png')"
            alt="city_cotizador_desktop"
            :style="`left: ${cartPosition}`"
          >
        </div>
        <div class="numbers">
          <div class="numbers__bar" />
          <div class="numbers__bar active" :style="`width: ${100/(steps[steps.length - 1].number  - 1)* (currentStep.number -1)}%`" />
          <div
            v-for="(step, i) in steps"
            :key="i"
            class="numbers__label"
            :class="{ active: step.number <= currentStep.number }"
            @click="setStep(step.number)">
            {{ step.number }}
          </div>
        </div>
        <transition name="component-fade" mode="out-in">
          <Component
            :is="currentStep.component"
            :title="currentStep.title"
            @nextStep="nextStep"
            @changeSteps="changeSteps"/>
        </transition>
      </div>
      <div key="final-step" v-else class="home hidden-xs-only">
        <FormPlan @backStep="finalStep = false" />
      </div>
    </transition>
    <div class="hidden-sm-and-up w-100">
      <div class="stepper-graphic-mobile">
        <img 
          class="car-image"
          :src="require('~/assets/svg/ilustracion_coche.png')"
          alt="city_cotizador_desktop"
        >
        <p class="title">Cotiza tu seguro</p>
      </div>
      <transition name="component-fade" mode="out-in">
        <div  v-if="!finalStep" class="stepper-accordion">
          <div
              v-for="(step, i) in steps"
              :key="i"
              class="stepper-tab"
            >
            <div class="stepper-tab__line" :class="{ active: step.number <= currentStep.number, none: step.number === steps.length }" />
            <div
              class="stepper-tab__number"
              :class="{ active: step.number <= currentStep.number }"
              @click="setStep(step.number)"
            >
              {{ i + 1 }}
            </div>
            <div 
              class="stepper-tab__content stepper-card" :class="{ active: step.number === currentStep.number }">
              <div class="stepper-card__title" :class="{ active: step.number <= currentStep.number }" >
                {{ step.name}}
              </div>
              <div class="stepper-card__form" :class="{'bg-white': i=== 3}">
                <keep-alive>
                  <Component
                    :is="step.component"
                    :title="currentStep.title"
                    @nextStep="nextStep"
                    @changeSteps="changeSteps"
                  />
                </keep-alive>
              </div>
            </div>
          </div>
        </div>
        <FormPlan v-else @backStep="finalStep = false" />
      </transition>
    </div>
  </div>
</template>
<router>
{
  alias: '/home'
}
</router>
<script>
import FormPlate from '@/components/PlateStep/FormPlate'
import FormPlan from '@/components/PlateStep/FormPlan'
import FormOwner from '@/components/PlateStep/FormOwner'
import FormVehicle from '@/components/PlateStep/FormVehicle'
import { mapMutations } from 'vuex'
  export default {
    components: { FormPlate, FormPlan, FormOwner, FormVehicle },
    data: () => ({
      currentStep: { number: 1, component: 'FormVehicle', name: 'Datos de vehículo' },
      steps: [
        { number: 1, component: 'FormVehicle', name: 'Datos de vehículo' },
        { number: 2, component: 'FormOwner', name: 'Datos conductor', title: 'Por favor ingresa los datos del conductor' },
      ],
      finalStep: false,
    }),
    computed: {
      cartPosition(){
        const percentage = 100/(this.steps[this.steps.length - 1].number  - 1)* (this.currentStep.number -1)
        if (this.currentStep.number === this.steps.length) {
          return `calc(${percentage}% - 91px)`
        } 
        if (this.currentStep.number === 1) {
          return '0'
        }
        return `calc(${percentage}% - 41.5px)`
      },
      cartBackground() {
        return  this.currentStep.number ? '/svg/paso'+ this.currentStep.number +'.svg' : '/svg/paso1.svg' 
      }
    },
    methods: {
      ...mapMutations({ clearNextData: 'quotation/clearDataByStep'}),
      nextStep() {
        const step = this.steps.find(r=> r.number === (this.currentStep.number + 1))
        if (step) {
          this.currentStep = step
        } else {
          this.finalStep = true
        }
      },
      setStep(stepNumber) {
        if (stepNumber === 1) {
          this.steps = [
          { number: 1, component: 'FormVehicle', name: 'Datos de vehículo' },
          { number: 2, component: 'FormOwner', name: 'Datos conductor', title: 'Por favor ingresa los datos del conductor' },
          ]
        }
        if (this.currentStep.number >= stepNumber) {
          this.currentStep = this.steps.find(r=> r.number === stepNumber)
        }
        this.clearNextData(stepNumber)
      },
      changeSteps() {
        this.steps = [
          { number: 1, component: 'FormPlate', name: 'Cotiza' },
          { number: 2, component: 'FormVehicle', name: 'Datos de vehículo' },
          { number: 3, component: 'FormOwner', name: 'Datos conductor', title: 'Por favor ingresa los datos del conductor' },
        ]
        this.currentStep = { number: 2, component: 'FormVehicle' }
      }
    }
  }
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-image: url('~/assets/svg/bg_cotizador_desktop.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 578px;
}
.stepper-graphic {
  display: flex;
  justify-content: center;
  flex-flow: column;
  padding-top: 15px;
  position: relative;
  width: 720px;
  margin-bottom: 10px;
  .city-image {
    position: relative;
  }
  .car-image {
    position: absolute;
    left: 0;
    transition: all 1s cubic-bezier(0.98, 0.06, 0.56, 0.9);
    bottom: -10px;
  }
}
.numbers {
  margin-top: 6px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 660px;
  &__bar {
    position: absolute;
    height: 4px;
    width: 660px;
    background-color: #f6f6f6;

    &.active {
      background-color: $green-color;
      transition: all 0.35s linear;
    }
  }
  &__label {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #f6f6f6;
    color: #ffffff;
    font-family: Jost;
    font-size: 1rem;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;

    &.active {
      background-color: $green-color;
      cursor: pointer;
    }
  }
}

.stepper-graphic-mobile {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  position: relative;
  width: 100%;
  margin-bottom: 10px;
  background-image: url('~/assets/svg/bg_encabezado_movil.png');
  background-size: cover;
  height: 100px;
  .car-image {
    position: relative;
    left: 0;
    transition: all 1s cubic-bezier(0.98, 0.06, 0.56, 0.9);
  }
  .title  {
    font-family: Jost;
    font-size: 2rem;
    position: relative;
    left: -15px;
    font-weight: 500;
    line-height: 1.25;
    color: #4a25aa;

    @media screen and (max-width: 400px) {
      font-size: 1.6rem;
    }
    @media screen and (max-width: 350px) {
      font-size: 1.35rem;
    }
  }
}
.stepper-accordion {
  width: calc(100% - 10vw);
  margin: 20px 5vw;
  display: flex;
  align-items: center;
  flex-flow: column;
}
.stepper-tab {
  display: flex;
  width: 100%;
  position: relative;
  &__number {
    min-width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #f2f2fc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-family: Jost;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.67;
    color: #282828;

    &.active {
      cursor: pointer;
      color: #ffffff;
      background-color: $green-color;
    }
  }
  &__content {
    font-family: Jost;
    font-weight: 500;
    line-height: 2.5;
    display: flex;
    flex-grow: 1;
    align-items: center;
    margin-left: 5px;
  }
  &__line {
    min-width: 4px;
    background-color: #f2f2fc;
    position: absolute;
    top: 31px;
    left: 50px;
    transition: all 0.75s linear;
    height: calc(100% - 26px);

    &.active {
      background-color: $green-color;
    }
    &.none {
      display: none;
    }
  }
}
.stepper-card {
  display: flex;
  flex-flow: column;
  margin-bottom: 15px;
  transition: all 0.75s linear;
  max-height: 31px;
  overflow: hidden;
  &.active {
    max-height: 1000px;
  }
  &__title {
    background-color: #f2f2fc ;
    margin-top: 4px;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 35px;
    color: #282828;
    border-radius: 16px 4px 4px 16px;
    height: 27px;
    position: relative;

    @media screen and (max-width: 468px) {
      font-size: 0.8rem;
      white-space: nowrap;
    }

    &.active {
      background-color: $primary-color;
      color: #ffffff;

      &::before {
        content: "";
        width: 12px;
        height: 12px;
        position: absolute;
        left: 6px;
        border-radius: 50%;
        background-color: $green-color;
      }
    }
  }
  &__form {
    border-radius: 4px;
    background-color: rgba(192, 190, 240, 0.2);
    margin-left: 10px;
    position: relative;
    width: calc(100% - 10px);

    &.bg-white {
      background-color: transparent;
    }
  }
}
</style>