<template>
  <div class="w-100">
    <form class="form-plan hidden-xs-only" @submit.prevent="$emit('nextStep')">
      <p class="back-button" @click="$emit('backStep')" />
      <p class="form-plan__title">Selecciona la cobertura deseada</p>
      <p class="form-plan__description">Utiliza nuestro simulador para ver el precio en distintos rangos de kilometraje.</p>
      <div class="form-plan__switch" :class="{ active: planType === 1 }">
        <div class="item" :class="{ active: planType === 0 }" @click="planType = 0">Amplia</div>
        <div class="item" :class="{ active: planType === 1 }" @click="planType = 1">Premium</div>
      </div>
      <div class="form-plan__bar">
        <div class="bar__label">
          <span
            v-for="(plan, i) in availablePlans"
            :key="i"
            :class="{ active: i <= selectedPlan }"
            :style="`left: ${plan.labelPos};`"
            @click="selectedPlan = i"
          >{{ plan.label }}</span>
        </div>
        <div class="bar">
          <div class="bar--active" :style="`width: ${activeBarWidth};`" />
          <div
            v-for="(position, i) in btnPositions"
            :key="i"
            class="bar--button"
            :class="{ active: i <= selectedPlan }"
            :style="`left: ${position};`"
            @click="selectedPlan = i"
          />
        </div>
        <div class="bar__price">
          <div 
            v-for="(plan, i) in availablePlans"
            :key="i"
            :class="{ active: i === selectedPlan }"
            class="bar__price__option"
            @click="selectedPlan = i"
          >
            <p class="price">${{ plan.price }}</p>
            <p class="concurremcy">al mes</p>
          </div>
        </div>
      </div>
      <p class="form-plan__speech">El primer mes pagas la tarifa mínima más tu costo de inscripción. Después solamente pagas lo que usas.</p>
      <div class="plan-table">
        <div class="plan-table__header">
          <span>Hasta 25% por buena conducción</span>
        </div>
        <div class="plan-table__trs ths">
          <div v-for="(header, i) in headers" :key="i" class="plan-table__trs__item">
            <p>{{ header }}</p>
          </div>
          <div class="plan-table__trs__item" />
        </div>
        <div class="plan-table__trs trs">
          <div v-for="(content, i) in types[planType]" :key="i" class="plan-table__trs__item">
            <p>{{ content }}</p>
          </div>
          <div class="plan-table__trs__item">
            <nuxt-link class="link-details" to="#">Ver más detalles</nuxt-link>
          </div>
        </div>
      </div>
      <button class="main_button">Contratar</button>
    </form>
    <form class="plans-mobile hidden-sm-and-up" @submit.prevent="$emit('nextStep')">
      <p class="back-button" @click="$emit('backStep')" />
      <h4 class="plans-mobile__title">
        Selecciona la cobertura deseada
      </h4>
      <p class="plans-mobile__description">
        Utiliza nuestro simulador para ver el precio en distintos rangos de kilometraje.
      </p>
      <div class="plans-mobile__switch" :class="{ active: planType === 1 }">
        <div class="item" :class="{ active: planType === 0 }" @click="planType = 0">Amplia</div>
        <div class="item" :class="{ active: planType === 1 }" @click="planType = 1">Premium</div>
      </div>
      <MobileChart :size="mobileChartWidth" :currentPlan="currentPlan" :selected-plan.sync="selectedPlan" />
      <p class="plans-mobile__speech">
        El primer mes pagas la tarifa mínima más tu costo de inscripción. Después solamente pagas lo que usas.
      </p>
      <div class="plans-mobile__label">
        Hasta 25% por buena conducción
      </div>
      <button class="main_button"> 
        Contratar
      </button>
      <div class="plans-mobile__table">
        <div v-for="(header, i) in headers" :key="i" class="row">
          <span class="header"> {{ header }} </span> 
          <span class="label"> {{ currentPlan.details[i] }} </span> 
        </div>
      </div>
      <div class="plans-mobile__detail-btn">
        Ver más detalles
      </div>
    </form>       
  </div>
</template>

