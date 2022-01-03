<template>
  <div class="mobile-chart">
    <div class="mobile-chart__title">
      <p class="price">
        <span class="amount">${{ currentPlan.price }}</span>
        <span class="concurrency">/mes</span>
      </p>
      <p class="kms">
        <span>{{ currentPlan.label }}</span>
      </p>
    </div>
    <div class="mobile-chart__controller">
      <div class="minus" @click="backPlan"/>
      <svg :height="totalHeight" :width="size" :viewBox="`0 ${height - initBorderLength} ${size} ${totalHeight}`">
      <!-- contenedor circulo -->
      <circle :r="height" :cx="height" :cy="height" fill="#26D07C" />
      <!-- barra -->
      <circle :r="height/2" :cx="height" :cy="height"
        stroke="#4A25AA"
        :stroke-width="height"
        fill="transparent"
        class="transition-effect"
        :stroke-dasharray="`calc(${currentPercentage}  * ${total} / 100) ${total}`"
        :transform="`scale(-1, 1) translate(-${size}, 0)`"
      />
      <!-- borde blanco de la barra -->
      <rect :width="size" :height="initBorderLength" fill="white" :y="height - initBorderLength" />  
      <!-- centro de la barra -->
      <circle :r="widthBar" :cx="height" :cy="height" fill="white" />
      <!-- fin borde de contenedor -->
      <circle 
        :r="circlesRadius"
        :cx="circlesRadius"
        :cy="height"
        fill="#26D07C"
        class="transition-effect"
        :transform="`rotate(-180 ${height} ${height})`"
      />
      <!-- inicio borde de la barra -->
      <circle 
        :r="circlesRadius"
        :cx="circlesRadius"
        :cy="height"
        fill="#4A25AA"
        class="transition-effect"
        :transform="`rotate(0 ${height} ${height})`"
      />
      <!-- fin borde de la barra -->
      <circle 
        :r="circlesRadius"
        :cx="circlesRadius"
        :cy="height"
        fill="#4A25AA"
        :transform="`rotate(${lastBorderPercentage} ${height} ${height})`"
      />
      <!-- puntos clicks -->
      <circle 
        v-for="(point,i) in points"
        :key="i"
        :r="8"
        :cx="circlesRadius"
        :cy="height"
        :fill="i <= currentStep? '#26D07C': '#4A25AA'"
        :transform="`rotate(${point} ${height} ${height})`"
        @click="currentStep = i"
        class="point"
      />
      </svg>
      <div class="plus" @click="nextPlan" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 200  
    },
    currentPlan: {
      type: Object,
      required: true
    },
    selectedPlan: {
      type: Number,
      required: true  
    }
  },
  data: () => ({
    points: ['0','-45','-90','-135','-180'],
    points2: ['0','-48','-90','-135','-179'],
    barPercentages: [0, 12.5, 25, 37.5, 50],
    initBorderLength: 35,
  }),
  computed: {
    currentStep: {
      set(newVal){
        this.$emit('update:selectedPlan',newVal)
      },
      get() {
        return this.selectedPlan
      }
    },
    totalHeight() {
      return this.height + this.initBorderLength
    },
    height() {
      return this.size/2
    },
    total() {
      //r * PI
      return this.height * 3.1416
    },
    currentPercentage() {
      return this.barPercentages[this.currentStep] || 0
    },
    lastBorderPercentage() {
      return this.points[this.currentStep] || 0
    },
    widthBar() {
      //radio del circulo central
      return this.height/1.55
    },
    circlesSize() {
      return this.height - this.widthBar
    },
    circlesRadius() {
      return this.circlesSize/2
    }
  },
  methods: {
    backPlan() {
      if (this.currentStep > 0) {
        this.currentStep -= 1
      }
    },
    nextPlan() {
      if (this.currentStep < 5) {
        this.currentStep += 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-chart {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 20px 50px 0px;

  &__controller {
    display: flex;

    .minus::before, .plus::after {
      font-size: 2.5rem;
      font-weight: 700;
      cursor: pointer;
      color: $primary-color;
    }
    .minus::before {
      padding-right: 10px;
      content: "\2212";
    }
    .plus::after {
      padding-left: 10px;
      content: "+"; 
    }
  }

  &__title {
    position: absolute;
    .price {
      color: $primary-color;
      display: flex;
      .amount {
        font-weight: 600;
        font-size: 40px;
        line-height: 32px;
      }
      .concurrency {
        font-weight: normal;
        font-size: 16px;
      }
    }
    .kms {
      text-align: center;
      font-weight: 500;
      font-size: 1rem;
      line-height: 40px;
      color: #26D07C;
    }
  }
}
.point {
  cursor: pointer;
}
.transition-effect {
  transition: all 0.35s linear;
}
</style>