<template>
  <el-form :model="dynamicValidateForm" ref="formOwner" class="form-owner" @submit.native.prevent="submitForm()">
    <p class="form-owner__title">{{ title }}</p>
    <div class="form-owner__inputs">
      <div class="form-group">
          <label for="form-date">Fecha de nacimiento</label>
          <el-date-picker
              v-model="birthDate"
              @focus="initDatePicker"
              class="form-owner__input"
              popper-class="form-owner__datepícker"
              :default-value="defaultDate"
              :picker-options="pickerOptions"
              type="date"
              autofocus>
          </el-date-picker>
      </div>
      <div class="form-group">
        <label for="Modelo">Género</label>
        <el-form-item class="form-owner__input" :rules="[{ required: true, message: 'Porfavor ingrese un género', trigger: ['blur'] }]" prop="gender">
          <el-radio-group v-model="gender">
            <el-radio label="F"></el-radio>
            <el-radio label="M"></el-radio>
          </el-radio-group>
        </el-form-item>
      </div>
      <div class="form-group">
        <label for="Version">Código postal</label>
        <el-form-item class="form-owner__input" :rules="[{ required: true, message: 'Porfavor ingrese un codigo póstal', trigger: ['blur', 'change'] },
          { min: 5, message: 'Código postal inválido', trigger: 'blur' }]" prop="postalCode">
          <el-input class="form-driver__input" v-model="postalCode" clearable maxlength="5" show-word-limit></el-input>
        </el-form-item> 
      </div>
      <div class="form-group">
        <label for="Estacionamiento">Correo electrónico</label>
        <el-form-item class="form-owner__input" :rules="[{ required: true, message: 'Porfavor ingrese un email', trigger: 'blur' },
         { type: 'email', message: 'Porfavor ingrese un email válido', trigger: ['blur', 'change']}]" prop="email" clearable>
          <el-input class="form-driver__input" v-model="email"></el-input>
        </el-form-item>
      </div>
    </div>
    <button class="main_button">
      Siguiente
    </button>
  </el-form>
</template>
<script>
import { mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    pickerOptions: {
      disabledDate(time) {
        const aux = new Date();
        const year = aux.getFullYear();
        const month = aux.getMonth();
        const day = aux.getDate();
        const currentDate = new Date(year - 18, month, day);
        return time.getTime() > currentDate;
      },
    },
    defaultDate: new Date() 
  }),
  computed: {
    ...mapGetters({ owner: 'quotation/getQuotation' }),
    birthDate: {
      get() { return this.owner.birthDate },
      set(newVal) {
        this.setBirthDate(newVal)
      }
    },
    gender: {
      get() { return this.owner.gender },
      set(newVal) {
        this.setGender(newVal)
      }
    },
    postalCode: {
      get() { return this.owner.postalCode },
      set(newVal) {
        if(/^\d{0,5}$/.test(newVal)) {
          this.setCode(newVal)
        }
      }
    },
    email: {
      get() { return this.owner.email },
      set(newVal) { 
        this.setEmail(newVal)
      }
    },
    dynamicValidateForm() {
      return {
        email: this.email,
        postalCode: this.postalCode,
        gender: this.gender,
      }
    }
  },
  created() {
    // modifies initial year component, trick 
      const aux = new Date()
      const year = aux.getFullYear()
      const month = aux.getMonth()
      const day = aux.getDate()
      this.defaultDate = new Date(year - 18, month, day)
  },
  methods: {
    ...mapMutations({ 
        setBirthDate: 'quotation/setBirthDate',
        setGender: 'quotation/setGender',
        setCode: 'quotation/setCode',
        setEmail: 'quotation/setEmail',
    }),
    ...mapActions({ 
        saveVehicle: 'quotation/saveVehicle',
    }),
    submitForm() {
      this.$refs['formOwner'].validate(async (valid) => {
        if (!this.birthDate) {
          this.$message({
            message: 'La fecha de nacimiento es requerida.',
            type: 'warning'
          });
        }
        if (valid && this.birthDate) {
          try {
            this.$nuxt.$loading.start('Cargando, espere porfavor...')
            await this.saveVehicle()
            this.$nuxt.$loading.finish()
            this.$emit('nextStep')
          } catch (error) {
            console.log(error)
            this.$message({
              message: 'Error, hubo un error por favor intente más tarde.',
              type: 'warning'
            });
          } finally {
            this.$nuxt.$loading.finish()
          }
        }
      });
    },
    initDatePicker() {
      setTimeout(() => {
        const yearBtn = document.querySelector('.form-owner__datepícker .el-date-picker__header-label')
        if (yearBtn) {
          yearBtn.click()
        }
      }
      ,50)
    }
  },
}
</script>

<style lang="scss" scoped>
.form-owner {
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
    margin-bottom: 21px;
    text-align: center;

    @media screen and (max-width: 768px) {
      color: #282828;
      text-align: left;
      font-size: 1rem;
      margin: 0px 7vw;
    }
  }
  &__inputs {
    display: grid;
    grid-template-columns: repeat(2, 247px);
    
    @media screen and (max-width: 768px) {
      grid-template-columns: minmax(140px, 1fr);
      grid-row-gap: 0px;
      row-gap: 0px;
      margin: 10px 7vw;
    }
    column-gap: 20px;
    row-gap: 23px;
    margin-bottom: 43.5px;
  }
  .main_button {
    margin-bottom: 28px;

    @media screen and (max-width: 768px) {
      align-self: flex-start;
      margin-left: 7vw;
    }
  }
}
.form-date {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
}
</style>