<script>
import MobileChart from '~/components/MobileChart'
import { mapGetters } from 'vuex'
export default {
  components: { MobileChart },
  data: () => ({
    headers: ['Daños materiales', 'Responsabilidad civil hasta',
    'Robo total', 'Gastos médicos a ocupantes', 'Servicios de asistencia',
    'Asistencia legal y jurídica', 'Auto sustituto'],
    types: [
      ['Valor comercial deducible 5%', '$3,000,000',
        'Valor comercial deducible 10%', 'Hasta $300,000',
        'Asistencia vial y en viajes', 'Asistenca y defensa legal', '--'],
      ['Valor comercial deducible 3%', '$4,000,000',
        'Valor comercial deducible 5%', 'Hasta $300,000',
        'Asistencia vial y en viajes', 'Asistenca y defensa legal', 'Te prestamos un auto en caso de siniestro']],

    btnPositions: ['9px', 'calc(25% - 15px)', 'calc(50% - 15px)', 'calc(75% - 15px)', 'calc(100% - 15px)'],    
    selectedPlan: 0,
    planType: 0,
    windowWidth: window.innerHeight,
  }),
  mounted () {
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  computed: {
    ...mapGetters({ plans: 'quotation/getPlans' }),
    availablePlans() {
      const plans = []
      if(this.plans && this.plans.prices) {
        if(this.plans.prices['<300']) plans.push({label: 'menos de 300km', price: parseInt(this.plans.prices['<300']/1000) })
        if(this.plans.prices['300-600']) plans.push({label: '300km - 600km', price: parseInt(this.plans.prices['300-600']/1000) })
        if(this.plans.prices['600-1,000']) plans.push({label: '600km - 1,000km', price: parseInt(this.plans.prices['600-1,000']/1000) })
        if(this.plans.prices['1,000-1,500']) plans.push({label: '1,000km - 1,500km', price: parseInt(this.plans.prices['1,000-1,500']/1000) })
        if(this.plans.prices['>1,500']) plans.push({label: 'más de 1,500km', price: parseInt(this.plans.prices['>1,500']/1000) })
      }
      if (this.planType) {
        plans.forEach(p => { p.price = parseInt(p.price * 1.15) })
      }
      plans.forEach((p, i) => {
        const lastIndex = plans.length - 1
        if(plans.length > 1) {
          switch (i) {
            case 0: p.labelPos = '0px' 
              break
            case lastIndex: p.labelPos = 'calc(100% - 100px)' 
              break
            default: p.labelPos = `calc(${100*i/(plans.length - 1)}% - 65px)`
              break
          }
        } else {
          p.labelPos = '50% - 50px'
        }
      })
      return plans
    },
    currentPlan() {
      const plan = this.availablePlans.find((r, i )=> i === this.selectedPlan)
      plan.details = this.types[this.planType]
      return plan || {}
    },
    activeBarWidth() {
      if (this.selectedPlan === 0) {
        return '25px'
      }
      return `${this.selectedPlan*25}%`
    },
    mobileChartWidth() {
      return this.windowWidth > 370 ? 280 : 200
    }
  },
  methods: {
    // whenever the document is resized, re-set the 'clientWidth' variable
    onResize () {
        this.windowWidth = window.innerWidth
    }
  }
}
</script>

<style lang="scss" scoped>
.form-plan {

  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 20px 0px;
  margin-bottom: 70px;
  position: relative;

  &__title {
    font-size: 1.5rem;
    font-weight: 500;
    color: $primary-color;
    margin-bottom: 17px;
    text-align: center;
  }
  &__description {
    font-size: 1rem;
    line-height: 23px;
    color: #282828;
    margin-bottom: 27px;
  }
  &__switch {
    border: 1px solid $secondary-color;
    box-sizing: border-box;
    border-radius: 38px;
    width: 252px;
    height: 42px;
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 10px;
    
    &::after {
      content: "";
      background-color: $secondary-color;
      position: absolute;
      width: 50%;
      height: 100%;
      border-radius: 38px;
      transition: all 0.35s ease;
    }
    &.active::after {
        transform: translateX(100%);
    }
    .item {
      color: $secondary-color;
      flex: 1 1 0%;
      text-align: center;
      transition: all 0.5s ease;
      cursor: pointer;
      z-index: 50;
    }
    .item.active {
      color: #ffffff;
      border-radius: 38px;
    }
  }
  &__bar {
    max-width: 950px;
    width: calc(100% - 40px);
    margin: 20px;
    position: relative;

    .bar__label {
      color: #26D07C;
      height: 24px;
      width: 100%;
      border-radius: 24px;
      position: relative;
      span {
        position: absolute;
        white-space: nowrap;
        cursor: pointer;
        &.active {
          color: $primary-color;
        }
      }
    }
    .bar {
      background-color: #26D07C;
      height: 24px;
      width: 100%;
      border-radius: 24px;
      position: relative;
      margin-bottom: 10px;
      &--button {
          position: absolute;
          content: "";
          background: $primary-color;
          width: 6px;
          height: 6px;
          border-radius: 6px;
          top: 9px;
          cursor: pointer;
          z-index: 30;

          &.active {
            background-color: #26D07C;
          }
      }
      &--active {
        height: 100%;
        background: $primary-color;
        border-radius: 24px;
        transition: all 0.5s ease;
        position: relative;

        &::after {
          position: absolute;
          right: 9px;
          content: "";
          background-color: #26D07C;
          width: 6px;
          height: 6px;
          border-radius: 6px;
          top: 9px;
        }
      }
    }
    .bar__price {
      height: 184px;
      width: 100%;
      display: flex;

      &__option {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        flex: 1 1 0%;
        background: transparent;
        cursor: pointer;
        transition: all 1s ease;
        color: rgba(40, 40, 40, 0.21);

        .price {
          font-weight: 600;
          font-size: 2.5rem;
        }
        .concurrency {
          font-size: 1rem;
          line-height: 23px;
        }

        &.active {
          color: $primary-color;
          background: #F6F6F6;
          border-radius: 4px;
        }
      }
    }
  }
  &__speech {
    line-height: 23px;
    color: $primary-color;
  }
}
.plan-table {
  max-width: 950px;
  width: calc(100% - 40px);
  margin: 20px;
  display: grid;
  grid-template-areas:  'hdr hdr' 'ths trs';
  grid-template-columns: 223px 1fr;
  column-gap: 17px;
  row-gap: 11px;

  &__header {
    height: 31px;
    background-color: $primary-color;
    text-align: center;
    color: #F6F6F6;
    line-height: 29px;
    font-weight: 500;
    font-size: 1rem;
    grid-area: hdr;
  }
  .ths {
    grid-area: ths;
    width: 220px;
  }
  .trs {
    grid-area: trs;
  }
  &__trs {
    width: 100%;
    background-color: #F6F6F6;
    color: #282828;
    text-align: center;
    font-weight: 500;
    &.ths {
      text-align: left;
      color: $primary-color;

      .plan-table__trs__item {
        justify-content: flex-start;

        p {
          padding-left: 10px;
        }
      }
    }
    &__item {
      height: 41px;
      display: flex;
      justify-content: center;
      align-items: center;

      &:nth-child(odd) {
        background-color: rgba($color: $primary-color, $alpha: 0.1);
      }
      &:last-child {
        height: 58px;
      }
      .link-details {
        font-size: 16px;
        line-height: 23px;
        text-decoration-line: underline;
        color: #F20C49;
      }
    }
  }
}
.plans-mobile {
  display: flex;
  flex-flow: column;
  align-items: center;
  position: relative;
  width: calc(100% - 20px);
  margin: 27px 10px;

  &__title {
    font-size: 1.25rem;
    font-weight: normal;
    line-height: 29px;
    color: $primary-color;
    margin-bottom: 7px;
    text-align: center;
  }
  &__description {
    font-size: 1rem;
    text-align: center;
    line-height: 23px;
    color: #282828;
    margin-bottom: 26px;
  }
  &__switch {
    border: 1px solid $secondary-color;
    box-sizing: border-box;
    border-radius: 38px;
    width: 252px;
    height: 42px;
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 20px;
    
    &::after {
      content: "";
      background-color: $secondary-color;
      position: absolute;
      width: 50%;
      height: 100%;
      border-radius: 38px;
      transition: all 0.35s ease;
    }
    &.active::after {
        transform: translateX(100%);
    }
    .item {
      color: $secondary-color;
      flex: 1 1 0%;
      text-align: center;
      transition: all 0.5s ease;
      cursor: pointer;
      z-index: 50;
    }
    .item.active {
      color: #ffffff;
      border-radius: 38px;
    }
  }
  &__speech {
    font-weight: normal;
    font-size: 1rem;
    line-height: 23px;
    text-align: center;
    color: $primary-color;
    margin-bottom: 10px;
  }
  &__label {
    background-color: rgba($color: $primary-color, $alpha: 1);
    color: #ffffff;
    line-height: 23px;
    width: 100%;
    text-align: center;
    margin-bottom: 17px;
  }
  .main_button {
    width: 100%;
    max-width: 375px;
    margin-bottom: 29px;
  }
  &__table {
    width: 100%;
    display: flex;
    flex-flow: column;
    .row  {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      border-bottom: 0.5px solid #7879F1;
      line-height: 20px;
      padding-top: 5px;

      @media screen and (max-width: 414px) {
        font-size: 12px;
      }
      .header {
        color: $primary-color;
      }
      .label {
        text-align: right;
      }
    }
  }
  &__detail-btn {
    font-size: 1rem;
    line-height: 23px;
    text-decoration-line: underline;
    text-align: center;
    color: #F20C49;
    margin-top: 21px;
    margin-bottom: 100px;
  }
}
.back-button {
  position: absolute;
  top: 3px;
  left: 20px;
  color: $primary-color;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    top: 3px;
  }
  &::before {
    content: "< Volver";
    @media screen and (max-width: 480px) {
      content: "<";
    }
  }
}
</style>
