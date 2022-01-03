export const state = () => ({
  quotation: {
    plate: '',
    year: '',
    brand: '',
    model: '',
    version: '',
    parking: '',
    planType: '',
    series_number: '',
    licensePlateId: '',
    birthDate: '',
    gender: '',
    postalCode: '',
    email: '',
  },
  lastQuotationId: '',
  brands: [],
  models: [],
  versions: [],
  plans: null
})

export const getters = {
  getQuotation: store => store.quotation,
  getBrands: store => store.brands,
  getModels: store => store.models,
  getVersions: store => store.versions,
  getPlans: store => store.plans
}
export const mutations = {
  setQuotation(state, quotation) {
    state.quotation = quotation
  },
  setPlate(state, plate) {
    state.quotation.plate = plate
  },
  setYear(state, year) {
    state.quotation.year = year
  },
  setBrand(state, brand) {
    state.quotation.brand = brand
  },
  setModel(state, model) {
    state.quotation.model = model
  },
  setVersion(state, version) {
    state.quotation.version = version
  },
  setParking(state, parking) {
    state.quotation.parking = parking
  },
  setPlanType(state, planType) {
    state.quotation.planType = planType
  },
  setBirthDate(state, payload) {
    state.quotation.birthDate = payload
  },
  setGender(state, payload) {
    state.quotation.gender = payload
  },
  setCode(state, payload) {
    state.quotation.postalCode = payload
  },
  setEmail(state, payload) {
    state.quotation.email = payload
  },
  setLicensePlate(state, payload) {
    state.quotation.licensePlateId = payload.licensePlateId
    state.quotation.year = payload.year
    state.quotation.series_number = payload.vin
    if (payload.brands && payload.brands[0]) {
      state.quotation.brand = payload.brands[0]._id
    }
  },
  setLastQuotationId(state, payload) {
    state.lastQuotationId = payload
  },
  setPlans(state, payload) {
    state.plans = payload
  },
  clearDataByStep(state, payload) {
    if (payload === 1) {
        state.quotation.year = ''
        state.quotation.brand = ''
        state.quotation.model = ''
        state.quotation.version = ''
        state.quotation.parking = ''
        state.quotation.series_number = ''
        state.quotation.licensePlateId = ''
    }
    if ([1,2].includes(payload)) {
      state.quotation.birthDate = ''
      state.quotation.gender = ''
      state.quotation.postalCode = ''
      state.quotation.email = ''
    }
  },
  setBrands(state, payload) {
    state.brands = payload.sort((br1,br2) => br1.name.localeCompare(br2.name))
  },
  setModels(state, payload) {
    state.models = payload.sort((mdl1,mdl2) => mdl1.name.localeCompare(mdl2.name))
    state.models = payload
  },
  setVersions(state, payload) {
    state.versions = payload.sort((vr1,vr2) => vr1.name.localeCompare(vr2.name))
  },
}

export const actions = {
  async getBrands({ commit }) {
    try {
      commit('setBrands', [])
      const brands = await this.$axios.$get('vehicle/brands')
      commit('setBrands', brands)
      return Promise.resolve(brands)
    } catch (error) {
      console.log(error);
      return Promise.resolve([])
    }
  },
  async getModels({ commit },{ year, brandId }) {
    try {
      commit('setModels', [])
      commit('setVersions', [])
      const models = await this.$axios.$get(`vehicle/models/${brandId}/${year}`)
      commit('setModels', models)
      return Promise.resolve(models)
    } catch (error) {
      console.log(error);
      return Promise.resolve([])
    }
  },
  async getVersions({ commit },{ year, modelId }) {
    try {
      commit('setVersions', [])
      const versions = await this.$axios.$get(`vehicle/versions/${modelId}/${year}`)
      commit('setVersions', versions)
      return Promise.resolve(versions)
    } catch (error) {
      console.log(error);
      return Promise.resolve([])
    }
  },
  async getLicensePlate({ commit }, plate) {
    try {
      const data = await this.$axios.$get(`vehicle/licenseplate/${plate}`)
      commit('setLicensePlate', data)
      return Promise.resolve(data)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  async saveVehicle({ state, commit, dispatch }) {
    try {
      const payload = {
        has_garage: state.quotation.parking === 'Si',
        email: state.quotation.email,
        dateOfBirth: state.quotation.birthDate,
        gender: state.quotation.gender === 'F' ? 'FEMALE': 'MALE',
        postalCode: state.quotation.postalCode,
        versionId: state.quotation.version
      }
      payload.licensePlateId = state.quotation.licensePlateId || undefined
      payload.series_number = state.quotation.series_number || undefined
      const data = await this.$axios.$post('vehicle/', payload)
      commit('setLastQuotationId', data.id)
      await dispatch('getPlans', data.id)
      return Promise.resolve(data)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  async getPlans({ commit }, payload) {
    try {
      const data = await this.$axios.$post('quotation/', {vehicleId: payload})
      commit('setPlans', data)
      return Promise.resolve(data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}