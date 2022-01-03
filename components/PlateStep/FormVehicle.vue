<template>
  <el-form :model="dynamicValidateForm" ref="formVehicle" class="form-vehicle" @submit.native.prevent="submitForm()">
    <p class="form-vehicle__title">{{ title || 'Por favor ingresa los datos de tu vehículo' }}</p>
    <div class="form-vehicle__inputs">
      <div class="form-group__inputs">
        <div class="form-group">
          <label for="Año">Año</label>
          <el-form-item class="form-vehicle__input" :rules="[{ required: true, message: 'Porfavor ingrese un año', trigger: ['blur', 'change'] }]" prop="year">
            <el-date-picker
              v-model="year"
              type="year"
              :picker-options="pickerOptions"
              value-format="yyyy"
              autofocus>
            </el-date-picker>
          </el-form-item>
        </div>
        <div class="form-group">
          <label for="Marca">Marca</label>
          <el-form-item class="form-vehicle__input" :rules="[{ required: true, message: 'Porfavor ingrese una marca', trigger: ['blur', 'change'] }]" prop="brand">
            <el-select v-model="brand" placeholder="" clearable filterable  @change="enableModels">
              <el-option
                v-for="(item, i) in brands"
                :key="i"
                :label="item.name"
                :value="item.id"
                >
              </el-option>
            </el-select>
          </el-form-item>
        </div>
      </div>
      <div class="form-group">
        <label for="Modelo">Modelo</label>
          <el-form-item class="form-vehicle__input" :rules="[{ required: true, message: 'Porfavor ingrese un modelo', trigger: ['blur', 'change'] }]" prop="model">
            <el-select :disabled="!models.length" v-model="model" placeholder="" clearable filterable  @change="enableVersions()">
              <el-option
                v-for="(item, i) in models"
                :key="i"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
      </div>
      <div class="form-group">
        <label for="Version">Versión</label>
        <el-form-item class="form-vehicle__input" :rules="[{ required: true, message: 'Porfavor ingrese una versión', trigger: ['blur', 'change'] }]" prop="version">
          <el-select :disabled="!versions.length" v-model="version" placeholder="" clearable filterable>
            <el-option
              v-for="(item, i) in versions"
              :key="i"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="form-group">
        <label for="Estacionamiento">¿Estacionamiento privado?</label>
        <el-form-item class="form-driver__input" :rules="[{ required: true, message: 'Porfavor ingrese un estacionamiento', trigger: ['blur', 'change'] }]" prop="parking">
          <el-radio-group v-model="parking">
            <el-radio label="Si"></el-radio>
            <el-radio label="No"></el-radio>
          </el-radio-group>
        </el-form-item>
      </div>

    </div>
    <button class="main_button">
      Siguiente
    </button>
  </el-form>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  props: {
    title: {
      type: String,
      default: '',
    }
  },
  data: () => ({
    pickerOptions: {
      disabledDate(time) {
        const aux = new Date();
        const year = aux.getFullYear();
        const month = aux.getMonth();
        const day = aux.getDate();
        const currentDate = new Date(year + 1, month, day);
        return time.getTime() > currentDate;
      },
    }
  }),
  watch: {
    year() {
      this.enableModels()
      this.enableVersions()
    },
  },
  computed: {
    ...mapGetters({
      quotation: 'quotation/getQuotation',
      brands: 'quotation/getBrands',
      models: 'quotation/getModels',
      versions: 'quotation/getVersions',
    }),
    year: {
      get() { return this.quotation.year },
      set(newVal) {
        this.setYear(newVal)
      }
    },
    brand: {
      get() { return this.quotation.brand },
      set(newVal) {
        this.setBrand(newVal)
      }
    },
    model: {
      get() { return this.quotation.model },
      set(newVal) { 
        this.setModel(newVal)
      }
    },
    version: {
      get() { return this.quotation.version },
      set(newVal) { 
        this.setVersion(newVal)
      }
    },
    parking: {
      get() { return this.quotation.parking },
      set(newVal) { 
        this.setParking(newVal)
      }
    },
    dynamicValidateForm() {
      return {
        brand: this.brand,
        year: this.year,
        version: this.version,
        model: this.model,
        parking: this.parking,
      }
    }
  },
  async created() {
    await this.getBrands()
  },
  methods: {
    ...mapMutations({ setYear: 'quotation/setYear',
        setBrand: 'quotation/setBrand',
        setModel: 'quotation/setModel',
        setVersion: 'quotation/setVersion',
        setParking : 'quotation/setParking',
    }),
    ...mapActions({
        getBrands: 'quotation/getBrands',
        getModels: 'quotation/getModels',
        getVersions: 'quotation/getVersions'
    }),
    submitForm() {
      this.$refs['formVehicle'].validate((valid) => {
        if (valid) {
          this.$emit('nextStep')
        }
      });
    },
    async enableModels() {
      if (this.year && this.brand) {
        this.model = ''
        this.version = ''
        this.$nuxt.$loading.start('Cargando modelos...')
        const models = await this.getModels({ year: this.year, brandId: this.brand })
        if (models.length === 0) {
          this.$message({
            message: 'Error, No se encontraron modelos para esta combinación, porfavor seleccione otro año o marca.',
            type: 'warning',
            duration: 5000,
          });
        }
        this.$nuxt.$loading.finish()
      }
    },
    async enableVersions() {
      if (this.year && this.model) {
        this.version = ''
        this.$nuxt.$loading.start('Cargando versiones...')
        const versions = await this.getVersions({ year: this.year, modelId: this.model })
        if (versions.length === 0) {
          this.$message({
            message: 'Error, No se encontraron versiones para esta combinación, porfavor seleccione otro año o modelo.',
            type: 'warning',
            duration: 5000,
          });
        }
        this.$nuxt.$loading.finish()
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.form-vehicle {
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
.form-group__inputs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
}
</style>
