<template>
  <el-form :model="dynamicValidateForm" ref="formPlate" class="form-plate" @submit.native.prevent="submitForm()">
      <p class="form-plate__title">Cotiza el seguro que te mereces en menos de 5 minutos</p>
        <el-form-item class="form-plate__input" :rules="[{ required: true, message: 'Porfavor ingrese una placa', trigger: ['blur', 'change'] }]" prop="plate">
          <el-input placeholder="Ingrese su placa" v-model="plate" clearable autofocus></el-input>
        </el-form-item>
      <p class="form-plate__link hidden-sm-and-up" @click="$emit('changeSteps')">o ingresa con tus datos de vehículo</p>
      <button class="main_button">
        Siguiente
      </button>
    <p class="form-plate__link  hidden-xs-only" @click="$emit('changeSteps')">o ingresa con tus datos de vehículo</p>
  </el-form>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data: () => ({
  }),
  computed: {
    ...mapGetters({ quotation: 'quotation/getQuotation' }),
    plate: {
      get() { return this.quotation.plate },
      set(newVal) { 
        const value = newVal.toUpperCase()
        if(value.length <= 7) {
          this.setPlate(value)
        }
      }
    },
    dynamicValidateForm() {
      return {
        plate: this.plate,
      }
    }
  },
  methods: {
    ...mapMutations({ setPlate: 'quotation/setPlate' }),
    ...mapActions({ getLicensePlate: 'quotation/getLicensePlate' }),
    submitForm() {
      this.$refs['formPlate'].validate(async(valid) => {
        if (valid) {
          try {
            this.$nuxt.$loading.start('Obteniendo datos de la placa...')
            await this.getLicensePlate(this.plate)
            this.$emit('nextStep')
          } catch (error) {
            console.log(error)
            if (error.response && error.response.status === 400) {
              this.$message({
                message: 'Error, placa no encontrada, intente ingresando los datos de su vehiculo.',
                type: 'warning'
              });  
            } else {
              this.$message({
                message: 'Error, hubo un error al intentar buscar la placa intente más tarde.',
                type: 'warning'
              });
            }
          } finally {
            this.$nuxt.$loading.finish()
          }
        }
      });
    },
  },
}
</script>

<style lang="scss" scoped>
.form-plate {
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 20px 0px;
  &__title {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.67;
    color: $primary-color;
    margin-bottom: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
      color: #282828;
      text-align: left;
      font-size: 1rem;
      margin: 10px 7vw;
    }
  }
  &__input {
    width: fit-content;
    margin-bottom: 58px;

    @media screen and (max-width: 768px) {
      align-self: flex-start;
      margin-left: 7vw;
      margin-bottom: 10px;
    }
  }
  .main_button {
    margin-bottom: 28px;

    @media screen and (max-width: 768px) {
      align-self: flex-start;
      margin-left: 7vw;
      margin-bottom: 10px;
    }
  }
  &__link {
    font-family: Jost;
    font-size: 1rem;
    color: $secondary-color;
    cursor: pointer;
    text-align: center;
  }
}
</style>
